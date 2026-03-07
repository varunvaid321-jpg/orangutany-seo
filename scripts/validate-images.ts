import * as fs from "fs";
import * as path from "path";

const ROOT = process.cwd();

interface ImageEntry {
  imageId: string;
  speciesSlug: string;
  source: string;
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

interface ValidationRules {
  imageRules: {
    minimumFileSizeBytes: Record<string, number>;
    allowedImageClasses: string[];
    sectionFeatureMapping: Record<string, string>;
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
  const manifest = loadJSON<Record<string, ImageEntry[]>>("data/images/image-manifest.json");
  if (!manifest) {
    console.error("CRITICAL: image-manifest.json not found");
    process.exit(1);
  }

  const rules = loadJSON<ValidationRules>("data/validation/validation-rules.json");
  if (!rules) {
    console.error("CRITICAL: validation-rules.json not found");
    process.exit(1);
  }

  const { minimumFileSizeBytes, allowedImageClasses, sectionFeatureMapping } = rules.imageRules;
  let totalPass = 0;
  let totalFail = 0;
  let criticalFailures = 0;
  const speciesResults: { slug: string; pass: boolean; errors: string[] }[] = [];

  const speciesSlugs = Object.keys(manifest);

  for (const slug of speciesSlugs) {
    const images = manifest[slug];
    if (!Array.isArray(images)) {
      speciesResults.push({ slug, pass: false, errors: ["Manifest entry is not an array"] });
      criticalFailures++;
      totalFail++;
      continue;
    }

    const errors: string[] = [];

    for (const img of images) {
      const prefix = `[${img.imageId || "unknown"}]`;

      // approved field exists and is true
      if (img.approved !== true) {
        errors.push(`${prefix} not approved`);
      }

      // local file exists
      const filePath = path.join(ROOT, "public", img.localPath || "");
      if (!img.localPath || !fs.existsSync(filePath)) {
        errors.push(`${prefix} file missing: public${img.localPath}`);
        criticalFailures++;
      } else {
        // file size check
        const stat = fs.statSync(filePath);
        const isHero = Array.isArray(img.imageClass) && img.imageClass.includes("hero");
        const minSize = isHero ? minimumFileSizeBytes.hero : minimumFileSizeBytes.gallery;
        if (stat.size < minSize) {
          errors.push(`${prefix} file too small: ${stat.size} bytes (min ${minSize})`);
        }
      }

      // speciesConfidence
      if (img.speciesConfidence !== "high") {
        errors.push(`${prefix} speciesConfidence is "${img.speciesConfidence}", expected "high"`);
      }

      // imageClass values allowed
      if (Array.isArray(img.imageClass)) {
        for (const cls of img.imageClass) {
          if (!allowedImageClasses.includes(cls)) {
            errors.push(`${prefix} disallowed imageClass: "${cls}"`);
            criticalFailures++;
          }
        }
      }

      // creator and license non-empty
      if (!img.creator || img.creator.trim() === "") {
        errors.push(`${prefix} missing creator`);
      }
      if (!img.license || img.license.trim() === "") {
        errors.push(`${prefix} missing license`);
      }

      // sectionRelevance -> showsFeatures check
      if (img.sectionRelevance && typeof img.sectionRelevance === "object") {
        for (const [section, relevant] of Object.entries(img.sectionRelevance)) {
          if (relevant === true) {
            const requiredFeature = sectionFeatureMapping[section];
            if (requiredFeature && Array.isArray(img.showsFeatures) && !img.showsFeatures.includes(requiredFeature)) {
              errors.push(`${prefix} sectionRelevance.${section}=true but showsFeatures missing "${requiredFeature}"`);
              criticalFailures++;
            }
          }
        }
      }
    }

    const pass = errors.length === 0;
    if (pass) totalPass++;
    else totalFail++;
    speciesResults.push({ slug, pass, errors });
  }

  // Output results
  console.log("\n=== Image Validation Results ===\n");
  for (const r of speciesResults) {
    if (r.pass) {
      console.log(`  PASS  ${r.slug}`);
    } else {
      console.log(`  FAIL  ${r.slug}`);
      for (const e of r.errors) {
        console.log(`        - ${e}`);
      }
    }
  }

  console.log("\n--- Summary ---");
  console.log(`  Species checked: ${speciesSlugs.length}`);
  console.log(`  Passed: ${totalPass}`);
  console.log(`  Failed: ${totalFail}`);
  console.log(`  Critical failures: ${criticalFailures}`);

  if (criticalFailures > 0) {
    process.exit(1);
  }
}

main();
