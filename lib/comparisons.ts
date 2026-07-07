// Derives look-alike comparison pairs from existing species data.
// Every comparison page is generated purely from verified lookAlikes entries —
// no new or fabricated content. A pair exists when at least one species lists
// the other as a look-alike AND both species have pages in our guide.
import { allSpecies, getSpeciesBySlug } from "@/data/species";
import type { SpeciesRecord } from "@/lib/types";

export interface ComparisonPair {
  slug: string; // "<a>-vs-<b>" with a/b in alphabetical slug order
  a: SpeciesRecord;
  b: SpeciesRecord;
  /** Distinction written from A's page about B, if present */
  aboutB?: string;
  /** Distinction written from B's page about A, if present */
  aboutA?: string;
}

let cache: ComparisonPair[] | null = null;

export function allComparisons(): ComparisonPair[] {
  if (cache) return cache;

  const map = new Map<string, ComparisonPair>();
  for (const s of allSpecies) {
    for (const la of s.lookAlikes) {
      if (!la.slug) continue;
      const other = getSpeciesBySlug(la.slug);
      if (!other || other.slug === s.slug) continue;

      const [first, second] = [s.slug, la.slug].sort();
      const key = `${first}-vs-${second}`;
      let pair = map.get(key);
      if (!pair) {
        pair = {
          slug: key,
          a: getSpeciesBySlug(first)!,
          b: getSpeciesBySlug(second)!,
        };
        map.set(key, pair);
      }
      // s is describing la: if s is the alphabetical "a", this text is about B.
      if (s.slug === first) pair.aboutB = la.distinction;
      else pair.aboutA = la.distinction;
    }
  }

  cache = [...map.values()].sort((x, y) => x.slug.localeCompare(y.slug));
  return cache;
}

export function getComparisonBySlug(slug: string): ComparisonPair | undefined {
  return allComparisons().find((p) => p.slug === slug);
}

/** Comparison pages that involve the given species (for cross-linking). */
export function comparisonsForSpecies(speciesSlug: string): ComparisonPair[] {
  return allComparisons().filter((p) => p.a.slug === speciesSlug || p.b.slug === speciesSlug);
}
