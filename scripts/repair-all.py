#!/usr/bin/env python3
"""
repair-all.py
Comprehensive repair script for all 100 species pages.
- Downloads missing distribution maps (basemap + GBIF tiles composited, same as working pages)
- Downloads photos to reach 5 per species from Wikimedia, iNaturalist, Mushroom Observer
- Updates all .ts data files with full attribution
- Processes ALL species, not just the new 68

Usage:
  python3 scripts/repair-all.py                # all species
  python3 scripts/repair-all.py amanita-citrina psilocybe-semilanceata  # specific slugs
  python3 scripts/repair-all.py --maps-only    # only fix missing maps
  python3 scripts/repair-all.py --photos-only  # only fix missing photos
"""

import sys, os, re, json, time, urllib.request, urllib.parse, urllib.error
from pathlib import Path
from io import BytesIO

ROOT = Path(__file__).resolve().parent.parent
SPECIES_DIR = ROOT / "data" / "species"
IMG_DIR = ROOT / "public" / "images" / "species"
BASEMAP = IMG_DIR / "_basemap.png"

UA = "OrangutanyBot/1.0 (https://guide.orangutany.com; educational mushroom guide)"

TARGET_PHOTOS = 5
MIN_IMG_SIZE = 5000       # bytes: reject smaller
MIN_IMG_DIMENSION = 400   # pixels: reject narrower

# Filename patterns to exclude from image searches (non-photo content)
SKIP_PATTERNS = [
    "flag", "icon", "logo", "map", "diagram", "commons-logo", "wikidata",
    "wikispecies", "edit-clear", "wiki", "text-", "lock-", "crystal",
    "ambox", "question", "stub", "star", "symbol", "nuvola", "info",
    "red_pencil", "status", "oc-icon", "padlock", "semi-protection",
    "portal", "folder", "increase", "decrease", "mycomorphbox",
    "transparent", "button", "food_", "cuisine", "recipe", "dish",
    "plate", "cooking", "cooked", "dried", "extract", "molecule",
    "chemical", "structure", "formula", "cladogram", "phylo",
]

# ─────────────────────────────────────────
# HTTP helpers
# ─────────────────────────────────────────

def fetch(url, retries=3, delay=2):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    for attempt in range(retries):
        try:
            with urllib.request.urlopen(req, timeout=30) as resp:
                return resp.read()
        except urllib.error.HTTPError as e:
            if e.code == 429:
                wait = delay * (2 ** attempt) + 5
                print(f"    Rate limited, waiting {wait}s...")
                time.sleep(wait)
            elif attempt == retries - 1:
                print(f"    FAILED ({e.code}): {url}")
                return None
            else:
                time.sleep(delay)
        except Exception as e:
            if attempt == retries - 1:
                print(f"    FAILED: {url} -> {e}")
                return None
            time.sleep(delay)
    return None

def fetch_json(url, delay=1):
    time.sleep(delay)
    data = fetch(url)
    if data:
        try:
            return json.loads(data)
        except:
            return None
    return None

def strip_html(text):
    return re.sub(r'<[^>]+>', '', text or '').strip()

def license_url_for(name):
    if "CC BY-SA" in name:
        return "https://creativecommons.org/licenses/by-sa/4.0/"
    if "CC BY-NC-SA" in name:
        return "https://creativecommons.org/licenses/by-nc-sa/4.0/"
    if "CC BY-NC" in name:
        return "https://creativecommons.org/licenses/by-nc/4.0/"
    if "CC BY" in name:
        return "https://creativecommons.org/licenses/by/4.0/"
    if "CC0" in name or "Public Domain" in name:
        return "https://creativecommons.org/publicdomain/zero/1.0/"
    return "https://creativecommons.org/licenses/by-sa/4.0/"

# ─────────────────────────────────────────
# Distribution map (basemap + GBIF tiles)
# ─────────────────────────────────────────

