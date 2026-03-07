import type { MetadataRoute } from "next";
import { allSpecies } from "@/data/species";

export const dynamic = "force-static";

const BASE = "https://guide.orangutany.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const species = allSpecies.map((s) => ({
    url: `${BASE}/mushrooms/${s.slug}`,
    lastModified: new Date("2026-03-06"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: BASE, lastModified: new Date("2026-03-06"), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/mushrooms`, lastModified: new Date("2026-03-06"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/articles/most-dangerous-mushrooms`, lastModified: new Date("2026-03-06"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/articles/best-edible-mushrooms`, lastModified: new Date("2026-03-06"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/articles/mushrooms-by-region`, lastModified: new Date("2026-03-06"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/articles/how-to-identify-poisonous-mushrooms`, lastModified: new Date("2026-03-06"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/articles/dog-ate-mushroom`, lastModified: new Date("2026-03-06"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/articles/mushrooms-that-can-kill-you`, lastModified: new Date("2026-03-06"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/articles/mushrooms-in-your-yard`, lastModified: new Date("2026-03-06"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/guides/beginners-guide-to-mushroom-foraging`, lastModified: new Date("2026-03-06"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/guides/mushroom-foraging-by-season`, lastModified: new Date("2026-03-06"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/guides/edible-wild-mushrooms-trail`, lastModified: new Date("2026-03-06"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/identify-a-mushroom`, lastModified: new Date("2026-03-06"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/about`, lastModified: new Date("2026-03-06"), changeFrequency: "monthly", priority: 0.6 },
    ...species,
  ];
}
