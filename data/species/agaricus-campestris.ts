import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "agaricus-campestris",
  commonName: "Field Mushroom",
  scientificName: "Agaricus campestris",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Agaricaceae",
    genus: "Agaricus",
  },
  summary:
    "The original wild mushroom — the one your grandparents picked from horse pastures before supermarkets existed. Agaricus campestris is the ancestor of the store-bought button mushroom, and it tastes better than anything wrapped in plastic. Just don't confuse a young one with a Death Cap, or your foraging trip becomes a hospital trip.",
  description:
    "Before there were grocery stores, there were fields. And in those fields — especially ones where horses and cows had been doing their business — grew the Field Mushroom. This is the species that taught Europe what a 'mushroom' was. When someone in 1850 said 'mushroom,' they meant this exact thing: a white cap, pink gills, growing in a pasture after rain. Your great-grandmother knew it by sight. She didn't need a field guide.\n\nThe cultivated button mushroom (Agaricus bisporus) is basically the Field Mushroom's domesticated cousin, bred for shelf life and uniformity. But wild Field Mushrooms have a richer, nuttier flavor that commercial ones can't touch. They pop up overnight after warm rain in late summer and autumn, often in fairy rings across meadows. Old-timers say the best patches are in fields where horses grazed the year before — the mycelium loves that nutrient-rich soil.\n\nHere's the scary part: when young, before the cap opens and the gills are still hidden, Field Mushrooms look disturbingly similar to young Death Caps (Amanita phalloides). Both are white, button-shaped, and grow in grassy areas near trees. The difference? Field Mushroom gills start bright pink and darken to chocolate brown. Death Cap gills stay white. If the gills are white, walk away. This single identification rule has saved lives.",
  identification: {
    cap: "3–10 cm across. Starts as a smooth white dome, opens to a broad convex shape, sometimes flattening with age. Surface is dry, white to cream, occasionally developing fine brownish scales in the center. Feels silky when young.",
    gills: "The key ID feature. Start bright pink in young specimens, darken to chocolate brown, then near-black as spores mature. Closely spaced, free (not attached to the stem). NEVER white — if they're white, you're looking at something else, possibly deadly.",
    stem: "3–10 cm tall, white, sturdy but not bulky. Has a thin, fragile ring partway up that often disappears with age. No volva (cup) at the base — this is critical. Death Caps have a volva; Field Mushrooms don't.",
    sporePrint: "Dark chocolate brown — almost black. Drop it on white paper overnight.",
    odor: "Pleasant, mushroomy. That classic 'fresh mushroom' smell you know from the grocery store.",
  },
  habitat:
    "Grasslands, pastures, meadows, lawns, and parks — anywhere with rich soil and short grass. Loves fields grazed by horses and cattle. A saprobe that feeds on decaying organic matter in the soil, not on tree roots. Avoids dense forests.",
  season:
    "Late summer through autumn. Peak fruiting after warm rain in August–October in the Northern Hemisphere. Can appear as early as June in mild years.",
  range:
    "Found across Europe, North America, Asia, Australia, New Zealand, and parts of South America and Africa. One of the most widely distributed edible mushrooms on Earth. Especially common in the British Isles, Western Europe, and temperate North America.",
  lookAlikes: [
    {
      name: "Death Cap (Amanita phalloides)",
      slug: "amanita-phalloides",
      image: "lookalike-phalloides.jpg",
      distinction:
        "The critical confusion. Young Death Caps look almost identical to young Field Mushrooms — both are white and button-shaped. Key differences: Death Cap gills are WHITE and stay white. Field Mushroom gills are PINK turning brown. Death Cap has a sac-like volva (cup) at the stem base — dig it up to check. Death Cap often grows near oaks and other trees, not in open pastures. Getting this wrong is fatal.",
      externalUrl: "https://www.inaturalist.org/taxa/52135-Amanita-phalloides",
      externalSource: "iNaturalist",
    },
    {
      name: "Yellow-staining Mushroom (Agaricus xanthodermus)",
      slug: "agaricus-xanthodermus",
      image: "lookalike-xanthodermus.jpg",
      distinction:
        "Looks very similar — same white cap, same habitat. The giveaway: cut the base of the stem or scratch the cap surface. If it stains bright chrome yellow and smells like ink or chemicals (phenol), it's Agaricus xanthodermus. Causes nasty gastrointestinal distress. Field Mushrooms don't stain yellow and smell pleasantly mushroomy.",
      externalUrl: "https://en.wikipedia.org/wiki/Agaricus_xanthodermus",
      externalSource: "Wikipedia",
    },
    {
      name: "White Dapperling (Leucoagaricus leucothites)",
      image: "lookalike-leucothites.jpg",
      distinction:
        "Grows in similar grassy habitats and looks like a white Field Mushroom at first glance. Key difference: its gills start WHITE (not pink) and slowly turn pinkish, then brown. The spore print is white to pale cream, not dark brown. Some people eat it, but it's been confused with deadly species and is best avoided.",
      externalUrl:
        "https://www.mushroomexpert.com/leucoagaricus_leucothites.html",
      externalSource: "MushroomExpert",
    },
  ],
  edibility: "edible",
  edibilityNote:
    "An excellent edible mushroom with a rich, nutty flavor that surpasses its cultivated relative, the button mushroom. Best cooked fresh — sauteed in butter is the classic preparation. However, never eat a Field Mushroom unless you have positively confirmed pink-to-brown gills and the absence of a volva at the stem base. The deadly Amanita phalloides look-alike kills dozens of foragers worldwide each year.",
  gbifKey: 5243458,
  stories: [
    {
      title: "A Deadly Mix-Up in Canberra",
      text: "In 2012, a Chinese-born chef in Canberra, Australia collected white mushrooms from a lawn near oak trees, believing them to be a species he'd gathered back home. They were Death Caps. He and three guests were hospitalized — two required emergency liver transplants. The mushrooms looked just like young Field Mushrooms from above.",
      location: "Canberra, Australia",
      source: "ABC News Australia",
      sourceUrl:
        "https://www.abc.net.au/news/2012-01-06/poisonous-mushrooms-send-four-to-hospital/3761462",
    },
    {
      title: "Grandma's Pasture Tradition in Yorkshire",
      text: "A user on r/foraging described their grandmother's decades-long tradition of collecting Field Mushrooms from a horse pasture near Harrogate every September. She'd fry them in butter for breakfast, never using a guidebook — just the pink gills test her own grandmother taught her.",
      location: "Harrogate, Yorkshire, England",
      source: "r/foraging",
      sourceUrl: "https://www.reddit.com/r/foraging/",
    },
    {
      title: "Fairy Ring After the August Rain",
      text: "A forager in County Cork posted photos of a perfect fairy ring of 30+ Field Mushrooms that appeared overnight in a cattle pasture after heavy August rain. They collected a full basket and noted the classic pink gills and chocolate-brown spore print, confirmed by the local mycological society.",
      location: "County Cork, Ireland",
      source: "Irish Mycological Society",
    },
    {
      title: "Victorian Street Sellers of London",
      text: "In the 1800s, Field Mushrooms were one of the most commonly sold wild foods on London streets. Henry Mayhew documented mushroom sellers in 'London Labour and the London Poor' (1851), noting they gathered them from fields around Epping and sold them by the pottle (a small basket) at Covent Garden.",
      location: "London, England",
      source: "Mayhew, 'London Labour and the London Poor' (1851)",
    },
    {
      title: "Immigrant Forager Saves the Day in California",
      text: "A mycologist at the Bay Area Mycological Society recounted how an elderly Italian immigrant in San Jose correctly identified that mushrooms a neighbor planned to cook were young Death Caps, not Field Mushrooms. He flipped one over, pointed at the white gills, and said 'No pink — no eat.' The neighbor had picked them under a coast live oak.",
      location: "San Jose, California, USA",
      source: "Bay Area Mycological Society",
      sourceUrl: "https://www.bayareamushrooms.org/",
    },
  ],
  seoQueries: [
    "field mushroom identification",
    "agaricus campestris edible",
    "meadow mushroom vs death cap",
    "white mushroom in my lawn",
    "field mushroom pink gills",
    "how to tell field mushroom from death cap",
    "wild mushroom in horse pasture",
    "agaricus campestris look alikes",
    "are field mushrooms safe to eat",
    "mushroom with pink gills in grass",
    "field mushroom vs button mushroom",
    "white mushroom growing in field after rain",
    "agaricus campestris spore print",
    "meadow mushroom identification uk",
  ],
  funFacts: [
    "The Field Mushroom is the wild ancestor of the button mushroom, cremini, and portobello — they're all cultivated varieties of its close relative Agaricus bisporus, which was basically domesticated from wild Agaricus species.",
    "Field Mushrooms can appear literally overnight. The mycelium sits underground for months, then when warm rain hits, fruiting bodies can push through the soil and fully mature in under 24 hours.",
    "The pink-to-brown gill color change is caused by spore maturation — young spores are pale, and as billions of them develop, the gills darken to chocolate brown. It's basically the mushroom aging in fast-forward.",
    "Fairy rings of Field Mushrooms can be centuries old. The mycelium grows outward from a central point at a rate of about 15–30 cm per year, creating ever-expanding circles that can reach 10+ meters across.",
    "In World War II, the British government encouraged citizens to forage for Field Mushrooms as a free protein source during rationing. Official pamphlets emphasized the pink gills test to avoid deadly mistakes.",
  ],
  images: [
    {
      filename: "05-field.jpg",
      alt: "Field Mushroom (Agaricus campestris) showing cap, stem, and pink gills in grass",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:2010-08-07_Agaricus_campestris_cropped.jpg",
      author: "Andreas Kunze",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "01-field.jpg",
      alt: "Field Mushroom (Agaricus campestris) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Agaricus_campestris_IMG_20200912_170142.jpg",
      author: "Accuruss",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "03-gills.jpg",
      alt: "Field Mushroom underside showing gill structure",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:2010-08-07_Agaricus_campestris_gills.jpg",
      author: "Ak ccm",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "04-group.jpg",
      alt: "Group of Field Mushroom mushrooms in the wild",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:2012-07-11_Agaricus_campestris_group_236668.jpg",
      author: "This image was created by user Christine Braaten (wintersbefore) at Mushroom Observer, a source for mycological images.Y",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
  ],
};

export default species;
