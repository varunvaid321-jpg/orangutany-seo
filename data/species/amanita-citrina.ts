import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "amanita-citrina",
  commonName: "False Death Cap",
  scientificName: "Amanita citrina",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Amanitaceae",
    genus: "Amanita",
  },
  summary:
    "The False Death Cap earns its name by mimicking the world's deadliest mushroom just enough to cause panic. While not lethal, it is considered toxic and inedible, with a raw potato smell that should put off any sensible forager.",
  description:
    "Amanita citrina occupies an uncomfortable middle ground in the mushroom world. It is not going to kill you like its notorious cousin Amanita phalloides, but it is not exactly a welcome find in your basket either. The mushroom contains bufotenine and trace amounts of other compounds that can cause gastrointestinal distress, and its resemblance to the actual Death Cap makes any encounter with it a high-stakes identification exercise.\n\nThe False Death Cap is extremely common across European woodlands, often fruiting in large numbers under oaks and beeches from late summer through autumn. Its pale lemon-yellow to greenish-white cap, covered in irregular patches of veil remnants, creates an appearance that overlaps uncomfortably with pale forms of Amanita phalloides. The most reliable way to tell them apart is the smell: the False Death Cap has a strong, distinctive odor of raw potatoes, while the Death Cap smells faintly sweet or honey-like.\n\nDespite being relatively harmless compared to other Amanitas, the False Death Cap serves an important educational role. It is the mushroom that teaches beginners to never, ever assume a pale Amanita is safe. Every experienced forager has a story about pausing over an Amanita citrina, double-checking the smell, examining the volva, and reminding themselves why the Amanita genus demands absolute certainty.",
  identification: {
    cap: "4-10 cm across. Convex, flattening with age. Pale lemon-yellow to greenish-white, sometimes almost white. Surface covered with large, irregular patches of white to pale yellow veil remnants. These patches are flat and map-like, not wart-like.",
    gills: "White to pale cream, free from the stem, closely spaced. Remain pale throughout the mushroom's life.",
    stem: "6-10 cm tall, white to pale yellow, with a persistent hanging ring near the top. Base has a large, rounded bulb with a gutter-like rim (marginate bulb), not a sack-like volva.",
    sporePrint: "White.",
    odor: "Strong smell of raw potatoes. This is the single most useful identification feature and is immediately obvious when the flesh is crushed.",
  },
  habitat:
    "Mycorrhizal with broadleaf and coniferous trees, especially oak, beech, and birch. Common in deciduous and mixed woodlands, parklands, and mature gardens. Prefers acidic to neutral soils.",
  season: "August through November in the Northern Hemisphere. Most abundant in September and October.",
  range:
    "Widespread across Europe, from Scandinavia to the Mediterranean. Also found in parts of North America, though less common there. Introduced to Australia and New Zealand.",
  lookAlikes: [
    {
      name: "Death Cap (Amanita phalloides)",
      slug: "amanita-phalloides",
      distinction:
        "The critical confusion. Death Cap has a smooth cap (without large veil patches), a sack-like volva at the base (not a rimmed bulb), and smells faintly sweet or honey-like, not like raw potatoes. If in any doubt, do not eat it.",
    },
    {
      name: "Destroying Angel (Amanita virosa)",
      slug: "amanita-virosa",
      distinction:
        "Pure white all over, with a shaggy stem, sack-like volva, and no potato smell. Deadly poisonous. White forms of Amanita citrina can overlap in appearance, so always check the volva shape and odor.",
    },
    {
      name: "The Blusher (Amanita rubescens)",
      slug: "amanita-rubescens",
      distinction:
        "Pinkish-brown cap with grayish veil patches. All damaged flesh turns distinctly pink to red. No potato odor. Edible when cooked, but confusion with the False Death Cap is more of a missed-meal risk than a safety risk.",
    },
  ],
  edibility: "toxic",
  edibilityNote:
    "Generally considered inedible and mildly toxic. Contains bufotenine and can cause nausea, vomiting, and stomach cramps. While not life-threatening, eating it is unwise both because of its own toxicity and because of the risk of confusing it with the genuinely deadly Amanita phalloides.",
  gbifKey: 3328320,
  stories: [
    {
      title: "The Potato Smell That Saved a Picker",
      text: "A forager near Fontainebleau, France, in 2017 collected several pale Amanitas thinking they were edible species. While cleaning them at home, the strong raw potato smell made her pause and consult a local pharmacist. The pharmacist confirmed they were False Death Caps and praised her caution.",
      location: "Fontainebleau, Ile-de-France, France",
    },
    {
      title: "Mycology Class Mix-Up in Hampshire",
      text: "During a guided foray in the New Forest in 2019, a participant brought a basket of pale Amanitas to the identification table. The instructor used them to demonstrate the difference between the False Death Cap's marginate bulb and the Death Cap's sac-like volva. Several students later said it was the most memorable lesson of the course.",
      location: "New Forest, Hampshire, England",
    },
    {
      title: "Polish Immigrant Scare in Chicago",
      text: "In autumn 2014, a Polish family in suburban Chicago found pale mushrooms under oak trees in their yard. Familiar with mushroom foraging from Poland, they initially thought they were safe. A neighbor who was a nurse urged them to have the mushrooms checked. A mycologist identified them as Amanita citrina, not phalloides, but the family stopped foraging from their yard entirely.",
      location: "Chicago, Illinois, USA",
    },
  ],
  seoQueries: [
    "false death cap mushroom",
    "amanita citrina identification",
    "false death cap vs death cap",
    "is amanita citrina poisonous",
    "false death cap smell",
    "pale yellow amanita",
    "amanita citrina potato smell",
    "false death cap edibility",
    "how to identify false death cap",
    "amanita citrina look alikes",
    "lemon yellow amanita mushroom",
    "false death cap uk",
  ],
  funFacts: [
    "The raw potato odor of Amanita citrina is so distinctive that experienced foragers can identify it blindfolded. It is one of the most reliable scent-based mushroom identifications in the field.",
    "Despite its scary name and family tree, the False Death Cap is one of the most common woodland mushrooms in Europe. On a good autumn day in an English beechwood, you might see dozens.",
    "Amanita citrina contains bufotenine, the same psychoactive compound found in certain toad secretions. However, the amounts are far too small to produce any noticeable effect.",
    "The veil patches on the False Death Cap's cap are often described as looking like a map of islands, giving it a distinctive patchwork appearance that differs from the clean warts of other Amanitas.",
  ],
  images: [
    {
      filename: "01-field.jpg",
      alt: "False Death Cap (Amanita citrina) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Amanita_citrina_2010_G1.jpg",
      author: "George Chernilevsky",
      license: "Public domain",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    },
    {
      filename: "03-field.jpg",
      alt: "False Death Cap (Amanita citrina) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Amanita_citrina_1.jpg",
      author: "Karelj",
      license: "Public domain",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    },
    {
      filename: "04-field.jpg",
      alt: "False Death Cap (Amanita citrina) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Amanita_citrina3.jpg",
      author: "Taken by me user debivort,",
      license: "CC BY-SA 3.0",
      licenseUrl: "http://creativecommons.org/licenses/by-sa/3.0/",
    },
    {
      filename: "05-field.jpg",
      alt: "False Death Cap (Amanita citrina) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Amanita_sp._2010-10-31.jpg",
      author: "The High Fin Sperm Whale",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
  ],
};

export default species;