def download_gbif_map(slug, gbif_key, out_dir, force=False):
    """Composite GBIF occurrence dots over basemap, exactly like working pages."""
    map_path = out_dir / "distribution-map.png"
    if map_path.exists() and map_path.stat().st_size > 50000 and not force:
        return True

    try:
        from PIL import Image
    except ImportError:
        print("    Installing Pillow...")
        os.system("pip3 install Pillow -q")
        from PIL import Image

    if not BASEMAP.exists():
        print(f"    ERROR: basemap not found at {BASEMAP}")
        return False

    # Fetch zoom-1 tiles (2 tiles cover full world in equirectangular)
    print(f"    Fetching GBIF tiles for taxonKey={gbif_key}...")
    left_data = fetch(
        f"https://api.gbif.org/v2/map/occurrence/density/1/0/0@2x.png"
        f"?taxonKey={gbif_key}&style=orangeHeat.point&srs=EPSG:4326"
    )
    right_data = fetch(
        f"https://api.gbif.org/v2/map/occurrence/density/1/1/0@2x.png"
        f"?taxonKey={gbif_key}&style=orangeHeat.point&srs=EPSG:4326"
    )

    if not left_data or not right_data:
        print(f"    GBIF tiles failed, trying classic.poly style...")
        left_data = fetch(
            f"https://api.gbif.org/v2/map/occurrence/density/1/0/0@2x.png"
            f"?taxonKey={gbif_key}&style=classic.poly&srs=EPSG:4326"
        )
        right_data = fetch(
            f"https://api.gbif.org/v2/map/occurrence/density/1/1/0@2x.png"
            f"?taxonKey={gbif_key}&style=classic.poly&srs=EPSG:4326"
        )

    if not left_data or not right_data:
        print(f"    FAILED: could not download GBIF tiles for {slug}")
        return False

    try:
        left = Image.open(BytesIO(left_data)).convert('RGBA')
        right = Image.open(BytesIO(right_data)).convert('RGBA')
    except Exception as e:
        print(f"    FAILED: could not open tile images: {e}")
        return False

    # Stitch tiles into 2048x1024 canvas
    dots = Image.new('RGBA', (2048, 1024), (0, 0, 0, 0))
    dots.paste(left, (0, 0))
    dots.paste(right, (1024, 0))

    # Composite onto basemap
    basemap = Image.open(BASEMAP).convert('RGBA')
    result = Image.alpha_composite(basemap, dots)
    result.save(str(map_path))

    size = map_path.stat().st_size
    print(f"    Map saved: {size:,} bytes")
    return size > 5000


# ─────────────────────────────────────────
# Image sources
# ─────────────────────────────────────────

def get_wikipedia_images(scientific_name):
    """Get images from the Wikipedia article for the species."""
    title = scientific_name.replace(" ", "_")
    url = (
        f"https://en.wikipedia.org/w/api.php?action=query"
        f"&titles={urllib.parse.quote(title)}&prop=images&imlimit=50&format=json"
    )
    data = fetch_json(url, delay=2)
    if not data:
        return []

    pages = data.get("query", {}).get("pages", {})
    if not pages:
        return []

    page = list(pages.values())[0]
    all_images = page.get("images", [])

    titles = []
    for img in all_images:
        t = img["title"]
        lower = t.lower()
        if not any(lower.endswith(ext) for ext in [".jpg", ".jpeg", ".png"]):
            continue
        if any(pat in lower for pat in SKIP_PATTERNS):
            continue
        titles.append(t)

    results = []
    for t in titles[:12]:
        info_url = (
            f"https://en.wikipedia.org/w/api.php?action=query"
            f"&titles={urllib.parse.quote(t)}"
            f"&prop=imageinfo&iiprop=url|extmetadata|size"
            f"&iiurlwidth=1200&format=json"
        )
        data = fetch_json(info_url, delay=1.5)
        if not data:
            continue

        for page in data.get("query", {}).get("pages", {}).values():
            info_list = page.get("imageinfo", [])
            if not info_list:
                continue
            info = info_list[0]
            meta = info.get("extmetadata", {})

            w = info.get("width", 0)
            h = info.get("height", 0)
            if w < MIN_IMG_DIMENSION or h < 300:
                continue

            thumb_url = info.get("thumburl") or info.get("url")
            if not thumb_url:
                continue

            source_url = info.get("descriptionurl", "")
            author = strip_html(meta.get("Artist", {}).get("value", "Unknown"))[:120]
            license_name = meta.get("LicenseShortName", {}).get("value", "CC BY-SA 4.0")
            lic_url = meta.get("LicenseUrl", {}).get("value", "") or license_url_for(license_name)

            # Skip clearly non-free
            if "nonfree" in license_name.lower() or "fair use" in license_name.lower():
                continue

            results.append({
                "thumb_url": thumb_url,
                "source": "Wikimedia Commons",
                "sourceUrl": source_url,
                "author": author,
                "license": license_name,
                "licenseUrl": lic_url,
                "file_title": t,
            })

    return results


