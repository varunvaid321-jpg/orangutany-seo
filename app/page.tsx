import type { Metadata } from "next";
import Link from "next/link";
import { allSpecies } from "@/data/species";
import { EdibilityBadge } from "@/components/species/edibility-badge";
import { getCardImage } from "@/lib/card-image";
import { RECIPES } from "@/data/recipes";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  const featured = allSpecies.slice(0, 6);

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      {/* Hero */}
      <div className="mb-12 text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
          Built in Canada
        </p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
          Mushroom identification,<br className="hidden sm:block" /> done right.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Machine learning trained on millions of verified observations. Real photographs, global distribution maps, toxic look-alikes, and safety data for every species. The identification experience mushroom foragers deserve.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href="https://orangutany.com"
            className="rounded-full bg-primary px-6 py-3 font-medium text-background transition hover:bg-primary/90"
          >
            Identify a Mushroom
          </a>
          <Link
            href="/mushrooms"
            className="rounded-full border border-primary px-6 py-3 font-medium text-primary transition hover:bg-primary/10"
          >
            Browse {allSpecies.length} Species
          </Link>
        </div>
      </div>

      {/* Hub Links */}
      <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Link
          href="/articles/most-dangerous-mushrooms"
          className="rounded-xl border border-red-900/30 bg-red-950/20 p-5 transition hover:border-red-800/50"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-base font-semibold text-red-300">
            Most Dangerous Mushrooms
          </h2>
          <p className="mt-1 text-sm text-foreground/60">
            The deadliest species on Earth and how to recognize them.
          </p>
        </Link>
        <Link
          href="/articles/best-edible-mushrooms"
          className="rounded-xl border border-green-900/30 bg-green-950/20 p-5 transition hover:border-green-800/50"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-base font-semibold text-green-300">
            Best Edible Mushrooms
          </h2>
          <p className="mt-1 text-sm text-foreground/60">
            The most prized wild mushrooms for foraging and cooking.
          </p>
        </Link>
        <Link
          href="/articles/cooking-wild-mushrooms"
          className="rounded-xl border border-amber-900/30 bg-amber-950/20 p-5 transition hover:border-amber-800/50"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-base font-semibold text-amber-300">
            Cooking Wild Mushrooms
          </h2>
          <p className="mt-1 text-sm text-foreground/60">
            8 real recipes from chanterelle risotto to lion&apos;s mane crab cakes.
          </p>
        </Link>
        <Link
          href="/articles/mushrooms-by-region"
          className="rounded-xl border border-blue-900/30 bg-blue-950/20 p-5 transition hover:border-blue-800/50"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-base font-semibold text-blue-300">
            Mushrooms by Region
          </h2>
          <p className="mt-1 text-sm text-foreground/60">
            Find what grows near you — with global distribution maps.
          </p>
        </Link>
      </div>

      {/* Articles */}
      <h2 className="mb-4 font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
        Popular Articles
      </h2>
      <div className="mb-12 grid gap-3 sm:grid-cols-2">
        <Link
          href="/articles/how-to-identify-poisonous-mushrooms"
          className="rounded-xl border border-border bg-card p-4 transition hover:border-primary/50"
        >
          <h3 className="text-sm font-semibold text-foreground">How to Identify a Poisonous Mushroom</h3>
          <p className="mt-1 text-xs text-foreground/60">The myths that will get you killed — and what actually works.</p>
        </Link>
        <Link
          href="/articles/dog-ate-mushroom"
          className="rounded-xl border border-border bg-card p-4 transition hover:border-primary/50"
        >
          <h3 className="text-sm font-semibold text-foreground">My Dog Ate a Mushroom — What Do I Do</h3>
          <p className="mt-1 text-xs text-foreground/60">Emergency steps, danger signs, and which yard mushrooms kill dogs.</p>
        </Link>
        <Link
          href="/articles/mushrooms-that-can-kill-you"
          className="rounded-xl border border-border bg-card p-4 transition hover:border-primary/50"
        >
          <h3 className="text-sm font-semibold text-foreground">Mushrooms That Can Kill You</h3>
          <p className="mt-1 text-xs text-foreground/60">Real poisoning cases, real species. True crime meets mycology.</p>
        </Link>
        <Link
          href="/guides/beginners-guide-to-mushroom-foraging"
          className="rounded-xl border border-border bg-card p-4 transition hover:border-primary/50"
        >
          <h3 className="text-sm font-semibold text-foreground">Beginner&apos;s Guide to Mushroom Foraging</h3>
          <p className="mt-1 text-xs text-foreground/60">Everything you need to know to start — from someone who started last year.</p>
        </Link>
        <Link
          href="/articles/mushrooms-in-your-yard"
          className="rounded-xl border border-border bg-card p-4 transition hover:border-primary/50"
        >
          <h3 className="text-sm font-semibold text-foreground">Mushrooms in Your Yard</h3>
          <p className="mt-1 text-xs text-foreground/60">What they are, whether to panic, and what about the dog.</p>
        </Link>
        <Link
          href="/guides/mushroom-foraging-by-season"
          className="rounded-xl border border-border bg-card p-4 transition hover:border-primary/50"
        >
          <h3 className="text-sm font-semibold text-foreground">Foraging by Season</h3>
          <p className="mt-1 text-xs text-foreground/60">Month-by-month guide to what&apos;s fruiting and where to find it.</p>
        </Link>
      </div>

      {/* Recipes */}
      <h2 className="mb-4 font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
        Wild Mushroom Recipes
      </h2>
      <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {RECIPES.slice(0, 4).map((recipe) => {
          const species = allSpecies.find((s) => s.slug === recipe.speciesSlug);
          if (!species) return null;
          const card = getCardImage(species);
          const imgSrc = card?.src ?? `/images/species/${species.slug}/${species.images[0]?.filename ?? "01-field.jpg"}`;
          return (
            <Link
              key={recipe.slug}
              href={`/articles/cooking-wild-mushrooms/${recipe.slug}`}
              className="group overflow-hidden rounded-xl border border-border bg-card transition hover:border-primary/50"
            >
              <div className="relative">
                <img
                  src={imgSrc}
                  alt={`${species.commonName} — ${recipe.recipeName}`}
                  className="aspect-[4/3] w-full object-cover transition group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-[10px] font-medium text-white/60 uppercase tracking-wider">
                    {species.commonName}
                  </p>
                  <h3 className="text-xs font-bold text-white leading-snug mt-0.5">
                    {recipe.recipeName}
                  </h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="-mt-8 mb-12 text-center">
        <Link href="/articles/cooking-wild-mushrooms" className="text-sm text-primary hover:underline">
          View all {RECIPES.length} recipes &rarr;
        </Link>
      </div>

      {/* Featured Species */}
      <h2 className="mb-4 font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
        Featured Species
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((s) => {
          const card = getCardImage(s);
          return (
          <Link
            key={s.slug}
            href={`/mushrooms/${s.slug}`}
            className="group overflow-hidden rounded-xl border border-border bg-card transition hover:border-primary/50"
          >
            {card && (
              <img
                src={card.src}
                alt={card.alt}
                className="aspect-[3/2] w-full object-cover object-top transition group-hover:scale-105"
                loading="lazy"
              />
            )}
            <div className="p-4">
              <div className="mb-2">
                <EdibilityBadge edibility={s.edibility} />
              </div>
              <h3 className="font-semibold text-foreground">{s.commonName}</h3>
              <p className="text-sm italic text-muted-foreground">{s.scientificName}</p>
              <p className="mt-2 line-clamp-2 text-sm text-foreground/70">{s.summary}</p>
            </div>
          </Link>
          );
        })}
      </div>

      <div className="mt-6 text-center">
        <Link href="/mushrooms" className="text-sm text-primary hover:underline">
          View all {allSpecies.length} species &rarr;
        </Link>
      </div>

      {/* Why Orangutany */}
      <section className="mt-16 rounded-2xl border border-border/50 bg-card/50 p-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
          Why Orangutany
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-primary">Millions of observations</h3>
            <p className="mt-1 text-sm text-foreground/70">
              Our ML models are trained on millions of verified mushroom observations from research-grade datasets worldwide. Not stock photos — real field data.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-primary">Expert-grade accuracy</h3>
            <p className="mt-1 text-sm text-foreground/70">
              Every species page is written with identification precision in mind — cap, gills, stem, spore print, bruising, habitat, season, and dangerous look-alikes.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-primary">Safety first, always</h3>
            <p className="mt-1 text-sm text-foreground/70">
              We flag every toxic look-alike, every deadly cousin, every edge case. Because the cost of a wrong ID isn&apos;t a bad meal — it&apos;s a hospital visit.
            </p>
          </div>
        </div>
        <p className="mt-6 text-sm text-foreground/60">
          Orangutany is a Canadian company building the mushroom identification experience that foragers, mycologists, and the wild-mushroom curious actually deserve. No clutter, no ads, no guesswork.
        </p>
      </section>
    </div>
  );
}
