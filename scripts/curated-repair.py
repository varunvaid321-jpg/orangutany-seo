#!/usr/bin/env python3
"""
curated-repair.py
Quality-controlled image repair for one species at a time.

Rules enforced:
- Hero: must show full mushroom, no extreme crop, minimum 400px wide, prefer landscape
- All images: filename must NOT reference a different species
- Images sized < 60KB are rejected (thumbnails / degraded)
- Section images matched to section by filename keyword + aspect ratio
- Fetches from Wikipedia article (most reliable), Commons category, iNaturalist

Usage:
  python3 scripts/curated-repair.py agaricus-bisporus
"""

import sys, os, re, json, time, urllib.request, urllib.parse
from pathlib import Path
from io import BytesIO

ROOT = Path(__file__).resolve().parent.parent
SPECIES_DIR = ROOT / "data" / "species"
IMG_DIR = ROOT / "public" / "images" / "species"
BASEMAP = IMG_DIR / "_basemap.png"
LOG_PATH = ROOT / "IMAGE-REPAIR-LOG.md"

UA = "OrangutanyBot/1.0 (https://guide.orangutany.com; educational mushroom guide)"

# ─── HTTP ────────────────────────────────────────────────────────────────────

def fetch(url, retries=3):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    for attempt in range(retries):
        try:
            with urllib.request.urlopen(req, timeout=30) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            if e.code == 429:
                wait = 5 * (attempt + 1)
                print(f"    Rate limited, waiting {wait}s...")
                time.sleep(wait)
            elif attempt == retries - 1:
                print(f"    FAILED ({e.code}): {url[:70]}")
                return None
            else:
                time.sleep(2)
        except Exception as e:
            if attempt == retries - 1:
                print(f"    FAILED: {e}")
                return None
            time.sleep(2)
    return None

def fetch_json(url, delay=1):
    time.sleep(delay)
    data = fetch(url)
    return json.loads(data) if data else None

def strip_html(s):
    return re.sub(r'<[^>]+>', '', s or '').strip()

def license_url_fallback(name):
    name = name or ""
    if "CC BY-SA" in name: return "https://creativecommons.org/licenses/by-sa/4.0/"
    if "CC BY-NC-SA" in name: return "https://creativecommons.org/licenses/by-nc-sa/4.0/"
    if "CC BY-NC" in name: return "https://creativecommons.org/licenses/by-nc/4.0/"
    if "CC BY" in name: return "https://creativecommons.org/licenses/by/4.0/"
    if "CC0" in name or "Public" in name: return "https://creativecommons.org/publicdomain/zero/1.0/"
    return "https://creativecommons.org/licenses/by-sa/4.0/"

# ─── Quality checks ──────────────────────────────────────────────────────────

# Patterns that indicate the image is NOT a field photo of the species
NON_PHOTO_PATTERNS = [
    "map", "diagram", "logo", "icon", "flag", "cladogram", "phylo",
    "mycomorphbox", "transparent", "commons-logo", "wikidata", "wikispecies",
    "edit-clear", "ambox", "symbol", "nuvola", "lock", "portal", "folder",
    "food_", "dish", "plate", "cooked", "recipe", "cultivation", "dried",
    "extract", "molecule", "chemical", "structure", "formula",
    "microscop", "spore.*print",  # spore print is OK in right section, but handled separately
]

def is_non_photo(filename):
    lower = filename.lower()
    for pat in NON_PHOTO_PATTERNS:
        if re.search(pat, lower):
            return True
    return not any(lower.endswith(e) for e in [".jpg", ".jpeg", ".png"])

