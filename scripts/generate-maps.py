#!/usr/bin/env python3
"""
Generate distribution maps per MASTER_SPEC.md Map Architecture Lock.

Method: Download actual GBIF occurrence coordinates via /v1/occurrence/search API,
plot directly on matplotlib equirectangular world map.

NEVER use GBIF tile API for dots — tiles have coordinate offsets that misalign
with any external basemap. Direct lat/lon plotting has zero alignment error.

Usage:
  python3 scripts/generate-maps.py                    # regenerate all species
  python3 scripts/generate-maps.py agaricus-bisporus  # one species
  python3 scripts/generate-maps.py --force            # force overwrite existing
"""

import os, re, sys, json, time, urllib.request, urllib.parse
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SPECIES_DIR = ROOT / "data" / "species"
IMG_DIR = ROOT / "public" / "images" / "species"
BASEMAP_SRC = ROOT / "public" / "maps" / "basemaps" / "world-equirectangular-v1.png"
MAPS_DIR = ROOT / "data" / "maps"
MAP_MANIFEST = MAPS_DIR / "map-manifest.json"
NE_SHP = Path("/tmp/ne_countries/ne_110m_admin_0_countries.shp")

UA = "OrangutanyBot/1.0"

# Map architecture constants (from MASTER_SPEC.md)
MAP_VERSION = "1.0"
BASEMAP_VERSION = "world-equirectangular-v1"
CANVAS_W, CANVAS_H = 2048, 1024
DOT_COLOR = "#ff5533"
DOT_SIZE = 4
DOT_ALPHA = 0.6
MAX_OCCURRENCES = 5000


def ensure_basemap():
    """Ensure the locked equirectangular basemap exists. Generate if missing."""
    if BASEMAP_SRC.exists():
        return True

    BASEMAP_SRC.parent.mkdir(parents=True, exist_ok=True)
    print("Basemap missing — generating from Natural Earth data...")

    # Download Natural Earth shapefile if needed
    if not NE_SHP.exists():
        NE_SHP.parent.mkdir(parents=True, exist_ok=True)
        url = "https://naciscdn.org/naturalearth/110m/cultural/ne_110m_admin_0_countries.zip"
        req = urllib.request.Request(url, headers={"User-Agent": UA})
        import zipfile
        with urllib.request.urlopen(req, timeout=60) as r:
            data = r.read()
        with open("/tmp/ne_countries.zip", "wb") as f:
            f.write(data)
        with zipfile.ZipFile("/tmp/ne_countries.zip") as z:
            z.extractall("/tmp/ne_countries/")
        print("  Natural Earth data extracted")

    try:
        import shapefile
    except ImportError:
        os.system("pip3 install pyshp -q")
        import shapefile

    import matplotlib
    matplotlib.use('Agg')
    import matplotlib.pyplot as plt
    from PIL import Image

    sf = shapefile.Reader(str(NE_SHP))
    fig, ax = plt.subplots(1, 1, figsize=(CANVAS_W/100, CANVAS_H/100), dpi=100)
    fig.patch.set_facecolor('#0d0d0d')
    ax.set_facecolor('#0d0d0d')
    ax.set_xlim(-180, 180)
    ax.set_ylim(-90, 90)
    ax.set_aspect('equal')
    ax.axis('off')
    ax.margins(0)

    for shape in sf.shapes():
        if shape.shapeType == 5:
            parts = list(shape.parts) + [len(shape.points)]
            for i in range(len(parts) - 1):
                pts = shape.points[parts[i]:parts[i+1]]
                if len(pts) > 2:
                    x, y = zip(*pts)
                    ax.fill(x, y, color='#2a2a2a', linewidth=0, edgecolor='none')

    plt.subplots_adjust(left=0, right=1, top=1, bottom=0)
    fig.savefig("/tmp/basemap_raw.png", dpi=100, bbox_inches='tight',
                pad_inches=0, facecolor='#0d0d0d')
    plt.close()

    img = Image.open("/tmp/basemap_raw.png").convert('RGBA')
    img = img.resize((CANVAS_W, CANVAS_H), Image.LANCZOS)
    img.save(BASEMAP_SRC)
    print(f"  Basemap saved: {BASEMAP_SRC} ({BASEMAP_SRC.stat().st_size:,} bytes)")
    return True


def fetch_occurrences(gbif_key):
    """Download occurrence lat/lon from GBIF API. Max MAX_OCCURRENCES records."""
    coords = []
    offset = 0
    limit = 300
    total = None

    while offset < MAX_OCCURRENCES:
        url = (f"https://api.gbif.org/v1/occurrence/search"
               f"?taxonKey={gbif_key}&hasCoordinate=true&limit={limit}&offset={offset}")
        req = urllib.request.Request(url, headers={"User-Agent": UA})
        try:
            with urllib.request.urlopen(req, timeout=30) as r:
                data = json.loads(r.read())
        except Exception as e:
            print(f"  API error: {e}")
            break

        if total is None:
            total = data.get("count", 0)

        for rec in data.get("results", []):
            lon = rec.get("decimalLongitude")
            lat = rec.get("decimalLatitude")
            if lon is not None and lat is not None:
                coords.append((float(lon), float(lat)))

        if data.get("endOfRecords") or len(data.get("results", [])) < limit:
            break

        offset += limit
        time.sleep(0.1)

    return coords, total


