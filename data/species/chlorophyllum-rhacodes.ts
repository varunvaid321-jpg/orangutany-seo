import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "chlorophyllum-rhacodes",
  commonName: "Shaggy Parasol",
  scientificName: "Chlorophyllum rhacodes",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Agaricaceae",
    genus: "Chlorophyllum",
  },
  summary:
    "The Shaggy Parasol is a big, dramatic mushroom with a scaly cap that can span a dinner plate — but fair warning: it causes nasty stomach problems in some people even when cooked, and it looks dangerously similar to the toxic Green-spored Parasol, so this is not one for beginners.",
  description:
    "Picture a mushroom that starts life as a smooth, egg-shaped button, then unfurls into a towering parasol covered in shaggy brown scales. That's Chlorophyllum rhacodes, and it's genuinely impressive — mature specimens can stand 30 cm tall with caps wider than your hand. Cut into the flesh and it immediately blushes a vivid saffron-orange, which is both beautiful and your best field ID trick. That bruising reaction is so reliable that foragers call it the \"reddening parasol\" in several languages.\n\nHere's the catch, though. Some people eat Shaggy Parasols for years with no issues — sauteed in butter, they're actually quite good. But roughly 1 in 10 people get hit with serious gastrointestinal distress: cramping, nausea, the works. Scientists still aren't entirely sure why some stomachs rebel and others don't. To make matters worse, young Shaggy Parasols are nearly identical to Chlorophyllum molybdites (the Green-spored Parasol), which is responsible for more mushroom poisonings in North America than any other species. The only reliable way to tell them apart? A spore print — white for the Shaggy, green for the toxic imposter.\n\nDespite the risks, this mushroom has a loyal following among experienced foragers in Europe, where C. molybdites doesn't occur. It pops up in parks, gardens, woodland edges, and compost heaps — anywhere rich soil meets shade. The name \"rhacodes\" comes from the Greek rhakos, meaning ragged cloth, which perfectly describes that magnificently tattered cap.",
  identification: {
    cap: "10-20 cm across, sometimes up to 30 cm. Starts as a smooth, pale brown egg shape, then expands into a broad parasol. The surface cracks into large, coarse, upturned brown scales on a pale cream background — giving it that signature shaggy look. Flesh bruises vivid saffron-orange when cut or damaged.",
    gills: "White to cream, free (not attached to the stem), densely packed. They bruise orange-brown when touched. In older specimens they may develop a slight pinkish tint.",
    stem: "10-15 cm tall, up to 2 cm thick. Smooth, white to pale brown, with a bulbous base. Has a thick, movable double ring (annulus) that slides up and down the stem. Flesh inside the stem turns orange-red when sliced — a key identification feature.",
    sporePrint: "White to cream. This is critical — a green spore print means you have the toxic Chlorophyllum molybdites instead.",
    odor: "Pleasant, mildly mushroomy. Nothing alarming.",
  },
  habitat:
    "Loves rich, disturbed soil — gardens, parks, woodland edges, compost heaps, along hedgerows, and in mulched flower beds. Often found in shady spots near conifers or deciduous trees. Saprotrophic — it breaks down dead organic matter rather than forming tree partnerships.",
  season:
    "Late summer through late autumn. Peak fruiting is August through November in the Northern Hemisphere. Can appear earlier in warmer climates.",
  range:
    "Widespread across Europe, where it's most commonly foraged. Also found across temperate North America, parts of Asia, southern Africa, Australia, and New Zealand. In North America, particularly common in the Pacific Northwest and northeastern states.",
  lookAlikes: [
    {
      name: "Green-spored Parasol (Chlorophyllum molybdites)",
      image: "lookalike-molybdites.jpg",
      distinction:
        "The most dangerous look-alike and the #1 cause of mushroom poisonings in North America. Nearly identical when young. Key difference: its spore print is greenish (vs. white for the Shaggy Parasol), and mature gills develop a green tint. Does NOT bruise orange-red when cut. Always do a spore print.",
      externalUrl:
        "https://www.inaturalist.org/taxa/117308-Chlorophyllum-molybdites",
      externalSource: "iNaturalist",
    },
    {
      name: "Parasol Mushroom (Macrolepiota procera)",
      image: "lookalike-procera.jpg",
      distinction:
        "A prized edible that's taller and more slender. Its stem has a distinctive snakeskin pattern of brown zigzag bands — the Shaggy Parasol's stem is smooth. The Parasol's flesh does NOT bruise orange when cut. Cap scales are finer and more neatly arranged.",
      externalUrl:
        "https://en.wikipedia.org/wiki/Macrolepiota_procera",
      externalSource: "Wikipedia",
    },
    {
      name: "Yellow-staining Mushroom (Agaricus xanthodermus)",
      image: "lookalike-xanthodermus.jpg",
      distinction:
        "Toxic Agaricus species that causes GI upset. Superficially similar white-capped mushroom found in the same habitats. Bruises bright chrome yellow at the cap base (not orange-red). Has a strong unpleasant inky or chemical smell, especially when the base is scratched. Gills start pink, turn brown.",
      externalUrl:
        "https://www.mushroomexpert.com/agaricus_xanthodermus.html",
      externalSource: "MushroomExpert",
    },
  ],
  edibility: "edible-with-caution",
  edibilityNote:
    "Edible when thoroughly cooked, and considered good eating by many experienced foragers — but causes significant gastrointestinal distress (nausea, vomiting, cramps) in a minority of people, even when properly prepared. Never eat raw. Start with a small portion your first time. The bigger risk is misidentification: in North America, young specimens are nearly identical to the toxic Chlorophyllum molybdites. Always take a spore print (must be white, not green) before eating.",
  gbifKey: 5955395,
  stories: [
    {
      title: "Mass Poisoning at a Dinner Party in Melbourne",
      text: "In 2010, a group of six friends in suburban Melbourne cooked up a batch of mushrooms they'd picked from a park, believing them to be Shaggy Parasols. All six were hospitalized with severe vomiting and diarrhea — the mushrooms turned out to be Chlorophyllum molybdites, which thrives in Australian lawns.",
      location: "Melbourne, Australia",
      source: "Victorian Poisons Information Centre",
    },
    {
      title: "A Forager's Stomach Rebellion in Surrey",
      text: "A seasoned UK forager posted on a mycology forum in 2018 that after eating Shaggy Parasols without issue for 15 years, she suddenly had a severe GI reaction. Her doctor confirmed no other cause — some people simply develop sensitivity over time.",
      location: "Surrey, England",
      source: "Wild Food UK Forum",
      sourceUrl: "https://www.wildfooduk.com/",
    },
    {
      title: "The Spore Print That Saved a Family",
      text: "A Reddit user in r/mycology (2021) described finding beautiful parasol-type mushrooms in their North Carolina yard. They almost cooked them but decided to do a spore print first — it came back green. They'd narrowly avoided eating Chlorophyllum molybdites.",
      location: "North Carolina, USA",
      source: "r/mycology",
      sourceUrl: "https://www.reddit.com/r/mycology/",
    },
    {
      title: "Victorian Mycologist Names the Species",
      text: "Italian mycologist Carlo Vittadini first described this species in 1835. The name 'rhacodes' comes from the Greek 'rhakos' meaning ragged cloth — a nod to the magnificently tattered cap scales that make this mushroom so recognizable.",
      location: "Milan, Italy",
      source: "Vittadini, 'Descrizione dei funghi mangerecci' (1835)",
    },
    {
      title: "Dog Poisoned by Lawn Parasols in Texas",
      text: "A Texas family's golden retriever ate mushrooms from their backyard in 2020. The vet initially suspected Shaggy Parasols, but a mycologist identified them as C. molybdites from photos. The dog recovered after 48 hours of IV fluids — a reminder that the look-alike grows abundantly in warm-climate lawns.",
      location: "Houston, Texas, USA",
      source: "ASPCA Animal Poison Control",
    },
  ],
  seoQueries: [
    "shaggy parasol mushroom identification",
    "can you eat shaggy parasol",
    "shaggy parasol vs green spored parasol",
    "chlorophyllum rhacodes edible",
    "mushroom with shaggy brown scales",
    "parasol mushroom that bruises orange",
    "shaggy parasol poisonous",
    "shaggy parasol spore print",
    "large parasol mushroom in garden",
    "shaggy parasol look alikes",
    "chlorophyllum rhacodes vs molybdites",
    "mushroom turns orange when cut",
    "reddening parasol mushroom",
    "shaggy parasol mushroom recipe",
  ],
  funFacts: [
    "The Shaggy Parasol's flesh turns saffron-orange within seconds of being cut — this dramatic color change is caused by oxidation of compounds in the flesh and is one of the most reliable field identification features.",
    "Despite being in the same genus as the toxic Green-spored Parasol (C. molybdites), the Shaggy Parasol was only reclassified into Chlorophyllum in 2003 — before that, scientists placed it in Macrolepiota and Lepiota based on appearance alone.",
    "The movable ring on the Shaggy Parasol's stem can slide up and down like a sleeve — a feature it shares with the true Parasol mushroom and one that delights first-time finders.",
    "In parts of Eastern Europe, Shaggy Parasols are breaded and fried like schnitzel — the wide, flat caps are the perfect shape and size for it.",
    "A single mature Shaggy Parasol can release billions of spores. If you place the cap on dark paper overnight, you'll see a beautiful white spore print radiating outward like a starburst.",
  ],
  images: [
    {
      filename: "01-growth-stages.jpg",
      alt: "Three Shaggy Parasol mushrooms showing different growth stages from button to mature parasol in Dutch woodland",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:3_stadia_of_growing_of_Macrolepiota_rachodes_(GB=_Shaggy_Parasol,_D=_Gemeine_Safranschirmling,_F=_L%C3%A9piote_d%C3%A9guenill%C3%A9e,_NL=_Knolparasolzwam)_at_Schaarsbergen_Hoge_Erf_-_panoramio.jpg",
      author: "Henk Monster",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
    {
      filename: "02-field-scotland.jpg",
      alt: "Shaggy Parasol mushroom growing in grass at Church Wood in East Lothian, Scotland",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Chlorophyllum_rhacodes_-_Flickr_-_S._rae.jpg",
      author: "S. Rae",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0",
    },
    {
      filename: "03-shaggy-cap.jpg",
      alt: "Close-up of Shaggy Parasol showing distinctive brown shaggy scales on cap surface",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Chlorophyllum_rhacodes_-_Shaggy_Parasol_(51524909573).jpg",
      author: "Lukas Large",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    },
    {
      filename: "04-specimen.jpg",
      alt: "Mature Shaggy Parasol mushroom showing full parasol shape with upturned brown scales",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Chlorophyllum_rhacodes_4.jpg",
      author: "JovanaKoturov",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "05-autumn.jpg",
      alt: "Shaggy Parasol mushroom in autumn leaf litter showing shaggy cap texture and pale stem",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Chlorophyllum_rhacodes_11.2023.jpg",
      author: "DidierFy",
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
