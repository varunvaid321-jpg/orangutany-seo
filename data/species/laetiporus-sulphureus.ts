import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "laetiporus-sulphureus",
  commonName: "Chicken of the Woods",
  scientificName: "Laetiporus sulphureus",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Polyporales",
    family: "Fomitopsidaceae",
    genus: "Laetiporus",
  },
  summary:
    "This one literally tastes like chicken — but some people get sick from it, especially if it's growing on the wrong tree. Stick to specimens from oak, cook it well, and try a small piece first. Get that right, and it's one of the most beginner-friendly wild edibles out there.",
  description:
    "If you're new to foraging and want a confidence-boosting first find, this is it. Laetiporus sulphureus grows in big, impossible-to-miss shelves on the sides of hardwood trees — usually oaks, but also cherry, beech, and willow. The color screams at you: vivid orange on top fading to sulfur yellow at the edges and underneath. Young specimens are soft, moist, and almost rubbery. Old ones get chalky and crumbly. You want the young ones.\n\nThe taste and texture genuinely resemble chicken breast when sliced and sauteed. Some people bread and fry it, others shred it for tacos or stir-fries. A handful of restaurants have even served it as a \"vegan chicken\" substitute (technically accurate — it's a fungus, not a plant, but close enough). The flavor is mild and takes on whatever seasoning you throw at it.\n\nHere's the catch: a small percentage of people get gastrointestinal reactions — nausea, cramps, the works. This seems to happen more often with specimens growing on eucalyptus, conifers, or black locust. Some mycologists consider Chicken of the Woods from conifers to be a separate species entirely. The safe bet is to stick to specimens from oaks, try a small amount your first time, and cook it thoroughly. Raw Chicken of the Woods is a bad idea for everyone.",
  identification: {
    cap: "No traditional cap — grows as overlapping shelf-like brackets, 5–60 cm across. Bright orange to salmon on top with a suede-like texture when young. Edges are rounded and wavy, often sulfur yellow. Fades to pale whitish-orange with age and becomes brittle.",
    gills: "No gills. The underside has tiny pores — small round holes that release spores. Pore surface is bright sulfur yellow when fresh, fading to white as it ages.",
    stem: "None. Grows directly from tree trunks, stumps, or buried roots as a sessile bracket fungus. Sometimes a very short stubby attachment point, but never a true stem.",
    sporePrint: "White — though collecting a spore print from a bracket fungus is tricky and rarely necessary for ID.",
  },
  habitat:
    "Grows on living and dead hardwood trees — especially oak, but also cherry, beech, willow, and occasionally conifers or eucalyptus. Found on standing trunks, stumps, and fallen logs. It's a parasite and wood decomposer, causing brown rot in the heartwood.",
  season: "Late spring through autumn. Peak season is May–October in temperate regions. Often appears after rain.",
  range:
    "Widespread across North America, Europe, and parts of Asia. One of the most commonly encountered bracket fungi in the Northern Hemisphere. Particularly abundant in eastern North America and throughout western Europe.",
  lookAlikes: [
    {
      name: "White-pored Chicken of the Woods (Laetiporus cincinnatus)",
      slug: "laetiporus-cincinnatus",
      image: "lookalike-cincinnatus.jpg",
      distinction:
        "Very closely related and also edible. The key difference: white to pale salmon pore surface instead of yellow. Tends to grow at the base of trees or from buried roots rather than high up on trunks. Some foragers consider it even tastier than the standard Chicken of the Woods.",
      externalUrl: "https://www.inaturalist.org/taxa/487301-Laetiporus-cincinnatus",
      externalSource: "iNaturalist",
    },
    {
      name: "Jack O'Lantern (Omphalotus olearius)",
      slug: "omphalotus-olearius",
      image: "lookalike-jack-o-lantern.jpg",
      distinction:
        "Orange and grows on wood, so beginners sometimes confuse them — but Jack O'Lanterns have true gills, a central stem, and a classic mushroom shape. They grow in clusters from buried wood. Poisonous (severe GI distress). If it has gills and a stem, it's not Chicken of the Woods.",
      externalUrl: "https://en.wikipedia.org/wiki/Omphalotus_olearius",
      externalSource: "Wikipedia",
    },
    {
      name: "Velvet-top Fungus (Phaeolus schweinitzii)",
      slug: "phaeolus-schweinitzii",
      image: "lookalike-velvet-top.jpg",
      distinction:
        "Another bracket fungus found on conifers. Dark brown to greenish-brown with a velvety surface — much darker than Chicken of the Woods. Grows at the base of trees. Not considered edible. The color difference is obvious once you've seen both side by side.",
      externalUrl: "https://www.inaturalist.org/taxa/118084-Phaeolus-schweinitzii",
      externalSource: "iNaturalist",
    },
  ],
  edibility: "edible-with-caution",
  edibilityNote:
    "Generally considered a choice edible when young, fresh, and collected from hardwoods (especially oak). Cook thoroughly — never eat raw. A small percentage of people experience nausea, vomiting, or other GI symptoms. Risk increases with specimens from eucalyptus, conifers, or black locust trees. Try a small portion your first time and wait 24 hours before eating more.",
  gbifKey: 9072021,
  stories: [
    {
      title: "The 20-Pound Monster in Virginia",
      text: "A forager in Shenandoah Valley found a single Chicken of the Woods fruiting that weighed over 20 pounds on a dying oak tree in 2019. She filled two grocery bags and spent the weekend blanching and freezing portions. Her neighborhood Facebook group lit up with people asking for pieces.",
      location: "Shenandoah Valley, Virginia, USA",
      source: "r/foraging",
      sourceUrl: "https://www.reddit.com/r/foraging/",
    },
    {
      title: "\"Vegan Chicken\" on the Menu in Portland",
      text: "A farm-to-table restaurant in Portland, Oregon briefly offered Chicken of the Woods as a \"forest chicken sandwich\" in 2021. They battered and fried thick slabs and served them on brioche buns. Diners who didn't know it was a mushroom reportedly couldn't tell the difference from actual chicken.",
      location: "Portland, Oregon, USA",
      source: "Portland Mercury",
    },
    {
      title: "The Eucalyptus Lesson in the Bay Area",
      text: "A Bay Area foraging group had three members get sick after eating Chicken of the Woods harvested from a eucalyptus tree in Golden Gate Park in 2018. All experienced nausea and cramping within a few hours. The group now explicitly warns members to avoid specimens from eucalyptus.",
      location: "San Francisco, California, USA",
      source: "Bay Area Mycological Society",
    },
    {
      title: "First Foraging Find in the Catskills",
      text: "A hiker on a trail near Woodstock, New York described finding her first-ever wild edible mushroom in 2020 — a massive Chicken of the Woods glowing orange on a fallen oak. She posted photos to iNaturalist and had the ID confirmed within minutes. She's been hooked on foraging ever since.",
      location: "Woodstock, New York, USA",
      source: "iNaturalist",
      sourceUrl: "https://www.inaturalist.org/",
    },
    {
      title: "The TikTok That Got 8 Million Views",
      text: "In 2022, a forager's TikTok showing them slicing, breading, and frying Chicken of the Woods went massively viral. The video showed the mushroom being peeled apart like actual chicken breast, and the comment section was split between people amazed by nature and people insisting it was staged with real chicken.",
      location: "Appalachian Trail, USA",
      source: "TikTok",
    },
  ],
  seoQueries: [
    "chicken of the woods mushroom",
    "chicken of the woods identification",
    "is chicken of the woods edible",
    "orange mushroom growing on tree",
    "how to cook chicken of the woods",
    "chicken of the woods look alikes",
    "laetiporus sulphureus edible",
    "chicken of the woods taste",
    "orange shelf fungus on oak tree",
    "chicken of the woods poisonous",
    "can you eat chicken of the woods raw",
    "chicken of the woods recipe",
    "chicken of the woods eucalyptus",
    "yellow orange bracket fungus identification",
    "chicken of the woods vs jack o lantern",
  ],
  funFacts: [
    "Chicken of the Woods can produce over 100 pounds of fruiting bodies from a single tree over several years, returning to the same spot each season until the wood is fully decomposed.",
    "The bright orange and yellow pigments are polyene compounds — the same class of molecules that makes carrots orange. They may serve as a UV sunscreen for the fungus.",
    "Some high-end restaurants charge $20+ per pound for fresh Chicken of the Woods, making it one of the most commercially valuable wild mushrooms you can legally forage in most areas.",
    "Despite being called 'Chicken of the Woods,' it's technically causing the tree it grows on to rot from the inside out. It's a parasitic heart-rot fungus that breaks down the cellulose in heartwood.",
    "Ancient Romans reportedly knew about this mushroom — Pliny the Elder described bracket fungi growing on oaks, and modern scholars believe at least some of his descriptions match Laetiporus.",
  ],
  images: [
    {
      filename: "01-shelf-orange.jpg",
      alt: "Large Chicken of the Woods shelves with bright orange and yellow coloring on a tree",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Laetiporus_sulphureus_2017_G01.jpg",
      author: "George Chernilevsky",
      license: "Public domain",
      licenseUrl: "",
    },
    {
      filename: "02-tree-trunk.jpg",
      alt: "Chicken of the Woods bracket fungus growing on the side of a tree trunk",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:2015.07.04.-06-Eilenburg_Ost--Gemeiner_Schwefelporling.jpg",
      author: "Andreas Eichler",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "03-young-growth.jpg",
      alt: "Young Chicken of the Woods specimen with vibrant orange surface and yellow edges",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Laetiporus_sulphureus_2018_G1.jpg",
      author: "George Chernilevsky",
      license: "Public domain",
      licenseUrl: "",
    },
    {
      filename: "04-multiple-shelves.jpg",
      alt: "Multiple overlapping Chicken of the Woods shelves in a Dutch forest",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Zwavelzwam_(Laetiporus_sulphureus)._Locatie,_Stuttebosch_in_de_lendevallei._27-08-2020._(actm.)_01.jpg",
      author: "Agnes Monkelbaan",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "05-closeup.jpg",
      alt: "Close-up of Chicken of the Woods showing suede-like orange cap surface",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Laetiporus_sulphureus_2023_G1.jpg",
      author: "George Chernilevsky",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
  ],
  identificationImages: {
    cap: "cap-detail.jpg",
    gills: "pores-detail.jpg",
  },
};

export default species;
