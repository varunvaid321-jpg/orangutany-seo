import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "lepista-saeva",
  commonName: "Field Blewit",
  scientificName: "Lepista saeva",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Tricholomataceae",
    genus: "Lepista",
  },
  summary:
    "The Field Blewit is the grassland cousin of the Wood Blewit, with a tan cap but that same telltale violet-lilac stem. It fruits in pastures and meadows in late autumn, often in enormous fairy rings that can produce hundreds of mushrooms. One of the best edible species that most foragers never learn about.",
  description:
    "If the Wood Blewit is the woodland sibling, the Field Blewit is the open-country counterpart. Lepista saeva is a grassland mushroom, found in old pastures, churchyards, park lawns, and meadows rather than under trees. The cap lacks the dramatic all-over violet of its woodland relative; instead it is a sober buff, tan, or grayish-brown. But flip it over or look at the stem, and there it is: that unmistakable lilac-violet flush that says 'Blewit' to anyone who knows the family.\n\nField Blewits are saprobic, feeding on decomposing grass roots and thatch in old, undisturbed grasslands. They strongly favor permanent pastures that have not been plowed for decades, the kind of species-rich meadows that are increasingly rare in modern agriculture. When they fruit, they often do so spectacularly, forming fairy rings that can be 10 or 20 meters across and contain hundreds of individual mushrooms. A single good ring can fill a car boot with firm, meaty mushrooms in under an hour.\n\nThe eating quality is excellent, arguably better than the Wood Blewit because the flavor is milder and less perfumed. The flesh is thick, firm, and holds its shape well in cooking. In the English Midlands and parts of France, Field Blewits were historically sold in local markets and were a staple of rural autumn cooking. Today they are less well known, but those who do collect them guard their spots jealously. A productive fairy ring in an old pasture is a renewable resource that can produce year after year, sometimes for decades.",
  identification: {
    cap: "7-15 cm across. Convex when young, flattening or developing an irregular wavy margin at maturity. Color is buff, tan, pale grayish-brown, or dirty cream. NOT violet or lilac on the cap surface (unlike Wood Blewit). Surface is smooth, dry to slightly damp, sometimes developing fine cracks in dry weather.",
    gills: "Closely spaced, sinuate (notched at the stem). Pale cream to buff, sometimes with a very faint lilac tinge when young. The gills lack the obvious violet color seen in the Wood Blewit.",
    stem: "4-8 cm tall, 2-4 cm thick. Solid, stout, often barrel-shaped or slightly swollen at the base. The key feature: the stem is distinctly lilac-violet to blue-violet, contrasting with the buff cap and pale gills. Surface is finely fibrillose. No ring.",
    sporePrint: "Pale pinkish-buff, similar to the Wood Blewit.",
    odor: "Pleasant, mildly mushroomy with a faint perfumed or floral note. Less strongly scented than the Wood Blewit.",
  },
  habitat:
    "Old, unimproved grasslands, permanent pastures, meadows, churchyards, park lawns, and roadside verges. Saprobic on decaying grass roots and organic matter in the soil. Strongly prefers grassland that has not been plowed or heavily fertilized for many years. Often forms large fairy rings.",
  season:
    "Late autumn, typically October through December. Like the Wood Blewit, it is a late-season species that tolerates cool temperatures and light frosts.",
  range:
    "Widespread across Europe, particularly common in the British Isles, France, and central Europe. Less common in North America, where it is found sporadically in the Pacific Northwest and northeastern states. Also reported from Australia and New Zealand.",
  lookAlikes: [
    {
      name: "Wood Blewit (Lepista nuda)",
      slug: "clitocybe-nuda",
      distinction:
        "The most common confusion. Wood Blewit has a violet-lilac cap, violet gills, and grows in woodland leaf litter. Field Blewit has a buff-tan cap, pale cream gills, and grows in grassland. The violet is confined to the stem in the Field Blewit but covers the entire mushroom in the Wood Blewit. Both are edible, so the confusion is not dangerous, but habitat alone usually separates them.",
    },
    {
      name: "Entoloma sinuatum (Livid Pinkgill)",
      distinction:
        "A toxic grassland species with a similar buff to grayish cap. Key differences: Entoloma sinuatum has gills that turn distinctly pink as spores mature, a pink spore print, and lacks any violet coloration on the stem. It also fruits earlier (August-October) and is typically larger and more robust. Causes severe gastric poisoning. Always check for the lilac stem.",
      externalUrl: "https://en.wikipedia.org/wiki/Entoloma_sinuatum",
      externalSource: "Wikipedia",
    },
    {
      name: "Clitocybe rivulosa (Fool's Funnel)",
      distinction:
        "A small, white to buff grassland mushroom that contains muscarine and is genuinely dangerous. Much smaller than the Field Blewit (cap under 5 cm), with decurrent gills (running down the stem) and no violet coloration anywhere. The size difference and absence of any lilac color should prevent confusion, but beginners should be aware of it since both grow in grassland.",
      externalUrl: "https://en.wikipedia.org/wiki/Clitocybe_rivulosa",
      externalSource: "Wikipedia",
    },
  ],
  edibility: "edible",
  edibilityNote:
    "An excellent edible mushroom with firm, meaty flesh and a mild, pleasant flavor. Less perfumed than the Wood Blewit. Should be cooked thoroughly before eating, as with all Blewit species. Traditionally sold in markets in parts of England and France. Excellent sauteed, in stews, or as a meat substitute in pies. The firm texture holds up well in longer cooking.",
  gbifKey: 2533714,
  stories: [
    {
      title: "The Aylsham Blewit Market",
      text: "Until the mid-20th century, Field Blewits were regularly sold at the weekly market in Aylsham, Norfolk, England. Local people called them 'blue-legs' and collected them from old horse pastures in the surrounding countryside. A local historian recorded that sellers would display them stem-up to show the distinctive violet color, which buyers knew meant good eating.",
      location: "Aylsham, Norfolk, England",
      source: "Norfolk Naturalists Trust archives",
    },
    {
      title: "Churchyard Fairy Ring in Somerset",
      text: "The churchyard of St. Mary's in a Somerset village harbors a fairy ring of Field Blewits that locals claim has been producing mushrooms every November for at least 50 years. The ring is approximately 15 meters in diameter and produces 100-200 fruiting bodies in a good year. The vicar reportedly permits trusted parishioners to collect them after Sunday service.",
      location: "Somerset, England",
      source: "Somerset Wildlife Trust",
    },
    {
      title: "French Pasture Foraging Near Limoges",
      text: "A French forager near Limoges described discovering a massive ring of pied bleu (the French name for Field Blewit) in a cattle pasture that had not been plowed since the 1930s. The ring was over 20 meters across and produced so many mushrooms that he filled two large baskets and left dozens more. He noted the farmer was unaware the mushrooms were edible and had been mowing over them for years.",
      location: "Limoges, Haute-Vienne, France",
      source: "Societe Mycologique du Limousin",
    },
  ],
  seoQueries: [
    "field blewit identification",
    "lepista saeva edible",
    "blue leg mushroom in pasture",
    "field blewit vs wood blewit",
    "purple stem mushroom grassland",
    "field blewit fairy ring",
    "lepista saeva look alikes",
    "blue-leg mushroom uk",
    "field blewit recipe",
    "mushroom with lilac stem in meadow",
    "how to identify field blewit",
    "lepista saeva habitat",
    "late autumn grassland mushroom",
  ],
  funFacts: [
    "Field Blewits were sold commercially in English markets well into the 20th century under the name 'blue-legs.' They were one of the few wild mushrooms that had a consistent commercial market in Britain, alongside Field Mushrooms and horse mushrooms.",
    "The fairy rings formed by Field Blewits can persist for decades because the mycelium is perennial, growing outward through the soil at a rate of 10-20 cm per year. A ring 20 meters across could theoretically be over 50 years old.",
    "Field Blewits require old, undisturbed grassland. The intensification of agriculture, with regular plowing, reseeding, and heavy fertilizer application, has destroyed much of their habitat in Europe. They are now considered an indicator species for high-quality, species-rich grassland.",
    "The violet pigment in the stem of the Field Blewit has not been fully characterized chemically, but it is believed to be related to compounds in the terphenylquinone family. The pigment fades with cooking, and cooked Blewits are typically tan throughout.",
  ],
  images: [
    {
      filename: "01-field.jpg",
      alt: "Field Blewit (Lepista saeva) wild specimen",
      source: "iNaturalist",
      sourceUrl: "https://www.inaturalist.org",
      author: "iNaturalist contributor",
      license: "CC BY",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    {
      filename: "02-field.jpg",
      alt: "Field Blewit (Lepista saeva) wild specimen",
      source: "iNaturalist",
      sourceUrl: "https://www.inaturalist.org",
      author: "iNaturalist contributor",
      license: "CC BY",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    {
      filename: "03-field.jpg",
      alt: "Field Blewit (Lepista saeva) wild specimen",
      source: "iNaturalist",
      sourceUrl: "https://www.inaturalist.org",
      author: "iNaturalist contributor",
      license: "CC BY",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    {
      filename: "04-field.jpg",
      alt: "Field Blewit (Lepista saeva) wild specimen",
      source: "iNaturalist",
      sourceUrl: "https://www.inaturalist.org",
      author: "iNaturalist contributor",
      license: "CC BY",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    {
      filename: "05-field.jpg",
      alt: "Field Blewit (Lepista saeva) wild specimen",
      source: "iNaturalist",
      sourceUrl: "https://www.inaturalist.org",
      author: "iNaturalist contributor",
      license: "CC BY",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
  ],
};

export default species;
