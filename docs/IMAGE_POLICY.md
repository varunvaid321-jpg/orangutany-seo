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

- icon, symbol, clipart, illustration
- ai_generated, placeholder, warning_graphic
- unrelated_photo, uncertain_species_match

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
