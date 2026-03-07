#!/usr/bin/env npx tsx
/**
 * Generates public/sitemap-guide-manifest.json from all guide routes.
 * Consumed by the main app (amushroom) to build a unified sitemap.
 *
 * Run: npx tsx scripts/generate-guide-manifest.ts
 * Also runs automatically via npm run build (see package.json).
 */

import { allSpecies } from "../data/species/index";
import { articles, guides, hubs, authors } from "../lib/content-index";
import * as fs from "fs";
import * as path from "path";

interface ManifestEntry {
  path: string;
  lastmod: string;
  changefreq: string;
  priority: number;
  indexable: boolean;
}

const NOW = new Date().toISOString().split("T")[0];

const entries: ManifestEntry[] = [];

// Home
entries.push({ path: "/", lastmod: NOW, changefreq: "weekly", priority: 1.0, indexable: true });

// Hub pages
for (const hub of hubs) {
  entries.push({ path: hub.slug, lastmod: NOW, changefreq: "weekly", priority: 0.9, indexable: true });
}

// Species pages
for (const sp of allSpecies) {
  entries.push({ path: `/mushrooms/${sp.slug}`, lastmod: NOW, changefreq: "monthly", priority: 0.8, indexable: true });
}

// Articles
for (const art of articles) {
  entries.push({ path: art.slug, lastmod: NOW, changefreq: "monthly", priority: 0.7, indexable: true });
}

// Guides
for (const g of guides) {
  entries.push({ path: g.slug, lastmod: NOW, changefreq: "monthly", priority: 0.7, indexable: true });
}

// Authors
for (const a of authors) {
  entries.push({ path: a.slug, lastmod: NOW, changefreq: "monthly", priority: 0.5, indexable: true });
}

// Utility pages
for (const p of ["/identify-a-mushroom", "/attribution", "/newsletter", "/about"]) {
  entries.push({ path: p, lastmod: NOW, changefreq: "monthly", priority: 0.6, indexable: true });
}

const manifest = {
  generated: new Date().toISOString(),
  canonical_host: "https://orangutany.com",
  guide_host: "https://guide.orangutany.com",
  total: entries.length,
  entries,
};

const outPath = path.join(__dirname, "..", "public", "sitemap-guide-manifest.json");
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(manifest, null, 2) + "\n");

console.log(`Guide manifest: ${entries.length} entries -> ${outPath}`);
