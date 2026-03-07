import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mushrooms That Can Kill You: Real Cases, Real Species",
  description:
    "The deadliest mushrooms in the world, told through real poisoning cases. Death Cap, Destroying Angel, Funeral Bell, how they kill and who they've killed.",
  alternates: { canonical: "/articles/mushrooms-that-can-kill-you" },
  openGraph: {
    title: "Mushrooms That Can Kill You: Real Cases, Real Species",
    description:
      "The deadliest mushrooms in the world, told through real poisoning cases. Death Cap, Destroying Angel, Funeral Bell, how they kill and who they've killed.",
  },
};

export default function MushroomsThatCanKillYouPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Mushrooms That Can Kill You: Real Cases, Real Species",
    author: {
      "@type": "Person",
      name: "Elena Marchetti",
    },
    publisher: {
      "@type": "Organization",
      name: "Orangutany",
      url: "https://orangutany.com",
    },
    description:
      "The deadliest mushrooms in the world, told through real poisoning cases. Death Cap, Destroying Angel, Funeral Bell, how they kill and who they've killed.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://orangutany.com/articles/mushrooms-that-can-kill-you",
    },
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-8">
      <article>
        <header>
          <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground sm:text-3xl">
            Mushrooms That Can Kill You: Real Cases, Real Species
          </h1>
          <p className="mt-2 text-xs text-muted-foreground">
            By{" "}
            <Link href="/authors/elena-marchetti" className="text-primary hover:underline">
              Elena Marchetti
            </Link>{" "}
            &middot; Orangutany
          </p>
        </header>

        {/* ── Opening ── */}
        <section className="mt-8 space-y-4 text-base leading-loose text-foreground/80">
          <p>
            In July 2023, Erin Patterson served beef wellington to her former
            in-laws at a lunch in Leongatha, Australia. It was a pleasant
            afternoon. The food was good. Three of the four guests died within
            days.
          </p>
          <p>
            The mushrooms in the dish were{" "}
            <Link
              href="/mushrooms/amanita-phalloides"
              className="text-primary hover:underline"
            >
              Death Caps
            </Link>
            .
          </p>
          <p>
            This is not a list of mushrooms that might make you sick. This is a
            list of mushrooms which have actually killed people, in documented
            cases, with names and dates and autopsies. Some of the victims were
            experienced foragers. Some were chefs. Some were children.
          </p>
          <p>Here&apos;s the thing: none of them thought it would happen to them.</p>
        </section>

        {/* ── Death Cap ── */}
        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
            Death Cap (<em>Amanita phalloides</em>)
          </h2>
          <figure className="my-4">
            <img src="/images/species/amanita-phalloides/02-group.jpg" alt="Group of Death Cap mushrooms at various growth stages in woodland" className="w-full rounded-xl border border-border/30 object-cover" loading="lazy" />
            <figcaption className="mt-2 text-center text-xs text-muted-foreground italic">Death Caps at various stages of growth. Responsible for 90% of all mushroom fatalities worldwide.</figcaption>
          </figure>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80">
            <p>
              The Death Cap is responsible for roughly <a href="https://www.ncbi.nlm.nih.gov/books/NBK537111/" className="text-primary underline hover:text-primary/80 transition" target="_blank" rel="noopener noreferrer">90% of all mushroom
              fatalities</a> worldwide. Let that sink in. Nine out of ten people who
              die from eating a wild mushroom die from this one species.
            </p>
            <p>
              The Patterson case became international news. Erin served beef
              wellington at a family lunch. Her former mother-in-law, Gail
              Patterson, 70, and Gail&apos;s sister Heather Wilkinson, 66, both
              died. Heather&apos;s husband, Pastor Ian Wilkinson, spent months in
              the hospital before dying as well. The only survivor was Don
              Patterson, Erin&apos;s former father-in-law, who was critically
              ill for weeks.
            </p>
            <p>
              In my family, growing up between Emilia-Romagna and New Jersey,
              mushroom foraging was something you learned from your nonno. You
              didn&apos;t pick anything you couldn&apos;t identify with your eyes
              closed. But here&apos;s the problem: the Death Cap looks almost
              exactly like several edible species from Asia.
            </p>
            <p>
              That&apos;s what happened in Canberra in 2014. A Chinese-born chef,
              experienced with mushrooms, picked what he believed were paddy
              straw mushrooms, a common edible species back home. They were Death
              Caps. He and three guests were hospitalized. Two died.
            </p>
            <p className="rounded-lg border border-border bg-card p-4 text-foreground/90">
              <strong>The three-phase poisoning timeline:</strong> First, violent
              stomach cramps and vomiting, 6–12 hours after eating. Then, a
              bizarre false recovery: you feel fine, maybe even good, for a day
              or two. Your doctor might send you home. But phase three is already
              underway: your liver is failing. By the time you feel better, your
              liver is already dying. Most victims who reach phase three need a
              transplant or die within a week.
            </p>
            <p>
              <Link
                href="/mushrooms/amanita-phalloides"
                className="text-primary hover:underline"
              >
                Full Death Cap profile &rarr;
              </Link>
            </p>
          </div>
        </section>

        {/* ── Destroying Angel ── */}
        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
            Destroying Angel (<em>Amanita virosa / bisporigera</em>)
          </h2>
          <figure className="my-4">
            <img src="/images/species/amanita-virosa/01-white-cap.jpg" alt="Destroying Angel mushroom — pure white cap and stem, deceptively beautiful" className="w-full rounded-xl border border-border/30 object-cover" loading="lazy" />
            <figcaption className="mt-2 text-center text-xs text-muted-foreground italic">The Destroying Angel. Pure white, elegant, and absolutely lethal. Contains the same amatoxins as the Death Cap.</figcaption>
          </figure>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80">
            <p>
              Imagine a mushroom so white and clean it looks like it belongs on a
              dinner plate. Elegant stem, smooth cap, no weird colors or
              markings. When it&apos;s young, it even smells like roses.
            </p>
            <p>It will kill you just as dead as the Death Cap.</p>
            <p>
              The Destroying Angel contains the same <a href="https://www.ncbi.nlm.nih.gov/books/NBK431052/" className="text-primary underline hover:text-primary/80 transition" target="_blank" rel="noopener noreferrer">amatoxins</a> (alpha-amanitin)
              that make the Death Cap lethal. Same three-phase timeline. Same
              liver destruction. Same slim odds once symptoms set in.
            </p>
            <p>
              In 2017, in British Columbia, a three-year-old child ate a
              Destroying Angel from the family&apos;s backyard. Not in the woods.
              Not on a hike. In the yard. The child survived after emergency
              treatment, but the case is a reminder: these mushrooms don&apos;t
              stay in the forest. They grow in gardens, parks, under oak trees in
              suburban neighborhoods.
            </p>
            <p>
              In Europe, we call the white variety <em>Amanita virosa</em>. In
              North America, it&apos;s typically <em>Amanita bisporigera</em>.
              Both will end you.
            </p>
            <p>
              <Link
                href="/mushrooms/amanita-virosa"
                className="text-primary hover:underline"
              >
                Full Destroying Angel profile &rarr;
              </Link>
            </p>
          </div>
        </section>

        {/* ── Funeral Bell ── */}
        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
            Funeral Bell (<em>Galerina marginata</em>)
          </h2>
          <figure className="my-4">
            <img src="/images/species/galerina-marginata/01-field.jpg" alt="Funeral Bell mushroom (Galerina marginata) growing on decaying wood — a small, nondescript brown mushroom that contains deadly amatoxins" className="w-full rounded-xl border border-border/30 object-cover" loading="lazy" />
            <figcaption className="mt-2 text-center text-xs text-muted-foreground italic">The Funeral Bell — a small, generic-looking brown mushroom. Contains the exact same deadly amatoxins as the Death Cap.</figcaption>
          </figure>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80">
            <p>
              Foragers call it &quot;the little brown killer.&quot; And that&apos;s
              exactly the problem: it&apos;s a small, nondescript, brown mushroom
              that grows on decaying wood. It looks like a hundred other harmless
              species. It looks, in particular, like certain magic mushrooms.
            </p>
            <p>
              In 2010, a couple in Oregon went foraging for psilocybin mushrooms.
              They found what they thought were{" "}
              <em>Psilocybe</em> growing on a log. They were Funeral Bells. Both
              were hospitalized with acute liver failure.
            </p>
            <p>
              <em>Galerina marginata</em> contains the exact same amatoxins as
              the Death Cap. Same poison, different package. The lethal dose is
              tiny: as few as 10 small caps can kill an adult.
            </p>
            <p>
              Here&apos;s the thing about Funeral Bells: they&apos;re everywhere.
              They grow on every continent except Antarctica. They fruit in fall,
              sometimes in spring. And unlike the Death Cap, which at least has a
              distinctive look once you know it, the Funeral Bell is aggressively
              generic. It&apos;s a little brown mushroom in a world full of little
              brown mushrooms.
            </p>
            <p>
              <Link
                href="/mushrooms/galerina-marginata"
                className="text-primary hover:underline"
              >
                Full Funeral Bell profile &rarr;
              </Link>
            </p>
          </div>
        </section>

        {/* ── Death Cap again: Santa Cruz ── */}
        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
            The 14-Year-Old in Santa Cruz
          </h2>
          <figure className="my-4">
            <img src="/images/species/amanita-phalloides/05-forest.jpg" alt="Death Cap mushrooms growing under oak trees in woodland — the exact habitat where they are commonly found in California parks" className="w-full rounded-xl border border-border/30 object-cover" loading="lazy" />
            <figcaption className="mt-2 text-center text-xs text-muted-foreground italic">Death Caps growing in woodland under oak trees — the exact scenario that put a 14-year-old in the hospital.</figcaption>
          </figure>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80">
            <p>
              In 2016, a 14-year-old in Santa Cruz, California picked mushrooms
              from a public park. Just a kid, out with friends, and there were
              mushrooms growing under the oak trees. Big, healthy-looking ones.
            </p>
            <p>
              They were{" "}
              <Link
                href="/mushrooms/amanita-phalloides"
                className="text-primary hover:underline"
              >
                Death Caps
              </Link>
              . Again.
            </p>
            <p>
              The teenager needed an emergency liver transplant. She survived, but
              barely. Santa Cruz County later issued warnings about Death Cap
              proliferation in local parks; the species has been spreading along
              the California coast for decades, hitching rides on the root systems
              of imported European oak trees.
            </p>
            <p>
              That&apos;s the insidious part. Death Caps are not native to North
              America. They&apos;re European immigrants, just like half my family.
              But unlike my family, they&apos;ve been silently colonizing the West
              Coast since the early 1900s, and they&apos;re still spreading.
            </p>
          </div>
        </section>

        {/* ── False Morel ── */}
        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
            False Morel (<em>Gyromitra esculenta</em>)
          </h2>
          <figure className="my-4">
            <img src="/images/species/gyromitra-esculenta/01-brain-cap.jpg" alt="False Morel (Gyromitra esculenta) showing the distinctive brain-like, wrinkled cap" className="w-full rounded-xl border border-border/30 object-cover" loading="lazy" />
            <figcaption className="mt-2 text-center text-xs text-muted-foreground italic">The False Morel&apos;s brain-like cap. Its toxin, gyromitrin, is metabolized into rocket fuel by your liver.</figcaption>
          </figure>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80">
            <p>In Finland, they eat this one on purpose.</p>
            <p>
              I&apos;m serious. The False Morel is considered a seasonal delicacy
              in Scandinavia, where it&apos;s sold in markets after being
              parboiled multiple times to remove the toxin. Finns have been eating
              it for generations. The key word is &quot;parboiled multiple
              times.&quot;
            </p>
            <p>
              The toxin is gyromitrin, which your body converts into
              monomethylhydrazine. That&apos;s a component of rocket fuel. You
              are, quite literally, eating something that your liver turns into a
              propellant for spacecraft.
            </p>
            <p>
              In 2023, a family of four in Montana was hospitalized after eating
              False Morels they&apos;d foraged and cooked without the elaborate
              Scandinavian preparation process. They thought they&apos;d found
              true morels, an honest mistake, since the two species can look
              similar to an untrained eye, though experienced foragers will tell
              you the brain-like wrinkles of a False Morel look nothing like the
              honeycomb pits of a true morel.
            </p>
            <p>
              The paradox of <em>Gyromitra esculenta</em> is right there in the
              Latin name: <em>esculenta</em> means &quot;edible.&quot; It was
              named before anyone understood the chemistry. In Scandinavia, with
              proper preparation, it arguably is edible. Everywhere else, it&apos;s
              a gamble with your liver.
            </p>
            <p>
              <Link
                href="/mushrooms/gyromitra-esculenta"
                className="text-primary hover:underline"
              >
                Full False Morel profile &rarr;
              </Link>
            </p>
          </div>
        </section>

        {/* ── Autumn Skullcap & Webcaps ── */}
        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
            The Slow Killers: Autumn Skullcap &amp; Webcaps
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80">
            <p>
              Most deadly mushroom poisonings show symptoms within hours. Not the
              webcaps.
            </p>
            <p>
              <em>Cortinarius rubellus</em>, the Deadly Webcap, contains a toxin
              called orellanine. It can take up to two weeks (fourteen days)
              before you feel anything wrong. By then, your kidneys are already
              destroyed. You didn&apos;t even remember eating mushrooms two weeks
              ago. The connection between cause and effect is almost impossible to
              make without a toxicology workup.
            </p>
            <p>
              The Autumn Skullcap (<em>Galerina marginata</em>&apos;s close
              relatives in the <em>Galerina</em> genus) and various{" "}
              <em>Cortinarius</em> species round out the roster of killers that
              most people have never heard of. They don&apos;t make headlines the
              way the Death Cap does. They&apos;re not dramatic. They&apos;re just
              quietly lethal.
            </p>
            <p>
              In the UK, there have been multiple cases of Polish and Eastern
              European immigrants poisoned by webcaps they mistook for familiar
              edible species from home. Same story, different mushroom: you know
              mushrooms from your home country, you see something that looks
              right, and you trust your experience. Your experience is wrong.
            </p>
          </div>
        </section>

        {/* ── What All These Deaths Have in Common ── */}
        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
            What All These Deaths Have in Common
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80">
            <p>The victims were not stupid.</p>
            <p>
              A chef who&apos;d been cooking with mushrooms for decades. A family
              that foraged every autumn. Immigrants who grew up picking mushrooms
              in forests that looked exactly like the ones in their new country. A
              teenager who didn&apos;t know any better, but whose parents
              didn&apos;t know any better either, because who expects deadly
              mushrooms in a public park?
            </p>
            <p>
              The common thread is overconfidence. Not ignorance, overconfidence.
              Every one of these people had some reason to believe they knew what
              they were doing. The chef knew Asian mushrooms. The foragers knew
              their local species. The immigrants knew mushrooms from back home.
            </p>
            <p>
              But mushrooms don&apos;t care what you know. A Death Cap in
              California looks different from a Death Cap in Italy which looks
              different from a Death Cap in Australia. The same species can vary
              wildly in color, size, and shape depending on age, weather, and
              substrate. And the deadly ones are specifically, almost cruelly,
              similar to edible species.
            </p>
            <p>
              If you forage, get a spore print. Learn the smell. Check every
              single feature. And if there&apos;s any doubt, any at all, leave
              it in the ground.
            </p>
            <p>
              Or take a photo and get a second opinion before you cook anything.
              Technology won&apos;t replace expertise, but it&apos;s a start.
            </p>
          </div>
        </section>

        {/* ── Closing ── */}
        <section className="mt-10 rounded-xl border border-border bg-card p-6">
          <p className="text-sm leading-relaxed text-foreground/80">
            The forest doesn&apos;t care how confident you are. It doesn&apos;t
            care how many years you&apos;ve been foraging, or what your nonno
            taught you, or what app you used. The mushrooms are what they are. The
            only question is whether you&apos;re humble enough to admit you might
            be wrong.
          </p>
        </section>

        {/* ── Related species ── */}
        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-foreground">
            Species Mentioned in This Article
          </h2>
          <ul className="mt-3 space-y-1 text-sm">
            <li>
              <Link
                href="/mushrooms/amanita-phalloides"
                className="text-primary hover:underline"
              >
                Death Cap (Amanita phalloides)
              </Link>
            </li>
            <li>
              <Link
                href="/mushrooms/amanita-virosa"
                className="text-primary hover:underline"
              >
                Destroying Angel (Amanita virosa)
              </Link>
            </li>
            <li>
              <Link
                href="/mushrooms/galerina-marginata"
                className="text-primary hover:underline"
              >
                Funeral Bell (Galerina marginata)
              </Link>
            </li>
            <li>
              <Link
                href="/mushrooms/gyromitra-esculenta"
                className="text-primary hover:underline"
              >
                False Morel (Gyromitra esculenta)
              </Link>
            </li>
            <li>
              <Link
                href="/mushrooms/amanita-muscaria"
                className="text-primary hover:underline"
              >
                Fly Agaric (Amanita muscaria)
              </Link>
            </li>
          </ul>
        </section>

        {/* ── SEO target queries ── */}
        <section className="mt-10 border-t border-border pt-6">
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            {[
              "mushrooms that can kill you",
              "deadliest mushrooms in the world",
              "death cap mushroom poisoning",
              "mushroom poisoning cases",
              "erin patterson mushroom case",
              "destroying angel mushroom deaths",
              "how does death cap kill you",
              "fatal mushroom poisoning symptoms",
              "most poisonous mushroom in the world",
              "death cap poisoning timeline",
            ].map((q) => (
              <span
                key={q}
                className="text-xs text-muted-foreground"
              >
                #{q.replace(/ /g, "-")}
              </span>
            ))}
          </div>
        </section>
      </article>

      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
