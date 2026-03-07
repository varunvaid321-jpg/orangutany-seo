#!/usr/bin/env python3
"""
Download images for species that are missing them.
Usage: python3 scripts/download-species-images.py <slug1> <slug2> ...
Or: python3 scripts/download-species-images.py --batch <N> --of <M>
"""

import sys, os, re, json, time, urllib.request, urllib.parse, urllib.error
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SPECIES_DIR = ROOT / "data" / "species"
IMG_DIR = ROOT / "public" / "images" / "species"
BASEMAP = IMG_DIR / "_basemap.png"

UA = "OrangutanyBot/1.0 (https://guide.orangutany.com; educational mushroom guide)"

def fetch(url, retries=3):
    """Fetch URL with retries and proper user agent."""
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    for attempt in range(retries):
        try:
            with urllib.request.urlopen(req, timeout=30) as resp:
                return resp.read()
        except Exception as e:
            if attempt == retries - 1:
                print(f"  FAILED: {url} -> {e}")
                return None
            time.sleep(1)

def fetch_json(url):
    data = fetch(url)
    if data:
        return json.loads(data)
    return None

def download_gbif_map(slug, gbif_key, out_dir):
    """Download GBIF distribution map: basemap + occurrence dots composited."""
    map_path = out_dir / "distribution-map.png"
    if map_path.exists() and map_path.stat().st_size > 10000:
        print(f"  Map already exists, skipping")
        return True

    try:
        from PIL import Image
    except ImportError:
        os.system("pip3 install Pillow -q")
        from PIL import Image

    # Download occurrence tiles (zoom 1: 2 tiles)
    left_data = fetch(f"https://api.gbif.org/v2/map/occurrence/density/1/0/0@2x.png?taxonKey={gbif_key}&style=orange.marker&srs=EPSG:4326")
    right_data = fetch(f"https://api.gbif.org/v2/map/occurrence/density/1/1/0@2x.png?taxonKey={gbif_key}&style=orange.marker&srs=EPSG:4326")

    if not left_data or not right_data:
        print(f"  Failed to download GBIF tiles")
        return False

    from io import BytesIO
    left = Image.open(BytesIO(left_data)).convert('RGBA')
    right = Image.open(BytesIO(right_data)).convert('RGBA')

    # Stitch tiles
    dots = Image.new('RGBA', (2048, 1024), (0, 0, 0, 0))
    dots.paste(left, (0, 0))
    dots.paste(right, (1024, 0))

    # Load basemap
    basemap = Image.open(BASEMAP).convert('RGBA')

    # Composite
    result = Image.alpha_composite(basemap, dots)
    result.save(map_path)

    size = map_path.stat().st_size
    print(f"  Map: {size} bytes")
    return size > 5000

def get_wiki_images(scientific_name, slug):
    """Get image filenames and metadata from Wikipedia article images API."""
    # First get list of images from the Wikipedia article
    title = scientific_name.replace(" ", "_")
    url = f"https://en.wikipedia.org/w/api.php?action=query&titles={urllib.parse.quote(title)}&prop=images&imlimit=50&format=json"
    data = fetch_json(url)
    if not data:
        return []

    pages = data.get("query", {}).get("pages", {})
    if not pages:
        return []

    page = list(pages.values())[0]
    all_images = page.get("images", [])

    # Filter to actual mushroom photos (jpg/png, skip SVGs, flags, icons, maps)
    skip_patterns = [
        "flag", "icon", "logo", "map", "diagram", "commons-logo", "wikidata",
        "wikispecies", "edit-clear", "wiki", "text-", "lock-", "crystal",
        "ambox", "question", "stub", "star", "symbol", "nuvola", "info",
        "red_pencil", "status", "oc-icon", "padlock", "semi-protection",
        "portal", "folder", "increase", "decrease"
    ]

    good_images = []
    for img in all_images:
        title = img["title"]
        lower = title.lower()
        if not any(lower.endswith(ext) for ext in [".jpg", ".jpeg", ".png"]):
            continue
        if any(pat in lower for pat in skip_patterns):
            continue
        # Prefer images that mention the species name
        good_images.append(title)

    return good_images[:8]  # Get up to 8 candidates

