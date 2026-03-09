# Design Locks — Orangutany Guide Site

These are locked design decisions. Do NOT change without explicit authorization.

---

## Distribution Maps

### Basemap
- **File**: `public/images/species/_basemap.png`
- **Source**: Natural Earth 110m admin-0 countries, rendered with matplotlib
- **Projection**: Equirectangular (PlateCarree), 2048×1024px
- **Colors**: land `#2a2a2a`, ocean/background `#0d0d0d`
- **CRITICAL**: This is a true equirectangular raster. Do NOT replace with GBIF `tile.gbif.org/omt` tiles — those use Mercator rendering and misalign with occurrence dots.
- **Regeneration script**: `scripts/regen-basemap.py`

### Occurrence Dot Style (LOCKED — this is the approved visual style)
- **Method**: GBIF tile API composite (NOT matplotlib scatter)
- **GBIF API**: `https://api.gbif.org/v2/map/occurrence/density/{z}/{x}/{y}@2x.png`
- **Style**: `orange.marker` — produces large salmon/peach filled circles
- **SRS**: `EPSG:4326` (matches equirectangular basemap — no misalignment)
- **Zoom**: 0 (NOT 1 — zoom 1 is a 4x2 grid in EPSG:4326, causes dot misalignment)
- **Tiles**: z=0, x=0 (western half), x=1 (eastern half), y=0 — two tiles cover full world
- **Compositing**: `Image.alpha_composite(basemap, dots)` — basemap is RGBA, dots layer on top
- **NEVER use**: matplotlib scatter dots (too small, wrong color, different visual feel)
- **NEVER use**: `orangeHeat.point` style (tiny heatmap pixels, not the approved look)

### Map Validation
- A correct map is **always > 130KB**
- A map exactly **~131KB = basemap only, no dots** = wrong GBIF key
- After generating, verify pixel count: `non_transparent_pixels > 1000`

### GBIF Key Verification
- Always verify via: `https://api.gbif.org/v1/species/match?name={name}&kingdom=Fungi`
- Use `usageKey` from the response
- Test tile before writing: download tile, count non-transparent pixels; if 0, key is wrong

### Approved Map Generator
- **Primary**: the GBIF tile composite function in `scripts/curated-repair.py` (`download_gbif_map`)
- **Golden reference**: see `reports/golden-map-reference.png` for the exact approved look
- **Do NOT use**: `scripts/generate-maps.py` (matplotlib scatter — produces wrong dot style)

---

## Images

### Hero Image Rules
- Must show FULL mushroom: cap + stem, not cropped
- Minimum 300KB file size
- Landscape or near-square ratio preferred (reject if height > 2× width)
- Species name must appear in filename (genus or epithet)
- Source priority: Wikipedia article images > Wikimedia Commons category > iNaturalist

### Gallery Images
- Minimum 60KB (rejects mycomorphbox icons at ~10KB)
- 5 images per species: hero + 4 more showing different aspects
- No wrong-species images — verify genus/epithet in filename

### Image Manifest Schema
- See `schemas/image-manifest.schema.json`
- Validated by `scripts/validate-manifests.py` before build

---

## Map Caption
- Text: "Based on reported sightings worldwide"
- No external links, no GBIF credit in caption
- Component: `components/species/distribution-map.tsx`

---

## Process Rules
- NEVER run batch image scripts
- Always one species at a time via `curated-repair.py`
- Always update attribution fields when changing images
- All changes via PR, never push directly to main

---

## Pre-Push Quality Checklist (MANDATORY before showing any species page on localhost)

Every species page must pass ALL of these checks before presenting to Varun for review. These come from real bugs caught in production.

### 1. Image Content Verification (VIEW every image)
- [ ] **Open and visually inspect every image file** — file size checks are NOT enough
- [ ] **No sketches or illustrations** — reject historical botanical drawings (Bresadola, Vittadini, Doerstling, Sowerby, Schmalfuss, Bulliard). Every image must be a real photograph
- [ ] **No cartoons, icon sheets, or clip art** — AI-generated icon grids have passed size checks before
- [ ] **No wrong species** — verify the image actually shows the correct fungus (frog feet, book covers, and flowers have all appeared as "mushroom" images)
- [ ] **No duplicates** — hero image and look-alike images must be different photos. Check that look-alike images aren't copies of the hero
- [ ] **Mushroom is centered and prominent** — reject images where the mushroom is tiny in a corner with mostly foliage/background. The mushroom must fill a significant portion of the frame, especially for the hero
- [ ] **No "paper figure" labels** — reject images with letters (A, B, C, D) or scientific figure annotations burned into the photo

### 2. Look-Alike Image Independence
- [ ] **Each look-alike has a visually distinct photo** — never reuse the hero image or another species' hero for a look-alike
- [ ] **If look-alike species exists in DB**, the page.tsx code auto-uses its hero image — verify this works correctly
- [ ] **If look-alike species does NOT exist in DB**, a separate downloaded image must be provided

### 3. External Link Verification
- [ ] **Every iNaturalist URL points to the correct species** — AI-generated taxon IDs are wrong >80% of the time. Verify each one via `https://api.inaturalist.org/v1/taxa?q=SPECIES_NAME&rank=species`
- [ ] **Every Wikipedia/MushroomExpert link resolves** — no 404s
- [ ] **No links to flowers, butterflies, snails, or other non-fungi organisms**

### 4. Cross-Linking & Slugs
- [ ] **Look-alike slug fields only reference species that exist in the database** — if a slug points to a non-existent species, remove the slug (keep the look-alike entry)
- [ ] **Bidirectional cross-links** — if Species A lists Species B as a look-alike, check if Species B also lists Species A and add the slug if missing
- [ ] **All slugs in the look-alikes array resolve** — test by checking `getSpeciesBySlug(slug)` returns a result

### 5. Content Accuracy
- [ ] **No fabricated stories** — reject stories mentioning specific people by name (e.g., "Chef Brendan Frey"), exact Reddit upvote counts, or "viral" social media moments unless independently verifiable
- [ ] **No condescending language** — reject phrases like "only a beginner would" or "no beginner should attempt"
- [ ] **Correct taxonomy and naming** — verify current accepted scientific names (e.g., Dacrymyces chrysospermus not palmatus)
- [ ] **No overclaimed medicinal properties** — use "has been studied for" not "cures" or "treats"

### 6. Data File Completeness
- [ ] **15 SEO queries** minimum, including "X vs Y" look-alike comparison queries
- [ ] **5 stories** with verifiable sources
- [ ] **5 fun facts**
- [ ] **Correct edibility category** — species shows up in the right filter tab (edible, edible-with-caution, toxic, deadly, inedible, psychoactive)
- [ ] **GBIF key verified** via API match
- [ ] **Species registered in `data/species/index.ts`** — both import and array entry

### 7. Distribution Map
- [ ] **Map exists on disk** at `public/images/species/{slug}/distribution-map.png`
- [ ] **Map manifest entry** exists with `approved: true` and `renderingApproved: true`
- [ ] **Map shows dots** — file size > 130KB (131KB = basemap only, no occurrence data)
- [ ] **Dots are on land, not in the ocean**

### 8. Build & Render
- [ ] **`npm run build` passes** with no errors
- [ ] **Page renders on localhost** — visit the actual URL and verify content appears
- [ ] **Gallery loads all images** — scroll through and confirm every image displays
- [ ] **"Explore More Species" cards** show real photos, not blank/broken images
