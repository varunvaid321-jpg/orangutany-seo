import { Breadcrumb, breadcrumbJsonLd } from "@/components/shared/breadcrumb";
import { CtaBlock } from "@/components/shared/cta-block";
import { organizationSchema } from "@/lib/schema";

export const metadata = {
  title: "About Orangutany — Canadian Mushroom Identification",
  description:
    "Orangutany takes the guesswork out of mushroom identification. AI trained on millions of images — species matches, distribution maps, seasonality. Built in Canada. Think global, forage local.",
};

export default function AboutPage() {
  const crumbs = [{ label: "About" }];
  const crumbsLd = breadcrumbJsonLd([{ name: "About", url: "/about" }]);

  return (
    <main className="mx-auto max-w-3xl px-4 py-14">
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

      <h1 className="text-2xl font-semibold text-foreground">
        About This Guide
      </h1>

      <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground/80">
        <p>
          This guide is built by{" "}
          <a
            href="https://orangutany.com"
            className="text-primary hover:underline"
          >
            Orangutany
          </a>
          , a mushroom identification app that uses AI to identify fungi from
          photos.
        </p>

        <p>
          We created this companion guide because we believe mushroom
          identification is too important to rely on a single tool. No app, no
          book, and no expert is right 100% of the time. The goal here is to
          help people learn the fundamentals: what to look for, what to avoid,
          and when to ask for help.
        </p>

        <p>
          Every species page includes real photographs, habitat and season data,
          look-alikes, edibility ratings, and safety notes. Our articles cover
          real poisoning cases, foraging best practices, and the science behind
          fungi. Everything is written by people who spend time in the field.
        </p>

        <p>
          If you spot an error or want to contribute, reach out through{" "}
          <a
            href="https://orangutany.com"
            className="text-primary hover:underline"
          >
            orangutany.com
          </a>
          . We take accuracy seriously.
        </p>
      </div>

      <CtaBlock ctaType="try-app" variant="subtle" />
    </main>
  );
}
