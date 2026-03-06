import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sofia Andersson, Investigative Journalist & Fungi Writer | Orangutany",
  description:
    "Sofia Andersson is a long-form journalist based in Stockholm, Sweden who writes investigative features on mushroom poisoning cases for Orangutany.",
  alternates: { canonical: "/authors/sofia-andersson" },
  openGraph: {
    title: "Sofia Andersson, Investigative Journalist & Fungi Writer",
    description:
      "Long-form investigative journalist covering mushroom poisoning cases. Based in Stockholm, Sweden.",
  },
};

export default function SofiaAnderssonPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-8">
      <header>
        <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground sm:text-3xl">
          Sofia Andersson
        </h1>
        <p className="mt-1 text-sm text-primary">Investigative Journalist &middot; Long-Form Features</p>
        <p className="mt-1 text-xs text-muted-foreground">Stockholm, Sweden</p>
      </header>

      <section className="mt-6 space-y-3">
        <p className="text-sm leading-relaxed text-foreground/80">
          I don&apos;t write clickbait. I write the full story and let people decide what to think. I am a
          long-form journalist based in Stockholm with a BA in Media Studies from Stockholm University. I grew up
          picking mushrooms with my grandmother in Dalarna. In Sweden, foraging is just something everyone does.
          It is not a hobby so much as a seasonal routine, like putting on winter tyres or complaining about the
          darkness in November.
        </p>
        <p className="text-sm leading-relaxed text-foreground/80">
          I spent much of 2023 covering the Australian mushroom poisoning case involving Erin Patterson, which led
          me deeper into writing about fungi, specifically the intersection of criminal investigation and
          mycology. English is my second language, and I am told my writing has a certain precision to it that
          comes from thinking in Swedish first. I consider that a feature, not a limitation. My articles are
          thorough, measured, and concerned primarily with getting the facts correct.
        </p>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-card p-5">
        <h2 className="mb-3 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
          Background
        </h2>
        <dl className="space-y-3 text-sm">
          <div>
            <dt className="font-medium text-foreground">Based in</dt>
            <dd className="text-foreground/70">Stockholm, Sweden</dd>
          </div>
          <div className="border-t border-border pt-3">
            <dt className="font-medium text-foreground">Education</dt>
            <dd className="text-foreground/70">BA in Media Studies, Stockholm University</dd>
          </div>
          <div className="border-t border-border pt-3">
            <dt className="font-medium text-foreground">Foraging background</dt>
            <dd className="text-foreground/70">Lifelong forager in the Swedish tradition. Grew up picking mushrooms in Dalarna with family.</dd>
          </div>
          <div className="border-t border-border pt-3">
            <dt className="font-medium text-foreground">Focus areas</dt>
            <dd className="text-foreground/70">Investigative features on mushroom poisoning cases, criminal mycology, long-form reporting</dd>
          </div>
        </dl>
      </section>

      <section className="mt-8">
        <h2 className="mb-4 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
          Articles by Sofia
        </h2>
        <ul className="space-y-2">
          <li>
            <Link href="/articles/australian-mushroom-poisoning" className="text-sm text-primary hover:underline">
              The Australian Mushroom Poisoning Case
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
            name: "Sofia Andersson",
            url: "https://guide.orangutany.com/authors/sofia-andersson",
            jobTitle: "Investigative Journalist",
            description:
              "Long-form investigative journalist based in Stockholm, Sweden. Covers mushroom poisoning cases and criminal mycology.",
            sameAs: ["https://orangutany.com"],
            knowsAbout: [
              "Investigative journalism",
              "Mushroom poisoning cases",
              "Swedish foraging traditions",
              "Criminal mycology",
            ],
          }),
        }}
      />
    </article>
  );
}
