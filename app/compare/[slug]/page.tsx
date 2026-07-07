import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { allComparisons, getComparisonBySlug } from "@/lib/comparisons";
import { EdibilityBadge } from "@/components/species/edibility-badge";
import { getCardImage } from "@/lib/card-image";
import type { SpeciesRecord } from "@/lib/types";

export function generateStaticParams() {
  return allComparisons().map((p) => ({ slug: p.slug }));
}

/** Short common name — uses part before "/" for multi-name species */
function shortName(commonName: string): string {
  return commonName.includes("/") ? commonName.split("/")[0].trim() : commonName;
}

const DANGEROUS = new Set(["toxic", "deadly"]);

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const pair = getComparisonBySlug(slug);
  if (!pair) return {};
  const an = shortName(pair.a.commonName);
  const bn = shortName(pair.b.commonName);
  const danger = DANGEROUS.has(pair.a.edibility) || DANGEROUS.has(pair.b.edibility);
  const title = `${an} vs ${bn}: How to Tell Them Apart`;
  return {
    title,
    description: `${an} (${pair.a.scientificName}) vs ${bn} (${pair.b.scientificName}): key differences in cap, gills, stem and spore print${danger ? " — and why confusing them is dangerous" : ""}. Side-by-side comparison with photos.`,
    alternates: { canonical: `/compare/${pair.slug}` },
  };
}

function SpeciesCard({ s }: { s: SpeciesRecord }) {
  const img = getCardImage(s);
  return (
    <Link
      href={`/mushrooms/${s.slug}`}
      className="group overflow-hidden rounded-xl border border-border bg-card transition hover:border-primary/50"
    >
      {img && (
        <img
          src={img.src}
          alt={img.alt}
          className="aspect-[3/2] w-full object-cover object-center transition group-hover:scale-105"
          loading="eager"
        />
      )}
      <div className="p-4">
        <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
          {s.commonName}
        </h2>
        <p className="text-sm italic text-muted-foreground">{s.scientificName}</p>
        <div className="mt-2">
          <EdibilityBadge edibility={s.edibility} psychoactive={s.psychoactive} />
        </div>
      </div>
    </Link>
  );
}

const TRAIT_ROWS: { key: keyof SpeciesRecord["identification"]; label: string }[] = [
  { key: "cap", label: "Cap" },
  { key: "gills", label: "Gills" },
  { key: "stem", label: "Stem" },
  { key: "sporePrint", label: "Spore print" },
  { key: "bruising", label: "Bruising" },
  { key: "odor", label: "Odor" },
];

