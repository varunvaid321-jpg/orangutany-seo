# Orangutany SEO Guide Site: Session State

Read this file at the start of every session to understand what exists and what remains.

## What This Project Is
A static SEO site at guide.orangutany.com that drives traffic to orangutany.com (the main mushroom ID app). Built with Next.js 16 App Router, `output: "export"`, Tailwind v4 dark theme. Deployed to Cloudflare Pages (pending).

## GitHub
- Repo: `varunvaid321-jpg/orangutany-seo`
- Branch: main
- Local: `/Users/varunvaid/orangutany-seo/`
- Dev server: port 3002

## What Exists (as of March 6, 2026)

### Species Pages (32 total, target: 100)
Each at `/mushrooms/[slug]` with images, GBIF distribution map, look-alikes, stories, fun facts, SEO queries, JSON-LD.

Completed species:
agaricus-campestris, amanita-caesarea, amanita-muscaria, amanita-phalloides, amanita-virosa, armillaria-mellea, boletus-edulis, calvatia-gigantea, cantharellus-cibarius, chlorophyllum-rhacodes, coprinopsis-atramentaria, coprinus-comatus, craterellus-cornucopioides, galerina-marginata, ganoderma-lucidum, grifola-frondosa, gyromitra-esculenta, hericium-erinaceus, hydnum-repandum, inocybe-erubescens, laetiporus-sulphureus, lentinula-edodes, lycoperdon-perlatum, macrolepiota-procera, morchella-esculenta, omphalotus-olearius, pleurotus-ostreatus, psilocybe-cubensis, psilocybe-semilanceata, rubroboletus-satanas, tricholoma-matsutake, trametes-versicolor

Note: psilocybe-semilanceata (Liberty Cap) has data but NO images yet.

### Articles (10 total)
| URL | Author | Style |
|-----|--------|-------|
| /how-to-identify-poisonous-mushrooms | Varun Vaid | Myth-busting field guide |
| /mushrooms-that-can-kill-you | Elena Marchetti | True crime storytelling |
| /beginners-guide-to-mushroom-foraging | James Whitfield | First-timer narrative |
| /mushrooms-in-your-yard | Priya Sharma | Casual homeowner guide |
| /dog-ate-mushroom | Daniel Okafor | Urgent vet emergency |
| /australian-mushroom-poisoning | Sofia Andersson | Long-form investigative |
| /psychoactive-mushrooms-science | Mei Lin Chen | Science journalism |
| /edible-wild-mushrooms-trail | Tomas Herrera | Adventure blog |
| /why-mushrooms-grow-in-circles | Varun Vaid | Fun science explainer |
| /mushroom-foraging-by-season | Priya Sharma | Calendar reference |

All articles have `{/* TODO: photo */}` placeholders for real Wikimedia images.

### Articles NOT Yet Built (from original plan)
11. Chicken of the Woods deep-dive (`/chicken-of-the-woods-guide`)
12. Morel Mushroom Hunting (`/morel-mushroom-hunting`)
13. Most Expensive Mushrooms (`/most-expensive-mushrooms`)
14. Medicinal Mushrooms guide (`/medicinal-mushrooms-guide`)
15. Morel vs False Morel (`/morel-vs-false-morel`)

### Hub Pages (3)
- /most-dangerous-mushrooms
- /best-edible-mushrooms
- /mushrooms-by-region

### Author Pages (7)
- /authors/varun-vaid (extensive, 17 field photos, personal story)
- /authors/elena-marchetti
- /authors/james-whitfield
- /authors/priya-sharma
- /authors/daniel-okafor
- /authors/mei-lin-chen
- /authors/sofia-andersson

### Other Pages
- / (homepage with hub links, article links, featured species)
- /mushrooms (all species with search + filter)

## How to Build a New Species Page

Follow SPECIES-TEMPLATE.md in the repo root. Key steps:
1. Create data file at `data/species/[slug].ts` following SpeciesRecord type
2. Register in `data/species/index.ts`
3. Download images from Wikimedia article images API: `generator=images&titles=Genus_species`
4. Generate GBIF distribution map (must be named `distribution-map.png`, must be > 50KB)
5. Store images in `public/images/species/[slug]/`

## Content Quality Rules

**NEVER use em dashes** (` --- ` or ` -- `). Use commas, colons, semicolons, or periods.

**Each page must look unique.** Vary:
- Container width: max-w-3xl / max-w-4xl / max-w-5xl
- Heading styles: some use font-heading, some don't
- Section spacing: mt-6 / mt-8 / mt-10
- SEO tags: rounded pills / #hashtags / plain text / bulleted list / hidden
- Byline format: linked vs plain, with date vs without, "for Orangutany" vs not
- CTA: present / absent / different wording / different size
- Body text: text-sm vs text-base, leading-relaxed vs leading-loose

**Author personas have distinct voices.** See lib/authors.ts for deterministic assignment.

**Include 1-2 subtle natural language errors per article** (rare, human-feeling).

**Images:** Use Wikimedia article images API (not search API). Prefer human-element photos.

## Site Structure / Sitemap

```
guide.orangutany.com/
  /                                    Homepage (hub links + articles + featured)
  /mushrooms                           All species (search + filter)
  /mushrooms/[slug]                    Individual species (x32, target x100)
  /most-dangerous-mushrooms            Hub: deadly species
  /best-edible-mushrooms               Hub: prized edibles
  /mushrooms-by-region                 Hub: geographic browsing
  /how-to-identify-poisonous-mushrooms Article
  /mushrooms-that-can-kill-you         Article
  /beginners-guide-to-mushroom-foraging Article
  /mushrooms-in-your-yard              Article
  /dog-ate-mushroom                    Article
  /australian-mushroom-poisoning       Article
  /psychoactive-mushrooms-science      Article
  /edible-wild-mushrooms-trail         Article
  /why-mushrooms-grow-in-circles       Article
  /mushroom-foraging-by-season         Article
  /authors/[name]                      Author bios (x7)
```

## How Guide Site Links to Main Site (orangutany.com)

Every page has at least one link back to orangutany.com:
- Header nav: "Identify a Mushroom" button -> orangutany.com
- Species pages: "Orangutany can help you identify it from a photo" section
- Articles: Orangutany mentions in closing sections
- Author pages: Orangutany link in bios

On the MAIN site (orangutany.com), the hamburger menu should link:
- "Learn About Mushrooms" -> guide.orangutany.com/mushrooms
- Existing "Identify a Mushroom" stays (goes to main ID page)
- "External Resources" -> stays as /resources

## Deployment Plan (Not Yet Done)
1. Build: `npx next build`
2. Generate sitemap: `npx tsx scripts/generate-sitemap.ts`
3. Deploy `out/` to Cloudflare Pages at guide.orangutany.com
4. Add DNS: CNAME guide -> cloudflare pages URL
5. Submit sitemap to Google Search Console

## What's Left to Do (Priority Order)
1. Deploy to Cloudflare Pages
2. Build 68 more species pages to reach 100
3. Build remaining 5 articles (chicken of woods, morel hunting, expensive, medicinal, morel vs false morel)
4. Add real Wikimedia photos to article TODO placeholders
5. Download images for psilocybe-semilanceata (Liberty Cap)
6. Update main orangutany.com hamburger to link "Learn About Mushrooms" -> guide site
7. Submit sitemap to GSC
8. Consider app conversion (same content, native shell)
