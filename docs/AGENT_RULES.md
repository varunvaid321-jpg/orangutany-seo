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

## Manifest-only rendering

Templates must only render images and maps that exist in their respective manifests with `approved: true`. No direct filesystem access for rendering decisions.
