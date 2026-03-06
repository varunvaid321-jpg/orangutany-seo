import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Daniel Okafor, Veterinary Mycology Writer | Orangutany",
  description:
    "Daniel Okafor is a registered veterinary technician in Portland, OR who writes about mushroom poisoning in dogs and pet safety for Orangutany.",
  alternates: { canonical: "/authors/daniel-okafor" },
  openGraph: {
    title: "Daniel Okafor, Veterinary Mycology Writer",
    description:
      "Registered veterinary technician writing about mushroom poisoning in pets. Based in Portland, OR.",
  },
};

export default function DanielOkaforPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-8">
      <header>
        <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground sm:text-3xl">
          Daniel Okafor
        </h1>
        <p className="mt-1 text-sm text-primary">Registered Veterinary Technician &middot; Pet Safety Writer</p>
        <p className="mt-1 text-xs text-muted-foreground">Portland, Oregon</p>
      </header>

      <section className="mt-6 space-y-3">
        <p className="text-sm leading-relaxed text-foreground/80">
          I&apos;ve seen what a death cap does to a 70-pound lab. I&apos;d rather people read my article and panic
          a little than not read it and lose their dog. I work at an emergency animal hospital in Portland, and
          every fall we see a spike in mushroom poisoning cases: dogs that ate something in the yard or on a walk,
          owners who have no idea what species it was, and a clock that&apos;s already ticking.
        </p>
        <p className="text-sm leading-relaxed text-foreground/80">
          I have a BSc in Animal Science from Oregon State and I&apos;m a Certified Veterinary Technician. I got
          interested in mushroom identification specifically to help pet owners. I created an internal reference
          guide for our clinic that matched common Pacific Northwest mushrooms to their toxicity profiles and
          clinical signs. That guide became the basis for my articles here. I also volunteer with Dove Lewis
          Emergency Animal Hospital&apos;s community outreach, teaching pet owners what to watch for.
        </p>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-card p-5">
        <h2 className="mb-3 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
          Background
        </h2>
        <dl className="space-y-3 text-sm">
          <div>
            <dt className="font-medium text-foreground">Based in</dt>
            <dd className="text-foreground/70">Portland, Oregon</dd>
          </div>
          <div className="border-t border-border pt-3">
            <dt className="font-medium text-foreground">Education</dt>
            <dd className="text-foreground/70">BSc in Animal Science, Oregon State University &middot; Certified Veterinary Technician</dd>
          </div>
          <div className="border-t border-border pt-3">
            <dt className="font-medium text-foreground">Professional role</dt>
            <dd className="text-foreground/70">Registered Veterinary Technician at an emergency animal hospital</dd>
          </div>
          <div className="border-t border-border pt-3">
            <dt className="font-medium text-foreground">Focus areas</dt>
            <dd className="text-foreground/70">Mushroom poisoning in dogs, pet safety around wild fungi, toxicology of common yard mushrooms</dd>
          </div>
        </dl>
      </section>

      <section className="mt-8">
        <h2 className="mb-4 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
          Articles by Daniel
        </h2>
        <ul className="space-y-2">
          <li>
            <Link href="/articles/dog-ate-mushroom" className="text-sm text-primary hover:underline">
              My Dog Ate a Mushroom. What Do I Do?
            </Link>
          </li>
        </ul>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Daniel Okafor",
            url: "https://guide.orangutany.com/authors/daniel-okafor",
            jobTitle: "Registered Veterinary Technician",
            description:
              "Registered veterinary technician at an emergency animal hospital in Portland, OR. Writes about mushroom poisoning in dogs and pet safety.",
            sameAs: ["https://orangutany.com"],
            knowsAbout: [
              "Mushroom poisoning in dogs",
              "Veterinary toxicology",
              "Pet safety",
              "Pacific Northwest toxic mushrooms",
            ],
          }),
        }}
      />
    </article>
  );
}
