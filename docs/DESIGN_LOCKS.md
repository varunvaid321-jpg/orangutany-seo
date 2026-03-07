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
