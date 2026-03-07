"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import type { SpeciesRecord } from "@/lib/types";
import { EdibilityBadge } from "./edibility-badge";
import cardImageIndex from "@/data/images/card-image-index.json";
import { articles, guides, authors, type ContentEntry } from "@/lib/content-index";

const cardIdx = cardImageIndex as Record<string, number>;

// All non-species content to search across
const contentItems: ContentEntry[] = [...articles, ...guides, ...authors];

const authorNameMap: Record<string, string> = Object.fromEntries(
  authors.map((a) => [a.slug.replace("/authors/", ""), a.title])
);

function getCounts(species: SpeciesRecord[]) {
  const edible = species.filter((s) => s.edibility === "edible").length;
  const caution = species.filter((s) => s.edibility === "edible-with-caution").length;
  const toxic = species.filter((s) => s.edibility === "toxic").length;
  const deadly = species.filter((s) => s.edibility === "deadly").length;
  const psychoactive = species.filter((s) => s.psychoactive).length;
  const inedible = species.filter((s) => s.edibility === "inedible").length;
  return { all: species.length, edible, caution, toxic, deadly, psychoactive, inedible };
}

const FILTER_KEYS = ["all", "edible", "edible-with-caution", "toxic", "deadly", "inedible", "psychoactive"] as const;

const TYPE_LABELS: Record<string, string> = {
  article: "Article",
  guide: "Guide",
  author: "Author",
};

const TYPE_COLORS: Record<string, string> = {
  article: "bg-blue-500/15 text-blue-300",
  guide: "bg-green-500/15 text-green-300",
  author: "bg-purple-500/15 text-purple-300",
};

