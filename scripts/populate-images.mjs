/**
 * populate-images.mjs
 * Fetches real Wikimedia Commons images for mushroom species pages,
 * downloads them locally, and updates the TypeScript data files.
 *
 * Run from repo root: node scripts/populate-images.mjs
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync, statSync } from "fs";
import { createWriteStream } from "fs";
import path from "path";
import https from "https";
import http from "http";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SPECIES_DATA_DIR = path.join(ROOT, "data/species");
const PUBLIC_IMG_DIR = path.join(ROOT, "public/images/species");

const USER_AGENT = "OrangutanyBot/1.0 (guide.orangutany.com; educational mycology reference)";

// Species to skip or handle specially
const SKIP_SLUGS = new Set(["index"]);

// Known problematic filenames to exclude from Wikimedia (diagrams, maps, etc.)
const EXCLUDE_FILENAME_PATTERNS = [
  /map/i,
  /diagram/i,
  /logo/i,
  /icon/i,
  /flag/i,
  /cladogram/i,
  /phylo/i,
  /tree/i,
  /chart/i,
  /graph/i,
  /microscop/i,
  /spore.*print/i,
  /chemical/i,
  /molecule/i,
  /structure/i,
  /formula/i,
  /cultivation/i,
  /farm/i,
  /market/i,
  /shop/i,
  /dish/i,
  /recipe/i,
  /food/i,
  /plate/i,
  /cooked/i,
  /dried/i,
  /powder/i,
  /extract/i,
  /supplement/i,
];

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function stripHtml(str) {
  return (str || "").replace(/<[^>]+>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').trim();
}

async function fetchJson(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    const req = client.get(url, { headers: { "User-Agent": USER_AGENT } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return fetchJson(res.headers.location).then(resolve).catch(reject);
      }
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error(`JSON parse error: ${e.message}\nURL: ${url}`));
        }
      });
    });
    req.on("error", reject);
    req.setTimeout(30000, () => { req.destroy(); reject(new Error("Timeout")); });
  });
}

async function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    const req = client.get(url, { headers: { "User-Agent": USER_AGENT } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        return;
      }
      const file = createWriteStream(dest);
      res.pipe(file);
      file.on("finish", () => {
        file.close();
        // Check file size
        const size = statSync(dest).size;
        resolve(size);
      });
      file.on("error", reject);
    });
    req.on("error", reject);
    req.setTimeout(60000, () => { req.destroy(); reject(new Error("Download timeout")); });
  });
}

/**
 * Fetch image list from Wikipedia article for a scientific name.
 * Returns array of image candidates with metadata.
 */
async function fetchWikipediaImages(scientificName) {
  const title = scientificName.replace(/ /g, "_");
  // Step 1: get all images used on the Wikipedia article
  const apiUrl =
    `https://en.wikipedia.org/w/api.php?action=query` +
    `&titles=${encodeURIComponent(title)}` +
    `&generator=images&gimlimit=100` +
    `&prop=imageinfo` +
    `&iiprop=url|user|extmetadata|size` +
    `&iiurlwidth=1400` +
    `&format=json`;

  let data;
  try {
    data = await fetchJson(apiUrl);
  } catch (e) {
    console.warn(`  Wikipedia API error for ${scientificName}: ${e.message}`);
    return [];
  }

  if (!data.query?.pages) return [];

  const candidates = [];
  for (const page of Object.values(data.query.pages)) {
    if (!page.imageinfo) continue;
    const info = page.imageinfo[0];
    if (!info || !info.url) continue;

    const fileTitle = page.title || "";
    const url = info.url;

    // Only real photos
    if (!url.match(/\.(jpg|jpeg|png)(\?|$)/i)) continue;

    // Exclude non-photo files
    const excluded = EXCLUDE_FILENAME_PATTERNS.some((p) => p.test(fileTitle));
    if (excluded) continue;

    // Minimum size: at least 100KB and at least 400px wide
    if (info.size && info.size < 100000) continue;
    if (info.width && info.width < 400) continue;

    const meta = info.extmetadata || {};
    const author = stripHtml(meta.Artist?.value || info.user || "Unknown");
    const license = meta.LicenseShortName?.value || meta.License?.value || "Unknown";
    const licenseUrl = meta.LicenseUrl?.value || "";

    // Skip clearly non-free licenses
    if (license.toLowerCase().includes("nonfree") || license.toLowerCase().includes("fair use")) continue;

    candidates.push({
      fileTitle,
      url: info.url,
      thumbUrl: info.thumburl || info.url,
      width: info.width || 0,
      height: info.height || 0,
      size: info.size || 0,
      author,
      license,
      licenseUrl,
      commonsUrl: `https://commons.wikimedia.org/wiki/${encodeURIComponent(fileTitle)}`,
    });
  }

  // Sort by size descending (largest = highest quality)
  candidates.sort((a, b) => b.size - a.size);
  return candidates;
}

