"use client";

import Link from "next/link";
import { useState } from "react";
import type { SpeciesRecord } from "@/lib/types";
import { EdibilityBadge } from "./edibility-badge";

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

export function MushroomGrid({ species }: { species: SpeciesRecord[] }) {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

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
          // Priority: exact start of name > contains name > scientific > taxonomy > seo queries > summary
          let score = 0;
          if (cn.startsWith(q)) score = 100;
          else if (cn.includes(q)) score = 80;
          else if (sn.startsWith(q)) score = 70;
          else if (sn.includes(q)) score = 60;
          else if (s.taxonomy.genus.toLowerCase().includes(q)) score = 50;
          else if (s.taxonomy.family.toLowerCase().includes(q)) score = 40;
          else if (s.seoQueries.some((sq) => sq.toLowerCase().includes(q))) score = 30;
          else if (s.summary.toLowerCase().includes(q)) score = 20;
          else if (s.description.toLowerCase().includes(q)) score = 10;

          // If user expressed intent (e.g. "edible"), boost matching species and penalize contradictions
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

  return (
    <>
      <div className="mt-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, genus, or family..."
          className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
        />
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

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((s) => (
          <Link
            key={s.slug}
            href={`/mushrooms/${s.slug}`}
            className="group overflow-hidden rounded-xl border border-border bg-card transition hover:border-primary/50"
          >
            {s.images.length > 0 && (
              <img
                src={`/images/species/${s.slug}/${s.images[0].filename}`}
                alt={s.images[0].alt}
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

      {filtered.length === 0 && (
        <p className="mt-8 text-center text-sm text-muted-foreground">
          No species match this filter yet.
        </p>
      )}
    </>
  );
}
