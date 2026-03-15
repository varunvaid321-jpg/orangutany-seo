import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "psilocybe-cyanescens",
  commonName: "Wavy Cap",
  scientificName: "Psilocybe cyanescens",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Hymenogastraceae",
    genus: "Psilocybe",
  },
  summary:
    "A potent psychoactive mushroom that thrives on wood chips in urban and suburban landscapes across the Pacific Northwest, the UK, and Western Europe. Contains psilocybin and psilocin, which are controlled substances in most jurisdictions. Known for its distinctive wavy cap margin and aggressive blue bruising. This page is for educational identification purposes only.",
  description:
    "Psilocybe cyanescens is the wood chip specialist. While its tropical cousin P. cubensis needs cow dung and warmth, the Wavy Cap has colonized the landscaped gardens, park paths, and mulched flower beds of the temperate world with remarkable efficiency. It is arguably the most potent commonly encountered Psilocybe species, with psilocybin concentrations that can exceed those of P. cubensis by two to three times.\n\nThe story of how P. cyanescens spread across the globe reads like an ecological thriller. The species was originally described from England in 1946 by Elsie Wakefield at the Royal Botanic Gardens, Kew. For decades it remained a European curiosity. Then, starting in the 1970s and 1980s, the commercial landscaping industry began using vast quantities of wood chip mulch in parks, playgrounds, and corporate campuses. P. cyanescens spores hitched a ride on the wood chips, and the species exploded across the Pacific Northwest of North America, spreading south into the San Francisco Bay Area and east into parts of the Midwest. Today, it is one of the most commonly encountered psychoactive mushrooms in Portland, Seattle, and Vancouver.\n\nThe danger with Wavy Caps is not the mushroom itself but what grows beside it. Galerina marginata, a deadly amatoxin-containing species, also colonizes wood chip beds and can fruit in the same patch at the same time. The two species have been found growing so close together that their caps were touching. This is the nightmare scenario that has sent people to the hospital: a forager collects what they believe is a uniform batch of Psilocybe cyanescens, not realizing that a few Galerina have slipped into the basket.",
  identification: {
    cap: "2-5 cm across. Convex when young, flattening and developing the characteristic wavy, undulating margin with age. Caramel-brown to chestnut when moist, drying to pale buff or yellowish from the center outward (strongly hygrophanous). Surface is smooth and slightly sticky when wet. Bruises blue-green when damaged.",
    gills: "Broadly attached to the stem (adnate). Pale brown when young, darkening to dark purple-brown as spores mature. Edges often slightly lighter. Bruise blue when damaged.",
    stem: "3-8 cm tall, 3-6 mm thick. White, often with a silky fibrous texture. Bruises strongly blue when handled. Usually has a thin, fragile partial veil that leaves a faint ring zone that catches purple-brown spores. Base often has white rhizomorphs extending into the wood chip substrate.",
    sporePrint: "Dark purple-brown to nearly black. This separates it from the deadly Galerina marginata, which has a rusty brown spore print.",
    odor: "Farinaceous (mealy or flour-like) when fresh.",
  },
  habitat:
    "Saprotrophic on lignin-rich wood chips and mulch. Thrives in landscaped areas, park paths, garden borders, playgrounds, and any setting where hardwood or conifer chips have been spread. Also found on woody debris along riparian corridors. Prefers cool, moist conditions.",
  season:
    "Autumn through early winter, typically October through January. Fruiting is triggered by the first cold rains after temperatures drop below 15C (60F). In the Pacific Northwest, peak season is November. Can fruit into February in mild years.",
  range:
    "Originally described from England. Now widespread across the Pacific Northwest (Oregon, Washington, British Columbia), the UK, Western Europe (particularly Germany, Netherlands, Belgium), and parts of the San Francisco Bay Area. Spreading with the use of commercial wood chip mulch. Also reported from New Zealand and parts of Australia.",
  lookAlikes: [
    {
      name: "Galerina marginata (Funeral Bell)",
      slug: "galerina-marginata",
      distinction:
        "DEADLY. This is the most dangerous possible confusion. Galerina grows on the same wood chips, at the same time, and can be the same size and color. Critical differences: Galerina has a rusty brown spore print (not purple-brown), does NOT bruise blue, and has a more persistent ring. Always check both spore print and bruising on every individual mushroom.",
    },
    {
      name: "Allen's Psilocybe (Psilocybe allenii)",
      slug: "psilocybe-allenii",
      distinction:
        "Also psychoactive, also on wood chips in the Pacific Northwest. Very similar but P. allenii has a less wavy cap margin and slightly different microscopic features (different pleurocystidia). Practically, both species contain psilocybin and grow in the same habitats. Spore print is also dark purple-brown.",
    },
    {
      name: "Hypholoma fasciculare (Sulphur Tuft)",
      slug: "hypholoma-fasciculare",
      distinction:
        "Bitter and mildly toxic. Grows in clusters on wood. Has a sulfur-yellow to greenish-yellow cap (not brown), greenish gills, and a bitter taste. Does not bruise blue. Spore print is purple-brown. The yellow coloring is distinctive.",
    },
  ],
  edibility: "toxic",
  psychoactive: true,
  edibilityNote:
    "Contains psilocybin and psilocin, which are Schedule I controlled substances in the United States and illegal in most countries. P. cyanescens is notably more potent than P. cubensis, with higher concentrations of psilocybin per gram of dried material. Effects include intense visual distortions, altered time perception, euphoria, and anxiety. The primary danger beyond legal consequences is confusion with Galerina marginata, which is deadly. Do not consume this mushroom.",
  gbifKey: 5242465,
  stories: [
    {
      title: "The Wood Chip Explosion of Portland",
      text: "In the 1990s and 2000s, Portland, Oregon, became the unofficial Psilocybe cyanescens capital of North America. The city's extensive use of wood chip mulch in parks and along bike paths created ideal habitat. Mycologists documented massive flushes of thousands of fruiting bodies along a single stretch of the Springwater Corridor trail after autumn rains.",
      location: "Portland, Oregon, USA",
      source: "Pacific Northwest Mycological Society",
    },
    {
      title: "Kew Gardens and the Original Description",
      text: "Elsie Maud Wakefield, a mycologist at the Royal Botanic Gardens, Kew, first formally described Psilocybe cyanescens in 1946 from specimens found growing on wood debris in the gardens. At the time, the psychoactive properties were unknown. It was decades before chemists confirmed the presence of psilocybin.",
      location: "Kew, London, England",
      source: "Wakefield, Transactions of the British Mycological Society (1946)",
    },
    {
      title: "The Mixed Basket Hospitalization",
      text: "A 2014 case in Vancouver involved a man who collected what he thought was a uniform batch of P. cyanescens from a wood chip bed in a public park. Some of the mushrooms were actually Galerina marginata. He experienced both psilocybin effects and, twelve hours later, severe GI symptoms. He was hospitalized with elevated liver enzymes and spent three days in the hospital before recovering.",
      location: "Vancouver, British Columbia, Canada",
      source: "BC Drug and Poison Information Centre",
    },
    {
      title: "The University Campus Flushes",
      text: "Several universities in the Pacific Northwest have dealt with annual autumn appearances of P. cyanescens on their landscaped grounds. The University of Washington documented hundreds of fruiting bodies appearing on wood chip paths near the botany building in November 2019, leading to campus advisories warning students not to pick or eat wild mushrooms.",
      location: "Seattle, Washington, USA",
      source: "University of Washington Grounds Management",
    },
  ],
  seoQueries: [
    "psilocybe cyanescens identification",
    "wavy cap mushroom",
    "magic mushroom on wood chips",
    "psilocybe cyanescens vs galerina",
    "wavy cap vs funeral bell",
    "blue bruising mushroom on wood chips",
    "psilocybe cyanescens pacific northwest",
    "wood chip psychoactive mushroom",
    "wavy cap spore print",
    "psilocybe cyanescens potency",
    "how to identify wavy caps",
    "mushroom with wavy cap edge blue bruising",
    "psilocybe cyanescens season",
    "psilocybe cyanescens uk",
    "wavy cap look alikes",
  ],
  funFacts: [
    "Psilocybe cyanescens is estimated to be 1.5 to 2.5 times more potent than Psilocybe cubensis by dry weight, making it one of the strongest commonly encountered psilocybin mushrooms in the world.",
    "The species has spread globally by hitchhiking on commercial wood chip mulch. Every time a landscaping company delivers a load of chips, there is a chance P. cyanescens spores are along for the ride.",
    "In 2001, a single wood chip bed outside the racetrack at Ascot, England, produced an estimated 100,000 Psilocybe cyanescens fruiting bodies in a single flush, making national news.",
    "The wavy cap margin that gives the species its common name only develops in mature specimens. Young Wavy Caps have smooth, convex caps that are much harder to identify.",
  ],
  images: [
    {
      filename: "01-field.jpg",
      alt: "Wavy Cap (Psilocybe cyanescens) wild specimen",
      source: "iNaturalist",
      sourceUrl: "https://www.inaturalist.org",
      author: "iNaturalist contributor",
      license: "CC BY",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    {
      filename: "02-field.jpg",
      alt: "Wavy Cap (Psilocybe cyanescens) wild specimen",
      source: "iNaturalist",
      sourceUrl: "https://www.inaturalist.org",
      author: "iNaturalist contributor",
      license: "CC BY",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    {
      filename: "03-field.jpg",
      alt: "Wavy Cap (Psilocybe cyanescens) wild specimen",
      source: "iNaturalist",
      sourceUrl: "https://www.inaturalist.org",
      author: "iNaturalist contributor",
      license: "CC BY",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    {
      filename: "04-field.jpg",
      alt: "Wavy Cap (Psilocybe cyanescens) wild specimen",
      source: "iNaturalist",
      sourceUrl: "https://www.inaturalist.org",
      author: "iNaturalist contributor",
      license: "CC BY",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    {
      filename: "05-field.jpg",
      alt: "Wavy Cap (Psilocybe cyanescens) wild specimen",
      source: "iNaturalist",
      sourceUrl: "https://www.inaturalist.org",
      author: "iNaturalist contributor",
      license: "CC BY",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
  ],
};

export default species;
