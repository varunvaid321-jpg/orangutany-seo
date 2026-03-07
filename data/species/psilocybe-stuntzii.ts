import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "psilocybe-stuntzii",
  commonName: "Blue Ringer / Stuntz's Blue Legs",
  scientificName: "Psilocybe stuntzii",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Hymenogastraceae",
    genus: "Psilocybe",
  },
  summary:
    "A small psychoactive mushroom native to the Pacific Northwest, commonly found in wood chips, bark mulch, and freshly landscaped areas around Seattle and Portland. Named after mycologist Daniel Stuntz. Contains psilocybin; illegal in most jurisdictions. This page is for educational identification purposes only.",
  description:
    "Psilocybe stuntzii is the urban psychedelic mushroom of the Pacific Northwest. While most psilocybin species are associated with cow pastures, tropical forests, or remote highlands, P. stuntzii thrives in deciduous wood chip mulch, bark dust, and freshly landscaped areas — the kinds of substrates you find around college campuses, parks, and suburban garden beds in the Seattle-Portland corridor. This has made it one of the most commonly encountered psilocybin mushrooms in the region, appearing in places where people live and work.\n\nThe species was named in honor of Daniel Stuntz, a beloved University of Washington mycology professor who taught generations of Pacific Northwest mushroom enthusiasts. The \"Blue Ringer\" nickname comes from the distinctive annular zone (ring) on the stem that often turns blue from bruising where spores have deposited on it — a visual clue that catches the eye of experienced foragers.\n\nP. stuntzii is a small mushroom, typically with a dark olive-brown to chestnut cap that fades to yellowish-tan as it dries. The hygrophanous cap often shows a distinctive dark band at the margin where moisture is retained. Like other psilocybin species, all parts bruise blue-green when damaged, and the spore print is dark purple-brown.\n\nThe critical danger with P. stuntzii is its co-occurrence with Galerina marginata — the Deadly Galerina — which also grows on wood chips and can fruit side by side with Psilocybe species. The two can look remarkably similar in the field, and confusing them is potentially fatal. Galerina contains amatoxins, the same lethal compounds found in Amanita phalloides (Death Cap). The key distinguishing feature is the spore print: purple-brown for Psilocybe, rusty-brown for Galerina. This is not a mushroom where casual identification is safe.",
  identification: {
    cap: "1-4 cm across. Convex to broadly convex or nearly flat with age. Dark olive-brown to chestnut-brown when moist, drying to yellowish-tan or straw-colored from the center outward. Hygrophanous with a characteristic dark marginal band. Surface smooth, slightly sticky when wet. Pellicle separable.",
    gills: "Adnate to slightly decurrent, close. Pale brown when young, becoming dark purple-brown as spores mature. Edges may appear slightly lighter.",
    stem: "3-6 cm tall, 2-4 mm thick. Whitish to pale brownish, darkening toward the base. A fragile partial veil leaves a thin annular zone that often catches purple-brown spores, creating the \"blue ring\" when it bruises. Bruises blue-green.",
    sporePrint: "Dark purple-brown. CRITICAL: must distinguish from Galerina marginata's rusty-brown spore print.",
    bruising: "Blue-green bruising on stem and cap, often visible on the annular zone. The ring area frequently appears blue-green from combined spore deposit and bruising.",
  },
  habitat:
    "Wood chips, bark mulch, freshly landscaped areas, garden beds, and new lawns with wood-chip amendments. Also on decaying conifer and deciduous wood debris, sawdust, and composted bark. Common in urban and suburban settings.",
  season: "September through December in the Pacific Northwest. Peak fruiting in October and November. Can appear as early as late August after the first fall rains.",
  range:
    "Pacific Northwest of North America — primarily western Washington and Oregon, from Vancouver, BC south to northern California. Most common in the greater Seattle and Portland metropolitan areas. Also reported from the San Francisco Bay Area.",
  lookAlikes: [
    {
      name: "Deadly Galerina (Galerina marginata)",
      slug: "galerina-marginata",
      distinction:
        "DEADLY POISONOUS — contains amatoxins. Grows in the same wood chip habitats and can fruit directly alongside P. stuntzii. Has a rusty-brown spore print (not purple-brown), a more prominent and persistent ring, and does NOT bruise blue. A spore print is essential to distinguish them safely.",
    },
    {
      name: "Wavy Cap (Psilocybe cyanescens)",
      slug: "psilocybe-cyanescens",
      distinction:
        "Also grows on wood chips in the Pacific Northwest. Larger (cap 2-5 cm) with a distinctive wavy, undulating cap margin when mature. More potent. Also bruises blue and has purple-brown spore print.",
    },
    {
      name: "Azurescent Psilocybe (Psilocybe azurescens)",
      slug: "psilocybe-azurescens",
      distinction:
        "Larger and more potent, with a caramel-colored cap and broadly convex shape. Primarily coastal, growing in dune grasses and sandy soils rather than wood chips. The most potent known Psilocybe species.",
    },
  ],
  edibility: "toxic",
  psychoactive: true,
  edibilityNote:
    "Contains psilocybin and psilocin, classified as controlled substances. EXTREME CAUTION: grows alongside the deadly Galerina marginata in wood chip habitats — misidentification can be fatal. This species is documented for educational identification purposes only.",
  gbifKey: 5242543,
  funFacts: [
    "Named after Daniel Stuntz, a University of Washington mycology professor who mentored generations of Pacific Northwest mushroom enthusiasts.",
    "The \"Blue Ringer\" nickname comes from the annular zone on the stem that turns blue-green from combined spore deposition and psilocybin bruising.",
    "It's an urban mushroom — more likely found in park landscaping and campus wood chip beds than in remote forests.",
    "The deadly Galerina marginata can fruit in the exact same wood chip patch, sometimes just centimeters away — making spore prints a life-or-death identification step.",
  ],
  seoQueries: [
    "psilocybe stuntzii identification",
    "blue ringer mushroom",
    "psilocybe stuntzii vs galerina",
    "pacific northwest psilocybin mushroom",
    "wood chip psychedelic mushroom seattle",
    "stuntz's blue legs identification",
  ],
  stories: [
    {
      title: "The Campus Mushroom",
      text: "In the Pacific Northwest, P. stuntzii has long been an open secret on university campuses, where freshly laid wood chip landscaping provides ideal habitat. The University of Washington — where the species' namesake Daniel Stuntz taught mycology — has been a particularly well-known site. The irony of a psychedelic mushroom named after a respected professor fruiting prolifically on his own campus was not lost on Pacific Northwest mycologists.",
      location: "Seattle, Washington, USA",
      source: "Pacific Northwest mycological folklore",
      sourceUrl: "https://en.wikipedia.org/wiki/Psilocybe_stuntzii",
    },
  ],
  images: [
    {
      filename: "01-field.jpg",
      alt: "Blue Ringer / Stuntz's Blue Legs (Psilocybe stuntzii) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Psilocybe_stuntzii_spores_1000x.jpg",
      author: "Alan Rockefeller",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    {
      filename: "02-gills.jpg",
      alt: "Blue Ringer / Stuntz's Blue Legs underside showing gill structure",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Psilocybe_stuntzii_gills.JPG",
      author: "Lightworkerpeace",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "03-field.jpg",
      alt: "Blue Ringer / Stuntz's Blue Legs (Psilocybe stuntzii) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Psilocybe_stuntzii_89395.jpg",
      author: "This image was created by user mushroomexplorer at Mushroom Observer, a source for mycological images.You can contact th",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "04-field.jpg",
      alt: "Blue Ringer / Stuntz's Blue Legs (Psilocybe stuntzii) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Psilocybe_stuntzii_89396.jpg",
      author: "This image was created by user mushroomexplorer at Mushroom Observer, a source for mycological images.You can contact th",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "05-field.jpg",
      alt: "Blue Ringer / Stuntz's Blue Legs (Psilocybe stuntzii) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Psilocybe_stuntzii_Guzm%C3%A1n_%26_J._Ott_375653.jpg",
      author: "This image was created by user Caleb Brown (Caleb Brown) at Mushroom Observer, a source for mycological images.You can c",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
  ],
};

export default species;
