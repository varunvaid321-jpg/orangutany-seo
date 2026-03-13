import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "stereum-hirsutum",
  commonName: "Hairy Curtain Crust",
  scientificName: "Stereum hirsutum",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Russulales",
    family: "Stereaceae",
    genus: "Stereum",
  },
  summary:
    "A very common bracket-like crust fungus that forms wavy, overlapping shelves on dead hardwood branches, stumps, and logs. Bright golden-yellow to orange when fresh, fading to grayish with age. Found year-round across the temperate world. Not edible due to its tough, leathery texture, but ecologically important as one of the primary decomposers of dead hardwood.",
  description:
    "Stereum hirsutum is the wallpaper of the forest. If you have ever walked through a temperate deciduous woodland and noticed colorful, wavy, shelf-like growths plastered across a fallen branch, there is an excellent chance you were looking at this species. It is one of the most common and widespread wood-decomposing fungi on the planet, found on virtually every continent where hardwood trees grow.\n\nThe fruiting bodies are thin, leathery, and bracket-shaped, growing in overlapping tiers along dead branches, logs, and stumps. Fresh specimens are strikingly beautiful: the upper surface is concentrically zoned in bands of golden-yellow, orange, and tan, with a distinctly hairy or furry texture (the \"hirsutum\" in the name means \"hairy\" in Latin). The underside is smooth to slightly wrinkled, bright orange-yellow when fresh, and lacks the pore surface found in true polypore bracket fungi. This smooth, fertile underside is where the spores are produced.\n\nStereum hirsutum is a white-rot fungus, meaning it breaks down both lignin and cellulose in wood, eventually reducing solid timber to a soft, white, spongy mass. This process is ecologically critical: without white-rot fungi, dead wood would accumulate indefinitely, locking up nutrients and carbon. S. hirsutum is one of the first colonizers of freshly dead hardwood, and its mycelium can remain active in a log for years, slowly converting it back to soil.\n\nThe species has also found an unlikely second career in the world of artisan woodworking. The mycelium of Stereum hirsutum produces distinctive dark zone lines in wood as it grows, creating patterns known as spalting. Spalted wood, with its dramatic black lines and varied coloration, is prized by woodturners and furniture makers. Some artisans deliberately inoculate green hardwood with S. hirsutum to produce spalting patterns, harvesting the wood after the fungus has created the desired effect but before it has degraded the structural integrity.",
  identification: {
    cap: "Fruiting bodies are bracket-shaped or fan-shaped shelves, 1-7 cm across, growing in overlapping tiers. Upper surface is concentrically zoned in bands of golden-yellow, orange, and tan, with a distinctly hairy or furry (hirsute) texture. Older specimens fade to gray or brownish. Texture is thin, tough, and leathery. Margin is often wavy or lobed.",
    gills: "None. The underside (fertile surface) is smooth to slightly wrinkled, not pored. Bright orange-yellow when fresh, darkening to dull orange or brownish with age. Does not bruise or change color when scratched (unlike the closely related Stereum gausapatum, which bleeds red).",
    stem: "None. Fruiting bodies are sessile (directly attached to the wood substrate) or occasionally with a narrow point of attachment.",
    sporePrint: "White, but difficult to obtain due to the bracket growth form. Not a useful identification feature for this species.",
    odor: "Not distinctive. Faintly woody or earthy.",
  },
  habitat:
    "Saprotrophic white-rot fungus on dead hardwood. Found on fallen branches, logs, stumps, and standing dead wood. Strongly associated with oak, beech, birch, and other deciduous hardwoods. Occasionally on conifers. Common in forests, hedgerows, parks, gardens, and any setting with dead wood. One of the first fungi to colonize freshly dead branches.",
  season:
    "Year-round. Fruiting bodies are perennial and persist for months or years, though they are most colorful and actively growing in autumn and winter. New growth appears at the margin during wet periods throughout the year.",
  range:
    "Nearly cosmopolitan. Found throughout North America, Europe, Asia, Australia, New Zealand, and parts of South America and Africa. One of the most widespread and commonly encountered wood-decay fungi in the world.",
  lookAlikes: [
    {
      name: "Trametes versicolor (Turkey Tail)",
      slug: "trametes-versicolor",
      distinction:
        "Very commonly confused. Turkey Tail has a pored underside (visible with a hand lens as tiny holes), while Stereum hirsutum has a smooth underside. Turkey Tail also tends to have more varied cap colors (blues, greens, browns) and a thinner, more flexible texture. The smooth vs. pored undersurface is the definitive distinction.",
    },
    {
      name: "Stereum gausapatum (Bleeding Oak Crust)",
      distinction:
        "Very similar in appearance, but the underside of S. gausapatum bleeds red when scratched or damaged. S. hirsutum does not change color when scratched. Found almost exclusively on oak. Test by scratching the fresh underside with a fingernail.",
      externalUrl: "https://www.inaturalist.org/taxa/332685-Stereum-gausapatum",
      externalSource: "iNaturalist",
    },
    {
      name: "Stereum complicatum (Crowded Parchment)",
      distinction:
        "Similar growth habit on dead wood, but forms smaller, more crowded, and more tightly overlapping shelves. Often more uniformly tan or buff without the bright golden zoning. Common in eastern North America on hardwood branches.",
      externalUrl: "https://www.inaturalist.org/taxa/196842-Stereum-complicatum",
      externalSource: "iNaturalist",
    },
  ],
  edibility: "inedible",
  edibilityNote:
    "Not edible. The fruiting bodies are thin, tough, and leathery with no culinary value. Not toxic, but physically impossible to chew or digest. Like Turkey Tail, it has been explored for potential medicinal compounds (particularly polysaccharides), but no significant therapeutic applications have been established for this species.",
  gbifKey: 2551270,
  stories: [
    {
      title: "The Spalting Revolution",
      text: "Woodturner and artist Sara Robinson at Oregon State University has spent over a decade researching and promoting spalted wood, much of which is produced by Stereum hirsutum. Her work showed that controlled inoculation of green maple and birch with S. hirsutum mycelium produces predictable zone lines within 8-12 weeks. Her spalting workshops have introduced hundreds of woodworkers to the intersection of mycology and craft.",
      location: "Corvallis, Oregon, USA",
      source: "Oregon State University Wood Science Department",
    },
    {
      title: "The Most Misidentified Mushroom Online",
      text: "A 2021 analysis of mushroom identification posts on Reddit found that Stereum hirsutum and Trametes versicolor were the most frequently confused species pair, with hundreds of posts per year misidentifying one as the other. The distinction (smooth vs. pored underside) is simple but requires flipping the mushroom over, which most photographers do not do.",
      location: "Online / Global",
      source: "r/mycology",
      sourceUrl: "https://www.reddit.com/r/mycology/",
    },
    {
      title: "The Ancient Greek Zone Lines",
      text: "Spalted wood produced by Stereum and related fungi has been found in furniture and decorative objects dating back to the Italian Renaissance and possibly earlier. The dark zone lines were prized for their decorative effect long before anyone understood that a fungus was responsible. Some of the intarsia (wood inlay) work in 15th-century Italian churches features spalted patterns consistent with Stereum colonization.",
      location: "Italy",
      source: "Forest Products Journal",
    },
  ],
  seoQueries: [
    "stereum hirsutum identification",
    "hairy curtain crust mushroom",
    "yellow bracket fungus on wood",
    "stereum hirsutum vs turkey tail",
    "golden shelf fungus on dead branch",
    "hairy curtain crust edible",
    "smooth underside bracket fungus",
    "stereum hirsutum spalting wood",
    "yellow orange bracket fungus identification",
    "common crust fungus on hardwood",
    "stereum hirsutum look alikes",
  ],
  funFacts: [
    "Stereum hirsutum is one of the primary fungi responsible for spalting, the dramatic dark zone lines found in decorative wood. Woodturners deliberately infect green wood with S. hirsutum mycelium to create these patterns.",
    "The zone lines in spalted wood are actually battle fronts: they form where the mycelium of Stereum hirsutum meets competing fungi in the wood. Each organism deposits melanin at the boundary, creating a permanent dark barrier.",
    "Stereum hirsutum was one of the first fungi to have its genome fully sequenced, providing insights into the enzymatic machinery of white-rot decomposition and the evolution of wood-decaying capabilities in fungi.",
    "Despite being one of the most common fungi on Earth, S. hirsutum is often overlooked because it does not look like a 'typical' mushroom. It lacks gills, pores, a stem, and a cap in the traditional sense, yet it is a highly efficient spore-producing machine.",
  ],
  images: [
    {
      filename: "01-field.jpg",
      alt: "Hairy Curtain Crust (Stereum hirsutum) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Striegeliger_Schichtpilz-Stereum_hirsutum-20191216-RM-150832.jpg",
      author: "Ermell",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "02-habitat.jpg",
      alt: "Hairy Curtain Crust growing in natural habitat",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Fungus_on_a_tree_trunk,_Medina_arboretum,_Isle_of_Wight,_England.jpg",
      author: "ITookSomePhotos",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "03-field.jpg",
      alt: "Hairy Curtain Crust (Stereum hirsutum) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:2008-03-15_Stereum_hirsutum_1.jpg",
      author: "Andreas Kunze",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "04-field.jpg",
      alt: "Hairy Curtain Crust (Stereum hirsutum) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:2008-11-02_Tremella_foliacea_Stereum_hirsutum.jpg",
      author: "Andreas Kunze",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "05-field.jpg",
      alt: "Hairy Curtain Crust (Stereum hirsutum) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:2014-01-18_Stereum_hirsutum_(Willd.)_Pers_399536.jpg",
      author: "This image was created by user zaca at Mushroom Observer, a source for mycological images.You can contact this user here",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
  ],
};

export default species;
