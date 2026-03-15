// Reusable schema.org helpers for structured data.
import type { SpeciesRecord } from "./types";

const BASE = "https://guide.orangutany.com";

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Orangutany",
    alternateName: [
      "Orangutany Mushroom Identification",
      "Orangutany Mushroom ID",
      "Orangutany Mushroom",
      "Orangutany Mushroom App",
      "Orangutany Mushroom Identifier",
      "Orangutany Foraging Guide",
      "Orangutany Mushroom Scanner",
      "Orangutany Mushroom Guide",
      "Orangutany ID",
    ],
    url: BASE,
    description:
      "Mushroom identification for people who love mushrooms. 100+ species with real photos, safety data, look-alikes, and foraging guides. Precision-engineered in Canada.",
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
    alternateName: [
      "Orangutany Mushroom ID",
      "Orangutany Mushroom App",
      "Orangutany Mushroom Identifier",
      "Orangutany Foraging",
    ],
    url: "https://orangutany.com",
    logo: "https://orangutany.com/icon.png",
    description:
      "Canadian mushroom identification company. Premium species guides, safety data, and foraging knowledge — precision-engineered for foragers worldwide.",
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

/** Truncate to first N sentences, max chars */
function truncate(text: string, maxChars: number): string {
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
  let result = "";
  for (const s of sentences) {
    if ((result + s).length > maxChars) break;
    result += s;
  }
  return result.trim() || text.slice(0, maxChars).trim();
}

/** Auto-generate FAQPage schema from species data fields */
export function speciesFaqSchema(species: SpeciesRecord) {
  const name = species.commonName;
  const questions: { name: string; text: string }[] = [];

  // Q1: Edibility — phrased differently for deadly species
  if (species.edibility === "deadly") {
    questions.push({
      name: `Is ${name} dangerous?`,
      text: `Yes — ${name} (${species.scientificName}) is deadly. ${truncate(species.edibilityNote, 280)}`,
    });
  } else if (species.edibility === "toxic") {
    questions.push({
      name: `Is ${name} safe to eat?`,
      text: `No — ${name} (${species.scientificName}) is toxic. ${truncate(species.edibilityNote, 280)}`,
    });
  } else {
    questions.push({
      name: `Is ${name} edible?`,
      text: truncate(species.edibilityNote, 300),
    });
  }

  // Q2: Identification — from cap, gills, stem (skip if fewer than 2 fields)
  const idParts: string[] = [];
  if (species.identification.cap) idParts.push(`Cap: ${truncate(species.identification.cap, 80)}`);
  if (species.identification.gills) idParts.push(`Gills: ${truncate(species.identification.gills, 80)}`);
  if (species.identification.stem) idParts.push(`Stem: ${truncate(species.identification.stem, 80)}`);
  if (idParts.length >= 2) {
    questions.push({
      name: `How do you identify ${name}?`,
      text: idParts.join(" "),
    });
  }

  // Q3: Look-alikes
  if (species.lookAlikes.length > 0) {
    const laText = species.lookAlikes
      .slice(0, 3)
      .map((la) => `${la.name}: ${truncate(la.distinction, 80)}`)
      .join(" ");
    questions.push({
      name: `What mushrooms look like ${name}?`,
      text: laText,
    });
  }

  // Q4: Habitat + season
  questions.push({
    name: `Where does ${name} grow?`,
    text: `${truncate(species.habitat, 150)} Season: ${truncate(species.season, 100)}`,
  });

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.name,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.text,
      },
    })),
  };
}
