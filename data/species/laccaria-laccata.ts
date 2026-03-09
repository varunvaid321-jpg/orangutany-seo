import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "laccaria-laccata",
  commonName: "The Deceiver",
  scientificName: "Laccaria laccata",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Hydnangiaceae",
    genus: "Laccaria",
  },
  summary:
    "A small, incredibly variable mushroom that earned the name 'The Deceiver' because it looks different every single time you see it. Cap color swings from brick-red when wet to pale buff when dry, confusing beginners and experienced foragers alike.",
  description:
    "Laccaria laccata is one of those mushrooms that makes you question your own eyesight. You'll find one that's a rich reddish-brown, walk ten feet, and find another that's practically beige — and they're the same species. This dramatic color-shifting is caused by hygrophanous tissue: the cap changes color as it absorbs and loses moisture. When it rains, the caps darken to a warm brick-red or salmon-orange. As they dry out, they fade through tan to a washed-out buff that looks like an entirely different mushroom.\n\nThis variability is what earned it the common name 'The Deceiver.' It's not that the mushroom is trying to trick you — it's just genuinely that polymorphic. Cap shape ranges from convex to flat to slightly funnel-shaped. Size varies wildly. Even the gills can look different depending on age and moisture. The one constant is the widely-spaced, thick, pinkish gills dusted with white spores, and the tough, fibrous, twisted stem.\n\nDespite all this confusion, Laccaria laccata is one of the most common woodland mushrooms in the Northern Hemisphere. It's mycorrhizal, forming partnerships with a huge range of trees — pines, spruces, oaks, beeches, birches. You'll find it in dense conifer plantations, old broadleaf forests, heathland, even in parks and gardens. It fruits from early summer right through late autumn, often in troops of dozens along paths and in mossy clearings.",
  identification: {
    cap: "1–6 cm across. Convex when young, flattening and often developing a shallow central depression or wavy margin with age. Surface smooth to slightly scurfy. Extremely hygrophanous: brick-red to salmon-orange when moist, drying to pale buff, tan, or pinkish-beige. Margin often striate when wet.",
    gills:
      "Broadly attached (adnate) to slightly decurrent. Widely spaced and thick — noticeably distant compared to most small mushrooms. Pinkish to flesh-colored, becoming dusted white with mature spores. This white spore dust on pinkish gills is a key feature.",
    stem: "3–10 cm tall, 3–8 mm thick. Slender, tough, and fibrous — bends without snapping. Same color as cap or slightly darker. Surface longitudinally fibrous or twisted. No ring. Base may have fine white mycelial threads.",
    sporePrint: "White.",
    odor: "Faint, not distinctive. Slightly earthy.",
  },
  habitat:
    "Mycorrhizal with a very wide range of trees including pine, spruce, oak, beech, birch, and willow. Found in coniferous forests, mixed woodland, broadleaf forests, heathland, parks, and gardens. Thrives in poor, acidic soils. Often grows along forest paths, in mossy clearings, and on disturbed ground. Frequently appears in large troops.",
  season:
    "Early summer through late autumn, typically June through November. Peak fruiting in September and October. One of the longer-fruiting woodland species, often appearing well before and after most other mycorrhizal mushrooms.",
  range:
    "Extremely widespread across the entire Northern Hemisphere. Common throughout Europe, North America, and temperate Asia. Also reported from parts of North Africa and introduced to the Southern Hemisphere through forestry plantations in Australia and New Zealand.",
  lookAlikes: [
    {
      name: "Amethyst Deceiver (Laccaria amethystina)",
      image: "lookalike-amethystina.jpg",
      distinction:
        "The purple version of The Deceiver. Entirely violet to amethyst-purple when fresh, fading to buff with age. Same widely-spaced gills and tough fibrous stem. Also edible. Found in the same habitats, often growing alongside L. laccata.",
      externalUrl:
        "https://www.inaturalist.org/taxa/55899-Laccaria-amethystina",
      externalSource: "iNaturalist",
    },
    {
      name: "Inocybe species",
      image: "lookalike-inocybe.jpg",
      distinction:
        "Some small brown Inocybe species can superficially resemble dried-out Deceivers. Critical differences: Inocybe species have a brown or dull brown spore print (not white), often have a radish-like or spermatic odor, and many are seriously poisonous. Always check the spore print and smell if in doubt.",
      externalUrl:
        "https://www.inaturalist.org/taxa/58679-Inocybe",
      externalSource: "iNaturalist",
    },
    {
      name: "Mycena species",
      image: "lookalike-mycena.jpg",
      distinction:
        "Small Mycena mushrooms share woodland habitats but are generally smaller, more fragile, with very thin stems that snap easily (unlike the tough, fibrous Laccaria stem). Mycena gills are closely spaced, not widely spaced. Most are saprotrophic, growing on dead wood or leaf litter rather than being mycorrhizal.",
      externalUrl:
        "https://www.inaturalist.org/taxa/55922-Mycena",
      externalSource: "iNaturalist",
    },
  ],
  edibility: "edible",
  edibilityNote:
    "Edible but small and not worth collecting on its own. Best mixed with other species. Studies show it can accumulate arsenic from contaminated soil — avoid collecting from roadsides or industrial sites.",
  gbifKey: 2530926,
  stories: [
    {
      title: "The Mushroom That Teaches Humility",
      text: "Mycology instructors across Europe have long used Laccaria laccata as a teaching tool — not because it's dangerous, but because it demonstrates how wildly a single species can vary. At the Field Studies Council in the UK, beginners are famously shown a tray of 20 Deceivers and asked to sort them by species. Most students confidently create 4–5 groups. Then the instructor reveals they're all the same thing.",
      location: "United Kingdom",
      source: "Field Studies Council",
    },
    {
      title: "NASA's Mycorrhizal Experiment",
      text: "In 2007, researchers at NASA's Ames Research Center used Laccaria laccata spores in experiments testing whether mycorrhizal fungi could help plants grow in simulated Martian and lunar soils. The fungus successfully colonized pine seedling roots in nutrient-poor substrates, suggesting mycorrhizal partnerships could be crucial for any future off-world agriculture.",
      location: "Moffett Field, California, USA",
      source: "NASA Ames Research Center",
    },
    {
      title: "The Arsenic Accumulator Discovery",
      text: "In the early 2000s, Czech researchers found that Laccaria laccata growing near a former mining site in Bohemia contained arsenic levels up to 100 times higher than the surrounding soil. The discovery led to widespread warnings across Europe about collecting any edible mushroom from contaminated land, and L. laccata became a model organism for studying heavy metal bioaccumulation in fungi.",
      location: "Bohemia, Czech Republic",
      source: "Science of the Total Environment",
      sourceUrl: "https://www.sciencedirect.com/journal/science-of-the-total-environment",
    },
    {
      title: "A Forager's First Hundred",
      text: "British forager and author John Wright wrote that Laccaria laccata was the mushroom that convinced him identification was impossible — and then, paradoxically, the mushroom that taught him it wasn't. After seeing it in every conceivable form across a single autumn, the widely-spaced gills and fibrous stem became so familiar he could pick it out 'even when it was pretending to be something else entirely.'",
      location: "Dorset, England",
      source: "Mushrooms: River Cottage Handbook No. 1",
    },
    {
      title: "Reforestation's Secret Partner",
      text: "Forestry programs in Scandinavia and Scotland have inoculated nursery seedlings with Laccaria laccata for decades. The fungus is one of the earliest mycorrhizal colonizers of young trees, and studies in Swedish pine plantations showed that inoculated seedlings had 30–40% better survival rates in their first three years compared to uninoculated controls.",
      location: "Sweden",
      source: "Scandinavian Journal of Forest Research",
    },
  ],
  seoQueries: [
    "laccaria laccata identification",
    "the deceiver mushroom edible",
    "small brown mushroom widely spaced gills",
    "laccaria laccata vs inocybe",
    "hygrophanous mushroom identification",
    "deceiver mushroom look alikes",
    "laccaria laccata edibility",
    "common woodland mushroom UK",
    "mushroom changes color wet dry",
    "laccaria laccata habitat",
    "small pinkish gilled mushroom",
    "is the deceiver mushroom safe to eat",
    "laccaria laccata arsenic",
    "deceiver mushroom foraging",
    "laccaria laccata vs laccaria amethystina",
  ],
  funFacts: [
    "Laccaria laccata is so variable in appearance that it was historically described as over 20 different species before DNA analysis proved they were all the same mushroom.",
    "The Deceiver can form mycorrhizal relationships with at least 20 different tree species — one of the widest host ranges of any ectomycorrhizal fungus.",
    "Studies in the Czech Republic found that Laccaria laccata can accumulate arsenic at concentrations up to 100 times greater than the surrounding soil, making it one of the most effective arsenic bioaccumulators in the fungal kingdom.",
    "Laccaria laccata was one of the first mycorrhizal fungi used in commercial forestry inoculation programs. Millions of tree seedlings in Scandinavia are still treated with its spores before planting.",
    "The white spore dust that collects on the widely-spaced gills of The Deceiver is so distinctive that experienced foragers can identify the mushroom from this feature alone, even when the cap color has dried to an unrecognizable pale buff.",
  ],
  images: [
    {
      filename: "01-classic.jpg",
      alt: "Laccaria laccata mushroom showing typical brick-red cap in moist woodland conditions",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Laccaria_laccata_G4_(1).jpg",
      author: "Strobilomyces",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "02-group.jpg",
      alt: "Group of Laccaria laccata showing color variation from wet to dry specimens",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Laccaria_laccata_01.jpg",
      author: "Jerzy Opioła",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "03-gills.jpg",
      alt: "Underside of Laccaria laccata showing widely spaced pinkish gills dusted with white spores",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Laccaria_laccata_G4_(2).jpg",
      author: "Strobilomyces",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "04-dry.jpg",
      alt: "Dried-out Laccaria laccata specimen showing pale buff coloration",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Laccaria_laccata_(10).jpg",
      author: "Jerzy Opioła",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "05-habitat.jpg",
      alt: "Laccaria laccata growing among moss on forest floor",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Laccaria_laccata_(5).jpg",
      author: "Jerzy Opioła",
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
