import { Breadcrumb, breadcrumbJsonLd } from "@/components/shared/breadcrumb";
import { CtaBlock } from "@/components/shared/cta-block";
import { websiteSchema } from "@/lib/schema";

export const metadata = {
  title:
    "Mushroom Identification Resources - Books, Websites, Apps | Orangutany Guide",
  description:
    "Curated list of the best mushroom identification resources: field guides, websites, apps, and mycological societies.",
  alternates: { canonical: "/resources" },
};

const resources = [
  {
    category: "Websites and Databases",
    items: [
      {
        name: "iNaturalist",
        url: "https://www.inaturalist.org",
        description:
          "Community-driven species identification platform. Upload a photo and get IDs from naturalists worldwide.",
      },
      {
        name: "Mushroom Observer",
        url: "https://mushroomobserver.org",
        description:
          "Open-source database for recording and sharing mushroom observations. Strong community of serious mycologists.",
      },
      {
        name: "MycoKey",
        url: "https://www.mycokey.com",
        description:
          "Interactive key for identifying fungi based on physical characteristics. Covers thousands of species.",
      },
      {
        name: "MushroomExpert.com",
        url: "https://www.mushroomexpert.com",
        description:
          "Detailed species descriptions with photos, spore data, and habitat notes. Run by Michael Kuo.",
      },
    ],
  },
  {
    category: "Books and Field Guides",
    items: [
      {
        name: "Mushrooms Demystified by David Arora",
        url: "https://www.penguinrandomhouse.com/books/215148/mushrooms-demystified-by-david-arora/",
        description:
          "The classic North American field guide. Over 2,000 species, dichotomous keys, and witty writing.",
      },
      {
        name: "All That the Rain Promises and More by David Arora",
        url: "https://www.penguinrandomhouse.com/books/215147/all-that-the-rain-promises-and-more-by-david-arora/",
        description:
          "Pocket-sized companion to Mushrooms Demystified. Perfect for the trail.",
      },
      {
        name: "North American Mushrooms by Orson K. Miller Jr.",
        url: "https://www.falconguides.com",
        description:
          "Falcon field guide covering common and noteworthy North American species with color photos.",
      },
    ],
  },
  {
    category: "Apps",
    items: [
      {
        name: "Orangutany",
        url: "https://orangutany.com",
        description:
          "AI-powered mushroom identification from photos. Fast, visual, and built for the field.",
      },
      {
        name: "Seek by iNaturalist",
        url: "https://www.inaturalist.org/pages/seek_app",
        description:
          "Real-time species identification using your camera. Good for all organisms, not just fungi.",
      },
    ],
  },
  {
    category: "Mycological Societies",
    items: [
      {
        name: "North American Mycological Association (NAMA)",
        url: "https://namyco.org",
        description:
          "The largest mycological society in North America. Annual forays, workshops, and local club directory.",
      },
      {
        name: "British Mycological Society",
        url: "https://www.britmycolsoc.org.uk",
        description:
          "UK-based society promoting mycology through research, education, and field events.",
      },
    ],
  },
];

export default function ResourcesPage() {
  const crumbs = [{ label: "Resources" }];
  const crumbsLd = breadcrumbJsonLd([
    { name: "Resources", url: "/resources" },
  ]);

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbsLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
      />

      <Breadcrumb items={crumbs} />

      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        Mushroom Identification Resources
      </h1>
      <p className="mt-2 text-base text-muted-foreground">
        A curated collection of the best books, websites, apps, and
        organizations for learning to identify mushrooms. These are the tools
        and references we actually use.
      </p>

      {resources.map((section) => (
        <section key={section.category} className="mt-10">
          <h2 className="text-lg font-semibold text-foreground">
            {section.category}
          </h2>
          <div className="mt-3 space-y-3">
            {section.items.map((item) => (
              <div key={item.name} className="rounded-lg border border-border bg-card p-4">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  {item.name}
                </a>
                <p className="mt-1 text-xs text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      ))}

      <CtaBlock ctaType="try-app" variant="card" />
    </main>
  );
}
