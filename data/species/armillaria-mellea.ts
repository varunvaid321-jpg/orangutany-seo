import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "armillaria-mellea",
  commonName: "Honey Fungus",
  scientificName: "Armillaria mellea",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Physalacriaceae",
    genus: "Armillaria",
  },
  summary:
    "The honey fungus is edible when thoroughly cooked — but eat it raw or undercooked and you're in for serious stomach cramps, nausea, and regret. Oh, and the largest living organism on Earth? It's one of these. A single honey fungus clone in Oregon covers 2,385 acres.",
  description:
    "Here's a mushroom with a serious identity crisis. On one hand, it's a devastating tree parasite — foresters and gardeners despise it because it can silently kill oaks, fruit trees, and hedges through its underground network of black, bootlace-like rhizomorphs. On the other hand, it's a perfectly decent edible mushroom that shows up in Eastern European and Asian kitchens regularly. Just make sure you cook it thoroughly, because raw or undercooked honey fungus will wreck your digestive system.\n\nThe real claim to fame is the Humongous Fungus in Oregon's Malheur National Forest. Discovered in 1998, a single Armillaria ostoyae (a close relative, sometimes lumped with A. mellea in casual conversation) spans roughly 2,385 acres underground and is estimated to be somewhere between 2,400 and 8,650 years old. It kills trees from below, and the only visible sign is the clusters of honey-colored mushrooms that pop up at the base of dying trees each autumn.\n\nForagers love finding big flushes of honey mushrooms on stumps and fallen logs — they fruit in dense clusters and you can fill a basket fast. But there's a critical catch: Galerina marginata, one of the deadliest mushrooms in North America, can grow right alongside honeys on the same log. If you're not checking every single cap for a ring and spore color, you're gambling with your life.",
  identification: {
    cap: "3–15 cm across. Convex when young, flattening with age. Honey-yellow to tawny brown, sometimes with an olive tinge. Surface has fine dark scales or hairs concentrated at the center. Sticky when wet.",
    gills: "White to pale cream when young, developing pinkish-brown spots with age. Slightly decurrent (running down the stem). Moderately spaced.",
    stem: "5–15 cm tall, 1–2 cm thick. Tough and fibrous — the lower portion is often too woody to eat. Pale above the ring, darker brown and somewhat scaly below. Has a prominent white to yellowish ring (annulus) near the top.",
    sporePrint: "White to pale cream.",
    odor: "Pleasant, slightly sweet and mushroomy. Some describe it as faintly honey-like.",
  },
  habitat:
    "Parasitic on living trees and saprotrophic on dead wood. Attacks hardwoods and conifers alike — oaks, maples, birches, spruces, firs. Spreads underground via thick black rhizomorphs (bootlace-like cords) that can extend several meters through soil to infect new hosts. Commonly found at the base of weakened or dying trees, on stumps, and on buried roots.",
  season: "Late summer through late autumn. Peak fruiting is September–November in the Northern Hemisphere. Often appears in large flushes after autumn rains.",
  range:
    "Widespread across temperate regions of the Northern Hemisphere — throughout Europe, eastern North America, and parts of Asia. Also found in parts of Africa. Particularly common in the UK, where it's the number one killer of garden trees.",
  lookAlikes: [
    {
      name: "Deadly Galerina (Galerina marginata)",
      image: "lookalike-galerina.jpg",
      distinction:
        "This is the dangerous one. Galerina marginata contains the same amatoxins as death caps and can grow on the same logs as honey fungus. Key differences: Galerina has a brown spore print (honey fungus is white), smaller and thinner overall, grows in small clusters or singly rather than massive clumps, and the ring is fragile and often disappears. Always do a spore print.",
      externalUrl: "https://www.inaturalist.org/taxa/154735-Galerina-marginata",
      externalSource: "iNaturalist",
    },
    {
      name: "Shaggy Scalycap (Pholiota squarrosa)",
      image: "lookalike-pholiota.jpg",
      distinction:
        "Grows in similar clusters on wood and can overlap in season and habitat. But Pholiota squarrosa has prominent recurved dry scales all over the cap and stem, giving it a shaggy look. Its spore print is brown, not white. The gills start yellowish-green. Not considered safe to eat.",
      externalUrl: "https://en.wikipedia.org/wiki/Pholiota_squarrosa",
      externalSource: "Wikipedia",
    },
    {
      name: "Ringless Honey Mushroom (Desarmillaria tabescens)",
      image: "lookalike-tabescens.jpg",
      distinction:
        "Very similar to the honey fungus and also edible when cooked. The key difference is right in the name — it lacks a ring on the stem. Cap tends to be smoother with fewer scales. Same clustered growth habit on wood. Previously classified as Armillaria tabescens.",
      externalUrl: "https://en.wikipedia.org/wiki/Desarmillaria_tabescens",
      externalSource: "Wikipedia",
    },
  ],
  edibility: "edible-with-caution",
  edibilityNote:
    "Edible and widely eaten in parts of Europe and Asia, but MUST be thoroughly cooked — at least 15–20 minutes of boiling or sauteing. Raw or undercooked honey fungus contains heat-labile toxins that cause nausea, vomiting, and diarrhea. Even well-cooked, some individuals are simply intolerant and get GI upset regardless. First-timers should try a small portion. Always discard tough stems and cooking water if boiling.",
  gbifKey: 2536891,
  stories: [
    {
      title: "The Humongous Fungus of Oregon",
      text: "In 1998, researchers at the US Forest Service discovered that a massive die-off of trees in Malheur National Forest was caused by a single Armillaria clone covering 2,385 acres — roughly 1,665 football fields. DNA testing confirmed it was one organism, estimated at 2,400–8,650 years old, making it the largest known living organism on Earth.",
      location: "Malheur National Forest, Oregon, USA",
      source: "US Forest Service",
      sourceUrl: "https://www.fs.usda.gov/Internet/FSE_DOCUMENTS/fsbdev3_033146.pdf",
    },
    {
      title: "Kew Gardens' Ongoing Battle",
      text: "The Royal Botanic Gardens at Kew has been fighting honey fungus for decades. It's the most common cause of plant death in UK gardens, and even Kew's expert horticulturists struggle to contain it. They've lost mature specimen trees to the pathogen's underground rhizomorph networks.",
      location: "Kew Gardens, London, UK",
      source: "Royal Horticultural Society",
      sourceUrl: "https://www.rhs.org.uk/disease/honey-fungus",
    },
    {
      title: "A Forager's Jackpot in the Catskills",
      text: "A forager posted on r/foraging about finding over 15 pounds of honey mushrooms on a single oak stump in the Catskill Mountains during an October hike. They blanched and froze the haul, reporting it lasted through winter in soups and stews.",
      location: "Catskill Mountains, New York, USA",
      source: "r/foraging",
      sourceUrl: "https://www.reddit.com/r/foraging/",
    },
    {
      title: "Fatal Galerina Mix-Up at a Foray",
      text: "In 2010, a mushroom club member in the Pacific Northwest accidentally included Galerina marginata specimens in a honey mushroom harvest. The mix-up was caught before cooking when a more experienced forager noticed the brown spore prints — a sobering reminder of why spore printing matters.",
      location: "Pacific Northwest, USA",
      source: "North American Mycological Association",
      sourceUrl: "https://namyco.org/",
    },
    {
      title: "Bioluminescent Rhizomorphs Spotted at Night",
      text: "Hikers in the New Forest reported seeing faint greenish glow coming from the ground along a trail. The source turned out to be Armillaria rhizomorphs — the underground bootlace structures of honey fungus can exhibit weak bioluminescence, a phenomenon known since Aristotle's time.",
      location: "New Forest, Hampshire, UK",
      source: "British Mycological Society",
      sourceUrl: "https://www.britmycolsoc.org.uk/",
    },
  ],
  seoQueries: [
    "honey fungus identification",
    "honey mushroom edible",
    "armillaria mellea poisonous or edible",
    "largest organism on earth mushroom",
    "honey fungus killing my trees",
    "how to cook honey mushrooms",
    "honey fungus vs galerina",
    "mushroom growing on tree stump clusters",
    "honey mushroom look alikes",
    "can you eat honey fungus",
    "armillaria mellea identification",
    "honey mushroom foraging tips",
    "how to get rid of honey fungus",
    "yellow brown mushroom clusters on wood",
    "humongous fungus oregon",
  ],
  funFacts: [
    "The largest living organism on Earth is an Armillaria clone in Oregon's Malheur National Forest, covering 2,385 acres — bigger than 1,600 football fields and potentially 8,650 years old.",
    "Honey fungus spreads underground through black, bootlace-like structures called rhizomorphs that can travel several meters through soil to find new trees to infect.",
    "Some Armillaria species are bioluminescent — their underground rhizomorphs glow faintly in the dark, a phenomenon called \"foxfire\" that has been reported since ancient Greece.",
    "In Eastern Europe, honey mushrooms are one of the most commonly collected wild mushrooms. In Russia, they're called opyata and are pickled, fried, and added to soups.",
    "A single honey fungus infection can kill a mature oak tree over the course of several years by slowly digesting its root system from the inside out.",
  ],
  images: [
    {
      filename: "01-field.jpg",
      alt: "Honey Fungus (Armillaria mellea) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Armillaria_mellea,_Honey_Fungus,_UK_1.jpg",
      author: "Stu's Images",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "02-habitat.jpg",
      alt: "Honey Fungus growing in natural habitat",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Boot_lace_rhizomorphs_of_the_Honey_Fungus._Armillaria_mellea._Lainsahw_Woods,_East_Ayrshire.jpg",
      author: "Rosser1954",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "03-field.jpg",
      alt: "Honey Fungus (Armillaria mellea) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Coloured_Figures_of_English_Fungi_or_Mushrooms_-_t._101.jpg",
      author: "James Sowerby",
      license: "Public domain",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    },
    {
      filename: "04-field.jpg",
      alt: "Honey Fungus (Armillaria mellea) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Famiole_sbollentatura.jpg",
      author: "Prof.lumacorno",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
  ],
  identificationImages: {
    cap: "cap-detail.jpg",
    gills: "gills-detail.jpg",
    stem: "stem-detail.jpg",
  },
};

export default species;
