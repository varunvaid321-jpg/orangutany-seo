import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "ophiocordyceps-sinensis",
  commonName: "Caterpillar Fungus",
  scientificName: "Ophiocordyceps sinensis",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Ascomycota",
    class: "Sordariomycetes",
    order: "Hypocreales",
    family: "Ophiocordycipitaceae",
    genus: "Ophiocordyceps",
  },
  summary:
    "The most expensive biological commodity on Earth by weight. Ophiocordyceps sinensis, known as yartsa gunbu in Tibetan ('summer grass, winter worm'), is a parasitic fungus that infects ghost moth caterpillars on the Tibetan Plateau. It has been used in traditional Chinese and Tibetan medicine for centuries and at peak market prices has sold for more than three times the price of gold.",
  description:
    "No fungus on Earth carries a higher price tag. At the peak of the market in the early 2010s, top-grade Ophiocordyceps sinensis was selling for over $100,000 per kilogram in Chinese markets, making it, gram for gram, more valuable than gold, truffles, or saffron. The economics are simple: massive demand from traditional Chinese medicine, a habitat restricted to high-altitude Tibetan and Himalayan grasslands, no viable cultivation method, and declining wild populations.\n\nThe life cycle is remarkable. Fungal spores infect the larvae of ghost moths (Thitarodes/Hepialus species) living in alpine meadow soils at elevations between 3,000 and 5,000 meters. The fungus colonizes the caterpillar, eventually killing it and mummifying the body. The following spring, a slender, dark brown, finger-like fruiting body (stroma) emerges from the head of the buried caterpillar and pokes above the soil surface. Collectors scan the ground on hands and knees, looking for these tiny protrusions.\n\nThe harvest sustains entire communities across the Tibetan Plateau, Nepal, Bhutan, and parts of northern India. In some Tibetan counties, yartsa gunbu collection accounts for 40-80% of household income. The spring harvest season transforms remote alpine villages into bustling trade centers.\n\nHowever, the boom has a dark side. Decades of intensive harvesting, combined with climate change warming the high-altitude habitats, have caused significant population declines. Chinese researchers have documented drops of 30-50% in collection yields across major harvest areas. Despite enormous investment, no one has successfully cultivated the full lifecycle of O. sinensis (caterpillar infection through fruiting body) at commercial scale. The mycelium can be grown in fermentation tanks, and this cultured mycelium is sold as a supplement, but it is not the same product as the wild-harvested caterpillar-fungus complex.",
  identification: {
    cap: "No cap. The fruiting body (stroma) is a slender, dark brown to blackish, club-shaped structure, 4-10 cm long, 3-5 mm wide, emerging from the head of the mummified caterpillar. Surface is finely granular (perithecia embedded in the surface).",
    gills:
      "No gills. Spores are produced in perithecia embedded in the surface of the stroma, similar to Cordyceps militaris.",
    stem: "The stroma is continuous from the caterpillar head to the tip. No distinct stem separate from the fertile portion. The mummified caterpillar body (3-5 cm long) serves as the base.",
    sporePrint: "Not practically obtainable. Spores are thread-like ascospores released from perithecia.",
    odor: "Mild, slightly fishy or musty when dried. Fresh specimens have a faint earthy smell.",
  },
  habitat:
    "Alpine meadows and grasslands of the Tibetan Plateau and Himalayas, at elevations between 3,000 and 5,000 meters. The host caterpillars (Thitarodes ghost moth larvae) live in the soil of these high-altitude grasslands, feeding on plant roots. The fungus is strictly associated with these specific host insects in this specific habitat. Cannot be cultivated through its full lifecycle.",
  season:
    "The stroma emerges in spring, typically April through June, as snow melts on the alpine meadows. The harvest season is brief, usually 4-6 weeks. Timing varies by elevation and latitude.",
  range:
    "Restricted to the Tibetan Plateau and surrounding high-altitude regions: Tibet, Qinghai, Sichuan, Yunnan, and Gansu provinces of China; Nepal; Bhutan; and parts of northern India (Sikkim, Uttarakhand). Always at high elevation (3,000-5,000 m) in alpine grassland habitat.",
  lookAlikes: [
    {
      name: "Cordyceps militaris",
      slug: "cordyceps-militaris",
      distinction:
        "Much more common and widespread, found at low elevations across the Northern Hemisphere. Bright orange rather than dark brown. Smaller overall. Grows on moth pupae rather than large caterpillars. Can be commercially cultivated.",
      externalUrl:
        "https://www.inaturalist.org/taxa/125328-Cordyceps-militaris",
      externalSource: "iNaturalist",
    },
    {
      name: "Ophiocordyceps gracilis",
      distinction:
        "Found in the same high-altitude habitat and can infect similar host larvae. Distinguished by its more slender stroma and slightly different coloring. Much less commercially valuable. Requires microscopic examination for definitive separation.",
      externalUrl:
        "https://en.wikipedia.org/wiki/Ophiocordyceps",
      externalSource: "Wikipedia",
    },
  ],
  edibility: "edible-with-caution",
  edibilityNote:
    "Consumed as a traditional medicine in Chinese and Tibetan practice for centuries, typically in soups, stews, or steeped in hot water or alcohol. Not eaten as a food in the Western sense. The wild product is astronomically expensive and increasingly scarce. Cultured mycelium (grown in fermentation tanks) is sold as a cheaper supplement alternative but differs in composition from the wild product. Quality control is a significant issue; adulteration and counterfeiting are widespread in the market. Arsenic contamination has been detected in some wild-harvested specimens from certain regions.",
  gbifKey: 5260107,
  stories: [
    {
      title: "The Gold Rush on the Roof of the World",
      text: "During the peak of the yartsa gunbu boom in the 2000s, the spring harvest drew tens of thousands of collectors to remote Tibetan grasslands. Entire families camped at high altitude for weeks, crawling across meadows on hands and knees searching for the tiny fruiting bodies. Conflicts over harvesting rights led to violence in some areas, including documented murders over prime collecting grounds.",
      location: "Qinghai Province, China",
      source: "Daniel Winkler, Mycologist",
      sourceUrl: "https://www.danielwinkler.com",
    },
    {
      title: "Nepal's Yarsagumba Economy",
      text: "In remote districts of northwestern Nepal, yarsagumba (the Nepali name) collection provides the majority of cash income for thousands of families. The Nepali government regulates the harvest and collects royalties, but enforcement is difficult in the remote, high-altitude terrain. A single collector can earn more in six weeks of yarsagumba season than in the rest of the year combined.",
      location: "Dolpa District, Nepal",
      source: "Himalayan Journal of Sciences",
    },
    {
      title: "The 1993 Chinese Athletes Scandal",
      text: "When Chinese female distance runners broke multiple world records at the 1993 Chinese National Games, their coach Ma Junren attributed the performances to a training regimen that included Cordyceps sinensis soup. The claim launched the modern Cordyceps supplement industry. The athletes were later linked to systematic doping, casting doubt on the Cordyceps connection, but the commercial damage was done: demand for the fungus exploded.",
      location: "Beijing, China",
      source: "Sports Illustrated",
    },
  ],
  seoQueries: [
    "caterpillar fungus identification",
    "ophiocordyceps sinensis price",
    "yartsa gunbu tibetan medicine",
    "most expensive mushroom in the world",
    "cordyceps sinensis vs militaris",
    "caterpillar fungus health benefits",
    "yarsagumba Nepal harvest",
    "ophiocordyceps sinensis cultivation",
    "tibetan caterpillar fungus",
    "cordyceps sinensis supplement real or fake",
    "caterpillar fungus overharvesting",
    "ophiocordyceps sinensis habitat",
    "winter worm summer grass fungus",
    "cordyceps sinensis how to use",
  ],
  funFacts: [
    "At peak market prices, top-grade Ophiocordyceps sinensis sold for over $100,000 per kilogram, making it more expensive per gram than gold.",
    "In some Tibetan counties, yartsa gunbu collection accounts for 40-80% of total household cash income, making it the single most important economic resource for entire communities.",
    "Despite decades of research and millions of dollars in investment, no one has successfully cultivated Ophiocordyceps sinensis through its full lifecycle at commercial scale. The host-parasite relationship at high altitude is too complex to replicate.",
    "The 15th-century Tibetan physician Zurkhar Nyamnyi Dorje wrote one of the earliest known descriptions of yartsa gunbu, noting it as 'an excellent tonic' in his medical text.",
    "Climate change is warming the Tibetan Plateau faster than the global average, and researchers have documented significant declines in Ophiocordyceps sinensis populations across multiple collection sites.",
  ],
  images: [
    {
      filename: "01-field.jpg",
      alt: "Caterpillar Fungus (Ophiocordyceps sinensis) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Cordyceps_sinensis.jpg",
      author: "Nicolas Merky",
      license: "CC BY-SA 3.0 de",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/de/deed.en",
    },
    {
      filename: "02-field.jpg",
      alt: "Caterpillar Fungus (Ophiocordyceps sinensis) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Cordyceps_Sinensis.jpg",
      author: "The original uploader was Rafti Institute at English Wikipedia.",
      license: "CC BY 2.5",
      licenseUrl: "https://creativecommons.org/licenses/by/2.5",
    },
    {
      filename: "03-field.jpg",
      alt: "Caterpillar Fungus (Ophiocordyceps sinensis) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:CordycepsSinensis.jpg",
      author: "L. Shyamal",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "04-field.jpg",
      alt: "Caterpillar Fungus (Ophiocordyceps sinensis) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:VM_5591_Lanzhou_Dong_chong_xia_cao.jpg",
      author: "User:Vmenkov",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "05-field.jpg",
      alt: "Caterpillar Fungus (Ophiocordyceps sinensis) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Yarchagumba.JPG",
      author: "Phurwa Dhondup",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
  ],
};

export default species;
