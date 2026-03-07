import { Metadata } from "next";
import Link from "next/link";
import { allSpecies } from "@/data/species";
import { getCardImage } from "@/lib/card-image";
import { articleSchema } from "@/lib/schema";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/shared/breadcrumb";
import { CtaBlock } from "@/components/shared/cta-block";
import { RECIPES } from "@/data/recipes";

const slug = "/articles/cooking-wild-mushrooms";
const title = "Cooking Wild Mushrooms: 8 Recipes From the Forest to the Pan";
const description =
  "Real recipes for real wild mushrooms. Chanterelle risotto, porcini pasta, morel cream sauce, and more, with foraging maps showing where each species grows.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: slug },
  openGraph: { title, description },
};

export default function CookingWildMushroomsPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbJsonLd([
              { name: "Articles", url: "/articles" },
              { name: "Cooking Wild Mushrooms", url: slug },
            ]),
            articleSchema({
              title,
              description,
              slug,
              author: "Varun Vaid",
              authorSlug: "varun-vaid",
            }),
          ]),
        }}
      />

      <Breadcrumb
        items={[
          { label: "Articles", href: "/articles" },
          { label: "Cooking Wild Mushrooms" },
        ]}
      />

      {/* Header */}
      <div className="mb-8">
        <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground sm:text-3xl">
          Cooking Wild Mushrooms: 8 Recipes From the Forest to the Pan
        </h1>
        <p className="mt-2 text-xs text-muted-foreground">
          By{" "}
          <Link href="/authors/varun-vaid" className="text-primary hover:underline">
            Varun Vaid
          </Link>{" "}
          &middot; Orangutany
        </p>
      </div>

      {/* Intro */}
      <div className="mb-10 space-y-3">
        <p className="text-base leading-relaxed text-foreground/90">
          There is a gap between &ldquo;I found a mushroom&rdquo; and &ldquo;this is dinner.&rdquo;
          Most foraging guides stop at identification. They tell you what&apos;s edible and wish you
          luck. This page closes that gap.
        </p>
        <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-3">
          <p className="text-xs text-amber-200/80">
            <strong className="text-amber-300">Safety first:</strong> Never eat a wild mushroom
            unless you are 100% certain of the identification. When in doubt, throw it out.
          </p>
        </div>
      </div>

      {/* Recipe grid — clickable cards */}
      <div className="grid gap-4 sm:grid-cols-2">
        {RECIPES.map((recipe) => {
          const species = allSpecies.find((s) => s.slug === recipe.speciesSlug);
          if (!species) return null;
          const cardImage = getCardImage(species);
          const imgSrc = cardImage?.src ?? `/images/species/${species.slug}/${species.images[0]?.filename ?? "01-field.jpg"}`;

          return (
            <Link
              key={recipe.slug}
              href={`/articles/cooking-wild-mushrooms/${recipe.slug}`}
              className="group overflow-hidden rounded-xl border border-border bg-card transition hover:border-primary/40"
            >
              <div className="relative">
                <img
                  src={imgSrc}
                  alt={`${species.commonName} — ${recipe.recipeName}`}
                  className="aspect-[3/2] w-full object-cover transition group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-[10px] font-medium text-white/60 uppercase tracking-wider">
                    {species.commonName}
                  </p>
                  <h2 className="text-sm font-bold text-white leading-snug mt-0.5">
                    {recipe.recipeName}
                  </h2>
                  <div className="mt-1.5 flex gap-2 text-[10px] text-white/50">
                    <span>{recipe.prepTime}</span>
                    <span>&middot;</span>
                    <span>Serves {recipe.servings}</span>
                    <span>&middot;</span>
                    <span>{recipe.sourceLabel}</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Closing safety rules */}
      <div className="mt-10 space-y-3">
        <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
          A Few Rules for Cooking Any Wild Mushroom
        </h2>
        <ul className="space-y-2 text-sm text-foreground/80 leading-relaxed">
          <li className="flex gap-2">
            <span className="text-primary shrink-0">&bull;</span>
            <span><strong>Always cook them.</strong> Do not eat wild mushrooms raw.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary shrink-0">&bull;</span>
            <span><strong>Cook them dry first.</strong> Start in a dry pan, let the water evaporate, then add fat.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary shrink-0">&bull;</span>
            <span><strong>Try a small amount first.</strong> Even confirmed edible species can cause reactions in some people.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary shrink-0">&bull;</span>
            <span><strong>Don&apos;t forage near roads or treated lawns.</strong> Mushrooms absorb heavy metals and pesticides.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary shrink-0">&bull;</span>
            <span><strong>Be cautious with alcohol.</strong> Some wild mushrooms cause severe reactions when combined with alcohol.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary shrink-0">&bull;</span>
            <span><strong>When in doubt, don&apos;t.</strong> There is no meal worth a trip to the emergency room.</span>
          </li>
        </ul>
      </div>

      <CtaBlock ctaType="identify" variant="card" />
    </article>
  );
}