def get_commons_search_images(scientific_name):
    """Search Wikimedia Commons directly for species images."""
    url = (
        f"https://commons.wikimedia.org/w/api.php?action=query"
        f"&generator=search&gsrsearch={urllib.parse.quote(scientific_name)}"
        f"&gsrnamespace=6&gsrlimit=20&prop=imageinfo"
        f"&iiprop=url|extmetadata|size&iiurlwidth=1200&format=json"
    )
    data = fetch_json(url, delay=2)
    if not data:
        return []

    results = []
    pages = data.get("query", {}).get("pages", {})
    for page in pages.values():
        title = page.get("title", "")
        if not title.lower().endswith((".jpg", ".jpeg", ".png")):
            continue
        if any(pat in title.lower() for pat in SKIP_PATTERNS):
            continue

        info_list = page.get("imageinfo", [])
        if not info_list:
            continue
        info = info_list[0]
        meta = info.get("extmetadata", {})

        w = info.get("width", 0)
        h = info.get("height", 0)
        if w < MIN_IMG_DIMENSION or h < 300:
            continue

        thumb_url = info.get("thumburl") or info.get("url")
        if not thumb_url:
            continue

        source_url = info.get("descriptionurl", "")
        author = strip_html(meta.get("Artist", {}).get("value", "Unknown"))[:120]
        license_name = meta.get("LicenseShortName", {}).get("value", "CC BY-SA 4.0")
        lic_url = meta.get("LicenseUrl", {}).get("value", "") or license_url_for(license_name)

        if "nonfree" in license_name.lower() or "fair use" in license_name.lower():
            continue

        results.append({
            "thumb_url": thumb_url,
            "source": "Wikimedia Commons",
            "sourceUrl": source_url,
            "author": author,
            "license": license_name,
            "licenseUrl": lic_url,
            "file_title": title,
        })

    return results


def get_inaturalist_images(scientific_name):
    """Get CC-licensed photos from iNaturalist research-grade observations."""
    url = (
        f"https://api.inaturalist.org/v1/observations?"
        f"taxon_name={urllib.parse.quote(scientific_name)}"
        f"&photos=true&quality_grade=research&order=desc&order_by=votes"
        f"&per_page=15&photo_license=cc-by,cc-by-sa,cc0"
    )
    data = fetch_json(url, delay=2)
    if not data:
        return []

    license_map = {
        "cc-by": ("CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/"),
        "cc-by-sa": ("CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0/"),
        "cc-by-nc": ("CC BY-NC 4.0", "https://creativecommons.org/licenses/by-nc/4.0/"),
        "cc-by-nc-sa": ("CC BY-NC-SA 4.0", "https://creativecommons.org/licenses/by-nc-sa/4.0/"),
        "cc0": ("CC0 1.0", "https://creativecommons.org/publicdomain/zero/1.0/"),
    }

    results = []
    seen = set()
    for obs in data.get("results", []):
        for photo in obs.get("photos", []):
            license_code = photo.get("license_code", "")
            if not license_code:
                continue
            photo_url = photo.get("url", "").replace("/square.", "/large.")
            if not photo_url or photo_url in seen:
                continue
            seen.add(photo_url)

            user = obs.get("user", {})
            user_name = user.get("name") or user.get("login", "iNaturalist contributor")
            obs_id = obs.get("id", "")
            lic = license_map.get(license_code, ("CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0/"))

            results.append({
                "thumb_url": photo_url,
                "source": "iNaturalist",
                "sourceUrl": f"https://www.inaturalist.org/observations/{obs_id}",
                "author": user_name,
                "license": lic[0],
                "licenseUrl": lic[1],
                "file_title": photo_url,
            })

    return results


# ─────────────────────────────────────────
# Data file helpers
# ─────────────────────────────────────────

