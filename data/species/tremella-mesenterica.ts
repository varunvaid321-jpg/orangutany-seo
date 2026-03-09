import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "tremella-mesenterica",
  commonName: "Witch's Butter",
  scientificName: "Tremella mesenterica",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Tremellomycetes",
    order: "Tremellales",
    family: "Tremellaceae",
    genus: "Tremella",
  },
  summary:
    "A bright yellow-orange, gelatinous, brain-like fungus that appears on dead hardwood branches after rain. Witch's Butter is technically not even eating the wood — it's parasitizing another fungus (Peniophora) that's eating the wood. Edible but essentially flavorless, used more as a texture ingredient.",
  description:
    "Tremella mesenterica is the fungus equivalent of a plot twist. You see a bright yellow blob on a dead branch and think: there's a jelly fungus decomposing wood. But that's not what's happening at all. Tremella mesenterica is actually a mycoparasite — it's attacking and feeding on Peniophora fungi (crust fungi) that are themselves decomposing the wood. The yellow jelly you see is just the visible fruiting body of a fungus-on-fungus crime scene.\n\nThe common name 'Witch's Butter' has roots in European folklore. In parts of Scandinavia and Eastern Europe, finding the golden jelly on your gate or door frame was considered evidence that a witch had cursed your home. The prescribed remedy was to prick the jelly with pins to 'kill' the curse, which would cause the fungus to deflate as its gelatinous water leaked out. In Sweden it was called 'trollsmör' (troll's butter). English-speaking regions settled on 'Witch's Butter,' and the name stuck.\n\nOne of the most entertaining properties of Tremella mesenterica is its ability to revive. In dry weather, the fruiting bodies shrivel to thin, hard, dark orange crusts that look like old varnish on the bark. Then it rains, and within hours they swell back to full, wobbling, gelatinous glory. You can watch this happen in real time by bringing a dried specimen inside and misting it with water. This rehydration trick can repeat multiple times over the life of a single fruiting body.",
  identification: {
    cap: "No cap. Fruiting body is an irregular, brain-like or lobed gelatinous mass, 1–10 cm across. Bright yellow to golden-orange when fresh and hydrated. Surface is smooth, shiny, and slightly greasy-looking. Shrinks to a hard, dark orange crust when dry.",
    gills:
      "No gills. Spores are produced on the outer surface of the gelatinous mass. The entire fruiting body is essentially one continuous spore-bearing surface folded into convoluted lobes.",
    stem: "No stem. The fruiting body grows directly from the bark surface, spreading across the substrate.",
    sporePrint: "White to pale yellow.",
    odor: "Not distinctive. Very faint, slightly sweet when fresh.",
  },
  habitat:
    "Found on dead attached or recently fallen branches of deciduous hardwoods — especially oak, hazel, birch, and beech. Almost always associated with Peniophora crust fungi, which must be present in the wood for Tremella to fruit. Common in hedgerows, woodland edges, parks, and gardens.",
  season:
    "Primarily autumn through spring, most visible after rain in cooler months. Can appear year-round in wet climates. Dried fruiting bodies persist on branches between wet periods and revive with each rainfall.",
  range:
    "Cosmopolitan — found on every continent except Antarctica. Common throughout Europe, North America, temperate Asia, Australasia, and parts of South America and Africa. One of the most widespread and recognizable jelly fungi in the world.",
  lookAlikes: [
    {
      name: "Orange Jelly (Dacrymyces chrysospermus)",
      image: "lookalike-dacrymyces.jpg",
      distinction:
        "Very similar in color and gelatinous texture, but Dacrymyces chrysospermus grows exclusively on dead conifer wood (pine, spruce, fir) — never hardwood. It's also a true wood decomposer, not a mycoparasite. The lobes tend to be more tightly bunched and the color is often more orange than yellow.",
      externalUrl:
        "https://www.inaturalist.org/taxa/118028-Dacrymyces-chrysospermus",
      externalSource: "iNaturalist",
    },
    {
      name: "Yellow Stagshorn (Calocera viscosa)",
      image: "lookalike-calocera.jpg",
      distinction:
        "Similar bright yellow color but completely different structure — Calocera viscosa forms firm, upright, antler-shaped or forked branches rather than a blobby, gelatinous mass. The texture is rubbery and tough, not wobbly. Grows on dead conifer stumps and roots, not hardwood branches.",
      externalUrl:
        "https://www.inaturalist.org/taxa/63405-Calocera-viscosa",
      externalSource: "iNaturalist",
    },
    {
      name: "Naematelia aurantia",
      image: "lookalike-naematelia.jpg",
      distinction:
        "Formerly classified as Tremella aurantia, this species is extremely similar to T. mesenterica but grows on dead conifer wood and parasitizes Stereum fungi rather than Peniophora. Distinguishing the two in the field is difficult — substrate (conifer vs hardwood) is the most reliable clue without microscopy.",
      externalUrl:
        "https://en.wikipedia.org/wiki/Naematelia_aurantia",
      externalSource: "Wikipedia",
    },
  ],
  edibility: "edible",
  edibilityNote:
    "Technically edible and non-toxic, but essentially flavorless. The gelatinous texture is the only thing it brings to the table. Occasionally used in Asian-style soups as a textural ingredient, similar to its relative Tremella fuciformis. Most foragers leave it alone — there's simply nothing to taste. Not worth collecting for culinary purposes unless you're specifically after the jelly texture.",
  gbifKey: 11945016,
  stories: [
    {
      title: "The Witch's Curse You Stab With Pins",
      text: "In Scandinavian and Eastern European folklore, finding Witch's Butter growing on your door or gate meant a witch had placed a curse on your household. The recommended counterspell was to prick the jelly with straight pins or thorns, which would cause it to deflate and weep liquid — symbolically 'killing' the curse. This practice was documented well into the 19th century in rural Sweden and Germany.",
      location: "Scandinavia and Eastern Europe",
      source: "European folklore records",
    },
    {
      title: "The Rehydration Trick That Fascinates Foragers",
      text: "One of Tremella mesenterica's most shared traits on nature forums is its dramatic rehydration. Dried specimens, shriveled to hard orange crusts, swell back to wobbling golden brains within an hour or two when misted with water. Nature educators and foraging walk leaders frequently demonstrate this in the field, and time-lapse videos of the process are a staple of mushroom identification channels on YouTube.",
      location: "Worldwide",
      source: "Nature education and foraging communities",
    },
    {
      title: "A Mycoparasite Puzzle That Took Decades to Solve",
      text: "For most of the 20th century, mycologists assumed Tremella mesenterica was a wood-rotting saprobe. It wasn't until careful laboratory work in the 1960s–1980s by researchers including Franz Oberwinkler demonstrated that Tremella couldn't grow without Peniophora host fungi present. The revelation that such a common, conspicuous fungus was actually a parasite of another fungus surprised the field.",
      location: "Germany",
      source: "Mycological Research",
    },
    {
      title: "The Winter Foraging Walk Staple",
      text: "Guided winter foraging walks across the UK and Pacific Northwest almost always feature Tremella mesenterica as one of the most reliable finds. Because it fruits after rain in cool weather and is unmistakably bright yellow against dark bark, it serves as an excellent teaching fungus for beginners. Walk leaders report that participants remember it more than almost any other species.",
      location: "United Kingdom and Pacific Northwest, USA",
      source: "Various foraging guides",
    },
    {
      title: "Troll's Butter in Swedish Children's Books",
      text: "The Swedish name 'trollsmör' (troll's butter) has made Tremella mesenterica a recurring character in Scandinavian children's nature books. Several popular Swedish nature education series include the fungus in their forest chapters, with illustrations of trolls spreading golden jelly on bread. It's become one of the most culturally embedded fungi in Swedish childhood education.",
      location: "Sweden",
      source: "Swedish nature education publishers",
    },
  ],
  seoQueries: [
    "witchs butter mushroom",
    "tremella mesenterica identification",
    "yellow jelly fungus on dead wood",
    "witchs butter edible",
    "yellow brain fungus identification",
    "tremella mesenterica parasite",
    "bright yellow fungus on tree branch",
    "witchs butter look alikes",
    "yellow jelly mushroom after rain",
    "tremella mesenterica vs dacrymyces",
    "orange jelly fungus on hardwood",
    "witch butter fungus folklore",
    "yellow blob on dead branch identification",
    "tremella mesenterica edibility",
    "gelatinous yellow fungus UK",
  ],
  funFacts: [
    "Witch's Butter doesn't actually eat wood — it parasitizes Peniophora crust fungi that are eating the wood. You're looking at a fungus feeding on a fungus, which makes it a mycoparasite rather than a decomposer.",
    "In dry weather, Tremella mesenterica shrivels to a hard, dark orange crust that looks like old varnish. When it rains, it rehydrates and swells back to its full golden, wobbly glory within hours — and this cycle can repeat dozens of times.",
    "The name 'Witch's Butter' comes from Scandinavian and Eastern European folklore, where finding the golden jelly on your doorframe was thought to be evidence of a witch's curse. The prescribed remedy was to stab it with pins.",
    "Tremella mesenterica is found on every continent except Antarctica, making it one of the most cosmopolitan fungi on Earth. Its dependence on Peniophora fungi means that wherever Peniophora goes, Tremella can follow.",
    "Despite being technically edible, Witch's Butter has essentially zero flavor. The only culinary appeal is its gelatinous texture, which has led some foragers to experiment with it in Asian-style soups as a substitute for commercial tremella species.",
  ],
  images: [
    {
      filename: "01-classic.jpg",
      alt: "Bright yellow Tremella mesenterica Witch's Butter growing on a dead hardwood branch after rain",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Tremella_mesenterica_-_Goldgelber_Zitterling.jpg",
      author: "Holger Krisp",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
    {
      filename: "02-close-up.jpg",
      alt: "Close-up of golden gelatinous lobes of Tremella mesenterica showing brain-like folds",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Tremella_mesenterica_(5085305879).jpg",
      author: "Jason Hollinger",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0",
    },
    {
      filename: "03-branch.jpg",
      alt: "Multiple Witch's Butter fruiting bodies along a fallen oak branch in winter woodland",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Tremella_mesenterica_-_geograph.org.uk_-_1073815.jpg",
      author: "Keith Edkins",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    },
    {
      filename: "04-dried.jpg",
      alt: "Dried Tremella mesenterica showing shriveled dark orange crust form on bark",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Tremella_mesenterica_98941.jpg",
      author: "Amadej Trnkoczy",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "05-habitat.jpg",
      alt: "Yellow brain fungus Tremella mesenterica on dead hazel branch showing typical hedgerow habitat",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Tremella_mesenterica_-_Lindsey.jpg",
      author: "James Lindsey",
      license: "CC BY-SA 2.5",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.5",
    },
  ],
  identificationImages: {
    cap: "surface-detail.jpg",
    gills: "texture-detail.jpg",
    stem: "base-detail.jpg",
  },
};

export default species;
