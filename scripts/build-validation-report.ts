import * as fs from "fs";
import * as path from "path";

const ROOT = process.cwd();

interface ImageEntry {
  imageId: string;
  speciesSlug: string;
  localPath: string;
  creator: string;
  license: string;
  imageClass: string[];
  showsFeatures: string[];
  speciesConfidence: string;
  approved: boolean;
  sectionRelevance?: Record<string, boolean>;
  [key: string]: unknown;
}

interface MapEntry {
  speciesSlug: string;
  basemapVersion: string;
  projection: string;
  gbifKey: number;
  approved: boolean;
  [key: string]: unknown;
}

interface ValidationRules {
  imageRules: {
    minimumFileSizeBytes: Record<string, number>;
    allowedImageClasses: string[];
    sectionFeatureMapping: Record<string, string>;
  };
  mapRules: {
    requiredBasemapVersion: string;
    requiredProjection: string;
    minimumFileSizeBytes: number;
  };
}

function loadJSON<T>(relPath: string): T | null {
  const full = path.join(ROOT, relPath);
  if (!fs.existsSync(full)) return null;
  return JSON.parse(fs.readFileSync(full, "utf-8")) as T;
}

function main() {
  const imageManifest = loadJSON<Record<string, ImageEntry[]>>("data/images/image-manifest.json");
  const mapManifest = loadJSON<Record<string, MapEntry>>("data/maps/map-manifest.json");
  const rules = loadJSON<ValidationRules>("data/validation/validation-rules.json");

  // Collect all species slugs
  const allSlugs = new Set<string>();
  if (imageManifest) Object.keys(imageManifest).forEach((s) => allSlugs.add(s));
  if (mapManifest) Object.keys(mapManifest).forEach((s) => allSlugs.add(s));

  let criticalFailures = 0;

  // Image stats
  let speciesWithApprovedHero = 0;
  const speciesMissingHero: string[] = [];
  let attributionComplete = 0;
  let attributionIncomplete = 0;
  const sectionCoverage: Record<string, number> = { cap: 0, gills: 0, stem: 0, spore_print: 0 };

  if (imageManifest && rules) {
    const { minimumFileSizeBytes, allowedImageClasses } = rules.imageRules;

    for (const [slug, images] of Object.entries(imageManifest)) {
      if (!Array.isArray(images)) continue;

      // Hero check
      const heroImg = images.find(
        (img) =>
          img.approved === true &&
          Array.isArray(img.imageClass) &&
          img.imageClass.includes("hero")
      );

      if (heroImg) {
        // Validate hero file exists and meets size
        const filePath = path.join(ROOT, "public", heroImg.localPath || "");
        if (fs.existsSync(filePath)) {
          const stat = fs.statSync(filePath);
          if (stat.size >= minimumFileSizeBytes.hero) {
            speciesWithApprovedHero++;
          } else {
            speciesMissingHero.push(slug);
            criticalFailures++;
          }
        } else {
          speciesMissingHero.push(slug);
          criticalFailures++;
        }
      } else {
        speciesMissingHero.push(slug);
      }

      // Attribution check
      for (const img of images) {
        if (img.creator && img.creator.trim() && img.license && img.license.trim()) {
          attributionComplete++;
        } else {
          attributionIncomplete++;
        }

        // imageClass validation
        if (Array.isArray(img.imageClass)) {
          for (const cls of img.imageClass) {
            if (!allowedImageClasses.includes(cls)) criticalFailures++;
          }
        }
      }

      // Section coverage
      for (const [feature, count_key] of [
        ["cap_top", "cap"],
        ["gills", "gills"],
        ["stem", "stem"],
        ["spore_print", "spore_print"],
      ] as const) {
        const has = images.some(
          (img) =>
            img.approved === true &&
            Array.isArray(img.showsFeatures) &&
            img.showsFeatures.includes(feature)
        );
        if (has) sectionCoverage[count_key]++;
      }
    }
  }

  // Map stats
  let speciesWithApprovedMap = 0;
  const speciesMissingMap: string[] = [];

  if (mapManifest && rules) {
    const { requiredBasemapVersion, requiredProjection, minimumFileSizeBytes } = rules.mapRules;

    for (const [slug, entry] of Object.entries(mapManifest)) {
      if (entry.approved !== true) {
        speciesMissingMap.push(slug);
        continue;
      }
      if (entry.basemapVersion !== requiredBasemapVersion || entry.projection !== requiredProjection) {
        speciesMissingMap.push(slug);
        criticalFailures++;
        continue;
      }
      const mapFile = path.join(ROOT, "public/images/species", slug, "distribution-map.png");
      if (!fs.existsSync(mapFile)) {
        speciesMissingMap.push(slug);
        criticalFailures++;
        continue;
      }
      const stat = fs.statSync(mapFile);
      if (stat.size < minimumFileSizeBytes) {
        speciesMissingMap.push(slug);
        continue;
      }
      speciesWithApprovedMap++;
    }
  }

  // For species in allSlugs but not in mapManifest
  if (mapManifest) {
    for (const slug of allSlugs) {
      if (!mapManifest[slug] && !speciesMissingMap.includes(slug)) {
        speciesMissingMap.push(slug);
      }
    }
  }

  const imageSlugs = imageManifest ? Object.keys(imageManifest) : [];

  // Output report
  console.log("\n========================================");
  console.log("  Orangutany Validation Report");
  console.log("========================================\n");
  console.log(`  Total species:                ${allSlugs.size}`);
  console.log("");
  console.log("  --- Images ---");
  console.log(`  Species in image manifest:    ${imageSlugs.length}`);
  console.log(`  With approved hero image:     ${speciesWithApprovedHero}`);
  console.log(`  Missing hero image:           ${speciesMissingHero.length}`);
  if (speciesMissingHero.length > 0) {
    for (const s of speciesMissingHero) console.log(`    - ${s}`);
  }
  console.log("");
  console.log("  --- Maps ---");
  console.log(`  Species in map manifest:      ${mapManifest ? Object.keys(mapManifest).length : 0}`);
  console.log(`  With approved map:            ${speciesWithApprovedMap}`);
  console.log(`  Missing/invalid map:          ${speciesMissingMap.length}`);
  if (speciesMissingMap.length > 0) {
    for (const s of speciesMissingMap) console.log(`    - ${s}`);
  }
  console.log("");
  console.log("  --- Section Image Coverage ---");
  console.log(`  Cap images:                   ${sectionCoverage.cap}/${imageSlugs.length}`);
  console.log(`  Gills images:                 ${sectionCoverage.gills}/${imageSlugs.length}`);
  console.log(`  Stem images:                  ${sectionCoverage.stem}/${imageSlugs.length}`);
  console.log(`  Spore print images:           ${sectionCoverage.spore_print}/${imageSlugs.length}`);
  console.log("");
  console.log("  --- Attribution ---");
  console.log(`  Complete:                     ${attributionComplete}`);
  console.log(`  Incomplete:                   ${attributionIncomplete}`);
  console.log("");
  console.log(`  Critical failures:            ${criticalFailures}`);
  console.log("\n========================================\n");
}

main();
