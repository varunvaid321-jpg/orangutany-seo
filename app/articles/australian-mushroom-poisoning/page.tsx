import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "The Mushroom That Killed a Family in Australia: The Erin Patterson Case",
  description:
    "The full story of the 2023 Leongatha mushroom poisoning. How Erin Patterson served death cap mushrooms to her former in-laws, killing three. Timeline, investigation, and how Amanita phalloides kills.",
  alternates: { canonical: "/articles/australian-mushroom-poisoning" },
  openGraph: {
    title:
      "The Mushroom That Killed a Family in Australia: The Erin Patterson Case",
    description:
      "The full story of the 2023 Leongatha mushroom poisoning. How Erin Patterson served death cap mushrooms to her former in-laws, killing three. Timeline, investigation, and how Amanita phalloides kills.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "The Mushroom That Killed a Family in Australia: The Erin Patterson Case",
  description:
    "The full story of the 2023 Leongatha mushroom poisoning. How Erin Patterson served death cap mushrooms to her former in-laws, killing three.",
  author: {
    "@type": "Person",
    name: "Sofia Andersson",
  },
  publisher: {
    "@type": "Organization",
    name: "Orangutany",
    url: "https://orangutany.com",
  },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://orangutany.com/articles/australian-mushroom-poisoning",
  },
};

export default function AustralianMushroomPoisoningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-4xl px-6 py-10">
        {/* Header */}
        <header>
          <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground sm:text-3xl md:text-4xl leading-tight">
            The Mushroom That Killed a Family in Australia. The Erin Patterson
            Case
          </h1>
          <p className="mt-2 text-xs text-muted-foreground">
            By{" "}
            <Link href="/authors/sofia-andersson" className="text-primary hover:underline">
              Sofia Andersson
            </Link>{" "}
            &middot; Orangutany &middot; January 2025
          </p>
        </header>

        {/* Opening */}
        <section className="mt-10 space-y-4 text-sm leading-relaxed text-foreground/80 sm:text-base sm:leading-relaxed">
          <p className="text-lg leading-relaxed text-foreground/90 sm:text-xl">
            On July 29, 2023, Erin Patterson invited her former in-laws to lunch
            at her home in Leongatha, a quiet town in rural Victoria, Australia.
            She served beef wellington. By August 4th, three of her four guests
            were dead.
          </p>
          <p>
            The case would become the most widely reported mushroom poisoning in
            modern history. It drew international media attention, revived
            questions about foraging safety in Australia, and put a single
            species at the center of it all:{" "}
            <Link
              href="/mushrooms/amanita-phalloides"
              className="text-primary underline hover:text-primary/80 transition"
            >
              <em>Amanita phalloides</em>
            </Link>
            , the death cap mushroom.
          </p>

          {/* TODO: photo */}

          <p>
            This is the full story: what happened at that lunch, how the
            mushroom kills, and why death caps are growing across Australia in
            the first place.
          </p>
        </section>

        {/* The Lunch */}
        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground sm:text-2xl">
            The Lunch
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80 sm:text-base sm:leading-relaxed">
            <p>
              Erin Patterson, 49 at the time, had separated from her husband
              Simon Patterson. Despite the separation, she maintained a
              relationship with his parents. Gail and Don Patterson, both in
              their 70s. She invited them to lunch at her home on Korumburra–
              Wonthaggi Road.
            </p>
            <p>
              Gail&apos;s sister, Heather Wilkinson, and Heather&apos;s husband
              Ian also attended. Four guests in total. Erin and her two children
              were present as well, but reportedly ate from a separate dish.
            </p>
            <p>
              The main course was beef wellington, pastry-wrapped beef with a
              mushroom filling. It was, by all accounts, a normal family lunch.
            </p>
            <p>What happened next would change everything.</p>
          </div>
        </section>

        {/* The Timeline */}
        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground sm:text-2xl">
            The Timeline
          </h2>
          <div className="mt-4 space-y-1">
            {[
              {
                date: "July 29, 2023",
                event: "Lunch served at Erin Patterson's home in Leongatha",
              },
              {
                date: "July 30",
                event:
                  "All four guests hospitalized with severe nausea, vomiting, and diarrhea",
              },
              { date: "August 1", event: "Gail Patterson dies" },
              { date: "August 2", event: "Don Patterson dies" },
              { date: "August 4", event: "Heather Wilkinson dies" },
              {
                date: "Weeks later",
                event:
                  "Ian Wilkinson, after extended ICU stay, receives a liver transplant. He survives.",
              },
            ].map((item) => (
              <div
                key={item.date}
                className="flex gap-4 rounded-lg border border-border bg-card px-4 py-3"
              >
                <span className="w-32 flex-shrink-0 text-sm font-semibold text-foreground">
                  {item.date}
                </span>
                <span className="text-sm text-foreground/80">{item.event}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80 sm:text-base sm:leading-relaxed">
            <p>
              Three people dead within a week. A fourth clinging to life in
              intensive care. All from a single meal.
            </p>
            <p>
              Ian Wilkinson&apos;s survival was remarkable. His liver had been
              destroyed by the toxins, and he spent weeks on life support before
              a transplant donor was found. He was discharged from the hospital
              months later.
            </p>
          </div>
        </section>

        {/* The Mushroom */}
        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground sm:text-2xl">
            The Mushroom: How the Death Cap Kills
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80 sm:text-base sm:leading-relaxed">
            <p>
              The{" "}
              <Link
                href="/mushrooms/amanita-phalloides"
                className="text-primary underline hover:text-primary/80 transition"
              >
                death cap (<em>Amanita phalloides</em>)
              </Link>{" "}
              is responsible for more than 90% of mushroom-related deaths
              worldwide. It contains amatoxins, specifically alpha-amanitin, 
              which attack the liver at a cellular level by inhibiting RNA
              polymerase II, an enzyme essential for protein synthesis.
            </p>
            <p>
              What makes death cap poisoning so devastating is the timeline. It
              unfolds in three distinct phases, and by the time most people seek
              medical help, the damage is already done.
            </p>

            {/* TODO: photo */}

            <div className="rounded-xl border border-border bg-card p-5 space-y-4">
              <h3 className="text-base font-semibold text-foreground">
                Phase 1: The Latent Period (6–12 hours)
              </h3>
              <p>
                Nothing happens. The person feels fine. This delay is one of the
                most dangerous features of amatoxin poisoning; other types of
                food poisoning hit within 1–2 hours, so a 6-hour gap lulls
                victims into thinking the meal was safe. Meanwhile, the toxins
                are being absorbed by the gut and transported to the liver.
              </p>

              <h3 className="text-base font-semibold text-foreground">
                Phase 2: The Gastrointestinal Phase (12–36 hours)
              </h3>
              <p>
                Violent vomiting, diarrhea, and abdominal cramps. This looks
                like severe food poisoning and is often treated as such in
                emergency rooms. Many patients are rehydrated and sent home.
              </p>

              <h3 className="text-base font-semibold text-foreground">
                Phase 3: The False Recovery &amp; Liver Failure (36–72+ hours)
              </h3>
              <p>
                The GI symptoms subside. The patient feels better. This is the
                cruelest stage. Beneath the surface, amatoxins are systematically
                destroying hepatocytes (liver cells). Within days, liver function
                collapses. Jaundice sets in. Kidney failure follows. Without a
                liver transplant, death typically occurs within 6–16 days of
                ingestion.
              </p>
            </div>

            <p className="font-medium text-foreground/90">
              This is what makes amatoxin poisoning so insidious: the body
              appears to recover just as the real damage begins.
            </p>
            <p>
              There is no antidote. Treatment is supportive: IV fluids,
              activated charcoal if caught early, silibinin (an extract from milk
              thistle) in some protocols, and ultimately liver transplantation if
              the organ fails. The mortality rate for untreated death cap
              poisoning is estimated at 50–90% (
              <a
                href="https://www.ncbi.nlm.nih.gov/books/NBK431052/"
                className="text-primary underline hover:text-primary/80 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                NCBI: Amatoxin Toxicity
              </a>
              ).
            </p>
          </div>
        </section>

        {/* The Investigation */}
        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground sm:text-2xl">
            The Investigation
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80 sm:text-base sm:leading-relaxed">
            <p>
              Victoria Police launched a homicide investigation almost
              immediately. The speed and severity of the symptoms, combined with
              the fact that that Erin and her children were unharmed, raised
              suspicion from the start.
            </p>
            <p>
              Erin Patterson initially told investigators she had purchased
              mushrooms from an Asian grocery store in Melbourne. She later
              changed her account, saying she had foraged the mushrooms from a
              local area near Leongatha.
            </p>
            <p>
              Then came a critical piece of evidence. A food dehydrator was found
              at a local tip (an Australian term for a rubbish dump) that Erin
              had discarded after the lunch. Forensic testing found the
              dehydrator contained traces of amatoxins, consistent with death cap
              mushrooms having been dried in it.
            </p>

            {/* TODO: photo */}

            <p>
              In November 2023, Erin Patterson was arrested and charged with
              three counts of murder and five counts of attempted murder. She
              pleaded not guilty.
            </p>
            <p>
              On July 7, 2025, a jury found Erin Patterson{" "}
              <a
                href="https://www.abc.net.au/news/2025-07-07/erin-patterson-guilty-murder-verdict-death-cap-mushroom-lunch/105458058"
                className="text-primary underline hover:text-primary/80 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                guilty of three counts of murder
              </a>{" "}
              and five counts of attempted murder. On September 8, 2025, she
              was{" "}
              <a
                href="https://www.abc.net.au/news/2025-09-08/mushroom-murderer-erin-patterson-sentenced-to-life-in-prison/105735360"
                className="text-primary underline hover:text-primary/80 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                sentenced to life imprisonment
              </a>
              .
            </p>
            <p>
              The case drew intense media scrutiny, both in Australia and
              internationally. The verdict confirmed what the evidence had
              strongly suggested: this was deliberate poisoning, not a
              foraging accident.
            </p>
          </div>
        </section>

        {/* Why Death Caps Grow in Australia */}
        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground sm:text-2xl">
            Why Death Caps Grow in Australia
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80 sm:text-base sm:leading-relaxed">
            <p>
              <em>Amanita phalloides</em> is not native to Australia. It arrived
              in the 1800s, hitchhiking on the root systems of European oak
              trees imported during colonization. The mushroom forms mycorrhizal
              relationships with oaks (it lives on and around their roots), and
              wherever European oaks were planted, death caps followed.
            </p>
            <p>
              Today, death caps are established in Melbourne, Canberra, Adelaide,
              and parts of regional Victoria and the ACT. They fruit in autumn
              (March–May in the Southern Hemisphere) and are most commonly found
              under oak trees in parks, gardens, and urban streetscapes.
            </p>
            <p>
              The problem is compounded by a dangerous resemblance. Death caps
              look remarkably similar to paddy straw mushrooms (
              <em>Volvariella volvacea</em>), a popular edible species in
              Southeast Asian cooking. This has led to a pattern of poisonings
              among Asian-Australian communities, particularly people who forage
              based on knowledge from their home countries where{" "}
              <em>Amanita phalloides</em> does not exist.
            </p>
            <p>
              In 2014, a New Year&apos;s Eve dinner in Canberra turned fatal
              when a guest served foraged mushrooms that turned out to be death
              caps. Two people died. It was one of several incidents that
              prompted{" "}
              <a
                href="https://www.health.vic.gov.au/food-safety/death-cap-mushrooms"
                className="text-primary underline hover:text-primary/80 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                public health warnings
              </a>{" "}
              across the ACT and Victoria.
            </p>
            <p>
              Related species like the{" "}
              <Link
                href="/mushrooms/amanita-virosa"
                className="text-primary underline hover:text-primary/80 transition"
              >
                destroying angel (<em>Amanita virosa</em>)
              </Link>{" "}
              carry the same amatoxins and pose similar risks in temperate
              regions worldwide.
            </p>
          </div>
        </section>

        {/* How to Identify */}
        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground sm:text-2xl">
            How to Identify a Death Cap
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80 sm:text-base sm:leading-relaxed">
            <p>
              The death cap has several distinguishing features, though none
              should be relied upon individually. Always use a combination of
              characteristics:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Cap:</strong> 5–15 cm, greenish-yellow to olive-green,
                sometimes pale white. Smooth, slightly sticky when wet.
              </li>
              <li>
                <strong>Gills:</strong> White, free (not attached to the stem),
                closely spaced.
              </li>
              <li>
                <strong>Ring (annulus):</strong> A thin, skirt-like ring on the
                upper stem, often fragile.
              </li>
              <li>
                <strong>Base:</strong> Bulbous, enclosed in a cup-shaped volva
                (sac) that is often buried in soil. This is the single most
                important identification feature.
              </li>
              <li>
                <strong>Spore print:</strong> White.
              </li>
              <li>
                <strong>Smell:</strong> Faintly sweet or honey-like when young,
                becoming unpleasant as the mushroom ages.
              </li>
            </ul>

            {/* TODO: photo */}

            <p>
              For a complete identification guide with images, see our{" "}
              <Link
                href="/mushrooms/amanita-phalloides"
                className="text-primary underline hover:text-primary/80 transition"
              >
                death cap species page
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Closing */}
        <section className="mt-10 space-y-4 text-sm leading-relaxed text-foreground/80 sm:text-base sm:leading-relaxed">
          <p>
            The Leongatha case became the most high-profile mushroom poisoning in
            modern history. But it&apos;s not an isolated event. Death caps kill
            people in Australia every year, most of them foragers who
            didn&apos;t know what they were picking.
          </p>
          <p>
            Victoria&apos;s Department of Health issues warnings every autumn.
            Poisons hotlines see a spike in calls each year between March and
            May. And yet people keep eating wild mushrooms they can&apos;t
            identify, because the death cap looks so ordinary, so much like
            something you&apos;d buy at a market.
          </p>
          <p>
            That&apos;s the lesson of the death cap. It doesn&apos;t look
            dangerous. It doesn&apos;t taste dangerous. It doesn&apos;t even
            make you sick right away. By the time you know something is wrong,
            your liver is already failing.
          </p>
        </section>

        {/* SEO queries in metadata only */}
      </article>
    </>
  );
}
