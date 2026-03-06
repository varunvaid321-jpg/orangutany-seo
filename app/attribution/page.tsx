import { Metadata } from "next";
import { allSpecies } from "@/data/species";

export const metadata: Metadata = {
  title: "Image Attribution",
  description: "Full image attribution and licensing information for all photos used in the Orangutany Mushroom Guide.",
  alternates: { canonical: "/attribution" },
};

export default function AttributionPage() {
  const speciesWithImages = allSpecies.filter((s) => s.images.length > 0);

  return (
    <div className="mx-auto max-w-4xl px-6 py-8">
      <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground">
        Image Attribution
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        All species photographs in this guide are sourced from Wikimedia Commons
        and used under free licenses. We are grateful to the photographers who
        make their work available for educational use.
      </p>

      <section className="mt-8">
        <h2 className="text-lg font-semibold text-foreground">Licenses Used</h2>
        <ul className="mt-3 space-y-2 text-sm text-foreground/80">
          <li>
            <strong>CC BY-SA 3.0</strong> &ndash;{" "}
            <a href="https://creativecommons.org/licenses/by-sa/3.0/" className="text-primary hover:underline">
              Creative Commons Attribution-ShareAlike 3.0
            </a>
          </li>
          <li>
            <strong>CC BY-SA 4.0</strong> &ndash;{" "}
            <a href="https://creativecommons.org/licenses/by-sa/4.0/" className="text-primary hover:underline">
              Creative Commons Attribution-ShareAlike 4.0
            </a>
          </li>
          <li>
            <strong>CC BY 3.0</strong> &ndash;{" "}
            <a href="https://creativecommons.org/licenses/by/3.0/" className="text-primary hover:underline">
              Creative Commons Attribution 3.0
            </a>
          </li>
          <li>
            <strong>CC0 1.0</strong> &ndash;{" "}
            <a href="https://creativecommons.org/publicdomain/zero/1.0/" className="text-primary hover:underline">
              Public Domain Dedication
            </a>
          </li>
          <li>
            <strong>Public Domain</strong> &ndash; No copyright restrictions.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-foreground">Per-Species Attribution</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {speciesWithImages.length} species with attributed images.
        </p>

        <div className="mt-6 space-y-6">
          {speciesWithImages.map((species) => (
            <div key={species.slug} className="border-b border-border pb-4">
              <h3 className="text-sm font-semibold text-foreground">
                {species.commonName}{" "}
                <span className="font-normal italic text-muted-foreground">
                  ({species.scientificName})
                </span>
              </h3>
              <ul className="mt-2 space-y-1">
                {species.images.map((img, i) => (
                  <li key={i} className="text-xs text-foreground/70">
                    <span className="text-foreground/90">{img.filename}</span>
                    {" "}by {img.author || "Unknown"}.{" "}
                    {img.license && (
                      <>
                        License:{" "}
                        {img.licenseUrl ? (
                          <a href={img.licenseUrl} className="text-primary hover:underline">
                            {img.license}
                          </a>
                        ) : (
                          img.license
                        )}
                        .{" "}
                      </>
                    )}
                    {img.sourceUrl && (
                      <a href={img.sourceUrl} className="text-primary hover:underline">
                        Source
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-foreground">Author Photos</h2>
        <p className="mt-2 text-sm text-foreground/80">
          Photos on the Varun Vaid author page are personal photos provided by the author
          and used with permission. All rights reserved by the respective photographer.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-foreground">Distribution Maps</h2>
        <p className="mt-2 text-sm text-foreground/80">
          Species distribution maps are generated using occurrence data from the{" "}
          <a href="https://www.gbif.org" className="text-primary hover:underline">
            Global Biodiversity Information Facility (GBIF)
          </a>
          , made available under the{" "}
          <a href="https://creativecommons.org/licenses/by/4.0/" className="text-primary hover:underline">
            CC BY 4.0
          </a>{" "}
          license.
        </p>
      </section>
    </div>
  );
}
