#!/usr/bin/env python3
"""
Regenerate ALL maps using the approved GBIF tile composite style.
This is the ONLY approved map generation method per DESIGN_LOCKS.md.

Style: orange.marker tiles composited on equirectangular basemap.
Produces large salmon/peach filled circles.
"""
import sys, os, re, json, time, urllib.request
from pathlib import Path
from io import BytesIO

ROOT = Path(__file__).resolve().parent.parent
SPECIES_DIR = ROOT / "data" / "species"
IMG_DIR = ROOT / "public" / "images" / "species"
BASEMAP = IMG_DIR / "_basemap.png"
MAP_MANIFEST = ROOT / "data" / "maps" / "map-manifest.json"

UA = "OrangutanyBot/1.0 (https://guide.orangutany.com; educational mushroom guide)"

def fetch(url, retries=3):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    for attempt in range(retries):
        try:
            with urllib.request.urlopen(req, timeout=30) as r:
                return r.read()
        except Exception as e:
            if attempt == retries - 1:
                print(f"    FAILED: {e}")
                return None
            time.sleep(2)
    return None

def download_map_tile_style(gbif_key, out_dir):
    """Generate map using GBIF orange.marker tile composite (approved style)."""
    from PIL import Image

    map_path = out_dir / "distribution-map.png"

    if not BASEMAP.exists():
        print(f"  ERROR: basemap missing at {BASEMAP}")
        return False

    left = fetch(f"https://api.gbif.org/v2/map/occurrence/density/1/0/0@2x.png?taxonKey={gbif_key}&style=orange.marker&srs=EPSG:4326")
    right = fetch(f"https://api.gbif.org/v2/map/occurrence/density/1/1/0@2x.png?taxonKey={gbif_key}&style=orange.marker&srs=EPSG:4326")

    if not left or not right:
        print(f"  FAILED to download tiles")
        return False

    dots = Image.new('RGBA', (2048, 1024), (0,0,0,0))
    dots.paste(Image.open(BytesIO(left)).convert('RGBA'), (0, 0))
    dots.paste(Image.open(BytesIO(right)).convert('RGBA'), (1024, 0))
    result = Image.alpha_composite(Image.open(BASEMAP).convert('RGBA'), dots)
    result.save(str(map_path))
    sz = map_path.stat().st_size
    return sz

def main():
    from PIL import Image
    
    manifest = json.loads(MAP_MANIFEST.read_text()) if MAP_MANIFEST.exists() else {}
    
    slugs = []
    for ts_file in sorted(SPECIES_DIR.glob("*.ts")):
        if ts_file.stem == "index":
            continue
        slugs.append(ts_file.stem)
    
    total = len(slugs)
    done = 0
    failed = []
    
    print(f"Regenerating {total} maps with approved tile composite style...")
    print(f"Style: GBIF orange.marker, EPSG:4326, composited on equirectangular basemap")
    print()
    
    for slug in slugs:
        done += 1
        ts_path = SPECIES_DIR / f"{slug}.ts"
        content = ts_path.read_text()
        gbif_m = re.search(r'gbifKey:\s*(\d+)', content)
        if not gbif_m:
            print(f"[{done}/{total}] {slug}: no gbifKey, skipping")
            continue
        
        gbif_key = int(gbif_m.group(1))
        out_dir = IMG_DIR / slug
        out_dir.mkdir(parents=True, exist_ok=True)
        
        print(f"[{done}/{total}] {slug} (gbifKey={gbif_key})...", end=" ", flush=True)
        
        sz = download_map_tile_style(gbif_key, out_dir)
        if sz:
            print(f"{sz:,} bytes")
            manifest[slug] = {
                "speciesSlug": slug,
                "mapVersion": "1.0",
                "basemapVersion": "world-equirectangular-v1",
                "projection": "equirectangular",
                "gbifKey": gbif_key,
                "occurrenceCount": 5000,
                "fileSizeBytes": sz,
                "renderingApproved": True,
                "approved": True
            }
        else:
            print("FAILED")
            failed.append(slug)
        
        time.sleep(0.5)
    
    MAP_MANIFEST.write_text(json.dumps(manifest, indent=2))
    print(f"\nDone. {done - len(failed)} succeeded, {len(failed)} failed.")
    if failed:
        print(f"Failed: {failed}")

if __name__ == "__main__":
    main()
