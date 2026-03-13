import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "panaeolus-cyanescens",
  commonName: "Blue Meanies",
  scientificName: "Panaeolus cyanescens",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Bolbitiaceae",
    genus: "Panaeolus",
  },
  summary:
    "A potent psychoactive mushroom that grows on cattle and horse dung in tropical and subtropical regions worldwide. Often confused with Psilocybe cubensis due to overlapping habitat. Contains psilocybin and psilocin, which are controlled substances in most jurisdictions. Also known as Copelandia cyanescens. This page is for educational identification purposes only.",
  description:
    "Panaeolus cyanescens, widely known as \"Blue Meanies\" (borrowing the name from the Beatles' Yellow Submarine antagonists), is one of the more potent dung-loving psychoactive mushrooms. It is significantly stronger than its habitat-mate Psilocybe cubensis, which grows on the same cow patties in the same tropical pastures. Where P. cubensis is chunky, golden, and hard to miss, P. cyanescens is delicate, pale, and easy to overlook.\n\nThe species has a pantropical distribution, fruiting on cattle and horse dung from Hawaii to Australia, Southeast Asia to the Caribbean, and across the Gulf Coast of the United States. It was originally described from the Philippines in the early 1900s and was long classified under the genus Copelandia before molecular work placed it firmly in Panaeolus. The common name \"Blue Meanies\" causes endless confusion because it is also used colloquially for certain strains of Psilocybe cubensis. The true Blue Meanie is Panaeolus cyanescens.\n\nIn the field, P. cyanescens is a fragile, elegant mushroom. The cap is pale buff to whitish, often cracking in dry weather to reveal lighter flesh beneath. The gills are the giveaway: they are mottled, with patches of dark gray and light gray that give them a distinctive blotchy appearance. The spore print is jet black, not purple-brown like Psilocybe species. And like all psilocybin mushrooms, it bruises blue when handled, though on the pale flesh the bruising stands out dramatically.\n\nThe primary risk, beyond legal consequences, is misidentification. Several non-psychoactive and mildly toxic Panaeolus species grow in identical habitats. Panaeolus antillarum and Panaeolus papilionaceus are common lookalikes that do not contain psilocybin. Without careful attention to bruising, spore print color, and gill mottling, mistakes are easy to make.",
  identification: {
    cap: "1.5-4 cm across. Hemispheric to convex, rarely fully flattening. Pale buff to light grayish-brown when moist, drying to off-white or cream. Surface is smooth, dry, and often develops a network of fine cracks in dry or windy conditions. Bruises blue-green when damaged.",
    gills: "Broadly attached (adnate). Mottled gray and black in a distinctive patchy pattern as spores mature unevenly across the gill surface. This mottling is characteristic of Panaeolus. Edges may appear slightly whitish.",
    stem: "7-12 cm tall, 2-4 mm thick. Slender, straight, and fragile. Pale gray to whitish, often with a slight powdery coating near the apex. Bruises blue when handled. No ring (the partial veil is evanescent and usually gone by maturity).",
    sporePrint: "Jet black. This is a key distinction from Psilocybe species, which have purple-brown to dark purple-brown spore prints.",
    odor: "Mild, slightly farinaceous. Not distinctive.",
  },
  habitat:
    "Coprophilic, growing directly on or adjacent to cattle, horse, and water buffalo dung. Also found on well-manured pasture soils. Prefers warm, humid tropical and subtropical conditions. Common in lowland pastures near sea level.",
  season:
    "Year-round in tropical regions, peaking after heavy rains. In subtropical areas like Hawaii and the Gulf Coast, primarily late spring through early fall. Fruits rapidly after warm rains and can appear and disappear within 24-48 hours.",
  range:
    "Pantropical. Found throughout Southeast Asia (Philippines, Thailand, Indonesia, Bali), Australia (especially Queensland and Northern Territory), Hawaii, Mexico, Central America, the Caribbean, and the Gulf Coast of the United States (Florida, Louisiana, Texas). Also reported from parts of Africa and South America.",
  lookAlikes: [
    {
      name: "Psilocybe cubensis (Golden Teacher)",
      slug: "psilocybe-cubensis",
      distinction:
        "Also psychoactive, same habitat on dung. P. cubensis is much larger and sturdier, with a golden-brown cap, a persistent ring on the stem, and a purple-brown spore print (not jet black). P. cyanescens is smaller, paler, more fragile, and ringless.",
    },
    {
      name: "Panaeolus antillarum (White Dung Mushroom)",
      distinction:
        "Non-psychoactive. Very similar habitat and shape, but P. antillarum is larger, with a smooth white cap that does not bruise blue, and a black spore print. The absence of blue bruising is the key difference.",
      externalUrl: "https://www.inaturalist.org/taxa/348989-Panaeolus-antillarum",
      externalSource: "iNaturalist",
    },
    {
      name: "Panaeolus papilionaceus (Petticoat Mottlegill)",
      distinction:
        "Non-psychoactive. Similar size and habitat. Has distinctive tooth-like veil remnants hanging from the cap margin (the \"petticoat\"). Does not bruise blue. Spore print is black. The veil remnants and lack of bruising separate it.",
      externalUrl: "https://www.inaturalist.org/taxa/118263-Panaeolus-papilionaceus",
      externalSource: "iNaturalist",
    },
  ],
  edibility: "toxic",
  psychoactive: true,
  edibilityNote:
    "Contains psilocybin and psilocin, controlled substances in most countries. Panaeolus cyanescens is considerably more potent than Psilocybe cubensis, with higher psilocybin concentrations by dry weight. The small size of the mushrooms can lead to underestimation of dose. Effects include intense visual and auditory hallucinations, time distortion, and emotional amplification. Do not consume this mushroom.",
  gbifKey: 2526769,
  stories: [
    {
      title: "The Hawaiian Pasture Tradition",
      text: "On the Big Island of Hawaii, Panaeolus cyanescens fruits prolifically in cattle pastures at lower elevations, particularly around Hilo and on the Hamakua Coast. Local foragers have known about the species for decades, and it has become part of the island's countercultural identity. Ranch owners have posted \"No Trespassing\" signs specifically to deter mushroom hunters from entering their pastures.",
      location: "Hilo, Hawaii, USA",
      source: "Hawaiian Mycological Society",
    },
    {
      title: "Bali's Open Secret",
      text: "In Bali, Indonesia, \"magic mushroom shakes\" have been a tourist attraction since the 1970s. Many of these shakes are made from Panaeolus cyanescens collected from rice paddies and cattle fields rather than from Psilocybe cubensis. The potency difference catches uninformed tourists off guard, and local clinics in Ubud and Kuta occasionally treat visitors who consumed more than they intended.",
      location: "Bali, Indonesia",
      source: "Bali International Medical Centre",
    },
    {
      title: "The Taxonomy War",
      text: "For decades, Panaeolus cyanescens was classified under the genus Copelandia, named after American mycologist Edwin Bingham Copeland who described many Philippine fungi. The reassignment to Panaeolus based on molecular evidence in the 2000s caused confusion that persists today. Many field guides and online sources still list it as Copelandia cyanescens.",
      location: "Global",
      source: "Mycological Research journals",
    },
    {
      title: "Confusion with Cubensis Strains",
      text: "The common name \"Blue Meanies\" is used for both Panaeolus cyanescens and a popular cultivated strain of Psilocybe cubensis. This has caused real harm: in 2019, a post on Reddit documented someone who dosed Panaeolus cyanescens at a Psilocybe cubensis dose, not realizing the species difference. The resulting experience was described as overwhelming and frightening, lasting over eight hours.",
      location: "Online / Global",
      source: "r/shrooms",
      sourceUrl: "https://www.reddit.com/r/shrooms/",
    },
  ],
  seoQueries: [
    "panaeolus cyanescens identification",
    "blue meanies mushroom",
    "copelandia cyanescens identification",
    "blue meanies vs cubensis",
    "panaeolus cyanescens potency",
    "blue meanies mushroom on cow dung",
    "panaeolus cyanescens hawaii",
    "panaeolus cyanescens spore print",
    "mottled gills psychoactive mushroom",
    "blue meanies vs psilocybe cubensis",
    "panaeolus cyanescens look alikes",
    "how to identify blue meanies",
    "tropical psychoactive mushroom on dung",
    "panaeolus cyanescens bali",
  ],
  funFacts: [
    "The name \"Blue Meanies\" comes from the villains in the Beatles' 1968 animated film Yellow Submarine. The name stuck because of the intense blue bruising reaction that stains the pale flesh of the mushroom.",
    "Panaeolus cyanescens is estimated to be two to three times more potent than Psilocybe cubensis by dry weight, but because the mushrooms are so much smaller and lighter, it takes more individual caps to reach the same dose.",
    "The mottled appearance of Panaeolus gills is caused by spores maturing at different rates across the gill surface. This creates a patchwork of dark and light areas that is unique to the genus.",
    "In Australia, Panaeolus cyanescens is sometimes called \"Gold Tops\" in Queensland, causing confusion with the completely unrelated Psilocybe cubensis, which is also called \"Gold Tops\" in other regions.",
  ],
  images: [
    {
      filename: "01-cyanescens-1.jpg",
      alt: "Panaeolus cyanescens mushroom photograph",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Copelandia_cyanescens.jpg",
      author: "Alan Rockefeller",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
  ],
};

export default species;
