#!/usr/bin/env node
/**
 * Validates that every /articles/* page has a byline link to /authors/<slug>.
 * Exits non-zero on failure. Run: npm run check:authors
 *
 * Modes:
 *   --build   Check built HTML in out/ (default if out/ exists)
 *   --live    Check live site at https://guide.orangutany.com
 */

import { readdirSync, readFileSync, existsSync } from "fs";
import { join } from "path";

const ROOT = new URL("..", import.meta.url).pathname;
const OUT = join(ROOT, "out");
const mode = process.argv.includes("--live") ? "live" : "build";

let failures = 0;
let total = 0;

async function fetchHtml(url) {
  const res = await fetch(url);
  if (!res.ok) return null;
  return res.text();
}

function checkHtml(html, articleSlug) {
  // Look for an anchor with href containing /authors/
  const authorLinkMatch = html.match(/href="\/authors\/([^"]+)"/);
  if (!authorLinkMatch) {
    console.error(`  FAIL: ${articleSlug} — no byline link to /authors/*`);
    failures++;
    return null;
  }

  // Check it's not linking to homepage or non-author URL
  const href = `/authors/${authorLinkMatch[1]}`;

  // Verify the link is in a byline context (near "By" text)
  const bylinePattern = /By[\s\S]{0,200}href="\/authors\//;
  if (!bylinePattern.test(html)) {
    console.error(`  FAIL: ${articleSlug} — /authors/ link exists but not in byline context`);
    failures++;
    return null;
  }

  console.log(`  PASS: ${articleSlug} -> ${href}`);
  return href;
}

async function checkBuild() {
  if (!existsSync(OUT)) {
    console.error("ERROR: out/ directory not found. Run `npm run build` first.");
    process.exit(2);
  }

  const articlesDir = join(OUT, "articles");
  if (!existsSync(articlesDir)) {
    console.error("ERROR: out/articles/ not found.");
    process.exit(2);
  }

  // Find all article HTML files (exclude articles.html hub page)
  const entries = readdirSync(articlesDir).filter(f => f.endsWith(".html"));
  const authorTargets = new Set();

  console.log(`\nChecking ${entries.length} article pages (build mode)...\n`);

  for (const file of entries) {
    total++;
    const html = readFileSync(join(articlesDir, file), "utf-8");
    const slug = file.replace(".html", "");
    const target = checkHtml(html, slug);
    if (target) authorTargets.add(target);
  }

  // Verify all author targets exist in build output
  console.log(`\nChecking ${authorTargets.size} author page targets...\n`);
  for (const authorPath of authorTargets) {
    const authorFile = join(OUT, authorPath.slice(1) + ".html");
    if (existsSync(authorFile)) {
      console.log(`  PASS: ${authorPath} exists`);
    } else {
      console.error(`  FAIL: ${authorPath} — file not found in build output`);
      failures++;
    }
  }
}

async function checkLive() {
  const base = "https://guide.orangutany.com";

  // Fetch articles index to discover article links
  const indexHtml = await fetchHtml(`${base}/articles`);
  if (!indexHtml) {
    console.error("ERROR: Could not fetch /articles index page");
    process.exit(2);
  }

  const articleSlugs = [...indexHtml.matchAll(/href="\/articles\/([^"]+)"/g)]
    .map(m => m[1])
    .filter(s => !s.includes("/") && s !== "");
  const unique = [...new Set(articleSlugs)];
  const authorTargets = new Set();

  console.log(`\nChecking ${unique.length} article pages (live mode)...\n`);

  for (const slug of unique) {
    total++;
    const html = await fetchHtml(`${base}/articles/${slug}`);
    if (!html) {
      console.error(`  FAIL: /articles/${slug} — HTTP error`);
      failures++;
      continue;
    }
    const target = checkHtml(html, slug);
    if (target) authorTargets.add(target);
  }

  // Verify author pages return 200
  console.log(`\nChecking ${authorTargets.size} author page targets...\n`);
  for (const authorPath of authorTargets) {
    const res = await fetch(`${base}${authorPath}`);
    if (res.ok) {
      console.log(`  PASS: ${authorPath} -> ${res.status}`);
    } else {
      console.error(`  FAIL: ${authorPath} -> ${res.status}`);
      failures++;
    }
  }
}

console.log(`Author byline link check (mode: ${mode})`);
console.log("=".repeat(50));

if (mode === "live") {
  await checkLive();
} else {
  await checkBuild();
}

console.log(`\n${"=".repeat(50)}`);
console.log(`Total articles: ${total}, Failures: ${failures}`);

if (failures > 0) {
  console.error("\nAUTHOR LINK CHECK FAILED");
  process.exit(1);
} else {
  console.log("\nAUTHOR LINK CHECK PASSED");
}
