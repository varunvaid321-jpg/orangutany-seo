import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mei Lin Chen, Psychedelic Science Writer",
  description:
    "Mei Lin Chen is a science writer based in San Francisco covering psychedelics, neuroscience, and what mushrooms do to the brain for Orangutany.",
  alternates: { canonical: "/authors/mei-lin-chen" },
  openGraph: {
    title: "Mei Lin Chen, Psychedelic Science Writer",
    description:
      "Science writer covering psychedelics and neuroscience. Based in San Francisco.",
  },
};

export default function MeiLinChenPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-8">
      <header>
        <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground sm:text-3xl">
          Mei Lin Chen
        </h1>
        <p className="mt-1 text-sm text-primary">Science Writer &middot; Psychedelics &amp; Neuroscience</p>
        <p className="mt-1 text-xs text-muted-foreground">San Francisco, California</p>
      </header>

      <section className="mt-6 space-y-3">
        <p className="text-sm leading-relaxed text-foreground/80">
          I write about what mushrooms do to the brain, not how to find them in the woods. I started a PhD in
          Neuroscience at UCSF but left after qualifying exams to write full-time. Turns out I&apos;m better at
          explaining science than doing it at a bench. I cover psychedelics, neuroscience, and mental health for
          various publications, and I&apos;ve attended symposiums at the Johns Hopkins Center for Psychedelic &amp;
          Consciousness Research.
        </p>
        <p className="text-sm leading-relaxed text-foreground/80">
          I have no foraging experience and no plans to start. My interest in fungi is strictly neurochemical:
          psilocybin, muscimol, the serotonin receptor agonism, the clinical trial data. I&apos;m a member of the
          Science Writers Association and previously fact-checked for a health publication. When I write about
          psychoactive mushrooms, I&apos;m writing about the research, not the experience.
        </p>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-card p-5">
        <h2 className="mb-3 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
          Background
        </h2>
        <dl className="space-y-3 text-sm">
          <div>
            <dt className="font-medium text-foreground">Based in</dt>
            <dd className="text-foreground/70">San Francisco, California</dd>
          </div>
          <div className="border-t border-border pt-3">
            <dt className="font-medium text-foreground">Education</dt>
            <dd className="text-foreground/70">PhD coursework in Neuroscience, UCSF (completed qualifying exams)</dd>
          </div>
          <div className="border-t border-border pt-3">
            <dt className="font-medium text-foreground">Memberships</dt>
            <dd className="text-foreground/70">Science Writers Association</dd>
          </div>
          <div className="border-t border-border pt-3">
            <dt className="font-medium text-foreground">Focus areas</dt>
            <dd className="text-foreground/70">Psilocybin research, psychedelic neuroscience, mental health applications, clinical trial data</dd>
          </div>
        </dl>
      </section>

      <section className="mt-8">
        <h2 className="mb-4 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
          Articles by Mei Lin
        </h2>
        <ul className="space-y-2">
          <li>
            <Link href="/articles/psychoactive-mushrooms-science" className="text-sm text-primary hover:underline">
              The Science of Psychoactive Mushrooms
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
            name: "Mei Lin Chen",
            url: "https://guide.orangutany.com/authors/mei-lin-chen",
            jobTitle: "Science Writer",
            description:
              "Science writer covering psychedelics and neuroscience based in San Francisco. Former UCSF neuroscience PhD candidate.",
            sameAs: ["https://orangutany.com"],
            knowsAbout: [
              "Psilocybin",
              "Psychedelic neuroscience",
              "Mental health research",
              "Serotonin receptor pharmacology",
            ],
          }),
        }}
      />
    </article>
  );
}
