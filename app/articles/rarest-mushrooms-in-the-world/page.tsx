import { Metadata } from "next";
import Link from "next/link";
import { CtaBlock } from "@/components/shared/cta-block";

export const metadata: Metadata = {
  title: "The 10 Rarest Mushrooms in the World (With Photos)",
  description:
    "From a fungus that exists only in Texas and Japan to a glowing mushroom used in ancient spirit lore. Meet the ten rarest mushrooms on Earth — with stunning photos and the stories behind them.",
  alternates: { canonical: "/articles/rarest-mushrooms-in-the-world" },
  openGraph: {
    title: "The 10 Rarest Mushrooms in the World (With Photos)",
    description:
      "From a fungus that exists only in Texas and Japan to a glowing mushroom used in ancient spirit lore. Meet the ten rarest mushrooms on Earth.",
    images: [
      {
        url: "/articles/rarest-mushrooms-in-the-world/03-wrinkled-peach.jpg",
        width: 3264,
        height: 2448,
        alt: "Rhodotus palmatus, the Wrinkled Peach mushroom, showing its stunning pink net-veined cap",
      },
    ],
  },
};

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
      name: "Rarest Mushrooms in the World",
      item: "https://guide.orangutany.com/articles/rarest-mushrooms-in-the-world",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The 10 Rarest Mushrooms in the World (With Photos)",
  description:
    "From a fungus that exists only in Texas and Japan to a glowing mushroom used in ancient spirit lore. Meet the ten rarest mushrooms on Earth.",
  author: {
    "@type": "Person",
    name: "Elena Marchetti",
    url: "https://guide.orangutany.com/authors/elena-marchetti",
  },
  publisher: {
    "@type": "Organization",
    name: "Orangutany",
    url: "https://orangutany.com",
  },
  datePublished: "2026-03-10",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://guide.orangutany.com/articles/rarest-mushrooms-in-the-world",
  },
  image:
    "https://guide.orangutany.com/articles/rarest-mushrooms-in-the-world/03-wrinkled-peach.jpg",
};

const IMG = "/articles/rarest-mushrooms-in-the-world";

