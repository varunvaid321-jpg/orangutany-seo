import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "amanita-muscaria",
  commonName: "Fly Agaric",
  scientificName: "Amanita muscaria",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Amanitaceae",
    genus: "Amanita",
  },
  summary:
    "If mushrooms had a celebrity, this would be it. The Fly Agaric is the red-and-white polka-dotted icon that shows up in fairy tales, video games, and Christmas decorations — and it's been messing with human minds (literally) for thousands of years.",
  description:
    "You've seen this mushroom a hundred times without realizing it. It's the toadstool in every children's book. The power-up in Super Mario. The emoji on your phone. But in real life, Amanita muscaria is a genuinely wild organism — a psychoactive fungus that ancient Siberian shamans used in rituals, that Vikings may have consumed before battle (the \"berserker\" theory is still debated), and that reindeer actively seek out and eat in the wild (yes, really — some researchers think this is how the \"flying reindeer\" myth started).\n\nIt pops up in late summer and autumn, usually under birch or pine trees, often in little fairy rings. Young specimens burst out of the ground like white eggs before the iconic red cap breaks through. Rain can wash away the white spots, so older ones sometimes look like plain orange-red mushrooms — which is when misidentification gets dangerous.\n\nDespite being toxic, it's rarely fatal in healthy adults. The compounds ibotenic acid and muscimol cause a strange cocktail of nausea, euphoria, drowsiness, and Alice-in-Wonderland-style size distortions. Some cultures parboil it to remove toxins and eat it — but that's not something to try at home.",
  identification: {
    cap: "5–20 cm across. Starts as a rounded button, opens to a flat saucer shape with age. Bright scarlet red when fresh — fades to orange or even yellow in older specimens. Covered in white to cream wart-like spots (remnants of the \"egg\" it hatched from). Rain washes these off, so don't rely on the spots alone.",
    gills: "Packed tightly together, pure white, and free (not attached to the stem). They don't bruise or change color — one of the cleaner-looking undersides you'll find.",
    stem: "Tall and sturdy — 10–25 cm, white, with a skirt-like ring partway up. The base is bulbous and sits inside a cup (volva) that's often buried in soil. Dig carefully if you want to see it.",
    sporePrint: "White — drop the cap on dark paper overnight to check.",
    odor: "Surprisingly mild. Nothing distinctive.",
  },
  habitat:
    "Loves birch, pine, spruce, and fir trees — it forms a symbiotic relationship with their roots. You'll find it in forests, heathlands, parks, and even suburban yards if the right trees are nearby. Prefers acidic soils.",
  season: "Late summer through November. Peak season is September–October in most of the Northern Hemisphere.",
  range:
    "Originally a Northern Hemisphere species — all across Europe, Asia, and North America. But humans accidentally exported it to the Southern Hemisphere by planting European trees. Now found in Australia, New Zealand, South Africa, and South America.",
  lookAlikes: [
    {
      name: "Caesar's Mushroom (Amanita caesarea)",
      slug: "amanita-caesarea",
      image: "lookalike-caesarea.jpg",
      distinction:
        "Actually edible and delicious — prized since Roman times. Smooth orange cap (no white spots), bright yellow gills and stem. Hatches from a large white egg. If the gills are yellow, it's not a Fly Agaric.",
      externalUrl: "https://www.inaturalist.org/taxa/204588-Amanita-caesarea",
      externalSource: "iNaturalist",
    },
    {
      name: "Panther Cap (Amanita pantherina)",
      slug: "amanita-pantherina",
      image: "lookalike-pantherina.jpg",
      distinction:
        "More dangerous than the Fly Agaric. Brown cap with white warts instead of red. Same general shape. Contains higher concentrations of the same toxins. If the cap is brown, be extra cautious.",
      externalUrl: "https://en.wikipedia.org/wiki/Amanita_pantherina",
      externalSource: "Wikipedia",
    },
    {
      name: "Yellow Patches (Amanita flavoconia)",
      image: "lookalike-flavoconia.jpg",
      distinction:
        "Eastern North American species. Yellow-orange cap with yellowish warts instead of white. Smaller overall. Toxicity is poorly understood — avoid it.",
      externalUrl: "https://www.mushroomexpert.com/amanita_flavoconia.html",
      externalSource: "MushroomExpert",
    },
  ],
  edibility: "toxic",
  psychoactive: true,
  edibilityNote:
    "Contains ibotenic acid and muscimol — psychoactive compounds that cause nausea, confusion, euphoria, and hallucinations. Rarely lethal in healthy adults, but hospitalizations happen every year. Some traditional cultures detoxify it through parboiling, but this is not recommended without deep expertise. Do not eat this mushroom.",
  gbifKey: 8168319,
  stories: [
    {
      title: "Siberian Shamans and Reindeer Urine",
      text: "In 1730, Swedish naturalist Strahlenberg documented that the Koryak people of Kamchatka drank the urine of those who'd eaten Fly Agaric — the psychoactive compounds pass through the body intact. Reindeer were observed eating it and prancing erratically afterward.",
      location: "Kamchatka Peninsula, Siberia",
      source: "Strahlenberg (1738)",
      sourceUrl: "https://en.wikipedia.org/wiki/Amanita_muscaria#Siberia",
    },
    {
      title: "A Family Poisoned in British Columbia",
      text: "In 2012, a family in the Fraser Valley picked what they thought were edible mushrooms from a park. Three ended up in hospital with nausea and visual disturbances after eating cooked Fly Agaric. All recovered within 24 hours.",
      location: "Fraser Valley, BC, Canada",
      source: "BC Centre for Disease Control",
    },
    {
      title: "Dog Ate a Fly Agaric in Oregon",
      text: "A Reddit user in 2019 posted that their Labrador ate a Fly Agaric from their backyard near Portland. The dog became wobbly and drooled excessively within 30 minutes. After an emergency vet visit and activated charcoal, the dog fully recovered overnight.",
      location: "Portland, Oregon, USA",
      source: "r/mycology",
      sourceUrl: "https://www.reddit.com/r/mycology/",
    },
    {
      title: "How Santa Claus Might Come From a Mushroom",
      text: "Ethnomycologist R. Gordon Wasson proposed that Siberian shamans — who wore red and white, entered yurts through smoke holes when snow blocked doors, and carried bags of dried mushrooms as winter solstice gifts — may have inspired the modern Santa Claus story.",
      location: "Global folklore",
      source: "Wasson, 'Soma: Divine Mushroom of Immortality' (1968)",
    },
    {
      title: "Italian Countess Survives a Mix-Up",
      text: "In 18th-century Italy, Countess Gianetta reportedly survived eating Fly Agaric after her cook confused it for Caesar's Mushroom (Amanita caesarea). She described hours of vivid hallucinations and a feeling that the room was 'breathing.' Court physicians treated her with emetics.",
      location: "Northern Italy",
      source: "Ramsbottom, 'Mushrooms and Toadstools' (1953)",
    },
  ],
  seoQueries: [
    "red mushroom with white spots",
    "what is the Mario mushroom",
    "fly agaric poisonous",
    "red and white polka dot mushroom",
    "can you eat fly agaric",
    "amanita muscaria effects",
    "fairy tale mushroom identification",
    "red mushroom in my yard",
    "mushroom that looks like a toadstool",
    "fly agaric vs death cap",
    "amanita muscaria look alikes",
    "red cap mushroom with white stem",
    "psychedelic mushroom red cap",
    "mushroom under birch tree",
  ],
  funFacts: [
    "Reindeer eat Fly Agarics in the wild and reportedly behave erratically afterward. Some researchers link this to the flying reindeer legend in Christmas mythology.",
    "In Siberia, shamans would consume the mushroom and their followers would drink the shaman's urine — the toxins are filtered but the psychoactive compounds pass through intact.",
    "Lewis Carroll likely referenced this mushroom in Alice in Wonderland — Alice eats pieces of a mushroom that make her grow and shrink, matching the size-distortion effects of muscimol.",
    "The name 'Fly Agaric' comes from its traditional use as an insecticide — pieces soaked in milk would attract and stun flies.",
    "Some historians believe the Viking berserkers may have used Amanita muscaria before battle to enter their legendary rage state, though this theory is debated.",
  ],
  images: [
    {
      filename: "01-cap-top.jpg",
      alt: "Fly Agaric mushroom showing orange-red cap with white warts in grass",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Amanita_muscaria_Urtij%C3%ABi.jpg",
      author: "Wolfgang Moroder",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "02-forest.jpg",
      alt: "Mature Fly Agaric with flat red cap in Russian forest with autumn leaves",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Amanita_Muscaria_LO.jpg",
      author: "Florstein",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "03-mature.jpg",
      alt: "Pair of Fly Agaric mushrooms at mid-stage in Ukrainian woodland",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Amanita_muscaria_2018_G02.jpg",
      author: "George Chernilevsky",
      license: "Public domain",
      licenseUrl: "",
    },
    {
      filename: "04-alpine.jpg",
      alt: "Fly Agaric mushrooms in Swiss alpine meadow showing faded orange color",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Bergweg_van_Burleun,_naar_Ladinas,_Andiast._(actm)_19.jpg",
      author: "Agnes Monkelbaan",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "05-india.jpg",
      alt: "Perfect young Fly Agaric specimen in Indian tropical forest near pine cones",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Fly_agaric_mushroom_Ooty_Jul17_DSC04142.jpg",
      author: "Timothy A. Gonsalves",
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
