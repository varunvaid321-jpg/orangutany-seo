import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "kuehneromyces-mutabilis",
  commonName: "Sheathed Woodtuft",
  scientificName: "Kuehneromyces mutabilis",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Strophariaceae",
    genus: "Kuehneromyces",
  },
  summary:
    "A popular edible mushroom in Central Europe, growing in dense clusters on dead hardwood stumps. Prized for its nutty flavor, it is also one of the most dangerous mushrooms to forage because of its close resemblance to the deadly Galerina marginata — a confusion that has caused fatal poisonings.",
  description:
    "Kuehneromyces mutabilis produces fruit bodies in dense, overlapping clusters on decaying hardwood. The cap measures 3-8 cm in diameter, starting convex with an incurved margin before flattening with age, often retaining a broad, low umbo. Its most striking visual feature is the two-toned appearance caused by its strongly hygrophanous nature: when moist, the cap is warm cinnamon-brown to honey-brown, but as it dries it fades from the center outward to pale buff or ochre-tan, creating a distinctive dark-rimmed, light-centered look.\n\nThe stem is 5-10 cm tall and 5-10 mm thick, tough and fibrous, with a prominent membranous ring. The critical identification feature lies in the stem's contrasting zones: above the ring it is pale, smooth, and cream to yellowish; below the ring it is covered in distinctive dark brown recurved scales giving it a sheathed appearance — hence the common name. This scaly lower stem is the single most important field character separating it from the deadly Galerina marginata, whose stem below the ring is merely fibrous or silky.\n\nThis saprobic species decomposes dead hardwood, particularly favoring beech, birch, and alder stumps. It fruits prolifically in large tufts, making it an efficient foraging target in regions where it is traditionally collected — especially Germany (Stockschwämmchen), Poland, Czech Republic, and Scandinavia. The caps have a mild, nutty, slightly sweet flavor and a pleasantly chewy texture when cooked; the tough fibrous stems are discarded.\n\nThe resemblance to Galerina marginata cannot be overstated. Both species grow in clusters on dead wood, have brown hygrophanous caps with a ring on the stem, and produce rusty-brown spore prints. Multiple fatal poisonings have occurred when foragers confused the two. K. mutabilis dries from the center outward while G. marginata dries from the edge inward; microscopically K. mutabilis spores are smooth while G. marginata spores are warty. A KOH test can help: G. marginata's cap surface turns red, while K. mutabilis shows no reaction. Many mycological societies now advise against foraging this species entirely.",
  identification: {
    cap: "3-8 cm diameter. Convex becoming flat with a low umbo. Strongly hygrophanous — cinnamon-brown when wet, drying to pale buff from the center outward, creating a two-toned dark-rimmed appearance. Surface smooth, slightly greasy when moist.",
    gills:
      "Adnate to slightly decurrent. Medium-spaced, 2-4 mm broad. Pallid when young, maturing to cinnamon-brown.",
    stem: "5-10 cm tall, 5-10 mm thick. Tough, fibrous, with a prominent membranous ring. Above ring: pale cream, smooth. Below ring: covered in distinctive dark brown recurved scales (the 'sheath' — key diagnostic feature). This scaly lower stem separates it from the smooth-stemmed deadly Galerina marginata.",
    sporePrint:
      "Reddish-ochre to dark cinnamon-brown.",
    odor: "Pleasant, mild mushroom smell. Taste mild and nutty.",
  },
  habitat:
    "Saprobic on dead wood of broad-leaved trees, especially beech (Fagus), birch (Betula), and alder (Alnus). Grows on stumps, fallen logs, and buried roots. Rarely on coniferous wood. Always in dense clusters. Causes white rot in dead wood.",
  season:
    "Late spring through autumn (April to November), with peak fruiting in summer and early autumn. Can fruit year-round where conditions are mild.",
  range:
    "Widespread across the Northern Hemisphere temperate zone. Found throughout Europe from Scandinavia and Iceland south to the Mediterranean, common in Britain and Ireland. Present in Asia (Caucasus, Siberia, Japan), North America, and Australia. One of the most common wood-decomposing fungi in European deciduous forests.",
  lookAlikes: [
    {
      name: "Funeral Bell (Galerina marginata)",
      slug: "galerina-marginata",
      distinction:
        "DEADLY. Smooth or fibrous stem below the ring (no scales). Cap dries from edge inward (opposite pattern). Spores warty and larger (8-12 µm vs smooth 5.5-7.5 µm). Cap turns red with KOH. Often on conifer wood. Contains lethal amatoxins — even a single cap can be fatal.",
    },
    {
      name: "Sulphur Tuft (Hypholoma fasciculare)",
      slug: "hypholoma-fasciculare",
      distinction:
        "Bright sulfur-yellow to greenish-yellow cap and flesh (never brown/cinnamon). Gills greenish-yellow becoming dark purple-brown. Purple-brown spore print (not cinnamon-brown). Lacks a distinct ring. Extremely bitter taste. Causes gastrointestinal poisoning.",
    },
    {
      name: "Conifer Tuft (Hypholoma capnoides)",
      externalUrl: "https://www.inaturalist.org/taxa/64071-Hypholoma-capnoides",
      externalSource: "iNaturalist",
      distinction:
        "Grows almost exclusively on conifer stumps (not hardwood). Cap more uniformly ochre-yellow without the strong two-toned hygrophanous effect. Lacks a prominent ring. Purple-brown to violet-gray spore print. Edible, with mild taste (not bitter like Sulphur Tuft).",
    },
  ],
  edibility: "edible-with-caution",
  edibilityNote:
    "Edible and traditionally prized in Central European cuisine for its mild, nutty flavor. Only the caps are worth eating — stems are tough and fibrous. Traditionally pan-fried in butter or cooked into stews. However, classified as 'edible with caution' because its resemblance to the deadly Galerina marginata has caused fatal poisonings. Galerina contains amatoxins — the same compounds found in death cap mushrooms. The distinguishing features (scaly vs smooth stem, drying pattern, spore texture) can be subtle in the field. Only expert-level foragers with confirmed identification skills should collect this species. When in any doubt, do not eat it.",
  gbifKey: 2533962,
  funFacts: [
    "Its Latin name mutabilis means 'the changeable one' — a single cluster can show caps ranging from deep cinnamon to pale cream depending on which caps caught the last rain.",
    "K. mutabilis dries from the center outward (light center, dark rim), while the deadly Galerina marginata dries from the edge inward (light rim, dark center) — a mirror-image drying pattern that is one of the few field-reliable ways to tell them apart.",
    "The distinctive dark brown recurved scales covering the lower stem look like a medieval leather boot — this 'sheathed' appearance is unique among similar brown wood-decomposing mushrooms and the origin of its common name.",
    "A drop of KOH (potassium hydroxide) on the cap surface reveals the truth: Galerina marginata turns red, while Kuehneromyces mutabilis shows no color change — a simple field chemistry test that could save a forager's life.",
    "In Germany, where it is called Stockschwämmchen ('little stump mushroom'), it has been collected from beech and birch stumps for centuries and remains one of the most popular wild edible mushrooms in Central Europe.",
  ],
  seoQueries: [
    "sheathed woodtuft identification",
    "kuehneromyces mutabilis edible",
    "sheathed woodtuft vs funeral bell",
    "kuehneromyces mutabilis vs galerina marginata",
    "how to tell sheathed woodtuft from galerina",
    "is sheathed woodtuft safe to eat",
    "sheathed woodtuft look alikes",
    "kuehneromyces mutabilis poisonous look alike",
    "brown stew fungus mushroom",
    "stockschwämmchen mushroom identification",
    "sheathed woodtuft vs sulphur tuft",
    "kuehneromyces mutabilis vs hypholoma fasciculare",
    "hygrophanous mushrooms on dead wood",
    "mushrooms that grow in clusters on stumps",
    "sheathed woodtuft spore print color",
    "kuehneromyces mutabilis vs hypholoma capnoides",
    "sheathed woodtuft foraging guide",
    "can you eat sheathed woodtuft",
  ],
  stories: [
    {
      title: "Germany's Beloved Stump Mushroom",
      text: "In Germany, Kuehneromyces mutabilis is known as Stockschwämmchen ('little stump mushroom') and has been collected from beech and birch stumps for centuries. It remains one of the most popular wild edible mushrooms in German-speaking countries, traditionally cooked into thick stews and cream sauces using only the caps.",
      location: "Germany",
      source: "First Nature",
      sourceUrl: "https://www.first-nature.com/fungi/kuehneromyces-mutabilis.php",
    },
    {
      title: "Scientists Use NMR to Tell Edible Twins Apart",
      text: "In 2019, researchers at the University of Turku in Finland used proton NMR spectroscopy to metabolomically distinguish Kuehneromyces mutabilis from the similar edible Hypholoma capnoides. Analyzing 169 cap and stipe samples, they found that sugar composition provided the clearest chemical fingerprint between the two species.",
      location: "Turku, Finland",
      source: "Mycological Progress (2019)",
    },
    {
      title: "Deadly Confusion in Finnish Forests",
      text: "Between 1978 and 1995, fatal amatoxin poisonings in Finland were attributed to Galerina marginata being mistaken for the edible Kuehneromyces mutabilis. These cases contributed to documented Galerina poisoning incidents reported in the medical literature, underscoring why many mycological societies advise against foraging for the Sheathed Woodtuft.",
      location: "Finland",
      source: "Wilderness & Environmental Medicine (2018)",
    },
    {
      title: "A Genus Named for a French Mycologist",
      text: "The genus Kuehneromyces was established in 1946 by mycologists Rolf Singer and Alexander H. Smith, named in honor of Robert Kühner (1903-1996), the influential French mycologist at the University of Lyon known for his foundational work on agaric classification.",
      location: "Lyon, France",
      source: "Singer & Smith (1946)",
    },
    {
      title: "Greenhouse Cultivation Research",
      text: "Researchers have conducted greenhouse cultivation experiments with Kuehneromyces mutabilis, investigating how air temperature and substrate moisture influence growth and yield. The studies showed the species can be commercially cultivated on sterilized hardwood substrates including birch logs and beech sawdust blocks, though fruiting takes 6-18 months to establish.",
      location: "Europe",
      source: "ResearchGate",
    },
  ],
  images: [
    {
      filename: "01-field.jpg",
      alt: "Sheathed Woodtuft (Kuehneromyces mutabilis) cluster growing on mossy wood",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Kuehneromyces_mutabilis_Trentino_01.jpg",
      author: "Wikimedia contributor",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "02-field.jpg",
      alt: "Sheathed Woodtuft (Kuehneromyces mutabilis) dense cluster on stump",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Gemeine_Stockschw%C3%A4mmchen_Kuehneromyces_mutabilis.jpg",
      author: "Wikimedia contributor",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
    {
      filename: "03-field.jpg",
      alt: "Sheathed Woodtuft (Kuehneromyces mutabilis) fruiting on birch stump in forest",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Kuehneromyces_mutabilis_LC0075.jpg",
      author: "Wikimedia contributor",
      license: "CC BY-SA 3.0 DE",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/de",
    },
    {
      filename: "04-field.jpg",
      alt: "Sheathed Woodtuft (Kuehneromyces mutabilis) underside showing gill detail and scaly stem",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Kuehneromyces_mutabilis_98279740.jpg",
      author: "Wikimedia contributor",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
  ],
};

export default species;
