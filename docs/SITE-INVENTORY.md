# Guide Site Inventory — guide.orangutany.com

**Last verified: 2026-03-15**
**Total indexed pages: 191 (sitemap)**

## RULES (MANDATORY — read before ANY page change)

1. **Before creating any new page**: check this file to ensure no overlap with existing content
2. **Before deleting/renaming any page**: update this file, the sitemap source (`app/sitemap.ts`), content-index (`lib/content-index.ts`), `_redirects`, and nav links
3. **After ANY page add/remove/rename**: rebuild sitemap, verify build passes, update this file
4. **No duplicate topics**: if two pages cover the same species or subject, merge into one
5. **No orphan pages**: every page must be in the sitemap and reachable from nav or hub pages
6. **No orphan images**: `public/images/species/` dirs must match species in `data/species.ts`
7. **Social page (`/social`)**: noindex, not in sitemap, not in nav — private content bank only

## Species Pages (143)

Source of truth: `data/species/index.ts` → `allSpecies` array
Route: `/mushrooms/[slug]`
Images: `/public/images/species/[slug]/`

All 143 species have matching image directories.

### Full species list (alphabetical)
agaricus-arvensis, agaricus-bisporus, agaricus-campestris, agaricus-xanthodermus, agrocybe-praecox, amanita-caesarea, amanita-citrina, amanita-fulva, amanita-gemmata, amanita-jacksonii, amanita-muscaria, amanita-novinupta, amanita-pantherina, amanita-phalloides, amanita-rubescens, amanita-virosa, armillaria-mellea, auricularia-auricula-judae, bolbitius-titubans, boletus-edulis, boletus-pinophilus, boletus-reticulatus, calocybe-gambosa, calvatia-gigantea, cantharellus-cibarius, cantharellus-cinnabarinus, cantharellus-formosus, cantharellus-tubaeformis, cerioporus-squamosus, chlorociboria-aeruginascens, chlorophyllum-molybdites, chlorophyllum-rhacodes, clathrus-ruber, clitocybe-dealbata, clitocybe-nebularis, clitocybe-nuda, conocybe-filaris, coprinellus-micaceus, coprinopsis-atramentaria, coprinus-comatus, coprinus-picaceus, cordyceps-militaris, cortinarius-orellanus, cortinarius-rubellus, cortinarius-vanduzerensis, craterellus-cornucopioides, craterellus-tubaeformis, cyclocybe-aegerita, daldinia-concentrica, entoloma-sinuatum, fistulina-hepatica, flammulina-velutipes, fomitopsis-betulina, galerina-marginata, ganoderma-lucidum, gliophorus-chromolimoneus, grifola-frondosa, gymnopilus-junonius, gymnopilus-luteofolius, gymnopilus-viridans, gyromitra-esculenta, hericium-coralloides, hericium-erinaceus, hydnellum-peckii, hydnum-repandum, hygrocybe-coccinea, hygrophoropsis-aurantiaca, hypholoma-fasciculare, hypholoma-lateritium, imleria-badia, inocybe-aeruginascens, inocybe-erubescens, inonotus-obliquus, kuehneromyces-mutabilis, laccaria-amethystina, laccaria-laccata, lactarius-deliciosus, lactarius-indigo, lactarius-torminosus, laetiporus-sulphureus, leccinum-aurantiacum, leccinum-scabrum, lentinula-edodes, lepiota-brunneoincarnata, lepiota-cristata, lepista-saeva, leucocoprinus-birnbaumii, lycoperdon-perlatum, lycoperdon-pyriforme, macrolepiota-procera, marasmius-oreades, morchella-elata, morchella-esculenta, mutinus-caninus, mycena-galericulata, mycena-haematopus, omphalotus-olearius, ophiocordyceps-sinensis, panaeolus-cyanescens, paxillus-involutus, phallus-hadriani, phallus-impudicus, pisolithus-arhizus, pleurotus-ostreatus, pleurotus-pulmonarius, pluteus-salicinus, podostroma-cornu-damae, psilocybe-allenii, psilocybe-azurescens, psilocybe-caerulescens, psilocybe-cubensis, psilocybe-cyanescens, psilocybe-mexicana, psilocybe-semilanceata, psilocybe-stuntzii, psilocybe-tampanensis, ramaria-botrytis, rubroboletus-satanas, russula-brevipes, russula-cyanoxantha, russula-emetica, russula-virescens, scleroderma-citrinum, sparassis-crispa, stereum-hirsutum, stropharia-rugosoannulata, suillus-granulatus, suillus-luteus, trametes-versicolor, tremella-fuciformis, tremella-mesenterica, tricholoma-equestre, tricholoma-matsutake, tuber-aestivum, tuber-borchii, tuber-magnatum, tuber-melanosporum, tylopilus-felleus, verpa-bohemica, volvariella-volvacea, xerocomellus-chrysenteron, xeromphalina-campanella, xylaria-polymorpha

## Articles (26)

Source of truth: `lib/content-index.ts` → `articles` array
Hub: `/articles`

