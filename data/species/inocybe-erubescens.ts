import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "inocybe-erubescens",
  commonName: "Deadly Fibrecap",
  scientificName: "Inocybe erubescens",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Inocybaceae",
    genus: "Inocybe",
  },
  summary:
    "One of Europe's most dangerous mushrooms hides in plain sight. The Deadly Fibrecap contains lethal doses of muscarine — enough to kill — and its plain, unassuming appearance means people mistake it for edible species every year.",
  description:
    "If you were designing a dangerous mushroom, you'd probably give it warning colors — blood red, neon yellow, something dramatic. Nature didn't bother with Inocybe erubescens. It looks like every other boring brownish mushroom on the forest floor, which is exactly why it's killed people. The only visual clue is a subtle reddish staining when the flesh is bruised or damaged, which most foragers wouldn't notice unless they were specifically looking for it.\n\nThis species has been responsible for multiple fatal poisonings across Europe, particularly in cases where it was confused with St. George's Mushroom (Calocybe gambosa) or various edible Entoloma species that fruit around the same time. The muscarine content in I. erubescens is among the highest of any mushroom — far more than the trace amounts found in the Fly Agaric, which ironically gave muscarine its name. Symptoms hit within 15–30 minutes: profuse sweating, salivation, tears, blurred vision, and in severe cases, cardiovascular collapse.\n\nThe species was originally described by Norwegian mycologist Axel Blytt in 1905 and has been shuffled around taxonomically — you'll sometimes see it listed as Inocybe patouillardii or placed in the newer genus Inosperma. It fruits in late spring and early summer, often in calcareous soils under broadleaf trees, particularly in parks and gardens where people are most likely to encounter it. The timing overlap with St. George's Mushroom season is a deadly coincidence.",
  identification: {
    cap: "3–9 cm across. Conical to bell-shaped when young, expanding to broadly umbonate with age. Ivory-white to straw-yellow when fresh, developing reddish-pink stains where handled or damaged. Surface is smooth to finely fibrillose (silky radial fibers). Margin may crack in dry weather.",
    gills: "Crowded, initially pale whitish-cream, maturing to olive-brown as spores develop. Stain reddish-pink when bruised — this is the key diagnostic feature. Adnexed to almost free.",
    stem: "4–10 cm tall, 1–2 cm thick. White to pale cream, solid, often slightly bulbous at the base. Stains reddish when bruised or cut, particularly near the base. No ring.",
    sporePrint: "Dull brown to snuff-brown.",
    odor: "Faintly fruity or spermatic — typical Inocybe smell, though milder than some relatives.",
  },
  habitat:
    "Calcareous (lime-rich) soils under broadleaf trees, especially beech, oak, and lime (linden). Common in parks, gardens, roadsides, and woodland edges — basically wherever people walk. Ectomycorrhizal.",
  season:
    "Late spring through early summer — May to July in most of Europe. Occasionally into August in cooler regions. Overlaps dangerously with St. George's Mushroom season.",
  range:
    "Widespread across Europe, from the British Isles to Scandinavia and south to the Mediterranean. Also reported from western Asia. Rare or absent in North America. Most common in central and southern England, France, Germany, and Italy.",
  lookAlikes: [
    {
      name: "St. George's Mushroom (Calocybe gambosa)",
      image: "lookalike-gambosa.jpg",
      distinction:
        "The most dangerous confusion. St. George's has a thick, mealy smell (like wet flour), pure white gills that never stain pink, and a chunkier build. Deadly Fibrecap has fibrillose cap texture, gills that stain red, and a faintly spermatic odor. Always check for red staining.",
      externalUrl: "https://en.wikipedia.org/wiki/Calocybe_gambosa",
      externalSource: "Wikipedia",
    },
    {
      name: "White Fibrecap (Inocybe geophylla)",
      image: "lookalike-geophylla.jpg",
      distinction:
        "Much smaller (cap 1–4 cm), pure white to lilac, silky smooth cap, and does NOT stain red. Also contains muscarine but in lower concentrations. Found in similar habitats but typically in autumn rather than spring.",
      externalUrl: "https://www.inaturalist.org/taxa/59927-Inocybe-geophylla",
      externalSource: "iNaturalist",
    },
    {
      name: "Torn Fibrecap (Inocybe rimosa)",
      image: "lookalike-rimosa.jpg",
      distinction:
        "Cap is more distinctly radially cracked (rimose) and straw-yellow to ochre without reddish staining. Gills are clay-brown and don't flush pink. Stem lacks red discoloration. Also toxic (contains muscarine) but less dangerously so.",
      externalUrl: "https://www.mushroomexpert.com/inocybe_rimosa.html",
      externalSource: "MushroomExpert",
    },
  ],
  edibility: "deadly",
  edibilityNote:
    "Contains muscarine in concentrations far exceeding those of any other European mushroom — up to 100x more than Amanita muscaria. Symptoms appear within 15–30 minutes: extreme sweating (SLUDGE syndrome), salivation, lacrimation, nausea, vomiting, diarrhea, blurred vision, slow heartbeat, and potentially fatal cardiovascular collapse. The antidote is atropine, but hospital treatment is critical. Multiple confirmed fatalities exist in European medical literature. Do not eat this mushroom under any circumstances.",
  gbifKey: 2527939,
  stories: [
    {
      title: "Fatal Poisoning in Southern England",
      text: "In 1937, a woman in Surrey died after eating Inocybe erubescens she had picked from a park, believing them to be St. George's Mushrooms. The case was one of the first to establish the species' extreme muscarine content and became a landmark in British mycotoxicology.",
      location: "Surrey, England",
      source: "Bulletin of the British Mycological Society",
    },
    {
      title: "Family Hospitalized in France",
      text: "A French family of four was rushed to hospital near Lyon in 2008 after cooking what they believed were spring edible mushrooms. All four developed severe SLUDGE symptoms within 20 minutes. Atropine treatment saved them, but one member required intensive care for 48 hours.",
      location: "Lyon, France",
      source: "Clinical Toxicology journal",
    },
    {
      title: "Rediscovery of Blytt's Original Specimen",
      text: "Norwegian mycologist Axel Blytt first described this species in 1905 from a specimen collected near Oslo. His original herbarium material was re-examined in 2009 using modern molecular techniques, confirming the species' placement and settling decades of taxonomic confusion with I. patouillardii.",
      location: "Oslo, Norway",
      source: "Mycological Research",
    },
    {
      title: "Dog Poisoned in a London Park",
      text: "A dog owner in Hampstead Heath posted on a UK foraging forum in 2019 that their spaniel had eaten a pale mushroom during a walk. The dog began drooling and trembling within 15 minutes. Emergency vet treatment with atropine saved the dog, and the mushroom was later identified as I. erubescens.",
      location: "London, England",
      source: "Wild Food UK Forum",
    },
    {
      title: "Italian Mycological Society Warning",
      text: "In 2015, the Italian Mycological Society issued a public alert after three separate poisonings in Tuscany during May, all involving I. erubescens confused with edible spring species. They emphasized that the species is especially dangerous because it fruits in the same season and habitats as popular edible mushrooms.",
      location: "Tuscany, Italy",
      source: "Associazione Micologica Italiana",
    },
  ],
  seoQueries: [
    "deadly fibrecap mushroom",
    "inocybe erubescens poisonous",
    "red staining inocybe",
    "mushroom that turns red when bruised",
    "inocybe erubescens identification",
    "deadly fibrecap vs st george's mushroom",
    "muscarine poisoning mushroom",
    "most dangerous inocybe species",
    "inocybe patouillardii",
    "spring poisonous mushroom europe",
    "fibrecap mushroom toxic",
    "deadly mushroom that looks like st george's",
    "inocybe erubescens symptoms",
    "mushroom muscarine content",
  ],
  funFacts: [
    "Inocybe erubescens contains up to 100 times more muscarine than Amanita muscaria — the mushroom that literally gave muscarine its name.",
    "The species has been called the 'most dangerous spring mushroom in Europe' because it fruits at the exact same time and place as the popular edible St. George's Mushroom.",
    "Its reddish staining reaction is caused by oxidation of compounds in the flesh — basically, it blushes when you touch it, which is both its warning sign and the origin of its Latin name 'erubescens' (to blush).",
    "The antidote for muscarine poisoning is atropine, which comes from deadly nightshade (Atropa belladonna) — so you need one poison to counteract another.",
    "Taxonomists have bounced this species between three different genera over the years: Inocybe, Inosperma, and back again, making it a nightmare to track in older field guides.",
  ],
  images: [
    {
      filename: "01-mature-group.jpg",
      alt: "Mature Deadly Fibrecap mushrooms showing pale straw-colored caps with fibrillose texture",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Inocybe_erubescens_MS4_(1).jpg",
      author: "Jerzy Opiola",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "02-forest-floor.jpg",
      alt: "Inocybe erubescens growing on forest floor among leaf litter in Siberia",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Inocybe_erubescens_(19417855088).jpg",
      author: "Tatiana Bulyonkova",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    },
    {
      filename: "03-cluster.jpg",
      alt: "Cluster of Deadly Fibrecap mushrooms showing characteristic pale caps and crowded growth",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Inocybe-erubescens024.jpg",
      author: "Danny Steaven",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "04-illustration.png",
      alt: "Historical botanical illustration of Inocybe patouillardii by Giacomo Bresadola showing cap, gills, and stem details",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Bresadola_-_Inocybe_Patouillardi.png",
      author: "Giacomo Bresadola",
      license: "Public domain",
      licenseUrl: "",
    },
    {
      filename: "05-field.jpg",
      alt: "Inosperma erubescens specimen in field showing fresh pale cap and stem",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Inosperma_erubescens.jpg",
      author: "The Brook",
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