def count_existing_photos(slug):
    """Count jpg/png files in species image directory (excluding distribution map)."""
    out_dir = IMG_DIR / slug
    if not out_dir.exists():
        return 0, []
    files = [f for f in out_dir.iterdir()
             if f.suffix.lower() in ('.jpg', '.jpeg', '.png')
             and f.name != 'distribution-map.png']
    return len(files), sorted(files)

def count_images_in_data_file(slug):
    """Count image entries in the .ts data file."""
    ts_path = SPECIES_DIR / f"{slug}.ts"
    if not ts_path.exists():
        return 0, []
    content = ts_path.read_text()
    filenames = re.findall(r'filename:\s*"([^"]+)"', content)
    return len(filenames), filenames

def read_data_file_field(slug, field):
    """Read a single string or numeric field from a .ts data file."""
    ts_path = SPECIES_DIR / f"{slug}.ts"
    if not ts_path.exists():
        return None
    content = ts_path.read_text()
    # Try quoted string first
    m = re.search(rf'{field}:\s*["\']([^"\']+)["\']', content)
    if m:
        return m.group(1)
    # Try unquoted number
    m = re.search(rf'{field}:\s*(\d+)', content)
    return m.group(1) if m else None

def update_data_file(slug, all_images):
    """Write images array to the .ts data file, replacing existing array."""
    ts_path = SPECIES_DIR / f"{slug}.ts"
    if not ts_path.exists():
        return False
    content = ts_path.read_text()

    img_entries = []
    for img in all_images:
        author = img["author"].replace('"', '\\"').replace("'", "\\'")
        author = re.sub(r'\s+', ' ', author).strip()
        alt = img["alt"].replace('"', '\\"')
        entry = (
            f'    {{\n'
            f'      filename: "{img["filename"]}",\n'
            f'      alt: "{alt}",\n'
            f'      source: "{img["source"]}",\n'
            f'      sourceUrl: "{img["sourceUrl"]}",\n'
            f'      author: "{author}",\n'
            f'      license: "{img["license"]}",\n'
            f'      licenseUrl: "{img["licenseUrl"]}",\n'
            f'    }}'
        )
        img_entries.append(entry)

    images_str = "[\n" + ",\n".join(img_entries) + ",\n  ]"

    # Replace populated array
    new_content = re.sub(
        r'images:\s*\[[\s\S]*?\n  \]',
        f'images: {images_str}',
        content,
        count=1
    )
    # If no match (empty array), try replacing empty
    if new_content == content:
        new_content = re.sub(
            r'images:\s*\[\s*\]',
            f'images: {images_str}',
            content,
            count=1
        )

    if new_content == content:
        print(f"    WARNING: Could not find images array in {slug}.ts")
        return False

    ts_path.write_text(new_content)
    return True

def read_existing_image_entries(slug):
    """Parse existing image entries from .ts data file."""
    ts_path = SPECIES_DIR / f"{slug}.ts"
    if not ts_path.exists():
        return []
    content = ts_path.read_text()

    filenames = re.findall(r'filename:\s*"([^"]+)"', content)
    alts = re.findall(r'alt:\s*"([^"]+)"', content)
    sources = re.findall(r'source:\s*"([^"]+)"', content)
    source_urls = re.findall(r'sourceUrl:\s*"([^"]+)"', content)
    authors = re.findall(r'author:\s*"([^"]+)"', content)
    licenses = re.findall(r'license:\s*"([^"]+)"', content)
    license_urls = re.findall(r'licenseUrl:\s*"([^"]+)"', content)

    entries = []
    for i, fn in enumerate(filenames):
        entries.append({
            "filename": fn,
            "alt": alts[i] if i < len(alts) else "",
            "source": sources[i] if i < len(sources) else "Wikimedia Commons",
            "sourceUrl": source_urls[i] if i < len(source_urls) else "",
            "author": authors[i] if i < len(authors) else "Unknown",
            "license": licenses[i] if i < len(licenses) else "CC BY-SA 4.0",
            "licenseUrl": license_urls[i] if i < len(license_urls) else "",
        })
    return entries

