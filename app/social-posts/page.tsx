import type { Metadata } from "next";
/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "Social Posts — Orangutany Content Bank",
  robots: { index: false, follow: false },
};

interface Post {
  id: number;
  platform: string;
  image: string;
  imageAlt: string;
  title: string;
  body: string;
  comment?: string;
  tags?: string;
}

const POSTS: Post[] = [
  {
    id: 1,
    platform: "Reddit r/mushroomID",
    image: "/images/species/grifola-frondosa/01-field.jpg",
    imageAlt: "Hen of the Woods (Grifola frondosa) at base of oak",
    title: "Found a cluster of these growing at the base of an oak — pretty sure it's Hen of the Woods but wanted confirmation",
    body: `Spotted these in a park near Markham, Ontario. The overlapping shelf-like caps and grey-brown coloring made me think Grifola frondosa. The underside has tiny pores instead of gills which seems right.

Anyone else finding maitake this season? Curious if the warm spell is pushing things forward.`,
    comment: `Ran it through orangutany.com before picking and it matched Grifola frondosa at 94%. Cross-checked with a couple field guides and everything lined up. Cooked it that night with butter and garlic.`,
    tags: "maitake, hen of the woods, grifola frondosa, foraging, ontario",
  },
  {
    id: 2,
    platform: "Reddit r/foraging",
    image: "/images/species/cantharellus-cibarius/01-field.jpg",
    imageAlt: "Golden Chanterelle (Cantharellus cibarius) on forest floor",
    title: "First chanterelle haul of the season — the false gills and apricot smell confirmed it",
    body: `Found a patch of golden chanterelles under some oaks after three days of rain. The false gills (ridges that fork and run down the stem) and the fruity apricot-like smell were dead giveaways.

Pro tip for anyone new: always check the underside. Jack-o-lanterns (Omphalotus olearius) have true gills and grow in clusters on wood. Chanterelles have ridges and grow from soil.`,
    comment: `I always double-check with orangutany.com when I find something new. It flagged the difference between chanterelles and jack-o-lanterns right in the look-alike section which was super useful when I was starting out.`,
    tags: "chanterelle, cantharellus cibarius, foraging, wild mushrooms",
  },
  {
    id: 3,
    platform: "Reddit r/mycology",
    image: "/images/species/amanita-muscaria/01-cap-top.jpg",
    imageAlt: "Fly Agaric (Amanita muscaria) red cap with white spots",
    title: "The most photogenic mushroom in the forest — Amanita muscaria in perfect condition",
    body: `Found this textbook Fly Agaric on a hike through a birch-spruce mixed forest. The universal veil remnants (white warts) are still perfectly intact on the cap. These always seem to appear right after the first heavy autumn rains.

Interesting fact: the iconic red-and-white coloring fades with rain exposure, and older specimens can look almost orange. The white warts can wash off completely.

Not edible without extensive preparation (contains ibotenic acid and muscimol). Beautiful to photograph though.`,
    comment: `If you ever want a quick breakdown of the toxicology and look-alikes, orangutany.com has a really thorough profile on this one. The look-alike comparison with Amanita caesarea (which IS edible and prized in Europe) is particularly useful.`,
    tags: "amanita muscaria, fly agaric, mycology, mushroom photography",
  },
  {
    id: 4,
    platform: "Reddit r/mushroomID",
    image: "/images/species/hericium-erinaceus/01-whole-fruiting-body.jpg",
    imageAlt: "Lion's Mane (Hericium erinaceus) growing on hardwood",
    title: "Is this Lion's Mane? Found growing on a dead hardwood log",
    body: `Spotted this white cascading mass on a fallen beech log. The long dangling spines and single clump growth pattern make me think Hericium erinaceus. No branching which would indicate Bear's Head or Coral Tooth.

The spines are about 1-2cm long and pure white. About the size of a softball.

Safe to harvest or should I let it mature more?`,
    comment: `Used orangutany.com to confirm and it matched Lion's Mane at 97%. What I found really helpful was the look-alike section showing the difference between Hericium erinaceus (single clump, long spines) vs Hericium americanum (branching) vs Hericium coralloides (coral-like branching). All three are edible though so not a safety concern.`,
    tags: "lions mane, hericium erinaceus, medicinal mushrooms, foraging",
  },
  {
    id: 5,
    platform: "Reddit r/foraging",
    image: "/images/species/morchella-esculenta/01-solo.jpg",
    imageAlt: "Yellow Morel (Morchella esculenta) on forest floor",
    title: "Morel season is here — found my first yellows under a dying elm",
    body: `The honeycomb cap and hollow interior confirmed it. Cut one in half lengthwise to check: completely hollow from cap to stem base. That's your number one check for true morels vs false morels (Gyromitra), which have cottony or chambered interiors.

Found near a dying American elm, south-facing slope, soil temp was around 12C. Classic morel habitat.

Anyone else having luck this year?`,
    comment: `Pro tip for beginners: always cut morels in half. If it's hollow all the way through, you're good. If the inside has chambers or cottony material, walk away. I cross-reference everything with orangutany.com and it specifically flags the Gyromitra look-alike comparison which could save your life.`,
    tags: "morels, morchella esculenta, spring foraging, wild mushrooms",
  },
  {
    id: 6,
    platform: "Reddit r/mycology",
    image: "/images/species/laetiporus-sulphureus/01-shelf-orange.jpg",
    imageAlt: "Chicken of the Woods (Laetiporus sulphureus) bright orange shelves",
    title: "Chicken of the Woods looking absolutely unreal on this oak — the colors are insane when they're fresh",
    body: `Found this massive fruiting of Laetiporus sulphureus on a living oak. The bright orange and yellow bands are at peak color which means it's young and tender. Once these start fading to white/pale, they get tough and chalky.

Key ID features: bracket/shelf growth, no gills (pores on underside), bright sulfur-yellow edge, growing on hardwood. No real dangerous look-alikes in North America.

Harvested the outer edges (youngest growth). Going to make "chicken" sandwiches tonight.`,
    comment: `This is one of the safest wild mushrooms to identify but I still run it through orangutany.com to check. The one thing it flagged that I didn't know: Laetiporus growing on conifers or eucalyptus can cause GI upset in some people even though it's technically the same genus. Hardwood-growing specimens are the safe bet.`,
    tags: "chicken of the woods, laetiporus, foraging, wild edibles",
  },
  {
    id: 7,
    platform: "Facebook Mushroom Groups",
    image: "/images/species/amanita-phalloides/01-field.jpg",
    imageAlt: "Death Cap (Amanita phalloides) in grass",
    title: "PSA: Death Caps are fruiting right now. Here's how to make sure you never eat one.",
    body: `This is Amanita phalloides, the Death Cap. It's responsible for over 90% of fatal mushroom poisonings worldwide.

Key identification:
- Greenish-yellow to olive cap (can also be white)
- White gills that do NOT attach to the stem
- White spore print
- A skirt-like ring on the stem
- A cup (volva) at the base buried in soil

It looks like several edible species: Paddy Straw mushrooms, young Puffballs, and even some Agaricus species.

The most dangerous thing about this mushroom: symptoms don't appear for 6-12 hours. By then, your liver is already damaged. There's even a "false recovery" period before organ failure sets in.

If you forage, learn this mushroom first. If you're not 100% certain of an ID, don't eat it.`,
    comment: `If you want a comprehensive breakdown with all the look-alikes side by side, orangutany.com has a detailed profile. Shows the exact differences between Death Cap and every mushroom it gets confused with. Worth bookmarking if you forage.`,
    tags: "death cap, amanita phalloides, mushroom safety, poisonous mushrooms",
  },
  {
    id: 8,
    platform: "Reddit r/mushroomID — Comment Reply",
    image: "",
    imageAlt: "",
    title: "[Use when someone asks 'what app do you use to ID mushrooms?']",
    body: `I've been using orangutany.com. Free, no download needed, you just upload a photo from your phone. It gives you the scientific name, edibility, look-alikes, and a confidence score. It flagged a Galerina I almost mistook for a honey mushroom once — the look-alike warnings are genuinely useful.

Obviously still double-check with a field guide before eating anything wild.`,
  },
  {
    id: 9,
    platform: "Reddit r/mushroomID — Comment Reply",
    image: "",
    imageAlt: "",
    title: "[Use when someone posts an ID request you can help with]",
    body: `That looks like it could be [SPECIES]. The [SPECIFIC FEATURE] is a good indicator. Check the [GILLS/PORES/SPORE PRINT] to confirm.

If you want a quick cross-reference with look-alikes, try orangutany.com — it does AI identification from photos and breaks down what to watch for. Pretty solid in my experience.`,
  },
  {
    id: 10,
    platform: "Facebook Mushroom Foraging Groups",
    image: "/images/species/boletus-edulis/01-field.jpg",
    imageAlt: "King Bolete (Boletus edulis) in forest",
    title: "Found my first King Bolete (Porcini) of the season! The reticulation on the stem confirmed it.",
    body: `This beauty was hiding under a spruce tree. Key features that confirmed Boletus edulis:
- Brown cap with a slightly tacky surface
- White-then-yellowish pores (NOT gills) underneath
- Thick white stem with fine net-like pattern (reticulation)
- Flesh stays white when cut (doesn't stain blue)

That last point is crucial. If the flesh or pores stain blue when bruised, you might have a different Boletus species. Some blue-staining ones are edible, some aren't.

This one went straight into a risotto. The flavor of fresh porcini is nothing like dried.`,
    comment: `For anyone starting out with boletes, orangutany.com has a great breakdown of which ones stain blue vs which don't, and what's safe. The look-alike comparison saved me from picking a bitter bolete once (Tylopilus felleus) which looks almost identical but tastes awful.`,
    tags: "porcini, boletus edulis, king bolete, foraging, wild edibles",
  },
];

