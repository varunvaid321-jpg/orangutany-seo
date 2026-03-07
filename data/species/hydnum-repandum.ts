import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "hydnum-repandum",
  commonName: "Hedgehog Mushroom",
  scientificName: "Hydnum repandum",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Cantharellales",
    family: "Hydnaceae",
    genus: "Hydnum",
  },
  summary:
    "Meet the friendliest mushroom in the forest. The Hedgehog Mushroom has tiny tooth-like spines under its cap instead of gills, making it nearly impossible to confuse with anything dangerous — a true beginner's best friend.",
  description:
    "If you've ever been nervous about foraging wild mushrooms, this is the one to start with. Hydnum repandum is one of the safest edible mushrooms on the planet because nothing poisonous looks like it. Flip it over and you'll see hundreds of tiny, soft spines hanging down like a miniature stalactite cave — no gills, no pores, just these adorable little teeth. That's your ID right there.\n\nIn France, it's called the \"pied de mouton\" (sheep's foot), and it shows up in markets alongside chanterelles and porcini. Chefs love it because the flavor is mild and slightly sweet with a peppery kick when raw, and it holds up beautifully in a saute pan with butter and garlic. Older specimens can get a bit bitter, so younger ones are preferred. It's been a staple of European foraging culture for centuries — this was peasant food long before it was restaurant food.\n\nThe Hedgehog Mushroom is mycorrhizal, meaning it forms a partnership with tree roots — trading nutrients for sugars in a deal that benefits both parties. You'll find it in mixed woodlands, often poking through leaf litter in little troops. It fruits in late summer through late autumn, and a good patch will come back year after year if you harvest carefully. Some foragers consider finding a hedgehog patch even better than finding chanterelles, because you never have to second-guess what you've picked.",
  identification: {
    cap: "3-17 cm across. Irregular, wavy shape — rarely perfectly round. Cream to pale orange-tan, sometimes with darker spots. Surface is dry and slightly felty. Edges often curl under, especially in older specimens. Can be lobed or almost funnel-shaped with age.",
    gills: "No gills. Instead, the underside is covered in dense, soft, downward-pointing spines (teeth) 2-6 mm long. Cream to pale salmon colored. They snap off easily when touched — rub your finger across and they'll break away cleanly. This is THE identification feature.",
    stem: "3-10 cm tall, 1-3 cm thick. Solid, white to cream, sometimes off-center. Smooth or slightly fuzzy. Sturdy and chunky — doesn't snap as easily as it looks.",
    sporePrint: "White to cream.",
    odor: "Pleasant, mildly fruity. Nothing harsh or chemical.",
  },
  habitat:
    "Mycorrhizal with both conifers and hardwoods — oak, beech, birch, spruce, and pine. Found in mixed and deciduous forests, often hidden under leaf litter. Prefers well-drained, mossy ground. Fruits singly or in scattered troops, sometimes forming arcs or partial fairy rings.",
  season:
    "Late summer through late autumn. Peak season is September-November in most of Europe and North America. Can appear as early as July in good years.",
  range:
    "Widespread across the Northern Hemisphere — found throughout Europe, from Scandinavia down to the Mediterranean. Common across North America from the Pacific Northwest to New England. Also present in temperate Asia. Introduced to Australia with European tree plantings.",
  lookAlikes: [
    {
      name: "Depressed Hedgehog (Hydnum umbilicatum)",
      image: "lookalike-umbilicatum.jpg",
      distinction:
        "Smaller and darker orange than H. repandum, with a distinctly depressed (belly-button) center to the cap. Also edible and delicious — so even if you mix them up, you're fine. Generally found under conifers.",
      externalUrl:
        "https://www.inaturalist.org/taxa/124335-Hydnum-umbilicatum",
      externalSource: "iNaturalist",
    },
    {
      name: "Shingled Hedgehog (Sarcodon imbricatus)",
      image: "lookalike-sarcodon.jpg",
      distinction:
        "Much larger and darker, with coarse brown scales on the cap arranged like roof shingles. Spines are also coarser and darker brown. Bitter taste, generally considered inedible. If it looks like it belongs on a medieval roof, it's the wrong one.",
      externalUrl: "https://en.wikipedia.org/wiki/Sarcodon_imbricatus",
      externalSource: "Wikipedia",
    },
    {
      name: "Golden Chanterelle (Cantharellus cibarius)",
      image: "lookalike-chanterelle.jpg",
      distinction:
        "Similar color but has ridges (false gills) running down the stem — NOT spines. A quick flip will settle it instantly: spines vs. ridges. Both are excellent edibles, so this is a happy confusion either way.",
      externalUrl:
        "https://www.mushroomexpert.com/cantharellus_cibarius.html",
      externalSource: "MushroomExpert",
    },
  ],
  edibility: "edible",
  edibilityNote:
    "One of the best beginner-friendly edible mushrooms. Mild, slightly sweet flavor with a faint peppery note when raw that disappears with cooking. Excellent sauteed in butter. Older specimens can develop a bitter taste — stick with younger, firm ones. No dangerous look-alikes exist.",
  gbifKey: 2554716,
  stories: [
    {
      title: "A French Market Staple for Centuries",
      text: "The pied de mouton has been sold in French village markets since at least the 1700s. Unlike most wild mushrooms, it requires zero expert knowledge to identify — French grandmothers have been teaching children to pick it as a first foraging lesson for generations.",
      location: "Rural France",
      source: "David Arora, 'Mushrooms Demystified'",
    },
    {
      title: "Reddit Forager's First Wild Mushroom",
      text: "A Redditor in 2021 posted their first-ever wild mushroom find in the Pacific Northwest — a cluster of Hedgehog Mushrooms under Douglas fir. They described the thrill of cooking something they'd foraged themselves and how the spines made them 100% confident in the ID.",
      location: "Oregon, USA",
      source: "r/foraging",
      sourceUrl: "https://www.reddit.com/r/foraging/",
    },
    {
      title: "UK Fungus Day Favorite",
      text: "At the 2019 UK Fungus Day events, guided walks in the New Forest consistently pointed out Hedgehog Mushrooms as the top recommendation for beginners. Instructors emphasized that the spines make misidentification virtually impossible.",
      location: "New Forest, Hampshire, UK",
      source: "UK Fungus Day",
      sourceUrl: "https://www.ukfungusday.co.uk/",
    },
    {
      title: "Michelin-Star Mushroom in Scandinavia",
      text: "Noma's Rene Redzepi has featured Hedgehog Mushrooms on the menu multiple times, prizing them for their clean flavor and firm texture. Scandinavian foragers consider autumn hedgehog patches a closely guarded secret.",
      location: "Copenhagen, Denmark",
      source: "Noma restaurant",
    },
    {
      title: "Dog Walker's Surprise Bounty",
      text: "A forager in British Columbia stumbled on a massive flush of Hedgehog Mushrooms while walking her dog in Stanley Park in October 2020. She filled two bags and reported that the mushrooms were growing in a fairy ring nearly three meters across under old oak trees.",
      location: "Vancouver, BC, Canada",
      source: "Vancouver Mycological Society",
    },
  ],
  seoQueries: [
    "hedgehog mushroom identification",
    "mushroom with teeth underneath",
    "hydnum repandum edible",
    "sweet tooth mushroom",
    "mushroom with spines instead of gills",
    "pied de mouton mushroom",
    "best mushrooms for beginners to forage",
    "hedgehog mushroom look alikes",
    "hedgehog mushroom taste",
    "how to cook hedgehog mushrooms",
    "mushroom with tiny teeth under cap",
    "hedgehog fungus where to find",
    "safe mushrooms to forage for beginners",
    "hedgehog mushroom vs chanterelle",
  ],
  funFacts: [
    "The Hedgehog Mushroom is one of the only wild mushrooms with zero dangerous look-alikes — those tiny spines under the cap are a completely unique feature among common edible species.",
    "In French markets, it's sold as 'pied de mouton' (sheep's foot), and it's been a beloved market mushroom since before the French Revolution.",
    "The spines break off easily when touched, which is actually a helpful ID feature. Rub your thumb across the underside — if tiny teeth crumble away, you've got a hedgehog.",
    "Unlike most mushrooms that release spores from gills or pores, the Hedgehog Mushroom drops its spores from the tips of those hanging teeth — gravity does all the work.",
    "A single hedgehog patch can produce mushrooms in the same spot for decades, as the underground mycelium network can live for many years in partnership with its host trees.",
  ],
  images: [
    {
      filename: "01-group-forest.jpg",
      alt: "Group of Hedgehog Mushrooms with cream-orange caps growing in forest floor",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Hydnum_repandum.jpg",
      author: "Pau Cabot",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "02-woodland-pair.jpg",
      alt: "Pair of Hedgehog Mushrooms showing typical pale tan caps in woodland setting",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Hedgehog_fungi.jpg",
      author: "D J Kelly",
      license: "Public domain",
      licenseUrl: "",
    },
    {
      filename: "03-french-specimen.jpg",
      alt: "Hedgehog Mushroom specimen from Anglars, France showing irregular wavy cap",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Hydnum-repandum-anglars.jpg",
      author: "Bubulcus",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
    {
      filename: "04-lindsey-habitat.jpg",
      alt: "Hedgehog Mushroom in natural forest habitat among moss and leaf litter",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Hydnum.repandum.-.lindsey.jpg",
      author: "James Lindsey",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "05-russian-cluster.jpg",
      alt: "Hedgehog Mushroom cluster showing cream-colored caps from above",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Hydnum_repandum3.jpg",
      author: "Igor Lebedinsky",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
  ],
  identificationImages: {
    cap: "cap-detail.jpg",
    gills: "spine-detail.jpg",
    stem: "stem-detail.jpg",
  },
};

export default species;
