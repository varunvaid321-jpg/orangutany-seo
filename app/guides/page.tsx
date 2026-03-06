import { getContentByHub } from "@/lib/content-index";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/shared/breadcrumb";
import { CtaBlock } from "@/components/shared/cta-block";
import { websiteSchema } from "@/lib/schema";
import Link from "next/link";

export const metadata = {
  title: "Mushroom Foraging Guides - Beginner to Advanced | Orangutany Guide",
  description:
    "Practical guides for mushroom foraging, identification, and safety. Learn what to look for by season, region, and skill level.",
};

export default function GuidesPage() {
  const guides = getContentByHub("/guides");
  const crumbs = [{ label: "Guides" }];
  const crumbsLd = breadcrumbJsonLd([{ name: "Guides", url: "/guides" }]);

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbsLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
      />

      <Breadcrumb items={crumbs} />

      <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
        Foraging Guides
      </h1>
      <p className="mt-3 text-lg text-muted-foreground">
        Practical guides for mushroom foraging, identification, and safety.
      </p>

      <div className="mt-10 space-y-4">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={guide.slug}
            className="block rounded-lg border-l-4 border-primary bg-card p-5 transition hover:bg-accent/50"
          >
            <h2 className="text-base font-semibold text-foreground">
              {guide.title}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {guide.summary}
            </p>
          </Link>
        ))}
      </div>

      <CtaBlock ctaType="identify" variant="inline" />
    </main>
  );
}