def get_image_info(file_title):
    """Get download URL and metadata for a Wikimedia Commons file."""
    url = (
        f"https://en.wikipedia.org/w/api.php?action=query"
        f"&titles={urllib.parse.quote(file_title)}"
        f"&prop=imageinfo&iiprop=url|extmetadata|size"
        f"&iiurlwidth=960&format=json"
    )
    data = fetch_json(url)
    if not data:
        return None

    pages = data.get("query", {}).get("pages", {})
    for page in pages.values():
        info_list = page.get("imageinfo", [])
        if not info_list:
            continue
        info = info_list[0]
        meta = info.get("extmetadata", {})

        thumb_url = info.get("thumburl") or info.get("url")
        source_url = info.get("descriptionurl", "")
        author = meta.get("Artist", {}).get("value", "Unknown")
        # Strip HTML from author
        author = re.sub(r'<[^>]+>', '', author).strip()
        if len(author) > 100:
            author = author[:97] + "..."

        license_name = meta.get("LicenseShortName", {}).get("value", "CC BY-SA 4.0")
        license_url = meta.get("LicenseUrl", {}).get("value", "")
        if not license_url and "CC BY-SA" in license_name:
            license_url = "https://creativecommons.org/licenses/by-sa/4.0/"
        elif not license_url and "CC BY" in license_name:
            license_url = "https://creativecommons.org/licenses/by/4.0/"
        elif not license_url:
            license_url = "https://creativecommons.org/licenses/by-sa/4.0/"

        return {
            "thumb_url": thumb_url,
            "source_url": source_url,
            "author": author,
            "license": license_name,
            "license_url": license_url,
            "width": info.get("width", 0),
            "height": info.get("height", 0),
        }
    return None

def download_species_photos(scientific_name, slug, out_dir):
    """Download up to 5 photos for a species from Wikimedia Commons."""
    wiki_images = get_wiki_images(scientific_name, slug)
    if not wiki_images:
        print(f"  No Wikipedia images found, trying Commons search...")
        # Fallback: search Commons directly
        search_url = (
            f"https://commons.wikimedia.org/w/api.php?action=query"
            f"&generator=search&gsrsearch={urllib.parse.quote(scientific_name)}"
            f"&gsrnamespace=6&gsrlimit=10&prop=imageinfo"
            f"&iiprop=url|extmetadata|size&iiurlwidth=960&format=json"
        )
        data = fetch_json(search_url)
        if data:
            pages = data.get("query", {}).get("pages", {})
            wiki_images = [p.get("title", "") for p in pages.values() if p.get("title", "").lower().endswith((".jpg", ".jpeg", ".png"))]

    downloaded = []
    idx = 1
    for file_title in wiki_images:
        if idx > 5:
            break

        info = get_image_info(file_title)
        if not info or not info["thumb_url"]:
            continue

        # Download the image
        img_data = fetch(info["thumb_url"])
        if not img_data or len(img_data) < 5000:
            continue

        filename = f"{idx:02d}-{slug.split('-')[-1]}-{idx}.jpg"
        filepath = out_dir / filename
        filepath.write_bytes(img_data)

        print(f"  Photo {idx}: {len(img_data)} bytes - {file_title}")

        downloaded.append({
            "filename": filename,
            "alt": f"{scientific_name} mushroom photograph",
            "source": "Wikimedia Commons",
            "sourceUrl": info["source_url"],
            "author": info["author"],
            "license": info["license"],
            "licenseUrl": info["license_url"],
        })
        idx += 1
        time.sleep(2)  # Be polite to Wikimedia API (429 rate limit)

    return downloaded

