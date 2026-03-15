import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "tremella-fuciformis",
  commonName: "Snow Fungus",
  scientificName: "Tremella fuciformis",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Tremellomycetes",
    order: "Tremellales",
    family: "Tremellaceae",
    genus: "Tremella",
  },
  summary:
    "A stunning white, translucent, frilly jelly fungus that looks like underwater coral growing on dead wood. Snow Fungus is a $1 billion+ industry in China, where it's a staple ingredient in sweet dessert soups and a rising star in skincare products. Like its cousin Witch's Butter, it's actually a mycoparasite — feeding on Annulohypoxylon fungi, not wood.",
  description:
    "Tremella fuciformis might be the most commercially successful jelly fungus on Earth. In China alone, where it's known as 银耳 (yín ěr, 'silver ear'), the snow fungus industry is estimated at over $1 billion annually. It's a key ingredient in tong sui (sweet soup desserts), where the delicate frilly lobes are simmered with rock sugar, goji berries, lotus seeds, and jujubes until they soften into a silky, slightly gelatinous texture. The result is considered both a dessert and a tonic — traditional Chinese medicine has classified it as a yin-nourishing food for centuries.\n\nIn the wild, snow fungus is a genuinely beautiful sight. The translucent white, ruffled fruiting bodies grow in branching, coral-like clusters that can reach 7–8 cm across. They're gelatinous but firmer than many jelly fungi, with a texture that's more like soft cartilage than slime. Found on dead hardwood branches in tropical and subtropical forests, wild specimens fruit during warm, wet periods. But almost nobody eats wild snow fungus anymore — the commercially cultivated version is vastly more convenient, consistent, and cheap.\n\nCommercial cultivation of Tremella fuciformis is fascinatingly indirect. Because the fungus is a mycoparasite that needs a host fungus to grow, growers must co-cultivate it with its host — typically an Annulohypoxylon (formerly Hypoxylon) species — on sterilized wood-based substrate. This dual-culture technique was perfected in China's Fujian province in the 1960s and has since spread throughout East and Southeast Asia. The dried product — lightweight, shelf-stable white puffs — is exported globally and has recently attracted attention from the Western beauty industry. Tremella extract has been found to hold more moisture than hyaluronic acid by weight, making it a sought-after ingredient in serums and moisturizers.",
  identification: {
    cap: "No cap. Fruiting body is a frilly, ruffled, coral-like mass of translucent white to pale yellowish lobes, 4–8 cm across. Each lobe is thin, gelatinous, and slightly translucent. Fresh specimens have a delicate, almost ethereal appearance. Dries to a hard, yellowish-white mass.",
    gills:
      "No gills. Spores are produced on the outer surface of the gelatinous lobes. The entire convoluted, ruffled surface serves as the spore-bearing area.",
    stem: "No distinct stem. The lobes radiate from a central attachment point on the wood surface. Sometimes a small, tough core is visible at the base.",
    sporePrint: "White.",
    odor: "Very mild, slightly sweet and clean. Almost odorless when fresh.",
  },
  habitat:
    "Mycoparasitic on Annulohypoxylon (formerly Hypoxylon) fungi growing on dead hardwood branches and logs in tropical and subtropical forests. Wild specimens found on broad-leaved trees including mango, oak, and various tropical hardwoods. Commercially cultivated on sterilized sawdust substrate co-inoculated with the host fungus.",
  season:
    "In the wild, fruits during warm, wet periods — typically the rainy season in tropical and subtropical regions. Commercially cultivated year-round in controlled environments. Dried product available at all times in Asian grocery stores worldwide.",
  range:
    "Wild populations found throughout tropical and subtropical regions worldwide — Southeast Asia, southern China, Central and South America, sub-Saharan Africa, and Australasia. Commercially cultivated primarily in China (Fujian, Sichuan, Guizhou provinces), with smaller operations in Southeast Asia and beyond.",
  lookAlikes: [
    {
      name: "Cauliflower Mushroom (Sparassis crispa)",
      slug: "sparassis-crispa",
      image: "lookalike-sparassis.jpg",
      distinction:
        "Much larger (often 20–40 cm across), opaque cream to pale tan, and found at the base of living or dead conifer trees — never on small branches. The lobes are flat and wavy like egg noodles rather than translucent and frilly. Sparassis is a choice edible with a nutty flavor, completely different in texture from the gelatinous snow fungus.",
      externalUrl:
        "https://www.inaturalist.org/taxa/63014-Sparassis-crispa",
      externalSource: "iNaturalist",
    },
    {
      name: "White Jelly Fungus (Ductifera pululahuana)",
      image: "lookalike-ductifera.jpg",
      distinction:
        "A rare white jelly fungus that can superficially resemble Tremella fuciformis. Typically smaller, less frilly, and with a smoother, more blob-like appearance rather than the elaborate coral-like branching of snow fungus. Grows on dead hardwood. Very uncommon — most white jelly fungi you encounter will be Tremella, not Ductifera.",
      externalUrl:
        "https://en.wikipedia.org/wiki/Ductifera_pululahuana",
      externalSource: "Wikipedia",
    },
    {
      name: "Net-like Tremella (Tremella reticulata)",
      image: "lookalike-reticulata.jpg",
      distinction:
        "White and gelatinous like T. fuciformis, but forms a more open, net-like or latticed structure rather than dense, frilly lobes. Less common and less commercially important. Found on dead wood in temperate forests. The latticed structure is distinctive once you know what to look for.",
      externalUrl:
        "https://en.wikipedia.org/wiki/Tremella_reticulata",
      externalSource: "Wikipedia",
    },
  ],
  edibility: "edible",
  edibilityNote:
    "A widely eaten and commercially cultivated edible fungus, especially in Chinese, Japanese, and Southeast Asian cuisines. Virtually flavorless on its own — valued entirely for its soft, silky, gelatinous texture after cooking. Classic preparation is in sweet soups (tong sui) with rock sugar, goji berries, and lotus seeds. Also used in savory dishes, salads, and drinks. Dried snow fungus is widely available in Asian grocery stores and needs to be rehydrated before use. No special safety precautions needed.",
  gbifKey: 5237434,
  stories: [
    {
      title: "The Imperial Concubine's Beauty Secret",
      text: "Yang Guifei, the legendary Tang Dynasty beauty (719–756 AD), was said to attribute her famous complexion to regular consumption of snow fungus soup. While almost certainly apocryphal, the story has been retold for over a thousand years and remains a powerful marketing narrative for snow fungus products in China. Modern beauty brands still reference Yang Guifei on their tremella skincare lines.",
      location: "China",
      source: "Chinese culinary and beauty folklore",
    },
    {
      title: "Fujian's Billion-Dollar Fungus Farms",
      text: "Gutian County in Fujian Province produces more Tremella fuciformis than anywhere else on Earth. The county's snow fungus industry dates to the 1960s when local scientists perfected the dual-culture technique of co-cultivating Tremella with its Annulohypoxylon host. Today, Gutian's annual snow fungus output is measured in tens of thousands of tonnes, and the industry supports a significant portion of the local economy.",
      location: "Gutian County, Fujian Province, China",
      source: "Chinese agricultural reports",
    },
    {
      title: "Tremella Extract vs. Hyaluronic Acid",
      text: "A widely cited 2016 study found that tremella polysaccharide extract could hold more moisture per unit weight than hyaluronic acid — the gold-standard moisturizing ingredient in skincare. The finding set off a boom in tremella-based beauty products, with brands from The Ordinary to high-end K-beauty lines incorporating snow fungus extract into serums and moisturizers.",
      location: "International",
      source: "International Journal of Biological Macromolecules",
    },
    {
      title: "The Hong Kong Dessert Shop Staple",
      text: "In Hong Kong's cha chaan tengs (tea restaurants) and dedicated sweet soup shops, snow fungus tong sui is one of the most popular desserts year-round. The classic version — snow fungus simmered with papaya, rock sugar, and sometimes a handful of goji berries — is considered both cooling and nourishing. Some shops have been serving the same recipe for over 50 years.",
      location: "Hong Kong",
      source: "South China Morning Post",
      sourceUrl: "https://www.scmp.com/",
    },
    {
      title: "A Dual-Culture Cultivation Breakthrough",
      text: "Cultivating Tremella fuciformis was considered impossible until Chinese mycologists in the 1960s discovered that the fungus could only grow in the presence of its host, Annulohypoxylon archeri. The breakthrough technique of co-inoculating sterilized substrate with both fungi simultaneously transformed snow fungus from a rare wild delicacy into one of the most affordable and widely available mushrooms in Asia.",
      location: "Fujian Province, China",
      source: "Mycological Research",
    },
  ],
  seoQueries: [
    "snow fungus mushroom",
    "tremella fuciformis identification",
    "white jelly fungus identification",
    "snow fungus benefits",
    "silver ear mushroom recipe",
    "tremella fuciformis edible",
    "snow fungus dessert soup",
    "white coral like mushroom on wood",
    "tremella fuciformis skincare",
    "snow fungus vs hyaluronic acid",
    "how to cook snow fungus",
    "white translucent mushroom identification",
    "tremella fuciformis cultivation",
    "snow fungus tong sui recipe",
    "tremella mushroom beauty benefits",
  ],
  funFacts: [
    "The snow fungus industry in China is estimated to be worth over $1 billion annually. Gutian County in Fujian Province alone produces tens of thousands of tonnes per year, making it one of the most commercially important cultivated fungi in the world.",
    "Tremella fuciformis can't be grown alone — it's a mycoparasite that requires a host fungus (Annulohypoxylon) to survive. Commercial cultivation requires inoculating substrate with both fungi simultaneously, making it one of the most unusual farming systems in agriculture.",
    "Tremella polysaccharide extract has been shown to hold more moisture per unit weight than hyaluronic acid, the skincare industry's gold-standard moisturizer. This finding has made snow fungus a hot ingredient in Korean and Chinese beauty products.",
    "Yang Guifei, one of the Four Beauties of ancient China, legendarily attributed her famous complexion to regular snow fungus consumption. Over a thousand years later, Chinese beauty brands still use her image to market tremella skincare products.",
    "In traditional Chinese medicine, snow fungus has been classified as a yin-nourishing, lung-moistening food for centuries. While modern science has identified bioactive polysaccharides in the fungus, many of the traditional health claims remain unverified by clinical trials.",
  ],
  images: [
    {
      filename: "01-classic.jpg",
      alt: "Fresh white Tremella fuciformis snow fungus fruiting body showing translucent frilly lobes on dead wood",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Tremella_fuciformis_2.jpg",
      author: "Sheng Zhangjian",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "02-field.jpg",
      alt: "Snow Fungus (Tremella fuciformis) translucent white jelly fungus on a twig",
      source: "iNaturalist",
      sourceUrl: "https://www.inaturalist.org/observations/62367946",
      author: "Alex Abair",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    {
      filename: "03-field.jpg",
      alt: "Snow Fungus (Tremella fuciformis) white gelatinous mass on bark in Brazil",
      source: "iNaturalist",
      sourceUrl: "https://www.inaturalist.org/photos/13274755",
      author: "Alex Popovkin",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
  ],
  identificationImages: {
    cap: "lobe-detail.jpg",
    gills: "texture-detail.jpg",
    stem: "base-detail.jpg",
  },
};

export default species;
