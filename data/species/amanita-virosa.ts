import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "amanita-virosa",
  commonName: "Destroying Angel",
  scientificName: "Amanita virosa",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Amanitaceae",
    genus: "Amanita",
  },
  summary:
    "It looks like any harmless white mushroom you'd find on a morning walk. Pure white, elegant, almost angelic. And it will kill you. The Destroying Angel is one of the deadliest mushrooms on the planet — responsible for more fatal poisonings in Europe than almost any other species.",
  description:
    "Here's what makes Amanita virosa truly terrifying: the delay. You eat it, and for the next 6 to 12 hours, you feel perfectly fine. Maybe a nice meal, no immediate stomach trouble, nothing alarming. Then the vomiting and diarrhea hit — violently. But here's the cruel trick: after a day or two of misery, you start to feel better. You think you're recovering. You're not. The amatoxins have been quietly destroying your liver the entire time, and by the time the final phase hits — jaundice, organ failure, coma — it's often too late. Without a liver transplant, the fatality rate is staggeringly high.\n\nThe Destroying Angel contains the same class of toxins as its infamous cousin the Death Cap (Amanita phalloides): amatoxins, specifically alpha-amanitin. These cyclic peptides are heat-stable (cooking doesn't help), survive drying, and are lethal in shockingly small doses — a single mushroom can contain enough toxin to kill an adult. The name 'Destroying Angel' is grimly earned. It's been used since at least the 19th century, a nod to the biblical angel of death — beautiful, white, and absolutely lethal.\n\nThe real danger is how ordinary it looks. It's an all-white mushroom with a classic cap-and-stem shape, easily confused with common edible species like the Field Mushroom (Agaricus campestris) or various white Agaricus species that end up in grocery stores. Beginner foragers who haven't learned to check for a volva at the base of the stem, or who don't take spore prints, are the most at risk. If you're picking white mushrooms in the wild and you're not 100% certain of the ID, don't eat them. It's that simple.",
  identification: {
    cap: "5-12 cm across. Pure white, smooth, and slightly sticky or slimy when wet. Starts egg-shaped when young (enclosed in a universal veil), then opens to convex and eventually flattens out with age. No warts or patches on the surface — just clean, ghostly white.",
    gills: "White, free (not attached to the stem), and closely crowded together. They stay white throughout the mushroom's life — never turning pink or brown like edible Agaricus species do.",
    stem: "10-15 cm tall, white, and slender with a delicate skirt-like ring (annulus) near the top. The base is the critical part: it sits inside a sac-like volva (cup) that's often buried in soil or leaf litter. Always dig up the base carefully — the volva is the single most important identification feature.",
    sporePrint: "White. Place the cap gill-side-down on dark paper for several hours to check.",
    odor: "Young specimens have little smell. Mature ones develop a sickly sweet, unpleasant odor sometimes described as honey-like or like old ham. If a white mushroom smells cloyingly sweet, back away.",
  },
  habitat:
    "Found in mixed and deciduous woodlands, especially near birch, oak, and beech trees. Forms mycorrhizal partnerships with tree roots. Prefers moist, shaded areas with rich humus soil. Often fruits singly or in small groups, sometimes right at the edge of paths and clearings.",
  season: "Summer through late autumn. Peak fruiting is July through October in the Northern Hemisphere, often after warm rain.",
  range:
    "Widespread across Europe, from Scandinavia to the Mediterranean. Also found in parts of Asia. In North America, Amanita virosa is debated — many experts consider the North American white destroying angels to be separate species (primarily Amanita bisporigera in eastern NA and Amanita ocreata in the west). Regardless, all are equally deadly.",
  lookAlikes: [
    {
      name: "Field Mushroom (Agaricus campestris)",
      slug: "agaricus-campestris",
      image: "lookalike-campestris.jpg",
      distinction:
        "The most dangerous confusion. Field Mushrooms have pink gills when young that turn chocolate brown with age — the Destroying Angel's gills stay white forever. Field Mushrooms also lack a volva at the base and have a pleasant mushroomy smell. Always check gill color and dig up the base.",
      externalUrl: "https://www.inaturalist.org/taxa/143563-Agaricus-campestris",
      externalSource: "iNaturalist",
    },
    {
      name: "Eastern North American Destroying Angel (Amanita bisporigera)",
      image: "lookalike-bisporigera.jpg",
      distinction:
        "Essentially the American counterpart of Amanita virosa — equally deadly. Almost identical in appearance. Distinguished mainly by microscopic spore features (bisporigera has two-spored basidia vs. four-spored). For practical purposes, treat any all-white Amanita with a volva as lethal regardless of which species it is.",
      externalUrl: "https://www.inaturalist.org/taxa/125390-Amanita-bisporigera",
      externalSource: "iNaturalist",
    },
    {
      name: "White Dapperling (Leucocoprinus leucothites)",
      image: "lookalike-leucothites.jpg",
      distinction:
        "A white mushroom that grows in grass and gardens, sometimes confused with both Field Mushrooms and Destroying Angels. Key differences: no volva at the base, gills start white but turn pinkish, and it typically grows in open grassy areas rather than woodland. Some sources list it as edible, but it's caused gastrointestinal issues and is best avoided given the risk of confusion.",
      externalUrl: "https://www.inaturalist.org/taxa/1558279-Leucocoprinus-leucothites",
      externalSource: "iNaturalist",
    },
  ],
  edibility: "deadly",
  edibilityNote:
    "Contains amatoxins (primarily alpha-amanitin) that cause irreversible liver and kidney damage. A single mushroom can contain a lethal dose. Symptoms are delayed 6-12 hours, creating a false sense of security. Cooking, drying, or freezing does NOT destroy the toxins. Fatality rate without aggressive medical treatment is 50-90%. Even with treatment, a liver transplant may be required. There is no antidote. Do not eat any all-white Amanita species under any circumstances.",
  gbifKey: 5240323,
  stories: [
    {
      title: "The Wedding Feast Tragedy in Poland",
      text: "In 2006, a Polish woman prepared a mushroom dish for a family gathering using what she believed were edible white mushrooms picked from a nearby forest. Three family members were hospitalized with acute liver failure within 48 hours. Two required emergency liver transplants. The third, an elderly man, did not survive. Toxicology confirmed amatoxin poisoning from Amanita virosa.",
      location: "Poznan, Poland",
      source: "Polish Journal of Gastroenterology",
    },
    {
      title: "A Golden Retriever's Close Call",
      text: "In 2018, a dog owner in Surrey, England, posted on a veterinary forum that her Golden Retriever had chewed on a white mushroom during a woodland walk. The vet induced vomiting within the hour and administered activated charcoal. Blood tests showed mildly elevated liver enzymes over the following days, but the dog made a full recovery — likely because so little was actually swallowed.",
      location: "Surrey, England",
      source: "Veterinary Poisons Information Service (UK)",
    },
    {
      title: "Forager Mistakes Angel for Horse Mushroom",
      text: "An experienced forager in France shared his story anonymously in a mycological society newsletter: he picked several white mushrooms he identified as Horse Mushrooms (Agaricus arvensis) during a morning walk. Something nagged at him, so he showed them to a friend that evening — who immediately spotted the volva at the base. They were Destroying Angels. He hadn't eaten any, but the mushrooms were already sliced and prepped for dinner.",
      location: "Dordogne, France",
      source: "Societe Mycologique de France",
    },
    {
      title: "Emperor Charles VI's Suspicious Death",
      text: "In 1740, Holy Roman Emperor Charles VI died after eating a dish of mushrooms. While some historians blame Amanita phalloides (Death Cap), others have suggested the culprit may have been Amanita virosa, given that the mushrooms were described as white. The delayed onset of symptoms and liver failure fit the amatoxin profile perfectly. Whether it was accidental or assassination remains debated nearly 300 years later.",
      location: "Vienna, Austria",
      source: "Duffy, 'The Killing of Kings' (2004)",
    },
    {
      title: "The Field Mushroom Mix-Up That Didn't End Well",
      text: "A retired teacher in the English Midlands regularly picked Field Mushrooms from a sheep pasture. In 2015, she ventured into the woodland edge bordering the field and picked several white mushrooms she assumed were the same species. She didn't check the gills or base. Severe vomiting began 10 hours later. She spent three weeks in hospital with acute liver injury and survived, but later described it as 'the closest I've come to dying over a free meal.'",
      location: "Warwickshire, England",
      source: "National Poisons Information Service (UK)",
    },
  ],
  seoQueries: [
    "destroying angel mushroom",
    "white mushroom that kills you",
    "amanita virosa identification",
    "deadliest mushroom in the world",
    "destroying angel vs field mushroom",
    "all white poisonous mushroom",
    "mushroom with delayed symptoms",
    "destroying angel look alikes",
    "how deadly is destroying angel",
    "white mushroom with volva",
    "amatoxin mushroom poisoning",
    "can you survive eating destroying angel",
    "white mushroom in woods poisonous",
    "destroying angel symptoms timeline",
    "most dangerous mushrooms to forage",
  ],
  funFacts: [
    "A single Destroying Angel contains enough amatoxin to kill a healthy adult. The lethal dose of alpha-amanitin is just 0.1 mg per kilogram of body weight.",
    "Amatoxins are so stable that boiling, frying, drying, and even freezing won't break them down. There is no preparation method that makes this mushroom safe.",
    "The cruelest aspect of Destroying Angel poisoning is the 'false recovery' phase — after initial violent symptoms, patients feel dramatically better for a day or two while their liver is silently being destroyed.",
    "Dogs and cats are also vulnerable. Veterinary cases spike in late summer and autumn when the mushrooms fruit in gardens and parks.",
    "The Destroying Angel has been called the 'perfect murder weapon' in crime fiction because the delayed symptom onset makes it hard to trace back to a specific meal.",
  ],
  images: [
    {
      filename: "01-white-cap.jpg",
      alt: "Destroying Angel mushroom showing pure white cap and stem emerging from woodland floor",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Amanita_virosa_UL_01.jpg",
      author: "Cephas",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "02-forest.jpg",
      alt: "Amanita virosa fruiting body in natural forest habitat showing classic white form",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Amanita_virosa-04.jpg",
      author: "Pieria",
      license: "Public domain",
      licenseUrl: "",
    },
    {
      filename: "03-mature.jpg",
      alt: "Mature Destroying Angel with flattened white cap in woodland setting",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Destroying_Angel_02.jpg",
      author: "Ben DeRoy",
      license: "Public domain",
      licenseUrl: "",
    },
    {
      filename: "05-group.jpg",
      alt: "Group of Destroying Angel mushrooms growing together in deciduous forest",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Amanita_virosa_13767279.jpg",
      author: "iNaturalist user",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
  ],
  identificationImages: {
    cap: "cap-detail.jpg",
    gills: "gills-detail.jpg",
    stem: "stem-detail.jpg",
  },
};

export default species;
