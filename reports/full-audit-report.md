# Full Image Audit Report — All Species

**Date:** 2026-03-07
**Scope:** All images across all species (heroes, gallery, detail, lookalikes)
**Total species audited:** ~70 existing species
**Total images inspected:** ~500+

---

## RECURRING BUG: Boletus edulis Illustration

The same vintage Swedish cookbook illustration (`Karl_Johanssvamp_Iduns_kokbok.png` — a painting of Boletus edulis/porcini) was downloaded into **at least 6 different species**. This is clearly a download script bug. Found in:

1. `phallus-impudicus/02-field.jpg`
2. `gymnopilus-junonius/03-field.jpg`
3. `russula-virescens/05-field.jpg`
4. `entoloma-sinuatum/04-field.jpg`
5. `flammulina-velutipes/04-field.jpg`
6. `panaeolus-cyanescens/02-cyanescens-2.jpg`

**Action:** Delete all 6 immediately.

---

## CATEGORY 1: WRONG SPECIES (Must Remove)

| # | Species | Image | What It Actually Shows |
|---|---------|-------|----------------------|
| 1 | phallus-impudicus | `02-field.jpg` | Boletus edulis illustration (see above) |
| 2 | gymnopilus-junonius | `03-field.jpg` | Boletus edulis illustration (see above) |
| 3 | russula-virescens | `05-field.jpg` | Boletus edulis illustration (see above) |
| 4 | entoloma-sinuatum | `04-field.jpg` | Boletus illustration (see above) |
| 5 | flammulina-velutipes | `04-field.jpg` | Same Boletus illustration (see above) |
| 6 | panaeolus-cyanescens | `02-cyanescens-2.jpg` | Boletus edulis illustration (see above) |
| 7 | hypholoma-fasciculare | `02-field.jpg` | Bioluminescent mushroom (Sulphur Tuft doesn't glow) |
| 8 | boletus-reticulatus | `04-field.jpg` | Dark-stemmed bolete, no reticulation — wrong species |
| 9 | boletus-reticulatus | `05-field.jpg` | Same wrong species as #8 |
| 10 | amanita-caesarea | `04-forest-floor.jpg` | A. muscaria (white stem — A. caesarea has yellow stem) |
| 11 | amanita-caesarea | `05-market.jpg` | A. muscaria (white warts on cap — A. caesarea cap is smooth) |
| 12 | amanita-caesarea | `stem-detail.jpg` | A. muscaria (white stem instead of yellow) |
| 13 | cantharellus-cinnabarinus | `03-cap-top.jpg` | Dark gray/black mushrooms (possibly Craterellus) |
| 14 | grifola-frondosa | `02-habitat.jpg` | Laetiporus sulphureus (bright yellow shelves, not gray-brown Grifola) |
| 15 | gyromitra-esculenta | `05-german.jpg` | Verpa bohemica (vertical wrinkles, not brain-like convolutions) |
| 16 | cantharellus-tubaeformis | `02-detail.jpg` | Golden chanterelles (C. cibarius), not yellowfoot |
| 17 | russula-emetica | `02-field.jpg` | Russula nobilis (per Wikimedia source metadata) |
| 18 | russula-emetica | `03-field.jpg` | Russula paludosa (per source metadata) |
| 19 | russula-emetica | `04-field.jpg` | Russula nana (per source metadata) |
| 20 | laetiporus-sulphureus | `05-closeup.jpg` | Grayish-brown bracket fungus — no orange/yellow at all |
| 21 | inocybe-erubescens | `03-cluster.jpg` | Small pale mushrooms lacking fibrillose texture and reddish staining |
| 22 | lycoperdon-perlatum | `cross-section-detail.jpg` | **DANGEROUS:** Shows Scleroderma citrinum (toxic earthball) cross-section instead of Lycoperdon |
| 23 | omphalotus-olearius | `lookalike-hygrophoropsis.jpg` | Pink mushrooms (Laccaria?), not False Chanterelle |
| 24 | lentinula-edodes | `03-young.jpg` | Mixed market display (button mushrooms + shiitake + enoki) |

**Total: 24 wrong-species images to remove**

---

## CATEGORY 2: ILLUSTRATIONS / NOT PHOTOS (Must Remove)

| # | Species | Image | Description |
|---|---------|-------|-------------|
| 1 | russula-virescens | `04-field.jpg` | 1898 botanical illustration (correct species, wrong format) |
| 2 | tricholoma-equestre | `02-habitat.jpg` | Vintage book illustration |
| 3 | tricholoma-equestre | `03-field.jpg` | Bresadola botanical illustration |
| 4 | tricholoma-equestre | `04-field.jpg` | Atlas illustration (also shows extra species T. Georgii) |
| 5 | amanita-citrina | `02-group.jpg` | Scientific illustration of 10 Amanita species |
| 6 | amanita-pantherina | `03-group.jpg` | Scientific illustration of 10 species |
| 7 | amanita-phalloides | `02-group.jpg` | Scientific illustration of 10 deadly Amanitas |
| 8 | armillaria-mellea | `03-field.jpg` | Vintage botanical watercolor |
| 9 | clathrus-ruber | `05-field.jpg` | Historical engraving "Clathrus Tab. 93" |
| 10 | tuber-magnatum | `05-field.jpg` | Botanical illustration (shows T. magnatum + T. melanosporum) |
| 11 | tuber-melanosporum | `03-field.jpg` | Historical engraving of beetle + truffle |
| 12 | chlorociboria-aeruginascens | `05-field.jpg` | Renaissance wood carving artwork (not a photo of the fungus) |

**Total: 12 illustrations/non-photos to remove**

---

## CATEGORY 3: MICROSCOPY / SPORE IMAGES (Mislabeled as Field Photos)

| # | Species | Image | Description |
|---|---------|-------|-------------|
| 1 | ramaria-botrytis | `01-field.jpg` | **HERO** is a spore microscopy image! |
| 2 | paxillus-involutus | `04-field.jpg` | Microscopy spore image |
| 3 | craterellus-cornucopioides | `03-field.jpg` | Microscopy spore image |
| 4 | galerina-marginata | `05-field.jpg` | Microscopy spore image |
| 5 | russula-emetica | `05-field.jpg` | Microscopy spore image |
| 6 | chlorociboria-aeruginascens | `04-field.jpg` | Microscopy image with scale |
| 7 | agrocybe-praecox | `03-group.jpg` | Spore print on paper (not a group photo) |

**Total: 7 microscopy/spore images to remove or reclassify**

---

## CATEGORY 4: NON-REPRESENTATIVE / WRONG CONTENT TYPE

| # | Species | Image | Description |
|---|---------|-------|-------------|
| 1 | tuber-melanosporum | `02-field.jpg` | Lifecycle diagram (French labels), not a photo |
| 2 | tuber-melanosporum | `04-field.jpg` | Landscape photo of truffle orchard — no truffle visible |
| 3 | armillaria-mellea | `04-field.jpg` | Cooking photo (mushrooms in pot on stovetop) |
| 4 | grifola-frondosa | `05-field.jpg` | Tempura plate — species completely unidentifiable |
| 5 | ophiocordyceps-sinensis | `04-field.jpg` | Storefront photo — no fungus shown |
| 6 | marasmius-oreades | `03-stem.jpg` | Kitchen scene (dried mushrooms in bowl with tomatoes) |
| 7 | tricholoma-matsutake | `cap-detail.jpg` | Distant landscape shot — mushrooms barely visible |
| 8 | tricholoma-matsutake | `gills-detail.jpg` | Mossy forest floor — no mushroom visible at all |
| 9 | tricholoma-matsutake | `stem-detail.jpg` | Market photo — not anatomical detail |
| 10 | psilocybe-semilanceata | `lookalike-semiovatus.jpg` | Photo of people in field — mushroom not visible |

**Total: 10 non-representative images to remove**

---

## CATEGORY 5: MINOR / BORDERLINE (Review Recommended)

| # | Species | Image | Description |
|---|---------|-------|-------------|
| 1 | boletus-reticulatus | `03-field.jpg` | Over-mature orangish specimen, possibly wrong species |
| 2 | mutinus-caninus | `02-field.jpg` | Degraded/collapsed old specimens |
| 3 | mutinus-caninus | `04-field.jpg` | Atypically pale — possibly different Mutinus species |
| 4 | tricholoma-matsutake | `05-russia.jpg` | Very degraded dried-out specimens |
| 5 | xerocomellus-chrysenteron | `02-field.jpg` | Lacks diagnostic red-in-cracks feature |
| 6 | xerocomellus-chrysenteron | `04-field.jpg` | Too immature to show diagnostic features |
| 7 | amanita-jacksonii | `02-stem.jpg` | Doesn't show described stem/ring/base detail |
| 8 | lycoperdon-pyriforme | `04-field.jpg` | Over-mature olive-green interior (past edible stage) |
| 9 | trametes-versicolor | `05-bear-creek.jpg` | Lacks concentric color banding — possibly different species |
| 10 | cantharellus-cibarius | `04-field.jpg` | Too vivid orange — possibly C. cinnabarinus |
| 11 | laetiporus-sulphureus | `03-young-growth.jpg` | Very faded/aged, not representative |
| 12 | inocybe-erubescens | `01-mature-group.jpg` | Darker than typical fresh specimens |
| 13 | tricholoma-matsutake | `lookalike-smithiana.jpg` | May be wrong Amanita species |

**Total: 13 borderline images for review**

---

## GRAND TOTALS

| Category | Count |
|----------|-------|
| Wrong species (must remove) | 24 |
| Illustrations (must remove) | 12 |
| Microscopy/spore images (remove) | 7 |
| Non-representative (remove) | 10 |
| Minor/borderline (review) | 13 |
| **TOTAL ISSUES** | **66** |

---

## MOST AFFECTED SPECIES

| Species | Issues | Images Remaining After Cleanup |
|---------|--------|-------------------------------|
| russula-emetica | 4 of 5 bad | 1 image left |
| tricholoma-equestre | 3 of 5 illustrations | 2 images left |
| tuber-melanosporum | 3 of 5 bad | 2 images left |
| amanita-caesarea | 3 gallery/detail bad | Needs replacements |
| boletus-reticulatus | 2-3 wrong species | 1-2 images left |
| tricholoma-matsutake | 3 detail + 1 gallery bad | Detail images all need redo |
| ramaria-botrytis | Hero is microscopy | Needs new hero |

---

## SAFETY CONCERN

**lycoperdon-perlatum/cross-section-detail.jpg** shows a toxic Scleroderma citrinum cross-section labeled as if it's the edible Lycoperdon perlatum. This is a **safety hazard** — a user could mistake the earthball's dark interior for an acceptable variation. This should be the highest priority fix.
