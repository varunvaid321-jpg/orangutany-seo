/**
 * Pinterest Pin Image Generator
 *
 * Generates 1000x1500 vertical pin images for all species with:
 * - Hero photo as background (cover-fit)
 * - Dark gradient overlay for text readability
 * - Species common name + scientific name
 * - Hook text based on edibility
 * - Orangutany branding
 *
 * Also generates a CSV with pin metadata (title, description, hashtags, board, link)
 * for bulk upload to Pinterest.
 *
 * Usage: npx tsx scripts/generate-pins.ts
 * Output: public/pins/ (images) + public/pins/pins.csv (metadata)
 */

import sharp from "sharp";
import { allSpecies } from "../data/species/index";
import { writeFileSync, mkdirSync, existsSync, readFileSync } from "fs";
import path from "path";

const PIN_WIDTH = 1000;
const PIN_HEIGHT = 1500;
const OUT_DIR = path.join(process.cwd(), "public", "pins");
const SPECIES_IMG_DIR = path.join(process.cwd(), "public", "images", "species");

// Brand colors
const BG_COLOR = "#0e1a0e";
const CREAM = "#f0e4cc";
const COPPER = "#c8956c";
const MUTED = "#c4b49a";

function getHook(edibility: string, psychoactive?: boolean, commonName?: string): string {
  if (psychoactive) return "Not what you think it is";
  switch (edibility) {
    case "deadly":
      return "This mushroom can kill you";
    case "toxic":
      return "Do NOT eat this mushroom";
    case "edible-with-caution":
      return "Edible, but only if you know the rules";
    case "edible":
      return "One of the best wild mushrooms you can eat";
    case "inedible":
      return "Not everything in the forest is food";
    default:
      return "Can you identify this mushroom?";
  }
}

function getAlternateHook(edibility: string, lookAlikeCount: number): string {
  if (lookAlikeCount > 0) {
    return edibility === "edible"
      ? "Don't confuse this with its deadly twin"
      : "Looks just like an edible mushroom";
  }
  switch (edibility) {
    case "deadly":
      return "Foragers die from this every year";
    case "toxic":
      return "Looks harmless. It isn't.";
    case "edible":
      return "Save this for your next foraging trip";
    case "edible-with-caution":
      return "Most people cook this wrong";
    default:
      return "Would you know this in the wild?";
  }
}

function getBoard(edibility: string, psychoactive?: boolean): string {
  if (psychoactive) return "Mushroom Facts";
  switch (edibility) {
    case "deadly":
    case "toxic":
      return "Poisonous Mushrooms to Avoid";
    case "edible":
    case "edible-with-caution":
      return "Edible Wild Mushrooms";
    default:
      return "Mushroom Identification Guide";
  }
}

function buildTitle(commonName: string, scientificName: string, edibility: string): string {
  const short = commonName.includes("/") ? commonName.split("/")[0].trim() : commonName;
  switch (edibility) {
    case "deadly":
      return `${short}: Deadly Mushroom You Must Recognize`;
    case "toxic":
      return `${short}: How to Identify This Toxic Mushroom`;
    case "edible":
      return `${short}: A Forager's Guide to This Edible Mushroom`;
    case "edible-with-caution":
      return `${short}: Edible But Tricky. Here's What to Know`;
    default:
      return `${short} (${scientificName}): Complete ID Guide`;
  }
}

function buildDescription(species: typeof allSpecies[0]): string {
  const short = species.commonName.includes("/")
    ? species.commonName.split("/")[0].trim()
    : species.commonName;

  const parts: string[] = [];

  // Lead with hook
  switch (species.edibility) {
    case "deadly":
      parts.push(`${short} is one of the most dangerous wild mushrooms.`);
      break;
    case "toxic":
      parts.push(`${short} is toxic and should never be eaten.`);
      break;
    case "edible":
      parts.push(`${short} is a prized edible mushroom found by foragers worldwide.`);
      break;
    case "edible-with-caution":
      parts.push(`${short} is edible when prepared correctly, but mistakes happen.`);
      break;
    default:
      parts.push(`${short} is a fascinating wild mushroom worth knowing.`);
  }

  // Habitat
  if (species.habitat) {
    const hab = species.habitat.split(".")[0];
    parts.push(hab + ".");
  }

  // Look-alikes warning
  if (species.lookAlikes.length > 0) {
    const laNames = species.lookAlikes.slice(0, 2).map((la) => la.name.split("(")[0].trim());
    parts.push(`Often confused with: ${laNames.join(", ")}.`);
  }

  // CTA
  parts.push(`Full identification guide with photos, look-alikes, and safety info at Orangutany.`);

  return parts.join(" ");
}

function buildHashtags(species: typeof allSpecies[0]): string {
  const tags = new Set<string>();
  tags.add("#mushroom");
  tags.add("#mushroomidentification");
  tags.add("#foraging");
  tags.add("#mycology");
  tags.add("#wildmushrooms");

  const genus = species.taxonomy.genus.toLowerCase();
  tags.add(`#${genus}`);

  const common = species.commonName
    .split(/[\/,()]/)
    [0].trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, "");
  if (common.length > 3) tags.add(`#${common}`);

  switch (species.edibility) {
    case "deadly":
    case "toxic":
      tags.add("#poisonousmushrooms");
      tags.add("#mushroonsafety");
      break;
    case "edible":
    case "edible-with-caution":
      tags.add("#ediblemushrooms");
      tags.add("#foraginglife");
      break;
  }

  tags.add("#mushroomhunting");
  tags.add("#nature");

  return Array.from(tags).slice(0, 10).join(" ");
}

