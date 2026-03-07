import * as fs from "fs";
import * as path from "path";

const ROOT = process.cwd();

interface MapEntry {
  speciesSlug: string;
  mapVersion: string;
  basemapVersion: string;
  projection: string;
  gbifKey: number;
  approved: boolean;
  [key: string]: unknown;
}

interface ValidationRules {
  mapRules: {
    requiredBasemapVersion: string;
    requiredProjection: string;
    minimumFileSizeBytes: number;
    requiredFields: string[];
  };
}

function loadJSON<T>(relPath: string): T | null {
  const full = path.join(ROOT, relPath);
  if (!fs.existsSync(full)) {
    console.error(`File not found: ${full}`);
    return null;
  }
  return JSON.parse(fs.readFileSync(full, "utf-8")) as T;
}

function main() {
  const manifest = loadJSON<Record<string, MapEntry>>("data/maps/map-manifest.json");
  if (!manifest) {
    console.error("CRITICAL: map-manifest.json not found");
    process.exit(1);
  }

  const rules = loadJSON<ValidationRules>("data/validation/validation-rules.json");
  if (!rules) {
    console.error("CRITICAL: validation-rules.json not found");
    process.exit(1);
  }

  // Read DESIGN_LOCKS.md and extract basemapVersion and projection
  const designLocksPath = path.join(ROOT, "docs/DESIGN_LOCKS.md");
  let designLocksBasemap = "";
  let designLocksProjection = "";
  if (fs.existsSync(designLocksPath)) {
    const content = fs.readFileSync(designLocksPath, "utf-8");
    // basemapVersion from the file path reference
    const basemapMatch = content.match(/world-equirectangular-v\d+/);
    if (basemapMatch) designLocksBasemap = basemapMatch[0];
    // projection
    const projMatch = content.match(/\*\*Projection\*\*:\s*(\w+)/i);
    if (projMatch) designLocksProjection = projMatch[1].toLowerCase();
  }

  const { requiredBasemapVersion, requiredProjection, minimumFileSizeBytes } = rules.mapRules;
  let criticalFailures = 0;
  let totalPass = 0;
  let totalFail = 0;
  const results: { slug: string; pass: boolean; errors: string[] }[] = [];
  const manifestSlugs = new Set(Object.keys(manifest));

  // Check design locks consistency
  if (designLocksBasemap && designLocksBasemap !== requiredBasemapVersion) {
    console.error(`WARNING: DESIGN_LOCKS basemap "${designLocksBasemap}" != rules "${requiredBasemapVersion}"`);
  }
  if (designLocksProjection && designLocksProjection !== requiredProjection) {
    console.error(`WARNING: DESIGN_LOCKS projection "${designLocksProjection}" != rules "${requiredProjection}"`);
  }

  for (const [slug, entry] of Object.entries(manifest)) {
    const errors: string[] = [];

    if (entry.approved !== true) {
      errors.push("not approved");
    }

    if (entry.basemapVersion !== requiredBasemapVersion) {
      errors.push(`basemapVersion "${entry.basemapVersion}" != "${requiredBasemapVersion}"`);
      criticalFailures++;
    }

    if (entry.projection !== requiredProjection) {
      errors.push(`projection "${entry.projection}" != "${requiredProjection}"`);
      criticalFailures++;
    }

    const mapFile = path.join(ROOT, "public/images/species", slug, "distribution-map.png");
    if (!fs.existsSync(mapFile)) {
      errors.push("map file missing");
      criticalFailures++;
    } else {
      const stat = fs.statSync(mapFile);
      if (stat.size < minimumFileSizeBytes) {
        errors.push(`file too small: ${stat.size} bytes (min ${minimumFileSizeBytes})`);
      }
    }

    if (typeof entry.gbifKey !== "number" || entry.gbifKey <= 0) {
      errors.push(`invalid gbifKey: ${entry.gbifKey}`);
    }

    const pass = errors.length === 0;
    if (pass) totalPass++;
    else totalFail++;
    results.push({ slug, pass, errors });
  }

  // Find map files with no manifest entry
  const speciesImgDir = path.join(ROOT, "public/images/species");
  const orphans: string[] = [];
  if (fs.existsSync(speciesImgDir)) {
    for (const dir of fs.readdirSync(speciesImgDir)) {
      if (dir.startsWith("_")) continue;
      const mapFile = path.join(speciesImgDir, dir, "distribution-map.png");
      if (fs.existsSync(mapFile) && !manifestSlugs.has(dir)) {
        orphans.push(dir);
      }
    }
  }

  // Output
  console.log("\n=== Map Validation Results ===\n");
  for (const r of results) {
    if (r.pass) {
      console.log(`  PASS  ${r.slug}`);
    } else {
      console.log(`  FAIL  ${r.slug}`);
      for (const e of r.errors) {
        console.log(`        - ${e}`);
      }
    }
  }

  if (orphans.length > 0) {
    console.log("\n--- Orphan Maps (file exists, no manifest entry) ---");
    for (const o of orphans) {
      console.log(`  ${o}`);
    }
  }

  console.log("\n--- Summary ---");
  console.log(`  Species checked: ${manifestSlugs.size}`);
  console.log(`  Passed: ${totalPass}`);
  console.log(`  Failed: ${totalFail}`);
  console.log(`  Orphan maps: ${orphans.length}`);
  console.log(`  Critical failures: ${criticalFailures}`);

  if (criticalFailures > 0) {
    process.exit(1);
  }
}

main();
