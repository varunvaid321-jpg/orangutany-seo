import type { Metadata } from "next";
import Link from "next/link";

const title =
  "Mushrooms You Can Eat Right Off the Trail (If You Know What You're Doing)";
const description =
  "A trail-by-trail guide to the best edible wild mushrooms you can forage on a hike: chanterelles, porcini, morels, chicken of the woods, and more. Written by a Pacific Northwest forager who's eaten them all.";
const url = "https://orangutany.com/guides/edible-wild-mushrooms-trail";

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
    authors: ["Tomas Herrera"],
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
    name: "Tomas Herrera",
  },
  publisher: {
    "@type": "Organization",
    name: "Orangutany",
    url: "https://orangutany.com",
  },
  datePublished: "2026-03-06",
  mainEntityOfPage: url,
};

const seoQueries = [
  "edible wild mushrooms",
  "mushrooms you can eat in the wild",
  "trail mushrooms edible",
  "foraging mushrooms pacific northwest",
  "best wild mushrooms to eat",
  "chanterelle foraging",
  "wild mushroom identification edible",
  "mushrooms you can eat on a hike",
  "beginner edible wild mushrooms",
  "cooking wild mushrooms campfire",
  "how to forage mushrooms safely",
];

export default function EdibleWildMushroomsTrailPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-background text-foreground">
        <article className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-12">
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              By{" "}
              <a
                href="https://orangutany.com"
                className="font-medium text-foreground hover:underline"
              >
                Tomas Herrera
              </a>{" "}
              &middot; March 6, 2026
            </p>
          </header>

          {/* TODO: photo. hero image of a misty Hoh River Trail with golden chanterelles visible in the moss beside the path */}

          {/* Opening */}
          <section className="prose-section mb-12">
            <p className="text-lg leading-relaxed text-muted-foreground">
              It&rsquo;s mile three on the Hoh River Trail in Olympic National
              Park, and the rain finally stopped about an hour ago. The moss is
              dripping. The air smells like wet cedar and something else,
              something earthy and sharp, like the forest is exhaling.
              That&rsquo;s when you see them: golden chanterelles, dozens of
              them, pushing through the moss along a nurse log.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              You drop your pack. You crouch down. And for a second you forget
              about the twelve miles still ahead of you, because right here,
              right now, the forest just handed you dinner.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              I&rsquo;ve been foraging wild mushrooms on trails across the
              Pacific Northwest, the Rockies, the Appalachians, and a few
              mountain ranges in Europe for close to fifteen years. What follows
              are the mushrooms I trust enough to eat on the trail,the
              ones I&rsquo;ve cooked over camp stoves and open fires, the ones
              I&rsquo;d feed to friends without a second thought. Every single
              one of them has a story attached to it.
            </p>
          </section>

          {/* Chanterelles */}
          <section className="mb-12">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              <Link
                href="/mushrooms/cantharellus-cibarius"
                className="hover:underline"
              >
                Chanterelles
              </Link>
            </h2>
            <p className="mt-1 text-sm italic text-muted-foreground">
              Cantharellus cibarius
            </p>

            {/* TODO: photo. golden chanterelles emerging from deep green moss on the Hoh River Trail, soft diffused light through old-growth canopy */}

            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                You almost stepped on the first one. That&rsquo;s how it always
                goes with chanterelles,you walk right past a dozen
                before your eyes adjust. They blend into the duff until suddenly
                they don&rsquo;t, and then you see them everywhere, like your
                brain flipped a switch.
              </p>
              <p>
                These are the mushrooms of Pacific Northwest old growth. Douglas
                fir, Sitka spruce, western hemlock,chanterelles form
                mycorrhizal relationships with all of them. You&rsquo;ll find
                them from September through November in Washington and Oregon,
                often along game trails and in the mossy gaps between nurse logs.
                Bend down and smell one. If it smells faintly of apricots,
                you&rsquo;re in the right place.
              </p>
              <p>
                The key identification feature is the false gills:
                they&rsquo;re not true blade-like gills but shallow, forking
                ridges that run down the stem. That&rsquo;s what separates a
                real chanterelle from a jack-o&rsquo;-lantern mushroom, which
                has true gills and will ruin your night.
              </p>
              <p>
                When you harvest, cut them at the base with a knife. Don&rsquo;t
                pull. Leave the mycelium intact so the patch keeps producing
                year after year. I&rsquo;ve been going back to the same spots on
                the Hoh for over a decade.
              </p>
              <p>
                The campfire saute is simple because it should be: butter,
                garlic, a pinch of salt. Maybe some thyme if you packed it. Cook
                them until the edges go golden and crispy. If I could only eat
                one wild mushroom for the rest of my life, this is it.
              </p>
            </div>
          </section>

          {/* Porcini */}
          <section className="mb-12">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              <Link
                href="/mushrooms/boletus-edulis"
                className="hover:underline"
              >
                Porcini / King Bolete
              </Link>
            </h2>
            <p className="mt-1 text-sm italic text-muted-foreground">
              Boletus edulis
            </p>

            {/* TODO: photo. thick-stemmed porcini in an alpine meadow, Dolomites or Colorado Rockies backdrop, early morning light */}

            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The Italian hikers found them before we did. We were above
                treeline in the Dolomites, somewhere between Rifugio Lagazuoi
                and Cortina, and this couple in their sixties was crouching in a
                meadow with a wicker basket already half full. They didn&rsquo;t
                speak much English. They didn&rsquo;t need to. The smiles said
                everything.
              </p>
              <p>
                Porcini are the royalty of wild mushrooms. You&rsquo;ll find
                them in alpine meadows and conifer forests across Europe, and if
                you know where to look, in the Colorado Rockies and the Cascades
                too. They&rsquo;re mycorrhizal with spruce, pine, and fir. The
                cap is brown and slightly tacky when wet. Flip it over and
                instead of gills, you&rsquo;ll see a spongy pore surface
               ,that&rsquo;s the bolete family signature.
              </p>
              <p>
                Here&rsquo;s the thing about porcini though: check for worms.
                Slice the stem lengthwise before you get too excited. If
                it&rsquo;s riddled with tiny tunnels, the larvae got there
                first. Small holes near the base? You can usually trim around
                those. But if the whole thing looks like Swiss cheese, leave it
                for the forest.
              </p>
              <p>
                My trail move is to slice them thin and dry them on a flat rock
                in the sun, or string them on paracord and hang them from your
                pack. Dried porcini weigh nothing and they turn a basic trail
                risotto into something you&rsquo;d pay forty dollars for in a
                restaurant.
              </p>
            </div>
          </section>

          {/* Chicken of the Woods */}
          <section className="mb-12">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              <Link
                href="/mushrooms/laetiporus-sulphureus"
                className="hover:underline"
              >
                Chicken of the Woods
              </Link>
            </h2>
            <p className="mt-1 text-sm italic text-muted-foreground">
              Laetiporus sulphureus
            </p>

            {/* TODO: photo. bright orange and yellow shelf fungus erupting from a dead oak trunk, dappled Appalachian forest light */}

            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                You don&rsquo;t find chicken of the woods. It finds you.
                You&rsquo;re hiking along some section of the Appalachian Trail
                in Virginia, thinking about nothing in particular, and suddenly
                there&rsquo;s this explosion of neon orange and yellow on a dead
                oak twenty feet off trail. It looks almost fake, like someone
                glued a sculpture to the tree.
              </p>
              <p>
                This is one of the easiest wild mushrooms to identify. Nothing
                else in the forest looks like this,bright sulfur-orange
                shelving brackets, sometimes as big as a dinner plate, growing
                in overlapping clusters on dead or dying hardwoods. The
                underside is bright yellow with tiny pores.
              </p>
              <p>
                And it honestly tastes and cooks like actual chicken. I&rsquo;m
                not exaggerating. Tear it into strips, saute it with oil and
                seasoning, and you could fool a vegetarian&rsquo;s carnivore
                friends at a cookout. The texture is meaty and fibrous in a way
                that no other mushroom quite matches.
              </p>
              <p>
                The rule: young specimens only. You want the edges to be tender
                and moist, almost juicy when you press them. If the edges are
                dry, crumbly, or chalky white, it&rsquo;s past prime. Older
                chicken of the woods gets tough and can upset your stomach. Also
                avoid any growing on conifers or eucalyptus,some people
                react badly to those.
              </p>
            </div>
          </section>

          {/* Morels */}
          <section className="mb-12">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              <Link
                href="/mushrooms/morchella-esculenta"
                className="hover:underline"
              >
                Morels
              </Link>
            </h2>
            <p className="mt-1 text-sm italic text-muted-foreground">
              Morchella esculenta
            </p>

            {/* TODO: photo. honeycomb-capped morels emerging from blackened soil in a post-fire Cascades landscape, spring green pushing through ash */}

            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Fire season ended three months ago, and now the hillside is
                covered. This is a burn site east of the Cascades,
                charred ponderosa pine trunks standing like matchsticks, and
                between them, hundreds and hundreds of morels pushing through
                the ash and gravel. It looks like the forest is healing itself,
                which in a way it is.
              </p>
              <p>
                Burn morels are one of the great treasures of the mushroom
                world. The season after a wildfire, these things erupt in
                unbelievable quantities. People drive hours, hike miles, and
                guard their burn sites like family secrets. I&rsquo;ve seen
                people get genuinely angry when they find another forager in
                &ldquo;their&rdquo; burn. People guard their morel spots like
                family secrets.
              </p>
              <p>
                Identification is straightforward: that honeycomb-ridged cap is
                unmistakable. But here&rsquo;s the test that matters:
                slice one in half lengthwise. A true morel is completely hollow
                from the tip of the cap to the base of the stem. One continuous
                hollow chamber. A false morel (Gyromitra) has a cottony or
                chambered interior. That distinction could save your life,
                because false morels contain gyromitrin, which is a serious
                toxin.
              </p>
              <p>
                Spring is morel season. March through May depending on elevation
                and latitude. They like disturbed ground,burn sites, old
                orchards, river bottoms, even landscaping bark around suburban
                tulip poplars. But the burn morels in the eastern Cascades are
                the ones that haunt my dreams.
              </p>
            </div>
          </section>

          {/* Oyster Mushrooms */}
          <section className="mb-12">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              <Link
                href="/mushrooms/pleurotus-ostreatus"
                className="hover:underline"
              >
                Oyster Mushrooms
              </Link>
            </h2>
            <p className="mt-1 text-sm italic text-muted-foreground">
              Pleurotus ostreatus
            </p>

            {/* TODO: photo. cluster of pale oyster mushrooms fanning out from a fallen alder log, overcast February Pacific Northwest forest */}

            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                February in the Pacific Northwest. Everything is gray and dead
                except these. You&rsquo;re on some soggy trail outside of
                Olympia, the kind of hike you do in February just to prove you
                still go outside, and there on a fallen alder is a cascade of
                pale, fan-shaped mushrooms that look almost luminous against the
                dark bark.
              </p>
              <p>
                Oyster mushrooms are the winter forager&rsquo;s best friend.
                When nothing else fruits,when the chanterelles are done
                and the morels are months away,oysters are out there on
                dead and dying hardwoods, fruiting through rain and
                near-freezing temperatures. They&rsquo;re saprophytic, meaning
                they decompose dead wood rather than forming relationships with
                living trees.
              </p>
              <p>
                Identification: fan or shelf-shaped caps, white to gray to
                brown, with white gills running down a short offset stem (or no
                stem at all). They grow in overlapping clusters. The smell is
                mild and pleasant, slightly anise-like. The one look-alike to
                watch for is the angel wing (Pleurocybella porrigens), which is
                thinner, pure white, and grows on conifer wood. Stick to
                hardwoods and you&rsquo;re safe.
              </p>
              <p>
                Oysters are mild and versatile,they take on whatever
                flavor you cook them with. Tear them into strips and they crisp
                up beautifully. Not the most exciting mushroom on this list, but
                when it&rsquo;s February and you&rsquo;re cold and wet and you
                find a massive flush of them, they feel like a gift.
              </p>
            </div>
          </section>

          {/* Black Trumpets */}
          <section className="mb-12">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              <Link
                href="/mushrooms/craterellus-cornucopioides"
                className="hover:underline"
              >
                Black Trumpets
              </Link>
            </h2>
            <p className="mt-1 text-sm italic text-muted-foreground">
              Craterellus cornucopioides
            </p>

            {/* TODO: photo. dark funnel-shaped black trumpets nestled in oak leaf litter, almost invisible, someone's hand parting the leaves to reveal them */}

            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                You have to get down on your knees to see them. Seriously. Black
                trumpets are laying right there in the leaf litter, dark little
                funnels the exact same color as the decomposing oak leaves
                around them, and you will walk past them fifty times before you
                find your first one. Then you find a hundred.
              </p>
              <p>
                They grow in oak and beech forests, often along the edges of
                trails and in mossy depressions where moisture collects. The
                Pacific Northwest has them. So does the eastern US. So does most
                of Europe. They&rsquo;re called &ldquo;the poor man&rsquo;s
                truffle&rdquo; in France (trompette de la mort, which translates
                to &ldquo;trumpet of death&rdquo;,a terrible name for
                such a delicious mushroom).
              </p>
              <p>
                The flavor is rich, smoky, almost fruity. Dried black trumpets
                are incredible,they concentrate into something intensely
                savory, and you can crumble them into pasta, risotto, cream
                sauces, anything. They&rsquo;re thin-fleshed so they dry fast,
                even just in your pack on a warm day.
              </p>
              <p>
                Here&rsquo;s the beautiful thing: black trumpets have almost no
                dangerous look-alikes. The dark color, the funnel shape, the
                smooth underside with no true gills,nothing toxic shares
                that combination. This is one of the safest wild mushrooms to
                forage if you&rsquo;re just starting out.
              </p>
            </div>
          </section>

          {/* Hedgehog Mushroom */}
          <section className="mb-12">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              <Link
                href="/mushrooms/hydnum-repandum"
                className="hover:underline"
              >
                Hedgehog Mushroom
              </Link>
            </h2>
            <p className="mt-1 text-sm italic text-muted-foreground">
              Hydnum repandum
            </p>

            {/* TODO: photo. hedgehog mushroom flipped upside down to show the tiny teeth/spines underneath, held in a forager's hand, forest background */}

            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Flip it over and instead of gills, there are tiny teeth. Little
                spines hanging down from the underside of the cap, like a soft
                brush. That&rsquo;s the hedgehog mushroom, and it&rsquo;s one of
                the most beginner-friendly wild edibles out there because
                nothing dangerous looks like this.
              </p>
              <p>
                You&rsquo;ll find hedgehogs in the same forests as chanterelles
               ,Pacific Northwest conifers, European mixed forests,
                anywhere with a thick duff layer and decent rainfall.
                They&rsquo;re mycorrhizal, so they&rsquo;re always near living
                trees. The cap is cream to pale orange, wavy and irregular, and
                the stem is thick and off-center. They look a little like a
                chanterelle from above, but that toothed underside is completely
                unique.
              </p>
              <p>
                The flavor is nutty and mild, slightly sweet. Not as punchy as a
                chanterelle, not as rich as a porcini, but deeply satisfying in
                its own quiet way. They saute well and hold their texture. I
                like them in scrambled eggs on a camp stove morning, when
                you&rsquo;re not trying to be fancy and just want something
                good.
              </p>
              <p>
                If you&rsquo;re nervous about foraging,and you should be
                a little nervous, that&rsquo;s healthy,start with
                hedgehogs. The teeth make them unmistakable. No guesswork, no
                anxiety. Just a good, safe, delicious mushroom.
              </p>
            </div>
          </section>

          {/* Lion's Mane */}
          <section className="mb-12">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              <Link
                href="/mushrooms/hericium-erinaceus"
                className="hover:underline"
              >
                Lion&rsquo;s Mane
              </Link>
            </h2>
            <p className="mt-1 text-sm italic text-muted-foreground">
              Hericium erinaceus
            </p>

            {/* TODO: photo. white, shaggy lion's mane growing from a wound on a dead beech tree, soft backlight making the spines glow */}

            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                It looks like someone left a white wig on a log. Or a frozen
                waterfall. Or a very confused Pomeranian. Lion&rsquo;s mane is
                one of those mushrooms that stops you in your tracks because it
                just doesn&rsquo;t look real,this cascading mass of
                long, white, dangling spines growing from a wound on a dead
                beech or oak.
              </p>
              <p>
                You&rsquo;ll find them on dead and dying hardwoods throughout
                the eastern US, the Pacific Northwest, and across Europe and
                Asia. They&rsquo;re saprophytic and sometimes weakly parasitic.
                Look for them in late summer through fall, usually higher up on
                the trunk where a branch broke off or where the bark was
                damaged.
              </p>
              <p>
                The texture when cooked is remarkable,it shreds like
                crab meat and has a similar sweetness and density. Slice it into
                thick steaks, sear in butter until the edges brown, and I
                promise you&rsquo;ll forget you&rsquo;re eating a fungus. It
                soaks up flavors like a sponge but also has its own subtle
                seafood-like character that&rsquo;s genuinely unique.
              </p>
              <p>
                Lion&rsquo;s mane is also one of the few culinary mushrooms with
                legitimate medicinal research behind it. Studies have shown it
                stimulates nerve growth factor (NGF) production, which has
                implications for neurological health. I&rsquo;m not making
                health claims here,I&rsquo;m a hiker, not a doctor
               ,but it&rsquo;s fascinating that something this delicious
                might also be good for your brain.
              </p>
            </div>
          </section>

          {/* Hen of the Woods */}
          <section className="mb-12">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              <Link
                href="/mushrooms/grifola-frondosa"
                className="hover:underline"
              >
                Hen of the Woods (Maitake)
              </Link>
            </h2>
            <p className="mt-1 text-sm italic text-muted-foreground">
              Grifola frondosa
            </p>

            {/* TODO: photo. massive hen of the woods mushroom at the base of an oak, showing the overlapping gray-brown fronds, a hand or knife for scale */}

            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The base of the oak looks like it&rsquo;s wearing a dress. A
                massive, ruffled, gray-brown dress made of overlapping fronds
                that cascades from the root flare out onto the ground. This is
                hen of the woods, also called maitake, and finding a big one is
                one of the most exciting things that can happen to you in the
                fall woods.
              </p>
              <p>
                These fruit at the base of oaks,almost always oaks
               ,primarily in the eastern US. September through November.
                They&rsquo;re parasitic on the tree&rsquo;s roots, so they come
                back to the same spot year after year until the tree finally
                gives out. A productive oak can produce maitake annually for
                decades.
              </p>
              <p>
                And they can be massive. I&rsquo;ve found specimens pushing
                twenty pounds. You need a bag, sometimes two. The excitement of
                finding a big hen is hard to describe,it&rsquo;s this
                rush of disbelief and giddiness, like you just won some kind of
                forest lottery that nobody else even knows is being played.
              </p>
              <p>
                Tear the fronds apart along their natural seams, brush off any
                dirt, and saute them hot and fast. The edges crisp up while the
                centers stay tender and meaty. The flavor is deep and earthy
                with a slight pepperiness. They also dehydrate beautifully if
                you find more than you can eat, which with a twenty-pound
                specimen is very likely.
              </p>
            </div>
          </section>

          {/* The Rules of Trail Eating */}
          <section className="mb-12 border-l-2 border-primary pl-6">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              The Rules of Trail Eating
            </h2>

            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Before you go filling your pack with everything that looks
                edible, here are the rules I live by. They&rsquo;re simple and
                they&rsquo;re non-negotiable.
              </p>

              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong className="text-foreground">
                    Cook everything.
                  </strong>{" "}
                  Even safe species can upset your stomach if you eat them raw.
                  Some, like morels, are outright toxic uncooked. There&rsquo;s
                  no good reason to eat a wild mushroom raw. Heat breaks down
                  the chitin in cell walls and makes them digestible.
                </li>
                <li>
                  <strong className="text-foreground">
                    Carry a mesh bag
                  </strong>{" "}
                  so spores drop as you hike. You&rsquo;re literally seeding the
                  forest behind you as you walk. Give back to the forest.
                </li>
                <li>
                  <strong className="text-foreground">
                    Take only what you&rsquo;ll eat.
                  </strong>{" "}
                  Filling a garbage bag with chanterelles because you can is not
                  foraging, it&rsquo;s hoarding. Take what you need for the next
                  meal or two.
                </li>
                <li>
                  <strong className="text-foreground">
                    Leave the small ones.
                  </strong>{" "}
                  Let them mature, drop spores, and complete their cycle. The big
                  ones are better eating anyway.
                </li>
                <li>
                  <strong className="text-foreground">
                    When in doubt, don&rsquo;t.
                  </strong>{" "}
                  No mushroom is worth a hospital visit. If your identification
                  is even slightly uncertain, leave it in the ground and go home
                  alive.
                </li>
              </ul>

              <p className="mt-4 italic">
                The forest remembers how you treat it.
              </p>
            </div>
          </section>

          {/* Closing */}
          <section className="mb-16">
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                The best meal I&rsquo;ve ever had was chanterelles fried in
                butter on a camp stove, eaten with my hands, sitting on a wet
                log in the Olympic rainforest. No restaurant has come close. Not
                because the cooking was better,it was butter and garlic
                in a titanium pot,but because everything around it was
                real. The rain, the moss, the smell of woodsmoke mixing with the
                smell of mushrooms hitting hot fat, the sound of the Hoh River
                somewhere below the ridge.
              </p>
              <p>
                That&rsquo;s what trail foraging gives you that no farmers
                market or grocery store ever will. It&rsquo;s not just food.
                It&rsquo;s a conversation with the place you&rsquo;re in, a
                reminder that the forest has been feeding people for thousands
                of years and it hasn&rsquo;t stopped offering.
              </p>
              <p>
                You just have to know what you&rsquo;re looking at. And you have
                to be willing to get down on your knees in the mud to find it.
              </p>
            </div>
          </section>

          {/* SEO Queries */}
          <footer className="border-t border-border pt-8">
            <div className="flex flex-wrap gap-2">
              {seoQueries.map((q) => (
                <span
                  key={q}
                  className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground"
                >
                  {q}
                </span>
              ))}
            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              Tomas Herrera writes about wild mushrooms and trail foraging for{" "}
              <a
                href="https://orangutany.com"
                className="text-primary hover:underline"
              >
                Orangutany
              </a>
              .
            </p>
          </footer>
        </article>
      </main>
    </>
  );
}
