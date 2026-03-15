import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "macrolepiota-procera",
  commonName: "Parasol Mushroom",
  scientificName: "Macrolepiota procera",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Agaricaceae",
    genus: "Macrolepiota",
  },
  summary:
    "Meet the absolute unit of the mushroom world. The Parasol Mushroom can tower over 30 cm tall with a cap the size of a dinner plate — and in Central Europe, people literally bread and fry that cap like a schnitzel. It's one of the best wild edibles out there, and once you've seen a mature one, you won't mistake it for anything else.",
  description:
    "If you've ever walked through a European meadow in autumn and spotted what looks like a drumstick standing in the grass, congratulations — you've found a Parasol. Young specimens look exactly like a drum mallet: a round, closed cap perched on top of a tall, slender stem. As they mature, that cap opens out into a massive parasol shape (hence the name), sometimes reaching 30-40 cm across. They're genuinely impressive mushrooms, the kind that make you stop and take a photo.\n\nIn Czech Republic, Poland, Hungary, and across Central Europe, the Parasol is a culinary institution. People pick the big flat caps, dip them in egg and breadcrumbs, and pan-fry them like a Wiener Schnitzel. Seriously — \"mushroom schnitzel\" is a thing, and it's delicious. The stem is too tough and fibrous to eat, so foragers snap it off and use just the cap. Some folks dry the stems and grind them into a powder for seasoning soups and stocks.\n\nThe Parasol is a saprotrophic mushroom, meaning it feeds on decaying organic matter rather than forming partnerships with trees. You'll find it in grasslands, meadow edges, forest clearings, parks, and even gardens. It tends to pop up in the same spots year after year, so once you find a patch, mark it on your mental map. Just be absolutely sure you can tell it apart from its toxic look-alikes — especially the green-spored Chlorophyllum molybdites in North America, which sends more people to the hospital than any other mushroom on the continent.",
  identification: {
    cap: "10–30 cm across (sometimes even larger). Starts as a closed, egg-shaped drum mallet on the stem. Opens flat with age, becoming parasol-shaped with a distinct raised bump (umbo) in the center. Surface is pale cream to tan, covered with large brown scales that get sparser toward the edges. The scales are shaggy and distinctive — like someone stuck bits of brown paper to it.",
    gills: "White to cream, densely packed, free from the stem. They don't change color when bruised — this is important for distinguishing from toxic look-alikes. A white spore print confirms the ID.",
    stem: "15–30 cm tall, slender (1–2 cm thick), with a prominent snakeskin-like pattern of brown zigzag bands. The base has a noticeable bulb. A large, thick, movable double ring sits partway up — you can slide it up and down the stem like a bracelet. This sliding ring is a key identification feature.",
    sporePrint: "White to very pale cream.",
    odor: "Pleasant, mildly nutty. Nothing alarming.",
  },
  habitat:
    "Grasslands, meadow edges, forest clearings, parks, gardens, road verges, and pastures. Saprotrophic — breaks down dead organic matter in soil rather than partnering with tree roots. Prefers rich, well-drained soil. Often appears in fairy rings or loose groups. Returns to the same spots year after year.",
  season:
    "Late summer through autumn. Peak season is August through October in Europe. In warmer climates, can appear as early as July or as late as November.",
  range:
    "Widespread across Europe, where it's one of the most commonly foraged mushrooms. Also found across temperate Asia, North Africa, and parts of North and South America. Most abundant in Central and Western Europe — particularly Germany, Poland, Czech Republic, Hungary, France, and the UK.",
  lookAlikes: [
    {
      name: "Shaggy Parasol (Chlorophyllum rhacodes)",
      image: "lookalike-rhacodes.jpg",
      distinction:
        "Smaller overall and the flesh stains reddish-orange when cut or bruised — the true Parasol does not change color. The stem lacks the distinctive snakeskin pattern and is smoother. Edible for most people but causes GI upset in some. Always do the cut test: if the flesh turns red, it's a Shaggy, not a Parasol.",
      externalUrl:
        "https://www.inaturalist.org/taxa/56535-Chlorophyllum-rhacodes",
      externalSource: "iNaturalist",
    },
    {
      name: "Green-Spored Parasol (Chlorophyllum molybdites)",
      image: "lookalike-molybdites.jpg",
      distinction:
        "The most commonly eaten poisonous mushroom in North America. Looks very similar when young but the spore print is distinctly green (not white). Mature gills develop a greenish tinge. Causes severe vomiting and diarrhea. If you're in North America, ALWAYS take a spore print before eating any parasol-type mushroom.",
      externalUrl:
        "https://en.wikipedia.org/wiki/Chlorophyllum_molybdites",
      externalSource: "Wikipedia",
    },
    {
      name: "Deadly Dapperling (Lepiota brunneoincarnata)",
      image: "lookalike-brunneoincarnata.jpg",
      distinction:
        "Much smaller (cap under 7 cm) — this is a critical difference. Contains deadly amatoxins, the same poisons found in Death Caps. The cap has pinkish-brown scales on a paler background. No movable ring on the stem. Rule of thumb: never eat a small parasol-shaped mushroom. If the cap is under 10 cm, leave it alone.",
      externalUrl:
        "https://en.wikipedia.org/wiki/Lepiota_brunneoincarnata",
      externalSource: "Wikipedia",
    },
  ],
  edibility: "edible",
  edibilityNote:
    "One of Europe's most prized wild edibles. The large caps are traditionally breaded and fried like a schnitzel — a beloved tradition in Central Europe. Only eat mature, fully opened caps that you've positively identified. Discard the tough, fibrous stems (or dry and grind them for seasoning). Always cook thoroughly. Never eat small specimens that could be confused with toxic Lepiota species.",
  gbifKey: 8914748,
  stories: [
    {
      title: "Parasol Schnitzel: A Czech National Tradition",
      text: "In Czech Republic, 'houby na smazenku' (fried mushroom) almost always means a Parasol cap dipped in egg, coated in breadcrumbs, and fried in butter. Czech foraging forums treat the first Parasol haul of autumn like a national event, with photos of schnitzel-sized caps proudly displayed.",
      location: "Czech Republic",
      source: "Czech mycological tradition",
    },
    {
      title: "Hospital Trip After Lawn Mushroom Dinner",
      text: "A family in Houston, Texas picked what they thought were Parasol Mushrooms from their yard in 2018 and ate them for dinner. They turned out to be Chlorophyllum molybdites (green-spored parasol). All four family members spent the night in the ER with severe GI distress. Everyone recovered, but it was a rough 12 hours.",
      location: "Houston, Texas, USA",
      source: "Texas Poison Center Network",
    },
    {
      title: "A Fairy Ring of Giants in Sussex",
      text: "A mycological survey in the South Downs, UK, documented a fairy ring of 23 Parasol Mushrooms in a single meadow, with the largest cap measuring 38 cm across. The ring had been returning to the same spot for at least 15 years according to the landowner.",
      location: "South Downs, England",
      source: "British Mycological Society",
    },
    {
      title: "Polish Grandmother's Foraging Rule",
      text: "A popular post on r/foraging described a Polish grandmother's ironclad rule: 'If the ring slides, you eat. If it doesn't slide, you leave it.' She was referring to the movable ring on the Parasol's stem — one of the easiest field identification features.",
      location: "Poland",
      source: "r/foraging",
      sourceUrl: "https://www.reddit.com/r/foraging/",
    },
    {
      title: "First Described by Scopoli in 1772",
      text: "Giovanni Antonio Scopoli, the 'Linnaeus of the Austrian Empire,' first formally described this species in 1772. He named it Agaricus procerus — 'procerus' meaning tall or slender in Latin. It was later moved to Macrolepiota ('large Lepiota') by Rolf Singer in 1948.",
      location: "Carniola (modern-day Slovenia)",
      source: "Scopoli, Flora Carniolica (1772)",
    },
  ],
  seoQueries: [
    "parasol mushroom identification",
    "how to identify parasol mushroom",
    "parasol mushroom edible",
    "parasol mushroom schnitzel recipe",
    "macrolepiota procera look alikes",
    "parasol mushroom vs shaggy parasol",
    "big tall mushroom in my yard",
    "mushroom with snakeskin stem",
    "parasol mushroom spore print",
    "is parasol mushroom safe to eat",
    "mushroom with sliding ring on stem",
    "parasol mushroom vs green spored lepiota",
    "giant mushroom in meadow identification",
    "parasol mushroom foraging UK",
    "breaded parasol mushroom cap",
  ],
  funFacts: [
    "The Parasol's stem ring is movable — you can literally slide it up and down like a bracelet. This is one of the quickest field ID features and almost no other mushroom has it.",
    "In Central Europe, people bread and fry the massive caps like a Wiener Schnitzel. A single large Parasol cap can cover an entire dinner plate.",
    "The name 'procera' means 'tall' in Latin — fitting for a mushroom that can stand over 30 cm, making it one of the tallest common mushrooms in Europe.",
    "Parasol Mushrooms are saprotrophic, meaning they eat dead plant matter instead of partnering with tree roots. This is why you find them in open grasslands and meadows, not just in forests.",
    "The snakeskin pattern on the stem is caused by the outer layer cracking as the mushroom rapidly elongates during growth — it can shoot up to full height in just a few days.",
  ],
  images: [
    {
      filename: "01-field-habitat.jpg",
      alt: "Parasol Mushroom standing tall in a grassy meadow in Edertal, Germany, showing the characteristic open parasol cap shape",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:2014.10.03.-01-Edertal_Kleinern--Gemeiner_Riesenschirmling.jpg",
      author: "Andreas Eichler",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "03-stem-ring.jpg",
      alt: "Close-up of Parasol Mushroom stem showing the movable ring and distinctive brown snakeskin pattern",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:2014.10.03.-03-Edertal_Kleinern--Gemeiner_Riesenschirmling.jpg",
      author: "Andreas Eichler",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "04-forest-floor.jpg",
      alt: "Parasol Mushroom growing on a forest floor in Czech Republic, showing the closed drumstick shape of a younger specimen",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:2_-_Macrolepiota_procera_(V_lese).JPG",
      author: "Fredy.00",
      license: "Public domain",
      licenseUrl: "",
    },
    {
      filename: "05-nature-reserve.jpg",
      alt: "Parasol Mushroom in a nature reserve near Bottingen, Germany, showing the fully expanded cap with brown scales",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:B%C3%B6ttingen-1997.jpg",
      author: "DKrieger",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
  ],
};

export default species;