function searchContent(q: string): ContentEntry[] {
  if (!q) return [];
  return contentItems
    .map((item) => {
      const title = item.title.toLowerCase();
      const summary = item.summary.toLowerCase();
      const keyword = item.keyword.toLowerCase();
      const slug = item.slug.toLowerCase();
      // Also search by author slug for articles/guides
      const authorSlug = item.author || "";

      let score = 0;
      if (title.startsWith(q)) score = 100;
      else if (title.includes(q)) score = 80;
      else if (keyword.includes(q)) score = 60;
      else if (summary.includes(q)) score = 40;
      else if (slug.includes(q)) score = 30;
      else if (authorSlug.includes(q.replace(/\s+/g, "-"))) score = 50;

      return { item, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((r) => r.item);
}

export function MushroomGrid({ species }: { species: SpeciesRecord[] }) {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  // Hydrate search from ?q= URL param (cross-domain continuity)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q");
    if (q) setSearch(q);
  }, []);

  // Semantic search: map natural queries to edibility/trait filters
  const INTENT_MAP: Record<string, { edibility?: string; trait?: string }> = {
    edible: { edibility: "edible" },
    "safe to eat": { edibility: "edible" },
    "can you eat": { edibility: "edible" },
    poisonous: { edibility: "toxic" },
    poison: { edibility: "toxic" },
    toxic: { edibility: "toxic" },
    deadly: { edibility: "deadly" },
    fatal: { edibility: "deadly" },
    "can kill": { edibility: "deadly" },
    psychoactive: { trait: "psychoactive" },
    magic: { trait: "psychoactive" },
    psilocybin: { trait: "psychoactive" },
  };

  const counts = getCounts(species);
  const FILTERS = [
    { key: "all" as const, label: "All", count: counts.all },
    { key: "edible" as const, label: "Edible", count: counts.edible },
    { key: "edible-with-caution" as const, label: "Caution", count: counts.caution },
    { key: "toxic" as const, label: "Toxic", count: counts.toxic },
    { key: "deadly" as const, label: "Deadly", count: counts.deadly },
    { key: "inedible" as const, label: "Inedible", count: counts.inedible },
    { key: "psychoactive" as const, label: "Psychoactive", count: counts.psychoactive },
  ];

  const q = search.trim().toLowerCase();
  const intent = Object.entries(INTENT_MAP).find(([key]) => q.includes(key))?.[1];

  const byFilter =
    filter === "all" ? species :
    filter === "psychoactive" ? species.filter((s) => s.psychoactive) :
    species.filter((s) => s.edibility === filter);

  const filtered = q
    ? byFilter
        .map((s) => {
          const cn = s.commonName.toLowerCase();
          const sn = s.scientificName.toLowerCase();
          let score = 0;
          if (cn.startsWith(q)) score = 100;
          else if (cn.includes(q)) score = 80;
          else if (sn.startsWith(q)) score = 70;
          else if (sn.includes(q)) score = 60;
          else if (s.taxonomy.genus.toLowerCase().includes(q)) score = 50;
          else if (s.taxonomy.family.toLowerCase().includes(q)) score = 40;
          else if (s.seoQueries.some((sq) => sq.toLowerCase().includes(q))) score = 30;
          else if (s.range?.toLowerCase().includes(q)) score = 25;
          else if (s.habitat?.toLowerCase().includes(q)) score = 22;
          else if (s.summary.toLowerCase().includes(q)) score = 20;
          else if (s.description.toLowerCase().includes(q)) score = 10;

          if (intent) {
            if (intent.edibility && s.edibility === intent.edibility) score = Math.max(score, 90);
            else if (intent.edibility && s.edibility !== intent.edibility) score = 0;
            else if (intent.trait === "psychoactive" && s.psychoactive) score = Math.max(score, 90);
            else if (intent.trait === "psychoactive" && !s.psychoactive) score = 0;
          }

          return { species: s, score };
        })
        .filter((r) => r.score > 0)
        .sort((a, b) => b.score - a.score)
        .map((r) => r.species)
    : byFilter;

  // Search content (articles, guides, authors) when there's a query
  const contentResults = searchContent(q);

  return (
    <>
      <div className="mt-6 mb-2">
        <div className="relative">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") e.currentTarget.blur(); }}
            placeholder="Search species, articles, guides, authors..."
            className="w-full rounded-xl border-2 border-primary/40 bg-card pl-12 pr-12 py-3.5 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-lg shadow-primary/5"
          />
          {search.trim() && (
            <button
              type="button"
              onClick={() => { /* search is live, blur to dismiss keyboard on mobile */ document.activeElement instanceof HTMLElement && document.activeElement.blur(); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg bg-primary p-1.5 text-background transition hover:bg-primary/90"
              aria-label="Search"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          )}
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              filter === f.key
                ? "bg-primary text-background"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {f.label} <span className="opacity-60">({f.count})</span>
          </button>
        ))}
      </div>

      {/* Content results (articles, guides, authors) */}
      {contentResults.length > 0 && (
        <div className="mt-6">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Articles, Guides & Authors ({contentResults.length})
          </h2>
          <div className="space-y-2">
            {contentResults.map((item) => (
              <Link
                key={item.slug}
                href={item.slug}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-3 transition hover:border-primary/50"
              >
                <span className={`mt-0.5 shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${TYPE_COLORS[item.type] ?? "bg-zinc-500/15 text-zinc-300"}`}>
                  {TYPE_LABELS[item.type] ?? item.type}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-foreground leading-snug">{item.title}</p>
                  <p className="mt-0.5 text-sm text-foreground/60 line-clamp-2">{item.summary}</p>
                  {item.author && (
                    <p className="mt-1 text-xs text-muted-foreground">
                      by {authorNameMap[item.author] ?? item.author}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Species grid */}
      {(filtered.length > 0 || !q) && (
        <>
          {contentResults.length > 0 && filtered.length > 0 && (
            <h2 className="mt-8 mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Species ({filtered.length})
            </h2>
          )}
          <div className={`${contentResults.length > 0 && filtered.length > 0 ? "" : "mt-6"} grid gap-4 sm:grid-cols-2 lg:grid-cols-3`}>
            {filtered.map((s) => (
              <Link
                key={s.slug}
                href={`/mushrooms/${s.slug}`}
                className="group overflow-hidden rounded-xl border border-border bg-card transition hover:border-primary/50"
              >
                {s.images.length > 0 && (
                  <img
                    src={`/images/species/${s.slug}/${(s.images[cardIdx[s.slug] ?? 0] ?? s.images[0]).filename}`}
                    alt={`${s.commonName} (${s.scientificName})`}
                    className="aspect-[3/2] w-full object-cover object-top transition group-hover:scale-105"
                    loading="lazy"
                  />
                )}
                <div className="p-4">
                  <div className="mb-2">
                    <EdibilityBadge edibility={s.edibility} psychoactive={s.psychoactive} />
                  </div>
                  <h3 className="font-semibold text-foreground">{s.commonName}</h3>
                  <p className="text-sm italic text-muted-foreground">
                    {s.scientificName}
                  </p>
                  <p className="mt-2 line-clamp-2 text-sm text-foreground/70">
                    {s.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}

      {filtered.length === 0 && contentResults.length === 0 && q && (
        <p className="mt-8 text-center text-sm text-muted-foreground">
          No results found.
        </p>
      )}

      {filtered.length === 0 && !q && (
        <p className="mt-8 text-center text-sm text-muted-foreground">
          No species match this filter yet.
        </p>
      )}
    </>
  );
}
