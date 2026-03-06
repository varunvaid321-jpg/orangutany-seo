// Run after build: npx tsx scripts/generate-sitemap.ts
import { allSpecies } from "../data/species";
import { writeFileSync } from "fs";

const BASE = "https://guide.orangutany.com";
const now = new Date().toISOString().split("T")[0];

const staticPages = [
  { url: "/", priority: "1.0", freq: "weekly" },
  { url: "/mushrooms", priority: "0.9", freq: "weekly" },
  // Articles
  { url: "/articles/most-dangerous-mushrooms", priority: "0.85", freq: "monthly" },
  { url: "/articles/best-edible-mushrooms", priority: "0.85", freq: "monthly" },
  { url: "/articles/mushrooms-by-region", priority: "0.85", freq: "monthly" },
  { url: "/articles/how-to-identify-poisonous-mushrooms", priority: "0.85", freq: "monthly" },
  { url: "/articles/mushrooms-that-can-kill-you", priority: "0.85", freq: "monthly" },
  { url: "/articles/mushrooms-in-your-yard", priority: "0.85", freq: "monthly" },
  { url: "/articles/dog-ate-mushroom", priority: "0.85", freq: "monthly" },
  { url: "/articles/australian-mushroom-poisoning", priority: "0.8", freq: "monthly" },
  { url: "/articles/psychoactive-mushrooms-science", priority: "0.8", freq: "monthly" },
  { url: "/articles/why-mushrooms-grow-in-circles", priority: "0.8", freq: "monthly" },
  { url: "/articles/chicken-of-the-woods", priority: "0.85", freq: "monthly" },
  { url: "/articles/how-to-find-morels", priority: "0.85", freq: "monthly" },
  { url: "/articles/morel-vs-false-morel", priority: "0.85", freq: "monthly" },
  { url: "/articles/most-expensive-mushrooms", priority: "0.8", freq: "monthly" },
  { url: "/articles/medicinal-mushrooms", priority: "0.8", freq: "monthly" },
  // Guides
  { url: "/guides/beginners-guide-to-mushroom-foraging", priority: "0.85", freq: "monthly" },
  { url: "/guides/edible-wild-mushrooms-trail", priority: "0.8", freq: "monthly" },
  { url: "/guides/mushroom-foraging-by-season", priority: "0.85", freq: "monthly" },
  // Hub pages
  { url: "/articles", priority: "0.8", freq: "weekly" },
  { url: "/guides", priority: "0.8", freq: "weekly" },
  { url: "/authors", priority: "0.6", freq: "monthly" },
  { url: "/resources", priority: "0.7", freq: "monthly" },
  { url: "/about", priority: "0.5", freq: "yearly" },
  { url: "/identify-a-mushroom", priority: "0.9", freq: "monthly" },
  // Authors
  { url: "/authors/varun-vaid", priority: "0.6", freq: "monthly" },
  { url: "/authors/elena-marchetti", priority: "0.4", freq: "yearly" },
  { url: "/authors/james-whitfield", priority: "0.4", freq: "yearly" },
  { url: "/authors/priya-sharma", priority: "0.4", freq: "yearly" },
  { url: "/authors/daniel-okafor", priority: "0.4", freq: "yearly" },
  { url: "/authors/mei-lin-chen", priority: "0.4", freq: "yearly" },
  { url: "/authors/sofia-andersson", priority: "0.4", freq: "yearly" },
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
