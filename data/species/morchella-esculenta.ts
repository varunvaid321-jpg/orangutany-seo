import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "morchella-esculenta",
  commonName: "Common Morel",
  scientificName: "Morchella esculenta",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Ascomycota",
    class: "Pezizomycetes",
    order: "Pezizales",
    family: "Morchellaceae",
    genus: "Morchella",
  },
  summary:
    "The morel is the mushroom that turns normal people into obsessive treasure hunters every spring — but eat one raw and you'll spend the night in the bathroom. Cook it properly, though, and you've got one of the most prized ingredients in fine dining.",
  description:
    "Every April, something strange happens across North America and Europe: otherwise rational adults start sneaking into forests at dawn, guarding GPS coordinates like state secrets, and lying to their neighbors about where they've been. The common morel does this to people. It's one of the most prized wild mushrooms on the planet, with a honeycomb-like cap that looks like something designed by an architect on a fever dream. French cuisine has been obsessed with them for centuries — morilles a la creme is a classic — and dried morels sell for $20-50 per ounce at specialty stores.\n\nMorels have a fascinating relationship with fire. They famously fruit in huge numbers the spring after a forest fire, which has led to an entire subculture of 'burn morel' hunters who chase wildfires across the Pacific Northwest. The science behind it isn't fully understood, but the theory is that fire stress triggers the underground mycelium to fruit aggressively before it dies. Some of the biggest commercial harvests in history have come from burned forests in British Columbia and Idaho.\n\nHere's the catch: you absolutely must cook morels before eating them. Raw morels contain hydrazine-related compounds that can make you seriously ill. Even cooked, a small percentage of people have adverse reactions, especially when paired with alcohol. But properly sauteed in butter with a pinch of salt? Few things in the culinary world come close.",
  identification: {
    cap: "3-8 cm tall, 3-6 cm wide. Honeycomb-like surface covered in irregular pits and ridges. Ranges from pale cream to yellowish-brown to dark tan. The cap is completely hollow inside — slice one in half lengthwise to confirm. The pits are rounded and the ridges are lighter in color.",
    gills: "No gills at all — morels have a pitted, sponge-like cap surface instead. The exterior is covered in ridges and pits (the pits are where the spores are produced). This is one of the easiest ways to tell a true morel from most other mushrooms.",
    stem: "3-7 cm tall, white to pale cream, hollow all the way through. The stem attaches directly to the bottom edge of the cap — the cap and stem form one continuous hollow chamber. Slightly granular or mealy texture on the surface.",
    sporePrint: "Cream to yellowish — though most foragers identify morels by sight rather than spore print.",
    odor: "Pleasant, earthy, slightly nutty. Fresh morels smell like the forest floor on a warm spring day.",
  },
  habitat:
    "Extremely variable. Found in old orchards, river bottoms, tulip poplar stands, dying elm trees, ash forests, and recently burned areas. Loves disturbed ground — old logging roads, flood plains, and the edges of paths. Mycorrhizal with various hardwoods and conifers, but also appears as a saprobe on dead wood.",
  season: "March through May in most of North America, depending on latitude and elevation. Peak is April in the Midwest and mid-Atlantic. Follows a northward wave as temperatures warm — southern states get them first.",
  range:
    "Throughout temperate North America, Europe, and Asia. Especially abundant in the Midwest US (Michigan, Indiana, Ohio, Missouri), Pacific Northwest after burns, and across Central Europe. Also found in Turkey, China, and the Himalayas.",
  lookAlikes: [
    {
      name: "Early Morel (Verpa bohemica)",
      slug: "verpa-bohemica",
      image: "lookalike-verpa-bohemica.jpg",
      distinction:
        "The cap hangs free from the stem like a thimble sitting on a finger — attached only at the very top. True morels have the cap fused to the stem along its full length. Cut one in half: Verpa has a cottony, stuffed stem, while morels are completely hollow. Can cause GI upset in some people.",
      externalUrl: "https://www.inaturalist.org/taxa/54026-Verpa-bohemica",
      externalSource: "iNaturalist",
    },
    {
      name: "False Morel (Gyromitra esculenta)",
      slug: "gyromitra-esculenta",
      image: "lookalike-gyromitra-esculenta.jpg",
      distinction:
        "Potentially deadly. The cap is brain-like and lobed — wrinkled and folded rather than pitted with a honeycomb pattern. Reddish-brown to dark brown. The interior is chambered, not cleanly hollow. Contains gyromitrin, which metabolizes into monomethylhydrazine (rocket fuel). Despite the species name 'esculenta' (edible), this mushroom kills people.",
      externalUrl: "https://en.wikipedia.org/wiki/Gyromitra_esculenta",
      externalSource: "Wikipedia",
    },
    {
      name: "Black Morel (Morchella elata)",
      slug: "morchella-elata",
      image: "lookalike-morchella-elata.jpg",
      distinction:
        "Actually a true morel and perfectly edible — just a different species. Darker ridges (brown to nearly black) with more vertically oriented pits. Tends to fruit slightly earlier and in more coniferous habitats. Some foragers prefer the flavor. The main reason to distinguish them is for your own records.",
      externalUrl:
        "https://www.mushroomexpert.com/morchella_elata.html",
      externalSource: "MushroomExpert",
    },
  ],
  edibility: "edible-with-caution",
  edibilityNote:
    "Delicious and highly prized — but must be thoroughly cooked before eating. Raw morels contain hydrazine-related toxins that cause vomiting, cramps, and diarrhea. Even cooked, some people react poorly, especially when consuming alcohol alongside. Start with a small amount your first time. Never eat morels raw, and always cook them for at least 5 minutes at high heat.",
  gbifKey: 2594602,
  stories: [
    {
      title: "The $400 Burn Morel Haul in Idaho",
      text: "After the 2015 Clearwater fires in Idaho, a forager posted on r/mycology about pulling 30 pounds of burn morels in a single weekend. At market prices, that's roughly $400 worth of mushrooms from two days of hiking through a charred forest.",
      location: "Clearwater National Forest, Idaho, USA",
      source: "r/mycology",
      sourceUrl: "https://www.reddit.com/r/mycology/",
    },
    {
      title: "Dog Hospitalized After Eating Raw Morels",
      text: "A forager in Michigan left a bag of fresh morels on the kitchen counter in 2021. Their golden retriever ate about a dozen raw ones and developed severe vomiting within hours. The vet confirmed morel toxicity — the dog recovered after IV fluids and overnight observation.",
      location: "Traverse City, Michigan, USA",
      source: "Michigan Mycological Society forum",
    },
    {
      title: "The Great Morel Festival in Muscoda",
      text: "Since 1981, the tiny town of Muscoda, Wisconsin has hosted the annual Morel Mushroom Festival, drawing thousands of hunters who compete for the biggest and most morels found. The record haul was over 200 morels in a single day.",
      location: "Muscoda, Wisconsin, USA",
      source: "Muscoda Morel Festival",
      sourceUrl: "https://www.muscodamorel.com/",
    },
    {
      title: "French Monks and the Medieval Morel Trade",
      text: "Cistercian monks in 14th-century Burgundy were among the first to systematically harvest and dry morels for trade. They discovered that drying intensified the flavor, and dried morels became a valuable commodity along medieval trade routes — sometimes bartered alongside spices.",
      location: "Burgundy, France",
      source: "Mushrooms: A Natural and Cultural History (Millman, 2019)",
    },
    {
      title: "The Forager Who Got Lost Chasing Morels",
      text: "In 2019, search and rescue in the Ozarks found a 68-year-old man who'd wandered off-trail following a line of morels deeper and deeper into the woods. He was found the next morning, dehydrated but clutching a full bag. He told rescuers the mushrooms were 'worth it.'",
      location: "Ozark National Forest, Arkansas, USA",
      source: "Arkansas Democrat-Gazette",
    },
  ],
  seoQueries: [
    "morel mushroom identification",
    "where to find morels",
    "morel vs false morel",
    "when do morels come up",
    "morel mushroom season",
    "how to cook morels",
    "are morels safe to eat raw",
    "morel hunting tips",
    "burn morels after forest fire",
    "common morel look alikes",
    "morchella esculenta identification",
    "honeycomb mushroom in my yard",
    "morel mushroom price per pound",
    "where do morels grow map",
    "morel mushroom near dead elm",
  ],
  funFacts: [
    "Morels are one of the few mushrooms that reliably fruit after forest fires. Professional foragers track wildfire maps and return to burned areas the following spring, sometimes harvesting hundreds of pounds.",
    "Despite decades of effort, nobody has successfully cultivated morels at commercial scale. A few companies claim partial success in China, but the vast majority of morels sold worldwide are still wild-harvested.",
    "The honeycomb pattern on a morel cap isn't decoration — each pit is lined with microscopic sacs (asci) that shoot spores into the air. You can sometimes see a faint 'smoke' of spores if you tap a mature morel in sunlight.",
    "In some Midwest towns, morel hunting is so competitive that foragers refuse to reveal their spots even to family members. Secret patches are passed down in wills.",
    "Morels have been found growing in surprising urban locations — cracks in old sidewalks, abandoned lots, and even wood chip beds outside shopping malls. They seem to love disturbed, gravelly soil.",
  ],
  images: [
    {
      filename: "01-solo.jpg",
      alt: "Single common morel mushroom showing classic honeycomb cap pattern in grass",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Morchella_esculenta_solo.jpg",
      author: "regenpfeifer",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "02-cluster.jpg",
      alt: "Group of common morels growing together showing yellowish-brown caps",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Morchella_esculenta_8.jpg",
      author: "rudolphous",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    {
      filename: "03-forest-floor.jpg",
      alt: "Morel mushroom emerging from leaf litter on the forest floor",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Morchella_esculenta_36771717.jpg",
      author: "iNaturalist user",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    {
      filename: "04-rotunda.jpg",
      alt: "Round morel variety showing pale cream honeycomb cap in Italian woodland",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Morchella_esculenta_var._rotunda_02.jpg",
      author: "Syrio",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "05-closeup.jpg",
      alt: "Close-up of morel mushroom showing detailed pit and ridge texture",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Morchella_esculenta_70269680.jpg",
      author: "iNaturalist user",
      license: "CC0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0",
    },
  ],
  identificationImages: {
    cap: "cap-detail.jpg",
    stem: "stem-detail.jpg",
  },
};

export default species;
