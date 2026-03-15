import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "A Beginner's Guide to Mushroom Foraging (From Someone Who Started Last Year)",
  description:
    "Everything you need to know to start mushroom foraging: gear, where to go, 10 beginner-friendly species, and the mistakes to avoid. A first-timer's honest walkthrough.",
  alternates: { canonical: "/guides/beginners-guide-to-mushroom-foraging" },
  openGraph: {
    title:
      "A Beginner's Guide to Mushroom Foraging (From Someone Who Started Last Year)",
    description:
      "Everything you need to know to start mushroom foraging: gear, where to go, 10 beginner-friendly species, and the mistakes to avoid. A first-timer's honest walkthrough.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "A Beginner's Guide to Mushroom Foraging (From Someone Who Started Last Year)",
  description:
    "Everything you need to know to start mushroom foraging: gear, where to go, 10 beginner-friendly species, and the mistakes to avoid.",
  author: {
    "@type": "Person",
    name: "James Whitfield",
  },
  publisher: {
    "@type": "Organization",
    name: "Orangutany",
    url: "https://orangutany.com",
  },
  datePublished: "2025-09-14",
  dateModified: "2025-11-02",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://guide.orangutany.com/guides/beginners-guide-to-mushroom-foraging",
  },
};

const SPECIES = [
  {
    name: "Chicken of the Woods",
    slug: "laetiporus-sulphureus",
    image: "/guides/beginners-guide-to-mushroom-foraging/03.jpg",
    imageAlt: "Bright orange Chicken of the Woods (Laetiporus sulphureus) shelf mushrooms growing on a tree trunk",
    imageCaption: 'Chicken of the Woods in the wild — Photo: Andreas Eichler / <a href="https://commons.wikimedia.org/wiki/File:2017.05.13.-04-Bruehl_Rohrhof--Laetiporus_sulphureus_(Gemeiner_Schwefelporling).jpg" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Wikimedia Commons</a> (CC BY-SA 4.0)',
    text: `This is the one that got me into foraging. Bright orange and yellow shelves growing right out of a tree trunk; you genuinely cannot miss it. It has no gills, no stem, and nothing else in the forest looks like it. The texture when cooked is shockingly similar to chicken breast. Find it on oaks, cherry, and willow from late summer through fall. If the edges are still tender and bright, you're golden. If it's dried out and chalky, leave it.`,
  },
  {
    name: "Chanterelles",
    slug: "cantharellus-cibarius",
    image: "/guides/beginners-guide-to-mushroom-foraging/04.jpg",
    imageAlt: "Golden chanterelles (Cantharellus cibarius) growing on the forest floor among moss and leaves",
    imageCaption: 'Golden chanterelles in their natural habitat — Photo: George Chernilevsky / <a href="https://commons.wikimedia.org/wiki/File:Cantharellus_cibarius_2009_G3.jpg" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Wikimedia Commons</a> (Public domain)',
    text: `Golden, funnel-shaped, and they smell like apricots. Honestly, the smell alone is worth the hike. The key identification feature is the "false gills": instead of thin blade-like gills, chanterelles have blunt, forking ridges that run down the stem. They grow on the ground near hardwoods, especially oaks and beeches. The main look-alike is the jack-o-lantern mushroom, which grows in clusters on wood and has true gills. Once you've seen both side by side, you'll never confuse them.`,
  },
  {
    name: "Porcini (King Bolete)",
    slug: "boletus-edulis",
    image: "/guides/beginners-guide-to-mushroom-foraging/05.jpg",
    imageAlt: "A thick sturdy porcini mushroom (Boletus edulis) growing on the forest floor",
    imageCaption: 'Porcini in the wild — Photo: Bernie / <a href="https://commons.wikimedia.org/wiki/File:AD2009Sep13_Boletus_edulis_01.jpg" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Wikimedia Commons</a> (Public domain)',
    text: `Thick, sturdy stem with a brown cap and a spongy pore surface underneath instead of gills. That sponge layer is your best friend; it immediately tells you you're in bolete territory. Porcini grow on the ground near conifers and some hardwoods. They're one of the most prized culinary mushrooms in the world, and finding a fresh one feels like finding buried treasure. Check for worm holes in the stem; older specimens get buggy fast.`,
  },
  {
    name: "Giant Puffball",
    slug: "calvatia-gigantea",
    image: "/guides/beginners-guide-to-mushroom-foraging/06.jpg",
    imageAlt: "A massive white giant puffball mushroom (Calvatia gigantea) in a grassy meadow",
    imageCaption: 'Giant puffball in a meadow — Photo: Holger Krisp / <a href="https://commons.wikimedia.org/wiki/File:Riesenbovist_Calvatia_gigantea.JPG" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Wikimedia Commons</a> (CC BY 3.0)',
    text: `Here's the rule: if it's bigger than your head, round, white, and pure white inside when you slice it open, it's a giant puffball and it's edible. That's it. If the inside has any color (yellow, brown, purple) or if you can see the outline of a tiny mushroom forming inside, put it down. Slice them into steaks and pan-fry in butter. They grow in meadows, lawns, and field edges from late summer into fall.`,
  },
  {
    name: "Oyster Mushroom",
    slug: "pleurotus-ostreatus",
    image: "/guides/beginners-guide-to-mushroom-foraging/07.jpg",
    imageAlt: "Oyster mushrooms (Pleurotus ostreatus) growing in overlapping shelf clusters on dead wood",
    imageCaption: 'Oyster mushrooms on dead wood — Photo: Dominicus Johannes Bergsma / <a href="https://commons.wikimedia.org/wiki/File:Gewone_oesterzwam_(Pleurotus_ostreatus)_25-12-2020_(d.j.b.)_01.jpg" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Wikimedia Commons</a> (CC BY-SA 4.0)',
    text: `These grow in overlapping shelf clusters on dead or dying hardwoods, especially beech, aspen, and oak. White to pale gray, with a short offset stem and gills that run down to the attachment point. They're one of the easiest mushrooms to identify in the wild and one of the most versatile in the kitchen. You can find them almost year-round in mild climates. The angel wing mushroom looks similar but grows on conifers and is thinner; stick to hardwoods and you're safe.`,
  },
  {
    name: "Morels",
    slug: "morchella-esculenta",
    image: "/guides/beginners-guide-to-mushroom-foraging/08.jpg",
    imageAlt: "A wild morel mushroom (Morchella esculenta) with its distinctive honeycomb cap on the forest floor",
    imageCaption: 'Wild morel in spring — Photo: U.S. Fish and Wildlife Service / <a href="https://commons.wikimedia.org/wiki/File:Wild_morel_sponge_mushroom_morchella_esculenta_vaporarius.jpg" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Wikimedia Commons</a> (Public domain)',
    text: `The holy grail for a lot of foragers. Honeycomb-textured cap, hollow from top to bottom when you slice them lengthwise. That hollow interior is the critical ID check; false morels (Gyromitra species) have cottony or chambered insides. Morels fruit in spring, often near dead elms, tulip poplars, and in old orchards. They're also notorious for popping up in burn areas the year after a forest fire. Learn the false morels before you go morel hunting. This one matters.`,
  },
  {
    name: "Lion's Mane",
    slug: "hericium-erinaceus",
    image: "/guides/beginners-guide-to-mushroom-foraging/09.jpg",
    imageAlt: "Wild Lion's Mane mushroom (Hericium erinaceus) with white cascading spines growing on a tree",
    imageCaption: 'Lion\'s Mane in the wild — Photo: Robert Volpe / <a href="https://commons.wikimedia.org/wiki/File:Hericium_erinaceus_wild.jpg" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Wikimedia Commons</a> (CC BY 4.0)',
    text: `Look, this mushroom looks like a white waterfall of icicles hanging off a tree. There is nothing else in the forest that looks remotely like it. It grows on dead or dying hardwoods, especially beech and oak. It has a mild, sweet, lobster-like flavor and a meaty texture. It's also one of the mushrooms with the most research behind its potential cognitive benefits, but I'm a forager, not a doctor. I just know it tastes incredible sauteed in butter with garlic.`,
  },
  {
    name: "Hen of the Woods (Maitake)",
    slug: "grifola-frondosa",
    image: "/guides/beginners-guide-to-mushroom-foraging/10.jpg",
    imageAlt: "A large Hen of the Woods mushroom (Grifola frondosa) rosette growing at the base of a tree",
    imageCaption: 'Hen of the Woods at the base of a tree — Photo: George Chernilevsky / <a href="https://commons.wikimedia.org/wiki/File:Grifola_frondosa_2014_G1.jpg" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Wikimedia Commons</a> (Public domain)',
    text: `A massive rosette of overlapping gray-brown caps growing at the base of oak trees. These can get huge. I've seen specimens over 20 pounds. They fruit in fall, often returning to the same tree year after year. The texture holds up beautifully when cooked, with crispy edges and a rich, earthy flavor. Some foragers guard their maitake trees like state secrets. Once you find a productive one, you'll understand why.`,
  },
  {
    name: "Hedgehog Mushroom",
    slug: "hydnum-repandum",
    image: "/guides/beginners-guide-to-mushroom-foraging/11.jpg",
    imageAlt: "Hedgehog mushroom (Hydnum repandum) showing its distinctive teeth-like spines underneath the cap",
    imageCaption: 'Hedgehog mushroom showing its teeth — Photo: Holger Krisp / <a href="https://commons.wikimedia.org/wiki/File:Semmel-Stoppelpilz_Semmelgelber_Stacheling_Hydnum_repandum.JPG" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Wikimedia Commons</a> (CC BY 3.0)',
    text: `Instead of gills or pores, the underside of the cap is covered in tiny teeth-like spines. That's the whole ID. Nothing dangerous has teeth like that. The cap is pale orange to cream-colored, and they grow on the ground in mixed forests. Mild, nutty flavor. These are maybe the single safest wild mushroom for a beginner to learn because the teeth feature is so distinctive and there are no dangerous look-alikes with that characteristic.`,
  },
  {
    name: "Black Trumpet",
    slug: "craterellus-cornucopioides",
    image: "/guides/beginners-guide-to-mushroom-foraging/12.jpg",
    imageAlt: "Dark funnel-shaped Black Trumpet mushrooms (Craterellus cornucopioides) growing in leaf litter",
    imageCaption: 'Black trumpets in leaf litter — Photo: Marko Vainu / <a href="https://commons.wikimedia.org/wiki/File:Craterellus_cornucopioides_Eestis.JPG" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Wikimedia Commons</a> (CC BY-SA 3.0)',
    text: `Dark gray to black, funnel-shaped, thin-fleshed, and growing in clusters on the ground near oaks and beeches. They have no gills; the outer surface is smooth or slightly wrinkled. They're hard to spot because they blend in with leaf litter, but the smell gives them away: rich, fruity, almost smoky. There are no dangerous look-alikes. Dried black trumpets are incredible crumbled over pasta. The French call them "trumpets of death" because of the color, which is terrible marketing for an amazing mushroom.`,
  },
];

