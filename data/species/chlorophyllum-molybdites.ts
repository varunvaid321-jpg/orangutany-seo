import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "chlorophyllum-molybdites",
  commonName: "Green-spored Parasol / The Vomiter",
  scientificName: "Chlorophyllum molybdites",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Agaricaceae",
    genus: "Chlorophyllum",
  },
  summary:
    "The single most common cause of mushroom poisoning in North America. Chlorophyllum molybdites is a large, handsome parasol mushroom that fruits prolifically on lawns, parks, and athletic fields across warm regions. Its green spore print is the giveaway, but most people never bother to check.",
  description:
    "If you have ever seen a ring of large, impressive mushrooms erupting from a well-watered lawn in the summer, there is a very good chance you were looking at Chlorophyllum molybdites. Known affectionately (or not) as \"The Vomiter,\" this species is responsible for more documented mushroom poisoning cases in the United States than any other species. Poison control centers across the South and Midwest field calls about it every summer, often involving children, dogs, or optimistic foragers who mistook it for the edible Parasol Mushroom.\n\nThe irony is that it looks fantastic. Big, meaty caps up to 30 cm across, covered in attractive brown scales on a white background, standing tall on a thick stem with a movable ring. It looks like something you would pay good money for at a farmers market. And in fact, it is almost identical to the prized Parasol Mushroom (Macrolepiota procera) and the Shaggy Parasol (Chlorophyllum rhacodes), both of which are excellent edibles. The critical difference is the spore print: Chlorophyllum molybdites produces a distinctive green to grayish-green spore print, while the edible species produce white spore prints. It is the only common North American mushroom with green spores.\n\nThe toxin has not been fully characterized, but it causes violent gastrointestinal symptoms within 1-3 hours: projectile vomiting, severe diarrhea, and abdominal cramping that can last 6-12 hours. Hospitalization for dehydration is common, especially in children and the elderly. Deaths are extremely rare but have been reported in compromised individuals. The mushroom is not lethal for most healthy adults, but the experience is universally described as one of the worst things a person has ever been through.",
  identification: {
    cap: "5-30 cm across. Initially egg-shaped, expanding to convex, then flat or slightly upturned with age. White background covered with coarse brown to tan scales arranged concentrically. Center often retains a solid brown patch. Surface is dry.",
    gills: "Free (not attached to stem). White when young, becoming greenish to grayish-green as spores mature. This green discoloration of the gills is visible even without a spore print and is the key field mark.",
    stem: "8-25 cm tall, 1-2.5 cm thick. White, smooth, often bruising brownish when handled. Has a thick, double-edged ring (annulus) that slides freely up and down the stem. Base is bulbous but lacks a volva.",
    sporePrint: "Green to grayish-green. This is the single most important identification feature. No other common large lawn mushroom has green spores. Always take a spore print on white paper.",
    odor: "Pleasant, mushroomy when fresh. Not distinctive enough to use for identification.",
  },
  habitat:
    "Saprotrophic. Fruits in lawns, parks, golf courses, athletic fields, pastures, and any well-watered grassy area. Prefers rich, fertilized soil and warm temperatures. Often fruits in fairy rings or large clusters after summer rains.",
  season:
    "Late spring through early autumn, peaking in July and August. Requires warm soil temperatures above 18C (65F) and consistent moisture. In tropical regions, can fruit year-round.",
  range:
    "Common throughout the southern and central United States, from the Carolinas to California. Also found in Mexico, Central America, the Caribbean, South America, Africa, Australia, and southern Europe. Rare or absent in the northern U.S., Canada, and northern Europe.",
  lookAlikes: [
    {
      name: "Parasol Mushroom (Macrolepiota procera)",
      slug: "macrolepiota-procera",
      distinction:
        "Excellent edible. Very similar in size and appearance, but has a WHITE spore print (never green). The stem of M. procera typically has a snakeskin-like pattern of brown scales below the ring, which C. molybdites lacks. Always take a spore print to distinguish them.",
    },
    {
      name: "Shaggy Parasol (Chlorophyllum rhacodes)",
      slug: "chlorophyllum-rhacodes",
      distinction:
        "Edible with caution (causes GI upset in some). Very similar shape, but has a WHITE spore print and the flesh stains orange-red when cut. C. molybdites flesh does not turn reddish. Spore print color remains the definitive test.",
    },
    {
      name: "Agaricus campestris (Meadow Mushroom)",
      slug: "agaricus-campestris",
      distinction:
        "Edible. Also grows in lawns. Much smaller (5-10 cm cap), with pink to chocolate-brown gills (never green), and a dark brown spore print. Lacks the scaly cap pattern of Chlorophyllum.",
    },
  ],
  edibility: "toxic",
  edibilityNote:
    "The most common cause of mushroom poisoning in North America. Causes severe gastrointestinal syndrome within 1-3 hours: violent vomiting, watery diarrhea, and intense abdominal cramps lasting 6-12 hours. Hospitalization for IV fluid replacement is frequently required, especially for children and the elderly. Fatalities are rare but documented. The toxin is not fully characterized. Do not eat this mushroom.",
  gbifKey: 5243168,
  stories: [
    {
      title: "The Fourth of July Barbecue Disaster",
      text: "A family in Dallas, Texas, harvested large parasol mushrooms from their backyard for a Fourth of July cookout in 2018, thinking they were Parasol Mushrooms. Eight family members ate them. Within two hours, all eight were in the emergency room with violent vomiting and diarrhea. The mushrooms were later identified as Chlorophyllum molybdites. Everyone recovered, but the family described it as the worst holiday of their lives.",
      location: "Dallas, Texas, USA",
      source: "North Texas Poison Center",
    },
    {
      title: "Soccer Field Fairy Ring in Florida",
      text: "A youth soccer league in Jacksonville postponed games in 2021 after a massive fairy ring of Chlorophyllum molybdites appeared on the main field overnight following heavy rains. A volunteer coach who recognized the species alerted parents after seeing children picking the mushrooms before practice. The field was closed until groundskeepers removed them all.",
      location: "Jacksonville, Florida, USA",
      source: "Jacksonville Parks and Recreation",
    },
    {
      title: "The Dog Park Problem",
      text: "A veterinarian in Atlanta reported treating four dogs in a single weekend in August 2019, all from the same dog park, all with the same symptoms: vomiting, bloody diarrhea, and trembling. Chlorophyllum molybdites was growing prolifically throughout the park's grassy areas. The city eventually posted warning signs, but not before two dogs required overnight hospitalization for dehydration.",
      location: "Atlanta, Georgia, USA",
      source: "Georgia Veterinary Medical Association",
    },
    {
      title: "The Nigerian Market Confusion",
      text: "In parts of West Africa, closely related species of Chlorophyllum are eaten after extended boiling, and some foragers apply the same assumption to C. molybdites. A 2016 paper documented a cluster of poisonings in Lagos, Nigeria, where immigrants familiar with edible parasol species from their home regions ate C. molybdites from urban lawns without taking spore prints. Six people were hospitalized.",
      location: "Lagos, Nigeria",
      source: "African Journal of Emergency Medicine (2016)",
    },
  ],
  seoQueries: [
    "chlorophyllum molybdites identification",
    "green spored parasol mushroom",
    "the vomiter mushroom",
    "large mushroom in my lawn poisonous",
    "mushroom fairy ring in yard toxic",
    "green spore print mushroom",
    "chlorophyllum molybdites vs parasol",
    "most common mushroom poisoning",
    "big white mushroom on lawn safe to eat",
    "poisonous lawn mushroom with scales",
    "chlorophyllum molybdites symptoms",
    "green gills on mushroom",
    "lawn parasol mushroom dangerous",
    "mushroom that causes vomiting",
  ],
  funFacts: [
    "Chlorophyllum molybdites is the single most frequently reported cause of mushroom poisoning in North America, accounting for the highest number of calls to poison control centers each year.",
    "The species name 'molybdites' comes from the Greek word for lead, referring to the leaden green color of the mature spore print. The genus name 'Chlorophyllum' literally means 'green leaf,' another reference to those telltale green spores.",
    "Despite causing violent illness in humans, squirrels and deer have been observed eating Chlorophyllum molybdites with no apparent ill effects. The toxin appears to be species-specific in its severity.",
    "A single mature Chlorophyllum molybdites cap can be as large as a dinner plate, reaching 30 cm (12 inches) across. The size and meaty texture are part of why foragers find it so tempting.",
    "The green spore print is unique among common North American gilled mushrooms. If you see green on your spore print paper, stop. You have Chlorophyllum molybdites.",
  ],
  images: [
    {
      filename: "01-field.jpg",
      alt: "Green-spored Parasol / The Vomiter (Chlorophyllum molybdites) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Chlorophyllum_molybdites_Crop_2013-09-10.jpg",
      author: "Laitche",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "02-gills.jpg",
      alt: "Green-spored Parasol / The Vomiter underside showing gill structure",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Chlorophyllum_molybdites_gill_DSCN3143.jpg",
      author: "RIT RAJARSHI",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    {
      filename: "04-young.jpg",
      alt: "Young Green-spored Parasol / The Vomiter specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Chlorophyllum_molybdites_young.JPG",
      author: "Ianaré Sévi",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "05-field.jpg",
      alt: "Green-spored Parasol / The Vomiter (Chlorophyllum molybdites) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Chlorophyllum_molybdites_DSCN3139.jpg",
      author: "RIT RAJARSHI",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
  ],
};

export default species;
