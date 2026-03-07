import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "coprinus-comatus",
  commonName: "Shaggy Mane",
  scientificName: "Coprinus comatus",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Agaricaceae",
    genus: "Coprinus",
  },
  summary:
    "The mushroom with a self-destruct timer. Shaggy Mane is a perfectly delicious edible — if you can get it into the pan before it dissolves into a puddle of black ink. Seriously, this thing melts itself.",
  description:
    "Coprinus comatus is one of the most dramatic mushrooms on the planet, and not because of any psychedelic properties or deadly toxins. It's dramatic because it literally liquefies itself. Within hours of reaching maturity, the gills begin to dissolve from the bottom up, dripping jet-black ink in a process called autodigestion (or deliquescence, if you want to sound fancy). The mushroom does this to spread its spores — as the gills melt away, the spores drip to the ground and get carried off. It's brilliant engineering, but it means your window to eat one is hilariously short.\n\nForagers who love Shaggy Manes know the drill: find them young, rush home, cook immediately. There's no \"I'll get to it tomorrow\" with this species. Leave a basket of them on the counter overnight and you'll wake up to a black puddle that looks like someone spilled a bottle of India ink. And speaking of ink — people actually used this stuff as writing ink for centuries. Medieval monks reportedly made it, and during the 17th-19th centuries, documents written in Coprinus ink were considered extra-authentic because the spores embedded in the dried ink could be identified under a microscope, making forgery nearly impossible.\n\nYou'll find Shaggy Manes popping up in the most mundane places — lawns, roadsides, gravel paths, disturbed soil next to parking lots. They're one of those mushrooms that thrive where humans have messed up the ground. They often appear in clusters, looking like a row of tall, shaggy white fingers poking out of the grass. Young ones are gorgeous — elongated, white, with upturned scales that give them their \"shaggy\" name. Then the ink starts, the edges curl up and blacken, and the clock is ticking.",
  identification: {
    cap: "4–15 cm tall, 3–5 cm wide. Cylindrical and egg-shaped when young — like a white bullet or closed umbrella. Surface covered in recurved, shaggy scales (hence the name). White when fresh, developing pinkish-brown tones as it matures. The bottom edge begins to turn black and curl upward as autodigestion starts.",
    gills: "Crowded and free. White at first, turning pink, then black as the ink process begins. The gills literally melt from the bottom edge upward — if the edges are already black and dripping, you're too late.",
    stem: "10–20 cm tall, 1–2 cm thick. White, smooth, hollow. Has a small, movable ring that often slides to the base or falls off entirely. Separates cleanly from the cap.",
    sporePrint: "Dark brown to black.",
    odor: "Pleasant and mild when fresh. Smells faintly sweet or mushroomy — nothing off-putting.",
  },
  habitat:
    "Disturbed ground is the magic word. Lawns, roadsides, gravel paths, compost piles, construction sites, and the edges of parking lots. Shaggy Manes are saprobic — they eat dead organic matter in the soil. They especially love compacted or recently disturbed earth and often show up after rain in places you'd never expect a gourmet mushroom.",
  season:
    "Late summer through late autumn. Peak season is September–November in temperate regions. Can appear earlier in cooler climates or after heavy summer rains.",
  range:
    "Cosmopolitan — found on every continent except Antarctica. Extremely common across North America, Europe, and temperate Asia. Also found in Australia, New Zealand, and parts of South America. One of the most widespread edible mushrooms on Earth.",
  lookAlikes: [
    {
      name: "Common Ink Cap (Coprinopsis atramentaria)",
      slug: "coprinopsis-atramentaria",
      image: "lookalike-atramentaria.jpg",
      distinction:
        "Also deliquesces into ink, but the cap is smooth and gray-brown — no shaggy scales. Shorter and stubbier overall. The big danger: it causes violent nausea and heart palpitations if you drink alcohol within several days of eating it (contains coprine, which blocks alcohol metabolism like Antabuse).",
      externalUrl:
        "https://www.inaturalist.org/taxa/48521-Coprinopsis-atramentaria",
      externalSource: "iNaturalist",
    },
    {
      name: "Green-Spored Parasol (Chlorophyllum molybdites)",
      image: "lookalike-molybdites.jpg",
      distinction:
        "The most commonly eaten poisonous mushroom in North America. Has a similar white, scaly appearance when young but the cap flattens out into a broad parasol shape (Shaggy Mane stays cylindrical). Key tell: the spore print is green, and mature gills develop a greenish tint. Causes severe gastrointestinal distress.",
      externalUrl:
        "https://en.wikipedia.org/wiki/Chlorophyllum_molybdites",
      externalSource: "Wikipedia",
    },
    {
      name: "Magpie Fungus (Coprinopsis picacea)",
      image: "lookalike-picacea.jpg",
      distinction:
        "Has a similar tall, elongated shape with patches on the cap, but the patches are white on a dark brown-black background (the inverse of Shaggy Mane's pattern). Smells unpleasant. Not considered edible and causes gastrointestinal upset.",
      externalUrl:
        "https://www.mushroomexpert.com/coprinopsis_picacea.html",
      externalSource: "MushroomExpert",
    },
  ],
  edibility: "edible",
  edibilityNote:
    "Excellent eating when harvested young — before any black ink appears on the gill edges. The flavor is delicate, slightly nutty, and pairs well with butter and simple preparations. The catch: you must cook them within a few hours of picking. Once autodigestion begins, they turn to inky mush and are no longer appetizing. Do not store them overnight. Do not combine with alcohol if there's any chance of confusion with Coprinopsis atramentaria.",
  gbifKey: 7987658,
  stories: [
    {
      title: "The Sprint Home From the Park",
      text: "A forager on r/mycology described finding a huge flush of Shaggy Manes in a Seattle park and literally jogging home with them, skipping lunch prep entirely. By the time they were sauteed 40 minutes later, the ones left in the basket had already started inking. The cooked ones were 'absolutely incredible' — the uncooked ones became a science experiment.",
      location: "Seattle, Washington, USA",
      source: "r/mycology",
      sourceUrl: "https://www.reddit.com/r/mycology/",
    },
    {
      title: "Medieval Monks and Mushroom Ink",
      text: "Historical records describe European monks using Coprinus ink for manuscripts as early as the 15th century. The ink was made by collecting the black liquid, straining it, and adding a small amount of gum arabic and clove oil as preservatives. The embedded spores made documents tamper-evident — a forensic feature centuries before forensic science existed.",
      location: "Europe",
      source: "Money, 'Mr. Bloomfield's Orchard' (2002)",
    },
    {
      title: "The Lawn Mushroom Bonanza",
      text: "A homeowner in suburban Minneapolis posted photos of over 30 Shaggy Manes that erupted through their front lawn after a week of rain in October 2020. They'd been fighting mushrooms for years without realizing they were sitting on a recurring gourmet crop. Neighbors thought they were weeds.",
      location: "Minneapolis, Minnesota, USA",
      source: "r/foraging",
      sourceUrl: "https://www.reddit.com/r/foraging/",
    },
    {
      title: "Coprinus Ink in Victorian Legal Documents",
      text: "In 19th-century Germany, Coprinus comatus ink was reportedly used for certain official documents. Because microscopic examination could reveal the unique spores in the dried ink, it served as an anti-forgery measure. If a document's ink lacked the telltale spores, it was suspect.",
      location: "Germany",
      source: "Ramsbottom, 'Mushrooms and Toadstools' (1953)",
    },
    {
      title: "Parking Lot Gourmet Find",
      text: "A mycologist in Nottingham documented a massive fruiting of Shaggy Manes pushing through cracked asphalt in a supermarket car park. The mushrooms had literally broken through the pavement — a testament to the surprising hydraulic pressure fungi can generate, which can exceed 8 atmospheres.",
      location: "Nottingham, England",
      source: "British Mycological Society",
      sourceUrl: "https://www.britmycolsoc.org.uk/",
    },
  ],
  seoQueries: [
    "shaggy mane mushroom identification",
    "mushroom that turns into black ink",
    "coprinus comatus edible",
    "shaggy ink cap how to cook",
    "mushroom that dissolves itself",
    "shaggy mane vs ink cap",
    "white shaggy mushroom in my yard",
    "lawyers wig mushroom",
    "can you eat shaggy mane mushrooms",
    "mushroom melting into black liquid",
    "shaggy mane look alikes",
    "how long do shaggy manes last after picking",
    "mushroom that breaks through pavement",
    "autodigestion mushroom",
  ],
  funFacts: [
    "Shaggy Manes can generate enough hydraulic pressure to push through asphalt — up to 8 atmospheres, or roughly the pressure inside a bus tire.",
    "The black ink produced by deliquescing Shaggy Manes was once used as actual writing ink, and the spores embedded in it made documents nearly impossible to forge.",
    "Coprinus comatus is one of the few mushrooms that can trap and digest nematodes (tiny roundworms) in the soil, making it both a decomposer and a predator.",
    "The species name 'comatus' means 'hairy' in Latin — a nod to the shaggy scales that cover the cap like an unkempt wig, which also inspired the common name 'Lawyer's Wig.'",
    "In China, Coprinus comatus is commercially cultivated and sold fresh in markets — but only to local customers, because it can't survive shipping. The self-destruct clock starts the moment it's picked.",
  ],
  images: [
    {
      filename: "01-field.jpg",
      alt: "Shaggy Mane (Coprinus comatus) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Coprinus_comatus-3_hg.jpg",
      author: "Hannes Grobe/Hannes Grobe (talk)",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
    {
      filename: "02-cap-top.jpg",
      alt: "Shaggy Mane cap viewed from above showing surface texture",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Coprinus_comatus_cap_inc_afler.jpg",
      author: "Alun Williams333",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "03-field.jpg",
      alt: "Shaggy Mane (Coprinus comatus) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Coprinus_comatus_(30053094063).jpg",
      author: "Björn S...",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    },
    {
      filename: "04-field.jpg",
      alt: "Shaggy Mane (Coprinus comatus) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Coprinus_comatus_(30661168342).jpg",
      author: "Dr. Hans-Günter Wagner",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    },
    {
      filename: "05-field.jpg",
      alt: "Shaggy Mane (Coprinus comatus) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Coprinus_comatus_Aberystwyth_141025.jpg",
      author: "Kieran Roy Powell",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
  ],
  identificationImages: {
    cap: "cap-detail.jpg",
    gills: "gills-detail.jpg",
    stem: "stem-detail.jpg",
  },
};

export default species;
