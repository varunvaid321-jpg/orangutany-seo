import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "tuber-magnatum",
  commonName: "White Truffle",
  scientificName: "Tuber magnatum",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Ascomycota",
    class: "Pezizomycetes",
    order: "Pezizales",
    family: "Tuberaceae",
    genus: "Tuber",
  },
  summary:
    "The most expensive food on Earth by weight, and it cannot be cultivated. Tuber magnatum grows only in specific limestone soils of Italy and the Balkans, found by trained dogs who catch its intense garlicky aroma through the earth. If someone offers you a cheap white truffle, it is not a white truffle.",
  description:
    "There is no mushroom more mythologized, more monetized, or more misunderstood than the White Truffle of Alba. This hypogeous fungus, meaning it fruits entirely underground, forms mycorrhizal partnerships with oaks, hazels, poplars, and lindens in calcareous clay soils. It never breaks the surface. You cannot see it. You cannot find it without a trained animal. For centuries, pigs did the work; today, dogs are preferred because they are less likely to eat the prize before you can grab it.\n\nThe flavor is almost impossible to describe to someone who has never experienced it. Intensely garlicky, musky, with notes of aged cheese and honey, it permeates everything it touches. Restaurants shave paper-thin slices over pasta, risotto, and eggs, and the aroma fills an entire dining room. A single truffle the size of a golf ball can sell for hundreds of dollars at the annual Alba truffle auction. Record specimens have fetched over $300,000. The season is painfully short, running from October through December, and yields vary wildly year to year depending on summer rainfall.\n\nDespite decades of effort, no one has successfully cultivated Tuber magnatum at commercial scale. Unlike black truffles, which can be grown on inoculated hazelnut and oak saplings, white truffles resist domestication. The mycorrhizal relationship they require is too complex, too dependent on specific soil chemistry and microbial communities. This scarcity is what drives the price, and what makes the truffle hunters of Piedmont some of the most secretive foragers on the planet. They hunt at night, guard their spots for generations, and have been known to poison rival hunters' dogs.",
  identification: {
    cap: "No cap. Fruiting body is an irregular, knobby tuber, 2-12 cm across, with a smooth to slightly velvety outer surface (peridium) that ranges from pale ochre to cream to greenish-yellow. Surface often has shallow depressions and folds.",
    gills: "No gills. Interior (gleba) is marbled with a network of white veins running through a pale ochre to brown background. The marbling pattern is the key diagnostic feature when cut open.",
    stem: "No stem. The truffle is a solid, roughly spherical to irregular mass found entirely underground, usually 5-15 cm below the surface near the roots of host trees.",
    sporePrint: "Not applicable. Spores are produced internally within the gleba and dispersed when animals dig up and eat the truffles. Spores are large, reticulate, and yellowish under microscopy.",
    odor: "Overwhelmingly pungent. A complex mix of garlic, aged Parmesan, honey, hay, and musk. The aroma is so strong it can perfume an entire room through a closed container. This is the primary way trained dogs locate them underground.",
  },
  habitat:
    "Exclusively mycorrhizal with broadleaf trees, primarily oaks (Quercus pubescens, Q. robur), hazels (Corylus avellana), poplars (Populus spp.), and lindens (Tilia spp.). Requires well-drained calcareous clay soils with specific pH ranges (7.0-8.5). Found at elevations between 100-700 meters in hilly terrain with moderate rainfall.",
  season:
    "October through late December, with peak harvest in November. The season is highly dependent on summer and early autumn rainfall. Dry summers produce poor harvests.",
  range:
    "Primarily the Piedmont, Emilia-Romagna, Tuscany, Umbria, and Marche regions of Italy. Also found in Croatia (Istria and Motovun forest), Slovenia, Serbia, and limited areas of southern France and Hungary. The town of Alba in Piedmont is considered the world capital of white truffle.",
  lookAlikes: [
    {
      name: "Bianchetto Truffle (Tuber borchii)",
      slug: "tuber-borchii",
      distinction:
        "Much smaller (1-4 cm), with a stronger, almost chemical garlic odor that some find unpleasant. Interior marbling is less defined. Significantly less valuable. Often sold fraudulently as young T. magnatum. The smell test is the best distinction: T. borchii smells harsh and almost like natural gas, while T. magnatum is complex and pleasant.",
    },
    {
      name: "Oregon White Truffle (Tuber oregonense)",
      distinction:
        "Found in the Pacific Northwest of North America, associated with Douglas fir rather than broadleaf trees. Smaller, paler interior, and the aroma is much milder, more herbal and less garlicky. Not in the same league culinarily or financially. Sometimes marketed misleadingly as 'white truffle' in US restaurants.",
      externalUrl: "https://en.wikipedia.org/wiki/Tuber_oregonense",
      externalSource: "Wikipedia",
    },
  ],
  edibility: "edible",
  edibilityNote:
    "One of the most prized edible fungi in the world. Always eaten raw, shaved thinly over warm dishes to release the volatile aromatics. Cooking destroys the delicate flavor compounds. Best paired with simple preparations: fresh pasta, risotto, fried eggs, or fonduta. The aroma fades rapidly after harvest, so truffles should be consumed within days of being dug up.",
  gbifKey: 5259647,
  stories: [
    {
      title: "The $330,000 Truffle of 2007",
      text: "At the annual Alba truffle auction in November 2007, a single 1.5-kilogram white truffle sold for $330,000 to a Macau casino owner. The truffle was found by a hunter and his dog Rocco in the hills south of Alba. The auction, broadcast live to bidders in London, Hong Kong, and Dubai, set a world record that stood for years.",
      location: "Alba, Piedmont, Italy",
      source: "BBC News",
      sourceUrl: "https://news.bbc.co.uk/2/hi/europe/7105929.stm",
    },
    {
      title: "Truffle Dog Poisoning Wars in Piedmont",
      text: "In 2019, Italian media reported a spate of truffle dog poisonings in the Langhe hills near Alba. Rival truffle hunters had allegedly left poisoned meatballs along known hunting paths. At least a dozen dogs were killed over a two-year period. Local police launched an investigation, but convictions were difficult because the truffle hunting community is notoriously secretive about their activities and territories.",
      location: "Langhe, Piedmont, Italy",
      source: "The Guardian",
    },
    {
      title: "Night Hunting in the Motovun Forest",
      text: "A Croatian truffle hunter in Istria described his family's generations-old tradition of hunting white truffles in the Motovun forest along the Mirna River valley at 3 AM. They use Lagotto Romagnolo dogs and work by headlamp, partly for tradition and partly because fewer rival hunters are out. He said his best find was a 400-gram specimen in 2015 that he sold to a Venetian restaurant for 4,000 euros.",
      location: "Motovun, Istria, Croatia",
      source: "Atlas Obscura",
    },
    {
      title: "Climate Change Threatens the White Truffle",
      text: "Researchers at the University of Turin published a 2021 study showing that white truffle yields in Piedmont had declined by roughly 30% over the previous two decades, correlated with increasingly dry summers and shifting rainfall patterns. The truffle's narrow ecological requirements make it especially vulnerable. Some hunters reported finding truffles at higher elevations than previous generations ever searched.",
      location: "Piedmont, Italy",
      source: "University of Turin study",
    },
  ],
  seoQueries: [
    "white truffle identification",
    "tuber magnatum price",
    "alba white truffle season",
    "most expensive mushroom in the world",
    "white truffle vs black truffle",
    "how to find white truffles",
    "white truffle habitat requirements",
    "italian white truffle hunting",
    "tuber magnatum cultivation",
    "can you grow white truffles",
    "white truffle dog training",
    "white truffle look alikes",
    "where do white truffles grow",
    "white truffle taste and aroma",
  ],
  funFacts: [
    "White truffles cannot be cultivated despite over 50 years of attempts. The mycorrhizal relationship they form with host trees requires specific soil bacteria, pH levels, and drainage conditions that no one has been able to reliably replicate.",
    "Pigs were used to find truffles for centuries because female pigs are attracted to androstenol, a compound in truffles that also occurs in boar saliva. Dogs replaced pigs because they are easier to control and less likely to eat the truffle on the spot.",
    "The volatile compounds that give white truffles their intense aroma include dimethyl sulfide, bis(methylthio)methane, and dozens of other sulfur-containing molecules. These compounds begin degrading within hours of harvest, which is why fresh truffles command such extreme premiums.",
    "In medieval Italy, truffles were believed to be created by lightning strikes. This myth persisted because truffles fruit best after summer thunderstorms, and the mycelium's dependence on specific rainfall patterns gave the appearance of a connection to storms.",
  ],
  images: [
    {
      filename: "01-field.jpg",
      alt: "White Truffle (Tuber magnatum) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Tuber_magnatum_(sezione).jpg",
      author: "Marco Plassio",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "02-field.jpg",
      alt: "White Truffle (Tuber magnatum) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Tuber_magnatum_Picco_690635.jpg",
      author: "This image was created by user Nicolò Oppicelli (Nicolò Oppicelli) at Mushroom Observer, a source for mycological images",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "03-field.jpg",
      alt: "White Truffle (Tuber magnatum) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Tuber_Magnatum_Pico.jpg",
      author: "Lucarelli",
      license: "Public domain",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    },
    {
      filename: "04-field.jpg",
      alt: "White Truffle (Tuber magnatum) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Tuber_magnatum.jpg",
      author: "Marco Plassio",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
  ],
};

export default species;
