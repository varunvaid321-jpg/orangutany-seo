#!/usr/bin/env npx tsx
/**
 * Semantic Image QA Guard
 * Flags: banned keywords in hero/ID/gallery alt/src, non-photo assets,
 * species slug mismatches, and low-resolution hero images.
 *
 * Usage: npx tsx scripts/image-audit.ts
 * Output: scripts/image-audit-report.json + console markdown summary
 */

import { allSpecies } from "../data/species";
import { existsSync, statSync, writeFileSync } from "fs";
import { execSync } from "child_process";
import { resolve } from "path";

const BANNED_KEYWORDS = [
  "coin", "medallion", "engraving", "logo", "icon", "stamp",
  "drawing", "painting", "cartoon", "clipart", "vector", "sketch",
  "diagram", "chart", "infographic", "badge", "emblem", "seal",
];

const MIN_HERO_LONG_EDGE = 1200;
const BASE = resolve(__dirname, "../public/images/species");

interface Finding {
  slug: string;
  file: string;
  context: "hero" | "gallery" | "id-detail" | "lookalike";
  severity: "error" | "warning";
  message: string;
}

const findings: Finding[] = [];

function getImageDimensions(filePath: string): { w: number; h: number } | null {
  try {
    const out = execSync(`sips -g pixelWidth -g pixelHeight "${filePath}" 2>/dev/null`, { encoding: "utf8" });
    const w = parseInt(out.match(/pixelWidth:\s*(\d+)/)?.[1] || "0");
    const h = parseInt(out.match(/pixelHeight:\s*(\d+)/)?.[1] || "0");
    return w > 0 && h > 0 ? { w, h } : null;
  } catch {
    return null;
  }
}

for (const species of allSpecies) {
  const dir = `${BASE}/${species.slug}`;

  // Check hero image (images[0])
  if (species.images.length > 0) {
    const hero = species.images[0];
    const heroPath = `${dir}/${hero.filename}`;

    // File existence
    if (!existsSync(heroPath)) {
      findings.push({ slug: species.slug, file: hero.filename, context: "hero", severity: "error", message: "Hero image file missing" });
    } else {
      // Resolution check
      const dims = getImageDimensions(heroPath);
      if (dims) {
        const longEdge = Math.max(dims.w, dims.h);
        if (longEdge < MIN_HERO_LONG_EDGE) {
          findings.push({ slug: species.slug, file: hero.filename, context: "hero", severity: "warning", message: `Hero image too small: ${dims.w}x${dims.h} (need ${MIN_HERO_LONG_EDGE}px long edge)` });
        }
      }

      // File size check (very small = likely placeholder)
      const stat = statSync(heroPath);
      if (stat.size < 20000) {
        findings.push({ slug: species.slug, file: hero.filename, context: "hero", severity: "warning", message: `Hero image suspiciously small: ${(stat.size / 1024).toFixed(1)} KB` });
      }
    }

    // Banned keyword check on alt text
    const altLower = hero.alt.toLowerCase();
    for (const kw of BANNED_KEYWORDS) {
      if (altLower.includes(kw)) {
        findings.push({ slug: species.slug, file: hero.filename, context: "hero", severity: "error", message: `Banned keyword "${kw}" in hero alt text: "${hero.alt}"` });
      }
    }

    // Slug mismatch: hero filename should not contain another species slug
    const fnLower = hero.filename.toLowerCase();
    for (const other of allSpecies) {
      if (other.slug !== species.slug && fnLower.includes(other.slug.replace(/-/g, ""))) {
        findings.push({ slug: species.slug, file: hero.filename, context: "hero", severity: "error", message: `Hero filename contains different species slug: ${other.slug}` });
      }
    }
  } else {
    findings.push({ slug: species.slug, file: "(none)", context: "hero", severity: "error", message: "No images defined" });
  }

  // Check all gallery images
  for (let i = 0; i < species.images.length; i++) {
    const img = species.images[i];
    const imgPath = `${dir}/${img.filename}`;
    const context = i === 0 ? "hero" as const : "gallery" as const;

    if (!existsSync(imgPath)) {
      findings.push({ slug: species.slug, file: img.filename, context, severity: "error", message: "Image file missing" });
      continue;
    }

    // Banned keywords in alt
    const altLower = img.alt.toLowerCase();
    for (const kw of BANNED_KEYWORDS) {
      if (altLower.includes(kw)) {
        findings.push({ slug: species.slug, file: img.filename, context, severity: "error", message: `Banned keyword "${kw}" in alt text` });
      }
    }

    // Non-photo extension check
    if (/\.(svg|gif|webp|bmp|ico)$/i.test(img.filename)) {
      findings.push({ slug: species.slug, file: img.filename, context, severity: "warning", message: "Non-standard photo format in gallery" });
    }
  }

  // Check lookalike images
  if (species.lookAlikes) {
    for (const la of species.lookAlikes) {
      if ("image" in la && (la as { image?: string }).image) {
        const laImg = (la as { image: string }).image;
        const laPath = `${dir}/${laImg}`;
        if (!existsSync(laPath)) {
          findings.push({ slug: species.slug, file: laImg, context: "lookalike", severity: "error", message: `Lookalike image missing: ${la.name}` });
        }
      }
    }
  }

  // Check identification images
  if ("identificationImages" in species && species.identificationImages) {
    const idImages = species.identificationImages as Record<string, string>;
    for (const [key, filename] of Object.entries(idImages)) {
      if (!filename) continue;
      const idPath = `${dir}/${filename}`;
      if (!existsSync(idPath)) {
        findings.push({ slug: species.slug, file: filename, context: "id-detail", severity: "error", message: `ID image missing for "${key}"` });
      }
    }
  }
}

// Write JSON report
const report = {
  timestamp: new Date().toISOString(),
  totalSpecies: allSpecies.length,
  totalFindings: findings.length,
  errors: findings.filter(f => f.severity === "error").length,
  warnings: findings.filter(f => f.severity === "warning").length,
  findings,
};

writeFileSync(resolve(__dirname, "image-audit-report.json"), JSON.stringify(report, null, 2));

// Console markdown summary
console.log("# Image Audit Report");
console.log(`\nDate: ${report.timestamp}`);
console.log(`Species scanned: ${report.totalSpecies}`);
console.log(`Total findings: ${report.totalFindings} (${report.errors} errors, ${report.warnings} warnings)`);

if (findings.length === 0) {
  console.log("\nAll clear — no issues found.");
} else {
  console.log("\n## Errors");
  const errors = findings.filter(f => f.severity === "error");
  if (errors.length === 0) console.log("None");
  else errors.forEach(f => console.log(`- **${f.slug}** [${f.context}] ${f.file}: ${f.message}`));

  console.log("\n## Warnings");
  const warnings = findings.filter(f => f.severity === "warning");
  if (warnings.length === 0) console.log("None");
  else warnings.forEach(f => console.log(`- **${f.slug}** [${f.context}] ${f.file}: ${f.message}`));
}