/**
 * Also try Wikimedia Commons API directly for the species category.
 */
async function fetchCommonsImages(scientificName) {
  const category = `Category:${scientificName.replace(/ /g, "_")}`;
  const apiUrl =
    `https://commons.wikimedia.org/w/api.php?action=query` +
    `&generator=categorymembers&gcmtitle=${encodeURIComponent(category)}&gcmtype=file&gcmlimit=30` +
    `&prop=imageinfo` +
    `&iiprop=url|user|extmetadata|size` +
    `&iiurlwidth=1400` +
    `&format=json`;

  let data;
  try {
    data = await fetchJson(apiUrl);
  } catch (e) {
    console.warn(`  Commons category API error for ${scientificName}: ${e.message}`);
    return [];
  }

  if (!data.query?.pages) return [];

  const candidates = [];
  for (const page of Object.values(data.query.pages)) {
    if (!page.imageinfo) continue;
    const info = page.imageinfo[0];
    if (!info || !info.url) continue;

    const fileTitle = page.title || "";
    const url = info.url;

    if (!url.match(/\.(jpg|jpeg|png)(\?|$)/i)) continue;

    const excluded = EXCLUDE_FILENAME_PATTERNS.some((p) => p.test(fileTitle));
    if (excluded) continue;

    if (info.size && info.size < 80000) continue;
    if (info.width && info.width < 400) continue;

    const meta = info.extmetadata || {};
    const author = stripHtml(meta.Artist?.value || info.user || "Unknown");
    const license = meta.LicenseShortName?.value || meta.License?.value || "Unknown";
    const licenseUrl = meta.LicenseUrl?.value || "";

    if (license.toLowerCase().includes("nonfree") || license.toLowerCase().includes("fair use")) continue;

    candidates.push({
      fileTitle,
      url: info.url,
      thumbUrl: info.thumburl || info.url,
      width: info.width || 0,
      height: info.height || 0,
      size: info.size || 0,
      author,
      license,
      licenseUrl,
      commonsUrl: `https://commons.wikimedia.org/wiki/${encodeURIComponent(fileTitle)}`,
    });
  }

  candidates.sort((a, b) => b.size - a.size);
  return candidates;
}

/**
 * Download GBIF distribution map for a species.
 */
async function downloadGbifMap(gbifKey, destPath) {
  const url = `https://api.gbif.org/v2/map/occurrence/density/0/0/0@2x.png?taxonKey=${gbifKey}&style=classic.poly`;
  try {
    const size = await downloadFile(url, destPath);
    return size;
  } catch (e) {
    console.warn(`  GBIF map download failed: ${e.message}`);
    return 0;
  }
}

/**
 * Extract images array from a data file.
 */
function getImagesFromDataFile(content) {
  const match = content.match(/images:\s*\[([\s\S]*?)\],?\s*\n\s*(identificationImages|gbifKey|stories|seoQueries|funFacts|edibility|lookAlikes|psychoactive|})/);
  if (!match) return null;
  // Count filenames referenced
  const filenames = [...content.matchAll(/filename:\s*["']([^"']+)["']/g)].map((m) => m[1]);
  return filenames;
}

/**
 * Count images in species data file.
 */
function countImagesInDataFile(filePath) {
  const content = readFileSync(filePath, "utf8");
  const filenames = [...content.matchAll(/filename:\s*["']([^"']+)["']/g)];
  return filenames.length;
}

/**
 * Update images array in data file.
 */
