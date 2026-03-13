import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "boletus-edulis",
  commonName: "Porcini",
  scientificName: "Boletus edulis",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Boletales",
    family: "Boletaceae",
    genus: "Boletus",
  },
  summary:
    "The undisputed king of edible mushrooms. Porcini — also called King Bolete or Cep — is so outrageously delicious that Italians have built an entire economy around it, foragers guard their spots like state secrets, and despite centuries of trying, nobody has figured out how to farm it.",
  description:
    "There's a reason every Italian nonna has a dried porcini stash hidden somewhere in her kitchen. These mushrooms have a depth of flavor that borders on unfair — nutty, earthy, almost meaty, with an aroma that can fill a room when you rehydrate a handful of dried slices. Fresh porcini are the crown jewels of autumn markets from Tuscany to the Pacific Northwest, and the global dried porcini trade is estimated to be worth over $3 billion annually. That's not a typo. Billions. For a mushroom.\n\nWhat makes porcini truly special — and truly maddening for commercial growers — is that they absolutely refuse to be cultivated. Boletus edulis forms a mycorrhizal partnership with living tree roots (spruce, pine, birch, beech, oak), and this relationship is so complex that no lab has cracked the code. Every single porcini you've ever eaten was picked wild by someone who trudged into a forest and found it. This is why foragers treat their porcini patches the way fishermen treat their honey holes: they'll take the secret to their grave.\n\nThe mushroom goes by different names across cultures — Steinpilz in Germany, cep in France, penny bun in England, belyy grib (\"white mushroom\") in Russia — and all of them consider it a national treasure. In parts of Italy, porcini season is basically a holiday. Entire villages shut down so everyone can head to the hills. Restaurants change their menus overnight. Arguments break out over whether the ones from Borgotaro are really better than the ones from Trentino (they are, say the people from Borgotaro).",
  identification: {
    cap: "7–30 cm across, sometimes larger. Convex when young, flattening with age. Color ranges from pale tan to dark brown, often with a slightly sticky surface when wet. The edge is sometimes lighter than the center. Young caps feel firm and almost bread-like — hence the English name 'penny bun.'",
    gills:
      "No gills. Instead, the underside has a dense sponge-like layer of pores (tubes). White when very young, turning yellowish then olive-green as spores mature. The pore surface doesn't bruise blue when pressed — this is a key identification feature.",
    stem: "Thick and bulbous — 8–25 cm tall and up to 10 cm wide, often wider at the base. White to pale brown, covered with a fine raised network pattern (reticulation) especially near the top. This net pattern is one of the most reliable ways to confirm you've got a real porcini.",
    sporePrint: "Olive-brown to dark brown.",
    odor: "Pleasant, nutty, slightly yeasty — often described as 'the smell of a good bakery.'",
  },
  habitat:
    "Forms mycorrhizal relationships with a wide range of trees: spruce, pine, birch, beech, oak, and chestnut. Found in coniferous and mixed forests, often along trails, clearings, and forest edges. Prefers well-drained, slightly acidic soils. Frequently appears in the same spots year after year — which is why experienced foragers memorize their patches.",
  season:
    "Late summer through autumn, typically August through November. In warmer Mediterranean climates, a second flush can appear in spring. Peak season is September–October across most of Europe and North America.",
  range:
    "One of the most widespread edible mushrooms on Earth. Native across Europe (especially Italy, France, Germany, Scandinavia, Poland, Russia), throughout temperate North America, and across parts of Asia. Introduced to the Southern Hemisphere through forestry plantations — now found in New Zealand, Australia, South Africa, and parts of South America.",
  lookAlikes: [
    {
      name: "Bitter Bolete (Tylopilus felleus)",
      slug: "tylopilus-felleus",
      image: "lookalike-felleus.jpg",
      distinction:
        "The classic porcini impostor. Looks almost identical at first glance — brown cap, bulbous stem, pore surface. But the net pattern on the stem is darker (brownish, not white), the pores turn pinkish with age, and one tiny taste will tell you everything: it's intensely bitter. A single piece can ruin an entire pot of risotto.",
      externalUrl:
        "https://www.inaturalist.org/taxa/63489-Tylopilus-felleus",
      externalSource: "iNaturalist",
    },
    {
      name: "White King Bolete (Boletus barrowsii)",
      image: "lookalike-barrowsii.jpg",
      distinction:
        "Actually edible and delicious — just paler. Found in western North America under ponderosa pine and Engelmann spruce. Cap is whitish to pale gray instead of brown. If you find one, congratulations — it's a great eat, just a different species.",
      externalUrl:
        "https://en.wikipedia.org/wiki/Boletus_barrowsii",
      externalSource: "Wikipedia",
    },
    {
      name: "Bay Bolete (Imleria badia)",
      slug: "imleria-badia",
      image: "lookalike-badia.jpg",
      distinction:
        "Another edible look-alike, common in European pine forests. Dark chestnut-brown cap, but the stem lacks the white net pattern of true porcini. The pore surface bruises blue-green when pressed — porcini pores don't. Smaller overall, with thinner flesh.",
      externalUrl:
        "https://www.mushroomexpert.com/imleria_badia.html",
      externalSource: "MushroomExpert",
    },
  ],
  edibility: "edible",
  edibilityNote:
    "One of the finest edible mushrooms in the world, prized across virtually every cuisine. Excellent fresh (sauteed, grilled, in risotto, pasta, soups) and arguably even better dried — drying concentrates the umami flavor dramatically. No special preparation needed beyond basic cleaning. Maggot larvae love porcini as much as humans do, so check for worm holes and slice them open before cooking.",
  gbifKey: 5954958,
  stories: [
    {
      title: "The Borgotaro Porcini That Got Its Own IGP",
      text: "In 1993, porcini from the Borgotaro valley in Emilia-Romagna became the first mushroom in Europe to receive IGP (Protected Geographical Indication) status — the same designation given to Parmigiano-Reggiano and Prosciutto di Parma. Local foragers had been fighting for the recognition since the 1970s, arguing their forests produced a distinctly superior fungus.",
      location: "Borgotaro, Emilia-Romagna, Italy",
      source: "European Commission IGP Registry",
    },
    {
      title: "Nonna's Secret Drying Rack",
      text: "A viral 2021 Reddit post showed an Italian grandmother's attic setup: window screens stacked on sawhorses, covered in thinly sliced porcini drying in the autumn breeze. She'd been doing this every October for 60 years. The post got 40k upvotes and a flood of comments from Italians sharing their own family's methods.",
      location: "Trentino, Italy",
      source: "r/foraging",
      sourceUrl: "https://www.reddit.com/r/foraging/",
    },
    {
      title: "A 3.3 kg Monster in Aberdeenshire",
      text: "In 2014, a forager in Scotland found a single Boletus edulis weighing 3.3 kg (over 7 pounds) in a pine forest near Balmoral. It was large enough to fill a laundry basket. Local mycologists confirmed it as one of the largest specimens ever documented in the UK.",
      location: "Aberdeenshire, Scotland",
      source: "BBC News",
      sourceUrl: "https://www.bbc.co.uk/news",
    },
    {
      title: "The Restaurant That Changes Its Menu by Text Message",
      text: "Osteria Francescana in Modena — the three-Michelin-star restaurant run by Massimo Bottura — reportedly gets text messages from local foragers the moment porcini start appearing. The kitchen can switch to a porcini-focused tasting menu within hours. Bottura has called fresh porcini 'the truffle of the forest floor.'",
      location: "Modena, Italy",
      source: "Massimo Bottura interviews",
    },
    {
      title: "Yunnan's $1.5 Billion Wild Mushroom Trade",
      text: "China's Yunnan province exports more wild porcini than anywhere else on Earth. Researchers at the Kunming Institute of Botany documented that the 2019 harvest exceeded 20,000 tonnes, much of it Boletus edulis shipped to European markets. Local collectors earn meaningful income during the three-month season.",
      location: "Yunnan Province, China",
      source: "Kunming Institute of Botany",
    },
  ],
  seoQueries: [
    "porcini mushroom identification",
    "how to find porcini mushrooms",
    "boletus edulis edible",
    "king bolete vs bitter bolete",
    "porcini mushroom look alikes",
    "where do porcini mushrooms grow",
    "porcini mushroom season",
    "can you grow porcini mushrooms",
    "dried porcini mushroom uses",
    "brown mushroom with sponge underneath",
    "porcini mushroom habitat",
    "cep mushroom identification UK",
    "how to tell real porcini from fake",
    "best porcini mushroom recipes",
    "penny bun mushroom foraging",
  ],
  funFacts: [
    "Despite being one of the most commercially valuable mushrooms on Earth, Boletus edulis has never been successfully cultivated. Every single porcini ever sold was foraged from the wild.",
    "The global dried porcini trade is estimated to be worth over $3 billion annually, making it one of the most economically important non-timber forest products in the world.",
    "In parts of Italy, unauthorized porcini foraging in someone else's forest can result in fines of up to 5,000 euros. Some municipalities require foraging permits and limit daily harvests to 3 kg per person.",
    "Porcini are among the few mushrooms that actually taste better dried than fresh. The drying process converts amino acids into new umami compounds that don't exist in the fresh mushroom.",
    "A single mature porcini can release up to 7 billion spores. Despite this astronomical output, the vast majority fail to find a compatible tree root to form the mycorrhizal partnership they need to survive.",
  ],
  images: [
    {
      filename: "01-classic.jpg",
      alt: "Large Boletus edulis porcini mushroom growing on forest floor in Spessart Nature Park, Germany",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Bayerischer_Spessart_Naturpark,_Gemeine_Steinpilz_(Boletus_edulis).jpg",
      author: "Holger Uwe Schmitt",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "02-forest.jpg",
      alt: "Young porcini mushroom with rounded brown cap emerging from leaf litter",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:AD2009Sep13_Boletus_edulis_01.jpg",
      author: "Archenzo",
      license: "Public domain",
      licenseUrl: "",
    },
    {
      filename: "03-pores-view.jpg",
      alt: "Porcini mushroom showing white pore surface underneath the cap",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:King_Bolete_(Boletus_edulis)_(33540493432).jpg",
      author: "Under the same moon...",
      license: "CC0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0",
    },
    {
      filename: "04-steinpilz.jpg",
      alt: "Mature Boletus edulis specimen showing classic brown cap and thick white stem with reticulation",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Boletus_edulis_steinpilz.jpg",
      author: "Holger Casselmann",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
  ],
  identificationImages: {
    cap: "cap-detail.jpg",
    gills: "pores-detail.jpg",
    stem: "stem-detail.jpg",
  },
};

export default species;
