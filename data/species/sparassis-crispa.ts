import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "sparassis-crispa",
  commonName: "Cauliflower Mushroom",
  scientificName: "Sparassis crispa",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Polyporales",
    family: "Sparassidaceae",
    genus: "Sparassis",
  },
  summary:
    "A massive, ruffled, cream-colored fungus that looks exactly like a head of cauliflower sitting at the base of a pine tree. Sparassis crispa can weigh 5 kg or more, feeds a family for a week, and tastes like a cross between egg noodles and hazelnuts. Finding one is the foraging equivalent of hitting the jackpot.",
  description:
    "There is nothing subtle about finding a Cauliflower Mushroom. You are walking through a pine forest, and suddenly, there it is at the base of a mature tree: a massive, cream to pale yellow rosette of wavy, flattened, ribbon-like lobes, ruffled and folded over each other like a giant head of cauliflower or a brain made of lasagna noodles. A good specimen can be 20-50 cm across and weigh several kilograms. It is one of the few mushrooms that can genuinely feed a family from a single find.\n\nSparassis crispa is a parasitic and saprobic species, attacking the roots and butt of living conifers (especially pines) and causing brown cubical butt rot. This means it is slowly killing its host tree, but from the forager's perspective, this is excellent news: a productive Sparassis site can produce a fruiting body in the same spot, at the base of the same tree, year after year, sometimes for a decade or more. Once you find a productive tree, mark it on your GPS and return each autumn.\n\nThe eating quality is outstanding. The flesh has a firm, slightly chewy, noodle-like texture and a delicate flavor with notes of hazelnut, egg, and mild sweetness. It absorbs sauces beautifully, making it excellent in pasta dishes, cream sauces, and stir-fries. The main challenge is cleaning it: the deeply folded structure traps dirt, pine needles, insects, and leaf litter. Plan to spend 20-30 minutes carefully separating the lobes and rinsing each one. It is worth the effort.",
  identification: {
    cap: "No conventional cap. Fruiting body is a large, globose rosette of flattened, wavy, ribbon-like lobes or branches, 15-50 cm across (sometimes larger). Cream to pale yellowish when young, darkening to ochre-tan with age. Individual lobes are 1-3 cm wide, thin, and flexible, with wavy or crisped edges. The overall shape resembles a cauliflower, a brain, or a mass of egg noodles.",
    gills: "No gills. Spores are produced on the flat surfaces of the lobes. The fertile surface is smooth.",
    stem: "A thick, rooting base (stipe) attaches the rosette to the tree roots or the base of the trunk. The base is white, fleshy, and often buried in soil or hidden beneath the outer lobes. Can be 5-10 cm thick.",
    sporePrint: "White to pale cream.",
    odor: "Pleasant, mildly nutty, sometimes described as faintly like almonds or fresh pasta.",
  },
  habitat:
    "Parasitic and saprobic at the base of living and recently dead conifers, especially pines (Pinus sylvestris, P. nigra, P. ponderosa). Also occasionally found at the base of spruce, fir, and larch. Causes brown cubical butt rot of the heartwood. Found in coniferous and mixed forests.",
  season:
    "Late summer through late autumn, typically August through November. Peak fruiting in September and October. A productive tree may produce a fruiting body annually for many consecutive years.",
  range:
    "Widespread across the Northern Hemisphere. Found throughout Europe, North America, and East Asia (Japan, Korea, China). In North America, most common in the Pacific Northwest and southeastern pine forests. A related species, Sparassis spathulata, replaces it on hardwoods in eastern North America.",
  lookAlikes: [
    {
      name: "Sparassis spathulata (Eastern Cauliflower Mushroom)",
      distinction:
        "Very similar in overall form but grows at the base of hardwoods (oaks, especially) rather than conifers. The lobes tend to be slightly broader and more leaf-like (spatulate) rather than ribbon-like. Also edible and of similar quality. Some mycologists consider it a variety rather than a separate species. The host tree (hardwood vs. conifer) is the practical field distinction.",
      externalUrl: "https://www.mushroomexpert.com/sparassis_spathulata.html",
      externalSource: "MushroomExpert",
    },
    {
      name: "Grifola frondosa (Hen of the Woods)",
      slug: "grifola-frondosa",
      distinction:
        "Also a large, clustered fungus growing at the base of trees, but Hen of the Woods has distinct, fan-shaped, overlapping caps (each with pores underneath) rather than the wavy, ribbon-like lobes of Sparassis. Hen of the Woods is grayish-brown; Sparassis is cream to pale yellow. Hen of the Woods grows on hardwoods (especially oaks); S. crispa grows on conifers. Both are excellent edibles.",
    },
  ],
  edibility: "edible",
  edibilityNote:
    "A choice edible mushroom with excellent flavor and texture. The flesh is firm, slightly chewy, and noodle-like, with a mild, nutty, slightly sweet flavor. Excellent sauteed in butter, added to cream sauces, stir-fried, or used in pasta dishes. The deeply folded structure requires thorough cleaning to remove trapped debris. Tear into small clusters, soak in salted water, and rinse carefully. Dries well for long-term storage.",
  gbifKey: 2542681,
  stories: [
    {
      title: "The 8-Kilogram Specimen in the New Forest",
      text: "A British forager posted photos of a Cauliflower Mushroom he found at the base of a Scots pine in the New Forest, Hampshire, that weighed just over 8 kg. He needed a large rucksack to carry it out and spent the next two days cleaning, cooking, and drying the harvest. He reported that the same tree had produced a specimen every September for the previous six years.",
      location: "New Forest, Hampshire, England",
      source: "British Mycological Society",
    },
    {
      title: "Japanese Hanabira-take Cultivation",
      text: "In Japan, Sparassis crispa (called hanabira-take, meaning 'petal mushroom') has been cultivated on sawdust blocks since the early 2000s. A grower in Akita Prefecture developed a technique using cedar sawdust supplemented with rice bran, producing 300-500 gram fruiting bodies in climate-controlled rooms. The cultivated product sells for a premium in Japanese supermarkets, marketed for both its culinary and purported health properties.",
      location: "Akita Prefecture, Japan",
      source: "Japan Society for Mushroom Science",
    },
    {
      title: "Beta-Glucan Research",
      text: "Researchers at the University of Tokyo identified high concentrations of beta-glucans (specifically beta-1,3-D-glucan) in Sparassis crispa, at levels higher than most other edible mushrooms tested. A 2008 study showed immunostimulatory activity in mouse models. This research led to the marketing of Sparassis supplements in Japan, though clinical evidence in humans remains limited.",
      location: "Tokyo, Japan",
      source: "Journal of Agricultural and Food Chemistry",
    },
    {
      title: "Pacific Northwest Pine Forest Find",
      text: "A forager in the Cascade Range near Bend, Oregon described finding a large Sparassis crispa at the base of a ponderosa pine in early October. She had been returning to the same tree for three consecutive years. She cleaned the specimen in a nearby stream, filling a pillowcase with the cleaned lobes, and made a cream sauce with chanterelles and Cauliflower Mushroom over fresh fettuccine that evening at camp.",
      location: "Bend, Oregon, USA",
      source: "Oregon Mycological Society",
    },
  ],
  seoQueries: [
    "cauliflower mushroom identification",
    "sparassis crispa edible",
    "large white mushroom base of pine tree",
    "cauliflower fungus recipe",
    "sparassis crispa look alikes",
    "how to clean cauliflower mushroom",
    "cauliflower mushroom habitat",
    "sparassis crispa taste",
    "ruffled mushroom at tree base",
    "cauliflower mushroom foraging",
    "sparassis crispa vs grifola frondosa",
    "how to cook cauliflower mushroom",
    "cauliflower mushroom health benefits",
  ],
  funFacts: [
    "A single Sparassis crispa fruiting body can weigh over 10 kg, making it one of the largest mushrooms by mass that a temperate-zone forager is likely to encounter. A specimen this size can provide meals for an entire week.",
    "Sparassis crispa returns to the same tree year after year because the mycelium is perennial in the roots and butt of the host tree. A productive tree can fruit annually for 5-10 years or more before the host dies from the progressive butt rot.",
    "The Japanese name hanabira-take means 'petal mushroom,' reflecting the flower-like appearance of the ruffled lobes. In Japan, it is one of the few wild mushrooms that has been successfully cultivated at commercial scale on sawdust substrates.",
    "Sparassis crispa has been shown to contain higher concentrations of beta-1,3-D-glucan than most other edible mushroom species tested. Beta-glucans are polysaccharides that have demonstrated immunomodulatory effects in laboratory and animal studies.",
  ],
  images: [],
};

export default species;
