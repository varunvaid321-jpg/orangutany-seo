import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Those Mushrooms in Your Yard: What They Are and Whether to Panic",
  description:
    "Found mushrooms growing in your lawn? Here's what they probably are, whether they're dangerous for dogs and kids, and what to do about them.",
  alternates: { canonical: "/articles/mushrooms-in-your-yard" },
  openGraph: {
    title: "Those Mushrooms in Your Yard: What They Are and Whether to Panic",
    description:
      "Found mushrooms growing in your lawn? Here's what they probably are, whether they're dangerous for dogs and kids, and what to do about them.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Those Mushrooms in Your Yard: What They Are and Whether to Panic",
  description:
    "Found mushrooms growing in your lawn? Here's what they probably are, whether they're dangerous for dogs and kids, and what to do about them.",
  author: {
    "@type": "Person",
    name: "Priya Sharma",
  },
  publisher: {
    "@type": "Organization",
    name: "Orangutany",
    url: "https://orangutany.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://orangutany.com/articles/mushrooms-in-your-yard",
  },
};

export default function MushroomsInYourYardPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        <header>
          <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground sm:text-3xl">
            Those Mushrooms in Your Yard: What They Are and Whether to Panic
          </h1>
          <p className="mt-2 text-xs text-muted-foreground">
            By Priya Sharma
          </p>
        </header>

        {/* --- Opening --- */}
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground/80">
          <p>
            You woke up, looked at your lawn, and there&apos;s a circle of
            mushrooms that definitely wasn&apos;t there yesterday. Your first
            thought: is this going to kill my dog? Your second thought: should I
            call someone? Relax. Let me walk you through this.
          </p>
        </div>

        {/* --- Why Mushrooms Suddenly Appear --- */}
        <hr className="my-8 border-border" />
        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
            Why Mushrooms Suddenly Appear in Your Yard
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80">
            <p>
              Here&apos;s the deal: mushrooms don&apos;t just show up out of
              nowhere. The fungus is already living in your soil; it has been
              for months or even years. What you see popping up on the surface is
              the fruiting body, which is basically the mushroom&apos;s way of
              spreading spores. The real organism, the mycelium, is a web of
              threads running through the dirt underneath your grass.
            </p>
            <p>
              So why now? Rain plus warm temperatures equals fruiting. A couple
              days of steady rain in late summer or early fall and suddenly
              every lawn on your block has mushrooms. It&apos;s completely
              normal. It doesn&apos;t mean your yard is sick or that
              something&apos;s wrong with your soil.
            </p>
            <p>
              In fact, it means the opposite. Those mushrooms are your
              lawn&apos;s digestive system. They&apos;re breaking down dead
              roots, old mulch, buried wood, all the organic matter that would
              otherwise just sit there. They&apos;re composting for free. Your
              soil is healthier because they&apos;re there.
            </p>
          </div>
        </section>

        {/* --- Most Common Yard Mushrooms --- */}
        <hr className="my-8 border-border" />
        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
            The Most Common Yard Mushrooms
          </h2>

          <div className="mt-6 space-y-6">
            {/* Fairy ring */}
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-base font-semibold text-foreground">
                Fairy Ring Mushrooms{" "}
                <span className="text-sm font-normal italic text-muted-foreground">
                  (Marasmius oreades)
                </span>
              </h3>
              {/* No fairy ring species image available yet */}
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                These are the ones that form those eerie circles in your grass.
                People used to think fairies danced there at night, hence the
                name. The circle expands outward each year as the mycelium grows.
                They&apos;re actually edible and pretty tasty, but real talk: do
                not eat mushrooms from a lawn that&apos;s been treated with
                herbicides or pesticides. The mushroom absorbs whatever&apos;s in
                the soil. If your neighbor sprays their lawn, yours probably has
                chemical drift too.
              </p>
            </div>

            {/* Ink caps */}
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-base font-semibold text-foreground">
                Ink Caps{" "}
                <span className="text-sm font-normal italic text-muted-foreground">
                  (<Link href="/mushrooms/coprinopsis-atramentaria" className="text-primary hover:underline">Coprinopsis atramentaria</Link>)
                </span>
              </h3>
              <img src="/images/species/coprinopsis-atramentaria/01-cluster.jpg" alt="Ink cap mushrooms growing in a cluster" className="mt-3 rounded-lg w-full max-h-56 object-cover" loading="lazy" />
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                You know these ones: they&apos;re the mushrooms that melt into
                black goo within a few hours of popping up. It&apos;s called
                autodigestion, and it&apos;s how they spread their spores. Gross
                but fascinating. So here&apos;s the thing about ink caps: they
                contain a compound called coprine which is fine on its own, but
                if you drink alcohol within a couple days of eating them, you
                will have a very bad time. Nausea, vomiting, heart
                palpitations. They used to be prescribed as an alcohol deterrent,
                which tells you everything you need to know.
              </p>
            </div>

            {/* Shaggy mane */}
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-base font-semibold text-foreground">
                Shaggy Mane{" "}
                <span className="text-sm font-normal italic text-muted-foreground">
                  (<Link href="/mushrooms/coprinus-comatus" className="text-primary hover:underline">Coprinus comatus</Link>)
                </span>
              </h3>
              <img src="/images/species/coprinus-comatus/01-young-cluster.jpg" alt="Shaggy mane mushrooms growing in grass" className="mt-3 rounded-lg w-full max-h-56 object-cover" loading="lazy" />
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                The shaggy mane looks like a lawyer&apos;s wig sitting in your
                lawn. Tall, white, covered in shaggy scales that curl outward.
                It&apos;s actually one of the better edible mushrooms out there , 
                delicate, almost buttery when saut&eacute;ed. The catch is you
                have to eat them within hours of picking, because they start
                self-digesting into ink just like their ink cap cousins. When
                they&apos;re young and still white and cylindrical, they&apos;re
                choice. Once the edges start turning black, leave them.
              </p>
            </div>

            {/* Puffballs */}
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-base font-semibold text-foreground">
                Common Puffballs{" "}
                <span className="text-sm font-normal italic text-muted-foreground">
                  (<Link href="/mushrooms/lycoperdon-perlatum" className="text-primary hover:underline">Lycoperdon perlatum</Link>)
                </span>
              </h3>
              <img src="/images/species/lycoperdon-perlatum/01-cluster-gems.jpg" alt="Common puffball mushrooms in grass" className="mt-3 rounded-lg w-full max-h-56 object-cover" loading="lazy" />
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                Little white balls sitting in your grass. Kids love stomping on
                them because they puff out a cloud of brown spores, which,
                honestly, is pretty satisfying. Puffballs are edible when
                they&apos;re young and the inside is pure white. If you slice one
                open and it&apos;s yellow, brown, or has any internal structure
                that looks like a tiny mushroom forming, don&apos;t eat it.
                That&apos;s either an old puffball or, worst case, a young
                Amanita egg, which is a very different situation.
              </p>
            </div>

            {/* Chlorophyllum molybdites */}
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-base font-semibold text-foreground">
                The Green-Spored Parasol{" "}
                <span className="text-sm font-normal italic text-muted-foreground">
                  (Chlorophyllum molybdites)
                </span>
              </h3>
              <img src="/images/species/chlorophyllum-rhacodes/01-growth-stages.jpg" alt="Parasol mushroom growth stages on lawn" className="mt-3 rounded-lg w-full max-h-56 object-cover" loading="lazy" />
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                This one has earned the nickname &quot;the vomiter&quot; and
                it&apos;s the most common cause of mushroom poisoning in North
                America. It looks almost exactly like an edible parasol mushroom,
                which is the problem. Big, white, impressive-looking thing
                growing right in the middle of your lawn. The giveaway is the
                spore print: take the cap off, set it on dark paper for a few
                hours, and if the print is greenish, that&apos;s your answer.
                There are real stories of neighborhood BBQs where someone picked
                these thinking they were parasols, cooked them up, and sent half
                the party to the emergency room. Nobody died, but everyone wished
                they had.
              </p>
            </div>

            {/* Yellow houseplant mushroom */}
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-base font-semibold text-foreground">
                Yellow Houseplant Mushroom{" "}
                <span className="text-sm font-normal italic text-muted-foreground">
                  (Leucocoprinus birnbaumii)
                </span>
              </h3>
              {/* No houseplant mushroom image available yet */}
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                If you&apos;ve ever found a bright, almost neon yellow mushroom
                popping up in a houseplant, this is it. They&apos;re incredibly
                common in potted plant soil, especially if you use commercial
                potting mix. They&apos;re mildly toxic, not going to kill you,
                but will definitely give you a stomachache if you eat them.
                They&apos;re not hurting your plant either. The mycelium is
                feeding on the organic matter in the soil. You can pick them out
                if they bother you, but they&apos;ll keep coming back until the
                food source runs out.
              </p>
            </div>

            {/* Stinkhorns */}
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-base font-semibold text-foreground">
                Stinkhorns
              </h3>
              {/* No stinkhorn image available yet */}
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                Oh, stinkhorns. They smell like something died in your mulch bed.
                They look... well, they look obscene. There&apos;s no polite way
                to describe a mature stinkhorn. They&apos;re covered in a dark,
                slimy spore mass that attracts flies, which then carry the spores
                elsewhere. So the whole strategy is: smell terrible, look
                terrible, let insects do the work. Despite all of that, they are
                completely harmless. Some people even eat the &quot;eggs&quot;
                before they emerge; they&apos;re considered a delicacy in parts
                of China. But honestly, most people just want to know how to make
                them stop appearing in their flower beds. The answer is: you
                can&apos;t, really. They&apos;re eating the mulch.
              </p>
            </div>
          </div>
        </section>

        {/* --- Can My Dog Eat Yard Mushrooms? --- */}
        <hr className="my-8 border-border" />
        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
            Can My Dog Eat Yard Mushrooms?
          </h2>
          <img src="/images/species/galerina-marginata/01-cluster-log.jpg" alt="Galerina marginata, a deadly lawn mushroom that looks harmless" className="mt-4 rounded-lg w-full max-h-64 object-cover" loading="lazy" />
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80">
            <p>
              Short answer: assume no. Assume every mushroom in your yard is
              toxic to your dog until you know otherwise.
            </p>
            <p>
              Real talk: most yard mushrooms won&apos;t kill a dog. The
              majority will cause some GI upset at worst. But &quot;most&quot; is
              doing a lot of heavy lifting in that sentence.{" "}
              <Link
                href="/mushrooms/amanita-phalloides"
                className="text-primary hover:underline"
              >
                Amanita species
              </Link>{" "}
              occasionally pop up in residential yards, especially under imported
              trees. And{" "}
              <Link
                href="/mushrooms/galerina-marginata"
                className="text-primary hover:underline"
              >
                Galerina marginata
              </Link>{" "}
             , a small, boring-looking brown mushroom, contains the same
              amatoxins as the Death Cap and grows in mulch beds and wood chip
              paths all over North America.
            </p>
            <p>
              There was a post on Reddit from a dog owner in Texas whose lab ate
              mushrooms from a mulch bed in their backyard. Emergency vet visit,
              IV fluids, activated charcoal, liver monitoring. $2,800 total. The
              dog survived, but the owner said the vet told them another few
              hours and it would have been a different story.
            </p>
            <p>
              Another case from a forum: a puppy in the Pacific Northwest ate a
              Galerina from the yard. By the time the owners noticed symptoms it
              was too late, the liver damage was already done. The puppy
              didn&apos;t make it.
            </p>
            <p>
              If your dog eats a yard mushroom: grab a sample, take a photo, call
              your vet. Don&apos;t wait for symptoms. By the time symptoms show
              up with amatoxin poisoning, the damage is already happening.
            </p>
          </div>
        </section>

        {/* --- Should You Remove Them? --- */}
        <hr className="my-8 border-border" />
        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
            Should You Remove Them?
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80">
            <p>
              You can kick them over, mow them down, pick them out, and
              they&apos;ll come back. The mushrooms you see are just the
              temporary fruiting bodies. The actual organism is the mycelium
              network underground, and to get rid of that you&apos;d have to
              remove all the organic matter it&apos;s feeding on. We&apos;re
              talking about digging up your entire lawn and replacing the soil,
              which, obviously, nobody&apos;s going to do.
            </p>
            <p>
              They&apos;re not hurting anything. They&apos;re not killing your
              grass (fairy rings can cause some browning, but that&apos;s about
              it). They&apos;re not spreading disease. They&apos;re part of a
              healthy ecosystem.
            </p>
            <p>
              That said, if you have dogs or small kids who put everything in
              their mouths, just go out and pick them before anyone can get to
              them. A quick walk around the yard after rain takes two minutes.
              It&apos;s not a permanent solution but it&apos;s the practical one.
            </p>
          </div>
        </section>

        {/* --- The One You Should Worry About --- */}
        <hr className="my-8 border-border" />
        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
            The One Yard Mushroom You Should Actually Worry About
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80">
            <p>
              If you live in an area with European oaks (and that includes huge
              swaths of California, the Pacific Northwest, and parts of the East
              Coast) you need to know about the{" "}
              <Link
                href="/mushrooms/amanita-phalloides"
                className="text-primary hover:underline"
              >
                Death Cap (Amanita phalloides)
              </Link>
              . It was introduced to North America on the roots of imported
              European oaks and has been spreading steadily ever since.
            </p>
            <img src="/images/species/amanita-phalloides/01-cap-top.jpg" alt="Death Cap mushroom (Amanita phalloides) showing greenish cap" className="rounded-lg w-full max-h-64 object-cover" loading="lazy" />
            <p>
              It looks like a perfectly normal white-to-greenish mushroom. No
              bright warning colors, no foul smell, nothing that screams
              &quot;danger.&quot; It actually smells pleasant when young. One
              mushroom contains enough amatoxin to kill an adult human. It kills
              people in California yards almost every year, often immigrants who
              mistake it for edible species from their home countries.
            </p>
            <p>
              If you have European oaks in or near your yard, learn what this
              mushroom looks like. It&apos;s the one that actually matters.
            </p>
          </div>
        </section>

        {/* --- Closing --- */}
        <section className="mt-10">
          <div className="space-y-4 text-sm leading-relaxed text-foreground/80">
            <p>
              Your lawn mushrooms are almost certainly harmless. But
              &quot;almost certainly&quot; isn&apos;t the same as
              &quot;definitely.&quot; Learn the dangerous ones, keep an eye on
              pets and kids, and otherwise let them be. They&apos;re doing your
              yard a favor.
            </p>
          </div>
        </section>

        {/* --- SEO queries --- */}
        <footer className="mt-12 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            People also search for: mushrooms growing in my yard, are yard
            mushrooms poisonous, mushroom growing in lawn after rain, can dogs
            eat yard mushrooms, how to get rid of mushrooms in yard, fairy ring
            in lawn, white mushrooms in yard, yellow mushroom in potted plant,
            brown mushroom in my yard, mushrooms in mulch, are lawn mushrooms
            dangerous for dogs, mushroom circle in grass
          </p>
        </footer>
      </article>
    </div>
  );
}
