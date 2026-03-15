import { notFound } from "next/navigation";
import { Metadata } from "next";
import { allSpecies, getSpeciesBySlug } from "@/data/species";
import { ImageGallery } from "@/components/species/image-gallery";
import { EdibilityBadge } from "@/components/species/edibility-badge";
import { DistributionMapSection } from "@/components/species/distribution-map";
import { getAuthor } from "@/lib/authors";
import Link from "next/link";
import { getCardImage } from "@/lib/card-image";

export function generateStaticParams() {
  return allSpecies.map((s) => ({ slug: s.slug }));
}

/** Short common name for titles/H2s — uses part before "/" for multi-name species */
function titleName(commonName: string): string {
  return commonName.includes("/") ? commonName.split("/")[0].trim() : commonName;
}

function edibilityWord(edibility: string): string {
  switch (edibility) {
    case "edible": return "Edibility";
    case "edible-with-caution": return "Safety";
    case "toxic": return "Toxicity";
    case "deadly": return "Toxicity";
    case "inedible": return "Uses";
    default: return "Edibility";
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const species = getSpeciesBySlug(slug);
  if (!species) return {};
  const short = titleName(species.commonName);
  const suffix = `Identification, ${edibilityWord(species.edibility)} & Look-alikes`;
  const title = `${short} (${species.scientificName}) – ${suffix}`;
  const edibilityIntro = species.edibility === "deadly" ? "Deadly."
    : species.edibility === "toxic" ? "Toxic — not safe to eat."
    : species.edibility === "edible-with-caution" ? "Edible with caution."
    : species.edibility === "edible" ? "Edible."
    : "Not edible.";
  return {
    title,
    description: `How to identify ${short} (${species.scientificName}). ${edibilityIntro} Habitat, season, look-alikes, and field photos.`,
    alternates: { canonical: `/mushrooms/${species.slug}` },
    openGraph: {
      title,
      description: species.summary,
      images: species.images.length > 0
        ? [{ url: `/images/species/${species.slug}/${species.images[0].filename}` }]
        : [],
    },
  };
}

export default async function SpeciesPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const species = getSpeciesBySlug(slug);
  if (!species) notFound();

  const imgBase = `/images/species/${species.slug}`;

  return (
    <article className="mx-auto max-w-5xl px-6 py-6">
      {/* Header */}
      <div className="mb-4">
        <div className="mb-2 flex flex-wrap items-center gap-3">
          <EdibilityBadge edibility={species.edibility} psychoactive={species.psychoactive} />
          {species.edibility !== "edible" && (
            <span className="text-xs text-muted-foreground">
              {species.edibility === "deadly" && "fatal if ingested"}
              {species.edibility === "toxic" && "causes poisoning"}
              {species.edibility === "edible-with-caution" && "must be cooked properly"}
              {species.edibility === "inedible" && "not a food mushroom"}
            </span>
          )}
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground sm:text-3xl">
          {species.commonName}
        </h1>
        <p className="text-base italic text-muted-foreground">{species.scientificName}</p>
        <p className="mt-1 text-xs text-muted-foreground">
          By {getAuthor(species.slug)} &middot;{" "}
          <a href="https://orangutany.com" className="text-primary hover:underline">Orangutany</a>
        </p>
      </div>

      {/* Two-column layout on desktop */}
      <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
        {/* Main content */}
        <div className="space-y-8">
          {/* Gallery */}
          <ImageGallery images={species.images} slug={species.slug} />

          {/* The Story: fun intro */}
          <section>
            <p className="text-base leading-relaxed text-foreground/90">{species.summary}</p>
            {species.description.split("\n").filter((p) => p.trim()).map((p, i) => (
              <p key={i} className="mt-3 text-sm leading-relaxed text-foreground/80">{p}</p>
            ))}
          </section>

          {/* Fun Facts */}
          {species.funFacts.length > 0 && (
            <section>
              <h2 className="mb-3 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
                Things You Probably Didn&apos;t Know
              </h2>
              <ul className="space-y-2">
                {species.funFacts.map((fact, i) => (
                  <li key={i} className="flex gap-3 rounded-lg border border-border bg-card p-3 text-sm text-foreground/85">
                    <span className="mt-0.5 flex-shrink-0 text-primary">&#9679;</span>
                    {fact}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Real-World Stories */}
          {species.stories.length > 0 && (
            <section>
              <h2 className="mb-3 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
                Stories From the Field
              </h2>
              <div className="space-y-3">
                {species.stories.map((story, i) => (
                  <div key={i} className="rounded-lg border border-border bg-card p-4">
                    <h3 className="text-sm font-semibold text-foreground">{story.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground/80">{story.text}</p>
                    <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
                      <span>{story.location}</span>
                      {story.source && (
                        <>
                          <span>&middot;</span>
                          {story.sourceUrl ? (
                            <a href={story.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                              {story.source}
                            </a>
                          ) : (
                            <span>{story.source}</span>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Where It's Been Found — hidden entirely if no approved map */}
          <DistributionMapSection slug={species.slug} />

          {/* Identification: with images */}
          <section>
            <h2 className="mb-3 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
              How to Identify It
            </h2>
            <div className="space-y-3">
              {species.identification.cap && (
                <div className="rounded-lg border border-border bg-card p-3">
                  <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-primary">Cap</h3>
                  <p className="text-sm text-foreground/80">{species.identification.cap}</p>
                </div>
              )}
              {species.identification.gills && (
                <div className="rounded-lg border border-border bg-card p-3">
                  <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-primary">Gills</h3>
                  <p className="text-sm text-foreground/80">{species.identification.gills}</p>
                </div>
              )}
              {species.identification.stem && (
                <div className="rounded-lg border border-border bg-card p-3">
                  <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-primary">Stem</h3>
                  <p className="text-sm text-foreground/80">{species.identification.stem}</p>
                </div>
              )}
              {species.identification.sporePrint && (
                <div className="rounded-lg border border-border bg-card p-3">
                  <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-primary">Spore Print</h3>
                  <p className="text-sm text-foreground/80">{species.identification.sporePrint}</p>
                </div>
              )}
              {species.identification.odor && (
                <div className="rounded-lg border border-border bg-card p-3">
                  <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-primary">Odor</h3>
                  <p className="text-sm text-foreground/80">{species.identification.odor}</p>
                </div>
              )}
            </div>
          </section>

          {/* Look-alikes */}
          {species.lookAlikes.length > 0 && (
            <section>
              <h2 className="mb-3 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
                Easy to Confuse With
              </h2>
              <div className="space-y-3">
                {species.lookAlikes.map((la) => {
                  const linkedSpecies = la.slug ? getSpeciesBySlug(la.slug) : undefined;
                  const laImage = linkedSpecies && linkedSpecies.images.length > 0
                    ? `/images/species/${la.slug}/${linkedSpecies.images[0].filename}`
                    : la.image ? `${imgBase}/${la.image}` : undefined;
                  return (
                  <div key={la.name} className="overflow-hidden rounded-lg border border-border bg-card">
                    <div className="flex flex-col sm:flex-row gap-0">
                      {laImage && (
                        <img
                          src={laImage}
                          alt={la.name}
                          className="h-40 w-full object-contain bg-[#1a1a1a] sm:h-auto sm:w-36 flex-shrink-0"
                          loading="lazy"
                        />
                      )}
                      <div className="flex flex-col justify-center p-3">
                        {la.slug && linkedSpecies ? (
                          <Link href={`/mushrooms/${la.slug}`} className="text-sm font-semibold text-primary hover:underline">
                            {la.name}
                          </Link>
                        ) : (
                          <h3 className="text-sm font-semibold text-foreground">{la.name}</h3>
                        )}
                        <p className="mt-1 text-xs leading-relaxed text-foreground/80">{la.distinction}</p>
                        {la.externalUrl && (
                          <a
                            href={la.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-flex items-center gap-1 text-xs text-primary hover:underline"
                          >
                            Read more on {la.externalSource} &rarr;
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Edibility warning */}
          <section className="rounded-xl border border-orange-800/30 bg-orange-950/20 p-4">
            <h2 className="mb-1 font-[family-name:var(--font-heading)] text-base font-semibold text-orange-300">
              Can You Eat It?
            </h2>
            <p className="text-sm text-foreground/80">{species.edibilityNote}</p>
            <p className="mt-2 text-xs text-muted-foreground">
              Always verify with local experts before consuming wild mushrooms.
            </p>
          </section>

          {/* Soft Orangutany mention: not a CTA, just helpful */}
          <section className="rounded-xl border border-border bg-card p-4 text-center">
            <p className="text-sm text-foreground/70">
              Found something that looks like this in the wild?{" "}
              <a href="https://orangutany.com" className="text-primary hover:underline">
                Orangutany
              </a>{" "}
              can help you identify it from a photo.
            </p>
          </section>

          {/* Related Species */}
          {(() => {
            const hash = species.slug.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
            const others = allSpecies.filter((s) => s.slug !== species.slug);
            const related = [...others].sort((a, b) => {
              const ha = a.slug.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
              const hb = b.slug.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
              return ((ha * hash) % 997) - ((hb * hash) % 997);
            }).slice(0, 4);
            return related.length > 0 ? (
              <section>
                <h2 className="mb-3 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
                  Explore More Species
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/mushrooms/${r.slug}`}
                      className="group overflow-hidden rounded-lg border border-border bg-card transition hover:border-primary/50"
                    >
                      {getCardImage(r) ? (
                        <img
                          src={getCardImage(r)!.src}
                          alt={getCardImage(r)!.alt}
                          className="aspect-[3/2] w-full object-cover object-center transition group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex aspect-[3/2] items-center justify-center bg-[#1a1a1a]">
                          <span className="text-xs text-muted-foreground">No image</span>
                        </div>
                      )}
                      <div className="p-2">
                        <p className="text-sm font-semibold text-foreground">{r.commonName}</p>
                        <p className="text-xs italic text-muted-foreground">{r.scientificName}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            ) : null;
          })()}

          {/* SEO keyword footer: common search queries for this species */}
          {species.seoQueries && species.seoQueries.length > 0 && (
            <section className="border-t border-border pt-4">
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                People also search for
              </h3>
              <div className="flex flex-wrap gap-2">
                {species.seoQueries.map((q) => (
                  <span key={q} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                    {q}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-3 lg:sticky lg:top-4 lg:self-start">
          <div className="rounded-xl border border-border bg-card p-4">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">Quick Facts</h3>
            <dl className="space-y-2 text-xs">
              <div>
                <dt className="text-muted-foreground">Habitat</dt>
                <dd className="text-foreground/90">{species.habitat}</dd>
              </div>
              <div className="border-t border-border pt-2">
                <dt className="text-muted-foreground">Season</dt>
                <dd className="text-foreground/90">{species.season}</dd>
              </div>
              <div className="border-t border-border pt-2">
                <dt className="text-muted-foreground">Range</dt>
                <dd className="text-foreground/90">{species.range}</dd>
              </div>
            </dl>

            <h3 className="mb-2 mt-4 text-xs font-semibold uppercase tracking-wider text-primary">Taxonomy</h3>
            <dl className="space-y-1 text-xs">
              {Object.entries(species.taxonomy).map(([key, val]) => (
                <div key={key} className="flex justify-between">
                  <dt className="capitalize text-muted-foreground">{key}</dt>
                  <dd className="text-foreground/90">{val}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* JSON-LD */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Taxon",
                name: species.scientificName,
                alternateName: species.commonName,
                image: species.images.length > 0
                  ? `https://guide.orangutany.com/images/species/${species.slug}/${species.images[0].filename}`
                  : undefined,
                description: species.summary,
                parentTaxon: {
                  "@type": "Taxon",
                  name: species.taxonomy.genus,
                  taxonRank: "genus",
                },
              }),
            }}
          />
        </aside>
      </div>
    </article>
  );
}
