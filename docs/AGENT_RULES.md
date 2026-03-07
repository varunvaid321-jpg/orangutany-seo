# Agent Rules

## Read Order

Always read these files before making changes:

1. `docs/MASTER_SPEC.md`
2. `docs/DESIGN_LOCKS.md`
3. `docs/AGENT_RULES.md`

## Non-negotiable behavior

1. Never infer species-image correctness from filename alone.
2. Never replace a locked basemap or projection unless explicitly requested and versioned.
3. Never insert a symbolic, placeholder, or unrelated image to preserve layout fullness.
4. Never crop diagnostic anatomy out of hero or section images.
5. Never place a section image unless it matches that section's feature.
6. Never publish a page that fails manifest validation.
7. Never silently regenerate approved assets.
8. If confidence is low, mark for review instead of guessing.
9. Never use an illustration, drawing, engraving, painting, or AI-generated image. Only real photographs.
10. Never use a microscopy/spore image as a gallery or field photo. Microscopy images may only be used in a dedicated spore section if one exists.
11. Never use a food/cooking photo, storefront photo, market scene, or lifestyle photo as a species identification image.
12. Never use an image that shows a different species than the page it appears on. Verify against Wikimedia source URL metadata — if the source filename or description names a different species, reject it.
13. Never use an image where the mushroom is cut off, obscured, blurry, degraded, or not clearly visible. The full fruiting body must be recognizable.
14. Never use an image containing multiple species unless the target species is clearly dominant and labeled.
15. Never use the same source image across different species pages. Each image must be unique to its species.
16. Never use a lifecycle diagram, infographic, scientific chart, or non-photographic visual as a gallery image.
17. Every image on a species page must pass this test: "Can a forager look at this image and identify the species?" If no, reject it.
18. For detail images (cap-detail, gills-detail, stem-detail): the image MUST show a close-up of the specific anatomical feature. A landscape, market photo, or distant shot is never acceptable.

## Required workflow

1. Load manifests.
2. Validate manifests (`npx tsx scripts/validate-images.ts && npx tsx scripts/validate-maps.ts`).
3. Validate image placement approvals.
4. Validate map architecture version.
5. Generate preview.
6. Run build (`npx next build`).
7. Run validation report (`npx tsx scripts/build-validation-report.ts`).

## Failure behavior

If a required asset is missing or invalid:

- Do not substitute junk.
- Do not invent replacement content.
- Emit a validation warning.
- Keep prior approved asset if available.
- Show "Image unavailable" card for missing heroes.
- Show "Range data unavailable" for missing maps.

## Refactor behavior

When repairing existing pages:

- Preserve locked architecture.
- Only replace assets with approved alternatives.
- Do not alter layout family unless required by validation.
- Always update `image-manifest.json` when changing any image.
- Always update `map-manifest.json` when changing any map.

## Image repair process

- One species at a time. Never batch.
- Verify species match before approving.
- Update attribution fields every time.
- Mark status in `IMAGE-REPAIR-LOG.md`.

## Image rejection checklist (hardcoded — not discretionary)

Before adding ANY image to a species page, it MUST pass ALL of these checks.
Failure on any single check = automatic rejection. No exceptions.

1. **Species match**: The Wikimedia source URL filename or description must name the correct species. If the source mentions a different genus/species, REJECT.
2. **Photograph only**: Must be a real photograph. Reject illustrations, drawings, engravings, paintings, watercolors, diagrams, infographics, AI-generated images.
3. **Mushroom visible**: The mushroom must be clearly visible, in focus, and recognizable. Reject distant landscapes, empty habitats, degraded/collapsed specimens.
4. **Not microscopy**: Spore images, microscopy slides, and lab images are NOT field photos. Reject as gallery images.
5. **Not food/commerce**: Cooking scenes, tempura plates, market storefronts, kitchen bowls are NOT identification images. Reject.
6. **Not cropped/cut off**: The mushroom must not have critical parts cropped out of frame. Cap, gills/pores, and stem should be visible where applicable.
7. **Single species**: If the image contains multiple species, the target species must be the clear primary subject. Mixed market displays = reject.
8. **Minimum quality**: File size >= 60KB (hero >= 300KB). Blurry, dark, overexposed = reject.
9. **Detail images match their purpose**: `cap-detail.jpg` must show the cap close-up. `gills-detail.jpg` must show gills. A market photo or landscape is never a valid detail image.
10. **Unique across species**: The same source image must never appear on more than one species page.
11. **Lookalike images must show the lookalike species**: Not the main species, not an unrelated species, and not a photo of people.

## Known download script failure modes (prevent recurrence)

These specific failure patterns were found in production and must be prevented:

- **Karl Johanssvamp bug**: Wikipedia article pages for non-bolete species sometimes include images of Boletus edulis (Swedish: Karl Johanssvamp) because it appears in comparative/culinary articles. The download script must check that the source image filename contains the target genus or species name, or at minimum does NOT contain names of known different species.
- **Microscopy images from Wikipedia**: Many Wikipedia articles include spore microscopy images. These get downloaded as "field" photos. The download script must filter out images whose filenames contain "spore", "microscop", "ascospore", "basidiospore", or "SEM".
- **Illustrations from Wikipedia**: Old Wikipedia articles embed historical botanical illustrations. Filter out images whose filenames or descriptions contain "illustration", "drawing", "engraving", "painting", "Bresadola", "Iduns kokbok", "Bulliard", "Curtis", "Atlas", "Sowerby".
- **Bioluminescent/cross-species images**: Some Wikipedia articles include dramatic photos (bioluminescence, lifecycle diagrams) that belong to related but different species. Always verify the image's own Wikimedia description page names the target species.

## Manifest-only rendering

Templates must only render images and maps that exist in their respective manifests with `approved: true`. No direct filesystem access for rendering decisions.
