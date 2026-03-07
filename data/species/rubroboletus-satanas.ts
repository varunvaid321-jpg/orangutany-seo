import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "rubroboletus-satanas",
  commonName: "Satan's Bolete",
  scientificName: "Rubroboletus satanas",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Boletales",
    family: "Boletaceae",
    genus: "Rubroboletus",
  },
  summary:
    "Meet the mushroom literally named after the Devil. Satan's Bolete is one of the rare toxic boletes — a chunky, pale-capped bruiser with a blood-red stem and flesh that bruises blue on contact, like something out of a horror movie prop department.",
  description:
    "Most boletes are harmless, and many are downright delicious. That's what makes Rubroboletus satanas such a nasty surprise. It looks vaguely like a porcini if you squint and ignore the screaming red stem, which is exactly how people end up in the hospital. The name \"satanas\" was given by mycologist Harald Othmar Lenz in 1831 after it caused violent vomiting in test subjects — and honestly, it's one of the most accurately named organisms in all of biology.\n\nThe experience of finding one in the wild is genuinely unsettling. You're walking through a sunny European oak woodland, and there it is: a fat, pale mushroom sitting in the leaf litter with a stem that looks like it was dipped in arterial blood. Cut it open, and the white flesh instantly turns blue — a chemical reaction involving oxidation of variegatic acid. The whole thing also smells faintly of rotting meat when mature, as if the visual warnings weren't enough.\n\nDespite its fearsome reputation, Satan's Bolete won't kill you. It causes severe gastrointestinal distress — hours of violent nausea, vomiting, and diarrhea — but fatalities are essentially unheard of. Still, it's the kind of mushroom that makes experienced foragers double-check every bolete they pick. In parts of southern Europe, it's actually somewhat common under oak and beech trees, which means it regularly crosses paths with people hunting for porcini.",
  identification: {
    cap: "10-25 cm across, sometimes even larger. Starts convex, flattens with age. Surface is smooth, dry, and pale grayish-white to dirty buff — surprisingly bland-looking for something so toxic. Can develop olive tones in older specimens.",
    gills: "No gills — this is a bolete with pores underneath. Pore surface starts yellow in young specimens, ages to orange-red or blood red. Pores are small and round. Bruises blue instantly when pressed.",
    stem: "5-15 cm tall, very thick and bulbous — often wider than it is tall. Covered in a fine red mesh-like network (reticulation) over a yellow-to-red background. The red coloring is most intense in the middle section. Stocky and barrel-shaped.",
    sporePrint: "Olive-brown.",
    odor: "Unpleasant and faintly rotten in mature specimens — sometimes described as like old meat. Young ones can be nearly odorless.",
  },
  habitat:
    "Strictly mycorrhizal with broadleaf trees, especially oak (Quercus) and beech (Fagus). Prefers calcareous (chalky/limestone) soils in warm, sunny woodland clearings. Doesn't do well in acidic or dense forests.",
  season: "Summer through early autumn. Peak fruiting is July-September, depending on rainfall and warmth.",
  range:
    "Primarily southern and central Europe — common in Mediterranean regions of France, Italy, Spain, and the Balkans. Extends into central Europe (Germany, Czech Republic, Hungary) but rare further north. Also reported from parts of the Middle East and western Asia. Absent from North America.",
  lookAlikes: [
    {
      name: "Porcini / King Bolete (Boletus edulis)",
      image: "lookalike-edulis.jpg",
      distinction:
        "The prize catch that Satan's Bolete gets confused for. Porcini has a brown cap (not pale gray), a white-to-brown stem with fine white reticulation (not red mesh), and white pores that stay white or turn yellowish-green — never red. Flesh doesn't bruise blue.",
      externalUrl: "https://www.inaturalist.org/taxa/48701-Boletus-edulis",
      externalSource: "iNaturalist",
    },
    {
      name: "Le Gal's Bolete (Rubroboletus legaliae)",
      image: "lookalike-legaliae.jpg",
      distinction:
        "A close relative that's also toxic. Very similar red-stemmed appearance, but the cap tends more pinkish-buff rather than grayish-white. Flesh smells distinctly of curry or fenugreek when cut — Satan's Bolete smells rotten instead. Found in similar habitats.",
      externalUrl: "https://en.wikipedia.org/wiki/Rubroboletus_legaliae",
      externalSource: "Wikipedia",
    },
    {
      name: "Lurid Bolete (Suillellus luridus)",
      image: "lookalike-luridus.jpg",
      distinction:
        "Another blue-bruising bolete with reddish pores — but the cap is dark brown to olive-brown (not pale), and the stem reticulation is darker and coarser. Actually edible when thoroughly cooked, though many foragers avoid it. Grows in similar habitats.",
      externalUrl: "https://en.wikipedia.org/wiki/Suillellus_luridus",
      externalSource: "Wikipedia",
    },
  ],
  edibility: "toxic",
  edibilityNote:
    "Causes severe gastrointestinal poisoning — violent nausea, vomiting, and diarrhea that can last 6-12 hours. Symptoms begin 30 minutes to 2 hours after ingestion. Not considered lethal, but hospitalization is common due to dehydration. Some older sources claim it's edible after prolonged cooking, but this is unreliable and dangerous advice. The toxins (bolesatine, a glycoprotein) are not fully destroyed by heat. Do not eat this mushroom.",
  gbifKey: 7722553,
  stories: [
    {
      title: "The Mycologist Who Named It After the Devil",
      text: "In 1831, German mycologist Harald Othmar Lenz ate a small piece of this bolete to test its edibility. He spent the next several hours violently ill and named it 'satanas' in response — one of the most justified scientific names in history.",
      location: "Germany",
      source: "Lenz, 'Die nützlichen und schädlichen Schwämme' (1831)",
    },
    {
      title: "Porcini Hunter Hospitalized in Tuscany",
      text: "A 2017 report from a Florentine hospital described an experienced forager who mistook a young Satan's Bolete for a porcini in an oak forest near Chianti. The pale cap and stocky shape fooled him — the red pores only became obvious after cooking. He spent two days on IV fluids.",
      location: "Chianti, Tuscany, Italy",
      source: "Clinical Toxicology case reports",
    },
    {
      title: "Czech Republic's Most Hated Bolete",
      text: "Czech mycological societies regularly warn about Rubroboletus satanas in their autumn bulletins. A 2015 survey found it was responsible for more bolete-related poisonings in the Czech Republic than any other species, despite being relatively uncommon.",
      location: "Czech Republic",
      source: "Czech Mycological Society",
      sourceUrl: "https://www.mykologie.net/",
    },
    {
      title: "Featured on a Macedonian Postage Stamp",
      text: "North Macedonia issued a postage stamp featuring Boletus satanas as part of a poisonous mushroom series. It's one of the few toxic species honored with its own stamp — apparently the dramatic red stem photographs well.",
      location: "North Macedonia",
      source: "Macedonian Postal Service",
    },
    {
      title: "Blue-Bruising Bolete Goes Viral on Reddit",
      text: "A 2021 r/mycology post showing a Satan's Bolete cut in half — flesh turning vivid blue within seconds — racked up thousands of upvotes. Commenters called it 'the most metal mushroom' and 'nature's mood ring from hell.'",
      location: "Southern France",
      source: "r/mycology",
      sourceUrl: "https://www.reddit.com/r/mycology/",
    },
  ],
  seoQueries: [
    "satan's bolete mushroom",
    "devil's bolete identification",
    "rubroboletus satanas poisonous",
    "red stem bolete toxic",
    "bolete with red pores",
    "mushroom that bruises blue",
    "boletus satanas edible",
    "pale cap red stem mushroom",
    "is satan's bolete deadly",
    "satan's bolete vs porcini",
    "toxic bolete europe",
    "blue bruising bolete identification",
    "mushroom named after devil",
    "white cap red stem bolete poisonous",
  ],
  funFacts: [
    "Satan's Bolete is one of only a handful of genuinely toxic boletes — the vast majority of the 300+ bolete species worldwide are either edible or simply unpalatable.",
    "The blue bruising reaction happens because the enzyme oxidase converts variegatic acid into quinone methide, which is blue. It's the same chemistry that makes many boletes bruise blue, but Satan's Bolete does it with dramatic speed.",
    "Despite being toxic raw, some historical sources in southern France and Italy claim locals ate it after boiling it three times and discarding the water each time. Modern mycologists strongly advise against this.",
    "The red mesh pattern on the stem (called reticulation) is actually a network of raised veins — it's one of the key identification features that separates it from edible boletes, which have white or pale reticulation.",
    "Satan's Bolete prefers calcareous soils so strongly that mycologists sometimes use its presence as an informal indicator of limestone bedrock beneath the forest floor.",
  ],
  images: [
    {
      filename: "01-field.jpg",
      alt: "Satan's Bolete (Rubroboletus satanas) wild specimen",
      source: "iNaturalist",
      sourceUrl: "https://www.inaturalist.org",
      author: "iNaturalist contributor",
      license: "CC BY",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    {
      filename: "02-field.jpg",
      alt: "Satan's Bolete (Rubroboletus satanas) wild specimen",
      source: "iNaturalist",
      sourceUrl: "https://www.inaturalist.org",
      author: "iNaturalist contributor",
      license: "CC BY",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    {
      filename: "03-field.jpg",
      alt: "Satan's Bolete (Rubroboletus satanas) wild specimen",
      source: "iNaturalist",
      sourceUrl: "https://www.inaturalist.org",
      author: "iNaturalist contributor",
      license: "CC BY",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    {
      filename: "04-field.jpg",
      alt: "Satan's Bolete (Rubroboletus satanas) wild specimen",
      source: "iNaturalist",
      sourceUrl: "https://www.inaturalist.org",
      author: "iNaturalist contributor",
      license: "CC BY",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    {
      filename: "05-field.jpg",
      alt: "Satan's Bolete (Rubroboletus satanas) wild specimen",
      source: "iNaturalist",
      sourceUrl: "https://www.inaturalist.org",
      author: "iNaturalist contributor",
      license: "CC BY",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
  ],
  identificationImages: {
    cap: "cap-detail.jpg",
    gills: "pores-detail.jpg",
    stem: "stem-detail.jpg",
  },
};

export default species;
