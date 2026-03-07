# Image Repair Process — Orangutany Guide Site

## The Problem We Solved (and must never repeat)

The automated download script pulled images by Wikipedia article title matching — it did NOT visually verify species correctness.
This caused wrong-species images to appear (e.g. Amanita muscaria appearing on Amanita pantherina page).

---

## Non-Negotiable Rules

1. **Never select an image by filename alone.** Filenames can lie. `Amanita_muscaria_38010247562.jpg` appeared in the pantherina article — it was the wrong species.
2. **Verify species by filename AND cross-check the Commons page.** If filename says `muscaria` on a `pantherina` page — reject it.
3. **Reject images where the subject is cropped.** A mushroom with its cap cut off is useless for identification. Check pixel dimensions: portrait-ratio images (height >> width) often crop stems. Very wide crops cut caps.
4. **Hero image = best full-body shot.** Must show the complete mushroom: cap + stem + ideally gills or habitat. No extreme crops. Prefer landscape or near-square images, minimum 600px wide.
5. **Section images must match their section:**
   - Cap section → image clearly shows the cap top/surface
   - Gills section → image shows underside, gills visible
   - Stem section → image shows stem, ring, volva or base
   - Spore print → image shows a spore print on paper, NOT a glamour shot
   - Habitat section → shows environment/substrate, not just close-up of cap
6. **Minimum quality:** at least 300KB for hero, at least 60KB for any image. Tiny files are thumbnails or degraded.
7. **Prefer images where the species name appears in the filename.** Extra confidence.
8. **When uncertain about a candidate image, skip it** rather than use a possibly-wrong image.
9. **NEVER run a batch script without per-species manual review.** The batch broke original good images. Always use `curated-repair.py` one species at a time.
10. **Reject any image under 60KB** — these are icons, diagrams, or thumbnails. The mycomorphbox edibility icons are ~10KB and will appear if not filtered.
11. **After downloading, verify the hero image is not an icon**: open the file and check it's a real photograph. A real mushroom photo is always > 60KB. Icons are < 15KB.

---

## Selection Protocol (per species)

### Step 1 — Hero image
- Query: Wikipedia article images API for the exact scientific name
- Filter: filename must contain the genus name OR species epithet
- Prefer: largest file size + landscape ratio (width ≥ height)
- Must show full fruiting body — use image dimensions to estimate crop risk:
  - If height > 2× width: likely shows only cap, reject for hero
  - If width > 3× height: likely extreme horizontal crop, reject for hero
- Download top 3 candidates and let user pick

### Step 2 — Gallery photos (aim for 4 more after hero)
- Variety: cap-top, side-full, habitat, gills/underside, young/mature
- Each must show a different aspect
- No duplicates or near-duplicates
- Each filename must be verifiably the correct species

### Step 3 — Section/identification images (optional)
- identificationImages.cap → cap-top view
- identificationImages.gills → underside/gills visible
- identificationImages.stem → stem + base clearly visible

### Step 4 — Distribution map
- Always use: basemap + GBIF occurrence tiles (zoom 1, 2 tiles, EPSG:4326)
- Style: orangeHeat.point
- Composite with PIL: Image.alpha_composite(basemap, dots)
- Minimum size: 50KB. If smaller, the species has no GBIF data, use a placeholder note.
- Map caption text: "Based on reported sightings worldwide" — no GBIF link, no external credit
- **ALWAYS verify gbifKey produces tile data before using it.** Query GBIF species/match API to get usageKey, test the tile endpoint — if 0 non-transparent pixels, the key is wrong. Many stored gbifKeys are wrong and return blank maps identical to the basemap (117KB). A correct map is always larger.
- A map that is exactly 117KB = basemap only, no dots = wrong GBIF key — must fix before deploying.

---

## Image Sources (priority order)

1. **Wikipedia article images API** — images used directly in the species article. High confidence.
2. **Wikimedia Commons category** — `Category:Genus_species` — broader pool, still reliable.
3. **iNaturalist research-grade observations** — real field photos, CC-licensed, high quality.
4. **Mushroom Observer** — specialist mycology photos, accurate IDs.

---

## What NOT to do

- Do NOT use the Wikimedia Commons search API with a species name query — it returns unrelated images.
- Do NOT pull images from a Wikipedia article that also covers related species (e.g. Amanita genus article).
- Do NOT use images from food/cooking/cultivation contexts for identification sections.
- Do NOT reuse images across different species pages.
- Do NOT trust `object-cover` CSS to fix a fundamentally cropped image — replace the image instead.

---

## Repair Log Format

For each species, record in IMAGE-REPAIR-LOG.md:
- slug
- status: done / pending / skipped
- hero image: filename + source + verified (yes/no)
- issues fixed (if any)
- notes

---

## Running the repair

```bash
# One species at a time (review between each)
python3 scripts/curated-repair.py agaricus-bisporus

# Check result in browser
# http://localhost:3000/mushrooms/agaricus-bisporus
```
