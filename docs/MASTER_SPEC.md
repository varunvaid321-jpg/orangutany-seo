# Orangutany SEO Content System — Master Spec

## Purpose

This file is the single source of truth for species article generation, image selection, section image placement, map rendering, validation, and drift prevention.

Claude Code must treat this file as authoritative. If any prior conversation instruction conflicts with this file, this file wins.

---

## Non-Negotiable Quality Rules

1. No fake species imagery.
2. No guessed image-species matches from filename alone.
3. No icons, symbols, warning graphics, forks, skulls, clipart, or generated illustrations as species photos.
4. No fabricated range maps.
5. No silent fallback behavior.
6. No article may publish with misleading species identification assets.
7. Hero image accuracy is mandatory.
8. Section images must match the section purpose when present.
9. Layout variation is allowed, but factual validation is mandatory.
10. If confidence is insufficient, omit the asset and surface a validation warning.

---

## Architectural Principle

The system must be deterministic and file-driven, not memory-driven.

Claude Code must not rely on chat memory to preserve behavior.
All critical decisions must be encoded in versioned files inside the repository.

Use the following persistent files:

* `docs/MASTER_SPEC.md` — this file
* `docs/DESIGN_LOCKS.md` — locked UI patterns and map rendering contract
* `data/species/species-data.json` — species text/content records
* `data/images/image-manifest.json` — approved image metadata
* `data/maps/map-manifest.json` — approved map metadata
* `data/layouts/layout-rules.json` — article layout variation rules
* `data/validation/validation-rules.json` — hard validation rules
* `scripts/validate-images.ts`
* `scripts/validate-maps.ts`
* `scripts/select-section-images.ts`
* `scripts/build-validation-report.ts`

If behavior is not represented in one of these files, it is not reliable enough.

---

## Required Repository Structure

```text
/docs
  MASTER_SPEC.md
  DESIGN_LOCKS.md
  IMAGE_POLICY.md
  MAP_POLICY.md
  LAYOUT_POLICY.md
  QA_CHECKLIST.md

/data
  /species
    species-data.json
  /images
    image-manifest.json
  /maps
    map-manifest.json
  /layouts
    layout-rules.json
  /validation
    validation-rules.json

/public
  /images/species/...
  /maps/basemaps/...

/scripts
  validate-images.ts
  validate-maps.ts
  select-hero-image.ts
  select-section-images.ts
  build-validation-report.ts
  lock-map-architecture.ts
```

---

## Image System Requirements

### A. Image Classes

Every image must be explicitly classified before use.

Allowed classes:

* `hero`
* `gallery_general`
* `cap_top`
* `gills`
* `pores`
* `stem`
* `base_volva`
* `ring_annulus`
* `cluster_habit`
* `cross_section`
* `spore_print`
* `habitat_context`

Disallowed classes:

* icon
* symbol
* clipart
* illustration
* ai_generated
* placeholder
* warning_graphic
* unrelated_photo
* uncertain_species_match

### B. Image Selection Rule

Claude Code must never assign an image to a species or section based only on filename, page title, alt text, category label, adjacent text, or guessed pattern match.

Every image must pass a validation chain before approval.

### C. Hero Image Rule

The hero image must satisfy all of the following:

1. Real photograph
2. Correct species with high confidence
3. Whole specimen or clearly representative cluster
4. Not tightly cropped in a way that hides diagnostic structure
5. Good visual quality
6. Attribution metadata present
7. License approved
8. Approved in `image-manifest.json`

If any condition fails, no hero image is shown. Use a clean neutral "Image unavailable" card instead.

### D. Supporting Image Rule

Supporting images may come from any approved source. Variation across sources is encouraged. But every supporting image must still be individually validated for species accuracy and section relevance.

---

## Image Manifest Contract

Each image in `data/images/image-manifest.json` must contain:

