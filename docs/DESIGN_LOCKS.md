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

### Occurrence Dot Style
- **GBIF API**: `https://api.gbif.org/v2/map/occurrence/density/{z}/{x}/{y}@2x.png`
- **Style**: `orange.marker` — produces large red/orange circles (NOT `orangeHeat.point` which produces tiny heatmap pixels)
- **SRS**: `EPSG:4326`
- **Zoom**: 1
- **Tiles**: x=0 (180°W–0°), x=1 (0°–180°E), y=0 (both)
- **Compositing**: `Image.alpha_composite(basemap, dots)` — basemap is RGBA, dots layer on top

### Map Validation
- A correct map is **always > 130KB**
- A map exactly **~131KB = basemap only, no dots** = wrong GBIF key
- After generating, verify pixel count: `non_transparent_pixels > 1000`

### GBIF Key Verification
- Always verify via: `https://api.gbif.org/v1/species/match?name={name}&kingdom=Fungi`
- Use `usageKey` from the response
- Test tile before writing: download tile, count non-transparent pixels; if 0, key is wrong

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
