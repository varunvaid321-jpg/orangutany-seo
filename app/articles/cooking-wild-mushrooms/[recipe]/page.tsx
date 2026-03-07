import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allSpecies } from "@/data/species";
import { getCardImage } from "@/lib/card-image";
import { DistributionMap } from "@/components/species/distribution-map";
import { articleSchema } from "@/lib/schema";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/shared/breadcrumb";
import { CtaBlock } from "@/components/shared/cta-block";
import { RECIPES, getRecipeBySlug } from "@/data/recipes";

export function generateStaticParams() {
  return RECIPES.map((r) => ({ recipe: r.slug }));
}

export function generateMetadata({ params }: { params: { recipe: string } }): Metadata {
  const recipe = getRecipeBySlug(params.recipe);
  if (!recipe) return {};
  const species = allSpecies.find((s) => s.slug === recipe.speciesSlug);
  const speciesName = species ? ` (${species.commonName})` : "";
  return {
    title: `${recipe.recipeName} — Wild Mushroom Recipe`,
    description: `${recipe.recipeIntro.slice(0, 155)}...`,
    alternates: { canonical: `/articles/cooking-wild-mushrooms/${recipe.slug}` },
    openGraph: {
      title: `${recipe.recipeName}${speciesName}`,
      description: recipe.tasteNote,
    },
  };
}

export default function RecipePage({ params }: { params: { recipe: string } }) {
  const recipe = getRecipeBySlug(params.recipe);
  if (!recipe) notFound();

  const species = allSpecies.find((s) => s.slug === recipe.speciesSlug);
  if (!species) notFound();

  const cardImage = getCardImage(species);
  const heroSrc = cardImage?.src ?? `/images/species/${species.slug}/${species.images[0]?.filename ?? "01-field.jpg"}`;
  const galleryImages = species.images.slice(0, 5);

  return (
    <article className="mx-auto max-w-3xl px-6 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbJsonLd([
              { name: "Articles", url: "/articles" },
              { name: "Cooking Wild Mushrooms", url: "/articles/cooking-wild-mushrooms" },
              { name: recipe.recipeName, url: `/articles/cooking-wild-mushrooms/${recipe.slug}` },
            ]),
            articleSchema({
              title: recipe.recipeName,
              description: recipe.recipeIntro.slice(0, 155),
              slug: `/articles/cooking-wild-mushrooms/${recipe.slug}`,
              author: "Varun Vaid",
              authorSlug: "varun-vaid",
            }),
          ]),
        }}
      />

      <Breadcrumb
        items={[
          { label: "Articles", href: "/articles" },
          { label: "Recipes", href: "/articles/cooking-wild-mushrooms" },
          { label: species.commonName },
        ]}
      />

      {/* Hero */}
      <div className="relative -mx-6 sm:mx-0 sm:rounded-2xl overflow-hidden mb-8">
        <img
          src={heroSrc}
          alt={`${species.commonName} (${species.scientificName})`}
          className="aspect-[2/1] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <Link
            href={`/mushrooms/${species.slug}`}
            className="text-xs font-medium text-white/60 hover:text-white transition uppercase tracking-wider"
          >
            {species.commonName} &middot; {species.scientificName}
          </Link>
          <h1 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-white mt-1">
            {recipe.recipeName}
          </h1>
          <div className="mt-2 flex flex-wrap gap-3 text-xs text-white/60">
            <span>{recipe.prepTime}</span>
            <span>&middot;</span>
            <span>Serves {recipe.servings}</span>
            <span>&middot;</span>
            <span>
              Adapted from{" "}
              <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                {recipe.sourceLabel}
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Photo gallery */}
      {galleryImages.length > 1 && (
        <div className="grid grid-cols-5 gap-1 rounded-xl overflow-hidden mb-8">
          {galleryImages.map((img) => (
            <div key={img.filename} className="relative group">
              <img
                src={`/images/species/${species.slug}/${img.filename}`}
                alt={img.alt}
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition flex items-end">
                <p className="text-[8px] text-white/0 group-hover:text-white/90 transition p-1.5 leading-tight">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Intro */}
      <p className="text-base leading-relaxed text-foreground/85 mb-8">
        {recipe.recipeIntro}
      </p>

      {/* Ingredients */}
      <section className="mb-8">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
          Ingredients
        </h2>
        <div className="rounded-xl border border-border bg-card p-4">
          <ul className="space-y-2">
            {recipe.ingredients.map((item, i) => (
              <li key={i} className="text-sm text-foreground/80 flex gap-2.5">
                <span className="shrink-0 mt-1 h-1.5 w-1.5 rounded-full bg-primary/40" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Method */}
      <section className="mb-8">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
          Method
        </h2>
        <ol className="space-y-4">
          {recipe.steps.map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                {i + 1}
              </span>
              <p className="text-sm text-foreground/80 leading-relaxed pt-1">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Forager's tip */}
      <div className="rounded-xl border border-primary/15 bg-primary/5 p-4 mb-6">
        <p className="text-xs font-semibold text-primary mb-1">Forager&apos;s tip</p>
        <p className="text-sm text-foreground/70 leading-relaxed">{recipe.cookingTip}</p>
      </div>

      {/* What it tastes like */}
      <div className="flex gap-3 items-start rounded-xl border border-border bg-muted/30 p-4 mb-8">
        <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/15 text-sm font-bold text-amber-400">
          T
        </span>
        <div>
          <p className="text-xs font-semibold text-foreground mb-0.5">What it tastes like</p>
          <p className="text-sm text-foreground/70 leading-relaxed">{recipe.tasteNote}</p>
        </div>
      </div>

      {/* Where to find it */}
      <section className="mb-8">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
          Where to find {species.commonName} in the wild
        </h2>
        <div className="rounded-xl overflow-hidden border border-border">
          <DistributionMap slug={species.slug} />
        </div>
        <p className="mt-2 text-xs text-foreground/60 leading-relaxed">
          {species.range.length > 250 ? species.range.slice(0, 250) + "..." : species.range}
          {" "}
          <Link href={`/mushrooms/${species.slug}`} className="text-primary hover:underline">
            Full species guide &rarr;
          </Link>
        </p>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between border-t border-border pt-6 mb-6">
        <Link
          href="/articles/cooking-wild-mushrooms"
          className="text-sm text-primary hover:underline"
        >
          &larr; All recipes
        </Link>
        {(() => {
          const idx = RECIPES.findIndex((r) => r.slug === recipe.slug);
          const next = RECIPES[idx + 1];
          if (!next) return <span />;
          return (
            <Link
              href={`/articles/cooking-wild-mushrooms/${next.slug}`}
              className="text-sm text-primary hover:underline"
            >
              Next: {next.recipeName.split(" ").slice(0, 3).join(" ")}... &rarr;
            </Link>
          );
        })()}
      </div>

      <CtaBlock ctaType="identify" variant="subtle" />
    </article>
  );
}
