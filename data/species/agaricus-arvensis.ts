import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "agaricus-arvensis",
  commonName: "Horse Mushroom",
  scientificName: "Agaricus arvensis",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Agaricaceae",
    genus: "Agaricus",
  },
  summary:
    "A big, handsome meadow mushroom with one standout feature: a sweet anise-almond smell that hits you the moment you pick it up. Agaricus arvensis is one of the finest wild Agaricus species — larger than the common field mushroom, more flavorful, and reliably identifiable by its distinctive scent. Just make sure you know the difference between this and the toxic Yellow Stainer.",
  description:
    "The Horse Mushroom is the kind of find that makes a forager's morning. You're walking across a horse pasture or old meadow in early autumn, and there they are — big white caps pushing up through the grass, sometimes in fairy rings that can stretch for meters. They're substantial mushrooms, with caps that can reach 20 cm across, and they have a heft and meatiness that makes them genuinely useful in the kitchen.\n\nThe name 'Horse Mushroom' doesn't come from horses eating them (though they grow in horse pastures). It's an old English term meaning simply 'large' — a horse mushroom is a big mushroom, the way a horse chestnut is a big chestnut. And big they are. A single mature specimen can weigh several hundred grams, and when you find a ring of them, you can fill a basket in minutes.\n\nThe critical identification feature is the smell. Crack a Horse Mushroom open and hold it to your nose: you'll get a clear, sweet scent of anise or almonds. It's unmistakable once you've experienced it. This matters enormously because the Horse Mushroom's most dangerous look-alike — the Yellow Stainer (Agaricus xanthodermus) — smells completely different: an unpleasant chemical or ink-like odor, especially when the flesh is crushed. The smell test isn't just helpful; it's the single most reliable way to tell these two apart in the field.",
  identification: {
    cap: "8–20 cm across, convex becoming broadly flattened. Smooth, white, turning creamy-yellow with age. Surface may crack slightly in dry weather. Stains yellow when rubbed, but a gentle, warm yellow — not the harsh chrome-yellow of the Yellow Stainer.",
    gills:
      "Free (not attached to stem). White when very young, turning pale pink, then dark chocolate-brown, and finally black as spores mature. Covered by a thick partial veil when young that leaves a substantial double ring on the stem.",
    stem: "8–15 cm tall, 2–3 cm wide, sturdy and cylindrical, slightly wider at the base. White, smooth above the ring, slightly scaly below. Features a large, floppy double ring (the lower layer has a distinctive cogwheel or star pattern on its underside).",
    sporePrint: "Dark chocolate-brown to purplish-brown.",
    odor: "Sweet anise or almond — this is the key diagnostic feature. The smell is immediately noticeable when the mushroom is fresh, and becomes even more pronounced when the flesh is crushed or cut. This is what separates it from the toxic Yellow Stainer.",
  },
  habitat:
    "Meadows, pastures, park lawns, roadside verges, and grassy areas — especially where horses or cattle graze. Also found in gardens and on compost-enriched soil. A saprotrophic species that feeds on decaying organic matter in the soil. Often forms fairy rings that can persist for years, expanding outward annually.",
  season:
    "Late summer through autumn, typically July through November. Peak fruiting is August–October across most of Europe. Often appears in flushes after warm rain following a dry spell.",
  range:
    "Widespread across Europe, from the British Isles and Scandinavia south to the Mediterranean. Also found across temperate North America, parts of Asia, Australia, and New Zealand. Essentially anywhere with temperate grasslands and a tradition of livestock grazing.",
  lookAlikes: [
    {
      name: "Yellow Stainer (Agaricus xanthodermus)",
      slug: "agaricus-xanthodermus",
      image: "lookalike-xanthodermus.jpg",
      distinction:
        "The critical look-alike to learn. Similar size and white appearance, but stains a harsh chrome-yellow at the cap edge and especially at the stem base when cut or rubbed. The definitive test is the smell: Yellow Stainer has an unpleasant chemical, ink, or phenol odor — completely different from the sweet anise of Horse Mushroom. Causes significant gastrointestinal distress in most people.",
      externalUrl:
        "https://www.inaturalist.org/taxa/118394-Agaricus-xanthodermus",
      externalSource: "iNaturalist",
    },
    {
      name: "Death Cap (Amanita phalloides)",
      slug: "amanita-phalloides",
      image: "lookalike-phalloides.jpg",
      distinction:
        "The most dangerous possible confusion. Young Amanita phalloides can look superficially like a white Agaricus, but critical differences include: a volval sac (cup) at the stem base, a white spore print (not brown), white gills that stay white, and no anise smell. Always dig up the entire stem base to check for a volva. Deadly — one cap can kill.",
      externalUrl:
        "https://www.inaturalist.org/taxa/52135-Amanita-phalloides",
      externalSource: "iNaturalist",
    },
    {
      name: "Field Mushroom (Agaricus campestris)",
      slug: "agaricus-campestris",
      image: "lookalike-campestris.jpg",
      distinction:
        "The classic 'button mushroom' of fields and pastures. Smaller than Horse Mushroom (cap 5–10 cm), with a thinner single ring and no anise smell. Gills start bright pink rather than pale pink. Both are excellent edibles — the main reason to tell them apart is that positive identification of either species rules out Yellow Stainer.",
      externalUrl:
        "https://www.inaturalist.org/taxa/143563-Agaricus-campestris",
      externalSource: "iNaturalist",
    },
  ],
  edibility: "edible",
  edibilityNote:
    "An excellent edible mushroom with a rich, slightly sweet flavor. Works well in any recipe that calls for button mushrooms but with considerably more depth. Must be carefully distinguished from the Yellow Stainer (Agaricus xanthodermus) — the anise/almond smell versus chemical/ink smell is the critical test. When in doubt, cut the stem base: if it turns bright chrome-yellow and smells like ink, discard it. Also always check for a volval sac at the base to rule out Amanita species.",
  gbifKey: 5243403,
  stories: [
    {
      title: "The Fairy Ring of Avebury",
      text: "Near the ancient stone circle at Avebury in Wiltshire, a fairy ring of Horse Mushrooms has been documented returning to the same meadow every autumn for over 40 years. Local naturalists have measured its diameter expanding by roughly 30 cm per year, and by 2020 it had reached nearly 15 meters across — a living circle older than many of the trees around it.",
      location: "Avebury, Wiltshire, England",
      source: "Wiltshire Natural History Society",
    },
    {
      title: "Victorian Breakfast Staple",
      text: "In 19th-century England, Horse Mushrooms were so commonly gathered from pastures that they appeared on breakfast tables almost as regularly as eggs and bacon. Mrs Beeton's 1861 'Book of Household Management' specifically recommended them for broiling on toast, noting their 'superior flavour' to the smaller field mushroom.",
      location: "England",
      source: "Mrs Beeton's Book of Household Management (1861)",
    },
    {
      title: "The Smell Test That Saved a Family",
      text: "A 2017 case report from a UK poison center described a family of four who collected white mushrooms from a park lawn. The mother, an experienced forager, noticed that some specimens smelled 'wrong' — chemical rather than sweet. She separated them, and the family ate only the anise-scented ones. Lab analysis confirmed the rejected mushrooms were Agaricus xanthodermus. Her nose may have prevented a very unpleasant evening.",
      location: "United Kingdom",
      source: "UK National Poisons Information Service",
    },
    {
      title: "Cavalry Fields to Cricket Grounds",
      text: "Horse Mushrooms have a strong association with historic sites where horses were kept for centuries. Former cavalry grounds, old racecourses, and even cricket pitches with a long history of horse-drawn roller maintenance are known hotspots. Mycologists attribute this to centuries of accumulated organic matter from horse manure enriching the soil.",
      location: "England",
      source: "British Mycological Society",
      sourceUrl: "https://www.britmycolsoc.org.uk/",
    },
    {
      title: "The Amsterdam Park Forager",
      text: "In 2021, a Dutch forager documented an entire season of Horse Mushroom harvesting from Vondelpark in central Amsterdam. Over eight weeks, she collected over 12 kg from fairy rings growing in the park's meadows — all within cycling distance of her apartment. The photo series went viral on Dutch social media and sparked a debate about urban foraging regulations.",
      location: "Amsterdam, Netherlands",
      source: "Dutch Mycological Society (NMV)",
    },
  ],
  seoQueries: [
    "horse mushroom identification",
    "agaricus arvensis edible",
    "horse mushroom vs yellow stainer",
    "large white mushroom in field",
    "horse mushroom anise smell",
    "how to identify horse mushroom",
    "horse mushroom look alikes",
    "is horse mushroom edible",
    "white mushroom in meadow identification",
    "horse mushroom vs field mushroom",
    "agaricus arvensis vs agaricus xanthodermus",
    "horse mushroom fairy ring",
    "horse mushroom season UK",
    "big white mushroom in grass",
    "horse mushroom vs death cap",
  ],
  funFacts: [
    "The name 'Horse Mushroom' has nothing to do with horses eating them — 'horse' is an old English intensifier meaning 'large,' the same way a horse chestnut is simply a big chestnut.",
    "Horse Mushroom fairy rings can persist for decades, expanding outward by about 30 cm per year as the underground mycelium consumes organic matter and moves on to fresh soil.",
    "The sweet anise-almond smell of Agaricus arvensis comes from benzaldehyde and anisaldehyde — the same compounds used in artificial almond and anise flavorings.",
    "A single large Horse Mushroom can produce a spore print so prolific that it leaves a visible dark brown deposit on the grass beneath it overnight — nature's own identification aid.",
    "Horse Mushrooms are one of the few wild Agaricus species that can rival commercially cultivated button mushrooms (Agaricus bisporus) in size — but they have significantly more flavor because they grow slowly in wild soil rather than on optimized compost.",
  ],
  images: [
    {
      filename: "01-hero.jpg",
      alt: "Close-up of a young Horse Mushroom (Agaricus arvensis) with smooth white convex cap and sturdy stem among autumn leaves",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Gewone_anijschampignon_(Agaricus_arvensis)._14-10-2020_(d.j.b.).jpg",
      author: "Famberhorst",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "02-gills.jpg",
      alt: "Horse Mushroom showing free gills ranging from pale pink to dark brown alongside a young white cap",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Agaricus_arvensis_-_December_2024_-_Sarah_Stierch_03.jpg",
      author: "Sarah Stierch",
      license: "CC0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0",
    },
{
      filename: "04-cogwheel.jpg",
      alt: "Horse Mushrooms in grass showing the distinctive cogwheel pattern on the underside of the double ring",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:A._arvensis_showing_cogwheel.jpg",
      author: "Luridiformis",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
    {
      filename: "05-fairy-ring.jpg",
      alt: "White mushrooms growing in a fairy ring arc formation on grass meadow",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Hexenring_auf_einer_Wiese_nahe_Gelnhausen_(Hessen,_Deutschland).png",
      author: "Josua Wuppermann",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
  ],
};

export default species;
