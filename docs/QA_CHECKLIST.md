# QA Checklist

## Per-Species Page Checks

### Hero Image
- [ ] Real photograph, not illustration/icon/clipart
- [ ] Correct species (verified, not filename-guessed)
- [ ] Whole specimen visible (cap + stem, not chopped)
- [ ] Not destructively cropped by CSS
- [ ] Attribution displayed (author, license, source link)
- [ ] File size > 300KB
- [ ] Approved in image-manifest.json

### Gallery Images
- [ ] All images show correct species
- [ ] All images > 60KB
- [ ] No icons, mycomorphbox graphics, or symbols
- [ ] Attribution for each image
- [ ] All approved in image-manifest.json

### Section Images (Cap, Gills, Stem)
- [ ] Each section image shows the correct anatomical feature
- [ ] Image matches `showsFeatures` in manifest
- [ ] Not destructively cropped (anatomy preserved)
- [ ] Missing section images show no image (not a substitute)

### Distribution Map
- [ ] Uses locked basemap (equirectangular, 2048x1024)
- [ ] Dots from GBIF occurrence API (not tile API)
- [ ] File size > 130KB
- [ ] Approved in map-manifest.json
- [ ] Caption reads "Based on reported sightings worldwide"

### Look-alike Images
- [ ] Each look-alike image shows the correct look-alike species
- [ ] Not showing the main species as a look-alike

### Related Species Cards
- [ ] Each card image matches the target species
- [ ] No placeholder or unrelated images

### Content
- [ ] No em dashes
- [ ] Edibility badge correct
- [ ] Safety disclaimer present
- [ ] Taxonomy data present

## Build-Level Checks

- [ ] `validate-images.ts` passes
- [ ] `validate-maps.ts` passes
- [ ] `build-validation-report.ts` shows 0 critical failures
- [ ] `next build` succeeds