export default function RarestMushroomsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />

      <article className="mx-auto max-w-3xl px-6 py-8">
        {/* ── Breadcrumb ── */}
        <nav
          className="mb-6 text-xs text-muted-foreground"
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center gap-1">
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
            <li className="text-foreground/60">
              Rarest Mushrooms in the World
            </li>
          </ol>
        </nav>

        <header>
          <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground sm:text-3xl">
            The 10 Rarest Mushrooms in the World
          </h1>
          <p className="mt-2 text-xs text-muted-foreground">
            By{" "}
            <Link
              href="/authors/elena-marchetti"
              className="text-primary hover:underline"
            >
              Elena Marchetti
            </Link>{" "}
            &middot; March 10, 2026
          </p>
        </header>

        {/* ── Opening ── */}
        <section className="mt-8 space-y-4 text-lg leading-loose text-foreground/80">
          <p>
            Most people who go looking for mushrooms are hoping to find one. The
            species on this list are the opposite — mushrooms so rare that some
            mycologists spend entire careers without ever seeing them in the
            wild. A fungus that exists only in Texas and Japan, separated by
            11,000 kilometers of ocean with no explanation. A mushroom so
            valuable it has restructured entire Himalayan economies and sparked
            violent territorial wars. A glowing species that ancient Japanese
            villagers mistook for fox spirits drifting through the forest at
            night.
          </p>
          <p>
            These are the ten rarest mushrooms on Earth — and the remarkable
            stories of how they have shaped science, culture, and human lives.
          </p>
        </section>

        {/* ── Hero image: Wrinkled Peach ── */}
        <figure className="my-8">
          <img
            src={`${IMG}/03-wrinkled-peach.jpg`}
            alt="Rhodotus palmatus, the Wrinkled Peach mushroom, with its stunning translucent pink net-veined cap growing on deadwood"
            className="w-full rounded-xl"
          />
          <figcaption className="mt-2 text-center text-xs text-muted-foreground">
            Rhodotus palmatus, the Wrinkled Peach — one of the most visually
            striking rare fungi on Earth. Photo: Dan Molter /{" "}
            <a
              href="https://commons.wikimedia.org/wiki/File:Rhodotus_palmatus2.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Wikimedia Commons
            </a>{" "}
            (CC BY-SA 3.0)
          </figcaption>
        </figure>

        {/* ── 1. Devil's Cigar ── */}
        <section className="mt-12">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
            1. Devil&apos;s Cigar (<em>Chorioactis geaster</em>)
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80">
            <p>
              There are exactly two places on Earth where you can find this
              mushroom: central Texas and a handful of mountain sites in Nara
              Prefecture, Japan. That is it. Eleven thousand kilometers of ocean
              separate the two populations, and despite decades of searching,
              nobody has found it anywhere in between.
            </p>
            <p>
              Before it opens, Devil&apos;s Cigar looks exactly like a dark
              brown cigar stub lying on the ground. Then it splits — the leathery
              exterior peels back into a star shape with four to six pointed
              rays, releasing a faint hissing sound and a visible puff of
              spores. It is one of the only fungi known to be audible.
            </p>
            <p>
              Molecular analysis revealed that the Texas and Japanese populations
              diverged over 19 million years ago, making this mushroom a living
              biogeographic relic from when North America and Asia shared ancient
              land connections. In 2021, Texas made it the official state
              mushroom. In Japan, where it is called kirinomitake, mountain
              communities historically considered it a sign of spiritual power.
            </p>
          </div>
          <figure className="my-6">
            <img
              src={`${IMG}/01-devils-cigar.jpg`}
              alt="Chorioactis geaster (Devil's Cigar) split open into a star shape on the forest floor in Texas"
              className="w-full rounded-xl"
              loading="lazy"
            />
            <figcaption className="mt-2 text-center text-xs text-muted-foreground">
              Devil&apos;s Cigar split open into its characteristic star shape.
              Photo: Human Bean /{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Chorioactis_geaster_167775967.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Wikimedia Commons
              </a>{" "}
              (CC BY 4.0)
            </figcaption>
          </figure>
        </section>

        {/* ── 2. Caterpillar Fungus ── */}
        <section className="mt-12">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
            2. Caterpillar Fungus (
            <em>
              <Link
                href="/mushrooms/ophiocordyceps-sinensis"
                className="text-primary underline hover:text-primary/80 transition"
              >
                Ophiocordyceps sinensis
              </Link>
            </em>
            )
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80">
            <p>
              The most expensive biological material on Earth by weight —
              exceeding gold at up to $63,000 per pound in peak years. It grows
              only in alpine grasslands of the Tibetan Plateau and Himalayas
              above 3,500 meters, where it parasitizes ghost moth larvae
              underground, mummifying the caterpillar and sprouting a single
              thin fruiting body from its head. It cannot be commercially
              cultivated. Nobody has figured out how.
            </p>
            <p>
              Known as yartsa gunbu in Tibetan, it has fueled a modern gold
              rush across the Himalayas. In parts of Tibet, Nepal, and Bhutan,
              caterpillar fungus collection accounts for up to 80 percent of
              household income. Harvesting season triggers mass migrations of
              tens of thousands of pickers into alpine meadows, leading to
              violent territorial conflicts — and in some cases, killings. In
              traditional Chinese medicine, it has been prized for over 1,500
              years as a tonic for vitality and endurance.
            </p>
            <p>
              Wild populations have declined 30 to 50 percent since the 1990s.
              Climate change is pushing its viable habitat higher up mountains
              that are running out of altitude.
            </p>
          </div>
          <figure className="my-6">
            <img
              src={`${IMG}/02-caterpillar-fungus.jpg`}
              alt="Ophiocordyceps sinensis fruiting from a mummified caterpillar larva in alpine grassland"
              className="w-full rounded-xl"
              loading="lazy"
            />
            <figcaption className="mt-2 text-center text-xs text-muted-foreground">
              Caterpillar Fungus sprouting from its host larva. Photo: Francois
              Nguyen /{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Ophiocordyceps_sinensis_(31).jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Wikimedia Commons
              </a>{" "}
              (CC BY 2.0)
            </figcaption>
          </figure>
        </section>

        {/* ── 3. Wrinkled Peach ── */}
        <section className="mt-12">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
            3. Wrinkled Peach (<em>Rhodotus palmatus</em>)
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80">
            <p>
              The sole species in its entire genus, and one of the most visually
              otherworldly fungi in existence. Its translucent pink cap is
              covered with a deeply wrinkled, net-like surface that looks almost
              artificial — like something grown in a laboratory rather than on a
              rotting log.
            </p>
            <p>
              Rhodotus palmatus is classified as critically endangered or
              extinct across more than a dozen European countries. It grows
              exclusively on decaying hardwood, particularly elm. When Dutch elm
              disease swept across Europe and North America, killing hundreds of
              millions of trees, it paradoxically both created and then
              destroyed the Wrinkled Peach&apos;s habitat — dead elms provided
              substrate, but as the wood was cleared, the fungus lost its home.
            </p>
            <p>
              This mushroom became the poster child of fungal conservation in
              Europe, helping drive the first legal protections for fungi.
              Historically, conservation law covered only animals and plants.
              When Rhodotus was rediscovered in parts of England after years of
              presumed local extinction, it made national news.
            </p>
          </div>
          <figure className="my-6">
            <img
              src={`${IMG}/03-wrinkled-peach.jpg`}
              alt="Rhodotus palmatus, the Wrinkled Peach, showing its translucent pink cap with deeply wrinkled net-like surface"
              className="w-full rounded-xl"
              loading="lazy"
            />
            <figcaption className="mt-2 text-center text-xs text-muted-foreground">
              The Wrinkled Peach — sole species in its genus, critically
              endangered across Europe. Photo: Dan Molter /{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Rhodotus_palmatus2.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Wikimedia Commons
              </a>{" "}
              (CC BY-SA 3.0)
            </figcaption>
          </figure>
        </section>

        {/* ── 4. Sky Blue Mushroom ── */}
        <section className="mt-12">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
            4. Sky Blue Mushroom (<em>Entoloma hochstetteri</em>)
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80">
            <p>
              A small, entirely blue mushroom found only in the native podocarp
              and broadleaf forests of New Zealand and a few sites in India. Its
              vivid indigo color, caused by azulene pigments chemically
              identical to compounds found in chamomile, makes it instantly
              recognizable but impossible to miss how rarely it fruits.
            </p>
            <p>
              In 1990, New Zealand placed this mushroom on the $50 banknote
              alongside the kokako bird — making it one of the only fungi ever
              depicted on legal currency anywhere in the world. For New
              Zealanders, the blue mushroom has become a symbol of the
              country&apos;s extraordinary endemic biodiversity, appearing on
              stamps, souvenirs, and conservation campaigns. It was named after
              Ferdinand von Hochstetter, an Austrian geologist who surveyed New
              Zealand in 1858.
            </p>
          </div>
          <figure className="my-6">
            <img
              src={`${IMG}/04-blue-mushroom.jpg`}
              alt="Entoloma hochstetteri, the vivid blue Sky Blue Mushroom, growing on moss in a New Zealand forest"
              className="w-full rounded-xl"
              loading="lazy"
            />
            <figcaption className="mt-2 text-center text-xs text-muted-foreground">
              The Sky Blue Mushroom in its native New Zealand forest. Photo:
              Steve Olsen /{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Entoloma_Hochstetteri.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Wikimedia Commons
              </a>{" "}
              (CC BY 2.0)
            </figcaption>
          </figure>
        </section>

        {/* ── 5. SpongeBob Mushroom ── */}
        <section className="mt-12">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
            5. SpongeBob Mushroom (<em>Spongiforma squarepantsii</em>)
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80">
            <p>
              Known from a single location on Earth: the old-growth dipterocarp
              forests of Lambir Hills National Park in Sarawak, Malaysian
              Borneo. Discovered in 2010 and formally described in 2011, it has
              no cap and no stem — instead it forms a rubbery, orange, sponge-like
              mass on the forest floor that springs back to shape when squeezed.
            </p>
            <p>
              When mycologists Dennis Desjardin, Kabir Peay, and Tom Bruns
              examined it under electron microscopy, they found the
              spore-producing surface looked remarkably like a sea sponge. They
              named it squarepantsii as a formal Linnaean tribute to SpongeBob
              SquarePants. Taxonomic reviewers initially questioned the
              dignity of the name, but the authors argued it would draw public
              attention to fungal biodiversity — and they were right. The paper
              generated more media coverage for tropical mycology than perhaps
              any other species description this century.
            </p>
            <p>
              Its entire existence depends on old-growth tropical rainforest, an
              ecosystem under massive logging pressure in Borneo, where
              deforestation rates are among the highest globally.
            </p>
          </div>
          <figure className="my-6">
            <img
              src={`${IMG}/05-spongebob-mushroom.jpg`}
              alt="Spongiforma squarepantsii, the SpongeBob Mushroom, a rubbery orange mass on the forest floor in Borneo"
              className="w-full rounded-xl"
              loading="lazy"
            />
            <figcaption className="mt-2 text-center text-xs text-muted-foreground">
              The only known specimen of the SpongeBob Mushroom, photographed in
              Borneo. Photo: Tom Bruns /{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Spongiforma_squarepantsii_151595.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Wikimedia Commons
              </a>{" "}
              (CC BY-SA 3.0)
            </figcaption>
          </figure>
        </section>

        {/* ── 6. Bleeding Tooth Fungus ── */}
        <section className="mt-12">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
            6. Bleeding Tooth Fungus (<em>Hydnellum peckii</em>)
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80">
            <p>
              Young specimens ooze thick droplets of bright red liquid through
              their pale, tooth-covered surface — a process called guttation
              that makes it look like the mushroom is actively bleeding. It is
              one of the most viscerally unsettling sights in the fungal
              kingdom, and one of the most viral fungi on the internet.
            </p>
            <p>
              Despite its horrifying appearance, Hydnellum peckii is not toxic,
              just extremely bitter and thoroughly inedible. The red pigment,
              atromentin, has been found to have anticoagulant properties
              similar to heparin, which has attracted pharmaceutical research
              interest. In the Pacific Northwest, Indigenous peoples reportedly
              used related species as textile dye sources.
            </p>
            <p>
              While historically widespread in coniferous forests of North
              America and Europe, it has become rare across most of its European
              range and is now Red Listed in multiple countries. Its decline
              tracks directly with the loss of old-growth conifer forests — it
              forms ectomycorrhizal bonds with living tree roots and cannot be
              cultivated.
            </p>
          </div>
          <figure className="my-6">
            <img
              src={`${IMG}/06-bleeding-tooth.jpg`}
              alt="Hydnellum peckii, the Bleeding Tooth Fungus, oozing bright red droplets on a white fruiting body"
              className="w-full rounded-xl"
              loading="lazy"
            />
            <figcaption className="mt-2 text-center text-xs text-muted-foreground">
              The Bleeding Tooth Fungus oozing its characteristic red guttation
              droplets. Photo: Holger Krisp /{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Scharfer_Korkstacheling_Hydnellum_peckii.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Wikimedia Commons
              </a>{" "}
              (CC BY 3.0)
            </figcaption>
          </figure>
        </section>

        {/* ── 7. Ferla Mushroom ── */}
        <section className="mt-12">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
            7. Ferla Mushroom (<em>Pleurotus nebrodensis</em>)
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80">
            <p>
              One of only a handful of fungi on the IUCN Red List, classified
              as critically endangered. Its entire known wild range is limited
              to the Madonie Mountains of Sicily, a few sites in Greece, and
              scattered populations in Central Asia. It grows exclusively in
              association with Cachrys ferulacea, a wild fennel relative, in
              limestone grasslands above 1,500 meters.
            </p>
            <p>
              In Sicily, the fungo di ferla is considered the most prized
              edible mushroom — historically more valued than truffles by the
              shepherds of the Madonie Mountains, who ate it for centuries as a
              staple food during long seasons in the high pastures. As word of
              its exceptional flavor spread beyond the mountains, commercial
              collectors stripped the hillsides. Within a generation, a
              mushroom that had sustained a pastoral culture for centuries was
              pushed to the edge of extinction.
            </p>
            <p>
              This triggered one of the first conservation programs
              specifically for a mushroom. The Madonie Regional Natural Park now
              patrols harvesting areas, and Italian mycologists have developed
              limited cultivation techniques. A kilogram of wild specimens still
              sells for over 100 euros.
            </p>
          </div>
          <figure className="my-6">
            <img
              src={`${IMG}/07-ferla-mushroom.jpg`}
              alt="Pleurotus nebrodensis, the Ferla Mushroom, growing alongside its host plant Cachrys ferulacea in the Madonie Mountains of Sicily"
              className="w-full rounded-xl"
              loading="lazy"
            />
            <figcaption className="mt-2 text-center text-xs text-muted-foreground">
              The Ferla Mushroom showing its elegant trumpet-shaped form.
              Photo: Mushroom Observer /{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Pleurotus_nebrodensis_30057.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Wikimedia Commons
              </a>{" "}
              (CC BY-SA 3.0)
            </figcaption>
          </figure>
        </section>

        {/* ── 8. Devil's Fingers ── */}
        <section className="mt-12">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
            8. Devil&apos;s Fingers (<em>Clathrus archeri</em>)
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80">
            <p>
              It erupts from a gelatinous white egg on the forest floor — four
              to eight blood-red tentacle-like arms unfurling like an alien
              hatching, each one coated in dark olive stinking slime. The smell
              is rotting flesh, and that is the point. Blowflies and carrion
              beetles arrive within minutes, crawl over the gleba, and fly
              away covered in spores.
            </p>
            <p>
              Native to Australia and New Zealand, where it is uncommon enough
              that finding one is an event. Its European fame began during World
              War I — first recorded in France in 1914, possibly arriving in
              wool shipments from the Southern Hemisphere. French villagers who
              encountered blood-red, foul-smelling fingers erupting from the
              earth reportedly believed they were connected to the carnage of
              the trenches. The nickname stuck.
            </p>
            <p>
              Its time-lapse emergence — from white egg to full alien glory in
              just a few hours — has made it one of the most filmed fungi on
              YouTube and the only well-documented case of an invasive
              macrofungus colonizing an entire continent.
            </p>
          </div>
          <figure className="my-6">
            <img
              src={`${IMG}/08-devils-fingers.jpg`}
              alt="Clathrus archeri, Devil's Fingers, with four blood-red arms erupting from the forest floor"
              className="w-full rounded-xl"
              loading="lazy"
            />
            <figcaption className="mt-2 text-center text-xs text-muted-foreground">
              Devil&apos;s Fingers fully emerged with its characteristic red
              tentacles. Photo: Holger Krisp /{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Tintenfischpilz-Clathrus_archeri.JPG"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Wikimedia Commons
              </a>{" "}
              (CC BY 3.0)
            </figcaption>
          </figure>
        </section>

        {/* ── 9. Bioluminescent Mycena ── */}
        <section className="mt-12">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
            9. Bioluminescent Mycena (<em>Mycena chlorophos</em>)
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80">
            <p>
              One of the brightest bioluminescent mushrooms known. Its pale
              green glow is visible to the naked eye in darkness and can last up
              to 72 hours. Found only in scattered pockets of subtropical and
              tropical Asia — Japan, Taiwan, Indonesia, Polynesia, Sri Lanka,
              and parts of Australia — growing on fallen woody debris during
              brief warm, wet windows.
            </p>
            <p>
              In Japanese folklore, glowing forest mushrooms were called shii no
              tomobishi-dake — luminous mushrooms of the chinquapin tree — and
              were considered spirit lights or kitsune-bi (fox fire). Villagers
              avoided the forests at night when the glow appeared, believing fox
              spirits were using the lights to lure travelers astray.
            </p>
            <p>
              Modern research published in 2015 showed the bioluminescence
              peaks at precisely 530 nanometers and attracts nocturnal insects
              that disperse spores. This confirmed an adaptive function,
              overturning decades of assumption that fungal glow was vestigial.
              The chemistry — a luciferin-luciferase reaction — is the same
              basic system used by fireflies, but evolved entirely
              independently.
            </p>
          </div>
          <figure className="my-6">
            <img
              src={`${IMG}/09-bioluminescent.jpg`}
              alt="Mycena chlorophos, a bioluminescent mushroom glowing pale green in darkness on fallen wood"
              className="w-full rounded-xl"
              loading="lazy"
            />
            <figcaption className="mt-2 text-center text-xs text-muted-foreground">
              Mycena chlorophos showing its characteristic green
              bioluminescence. Photo: Sam/Ctoan /{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:2012-06-13_Mycena_chlorophos_(Berk._%26_M.A._Curtis)_Sacc_227390.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Wikimedia Commons
              </a>{" "}
              (CC BY-SA 3.0)
            </figcaption>
          </figure>
        </section>

        {/* ── 10. Agarikon ── */}
        <section className="mt-12">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
            10. Agarikon (<em>Laricifomes officinalis</em>)
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80">
            <p>
              A massive, chalky white conk that grows on old-growth conifers —
              larch, fir, Douglas fir — and can take decades to reach full
              size, eventually weighing over 30 kilograms. It requires trees
              that are 200 years old or more. The systematic logging of
              old-growth forests across the Northern Hemisphere over the past
              two centuries has made it functionally extinct in most of Europe
              and increasingly scarce in the Pacific Northwest of North
              America.
            </p>
            <p>
              Agarikon has the longest documented history of medicinal use of
              any mushroom. The ancient Greek physician Dioscorides described it
              in De Materia Medica in 65 AD as elixirium ad longam vitam — the
              elixir of long life. For over 2,000 years it was a staple of
              European pharmacopoeias, prescribed for tuberculosis, fevers, and
              chronic infections. Indigenous peoples of the Pacific Northwest
              carved agarikon conks into spirit figures and placed them outside
              homes to ward off evil.
            </p>
            <p>
              Paul Stamets, the mycologist whose work inspired a character in
              Star Trek: Discovery, has championed agarikon research. His lab
              found that extracts show potent activity against poxviruses,
              tuberculosis bacteria, and H5N1 influenza in bioassays — making
              it a candidate for biodefense applications. The irony is that by
              the time modern science confirmed its millennia-old medicinal
              reputation, we had already destroyed most of the old-growth
              forests it needs to survive.
            </p>
          </div>
          <figure className="my-6">
            <img
              src={`${IMG}/10-agarikon.jpg`}
              alt="Laricifomes officinalis, the Agarikon conk, a large white bracket fungus growing on an old-growth conifer trunk"
              className="w-full rounded-xl"
              loading="lazy"
            />
            <figcaption className="mt-2 text-center text-xs text-muted-foreground">
              An Agarikon conk on old-growth conifer. Photo: Nina Filippova /{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Laricifomes_officinalis_502360207.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Wikimedia Commons
              </a>{" "}
              (CC BY 4.0)
            </figcaption>
          </figure>
        </section>

        {/* ── Closing ── */}
        <section className="mt-12 space-y-4 text-sm leading-relaxed text-foreground/80">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
            What Rarity Tells Us
          </h2>
          <p>
            The thread connecting these ten species is not just scarcity. It is
            the collision between an organism&apos;s extreme specialization and
            a world that is changing faster than evolution can keep up.
            Devil&apos;s Cigar has been waiting 19 million years in two
            locations. Agarikon needs centuries-old trees that we have spent
            centuries cutting down. The Ferla Mushroom survived in Sicilian
            mountains for millennia until its reputation for flavor traveled
            beyond the shepherd communities that had always known it.
          </p>
          <p>
            Fungi occupy a strange space in conservation. They are not cute.
            They do not have eyes. Most legal frameworks still do not protect
            them. Yet they underpin the ecosystems that everything else depends
            on. If these ten species are any indication, we are losing fungal
            diversity before we have even finished cataloging it.
          </p>
          <p>
            The next time you walk through a forest, remember: the rarest
            mushrooms on Earth are not in a museum. They are under your feet,
            in the rotting wood beside the trail, in the soil between the
            roots. Most of them have never been photographed. Some of them
            have never been named.
          </p>
        </section>

        <div className="mt-12">
          <CtaBlock ctaType="try-app" variant="card" />
        </div>
      </article>
    </>
  );
}
