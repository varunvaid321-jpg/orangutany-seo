import * as fs from "fs";
import * as path from "path";

const ROOT = process.cwd();

interface ImageEntry {
  imageId: string;
  speciesSlug: string;
  approved: boolean;
  showsFeatures: string[];
  [key: string]: unknown;
}

const SECTIONS = ["cap", "gills", "stem", "sporePrint"] as const;

const SECTION_TO_FEATURE: Record<string, string> = {
  cap: "cap_top",
  gills: "gills",
  stem: "stem",
  sporePrint: "spore_print",
};

function main() {
  const manifestPath = path.join(ROOT, "data/images/image-manifest.json");
  if (!fs.existsSync(manifestPath)) {
    console.error("image-manifest.json not found");
    process.exit(1);
  }

  const manifest: Record<string, ImageEntry[]> = JSON.parse(
    fs.readFileSync(manifestPath, "utf-8")
  );

  const result: Record<string, Record<string, string | null>> = {};

  for (const [slug, images] of Object.entries(manifest)) {
    const selection: Record<string, string | null> = {};

    for (const section of SECTIONS) {
      const feature = SECTION_TO_FEATURE[section];
      const match = Array.isArray(images)
        ? images.find(
            (img) =>
              img.approved === true &&
              Array.isArray(img.showsFeatures) &&
              img.showsFeatures.includes(feature)
          )
        : undefined;
      selection[section] = match ? match.imageId : null;
    }

    result[slug] = selection;
  }

  console.log(JSON.stringify(result, null, 2));
}

main();
