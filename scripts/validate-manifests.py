#!/usr/bin/env python3
"""
Validate species images and distribution maps against design lock requirements.
Run before build: python3 scripts/validate-manifests.py

Exit code 0 = all checks pass
Exit code 1 = validation errors found
"""

import os, sys, re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SPECIES_DIR = ROOT / "data" / "species"
IMG_DIR = ROOT / "public" / "images" / "species"
BASEMAP = IMG_DIR / "_basemap.png"

ERRORS = []
WARNINGS = []

def err(slug, msg):
    ERRORS.append(f"ERROR [{slug}] {msg}")

def warn(slug, msg):
    WARNINGS.append(f"WARN  [{slug}] {msg}")

def check_basemap():
    if not BASEMAP.exists():
        ERRORS.append("ERROR [basemap] _basemap.png missing")
        return
    size = BASEMAP.stat().st_size
    if size < 100_000 or size > 200_000:
        ERRORS.append(f"ERROR [basemap] unexpected size {size} bytes (expected ~131KB Natural Earth)")
    else:
        print(f"OK    [basemap] {size} bytes")

def read_gbif_key(ts_file):
    text = ts_file.read_text()
    m = re.search(r'gbifKey\s*:\s*(\d+)', text)
    return int(m.group(1)) if m else None

def read_images(ts_file):
    text = ts_file.read_text()
    filenames = re.findall(r'filename\s*:\s*["\']([^"\']+)["\']', text)
    return filenames

def check_species(slug):
    ts_file = SPECIES_DIR / f"{slug}.ts"
    if not ts_file.exists():
        err(slug, "data file missing")
        return

    img_dir = IMG_DIR / slug
    if not img_dir.exists():
        err(slug, "image directory missing")
        return

    # Check distribution map
    map_file = img_dir / "distribution-map.png"
    if not map_file.exists():
        err(slug, "distribution-map.png missing")
    else:
        map_size = map_file.stat().st_size
        if map_size < 131_000:
            err(slug, f"map too small ({map_size} bytes) — likely blank/wrong GBIF key (basemap=131KB)")
        elif map_size < 150_000:
            warn(slug, f"map is small ({map_size} bytes) — species may have sparse sightings")
        else:
            pass  # OK

    # Check GBIF key present
    gbif_key = read_gbif_key(ts_file)
    if not gbif_key:
        err(slug, "gbifKey missing from data file")

    # Check images
    filenames = read_images(ts_file)
    if len(filenames) < 5:
        warn(slug, f"only {len(filenames)} images (want 5)")

    for fname in filenames:
        fpath = img_dir / fname
        if not fpath.exists():
            err(slug, f"image file missing: {fname}")
        else:
            size = fpath.stat().st_size
            if size < 60_000:
                err(slug, f"image too small ({size} bytes, <60KB): {fname} — likely icon/thumbnail")

def main():
    print("=== Orangutany Manifest Validation ===\n")

    check_basemap()

    # Get all species slugs from data files
    slugs = sorted(f.stem for f in SPECIES_DIR.glob("*.ts") if not f.name.startswith("_"))
    print(f"Checking {len(slugs)} species...\n")

    for slug in slugs:
        check_species(slug)

    if WARNINGS:
        print("\nWarnings:")
        for w in WARNINGS:
            print(f"  {w}")

    if ERRORS:
        print(f"\nErrors ({len(ERRORS)}):")
        for e in ERRORS:
            print(f"  {e}")
        print(f"\nFAILED: {len(ERRORS)} error(s), {len(WARNINGS)} warning(s)")
        sys.exit(1)
    else:
        print(f"\nPASSED: 0 errors, {len(WARNINGS)} warning(s)")
        sys.exit(0)

if __name__ == "__main__":
    main()
