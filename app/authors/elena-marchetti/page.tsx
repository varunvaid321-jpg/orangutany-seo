import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Elena Marchetti, Forensic Mycology Writer | Orangutany",
  description:
    "Elena Marchetti is a freelance journalist based in Brooklyn, NY who covers mushroom poisoning cases, forensic mycology, and the darker side of fungi for Orangutany.",
  alternates: { canonical: "/authors/elena-marchetti" },
  openGraph: {
    title: "Elena Marchetti, Forensic Mycology Writer",
    description:
      "Freelance journalist covering mushroom poisoning cases and forensic mycology. Based in Brooklyn, NY.",
  },
};

export default function ElenaMarchettiPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-8">
      <header>
        <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground sm:text-3xl">
          Elena Marchetti
        </h1>
        <p className="mt-1 text-sm text-primary">Freelance Journalist &middot; Forensic Mycology Writer</p>
        <p className="mt-1 text-xs text-muted-foreground">Brooklyn, New York</p>
      </header>

      <section className="mt-6 space-y-3">
        <p className="text-sm leading-relaxed text-foreground/80">
          I write about the mushrooms that kill people. Someone has to. I&apos;m a freelance journalist based in
          Brooklyn. Italian-American, grew up in a family where foraging was just what you did on weekends in the
          Catskills. My nonno could identify fifty species by smell alone. I mostly inherited his stubbornness.
        </p>
        <p className="text-sm leading-relaxed text-foreground/80">
          I have a BA in Journalism from Columbia and spent years covering true crime and investigative health stories.
          I got into mushroom writing after covering the Erin Patterson case in Australia for an online publication in
          2023. That story pulled me into forensic mycology, the science of how fungi kill, how poisonings are
          investigated, and why these cases are so hard to prosecute. I&apos;ve been writing about the darker side of
          fungi ever since.
        </p>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-card p-5">
        <h2 className="mb-3 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
          Background
        </h2>
        <dl className="space-y-3 text-sm">
          <div>
            <dt className="font-medium text-foreground">Based in</dt>
            <dd className="text-foreground/70">Brooklyn, New York</dd>
          </div>
          <div className="border-t border-border pt-3">
            <dt className="font-medium text-foreground">Education</dt>
            <dd className="text-foreground/70">BA in Journalism, Columbia University</dd>
          </div>
          <div className="border-t border-border pt-3">
            <dt className="font-medium text-foreground">Memberships</dt>
            <dd className="text-foreground/70">New York Mycological Society (since 2021)</dd>
          </div>
          <div className="border-t border-border pt-3">
            <dt className="font-medium text-foreground">Focus areas</dt>
            <dd className="text-foreground/70">Mushroom poisoning cases, forensic mycology, investigative reporting on fungi-related deaths</dd>
          </div>
        </dl>
      </section>

      <section className="mt-8">
        <h2 className="mb-4 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
          Articles by Elena
        </h2>
        <ul className="space-y-2">
          <li>
            <Link href="/articles/mushrooms-that-can-kill-you" className="text-sm text-primary hover:underline">
              Mushrooms That Can Kill You
            </Link>
          </li>
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
            name: "Elena Marchetti",
            url: "https://guide.orangutany.com/authors/elena-marchetti",
            jobTitle: "Freelance Journalist",
            description:
              "Freelance journalist covering mushroom poisoning cases and forensic mycology. Based in Brooklyn, NY. Member of the New York Mycological Society.",
            sameAs: ["https://orangutany.com"],
            knowsAbout: [
              "Forensic mycology",
              "Mushroom poisoning",
              "Investigative journalism",
              "Amatoxin poisoning",
            ],
          }),
        }}
      />
    </article>
  );
}
