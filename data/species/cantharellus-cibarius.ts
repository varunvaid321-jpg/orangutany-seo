import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "cantharellus-cibarius",
  commonName: "Golden Chanterelle",
  scientificName: "Cantharellus cibarius",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Cantharellales",
    family: "Cantharellaceae",
    genus: "Cantharellus",
  },
  summary:
    "The golden ticket of wild mushroom foraging. Chanterelles are the one mushroom that turns casual hikers into obsessive forest-crawlers who guard their secret spots like buried treasure.",
  description:
    "If you've ever eaten at a nice French restaurant, you've probably had chanterelles — or at least seen them on the menu at a price that made you do a double-take. Golden Chanterelles are one of the most prized edible wild mushrooms on Earth, and they've stubbornly refused every attempt at commercial cultivation. You want them? You walk into the woods and find them yourself. That's part of the magic.\n\nThey fruit from late spring through fall, popping up in mossy hardwood and conifer forests after warm rains. Once you spot the first flash of egg-yolk yellow against the dark forest floor, your brain rewires itself — suddenly you're seeing them everywhere. Experienced foragers talk about \"getting your chanterelle eyes on,\" and it's a real phenomenon. They grow in the same spots year after year, which is why longtime hunters treat their patches like state secrets.\n\nThe flavor is hard to describe if you haven't tried it — peppery, slightly fruity, with an aroma that genuinely smells like fresh apricots. They hold up beautifully to sauteing in butter (the classic French preparation) and pair absurdly well with eggs, cream sauces, and pasta. In Scandinavian countries, chanterelle season is practically a national holiday.",
  identification: {
    cap: "2–12 cm across. Starts convex, then flattens and develops a wavy, irregular funnel shape with age. Color ranges from pale egg-yolk yellow to deep golden orange. The surface is smooth and dry, sometimes slightly felty. The edges become wavy and lobed as the mushroom matures — no two caps look alike.",
    gills: "Not true gills at all — this is the key. Chanterelles have forked, blunt ridges (called 'false gills') that run down the stem. They look like wrinkles or veins rather than thin paper-like blades. They're the same color as the cap or slightly paler. If you see thin, blade-like gills, you're looking at something else.",
    stem: "3–8 cm tall, solid (not hollow), tapers toward the base. Same color as the cap — golden yellow. Smooth and firm. The false gills run partway down it (decurrent). Snapping it should show solid white flesh inside.",
    odor: "Distinctly fruity — most people say apricots or fresh apricots. This is one of the most reliable ID features. If it smells mushroomy or like nothing, reconsider your identification.",
  },
  habitat:
    "Grows on the ground in mycorrhizal partnership with hardwoods (especially oaks and beeches) and conifers (spruce, fir, pine). Loves mossy spots, old-growth forests, and areas with good drainage. Often found along trails, on slopes, and near stream banks. Never on wood — if it's growing on a log, it's not a chanterelle.",
  season: "June through November in most of the Northern Hemisphere, with peak season July–September. Earlier in southern regions, later at higher elevations.",
  range:
    "Found across Europe, North America, Asia, and parts of Africa. Especially abundant in Scandinavia, the Pacific Northwest of the US, and throughout Central and Eastern Europe. One of the most widespread edible wild mushrooms in the world.",
  lookAlikes: [
    {
      name: "Jack O'Lantern (Omphalotus olearius)",
      slug: "omphalotus-olearius",
      image: "lookalike-olearius.jpg",
      distinction:
        "The dangerous one. Grows in clusters on wood or buried roots (chanterelles grow singly from soil). Has TRUE sharp, blade-like gills — not blunt ridges. Deeper orange color. The gills glow faintly green in total darkness (bioluminescent). Will make you violently ill but isn't lethal.",
      externalUrl: "https://www.inaturalist.org/taxa/48715-Omphalotus-olearius",
      externalSource: "iNaturalist",
    },
    {
      name: "False Chanterelle (Hygrophoropsis aurantiaca)",
      slug: "hygrophoropsis-aurantiaca",
      image: "lookalike-aurantiaca.jpg",
      distinction:
        "Much more common mix-up than Jack O'Lantern. Has true forked gills (thin and blade-like, not blunt ridges). Cap is more orange-brown and often has a slightly fuzzy or felt-like surface. Thinner flesh. Grows on decaying wood and wood chips. Mildly toxic to some people — causes GI upset.",
      externalUrl:
        "https://en.wikipedia.org/wiki/Hygrophoropsis_aurantiaca",
      externalSource: "Wikipedia",
    },
    {
      name: "Scaly Vase Chanterelle (Turbinellus floccosus)",
      image: "lookalike-floccosus.jpg",
      distinction:
        "Vase-shaped like a chanterelle but covered in coarse, shaggy scales on the cap surface. Much larger overall. The inside is hollow. Found mainly in western North America under conifers. Can cause significant GI distress — not considered edible.",
      externalUrl:
        "https://www.mushroomexpert.com/turbinellus_floccosus.html",
      externalSource: "MushroomExpert",
    },
  ],
  edibility: "edible",
  edibilityNote:
    "One of the most prized edible wild mushrooms worldwide. Excellent flavor and texture when sauteed, and very safe once you learn to distinguish the false gills from true gills. Cook before eating — raw chanterelles can cause mild stomach upset in some people. Pairs beautifully with butter, cream, eggs, and white wine.",
  gbifKey: 5249504,
  stories: [
    {
      title: "The 40-Pound Chanterelle Haul in Oregon",
      text: "In 2017, a forager near Eugene, Oregon posted photos of a single-day harvest weighing over 40 pounds of golden chanterelles from a Douglas fir forest after three days of October rain. The post went viral on r/mycology and the comments were a mix of awe and people begging for the GPS coordinates.",
      location: "Eugene, Oregon, USA",
      source: "r/mycology",
      sourceUrl: "https://www.reddit.com/r/mycology/",
    },
    {
      title: "Jack O'Lantern Sends a Family to the ER",
      text: "A family in North Carolina picked what they thought were chanterelles from their backyard in 2019. Within two hours of eating them, all four family members were vomiting. Turned out they'd harvested Jack O'Lantern mushrooms growing from a buried oak stump. Everyone recovered after IV fluids.",
      location: "Raleigh, North Carolina, USA",
      source: "NC Poison Control",
    },
    {
      title: "A Michelin Chef's First Wild Chanterelle",
      text: "Chef Magnus Nilsson of Faviken in Sweden has written about the moment he first found wild chanterelles as a teenager — crawling through a birch forest in Jamtland and suddenly seeing hundreds of golden caps in the moss. He later made chanterelles a cornerstone of his tasting menu.",
      location: "Jamtland, Sweden",
      source: "Faviken (2012)",
    },
    {
      title: "The Great Chanterelle Cook-Off of Vilnius",
      text: "Every September, Vilnius hosts a chanterelle cooking competition where amateur foragers bring their harvest and compete for best dish. In 2022, the winning entry was a chanterelle and smoked eel tart that judges described as 'insane.' Lithuania takes its mushroom foraging extremely seriously.",
      location: "Vilnius, Lithuania",
      source: "Lithuanian Mycological Society",
    },
    {
      title: "Golden Retriever Eats a Chanterelle Patch",
      text: "A forager in Washington State posted in 2021 that their Golden Retriever ate several raw chanterelles before they could stop her. The dog had mild diarrhea for a day but was otherwise fine. The forager was more upset about the lost mushrooms than the vet bill.",
      location: "Olympic Peninsula, Washington, USA",
      source: "r/foraging",
      sourceUrl: "https://www.reddit.com/r/foraging/",
    },
  ],
  seoQueries: [
    "golden chanterelle identification",
    "how to identify chanterelles",
    "chanterelle vs jack o lantern",
    "chanterelle mushroom look alikes",
    "where to find chanterelles",
    "chanterelle false gills vs true gills",
    "yellow mushroom in forest edible",
    "chanterelle season when to find",
    "apricot smelling mushroom",
    "cantharellus cibarius edible",
    "chanterelle foraging tips",
    "false chanterelle vs real chanterelle",
    "golden mushroom identification guide",
    "chanterelle mushroom recipe",
    "are chanterelles safe to eat",
  ],
  funFacts: [
    "Chanterelles have never been successfully cultivated commercially — every single one you eat was picked wild from a forest. Scientists have been trying for decades.",
    "The apricot-like smell of chanterelles comes from a compound called cis-3-nonenal, which is also found in fresh cucumbers and watermelon rind.",
    "In Sweden, chanterelle foraging is protected by 'Allemansratten' (the right to roam), meaning anyone can pick them in any forest regardless of who owns the land.",
    "Golden chanterelles contain significant amounts of vitamin D2 — one of very few non-animal food sources of this vitamin.",
    "Lithuania's national obsession with chanterelles is so intense that the country exports over 200 tons of wild-picked chanterelles per year, mostly to France and Germany.",
  ],
  images: [
    {
      filename: "01-field.jpg",
      alt: "Golden Chanterelle (Cantharellus cibarius) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Botanical_Garden_Gothenburg_and_Angg%C3%A5rdsbergen_13.08.2017_Chanterelle_-_Cantharellus_cibarius_(37248583152).jpg",
      author: "Björn S...",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    },
    {
      filename: "02-field.jpg",
      alt: "Golden Chanterelle (Cantharellus cibarius) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Botanical_Garden_Gothenburg_and_Angg%C3%A5rdsbergen_13.08.2017_Chanterelle_-_Cantharellus_cibarius_(37321571732).jpg",
      author: "Björn S...",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    },
    {
      filename: "03-field.jpg",
      alt: "Golden Chanterelle (Cantharellus cibarius) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Botanical_Garden_Gothenburg_and_Angg%C3%A5rdsbergen_13.08.2017_Chanterelle_-_Cantharellus_cibarius_(37411590105).jpg",
      author: "Björn S...",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    },
    {
      filename: "04-field.jpg",
      alt: "Golden Chanterelle (Cantharellus cibarius) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Cantharellus_cibarius_(1)_(50545288211).jpg",
      author: "Dr. Hans-Günter Wagner",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    },
    {
      filename: "05-field.jpg",
      alt: "Golden Chanterelle (Cantharellus cibarius) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Cantharellus_cibarius_(35894304102).jpg",
      author: "Dr. Hans-Günter Wagner",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    },
  ],
  identificationImages: {
    cap: "cap-detail.jpg",
    gills: "gills-detail.jpg",
    stem: "stem-detail.jpg",
  },
};

export default species;
