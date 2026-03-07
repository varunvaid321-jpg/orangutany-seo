// Central typed index of all content pages and relationships.
// Used by: related content blocks, hub pages, sitemap, nav.

export type ContentType = "species" | "article" | "guide" | "hub" | "author" | "resource";
export type FunnelRole = "discovery" | "trust" | "conversion";
export type CtaType = "identify" | "upload" | "signup" | "try-app" | "distribution" | "none";

export interface ContentEntry {
  title: string;
  slug: string;
  type: ContentType;
  summary: string;
  keyword: string;
  ctaType: CtaType;
  hub: string | null;
  relatedSlugs: string[];
  published: boolean;
  featured: boolean;
  author?: string;
}

// --- Hub pages ---
export const hubs: ContentEntry[] = [
  {
    title: "All Mushroom Species",
    slug: "/mushrooms",
    type: "hub",
    summary: "Browse all species with search and filter by edibility.",
    keyword: "mushroom identification guide",
    ctaType: "identify",
    hub: null,
    relatedSlugs: ["/articles/most-dangerous-mushrooms", "/articles/best-edible-mushrooms", "/articles/mushrooms-by-region"],
    published: true,
    featured: true,
  },
  {
    title: "Articles",
    slug: "/articles",
    type: "hub",
    summary: "In-depth articles on mushroom safety, foraging, science, and real-world cases.",
    keyword: "mushroom articles",
    ctaType: "try-app",
    hub: null,
    relatedSlugs: ["/mushrooms", "/guides"],
    published: true,
    featured: false,
  },
  {
    title: "Foraging Guides",
    slug: "/guides",
    type: "hub",
    summary: "Practical guides for mushroom foraging, identification, and safety.",
    keyword: "mushroom foraging guide",
    ctaType: "identify",
    hub: null,
    relatedSlugs: ["/mushrooms", "/articles"],
    published: true,
    featured: false,
  },
  {
    title: "Authors",
    slug: "/authors",
    type: "hub",
    summary: "Meet the writers behind the Orangutany mushroom guide.",
    keyword: "mushroom guide authors",
    ctaType: "none",
    hub: null,
    relatedSlugs: [],
    published: true,
    featured: false,
  },
  {
    title: "Resources",
    slug: "/resources",
    type: "hub",
    summary: "Curated external resources for mushroom identification and mycology.",
    keyword: "mushroom identification resources",
    ctaType: "try-app",
    hub: null,
    relatedSlugs: ["/mushrooms", "/guides"],
    published: true,
    featured: false,
  },
];

