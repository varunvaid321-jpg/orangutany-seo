#!/usr/bin/env npx tsx
/**
 * SEO validation script for guide.orangutany.com.
 * Checks sitemap integrity, canonical consistency, and manifest drift.
 *
 * Run: npx tsx scripts/validate-seo.ts
 * Also: npm run validate-seo
 */

import * as fs from "fs";
import * as path from "path";

const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "out");
let errors = 0;
let warnings = 0;

function fail(msg: string) { console.error(`  FAIL: ${msg}`); errors++; }
function warn(msg: string) { console.warn(`  WARN: ${msg}`); warnings++; }
function pass(msg: string) { console.log(`  PASS: ${msg}`); }

// 1. Check guide manifest exists
console.log("\n[1] Guide manifest check");
const manifestPath = path.join(ROOT, "public", "sitemap-guide-manifest.json");
if (fs.existsSync(manifestPath)) {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));
  if (manifest.entries && manifest.entries.length > 100) {
    pass(`Manifest has ${manifest.entries.length} entries`);
  } else {
    fail(`Manifest has only ${manifest.entries?.length || 0} entries (expected >100)`);
  }
  if (manifest.canonical_host !== "https://orangutany.com") {
    fail(`Manifest canonical_host is ${manifest.canonical_host}, expected https://orangutany.com`);
  } else {
    pass("Manifest canonical_host is orangutany.com");
  }
} else {
  fail("sitemap-guide-manifest.json not found. Run: npm run generate-manifest");
}

// 2. Check sitemap.xml in build output
console.log("\n[2] Sitemap integrity check");
const sitemapPath = path.join(OUT, "sitemap.xml");
if (fs.existsSync(sitemapPath)) {
  const sitemap = fs.readFileSync(sitemapPath, "utf-8");
  const urls = sitemap.match(/<loc>[^<]+<\/loc>/g) || [];
  if (urls.length > 100) {
    pass(`Sitemap has ${urls.length} URLs`);
  } else {
    fail(`Sitemap has only ${urls.length} URLs (expected >100)`);
  }

  // Check required URLs are present
  const required = ["/mushrooms", "/articles", "/guides", "/authors", "/about",
    "/attribution", "/newsletter", "/resources", "/identify-a-mushroom"];
  for (const p of required) {
    if (sitemap.includes(p)) {
      pass(`Sitemap includes ${p}`);
    } else {
      fail(`Sitemap missing required path: ${p}`);
    }
  }

  // All URLs should be guide.orangutany.com
  const nonGuide = urls.filter(u => !u.includes("guide.orangutany.com"));
  if (nonGuide.length > 0) {
    fail(`Sitemap has ${nonGuide.length} non-guide URLs: ${nonGuide[0]}`);
  } else {
    pass("All sitemap URLs use guide.orangutany.com host");
  }
} else {
  warn("out/sitemap.xml not found (run npm run build first)");
}

// 3. Check robots.txt
console.log("\n[3] Robots.txt check");
const robotsPath = path.join(OUT, "robots.txt");
if (fs.existsSync(robotsPath)) {
  const robots = fs.readFileSync(robotsPath, "utf-8");
  if (robots.includes("orangutany.com/sitemap.xml")) {
    pass("Robots.txt references orangutany.com sitemap");
  } else {
    fail("Robots.txt missing orangutany.com sitemap reference");
  }
  // Guide sitemap should NOT be listed (single-host policy)
  if (robots.includes("guide.orangutany.com/sitemap.xml")) {
    warn("Robots.txt still references guide.orangutany.com sitemap (single-host policy prefers main only)");
  }
} else {
  warn("out/robots.txt not found (run npm run build first)");
}

// 4. Coordination contract check
console.log("\n[4] Coordination contract check");
const coordPath = path.join(ROOT, "docs", "seo", "sitemap-coordination.json");
if (fs.existsSync(coordPath)) {
  const coord = JSON.parse(fs.readFileSync(coordPath, "utf-8"));
  if (coord.indexing_policy === "single-host") {
    pass("Coordination contract specifies single-host policy");
  } else {
    fail(`Unexpected indexing policy: ${coord.indexing_policy}`);
  }
  if (coord.canonical_host === "https://orangutany.com") {
    pass("Canonical host is orangutany.com");
  } else {
    fail(`Wrong canonical host: ${coord.canonical_host}`);
  }
} else {
  fail("docs/seo/sitemap-coordination.json not found");
}

// 5. Look-alike image paths must be filenames, not full paths
console.log("\n[5] Look-alike image path check");
import { allSpecies } from "../data/species";
let laImageErrors = 0;
for (const sp of allSpecies) {
  for (const la of sp.lookAlikes) {
    if (la.image && la.image.includes("/")) {
      fail(`${sp.slug}: look-alike "${la.name}" image is a path ("${la.image}") — must be filename only`);
      laImageErrors++;
    }
  }
}
if (laImageErrors === 0) {
  pass(`All look-alike image fields are filenames (${allSpecies.length} species checked)`);
}

// Summary
console.log(`\n${"=".repeat(40)}`);
console.log(`Results: ${errors} errors, ${warnings} warnings`);
if (errors > 0) {
  console.error("SEO validation FAILED");
  process.exit(1);
} else {
  console.log("SEO validation PASSED");
}
