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
    image: "/images/species/morchella-esculenta/03-forest-floor.jpg",
    imageAlt: "Morel on forest floor among leaves",
    title: "Almost stepped on this guy — morel? Found under some elms in my backyard",
    body: `Was just walking through the back of my property and nearly stepped on it. Hollow when I cut it open which I think is good? The cap is attached to the stem all the way down.

Soil was pretty damp from all the rain we got this week. Is this a yellow morel or something else?`,
    comment: `Ended up running the photo through orangutany to double check and it confirmed yellow morel. Also showed me the difference vs false morels which was helpful since I'm still pretty new to this.`,
    tags: "morel, morchella, foraging, backyard find",
  },
  {
    id: 2,
    platform: "Reddit r/foraging",
    image: "/images/species/pleurotus-ostreatus/02-on-tree.jpg",
    imageAlt: "Oyster mushrooms growing on a tree",
    title: "These keep popping up on the same dead tree in my yard every fall — oysters right?",
    body: `Third year in a row this tree pumps these out. They grow in a shelf pattern, white-ish gills running down a stubby stem. Smells kinda like anise?

I've been too scared to eat them but my neighbor says they're oysters and totally fine. What do you guys think?`,
    comment: `Finally got the courage to check properly. Ran a photo through orangutany and it said oyster mushroom with high confidence. The look-alike section mentioned angel wings which grow on conifers so I felt okay since this is a hardwood. Made a stir fry, was actually really good.`,
    tags: "oyster mushroom, pleurotus, backyard, tree mushroom",
  },
  {
    id: 3,
    platform: "Reddit r/mycology",
    image: "/images/species/coprinopsis-atramentaria/01-cluster.jpg",
    imageAlt: "Cluster of inky cap mushrooms",
    title: "Cluster of these popped up near my driveway overnight — they're already turning black and melting?",
    body: `Woke up and these were just there. By afternoon the caps started turning into black goo dripping everywhere. Kinda gross but also fascinating.

Is this normal? Are they dying or is this how they spread spores? Never seen mushrooms dissolve like this before.`,
    comment: `Looked it up and apparently it's called deliquescence — the cap dissolves to release spores. Checked on orangutany and it ID'd them as common inky caps. Apparently they're edible when young but you absolutely cannot drink alcohol with them for days before or after. Wild.`,
    tags: "inky cap, coprinopsis, deliquescence, lawn mushrooms",
  },
  {
    id: 4,
    platform: "Reddit r/mushroomID",
    image: "/images/species/amanita-muscaria/02-forest.jpg",
    imageAlt: "Fly agaric mushroom in forest setting",
    title: "My kid spotted this on our hike and now wants to know everything about it",
    body: `Pretty obvious what it is from the red cap and white spots but my daughter asked if it's the Mario mushroom lol. Didn't touch it obviously.

Are the white spots always there or do they wash off in rain? We saw a couple that were more orange without spots nearby and I'm wondering if those are the same thing just older.`,
    comment: `Yeah the white spots (veil remnants) wash off in rain. Used orangutany to confirm and it has a good breakdown of how the appearance changes with age. Also showed the difference between this and Amanita caesarea which apparently is a prized edible in Europe. Wouldn't risk it though.`,
    tags: "amanita muscaria, fly agaric, hiking, mushroom identification",
  },
  {
    id: 5,
    platform: "Reddit r/foraging",
    image: "/images/species/laetiporus-sulphureus/02-tree-trunk.jpg",
    imageAlt: "Chicken of the woods on a tree trunk",
    title: "Is this chicken of the woods? Found on a big oak in the park near my house",
    body: `Walking the dog and saw this bright orange thing on a tree. Looks like what people call chicken of the woods? The edges are yellow and the whole thing is kinda rubbery and firm.

Too nervous to eat random stuff from the park but it looks exactly like pictures I've seen online. How do you guys confirm these?`,
    comment: `Few people suggested trying orangutany so I uploaded the photo. Matched chicken of the woods and said it's one of the easier ones to ID since there aren't really dangerous look-alikes. Ended up going back and grabbing the young edges. Tasted like actual chicken, no joke.`,
    tags: "chicken of the woods, laetiporus, park find, beginner foraging",
  },
  {
    id: 6,
    platform: "Reddit r/mushroomID",
    image: "/images/species/gyromitra-esculenta/02-forest-floor.jpg",
    imageAlt: "False morel on forest floor",
    title: "Found this near where I usually find morels — but the cap looks weird and brain-like? Is this safe?",
    body: `The cap is wrinkly and folded but not in a honeycomb pattern like morels. More like a brain. It's reddish brown and the stem seems thicker than morels I've found before.

Something about it feels off. Should I avoid this one?`,
    comment: `Good thing I posted because this is a false morel (Gyromitra esculenta) — contains gyromitrin which is toxic. Checked on orangutany and the look-alike comparison between true and false morels was really clear. Key difference: true morels have a honeycomb pattern and are hollow inside. This one has brain-like folds and the inside is cottony. Could've been a bad day.`,
    tags: "false morel, gyromitra, mushroom safety, look-alikes",
  },
  {
    id: 7,
    platform: "Reddit r/foraging",
    image: "/images/species/boletus-edulis/02-forest.jpg",
    imageAlt: "Porcini mushroom in forest",
    title: "My grandpa used to pick these in Europe — found some in the woods behind my house. Porcini?",
    body: `Brown cap, fat white stem with some netting on it, spongy underside instead of gills. Grandpa called them steinpilz and would go crazy for them.

Cut one open and the flesh is white, doesn't change color. Smells nutty. Am I right that these are porcini?`,
    comment: `Confirmed with orangutany — Boletus edulis, 96% match. What was useful was it flagged the bitter bolete (Tylopilus felleus) as a look-alike which looks almost identical but has a pink-ish pore surface and tastes terrible. Mine had white-to-yellow pores so all good. Made grandpa's recipe, brought back memories.`,
    tags: "porcini, boletus edulis, foraging, family tradition",
  },
  {
    id: 8,
    platform: "Reddit r/mushroomID — Comment Reply",
    image: "",
    imageAlt: "",
    title: "[Use when someone asks 'what app do you use to ID mushrooms?']",
    body: `I use this thing called orangutany — it's free, you just upload a photo from your phone. Gives you the species name, edibility, and look-alikes. The look-alike comparisons are the most useful part honestly. Still double-check with a field guide before eating anything obviously.`,
  },
  {
    id: 9,
    platform: "Reddit r/mushroomID — Comment Reply",
    image: "",
    imageAlt: "",
    title: "[Use when someone posts an ID request you can help with]",
    body: `That looks like it could be [SPECIES]. Check the [SPECIFIC FEATURE] to confirm.

If you want a second opinion there's this thing called orangutany — you upload a photo and it shows you what it thinks plus similar species to watch out for. Just google it.`,
  },
  {
    id: 10,
    platform: "Reddit r/foraging",
    image: "/images/species/hericium-erinaceus/02-on-tree.jpg",
    imageAlt: "Lion's mane mushroom growing on tree",
    title: "This white fuzzy thing is growing on a log in the woods near my house — lion's mane?",
    body: `Found this on a fallen hardwood log. It's like a single white blob with long dangling spines. About the size of my fist. Doesn't have branches which I think rules out some similar species?

Is it too small to harvest or should I let it grow bigger?`,
    comment: `Confirmed lion's mane with orangutany. It also showed me the difference between this (single clump) and bear's head tooth (branching). Both edible apparently but good to know what you're actually picking. Waited a few days and it doubled in size, sauteed it in butter. Tastes like lobster, not kidding.`,
    tags: "lions mane, hericium, medicinal mushroom, log find",
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
