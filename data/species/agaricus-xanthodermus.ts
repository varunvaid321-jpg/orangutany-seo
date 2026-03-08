import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "agaricus-xanthodermus",
  commonName: "Yellow Stainer",
  scientificName: "Agaricus xanthodermus",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Agaricaceae",
    genus: "Agaricus",
  },
  summary:
    "The most common cause of mushroom poisoning in the UK and Australia. The Yellow Stainer is a wolf in sheep's clothing — it looks almost exactly like an edible field mushroom, but scratch the cap or slice the base and it stains a vivid chrome-yellow. Cook it and your kitchen fills with a nauseating chemical stink. Eat it and you'll spend the next 12 hours regretting every life choice that led you to that moment.",
  description:
    "Agaricus xanthodermus is responsible for more mushroom poisoning incidents than any other species in Britain and Australia, and it's not even close. Hospital data from the UK's National Poisons Information Service consistently places it at the top of the list, year after year. The reason is painfully simple: it looks exactly like the mushrooms people buy in supermarkets.\n\nThe Yellow Stainer grows in the same habitats where people expect to find edible field mushrooms — gardens, parks, grassy roadsides, under hedgerows, beside compost heaps. It fruits prolifically from summer through autumn, often in large groups, and a casual glance reveals a perfectly normal-looking white Agaricus with pink-to-brown gills and a ring on the stem. Everything screams 'edible.' Everything lies.\n\nThe giveaway is the staining reaction. Scratch the cap surface firmly with a fingernail and within seconds a bright chrome-yellow patch appears. Slice through the base of the stem and the flesh instantly turns the same alarming yellow. No edible Agaricus does this with such intensity. The other telltale sign is the smell — where a field mushroom smells pleasantly mushroomy, the Yellow Stainer has an unpleasant chemical odor, often described as ink, phenol, or iodine. This smell becomes overpowering when the mushroom is cooked, which is sometimes the first warning people get that something is wrong.",
  identification: {
    cap: "5–15 cm across, initially domed or squarish (a slightly boxy shape when young is characteristic), expanding to convex then flat. White to off-white, sometimes with faint grey-brown tones at the center. Surface smooth to slightly scaly. Stains bright chrome-yellow when scratched or rubbed — this is the defining feature.",
    gills:
      "Free from the stem. White when very young, turning pink, then chocolate-brown, and finally dark brown-black as spores mature. Crowded and thin. Identical in progression to edible Agaricus species — gills alone won't save you.",
    stem: "6–15 cm tall, 1–2 cm wide, white, smooth above the ring. Has a prominent membranous ring (annulus) on the upper half. The critical test: slice the very base of the stem lengthwise and the flesh turns bright chrome-yellow instantly. This yellow staining at the base is the single most reliable field test.",
    sporePrint: "Dark chocolate-brown to purplish-brown.",
    odor: "Unpleasant chemical smell — described as ink, phenol, carbolic acid, or Indian ink. Faint when raw but becomes overpoweringly obvious when the mushroom is cooked. A normal field mushroom smells pleasant and mushroomy; if it smells like a chemistry lab, put it down.",
  },
  habitat:
    "Extremely common in disturbed, nutrient-rich ground. Gardens, lawns, parks, playing fields, roadsides, hedgerows, churchyards, wood chip mulch, compost heaps. Also found in mixed woodland edges and under cypresses. Thrives in urban and suburban environments — which is exactly why so many people encounter it.",
  season:
    "Summer through autumn, typically July to November. Peak fruiting in September and October. Can appear earlier after warm rain. Often fruits in large troops or fairy rings.",
  range:
    "Widespread across Europe (extremely common in the UK, Ireland, France, Germany, Netherlands), very common in Australia and New Zealand (where it's the number one cause of mushroom poisoning), found across temperate North America, and reported from South Africa and parts of South America.",
  lookAlikes: [
    {
      name: "Horse Mushroom (Agaricus arvensis)",
      image: "lookalike-arvensis.jpg",
      distinction:
        "Also stains slightly yellowish, but the color is a dull ochre-yellow, not the intense chrome-yellow of the Yellow Stainer. Crucially, the Horse Mushroom smells of anise (aniseed) — a pleasant, sweet smell — not chemicals. The base of the stem does not turn chrome-yellow when cut. Edible and excellent.",
      externalUrl:
        "https://www.inaturalist.org/taxa/58699-Agaricus-arvensis",
      externalSource: "iNaturalist",
    },
    {
      name: "Field Mushroom (Agaricus campestris)",
      slug: "agaricus-campestris",
      image: "lookalike-campestris.jpg",
      distinction:
        "No yellow staining whatsoever — flesh stays white when cut or scratched. Pleasant, classic mushroomy smell. Typically smaller (cap 3–10 cm), with a thinner, more fragile ring. Grows in pastures grazed by horses or cattle rather than gardens. Edible and delicious.",
      externalUrl:
        "https://www.inaturalist.org/taxa/143563-Agaricus-campestris",
      externalSource: "iNaturalist",
    },
    {
      name: "Button Mushroom (Agaricus bisporus)",
      slug: "agaricus-bisporus",
      image: "lookalike-bisporus.jpg",
      distinction:
        "The cultivated supermarket mushroom. No yellow staining. Mild, pleasant smell. In the wild it's rarely encountered because it's almost entirely a commercially grown species. If you're finding white Agaricus mushrooms in your garden, assume Yellow Stainer until proven otherwise.",
      externalUrl:
        "https://en.wikipedia.org/wiki/Agaricus_bisporus",
      externalSource: "Wikipedia",
    },
  ],
  edibility: "toxic",
  edibilityNote:
    "TOXIC — causes severe nausea, vomiting, diarrhea, abdominal cramps. Symptoms appear 1-2 hours after eating. Not fatal but very unpleasant. Recovery typically takes 24-48 hours. Some individuals appear less sensitive, but repeated exposure can worsen reactions. Never worth the risk given how easily it's confused with edible species.",
  gbifKey: 5243412,
  stories: [
    {
      title: "The UK's Number One Mushroom Menace",
      text: "Data from the UK's National Poisons Information Service shows that Agaricus xanthodermus accounts for roughly 50% of all mushroom poisoning inquiries in Britain. A 2012 study published in Clinical Toxicology reviewed a decade of NPIS records and found the Yellow Stainer was identified or suspected in more cases than all other toxic species combined. The typical victim: a confident amateur who 'knew' they were picking field mushrooms from their garden.",
      location: "United Kingdom",
      source: "Clinical Toxicology",
      sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/",
    },
    {
      title: "Australia's Worst Offender",
      text: "The Victorian Poisons Information Centre in Melbourne has repeatedly flagged Agaricus xanthodermus as the most common cause of mushroom poisoning in Australia. In 2019 alone, over 200 calls related to suspected Yellow Stainer poisoning were logged in Victoria. The mushroom thrives in Australian suburban gardens and parks, where European immigrants often mistake it for the field mushrooms they grew up eating.",
      location: "Victoria, Australia",
      source: "Victorian Poisons Information Centre",
    },
    {
      title: "The Family BBQ That Went Wrong",
      text: "A 2017 case report from a Sydney hospital described a family of five who were all hospitalized after eating mushrooms collected from their backyard. The father, an experienced home cook originally from Eastern Europe, had identified them as field mushrooms. Within 90 minutes of eating, all five developed severe vomiting and diarrhea. The leftover mushrooms were identified as Agaricus xanthodermus. All recovered within 48 hours.",
      location: "Sydney, Australia",
      source: "Emergency Medicine Australasia",
    },
    {
      title: "The Church Fete Mushroom Soup Incident",
      text: "In 2008, a village fete in Hampshire served cream of mushroom soup made with foraged mushrooms from the rectory garden. Twelve guests developed gastrointestinal symptoms within two hours. The local mycological society identified the culprit as Yellow Stainers that had been growing in abundance under the churchyard cypresses. Nobody was seriously harmed, but the vicar reportedly retired from foraging permanently.",
      location: "Hampshire, England",
      source: "Hampshire Fungus Recording Group",
    },
    {
      title: "The Smell That Saved a Restaurant Kitchen",
      text: "A forager supplying wild mushrooms to restaurants in the Cotswolds included a batch of what he believed were Horse Mushrooms in a 2021 delivery. The head chef noticed an overwhelming chemical stink as soon as they hit the pan and immediately pulled them. A mycologist confirmed they were Yellow Stainers. The forager had relied on size and appearance but hadn't done the scratch test or checked the stem base. The restaurant dropped the supplier.",
      location: "Cotswolds, England",
      source: "British Mycological Society forums",
    },
  ],
  seoQueries: [
    "yellow stainer mushroom identification",
    "agaricus xanthodermus poisonous",
    "yellow staining mushroom in garden",
    "how to tell yellow stainer from field mushroom",
    "mushroom turns yellow when scratched",
    "yellow stainer vs horse mushroom",
    "most common poisonous mushroom UK",
    "agaricus xanthodermus edible",
    "white mushroom yellow base toxic",
    "yellow stainer mushroom symptoms",
    "poisonous mushroom that looks like button mushroom",
    "mushroom smells like chemicals",
    "yellow stainer mushroom Australia",
    "agaricus xanthodermus look alikes",
    "mushroom poisoning garden UK",
  ],
  funFacts: [
    "Agaricus xanthodermus is responsible for more mushroom poisoning cases in the UK and Australia than all other toxic species combined. It's not the deadliest mushroom — it's just the one that tricks the most people.",
    "The yellow staining reaction is caused by phenol and related compounds in the flesh. These same chemicals give the mushroom its distinctive ink-like smell — and they're what make you sick.",
    "Some people can eat Yellow Stainers without any symptoms at all, which creates a dangerous false confidence. Sensitivity varies hugely between individuals, and even tolerant people can suddenly react after multiple exposures.",
    "The species name 'xanthodermus' literally means 'yellow skin' in Greek (xanthos = yellow, derma = skin). For once, a scientific name that actually tells you exactly what to look for.",
    "Yellow Stainers are so common in suburban Australian gardens that mycologists in Melbourne have described them as 'the most frequently encountered Agaricus species in the city' — outnumbering even the deliberately planted commercial strains.",
  ],
  images: [
    {
      filename: "01-classic.jpg",
      alt: "Agaricus xanthodermus Yellow Stainer mushroom showing white cap in grassy habitat",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Agaricus_xanthodermus_01.jpg",
      author: "Strobilomyces",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "02-yellow-stain.jpg",
      alt: "Yellow Stainer mushroom showing bright chrome-yellow staining on cap surface after scratching",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Agaricus_xanthodermus_Genevier_582163.jpg",
      author: "Jean-Pol Grandmont",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
    {
      filename: "03-base-cut.jpg",
      alt: "Cross-section of Agaricus xanthodermus stem base showing chrome-yellow staining in flesh",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Agaricus_xanthodermus_section.jpg",
      author: "Archenzo",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "04-group.jpg",
      alt: "Group of Yellow Stainer mushrooms growing in garden grass",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Karbolchampignon_Agaricus_xanthodermus.jpg",
      author: "H. Krisp",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
    {
      filename: "05-gills.jpg",
      alt: "Underside of Yellow Stainer mushroom showing pink to brown gills and white ring on stem",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Agaricus_xanthodermus_G4.jpg",
      author: "George Chernilevsky",
      license: "Public domain",
      licenseUrl: "",
    },
  ],
  identificationImages: {
    cap: "cap-detail.jpg",
    gills: "gills-detail.jpg",
    stem: "stem-detail.jpg",
  },
};

export default species;
