import { Metadata } from "next";
import Link from "next/link";
import { allSpecies } from "@/data/species";

export const metadata: Metadata = {
  title: "10 Most Dangerous Mushrooms in the World",
  description:
    "The deadliest mushrooms on Earth, from the Death Cap to the Destroying Angel. Real images, identification tips, and documented poisoning cases.",
  alternates: { canonical: "/articles/most-dangerous-mushrooms" },
  openGraph: {
    title: "10 Most Dangerous Mushrooms in the World",
    description:
      "The deadliest mushrooms on Earth, from the Death Cap to the Destroying Angel. Real images, identification tips, and documented poisoning cases.",
  },
};

const DANGEROUS_SLUGS = [
  "amanita-phalloides",
  "amanita-virosa",
  "amanita-muscaria",
  "galerina-marginata",
  "conocybe-filaris",
  "gyromitra-esculenta",
  "cortinarius-rubellus",
  "amanita-bisporigera",
  "podostroma-cornu-damae",
  "lepiota-brunneoincarnata",
];

export default function MostDangerousPage() {
  const dangerous = DANGEROUS_SLUGS
    .map((slug) => allSpecies.find((s) => s.slug === slug))
    .filter(Boolean);

  return (
    <div className="mx-auto max-w-5xl px-6 py-8">
      <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground sm:text-3xl">
        10 Most Dangerous Mushrooms in the World
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-foreground/80">
        These are the mushrooms responsible for the vast majority of fatal poisonings worldwide.
        Some look deceptively similar to popular edible species. Knowing what they look like
        could save your life, or your dog&apos;s.
      </p>

      <div className="mt-8 space-y-6">
        {dangerous.map((species, i) => (
          <Link
            key={species!.slug}
            href={`/mushrooms/${species!.slug}`}
            className="group flex gap-4 overflow-hidden rounded-xl border border-border bg-card transition hover:border-primary/50"
          >
            {species!.images.length > 0 && (
              <img
                src={`/images/species/${species!.slug}/${species!.images[0].filename}`}
                alt={species!.images[0].alt}
                className="h-auto w-32 flex-shrink-0 object-cover sm:w-44"
                loading="lazy"
              />
            )}
            <div className="flex flex-col justify-center py-4 pr-4">
              <span className="text-xs font-bold text-red-400">#{i + 1}</span>
              <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition">
                {species!.commonName}
              </h2>
              <p className="text-sm italic text-muted-foreground">{species!.scientificName}</p>
              <p className="mt-1 line-clamp-2 text-sm text-foreground/70">{species!.summary}</p>
            </div>
          </Link>
        ))}

        {DANGEROUS_SLUGS.length > dangerous.length && (
          <p className="text-sm text-muted-foreground">
            More species coming soon. We&apos;re building detailed guides for all {DANGEROUS_SLUGS.length} species.
          </p>
        )}
      </div>

      <section className="mt-12 rounded-xl border border-border bg-card p-6 text-center">
        <p className="text-sm text-foreground/70">
          Found a mushroom you can&apos;t identify?{" "}
          <a href="https://orangutany.com" className="text-primary hover:underline">
            Orangutany
          </a>{" "}
          can help you identify it from a photo.
        </p>
      </section>
    </div>
  );
}
