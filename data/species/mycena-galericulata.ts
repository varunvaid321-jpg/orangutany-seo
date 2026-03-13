import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "mycena-galericulata",
  commonName: "Common Bonnet",
  scientificName: "Mycena galericulata",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Mycenaceae",
    genus: "Mycena",
  },
  summary:
    "The type species of the entire Mycena genus and one of the most abundant woodland mushrooms in the Northern Hemisphere. Found in dense clusters on rotting stumps and logs, Mycena galericulata is distinguished from its many look-alikes by the distinctive cross-veins connecting its gills — tiny ladder-like ridges you can see when you flip the cap over.",
  description:
    "If you spend any time at all walking through deciduous woodland in autumn, you will meet Mycena galericulata. It grows in dense tufts on rotting stumps, fallen logs, and buried wood, sometimes producing dozens of fruiting bodies from a single piece of timber. The caps are bell-shaped, grayish-brown with a distinct central bump (umbo), and the margin is lined with translucent striations that reveal the gill pattern beneath. It looks, at first glance, like a hundred other small brown mushrooms. But flip it over and look at the gills, and you will see something unusual: tiny cross-veins running between adjacent gills like the rungs of a ladder. This intervenation is the single most reliable field character for separating M. galericulata from the swarm of similar Mycena species it grows alongside.\n\nMycena galericulata holds a special place in mycological history. It is the type species of the genus Mycena — the species that defines what it means to be a Mycena. The genus is enormous, with over 500 described species worldwide, making it one of the largest genera of gilled mushrooms. Despite this taxonomic significance, the Common Bonnet is thoroughly unpretentious. It is a saprotroph, quietly decomposing hardwood (especially beech, oak, and birch) and recycling nutrients back into the forest floor. It produces white spore prints, has a faintly mealy or farinaceous odor, and develops pinkish tones in the gills as the spores mature.\n\nOne of the reasons M. galericulata is so common is its remarkable tolerance for a wide range of conditions. It fruits from late spring through early winter, handles both wet and relatively dry periods, and appears on wood in every stage of decay from freshly fallen to crumbling punk. In milder climates like the Pacific coast of North America or western Britain, it can fruit year-round. It is one of the first saprotrophic fungi to colonize a freshly fallen log, and one of the last to disappear as the wood finally dissolves into soil. This resilience, combined with its willingness to grow on both hardwood and occasionally conifer wood, makes it one of the most frequently encountered mushrooms on Earth.",
  identification: {
    cap: "2–6 cm across. Conical to bell-shaped when young, expanding to broadly convex or nearly flat with age, usually retaining a distinct central umbo (bump). Surface smooth, dry, often slightly wrinkled radially. Grayish-brown to date-brown, paler toward the margin. Margin distinctly striate (translucent lines revealing gill outlines beneath). Hygrophanous — darker brown when moist, drying to pale grayish-buff.",
    gills:
      "Narrowly attached (adnate) to sinuate with a small decurrent tooth. Moderately spaced. White at first, developing a distinct pinkish flush at maturity from the ripening spores. The key diagnostic feature: gills are connected by conspicuous cross-veins (intervenation) — small ridges running between adjacent gills like ladder rungs. This feature is visible with the naked eye and is unusual among Mycena species.",
    stem: "5–10 cm tall, 2–5 mm thick. Slender, hollow, tough and cartilaginous — bends without snapping, unlike many fragile Mycena species. Smooth to slightly polished above, often with fine whitish hairs at the base. Grayish to brownish, paler above. Base may be slightly swollen and attached to the wood by whitish mycelial threads. Does NOT exude latex when broken.",
    sporePrint: "White.",
    odor: "Faintly farinaceous (mealy, like fresh flour or cucumber). Sometimes described as slightly rancid in older specimens.",
  },
  habitat:
    "Saprotrophic on decaying hardwood stumps, logs, fallen branches, and buried roots. Strongly associated with beech, oak, birch, and other deciduous trees, but occasionally found on conifer wood. Typically grows in dense clusters or tufts of 5–50+ fruiting bodies from a single point on the wood. Found in deciduous forests, mixed woodland, parks, gardens, and hedgerows — anywhere rotting wood is available.",
  season:
    "Late spring through early winter, typically May through December. Peak fruiting in September through November. In mild oceanic climates (western UK, Pacific Northwest), can fruit nearly year-round. One of the most persistent woodland fungi, with fresh fruitings appearing over many months from the same piece of wood.",
  range:
    "Extremely widespread across the entire Northern Hemisphere. Very common throughout Europe, North America, and temperate Asia. Also reported from North Africa and parts of Central America. One of the most frequently recorded Mycena species in citizen science databases worldwide.",
  lookAlikes: [
    {
      name: "Bleeding Mycena (Mycena haematopus)",
      slug: "mycena-haematopus",
      image: "lookalike-haematopus.jpg",
      distinction:
        "Similar size and habitat on decaying wood. Distinguished immediately by the dark reddish-purple latex that oozes from the stem when broken. M. galericulata produces no latex at all. M. haematopus also tends to have darker, more reddish-brown caps with a scalloped or toothed margin edge.",
      externalUrl:
        "https://www.inaturalist.org/taxa/63460-Mycena-haematopus",
      externalSource: "iNaturalist",
    },
    {
      name: "Clustered Bonnet (Mycena inclinata)",
      image: "lookalike-inclinata.jpg",
      distinction:
        "Also grows in dense clusters on wood, especially oak. Distinguished by its strongly toothed and scalloped cap margin (M. galericulata has a smooth margin), a distinctly rancid or sour-oily odor (compared to the faintly mealy smell of M. galericulata), and a stem base that often develops a yellowish or orange tinge. Lacks the prominent gill cross-veins.",
      externalUrl:
        "https://www.inaturalist.org/taxa/63453-Mycena-inclinata",
      externalSource: "iNaturalist",
    },
    {
      name: "Grooved Bonnet (Mycena polygramma)",
      image: "lookalike-polygramma.jpg",
      distinction:
        "Can look very similar from above, but the stem is the giveaway: M. polygramma has a distinctly grooved or longitudinally striate stem that is rigid and silvery-gray, almost metallic-looking. M. galericulata has a smooth stem. M. polygramma also tends to grow singly or in small groups rather than in dense clusters, and prefers buried roots rather than exposed stumps.",
      externalUrl:
        "https://www.inaturalist.org/taxa/499257-Mycena-polygramma",
      externalSource: "iNaturalist",
    },
  ],
  edibility: "inedible",
  edibilityNote:
    "Technically non-toxic and sometimes listed as edible in older European field guides, but not worth eating. The flesh is thin, tough, and has an unpleasant mealy-farinaceous taste that does not improve with cooking. Most modern guides classify it as inedible. The genus Mycena contains some species with poorly understood toxicity, so avoiding all small Mycena species for food is prudent.",
  gbifKey: 2526880,
  stories: [
    {
      title: "The Type Species That Defined 500 Mushrooms",
      text: "When Elias Magnus Fries formalized the genus Mycena in 1821, he chose Mycena galericulata as the type species — the single organism that defines what it means to belong to the genus. Every one of the 500+ Mycena species described since then is compared against M. galericulata to determine whether it belongs in the genus. The choice was practical: M. galericulata is common, easy to find, and displays the classic Mycena combination of a bell-shaped cap, white spore print, and saprotrophic habit on wood.",
      location: "Uppsala, Sweden",
      source: "Systema Mycologicum (Fries, 1821)",
    },
    {
      title: "Cross-Veins Under the Microscope",
      text: "Dutch mycologist Rudolph Arnold Maas Geesteranus spent decades studying the genus Mycena and published monographs that remain definitive references. He noted that the intervenation (cross-veining) of M. galericulata gills was among the most reliable macroscopic features for separating it from the approximately 20 similar gray-brown Mycena species found in European beech forests. His 1992 monograph remains the standard work on European Mycena taxonomy.",
      location: "Leiden, Netherlands",
      source: "Mycenas of the Northern Hemisphere (Maas Geesteranus, 1992)",
    },
    {
      title: "Citizen Science Workhorse",
      text: "Mycena galericulata is consistently among the most recorded fungal species on iNaturalist, with over 27,000 research-grade observations worldwide. Its abundance and year-round availability in mild climates make it a frequent first mushroom ID for new citizen scientists. The species also serves as a useful teaching example because its look-alikes (M. inclinata, M. polygramma, M. haematopus) each have clear distinguishing features that beginners can learn to spot.",
      location: "Worldwide",
      source: "iNaturalist",
      sourceUrl: "https://www.inaturalist.org/taxa/63446-Mycena-galericulata",
    },
    {
      title: "Wood Decay and Carbon Cycling",
      text: "Researchers at the Swedish University of Agricultural Sciences studied the role of white-rot saprotrophic fungi in forest carbon cycling and found that Mycena galericulata was among the earliest and most persistent colonizers of fallen beech logs. In a 12-year decay study in southern Sweden, M. galericulata fruiting bodies appeared within the first year of log placement and continued fruiting until year 10, by which time most of the wood had been converted to humus.",
      location: "Southern Sweden",
      source: "Swedish University of Agricultural Sciences",
    },
    {
      title: "Giovanni Scopoli's Original Description",
      text: "The species was first described in 1772 by Giovanni Antonio Scopoli, an Italian-Austrian physician and naturalist working in what is now Slovenia. Scopoli named it Agaricus galericulatus, from the Latin galerus meaning 'a small hat' or 'skullcap' — a reference to the cap shape. Scopoli's description was later sanctioned by Fries, who transferred it to his new genus Mycena. The species has been known continuously for over 250 years, making it one of the longest-studied mushroom species in mycology.",
      location: "Idrija, Slovenia",
      source: "Flora Carniolica (Scopoli, 1772)",
    },
  ],
  seoQueries: [
    "mycena galericulata identification",
    "common bonnet mushroom",
    "mycena galericulata edible",
    "mushroom with cross veins on gills",
    "gray brown mushroom on stump",
    "mycena galericulata vs mycena inclinata",
    "mycena galericulata vs mycena haematopus",
    "mycena galericulata vs mycena polygramma",
    "common bonnet look alikes",
    "bonnet mycena identification UK",
    "mycena galericulata habitat",
    "mushroom clusters on dead wood",
    "small brown mushroom on log identification",
    "mycena galericulata spore print",
    "bell shaped mushroom on rotting wood",
    "mycena type species",
    "intervenose gills mushroom",
  ],
  funFacts: [
    "Mycena galericulata is the type species of the genus Mycena — the single species that formally defines what it means to be a Mycena, a genus with over 500 described species worldwide.",
    "The cross-veins (intervenation) connecting the gills of M. galericulata are unusual among Mycena species and serve as the most reliable field identification feature, visible with the naked eye when the cap is flipped upside down.",
    "A single rotting beech stump can produce fresh Mycena galericulata fruiting bodies continuously for 10 or more years, from the time the wood begins to decay until it crumbles into soil.",
    "The species name galericulata comes from the Latin galerus, meaning 'a small hat' or 'skullcap,' describing the neat bell-shaped cap. It was named by Giovanni Scopoli in 1772, making it one of the oldest continuously recognized mushroom species.",
    "Mycena galericulata gills start out white but develop a distinctive pinkish flush at maturity — not because of pigmentation in the gill tissue, but because the ripening spores themselves are faintly pink-tinged in mass.",
  ],
  images: [
    {
      filename: "01-classic.jpg",
      alt: "Cluster of Mycena galericulata mushrooms growing on a decaying tree stump in woodland",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Mycena_Galericulata_LO_(img1).jpg",
      author: "Florstein",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "02-gills.jpg",
      alt: "Underside of Mycena galericulata showing pinkish gills with visible cross-veins between them",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Rosabl%C3%A4ttrige_Helmling_Mycena_galericulata.jpg",
      author: "Holleday",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
    {
      filename: "04-habitat.jpg",
      alt: "Three Mycena galericulata fruiting bodies emerging from a decaying stump showing bell-shaped caps",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Mycena_galericulata,_Common_Bonnet,_Enfield,_UK.jpg",
      author: "Stu's Images",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "05-cluster.jpg",
      alt: "Close-up of Mycena galericulata gills showing the distinctive intervenation pattern with cross-veins",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Mycena_galericulata_(30446034657).jpg",
      author: "Bernard Spragg",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    },
  ],
  identificationImages: {
    cap: "cap-detail.jpg",
  },
};

export default species;
