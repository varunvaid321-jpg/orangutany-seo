import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "tricholoma-equestre",
  commonName: "Yellow Knight",
  scientificName: "Tricholoma equestre",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Tricholomataceae",
    genus: "Tricholoma",
  },
  summary:
    "The Yellow Knight was considered a fine edible mushroom for centuries until a cluster of deaths in France revealed that repeated consumption can cause fatal rhabdomyolysis, the destruction of skeletal muscle tissue. Its fall from grace is one of mycology's most dramatic reversals.",
  description:
    "For hundreds of years, Tricholoma equestre was one of Europe's most prized wild mushrooms. Its name literally means 'of the knights,' reflecting its historical status as a mushroom fit for nobility. Polish foragers loved it. French markets sold it. Guidebooks recommended it. Then, between 1992 and 2000, twelve people in the Bordeaux region of France developed rhabdomyolysis after eating large quantities of Yellow Knight over consecutive days. Three of them died.\n\nThe mechanism is cumulative toxicity. A single meal of Yellow Knight probably will not kill you. But the toxins accumulate in muscle tissue with repeated exposure, eventually triggering a catastrophic breakdown of skeletal muscle fibers. The released muscle proteins overwhelm the kidneys, leading to renal failure. Victims experience extreme muscle weakness, dark brown urine (from myoglobin), and eventually cardiac arrest as the heart muscle is affected.\n\nThe reclassification of Tricholoma equestre from 'choice edible' to 'toxic' sent shockwaves through the foraging world, particularly in Poland and France where it had been a cultural staple. Some foragers refused to accept the findings, arguing that they had eaten Yellow Knights for decades without problems. The scientific evidence, however, is unambiguous: this mushroom can kill, and the risk increases with every serving.",
  identification: {
    cap: "5-12 cm across. Convex, flattening with age. Bright greenish-yellow to sulfur-yellow, often with brownish tones at the center. Surface smooth, slightly sticky when wet. Often has soil particles stuck to it.",
    gills: "Bright sulfur-yellow, sinuate (notched at the stem), closely spaced. The vivid yellow color is distinctive and persistent.",
    stem: "4-8 cm tall, stout, pale yellow to sulfur-yellow. Solid and firm. No ring. Often partially buried in sandy soil.",
    sporePrint: "White.",
    odor: "Mealy or farinaceous (like fresh flour). Pleasant.",
  },
  habitat:
    "Mycorrhizal with pines, especially Scots pine and maritime pine. Found in sandy pine forests, coastal dunes with pine plantations, and dry sandy heathlands. Strongly associated with poor, sandy soils.",
  season: "October through December. A late-season mushroom that fruits after most other species have finished.",
  range:
    "Widespread across Europe, from Scandinavia to the Mediterranean. Particularly common in sandy pine forests of France, Poland, Spain, and the Baltic states. Also found in parts of North America, though less commonly collected there.",
  lookAlikes: [
    {
      name: "Sulphur Knight (Tricholoma sulphureum)",
      distinction:
        "Superficially similar yellow coloring but has a strong, unpleasant sulfurous or gaslight smell that is impossible to miss. The bad odor is a reliable separator. Sulphur Knight is also toxic.",
    },
    {
      name: "Tricholoma auratum",
      distinction:
        "Very closely related and possibly conspecific (the same species). Similar yellow coloring and habitat preferences. Some mycologists treat them as the same species; the toxicity concerns apply equally.",
    },
    {
      name: "Greencracked Brittlegill (Russula virescens)",
      distinction:
        "Has a green-cracked cap surface (like dried mud) and brittle white gills. Completely different texture: Russula gills snap cleanly when pressed. A prized edible with no known toxicity.",
    },
  ],
  edibility: "toxic",
  edibilityNote:
    "Causes rhabdomyolysis (destruction of skeletal muscle) with repeated consumption over consecutive days. Toxicity is cumulative. Symptoms include severe muscle pain, weakness, dark brown urine, and can progress to kidney failure and cardiac arrest. Three deaths were recorded in the Bordeaux region of France between 1992 and 2000. A single meal may not cause obvious harm, but repeated consumption is potentially fatal. Previously considered a choice edible; now classified as toxic by most European mycological authorities.",
  gbifKey: 2532464,
  stories: [
    {
      title: "The Bordeaux Deaths That Changed Everything",
      text: "Between 1992 and 2000, twelve people in the Bordeaux region of France developed severe rhabdomyolysis after eating Yellow Knights over multiple consecutive days. Three died from cardiac complications. The cases were investigated by toxicologists at Bordeaux University Hospital and published in the New England Journal of Medicine in 2001.",
      location: "Bordeaux, Gironde, France",
      source: "New England Journal of Medicine",
    },
    {
      title: "Polish Foragers Refuse to Give It Up",
      text: "When French research suggested the Yellow Knight was dangerous, the reaction in Poland was disbelief. The mushroom, known locally as 'gaska zoltobruna,' had been a beloved foraged species for generations. Some Polish mycologists initially questioned the findings, though the species is now officially listed as toxic in Polish mushroom guides.",
      location: "Warsaw, Poland",
    },
    {
      title: "The Spanish Pine Forest Tradition",
      text: "In the sandy pine forests of Castile, foragers had collected Yellow Knights for autumn feasts going back to medieval times. After the French poisoning reports, the Spanish Mycological Society issued advisories in 2003, but enforcement was difficult. Some rural communities continued harvesting for years, arguing that moderate consumption was safe.",
      location: "Valladolid, Castile and Leon, Spain",
    },
  ],
  seoQueries: [
    "yellow knight mushroom",
    "tricholoma equestre poisonous",
    "yellow knight rhabdomyolysis",
    "tricholoma equestre identification",
    "is yellow knight mushroom safe to eat",
    "yellow knight mushroom deaths",
    "tricholoma equestre toxicity",
    "yellow mushroom pine forest",
    "man on horseback mushroom toxic",
    "yellow knight look alikes",
    "tricholoma equestre france deaths",
    "mushroom that causes rhabdomyolysis",
    "how to identify yellow knight mushroom",
  ],
  funFacts: [
    "The Yellow Knight was served at royal feasts in medieval Poland, where it was considered one of the finest wild mushrooms. The species name 'equestre' means 'of the horseman' or 'of the knight.'",
    "The French deaths from Yellow Knight poisoning were published in the New England Journal of Medicine in 2001, one of the few times a mushroom has made it into one of the world's top medical journals.",
    "Some researchers believe the Yellow Knight's toxicity may vary by region or genetic strain, which could explain why some populations ate it safely for centuries while others suffered fatal consequences. This theory remains unproven.",
    "Rhabdomyolysis literally means 'dissolution of striped muscle.' The breakdown products turn urine dark brown or cola-colored, which is often the first symptom that sends patients to the hospital.",
  ],
  images: [],
};

export default species;
