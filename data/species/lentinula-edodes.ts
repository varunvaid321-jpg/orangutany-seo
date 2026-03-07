import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "lentinula-edodes",
  commonName: "Shiitake",
  scientificName: "Lentinula edodes",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Omphalotaceae",
    genus: "Lentinula",
  },
  summary:
    "The mushroom that built an empire — from ancient Japanese log cultivation to being in every grocery store on Earth.",
  description:
    "Shiitake has been cultivated for over a thousand years, making it one of the oldest farmed mushrooms on the planet. Chinese records from the Song Dynasty (around 1100 AD) describe farmers cutting shii trees (a type of oak — that's where the name comes from, \"shii\" + \"take\" meaning oak mushroom), leaving the logs in the forest, and waiting for wild spores to colonize them. Japanese growers later refined this into a precise art, notching logs and inoculating them with spawn. Today, shiitake is the second most cultivated mushroom in the world after the common button mushroom, and East Asia still produces the vast majority of the global supply.\n\nWhat makes shiitake special isn't just its deep, savory umami flavor — it's also packed with a compound called lentinan, a beta-glucan polysaccharide that has been studied extensively for anti-cancer and immune-boosting properties. Lentinan is actually approved as an adjunct cancer treatment in Japan. The mushroom also contains eritadenine, which may help lower cholesterol. But here's a fun plot twist: eating shiitake raw or undercooked can cause \"shiitake dermatitis\" — a bizarre skin reaction where your body breaks out in flagellate (whip-like) red streaks. It looks alarming but goes away on its own. Cooking thoroughly destroys the compound responsible.\n\nFrom miso soup to stir-fries to dried dashi stock, shiitake is a cornerstone of East Asian cuisine. Dried shiitake are actually more flavorful than fresh ones — the drying process creates new umami compounds. It's one of those rare organisms that humans have shaped and been shaped by for a millennium.",
  identification: {
    cap: "5–25 cm across. Convex when young, flattening with age. Dark brown to tan, often with a distinctive white cracking pattern (called \"donko\" when deeply cracked) on the surface. The margin rolls inward on younger specimens.",
    gills: "White to cream, crowded together, and attached to the stem. They can bruise brownish when handled roughly.",
    stem: "3–10 cm tall. Tough and fibrous — most people discard it or use it for stock. Often slightly off-center relative to the cap. Whitish to light brown, sometimes with a slight ring zone from the partial veil.",
    odor: "Strong, pleasant, and distinctively earthy-woody. Dried specimens have an even more intense aroma that's hard to mistake for anything else.",
  },
  habitat:
    "In the wild, shiitake grows as a saprotroph on dead or dying hardwood trees — especially oaks, chestnuts, beeches, and other broadleaf species. It decomposes the wood and thrives in warm, humid forest environments. Commercially, it's grown on supplemented hardwood sawdust blocks or the traditional way on inoculated logs.",
  season: "Spring and autumn in the wild, with flushes triggered by rain and temperature drops. Commercially available year-round.",
  range:
    "Native to East Asia — China, Japan, Korea, and parts of Southeast Asia. Wild populations also exist in scattered pockets across warmer temperate forests. Now cultivated on every continent except Antarctica.",
  lookAlikes: [
    {
      name: "Train Wrecker (Neolentinus lepideus)",
      image: "lookalike-neolentinus.jpg",
      distinction:
        "Grows on conifer wood (shiitake sticks to hardwoods). Has a pale cream to tan cap with brown scales, and tough, sawlike gill edges. The stem is usually more central. Edible when young but gets woody fast.",
      externalUrl: "https://www.mushroomexpert.com/neolentinus_lepideus.html",
      externalSource: "MushroomExpert",
    },
    {
      name: "Honey Mushroom (Armillaria mellea)",
      image: "lookalike-armillaria.jpg",
      distinction:
        "Grows in dense clusters at the base of living or dead trees. Has a prominent ring on the stem and honey-yellow to brown cap. Parasitic — it kills trees. Edible when cooked but causes stomach upset in some people. Lacks the white cracking pattern on the cap.",
      externalUrl: "https://en.wikipedia.org/wiki/Armillaria_mellea",
      externalSource: "Wikipedia",
    },
    {
      name: "Funeral Bell (Galerina marginata)",
      slug: "galerina-marginata",
      image: "lookalike-galerina.jpg",
      distinction:
        "DEADLY — contains the same amatoxins as the Death Cap. Much smaller than shiitake (cap 1–5 cm), with a thin ring on the stem and rusty brown spore print. Grows on decaying conifer wood. If you're foraging for wild shiitake, learning to distinguish Galerina is non-negotiable.",
      externalUrl: "https://www.inaturalist.org/taxa/154735-Galerina-marginata",
      externalSource: "iNaturalist",
    },
  ],
  edibility: "edible",
  edibilityNote:
    "One of the most widely eaten mushrooms in the world. Excellent flavor — deep umami, meaty texture. Must be cooked thoroughly before eating. Raw or undercooked shiitake can cause shiitake dermatitis, a temporary but alarming skin reaction with flagellate red streaks across the body. Cooking destroys the responsible compound (lentinan in its raw form). Dried shiitake are even more flavorful than fresh.",
  gbifKey: 2537743,
  stories: [
    {
      title: "Wu San Kwung and the First Shiitake Farm",
      text: "Chinese legend credits Wu San Kwung, a farmer during the Song Dynasty (around 1100 AD), with discovering that cutting and beating oak logs would cause shiitake to fruit. He's still celebrated as the patron saint of shiitake cultivation in parts of China.",
      location: "Zhejiang Province, China",
      source: "Chang & Miles, 'Mushrooms: Cultivation, Nutritional Value, Medicinal Effect' (2004)",
    },
    {
      title: "Japan's $2 Billion Shiitake Industry",
      text: "By the 1940s, Japan had turned shiitake into a national industry. After Mori Kisaku developed pure-culture spawn inoculation in 1943, production exploded. Japan exported over $2 billion worth of dried shiitake annually at its peak in the 1980s.",
      location: "Japan",
      source: "Mushroom Growers' Handbook (2004)",
    },
    {
      title: "The Flagellate Dermatitis Mystery",
      text: "In 1977, Japanese dermatologists first described patients covered in bizarre whip-like red streaks after eating raw shiitake at sushi bars. The condition, caused by the polysaccharide lentinan reacting with the immune system, is now well documented and completely preventable by cooking.",
      location: "Tokyo, Japan",
      source: "Nakamura (1977), Journal of Dermatology",
    },
    {
      title: "Log-Grown vs. Sawdust: The Flavor War",
      text: "In Japanese markets, log-grown shiitake (genboku) sell for 5-10x the price of sawdust-block shiitake. Connoisseurs swear the slow-grown log mushrooms have deeper umami. The premium \"donko\" grade — thick-capped with deep white cracks — can fetch over $50/lb dried.",
      location: "Japan",
      source: "Stamets, 'Growing Gourmet and Medicinal Mushrooms' (2000)",
    },
  ],
  seoQueries: [
    "shiitake mushroom identification",
    "how to grow shiitake mushrooms",
    "shiitake health benefits",
    "shiitake dermatitis raw mushroom",
    "shiitake vs button mushroom",
    "dried shiitake mushroom umami",
    "shiitake mushroom look alikes",
    "lentinula edodes cultivation",
    "shiitake log growing method",
    "can you eat shiitake raw",
    "shiitake mushroom cancer lentinan",
    "wild shiitake identification",
    "shiitake mushroom nutrition",
    "brown mushroom on dead tree",
    "shiitake mushroom history japan china",
  ],
  funFacts: [
    "Dried shiitake are more flavorful than fresh — the drying process breaks down proteins into free glutamate, the molecule responsible for umami taste.",
    "Lentinan, a compound extracted from shiitake, is an approved adjunct cancer treatment in Japan and has been used clinically since the 1980s.",
    "Eating raw or undercooked shiitake can cause 'shiitake dermatitis' — your body breaks out in bizarre whip-mark-like red streaks that disappear on their own after a few days.",
    "The name shiitake literally means 'oak mushroom' in Japanese — 'shii' refers to the Castanopsis tree (a type of chinquapin oak) and 'take' means mushroom.",
    "Shiitake is the second most cultivated mushroom on Earth, with China producing over 90% of the global supply — more than 11 million tonnes per year.",
  ],
  images: [
    {
      filename: "01-field.jpg",
      alt: "Shiitake mushrooms (Lentinula edodes) showing cap and gill detail on wood substrate",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Shiitake_Lentinula_edodes.jpg",
      author: "Holger Krisp",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
    {
      filename: "02-habitat.jpg",
      alt: "Shiitake growing in natural habitat",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Basswood_small_white_flower_mushroom.jpg",
      author: "Fumikas Sagisavas",
      license: "CC0",
      licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    },
    {
      filename: "04-field.jpg",
      alt: "Dried shiitake mushrooms in a bowl",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Lentinula_edodes_on_the_table.jpg",
      author: "Peachyeung316",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "05-field.jpg",
      alt: "Shiitake (Lentinula edodes) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Xiitake_(Lentinula_edodes).jpg",
      author: "Blau de Prússia",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
  ],
};

export default species;
