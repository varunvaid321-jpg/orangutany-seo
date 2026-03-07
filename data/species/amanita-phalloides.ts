import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "amanita-phalloides",
  commonName: "Death Cap",
  scientificName: "Amanita phalloides",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Amanitaceae",
    genus: "Amanita",
  },
  summary:
    "Meet the world's deadliest mushroom. The Death Cap is responsible for roughly 90% of all mushroom-related fatalities worldwide, and it looks disturbingly similar to several edible species.",
  description:
    "The Death Cap is nature's most effective poisoner. It doesn't taste bad. It doesn't smell bad. It doesn't even make you feel sick right away. You eat it, feel totally fine for 6 to 12 hours, maybe even think you dodged a bullet — and then your liver starts shutting down. By the time symptoms hit, the damage is already done. That delayed onset is what makes Amanita phalloides so terrifyingly effective, and why emergency rooms dread it.\n\nThis mushroom has a resume of high-profile kills stretching back centuries. Roman Emperor Claudius almost certainly died from Death Cap poisoning in 54 AD — served by his wife Agrippina, who wanted her son Nero on the throne. Pope Clement VII may have been another victim in 1534. In modern times, immigrants and refugees who mistake it for edible species from their home countries account for a heartbreaking number of deaths every year, particularly in California and Australia where the mushroom thrives under imported oak trees.\n\nOriginally native to Europe, the Death Cap hitched a ride to other continents on the roots of exported trees. It now grows across North America, Australia, parts of South America, and North Africa. It fruits in autumn, often near oaks, and a single cap contains enough amatoxin to kill an adult. There is no reliable antidote, though silybin (from milk thistle) and early liver transplant have saved some people. The bottom line: if you're not 100% certain what you're picking, leave it in the ground.",
  identification: {
    cap: "5-15 cm across. Starts egg-shaped, opens to convex then flat. Color ranges from pale greenish-yellow to olive green, sometimes almost white. Surface is smooth and slightly sticky when wet. No warts or patches (unlike Fly Agaric). The green tinge is the key tell, but pale specimens can fool you.",
    gills: "White, closely spaced, and free (not attached to the stem). They stay white even as the mushroom ages — no color change.",
    stem: "8-15 cm tall, white to pale green, with a prominent drooping skirt-like ring near the top. The base sits inside a cup-shaped volva (sac) that's often buried underground. Always dig up the base to check for the volva — it's the single most important identification feature.",
    sporePrint: "White.",
    odor: "Faintly sweet and pleasant when young. Becomes sickly sweet and unpleasant as it ages — sometimes described as honey-like turning to rotting.",
  },
  habitat:
    "Forms mycorrhizal relationships with hardwood trees, especially oaks. Also found near beeches, chestnuts, and occasionally conifers. Prefers well-drained soils in woodlands, parks, and suburban yards with established trees.",
  season: "Late summer through late autumn. Peak fruiting is September through November in the Northern Hemisphere; March through May in Australia.",
  range:
    "Native to Europe. Now established in North America (especially California and the Pacific Northwest), Australia (particularly southeastern states), South America, and North Africa — spread via imported European trees.",
  lookAlikes: [
    {
      name: "Paddy Straw Mushroom (Volvariella volvacea)",
      slug: "volvariella-volvacea",
      image: "lookalike-volvacea.jpg",
      distinction:
        "A popular edible mushroom in Southeast Asian cuisine. Both have a volva at the base, but the Straw Mushroom has pinkish-brown spores (not white), a darker grayish-brown cap, and gills that turn pink with age. This confusion has killed Southeast Asian immigrants foraging in the US and Australia.",
      externalUrl: "https://www.inaturalist.org/taxa/126944-Volvariella-volvacea",
      externalSource: "iNaturalist",
    },
    {
      name: "Green-spored Parasol (Chlorophyllum molybdites)",
      slug: "chlorophyllum-molybdites",
      image: "lookalike-molybdites.jpg",
      distinction:
        "The most commonly eaten poisonous mushroom in North America (causes severe GI distress but is rarely fatal). Much larger than the Death Cap, with a shaggy scaly cap and green spore print. Grows in lawns and open grass, not in woodland. No volva at the base.",
      externalUrl: "https://en.wikipedia.org/wiki/Chlorophyllum_molybdites",
      externalSource: "Wikipedia",
    },
    {
      name: "Field Mushroom (Agaricus campestris)",
      slug: "agaricus-campestris",
      image: "lookalike-campestris.jpg",
      distinction:
        "A common edible mushroom. Key differences: Field Mushrooms have pink-to-brown gills (never white), a chocolate-brown spore print, and no volva at the base. If the gills are white and there's a sac at the base, you may be holding a Death Cap.",
      externalUrl: "https://www.mushroomexpert.com/agaricus_campestris.html",
      externalSource: "MushroomExpert",
    },
  ],
  edibility: "deadly",
  edibilityNote:
    "Contains amatoxins (primarily alpha-amanitin) that destroy liver and kidney cells. A single mushroom can contain enough toxin to kill an adult. Symptoms are delayed 6-12 hours, starting with severe vomiting and diarrhea, followed by a deceptive recovery period, then rapid liver failure on days 3-5. Mortality rate without treatment is 50-90%. Cooking does NOT destroy the toxins. There is no reliable antidote. Do not eat this mushroom under any circumstances.",
  gbifKey: 5240325,
  stories: [
    {
      title: "The Leongatha Lunch That Killed Three",
      text: "In 2023, Erin Patterson served beef Wellington containing Death Cap mushrooms to her former in-laws in Leongatha, Victoria, Australia. Three of the four guests died. On July 7, 2025, Patterson was found guilty of three counts of murder. On September 8, 2025, she was sentenced to life imprisonment.",
      location: "Leongatha, Victoria, Australia",
      source: "ABC News Australia",
      sourceUrl: "https://www.abc.net.au/news/2025-09-08/mushroom-murderer-erin-patterson-sentenced-to-life-in-prison/105735360",
    },
    {
      title: "Canberra New Year's Tragedy",
      text: "On New Year's Day 2012, two people died in Canberra after eating Death Cap mushrooms picked from a local suburb. They were experienced foragers from China who mistook them for Straw Mushrooms.",
      location: "Canberra, ACT, Australia",
      source: "The Guardian",
    },
    {
      title: "Emperor Claudius: History's Most Famous Mushroom Victim",
      text: "In 54 AD, Roman Emperor Claudius died after eating a dish of mushrooms — almost certainly Death Caps slipped in by his wife Agrippina. His death put 16-year-old Nero on the throne.",
      location: "Rome, Italy",
      source: "Tacitus, Annals",
    },
    {
      title: "Bay Area Foraging Gone Wrong",
      text: "In 2016, a family of three in the Santa Cruz Mountains was hospitalized after eating Death Caps foraged near their home. The 18-month-old daughter required an emergency liver transplant. All survived.",
      location: "Santa Cruz, California, USA",
      source: "San Jose Mercury News",
    },
    {
      title: "Dog Eats a Death Cap in Portland",
      text: "In 2021, a golden retriever in a Portland, Oregon park ate a Death Cap growing under an oak tree. The dog developed liver failure within 48 hours and died despite emergency veterinary care.",
      location: "Portland, Oregon, USA",
      source: "Oregon Veterinary Medical Association",
    },
  ],
  seoQueries: [
    "death cap mushroom",
    "most poisonous mushroom in the world",
    "how to identify death cap",
    "amanita phalloides identification",
    "death cap mushroom poisoning symptoms",
    "death cap vs field mushroom",
    "deadliest mushroom",
    "death cap mushroom california",
    "death cap mushroom australia",
    "mushroom that kills you",
    "death cap look alikes",
    "amanita phalloides toxin",
    "green cap mushroom poisonous",
    "emperor claudius mushroom poisoning",
    "what happens if you eat a death cap",
  ],
  funFacts: [
    "A single Death Cap contains enough amatoxin to kill a healthy adult — and cooking, freezing, or drying does absolutely nothing to break down the poison.",
    "The Death Cap was accidentally introduced to North America on the roots of European cork oaks imported to California. It's been spreading ever since.",
    "After Emperor Claudius was killed by Death Caps, the Roman philosopher Seneca darkly joked that mushrooms had become 'a vehicle for poison.'",
    "Death Caps have a cruel false-recovery phase — after the initial vomiting stops, patients feel better for about 24 hours while their liver is silently being destroyed.",
    "Dogs are highly susceptible to Death Cap poisoning. In the Pacific Northwest, veterinarians see cases every autumn when dogs eat fallen mushrooms in parks.",
  ],
  images: [
    {
      filename: "01-cap-top.jpg",
      alt: "Death Cap mushroom showing olive-green cap from above growing in leaf litter",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Amanita_phalloides_2011_G1.jpg",
      author: "George Chernilevsky",
      license: "Public domain",
      licenseUrl: "",
    },
    {
      filename: "02-group.jpg",
      alt: "Group of Death Cap mushrooms at various growth stages in woodland",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Amanita_phalloides_group.jpg",
      author: "Danny Cicchetti",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "03-young.jpg",
      alt: "Young Death Cap mushroom with pale greenish cap emerging from volva",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Amanita_phalloides_168332340.jpg",
      author: "P Holroyd",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    {
      filename: "04-mature.jpg",
      alt: "Mature Death Cap with fully opened olive cap showing smooth surface",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Gr%C3%BCne_Gift-Wulstling_Amanita_phalloides.jpg",
      author: "Holger Krisp",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "05-forest.jpg",
      alt: "Death Cap mushroom fruiting body on forest floor among fallen leaves",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Amanita_phalloides_2025_G1.jpg",
      author: "George Chernilevsky",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
  ],
  identificationImages: {
    cap: "cap-detail.jpg",
    gills: "gills-detail.jpg",
    stem: "stem-detail.jpg",
  },
};

export default species;
