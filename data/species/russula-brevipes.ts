import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "russula-brevipes",
  commonName: "Short-stemmed Russula",
  scientificName: "Russula brevipes",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Russulales",
    family: "Russulaceae",
    genus: "Russula",
  },
  summary:
    "A large, chalky-white mushroom with an absurdly short stem and a peppery bite that'll make you regret tasting it raw. On its own, Russula brevipes is basically inedible — but let the parasitic fungus Hypomyces lactifluorum colonize it, and it transforms into one of the most sought-after wild mushrooms in North America: the Lobster Mushroom.",
  description:
    "Russula brevipes is one of those mushrooms that's far more famous for what happens to it than for what it actually is. On its own merits, it's a big, clunky, white mushroom with the charisma of a dinner plate and a taste that hits your tongue like black pepper mixed with disappointment. It fruits abundantly across North American forests — under conifers, oaks, and mixed hardwoods — often half-buried in duff and leaf litter so that all you see is a dirty white dome barely poking above the ground.\n\nThe cap starts convex, then flattens, then develops a central depression that deepens with age until the whole thing looks like a crude funnel. The gills are white to cream, closely spaced, and run slightly down the extremely short stem (brevipes literally means 'short foot' in Latin). The flesh is firm, dense, and white throughout, with no color change when cut. The spore print is white to pale cream.\n\nBut here's where it gets interesting. Russula brevipes is the primary host for Hypomyces lactifluorum, a parasitic ascomycete that completely engulfs the mushroom in a bright orange-red coating, distorts its shape, eliminates the gills, and — crucially — transforms the flavor from acrid and unpleasant to something nutty, mild, and genuinely delicious. The resulting 'Lobster Mushroom' is a staple of Pacific Northwest cuisine and commands premium prices at farmers' markets. So while nobody goes out looking for Russula brevipes to eat, plenty of people go out looking for it because they're hoping Hypomyces got there first.",
  identification: {
    cap: "8–30 cm across, sometimes even larger. Convex when young, soon flattening and developing a central depression that deepens into a broad funnel shape with age. Surface dry, dull white to pale buff, often stained brown or yellowish from soil and debris. The margin is typically inrolled when young.",
    gills:
      "White to pale cream, closely spaced (crowded), slightly decurrent (running down the stem). Brittle — they snap cleanly when pressed, a hallmark of the Russula genus. No milk produced when broken (distinguishing it from Lactarius species).",
    stem: "2–6 cm tall and 2–5 cm thick — notably short and stout relative to the cap size ('brevipes' = short foot). White, solid, firm, sometimes tapering slightly toward the base. Surface dry and smooth.",
    sporePrint: "White to pale cream.",
    odor: "Mild to slightly fishy when old. Not distinctive in fresh specimens.",
  },
  habitat:
    "Mycorrhizal with a wide range of trees including Douglas fir, spruce, pine, hemlock, oak, and other hardwoods. Fruits on the ground in coniferous and mixed forests, often partially buried in leaf litter, duff, or moss — sometimes barely visible above the surface. Commonly found in well-drained forest soils.",
  season:
    "Summer through late autumn, typically July through November depending on region. Peak fruiting in the Pacific Northwest is August–October. In eastern North America, September–November is typical.",
  range:
    "Widespread across North America, from coast to coast. Especially common in the Pacific Northwest (British Columbia, Washington, Oregon), the Rocky Mountain states, the Great Lakes region, and throughout the Appalachians. Also reported from Central America and parts of East Asia.",
  lookAlikes: [
    {
      name: "Peppery Milkcap (Lactarius piperatus)",
      image: "lookalike-piperatus.jpg",
      distinction:
        "Very similar in size, shape, and white coloration, and also has an acrid/peppery taste. The critical difference: break a gill or cut the flesh of Lactarius piperatus and it will exude copious white latex (milk). Russula brevipes produces no milk whatsoever. This is the single most reliable way to tell them apart in the field.",
      externalUrl:
        "https://www.inaturalist.org/taxa/351321-Lactifluus-piperatus",
      externalSource: "iNaturalist",
    },
    {
      name: "Russula delica",
      image: "lookalike-delica.jpg",
      distinction:
        "Extremely similar white Russula, essentially the European counterpart to R. brevipes. Distinguished primarily by geographic range (R. delica is European, R. brevipes is North American) and subtle microscopic spore differences. If you're in Europe finding a large white funnel-shaped Russula, it's more likely R. delica.",
      externalUrl: "https://en.wikipedia.org/wiki/Russula_delica",
      externalSource: "Wikipedia",
    },
    {
      name: "Green-spored Parasol (Chlorophyllum molybdites)",
      slug: "chlorophyllum-molybdites",
      image: "lookalike-molybdites.jpg",
      distinction:
        "Both are large whitish mushrooms, but the similarities end there. Chlorophyllum molybdites has a scaly cap, a prominent ring on the stem, free gills that turn green with age, a green spore print, and grows in lawns and grassy areas — never in forests. It's also one of the most common causes of mushroom poisoning in North America.",
      externalUrl:
        "https://www.inaturalist.org/taxa/117308-Chlorophyllum-molybdites",
      externalSource: "iNaturalist",
    },
  ],
  edibility: "inedible",
  edibilityNote:
    "Too acrid and peppery to eat on its own — the raw flesh produces a burning sensation on the tongue that cooking does not fully eliminate. However, when parasitized by Hypomyces lactifluorum, the resulting 'Lobster Mushroom' is considered a choice edible with a mild, nutty, seafood-like flavor and firm texture. The parasite essentially neutralizes the host's unpleasant chemistry.",
  gbifKey: 7240188,
  stories: [
    {
      title: "The Mushroom That Becomes a Lobster",
      text: "The Lobster Mushroom — Hypomyces lactifluorum parasitizing Russula brevipes — has become one of the Pacific Northwest's most iconic wild foods. Chefs like Jack Czarnecki at the Joel Palmer House in Dayton, Oregon, helped popularize it in fine dining during the 1990s, treating the orange-red transformed mushroom as a seafood substitute in bisques and risottos. The irony that one of the region's most prized mushrooms is technically a parasitized, otherwise-inedible Russula delights mycologists to no end.",
      location: "Dayton, Oregon, USA",
      source: "Joel Palmer House Restaurant",
    },
    {
      title: "Hidden in Plain Sight",
      text: "Experienced foragers know that Russula brevipes often fruits almost entirely underground, with only a slight bump or crack in the duff revealing its location. In 2018, a foraging guide in British Columbia posted a viral Instagram video showing how to spot the telltale 'mushroom bumps' — slight rises in the forest floor that, when brushed aside, revealed massive white caps. The post spawned a mini-trend of 'bump hunting' among Pacific Northwest mushroom enthusiasts.",
      location: "British Columbia, Canada",
      source: "Instagram foraging community",
    },
    {
      title: "The Aztec Connection",
      text: "Ethnomycological research has documented that indigenous communities in central Mexico have long recognized and consumed Lobster Mushrooms (Russula brevipes parasitized by Hypomyces). In Oaxacan markets, they're sold as 'trompa de puerco' (pig's snout) and have been part of local cuisine for centuries, long before the Pacific Northwest food scene discovered them.",
      location: "Oaxaca, Mexico",
      source: "Economic Botany journal",
    },
    {
      title: "A Parasitic Takeover, Frame by Frame",
      text: "In 2020, time-lapse photographer Stephen Axford captured a Hypomyces lactifluorum slowly engulfing a Russula brevipes over the course of two weeks in a controlled setup. The resulting video — showing the white mushroom gradually being overtaken by bright orange — went viral on YouTube with over 2 million views and was featured in a BBC documentary on fungal parasitism.",
      location: "New South Wales, Australia (studio)",
      source: "Stephen Axford / Planet Fungi",
      sourceUrl: "https://www.planetfungi.com",
    },
    {
      title: "The Great Lobster Mushroom Shortage of 2021",
      text: "A hot, dry summer in 2021 dramatically reduced Russula brevipes fruiting across the Pacific Northwest, which in turn meant almost no Lobster Mushrooms at farmers' markets. Prices at Seattle's Pike Place Market reportedly hit $45/pound for the few that appeared. Foragers joked that climate change was 'taking the lobster off the menu.'",
      location: "Seattle, Washington, USA",
      source: "The Stranger (Seattle)",
    },
  ],
  seoQueries: [
    "russula brevipes identification",
    "short-stemmed russula mushroom",
    "large white mushroom in forest",
    "lobster mushroom host species",
    "russula brevipes vs lactarius piperatus",
    "white mushroom with short stem",
    "is russula brevipes edible",
    "russula brevipes lobster mushroom",
    "how to identify russula brevipes",
    "white funnel shaped mushroom",
    "russula brevipes habitat",
    "russula brevipes look alikes",
    "peppery white mushroom identification",
    "hypomyces lactifluorum host",
    "russula brevipes north america",
  ],
  funFacts: [
    "Russula brevipes is essentially famous for being someone else's lunch. The parasitic fungus Hypomyces lactifluorum transforms this acrid, inedible mushroom into the beloved Lobster Mushroom — meaning R. brevipes is arguably more valuable sick than healthy.",
    "The name 'brevipes' comes from Latin brevis (short) + pes (foot), referring to the comically stubby stem. On large specimens, the cap can be 30 cm wide while the stem is only 3 cm tall — giving it the proportions of a frisbee on a toilet paper roll.",
    "Russula brevipes often fruits almost entirely buried in forest duff, with only a slight bump in the leaf litter betraying its presence. Experienced foragers learn to spot these bumps and brush away the debris to reveal mushrooms the size of dinner plates hiding just below the surface.",
    "Unlike most mushrooms, Russula species have a unique cellular structure — their flesh is made of clusters of round cells (sphaerocysts) rather than elongated fibers. This is why Russula gills snap cleanly like chalk rather than tearing like string. It's also why the flesh is so crumbly.",
    "A single Russula brevipes mycelial network can partner with multiple tree species simultaneously, forming mycorrhizal connections with both conifers and hardwoods in the same forest. This flexibility is part of why it's one of the most common large mushrooms across North America.",
  ],
  images: [
    {
      filename: "01-classic.jpg",
      alt: "Large white Russula brevipes mushroom showing depressed funnel-shaped cap on forest floor",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Russula_brevipes_90557.jpg",
      author: "Dan Molter",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "02-habitat.jpg",
      alt: "Russula brevipes emerging from leaf litter in coniferous forest",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Russula_brevipes_75822.jpg",
      author: "Dan Molter",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "03-gills.jpg",
      alt: "Underside of Russula brevipes showing crowded white gills and short stem",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Russula_brevipes_228006.jpg",
      author: "Dan Molter",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "04-group.jpg",
      alt: "Multiple Russula brevipes specimens showing size variation and funnel-shaped caps",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Russula_brevipes_47474.jpg",
      author: "Dan Molter",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "05-lobster.jpg",
      alt: "Russula brevipes parasitized by Hypomyces lactifluorum showing bright orange Lobster Mushroom transformation",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Lobster_Mushroom_(Hypomyces_lactifluorum)_(30009907725).jpg",
      author: "Under the same moon...",
      license: "CC0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0",
    },
  ],
  identificationImages: {
    cap: "cap-detail.jpg",
    gills: "gills-detail.jpg",
    stem: "stem-detail.jpg",
  },
};

export default species;