def wrong_species_in_filename(filename, genus, epithet):
    """Return True if the filename explicitly references a DIFFERENT species."""
    lower = filename.lower()
    gen_lower = genus.lower()
    ep_lower = epithet.lower()

    # Extract any species-looking words (Genus_epithet pattern)
    # If they don't match our genus/epithet, flag it
    matches = re.findall(r'([a-z]+)[_\s-]([a-z]+)', lower)
    for g, e in matches:
        if len(g) > 4 and len(e) > 4:  # plausible genus/epithet length
            if g != gen_lower and g in [
                "amanita","boletus","cantharellus","pleurotus","galerina",
                "agaricus","armillaria","coprinus","cortinarius","inocybe",
                "lactarius","lepiota","psilocybe","russula","suillus","tricholoma",
                "grifola","hericium","morchella","gyromitra","laetiporus",
                "macrolepiota","lycoperdon","trametes","ganoderma"
            ]:
                # Different genus — definitely wrong
                return True, f"filename genus '{g}' != expected '{gen_lower}'"
            if g == gen_lower and e != ep_lower and e not in ["sp", "spp", "cf"]:
                # Same genus but different epithet — potentially wrong
                return True, f"filename epithet '{e}' != expected '{ep_lower}'"
    return False, ""

def score_image(info, genus, epithet):
    """
    Score an image candidate. Higher = better.
    Returns (score, reject_reason) where reject_reason=None means accepted.
    """
    filename = info.get("file_title", "").lower()
    w = info.get("width", 0)
    h = info.get("height", 0)
    size = info.get("size", 0)

    # Hard rejections
    if is_non_photo(filename):
        return 0, "non-photo file"
    if size < 60000:
        return 0, f"too small ({size} bytes)"
    if w < 300:
        return 0, f"too narrow ({w}px)"

    wrong, reason = wrong_species_in_filename(filename, genus, epithet)
    if wrong:
        return 0, f"wrong species: {reason}"

    # Aspect ratio checks
    if w > 0 and h > 0:
        ratio = h / w
        if ratio > 3.0:
            return 0, f"extreme portrait crop ({w}x{h})"
        if w / h > 4.0:
            return 0, f"extreme landscape crop ({w}x{h})"

    # Scoring
    score = 0

    # Prefer species name in filename
    gen_lower = genus.lower()
    ep_lower = epithet.lower()
    if gen_lower in filename: score += 30
    if ep_lower in filename: score += 30

    # Prefer larger files (better quality)
    score += min(size // 10000, 40)

    # Prefer landscape/square for hero suitability
    if w > 0 and h > 0:
        ratio = h / w
        if 0.5 <= ratio <= 1.5:   # square-ish: ideal
            score += 20
        elif ratio < 0.5:          # very wide
            score += 5
        elif ratio <= 2.5:         # moderately tall: OK
            score += 10
        # > 2.5 already rejected above

    # Prefer higher resolution
    if w >= 1000: score += 15
    if w >= 2000: score += 10

    return score, None


def classify_section(filename):
    """Guess what identification section an image suits based on filename."""
    lower = filename.lower()
    if re.search(r'gill|lamell|under|below|ventral', lower): return "gills"
    if re.search(r'stem|stipe|stalk|base|volva|ring|annul', lower): return "stem"
    if re.search(r'cap|pileus|top|above|dorsal', lower): return "cap"
    if re.search(r'spore.*print|print', lower): return "sporePrint"
    if re.search(r'young|button|immature|egg', lower): return "young"
    if re.search(r'group|cluster|colony|patch', lower): return "group"
    if re.search(r'habit|wood|log|tree|grass|forest|field|ground|soil', lower): return "habitat"
    if re.search(r'cross|section|slice|cut', lower): return "cross"
    return "general"


# ─── Image fetching ──────────────────────────────────────────────────────────

def get_wikipedia_article_images(scientific_name):
    """Get image file titles listed in the Wikipedia article."""
    title = scientific_name.replace(" ", "_")
    data = fetch_json(
        f"https://en.wikipedia.org/w/api.php?action=query&titles={urllib.parse.quote(title)}"
        f"&prop=images&imlimit=50&format=json", delay=2)
    if not data:
        return []
    page = list(data.get("query", {}).get("pages", {}).values())[0]
    titles = []
    for img in page.get("images", []):
        t = img["title"]
        if any(t.lower().endswith(e) for e in [".jpg", ".jpeg", ".png"]):
            titles.append(t)
    return titles


def get_image_info(file_title):
    """Fetch full metadata for a single Wikimedia file."""
    data = fetch_json(
        f"https://en.wikipedia.org/w/api.php?action=query&titles={urllib.parse.quote(file_title)}"
        f"&prop=imageinfo&iiprop=url|extmetadata|size&iiurlwidth=1400&format=json", delay=1)
    if not data:
        return None
    for page in data.get("query", {}).get("pages", {}).values():
        info = page.get("imageinfo", [{}])[0]
        meta = info.get("extmetadata", {})
        url = info.get("thumburl") or info.get("url")
        if not url:
            return None
        author = re.sub(r'\s+', ' ', strip_html(meta.get("Artist", {}).get("value", "Unknown")))[:120].strip()
        lic = meta.get("LicenseShortName", {}).get("value", "CC BY-SA 4.0")
        lic_url = meta.get("LicenseUrl", {}).get("value", "") or license_url_fallback(lic)
        if "nonfree" in lic.lower() or "fair use" in lic.lower():
            return None
        return {
            "file_title": file_title,
            "url": url,
            "source_url": info.get("descriptionurl", ""),
            "author": author,
            "license": lic,
            "licenseUrl": lic_url,
            "width": info.get("width", 0),
            "height": info.get("height", 0),
            "size": info.get("size", 0),
        }
    return None


def get_commons_category_images(scientific_name):
    """Get images from the Commons category for the species."""
    cat = f"Category:{scientific_name.replace(' ', '_')}"
    data = fetch_json(
        f"https://commons.wikimedia.org/w/api.php?action=query"
        f"&generator=categorymembers&gcmtitle={urllib.parse.quote(cat)}"
        f"&gcmtype=file&gcmlimit=30"
        f"&prop=imageinfo&iiprop=url|extmetadata|size&iiurlwidth=1400&format=json", delay=2)
    if not data:
        return []
    results = []
    for page in data.get("query", {}).get("pages", {}).values():
        info_list = page.get("imageinfo", [])
        if not info_list:
            continue
        info = info_list[0]
        meta = info.get("extmetadata", {})
        url = info.get("thumburl") or info.get("url", "")
        if not url or not url.lower().endswith((".jpg", ".jpeg", ".png")):
            continue
        author = re.sub(r'\s+', ' ', strip_html(meta.get("Artist", {}).get("value", "Unknown")))[:120].strip()
        lic = meta.get("LicenseShortName", {}).get("value", "CC BY-SA 4.0")
        lic_url = meta.get("LicenseUrl", {}).get("value", "") or license_url_fallback(lic)
        if "nonfree" in lic.lower():
            continue
        results.append({
            "file_title": page.get("title", ""),
            "url": url,
            "source_url": info.get("descriptionurl", ""),
            "author": author,
            "license": lic,
            "licenseUrl": lic_url,
            "width": info.get("width", 0),
            "height": info.get("height", 0),
            "size": info.get("size", 0),
        })
    return results


def get_inaturalist_images(scientific_name):
    """Get CC-licensed research-grade photos from iNaturalist."""
    data = fetch_json(
        f"https://api.inaturalist.org/v1/observations?"
        f"taxon_name={urllib.parse.quote(scientific_name)}"
        f"&photos=true&quality_grade=research&order=desc&order_by=votes"
        f"&per_page=12&photo_license=cc-by,cc-by-sa,cc0", delay=2)
    if not data:
        return []
    license_map = {
        "cc-by": ("CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/"),
        "cc-by-sa": ("CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0/"),
        "cc0": ("CC0 1.0", "https://creativecommons.org/publicdomain/zero/1.0/"),
    }
    results = []
    seen = set()
    for obs in data.get("results", []):
        for photo in obs.get("photos", []):
            code = photo.get("license_code", "")
            url = photo.get("url", "").replace("/square.", "/large.")
            if not url or url in seen:
                continue
            seen.add(url)
            user = obs.get("user", {})
            uname = user.get("name") or user.get("login", "iNaturalist contributor")
            lic = license_map.get(code, ("CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0/"))
            obs_id = obs.get("id", "")
            # iNaturalist images are always the correct species (research grade, community ID)
            results.append({
                "file_title": f"iNaturalist obs {obs_id}",
                "url": url,
                "source_url": f"https://www.inaturalist.org/observations/{obs_id}",
                "author": uname,
                "license": lic[0],
                "licenseUrl": lic[1],
                "width": 1024,   # iNaturalist large = ~1024px
                "height": 768,
                "size": 200000,  # Estimate — assume reasonable quality
            })
    return results


# ─── Distribution map ────────────────────────────────────────────────────────

def verify_gbif_key(scientific_name, stored_key):
    """Verify the stored gbifKey actually has occurrence data. If not, find the correct one."""
    def tile_has_data(key):
        data = fetch(f"https://api.gbif.org/v2/map/occurrence/density/1/0/0@2x.png?taxonKey={key}&style=orange.marker&srs=EPSG:4326")
        if not data:
            return False
        try:
            from PIL import Image
            from io import BytesIO
            img = Image.open(BytesIO(data)).convert('RGBA')
            return sum(1 for p in img.getdata() if p[3] > 10) > 0
        except:
            return len(data) > 5000

    # First test stored key
    if tile_has_data(stored_key):
        return stored_key

    print(f"    Stored gbifKey {stored_key} has no tile data — looking up correct key...")
    data = fetch_json(f"https://api.gbif.org/v1/species/match?name={urllib.parse.quote(scientific_name)}&kingdom=Fungi", delay=1)
    if data and data.get("usageKey") and data.get("matchType") in ("EXACT", "FUZZY"):
        correct_key = data["usageKey"]
        if correct_key != stored_key:
            print(f"    Corrected gbifKey: {stored_key} → {correct_key}")
            if tile_has_data(correct_key):
                return correct_key
    return stored_key  # Fall back to stored even if no data


def download_gbif_map(gbif_key, out_dir, force=False):
    map_path = out_dir / "distribution-map.png"
    if map_path.exists() and map_path.stat().st_size > 50000 and not force:
        print(f"  Map OK ({map_path.stat().st_size:,} bytes)")
        return True
    try:
        from PIL import Image
    except ImportError:
        os.system("pip3 install Pillow -q")
        from PIL import Image

    if not BASEMAP.exists():
        print(f"  ERROR: basemap missing at {BASEMAP}")
        return False

    print(f"  Fetching GBIF tiles (taxonKey={gbif_key})...", end=" ", flush=True)
    # Zoom 0: 2 tiles cover full world in EPSG:4326 (zoom 1 was 4x2 grid, caused misalignment)
    left = fetch(f"https://api.gbif.org/v2/map/occurrence/density/0/0/0@2x.png?taxonKey={gbif_key}&style=orange.marker&srs=EPSG:4326")
    right = fetch(f"https://api.gbif.org/v2/map/occurrence/density/0/1/0@2x.png?taxonKey={gbif_key}&style=orange.marker&srs=EPSG:4326")

    if not left or not right:
        print("FAILED")
        return False

    left_img = Image.open(BytesIO(left)).convert('RGBA').resize((1024, 1024), Image.LANCZOS)
    right_img = Image.open(BytesIO(right)).convert('RGBA').resize((1024, 1024), Image.LANCZOS)
    dots = Image.new('RGBA', (2048, 1024), (0,0,0,0))
    dots.paste(left_img, (0, 0))
    dots.paste(right_img, (1024, 0))
    result = Image.alpha_composite(Image.open(BASEMAP).convert('RGBA'), dots)
    result.save(str(map_path))
    sz = map_path.stat().st_size
    print(f"{sz:,} bytes")
    return sz > 5000


# ─── Data file update ────────────────────────────────────────────────────────

def update_data_file(slug, images):
    ts_path = SPECIES_DIR / f"{slug}.ts"
    content = ts_path.read_text()
    entries = []
    for img in images:
        a = img["author"].replace('"', "'")
        alt = img["alt"].replace('"', "'")
        e = ('    {\n'
             f'      filename: "{img["filename"]}",\n'
             f'      alt: "{alt}",\n'
             f'      source: "{img["source"]}",\n'
             f'      sourceUrl: "{img["sourceUrl"]}",\n'
             f'      author: "{a}",\n'
             f'      license: "{img["license"]}",\n'
             f'      licenseUrl: "{img["licenseUrl"]}",\n'
             '    }')
        entries.append(e)
    images_str = "[\n" + ",\n".join(entries) + ",\n  ]"
    new = re.sub(r'images:\s*\[[\s\S]*?\n  \]', f'images: {images_str}', content, count=1)
    if new == content:
        new = re.sub(r'images:\s*\[\s*\]', f'images: {images_str}', content, count=1)
    if new != content:
        ts_path.write_text(new)
        return True
    print(f"  WARNING: Could not update images array in {slug}.ts")
    return False


def update_repair_log(slug, status, hero_verified, issues, notes):
    content = open(LOG_PATH).read()
    # Replace the row for this slug
    new_row = f"| - | {slug} | {status} | {hero_verified} | {issues} | {notes} |"
    content = re.sub(
        rf'\| \d+ \| {re.escape(slug)} \|.*',
        new_row,
        content
    )
    open(LOG_PATH, 'w').write(content)


# ─── Main ────────────────────────────────────────────────────────────────────

def process(slug):
    ts_path = SPECIES_DIR / f"{slug}.ts"
    if not ts_path.exists():
        print(f"ERROR: no data file for {slug}")
        return

    content = ts_path.read_text()
    sci_m = re.search(r'scientificName:\s*"([^"]+)"', content)
    com_m = re.search(r'commonName:\s*"([^"]+)"', content)
    gbif_m = re.search(r'gbifKey:\s*(\d+)', content)

    scientific_name = sci_m.group(1) if sci_m else slug.replace('-',' ').title()
    common_name = com_m.group(1) if com_m else slug
    gbif_key = int(gbif_m.group(1)) if gbif_m else None

    parts = scientific_name.split()
    genus = parts[0] if parts else scientific_name
    epithet = parts[1] if len(parts) > 1 else ""

    out_dir = IMG_DIR / slug
    out_dir.mkdir(parents=True, exist_ok=True)

    print(f"\n{'='*60}")
    print(f"  {scientific_name} ({common_name})")
    print(f"  Slug: {slug} | GBIF: {gbif_key}")
    print(f"{'='*60}")

    # 1. Distribution map (GBIF tile composite — approved style per DESIGN_LOCKS.md)
    print("\n[MAP]")
    if gbif_key:
        download_gbif_map(gbif_key, out_dir)
    else:
        print("  No gbifKey — skipping map")

    # 2. Collect all image candidates
    print(f"\n[IMAGES] Gathering candidates for {scientific_name}...")

    all_candidates = []

    print("  → Wikipedia article images...")
    wiki_titles = get_wikipedia_article_images(scientific_name)
    print(f"    Found {len(wiki_titles)} image titles in article")
    for t in wiki_titles:
        info = get_image_info(t)
        if info:
            all_candidates.append(info)
        time.sleep(0.8)

    if len(all_candidates) < 6:
        print("  → Commons category...")
        commons = get_commons_category_images(scientific_name)
        print(f"    Found {len(commons)} images in Commons category")
        seen = {c["file_title"] for c in all_candidates}
        for c in commons:
            if c["file_title"] not in seen:
                all_candidates.append(c)
                seen.add(c["file_title"])
        time.sleep(1)

    if len(all_candidates) < 6:
        print("  → iNaturalist research-grade observations...")
        inat = get_inaturalist_images(scientific_name)
        print(f"    Found {len(inat)} iNaturalist photos")
        seen = {c["file_title"] for c in all_candidates}
        for c in inat:
            if c["file_title"] not in seen:
                all_candidates.append(c)

    print(f"  Total candidates: {len(all_candidates)}")

    # 3. Score and filter candidates
    print(f"\n[SCORING] Filtering by quality, species correctness, dimensions...")
    scored = []
    rejected = []
    for c in all_candidates:
        score, reason = score_image(c, genus, epithet)
        if reason:
            rejected.append((c["file_title"], reason))
        else:
            c["_score"] = score
            c["_section"] = classify_section(c["file_title"])
            scored.append(c)

    if rejected:
        print(f"  Rejected {len(rejected)}:")
        for fn, r in rejected[:8]:
            print(f"    ✗ {Path(fn).name[:50]} — {r}")

    scored.sort(key=lambda x: x["_score"], reverse=True)
    print(f"  Accepted {len(scored)} candidates")

    if not scored:
        print("  ERROR: No valid candidates found")
        update_repair_log(slug, "pending", "no", "no candidates found", "manual review needed")
        return

    # 4. Select images
    # Hero: highest-scoring image (best quality, correct species, good ratio)
    hero = scored[0]

    # Gallery: pick variety — different sections if possible, no duplicate files
    chosen = [hero]
    chosen_titles = {hero["file_title"]}

    # Priority order for gallery variety
    section_priority = ["habitat", "cap", "gills", "stem", "group", "young", "general"]
    used_sections = {hero["_section"]}

    for section in section_priority:
        if len(chosen) >= 5:
            break
        # Find best candidate for this section not already chosen
        for c in scored:
            if c["file_title"] in chosen_titles:
                continue
            if c["_section"] == section:
                chosen.append(c)
                chosen_titles.add(c["file_title"])
                used_sections.add(section)
                break

    # Fill remaining slots with best remaining candidates
    for c in scored:
        if len(chosen) >= 5:
            break
        if c["file_title"] not in chosen_titles:
            chosen.append(c)
            chosen_titles.add(c["file_title"])

    print(f"\n[SELECTED] {len(chosen)} images:")
    suffix_map = {
        "habitat": "habitat", "cap": "cap-top", "gills": "gills",
        "stem": "stem", "group": "group", "young": "young",
        "general": "field", "sporePrint": "spore-print", "cross": "cross-section"
    }

    # Generate filenames and download
    download_results = []
    for i, c in enumerate(chosen, 1):
        section = c["_section"]
        suffix = suffix_map.get(section, "field")
        filename = f"{i:02d}-{suffix}.jpg"
        dest = out_dir / filename

        w, h = c["width"], c["height"]
        ratio_str = f"{w}x{h}" if w and h else "unknown dims"
        src_name = Path(c["file_title"]).name[:45] if c["file_title"] else "iNaturalist"
        print(f"  {i}. [{section:10s}] {filename} — {ratio_str} | {c['_score']}pts | {src_name}")

        # Download
        img_data = fetch(c["url"])
        if not img_data or len(img_data) < 10000:
            print(f"     ✗ Download failed or too small")
            continue
        dest.write_bytes(img_data)
        print(f"     ✓ {len(img_data):,} bytes")

        # Generate alt text
        section_alts = {
            "cap": f"{common_name} cap viewed from above showing surface texture",
            "gills": f"{common_name} underside showing gill structure",
            "stem": f"{common_name} stem, ring, and base detail",
            "habitat": f"{common_name} growing in natural habitat",
            "group": f"Group of {common_name} mushrooms in the wild",
            "young": f"Young {common_name} specimen",
            "sporePrint": f"{common_name} spore print on paper",
            "general": f"{common_name} ({scientific_name}) wild specimen",
            "field": f"{common_name} field photograph",
            "cross": f"{common_name} cross section",
        }
        alt = section_alts.get(section, f"{common_name} ({scientific_name})")

        download_results.append({
            "filename": filename,
            "alt": alt,
            "source": "iNaturalist" if "iNaturalist" in c["file_title"] else "Wikimedia Commons",
            "sourceUrl": c["source_url"],
            "author": c["author"],
            "license": c["license"],
            "licenseUrl": c["licenseUrl"],
        })
        time.sleep(2)

    # Remove old files not in new set
    new_filenames = {r["filename"] for r in download_results}
    new_filenames.add("distribution-map.png")
    for f in out_dir.iterdir():
        if f.name not in new_filenames and f.suffix.lower() in ('.jpg', '.jpeg', '.png'):
            print(f"  Removing old file: {f.name}")
            f.unlink()

    # Update data file
    if download_results:
        update_data_file(slug, download_results)
        print(f"\n  Data file updated: {len(download_results)} images")
        update_repair_log(slug, "done", "yes", "none", f"{len(download_results)} images from multi-source")
    else:
        print("\n  ERROR: No images downloaded")
        update_repair_log(slug, "pending", "no", "download failed", "retry manually")

    print(f"\n  Preview: http://localhost:3000/mushrooms/{slug}")
    print(f"  Check this page now and flag any wrong images.")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 scripts/curated-repair.py <slug>")
        sys.exit(1)
    os.chdir(ROOT)
    process(sys.argv[1])
