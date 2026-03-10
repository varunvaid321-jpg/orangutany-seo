# Orangutany Guide (guide.orangutany.com) — Claude Code Guidelines

## Project Overview
Static SEO site for mushroom species identification. Next.js static export, deployed to Cloudflare Pages via wrangler. Currently 131 species pages.

## Tech Stack
- **Framework**: Next.js (App Router, static export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deploy**: Cloudflare Pages (`npx wrangler pages deploy out --project-name orangutany-guide`)
- **Data**: TypeScript files in `data/species/`, registered in `data/species/index.ts`

## Git Workflow
- All changes via PR — never push directly to main
- Batch related changes into one PR

## Key Files
- `data/species/*.ts` — Species data (SpeciesRecord type from `lib/types.ts`)
- `data/species/index.ts` — Species registry (imports + allSpecies array)
- `data/maps/map-manifest.json` — Distribution map validation manifest
- `data/images/card-image-index.json` — Card image selection for grid
- `app/mushrooms/[slug]/page.tsx` — Species page template
- `app/sitemap.ts` — Dynamic sitemap from allSpecies
- `docs/DESIGN_LOCKS.md` — Locked design decisions and quality checklist
- `scripts/curated-repair.py` — Approved map generator

## MANDATORY: After Adding New Species — Regenerate Lookup
After adding or modifying species in the guide database, you MUST regenerate the species lookup used by the main app (orangutany.com) for scan result linking:
```
/Users/varunvaid/amushroom/scripts/regenerate-species-lookup.sh
```
Then commit the updated `species-lookup.json` in the amushroom repo. Also add a story entry for the new species in `mushroom-stories.json` (curated fun fact shown as "Did You Know?" in scan results). Commit both files via PR. Skipping this means new species won't appear as guide links, show look-alike images, or display fun facts in scan results.

## MANDATORY: Species Page Quality Gate

**Before showing ANY new or modified species page to the user on localhost, you MUST complete every check below. No exceptions. Do not skip checks because "it's probably fine." These rules exist because every single one of these bugs has shipped to production.**

### Images (VIEW every file — size checks are NOT enough)
1. Open and visually inspect every image — confirm it's a real photograph of the correct species
2. Reject: sketches/illustrations (Bresadola, Vittadini, Doerstling), cartoons, icon sheets, book covers, frog feet, flowers, wrong species, microscopy/spore images, phylogenetic tree diagrams, cladograms, scientific charts/graphs, spore prints as sole subject
3. Hero image: must be a real photograph showing the whole mushroom in field or hand — no microscopy, no diagrams, no lab images, no illustrations. Mushroom must be centered and prominent, not tiny in a corner of foliage
4. No duplicates between hero and look-alike images
5. **No near-duplicate photos** — if two images show the same angle, same specimen, or same composition, keep only the better one. Every gallery photo must show something visually distinct (different angle, different specimen, different stage, cross-section, habitat context, usage/dye, etc.)
6. **Reject bad-quality Wikimedia photos** — common problem authors: "Strobilomyces" (often low-quality or overly similar shots). Always preview downloaded images before including. If the photo looks like a slightly different crop of another photo in the gallery, drop it.
7. **Use any resource for best pics** — Wikimedia Commons, iNaturalist (CC-licensed research-grade), Mushroom Observer. Quality over quantity. 4 great photos beats 6 mediocre ones.
8. **Independent agent image review (MANDATORY)** — Before showing the page to the user, launch a separate agent to independently verify every image meets quality standards: real photograph (not illustration), correct species, no near-duplicates, technically meaningful (each photo shows something distinct — different angle, life stage, cross-section, habitat, or use case). The reviewing agent must visually open and inspect each image file. No image passes without this independent check.
9. No scientific figure labels (A, B, C, D) burned into photos
10. If look-alike species exists in DB, verify its hero auto-loads correctly. If not in DB, a distinct downloaded photo must exist

### External Links
7. Verify EVERY iNaturalist taxon ID via API: `https://api.inaturalist.org/v1/taxa?q=NAME&rank=species` — AI-generated IDs are wrong >80% of the time
8. Verify all Wikipedia/MushroomExpert links resolve (no 404s)
9. No links to non-fungi organisms (flowers, butterflies, snails)

### Cross-Linking
10. Look-alike slugs only reference species that exist in index.ts
11. Add bidirectional cross-links: if A lists B as look-alike, check if B should list A
12. All slugs resolve via getSpeciesBySlug()

### Content
13. No fabricated stories (specific unverifiable people, exact Reddit upvote counts, "viral" claims)
14. No condescending language ("only a beginner would")
15. Correct current taxonomy and naming
16. No overclaimed medicinal properties — "studied for" not "cures"

### Data Completeness
17. 15+ SEO queries including "X vs Y" look-alike comparisons
18. 5 stories with verifiable sources, 5 fun facts
19. Correct edibility category
20. GBIF key verified via API
21. Species in index.ts (import + array entry)

### Distribution Map
22. Map file exists, manifest entry has approved=true and renderingApproved=true
23. Map file > 130KB (131KB = basemap only = no dots)
24. **Visually open and inspect the map image** — verify dots are on land (not ocean), dots match known species range (e.g., European species shouldn't show dots only in South America), and overall distribution looks plausible

### Build & Render
25. `npm run build` passes
26. Visit the actual localhost URL — page renders
27. All gallery images display
28. "Explore More Species" cards show real photos

## Image Sourcing
- Source: Wikimedia Commons API (`commons.wikimedia.org/w/api.php`)
- Only CC-licensed or Public Domain photos
- Hero minimum 300KB, gallery minimum 60KB
- Always update attribution (author, license, sourceUrl) in the data file when changing images

## Distribution Maps
- Generated via GBIF tile API composite onto basemap — see docs/DESIGN_LOCKS.md for exact method
- NEVER use matplotlib scatter dots
- SRS: EPSG:4326, zoom 0, style orange.marker

## Deploy Command
```
CLOUDFLARE_ACCOUNT_ID=e03e2882012ddf881ecf0753cf8a7c92 CLOUDFLARE_API_KEY=c2d4f6647e67eadcbd5e74d88f68469eca5b1 CLOUDFLARE_EMAIL=vvaid365@icloud.com npx wrangler pages deploy out --project-name orangutany-guide
```
