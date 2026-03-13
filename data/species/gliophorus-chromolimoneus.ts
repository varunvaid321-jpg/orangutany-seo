import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "gliophorus-chromolimoneus",
  commonName: "Lemon Waxcap",
  scientificName: "Gliophorus chromolimoneus",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Hygrophoraceae",
    genus: "Gliophorus",
  },
  summary:
    "A striking lemon-yellow to chrome-yellow waxcap mushroom found in the temperate rainforests and wet grasslands of Australia and New Zealand. Its intensely slimy cap and stem, translucent flesh, and vivid coloration make it one of the most visually arresting fungi in the Southern Hemisphere.",
  description:
    "Gliophorus chromolimoneus is one of those mushrooms that stops you in your tracks. Growing in small clusters among leaf litter and mossy soil on the forest floor, it practically glows — a saturated lemon-yellow that looks almost artificial against the dark browns and greens of its rainforest habitat. The entire fruiting body is covered in a thick, glossy slime layer that catches the light and gives it a wet, jewel-like appearance even in dry conditions.\n\nThis species belongs to Gliophorus, a genus of slimy waxcaps that were formerly lumped into Hygrocybe. The reclassification was driven by molecular phylogenetics, which showed that the glutinous (slimy) waxcaps formed their own distinct clade. The name 'chromolimoneus' translates roughly to 'lemon-colored' — an unusually accurate piece of taxonomic naming.\n\nGliophorus chromolimoneus is restricted to Australasia, primarily southeastern Australia and both islands of New Zealand. It fruits during the cooler, wetter months — autumn and winter in the Southern Hemisphere — appearing in native Nothofagus (southern beech) forests, Eucalyptus woodland, and wet grassland margins. Like most waxcaps, its exact nutritional strategy is debated: it may be saprotrophic on humus or have a biotrophic relationship with mosses or soil organisms. It tends to grow in tight clusters of 5–15 fruiting bodies, often pushing up through deep layers of decomposing leaf litter.",
  identification: {
    cap: "1–4 cm across. Convex when young, expanding to broadly convex or flat, sometimes with a shallow central depression. Surface extremely slimy (glutinous) when fresh, smooth underneath the slime layer. Color bright lemon-yellow to chrome-yellow, sometimes with a slightly darker center. Margin striate, translucent when moist.",
    gills:
      "Attached (adnexed to adnate), moderately spaced. Pale yellow to whitish-yellow, with a waxy texture characteristic of the Hygrophoraceae. Edges smooth.",
    stem: "2–6 cm tall, 3–6 mm thick. Cylindrical, often slightly compressed. Same bright yellow as the cap. Extremely slimy — the glutinous coating extends the full length. Hollow in mature specimens. No ring.",
    sporePrint: "White.",
    odor: "Not distinctive.",
  },
  habitat:
    "Found in native temperate rainforest, wet sclerophyll forest, and moist grassland margins. Associated with Nothofagus (southern beech), Eucalyptus, and tree fern understories. Grows in soil and deep leaf litter, often in dense clusters. Prefers consistently moist, shaded environments with high humidity.",
  season:
    "Autumn and winter in the Southern Hemisphere, typically March through August. Peak fruiting in May and June. Requires sustained rainfall and cool temperatures to produce fruiting bodies.",
  range:
    "Restricted to Australasia. Found in southeastern Australia (New South Wales, Victoria, Tasmania) and throughout New Zealand (both North and South Islands). Most records come from wetter coastal and montane forests. Not recorded outside the Australasian region.",
  lookAlikes: [
    {
      name: "Scarlet Waxcap (Hygrocybe coccinea)",
      slug: "hygrocybe-coccinea",
      distinction:
        "The Scarlet Waxcap is bright red to scarlet rather than lemon-yellow, making color the most obvious difference. Both share the waxy gill texture and similar stature of the Hygrophoraceae family. Hygrocybe coccinea is also much less slimy than Gliophorus chromolimoneus. Found in similar grassland habitats but with a wider global distribution.",
      externalUrl:
        "https://www.inaturalist.org/taxa/55245-Hygrocybe-coccinea",
      externalSource: "iNaturalist",
    },
    {
      name: "Parrot Waxcap (Gliophorus psittacinus)",
      image: "lookalike-gliophorus-psittacinus.jpg",
      distinction:
        "Another slimy Gliophorus species, but the Parrot Waxcap starts green and transitions to yellow or orange as it ages. The green tones — unique among waxcaps — are the key difference from the purely lemon-yellow G. chromolimoneus. Gliophorus psittacinus is widespread in the Northern Hemisphere and also occurs in parts of Australasia.",
      externalUrl:
        "https://www.inaturalist.org/taxa/348711-Gliophorus-psittacinus",
      externalSource: "iNaturalist",
    },
    {
      name: "Golden Waxcap (Hygrocybe chlorophana)",
      image: "lookalike-hygrocybe-chlorophana.jpg",
      distinction:
        "Hygrocybe chlorophana is a similar bright yellow but has a dry to slightly sticky cap — far less slimy than the profusely glutinous Gliophorus chromolimoneus. The Golden Waxcap also has a drier stem and grows mainly in Northern Hemisphere grasslands, not Australasian rainforests. Cap margin is not striate.",
      externalUrl:
        "https://www.inaturalist.org/taxa/53474-Hygrocybe-chlorophana",
      externalSource: "iNaturalist",
    },
  ],
  edibility: "inedible",
  edibilityNote:
    "Not considered toxic but generally regarded as inedible due to its small size, slimy texture, and thin flesh. There is no tradition of eating this species in any culture. As with all waxcaps, there is limited toxicological data, so consumption is not recommended.",
  gbifKey: 2538850,
  stories: [
    {
      title: "A Featured Photograph from Sydney's Suburbs",
      text: "In July 2019, wildlife photographer JJ Harrison found a pair of Gliophorus chromolimoneus growing on a slope in Ferndale Park, a small bushland reserve in suburban Sydney. His photograph of the vivid lemon-yellow mushrooms against dark soil became a Featured Picture on English Wikipedia — one of only a handful of Australasian fungi to receive that distinction. The image demonstrated that spectacular fungal diversity exists even in remnant urban bushland.",
      location: "Sydney, New South Wales, Australia",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Gliophorus_chromolimoneus_-_Ferndale_Park.jpg",
    },
    {
      title: "Waxcap Grasslands and Conservation in New Zealand",
      text: "In the early 2000s, New Zealand ecologists began surveying waxcap diversity in native grasslands and forest remnants. Gliophorus chromolimoneus was among the species documented during surveys of Kaipara Harbour forests near Auckland, growing under tree ferns in damp native bush. These surveys contributed to growing recognition that Australasian waxcap communities are distinct from their Northern Hemisphere counterparts and deserve their own conservation attention.",
      location: "Auckland, New Zealand",
      source: "Mushroom Observer",
      sourceUrl: "https://mushroomobserver.org/image/show_image/44193",
    },
    {
      title: "Reclassification from Hygrocybe to Gliophorus",
      text: "Gliophorus chromolimoneus was originally described as a Hygrocybe, but molecular phylogenetic work in the 2010s by Lodge, Padamsee, and colleagues showed that the glutinous (slimy) waxcaps formed a distinct clade within Hygrophoraceae. The genus Gliophorus was resurrected for these species. The reclassification affected dozens of species worldwide and fundamentally changed how mycologists understand waxcap diversity.",
      location: "Global",
      source: "Fungal Diversity",
      sourceUrl: "https://link.springer.com/journal/13225",
    },
    {
      title: "Citizen Science Mapping in Tasmania",
      text: "Tasmanian naturalists contributing to iNaturalist and Fungimap have recorded Gliophorus chromolimoneus in wet Eucalyptus forests across the island state. These citizen science records have significantly expanded the known range of the species, which was previously thought to be restricted to mainland southeastern Australia and New Zealand. The Tasmanian populations grow in some of the wettest temperate forests on Earth.",
      location: "Tasmania, Australia",
      source: "Fungimap",
      sourceUrl: "https://fungimap.org.au/",
    },
    {
      title: "The Slime Factor: Adaptation or Defense?",
      text: "Researchers studying waxcap ecology have noted that the thick glutinous coating on Gliophorus species likely serves multiple functions. Studies on related Gliophorus species suggest the slime deters invertebrate grazers, reduces water loss in humid environments, and may help with spore dispersal by causing small debris to stick to the cap surface and later fall away, carrying spores with it. The slime layer on G. chromolimoneus is among the thickest in the genus.",
      location: "Australasia",
      source: "Mycological Research",
    },
  ],
  seoQueries: [
    "gliophorus chromolimoneus identification",
    "lemon waxcap mushroom",
    "gliophorus chromolimoneus australia",
    "yellow waxcap mushroom australia",
    "gliophorus chromolimoneus new zealand",
    "lemon waxcap vs golden waxcap",
    "gliophorus chromolimoneus vs hygrocybe chlorophana",
    "slimy yellow mushroom australia",
    "gliophorus chromolimoneus edibility",
    "lemon waxcap vs parrot waxcap",
    "yellow mushroom australian rainforest",
    "gliophorus chromolimoneus habitat",
    "hygrophoraceae australia identification",
    "lemon waxcap vs scarlet waxcap",
    "gliophorus chromolimoneus taxonomy",
    "waxcap mushrooms southern hemisphere",
  ],
  funFacts: [
    "Gliophorus chromolimoneus was a Featured Picture on English Wikipedia — one of very few Australasian fungi to receive the distinction, based on a photograph taken in a suburban Sydney park.",
    "The species name 'chromolimoneus' translates to 'lemon-colored' from Greek and Latin roots — an unusually accurate piece of taxonomic naming, since the mushroom really does look like a tiny lemon-yellow jewel.",
    "The thick slime layer covering the entire fruiting body is thought to deter invertebrate grazers. Slugs and snails that readily eat other mushrooms tend to avoid the glutinous Gliophorus species.",
    "Gliophorus chromolimoneus is restricted to Australasia — it has never been reliably recorded outside of Australia and New Zealand, making it one of the region's endemic fungal treasures.",
    "Molecular phylogenetics moved this species from Hygrocybe to Gliophorus in the 2010s, when researchers discovered that all the slimy waxcaps formed their own evolutionary lineage separate from the dry-capped waxcaps.",
  ],
  images: [
    {
      filename: "01-field.jpg",
      alt: "Two Gliophorus chromolimoneus mushrooms with vivid lemon-yellow caps and slimy stems growing on a slope in Ferndale Park, Sydney",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Gliophorus_chromolimoneus_-_Ferndale_Park.jpg",
      author: "JJ Harrison",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "02-field.jpg",
      alt: "Cluster of Gliophorus chromolimoneus showing pale yellowish caps with visible gill striations and yellow stems among forest floor debris in New Zealand",
      source: "Wikimedia Commons (via Mushroom Observer)",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Gliophorus_chromolimoneus_44193.jpg",
      author: "Michael (inski)",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "03-field.jpg",
      alt: "Top-down view of Gliophorus chromolimoneus cluster showing cap surfaces with central depressions and striate margins",
      source: "Wikimedia Commons (via Mushroom Observer)",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Gliophorus_chromolimoneus_44195.jpg",
      author: "Michael (inski)",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "04-field.jpg",
      alt: "Side view of a dense cluster of Gliophorus chromolimoneus showing slimy striate caps and translucent yellow stems",
      source: "Wikimedia Commons (via Mushroom Observer)",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Gliophorus_chromolimoneus_44194.jpg",
      author: "Michael (inski)",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "05-field.jpg",
      alt: "Multiple small Gliophorus chromolimoneus fruiting bodies emerging from leaf litter and conifer needles in New Zealand forest",
      source: "Wikimedia Commons (via Mushroom Observer)",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Gliophorus_chromolimoneus_48436.jpg",
      author: "Michael (inski)",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
  ],
};

export default species;
