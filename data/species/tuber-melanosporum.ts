import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "tuber-melanosporum",
  commonName: "Black Truffle",
  scientificName: "Tuber melanosporum",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Ascomycota",
    class: "Pezizomycetes",
    order: "Pezizales",
    family: "Tuberaceae",
    genus: "Tuber",
  },
  summary:
    "The Perigord black truffle is the only truffle that humans have successfully learned to cultivate, and it changed an entire agricultural economy. Its earthy, chocolatey aroma defines French haute cuisine. Less flashy than its white cousin, but arguably more versatile in the kitchen because it survives cooking.",
  description:
    "If the white truffle is the diva of the fungal world, the black truffle is the workhorse. Tuber melanosporum, commonly called the Perigord truffle after the region in southwestern France where it has been harvested for centuries, is the backbone of truffle cuisine worldwide. Unlike the white truffle, it tolerates heat, which means it can be incorporated into sauces, stuffed under poultry skin, folded into omelets, and baked into brioche. Its flavor profile is earthier, more restrained, with notes of dark chocolate, damp forest floor, and a subtle sweetness that builds as you chew.\n\nThe great revolution in truffle farming came in the 1970s when French and Italian researchers figured out how to inoculate hazelnut and oak seedlings with T. melanosporum spores. Plant the tree, wait 5-10 years, and if conditions are right, truffles appear in the root zone. Today, cultivated trufficulture operations exist across southern France, Spain, Italy, Australia, Chile, and even parts of the American Southeast. But 'cultivated' is a generous word. You plant the trees, manage the soil pH, irrigate carefully, and then hope. Yields are unpredictable, and many plantations produce nothing at all.\n\nIn the wild, black truffles associate primarily with oaks (especially Quercus ilex and Q. pubescens) and hazels on limestone soils in Mediterranean climates. The fruiting bodies mature underground from November through March, and trained dogs locate them by scent. A good truffle dog is worth its weight in, well, truffles. The wild harvest has declined dramatically over the past century, likely due to rural depopulation, loss of traditional oak woodland management, and possibly climate change. In 1900, France produced around 1,000 tonnes of black truffles per year. Today, total production (wild and cultivated) is closer to 50 tonnes in a good year.",
  identification: {
    cap: "No cap. Fruiting body is a roughly spherical to irregular tuber, 3-10 cm in diameter, covered in small, angular, pyramid-shaped warts (verrucae) that give the surface a characteristic rough, coal-black appearance. Young specimens may be reddish-brown before darkening.",
    gills: "No gills. Interior (gleba) is initially white, becoming dark brown to purplish-black at maturity, traversed by a dense network of fine white veins. When cut, the cross-section looks like dark marble. The veins turn pinkish-red when exposed to air.",
    stem: "No stem. Solid underground fruiting body, usually found 5-20 cm below the surface in the drip zone of host trees.",
    sporePrint: "Not applicable. Spores are produced internally, dispersed by animals. Under microscopy, spores are dark brown, ellipsoidal, covered in spines.",
    odor: "Intensely aromatic but different from white truffle. Deep, earthy, with notes of cocoa, damp humus, dried fruit, and a subtle musky sweetness. Less pungent than T. magnatum but more complex when cooked.",
  },
  habitat:
    "Mycorrhizal with oaks (Quercus ilex, Q. pubescens, Q. robur), hazels (Corylus avellana), and occasionally lindens. Requires alkaline, well-drained limestone or chalky soils with pH 7.5-8.5. Thrives in Mediterranean and semi-continental climates with warm, dry summers and mild winters. Often found in open, sparse woodland (truffieres) rather than dense forest.",
  season:
    "November through March, with peak harvest in January and February. Truffles need autumn rain followed by cold nights to trigger maturation. The French truffle markets of Richerenches and Lalbenque operate weekly during the season.",
  range:
    "Native to southern France (Perigord, Provence, Languedoc), Spain (Aragon, Catalonia), and central Italy (Umbria, Marche, Abruzzo). Cultivated plantations now exist in Australia (Tasmania, Western Australia), Chile, South Africa, New Zealand, and the southeastern United States (Tennessee, North Carolina). Spain has overtaken France as the largest producer.",
  lookAlikes: [
    {
      name: "Summer Truffle (Tuber aestivum)",
      distinction:
        "Very similar exterior with pyramidal warts, but the interior gleba is much paler, ranging from cream to light brown with white veins, never achieving the dark purplish-black of T. melanosporum. The aroma is much weaker, more nutty than earthy. Fruits in summer (May-August) rather than winter. Worth a fraction of the price. Often sold fraudulently as Perigord truffle in restaurants.",
      externalUrl: "https://en.wikipedia.org/wiki/Tuber_aestivum",
      externalSource: "Wikipedia",
    },
    {
      name: "Chinese Black Truffle (Tuber indicum)",
      distinction:
        "Nearly identical in external appearance to T. melanosporum, making it a favorite for fraud. The interior is similar but the aroma is vastly weaker, almost nonexistent. Chemical analysis shows it lacks most of the volatile sulfur compounds that define the Perigord truffle's flavor. Sold at a fraction of the price and frequently mixed into batches of genuine T. melanosporum to increase volume. DNA testing is the only reliable way to distinguish them.",
      externalUrl: "https://en.wikipedia.org/wiki/Tuber_indicum",
      externalSource: "Wikipedia",
    },
    {
      name: "Brumale Truffle (Tuber brumale)",
      distinction:
        "Smaller than T. melanosporum with less pronounced warts on the surface. Interior veins are wider and less numerous. Aroma is more musky and less chocolatey. Fruits in the same season and habitats, making it a common contaminant in black truffle harvests. Experienced hunters can distinguish them by scent alone, but beginners often cannot.",
      externalUrl: "https://en.wikipedia.org/wiki/Tuber_brumale",
      externalSource: "Wikipedia",
    },
  ],
  edibility: "edible",
  edibilityNote:
    "A supreme culinary ingredient. Unlike white truffles, black truffles tolerate and even benefit from gentle heat, which releases their aromatic compounds. Classic preparations include truffle-studded foie gras, Perigord sauce, truffle omelets, and sliced over mashed potatoes. Store wrapped in paper towels inside a sealed jar in the refrigerator; use within a week of harvest for best flavor.",
  gbifKey: 5259640,
  stories: [
    {
      title: "The Richerenches Truffle Mass",
      text: "Every January in the tiny Provencal village of Richerenches, the local Catholic church holds a special Mass dedicated to the black truffle. Parishioners place truffles in the collection basket instead of money, and the proceeds are auctioned off afterward to benefit the church. The tradition dates to the 1950s and draws truffle hunters from across the region. In 2018, the truffle collection was valued at over 6,000 euros.",
      location: "Richerenches, Provence, France",
      source: "France 24",
    },
    {
      title: "Australia's Truffle Bet Pays Off",
      text: "In 1999, a group of investors planted 16,000 inoculated oak and hazel trees on a former dairy farm in Manjimup, Western Australia. Everyone thought they were crazy. In 2003, they harvested their first black truffle, the first ever found in the Southern Hemisphere. By 2015, the operation was producing over 500 kg per year and supplying Northern Hemisphere restaurants during their off-season summer months.",
      location: "Manjimup, Western Australia",
      source: "ABC Rural",
    },
    {
      title: "The Great Chinese Truffle Fraud",
      text: "In 2016, French customs officials intercepted a shipment of Chinese black truffles (T. indicum) that had been mixed with Perigord truffles and sprayed with synthetic truffle aroma. The scam was uncovered when a buyer at the Carpentras market noticed the truffles lacked flavor after cooking. DNA analysis confirmed over 40% of the batch was T. indicum. The incident prompted calls for mandatory DNA testing at French truffle markets.",
      location: "Carpentras, Provence, France",
      source: "Le Monde",
    },
    {
      title: "A Tennessee Truffle Plantation Takes Root",
      text: "A retired professor at the University of Tennessee planted 2,000 inoculated hazelnut trees on his property near Chuckey in 2008. After seven years of careful pH management and irrigation, his dog Max found the first truffle in 2015. By 2020, he was producing small quantities that he sold to restaurants in Asheville and Nashville, proving that T. melanosporum could fruit in Appalachian soils.",
      location: "Chuckey, Tennessee, USA",
      source: "Appalachian Truffle Project",
    },
  ],
  seoQueries: [
    "black truffle identification",
    "tuber melanosporum cultivation",
    "perigord truffle price",
    "how to grow black truffles",
    "black truffle vs white truffle",
    "black truffle season france",
    "truffle farming guide",
    "black truffle habitat requirements",
    "black truffle look alikes",
    "how to use black truffles in cooking",
    "black truffle dog training",
    "chinese truffle vs perigord truffle",
    "black truffle inoculated trees",
    "where do black truffles grow",
  ],
  funFacts: [
    "France produced over 1,000 tonnes of black truffles annually in the early 1900s. Today, a good year yields around 30-50 tonnes. The decline is attributed to rural depopulation, World War I casualties (which removed the men who managed the truffle woodlands), and shifts in land use.",
    "Black truffles create a 'burnt zone' (brule) around their host tree where almost no other plants grow. The truffle mycelium produces allelopathic compounds that kill competing vegetation, creating a characteristic bare circle of soil that experienced hunters use to locate productive trees.",
    "The first successful truffle plantation was established by Joseph Talon in the early 1800s near Apt, France. He noticed truffles grew near oak trees, so he planted acorns from productive truffle oaks. It worked, though he did not understand the mycorrhizal mechanism until much later.",
    "Australia's winter is Europe's summer, which means Australian trufficulture can supply fresh black truffles to Northern Hemisphere markets from June through August, when European truffles are out of season. This counter-seasonal advantage has driven significant investment in Australian truffle plantations.",
  ],
  images: [
    {
      filename: "01-field.jpg",
      alt: "Black Truffle (Tuber melanosporum) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Diamant_noir_Tuber_melanosporum.jpg",
      author: "sgillies",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    },
    {
      filename: "02-field.jpg",
      alt: "Black Truffle (Tuber melanosporum) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Cycle_de_vie_de_Tuber_melanosporum_(Laure_Schneider-Maunoury,_2017).png",
      author: "Laure Schneider-Maunoury : doctorante en écologie évolutive au sein de l'ISYEB, au Muséum national d'histoire naturelle",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "03-field.jpg",
      alt: "Black Truffle (Tuber melanosporum) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Leiodes_cinnamomea_and_Tuber_melanosporum_(illustration_by_John_Curtis,_1829-1840).jpg",
      author: "Curtis, John, 1791-1862",
      license: "Public domain",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    },
    {
      filename: "04-field.jpg",
      alt: "Black Truffle (Tuber melanosporum) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Beaumont_-_truffi%C3%A8res.jpg",
      author: "Marianne Casamance",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "05-field.jpg",
      alt: "Black Truffle (Tuber melanosporum) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Truffe_nature.JPG",
      author: "This illustration was made by (User:Royonx) and released under the license(s) stated above. You are free to use it for a",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
  ],
};

export default species;
