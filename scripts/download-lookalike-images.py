#!/usr/bin/env python3
"""Download lookalike images from iNaturalist (CC-licensed, research-grade).

Usage:
  python3 scripts/download-lookalike-images.py <species-slug>

Reads the species .ts file, finds lookAlikes entries with image filenames,
checks which files are missing, and downloads from iNaturalist.
"""

import json
import re
import sys
import time
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SPECIES_DIR = ROOT / "data" / "species"
IMG_DIR = ROOT / "public" / "images" / "species"

UA = "OrangutanyBot/1.0 (https://guide.orangutany.com; educational mushroom guide)"


def fetch_json(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.loads(r.read().decode())


def download_file(url, dest):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as r:
        data = r.read()
    dest.write_bytes(data)
    return len(data)


def get_inat_photo(taxon_name):
    """Get a single high-quality CC-licensed photo from iNaturalist."""
    encoded = urllib.parse.quote(taxon_name)
    url = (
        f"https://api.inaturalist.org/v1/observations?"
        f"taxon_name={encoded}&quality_grade=research&photos=true"
        f"&photo_license=cc-by,cc-by-sa,cc0&per_page=10&order=desc&order_by=votes"
    )
    data = fetch_json(url)
    for obs in data.get("results", []):
        for photo in obs.get("photos", []):
            photo_url = photo.get("url", "").replace("square", "large")
            if photo_url:
                return {
                    "url": photo_url,
                    "attribution": photo.get("attribution", "iNaturalist contributor"),
                    "license": photo.get("license_code", "cc-by"),
                    "obs_id": obs["id"],
                }
    return None


def parse_lookalikes(ts_content):
    """Extract lookalike entries from TypeScript species file."""
    results = []
    # Find all lookalike image references
    for m in re.finditer(r'name:\s*"([^"]+)"[^}]*?image:\s*"(lookalike-[^"]+)"', ts_content, re.DOTALL):
        name = m.group(1)
        filename = m.group(2)
        # Extract the scientific name (first part in parentheses, or clean the common name)
        sci_match = re.search(r'(\w+ \w+)', name)
        scientific_name = sci_match.group(1) if sci_match else name
        results.append({"name": name, "filename": filename, "scientific_name": scientific_name})
    return results


def main():
    import urllib.parse

    if len(sys.argv) < 2:
        print("Usage: python3 scripts/download-lookalike-images.py <species-slug>")
        sys.exit(1)

    slug = sys.argv[1]
    ts_path = SPECIES_DIR / f"{slug}.ts"
    if not ts_path.exists():
        print(f"ERROR: {ts_path} not found")
        sys.exit(1)

    content = ts_path.read_text()
    lookalikes = parse_lookalikes(content)
    out_dir = IMG_DIR / slug
    out_dir.mkdir(parents=True, exist_ok=True)

    if not lookalikes:
        print(f"No lookalike entries found in {slug}")
        return

    print(f"Found {len(lookalikes)} lookalikes for {slug}")

    for la in lookalikes:
        dest = out_dir / la["filename"]
        if dest.exists() and dest.stat().st_size > 10000:
            print(f"  SKIP {la['filename']} (exists, {dest.stat().st_size:,} bytes)")
            continue

        print(f"  Downloading {la['scientific_name']} -> {la['filename']}...", end=" ", flush=True)
        photo = get_inat_photo(la["scientific_name"])
        if photo:
            size = download_file(photo["url"], dest)
            print(f"{size:,} bytes (obs/{photo['obs_id']}, {photo['license']})")
        else:
            print("FAILED - no CC photo found")

        time.sleep(1)

    print("Done.")


if __name__ == "__main__":
    main()
