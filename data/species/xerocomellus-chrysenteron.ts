import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "xerocomellus-chrysenteron",
  commonName: "Red-cracking Bolete",
  scientificName: "Xerocomellus chrysenteron",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Boletales",
    family: "Boletaceae",
    genus: "Xerocomellus",
  },
  summary:
    "The most common bolete in European woodlands, and probably the first bolete every beginner encounters. The cracking olive-brown cap revealing red flesh beneath is distinctive, but the eating quality is mediocre at best. It is edible, but calling it 'choice' would be generous. Think of it as bolete practice.",
  description:
    "If you have ever walked through a European deciduous woodland in autumn and found a small, somewhat sad-looking bolete with a cracked cap showing red underneath, you have met Xerocomellus chrysenteron. It is everywhere. Under oaks, under beeches, along paths, in gardens, in parks. It is the common house sparrow of the bolete world: abundant, familiar, and largely ignored by serious foragers in favor of its more glamorous relatives.\n\nThe identification is usually straightforward. The cap surface is dry, olive-brown to dark brown, and characteristically cracks with age, revealing pinkish-red flesh in the fissures. This cracking pattern, combined with the red tones in the flesh, is the signature feature. The pore surface is yellow to olive-yellow and bruises slowly blue when pressed, though the bluing is often sluggish and inconsistent. The stem is yellowish with red streaks or a reddish flush, especially toward the base. The overall impression is of a mushroom that is never quite at its best: often waterlogged, frequently maggot-ridden, and lacking the firm, dense flesh of a true porcini.\n\nThat said, young, firm specimens are perfectly edible and can be a reasonable addition to mixed mushroom dishes. The flavor is mild, slightly nutty, and inoffensive. The texture tends toward the soft and spongy side, especially in wet weather. Many experienced foragers collect them only when nothing better is available, or use them to bulk out a basket that already contains chanterelles or porcini. The species has recently been moved from the genus Xerocomus to Xerocomellus based on DNA evidence, and the taxonomy of this group remains somewhat unsettled.",
  identification: {
    cap: "4-10 cm across. Convex, becoming flatter with age. Olive-brown, dark brown, or yellowish-brown. Surface is dry, matte, and characteristically develops cracks with age, especially in dry weather, revealing pinkish-red to red flesh beneath the cuticle. This cracking pattern is the primary diagnostic feature.",
    gills: "No gills. Pore surface (tubes) is yellow to olive-yellow, with fairly large, angular pores. Bruises slowly bluish-green when pressed, though the reaction is often sluggish and patchy, not the instant deep blue seen in some other boletes.",
    stem: "4-8 cm tall, 1-2 cm thick. Yellowish at the top, with red or pinkish-red streaks or flush toward the base. Surface is smooth to finely fibrillose, without the reticulation seen in Boletus species. Often somewhat curved or irregularly shaped.",
    sporePrint: "Olive-brown to snuff-brown.",
    odor: "Mild, not distinctive. Faintly mushroomy.",
  },
  habitat:
    "Mycorrhizal with a wide range of broadleaf and coniferous trees, including oaks, beeches, birches, chestnuts, and pines. Found in deciduous, coniferous, and mixed woodlands, parks, gardens, and along paths. One of the least habitat-specific boletes, appearing almost anywhere there are suitable tree partners. Prefers moist conditions.",
  season:
    "Summer through late autumn, typically July through November. Fruits prolifically after rain. One of the first boletes to appear each season and one of the last to disappear.",
  range:
    "Extremely widespread across Europe. Also found in parts of North America, Asia, and Australasia, though the taxonomy in non-European regions is uncertain and similar-looking species may represent different taxa. Common throughout the British Isles, western and central Europe, and Scandinavia.",
  lookAlikes: [
    {
      name: "Xerocomellus porosporus",
      distinction:
        "Very similar in appearance but has a darker, more uniformly brown cap that cracks less dramatically. The pores are wider and more angular, and the spores are truncated (cut off at the ends) under microscopy. In practice, the two species are nearly impossible to separate in the field without a microscope. Both are edible but mediocre.",
      externalUrl: "https://en.wikipedia.org/wiki/Xerocomellus_porosporus",
      externalSource: "Wikipedia",
    },
    {
      name: "Xerocomus subtomentosus (Suede Bolete)",
      distinction:
        "Has a similar olive-brown cap but the surface is velvety (suede-like) rather than cracking to reveal red flesh. The cap does not show red in the cracks, and the stem lacks the red flush of X. chrysenteron. The flesh is yellowish throughout without red tones. Also edible and of similar mediocre quality.",
      externalUrl: "https://en.wikipedia.org/wiki/Xerocomus_subtomentosus",
      externalSource: "Wikipedia",
    },
    {
      name: "Boletus edulis (Porcini)",
      slug: "boletus-edulis",
      distinction:
        "Beginners sometimes confuse the two, but Boletus edulis is much larger and more robust, with a smooth (not cracking) brown cap, a thick stem with fine white reticulation (net pattern), and a white pore surface that does not bruise blue. B. edulis is a far superior edible. The size, reticulation, and lack of cap cracking distinguish it immediately.",
    },
  ],
  edibility: "edible-with-caution",
  edibilityNote:
    "Edible but not highly regarded. Young, firm specimens are the only ones worth collecting; older specimens are frequently waterlogged, soft, and maggot-infested. The flavor is mild and inoffensive but lacks the depth of better boletes. Best used as a supplement in mixed mushroom dishes rather than as the star ingredient. Some individuals report mild gastrointestinal upset, possibly due to consuming specimens that were too old or poorly cooked. Always cook thoroughly.",
  gbifKey: 2524978,
  stories: [
    {
      title: "The Beginner's Bolete in Surrey",
      text: "A member of the Surrey Wildlife Trust described leading a mushroom identification walk in Winkworth Arboretum where participants found more than 50 Red-cracking Boletes in a single morning. She used the species as a teaching tool, showing beginners how to identify the cracking cap, the slow blue bruising of the pores, and the red stem base. She told the group honestly: 'It is edible, it is safe, and it is not very exciting.'",
      location: "Winkworth Arboretum, Surrey, England",
      source: "Surrey Wildlife Trust",
    },
    {
      title: "Mixed Basket in the Dordogne",
      text: "A French forager in the Dordogne described collecting X. chrysenteron only as a 'filler mushroom' when the cepe (B. edulis) harvest was poor. He would slice the youngest, firmest specimens thinly and add them to a mixed saute with whatever else the forest provided. He noted that older specimens absorbed water like sponges and were not worth carrying out of the woods.",
      location: "Dordogne, France",
      source: "Local interview",
    },
    {
      title: "Taxonomic Reshuffling",
      text: "The Red-cracking Bolete has been through multiple taxonomic reassignments. Originally placed in Boletus, then moved to Xerocomus, it was reclassified into the new genus Xerocomellus in 2008 based on molecular phylogenetic analysis. A mycologist at Kew noted that the species complex may actually contain several cryptic species that look identical in the field but differ genetically.",
      location: "Kew, London, England",
      source: "Mycological Research journal",
    },
  ],
  seoQueries: [
    "red cracking bolete identification",
    "xerocomellus chrysenteron edible",
    "cracked brown cap bolete red flesh",
    "red cracking bolete look alikes",
    "xerocomus chrysenteron vs boletus edulis",
    "common bolete identification uk",
    "red cracking bolete recipe",
    "bolete with cracked cap",
    "is red cracking bolete worth eating",
    "small brown bolete blue bruising",
    "xerocomellus chrysenteron habitat",
    "red cracking bolete vs suede bolete",
    "beginner bolete identification",
  ],
  funFacts: [
    "The Red-cracking Bolete is probably the most common bolete species in Europe, found in nearly every woodland type from sea level to the treeline. Its ecological flexibility and lack of strong host preference make it ubiquitous.",
    "The red color visible in the cap cracks is caused by pigments in the flesh just beneath the cuticle. The flesh deeper inside the mushroom is yellowish, and only the subcuticular layer shows the red that makes the cracking pattern so distinctive.",
    "The genus Xerocomellus was created in 2008 to accommodate this species and its close relatives after DNA studies showed they were not closely related to the true Xerocomus species. The taxonomic shuffling reflects how molecular tools have reshaped our understanding of bolete relationships.",
    "Maggot infestation is particularly severe in X. chrysenteron because the soft, spongy flesh is easily penetrated by fungus gnat larvae. In wet weather, finding a specimen without maggots can be nearly impossible, which is one reason experienced foragers often pass on this species.",
  ],
  images: [],
};

export default species;