| Slug | Topic | Schema |
|------|-------|--------|
| /articles/how-to-identify-poisonous-mushrooms | Poisonous mushroom ID guide | FAQPage |
| /articles/mushrooms-that-can-kill-you | Fatal species overview | FAQPage |
| /articles/dog-ate-mushroom | Pet mushroom poisoning guide | FAQPage |
| /articles/mushrooms-in-your-yard | Lawn/yard mushroom ID | FAQPage |
| /articles/australian-mushroom-poisoning | Australia-specific poisoning cases |
| /articles/psychoactive-mushrooms-science | Psilocybin science overview |
| /articles/why-mushrooms-grow-in-circles | Fairy rings explained |
| /articles/most-dangerous-mushrooms | Top dangerous species ranked | FAQPage |
| /articles/best-edible-mushrooms | Top edible species ranked |
| /articles/mushrooms-by-region | Regional species guide |
| /articles/chicken-of-the-woods | COTW deep dive |
| /articles/how-to-find-morels | Morel hunting guide |
| /articles/morel-vs-false-morel | Morel look-alike safety |
| /articles/most-expensive-mushrooms | Rare/valuable species |
| /articles/cooking-wild-mushrooms | Recipe hub (8 sub-recipes) |
| /articles/medicinal-mushrooms | Medicinal fungi overview |
| /articles/california-death-cap-outbreak | 2025 CA death cap outbreak |
| /articles/ai-mushroom-identification-apps | AI ID app accuracy study |
| /articles/psilocybin-therapy-fda-approval | Psilocybin FDA approval race |
| /articles/death-caps-spreading-north-america | Invasive death cap spread |
| /articles/post-fire-morel-hunting | Post-wildfire morel ecology |
| /articles/largest-living-organism-fungus | Oregon Armillaria record |
| /articles/mycoremediation-fungi-cleaning-pollution | Fungi pollution cleanup |
| /articles/climate-change-mushroom-season | Climate phenology shifts |
| /articles/mushroom-poisoning-immigrant-communities | Cultural lookalike danger |
| /articles/truffle-fraud-problem | Truffle industry fraud |

## Recipes (8, under /articles/cooking-wild-mushrooms/)

Source of truth: `data/recipes.ts`
Schema: All 8 have `schema.org/Recipe` JSON-LD (added March 2026)

chanterelle-risotto, porcini-pappardelle, morels-cream-toast, lions-mane-crab-cakes, maitake-miso-roasted, black-trumpet-butter-steak, chicken-of-the-woods-tacos, oyster-mushroom-katsu

## Guides (3)

Source of truth: `lib/content-index.ts` → `guides` array
Hub: `/guides`

| Slug | Topic |
|------|-------|
| /guides/beginners-guide-to-mushroom-foraging | Beginner foraging intro |
| /guides/mushroom-foraging-by-season | Seasonal foraging calendar |
| /guides/edible-wild-mushrooms-trail | Trail foraging guide |

## Authors (8)

Source of truth: `lib/content-index.ts` → `authors` array
Hub: `/authors`

varun-vaid, elena-marchetti, james-whitfield, priya-sharma, daniel-okafor, mei-lin-chen, sofia-andersson, arjun-mehra

## Static Pages (not in content arrays)

| Route | Purpose | Indexed |
|-------|---------|---------|
| / | Homepage | Yes |
| /mushrooms | Species hub/listing | Yes |
| /identify-a-mushroom | CTA → orangutany.com | Yes |
| /about | About page | Yes |
| /attribution | Image credits | Yes |
| /newsletter | Newsletter signup | Yes |
| /resources | External links/tools | Yes |
| /social | Social content bank | **NO** (noindex, not in sitemap) |

## Redirects (public/_redirects)

Old root-level URLs → new paths (301):
- /how-to-identify-poisonous-mushrooms → /articles/...
- /mushrooms-that-can-kill-you → /articles/...
- /dog-ate-mushroom → /articles/...
- /mushrooms-in-your-yard → /articles/...
- /australian-mushroom-poisoning → /articles/...
- /psychoactive-mushrooms-science → /articles/...
- /why-mushrooms-grow-in-circles → /articles/...
- /most-dangerous-mushrooms → /articles/...
- /best-edible-mushrooms → /articles/...
- /mushrooms-by-region → /articles/...
- /beginners-guide-to-mushroom-foraging → /guides/...
- /mushroom-foraging-by-season → /guides/...
- /edible-wild-mushrooms-trail → /guides/...

## What's NOT on the site yet (potential future content)

### Missing article topics (high search volume, no overlap with existing)
- Mushroom cultivation at home (huge search volume)
- Mushroom nutrition and health benefits (distinct from medicinal)
- Mushroom photography tips
- Foraging laws by country/state
- How to dry and preserve wild mushrooms
- Mushroom dyeing (textile use)
- Bioluminescent mushrooms
- Mushroom supplements review (ties to medicinal mushrooms article)
- Regional foraging deep dives (Ontario, Pacific Northwest, UK, Europe)
- Seasonal "what's fruiting now" checklists by region
- More comparison/vs pages (Chanterelle vs Jack O'Lantern, King Bolete vs Bitter Bolete, etc.)

### Missing species (notable gaps)
- Pleurotus citrinopileatus (golden oyster)
- Geastrum (earthstars)
- Schizophyllum commune (split gill)

### Missing guides
- Advanced foraging techniques
- Spore printing guide
- Mushroom growing for beginners

### Schema/SEO enhancements
- ~~Recipe schema (schema.org/Recipe) on 8 recipe pages~~ ✅ Done March 2026
- ~~FAQPage schema on safety/ID articles~~ ✅ Done March 2026 (5 articles)
- Article schema on orangutany.com /learn/[slug] pages
- BreadcrumbList schema on more guide site pages
