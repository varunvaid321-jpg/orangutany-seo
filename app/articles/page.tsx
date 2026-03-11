import { getContentByHub } from "@/lib/content-index";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/shared/breadcrumb";
import { CtaBlock } from "@/components/shared/cta-block";
import { websiteSchema } from "@/lib/schema";
import Link from "next/link";

export const metadata = {
  title: "Mushroom Articles - Safety, Foraging, Science",
  description:
    "In-depth articles on mushroom safety, foraging tips, real poisoning cases, and mycology science. Written by experts and field practitioners.",
  alternates: { canonical: "/articles" },
};

const categories: { label: string; slugs: string[] }[] = [
  {
    label: "Safety",
    slugs: [
      "/articles/how-to-identify-poisonous-mushrooms",
      "/articles/mushrooms-that-can-kill-you",
      "/articles/most-dangerous-mushrooms",
      "/articles/dog-ate-mushroom",
      "/articles/mushrooms-in-your-yard",
      "/articles/morel-vs-false-morel",
    ],
  },
  {
    label: "Foraging",
    slugs: [
      "/articles/best-edible-mushrooms",
      "/articles/chicken-of-the-woods",
      "/articles/how-to-find-morels",
      "/articles/post-fire-morel-hunting",
      "/articles/mushrooms-by-region",
      "/articles/ai-mushroom-identification-apps",
    ],
  },
  {
    label: "Science",
    slugs: [
      "/articles/psychoactive-mushrooms-science",
      "/articles/psilocybin-therapy-fda-approval",
      "/articles/medicinal-mushrooms",
      "/articles/why-mushrooms-grow-in-circles",
      "/articles/largest-living-organism-fungus",
      "/articles/mycoremediation-fungi-cleaning-pollution",
      "/articles/climate-change-mushroom-season",
    ],
  },
  {
    label: "Food & Culture",
    slugs: [
      "/articles/cooking-wild-mushrooms",
      "/articles/most-expensive-mushrooms",
      "/articles/rarest-mushrooms-in-the-world",
      "/articles/truffle-fraud-problem",
    ],
  },
  {
    label: "Real Cases",
    slugs: [
      "/articles/australian-mushroom-poisoning",
      "/articles/california-death-cap-outbreak",
      "/articles/death-caps-spreading-north-america",
      "/articles/mushroom-poisoning-immigrant-communities",
    ],
  },
];

export default function ArticlesPage() {
  const articles = getContentByHub("/articles");
  const articleMap = new Map(articles.map((a) => [a.slug, a]));
  const crumbs = [{ label: "Articles" }];
  const crumbsLd = breadcrumbJsonLd([{ name: "Articles", url: "/articles" }]);

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbsLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
      />

      <Breadcrumb items={crumbs} />

      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        Mushroom Articles
      </h1>
      <p className="mt-2 text-base text-muted-foreground">
        {articles.length} articles on safety, foraging, science, and real-world cases.
      </p>

      {categories.map((cat) => (
          <section key={cat.label} className="mt-10">
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">
              {cat.label}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {cat.slugs.map((slug) => {
                const a = articleMap.get(slug);
                if (!a) return null;
                return (
                  <Link
                    key={slug}
                    href={slug}
                    className="rounded-lg border border-border bg-card p-4 transition hover:border-primary/50 hover:shadow-sm"
                  >
                    <h3 className="text-sm font-semibold text-foreground">
                      {a.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                      {a.summary}
                    </p>
                  </Link>
                );
              })}
            </div>
          </section>
      ))}

      <CtaBlock ctaType="try-app" variant="card" />
    </main>
  );
}
