import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "hericium-coralloides",
  commonName: "Coral Tooth Fungus",
  scientificName: "Hericium coralloides",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Russulales",
    family: "Hericiaceae",
    genus: "Hericium",
  },
  summary:
    "A stunning white fungus that looks like it belongs on a coral reef, not a forest log. Coral Tooth — also called Comb Tooth — grows in delicate branching clusters covered in tiny hanging spines, and it's every bit as delicious as its famous cousin Lion's Mane. Protected by law in several European countries due to declining old-growth habitat.",
  description:
    "Finding Hericium coralloides in the wild is one of those moments that stops you mid-stride. It looks like someone glued a chunk of bleached coral onto a dead beech log — an intricate white mass of branching arms, each one dangling rows of short, delicate teeth (spines) that produce the spores. In good light, it almost seems to glow against the dark bark. It's easily one of the most beautiful fungi in the temperate forest.\n\nUnlike its more famous relative Lion's Mane (Hericium erinaceus), which forms a single unbranched clump of long cascading spines, Coral Tooth grows in a highly branched structure — think of a cauliflower crossed with icicles. The individual teeth are shorter (typically 5–15 mm) and arranged along the underside of each branch. When young and fresh, the entire fruiting body is pure white; as it ages, it yellows and eventually turns brownish.\n\nCoral Tooth is saprobic, feeding on dead hardwood — beech and oak are its favorites, though it also appears on maple, birch, and other deciduous trees. It prefers large-diameter logs and standing dead trees in mature forests, which is exactly why it's becoming rarer in managed woodlands where dead wood is removed. In the UK, it's a Priority Species under the Biodiversity Action Plan. Germany, Poland, and several Scandinavian countries also list it as threatened or protected. If you find one, consider yourself lucky — and leave it to sporulate unless you're certain the population is healthy.",
  identification: {
    cap: "No traditional cap. The fruiting body is a branching, coral-like structure 10–40 cm across. Pure white when fresh, becoming cream to yellowish with age. The overall shape is irregularly globose with multiple branching arms radiating from a central attachment point.",
    gills:
      "No gills. Instead, the spore-bearing surface consists of rows of hanging teeth (spines) 5–15 mm long, arranged along the underside of each branch. Teeth are white, soft, and fragile — they break easily when handled.",
    stem: "No true stem. The branching structure attaches to the wood substrate at a single point or narrow base, from which all branches radiate outward.",
    sporePrint: "White.",
    odor: "Mild, pleasant, slightly sweet. Some describe it as faintly fragrant.",
  },
  habitat:
    "Saprobic on dead hardwood, especially beech (Fagus) and oak (Quercus). Strongly associated with large-diameter logs, fallen trunks, and standing dead trees in mature and old-growth deciduous forests. Occasionally found on maple, birch, and walnut. Prefers shaded, humid conditions with good air circulation.",
  season:
    "Late summer through autumn, typically August through November. Fruiting is triggered by autumn rains following warm periods. In favorable conditions, fruit bodies can persist for several weeks before deteriorating.",
  range:
    "Widely distributed across the Northern Hemisphere but nowhere truly common. Found throughout Europe (UK, Scandinavia, Germany, France, Poland, Russia), across temperate North America (eastern US and Canada especially), and in temperate Asia. More common in regions with extensive old-growth or mature deciduous forests.",
  lookAlikes: [
    {
      name: "Lion's Mane (Hericium erinaceus)",
      slug: "hericium-erinaceus",
      image: "lookalike-erinaceus.jpg",
      distinction:
        "Forms a single, unbranched, globose clump of long cascading spines (often 2–5 cm long) rather than a branching coral-like structure. The overall shape is more like a white pompom or waterfall than a coral. Both are excellent edibles, but their growth form is distinctly different once you've seen both side by side.",
      externalUrl:
        "https://www.inaturalist.org/taxa/49158-Hericium-erinaceus",
      externalSource: "iNaturalist",
    },
    {
      name: "Bear's Head Tooth (Hericium americanum)",
      image: "lookalike-americanum.jpg",
      distinction:
        "Intermediate between Coral Tooth and Lion's Mane — it branches, but less extensively than H. coralloides, and its spines are longer (1–3 cm). Found primarily in eastern North America. Some mycologists consider it a variety of H. coralloides rather than a separate species. Also edible and delicious.",
      externalUrl:
        "https://en.wikipedia.org/wiki/Hericium_americanum",
      externalSource: "Wikipedia",
    },
    {
      name: "Ochre Spreading Tooth (Steccherinum ochraceum)",
      image: "lookalike-steccherinum.jpg",
      distinction:
        "Completely different in size and habit. Forms thin, crust-like patches (1–5 cm) on dead wood with tiny orange to ochre teeth on the underside. Much smaller, flatter, and distinctly colored compared to the large, white, branching Coral Tooth. Not edible due to small size and tough texture.",
      externalUrl:
        "https://en.wikipedia.org/wiki/Steccherinum_ochraceum",
      externalSource: "Wikipedia",
    },
  ],
  edibility: "edible",
  edibilityNote:
    "An excellent edible mushroom with a delicate flavor often compared to lobster or crab — very similar to Lion's Mane. Best sautéed in butter until the edges turn golden and slightly crispy. The texture is tender and slightly chewy. However, because Coral Tooth is protected in many European countries, foraging may be illegal in your area. Always check local regulations before harvesting. In North America, it's generally legal to forage but not abundant enough to take large quantities.",
  gbifKey: 5248532,
  stories: [
    {
      title: "The UK's Coral Tooth Recovery Program",
      text: "In 2013, the New Forest in southern England became the focus of a targeted conservation effort for Hericium coralloides after surveys found it on fewer than 20 trees in the entire forest. The Forestry Commission began deliberately leaving large beech logs in place rather than clearing them — a simple change that gave the fungus the dead wood habitat it desperately needed. By 2020, the number of known sites had more than doubled.",
      location: "New Forest, Hampshire, England",
      source: "Forestry Commission UK",
    },
    {
      title: "Germany's Red List Protection",
      text: "Germany listed Hericium coralloides on its national Red List of threatened species in the 1990s, making it illegal to collect in the wild. The listing was driven by decades of intensive forestry that removed the large dead beech logs the fungus depends on. German nature reserves that adopted 'deadwood retention' policies saw the species gradually return within 10–15 years.",
      location: "Germany",
      source: "German Federal Agency for Nature Conservation",
    },
    {
      title: "A Rising Star on Restaurant Menus",
      text: "Coral Tooth has gained popularity among chefs in the farm-to-table movement, particularly in the northeastern United States and Pacific Northwest. Its striking appearance and lobster-like flavor make it a natural fit for tasting menus. Some restaurants present it tempura-fried or seared, capitalizing on its photogenic branching structure. As demand has grown, small-scale cultivators have begun offering it alongside Lion's Mane to reduce pressure on wild populations.",
      location: "Northeastern USA and Pacific Northwest",
      source: "Foraging and culinary communities",
    },
    {
      title: "Poland's Old-Growth Białowieża Connection",
      text: "Białowieża Forest, the last lowland primeval forest in Europe straddling the Poland-Belarus border, is one of the most reliable places on the continent to find Hericium coralloides. Researchers from the University of Warsaw documented it on over 100 fallen beech and oak logs during a 2017 survey — a density virtually impossible in managed forests. The find became a powerful argument against logging proposals in the forest.",
      location: "Białowieża Forest, Poland",
      source: "University of Warsaw mycological surveys",
    },
    {
      title: "Cultivation Breakthroughs in China",
      text: "While Hericium erinaceus has been commercially cultivated in China for decades, Hericium coralloides proved more challenging due to its branching growth habit requiring specific humidity and airflow conditions. Researchers at the Fujian Agriculture and Forestry University published a successful protocol in 2021 using supplemented beech sawdust blocks in climate-controlled chambers, opening the door to commercial production without wild harvesting.",
      location: "Fujian Province, China",
      source: "Fujian Agriculture and Forestry University",
    },
  ],
  seoQueries: [
    "coral tooth fungus identification",
    "hericium coralloides edible",
    "coral tooth mushroom vs lions mane",
    "white branching fungus on dead log",
    "hericium coralloides recipe",
    "coral tooth fungus protected species",
    "comb tooth mushroom identification",
    "hericium coralloides where to find",
    "white coral mushroom on wood",
    "is coral tooth fungus rare",
    "hericium species identification guide",
    "coral tooth fungus taste",
    "hericium coralloides vs americanum",
    "tooth fungi identification UK",
    "coral tooth fungus medicinal properties",
  ],
  funFacts: [
    "Hericium coralloides is legally protected in the UK, Germany, Poland, and several Scandinavian countries — picking it can result in fines. Its decline is directly linked to the removal of dead wood from managed forests.",
    "Despite looking completely alien to most terrestrial fungi, Coral Tooth is closely related to the common Russula mushrooms — they're both in the order Russulales, a connection that surprised mycologists when molecular studies revealed it.",
    "A single Coral Tooth fruiting body can weigh over 1 kg and span 40 cm across, making it one of the largest tooth fungi in the world.",
    "The flavor of Coral Tooth is often described as 'lobster-like' — so similar to shellfish that some chefs use it as a vegan substitute for crab cakes and lobster rolls.",
    "Coral Tooth requires dead logs at least 20 cm in diameter to fruit successfully. Modern forestry practices that remove fallen wood before it reaches this size have eliminated the species from many European forests.",
  ],
  images: [
    {
      filename: "01-branching.jpg",
      alt: "Fresh white Hericium coralloides coral tooth fungus with intricate branching structure on a beech log",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Hericium_coralloides_2010_G1.jpg",
      author: "George Chernilevsky",
      license: "Public domain",
      licenseUrl: "",
    },
    {
      filename: "02-habitat.jpg",
      alt: "Coral tooth fungus growing on fallen dead hardwood trunk in mature deciduous forest",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Hericium_coralloides_(Scop.)_Pers_560921.jpg",
      author: "Wikimedia Commons contributor",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "03-teeth-detail.jpg",
      alt: "Close-up of Hericium coralloides showing rows of hanging white teeth along branching arms",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Hericium_coralloides_62292.jpg",
      author: "Holger Krisp",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
    {
      filename: "04-young.jpg",
      alt: "Young Hericium coralloides specimen showing pure white coloration and compact branching",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Hericium_coralloides_01.jpg",
      author: "H. Krisp",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
    {
      filename: "05-mature.jpg",
      alt: "Large mature coral tooth fungus showing slight yellowing on aging branches",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Ästiger_Stachelbart_Hericium_coralloides.jpg",
      author: "Lebrac",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
  ],
};

export default species;
