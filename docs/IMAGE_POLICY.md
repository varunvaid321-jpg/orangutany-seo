# Image Policy

## Allowed Image Classes

- `hero` - primary species photo, whole specimen
- `gallery_general` - gallery-worthy photo of the species
- `cap_top` - top-down or angled view showing cap surface
- `gills` - underside showing gill structure
- `pores` - underside showing pore surface (boletes etc.)
- `stem` - stem and base detail
- `base_volva` - base/volva detail
- `ring_annulus` - ring/annulus detail
- `cluster_habit` - growth habit, cluster form
- `cross_section` - cut/cross-section view
- `spore_print` - spore print on paper
- `habitat_context` - mushroom in its natural habitat setting
- `human_holding` - person holding specimen (contextual only)
- `in_basket` - specimen in basket (contextual only)
- `field_foraging` - foraging scene (contextual only)
- `forest_context` - forest/woodland context (contextual only)
- `market_context` - market/culinary context (edible species only)

## Disallowed Image Classes

- icon, symbol, clipart, illustration, drawing, engraving, painting, watercolor
- ai_generated, placeholder, warning_graphic
- unrelated_photo, uncertain_species_match, wrong_species
- microscopy, spore_slide, spore_print_mislabeled (spore prints are allowed ONLY in spore_print class)
- lifecycle_diagram, infographic, scientific_chart
- food_photo, cooking_scene, market_storefront, kitchen_scene
- landscape_no_subject (habitat photo where the mushroom is not visible)
- degraded_specimen (collapsed, rotted, or unrecognizable specimens)
- multi_species_unlabeled (image with multiple species where target is not clearly dominant)

## Hero Image Requirements

1. Real photograph (no illustrations)
2. Correct species with high confidence
3. Whole specimen or clearly representative cluster
4. Not tightly cropped hiding diagnostic structure
5. Good visual quality
6. Attribution metadata present (author, license, source)
7. License approved (CC BY, CC BY-SA, public domain)
8. Approved in `image-manifest.json`
9. Minimum 300KB file size
10. Landscape or near-square ratio preferred

If any condition fails, show "Image unavailable" card.

## Section Image Rules

Section images are optional. Never force an irrelevant image.

- Cap section: `showsFeatures` must contain `cap_top`
- Gills section: `showsFeatures` must contain `gills`
- Pores section: `showsFeatures` must contain `pores`
- Stem section: `showsFeatures` must contain `stem`
- Base/volva section: `showsFeatures` must contain `base_volva`
- Spore print section: `showsFeatures` must contain `spore_print`
- Habitat section: `showsFeatures` must contain `habitat_context`

## Cropping Rules

1. Hero images: `object-contain` or safe `object-cover object-top`
2. Section images: `object-contain` to preserve diagnostic anatomy
3. Thumbnails: `object-cover` acceptable if mushroom remains recognizable
4. Never crop cap off the top of frame
5. Default to `object-contain` when no crop metadata exists
6. Never crop or resize an image such that the mushroom becomes partially hidden, cut off, or hard to identify
7. The entire fruiting body must remain visible in all display contexts (desktop card, mobile card, gallery lightbox)
8. If an image's aspect ratio would cause the mushroom to be cropped in a card layout, use `object-contain` with background fill instead of `object-cover`

## Source Verification Rules (hardcoded — not discretionary)

Before accepting any image from Wikimedia Commons or any external source:

1. **Check source filename**: The Wikimedia filename must reference the target species. If it names a different species (e.g., "Karl_Johanssvamp" for a non-bolete page), REJECT immediately.
2. **Check source description page**: The image description on Commons must confirm the species. Cross-reference against the target species.
3. **Filter known bad patterns**: Reject images whose filenames contain any of:
   - "Iduns_kokbok", "Karl_Johanssvamp" (recurring Boletus edulis illustration)
   - "Bresadola", "Bulliard", "Sowerby", "Curtis" (historical illustrators)
   - "illustration", "drawing", "engraving", "painting", "Atlas"
   - "spore", "microscop", "ascospore", "basidiospore", "SEM"
   - "lifecycle", "diagram", "cycle_de_vie"
4. **Verify visual content**: Even after source checks pass, visually confirm the image shows the correct species as a clear photograph.

## Detail Image Requirements (hardcoded)

Detail images (`cap-detail.jpg`, `gills-detail.jpg`, `pores-detail.jpg`, `stem-detail.jpg`) have strict requirements:

1. Must be a close-up photograph of the specific anatomical feature named in the filename
2. `cap-detail.jpg` → must show the cap surface, texture, and color at close range
3. `gills-detail.jpg` → must show the gill structure from below or at an angle
4. `pores-detail.jpg` → must show the pore surface clearly
5. `stem-detail.jpg` → must show the stem, ring, and/or base at close range
6. A landscape, market photo, distant shot, or photo of people is NEVER a valid detail image
7. If no suitable close-up photo exists, omit the detail image entirely rather than using an inappropriate substitute

## Minimum File Sizes

- Hero: 300KB
- Gallery: 60KB
- Section detail: 60KB
- Reject anything under 60KB (likely icons/thumbnails)

## Sources (priority order)

1. Wikipedia article images (most reliable species match)
2. Wikimedia Commons category pages
3. iNaturalist (research-grade observations)
4. User-provided photos (with permission)