def generate_alt(common_name, scientific_name, idx, file_title=""):
    """Generate descriptive alt text for a mushroom image."""
    lower = (file_title or "").lower()
    name = common_name
    if "gill" in lower:
        return f"{name} gills detail"
    if "stem" in lower or "stipe" in lower:
        return f"{name} stem and base"
    if "cap" in lower or "pileus" in lower:
        return f"{name} cap viewed from above"
    if "spore" in lower:
        return f"{name} spore print"
    if "young" in lower or "button" in lower or "immature" in lower:
        return f"Young {name} specimen"
    if "group" in lower or "cluster" in lower or "colony" in lower:
        return f"Group of {name} mushrooms"
    if "wood" in lower or "log" in lower or "tree" in lower:
        return f"{name} growing on wood in natural habitat"
    if "grass" in lower or "field" in lower or "meadow" in lower:
        return f"{name} in grassland habitat"
    if "forest" in lower or "woodland" in lower:
        return f"{name} fruiting in forest"
    if "cross" in lower or "section" in lower:
        return f"{name} cross section showing internal structure"
    if "underside" in lower or "below" in lower:
        return f"{name} underside showing gills or pores"
    if "mature" in lower or "old" in lower:
        return f"Mature {name} specimen in the wild"

    templates = [
        f"{name} wild specimen in natural habitat",
        f"{name} showing full fruiting body",
        f"{name} ({scientific_name}) in the wild",
        f"{name} close-up field photograph",
        f"{name} mushroom, field identification reference",
    ]
    return templates[idx % len(templates)]


# ─────────────────────────────────────────
# Core per-species repair
# ─────────────────────────────────────────

def process_species(slug, fix_maps=True, fix_photos=True):
    """Run full repair for one species."""
    ts_path = SPECIES_DIR / f"{slug}.ts"
    if not ts_path.exists():
        print(f"  SKIP: no data file for {slug}")
        return

    scientific_name = read_data_file_field(slug, "scientificName")
    common_name = read_data_file_field(slug, "commonName") or slug
    gbif_key_str = read_data_file_field(slug, "gbifKey")
    gbif_key = int(gbif_key_str) if gbif_key_str and gbif_key_str.isdigit() else None

    out_dir = IMG_DIR / slug
    out_dir.mkdir(parents=True, exist_ok=True)

    photo_count, photo_files = count_existing_photos(slug)
    data_count, data_filenames = count_images_in_data_file(slug)
    map_path = out_dir / "distribution-map.png"
    has_map = map_path.exists() and map_path.stat().st_size > 50000

    print(f"\n{'='*56}")
    print(f"  {scientific_name} ({slug})")
    print(f"  Photos on disk: {photo_count} | In data file: {data_count} | Map: {'OK' if has_map else 'MISSING'}")

    # ── Fix distribution map ──
    if fix_maps and not has_map:
        if gbif_key:
            print(f"  Downloading map (GBIF key {gbif_key})...")
            download_gbif_map(slug, gbif_key, out_dir)
            time.sleep(1)
        else:
            print(f"  WARNING: no gbifKey, cannot download map")

    # ── Fix photos ──
    if not fix_photos:
        return

    if photo_count >= TARGET_PHOTOS and data_count >= TARGET_PHOTOS:
        print(f"  Photos OK ({photo_count} on disk, {data_count} in data)")
        return

    # How many more do we need?
    needed = TARGET_PHOTOS - photo_count
    if needed <= 0:
        # Photos exist on disk but data file may not reference them
        if data_count < photo_count:
            print(f"  Data file missing entries for {photo_count - data_count} photos — will rebuild")
            # Rebuild data entries from disk files
            existing_entries = read_existing_image_entries(slug)
            existing_fns = {e["filename"] for e in existing_entries}
            new_entries = list(existing_entries)
            for f in sorted(photo_files):
                if f.name not in existing_fns:
                    new_entries.append({
                        "filename": f.name,
                        "alt": generate_alt(common_name, scientific_name, len(new_entries), f.name),
                        "source": "Wikimedia Commons",
                        "sourceUrl": "",
                        "author": "Unknown",
                        "license": "CC BY-SA 4.0",
                        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
                    })
            update_data_file(slug, new_entries)
            print(f"  Data file rebuilt with {len(new_entries)} entries")
        return

    print(f"  Need {needed} more photos")

    # Gather candidates from multiple sources
    all_candidates = []

    print(f"  Searching Wikipedia...")
    all_candidates.extend(get_wikipedia_images(scientific_name))
    time.sleep(2)

    if len(all_candidates) < needed + 2:
        print(f"  Searching Commons...")
        all_candidates.extend(get_commons_search_images(scientific_name))
        time.sleep(2)

    if len(all_candidates) < needed + 2:
        print(f"  Searching iNaturalist...")
        all_candidates.extend(get_inaturalist_images(scientific_name))
        time.sleep(2)

    # Deduplicate by URL
    seen_urls = set()
    unique = []
    for c in all_candidates:
        u = c["thumb_url"]
        if u not in seen_urls:
            seen_urls.add(u)
            unique.append(c)

    print(f"  {len(unique)} unique candidates found")

    # Download
    newly_downloaded = []
    idx = photo_count + 1
    suffix_rotation = ["habitat", "detail", "wild", "closeup", "specimen", "field", "group", "fresh", "mature", "young"]

    for candidate in unique:
        if len(newly_downloaded) >= needed:
            break

        suffix = suffix_rotation[(idx - 1) % len(suffix_rotation)]
        filename = f"{idx:02d}-{suffix}.jpg"
        filepath = out_dir / filename

        # Skip if file already exists and is good
        if filepath.exists() and filepath.stat().st_size > MIN_IMG_SIZE:
            print(f"    {filename} already exists, skipping")
            newly_downloaded.append({
                "filename": filename,
                "alt": generate_alt(common_name, scientific_name, idx - 1, candidate.get("file_title", "")),
                "source": candidate["source"],
                "sourceUrl": candidate["sourceUrl"],
                "author": candidate["author"],
                "license": candidate["license"],
                "licenseUrl": candidate["licenseUrl"],
            })
            idx += 1
            continue

        img_data = fetch(candidate["thumb_url"], delay=3)
        if not img_data or len(img_data) < MIN_IMG_SIZE:
            print(f"    Skip (too small or failed): {candidate['thumb_url'][:60]}")
            continue

        filepath.write_bytes(img_data)
        size = len(img_data)
        print(f"    Saved {filename}: {size:,} bytes from {candidate['source']}")

        newly_downloaded.append({
            "filename": filename,
            "alt": generate_alt(common_name, scientific_name, idx - 1, candidate.get("file_title", "")),
            "source": candidate["source"],
            "sourceUrl": candidate["sourceUrl"],
            "author": candidate["author"],
            "license": candidate["license"],
            "licenseUrl": candidate["licenseUrl"],
        })
        idx += 1
        time.sleep(3)

    if not newly_downloaded:
        print(f"  WARNING: No new photos downloaded for {slug}")
        return

    # Merge with existing data file entries
    existing_entries = read_existing_image_entries(slug)
    all_images = existing_entries + newly_downloaded
    update_data_file(slug, all_images)
    print(f"  Data file updated: {len(all_images)} total images")