// --- Articles ---
export const articles: ContentEntry[] = [
  {
    title: "How to Identify a Poisonous Mushroom",
    slug: "/articles/how-to-identify-poisonous-mushrooms",
    type: "article",
    summary: "The myths that will get you killed, and what actually works in the field.",
    keyword: "how to identify poisonous mushrooms",
    ctaType: "identify",
    hub: "/articles",
    relatedSlugs: ["/articles/mushrooms-that-can-kill-you", "/articles/most-dangerous-mushrooms", "/articles/dog-ate-mushroom"],
    published: true,
    featured: true,
    author: "varun-vaid",
  },
  {
    title: "Mushrooms That Can Kill You",
    slug: "/articles/mushrooms-that-can-kill-you",
    type: "article",
    summary: "Real poisoning cases, real species. Each mushroom introduced through a death story.",
    keyword: "mushrooms that can kill you",
    ctaType: "identify",
    hub: "/articles",
    relatedSlugs: ["/articles/how-to-identify-poisonous-mushrooms", "/articles/australian-mushroom-poisoning", "/articles/most-dangerous-mushrooms"],
    published: true,
    featured: true,
    author: "elena-marchetti",
  },
  {
    title: "My Dog Ate a Mushroom",
    slug: "/articles/dog-ate-mushroom",
    type: "article",
    summary: "Emergency steps, danger signs, and which yard mushrooms kill dogs.",
    keyword: "dog ate mushroom what to do",
    ctaType: "identify",
    hub: "/articles",
    relatedSlugs: ["/articles/mushrooms-in-your-yard", "/articles/how-to-identify-poisonous-mushrooms"],
    published: true,
    featured: true,
    author: "daniel-okafor",
  },
  {
    title: "Mushrooms in Your Yard",
    slug: "/articles/mushrooms-in-your-yard",
    type: "article",
    summary: "What they are, whether to panic, and what about the dog.",
    keyword: "mushrooms growing in my yard",
    ctaType: "upload",
    hub: "/articles",
    relatedSlugs: ["/articles/dog-ate-mushroom", "/articles/why-mushrooms-grow-in-circles"],
    published: true,
    featured: true,
    author: "priya-sharma",
  },
  {
    title: "The Mushroom That Killed a Family in Australia",
    slug: "/articles/australian-mushroom-poisoning",
    type: "article",
    summary: "The Erin Patterson case. Death cap lunch, timeline, investigation.",
    keyword: "erin patterson mushroom case australia",
    ctaType: "identify",
    hub: "/articles",
    relatedSlugs: ["/articles/mushrooms-that-can-kill-you", "/articles/how-to-identify-poisonous-mushrooms"],
    published: true,
    featured: false,
    author: "sofia-andersson",
  },
  {
    title: "Psychoactive Mushrooms: What Science Actually Knows",
    slug: "/articles/psychoactive-mushrooms-science",
    type: "article",
    summary: "Clinical trials, microdosing evidence, risks, and legal status.",
    keyword: "psilocybin mushrooms science",
    ctaType: "try-app",
    hub: "/articles",
    relatedSlugs: ["/mushrooms/psilocybe-cubensis", "/mushrooms/psilocybe-semilanceata"],
    published: true,
    featured: false,
    author: "mei-lin-chen",
  },
  {
    title: "Why Do Mushrooms Grow in Circles?",
    slug: "/articles/why-mushrooms-grow-in-circles",
    type: "article",
    summary: "The real science behind fairy rings, plus 2000 years of folklore.",
    keyword: "why do mushrooms grow in circles",
    ctaType: "upload",
    hub: "/articles",
    relatedSlugs: ["/articles/mushrooms-in-your-yard", "/mushrooms/agaricus-campestris"],
    published: true,
    featured: false,
    author: "varun-vaid",
  },
  {
    title: "Most Dangerous Mushrooms",
    slug: "/articles/most-dangerous-mushrooms",
    type: "article",
    summary: "The deadliest mushrooms on Earth and how to recognize them.",
    keyword: "most dangerous mushrooms",
    ctaType: "identify",
    hub: "/articles",
    relatedSlugs: ["/articles/mushrooms-that-can-kill-you", "/articles/how-to-identify-poisonous-mushrooms"],
    published: true,
    featured: true,
    author: "elena-marchetti",
  },
  {
    title: "Best Edible Mushrooms",
    slug: "/articles/best-edible-mushrooms",
    type: "article",
    summary: "The most prized wild mushrooms for foraging and cooking.",
    keyword: "best edible wild mushrooms",
    ctaType: "try-app",
    hub: "/articles",
    relatedSlugs: ["/guides/edible-wild-mushrooms-trail", "/guides/beginners-guide-to-mushroom-foraging"],
    published: true,
    featured: true,
    author: "varun-vaid",
  },
  {
    title: "Mushrooms by Region",
    slug: "/articles/mushrooms-by-region",
    type: "article",
    summary: "Find what grows near you with global distribution maps.",
    keyword: "wild mushrooms by region",
    ctaType: "distribution",
    hub: "/articles",
    relatedSlugs: ["/guides/mushroom-foraging-by-season"],
    published: true,
    featured: false,
    author: "priya-sharma",
  },
  {
    title: "Chicken of the Woods: A Field Guide",
    slug: "/articles/chicken-of-the-woods",
    type: "article",
    summary: "How to find, identify, and cook chicken of the woods, from someone who eats it every fall.",
    keyword: "chicken of the woods identification",
    ctaType: "identify",
    hub: "/articles",
    relatedSlugs: ["/articles/how-to-identify-poisonous-mushrooms", "/guides/edible-wild-mushrooms-trail", "/articles/best-edible-mushrooms"],
    published: true,
    featured: true,
    author: "varun-vaid",
  },
  {
    title: "How to Find Morels",
    slug: "/articles/how-to-find-morels",
    type: "article",
    summary: "Weeks of finding nothing, then everything clicked. A beginner's honest guide to morel hunting.",
    keyword: "how to find morels",
    ctaType: "identify",
    hub: "/articles",
    relatedSlugs: ["/articles/morel-vs-false-morel", "/guides/mushroom-foraging-by-season", "/guides/beginners-guide-to-mushroom-foraging"],
    published: true,
    featured: true,
    author: "james-whitfield",
  },
  {
    title: "Morel vs False Morel: How to Tell the Difference",
    slug: "/articles/morel-vs-false-morel",
    type: "article",
    summary: "The cut test, the cap test, and the poisoning cases that show why it matters.",
    keyword: "morel vs false morel",
    ctaType: "identify",
    hub: "/articles",
    relatedSlugs: ["/articles/how-to-find-morels", "/articles/how-to-identify-poisonous-mushrooms", "/articles/mushrooms-that-can-kill-you"],
    published: true,
    featured: true,
    author: "daniel-okafor",
  },
  {
    title: "The Most Expensive Mushrooms in the World",
    slug: "/articles/most-expensive-mushrooms",
    type: "article",
    summary: "Truffle auctions, matsutake gift culture, and the cordyceps economy. Follow the money.",
    keyword: "most expensive mushrooms",
    ctaType: "try-app",
    hub: "/articles",
    relatedSlugs: ["/articles/best-edible-mushrooms", "/guides/edible-wild-mushrooms-trail"],
    published: true,
    featured: false,
    author: "elena-marchetti",
  },
  {
    title: "Medicinal Mushrooms: What the Science Actually Says",
    slug: "/articles/medicinal-mushrooms",
    type: "article",
    summary: "Lion's mane, reishi, turkey tail, chaga, cordyceps. The real research vs the supplement hype.",
    keyword: "medicinal mushrooms benefits",
    ctaType: "try-app",
    hub: "/articles",
    relatedSlugs: ["/articles/most-expensive-mushrooms", "/articles/psychoactive-mushrooms-science"],
    published: true,
    featured: false,
    author: "mei-lin-chen",
  },
];