function updateImagesInDataFile(filePath, newImages, newIdentificationImages = null) {
  let content = readFileSync(filePath, "utf8");

  // Build new images array string
  const imagesStr = newImages
    .map(
      (img) =>
        `    {\n` +
        `      filename: "${img.filename}",\n` +
        `      alt: "${img.alt.replace(/"/g, '\\"')}",\n` +
        `      source: "Wikimedia Commons",\n` +
        `      sourceUrl: "${img.sourceUrl}",\n` +
        `      author: "${img.author.replace(/"/g, '\\"').replace(/\n/g, ' ')}",\n` +
        `      license: "${img.license}",\n` +
        `      licenseUrl: "${img.licenseUrl}",\n` +
        `    }`
    )
    .join(",\n");

  // Replace images: [] or images: [...] block
  // Match from "images: [" to the matching "],"
  const imgArrayRegex = /images:\s*\[[\s\S]*?\](,?)/;
  const replacement = `images: [\n${imagesStr}\n  ]$1`;

  if (imgArrayRegex.test(content)) {
    content = content.replace(imgArrayRegex, replacement);
  } else {
    console.warn(`  Could not find images array in ${filePath}`);
    return false;
  }

  // Update identificationImages if provided
  if (newIdentificationImages) {
    const idImgStr = Object.entries(newIdentificationImages)
      .map(([k, v]) => `    ${k}: "${v}"`)
      .join(",\n");
    const idImgRegex = /identificationImages:\s*\{[\s\S]*?\}(,?)/;
    const idReplacement = `identificationImages: {\n${idImgStr}\n  }$1`;
    if (idImgRegex.test(content)) {
      content = content.replace(idImgRegex, idReplacement);
    }
  }

  writeFileSync(filePath, content, "utf8");
  return true;
}

/**
 * Generate a human-readable alt text for a mushroom image.
 */
function generateAlt(commonName, scientificName, index, total, fileTitle) {
  const name = `${commonName} (${scientificName})`;
  const titleLower = fileTitle.toLowerCase();

  if (titleLower.includes("gill")) return `${name} showing gill structure`;
  if (titleLower.includes("stem") || titleLower.includes("stipe")) return `${name} stem and base detail`;
  if (titleLower.includes("cap") || titleLower.includes("pileus")) return `${name} cap viewed from above`;
  if (titleLower.includes("spore")) return `${name} spore print`;
  if (titleLower.includes("young") || titleLower.includes("button") || titleLower.includes("immature")) return `Young ${name} specimen`;
  if (titleLower.includes("old") || titleLower.includes("mature") || titleLower.includes("aged")) return `Mature ${name} specimen`;
  if (titleLower.includes("group") || titleLower.includes("cluster") || titleLower.includes("colony")) return `Group of ${name} growing together`;
  if (titleLower.includes("wood") || titleLower.includes("log") || titleLower.includes("tree")) return `${name} growing on wood`;
  if (titleLower.includes("grass") || titleLower.includes("field") || titleLower.includes("meadow")) return `${name} in grassland habitat`;
  if (titleLower.includes("forest") || titleLower.includes("woodland")) return `${name} in forest habitat`;
  if (titleLower.includes("cross") || titleLower.includes("section")) return `${name} cross section`;
  if (titleLower.includes("underside") || titleLower.includes("below")) return `${name} underside view`;

  // Generic fallbacks based on position
  const positions = [
    `${name} wild specimen`,
    `${name} showing full fruiting body`,
    `${name} in natural habitat`,
    `${name} close-up detail`,
    `${name} field photograph`,
  ];
  return positions[index % positions.length];
}

/**
 * Main: process all species
 */
