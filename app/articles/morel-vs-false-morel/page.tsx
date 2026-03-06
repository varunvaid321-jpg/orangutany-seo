import { Metadata } from "next";
import Link from "next/link";
import { CtaBlock } from "@/components/shared/cta-block";

export const metadata: Metadata = {
  title: "Morel vs False Morel: How to Tell Them Apart Before It's Too Late",
  description:
    "Learn to distinguish true morels from false morels (Gyromitra). The cut test, cap attachment, cap texture, and a 30-second safety check that could save your life.",
  alternates: { canonical: "/articles/morel-vs-false-morel" },
  openGraph: {
    title: "Morel vs False Morel: How to Tell Them Apart Before It's Too Late",
    description:
      "Learn to distinguish true morels from false morels (Gyromitra). The cut test, cap attachment, cap texture, and a 30-second safety check that could save your life.",
  },
};

const SEO_QUERIES = [
  "morel vs false morel",
  "how to tell real morel from false morel",
  "false morel identification",
  "gyromitra vs morel",
  "are false morels poisonous",
  "morel mushroom look alikes",
  "verpa bohemica vs morel",
  "half free morel edible",
  "false morel cut test",
  "gyromitra esculenta toxicity",
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://guide.orangutany.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Articles",
      item: "https://guide.orangutany.com/articles",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Morel vs False Morel",
      item: "https://guide.orangutany.com/articles/morel-vs-false-morel",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Morel vs False Morel: How to Tell Them Apart Before It's Too Late",
  description:
    "Learn to distinguish true morels from false morels (Gyromitra). The cut test, cap attachment, cap texture, and a 30-second safety check that could save your life.",
  author: {
    "@type": "Person",
    name: "Daniel Okafor",
    url: "https://guide.orangutany.com/authors/daniel-okafor",
  },
  publisher: {
    "@type": "Organization",
    name: "Orangutany",
    url: "https://orangutany.com",
  },
  datePublished: "2025-03-06",
  dateModified: "2025-03-06",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://guide.orangutany.com/articles/morel-vs-false-morel",
  },
};

