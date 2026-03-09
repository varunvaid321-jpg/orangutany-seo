import { getContentByHub } from "@/lib/content-index";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/shared/breadcrumb";
import { RelatedContent } from "@/components/shared/related-content";
import { CtaBlock } from "@/components/shared/cta-block";
import { websiteSchema } from "@/lib/schema";
import Link from "next/link";

export const metadata = {
  title: "Mushroom Articles - Safety, Foraging, Science",
  description:
    "In-depth articles on mushroom safety, foraging tips, real poisoning cases, and mycology science. Written by experts and field practitioners.",
  alternates: { canonical: "/articles" },
};

export default function ArticlesPage() {
  const articles = getContentByHub("/articles");
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
        In-depth articles on mushroom safety, foraging, science, and real-world
        cases.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={article.slug}
            className="rounded-lg border border-border bg-card p-4 transition hover:border-primary/50 hover:shadow-sm"
          >
            <h2 className="text-sm font-semibold text-foreground">
              {article.title}
            </h2>
            <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
              {article.summary}
            </p>
          </Link>
        ))}
      </div>

      <CtaBlock ctaType="try-app" variant="card" />
    </main>
  );
}
