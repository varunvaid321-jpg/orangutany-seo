import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "coprinopsis-atramentaria",
  commonName: "Common Ink Cap",
  scientificName: "Coprinopsis atramentaria",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Psathyrellaceae",
    genus: "Coprinopsis",
  },
  summary:
    "Meet the mushroom that hates drinking. The Common Ink Cap is perfectly edible on its own — but pair it with alcohol within a few days and you're in for nausea, heart palpitations, and a face that turns bright red. Its nickname 'Tippler's Bane' is well earned. It also dissolves itself into black ink when it's done spreading spores, which medieval monks actually used to write with.",
  description:
    "Coprinopsis atramentaria is one of nature's most devious tricks. It looks harmless — clusters of smooth grey-brown caps popping up in parks, gardens, and along roadsides. You can even eat it if you want. But the moment you wash it down with a beer (or have a drink anytime in the next 2-3 days), a compound called coprine kicks in and blocks your body's ability to process alcohol. The result is an intensely unpleasant reaction: flushing, nausea, vomiting, heart racing, and a general feeling that your body is staging a revolt. Doctors call it a 'disulfiram-like reaction' because coprine works almost identically to the drug Antabuse, which is prescribed to discourage alcoholics from drinking.\n\nThe other party trick? Autodigestion. Once this mushroom has finished releasing its spores, the cap literally dissolves from the edges inward into a puddle of black, inky liquid. This isn't rot — it's a deliberate self-destruct mechanism called deliquescence. The ink drips down and carries spores with it. Medieval scribes collected this ink and used it for writing and drawing. Some mycologists have noted that documents written in ink cap ink can be identified centuries later by the presence of spores under a microscope — making it an accidental anti-forgery feature.\n\nDespite the alcohol drama, the Common Ink Cap has been eaten for centuries across Europe and Asia. Just... not with wine at dinner.",
  identification: {
    cap: "4-8 cm across, 3-8 cm tall. Starts as a smooth, egg-shaped grey-brown bell. Surface has fine radial grooves and sometimes tiny scales near the top. As it ages, the edges curl up and begin dissolving into black ink. Young caps are the only ones worth looking at — once the ink starts flowing, it's past its prime.",
    gills: "Packed tightly together, initially white, turning pink, then black as spores mature. Eventually liquefy into ink from the cap edge inward. Free from the stem.",
    stem: "5-15 cm tall, white, hollow, smooth with a slight silky sheen. Has a faint ring zone near the base but no persistent ring. Fibrous and snaps cleanly.",
    sporePrint: "Black — very dark, almost jet black.",
    odor: "Mild and pleasant when young. Nothing remarkable.",
  },
  habitat:
    "Loves disturbed ground — gardens, roadsides, paths, compost heaps, and anywhere with buried wood or tree roots. Often appears in dense clusters near stumps or along the edges of lawns. Saprotrophic, feeding on decaying wood underground.",
  season: "Spring through late autumn. Most common in September and October in temperate regions. Can fruit after heavy rain almost any time of year in mild climates.",
  range:
    "Widespread across the Northern Hemisphere — all of Europe, most of North America, and temperate Asia. Also introduced to Australia and New Zealand. One of the most common urban mushrooms in the world.",
  lookAlikes: [
    {
      name: "Shaggy Ink Cap (Coprinus comatus)",
      slug: "coprinus-comatus",
      image: "lookalike-comatus.jpg",
      distinction:
        "Taller and more cylindrical with shaggy, upturned white scales covering the cap — looks like a lawyer's wig. Does NOT contain coprine, so it's safe with alcohol. One of the best-known edible mushrooms. If the cap is shaggy and white, it's not the Common Ink Cap.",
      externalUrl: "https://www.inaturalist.org/taxa/47392-Coprinus-comatus",
      externalSource: "iNaturalist",
    },
    {
      name: "Mica Cap (Coprinellus micaceus)",
      image: "lookalike-micaceus.jpg",
      distinction:
        "Smaller and more delicate with a tawny-brown cap covered in tiny glistening granules (like mica flakes) when young. Grows in similar clusters on buried wood. Edibility is debated — some sources say it may also cause mild alcohol reactions. If you see sparkly granules, think Mica Cap.",
      externalUrl: "https://www.inaturalist.org/taxa/56318-Coprinellus-micaceus",
      externalSource: "iNaturalist",
    },
    {
      name: "Hare's Foot Ink Cap (Coprinopsis lagopus)",
      image: "lookalike-lagopus.jpg",
      distinction:
        "Much more fragile and covered in dense white woolly fibers when young, giving it a fuzzy appearance. Grows singly or in small groups on wood chips and compost. Deliquesces rapidly — often gone within hours of appearing. If it looks furry, it's the Hare's Foot.",
      externalUrl: "https://www.inaturalist.org/taxa/55605-Coprinopsis-lagopus",
      externalSource: "iNaturalist",
    },
  ],
  edibility: "edible-with-caution",
  edibilityNote:
    "Edible when cooked and eaten WITHOUT any alcohol. Contains coprine, which blocks acetaldehyde dehydrogenase — the enzyme your body uses to break down alcohol. If you drink alcohol within 2-3 days before or after eating this mushroom, you'll experience severe flushing, nausea, vomiting, heart palpitations, and chest tightness. The reaction can occur even from small amounts of alcohol. Eat only young specimens before the ink starts flowing, and stay completely sober for at least 72 hours.",
  gbifKey: 5242740,
  stories: [
    {
      title: "The Mushroom That Outed Secret Drinkers",
      text: "In mid-20th century Europe, doctors experimented with feeding Common Ink Cap to patients in alcohol treatment programs. The idea was simple: eat the mushroom, and any attempt to sneak a drink would trigger violent illness. It reportedly worked — but was abandoned in favor of the pharmaceutical drug disulfiram (Antabuse), which does the same thing more reliably.",
      location: "Europe",
      source: "Benjamin, 'Mushrooms: Poisons and Panaceas' (1995)",
    },
    {
      title: "Medieval Monks and Mushroom Ink",
      text: "Monasteries across medieval Europe collected the black liquid from dissolving ink caps and used it as writing ink. The spores embedded in the ink served as an unintentional security feature — documents could be verified centuries later by examining the ink under a microscope for the presence of Coprinopsis spores.",
      location: "Medieval Europe",
      source: "Money, 'Mushroom' (2011)",
    },
    {
      title: "Wedding Reception Gone Wrong in Poland",
      text: "A 2003 case report described a Polish couple who served foraged Common Ink Caps as part of their wedding feast. Multiple guests who paired the dish with champagne toasts experienced facial flushing, rapid heartbeat, and nausea within 30 minutes. All recovered within a few hours, but the reception was effectively over.",
      location: "Poland",
      source: "Polish Journal of Toxicology",
    },
    {
      title: "A Dog Walker's Discovery in London",
      text: "A post on the UK-based Wild Food forum in 2017 described a dog walker in Hampstead Heath who noticed dense clusters of ink caps near an old oak stump every autumn for years. One year they collected a batch, fried them in butter, and enjoyed them — then had a beer an hour later. The resulting hour of nausea and bright red face taught them a lesson they shared in vivid detail online.",
      location: "London, England",
      source: "Wild Food UK Forum",
    },
    {
      title: "Coprine Almost Became a Drug",
      text: "In the 1970s, researchers at Karolinska Institute in Sweden isolated coprine and studied its mechanism. They found it was a prodrug — the body converts it to 1-aminocyclopropanol, which irreversibly blocks aldehyde dehydrogenase. Pharmaceutical companies briefly considered developing it as an alcoholism treatment before deciding that existing drugs were easier to dose reliably.",
      location: "Stockholm, Sweden",
      source: "Lindberg et al., Journal of Medicinal Chemistry (1977)",
    },
  ],
  seoQueries: [
    "common ink cap mushroom",
    "mushroom that reacts with alcohol",
    "tippler's bane mushroom",
    "coprinopsis atramentaria edible",
    "ink cap mushroom identification",
    "can you eat ink cap mushrooms",
    "mushroom alcohol reaction",
    "ink cap vs shaggy ink cap",
    "common ink cap poisonous",
    "mushroom that dissolves into ink",
    "coprine mushroom",
    "grey mushroom in garden clusters",
    "mushroom turns black ink",
    "inky cap mushroom safe to eat",
    "mushroom used to make ink",
  ],
  funFacts: [
    "Coprine, the compound that causes the alcohol reaction, works almost identically to the prescription drug Antabuse (disulfiram), which is given to people trying to quit drinking.",
    "The black ink produced by dissolving ink caps contains microscopic spores that can be identified centuries later — making ink cap ink one of the earliest accidental anti-forgery measures.",
    "You don't even need to drink at the same meal. The alcohol sensitivity can last 2-3 days after eating the mushroom, because coprine irreversibly disables the enzyme — your body has to manufacture new copies.",
    "Despite the dramatic name 'Tippler's Bane,' the mushroom-alcohol reaction is almost never fatal. It's extremely unpleasant, but healthy adults recover within a few hours.",
    "Ink caps can appear seemingly overnight after rain and dissolve into mush within 24 hours. The entire lifecycle from fresh mushroom to puddle of black ink can happen faster than most mushrooms take to open their caps.",
  ],
  images: [
    {
      filename: "01-cluster.jpg",
      alt: "Cluster of young Common Ink Cap mushrooms with smooth grey-brown bell-shaped caps",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Common_Inkcap_(Coprinopsis_atramentaria).jpg",
      author: "AnemoneProjectors",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    },
    {
      filename: "02-young.jpg",
      alt: "Young Common Ink Cap specimen showing characteristic egg-shaped grey cap",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Coprinopsis_atramentaria_100969854.jpg",
      author: "iNaturalist user",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    {
      filename: "03-mature.jpg",
      alt: "Mature Common Ink Cap mushrooms showing flattened caps beginning to deliquesce",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Coprinopsis_atramentaria_3_-_Lindsey.jpg",
      author: "James Lindsey",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "04-ink.jpg",
      alt: "Common Ink Cap at advanced stage with cap edges dissolving into black ink",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Coprinus_atramentarius2_mod_(1).JPG",
      author: "Szabi237",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
    {
      filename: "05-deliquescing.jpg",
      alt: "Common Ink Cap mushroom fully opened showing deliquescence and black gills",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Faltentintling_Coprinus_atramentariu.jpg",
      author: "Holleday",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
  ],
};

export default species;
