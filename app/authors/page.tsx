import { getContentByType } from "@/lib/content-index";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/shared/breadcrumb";
import { organizationSchema } from "@/lib/schema";
import Link from "next/link";

export const metadata = {
  title: "Authors - Orangutany Mushroom Guide",
  description:
    "Meet the writers behind the Orangutany mushroom guide. Foragers, scientists, and journalists who know their fungi.",
};

export default function AuthorsPage() {
  const authors = getContentByType("author");
  const crumbs = [{ label: "Authors" }];
  const crumbsLd = breadcrumbJsonLd([{ name: "Authors", url: "/authors" }]);

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbsLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            ...organizationSchema(),
          }),
        }}
      />

      <Breadcrumb items={crumbs} />

      <h1 className="text-2xl font-bold text-foreground">Authors</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Meet the writers behind the Orangutany mushroom guide.
      </p>

      <ul className="mt-6 divide-y divide-border">
        {authors.map((author) => (
          <li key={author.slug} className="py-3">
            <Link
              href={author.slug}
              className="group flex items-baseline justify-between gap-4"
            >
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition">
                {author.title}
              </span>
              <span className="text-xs text-muted-foreground flex-shrink-0">
                {author.summary}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
