import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "paxillus-involutus",
  commonName: "Brown Rollrim",
  scientificName: "Paxillus involutus",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Boletales",
    family: "Paxillaceae",
    genus: "Paxillus",
  },
  summary:
    "The Brown Rollrim is a common woodland mushroom that was eaten for centuries in Eastern Europe before science revealed it triggers a potentially fatal autoimmune reaction. You might eat it ten times without trouble; the eleventh could kill you.",
  description:
    "Paxillus involutus is mycology's most insidious time bomb. Unlike most toxic mushrooms that make you sick immediately, the Brown Rollrim works through a cumulative immunological mechanism. Each time you eat it, your body produces antibodies against an antigen in the mushroom. At some unpredictable point, a subsequent meal triggers a massive immune response that destroys your own red blood cells. The result is acute hemolytic anemia: your blood falls apart, your organs fail, and without emergency treatment, you die.\n\nThe most famous victim was German mycologist Julius Schaffer, who had eaten Brown Rollrims for years and publicly declared them safe. In 1944, he ate a meal of them and went into anaphylactic shock. He died shortly after. The irony of a mushroom expert being killed by a species he championed as edible made the case legendary in mycological circles.\n\nThe Brown Rollrim is extremely common across Europe and North America, growing in birch woods, parks, and gardens from summer through autumn. It is a chunky, brown, funnel-shaped mushroom with a distinctive inrolled cap margin that gives it its common name. The gills are decurrent, crowded, and bruise brown when pressed. Despite decades of warnings, it continues to be eaten in parts of Eastern Europe and Russia, where it is traditionally pickled or preserved after thorough boiling.",
  identification: {
    cap: "5-15 cm across. Convex at first, becoming funnel-shaped with a strongly inrolled (rolled-under) margin. Olive-brown to yellow-brown, darkening with age. Surface smooth, slightly velvety when dry, slimy when wet.",
    gills: "Decurrent (running down the stem), crowded, easily peeled away from the cap flesh. Yellowish-brown, bruising dark brown when pressed or damaged. This bruising reaction is a key identification feature.",
    stem: "3-8 cm tall, stout, central or slightly off-center. Same color as the cap or slightly paler. Solid and firm. No ring.",
    sporePrint: "Yellow-brown to sienna brown.",
    odor: "Mildly mushroomy or slightly sour. Not strongly distinctive.",
  },
  habitat:
    "Mycorrhizal with birch trees primarily, also with other broadleaf and coniferous trees. Extremely common in birch woodlands, parks, gardens, and along roadsides wherever birch grows. Also found in boggy areas and damp woodland edges.",
  season: "July through November. Abundant and often one of the most commonly encountered mushrooms in birch-dominated habitats.",
  range:
    "Widespread across Europe, North America, and temperate Asia. One of the most common woodland mushrooms in the Northern Hemisphere. Introduced to Australia, New Zealand, and South America with planted birch trees.",
  lookAlikes: [
    {
      name: "Velvet Rollrim (Tapinella atrotomentosa)",
      distinction:
        "Grows on dead conifer wood (not from soil), has a dark brown to black velvety stem base, and is significantly larger and more robust. Also inedible but causes different issues.",
      externalUrl: "https://www.inaturalist.org/taxa/154450-Tapinella-atrotomentosa",
      externalSource: "iNaturalist",
    },
    {
      name: "Ugly Milkcap (Lactarius turpis)",
      distinction:
        "Similar dark brown funnel shape, but exudes white milk when gills are cut or broken. Cap surface is distinctly slimy and olive-green to dark brown. Also associated with birch trees.",
      externalUrl: "https://www.inaturalist.org/taxa/382886-Lactarius-turpis",
      externalSource: "iNaturalist",
    },
    {
      name: "Brown Funnel Cap (Infundibulicybe gibba)",
      distinction:
        "Much thinner-fleshed and smaller, with a pale tan to buff cap and white gills. Does not bruise brown. Cap margin is not inrolled in the same way. Generally considered edible.",
      externalUrl: "https://www.inaturalist.org/taxa/921916-Infundibulicybe-gibba",
      externalSource: "iNaturalist",
    },
  ],
  edibility: "toxic",
  edibilityNote:
    "Causes immune-mediated hemolytic anemia through cumulative sensitization. Each consumption event builds antibodies. At an unpredictable point, a subsequent meal triggers massive red blood cell destruction, leading to acute hemolytic anemia, kidney failure, and potentially death. The reaction is unpredictable: some people eat it for years without visible harm before a sudden, catastrophic episode. Cooking does not eliminate the risk. Classified as poisonous by all major mycological authorities.",
  gbifKey: 5240002,
  stories: [
    {
      title: "The Mycologist Who Championed Then Died From It",
      text: "German mycologist Julius Schaffer ate Brown Rollrims regularly and considered them a good edible. In 1944, after another meal of the mushrooms, he developed acute hemolytic anemia and died. His case became one of the most cited examples of cumulative mushroom toxicity in scientific literature.",
      location: "Germany",
    },
    {
      title: "Russian Grandmother's Lifelong Tradition Ends in Hospital",
      text: "In 2015, a 72-year-old woman in Pskov, Russia, was hospitalized with severe anemia after eating pickled Brown Rollrims she had preserved herself, as she had done every autumn for over 40 years. Doctors attributed the crisis to cumulative sensitization. She survived but was told never to eat the species again.",
      location: "Pskov, Russia",
    },
    {
      title: "Polish Warning Campaign Falls on Deaf Ears",
      text: "In 2010, Poland's Chief Sanitary Inspector issued a formal warning against eating Paxillus involutus, noting that it was still widely consumed in rural areas despite being classified as toxic. Many older foragers dismissed the warning, saying their grandparents had eaten it without problems.",
      location: "Warsaw, Poland",
    },
    {
      title: "Finnish Blood Bank Discovery",
      text: "In 2008, researchers at the Finnish Red Cross Blood Service noticed that several blood donors who were regular mushroom foragers had unusually high levels of anti-Paxillus antibodies. The discovery led to a study published in Clinical Toxicology linking frequent Brown Rollrim consumption to subclinical hemolysis.",
      location: "Helsinki, Finland",
    },
  ],
  seoQueries: [
    "brown rollrim mushroom",
    "paxillus involutus poisonous",
    "brown rollrim identification",
    "paxillus involutus toxicity",
    "brown rollrim hemolytic anemia",
    "is brown rollrim safe to eat",
    "paxillus involutus look alikes",
    "brown rollrim mushroom symptoms",
    "mushroom that causes anemia",
    "paxillus involutus autoimmune",
    "brown rollrim birch trees",
    "julius schaffer mushroom death",
    "how to identify brown rollrim",
  ],
  funFacts: [
    "Julius Schaffer's death from a mushroom he publicly endorsed as safe is considered one of the most ironic deaths in the history of mycology.",
    "The Brown Rollrim is still widely eaten in parts of Russia and Eastern Europe, where it is boiled multiple times and then pickled. This processing may reduce some toxins but does not eliminate the cumulative sensitization risk.",
    "The immunological mechanism of Paxillus involutus poisoning was not fully understood until the 1980s, when researchers demonstrated that repeated exposure builds IgG antibodies against a specific mushroom antigen.",
    "Brown Rollrims are so common in birch forests that in some areas of northern Europe, they are the single most frequently encountered mushroom species during autumn.",
  ],
  images: [
    {
      filename: "01-field.jpg",
      alt: "Brown Rollrim (Paxillus involutus) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Kahler-Krempling-Paxillus-involutus.jpg",
      author: "Holger Krisp",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
    {
      filename: "02-field.jpg",
      alt: "Brown Rollrim (Paxillus involutus) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Navadne_podvihanke_(Paxillus_involutus).jpg",
      author: "Petar Milošević",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "03-field.jpg",
      alt: "Brown Rollrim (Paxillus involutus) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Paxillus_involutus_112885.jpg",
      author: "Steve Rogers (srogers)",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "05-field.jpg",
      alt: "Brown Rollrim (Paxillus involutus) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Paxillus_involutus_2025_G1.jpg",
      author: "George Chernilevsky",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
  ],
};

export default species;
