import Link from "next/link";
import type { ContentEntry } from "@/lib/content-index";

export function RelatedContent({
  items,
  heading = "Related Reading",
}: {
  items: ContentEntry[];
  heading?: string;
}) {
  if (items.length === 0) return null;

  return (
    <section className="mt-10 border-t border-border pt-6">
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {heading}
      </h3>
      <div className="grid gap-2 sm:grid-cols-2">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={item.slug}
            className="rounded-lg border border-border bg-card p-3 transition hover:border-primary/50"
          >
            <p className="text-sm font-medium text-foreground">{item.title}</p>
            <p className="mt-0.5 text-xs text-muted-foreground line-clamp-2">{item.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
