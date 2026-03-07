import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "amanita-caesarea",
  commonName: "Caesar's Mushroom",
  scientificName: "Amanita caesarea",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Amanitaceae",
    genus: "Amanita",
  },
  summary:
    "The mushroom so delicious that Roman emperors hoarded it for themselves. Caesar's Mushroom is one of the few Amanitas you actually want on your plate — a bright orange beauty prized since antiquity, hiding in plain sight among its deadly relatives.",
  description:
    "If you told someone that one of the world's most sought-after edible mushrooms belongs to the same genus as the Death Cap, they'd think you were joking. But Amanita caesarea has been the darling of Mediterranean cuisine for over two thousand years. The ancient Romans considered it the finest mushroom in existence — so much so that they reserved it for the emperor's table, cooked in special vessels called \"boletaria\" that were used for nothing else. Nero reportedly called it \"the food of the gods,\" which is darkly ironic given that Emperor Claudius was allegedly murdered with a poisoned mushroom dish (though that was probably a Death Cap, not this one).\n\nThe trick to loving Caesar's Mushroom is telling it apart from its toxic cousin, the Fly Agaric (Amanita muscaria). Both have orange-to-red caps and both emerge from a white egg-like volva. But flip them over and the difference is obvious: Caesar's has brilliant yellow gills and a yellow stem, while the Fly Agaric has white gills and a white stem. It's one of those rare cases where the \"safe\" one is actually flashier than the dangerous one.\n\nToday, Caesar's Mushroom is still a culinary treasure across southern Europe, North Africa, and parts of Asia. In Italy, it's eaten raw in salads when young, sliced paper-thin with olive oil and Parmesan. In Turkey and Iran, it's a prized forage find. You'll spot it pushing up through oak and chestnut leaf litter in late summer, often emerging as a perfect white egg that cracks open to reveal that unmistakable golden-orange cap.",
  identification: {
    cap: "6–20 cm across. Starts enclosed in a thick white egg (universal veil), then expands to convex and finally flat. Bright orange to orange-red, smooth and slightly sticky when wet. No warts or patches on the surface — this is a key distinction from Fly Agaric. The margin often has faint striations (grooves).",
    gills: "Bright golden yellow — this is the single most important identification feature. Free from the stem, closely spaced, and broad. No other large orange Amanita has yellow gills like this.",
    stem: "8–15 cm tall, sturdy, yellow to golden-yellow (not white!). Has a large, floppy, skirt-like yellow ring partway up. The base sits in a large, sack-like white volva — the remnant of the egg it hatched from. Always dig carefully to see the volva.",
    sporePrint: "White to pale yellow.",
    odor: "Pleasant, mild, slightly nutty. Nothing off-putting.",
  },
  habitat:
    "Mycorrhizal with oaks, chestnuts, and sometimes pines and beeches. Loves warm, well-drained, calcareous soils. Typically found in Mediterranean-type woodlands, often on south-facing slopes in leaf litter. Thrives in warm summers after good rain.",
  season:
    "Summer through early autumn. Peak fruiting is July–September in southern Europe. Needs warm soil temperatures — rarely appears before midsummer.",
  range:
    "Native to southern Europe (especially Italy, Spain, France, Portugal, Greece, Turkey), North Africa, and parts of Asia (Iran, China). Also found in scattered locations in Central Europe where summers are warm enough. Not native to the Americas, but the closely related Amanita jacksonii fills the same niche in eastern North America.",
  lookAlikes: [
    {
      name: "Fly Agaric (Amanita muscaria)",
      slug: "amanita-muscaria",
      image: "lookalike-muscaria.jpg",
      distinction:
        "This is the critical confusion. Both have orange-red caps and emerge from a white egg. The dead giveaway: Fly Agaric has WHITE gills and a WHITE stem, while Caesar's has YELLOW gills and a YELLOW stem. Fly Agaric also usually has white wart-like spots on the cap (though rain can wash them off). Fly Agaric is toxic.",
      externalUrl:
        "https://www.inaturalist.org/taxa/48715-Amanita-muscaria",
      externalSource: "iNaturalist",
    },
    {
      name: "American Caesar's (Amanita jacksonii)",
      image: "lookalike-jacksonii.jpg",
      distinction:
        "The North American counterpart. Very similar in appearance with an orange-red cap and yellow gills. Generally considered edible, but the cap tends to be deeper red and more striated at the margin. Found in eastern North America, not in Europe. If you're in the Americas, this is likely what you have.",
      externalUrl: "https://en.wikipedia.org/wiki/Amanita_jacksonii",
      externalSource: "Wikipedia",
    },
    {
      name: "Death Cap (Amanita phalloides)",
      image: "lookalike-phalloides.jpg",
      distinction:
        "The egg stage of Caesar's Mushroom can be confused with the egg stage of the Death Cap — both emerge from a white universal veil. Never eat an Amanita egg unless you can clearly see yellow gills inside when you slice it open. Death Cap eggs reveal white-green gills. This confusion has killed people.",
      externalUrl:
        "https://www.mushroomexpert.com/amanita_phalloides.html",
      externalSource: "MushroomExpert",
    },
  ],
  edibility: "edible",
  edibilityNote:
    "One of the finest edible mushrooms in the world, prized since Roman antiquity. Excellent raw in salads when young, or sauteed, grilled, or dried. However, positive identification is absolutely critical — confusion with Fly Agaric (toxic) or Death Cap (deadly) at the egg stage can be fatal. Only eat this mushroom if you are 100% certain of the identification, with yellow gills confirmed.",
  gbifKey: 5240269,
  stories: [
    {
      title: "Emperor Claudius and the Mushroom Murder",
      text: "In 54 AD, Emperor Claudius died after eating a dish of mushrooms — widely believed to have been poisoned by his wife Agrippina. Ancient sources suggest she slipped a Death Cap into his favorite Caesar's Mushroom dish. Nero, who succeeded him, later joked that mushrooms were 'the food of the gods' since they'd made Claudius a god.",
      location: "Rome, Italy",
      source: "Suetonius, 'The Twelve Caesars'",
      sourceUrl: "https://en.wikipedia.org/wiki/Claudius#Death",
    },
    {
      title: "Italian Grandmothers Still Know the Spots",
      text: "In Calabria and Basilicata, families guard their Caesar's Mushroom foraging spots like state secrets. A 2018 Reddit thread in r/mycology featured an Italian user whose 80-year-old grandmother had been collecting 'ovoli' from the same oak grove for 60+ years, returning each August with baskets of perfect specimens.",
      location: "Calabria, Italy",
      source: "r/mycology",
      sourceUrl: "https://www.reddit.com/r/mycology/",
    },
    {
      title: "A Close Call in Catalonia",
      text: "In 2015, a forager near Girona collected what he thought were Caesar's Mushrooms at the egg stage. His wife noticed the gills were white, not yellow, when she cut one open in the kitchen — they were Fly Agarics. The local mycological society later used the incident in a safety presentation.",
      location: "Girona, Catalonia, Spain",
      source: "Societat Catalana de Micologia",
    },
    {
      title: "The Most Expensive Mushroom at a Tuscan Market",
      text: "At the Mercato Centrale in Florence, fresh Caesar's Mushrooms (ovoli) regularly sell for 40-60 euros per kilo in peak season — more expensive than porcini. Vendors display them still in their egg stage, sliced in half to show off the golden gills inside as proof of identity.",
      location: "Florence, Italy",
      source: "Mercato Centrale Firenze",
      sourceUrl: "https://www.mercatocentrale.com/",
    },
    {
      title: "Turkish Villagers' Ancient Tradition",
      text: "In the Bolu province of Turkey, villagers have foraged 'kral mantari' (king mushroom) for centuries. A 2020 ethnomycological study documented that local knowledge of distinguishing Caesar's Mushroom from Fly Agaric was passed down verbally across at least five generations, with the yellow-gills test being the universal rule.",
      location: "Bolu Province, Turkey",
      source: "Journal of Ethnobiology and Ethnomedicine",
    },
  ],
  seoQueries: [
    "caesar's mushroom identification",
    "amanita caesarea edible",
    "orange mushroom yellow gills",
    "caesar's mushroom vs fly agaric",
    "is caesar's mushroom safe to eat",
    "amanita caesarea look alikes",
    "ovoli mushroom",
    "roman emperor mushroom",
    "how to identify caesar's mushroom",
    "amanita caesarea where to find",
    "caesar's mushroom recipe",
    "orange amanita edible or poisonous",
    "mushroom emerging from white egg",
    "caesar's mushroom europe",
  ],
  funFacts: [
    "Ancient Romans cooked Caesar's Mushroom in special silver vessels called 'boletaria' that were reserved exclusively for this one species — no other food was worthy of touching them.",
    "Emperor Nero called mushrooms 'the food of the gods' — a dark joke, since his stepfather Claudius was allegedly poisoned with a mushroom dish and then posthumously declared a god by the Roman Senate.",
    "In Italy, Caesar's Mushroom is called 'ovolo buono' (good egg) because it emerges from the ground looking exactly like a white chicken egg before the orange cap bursts through.",
    "It's one of the only mushrooms commonly eaten completely raw — young specimens are sliced paper-thin and served as 'insalata di ovoli' with olive oil, lemon, and shaved Parmesan in Italian cuisine.",
    "Despite being one of the most prized edible mushrooms in Europe, Caesar's Mushroom cannot be commercially cultivated — it requires a living tree partner, so every single one must be wild-foraged.",
  ],
  images: [
    {
      filename: "01-mature-cap.jpg",
      alt: "Mature Caesar's Mushroom showing bright orange cap and yellow stem in German forest",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Kaiserling_(Amanita_caesarea)_20191014-RM-153953.jpg",
      author: "Reinhold Moeller",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "02-egg-stage.jpg",
      alt: "Caesar's Mushroom emerging from white egg-like universal veil showing early orange cap",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Amanita_caesarea_primordium_1.jpg",
      author: "Archenzo",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "03-georgia.jpg",
      alt: "Caesar's Mushroom growing in forest floor in Georgia showing full fruiting body",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Amanita_caesarea_Caesar%27s_Mushroom_%E1%83%9C%E1%83%98%E1%83%A7%E1%83%95%E1%83%98_(2).JPG",
      author: "Lazaregagnidze",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
  ],
  identificationImages: {
    cap: "cap-detail.jpg",
    gills: "gills-detail.jpg",
  },
};

export default species;