// --- Guides (practical how-to content) ---
export const guides: ContentEntry[] = [
  {
    title: "A Beginner's Guide to Mushroom Foraging",
    slug: "/guides/beginners-guide-to-mushroom-foraging",
    type: "guide",
    summary: "Everything you need to know to start, from someone who started last year.",
    keyword: "mushroom foraging for beginners",
    ctaType: "identify",
    hub: "/guides",
    relatedSlugs: ["/guides/mushroom-foraging-by-season", "/guides/edible-wild-mushrooms-trail", "/articles/best-edible-mushrooms"],
    published: true,
    featured: true,
    author: "james-whitfield",
  },
  {
    title: "Mushroom Foraging by Season",
    slug: "/guides/mushroom-foraging-by-season",
    type: "guide",
    summary: "Month-by-month guide to what's fruiting and where to find it.",
    keyword: "mushroom foraging by season",
    ctaType: "try-app",
    hub: "/guides",
    relatedSlugs: ["/guides/beginners-guide-to-mushroom-foraging", "/guides/edible-wild-mushrooms-trail", "/articles/mushrooms-by-region"],
    published: true,
    featured: true,
    author: "priya-sharma",
  },
  {
    title: "Mushrooms You Can Eat Right Off the Trail",
    slug: "/guides/edible-wild-mushrooms-trail",
    type: "guide",
    summary: "Each mushroom introduced as a trail encounter. Vivid, sensory, practical.",
    keyword: "edible wild mushrooms",
    ctaType: "identify",
    hub: "/guides",
    relatedSlugs: ["/guides/beginners-guide-to-mushroom-foraging", "/articles/best-edible-mushrooms"],
    published: true,
    featured: true,
    author: "tomas-herrera",
  },
];

// --- Authors ---
export const authors: ContentEntry[] = [
  { title: "Varun Vaid", slug: "/authors/varun-vaid", type: "author", summary: "Software engineer and hobby forager. Founder of Orangutany. Based in Markham, Ontario.", keyword: "varun vaid mushroom", ctaType: "none", hub: "/authors", relatedSlugs: [], published: true, featured: true },
  { title: "Elena Marchetti", slug: "/authors/elena-marchetti", type: "author", summary: "Freelance journalist covering true crime and forensic mycology.", keyword: "", ctaType: "none", hub: "/authors", relatedSlugs: [], published: true, featured: false },
  { title: "James Whitfield", slug: "/authors/james-whitfield", type: "author", summary: "Outdoor recreation coordinator and beginner foraging guide writer.", keyword: "", ctaType: "none", hub: "/authors", relatedSlugs: [], published: true, featured: false },
  { title: "Priya Sharma", slug: "/authors/priya-sharma", type: "author", summary: "Environmental scientist and fungal ecology writer.", keyword: "", ctaType: "none", hub: "/authors", relatedSlugs: [], published: true, featured: false },
  { title: "Daniel Okafor", slug: "/authors/daniel-okafor", type: "author", summary: "Veterinary technician specializing in pet mushroom safety.", keyword: "", ctaType: "none", hub: "/authors", relatedSlugs: [], published: true, featured: false },
  { title: "Mei Lin Chen", slug: "/authors/mei-lin-chen", type: "author", summary: "Science writer covering psychedelics and neuroscience.", keyword: "", ctaType: "none", hub: "/authors", relatedSlugs: [], published: true, featured: false },
  { title: "Sofia Andersson", slug: "/authors/sofia-andersson", type: "author", summary: "Investigative journalist based in Stockholm.", keyword: "", ctaType: "none", hub: "/authors", relatedSlugs: [], published: true, featured: false },
  { title: "Arjun Mehra", slug: "/authors/arjun-mehra", type: "author", summary: "Ethnomycologist studying psychoactive and traditional fungi in the Aravalli hills and across South Asia.", keyword: "", ctaType: "none", hub: "/authors", relatedSlugs: [], published: true, featured: false },
];

// --- All content (combined) ---
export const allContent: ContentEntry[] = [...hubs, ...articles, ...guides, ...authors];

// --- Helpers ---
export function getRelatedContent(slug: string, limit = 4): ContentEntry[] {
  const entry = allContent.find((c) => c.slug === slug);
  if (!entry) return [];
  return entry.relatedSlugs
    .map((rs) => allContent.find((c) => c.slug === rs))
    .filter((c): c is ContentEntry => c != null)
    .slice(0, limit);
}

export function getContentByHub(hubSlug: string): ContentEntry[] {
  return allContent.filter((c) => c.hub === hubSlug && c.published);
}

export function getContentByType(type: ContentType): ContentEntry[] {
  return allContent.filter((c) => c.type === type && c.published);
}