export default function MorelVsFalseMorelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article className="mx-auto max-w-4xl px-6 py-10">
        {/* Breadcrumb */}
        <nav className="mb-6 text-xs text-muted-foreground" aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/articles" className="hover:text-foreground">
                Articles
              </Link>
            </li>
            <li>/</li>
            <li className="text-foreground/70">Morel vs False Morel</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground sm:text-3xl md:text-4xl leading-tight">
            Morel vs False Morel: How to Tell Them Apart Before It&apos;s Too
            Late
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            By{" "}
            <Link
              href="/authors/daniel-okafor"
              className="text-primary hover:underline"
            >
              Daniel Okafor
            </Link>{" "}
            &middot; Veterinary Technician, Portland, OR
          </p>
        </header>

        <div className="space-y-10">
          {/* Opening scenario */}
          <section>
            <p className="text-base leading-relaxed text-foreground/90">
              Last spring at a mycological society meetup in the Willamette
              Valley, a newer member brought in a basket of what he believed were
              black morels. He was proud of the haul. An experienced member
              picked through the basket, paused, and set two specimens aside on
              the table. The room got quiet. Those two were{" "}
              <em>Gyromitra esculenta</em>. False morels. The kind that contain a
              compound your body converts to rocket fuel.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              Nobody raised their voice. Nobody panicked. But you could feel it
              in the room: the understanding of what almost happened. The forager
              had never cut one open. He had never checked how the cap attached
              to the stem. He went by shape and color alone, and shape and color
              are not enough.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              This article covers the three tests that separate true morels from
              their dangerous look-alikes. They take about 30 seconds total. If
              you forage morels, or plan to start, you need to know all three.
            </p>
          </section>

          {/* The Cut Test */}
          <section>
            <h2 className="mb-3 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
              The Cut Test: The Single Most Reliable Field Check
            </h2>
            <p className="text-sm leading-relaxed text-foreground/80">
              Slice the mushroom in half from top to bottom. This is the test
              that matters more than any other.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              A true morel (<em>Morchella</em> species) is completely hollow
              inside. The cap and stem form one continuous cavity, like a tube.
              There is nothing in there. No fibers, no tissue, no cotton-like
              material. Just air.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              A false morel (<em>Gyromitra</em> species) is not hollow. When you
              cut it open, you will see chambered, cottony interior tissue. It
              looks stuffed. Some species have lobes and folds of flesh inside,
              others have a wispy, fibrous filling. Either way, it is not empty.
            </p>
            <div className="mt-4 rounded-lg border border-amber-800/30 bg-amber-950/20 p-4">
              <p className="text-sm font-semibold text-amber-300">
                If you only remember one thing from this article: cut it open. A
                true morel is always hollow.
              </p>
            </div>
          </section>

          {/* Cap Attachment */}
          <section>
            <h2 className="mb-3 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
              Cap Attachment
            </h2>
            <p className="text-sm leading-relaxed text-foreground/80">
              On a true morel, the cap is fused directly to the stem at the
              bottom edge. The cap and stem are one continuous piece. You cannot
              peel the cap away from the stem without tearing the flesh.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              On a false morel, the cap hangs free. It attaches only at the very
              top of the stem, like an umbrella or a skirt draped over a pole.
              You can often lift the edge of the cap and see daylight between
              the cap and stem. This is a clear warning sign.
            </p>
          </section>

          {/* Cap Texture */}
          <section>
            <h2 className="mb-3 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
              Cap Texture
            </h2>
            <p className="text-sm leading-relaxed text-foreground/80">
              True morels have a distinctive honeycomb pattern on the cap
              surface. Regular pits and ridges, organized and repeating. It
              looks geometric, almost architectural. Different morel species vary
              in color (yellow, gray, black), but the honeycomb structure is
              consistent across all of them.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              False morels have a wrinkled, brain-like, irregular surface. No
              honeycomb. No pits. The cap looks like crumpled fabric or,
              honestly, like a brain. The lobes fold over each other in random
              patterns. Once you have seen both side by side, the difference is
              obvious.
            </p>
          </section>

          {/* Gyromitra esculenta */}
          <section>
            <h2 className="mb-3 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
              <em>Gyromitra esculenta</em>: The Most Dangerous False Morel
            </h2>
            <p className="text-sm leading-relaxed text-foreground/80">
              The species name &ldquo;esculenta&rdquo; means &ldquo;edible.&rdquo;
              That name has killed people. <em>Gyromitra esculenta</em> contains
              gyromitrin, a compound your body metabolizes into
              monomethylhydrazine. MMH. The same chemical used as rocket
              propellant.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              Symptoms are delayed, typically 6 to 12 hours after ingestion. By
              the time you feel sick, the damage is underway. Gyromitrin targets
              the liver and kidneys. Severe cases lead to organ failure. Deaths
              have been documented repeatedly in Europe, particularly in Finland
              and Sweden, where <em>G. esculenta</em> is paradoxically
              considered a traditional food in some regions.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              Some foragers parboil <em>Gyromitra</em> multiple times and
              discard the water, claiming this removes the toxin. Gyromitrin is
              volatile and partially water-soluble, so parboiling does reduce
              the concentration. But &ldquo;reduce&rdquo; is not
              &ldquo;eliminate.&rdquo; Toxin levels vary between individual
              specimens. There is no way to know how much remains after cooking.
              People who eat parboiled <em>Gyromitra</em> for years without
              incident are not proving it is safe. They are playing a game where
              the consequences are cumulative liver damage and the odds are
              unknowable.
            </p>
          </section>

          {/* Verpa bohemica */}
          <section>
            <h2 className="mb-3 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
              <em>Verpa bohemica</em>: The Tricky One
            </h2>
            <p className="text-sm leading-relaxed text-foreground/80">
              <em>Verpa bohemica</em> is the false morel most likely to fool
              you. Its cap has a wrinkled, ridged surface that can resemble a
              morel at first glance, especially when it is young or partially
              dried. It looks more like a morel than <em>Gyromitra</em> does,
              which makes it more dangerous in a practical sense.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              The giveaway is cap attachment. The <em>Verpa</em> cap attaches
              only at the very top of the stem. The rest hangs completely free.
              If you look underneath the cap, you will see the stem standing
              inside it like a finger inside a thimble. A true morel never looks
              like this.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              The cut test also works. Slice a <em>Verpa</em> lengthwise and you
              will see cottony, wispy fibers inside the stem. It is not fully
              hollow the way a true morel is. Some people eat{" "}
              <em>Verpa bohemica</em> without apparent ill effects, but
              gastrointestinal reactions have been reported, and there is no
              reason to take the risk when true morels are available.
            </p>
          </section>

          {/* Half-Free Morels */}
          <section>
            <h2 className="mb-3 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
              Half-Free Morels (<em>Morchella punctipes</em>): The One That
              Starts Arguments
            </h2>
            <p className="text-sm leading-relaxed text-foreground/80">
              The half-free morel is a true morel. It is in the genus{" "}
              <em>Morchella</em>. It is safe to eat. But it causes more
              arguments on foraging forums than almost any other species because
              its cap is only attached to the stem about halfway down.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              The bottom half of the cap hangs free, which makes people nervous
              because free-hanging caps are a false morel characteristic. Here
              is how to confirm it: cut it open. A half-free morel is completely
              hollow inside, just like every other true morel. The honeycomb cap
              pattern is present. The cap is attached at a midpoint, not only at
              the very top. These three features together confirm it.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              Half-free morels tend to be smaller and less meaty than other
              morels. Some foragers skip them. Others prize them. Either way,
              they are not dangerous.
            </p>
          </section>

          {/* BC case */}
          <section className="rounded-xl border border-red-800/30 bg-red-950/20 p-6">
            <h2 className="mb-3 font-[family-name:var(--font-heading)] text-lg font-semibold text-red-300">
              Case: A Family Hospitalized in British Columbia
            </h2>
            <p className="text-sm leading-relaxed text-foreground/80">
              In a widely reported case from British Columbia, a family of four
              was hospitalized after eating what the father believed were morel
              mushrooms. They were <em>Gyromitra</em>. The father told medical
              staff he identified them because &ldquo;they looked wrinkly.&rdquo;
              He had never sliced one open to check the interior.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              Symptoms appeared roughly 8 hours after the meal. Nausea, vomiting,
              abdominal pain. The two children were treated and released after
              several days. The parents required longer hospitalization for liver
              monitoring. All four survived, but the case illustrates what
              happens when someone relies on external appearance alone.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              A single lengthwise cut would have revealed the chambered interior.
              That cut takes two seconds.
            </p>
          </section>

          {/* 30-Second Safety Check */}
          <section>
            <h2 className="mb-3 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
              The 30-Second Safety Check
            </h2>
            <p className="text-sm leading-relaxed text-foreground/80">
              Every morel you pick should pass two questions before it goes in
              your basket:
            </p>
            <ol className="mt-3 space-y-2 text-sm text-foreground/80">
              <li className="flex gap-2">
                <span className="font-bold text-foreground">1.</span>
                <span>
                  <strong>Cut it in half lengthwise. Is it completely hollow
                  inside?</strong> No fibers, no chambers, no cottony material. Just
                  an empty cavity from cap to stem base.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-foreground">2.</span>
                <span>
                  <strong>Is the cap attached to the stem at the base (or at
                  least halfway down)?</strong> Not just at the very top. The cap
                  should be fused to the stem, not hanging free like a skirt.
                </span>
              </li>
            </ol>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              If the answer is yes to both, you have a true morel. If either
              answer is no, set it aside. Do not eat it. Do not assume it is
              fine because the rest of your basket tested positive.
            </p>
          </section>

          {/* Comparison Table */}
          <section>
            <h2 className="mb-4 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
              Side-by-Side Comparison
            </h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="px-4 py-3 text-left font-semibold text-foreground">
                      Feature
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">
                      True Morel (<em>Morchella</em>)
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">
                      <em>Gyromitra</em> (False Morel)
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">
                      <em>Verpa bohemica</em>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground/90">
                      Interior
                    </td>
                    <td className="px-4 py-3 text-foreground/80">
                      Completely hollow
                    </td>
                    <td className="px-4 py-3 text-foreground/80">
                      Chambered, cottony tissue
                    </td>
                    <td className="px-4 py-3 text-foreground/80">
                      Cottony fibers in stem
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground/90">
                      Cap attachment
                    </td>
                    <td className="px-4 py-3 text-foreground/80">
                      Fused to stem at base
                    </td>
                    <td className="px-4 py-3 text-foreground/80">
                      Hangs free, attached at top only
                    </td>
                    <td className="px-4 py-3 text-foreground/80">
                      Attached at top only
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground/90">
                      Cap surface
                    </td>
                    <td className="px-4 py-3 text-foreground/80">
                      Honeycomb pits and ridges
                    </td>
                    <td className="px-4 py-3 text-foreground/80">
                      Brain-like, irregular lobes
                    </td>
                    <td className="px-4 py-3 text-foreground/80">
                      Wrinkled ridges, somewhat regular
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground/90">
                      Toxicity
                    </td>
                    <td className="px-4 py-3 text-foreground/80">
                      Edible (cook thoroughly)
                    </td>
                    <td className="px-4 py-3 text-foreground/80">
                      Contains gyromitrin. Potentially fatal
                    </td>
                    <td className="px-4 py-3 text-foreground/80">
                      GI upset reported. Avoid
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground/90">
                      Symptom onset
                    </td>
                    <td className="px-4 py-3 text-foreground/80">N/A</td>
                    <td className="px-4 py-3 text-foreground/80">
                      6-12 hours delayed
                    </td>
                    <td className="px-4 py-3 text-foreground/80">
                      Variable, typically hours
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground/90">
                      Season
                    </td>
                    <td className="px-4 py-3 text-foreground/80">
                      Spring (March-May)
                    </td>
                    <td className="px-4 py-3 text-foreground/80">
                      Spring, overlaps with morel season
                    </td>
                    <td className="px-4 py-3 text-foreground/80">
                      Early spring, often before morels
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Closing */}
          <section>
            <p className="text-sm leading-relaxed text-foreground/80">
              Morel season is short and the excitement of finding them is real.
              That excitement is exactly when mistakes happen. The tests
              described here are not complicated. Cut it open. Check how the
              cap attaches. Look at the surface pattern. Do all three, every
              time, for every specimen. Not just the first one in the basket.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              The forager at that mycological society meetup still comes to every
              meeting. He carries a knife now and cuts every morel in the field
              before it goes in his bag. That is exactly the right response.
            </p>
          </section>

          <CtaBlock ctaType="identify" variant="subtle" />

          {/* SEO keyword pills */}
          <section className="border-t border-border pt-4">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              People also search for
            </h3>
            <div className="flex flex-wrap gap-2">
              {SEO_QUERIES.map((q) => (
                <span
                  key={q}
                  className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                >
                  {q}
                </span>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
