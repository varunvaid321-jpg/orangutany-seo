import { Metadata } from "next";
import Link from "next/link";
import { allSpecies } from "@/data/species";
import { getCardImage } from "@/lib/card-image";

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
      <p className="mt-2 text-xs text-muted-foreground">
        By{" "}
        <Link href="/authors/elena-marchetti" className="text-primary hover:underline">
          Elena Marchetti
        </Link>{" "}
        &middot; Orangutany
      </p>
      <p className="mt-3 text-sm leading-relaxed text-foreground/80">
        These are the mushrooms responsible for the vast majority of fatal poisonings worldwide,
        many caused by{" "}
        <a href="https://www.ncbi.nlm.nih.gov/books/NBK431052/" className="text-primary underline hover:text-primary/80 transition" target="_blank" rel="noopener noreferrer">amatoxin poisoning</a>.
        Some look deceptively similar to popular edible species. For a broader overview of{" "}
        <a href="https://www.ncbi.nlm.nih.gov/books/NBK537111/" className="text-primary underline hover:text-primary/80 transition" target="_blank" rel="noopener noreferrer">mushroom toxicity syndromes</a>,
        knowing what they look like could save your life, or your dog&apos;s.
      </p>

      <figure className="my-8">
        <img
          src="/articles/most-dangerous-mushrooms/01.jpg"
          alt="Death cap mushroom (Amanita phalloides) with its pale greenish-yellow cap and white stem in a forest"
          className="w-full rounded-xl"
          loading="lazy"
        />
        <figcaption className="mt-2 text-center text-xs text-muted-foreground">
          The death cap (Amanita phalloides), responsible for the majority of fatal mushroom poisonings worldwide — Photo: George Chernilevsky / <a href="https://commons.wikimedia.org/wiki/File:Amanita_phalloides_2011_G1.jpg" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Wikimedia Commons</a> (Public domain)
        </figcaption>
      </figure>

      <div className="mt-8 space-y-6">
        {dangerous.map((species, i) => (
          <Link
            key={species!.slug}
            href={`/mushrooms/${species!.slug}`}
            className="group flex gap-4 overflow-hidden rounded-xl border border-border bg-card transition hover:border-primary/50"
          >
            {species!.images.length > 0 && (
              <img
                src={getCardImage(species!)?.src ?? ""}
                alt={getCardImage(species!)?.alt ?? ""}
                className="h-auto w-32 flex-shrink-0 object-contain sm:w-44"
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

        <figure className="my-8">
          <img
            src="/articles/most-dangerous-mushrooms/02.jpg"
            alt="Fly agaric mushroom (Amanita muscaria) with its iconic red cap and white spots in a forest"
            className="w-full rounded-xl"
            loading="lazy"
          />
          <figcaption className="mt-2 text-center text-xs text-muted-foreground">
            The fly agaric (Amanita muscaria), perhaps the most recognizable toxic mushroom on Earth — Photo: JJ Harrison / <a href="https://commons.wikimedia.org/wiki/File:Amanita_muscaria_Marriott_Falls_1.jpg" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Wikimedia Commons</a> (CC BY-SA 3.0)
          </figcaption>
        </figure>

        {DANGEROUS_SLUGS.length > dangerous.length && (
          <p className="text-sm text-muted-foreground">
            More species coming soon. We&apos;re building detailed guides for all {DANGEROUS_SLUGS.length} species.
          </p>
        )}
      </div>

      <figure className="my-8">
        <img
          src="/articles/most-dangerous-mushrooms/03.jpg"
          alt="Deadly galerina mushrooms (Galerina marginata) growing in a cluster on decaying wood"
          className="w-full rounded-xl"
          loading="lazy"
        />
        <figcaption className="mt-2 text-center text-xs text-muted-foreground">
          Deadly galerina (Galerina marginata), a small brown mushroom that contains the same lethal amatoxins as the death cap — Photo: Mushroom Observer / <a href="https://commons.wikimedia.org/wiki/File:Galerina_marginata_(Batsch)_K%C3%BChner_274503.jpg" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Wikimedia Commons</a> (CC BY-SA 3.0)
        </figcaption>
      </figure>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is the most dangerous mushroom in the world?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The Death Cap (Amanita phalloides) is the most dangerous mushroom in the world, responsible for the majority of fatal mushroom poisonings worldwide. It contains amatoxins that destroy the liver and has no antidote. It looks deceptively similar to several popular edible species.",
                },
              },
              {
                "@type": "Question",
                name: "What are the 10 most dangerous mushrooms?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The 10 most dangerous mushrooms are: (1) Death Cap (Amanita phalloides), (2) Destroying Angel (Amanita virosa), (3) Fly Agaric (Amanita muscaria), (4) Funeral Bell (Galerina marginata), (5) Fool's Conecap (Conocybe filaris), (6) False Morel (Gyromitra esculenta), (7) Deadly Webcap (Cortinarius rubellus), (8) Eastern Destroying Angel (Amanita bisporigera), (9) Poison Fire Coral (Podostroma cornu-damae), and (10) Deadly Dapperling (Lepiota brunneoincarnata).",
                },
              },
              {
                "@type": "Question",
                name: "What toxin makes mushrooms deadly?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Amatoxins are responsible for the vast majority of fatal mushroom poisonings. They are found in Death Caps, Destroying Angels, Funeral Bells, and several other species. Amatoxins destroy the liver over several days and survive cooking, drying, and freezing. There is no reliable antidote.",
                },
              },
            ],
          }),
        }}
      />

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
