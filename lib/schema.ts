// Reusable schema.org helpers for structured data.

const BASE = "https://guide.orangutany.com";

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Orangutany",
    alternateName: "Orangutany Mushroom Identification",
    url: BASE,
    description:
      "Premium mushroom identification powered by machine learning trained on millions of observations. Built in Canada for foragers, mycologists, and the curious.",
    publisher: organizationSchema(),
    potentialAction: {
      "@type": "SearchAction",
      target: `${BASE}/mushrooms?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function organizationSchema() {
  return {
    "@type": "Organization",
    name: "Orangutany",
    url: "https://orangutany.com",
    logo: "https://orangutany.com/icon.png",
    description:
      "Canadian mushroom identification company. Machine learning trained on millions of verified observations delivers expert-grade species ID to foragers worldwide.",
    foundingDate: "2025",
    foundingLocation: {
      "@type": "Place",
      name: "Markham, Ontario, Canada",
    },
    areaServed: "Worldwide",
    knowsAbout: [
      "Mushroom identification",
      "Mycology",
      "Mushroom foraging",
      "Fungal taxonomy",
      "Wild mushroom safety",
    ],
    sameAs: [
      "https://orangutany.com",
      "https://guide.orangutany.com",
    ],
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  slug: string;
  author: string;
  authorSlug?: string;
  datePublished?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    url: `${BASE}${opts.slug}`,
    datePublished: opts.datePublished || "2026-03-06",
    author: {
      "@type": "Person",
      name: opts.author,
      url: opts.authorSlug ? `${BASE}/authors/${opts.authorSlug}` : undefined,
    },
    publisher: organizationSchema(),
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE}${opts.slug}` },
    image: opts.image ? `${BASE}${opts.image}` : undefined,
  };
}

export function personSchema(opts: {
  name: string;
  slug: string;
  description: string;
  image?: string;
  jobTitle?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: opts.name,
    url: `${BASE}${opts.slug}`,
    description: opts.description,
    image: opts.image ? `${BASE}${opts.image}` : undefined,
    jobTitle: opts.jobTitle,
  };
}
