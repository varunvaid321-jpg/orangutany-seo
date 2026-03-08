# Guide Site Inventory — guide.orangutany.com

**Last verified: 2026-03-07**
**Total indexed pages: ~140**

## RULES (MANDATORY — read before ANY page change)

1. **Before creating any new page**: check this file to ensure no overlap with existing content
2. **Before deleting/renaming any page**: update this file, the sitemap source (`app/sitemap.ts`), content-index (`lib/content-index.ts`), `_redirects`, and nav links
3. **After ANY page add/remove/rename**: rebuild sitemap, verify build passes, update this file
4. **No duplicate topics**: if two pages cover the same species or subject, merge into one
5. **No orphan pages**: every page must be in the sitemap and reachable from nav or hub pages
6. **No orphan images**: `public/images/species/` dirs must match species in `data/species.ts`
7. **Social page (`/social`)**: noindex, not in sitemap, not in nav — private content bank only

## Species Pages (106)

Source of truth: `data/species.ts` → `allSpecies` array
Route: `/mushrooms/[slug]`
Images: `/public/images/species/[slug]/`

All 106 species have matching image directories. The `index` folder in images is NOT a species.

### Full species list (alphabetical)
agaricus-bisporus, agaricus-campestris, agrocybe-praecox, amanita-caesarea, amanita-citrina, amanita-gemmata, amanita-jacksonii, amanita-muscaria, amanita-pantherina, amanita-phalloides, amanita-virosa, armillaria-mellea, auricularia-auricula-judae, boletus-edulis, boletus-pinophilus, boletus-reticulatus, calocybe-gambosa, calvatia-gigantea, cantharellus-cibarius, cantharellus-cinnabarinus, cantharellus-tubaeformis, chlorociboria-aeruginascens, chlorophyllum-molybdites, chlorophyllum-rhacodes, clathrus-ruber, clitocybe-dealbata, clitocybe-nuda, conocybe-filaris, coprinopsis-atramentaria, coprinus-comatus, coprinus-picaceus, cordyceps-militaris, cortinarius-orellanus, cortinarius-rubellus, craterellus-cornucopioides, craterellus-tubaeformis, cyclocybe-aegerita, entoloma-sinuatum, fistulina-hepatica, flammulina-velutipes, galerina-marginata, ganoderma-lucidum, grifola-frondosa, gymnopilus-junonius, gyromitra-esculenta, hericium-erinaceus, hydnum-repandum, hygrocybe-coccinea, hypholoma-fasciculare, inocybe-aeruginascens, inocybe-erubescens, inonotus-obliquus, lactarius-deliciosus, laetiporus-sulphureus, leccinum-aurantiacum, leccinum-scabrum, lentinula-edodes, lepiota-brunneoincarnata, lepista-saeva, leucocoprinus-birnbaumii, lycoperdon-perlatum, lycoperdon-pyriforme, macrolepiota-procera, marasmius-oreades, morchella-elata, morchella-esculenta, mutinus-caninus, mycena-haematopus, omphalotus-olearius, ophiocordyceps-sinensis, panaeolus-cyanescens, paxillus-involutus, phallus-hadriani, phallus-impudicus, pleurotus-ostreatus, pluteus-salicinus, podostroma-cornu-damae, psilocybe-azurescens, psilocybe-caerulescens, psilocybe-cubensis, psilocybe-cyanescens, psilocybe-mexicana, psilocybe-semilanceata, psilocybe-stuntzii, psilocybe-tampanensis, ramaria-botrytis, rubroboletus-satanas, russula-cyanoxantha, russula-emetica, russula-virescens, scleroderma-citrinum, sparassis-crispa, stereum-hirsutum, stropharia-rugosoannulata, suillus-granulatus, suillus-luteus, trametes-versicolor, tricholoma-equestre, tricholoma-matsutake, tuber-aestivum, tuber-magnatum, tuber-melanosporum, verpa-bohemica, volvariella-volvacea, xerocomellus-chrysenteron, xeromphalina-campanella

## Articles (16)

Source of truth: `lib/content-index.ts` → `articles` array
Hub: `/articles`

| Slug | Topic |
|------|-------|
| /articles/how-to-identify-poisonous-mushrooms | Poisonous mushroom ID guide |
| /articles/mushrooms-that-can-kill-you | Fatal species overview |
| /articles/dog-ate-mushroom | Pet mushroom poisoning guide |
| /articles/mushrooms-in-your-yard | Lawn/yard mushroom ID |
| /articles/australian-mushroom-poisoning | Australia-specific poisoning cases |
| /articles/psychoactive-mushrooms-science | Psilocybin science overview |
| /articles/why-mushrooms-grow-in-circles | Fairy rings explained |
| /articles/most-dangerous-mushrooms | Top dangerous species ranked |
| /articles/best-edible-mushrooms | Top edible species ranked |
| /articles/mushrooms-by-region | Regional species guide |
| /articles/chicken-of-the-woods | COTW deep dive |
| /articles/how-to-find-morels | Morel hunting guide |
| /articles/morel-vs-false-morel | Morel look-alike safety |
| /articles/most-expensive-mushrooms | Rare/valuable species |
| /articles/cooking-wild-mushrooms | Recipe hub (8 sub-recipes) |
| /articles/medicinal-mushrooms | Medicinal fungi overview |

## Recipes (8, under /articles/cooking-wild-mushrooms/)

Source of truth: `data/recipes.ts`

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
- Mushroom cultivation at home
- Mushroom nutrition and health benefits (distinct from medicinal)
- Mushroom photography tips
- Foraging laws by country/state
- How to dry and preserve wild mushrooms
- Mushroom dyeing (textile use)
- Bioluminescent mushrooms

### Missing species (notable gaps)
- Hydnellum peckii (bleeding tooth — has image dir but no data entry? verify)
- Lactarius indigo (indigo milk cap — has image dir but no data entry? verify)
- Tuber borchii (bianchetto truffle)
- Pleurotus citrinopileatus (golden oyster)
- Geastrum (earthstars)
- Schizophyllum commune (split gill)

### Missing guides
- Advanced foraging techniques
- Spore printing guide
- Mushroom growing for beginners
