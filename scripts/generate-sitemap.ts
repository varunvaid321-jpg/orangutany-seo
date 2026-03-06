// Run after build: npx tsx scripts/generate-sitemap.ts
import { allSpecies } from "../data/species";
import { writeFileSync } from "fs";

const BASE = "https://guide.orangutany.com";
const now = new Date().toISOString().split("T")[0];

const staticPages = [
  { url: "/", priority: "1.0", freq: "weekly" },
  { url: "/mushrooms", priority: "0.9", freq: "weekly" },
  { url: "/most-dangerous-mushrooms", priority: "0.85", freq: "monthly" },
  { url: "/best-edible-mushrooms", priority: "0.85", freq: "monthly" },
  { url: "/mushrooms-by-region", priority: "0.85", freq: "monthly" },
];

const speciesPages = allSpecies.map((s) => ({
  url: `/mushrooms/${s.slug}`,
  priority: "0.8",
  freq: "monthly",
}));

const urls = [...staticPages, ...speciesPages];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${BASE}${u.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${u.freq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

writeFileSync("out/sitemap.xml", xml);
console.log(`Sitemap generated with ${urls.length} URLs`);
