import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "clitocybe-dealbata",
  commonName: "Ivory Funnel",
  scientificName: "Clitocybe dealbata",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Tricholomataceae",
    genus: "Clitocybe",
  },
  summary:
    "The Ivory Funnel is a small, ghostly white lawn mushroom packed with muscarine. It grows in the same grassy areas where people hunt for edible fairy ring mushrooms, making it a textbook case of a dangerous doppelganger hiding in plain sight.",
  description:
    "Clitocybe dealbata is the reason experienced foragers get nervous when beginners say they found 'little white mushrooms on the lawn.' This small, nondescript, ivory-white mushroom contains dangerously high concentrations of muscarine, a toxin that triggers the parasympathetic nervous system into overdrive. Within 15 to 30 minutes of eating it, victims experience profuse sweating, salivation, tears, blurred vision, abdominal cramps, and a dangerously slow heartbeat. In severe cases, the respiratory muscles can be affected.\n\nThe Ivory Funnel is especially treacherous because it often grows in fairy rings on lawns and grasslands, right alongside the genuinely edible Fairy Ring Champignon (Marasmius oreades). Foragers collecting the edible species from a fairy ring can easily grab a few Ivory Funnels mixed in without noticing. The two species are similar in size and both grow in short grass, but the Ivory Funnel is broader, flatter, and white to cream-colored, while the Fairy Ring Champignon is more buff-tan with a distinctive tough, springy stem.\n\nThis mushroom is common across Europe and North America, appearing in lawns, parks, playing fields, and roadside verges from late summer through autumn. Its small size (caps rarely exceed 4 cm) means it is easily overlooked, but just two or three caps contain enough muscarine to cause serious symptoms in an adult.",
  identification: {
    cap: "2-4 cm across. Convex at first, becoming flat to slightly depressed or funnel-shaped. Ivory white to pale cream, sometimes with faint concentric zones. Surface smooth, slightly powdery or frosted when dry.",
    gills: "Adnate to slightly decurrent (running down the stem). White to pale cream, crowded together. Narrow.",
    stem: "2-4 cm tall, slender, white, solid at first becoming hollow with age. No ring. Smooth and fibrous.",
    sporePrint: "White to very pale cream.",
    odor: "Faintly mealy or like fresh flour. Sometimes almost odorless.",
  },
  habitat:
    "Saprotrophic, growing in short grass. Found in lawns, parks, playing fields, golf courses, roadsides, and pastures. Often forms fairy rings or arc-shaped groups. Prefers well-maintained or regularly mown grass.",
  season: "July through November. Most common in September and October after autumn rains.",
  range:
    "Widespread across Europe and North America. Common in temperate regions wherever maintained grassland exists. Also reported from parts of Asia and Australasia.",
  lookAlikes: [
    {
      name: "Fairy Ring Champignon (Marasmius oreades)",
      distinction:
        "The most dangerous confusion. Marasmius oreades has a buff to tan cap (not white), a very tough and wiry stem that bends without breaking, and widely spaced gills. The Ivory Funnel has a white cap, a fragile stem, and crowded gills. They can grow side by side in the same fairy ring.",
    },
    {
      name: "Sweetbread Mushroom (Clitopilus prunulus)",
      distinction:
        "Similar size and white color, but Clitopilus prunulus has pink-tinged gills at maturity, a pink spore print, and a strong mealy smell. It grows in woodland rather than open grass. Edible but easily confused with toxic white Clitocybes.",
    },
    {
      name: "Fool's Funnel (Clitocybe rivulosa)",
      distinction:
        "Extremely similar and possibly the same species; some mycologists treat them as synonyms. Clitocybe rivulosa tends to be slightly larger with a more distinctly funnel-shaped cap. Equally toxic, containing the same muscarine levels.",
    },
  ],
  edibility: "toxic",
  edibilityNote:
    "Contains high concentrations of muscarine. Symptoms begin 15 to 30 minutes after ingestion and include profuse sweating, salivation, lacrimation (tears), nausea, vomiting, diarrhea, blurred vision, and bradycardia (slow heart rate). Severe cases can cause respiratory distress. The antidote is atropine, which is highly effective when administered promptly. Deaths are rare in adults with access to medical care but have occurred.",
  gbifKey: 2529944,
  stories: [
    {
      title: "The Fairy Ring Mix-Up in Kent",
      text: "In 2017, a couple in Kent, England, collected mushrooms from a fairy ring on their lawn, planning to make them into a soup. Within 30 minutes of eating, both began sweating profusely and drooling. The wife recognized the symptoms from a mushroom book and called 999. Both were treated with atropine at the local hospital and released the next day.",
      location: "Canterbury, Kent, England",
    },
    {
      title: "Child Picks Mushrooms at a Football Pitch",
      text: "In 2019, a five-year-old in suburban Dublin picked and tasted small white mushrooms growing on the edge of a football pitch. His mother noticed him chewing something and rushed him to Temple Street Children's Hospital. He received atropine within the hour and recovered fully.",
      location: "Dublin, Ireland",
    },
    {
      title: "Golf Course Scare in Massachusetts",
      text: "In autumn 2020, a golfer in western Massachusetts ate several small white mushrooms he found growing on a fairway, thinking they were puffballs. Within 20 minutes he was sweating through his shirt and his vision was blurring. His playing partners drove him to Baystate Medical Center, where staff identified muscarinic syndrome and treated him with atropine.",
      location: "Springfield, Massachusetts, USA",
    },
  ],
  seoQueries: [
    "ivory funnel mushroom",
    "clitocybe dealbata identification",
    "ivory funnel poisonous",
    "small white poisonous lawn mushroom",
    "clitocybe dealbata toxicity",
    "ivory funnel vs fairy ring mushroom",
    "muscarine mushroom poisoning",
    "clitocybe dealbata symptoms",
    "white mushroom on lawn dangerous",
    "ivory funnel look alikes",
    "how to identify ivory funnel",
    "clitocybe dealbata uk",
    "fool's funnel mushroom",
  ],
  funFacts: [
    "The Ivory Funnel contains more muscarine per gram than almost any other mushroom, including the Fly Agaric which was historically considered the 'muscarine mushroom' and gave the toxin its name.",
    "Atropine, the antidote for muscarine poisoning, comes from the deadly nightshade plant (Atropa belladonna). It is one of the clearest cases in medicine where one natural poison counteracts another.",
    "The Ivory Funnel and the edible Fairy Ring Champignon can literally grow intermingled in the same fairy ring, making basket contamination almost inevitable for careless foragers.",
    "Muscarinic symptoms are sometimes remembered by the mnemonic SLUDGE: Salivation, Lacrimation, Urination, Defecation, GI distress, and Emesis.",
  ],
  images: [],
};

export default species;