```json
{
  "imageId": "agaricus-bisporus-hero-001",
  "speciesSlug": "agaricus-bisporus",
  "source": "wikimedia",
  "sourcePageUrl": "",
  "fileUrl": "",
  "localPath": "/images/species/agaricus-bisporus/hero-001.jpg",
  "creator": "",
  "license": "CC BY-SA 4.0",
  "licenseUrl": "",
  "attributionText": "",
  "width": 1600,
  "height": 1200,
  "orientation": "landscape",
  "imageClass": ["hero", "gallery_general"],
  "showsFeatures": ["cap_top", "cluster_habit"],
  "speciesConfidence": "high",
  "sectionRelevance": {
    "hero": true,
    "gills": false,
    "pores": false,
    "stem": false,
    "habitat_context": false
  },
  "visualReviewStatus": "approved",
  "reviewNotes": "Whole cultivated button mushrooms, clear cap texture.",
  "approved": true
}
```

No image may be rendered unless `approved: true`.

---

## Section Image Logic

Section images are optional, not mandatory.

* If a section-specific image exists and is relevant, show it.
* If no correct section-specific image exists, show no image.
* Never force an irrelevant image into a section to preserve layout.

Section mapping rules:
* `Gills` → `showsFeatures` must contain `gills`
* `Pores` → `showsFeatures` must contain `pores`
* `Stem` → `showsFeatures` must contain `stem`
* `Base / volva` → `showsFeatures` must contain `base_volva`
* `Spore print` → `showsFeatures` must contain `spore_print`
* `Habitat` → `showsFeatures` must contain `habitat_context`

No exceptions.

---

## Cropping and Composition Rules

The renderer must never crop diagnostic features off the image just to fit a card.

Rendering policy (preferred order):
1. `object-fit: contain` for diagnostic/section images
2. Smart padded frame/background if aspect ratio mismatches
3. Only use `cover` when the subject-safe crop box exists and preserves key features

---

## Map Architecture Lock

**MAP_ARCHITECTURE_VERSION = 1.0**

```
BASEMAP_FILE       = public/maps/basemaps/world-equirectangular-v1.png
BASEMAP_VERSION    = world-equirectangular-v1
PROJECTION         = equirectangular (PlateCarree)
CANVAS_SIZE        = 2048x1024
DOT_SOURCE         = GBIF occurrence API (direct lat/lon coordinates)
DOT_STYLE          = filled-circle, scatter
DOT_SIZE           = s=4 (matplotlib scatter, ~4pt²)
DOT_COLOR          = #ff5533 (red-orange)
DOT_ALPHA          = 0.6
BACKGROUND         = #0d0d0d (ocean/background)
LAND_COLOR         = #2a2a2a
ALLOW_BASEMAP_REPLACEMENT = false (requires version bump)
ALLOW_PROJECTION_CHANGE   = false (requires version bump)
ALLOW_TILE_API_SUBSTITUTION = false (GBIF tiles misalign — prohibited)
```

### Critical map rules

1. NEVER use GBIF tile API for dot rendering — tiles have internal coordinate offsets that misalign with any external basemap.
2. ALWAYS use direct GBIF occurrence API (`/v1/occurrence/search`) to download lat/lon coordinates.
3. Plot coordinates directly on matplotlib equirectangular canvas — zero alignment error.
4. Max 5000 occurrence records per species (sufficient for map density).
5. Basemap must be generated from Natural Earth 110m shapefile — NOT from GBIF tile.gbif.org/omt tiles (those use Mercator rendering).

### Map fallback

If a species has 0 GBIF occurrences, render basemap with caption "Distribution data unavailable" instead.

---

## Map Data Manifest Contract

Each species map record in `data/maps/map-manifest.json` must contain:

```json
{
  "speciesSlug": "agaricus-bisporus",
  "mapVersion": "1.0",
  "basemapVersion": "world-equirectangular-v1",
  "projection": "equirectangular",
  "gbifKey": 5243447,
  "occurrenceCount": 3421,
  "renderingApproved": true,
  "approved": true
}
```

No species page may render a map unless map record exists and `approved: true`.

---

## Drift Prevention Policy

Claude Code must not "remember by chat". It must "remember by file".

Required persistent files:
* `docs/DESIGN_LOCKS.md` — locked visual architecture
* `data/layouts/layout-rules.json` — locked article variation patterns
* `data/images/image-manifest.json` — locked image approval decisions
* `data/maps/map-manifest.json` — locked map decisions

