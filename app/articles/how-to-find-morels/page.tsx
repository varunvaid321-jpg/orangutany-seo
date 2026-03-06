import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/shared/breadcrumb";
import { CtaBlock } from "@/components/shared/cta-block";

const title = "How to Find Morels: Everything I Learned After Failing for an Entire Season";
const description =
  "A practical guide to finding morel mushrooms, from soil temperature tricks to habitat clues. Written by a forager who spent weeks finding nothing before figuring it out.";
const slug = "how-to-find-morels";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `/articles/${slug}` },
  openGraph: { title, description },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  author: {
    "@type": "Person",
    name: "James Whitfield",
    url: "https://guide.orangutany.com/authors/james-whitfield",
  },
  publisher: {
    "@type": "Organization",
    name: "Orangutany",
    url: "https://orangutany.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://guide.orangutany.com/articles/${slug}`,
  },
};

const bcJsonLd = breadcrumbJsonLd([
  { name: "Articles", url: "/articles" },
  { name: "How to Find Morels", url: `/articles/${slug}` },
]);

export default function HowToFindMorelsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bcJsonLd) }}
      />

      <Breadcrumb
        items={[
          { label: "Articles", href: "/articles" },
          { label: "How to Find Morels" },
        ]}
      />

      <article>
        <header>
          <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground sm:text-3xl">
            How to Find Morels: Everything I Learned After Failing for an Entire Season
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            By{" "}
            <Link
              href="/authors/james-whitfield"
              className="text-primary hover:underline"
            >
              James Whitfield
            </Link>
          </p>
        </header>

        {/* --- Opening Story --- */}
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground/80">
          <p>
            Let me tell you about my first morel season, because it will make you feel better about
            yours.
          </p>
          <p>
            I spent three weeks driving around the mountains outside Asheville, hiking into spots
            people on foraging forums had vaguely alluded to, squinting at the ground until my neck
            hurt, and finding absolutely nothing. Zero morels. I found some cool rocks. I found a
            lot of sticks that looked like morels from twenty feet away. I found a deflated
            basketball in a creek bed once. But no morels.
          </p>
          <p>
            I was checking the Shroomery forums at 2 AM. I was reading Reddit threads from 2014
            where someone said &quot;try near the old railroad tracks off Highway 9&quot; and then
            driving there the next morning like a person who has lost control of their life. My wife
            started asking if I was okay. I told her I was &quot;just really into nature right
            now.&quot; She did not believe me.
          </p>
          <p>
            Then one afternoon in late April, I was walking along a ridgeline in Henderson County
            and I noticed a dying elm. The bark was peeling, the canopy was thin, and something
            in the back of my brain from all those forum posts went off. I looked at the base of
            the tree and there they were. A cluster of maybe eight yellow morels, just sitting
            there in the leaf litter like they&apos;d been waiting for me to stop being an idiot.
          </p>
          <p>
            I will not pretend I didn&apos;t almost cry. I definitely took twelve photos before
            I picked a single one. I called my buddy Marcus and he said &quot;cool&quot; in the
            tone of someone who does not understand what just happened.
          </p>
          <p>
            Since that day I&apos;ve gotten considerably better at this, mostly because I stopped
            looking at the ground and started paying attention to everything else. Here&apos;s
            what I know now that I wish someone had told me then.
          </p>
        </div>

        {/* --- What Morels Actually Look Like --- */}
        <hr className="my-8 border-border" />
        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
            What Morels Actually Look Like
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80">
            <p>
              If you&apos;ve never seen one in person, morels have a distinctive honeycomb-textured
              cap that looks like someone sculpted it out of a sponge. The cap is covered in ridges
              and pits, and the color ranges from pale yellowish-tan on young specimens all the way
              to dark brown or almost black on the black morel species. The cap shape is generally
              conical or egg-shaped, tapering to a point at the top.
            </p>
            <p>
              Here&apos;s the single most important identification step: cut one in half lengthwise.
              A true morel is completely hollow inside, from the tip of the cap all the way down
              through the stem. It&apos;s like a little cave in there. The cap is also attached
              directly to the stem at its base, not hanging free like a skirt. If the inside is
              solid, cottony, or chambered, you&apos;re looking at something else and you should
              put it down.
            </p>
            <p>
              The stem is whitish to cream-colored, sometimes with a slightly granular texture.
              The whole mushroom has a brittle, almost papery quality when it&apos;s dry, but
              when fresh they&apos;re surprisingly sturdy. They range from about two inches to
              sometimes six or seven inches tall, though the monsters are rare and you should
              feel personally blessed if you find one.
            </p>
            <div className="border-l-4 border-primary/40 pl-4 text-foreground/70">
              <strong className="text-foreground">Quick ID check:</strong> Honeycomb cap with pits
              and ridges. Completely hollow when sliced lengthwise. Cap attached at the base, not
              hanging free. If all three check out, you&apos;re probably holding a morel.
            </div>
          </div>
        </section>

        {/* --- The Holy Trinity of Morel Habitat --- */}
        <hr className="my-8 border-border" />
        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
            The Holy Trinity of Morel Habitat
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80">
            <p>
              There are three habitat types that produce morels more reliably than anything else.
              Once I understood this, my success rate went from &quot;zero mushrooms in three
              weeks&quot; to &quot;I have more morels than I can reasonably eat.&quot;
            </p>

            <h3 className="text-base font-semibold text-foreground pt-2">
              1. Dying and Dead Elms
            </h3>
            <p>
              This is the big one, especially in the eastern half of the country. Dutch elm disease
              has been killing American elms for decades, and morels absolutely love dying elms.
              The theory is that morels have a mycorrhizal relationship with living elms, and when
              the tree starts dying, that relationship breaks down. The fungus shifts from
              symbiotic mode to saprophytic mode and fruits aggressively, almost like a last hurrah.
              Look for elms with peeling bark, dead upper branches, and thinning canopies. The
              sweet spot seems to be trees that died within the last one to three years. Too fresh
              and the morels haven&apos;t ramped up yet. Too old and the nutrients are depleted.
            </p>

            <h3 className="text-base font-semibold text-foreground pt-2">
              2. Old Apple Orchards
            </h3>
            <p>
              Old, abandoned, or semi-neglected apple orchards are morel gold. I&apos;m not
              talking about active commercial orchards that get sprayed with fungicide (for obvious
              reasons). I mean the ones with gnarled trees, tall grass growing between the rows,
              maybe a few trees that fell over years ago. The decomposing apple wood and the
              specific soil chemistry around old fruit trees create conditions morels thrive in.
              If you can find an old orchard on a south-facing slope, you&apos;ve hit the lottery.
            </p>

            <h3 className="text-base font-semibold text-foreground pt-2">
              3. Recently Burned Forest Areas
            </h3>
            <p>
              This one is huge out west. After a forest fire, morels can fruit in absolutely insane
              numbers the following spring. We&apos;re talking hundreds of pounds per acre in some
              cases. The fire releases a massive burst of nutrients into the soil, kills competing
              fungi, and the morel mycelium that survived underground goes into overdrive. In the
              Pacific Northwest, commercial pickers follow burn maps the way storm chasers follow
              weather systems. Even smaller controlled burns can trigger a good flush. If there was
              a wildfire or prescribed burn in your area last summer or fall, check that ground in
              spring.
            </p>
          </div>
        </section>

        {/* --- Soil Temperature --- */}
        <hr className="my-8 border-border" />
        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
            Soil Temperature is Everything
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80">
            <p>
              This is the thing that changed everything for me. I used to just go out whenever it
              &quot;felt like spring&quot; and hope for the best. Then someone on a foraging forum
              told me to buy a soil thermometer and I thought they were being ridiculous. They
              were not being ridiculous.
            </p>
            <p>
              Morels fruit when soil temperatures at a depth of about four inches hit the 50 to
              53 degree Fahrenheit range. That&apos;s the window. Below 50 and the mycelium is
              still dormant. Above 55 or so and you&apos;ve probably missed the peak, though you
              might still find some stragglers in cooler microclimates on north-facing slopes.
            </p>
            <p>
              I bought a compost thermometer for eight bucks at the hardware store. It&apos;s
              basically a metal probe with a dial on the end. I stick it in the ground at my spots,
              wait thirty seconds, and check. When I started doing this, I stopped wasting trips.
              Instead of going out every weekend starting in March, I&apos;d check the soil temp
              at a few locations and wait until it was actually time.
            </p>
            <div className="border-l-4 border-primary/40 pl-4 text-foreground/70">
              <strong className="text-foreground">The lilac trick:</strong> If you don&apos;t
              want to buy a thermometer, watch the lilac bushes. When lilacs are in full bloom,
              soil temps in your area are usually right in the morel zone. It&apos;s not perfect,
              but it&apos;s a surprisingly reliable natural indicator. Old-timers have been using
              this one for generations.
            </div>
          </div>
        </section>

        {/* --- Time of Day and Weather --- */}
        <hr className="my-8 border-border" />
        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
            Time of Day and Weather
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80">
            <p>
              The best morel hunting happens after a warm rain. Not a cold front rain, not a
              thunderstorm that drops the temperature fifteen degrees. You want a gentle, warm
              rain followed by a day or two of mild weather. That combination triggers fruiting
              like nothing else. I&apos;ve had my best days two to three days after a warm spring
              rain, when daytime temps are in the 60s and nights stay above 40.
            </p>
            <p>
              As for time of day, I prefer mornings. Not because the morels are doing anything
              different, but because the light is better. When the sun is low and hitting the
              forest floor at an angle, the shadows make the honeycomb texture of morel caps pop
              against the leaf litter. By midday with overhead sun, everything flattens out
              visually and they blend in much more. Overcast days are also good because the diffuse
              light reduces harsh shadows from the canopy.
            </p>
            <p>
              I&apos;ve also had decent luck in the late afternoon for the same reason as
              mornings, that angled light. But honestly, if the conditions are right and you&apos;re
              in the right spot, time of day matters less then habitat. I just like mornings
              because the woods are quiet and I can pretend I&apos;m the only person who knows
              about the spot.
            </p>
          </div>
        </section>

        {/* --- Regional Timing --- */}
        <hr className="my-8 border-border" />
        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
            Regional Timing
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80">
            <p>
              Morel season moves north with the warming temperatures, roughly following what
              foragers sometimes call the &quot;morel front.&quot; If you&apos;re in the
              southern Appalachian foothills like me, you&apos;re looking at April, sometimes
              starting in late March at lower elevations if it&apos;s been a warm winter. Up in
              the hollows and at higher elevations, the season can push into early May.
            </p>
            <p>
              In the Midwest, which is arguably the morel capital of the country, prime time is
              late April through May. States like Missouri, Illinois, Indiana, and Michigan have
              massive morel cultures. There are festivals. People take vacation days. It&apos;s
              a whole thing.
            </p>
            <p>
              The Pacific Northwest is interesting because elevation plays such a big role. Valley
              floors might produce in April, but up at 3,000 to 5,000 feet you can find morels
              well into June or even July, especially in burn areas. Commercial pickers in Oregon
              and Washington basically follow the season uphill for months.
            </p>
            <p>
              The general rule: track your local soil temps and ignore calendar dates. A warm
              year might have morels popping three weeks early. A cold, wet spring might push
              things back. The mushrooms don&apos;t own calendars.
            </p>
          </div>
        </section>

        {/* --- The Mesh Bag Trick --- */}
        <hr className="my-8 border-border" />
        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
            The Mesh Bag Trick
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80">
            <p>
              Carry your morels in a mesh bag, not a plastic bag or a basket. As you walk through
              the woods, spores fall through the mesh openings and land on the ground behind you.
              You&apos;re basically seeding every trail you walk with morel spores. Will it
              definitely produce morels in those spots next year? No guarantees. Spore germination
              is complicated and depends on a bunch of factors we don&apos;t fully understand. But
              it costs you nothing and experienced foragers swear by it.
            </p>
            <p>
              I use an onion bag from the grocery store. Works perfectly and it&apos;s free.
              Some people buy fancy mesh foraging bags with shoulder straps and I respect that
              energy, but a repurposed onion bag gets the job done.
            </p>
          </div>
        </section>

        {/* --- My Honey Hole --- */}
        <hr className="my-8 border-border" />
        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
            My Honey Hole
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80">
            <p>
              My friend Travis has property in Henderson County with an old apple orchard on it.
              The previous owner planted the trees sometime in the 1960s and nobody has seriously
              maintained them in at least twenty years. Half the trees are dead or dying. The
              grass between the rows is knee-high by April. It&apos;s beautiful in a neglected,
              time-forgot-about-this-place kind of way.
            </p>
            <p>
              The first time I checked it for morels, I found over forty in a single visit. They
              were growing in clusters around the bases of the older apple trees, especially the
              ones that were clearly on their way out. Some were tucked under fallen branches
              where the leaf litter had piled up. A few were growing right out of old wood chip
              mulch that someone had spread years ago.
            </p>
            <p>
              I go back every spring now. The production varies year to year, some seasons I&apos;ll
              find a dozen, other years it&apos;s a bonanza. But it always produces something. If
              you can find an old orchard and get permission from the landowner, you might have
              yourself a spot for life. Just, you know, don&apos;t tell anyone about it. That&apos;s
              rule number one.
            </p>
          </div>
        </section>

        {/* --- What I Wish Someone Told Me --- */}
        <hr className="my-8 border-border" />
        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
            What I Wish Someone Told Me
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80">
            <p>
              Stop looking at the ground.
            </p>
            <p>
              I know that sounds insane. You&apos;re looking for something that grows on the
              ground. But here&apos;s the thing: if you walk through the woods staring at your
              feet, you&apos;re searching randomly. You&apos;re covering ground but you&apos;re
              not hunting smart. Instead, look at the trees.
            </p>
            <p>
              The trees tell you where the morels will be. A dying elm with peeling bark. An old
              tulip poplar with a damaged root system. A cluster of ash trees (ash and morels have
              a relationship too, especially as emerald ash borer kills more trees every year). A
              lone apple tree at the edge of an old homestead. When you spot the right tree, then
              you look at the ground around it. You&apos;re using the canopy as a map.
            </p>
            <p>
              This single shift in strategy, from scanning the ground to reading the trees,
              probably tripled my find rate. I cover less ground now than I used to, but I find
              way more mushrooms because I&apos;m only checking high-probability areas.
            </p>
            <div className="border-l-4 border-primary/40 pl-4 text-foreground/70">
              <strong className="text-foreground">Pro tip:</strong> Learn to identify dead and
              dying elms in winter, before they leaf out. The bark pattern and branch structure
              are distinctive even without leaves. If you can spot your target trees in February,
              you&apos;ll know exactly where to look when April rolls around.
            </div>
          </div>
        </section>

        {/* --- The Reddit Incident --- */}
        <hr className="my-8 border-border" />
        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
            The Time Reddit Came for Me
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80">
            <p>
              I have to tell this story because it still makes me laugh.
            </p>
            <p>
              After a particularly good day at Travis&apos;s orchard, I posted a photo of my haul
              on r/mycology. Nice little arrangement on a cutting board, maybe thirty morels of
              various sizes. I was feeling proud. Caption was something like &quot;Best day of
              the season, southern Appalachians coming through.&quot;
            </p>
            <p>
              Within an hour, someone comments: &quot;Those are half-frees, not true morels.&quot;
            </p>
            <p>
              Now, I knew some of them were half-free morels (Morchella punctipes). The cap only
              attaches about halfway down instead of at the base. They&apos;re still morels.
              They&apos;re still edible. They&apos;re still delicious. But this person was acting
              like I&apos;d posted a photo of grocery store portabellas and called them wild.
            </p>
            <p>
              What followed was a forty-comment thread about morel taxonomy, whether half-frees
              &quot;count,&quot; and at one point someone brought up the 2012 reclassification of
              Morchella species and I knew we&apos;d all gone too far. Someone else said
              &quot;a morel is a morel is a morel&quot; and got downvoted. I got a private message
              from a guy who said he&apos;d been foraging for thirty years and half-frees are
              &quot;perfectly respectable mushrooms&quot; which is a phrase I think about a lot.
            </p>
            <p>
              The internet is a strange place to be a forager. Just find the mushrooms, eat the
              mushrooms, and maybe don&apos;t post them online unless you want a taxonomy lesson
              from strangers.
            </p>
          </div>
        </section>

        {/* --- Closing --- */}
        <hr className="my-8 border-border" />
        <section>
          <div className="space-y-4 text-sm leading-relaxed text-foreground/80">
            <p>
              Finding morels is one of those skills that feels impossible until it clicks. You
              spend so long finding nothing that you start to wonder if morels are even real or if
              the whole thing is an elaborate prank by outdoorsy people. Then you find your first
              cluster and suddenly you can see them everywhere, like those magic eye posters from
              the 90s.
            </p>
            <p>
              Get a soil thermometer. Learn your trees. Check the orchards. Go after the warm
              rains. Bring a mesh bag. And when you finally find your first morel, take a moment
              to appreciate it before you start looking for the next one. You earned it.
            </p>
          </div>
        </section>

        <CtaBlock ctaType="identify" variant="card" />
      </article>
    </div>
  );
}
