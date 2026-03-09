import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Priya Sharma, Fungal Ecology Writer",
  description:
    "Priya Sharma is an environmental scientist in Vancouver, BC who writes about mushroom ecology, seasonal foraging, and fungal biodiversity for Orangutany.",
  alternates: { canonical: "/authors/priya-sharma" },
  openGraph: {
    title: "Priya Sharma, Fungal Ecology Writer",
    description:
      "Environmental scientist writing about mushroom ecology and seasonal foraging. Based in Vancouver, BC.",
  },
};

export default function PriyaSharmaPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-8">
      <header>
        <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground sm:text-3xl">
          Priya Sharma
        </h1>
        <p className="mt-1 text-sm text-primary">Environmental Scientist &middot; Fungal Ecology Writer</p>
        <p className="mt-1 text-xs text-muted-foreground">Vancouver, British Columbia</p>
      </header>

      <section className="mt-6 space-y-3">
        <p className="text-sm leading-relaxed text-foreground/80">
          Mushrooms are the internet of the forest. I just like explaining how the network works. I&apos;m an
          environmental scientist based in Vancouver with an MSc in Ecology from UBC. I spent several years working
          with BC Parks on invasive species monitoring before shifting my focus to fungal biodiversity, specifically
          the role mushrooms play in forest ecosystems and how seasonal patterns shape what fruits where.
        </p>
        <p className="text-sm leading-relaxed text-foreground/80">
          I grew up in Surrey, BC. My parents are from Punjab, and mushroom foraging wasn&apos;t part of my culture
          growing up. But the temperate rainforests of British Columbia converted me. Once you start noticing
          mycorrhizal networks and the way fungi connect entire stands of trees underground, it&apos;s hard to look
          at a forest the same way. I&apos;ve done fungal biodiversity surveys in Pacific Spirit Park and I&apos;m
          a member of the Vancouver Mycological Society.
        </p>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-card p-5">
        <h2 className="mb-3 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
          Background
        </h2>
        <dl className="space-y-3 text-sm">
          <div>
            <dt className="font-medium text-foreground">Based in</dt>
            <dd className="text-foreground/70">Vancouver, British Columbia, Canada</dd>
          </div>
          <div className="border-t border-border pt-3">
            <dt className="font-medium text-foreground">Education</dt>
            <dd className="text-foreground/70">MSc in Ecology, University of British Columbia</dd>
          </div>
          <div className="border-t border-border pt-3">
            <dt className="font-medium text-foreground">Memberships</dt>
            <dd className="text-foreground/70">Vancouver Mycological Society</dd>
          </div>
          <div className="border-t border-border pt-3">
            <dt className="font-medium text-foreground">Focus areas</dt>
            <dd className="text-foreground/70">Fungal ecology, mycorrhizal networks, seasonal foraging patterns, habitat relationships, biodiversity surveys</dd>
          </div>
        </dl>
      </section>

      <section className="mt-8">
        <h2 className="mb-4 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
          Articles by Priya
        </h2>
        <ul className="space-y-2">
          <li>
            <Link href="/articles/mushrooms-in-your-yard" className="text-sm text-primary hover:underline">
              Mushrooms in Your Yard
            </Link>
          </li>
          <li>
            <Link href="/guides/mushroom-foraging-by-season" className="text-sm text-primary hover:underline">
              Mushroom Foraging by Season
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
            name: "Priya Sharma",
            url: "https://guide.orangutany.com/authors/priya-sharma",
            jobTitle: "Environmental Scientist",
            description:
              "Environmental scientist and fungal ecology writer based in Vancouver, BC. MSc in Ecology from UBC. Member of the Vancouver Mycological Society.",
            sameAs: ["https://orangutany.com"],
            knowsAbout: [
              "Fungal ecology",
              "Mycorrhizal networks",
              "Seasonal mushroom foraging",
              "Biodiversity surveys",
              "Pacific Northwest fungi",
            ],
          }),
        }}
      />
    </article>
  );
}
