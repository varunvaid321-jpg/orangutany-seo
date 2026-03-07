import { Metadata } from "next";
import Link from "next/link";
import { articleSchema } from "@/lib/schema";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/shared/breadcrumb";
import { CtaBlock } from "@/components/shared/cta-block";

const slug = "/articles/chicken-of-the-woods";
const title = "Chicken of the Woods Identification: A Forager's Field Guide";
const description =
  "How to identify Chicken of the Woods (Laetiporus sulphureus) in the field. Where to find it, what trees matter, how to cook it, and what to watch out for.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: slug },
  openGraph: { title, description },
};

const SEO_TAGS = [
  "chicken of the woods identification",
  "Laetiporus sulphureus",
  "chicken of the woods edible",
  "chicken mushroom on oak",
  "how to cook chicken of the woods",
  "chicken of the woods look-alikes",
  "wild edible polypore",
  "chicken of the woods allergic reaction",
  "foraging chicken of the woods",
  "sulfur shelf mushroom",
];

export default function ChickenOfTheWoodsPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-10">
      <Breadcrumb
        items={[
          { label: "Articles", href: "/articles" },
          { label: "Chicken of the Woods" },
        ]}
      />

      {/* Header */}
      <div className="mb-8">
        <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground sm:text-3xl">
          Chicken of the Woods Identification: A Forager&apos;s Field Guide
        </h1>
        <p className="mt-2 text-xs text-muted-foreground">
          By{" "}
          <Link
            href="/authors/varun-vaid"
            className="text-primary hover:underline"
          >
            Varun Vaid
          </Link>{" "}
          &middot;{" "}
          <a
            href="https://orangutany.com"
            className="text-primary hover:underline"
          >
            Orangutany
          </a>
        </p>
      </div>

      <div className="space-y-8">
        {/* Opening personal story */}
        <section>
          <p className="text-base leading-relaxed text-foreground/90">
            The first time I found chicken of the woods, I genuinely thought
            someone had stuck a painted shelf onto a fallen oak log. It was
            mid-August, somewhere along the Bruce Trail north of Toronto, and
            this thing was screaming orange. Not subtle orange, not
            &ldquo;autumn leaves&rdquo; orange. Electric, almost fluorescent,
            like someone had taken a highlighter to a tree stump. I crouched
            down and just stared at it for a good thirty seconds before I even
            touched it.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">
            The edges were soft and pliable, almost like raw chicken breast. The
            top surface faded from bright orange at the growing edge into a
            muted yellow closer to where it attached to the wood. Underneath,
            instead of gills, there were thousands of tiny pores, pale sulfur
            yellow, smooth to the touch. I had been reading about this mushroom
            for months. My PhD supervisor back in Lancaster, who first got me
            into foraging, had told me &ldquo;when you find your first chicken
            of the woods, you&apos;ll know.&rdquo; He was right. There is no
            mistaking this thing once you&apos;ve seen it in person. I cut a
            couple of the tender outer shelves with my knife, dropped them in my
            bag, and practically jogged back to the car.
          </p>
        </section>

        {/* What It Looks Like */}
        <section>
          <h2 className="mb-3 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
            What It Looks Like
          </h2>
          <p className="text-sm leading-relaxed text-foreground/80">
            Chicken of the woods (<em>Laetiporus sulphureus</em>), described in detail on{" "}
            <a href="https://www.mushroomexpert.com" className="text-primary underline hover:text-primary/80 transition" target="_blank" rel="noopener noreferrer">MushroomExpert.com</a>, grows in
            overlapping brackets or shelves, often in large rosettes that can
            weigh several kilograms. Individual shelves range from 5 to 30 cm
            across. The top surface is bright orange to orange-yellow, often
            with a suede-like texture when young. The color fades as it ages,
            eventually turning pale and chalky. The growing edge is usually the
            most vivid, sometimes almost pinkish-orange.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">
            Flip it over and you will see pores, not gills. This is a polypore.
            The pore surface is sulfur yellow when fresh, with very fine, almost
            pinprick-sized holes. If you do a spore print (place the pore
            surface face-down on dark paper), you will get a white print. The
            flesh is white to pale yellow, firm and somewhat moist in young
            specimens. Older specimens get dry, crumbly, and chalky. You do not
            want those.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">
            One of the most useful field markers: there is no stem. Chicken of
            the woods attaches directly to wood via a broad base. If you find
            something with a stem that &ldquo;looks like&rdquo; chicken of the
            woods, it is not chicken of the woods.
          </p>
        </section>

        {/* Where and When to Find It */}
        <section>
          <h2 className="mb-3 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
            Where and When to Find It
          </h2>
          <p className="text-sm leading-relaxed text-foreground/80">
            <em>Laetiporus sulphureus</em> is a wood-decay fungus. It feeds on
            dead or dying hardwood trees, with a strong preference for oak. You
            will also find it on cherry, beech, willow, and occasionally maple.
            It fruits from late spring through early fall in eastern North
            America, with peak season from June to September depending on your
            latitude and rainfall.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">
            Look for it on standing dead trees, fallen logs, and large stumps.
            It tends to appear after a few days of rain followed by warm
            weather. The same log or stump will often produce flushes year after
            year. My neighbor has a sugar maple in their front yard that
            produces a beautiful cluster of chicken of the woods every September
            like clockwork. I have been watching it for three years now. Same
            spot on the trunk, same time of year, without fail.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">
            If you are on the west coast, be aware that the species situation is
            different. <em>Laetiporus conifericola</em> grows on conifers in the
            Pacific Northwest. It looks very similar but the host tree matters
            enormously for edibility, which brings us to the next section.
          </p>
        </section>

        {/* The Trees Matter */}
        <section>
          <h2 className="mb-3 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
            The Trees Matter
          </h2>
          <p className="text-sm leading-relaxed text-foreground/80">
            This is something a lot of beginner foragers miss. Not all chicken
            of the woods is equally safe to eat, and the host tree is the
            variable that matters most. The general rule: stick to hardwoods,
            especially oak.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">
            Chicken of the woods growing on conifers (pine, spruce, hemlock) or
            on eucalyptus has caused gastrointestinal upset in a significant
            number of people. The exact mechanism is not fully understood, but
            it likely has to do with compounds the fungus absorbs from the host
            wood. Some people eat conifer-grown specimens with no issues. Others
            get nausea, vomiting, and stomach cramps. It is not worth the
            gamble.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">
            If you cannot identify the host tree, that is a reason to pass.
            Learn your trees. At minimum, learn to tell an oak from a conifer.
            If you are picking from a stump where the bark is gone and you
            cannot identify the species, leave it alone.
          </p>
        </section>

        {/* Cooking It Right */}
        <section>
          <h2 className="mb-3 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
            Cooking It Right
          </h2>
          <p className="text-sm leading-relaxed text-foreground/80">
            The nickname &ldquo;poor man&apos;s chicken&rdquo; exists for a
            reason. When you get a young, tender specimen and cook it properly,
            the texture is remarkably close to actual chicken breast. The key
            word there is &ldquo;young.&rdquo; Only harvest the outer edges of
            the brackets, the part that is still soft, pliable, and moist. If
            it is dry, crumbly, or has started to fade to white, leave it. Old
            chicken of the woods is like chewing on cork.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">
            Slice the tender edges into strips about 1 cm thick. Get a pan hot
            with butter (or olive oil if you prefer), and sautee the strips
            until they are golden on both sides and cooked through. Salt,
            pepper, maybe a squeeze of lemon. That is it. You do not need to do
            anything fancy. Some people bread and fry it like actual chicken
            cutlets, and honestly that works great too.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">
            The first time I cooked it, I brought it home and sauteed it in
            butter with garlic and a bit of salt. My mom was skeptical. She grew
            up in India where wild mushroom foraging is not really a thing, and
            the idea of her son bringing home fungus from a log in the woods did
            not inspire confidence. But she tried a piece, paused, and said
            &ldquo;this actually tastes like chicken.&rdquo; My dad had seconds.
            That was the moment I knew this mushroom was special. Even my
            parents, who have zero interest in foraging, were impressed.
          </p>
        </section>

        {/* Look-alikes */}
        <section>
          <h2 className="mb-3 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
            Look-alikes
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-foreground/80">
            Chicken of the woods is considered one of the safer mushrooms for
            beginners precisely because it does not have many dangerous
            look-alikes. That said, there are a couple of species that
            occasionally cause confusion.
          </p>

          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="text-sm font-semibold text-foreground">
                Black-staining Polypore (<em>Meripilus giganteus</em>)
              </h3>
              <p className="mt-1 text-sm text-foreground/80">
                This is probably the most common mix-up. <em>Meripilus</em>{" "}
                grows in large overlapping rosettes at the base of trees,
                similar to chicken of the woods. But the color is different:
                brown to tan on top, not orange. And here is the definitive
                test. Press or cut the flesh and it stains black within minutes.
                Chicken of the woods does not stain black. If it bruises dark,
                it is not what you want.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="text-sm font-semibold text-foreground">
                Jack O&apos;Lantern (<em>Omphalotus olearius</em>)
              </h3>
              <p className="mt-1 text-sm text-foreground/80">
                Jack O&apos;Lanterns are orange and grow on wood, which is where
                the similarity ends. They have true gills (not pores), they grow
                in clusters of individual capped mushrooms with stems, and they
                are shaped completely differently from the shelf-like brackets
                of chicken of the woods. Jack O&apos;Lanterns will give you
                serious GI distress but are not lethal. Still, if you look at
                the underside and see gills instead of pores, walk away. Simple
                as that.
              </p>
            </div>
          </div>
        </section>

        {/* Allergic Reactions */}
        <section className="rounded-xl border border-orange-800/30 bg-orange-950/20 p-6">
          <h2 className="mb-3 font-[family-name:var(--font-heading)] text-lg font-semibold text-orange-300">
            Allergic Reactions and Sensitivities
          </h2>
          <p className="text-sm leading-relaxed text-foreground/90">
            Here is something that catches people off guard: even when properly
            identified and properly cooked, chicken of the woods causes GI
            distress in roughly 10% of people who eat it, a reaction consistent with individual sensitivity patterns described in the{" "}
            <a href="https://www.ncbi.nlm.nih.gov/books/NBK537111/" className="text-primary underline hover:text-primary/80 transition" target="_blank" rel="noopener noreferrer">NIH mushroom toxicity reference</a>. Nausea, stomach
            cramps, sometimes vomiting. The reaction seems to be individual
            sensitivity rather than anything wrong with the mushroom itself.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-foreground/90">
            The standard advice, and I follow this myself, is to try a very
            small amount the first time. Cook a single strip, eat it, and wait
            24 hours. If you feel fine, go ahead and eat a full portion next
            time. Do not serve a big batch to a dinner party the first time you
            find it. You do not want to discover that three of your guests are
            in the unlucky 10% all at once.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-foreground/90">
            Also worth noting: some people who react to specimens from one tree
            are fine with specimens from a different tree. The host wood and the
            age of the mushroom both seem to play a role. If you have reacted
            before, it might be worth trying again with a specimen from a
            different hardwood, in a small amount.
          </p>
        </section>

        <CtaBlock ctaType="identify" variant="inline" />

        {/* SEO keyword pills */}
        <section className="border-t border-border pt-4">
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            People also search for
          </h3>
          <div className="flex flex-wrap gap-2">
            {SEO_TAGS.map((q) => (
              <span
                key={q}
                className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
              >
                {q}
              </span>
            ))}
          </div>
        </section>
      </div>

      {/* JSON-LD Article schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title,
              description,
              slug,
              author: "Varun Vaid",
              authorSlug: "varun-vaid",
              datePublished: "2026-03-06",
            })
          ),
        }}
      />

      {/* JSON-LD Breadcrumb schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Articles", url: "/articles" },
              { name: "Chicken of the Woods", url: slug },
            ])
          ),
        }}
      />
    </article>
  );
}