// SVG-based text overlay (sharp supports SVG compositing)
function createOverlaySvg(
  commonName: string,
  scientificName: string,
  hook: string
): Buffer {
  const short = commonName.includes("/") ? commonName.split("/")[0].trim() : commonName;

  // Escape XML entities
  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  // Word-wrap hook text
  const hookLines: string[] = [];
  const words = hook.split(" ");
  let line = "";
  for (const w of words) {
    if ((line + " " + w).trim().length > 25) {
      hookLines.push(line.trim());
      line = w;
    } else {
      line = (line + " " + w).trim();
    }
  }
  if (line) hookLines.push(line.trim());

  // Word-wrap common name
  const nameLines: string[] = [];
  const nameWords = short.split(" ");
  let nameLine = "";
  for (const w of nameWords) {
    if ((nameLine + " " + w).trim().length > 18) {
      nameLines.push(nameLine.trim());
      nameLine = w;
    } else {
      nameLine = (nameLine + " " + w).trim();
    }
  }
  if (nameLine) nameLines.push(nameLine.trim());

  const hookY = 1080;
  const nameY = hookY + hookLines.length * 52 + 30;
  const sciY = nameY + nameLines.length * 70 + 10;

  const svg = `<svg width="${PIN_WIDTH}" height="${PIN_HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${BG_COLOR}" stop-opacity="0"/>
      <stop offset="0.5" stop-color="${BG_COLOR}" stop-opacity="0"/>
      <stop offset="0.7" stop-color="${BG_COLOR}" stop-opacity="0.7"/>
      <stop offset="0.85" stop-color="${BG_COLOR}" stop-opacity="0.92"/>
      <stop offset="1" stop-color="${BG_COLOR}" stop-opacity="1"/>
    </linearGradient>
  </defs>
  <rect width="${PIN_WIDTH}" height="${PIN_HEIGHT}" fill="url(#grad)"/>

  ${hookLines
    .map(
      (l, i) =>
        `<text x="50" y="${hookY + i * 52}" font-family="sans-serif" font-size="42" font-weight="600" fill="${COPPER}">${esc(l)}</text>`
    )
    .join("\n  ")}

  ${nameLines
    .map(
      (l, i) =>
        `<text x="50" y="${nameY + i * 70}" font-family="sans-serif" font-size="62" font-weight="700" fill="${CREAM}">${esc(l)}</text>`
    )
    .join("\n  ")}

  <text x="50" y="${sciY}" font-family="sans-serif" font-size="30" font-style="italic" fill="${MUTED}">${esc(scientificName)}</text>

  <text x="50" y="${PIN_HEIGHT - 40}" font-family="sans-serif" font-size="26" font-weight="600" fill="${COPPER}">guide.orangutany.com</text>
</svg>`;

  return Buffer.from(svg);
}

async function generatePin(species: typeof allSpecies[0]): Promise<void> {
  const heroImg = species.images[0];
  if (!heroImg) {
    console.log(`  SKIP ${species.slug}: no hero image`);
    return;
  }

  const imgPath = path.join(SPECIES_IMG_DIR, species.slug, heroImg.filename);
  if (!existsSync(imgPath)) {
    console.log(`  SKIP ${species.slug}: image file missing`);
    return;
  }

  const hook = getHook(species.edibility, species.psychoactive, species.commonName);
  const overlaySvg = createOverlaySvg(species.commonName, species.scientificName, hook);

  // Resize hero to fill pin dimensions, then composite overlay
  const pin = await sharp(imgPath)
    .resize(PIN_WIDTH, PIN_HEIGHT, { fit: "cover", position: "top" })
    .composite([
      {
        input: overlaySvg,
        top: 0,
        left: 0,
      },
    ])
    .jpeg({ quality: 85 })
    .toBuffer();

  const outPath = path.join(OUT_DIR, `${species.slug}.jpg`);
  writeFileSync(outPath, pin);
}

async function main() {
  console.log(`Generating Pinterest pins for ${allSpecies.length} species...\n`);

  // Create output dir
  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

  // Generate images
  let ok = 0;
  let skip = 0;
  for (const species of allSpecies) {
    try {
      await generatePin(species);
      ok++;
      if (ok % 20 === 0) console.log(`  ${ok}/${allSpecies.length} done`);
    } catch (err) {
      console.log(`  ERROR ${species.slug}: ${err}`);
      skip++;
    }
  }

  // Generate CSV
  const csvHeader = "filename,title,description,link,board,hashtags,hook,alt_hook";
  const csvRows = allSpecies
    .filter((s) => s.images.length > 0)
    .map((s) => {
      const title = buildTitle(s.commonName, s.scientificName, s.edibility);
      const desc = buildDescription(s);
      const link = `https://guide.orangutany.com/mushrooms/${s.slug}`;
      const board = getBoard(s.edibility, s.psychoactive);
      const hashtags = buildHashtags(s);
      const hook = getHook(s.edibility, s.psychoactive, s.commonName);
      const altHook = getAlternateHook(s.edibility, s.lookAlikes.length);
      // CSV escape
      const esc = (v: string) => `"${v.replace(/"/g, '""')}"`;
      return [
        `${s.slug}.jpg`,
        esc(title),
        esc(desc),
        link,
        esc(board),
        esc(hashtags),
        esc(hook),
        esc(altHook),
      ].join(",");
    });

  const csv = [csvHeader, ...csvRows].join("\n");
  writeFileSync(path.join(OUT_DIR, "pins.csv"), csv);

  console.log(`\nDone! ${ok} pins generated, ${skip} skipped.`);
  console.log(`Images: ${OUT_DIR}/`);
  console.log(`CSV: ${OUT_DIR}/pins.csv`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
