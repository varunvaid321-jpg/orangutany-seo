import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "lactarius-indigo",
  commonName: "Indigo Milk Cap",
  scientificName: "Lactarius indigo",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Russulales",
    family: "Russulaceae",
    genus: "Lactarius",
  },
  summary:
    "A mushroom that bleeds blue. Lactarius indigo is one of the most visually stunning fungi on the planet — entirely indigo-blue, from cap to gills to stem, and when you cut or break it, dark blue latex oozes from the flesh like some kind of alien life form. It's edible, delicious, and sold in rural Mexican markets alongside tomatoes and chili peppers.",
  description:
    "There are plenty of colorful mushrooms in the world, but very few commit to their color scheme as thoroughly as Lactarius indigo. Everything about this fungus is blue — a deep, saturated indigo that looks almost artificial against the brown leaf litter where it grows. The cap, the gills, the stem, and even the milk (latex) it exudes when damaged are all variations of blue, from silvery-blue to dark navy. As the mushroom ages, it fades to a grayish-blue with greenish tones, but young specimens look like they were dipped in ink.\n\nThe latex is the real showstopper. All Lactarius species produce a milky fluid when their flesh is broken, but in L. indigo, this milk is dark indigo blue. It's one of the most reliable identification features — break a gill and watch the blue drops appear. The color comes from azulene compounds, the same class of molecules that give chamomile oil its blue tint.\n\nIn central Mexico, Lactarius indigo has been collected and sold in local markets for centuries. It's known as 'añil' or 'hongo azul' and is typically grilled or sautéed. The flavor is mild and slightly peppery — pleasant but not remarkable. People eat it as much for the novelty of its color as for its taste. When cooked, the blue fades somewhat but doesn't disappear entirely, making for a genuinely unusual plate of food.\n\nThe species forms mycorrhizal partnerships with pines and oaks and is found across eastern North America, Central America, and parts of East Asia — a disjunct distribution pattern that fascinates biogeographers. The North American and Asian populations may represent distinct species that have been lumped together, but molecular work is still sorting this out.",
  identification: {
    cap: "5–15 cm across. Convex when young, becoming flat then slightly funnel-shaped with a depressed center. Indigo blue when fresh, fading to silvery-blue or grayish-blue with greenish tones as it ages. Surface is dry, sometimes with concentric zones of darker and lighter blue. Margin inrolled when young.",
    gills:
      "Attached to slightly decurrent. Close to crowded. Indigo blue, staining dark blue-green where damaged. Exude dark blue latex (milk) when broken — this is the key diagnostic feature.",
    stem: "3–8 cm tall, 1–2.5 cm thick. Cylindrical, sometimes tapering at the base. Same indigo blue as the cap, often with small pits or shallow depressions (scrobiculations). Solid when young, becoming hollow with age.",
    sporePrint: "Pale yellow to creamy yellow.",
    odor: "Mild, not distinctive.",
  },
  habitat:
    "Mycorrhizal with pines (especially loblolly pine, shortleaf pine) and oaks. Found in mixed pine-oak and pine forests, often on acidic, well-drained sandy soils. Grows singly or in small scattered groups on the ground among leaf litter and pine needles.",
  season:
    "Summer through early autumn, typically July through October. Appears after warm rains. Peak season is August–September across most of its North American range.",
  range:
    "Eastern North America from southern Canada to Florida, west to Texas. Also found through Mexico and Central America (Guatemala, Costa Rica). Disjunct populations in East Asia (China, Japan). Absent from Europe.",
  lookAlikes: [
    {
      name: "Lactarius chelidonium",
      image: "lookalike-chelidonium.jpg",
      distinction:
        "Paler blue-gray cap, often with olive or brownish tones — lacks the deep saturated indigo of L. indigo. The critical difference is the latex: L. chelidonium bleeds yellowish to brownish milk, not blue. Found in similar pine forest habitats in eastern North America.",
      externalUrl:
        "https://www.mushroomexpert.com/lactarius_chelidonium.html",
      externalSource: "MushroomExpert",
    },
    {
      name: "Charcoal Burner (Russula cyanoxantha)",
      slug: "russula-cyanoxantha",
      image: "lookalike-cyanoxantha.jpg",
      distinction:
        "Can have bluish-purple cap colors that superficially resemble L. indigo, but Russula cyanoxantha produces NO latex when broken — the flesh is dry and crumbly. Also has flexible, greasy-feeling gills unlike any Lactarius. A good edible mushroom in its own right.",
      externalUrl:
        "https://en.wikipedia.org/wiki/Russula_cyanoxantha",
      externalSource: "Wikipedia",
    },
    {
      name: "Lactarius paradoxus",
      image: "lookalike-paradoxus.jpg",
      distinction:
        "Blue-silver cap similar to an aged L. indigo, but the latex is pinkish to reddish — not blue. Found in eastern North America under conifers. The pinkish milk is an immediate giveaway once you break the flesh.",
      externalUrl:
        "https://www.mushroomexpert.com/lactarius_paradoxus.html",
      externalSource: "MushroomExpert",
    },
  ],
  edibility: "edible",
  edibilityNote:
    "Edible and eaten in Mexico and Central America where it has a long culinary tradition. Mild, slightly peppery flavor. Best sautéed or grilled. The blue color fades somewhat during cooking but doesn't vanish entirely. Not widely eaten in North America outside of foraging communities, more because of unfamiliarity than any quality issue. No special preparation required.",
  gbifKey: 7240044,
  stories: [
    {
      title: "The Blue Mushroom of Oaxacan Markets",
      text: "In the markets of Oaxaca and Puebla, Lactarius indigo has been sold alongside other wild mushrooms for centuries. Indigenous Mixtec and Zapotec communities call it by various local names and consider it a reliable edible. Ethnomycologist Gastón Guzmán documented its sale in Mexican markets as far back as the 1970s, noting it was one of the most easily recognized species due to its unmistakable color.",
      location: "Oaxaca, Mexico",
      source: "Gastón Guzmán, The Genus Lactarius in Mexico",
    },
    {
      title: "One of the Most Illustrated Mushrooms in Field Guides",
      text: "Lactarius indigo's striking blue color has made it one of the most frequently illustrated mushrooms in North American field guides and nature photography collections. It regularly appears on the covers or in the opening plates of mushroom identification books, and is arguably the single most visually recognizable Lactarius species in the world. Honduras featured it on a postage stamp in 1995.",
      location: "North America",
      source: "Mycological literature",
    },
    {
      title: "The Biogeography Mystery",
      text: "How does the same species end up in the forests of North Carolina and the mountains of Yunnan, China, with nothing in between? The disjunct distribution of Lactarius indigo across eastern North America and East Asia mirrors patterns seen in many plant genera (magnolias, tulip trees) and is thought to reflect ancient connections via the Bering Land Bridge. Molecular studies suggest the populations diverged millions of years ago.",
      location: "Eastern North America and East Asia",
      source: "Mycologia journal",
    },
    {
      title: "Blue Latex Under the Microscope",
      text: "The blue color of the latex comes from azulene-derived sesquiterpene compounds — specifically stearoylvelutinal derivatives that are unique to this species. Researchers at the University of Tennessee characterized these pigments in the 1980s and found they are chemically related to compounds in chamomile essential oil, which is also blue due to azulenes.",
      location: "Knoxville, Tennessee, USA",
      source: "Journal of Natural Products",
    },
    {
      title: "A Forager's First Find",
      text: "Reddit's r/mycology regularly features excited first-time foragers posting photos of Lactarius indigo with captions like 'Is this real?!' The mushroom's surreal color makes it one of the most commonly posted species on mushroom identification forums. Experienced mycologists often say it's the species that gets people hooked on foraging — you see one, and you're a mushroom person for life.",
      location: "Online foraging communities",
      source: "r/mycology",
      sourceUrl: "https://www.reddit.com/r/mycology/",
    },
  ],
  seoQueries: [
    "indigo milk cap identification",
    "blue mushroom that bleeds blue",
    "lactarius indigo edible",
    "blue mushroom in the woods",
    "indigo milk cap look alikes",
    "where does lactarius indigo grow",
    "blue mushroom identification",
    "lactarius indigo taste",
    "indigo milky cap foraging",
    "blue latex mushroom",
    "can you eat blue mushrooms",
    "lactarius indigo range map",
    "indigo milk cap season",
    "blue mushroom north america",
    "lactarius indigo mexico markets",
  ],
  funFacts: [
    "Lactarius indigo is one of very few mushrooms where every part of the fruiting body — cap, gills, stem, and latex — is the same striking color. The deep indigo blue comes from azulene-based sesquiterpene compounds found nowhere else in the fungal kingdom.",
    "In rural Mexican markets, Lactarius indigo is sold fresh alongside tomatoes, chilis, and herbs. It has been part of indigenous cuisine for centuries, long before European mycologists gave it a scientific name in 1822.",
    "The blue color doesn't fully disappear when cooked. Sautéed Lactarius indigo retains a subtle blue-gray tint, making it one of the only mushrooms that can add a naturally blue element to a dish without food coloring.",
    "Lactarius indigo's range spans two continents — eastern North America and East Asia — with no populations in between. This disjunct distribution mirrors ancient plant connections and suggests the species dates back millions of years.",
    "Despite its alien appearance, Lactarius indigo is completely edible with no toxic look-alikes that share its combination of blue color AND blue latex. If it's blue and bleeds blue, it's almost certainly this species.",
  ],
  images: [
    {
      filename: "01-classic.jpg",
      alt: "Close-up of Lactarius indigo mushroom cap showing deep indigo blue color and torn flesh",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Lactarius_indigo_48568_edit.jpg",
      author: "Dan Molter (shroomydan)",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "02-full-specimen.jpg",
      alt: "Lactarius indigo mushroom showing indigo blue cap and gills from above",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Lactarius_indigo_48568.jpg",
      author: "Dan Molter (shroomydan)",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "03-costa-rica.jpg",
      alt: "Indigo Milk Cap mushroom photographed in Santa Rosa National Park, Costa Rica",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Indigo_Milk_Cap_(Lactarius_indigo)_(52381960064).jpg",
      author: "Bernard Dupont",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    },
    {
      filename: "04-habitat.jpg",
      alt: "Lactarius indigo growing among leaf litter in Costa Rican forest",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Indigo_Milk_Cap_(Lactarius_indigo)_(52381890978).jpg",
      author: "Bernard Dupont",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    },
    {
      filename: "05-guatemala.jpg",
      alt: "Lactarius indigo specimen from Guatemala showing blue cap and gills",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Lactarius_indigo,_Guatemala.jpg",
      author: "Acrinaldi",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
  ],
};

export default species;
