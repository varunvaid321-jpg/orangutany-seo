import type { MetadataRoute } from "next";
import { allSpecies } from "@/data/species";
import { articles, guides, authors } from "@/lib/content-index";
import { RECIPES } from "@/data/recipes";

export const dynamic = "force-static";

const BASE = "https://guide.orangutany.com";
const NOW = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const species = allSpecies.map((s) => ({
    url: `${BASE}/mushrooms/${s.slug}`,
    lastModified: NOW,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const articleEntries = articles.map((a) => ({
    url: `${BASE}${a.slug}`,
    lastModified: NOW,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const guideEntries = guides.map((g) => ({
    url: `${BASE}${g.slug}`,
    lastModified: NOW,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const authorEntries = authors.map((a) => ({
    url: `${BASE}${a.slug}`,
    lastModified: NOW,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [
    { url: BASE, lastModified: NOW, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/mushrooms`, lastModified: NOW, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/articles`, lastModified: NOW, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/guides`, lastModified: NOW, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/authors`, lastModified: NOW, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/identify-a-mushroom`, lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/about`, lastModified: NOW, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/attribution`, lastModified: NOW, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE}/newsletter`, lastModified: NOW, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/resources`, lastModified: NOW, changeFrequency: "monthly", priority: 0.6 },
    ...species,
    ...articleEntries,
    ...RECIPES.map((r) => ({
      url: `${BASE}/articles/cooking-wild-mushrooms/${r.slug}`,
      lastModified: NOW,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...guideEntries,
    ...authorEntries,
  ];
}
