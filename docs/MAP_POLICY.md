# Map Policy

## Architecture

All map rendering follows `docs/DESIGN_LOCKS.md` map architecture lock.

- Basemap: `public/images/species/_basemap.png` (Natural Earth equirectangular)
- Projection: equirectangular (PlateCarree), 2048x1024px
- Dot source: GBIF occurrence API direct lat/lon coordinates
- Dot style: filled circle, scatter plot via matplotlib
- Dot color: #ff5533, alpha 0.6

## Prohibited

- GBIF tile API (`tile.gbif.org`) for dot rendering (Mercator misalignment)
- Replacing basemap without version bump
- Changing projection without version bump
- Any basemap from GBIF tile.gbif.org/omt tiles

## Generation Process

1. Verify GBIF key via species match API
2. Download up to 5000 occurrence records
3. Plot on equirectangular canvas over basemap
4. Composite with `Image.alpha_composite`
5. Validate output > 130KB
6. Count non-transparent pixels > 1000
7. Save as `distribution-map.png`
8. Update `data/maps/map-manifest.json`

## Fallback

If species has 0 GBIF occurrences: render basemap with "Distribution data unavailable" caption.

## Manifest Requirement

No map renders on a page unless `data/maps/map-manifest.json` has an approved entry with matching basemap version and projection.
