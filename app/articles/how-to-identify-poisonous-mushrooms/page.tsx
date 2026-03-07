import { Metadata } from "next";
import Link from "next/link";
import { getAuthor } from "@/lib/authors";

export const metadata: Metadata = {
  title:
    "How to Identify a Poisonous Mushroom (Hint: Most 'Rules' Are Wrong)",
  description:
    "Most folk rules for identifying poisonous mushrooms are dangerously wrong. Learn what actually works, the 5 deadliest beginner mistakes, and what to do if you eat one.",
  alternates: { canonical: "/articles/how-to-identify-poisonous-mushrooms" },
  openGraph: {
    title:
      "How to Identify a Poisonous Mushroom (Hint: Most 'Rules' Are Wrong)",
    description:
      "Most folk rules for identifying poisonous mushrooms are dangerously wrong. Learn what actually works, the 5 deadliest beginner mistakes, and what to do if you eat one.",
  },
};

const SEO_QUERIES = [
  "how to tell if a mushroom is poisonous",
  "poisonous mushroom identification",
  "can you eat mushrooms from your yard",
  "mushroom poisoning symptoms",
  "death cap vs edible mushroom",
  "how to identify wild mushrooms",
  "are backyard mushrooms poisonous",
  "mushroom foraging safety tips",
  "silver spoon mushroom test",
  "poisonous mushroom myths",
];