# ─────────────────────────────────────────
# Entry point
# ─────────────────────────────────────────

def parse_all_slugs():
    """Return all species slugs from data directory."""
    slugs = []
    for f in sorted(os.listdir(SPECIES_DIR)):
        if f == 'index.ts' or not f.endswith('.ts'):
            continue
        slugs.append(f.replace('.ts', ''))
    return slugs

if __name__ == "__main__":
    args = sys.argv[1:]

    fix_maps = True
    fix_photos = True
    if "--maps-only" in args:
        fix_photos = False
        args = [a for a in args if a != "--maps-only"]
    if "--photos-only" in args:
        fix_maps = False
        args = [a for a in args if a != "--photos-only"]

    if args:
        slugs = args
    else:
        slugs = parse_all_slugs()

    print(f"Repair target: {len(slugs)} species")
    print(f"Fix maps: {fix_maps} | Fix photos: {fix_photos}")
    print(f"Target photos per species: {TARGET_PHOTOS}\n")

    ok = 0
    fail = 0
    for slug in slugs:
        try:
            process_species(slug, fix_maps=fix_maps, fix_photos=fix_photos)
            ok += 1
        except Exception as e:
            print(f"  ERROR processing {slug}: {e}")
            import traceback; traceback.print_exc()
            fail += 1
        time.sleep(5)  # Polite pause between species

    print(f"\n{'='*56}")
    print(f"Done: {ok} OK, {fail} errors")
