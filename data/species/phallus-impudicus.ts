import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "phallus-impudicus",
  commonName: "Common Stinkhorn",
  scientificName: "Phallus impudicus",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Phallales",
    family: "Phallaceae",
    genus: "Phallus",
  },
  summary:
    "A mushroom that looks exactly like what its Latin name implies and smells like rotting flesh. The Common Stinkhorn is one of the most recognizable, most discussed, and most polarizing fungi in the world. It emerges from a white 'egg' and reaches full height in just a few hours, then attracts flies with a putrid, dark-green spore slime that coats its tip.",
  description:
    "There is no polite way to describe Phallus impudicus. Linnaeus named it, and he was not being subtle. The mature mushroom is a pale, spongy, phallic column topped with a dark olive-green, foul-smelling spore mass called the gleba. The smell is often compared to rotting meat, and it serves a purpose: it attracts flies, which land on the gleba, eat it, and carry the spores away on their feet and bodies. It is one of the most effective insect-dispersal strategies in the fungal kingdom.\n\nThe life cycle starts with a structure called the 'egg,' a white, rubbery sphere about the size of a golf ball or small hen's egg, partially buried in the soil. Cut one open and you can see the compressed mushroom inside, already fully formed in miniature, surrounded by a gelatinous layer. The egg stage is actually edible and has been eaten in parts of Europe for centuries, typically sliced and fried.\n\nWhen conditions are right, the stinkhorn erupts from the egg with startling speed, reaching full height (15-25 cm) in as little as 4-6 hours. This rapid growth is powered not by cell division but by cell expansion; the cells absorb water and stretch like balloons. It is one of the fastest growth events in the biological world.\n\nThe Victorians were both horrified and fascinated by stinkhorns. Charles Darwin's granddaughter Etty Darwin reportedly organized search parties to find and destroy them before they could offend the sensibilities of female guests. She would burn them in secret, armed with a special pointed stick and a bag.",
  identification: {
    cap: "Not a true cap. The tip (receptacle) is conical, honeycombed with pits and ridges, and coated in dark olive-green, foul-smelling spore slime (gleba) when fresh. Once flies remove the gleba, the white, pitted structure beneath is revealed.",
    gills:
      "No gills. Spores are produced in the gleba, the dark-green slime that coats the upper portion of the fruiting body.",
    stem: "15-25 cm tall, 3-5 cm thick. White, spongy, hollow, with a honeycomb-like texture. Fragile and lightweight despite its height. Emerges from the remains of the egg (volva) at the base.",
    sporePrint: "Not applicable in the traditional sense. Spores are dispersed by insects that feed on the gleba.",
    odor: "Extremely strong, putrid, like rotting meat or sewage. Detectable from several meters away. The smell is produced by sulfur-containing compounds in the gleba designed to attract carrion flies.",
  },
  habitat:
    "Saprotrophic in woodlands, gardens, parks, hedgerows, and mulched areas. Often found in leaf litter under deciduous and coniferous trees, especially beech and oak. Frequently appears in gardens where wood chips or bark mulch have been used. Can fruit from buried dead wood or root systems.",
  season:
    "Summer through autumn, typically June through November. Peak season is August to October. The egg stage can persist underground for weeks before the mushroom erupts.",
  range:
    "Widespread across Europe, from the Mediterranean to Scandinavia. Common throughout the UK and Ireland. Found across temperate North America, especially in the eastern half. Also reported from parts of Asia, Australia, and Africa.",
  lookAlikes: [
    {
      name: "Dog Stinkhorn (Mutinus caninus)",
      distinction:
        "Smaller (5-12 cm tall), more slender, with a tapered orange-red tip rather than a distinct honeycomb head. Same putrid smell but less intense. Also grows from an egg. Edible at the egg stage but rarely collected.",
      externalUrl:
        "https://www.inaturalist.org/taxa/63580-Mutinus-caninus",
      externalSource: "iNaturalist",
    },
    {
      name: "Elegant Stinkhorn (Mutinus elegans)",
      distinction:
        "Found primarily in eastern North America. Similar to Dog Stinkhorn but with a brighter pinkish-red stem. Smaller than Phallus impudicus and lacks the distinct honeycomb cap structure.",
      externalUrl:
        "https://www.mushroomexpert.com/mutinus_elegans.html",
      externalSource: "MushroomExpert",
    },
    {
      name: "Stinkhorn Egg vs Amanita Egg",
      distinction:
        "Young stinkhorn eggs can superficially resemble the egg stage of deadly Amanita species. Key difference: cutting a stinkhorn egg in half reveals the compressed mushroom in gelatinous jelly. An Amanita egg shows the immature cap and gills of a typical mushroom. Always slice eggs open before consuming.",
      externalUrl:
        "https://en.wikipedia.org/wiki/Amanita",
      externalSource: "Wikipedia",
    },
  ],
  edibility: "edible-with-caution",
  edibilityNote:
    "The egg stage is edible and has been eaten in parts of France, Germany, and Eastern Europe for centuries. The gelatinous outer layer is peeled off, and the inner portion is sliced and fried or pickled. The taste is described as mild, slightly radish-like. The mature, erect form is technically non-toxic but the smell and texture make it thoroughly unappetizing. IMPORTANT: always slice eggs open to confirm they are stinkhorn eggs and not Amanita eggs.",
  gbifKey: 3314876,
  stories: [
    {
      title: "Etty Darwin's Stinkhorn Crusade",
      text: "Etty Darwin, granddaughter of Charles Darwin, was so scandalized by stinkhorns appearing on the family estate that she organized regular search-and-destroy missions. Armed with a pointed stick, she would locate and remove the mushrooms before they could emerge and offend female visitors. She reportedly burned them in secret afterward. The story was recounted by her niece, Gwen Raverat, in the memoir 'Period Piece.'",
      location: "Down House, Kent, England",
      source: "Period Piece by Gwen Raverat",
    },
    {
      title: "The Garden Mulch Invasion",
      text: "Gardening forums are full of alarmed homeowners discovering stinkhorns erupting from their bark mulch beds. One widely shared post from a gardener in Virginia described waking up to find 12 stinkhorns had appeared overnight in fresh hardwood mulch, filling the entire front porch with 'a smell like something died under the house.' The flies arrived within the hour.",
      location: "Richmond, Virginia, USA",
      source: "GardenWeb forums",
    },
    {
      title: "The French Egg Hunters",
      text: "In parts of Lorraine and Alsace, stinkhorn eggs (called 'oeufs du diable,' devil's eggs) have been collected and eaten as a spring delicacy for generations. Collectors probe soft soil near beech trees with sticks, looking for the firm, golf-ball-sized eggs just below the surface. Sliced and pan-fried in butter, they are said to taste mildly of radish.",
      location: "Lorraine, France",
    },
    {
      title: "Time-Lapse Fame",
      text: "Several time-lapse videos of Phallus impudicus erupting from its egg have gone viral on social media, collectively accumulating tens of millions of views. The speed of growth, from egg to full height in under six hours, is genuinely dramatic on camera. One BBC Earth clip was described as 'the most disturbing nature footage we have ever broadcast.'",
      location: "BBC Studios, UK",
      source: "BBC Earth",
    },
  ],
  seoQueries: [
    "common stinkhorn identification",
    "phallus impudicus edible",
    "stinkhorn mushroom garden",
    "stinkhorn egg edible",
    "mushroom that smells like death",
    "phallic mushroom in garden",
    "stinkhorn mushroom in mulch",
    "phallus impudicus life cycle",
    "stinkhorn vs amanita egg",
    "how to get rid of stinkhorns",
    "stinkhorn mushroom UK",
    "common stinkhorn look alikes",
    "why does stinkhorn smell",
    "stinkhorn mushroom time lapse",
  ],
  funFacts: [
    "Phallus impudicus can grow from egg to full height in 4-6 hours, making it one of the fastest-growing organisms on Earth. The growth is powered by water absorption, not cell division.",
    "The foul smell of the gleba is produced by dimethyl sulfide and other volatile sulfur compounds, the same chemicals responsible for the smell of rotting cabbage and certain sewage gases.",
    "Linnaeus gave this species its name in 1753. 'Phallus' and 'impudicus' (shameless) are both exactly what they sound like. Victorian mycologists tried and failed to get the name changed.",
    "Stinkhorn spores are not wind-dispersed like most mushrooms. Instead, flies eat the foul-smelling gleba and deposit spores in their droppings, sometimes hundreds of meters from the original mushroom.",
    "In parts of China, a related species (Phallus indusiatus, the veiled stinkhorn) is considered a delicacy and is commercially cultivated for use in soups and stir-fries.",
  ],
  images: [
    {
      filename: "01-field.jpg",
      alt: "Common Stinkhorn (Phallus impudicus) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Phallus_impudicus_LC0235.jpg",
      author: "Jörg Hempel",
      license: "CC BY-SA 3.0 de",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/de/deed.en",
    },
    {
      filename: "02-field.jpg",
      alt: "Common Stinkhorn (Phallus impudicus) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Karl_Johanssvamp,_Iduns_kokbok.png",
      author: "Elisabeth Östman (1869–1933)",
      license: "Public domain",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    },
    {
      filename: "03-field.jpg",
      alt: "Common Stinkhorn (Phallus impudicus) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Stinkmorchel.mit.Fliegen.P1094309.jpg",
      author: "Bautsch",
      license: "CC0",
      licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    },
    {
      filename: "04-field.jpg",
      alt: "Common Stinkhorn (Phallus impudicus) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Stinkmorchel.ohne.Fliegen.P1094311.jpg",
      author: "Bautsch",
      license: "CC0",
      licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    },
    {
      filename: "05-field.jpg",
      alt: "Common Stinkhorn (Phallus impudicus) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Hexenei.jpg",
      author: "Kettelring",
      license: "CC BY-SA 3.0",
      licenseUrl: "http://creativecommons.org/licenses/by-sa/3.0/",
    },
  ],
};

export default species;
