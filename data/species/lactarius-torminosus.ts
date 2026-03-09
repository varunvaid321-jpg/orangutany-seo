import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "lactarius-torminosus",
  commonName: "Woolly Milk Cap",
  scientificName: "Lactarius torminosus",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Russulales",
    family: "Russulaceae",
    genus: "Lactarius",
  },
  summary:
    "A beautiful pink mushroom with a shaggy, woolly cap margin that will absolutely wreck your stomach if you eat it raw — but that Finns and Russians have been safely eating for centuries after prolonged salt-brining. The Woolly Milk Cap is one of the most striking members of the milk cap family, oozing white acrid latex when cut.",
  description:
    "Lactarius torminosus is one of those mushrooms that immediately catches your eye. The cap is a gorgeous salmon-pink to pale orange, decorated with darker concentric zones, and the margin — here's the signature feature — is covered in a dense fringe of woolly, shaggy hairs that curl inward. It looks like someone took a perfectly normal mushroom cap and gave it a fur coat around the edges. Break the flesh or cut the gills and white latex oozes out immediately, and if you're foolish enough to taste it, you'll discover it's searingly acrid — a burning, peppery sensation that doesn't quit.\n\nEating this mushroom raw or insufficiently cooked will land you in misery. The species name 'torminosus' literally means 'causing colic,' and that's putting it mildly — raw consumption causes violent nausea, vomiting, and diarrhea that can last for days. And yet, in Finland and Russia, Woolly Milk Cap is one of the most popular wild mushrooms. The secret is salt-brining: the mushrooms are soaked in cold salted water for days, with the water changed repeatedly, then packed in salt and fermented for weeks. This process breaks down the acrid compounds completely, producing a tangy, firm-textured pickle that Finns eat with boiled potatoes and sour cream. In Finland, they're called 'karvarousku' and are sold in markets during autumn.\n\nLactarius torminosus is exclusively mycorrhizal with birch (Betula). If you're in a birch forest in late summer or autumn, especially in northern latitudes, you'll find these by the dozen. They're extremely common across Scandinavia, Russia, the UK, and boreal North America.",
  identification: {
    cap: "4–12 cm across, convex becoming depressed in the center with age (often funnel-shaped). Color is salmon-pink to pale orange with darker concentric zones. The margin is distinctively shaggy with dense, woolly, inrolled hairs — this is the key identification feature. Surface is slightly sticky when wet.",
    gills:
      "Crowded, slightly decurrent (running down the stem). Pale pink to cream. Exude copious white latex when damaged — the latex does not change color and tastes extremely acrid and peppery.",
    stem: "3–7 cm tall, 1–2.5 cm thick, cylindrical, often with shallow pits (scrobiculate). Pale pink, paler than the cap. Hollow when mature. Smooth to slightly downy surface.",
    sporePrint: "Pale cream to pale yellow.",
    odor: "Faintly fruity, sometimes slightly acrid. Not strongly distinctive until the latex is tasted.",
  },
  habitat:
    "Exclusively mycorrhizal with birch trees (Betula species). Found in birch forests, mixed forests with birch, birch-lined paths, parks, and gardens where birch grows. Prefers moist, acidic soils. Often fruits in troops or scattered groups, sometimes in large numbers.",
  season:
    "Late summer through autumn, typically August through October. Peak fruiting in September across most of its range. One of the earlier Lactarius species to appear in autumn.",
  range:
    "Very common across the Northern Hemisphere wherever birch grows. Abundant throughout Scandinavia, the UK, Northern and Central Europe, Russia, and across boreal and temperate North America. Particularly common in Scotland, Finland, Sweden, and the birch forests of Siberia.",
  lookAlikes: [
    {
      name: "Saffron Milk Cap (Lactarius deliciosus)",
      slug: "lactarius-deliciosus",
      image: "lookalike-deliciosus.jpg",
      distinction:
        "Orange rather than pink, and critically, exudes bright orange (not white) latex that stains green when exposed to air. The cap lacks the distinctive woolly/shaggy margin of L. torminosus. Mycorrhizal with pine, not birch. An excellent edible that needs no special preparation — unlike the toxic Woolly Milk Cap.",
      externalUrl:
        "https://www.inaturalist.org/taxa/155197-Lactarius-deliciosus",
      externalSource: "iNaturalist",
    },
    {
      name: "Downy Milk Cap (Lactarius pubescens)",
      image: "lookalike-pubescens.jpg",
      distinction:
        "Very similar to L. torminosus and also mycorrhizal with birch, but paler — cap is whitish to pale cream with minimal pink tones. The woolly margin is less pronounced and less shaggy. Also exudes white acrid latex. Some mycologists consider it a pale variety rather than a fully separate species. Equally toxic raw, same salt-brining treatment required.",
      externalUrl:
        "https://en.wikipedia.org/wiki/Lactarius_pubescens",
      externalSource: "Wikipedia",
    },
    {
      name: "Blushing Milk Cap (Lactarius controversus)",
      image: "lookalike-controversus.jpg",
      distinction:
        "Much larger (cap up to 25 cm), with a whitish cap that develops pink-red blotches. Lacks the woolly/shaggy margin. Found under poplar and willow, not birch. White acrid latex. The size, host tree association, and lack of woolly hairs easily distinguish it from the Woolly Milk Cap.",
      externalUrl:
        "https://en.wikipedia.org/wiki/Lactarius_controversus",
      externalSource: "Wikipedia",
    },
  ],
  edibility: "toxic",
  edibilityNote:
    "Toxic when raw or insufficiently cooked — causes severe gastrointestinal distress including nausea, vomiting, and diarrhea lasting up to several days. The acrid white latex contains irritant sesquiterpenes. HOWEVER, in Finland and Russia, this mushroom has been safely eaten for centuries after prolonged preparation: soaking in cold salted water for 3–5 days (changing water daily), then packing in salt for 4–6 weeks. This salt-brining process destroys the toxic compounds. Do NOT attempt to eat this mushroom without extensive knowledge of the traditional preparation method.",
  gbifKey: 8122710,
  stories: [
    {
      title: "Finland's $30 Million Milk Cap Industry",
      text: "In Finland, salt-brined Lactarius torminosus (karvarousku) is a legitimate commercial product sold in supermarkets and farmers' markets. The Finnish Natural Resources Institute estimated the annual wild mushroom harvest at over 10 million kg in peak years, with milk caps (including L. torminosus and L. trivialis) making up a significant portion. Finnish grandmothers guard their brining recipes as fiercely as Italian nonnas guard their pasta sauce.",
      location: "Finland",
      source: "Finnish Natural Resources Institute (Luke)",
    },
    {
      title: "The Russian Solyonye Griby Tradition",
      text: "In Russian cuisine, salt-pickled mushrooms (solyonye griby) are a cornerstone of the winter table, served alongside vodka as a traditional zakuska (appetizer). Lactarius torminosus — called volnushka in Russian — is one of the most prized species for this preparation. Entire families head to the birch forests in August and September, filling baskets specifically for the annual salting ritual that will stock the cellar through the long winter.",
      location: "Russia",
      source: "Russian culinary ethnography",
    },
    {
      title: "The Hospital Cases That Changed the Guidebooks",
      text: "In the 1970s, a series of poisoning cases in Germany and the Netherlands — where recent immigrants from non-mushrooming cultures ate raw Woolly Milk Caps after misidentifying them — led to a public health campaign emphasizing that 'edible in one culture' doesn't mean 'safe without preparation.' Several European field guides were updated to more prominently warn about the distinction between raw toxicity and post-preparation edibility.",
      location: "Germany and the Netherlands",
      source: "European poison control records",
    },
    {
      title: "A Scottish Birch Forest Bounty",
      text: "The Caledonian birch forests of the Scottish Highlands are prime Woolly Milk Cap territory. During a 2018 foray organized by the Scottish Wild Mushroom Forum, participants found over 200 specimens in a single morning in a birch wood near Aviemore. Despite their abundance, very few Scottish foragers collect them — the salt-brining tradition never took hold in the UK the way it did in Scandinavia and Russia.",
      location: "Aviemore, Scottish Highlands",
      source: "Scottish Wild Mushroom Forum",
    },
    {
      title: "The Sesquiterpene Research Breakthrough",
      text: "In 2015, researchers at the University of Bayreuth in Germany identified the specific sesquiterpene compounds in Lactarius torminosus latex responsible for its acrid taste and toxic effects. The study showed these compounds break down through hydrolysis during prolonged salt exposure — finally providing the biochemical explanation for why the centuries-old Finnish and Russian brining methods actually work.",
      location: "Bayreuth, Germany",
      source: "University of Bayreuth",
    },
  ],
  seoQueries: [
    "woolly milk cap identification",
    "lactarius torminosus edible",
    "pink mushroom shaggy cap birch",
    "woolly milk cap poisonous",
    "lactarius torminosus preparation",
    "how to salt brine milk caps",
    "pink milk cap mushroom identification",
    "woolly milk cap vs saffron milk cap",
    "lactarius torminosus toxic",
    "finnish salted mushrooms recipe",
    "white latex mushroom pink cap",
    "woolly milk cap look alikes",
    "lactarius torminosus habitat birch",
    "milk cap mushroom identification guide",
    "is woolly milk cap safe to eat",
  ],
  funFacts: [
    "The species name 'torminosus' comes from the Latin word for 'colic' — a direct reference to the severe stomach cramps you'll get if you eat it raw.",
    "In Finland, salt-brined Woolly Milk Caps are so popular that they're sold commercially in supermarkets. Finns have been safely eating this 'toxic' mushroom for centuries using a multi-day brining process.",
    "Lactarius torminosus is exclusively mycorrhizal with birch trees — you will never find it growing without a birch nearby. This tight partnership means the mushroom's range perfectly mirrors the range of birch forests.",
    "The woolly, shaggy margin of the cap is so distinctive that experienced foragers can identify this species from several meters away, even before seeing the gills or latex.",
    "Russian foragers call it 'volnushka' and consider it one of the best mushrooms for salt-pickling — served as zakuska (appetizer) with vodka, it's a staple of the Russian winter table that predates written records.",
  ],
  images: [
    {
      filename: "01-woolly-cap.jpg",
      alt: "Lactarius torminosus Woolly Milk Cap showing distinctive concentric pink zones and shaggy woolly cap margin",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Lactarius_torminosus_-_Flickr_-_S._rae.jpg",
      author: "S. Rae",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0",
    },
    {
      filename: "02-group.jpg",
      alt: "Full Woolly Milk Cap specimen showing pink concentric zones on cap and stem in natural habitat",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Lactarius_torminosus_-_Flickr_-_S._Rae_(1).jpg",
      author: "S. Rae",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0",
    },
    {
      filename: "03-gills.jpg",
      alt: "Pair of Lactarius torminosus on moss showing woolly cap margins and concentric pink zones from above",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Lactarius_torminosus_G2.jpg",
      author: "George Chernilevsky",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "04-habitat.jpg",
      alt: "Woolly milk cap mushroom growing among moss and birch roots in natural forest habitat",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Lactarius_torminosus_(Schaeff.)_Pers._541813.jpg",
      author: "Wikimedia Commons contributor",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "05-young.jpg",
      alt: "Young Woolly Milk Cap with deep funnel shape showing woolly inrolled margin and pink tones on moss",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Lactarius_torminosus_-_Flickr_-_S._Rae_(2).jpg",
      author: "S. Rae",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0",
    },
  ],
  identificationImages: {
    cap: "cap-detail.jpg",
    gills: "gills-detail.jpg",
    stem: "stem-detail.jpg",
  },
};

export default species;
