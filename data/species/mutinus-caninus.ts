import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "mutinus-caninus",
  commonName: "Dog Stinkhorn",
  scientificName: "Mutinus caninus",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Phallales",
    family: "Phallaceae",
    genus: "Mutinus",
  },
  summary:
    "A slender, phallic stinkhorn that emerges from a white egg and tips its orange head with a dark, foul-smelling spore mass. The common name is a polite euphemism for what it actually resembles.",
  description:
    "Mutinus caninus is one of those mushrooms that makes people either laugh or grimace, and usually both. It is unmistakably phallic, a slender orange-pink stalk rising from a white egg, capped with a dark, slimy, olive-brown spore mass that smells like something died in your garden. The Latin name Mutinus refers to a Roman phallic deity, and caninus means 'of a dog.' The common name, dog stinkhorn, is the family-friendly version.\n\nLike all stinkhorns, it uses its putrid odor to attract flies, which spread its spores. The dark gleba at the tip is the delivery mechanism: flies land, feed on the slimy mass, get coated in spores, and carry them off. Within a day or two, the flies have cleaned the tip completely, leaving a smooth, orange, spongy stalk that eventually collapses.\n\nDog stinkhorns are common in gardens, mulched beds, and deciduous woodlands across Europe and eastern North America. They are saprotrophic, feeding on decaying wood and organic matter. They tend to appear suddenly, often overnight, surprising gardeners who find them standing at attention in their flower beds. The egg stage can sit in the soil for weeks before conditions trigger the rapid expansion of the stalk, which can grow to full height in just a few hours.",
  identification: {
    cap: "No true cap. The tip of the stalk is covered with a dark olive-brown to blackish gleba (spore mass) that is slimy and foul-smelling. Once flies remove the gleba, the exposed tip is smooth, orange, and spongy with a small opening at the apex.",
    gills: "None. Spores are produced in the slimy gleba coating the tip of the stalk.",
    stem: "6-12 cm tall, 1-1.5 cm thick. Spongy, hollow, and fragile. Color is orange to pinkish orange, sometimes paler toward the base. The surface has a pitted, honeycomb-like texture. Emerges from a whitish, egg-like volva that remains at the base.",
    sporePrint: "Not applicable in the traditional sense. Gleba is olive-brown.",
    odor: "Foul, but less intense than many other stinkhorns. Described as mildly putrid, like old meat or a wet dog. The smell is localized to the gleba-coated tip and dissipates once flies clean it off.",
  },
  habitat:
    "Deciduous and mixed woodlands, gardens, parks, and mulched landscape beds. Feeds on decaying wood, wood chips, and leaf litter. Prefers shaded, humid areas with rich organic soil. Often appears in clusters of 3-10 fruiting bodies.",
  season: "Summer through autumn, typically July through October. Most common after warm, wet weather.",
  range:
    "Native to Europe and widely distributed across the continent. Also found in eastern North America from New England to the Southeast. Introduced to parts of the Pacific Northwest, Australia, and New Zealand.",
  lookAlikes: [
    {
      name: "Mutinus elegans (Elegant Stinkhorn)",
      distinction:
        "Very similar but slightly larger and more vividly colored, with a brighter reddish-orange stalk. More common in eastern North America. The two species are often confused and both are equally inedible. Mutinus elegans tends to have a more tapered, pointed tip.",
      externalUrl: "https://www.mushroomexpert.com/mutinus_elegans.html",
      externalSource: "MushroomExpert",
    },
    {
      name: "Phallus impudicus (Common Stinkhorn)",
      distinction:
        "Much larger, with a distinct white, skirted, netted cap (indusium) below the gleba-covered head. Stem is thicker and white. Smell is much stronger. The overall form is similar but the size difference and white netted veil make Phallus impudicus easy to distinguish.",
      externalUrl: "https://en.wikipedia.org/wiki/Phallus_impudicus",
      externalSource: "Wikipedia",
    },
  ],
  edibility: "inedible",
  edibilityNote:
    "The egg stage is theoretically edible (some stinkhorn eggs are eaten in parts of Asia), but Mutinus caninus is not considered a food species. The mature stalk is too spongy and foul-smelling to eat. Not toxic, but there is no culinary reason to try.",
  gbifKey: 5239473,
  stories: [
    {
      title: "The Garden Surprise in Surrey",
      text: "A retired gardener in Surrey, England, emailed her local mycological society in a panic after finding a cluster of dog stinkhorns in her rose bed. 'I thought something had died under the mulch,' she wrote. The mycologist who responded assured her the mushrooms were harmless and would collapse on their own within days. She later described the experience as 'mortifying but educational.'",
      location: "Surrey, England",
      source: "British Mycological Society",
    },
    {
      title: "Victorian Mushroom Censorship",
      text: "In Victorian England, stinkhorns of all kinds were considered obscene due to their shape. Charles Darwin's daughter Etty reportedly went on morning missions to destroy any Phallus or Mutinus she found in the family garden before the servants could see them. She would burn the specimens 'for the sake of the maids' morals.'",
      location: "Kent, England",
      source: "Darwin Correspondence Project",
    },
    {
      title: "Dog Stinkhorn Emerges During Garden Tour",
      text: "During a 2022 garden tour in Charlottesville, Virginia, a dog stinkhorn decided to make its appearance right next to the garden path, fully erect and gleba-coated. The garden owner, a mycology enthusiast, used it as a teaching moment for the group. 'Best educational prop I never planned,' she said.",
      location: "Charlottesville, Virginia, USA",
      source: "Virginia Master Gardeners",
    },
  ],
  seoQueries: [
    "dog stinkhorn mushroom identification",
    "mutinus caninus edible",
    "orange phallic mushroom in garden",
    "stinkhorn mushroom in mulch",
    "dog stinkhorn poisonous",
    "small orange stinkhorn identification",
    "mutinus caninus vs mutinus elegans",
    "weird orange mushroom smells bad",
    "dog stinkhorn how to get rid of",
    "phallic mushroom in flower bed",
    "stinkhorn egg in garden",
    "mutinus caninus look alikes",
  ],
  funFacts: [
    "The dog stinkhorn can grow from egg to full height in under four hours, making it one of the fastest-growing organisms in the fungal kingdom.",
    "Victorian naturalists were so scandalized by stinkhorn shapes that some early mycological illustrations were censored or excluded from publications aimed at general audiences.",
    "The spongy, honeycomb-textured stalk is actually a remarkably efficient structure, providing maximum height with minimum material, similar to engineering foam core.",
    "Flies attracted to the gleba can sometimes be seen fighting over the spore mass, jostling each other for position on the slimy tip.",
  ],
  images: [],
};

export default species;
