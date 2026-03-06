// Deterministic author assignment per slug — 65% Varun Vaid, 35% others
const otherAuthors = [
  "Priya Sharma",
  "Daniel Okafor",
  "Elena Marchetti",
  "James Whitfield",
  "Mei Lin Chen",
  "Sofia Andersson",
  "Tomás Herrera",
];

export function getAuthor(slug: string): string {
  // Simple hash from slug to get a stable number
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) | 0;
  }
  const n = Math.abs(hash) % 100;
  if (n < 65) return "Varun Vaid";
  return otherAuthors[Math.abs(hash) % otherAuthors.length];
}
