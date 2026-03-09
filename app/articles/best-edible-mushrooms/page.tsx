import { Metadata } from "next";
import Link from "next/link";
import { allSpecies } from "@/data/species";
import { getCardImage } from "@/lib/card-image";

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
      <p className="mt-2 text-xs text-muted-foreground">
        By{" "}
        <Link href="/authors/varun-vaid" className="text-primary hover:underline">
          Varun Vaid
        </Link>{" "}
        &middot; Orangutany
      </p>
      <p className="mt-3 text-sm leading-relaxed text-foreground/80">
        These are the mushrooms that foragers dream about. Some are worth hundreds of dollars per pound,
        others grow in your backyard. All of them are delicious, if you know what you&apos;re looking for.
        Accurate species identification is critical for safe foraging — resources like{" "}
        <a href="https://www.mushroomexpert.com" className="text-primary underline hover:text-primary/80 transition" target="_blank" rel="noopener noreferrer">MushroomExpert.com</a>{" "}
        provide detailed field guides, and understanding{" "}
        <a href="https://www.ncbi.nlm.nih.gov/books/NBK537111/" className="text-primary underline hover:text-primary/80 transition" target="_blank" rel="noopener noreferrer">mushroom toxicity</a>{" "}
        is essential before eating any wild species.
      </p>

      <figure className="my-8">
        <img
          src="/articles/best-edible-mushrooms/01.jpg"
          alt="Golden chanterelle mushrooms (Cantharellus cibarius) growing on a forest floor"
          className="w-full rounded-xl"
          loading="lazy"
        />
        <figcaption className="mt-2 text-center text-xs text-muted-foreground">
          Golden chanterelles (Cantharellus cibarius) — one of the most prized edible wild mushrooms worldwide — Photo: Michel Langeveld / <a href="https://commons.wikimedia.org/wiki/File:Cantharellus_cibarius_152635310.jpg" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Wikimedia Commons</a> (CC BY-SA 4.0)
        </figcaption>
      </figure>

      <div className="mt-8 space-y-6">
        {edible.map((species, i) => (
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
              <span className="text-xs font-bold text-green-400">#{i + 1}</span>
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
            src="/articles/best-edible-mushrooms/02.jpg"
            alt="Porcini mushroom (Boletus edulis) growing in a Bavarian forest"
            className="w-full rounded-xl"
            loading="lazy"
          />
          <figcaption className="mt-2 text-center text-xs text-muted-foreground">
            A porcini (Boletus edulis) in its natural forest habitat — Photo: Holger Krisp / <a href="https://commons.wikimedia.org/wiki/File:(Gemeine_Steinpilz)_Boletus_edulis.jpg" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Wikimedia Commons</a> (CC BY 3.0)
          </figcaption>
        </figure>

        {EDIBLE_SLUGS.length > edible.length && (
          <p className="text-sm text-muted-foreground">
            More species coming soon. We&apos;re building detailed guides for all {EDIBLE_SLUGS.length} species.
          </p>
        )}
      </div>

      <figure className="my-8">
        <img
          src="/articles/best-edible-mushrooms/03.jpg"
          alt="Morel mushroom (Morchella esculenta) with its distinctive honeycomb cap"
          className="w-full rounded-xl"
          loading="lazy"
        />
        <figcaption className="mt-2 text-center text-xs text-muted-foreground">
          A morel (Morchella esculenta) — highly sought after by foragers for its distinctive honeycomb texture and rich flavor — Photo: Holger Krisp / <a href="https://commons.wikimedia.org/wiki/File:Speise_Morchel_Morchella_esculenta.jpg" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Wikimedia Commons</a> (CC BY 3.0)
        </figcaption>
      </figure>

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