No silent regeneration of basemap, projection, dot style, hero image, or section image rules.

---

## Article Variation Without Quality Drift

Variation is allowed in presentation and image mood, but never in factual standards.

### Two-layer content model

Each species page combines:

1. **Reference layer** (mandatory): technically correct, anatomy-aware, taxonomically clean
2. **Human layer** (optional): approved real-world contextual images that make the page feel lived-in

### Contextual image classes

Additional allowed classes for human/contextual use:

* `human_holding`
* `in_basket`
* `field_foraging`
* `forest_context`
* `group_harvest_context`
* `market_context`
* `close_field_observation`

These are allowed only as contextual/supporting images, never as substitutes for diagnostic images.

### Contextual image rules

A contextual image may be used when:

1. Species confidence is high
2. The mushroom remains visible and representative
3. The image does not obscure the mushroom so badly it becomes non-informative
4. Attribution and license are complete
5. The image fits one of the approved contextual classes

A contextual image may NOT be used when:

* The mushroom is too small to interpret
* Human presence dominates so heavily that the species is unclear
* The image is atmospheric but not species-reliable
* The image conflicts with the article's safety posture

### Mood profiles

* `reference_strict` - pure reference, no contextual imagery
* `field_guide` - field guide feel, forest/habitat context allowed
* `forager_context` - foraging scenes, human holding allowed
* `forest_observation` - nature observation mood
* `culinary_context` - market/kitchen context (edible species only)
* `warning_strict` - toxic/deadly species, suppress playful imagery

Mood profiles affect where contextual images appear and card emphasis.
They do NOT affect image approval rules, species correctness, map rules, section relevance, or crop safety.

### Species-category-aware variation

* Edible cultivated species: allow `market_context`, `human_holding`, `culinary_context`
* Wild edible species: allow `field_foraging`, `forest_context`
* Toxic or deadly species: suppress playful human/culinary imagery, prefer `warning_strict` or `field_guide`
* Delicate diagnostic species: bias toward reference-heavy layouts

### Forbidden variation

Do not vary:
* Image approval criteria
* Section-image relevance rules
* Map architecture
* Attribution display
* Disclaimer placement
* Hero validation logic
* Crop safety rules

### Anti-pipeline appearance strategy

* Rotate among approved layout patterns
* Mix reference and contextual image positions
* Vary gallery density based on approved asset availability
* Vary supporting block order within approved rules
* Do not simulate variation by lowering standards

---

## Visual Fit and Post-Selection Scoring

After image candidate selection and before render approval, every image should pass a visual-fit check.

### Placement logic

* Hero: requires high species match, high visibility, high crop safety
* Section images: requires high section fit and diagnostic value
* Related-species cards: requires high thumbnail recognition
* Contextual mid-article: requires high species match plus context or composition value

### Hard blocks

Reject from hero placement if:
* Mushroom is too small in frame
* Critical anatomy hidden by hand/basket/background
* Crop would remove cap/stem recognition
* Image is visually messy at card size

Reject from section placement if:
* Target feature is not visible
* Target feature is partially visible but ambiguous
* Crop would destroy the relevant anatomy

### Placement approvals

One image might be approved for contextual use but not for hero use. The manifest supports per-placement approval via `sectionRelevance` fields.

---

## Related Species Rules

Related-species cards must use only approved images for the target species.
No symbolic assets, placeholders, or loosely matched images.

Each related-species card must validate:
* Card species slug matches image species slug
* Approved thumbnail exists
* Crop preserves recognizable form
* No misleading substitute image

If no approved image exists, show a neutral branded no-image card.

---

## Validation Pipeline

Run validation before build:

* `npx tsx scripts/validate-images.ts` - image manifest validation
* `npx tsx scripts/validate-maps.ts` - map manifest validation
* `npx tsx scripts/build-validation-report.ts` - summary report

Fails on:
* Icon images (<60KB)
* Missing maps
* Unapproved images
* Wrong-species heroes
* Map architecture mismatch
* Section feature mismatch

---

## One-Line Operating Philosophy

It is better to publish a page with one accurate image and no map than a page with five attractive lies.
