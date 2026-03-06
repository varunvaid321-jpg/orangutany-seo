// Reusable schema.org helpers for structured data.

const BASE = "https://guide.orangutany.com";

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Orangutany Mushroom Guide",
    url: BASE,
    description: "Identify mushrooms with real images, habitat info, look-alikes, and safety notes.",
    publisher: organizationSchema(),
  };
}

export function organizationSchema() {
  return {
    "@type": "Organization",
    name: "Orangutany",
    url: "https://orangutany.com",
    logo: "https://orangutany.com/icon.png",
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
