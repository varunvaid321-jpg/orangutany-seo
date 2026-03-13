import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "stropharia-rugosoannulata",
  commonName: "Wine Cap / King Stropharia",
  scientificName: "Stropharia rugosoannulata",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Strophariaceae",
    genus: "Stropharia",
  },
  summary:
    "A large, robust, burgundy-capped mushroom that is one of the easiest wild mushrooms to cultivate. Widely grown by permaculture enthusiasts and market gardeners in wood chip and straw beds. Excellent edible with a mild, potato-like flavor and a meaty texture that has earned it comparisons to portobello.",
  description:
    "If you have ever wanted to grow your own gourmet mushrooms without a lab, a pressure cooker, or any specialized equipment, Stropharia rugosoannulata is where you start. The Wine Cap, also called King Stropharia or Garden Giant, is the ultimate beginner's mushroom. Scatter spawn on a bed of fresh wood chips or straw in a shady corner of your garden, keep it moist, and wait. Within a few months, large burgundy-capped mushrooms will emerge from the bed, often in impressive quantities.\n\nThe species has become a darling of the permaculture movement for good reason. It does not just produce food; it improves soil. The mycelium breaks down woody debris and straw into rich humus, sequesters nutrients, and creates habitat for beneficial soil organisms. Paul Stamets has championed the Wine Cap as a keystone species for garden ecology, recommending it as a mulch-layer inoculant that simultaneously builds soil and produces dinner.\n\nIn the wild, S. rugosoannulata is found in gardens, compost heaps, wood chip piles, straw bales, and disturbed areas rich in lignin-containing debris. It is not a common wild find in undisturbed forests. The species appears to have originated in Europe and has been spread worldwide through cultivation and the movement of agricultural materials.\n\nThe mushroom itself is a beauty. Young caps are deep wine-red to burgundy, smooth and often slightly sticky. As they mature, the color fades to tan or buff, and the caps can reach 20 cm or more across. The stem is thick and sturdy, with a distinctive cogwheel-shaped ring (the \"rugosoannulata\" in the name means \"wrinkled ring\"). The gills start pale lilac-gray and darken to purple-black as the spores mature. The flavor is mild, nutty, and slightly earthy, with a firm texture that holds up well in stir-fries, soups, and grilling.",
  identification: {
    cap: "5-20 cm across (occasionally larger). Convex, expanding to broadly convex or flat. Deep wine-red to burgundy when young, fading to reddish-brown, tan, or straw-colored with age. Surface is smooth, slightly viscid when wet. Flesh is white, thick, and firm.",
    gills: "Attached (adnate) to slightly free. Pale lilac-gray when young, darkening to dark purple-gray and finally purple-black as spores mature. Crowded and broad.",
    stem: "6-15 cm tall, 1.5-3 cm thick. White, sturdy, solid when young (becoming hollow with age). Has a distinctive thick, double-edged ring with a grooved or cogwheel pattern on the upper surface. Base often has white rhizomorphs extending into the substrate.",
    sporePrint: "Dark purple-brown to purple-black.",
    odor: "Mild, pleasant, slightly earthy or potato-like.",
  },
  habitat:
    "Saprotrophic on wood chips, straw, composted garden debris, and other lignin-rich organic matter. Found in gardens, compost heaps, mulched beds, and agricultural settings. Prefers partially shaded, moist conditions. Widely cultivated in outdoor beds and permaculture gardens.",
  season:
    "Late spring through autumn, with peak fruiting in late spring (May-June) and again in early autumn (September-October) in temperate regions. Cultivation beds may produce flushes from April through November depending on climate and moisture.",
  range:
    "Originally European, now found worldwide due to cultivation and the spread of agricultural materials. Common across North America, Europe, Australia, and New Zealand. Most frequently encountered in cultivated settings rather than wild habitats.",
  lookAlikes: [
    {
      name: "Agaricus species (Field Mushrooms)",
      slug: "agaricus-campestris",
      distinction:
        "Some Agaricus species have similar cap shapes and dark spore prints. Distinguished by the chocolate-brown (not purple-black) spore print, pink to brown gills (not lilac-gray), and lack of the distinctive cogwheel ring. Agaricus species also tend to have a more distinctly mushroomy or anise-like odor.",
    },
    {
      name: "Brick Cap (Hypholoma lateritium)",
      slug: "hypholoma-lateritium",
      distinction:
        "Also reddish-capped and found on wood. Smaller (3-8 cm cap), grows in dense clusters on hardwood stumps. Has a mild to slightly bitter taste and lacks the thick cogwheel ring. Spore print is purple-brown. Generally considered edible but inferior.",
    },
    {
      name: "Stropharia aeruginosa (Verdigris Agaric)",
      distinction:
        "Same genus, similar shape and ring structure. Distinguished by its blue-green to verdigris-colored cap with slimy white scales. Not considered edible. The color is unmistakable.",
      externalUrl: "https://www.inaturalist.org/taxa/55583-Stropharia-aeruginosa",
      externalSource: "iNaturalist",
    },
  ],
  edibility: "edible",
  edibilityNote:
    "Excellent edible mushroom. Best when young, while the caps are still burgundy and firm. The flavor is mild, nutty, and slightly earthy, with a firm, meaty texture that holds up well to cooking. Can be sauteed, grilled, added to soups, or used as a portobello substitute. Older specimens with faded caps and dark gills are still edible but less desirable. As with all wild mushrooms, cook thoroughly before eating.",
  gbifKey: 2533347,
  stories: [
    {
      title: "The Permaculture Garden Hero",
      text: "Paul Stamets describes in 'Mycelium Running' how he inoculated the garden paths at his property in Olympia, Washington, with Wine Cap spawn mixed into fresh alder chips. Within months, the paths were producing pounds of mushrooms while simultaneously building topsoil. Stamets now recommends the practice to every gardener he meets, calling the Wine Cap 'the permaculture mushroom.'",
      location: "Olympia, Washington, USA",
      source: "Stamets, Mycelium Running (2005)",
    },
    {
      title: "The Brooklyn Community Garden Harvest",
      text: "A community garden in Brooklyn, New York, began growing Wine Caps in their wood chip paths in 2018. The first spring flush produced over 15 kg of mushrooms from a 3-meter stretch of path. Members were initially skeptical about eating mushrooms from a garden bed, but after a cooking demonstration by a local mycologist, the Wine Cap beds became the most popular feature of the garden.",
      location: "Brooklyn, New York, USA",
      source: "Brooklyn Community Garden Network",
    },
    {
      title: "The Market Gardener's Secret Weapon",
      text: "A market farmer in Vermont discovered that inoculating straw mulch between tomato rows with Wine Cap spawn produced a dual harvest: tomatoes above and mushrooms below. The mycelium also suppressed weeds and retained moisture, reducing irrigation needs. By 2020, the farmer was selling Wine Caps at the Burlington farmers market for $18 per pound, making the mushroom bed more profitable per square foot than the tomatoes.",
      location: "Burlington, Vermont, USA",
      source: "Northeast Organic Farming Association",
    },
    {
      title: "E. coli Filtration in the Garden",
      text: "Research at the USDA and by Paul Stamets' team demonstrated that Wine Cap mycelium in wood chip beds can reduce coliform bacteria, including E. coli, in water runoff passing through the bed. This mycofiltration effect suggests Wine Cap beds could be used as biological filters in agricultural settings, adding food production and water treatment to the same garden feature.",
      location: "Multiple locations, USA",
      source: "Stamets, Mycelium Running (2005)",
    },
  ],
  seoQueries: [
    "stropharia rugosoannulata identification",
    "wine cap mushroom",
    "king stropharia growing",
    "wine cap mushroom edible",
    "how to grow wine cap mushrooms",
    "garden giant mushroom",
    "wine cap mushroom identification",
    "stropharia rugosoannulata cultivation",
    "wine cap mushroom wood chips",
    "burgundy mushroom in garden",
    "wine cap mushroom taste",
    "king stropharia permaculture",
    "wine cap mushroom look alikes",
    "stropharia rugosoannulata spore print",
  ],
  funFacts: [
    "Wine Cap mycelium has been shown to trap and consume nematodes in the soil, making it one of the few commercially cultivated mushrooms that is also a predator of microscopic soil animals.",
    "A well-established Wine Cap bed can produce 1-2 kg of mushrooms per square meter per flush, with multiple flushes per season. Some gardeners report harvesting over 10 kg from a single bed in a year.",
    "The cogwheel ring on the stem of S. rugosoannulata is so distinctive that it alone can identify the species. The upper surface of the ring has a grooved, gear-like pattern found in no other common mushroom.",
    "Wine Cap mycelium grows so aggressively that it can colonize a fresh wood chip bed in as little as two to three weeks, often outcompeting molds, bacteria, and other fungi for the available substrate.",
  ],
  images: [
    {
      filename: "01-stem.jpg",
      alt: "Wine Cap / King Stropharia stem, ring, and base detail",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:2011-05-19_Stropharia_rugosoannulata_Farl._ex_Murrill_183478.jpg",
      author: "This image was created by user Ann B. (Ann F. Berger) at Mushroom Observer, a source for mycological images.You can cont",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "02-stem.jpg",
      alt: "Wine Cap / King Stropharia stem, ring, and base detail",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:2011-05-19_Stropharia_rugosoannulata_Farl._ex_Murrill_183479.jpg",
      author: "This image was created by user Ann B. (Ann F. Berger) at Mushroom Observer, a source for mycological images.You can cont",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "03-field.jpg",
      alt: "Wine Cap / King Stropharia (Stropharia rugosoannulata) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Mushroom2.jpg",
      author: "Kintaiyo",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
    {
      filename: "04-stem.jpg",
      alt: "Wine Cap / King Stropharia stem, ring, and base detail",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:2017-04-18_Stropharia_rugosoannulata_Farl._ex_Murrill_738722.jpg",
      author: "This image was created by user Jack Smith (Mushroom) at Mushroom Observer, a source for mycological images.You can conta",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "05-stem.jpg",
      alt: "Wine Cap / King Stropharia stem, ring, and base detail",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Kulturtr%C3%A4uschling_Stropharia_rugosoannulata.jpg",
      author: "Holger Krisp",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
  ],
};

export default species;
