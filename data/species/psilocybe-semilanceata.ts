import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "psilocybe-semilanceata",
  commonName: "Liberty Cap",
  scientificName: "Psilocybe semilanceata",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Hymenogastraceae",
    genus: "Psilocybe",
  },
  summary:
    "The most widespread naturally occurring psilocybin mushroom on Earth. Liberty Caps grow in wet grasslands across Europe, and they've been quietly driving autumn foraging culture in the UK and Northern Europe for decades.",
  description:
    "Psilocybe semilanceata is a tiny, unassuming mushroom that most people would walk right past. It grows in sheep and cattle pastures — not on dung itself, but in the grass nearby — and fruits after the first cold autumn rains. It's never been commercially cultivated with any success, which means every Liberty Cap that's ever been consumed was picked from the wild.\n\nThe name 'Liberty Cap' comes from its resemblance to the Phrygian cap, a symbol of freedom during the French and American revolutions. The nipple-shaped peak on the cap is one of its most recognizable features — once you've seen it, you won't confuse it easily.\n\nIt's the most potent psilocybin mushroom by weight among common species. A single gram of dried Liberty Caps contains significantly more psilocybin than a gram of dried Psilocybe cubensis. This potency, combined with its tiny size, means people sometimes underestimate how much they've collected.\n\nIn the UK, Liberty Caps are deeply embedded in autumn culture. Every September and October, thousands of people head to hillside pastures in Wales, Scotland, and Northern England to pick them. It's technically illegal — psilocybin is a Class A substance in the UK — but enforcement in remote pastures is essentially nonexistent.",
  identification: {
    cap: "0.5–2.5 cm across. Distinctly conical to bell-shaped with a pointed nipple (umbo) at the top that persists even when the cap opens. Cream to light brown when dry, darker olive-brown when wet. The surface has a translucent, slightly sticky quality when moist — you can see the gills through the cap if you hold it up to light. Develops a wavy margin with age.",
    gills: "Narrowly attached to the stem (adnate). Start pale grey, mature to dark purple-brown as spores develop. Edges remain lighter — a white or pale fringe along the gill edge is a good diagnostic feature.",
    stem: "4–10 cm tall but only 1–3 mm thick — extremely slender and wiry. Pale cream to yellowish, often with a slight blue-green tinge at the base when handled. Tough and flexible — you can bend it without it snapping. No ring.",
    sporePrint: "Dark purple-brown to blackish. Essential for confirming ID — many small brown mushrooms look similar but have different spore colors.",
    odor: "Slightly musty, like damp hay. Nothing distinctive.",
  },
  habitat:
    "Unimproved grasslands — sheep and cattle pastures that haven't been treated with artificial fertilizers. Grows in the grass, not on dung. Loves acidic, boggy soil. Often found on hillsides, moorlands, and old meadows. Doesn't grow in gardens, forests, or plowed fields.",
  season:
    "September through November in the Northern Hemisphere. Triggered by the first cold rains after summer — usually when night temperatures drop below 10°C. Peak season is mid-September to mid-October in the UK and Northern Europe.",
  range:
    "One of the most widely distributed psilocybin mushrooms. Native across temperate Europe (UK, Ireland, Scandinavia, Netherlands, France, Germany, and south to Spain and Italy). Also found in parts of North America (Pacific Northwest, northeastern states), Chile, New Zealand, and Tasmania. Most abundant in oceanic climates with cool, wet autumns.",
  lookAlikes: [
    {
      name: "Protostropharia semiglobata (Dung Roundhead)",
      image: "lookalike-semiglobata.jpg",
      distinction:
        "Grows directly on dung, not in grass. Rounded cap without a nipple. Has a slimy, sticky cap surface. Most importantly: has a distinct ring on the stem, which Liberty Caps never have. Spore print is dark brown.",
      externalUrl: "https://en.wikipedia.org/wiki/Protostropharia_semiglobata",
      externalSource: "Wikipedia",
    },
    {
      name: "Panaeolus semiovatus (Egghead Mottlegill)",
      image: "",
      distinction:
        "Also found in pastures but much larger and grows on dung. White to cream cap that's smooth and rounded — no nipple. Has a ring on the stem. Spore print is black with a mottled pattern on the gills.",
      externalUrl: "https://en.wikipedia.org/wiki/Panaeolus_semiovatus",
      externalSource: "Wikipedia",
    },
    {
      name: "Conocybe species (Cone Heads)",
      image: "lookalike-conocybe.jpg",
      distinction:
        "Some Conocybe species are dangerously toxic and grow in similar grassland habitats. Key differences: Conocybe caps are more rounded/conical without the distinctive nipple, stems are fragile and snap easily (Liberty Cap stems bend), and spore prints are rusty brown, not purple-brown. This is the dangerous confusion — always check spore print.",
      externalUrl: "https://en.wikipedia.org/wiki/Conocybe",
      externalSource: "Wikipedia",
    },
    {
      name: "Mycena species (Bonnets)",
      image: "lookalike-mycena.jpg",
      distinction:
        "Small conical mushrooms that superficially resemble Liberty Caps. Usually found on wood or leaf litter, not in grass. Caps are more fragile and translucent. Stems snap easily. White spore print — completely different from Liberty Cap's purple-brown.",
      externalUrl: "https://en.wikipedia.org/wiki/Mycena",
      externalSource: "Wikipedia",
    },
  ],
  edibility: "toxic",
  psychoactive: true,
  edibilityNote:
    "Contains psilocybin and baeocystin — potent psychoactive compounds. Illegal to possess or consume in most countries. Pound for pound, Liberty Caps are more potent than Psilocybe cubensis. Effects include visual distortion, altered thinking, euphoria, and anxiety. Physical toxicity is extremely low — there are no confirmed deaths from psilocybin mushrooms alone — but psychological risks are real, especially in uncontrolled settings.",
  gbifKey: 5242507,
  stories: [
    {
      title: "The Accidental Trip in a Welsh Hospital",
      text: "In 2005, a groundskeeper at a hospital in South Wales mowed a patch of grass and collected what he thought were ordinary field mushrooms for his lunch. He spent the afternoon experiencing vivid hallucinations in the break room. His colleagues called an ambulance. He recovered fully by evening.",
      location: "South Wales, UK",
      source: "BBC News",
    },
    {
      title: "The Dutch Tightrope",
      text: "The Netherlands banned dried magic mushrooms in 2008 but left fresh 'magic truffles' (sclerotia) legal — a loophole that persists today. Liberty Caps growing wild in Dutch pastures exist in a grey area: picking them is technically illegal, but they fruit abundantly in public grasslands every autumn.",
      location: "Netherlands",
      source: "Dutch Drug Policy Foundation",
    },
    {
      title: "A Chemistry Student's Field Guide Goes Viral",
      text: "In 2019, a postgrad chemistry student in Edinburgh published a free PDF field guide to identifying Liberty Caps safely, emphasizing the spore print test and Conocybe danger. It was downloaded over 200,000 times in two months. The university asked him to take it down.",
      location: "Edinburgh, Scotland",
      source: "Reddit r/Shrooms",
      sourceUrl: "https://www.reddit.com/r/shrooms/",
    },
    {
      title: "Sheep Farmer Notices Something Odd",
      text: "A sheep farmer in Cumbria told The Guardian in 2017 that every October, strangers would show up in his fields at dawn, hunched over and staring at the grass. He eventually figured out what they were looking for. 'I don't mind as long as they shut the gate behind them,' he said.",
      location: "Cumbria, England",
      source: "The Guardian",
    },
    {
      title: "Albert Hofmann's Analysis",
      text: "In 1963, Albert Hofmann — the chemist who first synthesized LSD — analyzed Liberty Caps from Switzerland and confirmed the presence of psilocybin. It was one of the first European species proven to contain the compound, establishing that psychoactive Psilocybe weren't limited to Mexico and Central America.",
      location: "Basel, Switzerland",
      source: "Hofmann & Heim, 1963",
    },
  ],
  seoQueries: [
    "liberty cap mushroom",
    "liberty cap identification",
    "psilocybe semilanceata",
    "liberty cap uk",
    "magic mushrooms in grass",
    "liberty cap season",
    "liberty cap look alikes",
    "small brown mushroom in pasture",
    "liberty cap vs conocybe",
    "how to identify liberty caps",
    "liberty caps where to find",
    "magic mushrooms uk fields",
    "liberty cap spore print",
    "psychedelic mushrooms europe",
  ],
  funFacts: [
    "Liberty Caps are the most potent commonly found psilocybin mushroom by dry weight — roughly 1.5x stronger than Psilocybe cubensis gram for gram.",
    "The name comes from the Phrygian cap, a soft conical hat that became a symbol of liberty during the French Revolution. The mushroom's nippled cap shape is a near-perfect match.",
    "They've never been successfully cultivated at scale. Unlike Psilocybe cubensis, which grows easily indoors on grain, Liberty Caps seem to require living grass roots and specific soil microbiomes that nobody has been able to replicate.",
    "In the UK, fresh magic mushrooms were legal to possess until the Drugs Act 2005. Before that, market stalls in Camden, London openly sold bags of fresh Liberty Caps.",
    "Sheep eat them. There's no documented evidence it affects the sheep in any noticeable way, though the idea has generated considerable internet speculation.",
  ],
  images: [
    { filename: "01-single.jpg", alt: "Liberty cap mushroom single specimen with pointed cap", source: "Wikimedia Commons", sourceUrl: "https://commons.wikimedia.org/wiki/File:Psilocybe.semilanceata.Alan.jpg", author: "Alan Rockefeller", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/" },
    { filename: "02-field.jpg", alt: "Psilocybe semilanceata growing in grass", source: "Wikimedia Commons", sourceUrl: "https://commons.wikimedia.org/wiki/File:Psilocybe_semilanceata_6514.jpg", author: "Arp", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/" },
    { filename: "03-closeup.jpg", alt: "Liberty cap closeup showing conical cap and slender stem", source: "Wikimedia Commons", sourceUrl: "https://commons.wikimedia.org/wiki/File:Psilocybe_semilanceata_6576.jpg", author: "Arp", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/" },
    { filename: "04-ireland.jpg", alt: "Liberty cap mushroom found in Mayo, Ireland", source: "Wikimedia Commons", sourceUrl: "https://commons.wikimedia.org/wiki/File:Psilocybe_Semilanceata_-_Mayo,_Ireland.jpg", author: "Unknown", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
    { filename: "05-group.jpg", alt: "Group of Psilocybe semilanceata liberty caps in field", source: "Wikimedia Commons", sourceUrl: "https://commons.wikimedia.org/wiki/File:Psilocybe_semilanceata_group.JPG", author: "Unknown", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/" },
  ],
};

export default species;
