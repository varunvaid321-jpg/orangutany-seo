import { Metadata } from "next";
import Link from "next/link";
import { allSpecies } from "@/data/species";
import { getCardImage } from "@/lib/card-image";

export const metadata: Metadata = {
  title: "Wild Mushrooms by Region, What Grows Near You",
  description:
    "Find wild mushrooms by region, North America, Europe, Asia, and beyond. Distribution maps, photos, and identification guides for local species.",
  alternates: { canonical: "/articles/mushrooms-by-region" },
  openGraph: {
    title: "Wild Mushrooms by Region, What Grows Near You",
    description:
      "Find wild mushrooms by region, North America, Europe, Asia, and beyond. Distribution maps, photos, and identification guides for local species.",
  },
};

const REGIONS: { name: string; keywords: string[]; description: string }[] = [
  {
    name: "North America",
    keywords: ["North America", "United States", "Canada", "Eastern North America", "Western North America", "Pacific Northwest"],
    description: "From Morels in the Midwest to Chanterelles in the Pacific Northwest, the most commonly foraged species across the US and Canada.",
  },
  {
    name: "Europe",
    keywords: ["Europe", "European", "Northern Hemisphere", "temperate"],
    description: "Home to centuries of foraging tradition. Porcini in Italy, Chanterelles in Scandinavia, Death Caps in England.",
  },
  {
    name: "Asia",
    keywords: ["Asia", "China", "Japan", "Siberia", "Asian"],
    description: "Traditional medicine meets gourmet cuisine. Shiitake, Reishi, Matsutake, and thousands more.",
  },
  {
    name: "Southern Hemisphere",
    keywords: ["Australia", "New Zealand", "South America", "South Africa", "Southern Hemisphere"],
    description: "Many Northern Hemisphere species were accidentally introduced via imported trees. Some native species are found nowhere else.",
  },
];

export default function MushroomsByRegionPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-8">
      <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground sm:text-3xl">
        Wild Mushrooms by Region
      </h1>
      <p className="mt-2 text-xs text-muted-foreground">
        By{" "}
        <Link href="/authors/priya-sharma" className="text-primary hover:underline">
          Priya Sharma
        </Link>{" "}
        &middot; Orangutany
      </p>
      <p className="mt-3 text-sm leading-relaxed text-foreground/80">
        Every species page includes a global distribution map showing where it&apos;s been found, using occurrence data from <a href="https://www.gbif.org" className="text-primary underline hover:text-primary/80 transition" target="_blank" rel="noopener noreferrer">GBIF</a>.
        Here&apos;s a quick way to explore mushrooms by the region you&apos;re in.
      </p>

      <div className="mt-8 space-y-10">
        {REGIONS.map((region) => {
          const matches = allSpecies.filter((s) =>
            region.keywords.some((kw) => s.range.toLowerCase().includes(kw.toLowerCase()))
          );

          return (
            <section key={region.name}>
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
                {region.name}
              </h2>
              <p className="mt-1 text-sm text-foreground/70">{region.description}</p>

              {matches.length > 0 ? (
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  {matches.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/mushrooms/${s.slug}`}
                      className="group overflow-hidden rounded-lg border border-border bg-card transition hover:border-primary/50"
                    >
                      {s.images.length > 0 && (
                        <img
                          src={getCardImage(s)?.src ?? ""}
                          alt={getCardImage(s)?.alt ?? ""}
                          className="aspect-[3/2] w-full object-cover object-top transition group-hover:scale-105"
                          loading="lazy"
                        />
                      )}
                      <div className="p-2">
                        <p className="text-xs font-semibold text-foreground">{s.commonName}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="mt-3 text-sm text-muted-foreground">More species for this region coming soon.</p>
              )}
            </section>
          );
        })}
      </div>

      <section className="mt-12 rounded-xl border border-border bg-card p-6 text-center">
        <p className="text-sm text-foreground/70">
          Every species includes a{" "}
          <span className="font-semibold text-primary">global distribution map</span>{" "}
          showing reported sightings from GBIF. For detailed species identification, see <a href="https://www.mushroomexpert.com" className="text-primary underline hover:text-primary/80 transition" target="_blank" rel="noopener noreferrer">MushroomExpert.com</a>.{" "}
          <Link href="/mushrooms" className="text-primary hover:underline">
            Browse all species
          </Link>
        </p>
      </section>
    </div>
  );
}