async function main() {
  const files = readFileSync(path.join(SPECIES_DATA_DIR, "index.ts"), "utf8");
  // Extract slugs from index.ts
  const slugMatches = [...files.matchAll(/["']([a-z][a-z0-9-]+)["']/g)].map((m) => m[1]);
  const slugs = [...new Set(slugMatches)].filter((s) => !SKIP_SLUGS.has(s) && s !== "allSpecies" && s !== "getSpeciesBySlug");

  console.log(`Processing ${slugs.length} species...\n`);

  const log = [];
  let totalFixed = 0;

  for (const slug of slugs) {
    const dataFilePath = path.join(SPECIES_DATA_DIR, `${slug}.ts`);
    if (!existsSync(dataFilePath)) {
      console.log(`[SKIP] ${slug} — no data file`);
      continue;
    }

    const imgDir = path.join(PUBLIC_IMG_DIR, slug);
    if (!existsSync(imgDir)) mkdirSync(imgDir, { recursive: true });

    const content = readFileSync(dataFilePath, "utf8");

    // Extract scientificName and commonName
    const sciMatch = content.match(/scientificName:\s*["']([^"']+)["']/);
    const commonMatch = content.match(/commonName:\s*["']([^"']+)["']/);
    const gbifMatch = content.match(/gbifKey:\s*(\d+)/);

    if (!sciMatch) {
      console.log(`[SKIP] ${slug} — no scientificName found`);
      continue;
    }

    const scientificName = sciMatch[1];
    const commonName = commonMatch?.[1] || slug;
    const gbifKey = gbifMatch ? parseInt(gbifMatch[1]) : null;

    // Count existing images in data file
    const existingCount = countImagesInDataFile(dataFilePath);

    // Check distribution map
    const mapPath = path.join(imgDir, "distribution-map.png");
    const hasMap = existsSync(mapPath) && statSync(mapPath).size > 50000;

    const needsImages = existingCount < 3;
    const needsMap = !hasMap;

    if (!needsImages && !needsMap) {
      process.stdout.write(`[OK] ${slug} (${existingCount} images, map ok)\n`);
      continue;
    }

    console.log(`\n[FIX] ${slug} — ${existingCount} images, map=${hasMap ? "ok" : "MISSING"}`);

    const entry = { slug, imagesBefore: existingCount, mapFixed: false, imagesAdded: 0, errors: [] };

    // Fix distribution map
    if (needsMap && gbifKey) {
      process.stdout.write(`  → Downloading GBIF map (taxonKey=${gbifKey})...`);
      const size = await downloadGbifMap(gbifKey, mapPath);
      if (size > 50000) {
        console.log(` ✓ ${Math.round(size / 1024)}KB`);
        entry.mapFixed = true;
      } else {
        console.log(` ✗ too small (${size} bytes), trying style=classic`);
        // Try alternative style
        const url2 = `https://api.gbif.org/v2/map/occurrence/density/0/0/0@1x.png?taxonKey=${gbifKey}&style=classic.poly&srs=EPSG:4326`;
        try {
          const size2 = await downloadFile(url2, mapPath);
          if (size2 > 20000) {
            console.log(`  ✓ fallback map ${Math.round(size2 / 1024)}KB`);
            entry.mapFixed = true;
          } else {
            entry.errors.push(`Map too small: ${size2} bytes`);
          }
        } catch (e) {
          entry.errors.push(`Map download failed: ${e.message}`);
        }
      }
      await sleep(200);
    }

    // Fetch images
    if (needsImages) {
      process.stdout.write(`  → Fetching Wikipedia images for "${scientificName}"...`);
      let candidates = await fetchWikipediaImages(scientificName);
      console.log(` ${candidates.length} candidates`);

      // Also try Commons category if we need more
      if (candidates.length < 5) {
        process.stdout.write(`  → Fetching Commons category images...`);
        const commonsImgs = await fetchCommonsImages(scientificName);
        console.log(` ${commonsImgs.length} candidates`);
        // Merge, dedup by fileTitle
        const seen = new Set(candidates.map((c) => c.fileTitle));
        for (const img of commonsImgs) {
          if (!seen.has(img.fileTitle)) {
            candidates.push(img);
            seen.add(img.fileTitle);
          }
        }
        candidates.sort((a, b) => b.size - a.size);
      }

      await sleep(300);

      if (candidates.length === 0) {
        console.log(`  ✗ No suitable images found`);
        entry.errors.push("No Wikimedia images found");
        log.push(entry);
        continue;
      }

      // Determine how many we need (target 4-5 images)
      const target = 5;
      const needed = target - existingCount;
      const toDownload = candidates.slice(0, Math.min(needed + 3, candidates.length)); // extra buffer for failures

      // Get existing filenames in dir to avoid duplicates
      const existingFiles = existsSync(imgDir)
        ? new Set(require === undefined ? [] : [])
        : new Set();

      // Download
      const downloadedImages = [];
      let fileIndex = existingCount + 1;

      for (const candidate of toDownload) {
        if (downloadedImages.length >= needed) break;

        const ext = candidate.url.match(/\.(jpg|jpeg|png)(\?|$)/i)?.[1]?.toLowerCase() || "jpg";
        const filename = `${String(fileIndex).padStart(2, "0")}-${slug.replace(/^[a-z]+-/, "")}-${fileIndex}.${ext}`;
        const destPath = path.join(imgDir, filename);

        if (existsSync(destPath)) {
          const size = statSync(destPath).size;
          if (size > 50000) {
            // Already exists and is good
            downloadedImages.push({
              filename,
              alt: generateAlt(commonName, scientificName, downloadedImages.length, needed, candidate.fileTitle),
              sourceUrl: candidate.commonsUrl,
              author: candidate.author,
              license: candidate.license,
              licenseUrl: candidate.licenseUrl,
            });
            fileIndex++;
            continue;
          }
        }

        process.stdout.write(`  → Downloading ${filename}...`);
        try {
          const size = await downloadFile(candidate.url, destPath);
          if (size < 50000) {
            console.log(` ✗ too small (${size} bytes), skipping`);
            if (existsSync(destPath)) {
              const { unlinkSync } = await import("fs");
              unlinkSync(destPath);
            }
          } else {
            console.log(` ✓ ${Math.round(size / 1024)}KB`);
            downloadedImages.push({
              filename,
              alt: generateAlt(commonName, scientificName, downloadedImages.length, needed, candidate.fileTitle),
              sourceUrl: candidate.commonsUrl,
              author: candidate.author,
              license: candidate.license,
              licenseUrl: candidate.licenseUrl,
            });
            fileIndex++;
          }
        } catch (e) {
          console.log(` ✗ ${e.message}`);
          entry.errors.push(`Download failed: ${candidate.url} — ${e.message}`);
        }
        await sleep(400);
      }

      if (downloadedImages.length === 0 && existingCount === 0) {
        console.log(`  ✗ All downloads failed`);
        entry.errors.push("All image downloads failed");
      } else if (downloadedImages.length > 0) {
        // Merge with existing images by reading current data file
        // For simplicity: only update if we're adding images (existingCount == 0 means replace all)
        // Build final images array

        // Read existing images from data file
        const existingImages = [];
        const filenameMatches = [...content.matchAll(/filename:\s*["']([^"']+)["']/g)];
        const altMatches = [...content.matchAll(/alt:\s*["']([^"']+)["']/g)];
        const sourceUrlMatches = [...content.matchAll(/sourceUrl:\s*["']([^"']+)["']/g)];
        const authorMatches = [...content.matchAll(/author:\s*["']([^"']+)["']/g)];
        const licenseMatches = [...content.matchAll(/license:\s*["']([^"']+)["']/g)];
        const licenseUrlMatches = [...content.matchAll(/licenseUrl:\s*["']([^"']+)["']/g)];

        for (let i = 0; i < filenameMatches.length; i++) {
          existingImages.push({
            filename: filenameMatches[i][1],
            alt: altMatches[i]?.[1] || "",
            sourceUrl: sourceUrlMatches[i]?.[1] || "",
            author: authorMatches[i]?.[1] || "Unknown",
            license: licenseMatches[i]?.[1] || "Unknown",
            licenseUrl: licenseUrlMatches[i]?.[1] || "",
          });
        }

        const allImages = [...existingImages, ...downloadedImages];

        const updated = updateImagesInDataFile(dataFilePath, allImages);
        if (updated) {
          entry.imagesAdded = downloadedImages.length;
          totalFixed++;
          console.log(`  ✓ Updated data file: +${downloadedImages.length} images`);
        }
      }
    }

    log.push(entry);
  }

  console.log(`\n${"=".repeat(60)}`);
  console.log(`Fixed ${totalFixed} species data files\n`);

  const failures = log.filter((e) => e.errors.length > 0);
  if (failures.length > 0) {
    console.log(`\nSpecies with issues (${failures.length}):`);
    for (const f of failures) {
      console.log(`  ${f.slug}: ${f.errors.join("; ")}`);
    }
  }

  // Write repair log
  const logPath = path.join(ROOT, "scripts/populate-images-log.json");
  writeFileSync(logPath, JSON.stringify(log, null, 2));
  console.log(`\nLog written to scripts/populate-images-log.json`);
}

main().catch(console.error);
