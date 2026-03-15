import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "tylopilus-felleus",
  commonName: "Bitter Bolete",
  scientificName: "Tylopilus felleus",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Boletales",
    family: "Boletaceae",
    genus: "Tylopilus",
  },
  summary:
    "The mushroom that ruins dinners. The Bitter Bolete is the single most common porcini lookalike — it looks almost identical to a choice edible bolete but tastes so intensely bitter that a single piece can make an entire pot of soup inedible.",
  description:
    "If you've ever spent an afternoon carefully hunting for porcini and brought home a beautiful haul, only to discover that your risotto tastes like aspirin, you've probably met Tylopilus felleus. It's the forager's heartbreak mushroom — large, handsome, solid, and growing in exactly the same places as Boletus edulis. And it looks so similar that even experienced hunters mix them up.\n\nThe bitterness isn't subtle. It's an immediate, intense, tongue-coating bitterness that persists for minutes. One small piece mixed into a pound of porcini will contaminate the entire dish. Experienced foragers learn to do the 'tongue test' in the field — touch a tiny piece of cap flesh to the tip of your tongue. If you get that sharp bitter hit, toss it. If it tastes mild and nutty, you've got the real thing.\n\nDespite its reputation as a ruiner-of-meals, the Bitter Bolete isn't dangerous. It's not toxic in any medical sense — just extraordinarily unpleasant to eat. Some sources in Eastern Europe report that prolonged boiling and pickling can reduce the bitterness enough to make it palatable, but most Western foragers consider that more trouble than it's worth when real porcini are available.",
  identification: {
    cap: "5–15 cm across. Convex, becoming broadly convex with age. Pale tan to pinkish-brown or grayish-brown. Surface is smooth and dry, occasionally slightly tacky in wet weather. Very similar in color to young porcini.",
    gills: "No gills — this is a bolete with pores. Pore surface starts white in young specimens, then turns distinctly pink with age. This is the key field mark — porcini pores go yellow-green, never pink. Pores bruise brownish.",
    stem: "6–12 cm tall, thick and bulbous, often swollen in the middle. Cream to pale brown. Covered with a prominent dark brown net pattern (reticulation) — similar to porcini BUT the net is dark brown on a lighter background, whereas porcini reticulation is pale white on a whitish stem, especially near the cap.",
    sporePrint: "Pinkish-brown to rosy brown — notably different from the olive-brown print of true porcini.",
    odor: "Mild and pleasant when fresh — not helpful for identification.",
  },
  habitat:
    "Mycorrhizal with both conifers (hemlock, pine, spruce) and hardwoods (oak, beech). Found in the same forests and often growing within meters of true porcini. Prefers acidic, well-drained soils. Often found near stumps or along forest paths.",
  season: "Summer through autumn — June to October in most of the Northern Hemisphere. Peak in August and September.",
  range:
    "Widespread across eastern North America and throughout Europe. Also found in parts of East Asia (China, Japan, Korea). Less common in western North America. Particularly abundant in mixed conifer-hardwood forests.",
  lookAlikes: [
    {
      name: "Porcini (Boletus edulis)",
      slug: "boletus-edulis",
      image: "lookalike-edulis.jpg",
      distinction:
        "The mushroom everyone wants. White to yellow-green pores (never pink), white net pattern on the stem (not dark brown), and no bitterness — flesh tastes mild and nutty. The tongue test instantly separates the two.",
      externalUrl: "https://www.inaturalist.org/taxa/48701-Boletus-edulis",
      externalSource: "iNaturalist",
    },
    {
      name: "Pine Bolete (Boletus pinophilus)",
      slug: "boletus-pinophilus",
      image: "lookalike-pinophilus.jpg",
      distinction:
        "Darker, reddish-brown cap compared to the Bitter Bolete's paler tan. Pores are white then yellow-green (not pink). White reticulation on the stem. Flesh is not bitter — mild and slightly sweet.",
      externalUrl: "https://en.wikipedia.org/wiki/Boletus_pinophilus",
      externalSource: "Wikipedia",
    },
    {
      name: "Summer Cep (Boletus reticulatus)",
      slug: "boletus-reticulatus",
      image: "lookalike-reticulatus.jpg",
      distinction:
        "Very pale, often cracked cap surface (looks 'crazed' like old pottery). White pores aging to yellow-green. White stem reticulation. No bitterness. Fruits earlier in summer than the Bitter Bolete.",
      externalUrl: "https://www.mushroomexpert.com/boletus_reticulatus.html",
      externalSource: "MushroomExpert",
    },
  ],
  edibility: "inedible",
  edibilityNote:
    "Not toxic but intensely bitter — one of the most bitter mushrooms in existence. A single piece can ruin an entire dish. The bitterness survives cooking, drying, and most preservation methods. Some Eastern European traditions involve prolonged boiling with salt water changes to reduce bitterness for pickling, but this is rarely considered worthwhile. Always do the tongue test when collecting boletes.",
  gbifKey: 2524910,
  stories: [
    {
      title: "The Risotto Disaster of 2019",
      text: "A Reddit user on r/mycology posted a photo of a beautiful porcini risotto that had to be thrown away after one bite. Among 2 kg of foraged porcini, a single Bitter Bolete had slipped through. The bitterness was so intense that even the wine pairing tasted wrong afterward. The post received over 3,000 upvotes and dozens of sympathy comments.",
      location: "Vermont, USA",
      source: "r/mycology",
      sourceUrl: "https://www.reddit.com/r/mycology/",
    },
    {
      title: "Professional Chef's Worst Foraging Day",
      text: "Chef Alan Bergo, known for wild food cooking, has written about the Bitter Bolete as every forager's 'rite of passage.' He describes finding a perfect-looking specimen, being too excited to taste-test it in the field, and discovering the bitterness only after it was simmered into a sauce. He now does the tongue test on every single bolete he picks.",
      location: "Minnesota, USA",
      source: "Forager Chef",
    },
    {
      title: "Grandmother's Pickling Trick",
      text: "A Polish forager shared on a mycology forum that his grandmother would boil Bitter Boletes three times in salted water, discarding the water each time, then pickle them in vinegar with bay leaves and allspice. She insisted they were 'perfectly fine' after this treatment. He tried it once and reported the bitterness was reduced but still detectable.",
      location: "Podlasie, Poland",
      source: "Grzyby.pl forum",
    },
    {
      title: "The Pink Pore Lesson",
      text: "A mycology instructor in Massachusetts brings fresh Bitter Boletes to every beginner foraging walk. She lines them up next to real porcini and has students compare the pore color side by side. 'Once you see the pink versus the white, you never forget it,' she says. The tongue test is the dramatic finale — students invariably spit it out immediately.",
      location: "Cape Cod, Massachusetts, USA",
      source: "Cape Cod Mushroom Club",
    },
    {
      title: "Supermarket Confusion in China",
      text: "In Yunnan province, where wild boletes are sold in markets by the truckload, Bitter Boletes occasionally end up mixed in with batches of porcini. Experienced vendors do spot checks by nibbling raw slivers. In 2020, a Kunming newspaper ran a consumer warning after complaints about bitter-tasting dried porcini — laboratory analysis confirmed T. felleus contamination in several batches.",
      location: "Kunming, Yunnan, China",
      source: "Yunnan Daily",
    },
  ],
  seoQueries: [
    "bitter bolete vs porcini side by side",
    "bitter bolete identification",
    "mushroom that looks like porcini but bitter",
    "tylopilus felleus vs boletus edulis",
    "pink pores bolete",
    "bitter mushroom in forest",
    "how to tell porcini from bitter bolete",
    "bolete tongue test",
    "mushroom ruined my soup",
    "porcini lookalike bitter",
    "brown net on mushroom stem",
    "is bitter bolete poisonous",
    "tylopilus felleus edible",
    "boletus edulis lookalike",
    "mushroom with dark brown reticulation",
  ],
  funFacts: [
    "The species name 'felleus' comes from the Latin word for bile or gall — a reference to the intensely bitter taste that has been noted since at least the 16th century.",
    "A single Bitter Bolete mixed into a batch of true porcini will make the entire dish inedible. Experienced foragers taste-test every bolete individually before adding it to their basket.",
    "The pink pore surface is the fastest field identification — true porcini pores go from white to yellow to olive-green with age, never pink. If the pores are pink, it's not your dinner.",
    "Despite being inedible, the Bitter Bolete is not toxic. You could theoretically eat a whole one without medical consequences — you'd just have a very unpleasant meal.",
    "In parts of Eastern Europe, particularly Poland and Russia, there are traditional recipes for pickling Bitter Boletes after triple-boiling. Most modern mycologists consider this a waste of effort when edible species are available.",
  ],
  images: [
    {
      filename: "01-full-specimen.jpg",
      alt: "Bitter Bolete showing tan cap and thick stem with brown reticulation",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Gemeine_Gallenr%C3%B6hrling_Tylopilus_felleus.jpg",
      author: "Holger Krisp",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
    {
      filename: "02-habitat.jpg",
      alt: "Bitter Bolete growing in forest floor showing habitat context",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Tylopilus_felleus_060914d.jpg",
      author: "Bernd Gliwa",
      license: "CC BY-SA 2.5",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.5",
    },
    {
      filename: "03-young.jpg",
      alt: "Young Bitter Bolete specimen showing pale cap and stem",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Tylopilus_felleus_2.jpg",
      author: "rangersara",
      license: "CC0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0",
    },
    {
      filename: "04-pores-pink.jpg",
      alt: "Underside of Bitter Bolete showing distinctive pink pore surface",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Tylopilus_felleus_pores.jpg",
      author: "alexandra241",
      license: "CC0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0",
    },
    {
      filename: "05-comparison.jpg",
      alt: "Bitter Bolete stem showing dark brown net reticulation pattern",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Tylopilus_felleus_net.jpg",
      author: "phillymycobeth",
      license: "CC0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0",
    },
  ],
};

export default species;
