import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "cerioporus-squamosus",
  commonName: "Dryad's Saddle",
  scientificName: "Cerioporus squamosus",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Polyporales",
    family: "Polyporaceae",
    genus: "Cerioporus",
  },
  summary:
    "One of spring's first mushrooms and one of the easiest to spot — a massive bracket fungus covered in pheasant-feather scales that smells like watermelon rind when fresh. Also called Pheasant Back, it's a gateway mushroom for beginner foragers.",
  description:
    "If you've ever walked past a dead elm or dying maple in April and noticed what looks like a dinner plate glued to the trunk, you've probably seen Dryad's Saddle. It's named from Greek mythology — dryads were tree nymphs, and the mushroom's saddle shape supposedly made a seat for them. The more practical common name, Pheasant Back, comes from the dark brown scales on the cap that look exactly like pheasant feathers.\n\nIt's one of the first mushrooms to fruit each spring, sometimes appearing as early as March in mild climates. That makes it a favorite of impatient foragers who've been stuck all winter. Young specimens — when the edges are still curled and the flesh is firm — are genuinely good eating. They have a mild, slightly nutty flavor and a satisfying crunch when sautéed. But they grow fast, and once a specimen is larger than your hand, it quickly becomes tough and leathery.\n\nThe watermelon-rind smell is the real party trick. Slice a fresh young one and hold it to your nose — it's unmistakable. Old-timers sometimes call it the 'cucumber mushroom' for the same reason. This smell fades as the mushroom ages, which is another clue to freshness.",
  identification: {
    cap: "10–60 cm across. Semicircular to kidney-shaped, often overlapping in shelving clusters. Cream to tan background covered with concentric dark brown scales arranged in a feather-like pattern. Surface is dry and slightly velvety when young.",
    gills: "No gills — this is a polypore. The underside has angular, cream-colored pores that are quite large (1–3 mm wide) and run partway down the stem.",
    stem: "Short and thick (3–10 cm), off-center or lateral. Cream above, darkening to black at the base. Often very tough even in young specimens.",
    sporePrint: "White.",
    odor: "Distinctive watermelon-rind or cucumber smell when fresh. Fades with age.",
  },
  habitat:
    "Grows on dead, dying, or wounded hardwoods — elm and maple are favorites, but also beech, oak, walnut, and box elder. Causes a white rot. Usually found on stumps, fallen logs, or wound sites on living trees. Often returns to the same tree year after year.",
  season: "Early spring through early summer — March to June in most of North America and Europe. Occasionally a second flush in autumn.",
  range:
    "Widespread across North America and Europe. Also found in parts of temperate Asia. Particularly common in the eastern United States and UK.",
  lookAlikes: [
    {
      name: "Chicken of the Woods (Laetiporus sulphureus)",
      slug: "laetiporus-sulphureus",
      image: "lookalike-laetiporus.jpg",
      distinction:
        "Bright orange-yellow shelves with no scales — impossible to confuse once you know both. Laetiporus has tiny pores and a much more vivid color. No watermelon smell.",
      externalUrl: "https://www.inaturalist.org/taxa/125751-Laetiporus-sulphureus",
      externalSource: "iNaturalist",
    },
    {
      name: "Hen of the Woods (Grifola frondosa)",
      slug: "grifola-frondosa",
      image: "lookalike-grifola.jpg",
      distinction:
        "Grows as a large rosette of many small, overlapping gray-brown caps at the base of oaks. No feather-like scales. Much smaller individual lobes. Different texture and smell.",
      externalUrl: "https://en.wikipedia.org/wiki/Grifola_frondosa",
      externalSource: "Wikipedia",
    },
    {
      name: "Birch Polypore (Fomitopsis betulina)",
      image: "lookalike-fomitopsis.jpg",
      distinction:
        "Smooth, white to gray-brown brackets exclusively on birch trees. No scales, no stem, much smoother surface. Not edible — tough and bitter.",
      externalUrl: "https://www.mushroomexpert.com/fomitopsis_betulina.html",
      externalSource: "MushroomExpert",
    },
  ],
  edibility: "edible",
  edibilityNote:
    "Edible and good when young — harvest when the edges are still curled and the flesh cuts easily with a knife. Once the cap exceeds about 15 cm or the flesh feels rubbery, it's too tough to enjoy. Best sautéed, breaded and fried, or dried and powdered for broth. The stem is always too tough to eat.",
  gbifKey: 2547092,
  stories: [
    {
      title: "The Elm Tree Goldmine in Central Park",
      text: "In spring 2018, a New York City forager found over 20 kg of young Dryad's Saddle fruiting from a dying American elm in Central Park. Photos went viral on Instagram, sparking a debate about foraging ethics in public parks — technically illegal in NYC without a permit.",
      location: "New York City, New York, USA",
      source: "Gothamist",
    },
    {
      title: "Watermelon Mushroom Confuses Hikers",
      text: "A trail guide in the Lake District reported that every spring, at least one hiking group asks about 'the mushroom that smells like a fruit salad.' The watermelon-rind scent of fresh Dryad's Saddle growing on trailside stumps is strong enough to notice from several feet away.",
      location: "Lake District, England, UK",
      source: "Lake District National Park trail reports",
    },
    {
      title: "Returning to the Same Stump for 8 Years",
      text: "A forager in Michigan documented the same maple stump producing Dryad's Saddle every April for eight consecutive years (2015–2022). Each year the mushrooms appeared within a 5-day window of the same date. The stump finally disintegrated in 2023.",
      location: "Ann Arbor, Michigan, USA",
      source: "Michigan Mushroom Hunters Club",
    },
    {
      title: "The Strop Fungus",
      text: "Before sandpaper was widely available, the tough dried flesh of Dryad's Saddle was used to strop and polish razor blades in rural England. Barbers would slice a mature bracket thin and use the smooth pore surface as a fine finishing surface. The practice survived in some villages into the early 20th century.",
      location: "Rural England, UK",
      source: "Pegler, 'Useful Fungi of the World' (2003)",
    },
    {
      title: "Box Elder Surprise in a Parking Lot",
      text: "A mycologist in Minneapolis found a massive cluster — estimated at 15 kg — growing from a box elder tree in a strip mall parking lot in 2021. The tree had been damaged by a snowplow the previous winter. 'Best parking lot find of my career,' she posted on the Minnesota Mycological Society forum.",
      location: "Minneapolis, Minnesota, USA",
      source: "Minnesota Mycological Society",
    },
  ],
  seoQueries: [
    "dryad's saddle vs chicken of the woods",
    "pheasant back mushroom identification",
    "dryad's saddle edible",
    "mushroom that smells like watermelon",
    "large bracket mushroom on tree",
    "spring polypore mushroom",
    "pheasant feather mushroom",
    "polyporus squamosus edible",
    "mushroom growing on dead elm",
    "how to cook dryad's saddle",
    "cerioporus squamosus identification",
    "bracket fungus with scales",
    "first mushroom of spring",
    "mushroom on maple stump",
    "cucumber smell mushroom",
  ],
  funFacts: [
    "The watermelon-rind smell of fresh Dryad's Saddle comes from a blend of C8 compounds — particularly octanal and (E)-2-octenal — that are chemically distinct from the standard 'mushroomy' 1-octen-3-ol found in most fungi.",
    "A single Dryad's Saddle can grow from fist-sized to dinner-plate-sized in under a week. Foragers learn to check their spots every few days in spring or risk missing the edible window.",
    "The name 'Dryad's Saddle' comes from Greek mythology — dryads were tree spirits, and the curved bracket shape was said to be a seat for these forest nymphs.",
    "Despite being called a polypore, it has unusually large pores — easily visible to the naked eye, unlike most bracket fungi which need a hand lens.",
    "In the UK, it's one of the most commonly reported mushrooms to citizen science platforms because it's so large, conspicuous, and easy to photograph on urban trees.",
  ],
  images: [
    {
      filename: "01-bracket-side.jpg",
      alt: "Large Dryad's Saddle bracket showing pheasant-feather scale pattern on tree",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Polyporus_squamosus,_Dryad%27s_Saddle.jpg",
      author: "Stu's Images",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "02-cluster.jpg",
      alt: "Cluster of overlapping Dryad's Saddle brackets on hardwood stump",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Polyporus_squamosus_2013_G1.jpg",
      author: "George Chernilevsky",
      license: "Public domain",
      licenseUrl: "",
    },
    {
      filename: "03-young.jpg",
      alt: "Young Dryad's Saddle specimens showing curled edges at edible stage",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Polyporus_squamosus_2010_G4.jpg",
      author: "George Chernilevsky",
      license: "Public domain",
      licenseUrl: "",
    },
    {
      filename: "04-top-scales.jpg",
      alt: "Top view of Dryad's Saddle cap showing concentric dark brown scales",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Cerioporus_squamosus_148112331.jpg",
      author: "iNaturalist user",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    {
      filename: "05-habitat.jpg",
      alt: "Dryad's Saddle growing from wound on living hardwood tree trunk",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Polyporus_squamosus_2022_G1.jpg",
      author: "George Chernilevsky",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
  ],
  identificationImages: {
    cap: "cap-detail.jpg",
    gills: "pores-detail.jpg",
    stem: "stem-detail.jpg",
  },
};

export default species;
