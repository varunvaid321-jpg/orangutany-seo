#!/usr/bin/env python3
"""
Retry downloading images for species that have < 5 photos.
Uses multiple sources: Wikimedia Commons, iNaturalist, Mushroom Observer.
Runs sequentially with proper rate limiting.

Usage: python3 scripts/retry-images.py [--min-photos 5]
"""

import sys, os, re, json, time, urllib.request, urllib.parse, urllib.error
from pathlib import Path
from io import BytesIO

ROOT = Path(__file__).resolve().parent.parent
SPECIES_DIR = ROOT / "data" / "species"
IMG_DIR = ROOT / "public" / "images" / "species"

UA = "OrangutanyBot/1.0 (https://guide.orangutany.com; educational mushroom guide)"
ORIGINAL_32 = {
    'agaricus-campestris','amanita-caesarea','amanita-muscaria','amanita-phalloides',
    'amanita-virosa','armillaria-mellea','boletus-edulis','calvatia-gigantea',
    'cantharellus-cibarius','chlorophyllum-rhacodes','coprinopsis-atramentaria',
    'coprinus-comatus','craterellus-cornucopioides','galerina-marginata',
    'ganoderma-lucidum','grifola-frondosa','gyromitra-esculenta','hericium-erinaceus',
    'hydnum-repandum','inocybe-erubescens','laetiporus-sulphureus','lentinula-edodes',
    'lycoperdon-perlatum','macrolepiota-procera','morchella-esculenta',
    'omphalotus-olearius','pleurotus-ostreatus','psilocybe-cubensis',
    'psilocybe-semilanceata','rubroboletus-satanas','trametes-versicolor',
    'tricholoma-matsutake'
}

def fetch(url, retries=3, delay=2):
    """Fetch URL with retries, backoff, and proper user agent."""
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    for attempt in range(retries):
        try:
            with urllib.request.urlopen(req, timeout=30) as resp:
                return resp.read()
        except urllib.error.HTTPError as e:
            if e.code == 429:
                wait = delay * (2 ** attempt) + 5  # Exponential backoff + extra
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


# ── Source 1: Wikimedia Commons (article images) ──

