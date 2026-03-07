import type { Metadata } from "next";
import Link from "next/link";

const title = "Mushroom Foraging by Season: What to Find Each Month";
const description =
  "A month-by-month guide to mushroom foraging in the Northern Hemisphere. Learn when morels, chanterelles, porcini, and other species fruit, and where to find them.";
const url = "/guides/mushroom-foraging-by-season";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url,
    siteName: "Orangutany",
    type: "article",
    publishedTime: "2026-03-06T00:00:00Z",
    authors: ["Priya Sharma"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  alternates: {
    canonical: url,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  author: {
    "@type": "Person",
    name: "Priya Sharma",
  },
  publisher: {
    "@type": "Organization",
    name: "Orangutany",
    url: "https://orangutany.com",
  },
  datePublished: "2026-03-06",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": url,
  },
};

const seoQueries = [
  "mushroom foraging by season",
  "what mushrooms grow in spring",
  "fall mushroom foraging",
  "when is morel season",
  "best month for mushroom foraging",
  "mushroom season calendar",
  "when do chanterelles grow",
  "winter mushroom foraging",
  "September mushroom hunting",
  "mushroom foraging guide by month",
  "when to find porcini mushrooms",
];

export default function MushroomForagingBySeasonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-background text-foreground">
        <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-12">
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              By Priya Sharma &middot; March 2026
            </p>
          </header>

          {/* TODO: photo. hero image, seasonal mushroom collage or a forest floor with mixed species in autumn light */}

          {/* Opening */}
          <section className="mb-12">
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                One of the first things you learn as a forager is that timing is
                everything. Show up two weeks early and there&rsquo;s nothing.
                Two weeks late and the slugs got there first. Mushrooms
                don&rsquo;t care about your schedule,they fruit when
                conditions are right, and your job is to be there when it
                happens.
              </p>
              <p>
                Here&rsquo;s a month-by-month breakdown of what to look for,
                where, and when,mostly for North America and Europe, but
                the general patterns hold across the Northern Hemisphere. Think
                of this as your foraging calendar. Pin it to your fridge.
              </p>
            </div>
          </section>

          {/* ============ SPRING ============ */}
          <section className="mb-12">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              Spring (March &ndash; May)
            </h2>

            {/* March */}
            <div className="mt-6 rounded-lg border border-border bg-card p-6 sm:p-8">
              <h3 className="font-heading text-xl font-semibold">March</h3>

              {/* TODO: photo. scarlet elf cups on mossy sticks in early spring woodland, still-bare branches overhead */}

              <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Still cold in most places, and there&rsquo;s not a lot
                  happening. But if you know where to look, scarlet elf cups
                  (Sarcoscypha) are showing up in damp woodland,little
                  bright red cups sitting on mossy sticks and fallen branches.
                  They&rsquo;re gorgeous but not great eating. More of a
                  &ldquo;oh, spring is coming&rdquo; signal than a meal.
                </p>
                <p>
                  Wood ear mushrooms on elder trees are also fruiting now, and
                  those actually are worth collecting,they rehydrate
                  beautifully in soups and stir-fries. March is the month of
                  patience. The forest is waking up, but slowly.
                </p>
              </div>
            </div>

            {/* April */}
            <div className="mt-6 rounded-lg border border-border bg-card p-6 sm:p-8">
              <h3 className="font-heading text-xl font-semibold">April</h3>

              {/* TODO: photo. morels emerging from river-bottom soil among fallen cottonwood leaves, warm spring light */}

              <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  This is when morel season begins and the morel hunters lose
                  their minds.{" "}
                  <Link
                    href="/mushrooms/morchella-esculenta"
                    className="text-foreground underline decoration-muted-foreground/30 hover:decoration-foreground"
                  >
                    Morchella esculenta
                  </Link>{" "}
                 ,the yellow morel,starts popping up in river
                  bottoms, old orchards, and the edges of deciduous forests.
                  Burn morels appear in areas that had wildfires the previous
                  year, sometimes in absurd quantities.
                </p>
                <p>
                  The trigger is soil temperature hitting around 50&deg;F.
                  Serious morel hunters carry soil thermometers. That&rsquo;s
                  not a joke. In Europe, late April also brings St.
                  George&rsquo;s mushroom (Calocybe gambosa) in pastures and
                  hedgerows,a solid, meaty mushroom that smells like
                  fresh meal.
                </p>
              </div>
            </div>

            {/* May */}
            <div className="mt-6 rounded-lg border border-border bg-card p-6 sm:p-8">
              <h3 className="font-heading text-xl font-semibold">May</h3>

              {/* TODO: photo. peak morel flush in a northern hardwood forest, dryad's saddle visible on a dead elm in the background */}

              <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Peak morel season in the northern US and Canada. If you
                  haven&rsquo;t found yours yet, now&rsquo;s the time,
                  the window is closing. Dryad&rsquo;s saddle (also called
                  pheasant back) starts appearing on dead elms and other
                  hardwoods. It&rsquo;s best when very young and the edges are
                  still tender.
                </p>
                <p>
                  In the southern states,{" "}
                  <Link
                    href="/mushrooms/laetiporus-sulphureus"
                    className="text-foreground underline decoration-muted-foreground/30 hover:decoration-foreground"
                  >
                    chicken of the woods
                  </Link>{" "}
                  is already fruiting on oaks and other hardwoods. Bright orange
                  shelves on a dead tree,you can&rsquo;t miss it.
                </p>
              </div>
            </div>
          </section>

          {/* ============ SUMMER ============ */}
          <section className="mb-12">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              Summer (June &ndash; August)
            </h2>

            {/* June */}
            <div className="mt-6 rounded-lg border border-border bg-card p-6 sm:p-8">
              <h3 className="font-heading text-xl font-semibold">June</h3>

              {/* TODO: photo. early chanterelles in a southeastern US hardwood forest, dappled light, Spanish moss visible */}

              <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  June is the month foragers start checking their spots.{" "}
                  <Link
                    href="/mushrooms/cantharellus-cibarius"
                    className="text-foreground underline decoration-muted-foreground/30 hover:decoration-foreground"
                  >
                    Chanterelles
                  </Link>{" "}
                  begin appearing in the southeast US and southern Europe,
                  golden, funnel-shaped, smelling faintly of apricots.
                  They&rsquo;re mycorrhizal, which means they form partnerships
                  with living trees, so they come back in the same spots year
                  after year. For identification help, see <a href="https://www.mushroomexpert.com" className="text-primary underline hover:text-primary/80 transition" target="_blank" rel="noopener noreferrer">MushroomExpert.com</a>.
                </p>
                <p>
                  Early chicken of the woods is also going strong now. If you
                  forage in hardwood forests, bring a bag,June can
                  surprise you.
                </p>
              </div>
            </div>

            {/* July */}
            <div className="mt-6 rounded-lg border border-border bg-card p-6 sm:p-8">
              <h3 className="font-heading text-xl font-semibold">July</h3>

              {/* TODO: photo. peak chanterelle harvest in a basket, black trumpets beside them, Pacific Northwest forest floor */}

              <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Peak chanterelle season across most of the Northern
                  Hemisphere.{" "}
                  <Link
                    href="/mushrooms/craterellus-cornucopioides"
                    className="text-foreground underline decoration-muted-foreground/30 hover:decoration-foreground"
                  >
                    Black trumpets
                  </Link>{" "}
                  are hiding in the leaf litter now too,they&rsquo;re
                  almost impossible to see until your eye learns the pattern, and
                  then suddenly you see them everywhere.
                </p>
                <p>
                  Lobster mushrooms show up in the Pacific Northwest, which are
                  actually a parasitic fungus that colonizes another mushroom and
                  turns it bright red. In Europe, summer{" "}
                  <Link
                    href="/mushrooms/boletus-edulis"
                    className="text-foreground underline decoration-muted-foreground/30 hover:decoration-foreground"
                  >
                    porcini
                  </Link>{" "}
                  are in season. July is a good month.
                </p>
              </div>
            </div>

            {/* August */}
            <div className="mt-6 rounded-lg border border-border bg-card p-6 sm:p-8">
              <h3 className="font-heading text-xl font-semibold">August</h3>

              {/* TODO: photo. giant puffball in a meadow next to a parasol mushroom, late summer golden hour */}

              <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  August is abundance month. Late chanterelles are still going.{" "}
                  <Link
                    href="/mushrooms/grifola-frondosa"
                    className="text-foreground underline decoration-muted-foreground/30 hover:decoration-foreground"
                  >
                    Hen of the woods (maitake)
                  </Link>{" "}
                  starts showing up at the base of oaks in late August,
                  massive, layered clusters that can weigh 10+ pounds.
                </p>
                <p>
                  In European meadows,{" "}
                  <Link
                    href="/mushrooms/macrolepiota-procera"
                    className="text-foreground underline decoration-muted-foreground/30 hover:decoration-foreground"
                  >
                    parasol mushrooms
                  </Link>{" "}
                  are standing tall in the grass, and{" "}
                  <Link
                    href="/mushrooms/calvatia-gigantea"
                    className="text-foreground underline decoration-muted-foreground/30 hover:decoration-foreground"
                  >
                    giant puffballs
                  </Link>{" "}
                  the size of footballs are appearing in fields and along
                  hedgerows. If you&rsquo;ve never sliced a giant puffball into
                  steaks and fried them in butter, you&rsquo;re missing out.
                </p>
              </div>
            </div>
          </section>

          {/* ============ FALL ============ */}
          <section className="mb-12">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              Fall (September &ndash; November)
            </h2>

            {/* September */}
            <div className="mt-6 rounded-lg border border-border bg-card p-6 sm:p-8">
              <h3 className="font-heading text-xl font-semibold">September</h3>

              {/* TODO: photo. porcini and matsutake side by side on a mossy log, golden fall light filtering through conifers */}

              <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  If you only forage one month a year, make it September. This
                  is the best month, full stop.{" "}
                  <Link
                    href="/mushrooms/boletus-edulis"
                    className="text-foreground underline decoration-muted-foreground/30 hover:decoration-foreground"
                  >
                    Porcini (king boletes)
                  </Link>{" "}
                  are at their peak,fat, firm, and hiding under spruce
                  and pine in the mountains. Hen of the woods is peaking too.
                </p>
                <p>
                  In the Pacific Northwest,{" "}
                  <Link
                    href="/mushrooms/tricholoma-matsutake"
                    className="text-foreground underline decoration-muted-foreground/30 hover:decoration-foreground"
                  >
                    matsutake season
                  </Link>{" "}
                  begins,those spicy, aromatic mushrooms that sell for
                  absurd prices in Japan.{" "}
                  <Link
                    href="/mushrooms/armillaria-mellea"
                    className="text-foreground underline decoration-muted-foreground/30 hover:decoration-foreground"
                  >
                    Honey mushrooms
                  </Link>{" "}
                  are absolutely everywhere, fruiting in massive clusters at the
                  base of trees and stumps. September is overwhelming in the
                  best possible way. You will find more than you can eat.
                </p>
              </div>
            </div>

            {/* October */}
            <div className="mt-6 rounded-lg border border-border bg-card p-6 sm:p-8">
              <h3 className="font-heading text-xl font-semibold">October</h3>

              {/* TODO: photo. blewits in leaf litter showing their purple color, fly agaric in the background under birch */}

              <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Late porcini for the lucky ones. Blewits (Lepista nuda) are
                  fruiting now,beautiful purple mushrooms in leaf litter
                  and compost heaps. Here&rsquo;s the thing about blewits: they
                  actually taste better after a light frost, which concentrates
                  their flavor.
                </p>
                <p>
                  <Link
                    href="/mushrooms/amanita-muscaria"
                    className="text-foreground underline decoration-muted-foreground/30 hover:decoration-foreground"
                  >
                    Fly agaric
                  </Link>{" "}
                  appears under birches,the iconic red cap with white
                  spots. Not edible (well, not safely), but it means the season
                  is turning.{" "}
                  <Link
                    href="/mushrooms/coprinus-comatus"
                    className="text-foreground underline decoration-muted-foreground/30 hover:decoration-foreground"
                  >
                    Shaggy manes
                  </Link>{" "}
                  pop up in lawns, paths, and disturbed ground.{" "}
                  <Link
                    href="/mushrooms/hydnum-repandum"
                    className="text-foreground underline decoration-muted-foreground/30 hover:decoration-foreground"
                  >
                    Hedgehog mushrooms
                  </Link>{" "}
                 ,with their tiny teeth instead of gills,are one
                  of the safest wild mushrooms to identify, and they&rsquo;re
                  excellent eating.
                </p>
                <p>
                  In California, candy cap mushrooms (Lactarius rubidus) are
                  showing up, and they smell exactly like maple syrup. People
                  make candy cap cookies. Seriously.
                </p>
              </div>
            </div>

            {/* November */}
            <div className="mt-6 rounded-lg border border-border bg-card p-6 sm:p-8">
              <h3 className="font-heading text-xl font-semibold">November</h3>

              {/* TODO: photo. oyster mushrooms on dead wood in late autumn, bare branches, muted light */}

              <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The season is winding down but it&rsquo;s not over.{" "}
                  <Link
                    href="/mushrooms/pleurotus-ostreatus"
                    className="text-foreground underline decoration-muted-foreground/30 hover:decoration-foreground"
                  >
                    Oyster mushrooms
                  </Link>{" "}
                  are fruiting on dead wood,they handle cold weather
                  better than most species and you can find them well into
                  November, sometimes later. Late blewits are still around.
                </p>
                <p>
                  Velvet shank (Flammulina velutipes) is one of the few
                  mushrooms that actually fruits in near-freezing temperatures.
                  It has a dark, velvety stem and a slimy orange cap, and
                  it&rsquo;s the wild ancestor of the enoki mushroom you see in
                  grocery stores. Wood ears are back too. November foraging
                  requires more walking and less finding, but the woods are
                  quiet and beautiful.
                </p>
              </div>
            </div>
          </section>

          {/* ============ WINTER ============ */}
          <section className="mb-12">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              Winter (December &ndash; February)
            </h2>

            <div className="mt-6 rounded-lg border border-border bg-card p-6 sm:p-8">
              <h3 className="font-heading text-xl font-semibold">
                December &ndash; February
              </h3>

              {/* TODO: photo. velvet shank mushrooms on a snow-dusted log, frozen woodland scene */}

              <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Winter foraging is a real thing, just don&rsquo;t expect
                  abundance. Velvet shank fruits straight through winter,
                  you can find it on dead elm and willow even when there&rsquo;s
                  snow on the ground. Oyster mushrooms pop up during mild
                  spells, and if you get a few days above freezing in January,
                  it&rsquo;s worth checking your known spots.
                </p>
                <p>
                  <Link
                    href="/mushrooms/trametes-versicolor"
                    className="text-foreground underline decoration-muted-foreground/30 hover:decoration-foreground"
                  >
                    Turkey tail
                  </Link>{" "}
                  is around year-round,it&rsquo;s not a culinary
                  mushroom (way too tough to eat), but it&rsquo;s used
                  medicinally and there&rsquo;s legitimate research behind it.
                  Scarlet elf cups return toward the end of February, which
                  means the cycle is about to start again.
                </p>
                <p>
                  Winter is for reading field guides, cleaning your gear, and
                  planning spring routes. Also for ordering dried porcini online
                  and pretending that counts as foraging.
                </p>
              </div>
            </div>
          </section>

          {/* ============ TIPS ============ */}
          <section className="mb-12 rounded-lg border border-border bg-card p-6 sm:p-8">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              Tips for Seasonal Foraging
            </h2>

            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong className="text-foreground">
                    Track soil temperature, not air temperature.
                  </strong>{" "}
                  Air can swing 20 degrees in a day. Soil temperature is what
                  actually triggers fruiting, and it changes slowly. A cheap
                  soil thermometer is the best $10 you&rsquo;ll spend on
                  foraging gear.
                </li>
                <li>
                  <strong className="text-foreground">Keep a journal.</strong>{" "}
                  Same species, same spot, similar dates,year after
                  year. After two or three seasons your journal becomes a
                  calendar that tells you exactly when to check each location. I
                  use a notes app with GPS pins but a notebook works just as
                  well.
                </li>
                <li>
                  <strong className="text-foreground">
                    Join local foraging groups.
                  </strong>{" "}
                  They share timing intel that you can&rsquo;t get any other
                  way. Nobody&rsquo;s going to tell you their exact spot, but
                  they&rsquo;ll say &ldquo;chanterelles are up in the southern
                  counties&rdquo; and that&rsquo;s enough to get you moving.
                </li>
                <li>
                  <strong className="text-foreground">
                    Rain + warmth + 3 days = check your spots.
                  </strong>{" "}
                  This is the single most reliable formula in foraging. A good
                  soaking rain followed by warm days, and three days later the
                  mushrooms are up. Set a reminder on your phone if you have to.
                </li>
                <li>
                  <strong className="text-foreground">
                    Different altitudes = different timing.
                  </strong>{" "}
                  Higher elevation means later fruiting. If you missed morel
                  season in the valley, drive up 2,000 feet and you might get
                  another shot two weeks later. This works for less species than
                  you&rsquo;d think, but for morels and porcini it&rsquo;s
                  reliable.
                </li>
              </ul>
            </div>
          </section>

          {/* Closing */}
          <section className="mb-16">
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Foraging makes you pay attention to seasons in a way nothing
                else does. You start noticing the soil warming in March, the
                first humid night in June, the first cool morning in September.
                The mushrooms were always there. You just weren&rsquo;t looking. For species distribution and seasonality data, explore <a href="https://www.gbif.org" className="text-primary underline hover:text-primary/80 transition" target="_blank" rel="noopener noreferrer">GBIF</a>.
              </p>
            </div>
          </section>

          {/* SEO Queries */}
          <footer className="border-t border-border pt-8">
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {seoQueries.map((q) => (
                <span
                  key={q}
                  className="text-xs text-muted-foreground"
                >
                  #{q.replace(/ /g, "-")}
                </span>
              ))}
            </div>
          </footer>
        </article>
      </main>
    </>
  );
}
