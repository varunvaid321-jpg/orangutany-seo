# Species Page Template Reference

## Data File Format

Each species lives at `data/species/{slug}.ts` and exports a `SpeciesRecord`.

```typescript
import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "genus-species",           // URL-safe, lowercase, hyphenated
  commonName: "Common Name",
  scientificName: "Genus species",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "",
    class: "",
    order: "",
    family: "",
    genus: "",
  },

  // 1-2 sentences. Hook that grabs attention. If edibility is "edible-with-caution",
  // "toxic", or "deadly", make the reason clear in the summary itself.
  summary: "",

  // 2-3 paragraphs separated by \n. Fun, casual, human tone. Reference culture,
  // history, real life. NOT robotic/templated. Include varied sources.
  description: "",

  identification: {
    cap: "",          // Size, shape, color, texture. Use "No traditional cap" for brackets/shelves.
    gills: "",        // Or "No gills" for pored/toothed/pitted species. Describe what's there instead.
    stem: "",         // Or "None" for shelf fungi.
    sporePrint: "",   // Optional
    odor: "",         // Optional
  },

  habitat: "",        // Trees, soil type, symbiotic relationships
  season: "",         // When it fruits, peak months
  range: "",          // Geographic distribution. Mention specific regions for the by-region page.

  lookAlikes: [
    {
      name: "Common Name (Scientific name)",
      slug: "genus-species",              // Optional — only if we have a page for it
      image: "lookalike-shortname.jpg",
      distinction: "How to tell them apart. Be specific.",
      externalUrl: "",                    // Vary sources: iNaturalist, Wikipedia, MushroomExpert
      externalSource: "iNaturalist",      // Display name for the link
    },
    // 3 look-alikes, each with a DIFFERENT externalSource
  ],

  edibility: "edible" | "edible-with-caution" | "inedible" | "toxic" | "deadly",

  // Explain WHY. For "edible-with-caution", explain what preparation is needed.
  // For "toxic"/"deadly", explain what happens if ingested.
  edibilityNote: "",

  gbifKey: 0,         // From: curl -s "https://api.gbif.org/v1/species/match?name=Genus+species" → usageKey

  // 4-5 short stories (1-2 lines each). Varied types:
  // - Someone finding/foraging it
  // - A poisoning or pet incident
  // - A historical discovery
  // - A cultural/culinary moment
  // - A scientific study
  // Real locations. Can reference Reddit, news, books, research papers.
  stories: [
    {
      title: "Short Title",
      text: "1-2 line summary. Keep the real context. Don't change the story.",
      location: "City, State/Country",
      source: "Source name",
      sourceUrl: "https://...",           // Optional
    },
  ],

  // 12-15 real search queries people type into Google
  seoQueries: [],

  // 5 interesting facts
  funFacts: [],

  // 5 gallery images from Wikimedia Commons. Diverse angles/stages/environments.
  // Only CC BY, CC BY-SA, CC0, Public Domain. NO NC/ND.
  images: [
    {
      filename: "01-description.jpg",
      alt: "Descriptive alt text",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:...",
      author: "Photographer Name",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
  ],

  // Close-up images for identification section
  identificationImages: {
    cap: "cap-detail.jpg",
    gills: "gills-detail.jpg",       // or pores-detail.jpg, spine-detail.jpg
    stem: "stem-detail.jpg",         // omit for shelf fungi
  },
};

export default species;
```

## Image Directory

`public/images/species/{slug}/`

| File | Purpose |
|------|---------|
| `01-*.jpg` through `05-*.jpg` | Gallery images (diverse) |
| `cap-detail.jpg` | Identification close-up |
| `gills-detail.jpg` / `pores-detail.jpg` | Identification close-up |
| `stem-detail.jpg` | Identification close-up |
| `lookalike-*.jpg` | One per look-alike species |
| `distribution-map.png` | GBIF occurrence map |

## GBIF Distribution Map Generation

```bash
GBIF_KEY=<usageKey from API>
cd public/images/species/{slug}
curl -sL -o base-left.png "https://tile.gbif.org/4326/omt/0/0/0@2x.png?style=gbif-dark"
curl -sL -o base-right.png "https://tile.gbif.org/4326/omt/0/1/0@2x.png?style=gbif-dark"
curl -sL -o dots-left.png "https://api.gbif.org/v2/map/occurrence/density/0/0/0@2x.png?srs=EPSG:4326&taxonKey=${GBIF_KEY}&style=orange.marker&bin=hex&hexPerTile=40"
curl -sL -o dots-right.png "https://api.gbif.org/v2/map/occurrence/density/0/1/0@2x.png?srs=EPSG:4326&taxonKey=${GBIF_KEY}&style=orange.marker&bin=hex&hexPerTile=40"
magick base-left.png dots-left.png -composite left.png
magick base-right.png dots-right.png -composite right.png
magick left.png right.png +append distribution-map.png
rm base-left.png base-right.png dots-left.png dots-right.png left.png right.png
```

