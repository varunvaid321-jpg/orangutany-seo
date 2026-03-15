import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "pleurotus-pulmonarius",
  commonName: "Summer Oyster",
  scientificName: "Pleurotus pulmonarius",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Pleurotaceae",
    genus: "Pleurotus",
  },
  summary:
    "The warm-weather cousin of the common oyster mushroom. Lighter, thinner, and more delicate than Pleurotus ostreatus, the Summer Oyster fruits when it's too hot for its famous relative — filling the gap from late spring through early autumn on hardwood logs and stumps.",
  description:
    "If you've ever wondered why oyster mushrooms seem to vanish from the woods in July and August, it's because you've been looking for the wrong species. Pleurotus ostreatus is a cool-weather mushroom that fruits in autumn, winter, and spring. But its close relative Pleurotus pulmonarius picks up right where it leaves off, fruiting through the warmest months of the year.\n\nThe Summer Oyster is lighter in color — typically white to pale cream or pale gray, compared to the darker gray-brown of P. ostreatus. It's also thinner-fleshed and more delicate, with a slightly more refined flavor that some chefs actually prefer. The caps are fan-shaped to semicircular, growing in overlapping clusters from the sides of dead or dying hardwood trees. Like all oyster mushrooms, the gills run down the short lateral stem (decurrent), and the spore print is white to pale lilac.\n\nThis is one of the most widely cultivated mushrooms in the world, often grown on pasteurized straw, sawdust, or coffee grounds. Commercial growers love it because it fruits at higher temperatures than P. ostreatus, making it cheaper to produce in warm climates. Much of what's sold as 'oyster mushroom' in supermarkets during summer is actually P. pulmonarius. The two species are so closely related that some taxonomists have argued they're just temperature-adapted varieties of the same thing — but DNA analysis confirms they're distinct species.",
  identification: {
    cap: "5–15 cm across. Fan-shaped, semicircular, or spatula-shaped. White to pale cream, pale gray, or pale buff — distinctly lighter than P. ostreatus. Surface smooth, dry. Margin inrolled when young, becoming wavy with age. Flesh thin and white.",
    gills:
      "White to cream, decurrent (running down the stem). Closely spaced. Moderately thin. Produce a white to pale lilac spore print.",
    stem: "Short, lateral (off-center or absent), 1–3 cm long. White, firm, often hairy at the base. Many specimens are essentially stemless, attached directly to the substrate.",
    sporePrint: "White to pale lilac.",
    odor: "Pleasant, mild, slightly anise-like or mealy. Less strongly scented than P. ostreatus.",
  },
  habitat:
    "Saprotrophic on dead or dying hardwood trees — especially beech, oak, maple, birch, aspen, and poplar. Grows on logs, stumps, fallen branches, and standing dead trunks. Occasionally on injured living trees. Found in deciduous and mixed forests, parks, and urban areas with mature hardwoods. Fruits in overlapping shelf-like clusters.",
  season:
    "Late spring through early autumn, typically May through September. Peak fruiting in June through August — exactly when P. ostreatus is dormant. Can occasionally fruit into October in warm years.",
  range:
    "Widely distributed across temperate and subtropical regions of the Northern Hemisphere. Common throughout Europe, eastern North America, and temperate Asia. Also found in parts of Central America, South America, and Africa. Widely cultivated worldwide.",
  lookAlikes: [
    {
      name: "Oyster Mushroom (Pleurotus ostreatus)",
      slug: "pleurotus-ostreatus",
      image: "lookalike-ostreatus.jpg",
      distinction:
        "The most common confusion. P. ostreatus is darker (gray to gray-brown caps), thicker-fleshed, and fruits in cooler seasons (autumn through spring). If you find a pale, thin oyster mushroom on hardwood in July, it's almost certainly P. pulmonarius. Both are excellent edibles.",
      externalUrl:
        "https://www.inaturalist.org/taxa/48494-Pleurotus-ostreatus",
      externalSource: "iNaturalist",
    },
    {
      name: "Angel Wings (Pleurocybella porrigens)",
      image: "lookalike-porrigens.jpg",
      distinction:
        "Thinner and more delicate than any Pleurotus, pure white, with a translucent quality. Grows exclusively on dead conifer wood (not hardwood). Once considered edible but linked to fatal poisonings in Japan in 2004 among people with kidney problems. Avoid. The conifer substrate is the easiest way to distinguish it.",
      externalUrl:
        "https://en.wikipedia.org/wiki/Pleurocybella_porrigens",
      externalSource: "Wikipedia",
    },
    {
      name: "Crepidotus species",
      image: "lookalike-crepidotus.jpg",
      distinction:
        "Small, fan-shaped, stemless mushrooms that grow on dead wood and can superficially resemble young oyster mushrooms. Key difference: Crepidotus species have a brown spore print (not white or lilac), and the caps are much smaller — typically under 4 cm. Not considered edible.",
      externalUrl:
        "https://www.inaturalist.org/taxa/118288-Crepidotus",
      externalSource: "iNaturalist",
    },
  ],
  edibility: "edible",
  edibilityNote:
    "Excellent edible with a milder, more delicate flavor than P. ostreatus. Great sautéed, in stir-fries, or as a meat substitute.",
  gbifKey: 2526548,
  stories: [
    {
      title: "The Mushroom That Kept a Village Fed",
      text: "During World War II, rural communities in Hungary relied heavily on wild-foraged mushrooms when food supplies ran low. Pleurotus pulmonarius, fruiting prolifically on beech logs through the summer months, became a critical protein source. Elderly foragers in the Bükk Mountains still call it 'nyári kenyér' — summer bread — a name that dates back to those years.",
      location: "Bükk Mountains, Hungary",
      source: "Hungarian Ethnobotany Archives",
    },
    {
      title: "Coffee Ground Cultivation Goes Viral",
      text: "In 2009, Nikhil Arora and Alejandro Velez — two UC Berkeley students — started growing oyster mushrooms on used coffee grounds collected from campus cafés. Their startup, Back to the Roots, became a household name. The species they used? Pleurotus pulmonarius, chosen because it fruits at room temperature without requiring the cold shock that P. ostreatus needs.",
      location: "Berkeley, California, USA",
      source: "Back to the Roots",
      sourceUrl: "https://backtotheroots.com",
    },
    {
      title: "The Summer Oyster vs. Microplastics",
      text: "In 2020, researchers at the University of Sydney demonstrated that Pleurotus pulmonarius mycelium could break down certain types of polypropylene microplastics in laboratory conditions. The fungus produced enzymes that partially degraded the plastic within 90 days — sparking interest in using oyster mushroom species for bioremediation of plastic-contaminated soils.",
      location: "Sydney, Australia",
      source: "Journal of Hazardous Materials",
      sourceUrl: "https://www.sciencedirect.com/journal/journal-of-hazardous-materials",
    },
    {
      title: "Ghana's Mushroom Revolution",
      text: "Small-scale farmers in Ghana's Ashanti Region have turned to Pleurotus pulmonarius cultivation as a cash crop. The mushroom thrives in Ghana's tropical temperatures where P. ostreatus fails, and can be grown on agricultural waste like corn cobs and rice straw. By 2022, the Ghana Mushroom Growers Association reported over 2,000 registered small-scale producers, most growing P. pulmonarius.",
      location: "Ashanti Region, Ghana",
      source: "Ghana Mushroom Growers Association",
    },
    {
      title: "The Hospital Mushroom",
      text: "The common name 'Lung Oyster' (from pulmonarius, meaning 'of the lungs') doesn't refer to any medicinal property — it comes from an old folk belief that the mushroom's shape resembled a lung. Despite this, modern research has identified bioactive compounds in P. pulmonarius including lovastatin (a cholesterol-lowering statin) and pleuran (a beta-glucan with immunomodulatory properties), giving the old name an ironic twist.",
      location: "Global",
      source: "International Journal of Medicinal Mushrooms",
    },
  ],
  seoQueries: [
    "pleurotus pulmonarius identification",
    "summer oyster mushroom vs winter oyster",
    "white oyster mushroom on tree",
    "pleurotus pulmonarius edible",
    "lung oyster mushroom identification",
    "oyster mushroom growing in summer",
    "pleurotus pulmonarius vs pleurotus ostreatus",
    "how to grow summer oyster mushrooms",
    "pale oyster mushroom on hardwood",
    "pleurotus pulmonarius look alikes",
    "angel wings vs oyster mushroom",
    "summer oyster mushroom foraging",
    "oyster mushroom warm weather species",
    "pleurotus pulmonarius cultivation",
    "is summer oyster mushroom safe to eat",
  ],
  funFacts: [
    "Pleurotus pulmonarius is one of the few gourmet mushrooms that can be grown on used coffee grounds — a single café's daily waste can produce several kilograms of mushrooms per week.",
    "The Summer Oyster naturally produces lovastatin, the same cholesterol-lowering compound sold as a pharmaceutical drug. A single serving contains measurable amounts, though not enough to replace medication.",
    "Like all Pleurotus species, P. pulmonarius is a carnivorous fungus — its mycelium produces tiny lasso-like structures that trap and digest nematode worms in the soil, providing a nitrogen supplement to its diet.",
    "Much of what supermarkets sell as 'oyster mushroom' during summer months is actually Pleurotus pulmonarius, not the more famous P. ostreatus. Most consumers (and many store employees) have no idea they're different species.",
    "Pleurotus pulmonarius mycelium has been shown to partially break down polypropylene microplastics in laboratory conditions, making it a candidate species for bioremediation of plastic-contaminated environments.",
  ],
  images: [
    {
      filename: "01-classic.jpg",
      alt: "Cluster of Pleurotus pulmonarius summer oyster mushrooms growing on a hardwood log",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Pleurotus_pulmonarius_LC0228.jpg",
      author: "Lebrac",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "02-cluster.jpg",
      alt: "Overlapping shelf-like cluster of pale cream summer oyster mushrooms on dead beech",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Pleurotus_pulmonarius_JPG1.jpg",
      author: "Jean-Pol Grandmont",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
    {
      filename: "03-gills.jpg",
      alt: "Underside of Pleurotus pulmonarius showing white decurrent gills",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Pleurotus_pulmonarius_2013_G1.jpg",
      author: "George Chernilevsky",
      license: "Public domain",
      licenseUrl: "",
    },
    {
      filename: "04-young.jpg",
      alt: "Young Pleurotus pulmonarius specimens with inrolled cap margins on fallen log",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Pleurotus_pulmonarius_52595.jpg",
      author: "James Lindsey",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "05-habitat.jpg",
      alt: "Summer oyster mushrooms fruiting from a standing dead hardwood trunk in deciduous forest",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Pleurotus_pulmonarius_2013_G2.jpg",
      author: "George Chernilevsky",
      license: "Public domain",
      licenseUrl: "",
    },
  ],
};

export default species;