export default function BeginnersGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-5xl px-6 py-8">
        {/* Header */}
        <header>
          <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground sm:text-3xl md:text-4xl leading-tight">
            A Beginner&apos;s Guide to Mushroom Foraging (From Someone Who
            Started Last Year)
          </h1>
          <p className="mt-3 text-xs text-muted-foreground">
            By James Whitfield for Orangutany &middot; Updated November 2025
          </p>
        </header>

        {/* Opening */}
        <section className="mt-8 space-y-4 text-sm leading-relaxed text-foreground/80">
          <figure className="my-8">
            <img
              src="/guides/beginners-guide-to-mushroom-foraging/01.jpg"
              alt="A basket full of freshly foraged wild mushrooms in the forest"
              className="w-full rounded-xl"
              loading="lazy"
            />
            <figcaption className="mt-2 text-center text-xs text-muted-foreground">
              A forager&apos;s haul — Photo: AS Photography / <a href="https://commons.wikimedia.org/wiki/File:Basket_full_of_mushrooms_(54817225577).jpg" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Wikimedia Commons</a> (CC BY 4.0)
            </figcaption>
          </figure>

          <p>
            I picked up mushroom foraging in October 2024 because a friend
            dragged me to a state park and pointed at a{" "}
            <Link
              href="/mushrooms/laetiporus-sulphureus"
              className="text-primary hover:underline"
            >
              chicken of the woods
            </Link>{" "}
            growing on an oak. I cooked it that night and it actually tasted
            like chicken. I was hooked.
          </p>
          <p>
            Here&apos;s everything I&apos;ve learned since, and the dumb
            mistakes I made along the way. I&apos;m not a mycologist. I&apos;m
            a guy who spends his weekends in the woods with a basket and a
            pocket knife and comes home with dinner sometimes. If I can figure
            this out, you can too.
          </p>
        </section>

        {/* What You Actually Need */}
        <section className="mt-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
            What You Actually Need
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80">
            <p>
              I spent $200 on gear my first time out. A fancy foraging vest, a
              specialized mushroom knife with a boar-hair brush, a hardcover
              field guide, the works. You need maybe $30 worth of stuff. Here&apos;s
              the real list:
            </p>
            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong className="text-foreground">
                  A basket or mesh bag
                </strong>{" "}
               , NOT a plastic bag. Mushrooms sweat in plastic, and by the time
                you get home they&apos;re a soggy, decomposing mess. A mesh bag
                also lets spores fall as you walk, which is good for the forest.
              </li>
              <li>
                <strong className="text-foreground">A knife</strong>, any
                pocket knife works. You want to cut mushrooms at the base rather
                than pulling them out of the ground, partly to keep the
                mycelium intact and partly so you can check the base for
                identification.
              </li>
              <li>
                <strong className="text-foreground">
                  A field guide specific to your region
                </strong>{" "}
               , not a global one, not an app. Online resources like <a href="https://www.mushroomexpert.com" className="text-primary underline hover:text-primary/80 transition" target="_blank" rel="noopener noreferrer">MushroomExpert.com</a> are also invaluable. A book written by someone who
                forages in your area. The species in the Pacific Northwest are
                different from the Southeast. Get the right book.
              </li>
              <li>
                <strong className="text-foreground">Your phone camera</strong>{" "}
               . Photograph everything. Top, bottom, stem, cross-section,
                habitat. You&apos;ll want those photos later when you&apos;re
                comparing at home.
              </li>
              <li>
                <strong className="text-foreground">Comfortable boots</strong>{" "}
               . You&apos;re going off trail, through underbrush, over logs.
                Waterproof is a plus since you&apos;ll often be out after rain.
              </li>
            </ul>
            <p>
              That&apos;s it. Don&apos;t overthink the gear. The forest
              doesn&apos;t care what you&apos;re wearing.
            </p>
          </div>
        </section>

        {/* Where to Go */}
        <section className="mt-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
            Where to Go (And Where Not To)
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80">
            <figure className="my-8">
              <img
                src="/guides/beginners-guide-to-mushroom-foraging/02.jpg"
                alt="Wild mushrooms growing on a damp forest floor among leaf litter"
                className="w-full rounded-xl"
                loading="lazy"
              />
              <figcaption className="mt-2 text-center text-xs text-muted-foreground">
                Mushrooms on the forest floor after rain — Photo: U.S. Forest Service Northern Region / <a href="https://commons.wikimedia.org/wiki/File:Unidentified_mushrooms_growing_on_the_forest_floor,_Tally_Lake_Ranger_District_(52517824795).jpg" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Wikimedia Commons</a> (Public domain)
              </figcaption>
            </figure>

            <p>
              <strong className="text-foreground">
                State and national forests
              </strong>{" "}
              are generally your best bet. Most allow foraging for personal use
             ; no permit needed, just don&apos;t show up with a truck. Check
              the specific forest&apos;s regulations before you go, but in my
              experience most are forager-friendly.
            </p>
            <p>
              <strong className="text-foreground">Private land</strong>: ask
              permission. Seriously. Most landowners are cool about it if you
              ask first. Some will even tell you where the good spots are.
              Showing up unannounced on someone&apos;s property with a knife is
              a bad look.
            </p>
            <p>
              <strong className="text-foreground">City and county parks</strong>{" "}
             : check the rules. Many parks prohibit removing any natural
              material, mushrooms included. Getting a fine for picking a
              chanterelle is not the foraging story you want to tell.
            </p>
            <p>
              <strong className="text-foreground">
                Places to absolutely avoid:
              </strong>{" "}
              roadsides, golf courses, treated lawns, agricultural fields with
              pesticide use, and anywhere near industrial sites. Mushrooms are
              bioaccumulators; they absorb heavy metals, pesticides, and
              pollutants from the soil. A beautiful porcini growing next to a
              highway is not the porcini you want to eat.
            </p>
            <p>
              <strong className="text-foreground">Timing matters.</strong> The
              best time to forage is 2 to 3 days after heavy rain. Mushrooms
              need moisture to fruit, and that post-rain window is when
              everything pops. I check the weather forecast more now than I
              ever did before I started foraging.
            </p>
          </div>
        </section>

        {/* 10 Species */}
        <section className="mt-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
            10 Species a Beginner Can Actually Learn
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">
            These are species with strong identification features, less
            dangerous look-alikes to worry about, and (this is important) they
            actually taste good. There&apos;s no point learning a mushroom
            that&apos;s safe but mediocre.
          </p>

          <div className="mt-6 space-y-8">
            {SPECIES.map((species, i) => (
              <div
                key={species.slug}
                className="border-l-2 border-primary pl-5 py-3"
              >
                {species.image && (
                  <figure className="my-4">
                    <img src={species.image} alt={species.imageAlt} className="w-full rounded-xl" loading="lazy" />
                    <figcaption className="mt-2 text-center text-xs text-muted-foreground" dangerouslySetInnerHTML={{ __html: species.imageCaption || "" }} />
                  </figure>
                )}
                <div className="flex items-baseline gap-3">
                  <span className="text-xs font-bold text-green-400">
                    #{i + 1}
                  </span>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
                    <Link
                      href={`/mushrooms/${species.slug}`}
                      className="hover:text-primary transition"
                    >
                      {species.name}
                    </Link>
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                  {species.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Mistakes */}
        <section className="mt-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
            The Mistakes I Made (So You Don&apos;t Have To)
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80">
            <figure className="my-8">
              <img
                src="/guides/beginners-guide-to-mushroom-foraging/13.jpg"
                alt="A mushroom collector foraging in an autumn forest near Berlin, Germany"
                className="w-full rounded-xl"
                loading="lazy"
              />
              <figcaption className="mt-2 text-center text-xs text-muted-foreground">
                A forager searching the forest floor — Photo: onnola / <a href="https://commons.wikimedia.org/wiki/File:Mushroom_collector_in_a_forest,_south_of_Berlin_in_Brandenburg,_2012-10-21_140012.jpg" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Wikimedia Commons</a> (CC BY-SA 2.0)
              </figcaption>
            </figure>

            <p>
              Honestly, I&apos;m a little embarrassed writing this section. But
              if it saves one person from a stomach ache, or worse, it&apos;s
              worth it.
            </p>

            <div className="space-y-4 rounded-xl border border-border bg-card p-5">
              <p>
                <strong className="text-foreground">
                  Mistake #1: The plastic bag.
                </strong>{" "}
                My first real haul was about two pounds of oyster mushrooms.
                Beautiful specimens. I put them in a plastic grocery bag,
                hiked for another hour, drove home. By the time I opened the
                bag they were sweating, slimy, and half of them were already
                breaking down. Two pounds became maybe a half pound of
                usable mushroom. Get a basket.
              </p>
              <p>
                <strong className="text-foreground">
                  Mistake #2: Trusting an app.
                </strong>{" "}
                I used a mushroom ID app to identify what I thought was a
                parasol mushroom. The app said 92% match. It was actually{" "}
                <em>Chlorophyllum molybdites</em>, the &ldquo;vomiter.&rdquo;
                It&apos;s the most commonly consumed poisonous mushroom in
                North America. I didn&apos;t eat it, but only because I
                happened to double-check with my field guide. Apps are fun.
                Apps are not field guides. And they are definitely not a
                reason to put something in your mouth.
              </p>
              <p>
                <strong className="text-foreground">
                  Mistake #3: Not checking the base.
                </strong>{" "}
                I found what looked like a nice white mushroom, round cap,
                clean gills. I sliced it at ground level and took it home.
                Later I learned that Amanita species, including the death cap,
                have a volva (a cup-like structure) at the very base of the
                stem, underground. If you don&apos;t dig up the whole mushroom
                to check the base, you can miss the single most important
                identification feature. I got lucky. Don&apos;t rely on luck.
              </p>
              <p>
                <strong className="text-foreground">
                  Mistake #4: Getting greedy.
                </strong>{" "}
                I found a patch of something that looked edible and picked
                about 40 of them. I wasn&apos;t 100% sure what they were, but
                there were so many that I figured they must be common and
                therefore safe. That&apos;s not how any of this works.
                Abundance doesn&apos;t equal safety. I threw them all out when
                I couldn&apos;t get a confident ID at home.
              </p>
              <p>
                My rule now: if I&apos;m not 100% certain, it goes back on the
                ground. And I have less regrets about leaving a good mushroom
                behind than I would about eating a bad one.
              </p>
            </div>
          </div>
        </section>

        {/* Golden Rules */}
        <section className="mt-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
            The Golden Rules
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80">
            <ol className="ml-4 list-decimal space-y-3">
              <li>
                <strong className="text-foreground">
                  Never eat anything you can&apos;t identify with 100%
                  confidence.
                </strong>{" "}
                Not 95%. Not &ldquo;pretty sure.&rdquo; One hundred percent.
                There are mushrooms that will kill you, and they look ordinary. If someone does eat an unknown mushroom, contact <a href="https://poison.org" className="text-primary underline hover:text-primary/80 transition" target="_blank" rel="noopener noreferrer">Poison Control</a> immediately.
                This is the one rule that matters more than all the others
                combined.
              </li>
              <li>
                <strong className="text-foreground">
                  When you find a new species, take it home and verify against
                  three sources.
                </strong>{" "}
                Photograph it in the field. Take a spore print at home. Compare
                to your field guide, a second reference, and ideally confirm
                with an experienced forager or mycological society. Three
                sources, minimum.
              </li>
              <li>
                <strong className="text-foreground">
                  Cook everything.
                </strong>{" "}
                Even confirmed edible species can cause gastrointestinal
                reactions when eaten raw. Some, like morels, are mildly toxic
                until cooked. Just cook them. It&apos;s not a salad.
              </li>
              <li>
                <strong className="text-foreground">
                  Start with ONE species.
                </strong>{" "}
                Master it. Learn every feature, every look-alike, every habitat
                cue. Then move to the next. Trying to learn ten species at once
                is how you end up confusing them. I started with chicken of the
                woods and didn&apos;t move on for two months.
              </li>
              <li>
                <strong className="text-foreground">
                  Join a local mycological society.
                </strong>{" "}
                The people are weird and wonderful. They&apos;ll take you on
                group forays, answer your dumb questions without judgment, and
                teach you more in one afternoon than you&apos;ll learn in a
                month of solo trips. And most of them bring incredible
                mushroom dishes to share at meetings. It&apos;s a whole thing.
              </li>
            </ol>
          </div>
        </section>

        {/* Closing */}
        <section className="mt-10 space-y-4 text-sm leading-relaxed text-foreground/80">
          <figure className="my-8">
            <img
              src="/guides/beginners-guide-to-mushroom-foraging/14.jpg"
              alt="A wild mushroom on the forest floor bathed in soft autumn morning light"
              className="w-full rounded-xl"
              loading="lazy"
            />
            <figcaption className="mt-2 text-center text-xs text-muted-foreground">
              Autumn morning on the forest floor — Photo: Roberto Arias / <a href="https://commons.wikimedia.org/wiki/File:Gilled_mushroom_on_an_autumn_morning_(Unsplash).jpg" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Wikimedia Commons</a> (CC0)
            </figcaption>
          </figure>

          <p>
            Foraging changed how I see the forest. What used to be just trees
            and dirt is now full of life I never noticed: networks of mycelium
            under every footstep, tiny fungi breaking down fallen logs,
            massive maitake rosettes hiding in plain sight at the base of oaks
            I&apos;d walked past a hundred times.
          </p>
          <p>
            Get out there. Bring a basket. Take it slow. And if something
            doesn&apos;t look right, leave it. The forest will still be there
            next weekend.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-12 rounded-xl border border-border bg-card p-6 text-center">
          <p className="text-sm text-foreground/70">
            Found something on a hike and not sure what it is?{" "}
            <a
              href="https://orangutany.com"
              className="text-primary hover:underline"
            >
              Orangutany
            </a>{" "}
            can help you identify mushrooms from a photo.
          </p>
        </section>

        {/* SEO keyword block */}
        <footer className="mt-12 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Related searches: mushroom foraging for beginners, how to start
            mushroom hunting, best mushrooms for beginners, mushroom foraging
            tips, what mushrooms can I eat in the wild, mushroom hunting gear,
            easiest wild mushrooms to identify, is mushroom foraging legal,
            beginner mushroom foraging guide, safest wild mushrooms to eat,
            how to forage mushrooms safely.
          </p>
        </footer>
      </article>
    </>
  );
}
