import type { MetadataRoute } from "next";
import { allSpecies } from "@/data/species";
import { articles, guides, authors } from "@/lib/content-index";
import { RECIPES } from "@/data/recipes";
import { lastModFor } from "@/lib/lastmod";

export const dynamic = "force-static";

const BASE = "https://guide.orangutany.com";

// Real last-modified dates derived from git history per content file —
// never the build timestamp. Google treats perpetually-"fresh" lastmod
// values that don't match content changes as noise and may ignore them.
export default function sitemap(): MetadataRoute.Sitemap {
  const species = allSpecies.map((s) => ({
    url: `${BASE}/mushrooms/${s.slug}`,
    lastModified: lastModFor(`data/species/${s.slug}.ts`),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const articleEntries = articles.map((a) => ({
    url: `${BASE}${a.slug}`,
    lastModified: lastModFor(`app${a.slug}/page.tsx`),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const guideEntries = guides.map((g) => ({
    url: `${BASE}${g.slug}`,
    lastModified: lastModFor(`app${g.slug}/page.tsx`),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const authorEntries = authors.map((a) => ({
    url: `${BASE}${a.slug}`,
    lastModified: lastModFor(`app${a.slug}/page.tsx`),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const staticPage = (path: string, changeFrequency: "weekly" | "monthly", priority: number) => ({
    url: `${BASE}${path}`,
    lastModified: lastModFor(`app${path || "/"}/page.tsx`.replace("//", "/")),
    changeFrequency,
    priority,
  });

  return [
    { url: BASE, lastModified: lastModFor("app/page.tsx"), changeFrequency: "weekly" as const, priority: 1.0 },
    staticPage("/mushrooms", "weekly", 0.9),
    staticPage("/articles", "weekly", 0.9),
    staticPage("/guides", "weekly", 0.9),
    staticPage("/authors", "monthly", 0.6),
    staticPage("/identify-a-mushroom", "monthly", 0.9),
    staticPage("/about", "monthly", 0.6),
    staticPage("/attribution", "monthly", 0.4),
    staticPage("/newsletter", "monthly", 0.5),
    staticPage("/resources", "monthly", 0.6),
    staticPage("/privacy", "monthly", 0.3),
    ...species,
    ...articleEntries,
    ...RECIPES.map((r) => ({
      url: `${BASE}/articles/cooking-wild-mushrooms/${r.slug}`,
      lastModified: lastModFor("data/recipes.ts"),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...guideEntries,
    ...authorEntries,
  ];
}