export default async function ComparePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pair = getComparisonBySlug(slug);
  if (!pair) notFound();

  const { a, b } = pair;
  const an = shortName(a.commonName);
  const bn = shortName(b.commonName);
  const dangerousMixup =
    (DANGEROUS.has(a.edibility) && !DANGEROUS.has(b.edibility)) ||
    (DANGEROUS.has(b.edibility) && !DANGEROUS.has(a.edibility)) ||
    (DANGEROUS.has(a.edibility) && DANGEROUS.has(b.edibility));

  const traitRows = TRAIT_ROWS.filter((r) => a.identification[r.key] || b.identification[r.key]);

  return (
    <article className="mx-auto max-w-5xl px-6 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${an} vs ${bn}: How to Tell Them Apart`,
            description: `Side-by-side identification comparison of ${a.scientificName} and ${b.scientificName}.`,
            author: { "@type": "Organization", name: "Orangutany" },
            publisher: { "@type": "Organization", name: "Orangutany", url: "https://orangutany.com" },
          }),
        }}
      />

      <nav className="mb-4 text-xs text-muted-foreground">
        <Link href="/" className="hover:text-primary">Home</Link>
        {" / "}
        <Link href="/compare" className="hover:text-primary">Comparisons</Link>
      </nav>

      <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground sm:text-3xl">
        {an} vs {bn}
      </h1>
      <p className="mt-1 text-sm text-muted-foreground">
        <span className="italic">{a.scientificName}</span> compared with{" "}
        <span className="italic">{b.scientificName}</span> — how to tell them apart in the field.
      </p>

      {dangerousMixup && (
        <div className="mt-4 rounded-xl border border-red-500/40 bg-red-500/10 p-4">
          <p className="text-sm font-semibold text-red-400">
            This is a dangerous confusion.
          </p>
          <p className="mt-1 text-sm text-foreground/80">
            At least one of these species is {DANGEROUS.has(a.edibility) && DANGEROUS.has(b.edibility) ? "toxic" : a.edibility === "deadly" || b.edibility === "deadly" ? "potentially deadly" : "toxic"}.
            Never eat a wild mushroom based on a photo comparison alone — verify with local experts.
          </p>
        </div>
      )}

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <SpeciesCard s={a} />
        <SpeciesCard s={b} />
      </div>

      {(pair.aboutB || pair.aboutA) && (
        <section className="mt-8">
          <h2 className="mb-3 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
            How to Tell Them Apart
          </h2>
          <div className="space-y-3">
            {pair.aboutB && (
              <p className="rounded-lg border border-border bg-card p-4 text-sm leading-relaxed text-foreground/85">
                {pair.aboutB}
              </p>
            )}
            {pair.aboutA && pair.aboutA !== pair.aboutB && (
              <p className="rounded-lg border border-border bg-card p-4 text-sm leading-relaxed text-foreground/85">
                {pair.aboutA}
              </p>
            )}
          </div>
        </section>
      )}

      {traitRows.length > 0 && (
        <section className="mt-8">
          <h2 className="mb-3 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
            Side-by-Side Identification
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-card">
                  <th className="p-3 font-semibold text-muted-foreground">Trait</th>
                  <th className="p-3 font-semibold text-foreground">{an}</th>
                  <th className="p-3 font-semibold text-foreground">{bn}</th>
                </tr>
              </thead>
              <tbody>
                {traitRows.map((r) => (
                  <tr key={r.key} className="border-b border-border last:border-0">
                    <td className="p-3 align-top font-semibold uppercase tracking-wider text-primary text-xs">{r.label}</td>
                    <td className="p-3 align-top text-foreground/80">{a.identification[r.key] || "—"}</td>
                    <td className="p-3 align-top text-foreground/80">{b.identification[r.key] || "—"}</td>
                  </tr>
                ))}
                <tr className="border-b border-border">
                  <td className="p-3 align-top font-semibold uppercase tracking-wider text-primary text-xs">Habitat</td>
                  <td className="p-3 align-top text-foreground/80">{a.habitat}</td>
                  <td className="p-3 align-top text-foreground/80">{b.habitat}</td>
                </tr>
                <tr>
                  <td className="p-3 align-top font-semibold uppercase tracking-wider text-primary text-xs">Season</td>
                  <td className="p-3 align-top text-foreground/80">{a.season}</td>
                  <td className="p-3 align-top text-foreground/80">{b.season}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      )}

      <section className="mt-8 rounded-xl border border-border bg-card p-5 text-center">
        <p className="text-sm text-foreground/80">
          Found one of these in the wild? Don&apos;t rely on memory —{" "}
          <a
            href={`https://orangutany.com/?utm_source=guide&utm_medium=compare_cta&utm_campaign=${pair.slug}`}
            className="font-semibold text-primary hover:underline"
          >
            identify it from a photo with Orangutany
          </a>{" "}
          and check it against both species before you touch it.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
          Full Species Guides
        </h2>
        <div className="flex flex-wrap gap-3">
          <Link href={`/mushrooms/${a.slug}`} className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground/80 transition hover:border-primary/50 hover:text-primary">
            {an} guide →
          </Link>
          <Link href={`/mushrooms/${b.slug}`} className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground/80 transition hover:border-primary/50 hover:text-primary">
            {bn} guide →
          </Link>
        </div>
      </section>
    </article>
  );
}
