import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "amanita-rubescens",
  commonName: "The Blusher",
  scientificName: "Amanita rubescens",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Amanitaceae",
    genus: "Amanita",
  },
  summary:
    "The mushroom that blushes when you hurt it. Amanita rubescens — The Blusher — is the only common Amanita you'd want to eat, but it comes with a serious catch: eat it raw and you'll be poisoned. Cook it thoroughly and it's a legitimate delicacy. This is a mushroom that demands respect, knowledge, and a frying pan.",
  description:
    "The Blusher occupies one of the most uncomfortable positions in the mushroom world: it's a genuinely good edible species that belongs to the most feared genus on the planet. Amanita includes the Death Cap, the Destroying Angel, and the Panther Cap — mushrooms that kill people every year. So when someone tells you they're going to eat an Amanita, your first reaction should be alarm. Your second, if they know what they're doing, should be envy.\n\nThe key to identifying The Blusher is right there in the name. Cut the flesh, scratch the surface, or check any area where insects have been nibbling, and you'll see the tissue turn distinctly pink to reddish-brown. This blushing reaction is the single most important diagnostic feature. The Panther Cap — the most dangerous look-alike — does NOT blush. Its flesh stays clean white when damaged. If you learn one thing about this mushroom, learn that.\n\nBut identification is only half the battle. Raw Blusher contains hemolysins — toxins that destroy red blood cells. Eating it uncooked or undercooked will make you seriously ill. Thorough cooking completely destroys these toxins, rendering the mushroom safe and quite tasty. This is not a mushroom for casual foragers, beginners, or anyone who likes their mushrooms al dente. It needs to be cooked completely through, every time, no exceptions.",
  identification: {
    cap: "6–15 cm across, initially hemispherical, expanding to convex then flat with age. Color is pinkish-brown to reddish-brown, sometimes grayish-brown. Surface is covered with scattered pinkish-gray to dirty white warts (remnants of the universal veil) that can wash off in rain. Flesh is white but stains pink to reddish when cut or damaged — the defining characteristic.",
    gills:
      "Free (not attached to stem), white, crowded. Stain pinkish-red where bruised or damaged. Spore-producing surface — check for the blushing reaction here too.",
    stem: "8–15 cm tall, 2–3 cm thick, white to pinkish, with a prominent skirt-like ring (annulus) in the upper half. Base is swollen (bulbous) with a gutter-like volva. The stem flesh also blushes pink when scratched or cut. Often shows pinkish-brown staining from insect damage.",
    sporePrint: "White.",
    odor: "Mild, not distinctive — faintly mushroomy. Not a helpful identification feature for this species.",
  },
  habitat:
    "Mycorrhizal with both deciduous and coniferous trees — oak, beech, birch, pine, spruce. Found in mixed and deciduous woodlands, forest edges, parks, and gardens. Common in nutrient-rich soils. One of the most widespread Amanita species, tolerant of a range of soil types and forest conditions.",
  season:
    "June through November, with peak fruiting in July through September. One of the earlier Amanita species to appear, often showing up in summer before the autumn flush of other species.",
  range:
    "Widespread across Europe, from Scandinavia to the Mediterranean. Found throughout temperate North America, though North American populations may represent a species complex. Also reported from North Africa, parts of Asia, and introduced in some Southern Hemisphere locations through forestry plantations.",
  lookAlikes: [
    {
      name: "Panther Cap (Amanita pantherina)",
      slug: "amanita-pantherina",
      image: "lookalike-pantherina.jpg",
      distinction:
        "The most dangerous confusion species. Cap is brown with PURE WHITE warts (Blusher has pinkish-gray warts). Critically, the flesh does NOT blush pink when damaged — it stays white. The volva at the stem base forms a distinct rim or collar, while the Blusher's volva is more gutter-like. Contains ibotenic acid and muscimol — causes serious poisoning with neurological symptoms.",
      externalUrl:
        "https://www.inaturalist.org/taxa/48418-Amanita-pantherina",
      externalSource: "iNaturalist",
    },
    {
      name: "Death Cap (Amanita phalloides)",
      slug: "amanita-phalloides",
      image: "lookalike-phalloides.jpg",
      distinction:
        "The world's deadliest mushroom. Cap is greenish-yellow to olive, sometimes pale, with no warts (smooth, not warty). White gills, white spore print. Has a large sac-like volva at the base. Flesh does NOT blush. Contains amatoxins — a single cap can kill an adult. Any Amanita without blushing flesh should be treated with extreme caution.",
      externalUrl:
        "https://www.inaturalist.org/taxa/52135-Amanita-phalloides",
      externalSource: "iNaturalist",
    },
    {
      name: "Jewelled Amanita (Amanita gemmata)",
      slug: "amanita-gemmata",
      image: "lookalike-gemmata.jpg",
      distinction:
        "Cap is bright yellow to pale yellow-orange, covered with white warts. Smaller overall than The Blusher. Flesh does NOT blush pink — stays white. No reddish staining on stem or gills. Toxicity is debated; some sources list it as poisonous, others as edible with caution. Regardless, the yellow cap color and lack of blushing easily separate it from A. rubescens.",
      externalUrl:
        "https://www.inaturalist.org/taxa/350046-Amanita-junquillea",
      externalSource: "iNaturalist",
    },
  ],
  edibility: "edible-with-caution",
  edibilityNote:
    "Edible ONLY when thoroughly cooked. Raw or undercooked Blusher contains hemolysins — proteins that destroy red blood cells, causing hemolytic anemia, gastrointestinal distress, and potentially serious illness. These toxins are completely destroyed by sustained heat (cooking for at least 15–20 minutes). Well-cooked Blusher has a pleasant, mild flavor and firm texture, popular in parts of Europe. This is NOT a mushroom for beginners. Confident identification is essential — confusion with the Panther Cap or Death Cap can be fatal. Never eat any Amanita unless you are absolutely certain of your identification AND you cook it thoroughly.",
  gbifKey: 7496350,
  stories: [
    {
      title: "A Staple of Eastern European Tables",
      text: "In Poland and the Czech Republic, The Blusher (known as 'golak' and 'masák' respectively) has been a common table mushroom for centuries. Rural families traditionally collected Blushers alongside porcini and chanterelles, always cooking them well before eating. Older foraging guides from the region contain detailed illustrations of the blushing reaction, emphasizing the difference from the Panther Cap.",
      location: "Poland and Czech Republic",
      source: "European ethnomycology literature",
    },
    {
      title: "The Hemolysin Discovery",
      text: "In the early 20th century, German mycologist Julius Schäffer documented that raw Blusher extracts could lyse (burst) red blood cells in laboratory conditions. This was one of the first demonstrations that a mushroom considered 'edible' could contain potent toxins requiring heat denaturation. The discovery helped establish the principle that edibility depends not just on species identity but on preparation method.",
      location: "Germany",
      source: "Julius Schäffer, mycological research papers",
    },
    {
      title: "Insect Damage Reveals the Blush",
      text: "Naturalists have long noted that Blushers found in the wild almost always show reddish-pink staining from insect larvae tunneling through the flesh. Experienced foragers in the New Forest in England use this insect-caused blushing as a quick field confirmation — if the worm holes are pink-rimmed, it's a Blusher. If they're clean white, walk away.",
      location: "New Forest, Hampshire, England",
      source: "British Mycological Society field guides",
      sourceUrl: "https://www.britmycolsoc.org.uk",
    },
    {
      title: "Mistaken Identity at a Mushroom Festival",
      text: "At a 2017 mushroom identification event in Fontainebleau forest near Paris, mycologists documented that The Blusher was the most commonly misidentified species brought in by amateur foragers. Nearly 40% of Blusher specimens had been initially labeled as Panther Cap by the collectors, and several Panther Caps had been wrongly identified as Blushers — a potentially lethal mistake that reinforced the importance of checking for the blushing reaction.",
      location: "Fontainebleau, France",
      source: "Société Mycologique de France",
    },
    {
      title: "A Teaching Tool for Mycology Students",
      text: "The Blusher is widely used in university mycology courses as a teaching example of why mushroom identification requires multiple diagnostic features. At the University of Edinburgh, instructor Patrick Harding famously used side-by-side demonstrations of Blusher and Panther Cap cross-sections — one turning pink, one staying white — to drive home the point that a single observation can be the difference between a meal and a medical emergency.",
      location: "University of Edinburgh, Scotland",
      source: "Patrick Harding, mycology education",
    },
  ],
  seoQueries: [
    "blusher mushroom identification",
    "amanita rubescens edible",
    "is the blusher mushroom safe to eat",
    "blusher vs panther cap",
    "how to identify blusher mushroom",
    "amanita rubescens vs amanita pantherina",
    "blusher mushroom cooking",
    "mushroom that turns pink when cut",
    "edible amanita mushrooms",
    "blusher mushroom look alikes",
    "amanita rubescens poisonous raw",
    "blusher mushroom hemolysins",
    "pinkish brown mushroom with warts",
    "blusher mushroom foraging UK",
    "how to cook blusher mushroom safely",
  ],
  funFacts: [
    "The Blusher is one of the only Amanita species widely considered safe to eat — but only after thorough cooking. Its hemolysins are heat-labile proteins that denature completely at cooking temperatures, making the cooked mushroom perfectly safe.",
    "The blushing reaction is caused by oxidation of specific compounds in the flesh when exposed to air through damage. The same chemistry that makes it turn pink is what makes it identifiable — and separates it from its deadly cousins.",
    "In parts of Germany and Eastern Europe, The Blusher is so commonly collected that it appears in traditional recipes alongside porcini and chanterelles. Some Czech cookbooks list it as one of the 'standard ten' wild mushrooms every forager should know.",
    "Insect larvae seem to love The Blusher — it's one of the most heavily parasitized wild mushrooms. Ironically, the resulting pink-rimmed tunnels are one of the easiest ways to confirm the identification in the field.",
    "Despite being in the same genus as the Death Cap and Destroying Angel, The Blusher contains none of the amatoxins or phallotoxins that make those species lethal. Its toxins (hemolysins) are an entirely different class of compound and are completely neutralized by cooking.",
  ],
  images: [
    {
      filename: "01-classic.jpg",
      alt: "Amanita rubescens (The Blusher) showing pinkish-brown cap with scattered warts",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Amanita_rubescens_G3.jpg",
      author: "George Chernilevsky",
      license: "Public domain",
      licenseUrl: "",
    },
    {
      filename: "02-habitat.jpg",
      alt: "The Blusher mushroom growing in deciduous woodland leaf litter",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Amanita_rubescens_2013_G2.jpg",
      author: "George Chernilevsky",
      license: "Public domain",
      licenseUrl: "",
    },
    {
      filename: "03-young.jpg",
      alt: "Young Amanita rubescens showing hemispherical cap with pinkish warts",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Amanita_rubescens_02.jpg",
      author: "Holger Krisp",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
    {
      filename: "04-cap-detail.jpg",
      alt: "Close-up of Blusher cap showing pinkish-gray veil remnants and blushing flesh",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Amanita_rubescens_(Pers.)_Pers_514046.jpg",
      author: "Holger Krisp",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
    {
      filename: "05-gills.jpg",
      alt: "Underside of Amanita rubescens showing white free gills with pinkish staining",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Amanita_rubescens_G7.jpg",
      author: "George Chernilevsky",
      license: "Public domain",
      licenseUrl: "",
    },
  ],
  identificationImages: {
    cap: "cap-detail.jpg",
    gills: "gills-detail.jpg",
    stem: "stem-detail.jpg",
  },
};

export default species;
