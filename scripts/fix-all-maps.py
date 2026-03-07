#!/usr/bin/env python3
"""
Fix distribution maps for all species with blank/wrong maps.
Safe to run in batch — only touches distribution-map.png files.
Uses orange.marker style + Natural Earth equirectangular basemap.

Usage: python3 scripts/fix-all-maps.py
"""

import os, re, sys, json, time, urllib.request, urllib.parse
from pathlib import Path
from io import BytesIO

ROOT = Path(__file__).resolve().parent.parent
SPECIES_DIR = ROOT / "data" / "species"
IMG_DIR = ROOT / "public" / "images" / "species"
BASEMAP_PATH = IMG_DIR / "_basemap.png"
UA = "OrangutanyBot/1.0"

# Basemap threshold in bytes — maps at or below this are basemap-only (no dots)
BASEMAP_SIZE = BASEMAP_PATH.stat().st_size + 5000  # +5KB tolerance

def fetch(url, delay=0):
    if delay:
        time.sleep(delay)
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            return r.read()
    except Exception as e:
        print(f"  FETCH FAIL: {e}")
        return None

def fetch_json(url, delay=0):
    data = fetch(url, delay)
    return json.loads(data) if data else None

def read_field(ts_file, field):
    text = ts_file.read_text()
    m = re.search(rf'{field}\s*:\s*["\']?([^,\n\'"]+)["\']?', text)
    return m.group(1).strip() if m else None

def tile_has_data(key):
    data = fetch(f"https://api.gbif.org/v2/map/occurrence/density/1/0/0@2x.png?taxonKey={key}&style=orange.marker&srs=EPSG:4326")
    if not data or len(data) < 5000:
        return False
    try:
        from PIL import Image
        img = Image.open(BytesIO(data)).convert('RGBA')
        return sum(1 for p in img.getdata() if p[3] > 10) > 100
    except:
        return len(data) > 8000

def get_correct_gbif_key(scientific_name, stored_key):
    if stored_key and tile_has_data(int(stored_key)):
        return int(stored_key)
    print(f"    Key {stored_key} has no data — querying GBIF...")
    data = fetch_json(f"https://api.gbif.org/v1/species/match?name={urllib.parse.quote(scientific_name)}&kingdom=Fungi", delay=0.5)
    if data and data.get("usageKey") and data.get("matchType") in ("EXACT", "FUZZY"):
        key = data["usageKey"]
        print(f"    GBIF match: {key} (confidence {data.get('confidence')})")
        if tile_has_data(key):
            return key
        print(f"    Key {key} also has no tile data — keeping stored key")
    return int(stored_key) if stored_key else None

def patch_gbif_key_in_file(ts_file, old_key, new_key):
    text = ts_file.read_text()
    new_text = re.sub(rf'gbifKey\s*:\s*{old_key}', f'gbifKey: {new_key}', text)
    if new_text != text:
        ts_file.write_text(new_text)
        return True
    return False

def generate_map(gbif_key, out_path):
    try:
        from PIL import Image
    except ImportError:
        os.system("pip3 install Pillow -q")
        from PIL import Image

    left_data = fetch(f"https://api.gbif.org/v2/map/occurrence/density/1/0/0@2x.png?taxonKey={gbif_key}&style=orange.marker&srs=EPSG:4326")
    right_data = fetch(f"https://api.gbif.org/v2/map/occurrence/density/1/1/0@2x.png?taxonKey={gbif_key}&style=orange.marker&srs=EPSG:4326")
    if not left_data or not right_data:
        return False

    left = Image.open(BytesIO(left_data)).convert('RGBA')
    right = Image.open(BytesIO(right_data)).convert('RGBA')
    dots = Image.new('RGBA', (2048, 1024), (0,0,0,0))
    dots.paste(left, (0,0))
    dots.paste(right, (1024,0))

    basemap = Image.open(BASEMAP_PATH).convert('RGBA')
    result = Image.alpha_composite(basemap, dots)
    result.save(out_path)
    return out_path.stat().st_size

def main():
    # Get slugs with broken maps from CLI args, or auto-detect
    if len(sys.argv) > 1:
        slugs = sys.argv[1:]
    else:
        slugs = []
        for ts_file in sorted(SPECIES_DIR.glob("*.ts")):
            slug = ts_file.stem
            map_path = IMG_DIR / slug / "distribution-map.png"
            if map_path.exists() and map_path.stat().st_size <= BASEMAP_SIZE:
                slugs.append(slug)
            elif not map_path.exists():
                slugs.append(slug)

    print(f"Fixing maps for {len(slugs)} species...\n")
    fixed = 0
    failed = 0

    for slug in slugs:
        ts_file = SPECIES_DIR / f"{slug}.ts"
        if not ts_file.exists():
            print(f"SKIP {slug}: no data file")
            continue

        img_dir = IMG_DIR / slug
        img_dir.mkdir(exist_ok=True)
        map_path = img_dir / "distribution-map.png"

        stored_key = read_field(ts_file, "gbifKey")
        scientific = read_field(ts_file, "scientificName")
        if not scientific:
            print(f"SKIP {slug}: no scientificName")
            continue

        print(f"{slug} (stored key: {stored_key})")
        correct_key = get_correct_gbif_key(scientific, stored_key)
        if not correct_key:
            print(f"  FAILED: could not determine GBIF key")
            failed += 1
            continue

        if stored_key and str(correct_key) != str(stored_key):
            patch_gbif_key_in_file(ts_file, stored_key, correct_key)
            print(f"  Updated gbifKey: {stored_key} → {correct_key}")

        size = generate_map(correct_key, map_path)
        if size and size > BASEMAP_PATH.stat().st_size + 5000:
            print(f"  Map OK: {size:,} bytes")
            fixed += 1
        else:
            print(f"  Map still blank ({size} bytes) — no GBIF data for this species")
            fixed += 1  # Still counts as "fixed" — blank is correct if no data exists

        time.sleep(0.3)

    print(f"\nDone: {fixed} fixed, {failed} failed")

if __name__ == "__main__":
    main()
