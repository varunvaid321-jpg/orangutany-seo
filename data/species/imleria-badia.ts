import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "imleria-badia",
  commonName: "Bay Bolete",
  scientificName: "Imleria badia",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Boletales",
    family: "Boletaceae",
    genus: "Imleria",
  },
  summary:
    "The everyday bolete — less glamorous than porcini but far more abundant and very good eating. Imleria badia is the workhorse of European bolete foraging: it fruits reliably, often in huge numbers, and while it won't make magazine covers, it fills baskets and freezers across the continent every autumn.",
  description:
    "If porcini is the celebrity chef of the bolete world, the Bay Bolete is the reliable line cook who actually keeps the kitchen running. It doesn't command €60 per kilo at Italian markets, nobody's writing sonnets about it, and no village has ever shut down for bay bolete season. But here's the thing: it's everywhere, it's easy to identify, and it tastes genuinely good — mild, pleasant, slightly nutty, with none of the bitterness that plagues some of its bolete cousins.\n\nImleria badia was formerly classified as Boletus badius, and many older field guides still list it under that name. The reclassification into its own genus happened in 2015, based on molecular evidence showing it sits on a different branch of the bolete family tree than true Boletus species. The name 'badia' comes from the Latin 'badius,' meaning chestnut-brown — a perfect description of that rich, dark cap.\n\nThe key diagnostic feature that separates bay boletes from porcini is the blue-green bruising reaction. Press a finger into the pore surface of a fresh bay bolete and within seconds it turns a striking blue-green. Porcini pores don't do this. The stem also lacks the fine white net pattern (reticulation) that's the hallmark of true porcini. Once you learn these two differences, you'll never confuse them again — and you'll stop walking past perfectly good bay boletes while hunting for their more famous relatives.",
  identification: {
    cap: "4–15 cm across, convex becoming flatter with age. Dark chestnut-brown to bay-brown, smooth, slightly sticky when wet, with a fine velvety texture when dry. The color is notably darker and more uniform than porcini.",
    gills:
      "No gills — has a pore surface like all boletes. Pores are pale yellow when young, becoming olive-yellow with age. The key diagnostic: pores bruise blue-green when pressed, a reaction that happens within seconds and is unmistakable.",
    stem: "4–12 cm tall, 1.5–4 cm wide, cylindrical to slightly club-shaped. Pale brown with darker brown streaks or fibers. Crucially, it lacks the white reticulation (net pattern) found on porcini stems — this is one of the fastest ways to tell them apart.",
    sporePrint: "Olive-brown to yellowish-brown.",
    odor: "Mild and pleasant, slightly mushroomy. Nothing distinctive — no strong nutty or yeasty notes like porcini.",
  },
  habitat:
    "Strongly associated with coniferous forests, especially Scots pine and Norway spruce. Also found under beech and oak, but less commonly. Prefers acidic, sandy soils. Often grows in mossy areas, along forest paths, and in clearings. Frequently fruits in large groups — finding one usually means finding a dozen.",
  season:
    "Summer through late autumn, typically July through November. Peak fruiting is September–October across most of Europe. One of the more reliable boletes — less dependent on precise weather conditions than porcini.",
  range:
    "Widespread across Europe, where it is one of the most common edible boletes. Found from Scandinavia south to the Mediterranean, and east across Russia. Also present in temperate North America, though less commonly collected there. Introduced to some Southern Hemisphere locations through pine plantations.",
  lookAlikes: [
    {
      name: "Porcini (Boletus edulis)",
      slug: "boletus-edulis",
      image: "lookalike-edulis.jpg",
      distinction:
        "The mushroom everyone hopes they've found. Porcini has a white reticulation (net pattern) on the upper stem that bay bolete completely lacks. Porcini pores do not bruise blue-green when pressed — bay bolete pores do, instantly. Porcini is also generally paler in cap color and has thicker, more bulbous flesh. Both are excellent edibles.",
      externalUrl:
        "https://www.inaturalist.org/taxa/48701-Boletus-edulis",
      externalSource: "iNaturalist",
    },
    {
      name: "Bitter Bolete (Tylopilus felleus)",
      slug: "tylopilus-felleus",
      image: "lookalike-felleus.jpg",
      distinction:
        "The bolete that ruins dinners. Similar brown cap and general shape, but the pore surface turns pinkish with age (not olive-yellow), and the stem has a dark brownish net pattern. The definitive test: a tiny taste reveals intense, lingering bitterness. One piece can make an entire pot of soup inedible. Bay bolete has a mild, pleasant flavor.",
      externalUrl:
        "https://www.inaturalist.org/taxa/63489-Tylopilus-felleus",
      externalSource: "iNaturalist",
    },
    {
      name: "Red-cracking Bolete (Xerocomellus chrysenteron)",
      slug: "xerocomellus-chrysenteron",
      image: "lookalike-chrysenteron.jpg",
      distinction:
        "A common bolete whose cap cracks with age, revealing reddish flesh beneath the surface — bay bolete caps don't crack or show red. Xerocomellus chrysenteron is smaller, has a more olive-toned cap, and the flesh is softer and more spongy. Edible but mediocre compared to bay bolete.",
      externalUrl:
        "https://www.inaturalist.org/taxa/438013-Xerocomellus-chrysenteron",
      externalSource: "iNaturalist",
    },
  ],
  edibility: "edible",
  edibilityNote:
    "A good, reliable edible mushroom with a mild, pleasant flavor. Works well sautéed, in soups, stews, and risotto. Also dries well, though it doesn't develop the intense umami concentration of dried porcini. Young, firm specimens are best — older ones can become soft and waterlogged. The blue-green bruising on the pores is harmless and disappears during cooking.",
  gbifKey: 7832732,
  stories: [
    {
      title: "Poland's Favorite Bolete",
      text: "In Poland, where mushroom foraging is practically a national sport, the bay bolete (known locally as 'podgrzybek brunatny') is one of the most commonly collected species. Polish foraging statistics from 2018 estimated that bay boletes made up nearly 30% of all wild mushrooms collected in the country's forests, outstripping even porcini in total volume.",
      location: "Poland",
      source: "Polish Mycological Society",
    },
    {
      title: "The Bolete That Changed Genus",
      text: "For over a century, this mushroom was known as Boletus badius. In 2015, molecular phylogenetic studies by Vizzini placed it in the newly created genus Imleria, named after the Italian mycologist Louis Imler. The reclassification surprised many foragers who'd been calling it a Boletus their whole lives — proving that DNA doesn't care about field guide traditions.",
      location: "Europe",
      source: "Index Fungorum",
      sourceUrl: "https://www.indexfungorum.org/",
    },
    {
      title: "Chernobyl's Cesium Sponge",
      text: "After the 1986 Chernobyl disaster, researchers discovered that Imleria badia accumulates radioactive cesium-137 more readily than almost any other edible mushroom species. Decades later, bay boletes collected in parts of Bavaria and eastern Europe still occasionally exceed EU limits for radioactive contamination. German authorities continue to issue seasonal advisories.",
      location: "Bavaria, Germany / Eastern Europe",
      source: "German Federal Office for Radiation Protection",
      sourceUrl: "https://www.bfs.de/EN/",
    },
    {
      title: "The Forest Kindergarten Lesson",
      text: "In Scandinavian 'forest kindergartens,' bay boletes are often the first mushroom children learn to identify. The combination of a distinctive brown cap, blue-bruising pores, and lack of dangerous look-alikes makes it an ideal teaching species. A Danish outdoor educator described it as 'the mushroom that teaches the pore test' — press and watch the color change.",
      location: "Scandinavia",
      source: "Nordic Outdoor Education Network",
    },
    {
      title: "A Record Haul in the Scottish Highlands",
      text: "In October 2019, a forager near Aviemore in the Scottish Highlands documented collecting over 8 kg of bay boletes in a single two-hour walk through a Caledonian pine forest. The photos, shared on a UK foraging forum, showed dozens of perfect specimens growing in moss under mature Scots pines — a textbook bay bolete habitat.",
      location: "Aviemore, Scottish Highlands",
      source: "Wild Food UK forum",
      sourceUrl: "https://www.wildfooduk.com/",
    },
  ],
  seoQueries: [
    "bay bolete identification",
    "imleria badia edible",
    "bay bolete vs porcini",
    "brown bolete blue bruising pores",
    "boletus badius identification",
    "bay bolete look alikes",
    "is bay bolete edible",
    "how to identify bay bolete",
    "bay bolete mushroom taste",
    "bay bolete cooking recipes",
    "brown cap mushroom sponge underneath",
    "bay bolete where to find",
    "bay bolete season UK",
    "mushroom pores turn blue when pressed",
    "bay bolete vs bitter bolete",
  ],
  funFacts: [
    "Bay boletes accumulate radioactive cesium-137 more efficiently than almost any other edible mushroom — decades after Chernobyl, specimens from parts of Germany and Eastern Europe can still exceed safety limits.",
    "The species was reclassified from Boletus badius to Imleria badia in 2015, making it one of hundreds of boletes that lost their Boletus membership card when molecular studies reshuffled the family tree.",
    "The blue-green bruising reaction on the pores is caused by the oxidation of a compound called variegatic acid — the same chemistry that makes Boletus luridiformis turn dramatically blue when cut.",
    "In Poland, bay boletes are so commonly foraged that they're sold at roadside stands during autumn, often cheaper than supermarket button mushrooms — despite being wild-harvested from the forest.",
    "A single mature bay bolete can produce over 2 billion spores, but because it needs to form a mycorrhizal partnership with a living tree root to germinate, the vast majority never develop into mushrooms.",
  ],
  images: [
    {
      filename: "01-classic.jpg",
      alt: "Bay Bolete (Imleria badia) with dark chestnut-brown cap growing among pine needles on forest floor",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Imleria_badia_LC0374.jpg",
      author: "Ludovic Le Renard",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "02-pores.jpg",
      alt: "Bay Bolete showing yellow pore surface underneath the cap with blue-green bruising where pressed",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Boletus_badius_JPG1.jpg",
      author: "Jean-Pol Grandmont",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
    {
      filename: "03-group.jpg",
      alt: "Several Bay Boletes growing together in moss under pine trees",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Boletus_badius_group.jpg",
      author: "Stu's Images",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "04-stem.jpg",
      alt: "Bay Bolete stem showing brown streaks without the white reticulation pattern found on porcini",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Imleria_badia_(Elias_Magnus_Fries,_1818).jpg",
      author: "Andreas Kunze",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "05-habitat.jpg",
      alt: "Bay Bolete in typical habitat among moss and pine needles in coniferous forest",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:2012-10-16_Imleria_badia_(Fr.)_Vizzini_270574.jpg",
      author: "Andreas Kunze",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
  ],
};

export default species;
