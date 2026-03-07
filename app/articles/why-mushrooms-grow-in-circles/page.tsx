import { Metadata } from "next";
import Link from "next/link";

const title =
  "Why Do Mushrooms Grow in Circles? The Real Science Behind Fairy Rings";
const description =
  "The science behind fairy rings: why mushrooms grow in perfect circles, the folklore behind them, and whether you should try to get rid of them.";
const slug = "why-mushrooms-grow-in-circles";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `/articles/${slug}` },
  openGraph: { title, description },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  author: {
    "@type": "Person",
    name: "Varun Vaid",
  },
  publisher: {
    "@type": "Organization",
    name: "Orangutany",
    url: "https://orangutany.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://orangutany.com/articles/${slug}`,
  },
};

export default function WhyMushroomsGrowInCirclesPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        <header>
          <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground sm:text-3xl">
            {title}
          </h1>
          <p className="mt-2 text-xs text-muted-foreground">
            By{" "}
            <Link href="/authors/varun-vaid" className="text-primary hover:underline">
              Varun Vaid
            </Link>{" "}
            &middot; Orangutany
          </p>
        </header>

        {/* --- Opening --- */}
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground/80">
          <p>
            You&apos;re walking across a field and there&apos;s a perfect circle
            of mushrooms in the grass. Your medieval ancestor would&apos;ve said
            fairies did it. Your neighbor says it means your lawn is dying.
            Science says it&apos;s actually one of the most elegant things in
            biology.
          </p>
        </div>

        {/* TODO: photo. fairy ring in green field */}

        {/* --- What's Actually Happening Underground --- */}
        <section className="mt-8">
          <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
            What&apos;s Actually Happening Underground
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80">
            <p>
              It starts with a single spore. That spore lands in the soil,
              germinates, and sends out mycelium, tiny threads that grow outward
              in every direction equally. Basically a slow underground
              explosion. The mycelium eats it&apos;s way through organic matter
              in the soil, expanding in a circle.
            </p>
            <p>
              Here&apos;s where it gets interesting. The center of the colony , 
              where the spore originally landed, runs out of nutrients and dies
              off. There&apos;s nothing left to eat there. So the living
              mycelium is now a ring, pushing outward at about 6 to 12 inches
              per year, always chasing fresh soil.
            </p>
            <p>
              When conditions are right (enough rain, right temperature) the
              active edge of that ring produces mushrooms. That&apos;s what
              you&apos;re seeing when you spot a fairy ring. Not a random
              scattering. A perfect circle that maps the frontier of a living
              organism.
            </p>
            <p>
              It&apos;s like a slow-motion explosion frozen in time. The
              mushrooms are just the ring&apos;s edge, announcing itself.
            </p>
            <p>
              And some of these rings are ancient. The largest known fairy ring
              is in Belfort, France, roughly 2,000 feet across, estimated at
              over 700 years old. That ring started growing before the
              Renaissance.
            </p>
          </div>
        </section>

        {/* --- The Folklore Is Way Better Than the Science --- */}
        <section className="mt-8">
          <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
            The Folklore Is Way Better Than the Science
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80">
            <p>
              Before anyone understood mycelium, people needed an explanation for
              these perfect circles appearing overnight. And honestly, the
              explanations they came up with are way more fun.
            </p>
            <div className="rounded-xl border border-border bg-card p-5">
              <ul className="space-y-3">
                <li>
                  <strong className="text-foreground">European:</strong> Fairies
                  dancing in circles at night. Anyone who stepped inside would be
                  trapped for a year, or forced to dance until they collapsed.
                </li>
                <li>
                  <strong className="text-foreground">Dutch / German:</strong>{" "}
                  The spot where the Devil churned his butter. The grass inside
                  the ring was cursed.
                </li>
                <li>
                  <strong className="text-foreground">Scandinavian:</strong>{" "}
                  Elves. Walking into a fairy ring on Midsummer&apos;s Eve and
                  you&apos;d go mad.
                </li>
                <li>
                  <strong className="text-foreground">Welsh:</strong> Stepping
                  into a fairy ring makes you invisible to mortals. Which sounds
                  cool until you realize you can never come back.
                </li>
                <li>
                  <strong className="text-foreground">Austrian:</strong> Fairy
                  rings are where dragons rested, and their fiery breath burned
                  the grass in a circle.
                </li>
                <li>
                  <strong className="text-foreground">English:</strong> The
                  &quot;hag track&quot;, where witches danced on moonless
                  nights.
                </li>
              </ul>
            </div>
            <p>
              Every culture saw these circles and decided something supernatural
              was going on. Honestly, I get it.
            </p>
          </div>
        </section>

        {/* TODO: photo. aerial view of large fairy ring */}

        {/* --- Types of Fairy Rings --- */}
        <section className="mt-8">
          <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
            Types of Fairy Rings
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80">
            <p>
              Turns out not all fairy rings look the same. Mycologists actually
              classify them into three types:
            </p>
          </div>

          <div className="mt-6 space-y-6">
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-base font-semibold text-foreground">
                Type 1: The Dead Zone Ring
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                A ring of dead or noticeably darker grass, usually with
                mushrooms growing along it. The mycelium underneath is so dense
                that it actually becomes hydrophobic; it repels water. The
                grass above can&apos;t get moisture and dies. This is the most
                dramatic-looking type and the one that freaks out homeowners.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-base font-semibold text-foreground">
                Type 2: The Green Ring
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                A ring of extra-green, lush grass. The mycelium is decomposing
                organic matter and releasing nitrogen as a byproduct, which
                basically fertilizes the grass above it. Your lawn is getting a
                free nutrient boost in a perfect circle.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-base font-semibold text-foreground">
                Type 3: Just Mushrooms
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                A ring of mushrooms with no visible change to the grass at all.
                The mycelium is there, doing its thing underground, but
                it&apos;s not dense enough to affect the soil moisture or
                nutrient levels. This is the most common type.
              </p>
            </div>
          </div>

          <div className="mt-4 text-sm leading-relaxed text-foreground/80">
            <p>
              Common fairy ring species include{" "}
              <em>Marasmius oreades</em> (the classic fairy ring mushroom, see <a href="https://www.mushroomexpert.com" className="text-primary underline hover:text-primary/80 transition" target="_blank" rel="noopener noreferrer">MushroomExpert.com</a> for identification details),{" "}
              <em>Chlorophyllum</em>, <em>Agaricus</em> (like the{" "}
              <Link
                href="/mushrooms/agaricus-campestris"
                className="text-primary hover:underline"
              >
                field mushroom
              </Link>
              , which frequently forms rings), and <em>Lepista</em>.
            </p>
          </div>
        </section>

        {/* TODO: photo. close-up of ring mushrooms in grass */}

        {/* --- Can You Get Rid of Them? --- */}
        <section className="mt-8">
          <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
            Can You Get Rid of Them?
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80">
            <p>
              Not easily. The mycelium goes deep, sometimes 12 inches or more
              into the soil, and it&apos;s been growing there for years or
              decades before you ever noticed.
            </p>
            <p>
              Aeration can help if you&apos;re dealing with a Type 1 ring where
              the hydrophobic mycelium layer is blocking water. Punching holes
              through that layer lets moisture reach the grass roots again.
            </p>
            <p>
              Some people dig out the entire ring to 12+ inches deep and replace
              the soil. That&apos;s a lot of digging for something that&apos;s
              not actually hurting anything.
            </p>
            <p>
              Fungicides? They don&apos;t work well. The mycelium is too deep
              and too spread out for surface-applied chemicals to reach it. Most
              lawn fungicides are designed for shallow fungal infections, not a
              massive underground network.
            </p>
            <p>
              Honestly, just let it be. It&apos;s a conversation starter, not a
              lawn disease.
            </p>
          </div>
        </section>

        {/* --- The Biggest Fairy Rings on Earth --- */}
        <section className="mt-8">
          <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
            The Biggest Fairy Rings on Earth
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80">
            <p>
              Fairy rings can get absurdly large. Because the mycelium just
              keeps pushing outward; as long as there&apos;s soil and nutrients
              ahead of it, there&apos;s no reason to stop.
            </p>
            <div className="rounded-xl border border-border bg-card p-5">
              <ul className="space-y-3">
                <li>
                  <strong className="text-foreground">
                    Belfort, France:
                  </strong>{" "}
                  Roughly 2,000 feet across, formed by{" "}
                  <em>Infundibulicybe geotropa</em>. Estimated at over 700 years
                  old. This thing was growing when medieval knights were still a
                  thing.
                </li>
                <li>
                  <strong className="text-foreground">Colorado, USA:</strong> A{" "}
                  <em>Marasmius oreades</em> ring about 200 feet in diameter,
                  possibly 300+ years old.
                </li>
                <li>
                  <strong className="text-foreground">In theory:</strong> Fairy
                  rings can grow indefinitely. Species distribution records on <a href="https://www.gbif.org" className="text-primary underline hover:text-primary/80 transition" target="_blank" rel="noopener noreferrer">GBIF</a> show fairy ring species on every inhabited continent. There&apos;s no biological limit
                  to how large or how old they can get, as long as the expanding
                  edge keeps finding food.
                </li>
              </ul>
            </div>
            <p>
              Somewhere on Earth right now, a fairy ring is growing that started
              before Columbus sailed.
            </p>
          </div>
        </section>

        {/* --- Closing --- */}
        <section className="mt-8">
          <div className="space-y-4 text-sm leading-relaxed text-foreground/80">
            <p>
              Next time you see a circle of mushrooms, you&apos;re looking at
              the edge of an organism that might be older than your house, your
              town, or your country. Not bad for something most people just mow
              over.
            </p>
          </div>
        </section>

        {/* --- CTA --- */}
        <section className="mt-8">
          <p className="text-xs text-foreground/60">
            Spotted a fairy ring in your yard?{" "}
            <a
              href="https://orangutany.com"
              className="text-primary hover:underline"
            >
              Orangutany
            </a>{" "}
            can identify mushrooms from a photo.
          </p>
        </section>

        {/* --- SEO queries --- */}
        <footer className="mt-12 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            People also search for: why do mushrooms grow in circles, fairy ring
            mushrooms, mushroom circle in yard, what causes fairy rings in
            grass, fairy ring folklore, how to get rid of fairy rings in lawn,
            fairy ring mushroom identification, how old are fairy rings, biggest
            fairy ring in the world, mushrooms growing in a ring, fairy ring
            myth, circle of mushrooms meaning
          </p>
        </footer>
      </article>
    </div>
  );
}
