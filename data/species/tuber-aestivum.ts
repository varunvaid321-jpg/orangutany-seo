import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "tuber-aestivum",
  commonName: "Summer Truffle",
  scientificName: "Tuber aestivum",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Ascomycota",
    class: "Pezizomycetes",
    order: "Pezizales",
    family: "Tuberaceae",
    genus: "Tuber",
  },
  summary:
    "The most accessible and affordable of the true truffles, fruiting underground near oaks, hazels, and beeches across Europe from late spring through autumn. Tuber aestivum lacks the knockout intensity of white or black Perigord truffles, but it offers a genuine truffle experience at a fraction of the cost and is the species driving the rapid expansion of truffle cultivation worldwide.",
  description:
    "If the white truffle of Alba is a Rolls-Royce and the Perigord black truffle is a Mercedes, the Summer Truffle is a solid Volvo: not flashy, not cheap, but reliable, widely available, and perfectly good at its job. Tuber aestivum is by far the most common truffle species in Europe, found from England to Turkey, from Sweden to Sicily. It is the truffle that most people actually encounter in restaurants and markets, often without realizing it.\n\nThe exterior is covered in large, pyramidal warts, black to dark brown, giving it the texture of a small, rough golf ball. Cut it open, and the interior (gleba) is pale, ranging from off-white to hazelnut brown, with fine white marbling. The aroma is mild compared to its famous relatives: nutty, earthy, with a gentle mushroomy warmth rather than the explosive pungency of Tuber magnatum or Tuber melanosporum.\n\nThis subtlety is both its limitation and its selling point. Summer truffles are mild enough to use generously without overwhelming a dish. They work beautifully shaved over pasta, eggs, risotto, and salads. They are also the backbone of most truffle-infused products (oils, butters, sauces) on the market, though many of those products use synthetic truffle flavoring instead.\n\nThe Burgundy truffle, sometimes sold as a separate species (Tuber uncinatum), is now generally considered the same species as Tuber aestivum, just the autumn-fruiting form with slightly darker, more aromatic flesh. The taxonomic debate continues, but most molecular studies support treating them as a single species.\n\nSummer truffles are the primary species being planted in truffle orchards (truffieres) across Europe, Australia, and North America. Young oaks and hazels are inoculated with Tuber aestivum spores at the nursery stage, planted out, and begin producing truffles after 5-10 years. The global truffle cultivation industry is expanding rapidly.",
  identification: {
    cap: "Fruiting body is a subterranean, roughly spherical tuber, 2-8 cm in diameter. Exterior (peridium) is covered in large, pyramidal, angular warts (3-5 mm across), black to dark brown. Interior (gleba) is firm, pale off-white to hazelnut brown, with fine white veining (marbling).",
    gills:
      "No gills. This is an underground ascomycete (truffle). Spores are produced inside the gleba in microscopic sac-like structures (asci).",
    stem: "No stem. The truffle is entirely subterranean, attached to tree roots by fine mycorrhizal connections.",
    sporePrint: "Not applicable. Spores are contained within the gleba and dispersed when animals dig up and eat the truffles.",
    odor: "Mild, pleasant, nutty, earthy, with a gentle mushroomy warmth. Less pungent than Tuber melanosporum or Tuber magnatum. Aroma intensifies as the truffle matures.",
  },
  habitat:
    "Mycorrhizal with a wide range of trees: oak (Quercus), hazel (Corylus), beech (Fagus), hornbeam (Carpinus), birch (Betula), and pine (Pinus) in some regions. Found in calcareous (chalky, limestone) soils with good drainage. Fruits entirely underground, typically 5-20 cm below the soil surface. Detected by trained dogs, pigs, or by observing fly activity above the soil.",
  season:
    "Late spring through autumn. The summer form fruits from May through August; the autumn/Burgundy form from September through December. Peak availability in markets is June through November.",
  range:
    "Widespread across Europe, from southern England and Sweden south to the Mediterranean and east to Turkey and the Caucasus. The most common truffle species on the continent. Cultivated in truffle orchards in France, Italy, Spain, Hungary, Australia, New Zealand, and parts of North and South America.",
  lookAlikes: [
    {
      name: "Perigord Black Truffle (Tuber melanosporum)",
      distinction:
        "More valuable and aromatic. Exterior warts are smaller and finer. Interior is much darker (dark brown to black with white veining). Aroma is significantly stronger and more complex. Prefers warmer Mediterranean climates. Fruits in winter (November-March).",
      externalUrl:
        "https://en.wikipedia.org/wiki/Tuber_melanosporum",
      externalSource: "Wikipedia",
    },
    {
      name: "Common False Truffle (Scleroderma citrinum)",
      distinction:
        "Not a true truffle. Grows at or just below the soil surface, often partially exposed. Exterior is thick, yellowish, and warty. Interior is dark purple-black with white veining when young. Unpleasant rubbery odor. Mildly toxic. Much more common than true truffles.",
      externalUrl:
        "https://www.first-nature.com/fungi/scleroderma-citrinum.php",
      externalSource: "First Nature",
    },
    {
      name: "Smooth Black Truffle (Tuber macrosporum)",
      distinction:
        "Exterior is smoother with flatter warts. Interior has broader, more widely spaced veining. Aroma is more garlicky. Less common than T. aestivum. Requires microscopic spore examination for definitive distinction.",
      externalUrl:
        "https://www.inaturalist.org/taxa/1039179-Tuber-macrosporum",
      externalSource: "iNaturalist",
    },
  ],
  edibility: "edible",
  edibilityNote:
    "An excellent edible truffle, widely used in European cuisine. Milder than Perigord black or white truffles, making it more versatile and affordable. Best used fresh, shaved or sliced over finished dishes. Aroma diminishes with cooking, so add at the last moment. Pairs well with pasta, eggs, risotto, potatoes, and mild cheeses. Store wrapped in paper towels in a sealed container in the refrigerator; use within a week for best flavor.",
  gbifKey: 5259404,
  stories: [
    {
      title: "The English Truffle Renaissance",
      text: "Truffles were considered extinct in England for decades until trained truffle dogs began finding Tuber aestivum in chalk downlands and beech woodlands across southern England in the 1990s and 2000s. The discoveries sparked a small but growing English truffle industry, with truffle orchards now established in Hampshire, Wiltshire, and Dorset.",
      location: "Wiltshire, England",
      source: "Mycological Research",
    },
    {
      title: "Hungary's Truffle Dog Championships",
      text: "Hungary hosts annual truffle dog competitions where trained dogs (primarily Lagotto Romagnolo and various mixed breeds) compete to locate buried truffles in timed trials. Tuber aestivum is the primary species found in Hungarian oak forests, and the country has become a significant exporter to western European markets.",
      location: "Szekszard, Hungary",
      source: "Hungarian Truffle Association",
    },
    {
      title: "The Australian Truffle Farm Experiment",
      text: "Australian growers began planting truffle orchards inoculated with Tuber aestivum and Tuber melanosporum in the 1990s. The Southern Hemisphere growing season means Australian truffles mature during the Northern Hemisphere summer, allowing Australian producers to supply European and North American markets during their off-season. The industry is now worth over AUD $10 million annually.",
      location: "Manjimup, Western Australia",
      source: "Australian Truffle Growers Association",
    },
  ],
  seoQueries: [
    "summer truffle identification",
    "tuber aestivum edible",
    "summer truffle vs black truffle",
    "how to find summer truffles",
    "summer truffle season",
    "tuber aestivum price",
    "summer truffle taste",
    "truffle hunting dogs",
    "burgundy truffle vs summer truffle",
    "how to grow truffles",
    "summer truffle habitat",
    "tuber aestivum cultivation",
    "English truffle foraging",
    "summer truffle cooking",
  ],
  funFacts: [
    "The Burgundy truffle (formerly Tuber uncinatum) is now generally considered the same species as Tuber aestivum, just the autumn-fruiting form. Molecular studies cannot reliably distinguish them.",
    "Truffles rely on animals (squirrels, deer, wild boar, insects) to dig them up and spread their spores. The distinctive aroma evolved specifically to attract these animal dispersers.",
    "A truffle-inoculated hazel or oak tree typically takes 5-10 years to produce its first truffles. Some orchards never produce, making truffle farming a high-risk, long-term investment.",
    "The global truffle market (wild and cultivated) is estimated at over 500 million euros annually, with Tuber aestivum making up the largest share by volume.",
    "Trained truffle dogs can detect truffles buried 30 cm underground. Most truffle hunters now use dogs rather than pigs, because pigs tend to eat the truffles before the hunter can retrieve them.",
  ],
  images: [
    {
      filename: "01-field.jpg",
      alt: "Summer Truffle (Tuber aestivum) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Tuber_aestivum_Valnerina_018.jpg",
      author: "Rippitippi",
      license: "Public domain",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    },
    {
      filename: "02-field.jpg",
      alt: "Freshly harvested Summer Truffles (Tuber aestivum) showing characteristic black warty exterior on grass",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:%E1%83%96%E1%83%90%E1%83%A4%E1%83%AE%E1%83%A3%E1%83%9A%E1%83%98%E1%83%A1_%E1%83%A2%E1%83%A0%E1%83%98%E1%83%A3%E1%83%A4%E1%83%94%E1%83%9A%E1%83%98_Summer_Truffle_-_Tuber_aestivum.jpg",
      author: "Wikimedia Commons contributor",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "03-field.jpg",
      alt: "Summer Truffle (Tuber aestivum) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Tuber_aestivum.jpg",
      author: "mycobel",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    {
      filename: "04-field.jpg",
      alt: "Close-up cross-section of Summer Truffle (Tuber aestivum) showing marbled brown and white interior flesh",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Tuber_aestivum_Valnerina_014.jpg",
      author: "Rippitippi",
      license: "Public domain",
      licenseUrl: "",
    },
    {
      filename: "05-field.jpg",
      alt: "Summer Truffle (Tuber aestivum) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:2018-12-27-Tr%C3%BCffelscheiben-1293.jpg",
      author: "Superbass",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
  ],
};

export default species;
