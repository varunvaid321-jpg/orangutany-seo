# Mushroom Photo Validation Report

**Date:** 2026-03-07
**Scope:** Visual inspection of hero and gallery images across all 107 species
**Method:** Direct visual comparison of each photo against expected species morphology
**Policy reference:** docs/IMAGE_POLICY.md, docs/AGENT_RULES.md

---

## CRITICAL: Wrong Species

### 1. amanita-gemmata/01-field.jpg
- **Expected:** Yellow/pale yellow cap with white patches (Jewelled Amanita)
- **Actual:** Red cap with white spots, clearly Amanita muscaria (Fly Agaric)
- **Severity:** CRITICAL - completely wrong species used as hero image
- **Live URL:** https://guide.orangutany.com/images/species/amanita-gemmata/01-field.jpg
- **File path:** `public/images/species/amanita-gemmata/01-field.jpg`
- **Note:** Images 02 and 03 in this folder ARE correct yellow Amanita gemmata

### 2. volvariella-volvacea/01-stem.jpg
- **Expected:** Paddy Straw Mushroom with volva/egg sac, grey-brown cap
- **Actual:** Sliced white button mushrooms (Agaricus bisporus) on a plate
- **Severity:** CRITICAL - completely wrong species used as hero image
- **Live URL:** https://guide.orangutany.com/images/species/volvariella-volvacea/01-stem.jpg
- **File path:** `public/images/species/volvariella-volvacea/01-stem.jpg`

---

## CRITICAL: Illustrations Used as Photos (violates IMAGE_POLICY)

Per IMAGE_POLICY.md: "illustration" is a disallowed image class. All images must be real photographs.

### 3. amanita-gemmata/04-field.jpg
- **Issue:** Vintage botanical illustration of a Boletus-like mushroom (brown cap, thick white stem)
- **Additional:** Not even the correct species, appears to be a Boletus, not an Amanita
- **Severity:** CRITICAL - illustration + wrong species
- **Live URL:** https://guide.orangutany.com/images/species/amanita-gemmata/04-field.jpg
- **File path:** `public/images/species/amanita-gemmata/04-field.jpg`

### 4. volvariella-volvacea/04-stem.jpg
- **Issue:** Botanical illustration/watercolor of Volvariella volvacea
- **Severity:** HIGH - correct species but illustration format is disallowed
- **Live URL:** https://guide.orangutany.com/images/species/volvariella-volvacea/04-stem.jpg
- **File path:** `public/images/species/volvariella-volvacea/04-stem.jpg`

### 5. inocybe-erubescens/04-illustration.png
- **Issue:** Scientific illustration showing Inocybe erubescens with spore details
- **Severity:** HIGH - correct species but illustration format is disallowed
- **Live URL:** https://guide.orangutany.com/images/species/inocybe-erubescens/04-illustration.png
- **File path:** `public/images/species/inocybe-erubescens/04-illustration.png`

---

## HIGH: Misleading or Unrepresentative Hero Images

### 6. coprinus-comatus/01-field.jpg
- **Expected:** White, shaggy cylindrical caps (the recognizable "Shaggy Ink Cap" stage)
- **Actual:** Fully deliquesced/inked black mushroom caps, unrecognizable as the species
- **Severity:** HIGH - technically correct species but worst possible stage for hero
- **Live URL:** https://guide.orangutany.com/images/species/coprinus-comatus/01-field.jpg
- **File path:** `public/images/species/coprinus-comatus/01-field.jpg`
- **Note:** Image 03 in this folder shows the classic white shaggy stage and would be a much better hero

### 7. laetiporus-sulphureus/01-shelf-orange.jpg
- **Expected:** Bright orange and yellow bracket/shelf fungus ("Chicken of the Woods")
- **Actual:** Grey/brown/tan dried shelf fungus, no orange or yellow color visible
- **Severity:** HIGH - possibly old/weathered specimen or wrong species entirely
- **Live URL:** https://guide.orangutany.com/images/species/laetiporus-sulphureus/01-shelf-orange.jpg
- **File path:** `public/images/species/laetiporus-sulphureus/01-shelf-orange.jpg`
- **Note:** Images 04 and 05 show the correct vivid orange/yellow and would be much better heroes

---

## MODERATE: Non-Field Photos Mislabeled as Field

### 8. volvariella-volvacea/02-stem.jpg
- **Issue:** Plastic bag of mushroom spawn/substrate held in hand, not a mushroom photo
- **Live URL:** https://guide.orangutany.com/images/species/volvariella-volvacea/02-stem.jpg
- **File path:** `public/images/species/volvariella-volvacea/02-stem.jpg`

### 9. volvariella-volvacea/03-field.jpg
- **Issue:** Cooked/prepared straw mushrooms in a polka-dot bowl (kitchen photo, not field)
- **Live URL:** https://guide.orangutany.com/images/species/volvariella-volvacea/03-field.jpg
- **File path:** `public/images/species/volvariella-volvacea/03-field.jpg`

### 10. lentinula-edodes/01-field.jpg
- **Issue:** Dried shiitake mushrooms in a plastic bowl in a kitchen (not a field photo)
- **Severity:** MODERATE - correct species but mislabeled context, poor hero image
- **Live URL:** https://guide.orangutany.com/images/species/lentinula-edodes/01-field.jpg
- **File path:** `public/images/species/lentinula-edodes/01-field.jpg`

### 11. cordyceps-militaris/01-field.jpg
- **Issue:** Dried Cordyceps in a glass jar with Chinese label (commercial product, not field)
- **Severity:** MODERATE - correct species but commercial product photo, not field
- **Live URL:** https://guide.orangutany.com/images/species/cordyceps-militaris/01-field.jpg
- **File path:** `public/images/species/cordyceps-militaris/01-field.jpg`

---

## Summary

| Severity | Count | Issue Type |
|----------|-------|------------|
| CRITICAL | 2 | Wrong species in photo |
| CRITICAL | 3 | Illustration used instead of photo |
| HIGH | 2 | Unrepresentative/misleading hero image |
| MODERATE | 4 | Non-field photo mislabeled as field |
| **Total** | **11** | |

### Worst offenders (prioritize fixing):
1. **amanita-gemmata** - 3 of 5 images have issues (wrong species hero, illustration, wrong species illustration)
2. **volvariella-volvacea** - 4 of 5 images have issues (wrong species, spawn bag, kitchen photo, illustration)

### Species verified as correct (sampled):
agaricus-bisporus, agaricus-campestris, amanita-caesarea, amanita-citrina, amanita-muscaria, amanita-pantherina, amanita-phalloides, amanita-virosa, armillaria-mellea, auricularia-auricula-judae, boletus-edulis, calvatia-gigantea, cantharellus-cibarius, cantharellus-cinnabarinus, cantharellus-tubaeformis, chlorociboria-aeruginascens, chlorophyllum-molybdites, clathrus-ruber, coprinopsis-atramentaria, coprinus-picaceus, entoloma-sinuatum, fistulina-hepatica, flammulina-velutipes, ganoderma-lucidum, grifola-frondosa, gyromitra-esculenta, hericium-erinaceus, hydnum-repandum, inonotus-obliquus, lactarius-deliciosus, leucocoprinus-birnbaumii, lycoperdon-perlatum, macrolepiota-procera, morchella-esculenta, mycena-haematopus, omphalotus-olearius, ophiocordyceps-sinensis, panaeolus-cyanescens, pleurotus-ostreatus, psilocybe-cubensis, psilocybe-semilanceata, sparassis-crispa, stropharia-rugosoannulata, trametes-versicolor
