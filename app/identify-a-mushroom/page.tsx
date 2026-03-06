import Link from "next/link";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/shared/breadcrumb";
import { CtaBlock } from "@/components/shared/cta-block";
import { organizationSchema } from "@/lib/schema";

export const metadata = {
  title: "Identify a Mushroom",
  description:
    "Use Orangutany to identify mushrooms from photos. Upload a picture, get an AI-powered identification with safety info, look-alikes, habitat details, and edibility ratings.",
};

export default function IdentifyAMushroomPage() {
  const crumbs = [{ label: "Identify a Mushroom" }];
  const crumbsLd = breadcrumbJsonLd([
    { name: "Identify a Mushroom", url: "/identify-a-mushroom" },
  ]);

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Identify a Mushroom",
    description: metadata.description,
    url: "https://guide.orangutany.com/identify-a-mushroom",
    publisher: organizationSchema(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://guide.orangutany.com/identify-a-mushroom",
    },
  };

  return (
    <main className="mx-auto max-w-4xl px-4 py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbsLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <Breadcrumb items={crumbs} />

      {/* Hero */}
      <h1 className="text-2xl font-semibold text-foreground">
        Identify a Mushroom
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-foreground/80">
        Orangutany uses AI to identify mushrooms from a single photo. Snap a
        picture of what you found, and get a species match along with safety
        information, habitat data, and known look-alikes. It takes seconds.
      </p>

      {/* How It Works */}
      <section className="mt-10">
        <h2 className="text-lg font-semibold text-foreground">How It Works</h2>
        <ol className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80">
          <li>
            <span className="font-medium text-foreground">1. Upload a photo.</span>{" "}
            Take a clear picture of the mushroom you want to identify. The cap,
            gills, and stem are all helpful.
          </li>
          <li>
            <span className="font-medium text-foreground">2. Get an identification.</span>{" "}
            Orangutany analyzes the image and returns the most likely species
            match, along with a confidence level.
          </li>
          <li>
            <span className="font-medium text-foreground">3. Review safety info, habitat, and look-alikes.</span>{" "}
            Every result includes edibility ratings, toxic look-alikes to watch
            for, typical habitat, and seasonal details.
          </li>
        </ol>
      </section>

      {/* Safety First */}
      <section className="mt-10 rounded-xl border border-amber-500/30 bg-amber-50/50 p-5 dark:bg-amber-950/20">
        <h2 className="text-lg font-semibold text-foreground">Safety First</h2>
        <p className="mt-2 text-sm leading-relaxed text-foreground/80">
          Never eat a mushroom based solely on an app identification. AI is a
          useful starting point, but it is not infallible. Always cross-reference
          with a field guide and consult an experienced forager or mycologist
          before consuming any wild mushroom. When in doubt, leave it alone.
        </p>
      </section>

      {/* What You'll Learn */}
      <section className="mt-10">
        <h2 className="text-lg font-semibold text-foreground">
          What You'll Learn
        </h2>
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-foreground/80">
          <li>
            <span className="font-medium text-foreground">Species name</span> -
            common and scientific names for confident identification.
          </li>
          <li>
            <span className="font-medium text-foreground">Edibility rating</span> -
            whether the mushroom is edible, toxic, or somewhere in between.
          </li>
          <li>
            <span className="font-medium text-foreground">Look-alikes to watch for</span> -
            similar species that could be confused with your find, including
            dangerous ones.
          </li>
          <li>
            <span className="font-medium text-foreground">Habitat and season info</span> -
            where and when this species typically grows, so you can confirm the
            match fits your context.
          </li>
        </ul>
      </section>

      {/* Main CTA */}
      <section className="mt-10 text-center">
        <a
          href="https://orangutany.com"
          className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
        >
          Try Orangutany Now
        </a>
      </section>

      {/* Subtle CTA variant */}
      <CtaBlock ctaType="identify" variant="subtle" />

      {/* Related Content */}
      <section className="mt-12">
        <h2 className="text-lg font-semibold text-foreground">
          Related Reading
        </h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li>
            <Link
              href="/articles/how-to-identify-poisonous-mushrooms"
              className="text-primary hover:underline"
            >
              How to Identify Poisonous Mushrooms
            </Link>
          </li>
          <li>
            <Link
              href="/guides/beginners-guide-to-mushroom-foraging"
              className="text-primary hover:underline"
            >
              Beginner's Guide to Mushroom Foraging
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