def generate_map(slug, gbif_key, force=False):
    """Generate a distribution map for one species."""
    out_path = IMG_DIR / slug / "distribution-map.png"
    out_path.parent.mkdir(parents=True, exist_ok=True)

    if out_path.exists() and not force:
        # Check if already generated with current method (occurrence-based maps are always > 131KB)
        size = out_path.stat().st_size
        if size > 131_000:
            print(f"  {slug}: map OK ({size:,} bytes) — skipping")
            return size, 0

    import matplotlib
    matplotlib.use('Agg')
    import matplotlib.pyplot as plt
    from PIL import Image

    if not NE_SHP.exists():
        ensure_basemap()

    try:
        import shapefile
    except ImportError:
        os.system("pip3 install pyshp -q")
        import shapefile

    print(f"  {slug}: downloading occurrences (gbifKey={gbif_key})...")
    coords, total = fetch_occurrences(gbif_key)
    print(f"  {slug}: {len(coords)} coords (of {total} total)")

    sf = shapefile.Reader(str(NE_SHP))
    fig, ax = plt.subplots(1, 1, figsize=(CANVAS_W/100, CANVAS_H/100), dpi=100)
    fig.patch.set_facecolor('#0d0d0d')
    ax.set_facecolor('#0d0d0d')
    ax.set_xlim(-180, 180)
    ax.set_ylim(-90, 90)
    ax.set_aspect('equal')
    ax.axis('off')
    ax.margins(0)

    # Draw land
    for shape in sf.shapes():
        if shape.shapeType == 5:
            parts = list(shape.parts) + [len(shape.points)]
            for i in range(len(parts) - 1):
                pts = shape.points[parts[i]:parts[i+1]]
                if len(pts) > 2:
                    x, y = zip(*pts)
                    ax.fill(x, y, color='#2a2a2a', linewidth=0, edgecolor='none')

    # Plot occurrence dots
    if coords:
        lons, lats = zip(*coords)
        ax.scatter(lons, lats, s=DOT_SIZE, c=DOT_COLOR, alpha=DOT_ALPHA,
                   linewidths=0, zorder=5)

    plt.subplots_adjust(left=0, right=1, top=1, bottom=0)
    fig.savefig("/tmp/map_render.png", dpi=100, bbox_inches='tight',
                pad_inches=0, facecolor='#0d0d0d')
    plt.close()

    img = Image.open("/tmp/map_render.png").convert('RGBA')
    img = img.resize((CANVAS_W, CANVAS_H), Image.LANCZOS)
    img.save(out_path)

    size = out_path.stat().st_size
    return size, len(coords)


def load_manifest():
    if MAP_MANIFEST.exists():
        return json.loads(MAP_MANIFEST.read_text())
    return {}


def save_manifest(manifest):
    MAPS_DIR.mkdir(parents=True, exist_ok=True)
    MAP_MANIFEST.write_text(json.dumps(manifest, indent=2))


def read_species_field(ts_file, field):
    m = re.search(rf'{field}\s*:\s*["\']?([^,\n\'"]+)["\']?', ts_file.read_text())
    return m.group(1).strip() if m else None


def main():
    args = sys.argv[1:]
    force = "--force" in args
    args = [a for a in args if not a.startswith("--")]

    if args:
        slugs = args
    else:
        # Auto-detect: species with missing or tile-based maps (< 131KB old tiles)
        slugs = []
        for ts_file in sorted(SPECIES_DIR.glob("*.ts")):
            if ts_file.stem in ("index",):
                continue
            slug = ts_file.stem
            map_path = IMG_DIR / slug / "distribution-map.png"
            if not map_path.exists():
                slugs.append(slug)
            elif force:
                slugs.append(slug)
            # Skip if already a valid matplotlib-based map (size > 131KB usually)

    print(f"Generating maps for {len(slugs)} species...\n")

    manifest = load_manifest()
    errors = []

    for slug in slugs:
        ts_file = SPECIES_DIR / f"{slug}.ts"
        if not ts_file.exists():
            print(f"SKIP {slug}: no data file")
            continue

        gbif_key_str = read_species_field(ts_file, "gbifKey")
        if not gbif_key_str:
            print(f"SKIP {slug}: no gbifKey")
            continue

        try:
            gbif_key = int(gbif_key_str)
        except ValueError:
            print(f"SKIP {slug}: invalid gbifKey '{gbif_key_str}'")
            continue

        try:
            size, count = generate_map(slug, gbif_key, force=force)
            manifest[slug] = {
                "speciesSlug": slug,
                "mapVersion": MAP_VERSION,
                "basemapVersion": BASEMAP_VERSION,
                "projection": "equirectangular",
                "gbifKey": gbif_key,
                "occurrenceCount": count,
                "fileSizeBytes": size,
                "renderingApproved": True,
                "approved": True
            }
            print(f"  {slug}: saved {size:,} bytes")
        except Exception as e:
            print(f"  ERROR {slug}: {e}")
            errors.append(slug)
            import traceback
            traceback.print_exc()

    save_manifest(manifest)
    print(f"\nManifest updated: {MAP_MANIFEST}")
    if errors:
        print(f"Errors: {errors}")
    print("Done.")


if __name__ == "__main__":
    ensure_basemap()
    main()