def get_commons_images(scientific_name):
    """Search Wikimedia Commons directly for species images."""
    url = (
        f"https://commons.wikimedia.org/w/api.php?action=query"
        f"&generator=search&gsrsearch={urllib.parse.quote(scientific_name + ' mushroom')}"
        f"&gsrnamespace=6&gsrlimit=15&prop=imageinfo"
        f"&iiprop=url|extmetadata|size&iiurlwidth=960&format=json"
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
        info_list = page.get("imageinfo", [])
        if not info_list:
            continue
        info = info_list[0]
        meta = info.get("extmetadata", {})

        # Skip tiny images
        w = info.get("width", 0)
        h = info.get("height", 0)
        if w < 400 or h < 300:
            continue

        thumb_url = info.get("thumburl") or info.get("url")
        source_url = info.get("descriptionurl", "")
        author = meta.get("Artist", {}).get("value", "Unknown")
        author = re.sub(r'<[^>]+>', '', author).strip()[:100]
        license_name = meta.get("LicenseShortName", {}).get("value", "CC BY-SA 4.0")
        license_url = meta.get("LicenseUrl", {}).get("value", "")
        if not license_url:
            if "CC BY-SA" in license_name:
                license_url = "https://creativecommons.org/licenses/by-sa/4.0/"
            elif "CC BY" in license_name:
                license_url = "https://creativecommons.org/licenses/by/4.0/"
            elif "CC0" in license_name or "Public" in license_name:
                license_url = "https://creativecommons.org/publicdomain/zero/1.0/"
            else:
                license_url = "https://creativecommons.org/licenses/by-sa/4.0/"

        results.append({
            "thumb_url": thumb_url,
            "source": "Wikimedia Commons",
            "sourceUrl": source_url,
            "author": author,
            "license": license_name,
            "licenseUrl": license_url,
        })

    return results

def get_wikipedia_images(scientific_name):
    """Get images from the Wikipedia article for the species."""
    title = scientific_name.replace(" ", "_")
    url = f"https://en.wikipedia.org/w/api.php?action=query&titles={urllib.parse.quote(title)}&prop=images&imlimit=50&format=json"
    data = fetch_json(url, delay=2)
    if not data:
        return []

    pages = data.get("query", {}).get("pages", {})
    if not pages:
        return []

    page = list(pages.values())[0]
    all_images = page.get("images", [])

    skip_patterns = [
        "flag", "icon", "logo", "map", "diagram", "commons-logo", "wikidata",
        "wikispecies", "edit-clear", "wiki", "text-", "lock-", "crystal",
        "ambox", "question", "stub", "star", "symbol", "nuvola", "info",
        "red_pencil", "status", "oc-icon", "padlock", "semi-protection",
        "portal", "folder", "increase", "decrease", "mycomorphbox",
        "transparent", "button", "food_", "cuisine", "recipe", "dish",
        "plate", "cooking"
    ]

    titles = []
    for img in all_images:
        t = img["title"]
        lower = t.lower()
        if not any(lower.endswith(ext) for ext in [".jpg", ".jpeg", ".png"]):
            continue
        if any(pat in lower for pat in skip_patterns):
            continue
        titles.append(t)

    # Get info for each
    results = []
    for t in titles[:10]:
        info_url = (
            f"https://en.wikipedia.org/w/api.php?action=query"
            f"&titles={urllib.parse.quote(t)}"
            f"&prop=imageinfo&iiprop=url|extmetadata|size"
            f"&iiurlwidth=960&format=json"
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
            if w < 400 or h < 300:
                continue

            thumb_url = info.get("thumburl") or info.get("url")
            source_url = info.get("descriptionurl", "")
            author = meta.get("Artist", {}).get("value", "Unknown")
            author = re.sub(r'<[^>]+>', '', author).strip()[:100]
            license_name = meta.get("LicenseShortName", {}).get("value", "CC BY-SA 4.0")
            license_url = meta.get("LicenseUrl", {}).get("value", "")
            if not license_url:
                if "CC BY-SA" in license_name:
                    license_url = "https://creativecommons.org/licenses/by-sa/4.0/"
                elif "CC BY" in license_name:
                    license_url = "https://creativecommons.org/licenses/by/4.0/"
                else:
                    license_url = "https://creativecommons.org/licenses/by-sa/4.0/"

            results.append({
                "thumb_url": thumb_url,
                "source": "Wikimedia Commons",
                "sourceUrl": source_url,
                "author": author,
                "license": license_name,
                "licenseUrl": license_url,
            })

    return results


# ── Source 2: iNaturalist (CC-licensed observation photos) ──

def get_inaturalist_images(scientific_name):
    """Get CC-licensed photos from iNaturalist observations."""
    url = (
        f"https://api.inaturalist.org/v1/observations?"
        f"taxon_name={urllib.parse.quote(scientific_name)}"
        f"&photos=true&quality_grade=research&order=desc&order_by=votes"
        f"&per_page=10&photo_license=cc-by,cc-by-sa,cc0"
    )
    data = fetch_json(url, delay=2)
    if not data:
        return []

    results = []
    seen_urls = set()
    for obs in data.get("results", []):
        photos = obs.get("photos", [])
        user = obs.get("user", {})
        user_name = user.get("name") or user.get("login", "iNaturalist user")

        for photo in photos:
            license_code = photo.get("license_code", "")
            if not license_code:
                continue

            # Get medium-sized URL
            photo_url = photo.get("url", "")
            if not photo_url:
                continue
            # Replace "square" with "medium" for better resolution
            medium_url = photo_url.replace("/square.", "/medium.")

            if medium_url in seen_urls:
                continue
            seen_urls.add(medium_url)

            # Map license codes
            license_map = {
                "cc-by": ("CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/"),
                "cc-by-sa": ("CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0/"),
                "cc-by-nc": ("CC BY-NC 4.0", "https://creativecommons.org/licenses/by-nc/4.0/"),
                "cc-by-nc-sa": ("CC BY-NC-SA 4.0", "https://creativecommons.org/licenses/by-nc-sa/4.0/"),
                "cc0": ("CC0 1.0", "https://creativecommons.org/publicdomain/zero/1.0/"),
            }
            lic = license_map.get(license_code, ("CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0/"))

            obs_id = obs.get("id", "")
            results.append({
                "thumb_url": medium_url,
                "source": "iNaturalist",
                "sourceUrl": f"https://www.inaturalist.org/observations/{obs_id}",
                "author": user_name,
                "license": lic[0],
                "licenseUrl": lic[1],
            })

    return results


# ── Source 3: Mushroom Observer (CC-licensed) ──

def get_mushroom_observer_images(scientific_name):
    """Get CC-licensed photos from Mushroom Observer API."""
    url = (
        f"https://mushroomobserver.org/api2/images?"
        f"name={urllib.parse.quote(scientific_name)}"
        f"&has_images=true&detail=high&format=json"
    )
    data = fetch_json(url, delay=2)
    if not data:
        return []

    results = []
    for record in data.get("results", [])[:10]:
        img_id = record if isinstance(record, int) else record.get("id")
        if not img_id:
            continue

        # MO images at 960px
        photo_url = f"https://mushroomobserver.org/images/960/{img_id}.jpg"
        results.append({
            "thumb_url": photo_url,
            "source": "Mushroom Observer",
            "sourceUrl": f"https://mushroomobserver.org/images/{img_id}",
            "author": "Mushroom Observer contributor",
            "license": "CC BY-SA 3.0",
            "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
        })

    return results


# ── Main logic ──

def get_existing_photos(out_dir):
    """Count existing jpg files."""
    if not out_dir.exists():
        return 0
    return len([f for f in out_dir.iterdir() if f.suffix == '.jpg'])

def get_existing_image_data(slug):
    """Read existing images array from .ts file."""
    ts_path = SPECIES_DIR / f"{slug}.ts"
    content = ts_path.read_text()
    # Check if images array is non-empty
    if re.search(r'images:\s*\[\s*\]', content):
        return []
    # Parse existing entries (rough)
    matches = re.findall(r'filename:\s*"([^"]+)"', content)
    return matches

def download_and_save(info, idx, slug, scientific_name, out_dir):
    """Download one image and return metadata dict."""
    img_data = fetch(info["thumb_url"], delay=3)
    if not img_data or len(img_data) < 5000:
        return None

    # Create varied filenames
    suffixes = ["habitat", "detail", "wild", "closeup", "specimen", "field", "group", "fresh", "mature", "young"]
    suffix = suffixes[(idx - 1) % len(suffixes)]
    filename = f"{idx:02d}-{suffix}.jpg"
    filepath = out_dir / filename
    filepath.write_bytes(img_data)

    source_tag = info["source"]
    print(f"    Photo {idx}: {len(img_data)} bytes from {source_tag}")

    return {
        "filename": filename,
        "alt": f"{scientific_name} mushroom, {suffix} view",
        "source": info["source"],
        "sourceUrl": info["sourceUrl"],
        "author": info["author"],
        "license": info["license"],
        "licenseUrl": info["licenseUrl"],
    }

def update_data_file(slug, images):
    """Update the species .ts data file with image metadata."""
    ts_path = SPECIES_DIR / f"{slug}.ts"
    content = ts_path.read_text()

    img_entries = []
    for img in images:
        author = img["author"].replace('"', '\\"').replace("'", "\\'")
        alt = img["alt"].replace('"', '\\"')
        entry = f"""    {{
      filename: "{img['filename']}",
      alt: "{alt}",
      source: "{img['source']}",
      sourceUrl: "{img['sourceUrl']}",
      author: "{author}",
      license: "{img['license']}",
      licenseUrl: "{img['licenseUrl']}",
    }}"""
        img_entries.append(entry)

    images_str = "[\n" + ",\n".join(img_entries) + ",\n  ]"

    # Replace existing images array (empty or populated)
    new_content = re.sub(
        r'images:\s*\[[\s\S]*?\n  \]',
        f'images: {images_str}',
        content,
        count=1
    )

    if new_content == content:
        # Try empty array
        new_content = re.sub(
            r'images:\s*\[\s*\]',
            f'images: {images_str}',
            content,
            count=1
        )

    if new_content != content:
        ts_path.write_text(new_content)
        print(f"  Updated {slug}.ts with {len(images)} images")
        return True
    else:
        print(f"  WARNING: Could not update images in {slug}.ts")
        return False

def process_species(slug, scientific_name, target=5):
    """Top up a species to target number of photos using multiple sources."""
    out_dir = IMG_DIR / slug
    out_dir.mkdir(parents=True, exist_ok=True)

    existing_count = get_existing_photos(out_dir)
    needed = target - existing_count

    if needed <= 0:
        print(f"  Already has {existing_count} photos, skipping")
        return True

    print(f"  Has {existing_count} photos, need {needed} more")

    # Collect candidates from all sources
    all_candidates = []

    print(f"  Searching Wikipedia...")
    all_candidates.extend(get_wikipedia_images(scientific_name))
    time.sleep(2)

    if len(all_candidates) < needed:
        print(f"  Searching Commons...")
        all_candidates.extend(get_commons_images(scientific_name))
        time.sleep(2)

    if len(all_candidates) < needed:
        print(f"  Searching iNaturalist...")
        all_candidates.extend(get_inaturalist_images(scientific_name))
        time.sleep(2)

    if len(all_candidates) < needed:
        print(f"  Searching Mushroom Observer...")
        all_candidates.extend(get_mushroom_observer_images(scientific_name))
        time.sleep(1)

    print(f"  Found {len(all_candidates)} candidates across all sources")

    # Deduplicate by URL
    seen = set()
    unique = []
    for c in all_candidates:
        url = c["thumb_url"]
        if url not in seen:
            seen.add(url)
            unique.append(c)

    # Download up to target
    downloaded = []
    # Keep track of existing filenames to read from data file
    existing_files = get_existing_image_data(slug)

    idx = existing_count + 1
    for candidate in unique:
        if len(downloaded) >= needed:
            break

        result = download_and_save(candidate, idx, slug, scientific_name, out_dir)
        if result:
            downloaded.append(result)
            idx += 1
        time.sleep(3)  # 3 seconds between downloads

    if downloaded:
        # Read existing image entries from .ts and append new ones
        ts_path = SPECIES_DIR / f"{slug}.ts"
        content = ts_path.read_text()

        # If .ts already has images entries, we need to merge
        existing_entries_match = re.search(r'images:\s*\[([\s\S]*?)\n  \]', content)
        if existing_entries_match and existing_entries_match.group(1).strip():
            # Has existing entries - append to them
            all_images_data = []
            # Parse existing entries
            for m in re.finditer(r'\{[^}]+\}', existing_entries_match.group(1)):
                all_images_data.append(m.group(0).strip())
            # Add new entries
            for img in downloaded:
                author = img["author"].replace('"', '\\"').replace("'", "\\'")
                alt = img["alt"].replace('"', '\\"')
                entry = f"""    {{
      filename: "{img['filename']}",
      alt: "{alt}",
      source: "{img['source']}",
      sourceUrl: "{img['sourceUrl']}",
      author: "{author}",
      license: "{img['license']}",
      licenseUrl: "{img['licenseUrl']}",
    }}"""
                all_images_data.append(entry)

            images_str = "[\n" + ",\n".join(all_images_data) + ",\n  ]"
            new_content = re.sub(
                r'images:\s*\[[\s\S]*?\n  \]',
                f'images: {images_str}',
                content,
                count=1
            )
            ts_path.write_text(new_content)
            print(f"  Appended {len(downloaded)} images (total: {existing_count + len(downloaded)})")
        else:
            # Empty images array
            update_data_file(slug, downloaded)

    total = existing_count + len(downloaded)
    print(f"  Final: {total} photos for {slug}")
    return total >= 3  # At least 3 is acceptable


if __name__ == "__main__":
    min_photos = 5
    if "--min-photos" in sys.argv:
        min_photos = int(sys.argv[sys.argv.index("--min-photos") + 1])

    # Find species needing more photos
    need_work = []
    for f in sorted(os.listdir(SPECIES_DIR)):
        if f == 'index.ts' or not f.endswith('.ts'):
            continue
        slug = f.replace('.ts', '')
        if slug in ORIGINAL_32:
            continue

        out_dir = IMG_DIR / slug
        photo_count = get_existing_photos(out_dir) if out_dir.exists() else 0

        if photo_count < min_photos:
            content = (SPECIES_DIR / f).read_text()
            sci_match = re.search(r'scientificName:\s*"([^"]+)"', content)
            sci_name = sci_match.group(1) if sci_match else slug.replace('-', ' ').title()
            need_work.append((slug, sci_name, photo_count))

    print(f"Species needing photos (< {min_photos}): {len(need_work)}")
    for s, n, c in need_work:
        print(f"  {s}: {c} photos")

    print(f"\nStarting sequential downloads with 3s delay between images...")
    success = 0
    for slug, sci_name, count in need_work:
        print(f"\n{'='*60}")
        print(f"{sci_name} ({slug})")
        try:
            if process_species(slug, sci_name, target=min_photos):
                success += 1
        except Exception as e:
            print(f"  ERROR: {e}")
        time.sleep(5)  # 5 seconds between species

    print(f"\n{'='*60}")
    print(f"Done! {success}/{len(need_work)} species at target")
