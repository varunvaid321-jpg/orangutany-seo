import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "coprinellus-micaceus",
  commonName: "Mica Cap",
  scientificName: "Coprinellus micaceus",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Psathyrellaceae",
    genus: "Coprinellus",
  },
  summary:
    "A common and beautiful inkcap that erupts in dense clusters from buried wood and tree stumps, its young caps dusted with glistening mica-like granules that catch the light. Also known as the Glistening Inkcap, it slowly dissolves its own gills into a black, spore-laden ink — a self-destructive reproductive strategy shared by few other organisms on Earth.",
  description:
    "Coprinellus micaceus is one of those mushrooms you can learn to recognize in a single encounter and then see everywhere. Walk through any park, cemetery, or suburban street lined with old deciduous trees, and you will almost certainly find it — dense clusters of honey-brown caps pushing up through soil near buried roots or crowding the base of a stump. The young caps are egg-shaped and covered in tiny sparkling granules, remnants of the universal veil that once enclosed the entire mushroom. These granules are what give the species its common names: 'Mica Cap' and 'Glistening Inkcap.' In sunlight, a fresh cluster looks almost jeweled.\n\nAs the caps mature, they expand to a bell shape and the mica-like granules wash away or fall off. The gills beneath, initially white, pass through tan to dark brown and then begin the remarkable process of autodigestion — deliquescence. Starting at the cap margin and working inward, the gills dissolve into a black, inky liquid loaded with spores. This is not decay; it is a precisely orchestrated self-destruction that peels back mature gill tissue to expose younger spore-bearing surfaces beneath, allowing wind to carry each generation of spores away before the next wave liquefies. Within 24 to 48 hours of first appearing, a proud cluster of golden-brown caps can be reduced to a few blackened stems and puddles of dark ink.\n\nCoprinellus micaceus is saprotrophic, feeding on dead and decaying hardwood. It has no mycorrhizal relationship with living trees — instead, it is a recycler, breaking down stumps, buried roots, and old timber. It can fruit prolifically, with the same buried root system sending up flushes of dozens or even hundreds of caps repeatedly through the growing season. It is one of the most frequently photographed urban mushrooms in the world, and for good reason: the combination of dense clustering, warm color, sparkling veil fragments, and dramatic self-destruction makes it unforgettable.",
  identification: {
    cap: "1–4 cm across. Egg-shaped to cylindrical when young, expanding to bell-shaped (campanulate) and finally flattening with age. Surface tawny-brown to date-brown, paler toward the margin, with a darker rusty-brown center. Young caps covered in fine, glistening, mica-like granules (veil remnants) that are easily washed off by rain. Margin becomes striate and eventually splits and curls upward as the cap deliquesces. Flesh thin and fragile.",
    gills:
      "Crowded and narrowly attached (adnate) to nearly free. White when very young, quickly progressing through pale tan to brown, then dark brown, and finally black as they liquefy (deliquesce) from the margin inward. The black inky liquid is loaded with mature spores.",
    stem: "4–10 cm tall, 2–5 mm thick. White to pale cream, smooth or finely silky. Hollow. Fragile and easily broken. No ring, though very young specimens may show a faint fibrillose zone. Base may be slightly swollen where multiple stems are fused together in a cluster.",
    sporePrint: "Dark brown to black.",
    odor: "Mild, not distinctive. Faintly mushroomy.",
  },
  habitat:
    "Saprotrophic on dead or buried hardwood — stumps, roots, fallen logs, and old timber. Commonly found at the base of deciduous trees (especially elm, oak, beech, and ash), along roadsides, in parks, gardens, cemeteries, and disturbed urban areas. Almost always grows in dense clusters of 10 to 100+ fruiting bodies. Can also appear in lawns or flower beds where buried wood is present beneath the soil.",
  season:
    "Spring through late autumn, typically April through November in temperate regions. Can fruit year-round in mild climates. Peak fruiting in autumn. Often produces multiple flushes from the same buried wood source throughout the season.",
  range:
    "Cosmopolitan and extremely widespread. Found across Europe, North America, temperate Asia, North Africa, South America, and Australasia. One of the most commonly encountered urban mushrooms worldwide. Abundant in Britain, Ireland, and continental Europe; very common across the United States and Canada.",
  lookAlikes: [
    {
      name: "Common Inkcap (Coprinopsis atramentaria)",
      slug: "coprinopsis-atramentaria",
      distinction:
        "Larger (cap 3–8 cm), smoother, grey to grey-brown without mica-like granules. Grows in similar habitats on buried wood. Contains coprine, which causes severe nausea and vomiting if alcohol is consumed within several days of eating. The grey color and lack of sparkling granules are the key differences.",
      externalUrl:
        "https://www.inaturalist.org/taxa/48521-Coprinopsis-atramentaria",
      externalSource: "iNaturalist",
    },
    {
      name: "Shaggy Mane (Coprinus comatus)",
      slug: "coprinus-comatus",
      distinction:
        "Much larger (cap 5–15 cm tall), white with shaggy recurved scales. Grows singly or in small groups in lawns and disturbed soil, not typically in dense clusters on stumps. Also deliquesces into black ink but is unmistakable due to its tall, cylindrical, scaly white cap.",
      externalUrl:
        "https://www.inaturalist.org/taxa/47392-Coprinus-comatus",
      externalSource: "iNaturalist",
    },
    {
      name: "Firerug Inkcap (Coprinellus domesticus)",
      image: "lookalike-domesticus.jpg",
      distinction:
        "Very similar in size and habit, also growing in clusters on dead wood. Distinguished by its more orange-brown cap with coarser, more persistent veil remnants that form a patchy or scaly (rather than granular) surface. Often associated with a conspicuous orange-brown ozonium (felty mycelial mat) on surrounding wood. Edible but not worth collecting.",
      externalUrl:
        "https://www.inaturalist.org/taxa/203062-Coprinellus-domesticus",
      externalSource: "iNaturalist",
    },
    {
      name: "Funeral Bell (Galerina marginata)",
      slug: "galerina-marginata",
      distinction:
        "DEADLY POISONOUS. A critical look-alike that also grows in clusters on dead wood. Smaller, with a brown cap that lacks mica granules and does NOT deliquesce. Has a distinct membranous ring on the stem and a brown (not black) spore print. Contains amatoxins identical to those in the Death Cap. Always check for the ring and spore print color if in any doubt.",
      externalUrl:
        "https://www.inaturalist.org/taxa/154735-Galerina-marginata",
      externalSource: "iNaturalist",
    },
  ],
  edibility: "edible-with-caution",
  edibilityNote:
    "Edible when young, before the gills begin to blacken and deliquesce. Cooking halts the autodigestion process. Flavor is mild and pleasant but the mushrooms are small and reduce dramatically in volume when cooked. Must be collected and cooked within hours of picking as deliquescence continues after harvest. Avoid collecting from roadsides or polluted sites — Coprinellus micaceus is known to bioaccumulate heavy metals including cadmium and lead from contaminated soil.",
  gbifKey: 2534578,
  stories: [
    {
      title: "Ink from Mushrooms: A Medieval Writing Secret",
      text: "Before the widespread availability of manufactured inks, the black liquid produced by deliquescing inkcap mushrooms — including Coprinellus micaceus — was actually used as writing ink. Historians have documented its use in medieval European monasteries, and chemical analysis of ink on certain historical documents has revealed fungal spore remnants consistent with Coprinus-group species. The ink is surprisingly durable, and modern calligraphers still experiment with it.",
      location: "Europe",
      source: "Mycologist journal",
    },
    {
      title: "The Cemetery Mushroom",
      text: "In Britain, Coprinellus micaceus is so strongly associated with old churchyards and cemeteries that it has been called the 'cemetery mushroom' in popular folklore. The connection is straightforward: Victorian-era churchyards were planted with elms and oaks whose stumps and root systems, often left in place for decades, provide an ideal substrate. The British Mycological Society's surveys have consistently found C. micaceus among the top five most frequently recorded species in urban churchyard fungal surveys.",
      location: "United Kingdom",
      source: "British Mycological Society",
      sourceUrl: "https://www.britmycolsoc.org.uk/",
    },
    {
      title: "Autodigestion as Evolutionary Innovation",
      text: "Researchers at Utrecht University published a landmark 2001 paper reclassifying the inkcap mushrooms using DNA evidence, splitting the old genus Coprinus into four separate genera. Their work revealed that deliquescence — the self-dissolving ink mechanism — evolved independently at least twice in the mushroom family tree. Coprinellus micaceus belongs to a lineage within Psathyrellaceae where deliquescence is partial, while the classic Shaggy Mane (Coprinus comatus) belongs to a separate family entirely.",
      location: "Utrecht, Netherlands",
      source: "Taxon journal",
      sourceUrl: "https://doi.org/10.2307/1554953",
    },
    {
      title: "Urban Mycology's Poster Child",
      text: "The New York Mycological Society has used Coprinellus micaceus as an introductory species on their Central Park forays for decades. The mushroom fruits reliably near old elm stumps in the park, is easy to find in dense clusters, and demonstrates several key mycological concepts in one organism: saprotrophism, deliquescence, spore dispersal, and the importance of substrate. Walk leaders report that watching a cluster dissolve into ink in real time is the moment most beginners become hooked on fungi.",
      location: "New York, USA",
      source: "New York Mycological Society",
      sourceUrl: "https://newyorkmyc.org/",
    },
    {
      title: "Heavy Metal Sentinels",
      text: "A 2006 study by Turkish researchers at Karadeniz Technical University found that Coprinellus micaceus growing near highways accumulated cadmium, lead, and zinc at concentrations up to 50 times higher than the surrounding soil. The finding led to suggestions that the species could serve as a bioindicator for urban heavy metal pollution — a living pollution monitor growing on every city block.",
      location: "Trabzon, Turkey",
      source: "Bioresource Technology",
      sourceUrl: "https://www.sciencedirect.com/journal/bioresource-technology",
    },
  ],
  seoQueries: [
    "coprinellus micaceus identification",
    "mica cap mushroom edible",
    "glistening inkcap identification",
    "mushroom growing on tree stump clusters",
    "coprinellus micaceus vs galerina marginata",
    "mica cap vs shaggy mane",
    "coprinellus micaceus vs coprinopsis atramentaria",
    "inkcap mushroom that dissolves into ink",
    "brown mushroom clusters on dead wood",
    "coprinellus micaceus edibility",
    "glistening inkcap look alikes",
    "mushroom with sparkling granules on cap",
    "mica cap mushroom habitat",
    "coprinellus micaceus season",
    "is mica cap safe to eat",
    "mushroom deliquescence autodigestion",
    "coprinellus micaceus vs coprinellus domesticus",
  ],
  funFacts: [
    "The glistening granules on young Mica Cap caps are remnants of a universal veil — a membrane that once enclosed the entire developing mushroom. Each granule is a cluster of specialized cells called sphaerocysts that catch and scatter light like tiny prisms.",
    "A single Coprinellus micaceus cluster can produce over a billion spores, most of which are released suspended in the black ink produced by autodigestion. This liquid ink was historically used for writing in medieval European monasteries.",
    "Coprinellus micaceus completes its entire lifecycle — from emerging button to dissolved ink puddle — in as little as 24 to 48 hours, making it one of the fastest-maturing macrofungi in the world.",
    "The species was originally described by the French mycologist Jean Baptiste Francois Pierre Bulliard in 1786 as Agaricus micaceus. It has been moved between genera multiple times before landing in Coprinellus in 2001 following DNA-based reclassification.",
    "Unlike the Common Inkcap (Coprinopsis atramentaria), Coprinellus micaceus does not contain coprine and is not known to cause adverse reactions when consumed with alcohol — a distinction that matters greatly to foragers.",
  ],
  images: [
    {
      filename: "05-close-up.jpg",
      alt: "Dense cluster of Coprinellus micaceus mushrooms at the base of a tree showing prominent cap striations and mica-like granules",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Coprinellus_micaceus_41717.jpg",
      author: "Dan Molter",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "01-cluster.jpg",
      alt: "Two young Coprinellus micaceus specimens growing from mossy wood showing honey-brown egg-shaped caps",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Coprinellus_micaceus_104697766.jpg",
      author: "iNaturalist user",
      license: "CC0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0",
    },
    {
      filename: "02-mica-granules.jpg",
      alt: "Cluster of mature Coprinellus micaceus caps showing darkening gills beginning to deliquesce among grass",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:(Coprinellus_micaceus)_Mica_cap_mushroom.jpg",
      author: "Humoyun Mehriddinov",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "03-habitat-stump.jpg",
      alt: "Large flush of Coprinellus micaceus fruiting on a moss-covered tree stump in Hoge Veluwe National Park",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Lots_of_Coprinellus_micaceus_(Gewone_glimmerinktzwam)_at_these_stump_at_Hoge_Veluwe_National_Park_-_panoramio.jpg",
      author: "Panoramio user",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
    {
      filename: "06-deliquescing.jpg",
      alt: "Young Coprinellus micaceus cluster with fresh honey-brown caps emerging from soil over buried wood",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Coprinellus_micaceus_2022.jpg",
      author: "Annika Lindqvist",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
  ],
  identificationImages: {
    cap: "cap-detail.jpg",
    gills: "gills-detail.jpg",
    stem: "stem-detail.jpg",
  },
};

export default species;
