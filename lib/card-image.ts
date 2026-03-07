import cardImageIndex from "@/data/images/card-image-index.json";
import { SpeciesRecord } from "@/lib/types";

const index = cardImageIndex as Record<string, number>;

/**
 * Get the best card-suitable image for a species (Explore More, grids, related cards).
 * Uses the curated card-image-index.json which picks the best full-mushroom hero image.
 * Returns { filename, alt } or null if no images available.
 */
export function getCardImage(species: SpeciesRecord): { src: string; alt: string } | null {
  if (!species.images.length) return null;
  const idx = index[species.slug] ?? 0;
  const img = species.images[idx] ?? species.images[0];
  return {
    src: `/images/species/${species.slug}/${img.filename}`,
    alt: `${species.commonName} (${species.scientificName})`,
  };
}
