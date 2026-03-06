import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Dog Ate a Mushroom: What Do I Do Right Now",
  description:
    "Your dog ate a wild mushroom. Here's exactly what to do: call your vet, save the mushroom, and get to the clinic. Covers toxic species, symptoms, timelines, and treatment.",
  alternates: { canonical: "/dog-ate-mushroom" },
  openGraph: {
    title: "My Dog Ate a Mushroom: What Do I Do Right Now",
    description:
      "Your dog ate a wild mushroom. Here's exactly what to do: call your vet, save the mushroom, and get to the clinic. Covers toxic species, symptoms, timelines, and treatment.",
  },
};

const SEO_QUERIES = [
  "my dog ate a mushroom",
  "dog ate mushroom in yard",
  "are yard mushrooms poisonous to dogs",
  "dog ate wild mushroom symptoms",
  "mushroom poisoning in dogs",
  "death cap mushroom dogs",
  "what to do if dog eats mushroom",
  "toxic mushrooms for dogs",
  "dog ate mushroom what to do",
  "mushroom poisoning dog treatment",
  "how long after eating mushroom will dog get sick",
  "ASPCA poison control mushroom",
];

export default function DogAteMushroomPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground sm:text-3xl">
          My Dog Ate a Mushroom: What Do I Do Right Now
        </h1>
        <p className="mt-2 text-xs text-muted-foreground">
          By Daniel Okafor &middot;{" "}
          <a
            href="https://orangutany.com"
            className="text-primary hover:underline"
          >
            Orangutany
          </a>
        </p>
      </div>

      <div className="space-y-10">
        {/* Emergency callout */}
        <section className="rounded-xl border border-red-800/30 bg-red-950/20 p-6">
          <p className="text-lg font-bold leading-snug text-red-300 sm:text-xl">
            If your dog ate a wild mushroom in the last 2 hours: call your vet
            or ASPCA Animal Poison Control{" "}
            <a
              href="tel:888-426-4435"
              className="font-mono text-red-200 hover:underline"
            >
              (888-426-4435)
            </a>{" "}
            NOW. Don&apos;t wait. Bring the mushroom or a photo if you can.
          </p>
          <p className="mt-4 text-sm font-semibold text-red-400">
            OK. If you&apos;ve made the call, keep reading. If you
            haven&apos;t, stop reading and call.
          </p>
        </section>

        {/* TODO: photo. dog near mushrooms in grass */}

        {/* Right Now: What to Do in the First Hour */}
        <section>
          <h2 className="mb-4 font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
            Right Now: What to Do in the First Hour
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-foreground/80">
            I&apos;m going to be straight with you. The next 60 minutes matter
            more than anything you read online. Here&apos;s the checklist:
          </p>

          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="mt-0.5 flex-shrink-0 text-orange-400">
                &#9679;
              </span>
              <p className="text-sm text-foreground/90">
                <strong>Do NOT try to make your dog vomit</strong> unless a vet
                tells you to. Hydrogen peroxide gets thrown around on forums. It
                can cause chemical burns in the esophagus. Wait for professional
                instruction.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="mt-0.5 flex-shrink-0 text-orange-400">
                &#9679;
              </span>
              <p className="text-sm text-foreground/90">
                <strong>
                  Grab the mushroom (or whatever&apos;s left).
                </strong>{" "}
                Put it in a paper bag, not plastic. Plastic traps moisture
                and accelerates decomposition. A paper towel works too. If
                there&apos;s nothing left, skip to the next step.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="mt-0.5 flex-shrink-0 text-orange-400">
                &#9679;
              </span>
              <p className="text-sm text-foreground/90">
                <strong>Take photos.</strong> The whole mushroom. The gills
                underneath. The base where it meets the ground. Where it was
                growing: grass, mulch, under a tree. All of this helps
                with ID.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="mt-0.5 flex-shrink-0 text-orange-400">
                &#9679;
              </span>
              <p className="text-sm text-foreground/90">
                <strong>Note what time the dog ate it.</strong> The vet needs
                this. If you&apos;re not sure, give your best estimate.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="mt-0.5 flex-shrink-0 text-orange-400">
                &#9679;
              </span>
              <p className="text-sm text-foreground/90">
                <strong>Head to the vet.</strong> Don&apos;t Google first. Go.
                You can read the rest of this article in the waiting room.
              </p>
            </div>
          </div>
        </section>

        {/* TODO: photo. person picking mushroom from lawn */}

        {/* How Bad Is This, Really? */}
        <section>
          <h2 className="mb-4 font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
            How Bad Is This, Really?
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-foreground/80">
            Here&apos;s the honest answer: about 99% of mushrooms won&apos;t
            kill your dog. Most yard mushrooms cause nothing worse than an upset
            stomach.
          </p>
          <p className="mb-3 text-sm leading-relaxed text-foreground/80">
            But that 1% includes{" "}
            <Link
              href="/mushrooms/amanita-phalloides"
              className="text-primary hover:underline"
            >
              <em>Amanita phalloides</em>
            </Link>{" "}
            (death cap) and{" "}
            <Link
              href="/mushrooms/amanita-virosa"
              className="text-primary hover:underline"
            >
              <em>Amanita bisporigera</em>
            </Link>{" "}
            (destroying angel). Those absolutely will kill your dog.
          </p>

          <div className="space-y-4">
            <div className="rounded-xl border border-border bg-card p-4">
              <h3 className="text-sm font-semibold text-foreground">
                GI Upset Mushrooms (Most Common)
              </h3>
              <p className="mt-1 text-sm text-foreground/80">
                Vomiting, diarrhea, lethargy. Unpleasant but survivable.
                This is the most likely outcome. Your dog feels terrible for
                12&ndash;24 hours, then bounces back.
              </p>
            </div>

            <div className="rounded-xl border border-red-800/30 bg-red-950/20 p-4">
              <h3 className="text-sm font-semibold text-red-300">
                Liver-Destroying Mushrooms (Worst Case)
              </h3>
              <p className="mt-1 text-sm text-foreground/80">
                <Link
                  href="/mushrooms/amanita-phalloides"
                  className="text-primary hover:underline"
                >
                  Amanita
                </Link>
                ,{" "}
                <Link
                  href="/mushrooms/galerina-marginata"
                  className="text-primary hover:underline"
                >
                  Galerina
                </Link>
                , Lepiota. Symptoms might not show for 6&ndash;12 hours. By then
                the damage is already happening. These destroy the liver
                cell by cell.
              </p>
            </div>

            <div className="rounded-xl border border-yellow-800/30 bg-yellow-950/20 p-4">
              <h3 className="text-sm font-semibold text-yellow-300">
                Neurological Mushrooms
              </h3>
              <p className="mt-1 text-sm text-foreground/80">
                <Link
                  href="/mushrooms/amanita-muscaria"
                  className="text-primary hover:underline"
                >
                  <em>Amanita muscaria</em>
                </Link>
                ,{" "}
                <em>Amanita pantherina</em>. Dog acts drunk: stumbling,
                drooling, tremors. Usually recovers within 12 hours with
                vet monitoring.
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm font-medium text-foreground/90">
            The problem is: you don&apos;t know which one your dog ate.
            That&apos;s why you call the vet.
          </p>
        </section>

        {/* The Yard Mushrooms That Actually Kill Dogs */}
        <section>
          <h2 className="mb-4 font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
            The Yard Mushrooms That Actually Kill Dogs
          </h2>

          {/* TODO: photo. death cap in yard setting */}

          <div className="space-y-6">
            <div className="rounded-xl border border-red-800/30 bg-red-950/20 p-4">
              <h3 className="text-sm font-semibold text-red-300">
                Death Cap:{" "}
                <Link
                  href="/mushrooms/amanita-phalloides"
                  className="text-primary hover:underline"
                >
                  <em>Amanita phalloides</em>
                </Link>
              </h3>
              <p className="mt-2 text-sm text-foreground/80">
                Grows under oaks. White to greenish cap. This is the #1 dog
                killer. I&apos;m going to be straight with you: there was
                a family in Marin County, California whose golden retriever ate
                a death cap from their own yard. Liver failure within 48 hours
                despite aggressive treatment. The dog didn&apos;t survive.
              </p>
            </div>

            <div className="rounded-xl border border-red-800/30 bg-red-950/20 p-4">
              <h3 className="text-sm font-semibold text-red-300">
                <Link
                  href="/mushrooms/galerina-marginata"
                  className="text-primary hover:underline"
                >
                  <em>Galerina marginata</em>
                </Link>
              </h3>
              <p className="mt-2 text-sm text-foreground/80">
                Small brown mushroom. Grows on wood chips and mulch,
                exactly the stuff people put in their yards. Contains the same
                lethal amatoxins as death cap. A puppy in Portland ate several
                from bark mulch. The owner thought they were &ldquo;just
                LBMs&rdquo; (little brown mushrooms). They weren&apos;t.
              </p>
            </div>

            <div className="rounded-xl border border-yellow-800/30 bg-yellow-950/20 p-4">
              <h3 className="text-sm font-semibold text-yellow-300">
                <Link
                  href="/mushrooms/amanita-muscaria"
                  className="text-primary hover:underline"
                >
                  <em>Amanita muscaria</em>
                </Link>
              </h3>
              <p className="mt-2 text-sm text-foreground/80">
                The red one with white spots. Dogs vomit, stumble, and drool.
                Most survive but need vet monitoring. There&apos;s a Reddit post
                about a Lab in Oregon who ate one on a trail walk. The dog was
                stumbling and disoriented for hours but pulled through with IV
                fluids and observation.
              </p>
            </div>

            <div className="rounded-xl border border-orange-800/30 bg-orange-950/20 p-4">
              <h3 className="text-sm font-semibold text-orange-300">
                <Link
                  href="/mushrooms/inocybe-erubescens"
                  className="text-primary hover:underline"
                >
                  <em>Inocybe</em>
                </Link>{" "}
                and <em>Clitocybe</em> Species
              </h3>
              <p className="mt-2 text-sm text-foreground/80">
                Contain muscarine. Cause what vets call SLUDGE symptoms:
                salivation, lacrimation, urination, diarrhea. Sounds awful. It
                is. But it&apos;s treatable with atropine if you get to the vet
                in time.
              </p>
            </div>
          </div>
        </section>

        {/* Signs Your Dog Ate a Toxic Mushroom */}
        <section>
          <h2 className="mb-4 font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
            Signs Your Dog Ate a Toxic Mushroom
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-foreground/80">
            Timing matters more than anything. Pay attention to when symptoms
            show up, since it tells you what category of toxin you&apos;re
            dealing with.
          </p>

          <div className="space-y-3">
            <div className="rounded-xl border border-border bg-card p-4">
              <h3 className="text-sm font-semibold text-foreground">
                Within 30 Minutes to 2 Hours
              </h3>
              <p className="mt-1 text-sm text-foreground/80">
                Vomiting, diarrhea, drooling. This is actually the
                &ldquo;better&rdquo; scenario. Fast onset usually means
                GI irritants, not amatoxins.
              </p>
            </div>

            <div className="rounded-xl border border-red-800/30 bg-red-950/20 p-4">
              <h3 className="text-sm font-semibold text-red-300">
                6&ndash;12 Hours (DANGEROUS: This Delay Means Amatoxins)
              </h3>
              <p className="mt-1 text-sm text-foreground/80">
                Vomiting, bloody diarrhea, lethargy. The delayed onset is the
                signature of amatoxin poisoning. If your dog seemed fine for
                hours and then got sick, that is a red flag.
              </p>
            </div>

            <div className="rounded-xl border border-yellow-800/30 bg-yellow-950/20 p-4">
              <h3 className="text-sm font-semibold text-yellow-300">
                12&ndash;24 Hours After Eating
              </h3>
              <p className="mt-1 text-sm text-foreground/80">
                Appears to recover. This is the &ldquo;false recovery&rdquo;
                phase of amatoxin poisoning. The dog looks better. It&apos;s
                not better. The toxins are quietly destroying liver cells.
              </p>
            </div>

            <div className="rounded-xl border border-red-800/30 bg-red-950/20 p-4">
              <h3 className="text-sm font-semibold text-red-300">
                48&ndash;72 Hours
              </h3>
              <p className="mt-1 text-sm text-foreground/80">
                Liver failure. Jaundice (yellowing of eyes and gums), seizures,
                coma. At this point treatment options are severely limited.
              </p>
            </div>
          </div>

          <p className="mt-4 rounded-xl border border-orange-800/30 bg-orange-950/20 p-4 text-sm font-medium text-orange-300">
            If your dog seemed sick then seemed fine, that is NOT good news. Get
            to the vet.
          </p>
        </section>

        {/* TODO: photo. vet examining dog */}

        {/* What the Vet Will Do */}
        <section>
          <h2 className="mb-4 font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
            What the Vet Will Do
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-foreground/80">
            Knowing what to expect helps. Here&apos;s the standard protocol:
          </p>

          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="mt-0.5 flex-shrink-0 text-muted-foreground">
                &#9679;
              </span>
              <p className="text-sm text-foreground/90">
                <strong>Induce vomiting</strong> if the mushroom was eaten
                recently (usually within 1&ndash;2 hours).
              </p>
            </div>

            <div className="flex gap-3">
              <span className="mt-0.5 flex-shrink-0 text-muted-foreground">
                &#9679;
              </span>
              <p className="text-sm text-foreground/90">
                <strong>Activated charcoal</strong> to absorb remaining toxins
                in the GI tract.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="mt-0.5 flex-shrink-0 text-muted-foreground">
                &#9679;
              </span>
              <p className="text-sm text-foreground/90">
                <strong>Blood work</strong> for liver and kidney function.
                They&apos;ll likely recheck at 24 and 48 hours.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="mt-0.5 flex-shrink-0 text-muted-foreground">
                &#9679;
              </span>
              <p className="text-sm text-foreground/90">
                <strong>IV fluids</strong> to support organ function and flush
                toxins.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="mt-0.5 flex-shrink-0 text-muted-foreground">
                &#9679;
              </span>
              <p className="text-sm text-foreground/90">
                <strong>For suspected amatoxin poisoning:</strong> silibinin
                (milk thistle extract), n-acetylcysteine, and aggressive liver
                support. This is the heavy protocol.
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm font-medium text-foreground/90">
            Treatment is most effective in the first 6 hours. After 24 hours
            with amatoxins, options get limited.
          </p>
        </section>

        {/* How to Stop It From Happening Again */}
        <section>
          <h2 className="mb-4 font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
            How to Stop It From Happening Again
          </h2>

          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="mt-0.5 flex-shrink-0 text-muted-foreground">
                &#9679;
              </span>
              <p className="text-sm text-foreground/90">
                <strong>Walk your yard daily</strong>, especially after rain.
                Mushrooms can pop up overnight. One morning your yard is clear,
                the next morning there&apos;s a dozen.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="mt-0.5 flex-shrink-0 text-muted-foreground">
                &#9679;
              </span>
              <p className="text-sm text-foreground/90">
                <strong>Pick mushrooms before your dog can.</strong> Morning
                rounds. Get out there before you let the dog out. Takes less
                than 5 minutes.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="mt-0.5 flex-shrink-0 text-muted-foreground">
                &#9679;
              </span>
              <p className="text-sm text-foreground/90">
                <strong>Keep dogs on leash</strong> in wooded areas during
                mushroom season (fall and spring, mainly).
              </p>
            </div>

            <div className="flex gap-3">
              <span className="mt-0.5 flex-shrink-0 text-muted-foreground">
                &#9679;
              </span>
              <p className="text-sm text-foreground/90">
                <strong>Train the &ldquo;leave it&rdquo; command.</strong>{" "}
                Seriously. This saves dogs. It takes less time than you think to
                teach and it works on mushrooms, chicken bones, dead squirrels
                and everything.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="mt-0.5 flex-shrink-0 text-muted-foreground">
                &#9679;
              </span>
              <p className="text-sm text-foreground/90">
                <strong>Consider a muzzle</strong> for chronic mushroom-eating
                dogs on walks. Not punishment, protection. Some dogs just
                will not stop eating things off the ground.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="rounded-xl border border-border bg-card p-6">
          <p className="text-sm leading-relaxed text-foreground/90">
            Your dog doesn&apos;t know which mushrooms are safe. That&apos;s
            your job. Check the yard after rain, learn what{" "}
            <Link
              href="/mushrooms/amanita-phalloides"
              className="text-primary hover:underline"
            >
              death caps
            </Link>{" "}
            look like, and have your vet&apos;s number saved in your phone.
          </p>
          <p className="mt-3 text-sm text-foreground/70">
            Need to identify a mushroom your dog found?{" "}
            <a
              href="https://orangutany.com"
              className="text-primary hover:underline"
            >
              Orangutany
            </a>{" "}
            can help you ID it from a photo.
          </p>
        </section>

        {/* SEO keyword list */}
        <section className="border-t border-border pt-6">
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Related searches
          </h3>
          <ul className="list-disc pl-5 space-y-0.5">
            {SEO_QUERIES.map((q) => (
              <li
                key={q}
                className="text-xs text-muted-foreground"
              >
                {q}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* JSON-LD Article schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "My Dog Ate a Mushroom: What Do I Do Right Now",
            description:
              "Your dog ate a wild mushroom. Here's exactly what to do: call your vet, save the mushroom, and get to the clinic. Covers toxic species, symptoms, timelines, and treatment.",
            author: {
              "@type": "Person",
              name: "Daniel Okafor",
              url: "https://orangutany.com",
            },
            publisher: {
              "@type": "Organization",
              name: "Orangutany",
              url: "https://orangutany.com",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://guide.orangutany.com/dog-ate-mushroom",
            },
            url: "https://guide.orangutany.com/dog-ate-mushroom",
          }),
        }}
      />
    </article>
  );
}
