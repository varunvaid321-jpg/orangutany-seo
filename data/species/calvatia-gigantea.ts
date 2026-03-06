import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "calvatia-gigantea",
  commonName: "Giant Puffball",
  scientificName: "Calvatia gigantea",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Lycoperdaceae",
    genus: "Calvatia",
  },
  summary:
    "A mushroom that can grow to the size of a basketball — or bigger. The Giant Puffball is one of the easiest fungi on the planet to identify, and when you find a fresh young one, you've basically stumbled onto a free volleyball-sized block of mild, edible mushroom meat.",
  description:
    "If you've ever been walking through a meadow and thought someone left a soccer ball in the grass, congratulations — you may have just found a Giant Puffball. These things are absurd. They can reach 50 cm (20 inches) or more across and weigh several kilograms. The largest recorded specimens have tipped the scales at over 20 kg.\n\nWhen young and fresh, the interior is pure white, firm, and has a texture like tofu or marshmallow. This is when it's edible — slice it into thick steaks, bread and fry it, or cube it into stir-fries. The moment the inside starts turning yellow or olive-green, you're looking at trillions of spores maturing, and it's no longer good to eat. A single mature Giant Puffball can produce around 7 trillion spores. If every one germinated and grew to full size, the resulting fungal mass would be about 800 times the size of Earth.\n\nThey pop up seemingly overnight in meadows, pastures, parks, and woodland edges — anywhere there's rich, disturbed soil. You'll often find them in the same spot year after year because the underground mycelium persists. Despite their size, they have no stem, no gills, no cap in the traditional sense — just one big round blob of fungus sitting on the ground.",
  identification: {
    cap: "Not really a cap — it's a round to slightly flattened sphere, 10–50 cm (sometimes larger). Smooth white skin when young that becomes leathery and tan-brown with age. No visible pores or gills on the outside. Eventually cracks open to release clouds of olive-brown spores.",
    stem: "Essentially absent. Attaches to the ground via a small cord-like base. No ring, no volva, no stalk to speak of.",
    sporePrint: "Olive-brown. You won't need to take one — a mature specimen releases spore clouds visible to the naked eye.",
    odor: "Mild and pleasant when young. Older specimens develop a musty, unpleasant smell as spores mature.",
  },
  habitat:
    "Meadows, pastures, parks, gardens, woodland edges, and disturbed ground. Loves rich, well-fertilized soil. Often found in the same location year after year. Not a tree-symbiont — it's a saprobe that feeds on decaying organic matter in the soil.",
  season: "Late summer through autumn. Peak season is August–October in the Northern Hemisphere. Can appear as early as June in warm years.",
  range:
    "Widespread across temperate regions of North America, Europe, and parts of Asia. Common in the UK, Ireland, and across continental Europe. In North America, found from coast to coast but most frequent in the Midwest and Northeast. Occasionally reported in Australia and New Zealand.",
  lookAlikes: [
    {
      name: "Common Earthball (Scleroderma citrinum)",
      image: "lookalike-scleroderma.jpg",
      distinction:
        "The dangerous one to watch for. Earthballs are smaller (5–12 cm), have a thick, tough, yellowish-brown skin with a rough warty texture, and the inside is purplish-black even when young — not white. If you slice it open and see anything other than pure white, put it down. Earthballs cause vomiting and gastrointestinal distress.",
      externalUrl: "https://www.inaturalist.org/taxa/55927-Scleroderma-citrinum",
      externalSource: "iNaturalist",
    },
    {
      name: "Common Puffball (Lycoperdon perlatum)",
      image: "lookalike-lycoperdon.jpg",
      distinction:
        "Much smaller — golf ball to tennis ball sized. Covered in tiny spines or bumps that rub off. Has a visible stem-like base. Also edible when the interior is white, so this is a friendly look-alike. The key difference is simply size — Giant Puffballs dwarf these.",
      externalUrl: "https://www.inaturalist.org/taxa/48443-Lycoperdon-perlatum",
      externalSource: "iNaturalist",
    },
    {
      name: "Purple-Spored Puffball (Calvatia cyathiformis)",
      slug: "calvatia-cyathiformis",
      image: "lookalike-cyathiformis.jpg",
      distinction:
        "A close relative that's also edible when young. Slightly smaller, more pear-shaped, and develops a purple-tinged interior as spores mature (vs. olive-brown in Giant Puffball). Often found in similar habitats. Not dangerous — just a different species.",
      externalUrl: "https://www.inaturalist.org/taxa/153296-Calvatia-cyathiformis",
      externalSource: "iNaturalist",
    },
  ],
  edibility: "edible",
  edibilityNote:
    "Edible and delicious when young and the interior is uniformly pure white. Slice it open before eating — if there's any yellow, green, or brown discoloration inside, it's past its prime and should not be eaten. Also check that the interior is featureless white flesh with no outline of a developing mushroom inside (which would indicate a young Amanita egg, not a puffball). Commonly sliced into steaks and pan-fried with butter, or breaded and deep-fried.",
  gbifKey: 2536058,
  stories: [
    {
      title: "The One That Fed a Whole Street",
      text: "In 2010, a man in Swindon, England found a Giant Puffball in his garden weighing over 15 kg. It was so large he sliced it up and distributed pieces to his entire street. Local news ran the story with the headline 'Mushroom feeds a village.'",
      location: "Swindon, England",
      source: "BBC News",
    },
    {
      title: "Used as Surgical Dressing for Centuries",
      text: "Before modern medicine, dried Giant Puffball slices were used to stop bleeding. The spore mass has mild hemostatic properties and was applied directly to wounds. This practice was documented as far back as the 1700s and continued in rural areas into the 20th century.",
      location: "Europe",
      source: "Rolfe & Rolfe, 'The Romance of the Fungus World' (1925)",
    },
    {
      title: "A Dog Owner's Scare in Wisconsin",
      text: "A Reddit user in 2021 panicked when their golden retriever bit into a Giant Puffball in a park near Madison. After a frantic call to the vet and a quick ID confirmation from r/mycology, they learned it was harmless. The dog apparently enjoyed it.",
      location: "Madison, Wisconsin, USA",
      source: "r/mycology",
      sourceUrl: "https://www.reddit.com/r/mycology/",
    },
    {
      title: "7 Trillion Spores From a Single Mushroom",
      text: "Mycologist David Arora calculated that a single mature Giant Puffball produces roughly 7 trillion spores. He noted that if each spore grew into a new puffball, the combined mass would exceed 800 times the volume of Earth. Thankfully, almost none of them germinate.",
      location: "Global",
      source: "Arora, 'Mushrooms Demystified' (1986)",
    },
    {
      title: "Mistaken for a Skull in a Welsh Field",
      text: "In 2018, police in Powys, Wales responded to a report of a human skull found in a farmer's field. Officers arrived to discover it was a large, weathered Giant Puffball. The farmer said it wasn't the first time someone had called it in.",
      location: "Powys, Wales",
      source: "Wales Online",
    },
  ],
  seoQueries: [
    "giant puffball mushroom",
    "giant white mushroom in my yard",
    "can you eat giant puffball",
    "how to cook giant puffball",
    "giant puffball identification",
    "big white ball mushroom",
    "calvatia gigantea edible",
    "giant puffball look alikes",
    "giant puffball vs earthball",
    "white round mushroom in grass",
    "giant puffball recipe",
    "when to pick giant puffball",
    "giant puffball poisonous",
    "puffball mushroom safe to eat",
    "huge mushroom in field",
  ],
  funFacts: [
    "A single mature Giant Puffball can produce around 7 trillion spores. If every spore successfully grew into a new puffball, the resulting mass would be about 800 times the size of Earth.",
    "Giant Puffballs have been used as wound dressings for centuries. The dried spore mass has mild blood-clotting properties and was applied directly to cuts and surgical wounds before modern bandages existed.",
    "They can appear seemingly overnight because most of the growth happens underground. The visible fruiting body is just the tip of the iceberg — the real organism is a vast network of mycelium in the soil.",
    "In parts of rural England, Giant Puffballs were once called 'Devil's snuffbox' because kicking a mature one sends up a dramatic cloud of brown spores.",
    "Some of the largest specimens on record have weighed over 20 kg (44 lbs) and measured over 150 cm (5 feet) in circumference.",
  ],
  images: [
    {
      filename: "01-field.jpg",
      alt: "Large white Giant Puffball mushroom sitting in a green meadow",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Riesenbovist_Calvatia_gigantea.JPG",
      author: "Holger Krisp",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
    {
      filename: "02-grass.jpg",
      alt: "Giant Puffball mushroom in grass showing typical round white shape",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Giant_Puffball.jpg",
      author: "Sulfur",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "03-comparison.jpg",
      alt: "Two Giant Puffballs at different ages showing size and color progression",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Calvatia_gigantea_mit_zwei_Monaten_Altersunterschied.jpg",
      author: "Christoph Sager",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "04-inaturalist.jpg",
      alt: "Giant Puffball specimen photographed in natural habitat showing scale",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Calvatia_gigantea_261323075.jpg",
      author: "Joe Potter Butler",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    {
      filename: "05-pukurau.jpg",
      alt: "Giant Puffball from New Zealand showing smooth white surface",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Calvatia_gigantea,_Pukurau.jpg",
      author: "R. E. Beever",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
  ],
};

export default species;
