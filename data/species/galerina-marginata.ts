import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "galerina-marginata",
  commonName: "Funeral Bell",
  scientificName: "Galerina marginata",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Hymenogastraceae",
    genus: "Galerina",
  },
  summary:
    "Don't let the size fool you. Galerina marginata is a tiny, innocent-looking brown mushroom that grows on rotting wood — and it contains the exact same amatoxins that make the Death Cap one of the deadliest organisms on Earth. It's responsible for multiple documented fatalities and is regularly confused with edible species.",
  description:
    "If the Death Cap is the notorious serial killer of the mushroom world, the Funeral Bell is the quiet one nobody suspects. It's small, brown, and utterly unremarkable-looking — the kind of mushroom you'd walk past a thousand times without a second glance. But gram for gram, it's just as lethal as Amanita phalloides. The amatoxins it produces destroy your liver and kidneys over the course of several agonizing days, and by the time symptoms appear (6-12 hours after eating), the damage is often irreversible.\n\nWhat makes Galerina marginata especially dangerous is what it looks like. It grows in clusters on decaying wood — exactly like the popular edible Sheathed Woodtuft (Kuehneromyces mutabilis), a favorite of European foragers. It also bears an uncomfortable resemblance to Honey Mushrooms and, critically, to certain Psilocybe species that grow on wood chips. Every few years, someone looking for a psychedelic trip ends up in the ICU instead. The key difference is a faint ring on the stem and a rusty brown spore print, but these details are easy to miss in the field.\n\nIt fruits year-round in mild climates, peaking in autumn, and is found on every continent except Antarctica. It's one of the most widespread deadly mushrooms on the planet, and its ordinariness is exactly what makes it so dangerous. Mycologists have a saying: \"When in doubt, throw it out.\" Galerina marginata is the reason that saying exists.",
  identification: {
    cap: "1.5-5 cm across. Convex when young, flattening with age. Honey-brown to tawny when moist, drying to a pale tan from the center outward (hygrophanous). Smooth, slightly sticky when wet. Margin often shows faint striations when moist.",
    gills: "Attached to slightly decurrent. Crowded, yellowish-brown becoming rusty brown as spores mature. Edges may appear slightly lighter.",
    stem: "3-8 cm tall, 3-8 mm thick. Pale above the ring, darker brown below. Has a fragile, membranous ring (annulus) that often darkens with deposited spores. Base may have whitish mycelial threads.",
    sporePrint: "Rusty brown to orange-brown — a critical identification feature that separates it from Psilocybe species (which have purple-brown to black spore prints).",
    odor: "Mealy or flour-like when fresh. Some describe it as faintly earthy.",
  },
  habitat:
    "Strictly saprotrophic — feeds on dead and decaying wood. Found on logs, stumps, buried roots, and wood chip mulch. Prefers conifer wood but also appears on hardwoods. Common in forests, parks, gardens, and landscaped areas with wood chip beds.",
  season:
    "Fruits from spring through late autumn, with peak fruiting in September-November in temperate regions. Can appear year-round in mild, wet climates like the Pacific Northwest.",
  range:
    "Cosmopolitan — found across North America, Europe, Asia, Australia, and parts of South America. Extremely common in the Pacific Northwest of North America and throughout Northern Europe. Essentially wherever there's rotting wood and enough moisture.",
  lookAlikes: [
    {
      name: "Sheathed Woodtuft (Kuehneromyces mutabilis)",
      slug: "kuehneromyces-mutabilis",
      distinction:
        "Popular edible in Europe. Grows in similar clusters on wood. Key differences: Kuehneromyces has a scaly stem below the ring (Galerina's stem is smooth or silky), and the cap dries from the center in a distinctive two-tone pattern. However, the two can grow side by side on the same log — expert-level identification only.",
    },
    {
      name: "Honey Mushroom (Armillaria mellea)",
      image: "lookalike-armillaria.jpg",
      distinction:
        "Edible when cooked. Also grows in clusters on wood, but Honey Mushrooms are significantly larger, have a thick persistent ring, white spore print (not rusty brown), and often have fine dark scales on the cap center. If the spore print is white, it's not Galerina.",
      externalUrl: "https://en.wikipedia.org/wiki/Armillaria_mellea",
      externalSource: "Wikipedia",
    },
    {
      name: "Wavy Cap (Psilocybe cyanescens)",
      image: "lookalike-psilocybe.jpg",
      distinction:
        "Psychoactive, grows on wood chips. This confusion has caused fatalities. Psilocybe cyanescens has a wavy cap margin, bruises blue when handled, and produces a dark purple-brown to black spore print. Galerina never bruises blue and has a rusty brown spore print. Always check both features before consuming any wood-chip mushroom.",
      externalUrl:
        "https://en.wikipedia.org/wiki/Psilocybe_cyanescens",
      externalSource: "Wikipedia",
    },
  ],
  edibility: "deadly",
  edibilityNote:
    "Contains amatoxins (primarily alpha-amanitin) — the same liver-destroying compounds found in the Death Cap and Destroying Angel. As few as 10-20 small caps can deliver a fatal dose. Symptoms are delayed 6-12 hours: initial GI distress, a deceptive period of improvement, then rapid liver and kidney failure over 3-7 days. Mortality without aggressive treatment (including potential liver transplant) is high. There is no antidote. Do not eat this mushroom under any circumstances.",
  gbifKey: 8118872,
  stories: [
    {
      title: "A Fatal Mix-Up in Northern California",
      text: "In 2012, a woman in Santa Cruz County died after eating Galerina marginata she had collected from a local park, believing them to be edible Honey Mushrooms. She was hospitalized with liver failure three days after the meal and died despite emergency treatment. The case was documented by the California Poison Control System.",
      location: "Santa Cruz County, California, USA",
      source: "California Poison Control System",
    },
    {
      title: "Magic Mushroom Hunters Get the Wrong Species",
      text: "Poison control centers in the Pacific Northwest have documented multiple cases of people seeking Psilocybe cyanescens on wood chips who accidentally collected Galerina marginata growing alongside them. A 2010 case in Vancouver involved two young men hospitalized with liver damage after brewing a 'mushroom tea' from a mixed collection that included Galerina.",
      location: "Vancouver, BC, Canada",
      source: "BC Drug and Poison Information Centre",
    },
    {
      title: "A Dog's Close Call in the Garden",
      text: "A Reddit user in Portland posted in 2021 that their terrier ate Galerina marginata growing from wood chip mulch in their backyard. The dog began vomiting 8 hours later. Emergency vet treatment with IV fluids and liver protectants saved the dog after a five-day stay, but the vet bill topped $6,000.",
      location: "Portland, Oregon, USA",
      source: "r/mycology",
      sourceUrl: "https://www.reddit.com/r/mycology/",
    },
    {
      title: "Paul Stamets' Warning on Galerina",
      text: "Renowned mycologist Paul Stamets has repeatedly warned about Galerina marginata in talks and in his book 'Mycelium Running,' calling it 'the most dangerous mushroom that most people have never heard of.' He emphasizes that its resemblance to Psilocybe species makes it a particular threat to inexperienced foragers.",
      location: "Olympia, Washington, USA",
      source: "Stamets, 'Mycelium Running' (2005)",
    },
  ],
  seoQueries: [
    "galerina marginata identification",
    "funeral bell mushroom poisonous",
    "deadly galerina vs honey mushroom",
    "small brown mushroom on wood poisonous",
    "galerina marginata vs psilocybe",
    "mushroom that looks like magic mushroom but deadly",
    "brown mushroom growing on logs",
    "galerina marginata symptoms",
    "funeral bell mushroom look alikes",
    "amatoxin mushrooms list",
    "deadly mushroom on wood chips",
    "how to identify galerina marginata",
    "galerina marginata spore print",
    "can galerina marginata kill you",
    "deadly galerina distribution",
  ],
  funFacts: [
    "Galerina marginata contains the same amatoxins as the Death Cap (Amanita phalloides), despite being in a completely different genus — a striking case of convergent biochemistry.",
    "A single Galerina marginata cap can contain enough alpha-amanitin to cause serious liver damage in a child. It takes roughly 10-20 caps to deliver a lethal dose to an adult.",
    "The species was previously split into several separate species (G. autumnalis, G. unicolor, G. venenata) before DNA analysis revealed they were all the same fungus wearing different hats.",
    "Amatoxins are heat-stable — cooking Galerina marginata does absolutely nothing to reduce its toxicity. Boiling, frying, drying, or freezing won't save you.",
    "The 'funeral bell' common name isn't poetic license. It was given because the bell-shaped caps of young specimens are, quite literally, the last bell some foragers ever hear.",
  ],
  images: [
    {
      filename: "01-field.jpg",
      alt: "Funeral Bell (Galerina marginata) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:GalerinaMarginata.jpg",
      author: "Saschotter",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "02-field.jpg",
      alt: "Funeral Bell (Galerina marginata) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Galerina_marginata_61108.jpg",
      author: "This image was created by user Dan Molter (shroomydan) at Mushroom Observer, a source for mycological images.You can con",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "03-field.jpg",
      alt: "Funeral Bell (Galerina marginata) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Galerina_marginata_63678.jpg",
      author: "This image was created by user Dan Molter (shroomydan) at Mushroom Observer, a source for mycological images.You can con",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "04-field.jpg",
      alt: "Funeral Bell (Galerina marginata) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Galerina_marginata_Point_Reyes.jpg",
      author: "Alan Rockefeller",
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
