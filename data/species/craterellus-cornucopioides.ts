import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "craterellus-cornucopioides",
  commonName: "Black Trumpet",
  scientificName: "Craterellus cornucopioides",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Cantharellales",
    family: "Cantharellaceae",
    genus: "Craterellus",
  },
  summary:
    "It looks like something that crawled out of a Tim Burton movie, but the Black Trumpet is one of the most sought-after wild mushrooms on Earth — nicknamed \"black gold\" by foragers who spend hours squinting at leaf litter trying to spot them.",
  description:
    "Here's the cruel joke nature plays on mushroom hunters: one of the most delicious wild mushrooms in existence is also one of the hardest to find. The Black Trumpet is jet black to dark gray, shaped like a funnel or a tiny vase, and grows directly out of the forest floor in clusters that blend perfectly into dead leaves. Experienced foragers talk about \"getting your eye in\" — once you spot the first one, suddenly you realize you're standing in a patch of dozens. Until that moment, they're basically invisible.\n\nFrench cooks call it \"trompette de la mort\" (trumpet of death), which sounds terrifying but refers only to its grim appearance. In the kitchen, it's anything but deadly — the flavor is rich, smoky, almost truffle-like, with an intensity that punches way above its weight. Dried Black Trumpets are even more concentrated and can be ground into a powder that turns any dish into something special. High-end restaurants charge a fortune for them, and foragers guard their patches like state secrets.\n\nBlack Trumpets are mycorrhizal, forming partnerships with hardwood trees — especially oaks and beeches. They love mossy, damp spots along paths and stream banks. In a good year with steady summer rain, you might fill a basket in an hour. In a dry year, you might walk for miles and find nothing. That unpredictability is part of what makes finding them feel like winning a small lottery.",
  identification: {
    cap: "No traditional cap — the whole mushroom is a hollow, funnel-shaped trumpet, 2–8 cm across at the top. Thin and wavy-edged, almost papery. Color ranges from jet black when wet to dark gray or brownish-gray when dry. The inner surface is slightly rough or scaly.",
    gills: "No gills. The outer (lower) surface is smooth to slightly wrinkled, pale gray to grayish-buff. This is where the spores are produced — it's one of the features that distinguishes it from look-alikes.",
    stem: "Not a true stem — the trumpet tapers into a hollow, tube-like base, 3–8 cm tall. Same dark color as the rest of the mushroom. Very thin-walled and fragile.",
    sporePrint: "White to pale cream.",
    odor: "Pleasant, sweet, fruity — sometimes described as apricot-like. Intensifies when dried.",
  },
  habitat:
    "Grows on the ground in hardwood forests, especially under oaks, beeches, and sometimes conifers. Loves mossy banks, trail edges, stream sides, and damp leaf litter. Mycorrhizal — forms symbiotic relationships with tree roots. Often found in clusters or scattered troops.",
  season:
    "Summer through late autumn. Peak season is July–October in North America, August–November in Europe. Fruits best after sustained rain following warm weather.",
  range:
    "Widespread across the Northern Hemisphere — throughout Europe, eastern North America, and parts of Asia. Particularly common in France, Italy, Scandinavia, and the eastern United States from New England south to the Carolinas. Also reported in Japan and Korea.",
  lookAlikes: [
    {
      name: "Yellowfoot Chanterelle (Craterellus tubaeformis)",
      image: "lookalike-yellowfoot.jpg",
      distinction:
        "Similar trumpet shape but yellowish-brown cap and distinctive yellow-orange stem. Has visible veins or ridges on the underside rather than the smooth surface of the Black Trumpet. Also edible and delicious — no danger in mixing these up.",
      externalUrl:
        "https://www.inaturalist.org/taxa/350511-Craterellus-tubaeformis",
      externalSource: "iNaturalist",
    },
    {
      name: "Devil's Urn (Urnula craterium)",
      image: "lookalike-urnula.jpg",
      distinction:
        "Cup-shaped rather than trumpet-shaped, with a leathery, dark brown to black exterior. Grows on dead hardwood sticks in spring, not from soil. Interior is smooth and black. Not edible. Appears earlier in the season (March–May) than Black Trumpets.",
      externalUrl: "https://en.wikipedia.org/wiki/Urnula_craterium",
      externalSource: "Wikipedia",
    },
    {
      name: "Sinuous Chanterelle (Craterellus cinereus)",
      image: "lookalike-devil.jpg",
      distinction:
        "Very similar dark gray-brown color but has well-defined gill-like ridges on the outer surface rather than a smooth or slightly wrinkled exterior. Cap surface is more scaly. Also edible — sometimes considered the same species complex in older field guides.",
      externalUrl:
        "https://www.mushroomexpert.com/craterellus_cinereus.html",
      externalSource: "MushroomExpert",
    },
  ],
  edibility: "edible",
  edibilityNote:
    "One of the finest wild edible mushrooms. Rich, smoky, almost truffle-like flavor that intensifies when dried. No special preparation needed — just clean off debris and cook. Excellent sauteed in butter, in cream sauces, with pasta, or dried and ground into powder. Called \"black gold\" and \"poor man's truffle\" by foragers. No known toxic look-alikes in the Craterellus genus.",
  gbifKey: 2554662,
  stories: [
    {
      title: "A Forager's $800 Afternoon in Vermont",
      text: "A poster on r/foraging described finding over 5 pounds of Black Trumpets along a stream bank in the Green Mountains in August 2021. They dried most of them and calculated the haul was worth over $800 at market price — from a single afternoon walk.",
      location: "Green Mountains, Vermont, USA",
      source: "r/foraging",
      sourceUrl: "https://www.reddit.com/r/foraging/",
    },
    {
      title: "France's Trumpet of Death Tradition",
      text: "In rural France, Black Trumpets have been gathered for centuries and are called \"trompette de la mort\" — not because they're dangerous, but because they emerge around All Saints' Day and look like tiny black funeral horns rising from the ground.",
      location: "Rural France",
      source: "David Arora, 'Mushrooms Demystified'",
    },
    {
      title: "The Mushroom That Hides in Plain Sight",
      text: "Mycologist Gary Lincoff famously described leading a group through Central Park's North Woods and pointing at the ground where 30+ Black Trumpets were growing. Not a single participant had noticed them until he literally touched one.",
      location: "Central Park, New York City",
      source: "Gary Lincoff, 'The Complete Mushroom Hunter'",
    },
    {
      title: "Michelin-Star Secret Ingredient",
      text: "Chef Magnus Nilsson at the two-Michelin-star Faviken in Sweden used dried Black Trumpet powder as a seasoning across multiple dishes, calling it one of the most versatile wild ingredients available in Scandinavian forests.",
      location: "Jarpen, Sweden",
      source: "Magnus Nilsson, 'Faviken' (2012)",
    },
    {
      title: "A Dog Trained to Sniff Them Out",
      text: "An Oregon forager trained her Labrador retriever to locate Black Trumpets by scent in the Coast Range forests. She reported the dog could find patches she walked right past, cutting her foraging time in half during the 2022 season.",
      location: "Coast Range, Oregon, USA",
      source: "r/mycology",
      sourceUrl: "https://www.reddit.com/r/mycology/",
    },
  ],
  seoQueries: [
    "black trumpet mushroom identification",
    "horn of plenty mushroom",
    "craterellus cornucopioides edible",
    "how to find black trumpet mushrooms",
    "black trumpet vs black chanterelle",
    "trompette de la mort mushroom",
    "black trumpet mushroom taste",
    "where do black trumpets grow",
    "black trumpet look alikes",
    "dried black trumpet mushroom",
    "black trumpet mushroom recipe",
    "black mushroom that looks like a funnel",
    "black trumpet mushroom season",
    "foraging black trumpets in leaf litter",
  ],
  funFacts: [
    "Black Trumpets are so hard to spot that experienced foragers call finding the first one \"the click\" — once your brain recognizes the pattern, you suddenly see them everywhere around you.",
    "The French name \"trompette de la mort\" (trumpet of death) has nothing to do with toxicity — it refers to their jet-black funeral appearance and their habit of fruiting around All Saints' Day in November.",
    "Dried Black Trumpet powder is sometimes called \"poor man's truffle\" because it adds a similar deep, earthy, umami richness to dishes at a fraction of the cost.",
    "Unlike most prized wild mushrooms, Black Trumpets have virtually no dangerous look-alikes — everything in their genus is edible, making them one of the safest mushrooms for beginner foragers to learn.",
    "Black Trumpets are hollow all the way through from cap to base, like a tiny megaphone. Slugs love hiding inside them, so a quick soak in salt water before cooking is a forager's pro tip.",
  ],
  images: [
    {
      filename: "01-field.jpg",
      alt: "Black Trumpet (Craterellus cornucopioides) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Craterellus_cornucopioides_JPG1.jpg",
      author: "Jean-Pol GRANDMONT",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
    {
      filename: "02-habitat.jpg",
      alt: "Black Trumpet growing in natural habitat",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Trumpets_on_the_forest_floor.jpg",
      author: "Sarahnphillips",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "03-field.jpg",
      alt: "Black Trumpet (Craterellus cornucopioides) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Craterellus.cornucopioides.1000x.DIC.jpg",
      author: "Alan Rockefeller",
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
