import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "lepiota-cristata",
  commonName: "Stinking Dapperling",
  scientificName: "Lepiota cristata",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Agaricaceae",
    genus: "Lepiota",
  },
  summary:
    "A small toxic mushroom found in gardens, parks, and woodland edges across temperate regions. Recognized by its reddish-brown concentrically scaled cap and distinctive unpleasant rubbery odor, it contains amatoxins — the same deadly compounds found in the Death Cap.",
  description:
    "Lepiota cristata is a small, delicate mushroom with a cap 2-5 cm across. The cap is whitish with distinctive concentric rings of reddish-brown to chestnut-brown scales that radiate outward from a solid, darker central disc. The scales become more spread apart toward the margin, giving it a characteristically patterned look. The overall stature is slender and fragile.\n\nThis saprotrophic fungus feeds on decaying organic matter in soil. It thrives in nutrient-rich, disturbed habitats including garden beds, park lawns, woodland edges, hedgerows, and along paths. It often appears in small groups or scattered troops after rain in summer and autumn. It is one of the most common small Lepiota species in Europe and North America.\n\nLepiota cristata contains amatoxins (primarily alpha-amanitin), the same class of toxins found in Amanita phalloides. While the small size of the fruitbodies means accidental lethal doses are less likely than with larger amatoxin-containing species, ingestion can still cause serious poisoning with delayed-onset liver and kidney damage. Symptoms may not appear until 6-12 hours after consumption, by which time organ damage may already be underway.\n\nBecause several small white-capped mushrooms grow in similar habitats, correct identification is critical. The distinctive unpleasant odor — often described as rubbery, chemical, or like burnt rubber — is one of the most reliable field characters. Its free gills, thin annular ring, and concentric cap scales further aid identification. The name 'cristata' means 'crested,' referring to the pointed central disc of scales on the cap.",
  identification: {
    cap: "2-5 cm diameter. Convex becoming flat with age. White background with concentric reddish-brown to chestnut scales radiating from a solid dark-brown central disc. Margin sometimes slightly striate.",
    gills:
      "Free, crowded, white to cream. Do not change color significantly with age.",
    stem: "3-6 cm tall, 3-5 mm thick. White to pale cream, slender, hollow. Fragile ring zone in upper portion (often ephemeral or lost). Base slightly swollen but no volva.",
    sporePrint: "White to cream.",
    odor: "Distinctive unpleasant smell — described as rubbery, chemical, or like burnt rubber/coal gas. This is the key diagnostic feature and source of the common name 'Stinking Dapperling.'",
  },
  habitat:
    "Gardens, parks, lawns, woodland edges, hedgerows, path sides, compost heaps, and other nutrient-rich disturbed ground. Saprotrophic on decaying organic matter in soil. Prefers humus-rich soils. Often found near deciduous trees but not mycorrhizal.",
  season:
    "Late summer through autumn (July-November in the Northern Hemisphere), with peak fruiting in September-October. Appears after periods of rain.",
  range:
    "Widely distributed across temperate regions worldwide. Common throughout Europe (especially Britain, France, Germany, Scandinavia), North America (both coasts and central regions), and also recorded in temperate parts of Asia, Australia, and New Zealand.",
  lookAlikes: [
    {
      name: "Deadly Dapperling (Lepiota brunneoincarnata)",
      slug: "lepiota-brunneoincarnata",
      distinction:
        "Also small with scaled cap, but scales are pinkish-brown to wine-brown rather than chestnut. Lacks the strong unpleasant odor of L. cristata. Deadly — contains high concentrations of amatoxins. Found in similar habitats.",
    },
    {
      name: "Parasol Mushroom (Macrolepiota procera)",
      slug: "macrolepiota-procera",
      distinction:
        "Much larger (cap 10-30 cm) with a snakeskin-patterned stem and movable double ring. Young specimens could theoretically be confused, but the size difference at maturity and the movable ring are distinctive. Edible and highly regarded.",
    },
    {
      name: "White Dapperling (Leucocoprinus leucothites)",
      externalUrl: "https://www.inaturalist.org/taxa/1558279-Leucocoprinus-leucothites",
      externalSource: "iNaturalist",
      distinction:
        "Similar size range (5-10 cm) but cap is smooth, white to off-white without concentric scales. Lacks the unpleasant odor. Grows in grass and lawns. Edibility uncertain — best avoided due to confusion risk with toxic species.",
    },
  ],
  edibility: "toxic",
  edibilityNote:
    "Toxic. Contains amatoxins including alpha-amanitin, which cause delayed-onset liver poisoning. Symptoms typically begin 6-12 hours after ingestion with severe gastrointestinal distress, followed by an apparent recovery period, then potentially fatal liver and kidney failure 3-5 days later. While the small size makes accidental lethal poisoning less common than with larger amatoxin species like Amanita phalloides, any ingestion should be treated as a medical emergency. Never consume any small Lepiota species — multiple species in this genus are deadly.",
  gbifKey: 2535471,
  funFacts: [
    "The name 'cristata' comes from Latin meaning 'crested,' referring to the pointed central disc of scales on the cap.",
    "Lepiota cristata is so common in British gardens that it was once called the 'garden dapperling' before its toxicity was fully understood.",
    "The unpleasant chemical odor is so distinctive that experienced mycologists can often identify this species by smell alone, even before seeing the mushroom.",
    "Despite its small size, L. cristata contains the same class of toxins (amatoxins) as the Death Cap — one of the deadliest mushroom toxins known.",
    "Lepiota cristata can appear in potted houseplants and greenhouse soils, occasionally surprising indoor gardeners with its sudden appearance.",
  ],
  seoQueries: [
    "lepiota cristata identification",
    "stinking dapperling mushroom",
    "is lepiota cristata poisonous",
    "lepiota cristata toxicity",
    "lepiota cristata vs lepiota brunneoincarnata",
    "lepiota cristata vs macrolepiota procera",
    "stinking dapperling vs parasol mushroom",
    "lepiota cristata look alikes",
    "small lepiota species identification",
    "lepiota cristata edibility",
    "lepiota cristata amatoxins",
    "stinking dapperling smell",
    "lepiota cristata habitat",
    "lepiota cristata spore print",
    "toxic garden mushrooms lepiota",
    "small white mushroom with brown scales identification",
  ],
  stories: [
    {
      title: "Amatoxins Found in Small Lepiota Species",
      text: "Research published in Mycologia confirmed that Lepiota cristata produces alpha-amanitin, the same toxin responsible for over 90% of mushroom fatality cases worldwide. This finding expanded the known range of amatoxin-producing genera beyond Amanita and Galerina.",
      location: "International collaboration",
      source: "Mycologia (2014)",
    },
    {
      title: "Britain's Most Common Small Lepiota",
      text: "Field surveys by the British Mycological Society consistently rank Lepiota cristata as the most frequently recorded small Lepiota in Britain, appearing in over 3,000 recorded sites. Its abundance in gardens and parks makes it one of the most commonly encountered toxic mushrooms in domestic settings.",
      location: "United Kingdom",
      source: "British Mycological Society",
    },
    {
      title: "European Poison Center Warnings",
      text: "French and German poison control centers have issued periodic warnings about small Lepiota species after clusters of poisoning incidents. In several cases, immigrants unfamiliar with European fungi mistook small Lepiota species for edible mushrooms from their home countries.",
      location: "France and Germany",
      source: "Centre Antipoison de Paris",
    },
    {
      title: "DNA Barcoding Reveals Cryptic Species",
      text: "Molecular studies by mycologist Else Vellinga used DNA barcoding to clarify species boundaries within Lepiota, confirming L. cristata as a distinct, widespread species and revealing several cryptic species previously lumped under the same name.",
      location: "International",
      source: "Vellinga, Mycotaxon (2004)",
    },
    {
      title: "The Little Brown Mushroom Problem",
      text: "Mycologists have long warned that small Lepiota species are among the most dangerous 'LBMs' (little brown mushrooms). A 2004 review in Clinical Toxicology documented multiple European poisoning cases from small Lepiota species, highlighting that foragers mistaking them for edible species faced severe liver damage.",
      location: "Europe",
      source: "Clinical Toxicology (2004)",
    },
  ],
  images: [
    {
      filename: "01-field.jpg",
      alt: "Stinking Dapperling (Lepiota cristata) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Lepiota_cristata_G5_(5).JPG",
      author: "Jerzy Opioła",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "03-field.jpg",
      alt: "Stinking Dapperling (Lepiota cristata) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:2011-12-01_Lepiota_cristata_(Bolton)_P._Kumm_186612.jpg",
      author: "This image was created by user Copyright ©2011 the tnihekr at Mushroom Observer, a source for mycological images.You can",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
  ],
};

export default species;