Map MUST be named `distribution-map.png` — the component expects this exact name.

## Registering a New Species

Add import and array entry to `data/species/index.ts` (alphabetical order).

## Content Rules

- **Tone**: Fun, casual, human. NOT robotic/templated.
- **Stories**: 1-2 lines. Varied types. Real context. Real locations.
- **Look-alikes**: 3 per species. Vary externalSource (iNaturalist, Wikipedia, MushroomExpert).
- **iNaturalist links**: VERIFY taxon IDs are correct (must be a fungus, not a butterfly).
- **Edibility**: If not plain "edible", explain why in the summary.
- **Authors**: Deterministic from slug hash (~65% Varun Vaid, ~35% others).
- **Images**: Only free licenses. Diverse photos (different stages, environments, regions). Prioritize photos with human elements — hands holding the mushroom, fingers pointing at features, boots/shoes for scale, in-situ field shots. These feel authentic and human vs sterile stock photos.
- **Image sourcing — IMPORTANT**: Do NOT rely solely on the Wikimedia search API (`gsrsearch`), which returns keyword matches that may show the wrong species. Instead, prefer the **article images API** which returns curated images from the actual species wiki page:
  ```
  curl -s "https://commons.wikimedia.org/w/api.php?action=query&generator=images&titles=Genus_species&prop=imageinfo&iiprop=url|extmetadata&iiurlwidth=1200&format=json&gimlimit=20"
  ```
  Fall back to search only if the article API returns too few results. Always visually verify the hero image matches the species.

## Image Validation Checklist (MANDATORY for every new species page)

Every image added to a species page MUST pass ALL of these checks. This is not discretionary.
If an image fails any check, it must be rejected — do not add it to the page.

### Automatic Rejection Criteria

Reject any image that:

| # | Check | Reject If |
|---|-------|-----------|
| 1 | **Species match** | Source URL/filename names a different species |
| 2 | **Photo only** | Is an illustration, drawing, engraving, painting, diagram, or AI-generated |
| 3 | **Mushroom visible** | Mushroom is not clearly visible, in focus, and recognizable |
| 4 | **Not microscopy** | Shows spores under microscope or lab slides (unless dedicated spore section) |
| 5 | **Not food/commerce** | Shows cooking scenes, tempura, kitchen bowls, storefronts |
| 6 | **Not cropped** | Critical parts of the mushroom are cut off or hidden |
| 7 | **Single species** | Contains multiple species without clear dominance of the target |
| 8 | **Minimum size** | File < 60KB for gallery, < 300KB for hero |
| 9 | **Detail match** | Detail images (cap/gills/stem) don't show the named feature close-up |
| 10 | **Unique** | Same source image already used on another species page |
| 11 | **Not degraded** | Specimen is collapsed, rotted, heavily aged, or unrecognizable |
| 12 | **Lookalike correct** | Lookalike images must show the actual lookalike species, not the main species or people |

### Known Bad Filename Patterns (auto-reject)

These patterns in Wikimedia filenames indicate wrong content. Reject immediately:

```
Karl_Johanssvamp    → Boletus edulis Swedish cookbook illustration
Iduns_kokbok        → Swedish cookbook illustrations (wrong species)
Bresadola           → Historical botanical illustrations
Bulliard            → Historical botanical illustrations
Sowerby             → Historical botanical illustrations
Curtis              → Historical engravings
Atlas_champignons   → Historical illustration atlas
spore, microscop    → Microscopy images
ascospore, basidio  → Microscopy images
SEM_                → Scanning electron microscopy
lifecycle, cycle    → Lifecycle diagrams
diagram, chart      → Scientific diagrams
```

### Display Rules (hardcoded in templates)

When displaying images on the page:

1. Use `object-contain` as the default for all species images — never cut off the mushroom
2. Hero images: `object-contain` or `object-cover object-top` only if the mushroom is in the upper portion
3. Gallery thumbnails: `object-cover` only if the mushroom remains fully recognizable; otherwise `object-contain`
4. Card images: Always use `object-contain` with a dark background fill to avoid cropping
5. Never allow CSS to crop, zoom, or transform an image such that the mushroom is partially hidden
6. Mobile views must show the same mushroom visibility as desktop — no responsive breakpoint should hide the subject
