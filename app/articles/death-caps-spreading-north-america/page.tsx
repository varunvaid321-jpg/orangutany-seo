import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Death Caps Are Spreading Across North America",
  description:
    "Amanita phalloides, the world's deadliest mushroom, is an invasive species spreading rapidly across North America. From California to British Columbia, how death caps arrived, why they're expanding, and what foragers need to know.",
  alternates: { canonical: "/articles/death-caps-spreading-north-america" },
  openGraph: {
    title: "Death Caps Are Spreading Across North America",
    description:
      "Amanita phalloides, the world's deadliest mushroom, is an invasive species spreading rapidly across North America. From California to British Columbia, how death caps arrived, why they're expanding, and what foragers need to know.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Death Caps Are Spreading Across North America",
  description:
    "Amanita phalloides is an invasive species spreading rapidly across North America, arriving with imported European trees and now accelerating due to climate change and urban tree planting.",
  author: {
    "@type": "Person",
    name: "Priya Sharma",
  },
  publisher: {
    "@type": "Organization",
    name: "Orangutany",
    url: "https://orangutany.com",
  },
  datePublished: "2026-03-09",
  dateModified: "2026-03-09",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://guide.orangutany.com/articles/death-caps-spreading-north-america",
  },
};

export default function DeathCapsSpreadingNorthAmericaPage() {
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
            Death Caps Are Spreading Across North America
          </h1>
          <p className="mt-2 text-xs text-muted-foreground">
            By{" "}
            <Link
              href="/authors/priya-sharma"
              className="text-primary hover:underline"
            >
              Priya Sharma
            </Link>{" "}
            &middot; Orangutany &middot; March 2026
          </p>
        </header>

        {/* Opening */}
        <section className="mt-10 space-y-4 text-sm leading-relaxed text-foreground/80 sm:text-base sm:leading-relaxed">
          <p className="text-lg leading-relaxed text-foreground/90 sm:text-xl">
            The deadliest mushroom on Earth is not native to North America. But
            it lives here now, and it&apos;s spreading faster than anyone
            predicted.
          </p>
          <p>
            <Link
              href="/mushrooms/amanita-phalloides"
              className="text-primary underline hover:text-primary/80 transition"
            >
              <em>Amanita phalloides</em>
            </Link>
            , commonly known as the death cap, is responsible for more than 90%
            of mushroom-related fatalities worldwide. A single cap contains
            enough amatoxin to kill an adult. It has no taste, no smell, and no
            visual feature that screams &ldquo;danger&rdquo; to the untrained
            eye.
          </p>
          <p>
            For most of the 20th century, death caps in North America were
            confined to a narrow strip of the California coast. That is no
            longer the case. Over the past two decades, confirmed sightings have
            expanded into British Columbia, the Pacific Northwest, the
            mid-Atlantic states, and parts of the Northeast. The mushroom is now
            established on both coasts and appears to be moving inland.
          </p>
          <p>
            This is the story of an invasion in progress &mdash; one that most
            people don&apos;t even know is happening.
          </p>
        </section>

        <figure className="my-8">
          <img
            src="/articles/death-caps-spreading-north-america/01.jpg"
            alt="A mature Amanita phalloides death cap mushroom showing its characteristic greenish-yellow cap and white stem with ring"
            className="w-full rounded-xl"
            loading="lazy"
          />
          <figcaption className="mt-2 text-center text-xs text-muted-foreground">
            A mature Amanita phalloides (death cap) showing its characteristic olive-green cap — responsible for more than 90% of mushroom fatalities worldwide — Photo: Archenzo / Wikimedia Commons (CC BY-SA 3.0)
          </figcaption>
        </figure>

        {/* How Death Caps Arrived */}
        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground sm:text-2xl">
            How Death Caps Arrived in North America
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80 sm:text-base sm:leading-relaxed">
            <p>
              <em>Amanita phalloides</em> is native to Europe, where it has
              coexisted with broadleaf trees for millennia. It forms
              mycorrhizal partnerships &mdash; mutualistic relationships where
              the fungus colonizes tree roots, exchanging soil nutrients for
              sugars produced by the tree through photosynthesis.
            </p>
            <p>
              In Europe, death caps associate primarily with oaks (<em>Quercus</em>{" "}
              species), beeches, chestnuts, and hazels. When European settlers
              began importing these trees to North America in the 18th and 19th
              centuries for landscaping, timber, and ornamental purposes, the
              fungal spores came along, embedded in the root balls and
              surrounding soil.
            </p>
            <p>
              The earliest confirmed North American collections of{" "}
              <em>A. phalloides</em> date to the mid-20th century, primarily
              from the San Francisco Bay Area and the broader California coast.
              The mild, Mediterranean-like climate of coastal California, with
              its wet winters and dry summers, closely mirrors the conditions
              death caps thrive in across southern Europe. The abundant
              plantings of European oaks on university campuses, in city parks,
              and along residential streets gave the fungus exactly what it
              needed.
            </p>
            <p>
              For decades, mycologists treated death caps in California as a
              curiosity &mdash; an introduced species that had naturalized in a
              limited range. That assessment turned out to be dangerously
              optimistic.
            </p>
          </div>
        </section>

        {/* The Mycorrhizal Relationship */}
        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground sm:text-2xl">
            The Mycorrhizal Relationship: Why Oaks Matter
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80 sm:text-base sm:leading-relaxed">
            <p>
              To understand why death caps are spreading, you need to understand
              how they live. <em>Amanita phalloides</em> is an ectomycorrhizal
              fungus. It wraps its hyphae around the fine root tips of host
              trees, forming a sheath called a mantle. Through this interface,
              the fungus delivers phosphorus, nitrogen, and water to the tree.
              In return, the tree feeds the fungus carbon in the form of simple
              sugars.
            </p>
            <p>
              This is not parasitism. Both organisms benefit. But it means the
              fungus cannot survive without a compatible tree host. In Europe,
              death caps partner with dozens of native broadleaf species. In
              North America, the critical finding has been that{" "}
              <em>A. phalloides</em> is not limited to imported European oaks.
              It has jumped to native North American trees.
            </p>
            <p>
              Research published by Anne Pringle and colleagues at the
              University of Wisconsin-Madison demonstrated that death caps in
              California have formed mycorrhizal associations with native coast
              live oaks (<em>Quercus agrifolia</em>), a species that had no
              evolutionary history with the fungus. This was a pivotal
              discovery. It meant death caps were no longer tethered to imported
              trees. They could spread anywhere suitable native oaks grew.
            </p>
            <p>
              Subsequent studies have found death caps associating with
              additional native species, including tanoak (
              <em>Notholithocarpus densiflorus</em>) and possibly some pine
              species. Each new host relationship expands the potential range of
              the invasion.
            </p>
          </div>
        </section>

        <figure className="my-8">
          <img
            src="/articles/death-caps-spreading-north-america/02.jpg"
            alt="Multiple Amanita phalloides death cap mushrooms at various growth stages in a forest setting"
            className="w-full rounded-xl"
            loading="lazy"
          />
          <figcaption className="mt-2 text-center text-xs text-muted-foreground">
            Death caps at various stages of development — young specimens can resemble edible puffballs and paddy straw mushrooms — Photo: George Chernilevsky / Wikimedia Commons (Public Domain)
          </figcaption>
        </figure>

        {/* The Spread */}
        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground sm:text-2xl">
            The Spread: From California to Both Coasts
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80 sm:text-base sm:leading-relaxed">
            <p>
              The expansion of <em>A. phalloides</em> across North America has
              accelerated significantly since the early 2000s. The pattern is
              not uniform &mdash; death caps are appearing in scattered
              locations, often tied to urban areas with planted European trees,
              then establishing and spreading outward.
            </p>

            <div className="rounded-xl border border-border bg-card p-5 space-y-4">
              <h3 className="text-base font-semibold text-foreground">
                California (established since mid-1900s)
              </h3>
              <p>
                The epicenter. Death caps are abundant throughout the San
                Francisco Bay Area, Sacramento, and coastal communities from
                Mendocino County south to Santa Cruz. They fruit prolifically
                under both imported oaks and native coast live oaks during the
                fall and winter rainy season. California accounts for the
                majority of death cap poisonings in North America.
              </p>

              <h3 className="text-base font-semibold text-foreground">
                Pacific Northwest (expanding since 2000s)
              </h3>
              <p>
                Confirmed populations now exist in Oregon&apos;s Willamette
                Valley, the Portland metro area, and parts of Washington state.
                The Pacific Northwest&apos;s wet climate and abundant oak and
                hazel plantings provide ideal habitat. British Columbia has
                reported death caps in the Greater Vancouver area and on
                Vancouver Island, with the first confirmed Canadian specimens
                documented in the early 2000s.
              </p>

              <h3 className="text-base font-semibold text-foreground">
                Eastern Seaboard (emerging since 2010s)
              </h3>
              <p>
                This is the front that concerns mycologists most. Death caps
                have been confirmed in New Jersey, New York, Pennsylvania, and
                parts of New England. The eastern populations appear to be
                independent introductions, likely through imported nursery stock
                from Europe. The abundance of native oaks across the eastern
                deciduous forest provides an enormous amount of potential
                habitat.
              </p>

              <h3 className="text-base font-semibold text-foreground">
                Mid-Atlantic and Southeast (early reports)
              </h3>
              <p>
                Scattered reports from Maryland, Virginia, and the Carolinas
                are under investigation. Not all have been genetically
                confirmed, but the trajectory suggests continued southward and
                inland expansion along the eastern seaboard.
              </p>
            </div>
          </div>
        </section>

        {/* Why the Spread Is Accelerating */}
        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground sm:text-2xl">
            Why the Spread Is Accelerating
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80 sm:text-base sm:leading-relaxed">
            <p>
              Several factors are driving the expansion of death caps beyond
              their initial footholds.
            </p>
            <p>
              <strong>Urban tree planting.</strong> Cities across North America
              continue to plant European oaks, beeches, and hornbeams for their
              aesthetic qualities and shade coverage. Nursery stock often comes
              with soil that may harbor fungal spores or colonized root
              fragments. Every European oak planted in a new park or streetscape
              is a potential beachhead for <em>A. phalloides</em>.
            </p>
            <p>
              <strong>Climate change.</strong> Warmer winters and shifting
              precipitation patterns are expanding the climate envelope where
              death caps can fruit. Areas that were previously too cold or too
              dry are becoming suitable. The Pacific Northwest, which has seen
              warmer and wetter autumns, is a prime example of a region where
              climate change is facilitating fungal expansion.
            </p>
            <p>
              <strong>Host jumping.</strong> As noted above, the ability of
              death caps to form mycorrhizal relationships with native North
              American trees removes the biggest constraint on their spread.
              They are no longer limited to the footprint of imported European
              trees. Native oaks span the continent.
            </p>
            <p>
              <strong>Spore dispersal.</strong> Death caps produce billions of
              spores per fruiting body. These spores are carried by wind, water,
              and animal activity. Once a population establishes in a park or
              garden, spores can disperse to nearby wooded areas and colonize
              native tree roots. The spread from urban plantings into native
              forests has already been documented in California.
            </p>
          </div>
        </section>

        {/* Native Wildlife Isn't Adapted */}
        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground sm:text-2xl">
            Why Native Wildlife Isn&apos;t Adapted
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80 sm:text-base sm:leading-relaxed">
            <p>
              In Europe, certain animals have evolved tolerances to amatoxins.
              Some European slug species, for instance, readily consume death
              caps without apparent harm. Squirrels and deer in European forests
              have long coexisted with the mushroom.
            </p>
            <p>
              North American wildlife has no such history. Dogs are particularly
              vulnerable &mdash; veterinary poisoning cases from death caps have
              risen sharply in California, the Pacific Northwest, and British
              Columbia. Dogs are attracted to the faintly sweet smell of young
              death caps and may consume them during walks in parks and wooded
              areas.
            </p>
            <p>
              The ecological impact on native invertebrates and small mammals
              is not yet well studied, but the introduction of a highly toxic
              fungal species into ecosystems that evolved without it raises
              obvious concerns. Death caps may also be competing with native
              mycorrhizal fungi for root space on native trees, potentially
              displacing beneficial species that have coevolved with North
              American forests.
            </p>
          </div>
        </section>

        {/* California 2025 */}
        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground sm:text-2xl">
            The California Poisoning Crisis
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80 sm:text-base sm:leading-relaxed">
            <p>
              California remains the epicenter of death cap poisonings in North
              America. The state sees cases every year, concentrated in the Bay
              Area during the November through February fruiting season.
            </p>
            <p>
              The 2024&ndash;2025 season was particularly severe. Heavy rains
              following drought years triggered prolific fruiting, and emergency
              rooms across the Bay Area reported multiple amatoxin poisoning
              cases. The California Poison Control System issued repeated
              public warnings, and several Bay Area counties launched
              multilingual awareness campaigns targeting communities where wild
              mushroom foraging is culturally common.
            </p>
            <p>
              A recurring and tragic pattern drives many of these cases.
              Immigrants from Southeast Asia, particularly from Laos, Vietnam,
              and Cambodia, mistake death caps for{" "}
              <Link
                href="/mushrooms/volvariella-volvacea"
                className="text-primary underline hover:text-primary/80 transition"
              >
                paddy straw mushrooms (<em>Volvariella volvacea</em>)
              </Link>
              , an edible species widely consumed in their home countries. The
              resemblance between young death caps and paddy straw mushrooms is
              striking &mdash; both emerge from a volval sac, both have white
              gills, and both can appear in grassy areas near trees.
            </p>
            <p>
              In their home countries, <em>Amanita phalloides</em> does not
              exist. The foraging knowledge that kept them safe for generations
              becomes deadly in a new environment. This is not ignorance
              &mdash; it is a collision between deeply held cultural knowledge
              and an invasive species that doesn&apos;t belong here.
            </p>
          </div>
        </section>

        {/* Comparison to Australia */}
        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground sm:text-2xl">
            Parallels with Australia&apos;s Death Cap Invasion
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80 sm:text-base sm:leading-relaxed">
            <p>
              North America is not the only continent dealing with an
              <em> A. phalloides</em> invasion. Australia has been fighting the
              same battle for over a century, and the parallels are instructive.
            </p>
            <p>
              Death caps arrived in Australia in the 1800s on the roots of
              European oaks imported during British colonization. They
              established in Melbourne, Canberra, and Adelaide, and now fruit
              reliably every autumn. Australia has seen numerous fatal
              poisonings, including the high-profile{" "}
              <Link
                href="/articles/australian-mushroom-poisoning"
                className="text-primary underline hover:text-primary/80 transition"
              >
                2023 Leongatha case
              </Link>{" "}
              in which three people died after being served death caps at a
              family lunch.
            </p>
            <p>
              Like North America, Australia&apos;s death cap problem is
              exacerbated by the mushroom&apos;s resemblance to edible species
              familiar to immigrant communities. And like North America, the
              fungus appears to be expanding its range into native Australian
              ecosystems, forming new mycorrhizal relationships with native
              trees.
            </p>
            <p>
              The lesson from Australia is sobering: once established, death
              caps are essentially impossible to eradicate. The mycelial network
              lives underground, intertwined with tree roots, and can persist
              for decades. The only defense is awareness.
            </p>
          </div>
        </section>

        {/* What Regions Should Expect Next */}
        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground sm:text-2xl">
            What Regions Should Expect Death Caps Next
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80 sm:text-base sm:leading-relaxed">
            <p>
              Based on current distribution trends, climate modeling, and the
              availability of host trees, mycologists have identified several
              regions at high risk for death cap establishment in the coming
              decades.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>The Ohio and Mississippi River valleys:</strong> Rich
                in native oaks, with a climate that increasingly resembles the
                temperate conditions death caps prefer.
              </li>
              <li>
                <strong>The upper Midwest:</strong> University campuses and
                urban parks with European tree plantings could serve as
                introduction points, with native oak forests nearby.
              </li>
              <li>
                <strong>The Southeast:</strong> Georgia, the Carolinas, and
                Tennessee have extensive oak forests and warming winters that
                may become suitable for death cap fruiting.
              </li>
              <li>
                <strong>Interior British Columbia and Alberta:</strong> As
                climate warms and the fungus establishes on the BC coast,
                inland spread through forest corridors is possible.
              </li>
            </ul>
            <p>
              The critical variable is not just climate but the presence of
              mycorrhizal host trees. Since <em>A. phalloides</em> has
              demonstrated the ability to colonize native North American oaks,
              virtually any temperate region with oak forests is potentially
              vulnerable.
            </p>
          </div>
        </section>

        <figure className="my-8">
          <img
            src="/articles/death-caps-spreading-north-america/03.jpg"
            alt="Amanita phalloides death cap mushroom showing the cup-shaped volva at the base of the stem"
            className="w-full rounded-xl"
            loading="lazy"
          />
          <figcaption className="mt-2 text-center text-xs text-muted-foreground">
            An Amanita phalloides specimen showing the volva (cup-shaped sac) at the base — the single most important identification feature — Photo: Justin Pierce / Mushroom Observer / Wikimedia Commons (CC BY-SA 3.0)
          </figcaption>
        </figure>

        {/* How to Identify */}
        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground sm:text-2xl">
            How to Identify a Death Cap
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80 sm:text-base sm:leading-relaxed">
            <p>
              Identification is the first line of defense. Death caps have
              several distinguishing features, though no single feature is
              diagnostic on its own.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Cap:</strong> 5&ndash;15 cm across, typically
                greenish-yellow to olive, sometimes pale white or brownish.
                Smooth and slightly sticky when wet. The color can vary
                significantly, which is part of what makes identification
                difficult.
              </li>
              <li>
                <strong>Gills:</strong> White, crowded, and free (not attached
                to the stem). They remain white even as the mushroom matures,
                unlike many look-alikes whose gills darken with age.
              </li>
              <li>
                <strong>Stem:</strong> White with faint greenish-yellow tones,
                5&ndash;15 cm tall, with a thin skirt-like ring (annulus) on
                the upper portion.
              </li>
              <li>
                <strong>Volva:</strong> This is the most important feature. The
                base of the stem is enclosed in a cup-shaped sac (volva) that
                is often buried underground. You must dig around the base of the
                mushroom to see it. Many misidentifications happen because
                foragers cut the stem at ground level and miss the volva
                entirely.
              </li>
              <li>
                <strong>Spore print:</strong> White.
              </li>
              <li>
                <strong>Smell:</strong> Faintly sweet or honey-like when young,
                becoming sickly and unpleasant as the mushroom ages.
              </li>
              <li>
                <strong>Habitat:</strong> Under oaks, beeches, and other
                broadleaf trees, often in parks, gardens, and urban areas in
                North America.
              </li>
            </ul>
            <p>
              Death caps can be confused with several edible species. Young
              specimens still enclosed in their universal veil can resemble
              puffballs.{" "}
              <Link
                href="/mushrooms/agaricus-campestris"
                className="text-primary underline hover:text-primary/80 transition"
              >
                Field mushrooms (<em>Agaricus campestris</em>)
              </Link>{" "}
              share a similar overall shape, though their gills turn pink then
              brown with maturity. The{" "}
              <Link
                href="/mushrooms/volvariella-volvacea"
                className="text-primary underline hover:text-primary/80 transition"
              >
                paddy straw mushroom
              </Link>{" "}
              confusion has already claimed lives.
            </p>
            <p>
              Related deadly species in North America include the{" "}
              <Link
                href="/mushrooms/amanita-virosa"
                className="text-primary underline hover:text-primary/80 transition"
              >
                destroying angel (<em>Amanita virosa</em>)
              </Link>
              , which is all-white and carries the same lethal amatoxins, and{" "}
              <Link
                href="/mushrooms/galerina-marginata"
                className="text-primary underline hover:text-primary/80 transition"
              >
                <em>Galerina marginata</em>
              </Link>
              , a small brown mushroom that grows on decaying wood and also
              produces amatoxins.
            </p>
            <p>
              For a complete identification guide, see our{" "}
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

        {/* Prevention for Foragers */}
        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground sm:text-2xl">
            Prevention for Foragers
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80 sm:text-base sm:leading-relaxed">
            <p>
              The most effective prevention is simple: never eat a wild mushroom
              unless you are absolutely certain of the identification. With
              death caps, there is no margin for error.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Always dig up the entire mushroom.</strong> The volva at
                the base is the single most important identification feature for
                death caps. Cutting at ground level can cause you to miss it.
              </li>
              <li>
                <strong>
                  Do not rely on a single identification feature.
                </strong>{" "}
                Confirm cap color, gill attachment, spore print, presence of a
                ring, and presence of a volva before considering any white-
                gilled mushroom safe to eat.
              </li>
              <li>
                <strong>Be especially cautious under oak trees.</strong> In
                North America, any white-gilled mushroom fruiting near oaks
                should be treated with suspicion until positively identified.
              </li>
              <li>
                <strong>Do not assume cooking destroys the toxins.</strong>{" "}
                Amatoxins are heat-stable. Boiling, frying, drying, and
                freezing do not reduce their toxicity.
              </li>
              <li>
                <strong>Seek immediate medical attention</strong> if you
                experience gastrointestinal symptoms 6&ndash;12 hours after
                eating wild mushrooms. The delayed onset is a hallmark of
                amatoxin poisoning and distinguishes it from less dangerous
                types of mushroom illness.
              </li>
            </ul>
          </div>
        </section>

        {/* Closing */}
        <section className="mt-10 space-y-4 text-sm leading-relaxed text-foreground/80 sm:text-base sm:leading-relaxed">
          <p>
            The death cap invasion of North America is not a future threat. It
            is happening now, and it is accelerating. Every year the range
            expands. Every year new poisonings are reported in areas where death
            caps were previously unknown.
          </p>
          <p>
            Unlike many invasive species, death caps cannot be sprayed,
            trapped, or culled. The mycelium lives underground, intertwined with
            the roots of trees, invisible and persistent. Once a population
            establishes, it is there to stay.
          </p>
          <p>
            The only real defense is knowledge: knowing what death caps look
            like, knowing where they grow, and knowing that the safe-looking
            mushroom under the oak tree in your local park may be the most
            dangerous organism in the forest. North America is learning a lesson
            that Europe has known for centuries and that Australia learned the
            hard way: wherever there are oaks, there may be death caps. And
            death caps kill.
          </p>
        </section>
      </article>
    </>
  );
}
