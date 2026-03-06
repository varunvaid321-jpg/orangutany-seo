import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "psilocybe-cubensis",
  commonName: "Golden Teacher / Magic Mushroom",
  scientificName: "Psilocybe cubensis",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Hymenogastraceae",
    genus: "Psilocybe",
  },
  summary:
    "The world's most famous psychoactive mushroom. Psilocybe cubensis contains psilocybin and psilocin, which are controlled substances in most countries. Possession, cultivation, and consumption are illegal in the majority of jurisdictions. This page is for educational identification purposes only.",
  description:
    "If there's one mushroom that changed the course of Western culture, it might be this unassuming dung-lover. Psilocybe cubensis — known on the street as \"Golden Teacher,\" \"cubes,\" or simply \"magic mushrooms\" — became the poster child of the 1960s psychedelic revolution, fueled in part by ethnobotanist Terence McKenna's passionate advocacy and his \"Stoned Ape\" hypothesis, which proposed that psilocybin played a role in the evolution of human consciousness. Long before McKenna, though, Mazatec healer Maria Sabina had been using psilocybin mushrooms in sacred velada ceremonies in Oaxaca, Mexico — a tradition that dates back centuries and was thrust into the Western spotlight when R. Gordon Wasson published his famous Life magazine article in 1957.\n\nFast forward to the 2020s, and Psilocybe cubensis is at the center of a scientific renaissance. Johns Hopkins University's Center for Psychedelic and Consciousness Research has published landmark studies showing psilocybin can produce lasting relief from treatment-resistant depression, end-of-life anxiety, and addiction. Oregon became the first U.S. state to legalize supervised psilocybin therapy in 2020, and several cities have decriminalized possession. The FDA has granted psilocybin \"Breakthrough Therapy\" designation for depression — a remarkable turnaround for a Schedule I substance.\n\nSo why does it grow on cow dung? Psilocybe cubensis is a coprophilic (dung-loving) species that thrives in tropical and subtropical pastures worldwide. The spores pass through cattle digestive systems unharmed, and the nutrient-rich dung provides an ideal substrate. You'll find it fruiting after warm rains in the Gulf Coast states, Mexico, Central America, Southeast Asia, and parts of Australia. It's one of the easiest psilocybin mushrooms to identify in the wild — but confusing it with the deadly Galerina marginata is a mistake that has sent people to the hospital.",
  identification: {
    cap: "2-8 cm across. Convex when young, flattening with age, often with a slight central bump (umbo). Golden-brown to pale yellowish when dry, darker caramel-brown when wet. Surface is smooth and slightly sticky. Bruises blue when damaged — this is the key tell for psilocybin content.",
    gills: "Closely spaced, attached to the stem (adnate to adnexed). Start out pale gray, darken to deep purple-brown as spores mature. Edges may appear slightly lighter or mottled.",
    stem: "4-15 cm tall, 0.5-1.5 cm thick. White to off-white, often with a thin partial veil ring (annulus) that catches falling spores and turns purplish-black. Bruises blue when handled — a hallmark of psilocybin-containing species. Base may have whitish mycelial strands.",
    sporePrint: "Dark purple-brown to nearly black. Always take a spore print when identifying — this rules out many lookalikes.",
    bruising: "Distinctive blue-green bruising on cap and stem within minutes of handling or cutting. Caused by oxidation of psilocin. This is the single most important field identification feature.",
  },
  habitat:
    "Coprophilic — grows directly on or near cattle and horse dung in tropical and subtropical pastures. Also found in well-manured grasslands and occasionally on enriched soils. Prefers warm, humid conditions with temperatures above 20C (68F).",
  season: "Year-round in tropical regions. In subtropical areas like the U.S. Gulf Coast, primarily spring through fall after warm rains. Peak fruiting follows periods of heavy rainfall when temperatures are between 21-27C (70-80F).",
  range:
    "Pantropical distribution. Found throughout Central America, Mexico, the Caribbean, southeastern United States (Florida, Texas, Louisiana, Mississippi), South America, Southeast Asia, Australia, and parts of Africa. Originally described from Cuba in 1906.",
  lookAlikes: [
    {
      name: "Liberty Cap (Psilocybe semilanceata)",
      slug: "psilocybe-semilanceata",
      image: "lookalike-semilanceata.jpg",
      distinction:
        "Also psychoactive, but much smaller and grows in temperate grasslands, not on dung. Has a distinctive pointed, nipple-like cap. Found in cool European and North American pastures rather than tropical climates. Does not have the same golden-brown coloring.",
      externalUrl: "https://www.inaturalist.org/taxa/54025-Psilocybe-semilanceata",
      externalSource: "iNaturalist",
    },
    {
      name: "Blue Meanie (Panaeolus cyanescens)",
      slug: "panaeolus-cyanescens",
      image: "lookalike-cyanescens.jpg",
      distinction:
        "Also psychoactive and also grows on dung. Lighter colored — pale buff to whitish cap that cracks in dry weather. Thinner and more fragile than P. cubensis. Gills are mottled black and gray. Spore print is jet black (not purple-brown).",
      externalUrl: "https://en.wikipedia.org/wiki/Panaeolus_cyanescens",
      externalSource: "Wikipedia",
    },
    {
      name: "Funeral Bell (Galerina marginata)",
      image: "lookalike-marginata.jpg",
      distinction:
        "DEADLY. Contains amatoxins — the same liver-destroying compounds found in Death Caps. Similar brown cap and ring on the stem, but grows on decaying wood (not dung), has a rusty-brown spore print (not purple-brown), and does NOT bruise blue. Confusing these two is a potentially fatal mistake. Always check the spore print and substrate.",
      externalUrl: "https://www.mushroomexpert.com/galerina_marginata.html",
      externalSource: "MushroomExpert",
    },
  ],
  edibility: "toxic",
  psychoactive: true,
  edibilityNote:
    "Contains psilocybin and psilocin, which are Schedule I controlled substances in the United States and illegal in most countries worldwide. Effects include visual hallucinations, altered perception of time, euphoria, and anxiety. While psilocybin has a relatively low physiological toxicity and fatal overdoses are extremely rare, it is not a food mushroom. Psychological risks include panic attacks, psychotic episodes, and dangerous behavior during intoxication. Do not consume this mushroom.",
  gbifKey: 5242510,
  stories: [
    {
      title: "Johns Hopkins Calls Psilocybin a 'Breakthrough'",
      text: "In 2016, researchers at Johns Hopkins published a landmark study showing that a single dose of psilocybin produced substantial and sustained decreases in depression and anxiety in patients with life-threatening cancer diagnoses. The FDA later granted it Breakthrough Therapy status.",
      location: "Baltimore, Maryland, USA",
      source: "Journal of Psychopharmacology (2016)",
      sourceUrl: "https://doi.org/10.1177/0269881116675513",
    },
    {
      title: "A Forager's Worst Nightmare",
      text: "A 2019 Reddit post described a novice forager in the Pacific Northwest who picked small brown mushrooms from a wood chip bed thinking they were Psilocybe — they turned out to be Galerina marginata. Fortunately, they posted photos before consuming them, and the community identified them in time.",
      location: "Pacific Northwest, USA",
      source: "r/mycology",
      sourceUrl: "https://www.reddit.com/r/mycology/",
    },
    {
      title: "Maria Sabina and the Sacred Velada",
      text: "Mazatec curandera Maria Sabina conducted psilocybin mushroom ceremonies in Oaxaca for decades before R. Gordon Wasson attended one in 1955 and published it in Life magazine. The resulting flood of Western visitors disrupted her community — she later said the mushrooms had 'lost their power.'",
      location: "Huautla de Jimenez, Oaxaca, Mexico",
      source: "Wasson, Life Magazine (1957)",
    },
    {
      title: "Cow Pasture Gold in Florida",
      text: "Every summer after heavy rains, foragers in central Florida flock to cattle pastures at dawn looking for fresh P. cubensis flushes. One Shroomery user described finding over 200 specimens in a single morning in a Polk County cow field — and nearly stepping on a water moccasin in the process.",
      location: "Polk County, Florida, USA",
      source: "Shroomery.org",
      sourceUrl: "https://www.shroomery.org/",
    },
    {
      title: "Oregon Opens the Door",
      text: "In November 2020, Oregon voters passed Measure 109, making it the first U.S. state to legalize psilocybin-assisted therapy. Licensed service centers began operating in 2023, offering supervised sessions for adults over 21 — no diagnosis required.",
      location: "Oregon, USA",
      source: "Oregon Psilocybin Services",
      sourceUrl: "https://www.oregon.gov/oha/PH/PREVENTIONWELLNESS/Pages/Psilocybin-Services.aspx",
    },
  ],
  seoQueries: [
    "magic mushroom identification",
    "psilocybe cubensis identification",
    "golden teacher mushroom",
    "how to identify magic mushrooms",
    "mushroom that bruises blue",
    "mushrooms growing on cow dung",
    "psilocybin mushroom look alikes",
    "magic mushroom vs galerina",
    "is psilocybin legal",
    "psilocybe cubensis vs semilanceata",
    "blue bruising mushroom identification",
    "magic mushroom spore print color",
    "psilocybin mushroom habitat",
    "what do magic mushrooms look like",
    "golden cap mushroom on cow poop",
  ],
  funFacts: [
    "Psilocybe cubensis was first scientifically described from specimens collected in Cuba in 1906 by American mycologist Franklin Sumner Earle — hence the name 'cubensis.'",
    "The blue bruising reaction that gives magic mushrooms away is caused by the oxidation and polymerization of psilocin — essentially the same chemistry as indigo dye formation.",
    "A single Psilocybe cubensis cap can release up to 16 billion spores, and those spores can survive passage through a cow's entire digestive system completely unharmed.",
    "Terence McKenna's 'Stoned Ape' hypothesis proposed that early hominids who ate psilocybin mushrooms in African grasslands gained cognitive advantages — including enhanced visual acuity and creativity — that accelerated human brain evolution.",
    "In 2018, researchers found that psilocybin increases connectivity between brain regions that don't normally communicate, essentially creating temporary 'shortcuts' across the brain — which may explain the compound's therapeutic potential.",
  ],
  images: [
    {
      filename: "01-cap-top.jpg",
      alt: "Psilocybe cubensis mushroom showing golden-brown cap from above in Zimbabwe",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Psilocybe_Cubensis_Imire_(Psilocybe_Cubensis_Zimbabwe)_9.jpg",
      author: "Robert van der Horst",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "02-cow-pasture.jpg",
      alt: "Psilocybe cubensis growing in cow pasture showing natural habitat",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Psilocybe_cubensis_in_cow_pasture.jpg",
      author: "Alexander Abair",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    {
      filename: "03-magic-mushroom.jpg",
      alt: "Mature Psilocybe cubensis specimen showing classic magic mushroom form",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Psilocybe_cubensis-_The_Magic_Mushroom_-_Flickr_-_Dick_Culbert.jpg",
      author: "Dick Culbert",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0",
    },
    {
      filename: "04-wild-specimen.jpg",
      alt: "Wild Psilocybe cubensis fruiting body showing cap and stem details",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Psilocybe_cubensis_321199915.jpg",
      author: "Erick Velez Sanchez",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    {
      filename: "05-group.jpg",
      alt: "Group of Psilocybe cubensis mushrooms showing variation in cap color and size",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:%D0%9F%D0%B5%D1%87%D1%83%D1%80%D0%BA%D0%B0(Psilocybe_cubensis).jpg",
      author: "Martina Apostoloska",
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