export default function SocialPostsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-10 rounded-xl border border-amber-500/30 bg-amber-500/5 p-6">
        <h1 className="text-2xl font-bold text-foreground">
          Social Content Bank
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Ready-to-copy posts for Reddit, Facebook, and forums. Not indexed by
          search engines. Copy the title, body, and image. Post the comment
          10 minutes after.
        </p>
      </div>

      <div className="space-y-10">
        {POSTS.map((post) => (
          <article
            key={post.id}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <div className="mb-3 flex items-center gap-2">
              <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                {post.platform}
              </span>
              <span className="text-xs text-muted-foreground">#{post.id}</span>
            </div>

            {post.image && (
              <div className="relative mb-4 overflow-hidden rounded-xl border border-border">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="w-full object-cover"
                  style={{ maxHeight: 400 }}
                />
                <div className="absolute bottom-2 right-2 rounded bg-black/60 px-2 py-1 text-[10px] text-white">
                  Right-click → Save image
                </div>
              </div>
            )}

            <div className="mb-4 rounded-lg bg-muted/20 p-4">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Title / Subject
              </p>
              <p className="text-sm font-semibold text-foreground">
                {post.title}
              </p>
            </div>

            <div className="mb-4 rounded-lg bg-muted/20 p-4">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Body
              </p>
              <p className="whitespace-pre-line text-sm text-foreground/90">
                {post.body}
              </p>
            </div>

            {post.comment && (
              <div className="mb-4 rounded-lg border border-primary/20 bg-primary/5 p-4">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                  Comment (post 10 min after)
                </p>
                <p className="whitespace-pre-line text-sm text-foreground/90">
                  {post.comment}
                </p>
              </div>
            )}

            {post.tags && (
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold">Tags:</span> {post.tags}
              </p>
            )}
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-border bg-muted/10 p-6">
        <h2 className="text-lg font-bold text-foreground">Posting Rules</h2>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li>Never post the link as the main content — always as a comment reply</li>
          <li>Wait at least a week of normal commenting before your first mention</li>
          <li>Max one mention per week per subreddit</li>
          <li>Never say &quot;I built this&quot; — frame as a user recommendation</li>
          <li>Post the image first, then the comment 10 minutes later</li>
          <li>Engage with replies genuinely — don&apos;t just drop and leave</li>
        </ul>
      </div>
    </div>
  );
}