export default function HowToIdentifyPoisonousMushroomsPage() {
  const author = getAuthor("how-to-identify-poisonous-mushrooms");

  return (
    <article className="mx-auto max-w-4xl px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground sm:text-3xl">
          How to Identify a Poisonous Mushroom (Hint: Most &ldquo;Rules&rdquo; Are Wrong)
        </h1>
        <p className="mt-2 text-xs text-muted-foreground">
          By {author} &middot;{" "}
          <a
            href="https://orangutany.com"
            className="text-primary hover:underline"
          >
            Orangutany
          </a>
        </p>
      </div>

      <div className="space-y-8">
        {/* Opening */}
        <section>
          <p className="text-base leading-relaxed text-foreground/90">
            Every year, people die from mushrooms they were &ldquo;sure&rdquo;
            were safe. According to{" "}
            <a href="https://www.ncbi.nlm.nih.gov/books/NBK537111/" className="text-primary underline hover:text-primary/80 transition" target="_blank" rel="noopener noreferrer">NIH data on mushroom toxicity</a>, around 100 deaths globally, and that&apos;s just the
            confirmed ones. The actual number is almost certainly higher.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">
            Most victims aren&apos;t reckless teenagers. They&apos;re
            experienced foragers who got overconfident, or immigrants who
            confused a local species with something edible from back home. The{" "}
            <Link
              href="/mushrooms/amanita-phalloides"
              className="text-primary hover:underline"
            >
              Death Cap
            </Link>{" "}
            alone accounts for over 90% of mushroom fatalities worldwide. And it
            looks completely ordinary: no warning colors, no foul smell,
            nothing.
          </p>
          {/* TODO: Add real Wikimedia photo: hands holding death cap vs paddy straw side by side */}
        </section>

        {/* The Rules That Will Get You Killed */}
        <section>
          <h2 className="mb-3 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
            The Rules That Will Get You Killed
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-foreground/80">
            These get passed around in foraging groups, survival books, and
            family kitchens. Every single one of them is wrong.
          </p>

          <div className="space-y-4">
            <div className="rounded-xl border border-red-800/30 bg-red-950/20 p-4">
              <h3 className="text-sm font-semibold text-red-300">
                &ldquo;If you can peel the cap, it&apos;s safe&rdquo;
              </h3>
              <p className="mt-1 text-sm text-foreground/80">
                The{" "}
                <Link
                  href="/mushrooms/amanita-phalloides"
                  className="text-primary hover:underline"
                >
                  Death Cap
                </Link>{" "}
                peels easily. So does basically every Amanita. This rule has
                literally zero basis in mycology.
              </p>
            </div>

            <div className="rounded-xl border border-red-800/30 bg-red-950/20 p-4">
              <h3 className="text-sm font-semibold text-red-300">
                &ldquo;If bugs eat it, it&apos;s safe for humans&rdquo;
              </h3>
              <p className="mt-1 text-sm text-foreground/80">
                Slugs eat{" "}
                <Link
                  href="/mushrooms/amanita-phalloides"
                  className="text-primary hover:underline"
                >
                  <em>Amanita phalloides</em>
                </Link>{" "}
                regularly. They have completely different biology. What doesn&apos;t
                kill a slug will absolutely destroy your liver.
              </p>
            </div>

            <div className="rounded-xl border border-red-800/30 bg-red-950/20 p-4">
              <h3 className="text-sm font-semibold text-red-300">
                &ldquo;Cook it and the poison goes away&rdquo;
              </h3>
              <p className="mt-1 text-sm text-foreground/80">
                <a href="https://www.ncbi.nlm.nih.gov/books/NBK431052/" className="text-primary underline hover:text-primary/80 transition" target="_blank" rel="noopener noreferrer">Amatoxins</a>, the compounds in Death Caps and{" "}
                <Link
                  href="/mushrooms/galerina-marginata"
                  className="text-primary hover:underline"
                >
                  Funeral Bells
                </Link>{" "}
               , survive boiling, frying, baking, and drying. Heat does nothing
                to them. You cannot cook your way out of this one.
              </p>
            </div>

            <div className="rounded-xl border border-red-800/30 bg-red-950/20 p-4">
              <h3 className="text-sm font-semibold text-red-300">
                &ldquo;The silver spoon test&rdquo;
              </h3>
              <p className="mt-1 text-sm text-foreground/80">
                The idea that a silver spoon turns black when stirred with a
                poisonous mushroom. There is no chemical basis for this
                whatsoever. Total nonsense, yet people still repeat it.
              </p>
            </div>

            <div className="rounded-xl border border-red-800/30 bg-red-950/20 p-4">
              <h3 className="text-sm font-semibold text-red-300">
                &ldquo;Bright colors = dangerous&rdquo;
              </h3>
              <p className="mt-1 text-sm text-foreground/80">
                <Link
                  href="/mushrooms/cantharellus-cibarius"
                  className="text-primary hover:underline"
                >
                  Chanterelles
                </Link>{" "}
                are bright orange and absolutely delicious. The{" "}
                <Link
                  href="/mushrooms/amanita-virosa"
                  className="text-primary hover:underline"
                >
                  Destroying Angel
                </Link>{" "}
                is pure white and will kill you. Color tells you almost nothing
                about toxicity.
              </p>
            </div>
          </div>
        </section>

        {/* What Actually Works */}
        <section>
          <h2 className="mb-3 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
            What Actually Works
          </h2>

          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="text-sm font-semibold text-foreground">
                Learn 5 species perfectly before learning 50 badly
              </h3>
              <p className="mt-1 text-sm text-foreground/80">
                Pick 5 common species in your area, including at least 2
                dangerous ones, and learn every detail. Cap texture, gill
                attachment, spore color, habitat, season. Most fatal poisonings
                happen because someone had a shallow knowledge of many species
                instead of deep knowledge of a few.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="text-sm font-semibold text-foreground">
                Always check the spore print
              </h3>
              <p className="mt-1 text-sm text-foreground/80">
                Cut the cap off, place it gill-side-down on paper (half white,
                half dark), cover it, and wait a few hours. Spore color is one
                of the most reliable identification features and its something
                you can&apos;t determine just by looking at the mushroom in the
                field.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="text-sm font-semibold text-foreground">
                Look at the WHOLE mushroom: dig up the base
              </h3>
              <p className="mt-1 text-sm text-foreground/80">
                Many deadly Amanitas have a volva (a cup-like sack) at the base
                of the stem that sits underground. If you pick the mushroom by
                snapping the stem, you miss it entirely. Always dig up the full
                mushroom with the base intact.
              </p>
              {/* TODO: Add real Wikimedia photo: volva at base of Amanita phalloides */}
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="text-sm font-semibold text-foreground">
                When in doubt, don&apos;t. Period.
              </h3>
              <p className="mt-1 text-sm text-foreground/80">
                No meal is worth the risk. If you&apos;re not 100% certain,
                leave it. There is no mushroom on earth tasty enough to justify a
                liver transplant.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="text-sm font-semibold text-foreground">
                Get a local field guide, not a global one
              </h3>
              <p className="mt-1 text-sm text-foreground/80">
                A mushroom guide for all of North America is almost useless
                compared to one written for your specific region. Species
                distribution, common look-alikes, and fruiting seasons all vary
                dramatically even within a single state.
              </p>
            </div>
          </div>
        </section>

        {/* 5 Deadliest Mistakes Beginners Make */}
        <section>
          <h2 className="mb-3 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
            The 5 Deadliest Mistakes Beginners Make
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3 rounded-lg border border-border bg-card p-4">
              <span className="flex-shrink-0 text-lg font-bold text-red-400">
                1
              </span>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  Trusting an app
                </h3>
                <p className="mt-1 text-sm text-foreground/80">
                  Mushroom identification apps are wrong about 20% of the time
                  on dangerous species. That&apos;s not a rounding error,
                  that&apos;s one in five. Apps are useful as a starting point
                  but never as a final answer. If an app says &ldquo;likely
                  edible,&rdquo; that means nothing.
                </p>
              </div>
            </div>

            <div className="flex gap-3 rounded-lg border border-border bg-card p-4">
              <span className="flex-shrink-0 text-lg font-bold text-red-400">
                2
              </span>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  Picking without checking the base
                </h3>
                <p className="mt-1 text-sm text-foreground/80">
                  The volva at the base of the stem is the single most important
                  feature for identifying deadly Amanitas. Snap the stem above
                  ground and you&apos;ve just thrown away the one thing that
                  could have saved your life.
                </p>
              </div>
            </div>

            <div className="flex gap-3 rounded-lg border border-border bg-card p-4">
              <span className="flex-shrink-0 text-lg font-bold text-red-400">
                3
              </span>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  Confusing Death Cap with paddy straw mushroom
                </h3>
                <p className="mt-1 text-sm text-foreground/80">
                  This kills people in California almost every year. The{" "}
                  <Link
                    href="/mushrooms/amanita-phalloides"
                    className="text-primary hover:underline"
                  >
                    Death Cap
                  </Link>{" "}
                  looks remarkably similar to the paddy straw mushroom
                  (<em>Volvariella volvacea</em>), a common edible species in
                  Southeast Asia. Immigrants who grew up eating paddy straw
                  mushrooms pick Death Caps from under oak trees and cook them
                  for their families. These are real, documented cases.
                </p>
                {/* TODO: Add real Wikimedia photo: Death Cap vs paddy straw mushroom comparison */}
              </div>
            </div>

            <div className="flex gap-3 rounded-lg border border-border bg-card p-4">
              <span className="flex-shrink-0 text-lg font-bold text-red-400">
                4
              </span>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  &ldquo;It looks like what I buy at the store&rdquo;
                </h3>
                <p className="mt-1 text-sm text-foreground/80">
                  Button mushrooms, portobello, cremini: they&apos;re all{" "}
                  <em>Agaricus bisporus</em>, and yes, there are wild Agaricus
                  species. But there are also deadly look-alikes in the same
                  habitats. &ldquo;Looks like a store mushroom&rdquo; is not an
                  identification method.
                </p>
              </div>
            </div>

            <div className="flex gap-3 rounded-lg border border-border bg-card p-4">
              <span className="flex-shrink-0 text-lg font-bold text-red-400">
                5
              </span>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  Not seeking help fast enough
                </h3>
                <p className="mt-1 text-sm text-foreground/80">
                  Amatoxin poisoning is cruel. You get sick within 6-12 hours,
                  vomiting, diarrhea. Then on day 2, you feel better. Much
                  better. People think they&apos;re fine and skip the hospital.
                  Then on day 3, your liver starts failing. By then it may be too
                  late. That false recovery window kills people.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What to Do If You Think You Ate a Poisonous Mushroom */}
        <section className="rounded-xl border border-orange-800/30 bg-orange-950/20 p-6">
          <h2 className="mb-4 font-[family-name:var(--font-heading)] text-xl font-semibold text-orange-300">
            What to Do If You Think You Ate a Poisonous Mushroom
          </h2>

          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="mt-0.5 flex-shrink-0 text-orange-400">
                &#9679;
              </span>
              <p className="text-sm text-foreground/90">
                <strong>Call{" "}
                <a href="https://poison.org" className="text-primary underline hover:text-primary/80 transition" target="_blank" rel="noopener noreferrer">poison control</a>{" "}
                immediately:</strong>{" "}
                <a
                  href="tel:1-800-222-1222"
                  className="font-mono text-primary hover:underline"
                >
                  1-800-222-1222
                </a>{" "}
                (US). Don&apos;t wait to see if symptoms develop. By the time
                you feel sick, the damage is already underway.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="mt-0.5 flex-shrink-0 text-orange-400">
                &#9679;
              </span>
              <p className="text-sm text-foreground/90">
                <strong>Save a sample or take a photo.</strong> If you still have
                the mushroom, keep it. If not, photograph anything left: the
                cooking scraps, the spot where you picked it. This helps
                toxicologists enormously.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="mt-0.5 flex-shrink-0 text-orange-400">
                &#9679;
              </span>
              <p className="text-sm text-foreground/90">
                <strong>Don&apos;t wait for symptoms.</strong> Amatoxin poisoning
                can take 6-12 hours to show up. By then your liver and kidneys
                are already taking hits.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="mt-0.5 flex-shrink-0 text-orange-400">
                &#9679;
              </span>
              <p className="text-sm text-foreground/90">
                <strong>
                  Go to the ER and say &ldquo;possible amatoxin
                  exposure.&rdquo;
                </strong>{" "}
                Doctors need to hear that specific word. Generic &ldquo;food
                poisoning&rdquo; gets triaged differently than amatoxin
                exposure. Be direct; it could save your life.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section>
          <p className="text-sm leading-relaxed text-foreground/70">
            Want to learn the specific species mentioned in this article? Start
            with the{" "}
            <Link
              href="/mushrooms/amanita-phalloides"
              className="text-primary hover:underline"
            >
              Death Cap
            </Link>
            ,{" "}
            <Link
              href="/mushrooms/amanita-virosa"
              className="text-primary hover:underline"
            >
              Destroying Angel
            </Link>
            , and{" "}
            <Link
              href="/mushrooms/galerina-marginata"
              className="text-primary hover:underline"
            >
              Funeral Bell
            </Link>{" "}
           , or browse{" "}
            <Link href="/mushrooms" className="text-primary hover:underline">
              all species
            </Link>
            .
          </p>
        </section>

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

      {/* JSON-LD Article schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "How to Identify a Poisonous Mushroom (Hint: Most 'Rules' Are Wrong)",
            description:
              "Most folk rules for identifying poisonous mushrooms are dangerously wrong. Learn what actually works, the 5 deadliest beginner mistakes, and what to do if you eat one.",
            author: {
              "@type": "Person",
              name: "Varun Vaid",
              url: "https://orangutany.com",
            },
            publisher: {
              "@type": "Organization",
              name: "Orangutany",
              url: "https://orangutany.com",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://guide.orangutany.com/articles/how-to-identify-poisonous-mushrooms",
            },
            url: "https://guide.orangutany.com/articles/how-to-identify-poisonous-mushrooms",
          }),
        }}
      />
    </article>
  );
}
