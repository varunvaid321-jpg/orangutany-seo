import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "psilocybe-azurescens",
  commonName: "Flying Saucer",
  scientificName: "Psilocybe azurescens",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Hymenogastraceae",
    genus: "Psilocybe",
  },
  summary:
    "The most potent psilocybin mushroom known to science. Psilocybe azurescens grows in a narrow coastal range in the Pacific Northwest, primarily on decaying wood and dune grass litter near the mouth of the Columbia River. Contains psilocybin and psilocin, which are controlled substances in most jurisdictions. This page is for educational identification purposes only.",
  description:
    "Psilocybe azurescens holds the title of the most potent naturally occurring psilocybin mushroom ever analyzed. First described by Paul Stamets and Jochen Gartz in 1995, the species was actually discovered years earlier by a group of Boy Scouts camping near Astoria, Oregon, in 1979. Stamets later collected and formally characterized the species, naming it 'azurescens' for the intense blue bruising reaction that stains the flesh almost immediately upon handling.\n\nWhat makes P. azurescens remarkable beyond its potency is its extremely restricted natural range. The species is found almost exclusively along a narrow strip of the Pacific coast from the mouth of the Columbia River south to Depoe Bay, Oregon, and north into the Long Beach Peninsula of Washington. It grows in sandy soils rich with decaying wood, coastal dune grasses (especially Ammophila arenaria, the European beachgrass), and woody debris deposited by winter storms. This is not a mushroom you find in your backyard.\n\nThe potency is staggering. Chemical analyses have measured psilocybin concentrations up to 1.78% by dry weight, with psilocin at 0.38% and baeocystin at 0.35%. For comparison, a typical P. cubensis specimen contains 0.6-0.8% psilocybin. This means a single gram of dried P. azurescens can contain as much psilocybin as two to three grams of dried P. cubensis. Reports from people who have consumed it describe intense experiences even at very low doses, with a unique body load that includes temporary paralysis (sometimes called \"wood lover paralysis\"), a poorly understood phenomenon associated with several wood-loving Psilocybe species.",
  identification: {
    cap: "3-10 cm across. Convex, expanding to broadly convex or flat with a pronounced central umbo. Caramel to chestnut brown when moist, drying to a pale straw color or buff (strongly hygrophanous). Surface is smooth, slightly viscid when wet, often with a silky sheen when dry. Bruises intensely blue-black.",
    gills: "Broadly attached (adnate) to slightly descending. Two-toned: pale brown at first, darkening to dark chocolate-brown or purple-brown. Bruise blue-black when damaged. Edges may be slightly lighter.",
    stem: "9-20 cm tall, 3-6 mm thick. White, silky-fibrous, often curved at the base. Bruises intensely blue throughout. Has a fibrous annular zone from the partial veil, often stained dark by deposited spores. Base densely covered with white rhizomorphs that bind into the sandy substrate.",
    sporePrint: "Dark purple-brown to purple-black.",
    odor: "Farinaceous (mealy), similar to fresh flour or cucumber.",
  },
  habitat:
    "Saprotrophic on decaying wood buried in sandy coastal soils. Associated with European beachgrass (Ammophila arenaria) and coastal dune environments. Grows in sandy, wood-rich substrates, including driftwood deposits, woody debris piles, and wood chip mulch near the coast. Strongly associated with the maritime climate of the Pacific Northwest coast.",
  season:
    "Late September through January, with peak fruiting in late October through November. Triggered by autumn rains and cool coastal temperatures between 5-15C (40-60F). Some years produce massive flushes; other years are sparse, depending on rainfall timing.",
  range:
    "Extremely restricted natural range. Found primarily along the Pacific coast of Oregon and Washington, from the Columbia River estuary south to approximately Depoe Bay, Oregon, and north along the Long Beach Peninsula of Washington. Occasional reports from coastal British Columbia and Northern California. Cultivated outdoors in other temperate coastal regions.",
  lookAlikes: [
    {
      name: "Psilocybe cyanescens (Wavy Cap)",
      slug: "psilocybe-cyanescens",
      distinction:
        "Also psychoactive, also on wood in the PNW. P. cyanescens has a more distinctly wavy cap margin and is typically smaller. P. azurescens has a broader, flatter cap with a more pronounced umbo and tends to be found in sandier, more coastal habitats. Both bruise blue and have dark purple-brown spore prints.",
    },
    {
      name: "Galerina marginata (Funeral Bell)",
      slug: "galerina-marginata",
      distinction:
        "DEADLY. Can grow in similar wood-rich habitats. Galerina has a rusty brown spore print (not purple-brown), does NOT bruise blue, and has a more persistent membranous ring. The absence of blue bruising and the wrong spore print color are the critical distinguishing features.",
    },
    {
      name: "Stropharia ambigua (Questionable Stropharia)",
      distinction:
        "Non-psychoactive. A larger, pale yellowish mushroom found in similar coastal PNW habitats on wood debris. Has white remnants of a universal veil on the cap, a more prominent ring, and does not bruise blue. Spore print is dark purple-brown.",
    },
  ],
  edibility: "toxic",
  psychoactive: true,
  edibilityNote:
    "The most potent known psilocybin mushroom. Contains psilocybin, psilocin, and baeocystin, all controlled substances. Effects are intense and long-lasting even at low doses. A unique side effect called \"wood lover paralysis,\" a temporary inability to move lasting minutes to hours, has been reported specifically with this and other wood-loving Psilocybe species. The mechanism is unknown and unpredictable. Do not consume this mushroom.",
  gbifKey: 5242469,
  stories: [
    {
      title: "The Boy Scout Discovery",
      text: "In 1979, a group of Boy Scouts camping near Hammond, Oregon, at the mouth of the Columbia River stumbled upon unusual blue-staining mushrooms growing in the sandy soil among coastal grasses. Samples eventually reached Paul Stamets, who spent years studying the species before formally describing it in 1995 with German mycologist Jochen Gartz.",
      location: "Hammond, Oregon, USA",
      source: "Stamets and Gartz, Mycotaxon (1995)",
    },
    {
      title: "The Astoria Pilgrimage",
      text: "Every autumn, the small coastal towns near Astoria, Oregon, see an influx of visitors who come ostensibly for the scenery and seafood but are actually searching for Psilocybe azurescens in the dunes. Local residents and park rangers have grown accustomed to seeing people crouching in the beachgrass with paper bags. Fort Stevens State Park has posted signs discouraging mushroom collection.",
      location: "Astoria, Oregon, USA",
      source: "Oregon State Parks",
    },
    {
      title: "Wood Lover Paralysis Reports",
      text: "Multiple trip reports on Shroomery and Erowid describe a bizarre side effect unique to wood-loving Psilocybe species: temporary paralysis lasting anywhere from 20 minutes to several hours. One 2017 report described a man near Long Beach, Washington, who was unable to stand or walk for over an hour after consuming a moderate dose. The phenomenon remains medically unexplained.",
      location: "Long Beach, Washington, USA",
      source: "Erowid.org",
      sourceUrl: "https://www.erowid.org/",
    },
    {
      title: "The World's Strongest Magic Mushroom",
      text: "When Jochen Gartz published his chemical analysis of Psilocybe azurescens in the mid-1990s, the numbers shocked the mycological community. At up to 1.78% psilocybin by dry weight, it blew past every other known species. Stamets later popularized the finding in his book \"Psilocybin Mushrooms of the World,\" cementing P. azurescens' reputation as the heavyweight champion of psychoactive fungi.",
      location: "Global",
      source: "Stamets, Psilocybin Mushrooms of the World (1996)",
    },
  ],
  seoQueries: [
    "psilocybe azurescens identification",
    "flying saucer mushroom",
    "most potent magic mushroom",
    "psilocybe azurescens vs cubensis potency",
    "strongest psilocybin mushroom",
    "psilocybe azurescens habitat",
    "wood lover paralysis",
    "psilocybe azurescens oregon coast",
    "flying saucer mushroom identification",
    "psilocybe azurescens season",
    "blue bruising mushroom oregon coast",
    "psilocybe azurescens spore print",
    "astoria magic mushrooms",
    "psilocybe azurescens look alikes",
  ],
  funFacts: [
    "Psilocybe azurescens holds the record for the highest psilocybin concentration ever measured in a naturally occurring mushroom: 1.78% by dry weight. That is roughly triple the potency of a typical Psilocybe cubensis.",
    "The species was discovered by Boy Scouts in 1979 but not formally described by science until 1995, a gap of 16 years during which it existed in mycological limbo.",
    "P. azurescens is one of the few mushroom species strongly associated with a single plant: European beachgrass (Ammophila arenaria), an invasive species that was planted along the Oregon coast to stabilize sand dunes in the early 1900s. The mushroom may have spread with the grass.",
    "Wood lover paralysis, a temporary inability to move reported after consuming P. azurescens and other wood-loving Psilocybe species, has no known chemical explanation. It does not occur with dung-loving species like P. cubensis, suggesting a compound unique to wood decomposers may be responsible.",
  ],
  images: [
    {
      filename: "01-field.jpg",
      alt: "Flying Saucer (Psilocybe azurescens) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Psilocybe_azurescens_Stamets_%26_Gartz_1118060_crop.jpg",
      author: "This image was created by user Caleb Brown (Caleb Brown) at Mushroom Observer, a source for mycological images.You can c",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "02-field.jpg",
      alt: "Flying Saucer (Psilocybe azurescens) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Psilocybe_azurescens_Stamets_%26_Gartz_187165.jpg",
      author: "This image was created by user zaca at Mushroom Observer, a source for mycological images.You can contact this user here",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "03-field.jpg",
      alt: "Flying Saucer (Psilocybe azurescens) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Psilocybe_azurescens_Stamets_%26_Gartz_187166.jpg",
      author: "This image was created by user zaca at Mushroom Observer, a source for mycological images.You can contact this user here",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "04-field.jpg",
      alt: "Flying Saucer (Psilocybe azurescens) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Psilocybe_azurescens_Stamets_%26_Gartz_187164.jpg",
      author: "This image was created by user zaca at Mushroom Observer, a source for mycological images.You can contact this user here",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "05-field.jpg",
      alt: "Flying Saucer (Psilocybe azurescens) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Psilocybe_azurescens_Stamets_%26_Gartz_187167.jpg",
      author: "This image was created by user zaca at Mushroom Observer, a source for mycological images.You can contact this user here",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
  ],
};

export default species;
