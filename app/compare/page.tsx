import { Metadata } from "next";
import Link from "next/link";
import { allComparisons } from "@/lib/comparisons";

export const metadata: Metadata = {
  title: "Mushroom Look-Alike Comparisons: Tell Dangerous Twins Apart",
  description:
    "Side-by-side comparisons of commonly confused mushrooms — edible species vs their toxic and deadly look-alikes, with photos and identification tables.",
  alternates: { canonical: "/compare" },
};

const DANGEROUS = new Set(["toxic", "deadly"]);

function shortName(commonName: string): string {
  return commonName.includes("/") ? commonName.split("/")[0].trim() : commonName;
}

export default function CompareIndexPage() {
  const comparisons = allComparisons();
  // Dangerous confusions first — the highest-stakes content
  const sorted = [...comparisons].sort((x, y) => {
    const xd = DANGEROUS.has(x.a.edibility) || DANGEROUS.has(x.b.edibility) ? 0 : 1;
    const yd = DANGEROUS.has(y.a.edibility) || DANGEROUS.has(y.b.edibility) ? 0 : 1;
    return xd - yd || x.slug.localeCompare(y.slug);
  });

  return (
    <div className="mx-auto max-w-5xl px-6 py-8">
      <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground sm:text-3xl">
        Mushroom Look-Alike Comparisons
      </h1>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
        Commonly confused mushroom pairs compared side by side — cap, gills, stem, spore print
        and habitat. Confusions involving toxic or deadly species are listed first.
      </p>

      <ul className="mt-6 grid gap-2 sm:grid-cols-2">
        {sorted.map((p) => {
          const danger = DANGEROUS.has(p.a.edibility) || DANGEROUS.has(p.b.edibility);
          return (
            <li key={p.slug}>
              <Link
                href={`/compare/${p.slug}`}
                className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground/85 transition hover:border-primary/50 hover:text-primary"
              >
                {danger && <span aria-hidden className="text-red-400">&#9888;</span>}
                <span>
                  {shortName(p.a.commonName)} <span className="text-muted-foreground">vs</span>{" "}
                  {shortName(p.b.commonName)}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
