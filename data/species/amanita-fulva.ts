import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "amanita-fulva",
  commonName: "Tawny Grisette",
  scientificName: "Amanita fulva",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Amanitaceae",
    genus: "Amanita",
  },
  summary:
    "An edible Amanita that gives experienced foragers confidence and beginners nightmares. The Tawny Grisette is a graceful, tawny-orange mushroom with a distinctive striate cap margin and a prominent white sac at the base of its stem — but critically, NO ring. That missing ring is what separates the grisette group from their deadly cousins, the Death Cap and Destroying Angel.",
  description:
    "The genus Amanita contains both the most prized and most lethal mushrooms on Earth, and Amanita fulva sits on the friendly side of that spectrum — but you'd better know exactly why before you eat one. The Tawny Grisette belongs to the ringless grisette group (section Vaginatae), a cluster of Amanita species that lack the partial veil (and therefore the ring or annulus) found on the deadly species. This single feature — no ring on the stem — is the most important field character separating edible grisettes from potentially fatal Amanitas.\n\nThe mushroom itself is elegant. A smooth, tawny-orange to fulvous-brown cap with a strongly lined (striate) margin sits atop a tall, slender stem that rises from a conspicuous white volval sac — the remains of the universal veil that once enclosed the entire mushroom. The stem is covered in a fine snakeskin-like pattern of tiny scales and has no ring whatsoever. The gills are white and free from the stem.\n\nAmanita fulva is common across Europe, found in mixed woodlands from Scandinavia to the Mediterranean. It forms mycorrhizal associations with birch, oak, beech, and various conifers. It appears from early summer through autumn, often in mossy, damp spots. In many European countries it is collected and eaten, especially in Scandinavia and Eastern Europe, but it must always be cooked — raw Amanitas of any species can cause gastrointestinal upset.\n\nThe critical safety point cannot be overstated: you must be 100% certain there is no ring on the stem, and you must see the volval sac at the base. A young Death Cap can superficially resemble a grisette, and that mistake can be fatal. Many field guides recommend that beginners simply avoid all Amanitas until they have significant experience.",
  identification: {
    cap: "4–10 cm across. Initially egg-shaped within the universal veil, expanding to convex then flat. Smooth, slightly sticky when wet. Color is a warm tawny-orange to fulvous-brown, sometimes with a darker center. The margin is distinctly striate (lined) for 1–2 cm — this is a key grisette feature. Usually no remnants of the universal veil on the cap surface.",
    gills:
      "Free (not attached to the stem). White to pale cream. Crowded. Soft and fragile.",
    stem: "8–15 cm tall, 1–1.5 cm thick. Tall and slender, slightly tapering upward. White to pale tawny, covered with a fine granular or snakeskin-like pattern. NO RING (annulus) — this is the most critical identification feature. Base enclosed in a prominent, persistent, white to slightly brownish volval sac (bag-like structure).",
    sporePrint: "White.",
    odor: "Faint, not distinctive.",
  },
  habitat:
    "Mycorrhizal with birch, oak, beech, pine, and spruce. Found in mixed deciduous and coniferous woodlands, heathlands, and along forest edges. Prefers damp, mossy areas with acidic to neutral soils. Often grows singly or in small groups.",
  season:
    "Early summer through late autumn, typically June through November. Peak season is July–September across most of Europe.",
  range:
    "Widespread across Europe from Scandinavia to southern Europe and into western Asia. Also reported from parts of North America, though many North American records may represent closely related species that have not yet been fully separated taxonomically.",
  lookAlikes: [
    {
      name: "Death Cap (Amanita phalloides)",
      slug: "amanita-phalloides",
      image: "lookalike-phalloides.jpg",
      distinction:
        "THE critical look-alike. The Death Cap HAS A RING on its stem — grisettes do not. Death Cap also tends to have a greenish-yellow to olive cap (though it can be pale or white), non-striate cap margin, and a more bulbous base. Contains amatoxins and is responsible for over 90% of mushroom fatality deaths worldwide. If in doubt, DO NOT EAT.",
      externalUrl:
        "https://en.wikipedia.org/wiki/Amanita_phalloides",
      externalSource: "Wikipedia",
    },
    {
      name: "Orange Grisette (Amanita crocea)",
      image: "lookalike-crocea.jpg",
      distinction:
        "Very similar to A. fulva but brighter orange, with a more vivid orange stem coloring and often a more robust build. Also edible when cooked. Some mycologists consider it a color variant rather than a fully distinct species. Same ringless stem and striate cap margin — the grisette features are the same.",
      externalUrl:
        "https://en.wikipedia.org/wiki/Amanita_crocea",
      externalSource: "Wikipedia",
    },
    {
      name: "Grisette (Amanita vaginata)",
      image: "lookalike-vaginata.jpg",
      distinction:
        "The gray version of the grisette group. Cap is gray to lead-gray instead of tawny-orange. Otherwise identical in structure: striate margin, no ring, white volval sac. Edible when cooked, same safety considerations as A. fulva.",
      externalUrl:
        "https://en.wikipedia.org/wiki/Amanita_vaginata",
      externalSource: "Wikipedia",
    },
  ],
  edibility: "edible-with-caution",
  edibilityNote:
    "Edible when thoroughly cooked — NEVER eat raw. Must be positively distinguished from the deadly Amanita phalloides (Death Cap), which has a ring on the stem. The grisette's lack of a ring is the critical safety feature. Only experienced foragers should collect this species. In Scandinavia and Eastern Europe, it is a well-known edible, but many Western field guides discourage beginners from eating any Amanita species due to the genus's lethal members.",
  gbifKey: 7765582,
  stories: [
    {
      title: "The Scandinavian Grisette Tradition",
      text: "In Sweden and Finland, grisettes (including A. fulva) have been collected and eaten for generations. Swedish foraging guides call it 'brun kamskivling' and it appears in traditional mushroom collections alongside chanterelles and hedgehog mushrooms. The comfort level with eating an Amanita reflects centuries of accumulated folk knowledge about the ringless-stem distinction.",
      location: "Sweden and Finland",
      source: "Scandinavian foraging traditions",
    },
    {
      title: "The No-Ring Rule",
      text: "Mycologist David Arora popularized a simple mnemonic in 'Mushrooms Demystified': if an Amanita has no ring, it's a grisette and potentially edible; if it has a ring, stay away unless you're an expert. This oversimplification has its critics (not all ringed Amanitas are deadly), but as a safety rule for beginners, it has probably prevented poisonings.",
      location: "California, USA",
      source: "Mushrooms Demystified, David Arora",
    },
    {
      title: "Emerging from the Egg",
      text: "Young grisettes emerge from a white universal veil that looks remarkably like an egg. Before the cap expands, the mushroom is entirely enclosed in this membrane. Foragers who collect mushrooms at the 'egg stage' face the greatest danger, because at that point a grisette egg is nearly indistinguishable from a Death Cap egg — and guessing wrong is a potentially fatal mistake.",
      location: "European woodlands",
      source: "North American Mycological Association",
      sourceUrl: "https://namyco.org/",
    },
    {
      title: "A Taxonomic Tangle",
      text: "What European mycologists call Amanita fulva may actually be a complex of several closely related species. Molecular studies published in the 2010s revealed significant genetic diversity within the 'fulva' group, and some populations in North America that were identified as A. fulva are now thought to be distinct species awaiting formal description.",
      location: "Europe and North America",
      source: "Fungal Biology journal",
    },
    {
      title: "The Volva Test",
      text: "Experienced Italian mushroom hunters have a saying: 'Always dig up the base.' This applies especially to Amanitas, where the volval sac is buried in soil and can be left behind if the mushroom is carelessly picked. Without seeing the volva, you lose one of the most important identification features — and for Amanitas, missing that information can be the difference between a meal and a medical emergency.",
      location: "Italy",
      source: "Italian mycological societies",
    },
  ],
  seoQueries: [
    "tawny grisette identification",
    "amanita fulva edible",
    "grisette mushroom vs death cap",
    "amanita without a ring",
    "tawny grisette look alikes",
    "is amanita fulva safe to eat",
    "how to identify grisette mushrooms",
    "amanita fulva vs amanita phalloides",
    "ringless amanita edible",
    "tawny grisette habitat",
    "brown amanita no ring edible",
    "amanita fulva season",
    "grisette mushroom foraging",
    "amanita fulva europe",
    "edible amanita species",
  ],
  funFacts: [
    "The Tawny Grisette's most important feature is something it DOESN'T have: a ring on the stem. This absence is what separates the edible grisette group from the deadly ring-bearing Amanitas like the Death Cap.",
    "The name 'grisette' comes from the French word for gray — originally applied to Amanita vaginata (the gray species). Amanita fulva got lumped in as 'tawny grisette' even though it's decidedly orange-brown, not gray.",
    "Young Amanita fulva emerges from a white egg-like universal veil. At this stage it is virtually impossible to distinguish from a young Death Cap, which is why experienced foragers never collect Amanitas at the button stage.",
    "The striate (lined) cap margin is a grisette hallmark. The lines correspond to the positions of the gills underneath and are caused by the thin cap flesh — in grisettes, the cap is so thin at the margin that the gill pattern shows through.",
    "In Finland, Amanita fulva is listed as an approved edible mushroom by the Finnish Food Authority, appearing in official foraging guides alongside chanterelles and porcini — a level of institutional trust unusual for any Amanita species.",
  ],
  images: [
    {
      filename: "01-classic.jpg",
      alt: "Tawny Grisette (Amanita fulva) showing orange-brown cap and striate margin in German forest",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Amanita-fulva.jpg",
      author: "Holger Krisp",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
    {
      filename: "02-german-forest.jpg",
      alt: "Amanita fulva growing in forest floor showing full stem and volval sac",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Fuchsige_Streifling_(Amanita_fulva.JPG",
      author: "Holger Krisp",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
    {
      filename: "05-habitat.jpg",
      alt: "Amanita fulva mushroom with visible volval sac at base growing among forest moss",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Amanita_fulva_060820w.jpg",
      author: "Strobilomyces",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
  ],
  identificationImages: {
    cap: "cap-detail.jpg",
    gills: "gills-detail.jpg",
    stem: "stem-detail.jpg",
  },
};

export default species;
