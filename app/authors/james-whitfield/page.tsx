import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "James Whitfield, Beginner Foraging Guide Writer | Orangutany",
  description:
    "James Whitfield is an outdoor recreation coordinator in Asheville, NC who writes beginner-friendly mushroom foraging guides for Orangutany.",
  alternates: { canonical: "/authors/james-whitfield" },
  openGraph: {
    title: "James Whitfield, Beginner Foraging Guide Writer",
    description:
      "Outdoor recreation coordinator and beginner foraging guide writer. Based in Asheville, NC.",
  },
};

export default function JamesWhitfieldPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-8">
      <header>
        <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground sm:text-3xl">
          James Whitfield
        </h1>
        <p className="mt-1 text-sm text-primary">Outdoor Recreation Coordinator &middot; Beginner Foraging Guide</p>
        <p className="mt-1 text-xs text-muted-foreground">Asheville, North Carolina</p>
      </header>

      <section className="mt-6 space-y-3">
        <p className="text-sm leading-relaxed text-foreground/80">
          I&apos;m basically the guy who got into mushrooms last year and won&apos;t shut up about it. A friend
          showed me chicken of the woods on a hike in 2024, and within a month I was buying field guides and
          joining Reddit threads at 2 AM. No formal mycology training. I learned from YouTube, Reddit, and a lot
          of mistakes. But honestly, that makes me good at writing for beginners. I remember what it&apos;s like to
          not know anything.
        </p>
        <p className="text-sm leading-relaxed text-foreground/80">
          I work as an outdoor recreation coordinator in Asheville, which means I spend most of my week getting
          people outside anyway. On weekends I volunteer with the Appalachian Mycological Society and lead beginner
          foraging walks. I studied Recreation Management at Western Carolina University, not exactly a mycology
          degree, but it taught me how to teach people things without making them feel stupid.
        </p>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-card p-5">
        <h2 className="mb-3 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
          Background
        </h2>
        <dl className="space-y-3 text-sm">
          <div>
            <dt className="font-medium text-foreground">Based in</dt>
            <dd className="text-foreground/70">Asheville, North Carolina</dd>
          </div>
          <div className="border-t border-border pt-3">
            <dt className="font-medium text-foreground">Education</dt>
            <dd className="text-foreground/70">Recreation Management, Western Carolina University</dd>
          </div>
          <div className="border-t border-border pt-3">
            <dt className="font-medium text-foreground">Memberships</dt>
            <dd className="text-foreground/70">Appalachian Mycological Society (volunteer walk leader)</dd>
          </div>
          <div className="border-t border-border pt-3">
            <dt className="font-medium text-foreground">Focus areas</dt>
            <dd className="text-foreground/70">Beginner foraging education, species identification for newcomers, outdoor recreation</dd>
          </div>
        </dl>
      </section>

      <section className="mt-8">
        <h2 className="mb-4 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
          Articles by James
        </h2>
        <ul className="space-y-2">
          <li>
            <Link href="/beginners-guide-to-mushroom-foraging" className="text-sm text-primary hover:underline">
              Beginner&apos;s Guide to Mushroom Foraging
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
            name: "James Whitfield",
            url: "https://guide.orangutany.com/authors/james-whitfield",
            jobTitle: "Outdoor Recreation Coordinator",
            description:
              "Outdoor recreation coordinator and beginner foraging guide writer based in Asheville, NC. Volunteer with the Appalachian Mycological Society.",
            sameAs: ["https://orangutany.com"],
            knowsAbout: [
              "Beginner mushroom foraging",
              "Outdoor recreation",
              "Mushroom identification",
              "Appalachian fungi",
            ],
          }),
        }}
      />
    </article>
  );
}
