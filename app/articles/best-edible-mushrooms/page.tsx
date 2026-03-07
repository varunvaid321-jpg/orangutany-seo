import { Metadata } from "next";
import Link from "next/link";
import { allSpecies } from "@/data/species";

export const metadata: Metadata = {
  title: "Best Edible Wild Mushrooms, A Forager's Guide",
  description:
    "The most prized edible wild mushrooms, Chanterelles, Morels, Porcini, and more. Identification tips, where to find them, and what to watch out for.",
  alternates: { canonical: "/articles/best-edible-mushrooms" },
  openGraph: {
    title: "Best Edible Wild Mushrooms, A Forager's Guide",
    description:
      "The most prized edible wild mushrooms, Chanterelles, Morels, Porcini, and more. Identification tips, where to find them, and what to watch out for.",
  },
};

const EDIBLE_SLUGS = [
  "cantharellus-cibarius",
  "morchella-esculenta",
  "boletus-edulis",
  "hericium-erinaceus",
  "laetiporus-sulphureus",
  "pleurotus-ostreatus",
  "craterellus-tubaeformis",
  "agaricus-campestris",
  "macrolepiota-procera",
  "tricholoma-matsutake",
];

export default function BestEdiblePage() {
  const edible = EDIBLE_SLUGS
    .map((slug) => allSpecies.find((s) => s.slug === slug))
    .filter(Boolean);

  return (
    <div className="mx-auto max-w-5xl px-6 py-8">
      <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground sm:text-3xl">
        Best Edible Wild Mushrooms
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-foreground/80">
        These are the mushrooms that foragers dream about. Some are worth hundreds of dollars per pound,
        others grow in your backyard. All of them are delicious, if you know what you&apos;re looking for.
      </p>

      <div className="mt-8 space-y-6">
        {edible.map((species, i) => (
          <Link
            key={species!.slug}
            href={`/mushrooms/${species!.slug}`}
            className="group flex gap-4 overflow-hidden rounded-xl border border-border bg-card transition hover:border-primary/50"
          >
            {species!.images.length > 0 && (
              <img
                src={`/images/species/${species!.slug}/${species!.images[0].filename}`}
                alt={species!.images[0].alt}
                className="h-auto w-32 flex-shrink-0 object-contain sm:w-44"
                loading="lazy"
              />
            )}
            <div className="flex flex-col justify-center py-4 pr-4">
              <span className="text-xs font-bold text-green-400">#{i + 1}</span>
              <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition">
                {species!.commonName}
              </h2>
              <p className="text-sm italic text-muted-foreground">{species!.scientificName}</p>
              <p className="mt-1 line-clamp-2 text-sm text-foreground/70">{species!.summary}</p>
            </div>
          </Link>
        ))}

        {EDIBLE_SLUGS.length > edible.length && (
          <p className="text-sm text-muted-foreground">
            More species coming soon. We&apos;re building detailed guides for all {EDIBLE_SLUGS.length} species.
          </p>
        )}
      </div>

      <section className="mt-12 rounded-xl border border-border bg-card p-6 text-center">
        <p className="text-sm text-foreground/70">
          Not sure if what you found is safe to eat?{" "}
          <a href="https://orangutany.com" className="text-primary hover:underline">
            Orangutany
          </a>{" "}
          can help you identify it from a photo.
        </p>
      </section>
    </div>
  );
}
