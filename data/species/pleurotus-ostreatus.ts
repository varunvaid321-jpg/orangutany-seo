import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "pleurotus-ostreatus",
  commonName: "Oyster Mushroom",
  scientificName: "Pleurotus ostreatus",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Pleurotaceae",
    genus: "Pleurotus",
  },
  summary:
    "The beginner's best friend. Oyster mushrooms are one of the easiest wild mushrooms to identify, one of the simplest to grow at home, and one of the most delicious to eat. They fruit on dead and dying hardwood trees across six continents — and if you've never foraged before, this is a fantastic place to start.",
  description:
    "If there's one mushroom that turned regular people into fungi nerds, it's the oyster. It shows up reliably on dead logs and standing deadwood from autumn through early winter (and sometimes in spring too), growing in gorgeous overlapping shelf-like clusters that are hard to miss. The taste is mild, slightly savory, with a texture that holds up beautifully in stir-fries, soups, and pasta. Foragers love it because the fan-shaped cap, decurrent white gills, and off-center stem make it one of the most straightforward IDs in the mushroom world.\n\nBut here's where it gets wild: the oyster mushroom is a predator. Seriously. It's one of the few carnivorous fungi — it secretes compounds that paralyze tiny nematode worms in the wood it colonizes, then digests them for nitrogen. Scientists think this adaptation helps it thrive in nitrogen-poor deadwood. It's also a powerhouse in mycoremediation — researchers have used oyster mushroom mycelium to break down diesel fuel, petroleum hydrocarbons, and even cigarette butts. Paul Stamets famously demonstrated oyster mushrooms cleaning up oil-contaminated soil in a Washington State experiment.\n\nThe home cultivation explosion has made oyster mushrooms a gateway drug for amateur mycologists everywhere. You can grow them in a 5-gallon bucket of straw, on coffee grounds, in a laundry basket, or with a $20 kit from the internet. They fruit aggressively, tolerate a wide range of temperatures, and produce multiple flushes. It's genuinely hard to fail. No wonder oyster mushrooms are now one of the most commercially cultivated species on the planet, second only to the common button mushroom.",
  identification: {
    cap: "5–25 cm across. Fan-shaped or oyster-shaped (hence the name), smooth, with edges that roll inward when young and flatten or wave with age. Color ranges from white to cream to gray to brown, sometimes with lilac or bluish tones — depends on temperature and age. Younger caps tend darker.",
    gills: "White to cream, closely spaced, and decurrent — meaning they run down the stem rather than stopping at it. This is one of the key ID features. No partial veil or ring.",
    stem: "Short, stubby, off-center or sometimes completely absent (especially in shelf-growing specimens). White, often fuzzy at the base. When present, typically 1–3 cm long.",
    sporePrint: "White to pale lilac-gray. Drop a cap gill-side down on dark paper overnight.",
    odor: "Pleasant, mild, slightly anise-like or like fresh grain. Nothing unpleasant.",
  },
  habitat:
    "Grows on dead or dying hardwood — especially beech, oak, aspen, poplar, and elm. Fruits in overlapping shelving clusters on logs, stumps, and standing dead trees. Occasionally found on conifers. Loves cool, damp conditions.",
  season: "Primarily autumn through early winter, but can fruit in spring in cooler climates. Some varieties fruit year-round in temperate regions. Tolerates light frost — one of the last mushrooms still fruiting when temperatures drop.",
  range:
    "Truly cosmopolitan — found on every continent except Antarctica. Throughout North America, Europe, Asia, Australia, Africa, and South America. One of the most widely distributed edible mushrooms on Earth.",
  lookAlikes: [
    {
      name: "Angel Wings (Pleurocybella porrigens)",
      image: "lookalike-angel-wings.jpg",
      distinction:
        "Thinner, more delicate, pure white, and grows exclusively on conifer wood (not hardwood). Lacks a real stem. Once considered edible, but linked to fatal poisonings in Japan in 2004 among people with kidney problems. If it's on a conifer and paper-thin, leave it alone.",
      externalUrl: "https://www.inaturalist.org/taxa/48509-Pleurocybella-porrigens",
      externalSource: "iNaturalist",
    },
    {
      name: "Elm Oyster (Hypsizygus ulmarius)",
      image: "lookalike-elm-oyster.jpg",
      distinction:
        "Grows on living or dead elm and box elder trees. Cap is more centrally stemmed and rounded (less fan-shaped). Gills are not as strongly decurrent. Actually edible, but less flavorful. If the stem is centered and the cap is more circular, you might have an Elm Oyster.",
      externalUrl: "https://www.inaturalist.org/taxa/120862-Hypsizygus-ulmarius",
      externalSource: "iNaturalist",
    },
    {
      name: "Ghost Fungus (Omphalotus nidiformis)",
      image: "lookalike-ghost-fungus.jpg",
      distinction:
        "Found in Australia and parts of Asia. Bioluminescent — the gills glow green in the dark. Causes severe vomiting and cramps if eaten. The gills are more orange-tinted, and the overall color is creamier to yellowish. If you're in Australia, check the gills in a dark room before eating any oyster-like mushroom.",
      externalUrl: "https://www.inaturalist.org/taxa/155166-Omphalotus-nidiformis",
      externalSource: "iNaturalist",
    },
  ],
  edibility: "edible",
  edibilityNote:
    "One of the best edible wild mushrooms — widely eaten worldwide, commercially cultivated, and safe for most people. Cook before eating (raw oyster mushrooms can cause mild stomach upset). Excellent sauteed, in soups, stir-fries, or as a meat substitute. Some people report mild allergic reactions, so try a small amount your first time.",
  gbifKey: 2526530,
  stories: [
    {
      title: "Five-Gallon Bucket, Forty Pounds of Mushrooms",
      text: "A Reddit user in r/mycology posted a time-lapse of growing oyster mushrooms in a 5-gallon bucket filled with pasteurized straw. Over three flushes across six weeks, they harvested nearly 40 pounds from four buckets on their apartment balcony. Total cost: about $30 in spawn and straw.",
      location: "Portland, Oregon, USA",
      source: "r/mycology",
      sourceUrl: "https://www.reddit.com/r/mycology/",
    },
    {
      title: "A Sixty-Pound Cluster on a Single Log",
      text: "In 2019, a forager in the Appalachian Mountains posted photos of a massive oyster mushroom cluster growing on a fallen beech log. They estimated the total weight at over 60 pounds — enough to fill two large coolers. The cluster was so heavy that parts of it had started sagging under their own weight.",
      location: "Appalachian Mountains, USA",
      source: "Facebook Mushroom Identification Forum",
    },
    {
      title: "Cleaning Up an Oil Spill With Mushrooms",
      text: "In a famous 2001 experiment in Washington State, mycologist Paul Stamets set up test piles of diesel-contaminated soil inoculated with oyster mushroom mycelium. After eight weeks, the petroleum hydrocarbons had dropped from 20,000 ppm to under 200 ppm. The piles were covered in fruiting oyster mushrooms, and insects arrived — then birds that ate the insects. A dead zone became an ecosystem.",
      location: "Washington State, USA",
      source: "Stamets, 'Mycelium Running' (2005)",
    },
    {
      title: "Angel Wings Scare in Japan",
      text: "In 2004, 59 people in Japan fell ill after eating Angel Wings mushrooms — which look similar to oyster mushrooms but grow on conifers. Seventeen people with pre-existing kidney conditions died. The incident was a wake-up call for foragers worldwide to never assume a white shelf fungus on a conifer is an oyster mushroom.",
      location: "Akita and Niigata prefectures, Japan",
      source: "Japanese Ministry of Health reports (2004)",
    },
    {
      title: "Farm-to-Table Oysters at a Brooklyn Restaurant",
      text: "A Brooklyn chef partnered with an urban mushroom farm growing oyster mushrooms on spent coffee grounds collected from local cafes. The restaurant featured a rotating oyster mushroom dish — raw-marinated, tempura-fried, and smoked — and the farm supplied 200 pounds per week, all grown in a basement two miles from the kitchen.",
      location: "Brooklyn, New York, USA",
      source: "Eater NY",
    },
  ],
  seoQueries: [
    "oyster mushroom identification",
    "how to grow oyster mushrooms at home",
    "oyster mushroom look alikes",
    "are oyster mushrooms safe to eat",
    "oyster mushroom on dead tree",
    "pleurotus ostreatus edible",
    "fan shaped mushroom on log",
    "white gills mushroom growing on wood",
    "oyster mushroom vs angel wings",
    "grow mushrooms in a bucket",
    "oyster mushroom foraging guide",
    "gray mushroom on tree trunk",
    "mushroom that eats worms",
    "mycoremediation oyster mushroom",
    "easiest mushroom to grow for beginners",
  ],
  funFacts: [
    "Oyster mushrooms are carnivorous — they paralyze and digest tiny nematode worms to get nitrogen. One of the few predatory fungi known to science.",
    "Paul Stamets demonstrated that oyster mushroom mycelium can break down petroleum hydrocarbons in contaminated soil, reducing toxin levels by over 99% in just eight weeks.",
    "They can be grown on an absurd range of substrates: straw, cardboard, coffee grounds, cotton waste, corn cobs, old jeans, paper, and even used diapers (in research settings).",
    "Oyster mushrooms produce spores so prolifically that some commercial growers develop respiratory allergies — proper ventilation is essential in large-scale farms.",
    "The name 'ostreatus' comes from the Latin word for oyster, referring to the shape of the cap — not the taste, though some people do detect a faint seafood-like flavor.",
  ],
  images: [
    {
      filename: "03-winter.jpg",
      alt: "Oyster mushrooms growing on a tree trunk in winter conditions",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Gewone_oesterzwam_(Pleurotus_ostreatus)_25-12-2020_(d.j.b.)_01.jpg",
      author: "Famberhorst",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "04-caps-detail.jpg",
      alt: "Close-up of oyster mushroom caps showing smooth fan shape and pale coloring",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Gewone_oesterzwam_(Pleurotus_ostreatus)_31-12-2020_(d.j.b.)_03.jpg",
      author: "Famberhorst",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "05-classic.jpg",
      alt: "Classic oyster mushroom cluster with white to cream caps on hardwood",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Pleurotus_ostreatus_JPG2.jpg",
      author: "Jean-Pol Grandmont",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
  ],
};

export default species;
