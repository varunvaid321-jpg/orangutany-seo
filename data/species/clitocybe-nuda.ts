import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "clitocybe-nuda",
  commonName: "Wood Blewit",
  scientificName: "Lepista nuda",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Tricholomataceae",
    genus: "Lepista",
  },
  summary:
    "A stunning violet-lilac mushroom that fruits late in the season when most other species have quit. Wood Blewits are one of the few truly purple mushrooms, and their color alone makes them hard to mistake once you know what you are looking at. Must be cooked thoroughly; raw specimens cause gastric distress.",
  description:
    "When November rolls around and the forests go quiet, the Wood Blewit starts its show. This is a late-season mushroom, often fruiting well into December in mild climates, sometimes even surviving light frosts. The color is what catches your eye first: a rich lilac-violet that suffuses the entire mushroom, from cap to gills to stem. In young specimens, the purple is intense and almost unreal, like something from a fairy tale. As the mushroom ages, the cap fades toward tan or buff, but the gills and stem base usually retain some violet tint.\n\nBlewits are saprobic, feeding on decomposing leaf litter and compost rather than forming mycorrhizal relationships with trees. This makes them one of the few prized edibles that can actually be cultivated, and small-scale Blewit cultivation has been practiced in France and the Netherlands for decades. In the wild, they often form large fairy rings in leaf litter, compost heaps, garden mulch, and along hedgerows. Finding a ring of 30 or 40 Blewits in deep leaf litter on a gray November day is one of those moments that reminds you why you forage.\n\nThe flavor is distinctive and divides opinion. Some describe it as perfumed, almost floral, with a texture that is smooth and slightly slippery when cooked. Others find the fragrance too strong. The critical rule is that Blewits must be thoroughly cooked. Raw or undercooked specimens contain proteins that can cause significant gastrointestinal upset. A good 15 minutes of cooking in a hot pan eliminates the problem, and the resulting dish has a unique character unlike any other mushroom.",
  identification: {
    cap: "6-15 cm across. Convex when young, flattening and sometimes developing a wavy, irregular margin with age. Color is rich lilac-violet in young specimens, fading to tan, buff, or brownish-lilac as it matures. Surface is smooth, slightly sticky when wet, and often has a faint sheen.",
    gills: "Closely spaced, sinuate (notched where they meet the stem). Lilac to violet when young, fading to pale brownish-lilac with age. The violet gill color is one of the best diagnostic features.",
    stem: "5-10 cm tall, 1.5-3 cm thick. Solid, fibrous, often slightly swollen at the base. Lilac to violet, especially at the base, with a finely fibrillose surface. No ring. The stem base is often embedded in a mat of violet-tinted mycelium in the leaf litter.",
    sporePrint: "Pale pinkish-buff. Not white, not brown. This intermediate spore print color, combined with the violet coloration, is diagnostic.",
    odor: "Distinctive, often described as perfumed, floral, or faintly of frozen orange juice. Some people detect an anise-like quality. The smell is unique among common mushrooms and is a useful identification feature.",
  },
  habitat:
    "Saprobic on decomposing leaf litter, compost, garden mulch, and rich organic debris. Found in deciduous and mixed woodlands, hedgerows, parks, gardens, and even compost heaps. Often forms large fairy rings. Prefers rich, moist soils with abundant organic matter. Not mycorrhizal.",
  season:
    "Late autumn through early winter, typically October through December in the Northern Hemisphere. One of the latest-fruiting edible mushrooms, often appearing after the first frosts. Can fruit into January in mild maritime climates.",
  range:
    "Widespread across Europe, North America, Australia, and New Zealand. Common throughout the British Isles, western and central Europe, and the Pacific Northwest and northeastern United States. Also found in parts of Asia and South America. An introduced species in Australia and New Zealand.",
  lookAlikes: [
    {
      name: "Cortinarius species (violet Corts)",
      distinction:
        "Several Cortinarius species have violet to purple coloring and can superficially resemble Blewits. Critical differences: Cortinarius species have rusty brown spore prints (Blewits are pinkish-buff), and young Cortinarius specimens have a cobweb-like cortina (partial veil) connecting the cap margin to the stem. Some Cortinarius are dangerously toxic, including those containing orellanine which causes delayed kidney failure. Always take a spore print.",
      externalUrl: "https://en.wikipedia.org/wiki/Cortinarius",
      externalSource: "Wikipedia",
    },
    {
      name: "Clitocybe sordida",
      distinction:
        "A smaller, thinner-fleshed species with similar violet coloring. Generally considered edible but less substantial. Cap typically under 8 cm, more fragile, with thinner flesh. The distinction is somewhat academic for foragers since both are edible when cooked, but C. sordida is not worth collecting due to its small size.",
      externalUrl: "https://www.mushroomexpert.com/lepista_sordida.html",
      externalSource: "MushroomExpert",
    },
    {
      name: "Entoloma sinuatum (Livid Pinkgill)",
      distinction:
        "A toxic species that can have a faintly lilac-tinged cap, though it is typically more gray-buff than truly violet. Key differences: Entoloma sinuatum has pink spore print (not pinkish-buff), angular spores under microscopy, and gills that turn pink as spores mature. It causes severe gastrointestinal poisoning. The overall gestalt is different from a Blewit, but beginners should be cautious.",
      externalUrl: "https://en.wikipedia.org/wiki/Entoloma_sinuatum",
      externalSource: "Wikipedia",
    },
  ],
  edibility: "edible-with-caution",
  edibilityNote:
    "A good edible mushroom with a unique, slightly perfumed flavor, but MUST be thoroughly cooked before eating. Raw or undercooked Blewits contain thermolabile proteins that cause nausea, vomiting, and diarrhea. Cook for at least 15 minutes. Some individuals experience allergic reactions even to cooked specimens, so try a small amount first. The texture becomes smooth and slightly slippery when sauteed. Pairs well with cream sauces, eggs, and pasta.",
  gbifKey: 5242048,
  stories: [
    {
      title: "The Blewit Fairy Ring in Kew Gardens",
      text: "Mycologists at Kew Gardens documented a fairy ring of Wood Blewits in the grounds that was estimated to be over 60 years old based on its diameter of roughly 12 meters. The ring appeared reliably each November in deep leaf litter beneath mature oaks. Visitors were often startled by the vivid purple mushrooms appearing so late in the year when everything else had gone dormant.",
      location: "Kew Gardens, London, England",
      source: "Royal Botanic Gardens Kew",
    },
    {
      title: "French Market Cultivation",
      text: "Small-scale Blewit cultivation has been practiced near Paris since the mid-20th century, using composted horse manure and leaf litter as substrate. A grower near Saumur in the Loire Valley described the process as more art than science, requiring careful temperature and humidity management in converted wine caves. His Blewits sold for 12-15 euros per kilogram at local markets, prized by chefs who valued their unusual color.",
      location: "Saumur, Loire Valley, France",
      source: "Societe Mycologique de France",
    },
    {
      title: "December Foraging in the Cotswolds",
      text: "A British forager described finding a massive flush of Blewits in a beech wood near Cirencester on December 15, after two weeks of mild, damp weather. She collected over 3 kg from a single fairy ring in deep leaf litter. The mushrooms had survived several overnight frosts, with ice crystals still visible on the caps when she found them at dawn.",
      location: "Cirencester, Cotswolds, England",
      source: "Wild Food UK",
    },
    {
      title: "Compost Heap Surprise in Portland",
      text: "A gardener in Portland, Oregon posted photos of dozens of vivid purple mushrooms erupting from her backyard compost heap in late November. She had been composting leaves from a neighbor's oak tree for two years. A local mycologist confirmed them as Wood Blewits and noted that compost heaps are actually one of the most reliable places to find this species in urban and suburban areas.",
      location: "Portland, Oregon, USA",
      source: "Oregon Mycological Society",
    },
  ],
  seoQueries: [
    "wood blewit identification",
    "purple mushroom in leaf litter",
    "lepista nuda edible",
    "wood blewit look alikes",
    "can you eat wood blewits raw",
    "violet mushroom in garden",
    "blewit mushroom recipe",
    "wood blewit vs cortinarius",
    "blewit fairy ring",
    "late season edible mushroom",
    "how to cook wood blewits",
    "purple mushroom in compost",
    "wood blewit spore print",
    "clitocybe nuda identification",
  ],
  funFacts: [
    "Wood Blewits are one of the few prized edible mushrooms that can be cultivated, grown on composted organic matter rather than requiring living tree roots. Small-scale cultivation has been practiced in France since the 1950s.",
    "The name 'blewit' is thought to derive from 'blue hat,' a reference to the mushroom's violet cap color. The word has been in use in English since at least the 17th century.",
    "Blewits can survive light frosts and continue fruiting into December and even January in mild climates. The mycelium is cold-tolerant, and fruiting bodies can recover from brief freezing, making this one of the latest wild mushrooms available each year.",
    "The perfumed, floral aroma of Wood Blewits is caused by a complex mixture of volatile compounds that has not been fully characterized. Some people find the smell pleasant; others describe it as soapy or reminiscent of cheap perfume.",
  ],
  images: [
    {
      filename: "01-habitat.jpg",
      alt: "Wood Blewit wild specimen in natural habitat",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Edible_fungi_in_basket_2022_G5.jpg",
      author: "George Chernilevsky",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    {
      filename: "02-detail.jpg",
      alt: "Wood Blewit showing full fruiting body",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Lepista_nuda.jpg",
      author: "Unknown",
      license: "CC BY-SA 3.0",
      licenseUrl: "http://creativecommons.org/licenses/by-sa/3.0/",
    },
    {
      filename: "03-wild.jpg",
      alt: "Wood Blewit (Lepista nuda) in the wild",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Lepista_nuda_109950721.jpg",
      author: "Елена Патерикина",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    {
      filename: "04-closeup.jpg",
      alt: "Wood Blewit close-up field photograph",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Lepista_nuda_167405666.jpg",
      author: "steve b",
      license: "CC0",
      licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    },
    {
      filename: "05-specimen.jpg",
      alt: "Wood Blewit mushroom, field identification reference",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Lepista_nuda_167462660.jpg",
      author: "Michel Langeveld",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
  ],
};

export default species;