def update_data_file(slug, images):
    """Update the species .ts data file to include image metadata."""
    ts_path = SPECIES_DIR / f"{slug}.ts"
    if not ts_path.exists():
        print(f"  WARNING: {ts_path} not found")
        return False

    content = ts_path.read_text()

    # Build images array string
    img_entries = []
    for img in images:
        # Escape quotes in author names
        author = img["author"].replace('"', '\\"').replace("'", "\\'")
        entry = f"""    {{
      filename: "{img['filename']}",
      alt: "{img['alt']}",
      source: "{img['source']}",
      sourceUrl: "{img['sourceUrl']}",
      author: "{author}",
      license: "{img['license']}",
      licenseUrl: "{img['licenseUrl']}",
    }}"""
        img_entries.append(entry)

    images_str = "[\n" + ",\n".join(img_entries) + ",\n  ]"

    # Replace images: [] with the new array
    new_content = re.sub(
        r'images:\s*\[\s*\]',
        f'images: {images_str}',
        content,
        count=1
    )

    if new_content == content:
        print(f"  WARNING: Could not replace images array in {slug}.ts")
        return False

    ts_path.write_text(new_content)
    print(f"  Updated {slug}.ts with {len(images)} images")
    return True

def process_species(slug, gbif_key, scientific_name):
    """Full pipeline for one species."""
    print(f"\n{'='*60}")
    print(f"Processing: {scientific_name} ({slug})")
    print(f"  GBIF key: {gbif_key}")

    out_dir = IMG_DIR / slug
    out_dir.mkdir(parents=True, exist_ok=True)

    # 1. GBIF distribution map
    print("  Downloading GBIF map...")
    download_gbif_map(slug, gbif_key, out_dir)

    # 2. Wikimedia photos
    print("  Downloading photos...")
    images = download_species_photos(scientific_name, slug, out_dir)

    if not images:
        print(f"  WARNING: No photos downloaded for {slug}")
        return False

    # 3. Update data file
    print("  Updating data file...")
    update_data_file(slug, images)

    return True

def parse_species_list():
    """Read species data from .ts files."""
    species = []
    existing = set(d for d in os.listdir(IMG_DIR) if (IMG_DIR / d).is_dir() and d != "_basemap.png")

    for f in sorted(os.listdir(SPECIES_DIR)):
        if f == 'index.ts' or not f.endswith('.ts'):
            continue
        slug = f.replace('.ts', '')
        # Check if already has images
        if slug in existing and (IMG_DIR / slug / "distribution-map.png").exists():
            continue

        content = (SPECIES_DIR / f).read_text()
        gbif_match = re.search(r'gbifKey:\s*(\d+)', content)
        sci_match = re.search(r'scientificName:\s*"([^"]+)"', content)
        img_match = re.search(r'images:\s*\[\s*\]', content)

        if not img_match:
            continue  # Already has images in data

        gbif_key = gbif_match.group(1) if gbif_match else '0'
        sci_name = sci_match.group(1) if sci_match else slug.replace('-', ' ').title()
        species.append((slug, gbif_key, sci_name))

    return species

if __name__ == "__main__":
    args = sys.argv[1:]

    if "--batch" in args:
        # Batch mode: --batch N --of M
        batch_idx = int(args[args.index("--batch") + 1])
        total_batches = int(args[args.index("--of") + 1])
        all_species = parse_species_list()
        batch_size = len(all_species) // total_batches + 1
        start = (batch_idx - 1) * batch_size
        end = min(start + batch_size, len(all_species))
        species_list = all_species[start:end]
        print(f"Batch {batch_idx}/{total_batches}: processing {len(species_list)} species (indices {start}-{end-1})")
    elif args:
        # Specific slugs
        all_species = parse_species_list()
        slug_map = {s[0]: s for s in all_species}
        species_list = [slug_map[s] for s in args if s in slug_map]
    else:
        species_list = parse_species_list()
        print(f"Processing all {len(species_list)} species without images")

    success = 0
    fail = 0
    for slug, gbif_key, sci_name in species_list:
        try:
            if process_species(slug, gbif_key, sci_name):
                success += 1
            else:
                fail += 1
        except Exception as e:
            print(f"  ERROR processing {slug}: {e}")
            fail += 1
        time.sleep(0.5)  # Rate limiting between species

    print(f"\n{'='*60}")
    print(f"Done! Success: {success}, Failed: {fail}")
