import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "marasmius-oreades",
  commonName: "Fairy Ring Mushroom",
  scientificName: "Marasmius oreades",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Marasmiaceae",
    genus: "Marasmius",
  },
  summary:
    "The mushroom behind those mysterious dark-green circles on lawns and meadows. Marasmius oreades is a small, humble, lawn-dwelling species with surprisingly excellent flavor, prized by foragers who know to look down instead of into the woods. It is also the source of centuries of fairy folklore across Europe.",
  description:
    "Most people have seen fairy rings without knowing what causes them. Those perfect circles and arcs of darker, lusher grass that appear on lawns, golf courses, and pastures are the work of fungi expanding outward from a central point, year after year. And the most famous ring-maker of them all is Marasmius oreades, the Fairy Ring Mushroom.\n\nThe mushroom itself is modest: small, tan, with a gently rounded cap and well-spaced cream-colored gills. It would be easy to overlook if it did not appear in such dramatic formations. Rings can range from a few feet across to over 30 meters in diameter, and some established rings in the UK have been estimated to be several hundred years old based on their growth rate.\n\nWhat foragers know, and most people do not, is that this unassuming little mushroom is one of the tastiest species you can find on a suburban lawn. The flavor is sweet and nutty, with an almost almond-like quality that concentrates beautifully when dried. French and Italian cooks have used them for centuries in omelets, soups, and sauces. The caps dry perfectly on a string and reconstitute with barely any loss of flavor.\n\nThe critical caveat: several toxic species also grow in grass, and some can appear near or even within fairy rings. The most dangerous look-alike is Clitocybe rivulosa (the Fool's Funnel), which contains muscarine and can cause serious poisoning. Foragers must learn the differences carefully before collecting from lawns.",
  identification: {
    cap: "2-5 cm across. Convex when young, becoming broadly convex to nearly flat with a slight central bump (umbo). Tan to pale buff when dry, darker brown when wet (hygrophanous). Surface is smooth, dry, with a slightly leathery texture. Margin may be slightly wavy or irregular.",
    gills:
      "Free to slightly attached, widely spaced (a key feature). Cream to pale tan. Thick and waxy-looking compared to most small mushrooms. The wide spacing is one of the most reliable identification features.",
    stem: "4-8 cm tall, 2-4 mm thick. Tough, wiry, flexible, pale tan to whitish. Will bend without snapping, unlike most small mushrooms whose stems break cleanly. This toughness is another key identification feature.",
    sporePrint: "White to pale cream.",
    odor: "Pleasant, sweet, sometimes described as almond-like or like fresh-cut hay.",
  },
  habitat:
    "Grasslands, lawns, meadows, pastures, parks, golf courses, and sports fields. A saprotrophic species that feeds on dead grass roots and organic matter in soil. Forms characteristic fairy rings that expand outward at roughly 10-15 cm per year. Prefers well-drained, unfertilized or lightly fertilized turf.",
  season:
    "Late spring through autumn, typically May through November. Can fruit in multiple flushes after rain throughout the growing season. Most productive in warm, wet periods of summer and early autumn.",
  range:
    "Widespread across Europe, North America, and temperate regions worldwide. Extremely common in the UK, Ireland, Scandinavia, and continental Europe. Found throughout North America from coast to coast. Also reported from parts of Asia, Australia, and South America.",
  lookAlikes: [
    {
      name: "Fool's Funnel (Clitocybe rivulosa)",
      distinction:
        "TOXIC. The most dangerous look-alike. Also grows in grass, sometimes in the same areas. Key differences: Fool's Funnel has crowded, decurrent (running down the stem) gills rather than widely spaced free gills. Cap is whitish with a slightly frosted appearance. Stem is not wiry or tough. No almond-like smell.",
      externalUrl:
        "https://www.first-nature.com/fungi/clitocybe-rivulosa.php",
      externalSource: "First Nature",
    },
    {
      name: "Lawn Mottlegill (Panaeolus foenisecii)",
      distinction:
        "Also common in lawns but has a dark brown spore print (not white), darker cap, and closely spaced gills that turn dark with spore maturity. Not dangerously toxic but not edible. Grows scattered rather than in distinct rings.",
      externalUrl:
        "https://en.wikipedia.org/wiki/Panaeolina_foenisecii",
      externalSource: "Wikipedia",
    },
    {
      name: "Collared Parachute (Marasmius rotula)",
      distinction:
        "Much smaller with a deeply grooved, parasol-like white cap. Grows on woody debris rather than in grass. Has a distinctive collar connecting the gills to the stem. Not a grass-dweller.",
      externalUrl:
        "https://www.inaturalist.org/taxa/63100-Marasmius-rotula",
      externalSource: "iNaturalist",
    },
  ],
  edibility: "edible",
  edibilityNote:
    "An excellent edible mushroom with sweet, nutty flavor. Use only the caps; the stems are too tough and wiry. Dries exceptionally well, concentrating the flavor. Must be identified with absolute confidence due to the toxic Clitocybe rivulosa look-alike that also grows in grass. Avoid collecting from treated lawns (pesticides, herbicides, fertilizers) or areas near roads where lead and other contaminants may be present.",
  gbifKey: 2537250,
  stories: [
    {
      title: "Shakespeare's Fairy Circles",
      text: "The Tempest references fairy rings, and a long tradition of English folklore attributes the circles to dancing fairies or elves. In parts of Germany and Austria, the rings were called Hexenringe (witch rings) and believed to mark places where witches danced on Walpurgis Night. The actual explanation, a mycelial network expanding outward from a central origin, was not understood until the 19th century.",
      location: "Warwickshire, England",
      source: "British Mycological Society",
    },
    {
      title: "The 600-Year-Old Ring in Belfort",
      text: "A fairy ring near Belfort in eastern France was measured at over 600 meters in diameter in the early 2000s. Based on the typical annual expansion rate of Marasmius oreades, researchers estimated the ring could be approximately 700 years old, making it one of the oldest documented fairy rings in Europe.",
      location: "Belfort, France",
      source: "French Mycological Society",
    },
    {
      title: "The Lawn Care Company's Nemesis",
      text: "Groundskeepers and lawn care professionals consider fairy rings one of the most frustrating turf problems. The mycelium creates a hydrophobic zone that repels water, causing the grass inside the ring to brown and die while the edges, fertilized by decomposing mycelium, grow dark green and lush. No fungicide reliably eliminates established rings.",
      location: "Augusta, Georgia, USA",
      source: "Turfgrass Management publications",
    },
    {
      title: "A Forager's Lawn Harvest",
      text: "A UK forager posted photos of 3 kg of Fairy Ring Mushrooms collected from a single large ring on a hillside meadow in the Peak District. She strung them on cotton thread and dried them above a wood stove over three days. The dried caps, she reported, lasted over a year in glass jars and made superb cream sauces throughout winter.",
      location: "Peak District, England",
      source: "Wild Food UK",
    },
  ],
  seoQueries: [
    "fairy ring mushroom identification",
    "marasmius oreades edible",
    "fairy ring mushroom vs clitocybe",
    "can you eat fairy ring mushrooms",
    "mushroom growing in circles on lawn",
    "fairy ring mushroom look alikes",
    "what causes fairy rings in grass",
    "marasmius oreades foraging",
    "fairy ring mushroom taste",
    "how to dry fairy ring mushrooms",
    "fairy ring mushroom season UK",
    "small tan mushroom in lawn edible",
    "fairy ring mushroom cooking recipes",
    "fairy ring folklore history",
  ],
  funFacts: [
    "Some fairy rings in European grasslands have been estimated to be over 700 years old, making them among the oldest living organisms in their ecosystems.",
    "Marasmius oreades can completely dry out and shrivel to a crisp, then revive and continue releasing spores when rehydrated by rain. This ability to resurrect after desiccation is called poikilohydry, and it is rare among mushroom-forming fungi.",
    "The name 'oreades' comes from the Greek Oreads, mountain nymphs in mythology, connecting the species to its long association with fairy folklore.",
    "Fairy rings expand outward at roughly 10-15 cm per year. By measuring the diameter of a ring, you can roughly estimate how many years ago the original spore germinated at the center.",
    "The hydrophobic compounds produced by the mycelium of Marasmius oreades can make the soil inside a fairy ring so water-repellent that it resists irrigation, a major headache for golf course superintendents worldwide.",
  ],
  images: [
    {
      filename: "01-field.jpg",
      alt: "Fairy Ring Mushroom (Marasmius oreades) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Michigan_Marasmius_oreades.jpg",
      author: "Alan Rockefeller",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    {
      filename: "02-habitat.jpg",
      alt: "Fairy Ring Mushroom growing in natural habitat",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Michigan_Marasmius_oreades_black_background.jpg",
      author: "Alan Rockefeller",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    {
      filename: "04-field.jpg",
      alt: "Fairy Ring Mushroom (Marasmius oreades) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:2010-10-16_Marasmius_oreades_(Bolton)_Fr_112276.jpg",
      author: "This image was created by user Lord Mayonnaise at Mushroom Observer, a source for mycological images.You can contact thi",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "05-field.jpg",
      alt: "Fairy Ring Mushroom (Marasmius oreades) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:2010-10-16_Marasmius_oreades_(Bolton)_Fr_112385.jpg",
      author: "This image was created by user Lord Mayonnaise at Mushroom Observer, a source for mycological images.You can contact thi",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
  ],
};

export default species;
