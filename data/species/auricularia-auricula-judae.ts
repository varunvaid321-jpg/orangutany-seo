import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "auricularia-auricula-judae",
  commonName: "Wood Ear",
  scientificName: "Auricularia auricula-judae",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Auriculariales",
    family: "Auriculariaceae",
    genus: "Auricularia",
  },
  summary:
    "It looks like a rubbery brown ear growing out of a dead branch, and that is exactly what it is named for. Wood Ear is one of the most consumed mushrooms on the planet, a staple of Chinese cuisine for over a thousand years, prized not for its flavor (which is nearly nonexistent) but for its extraordinary crunchy-gelatinous texture.",
  description:
    "Wood Ear is a mushroom that challenges Western ideas about what a mushroom should be. It has no cap, no stem, no gills in the conventional sense. It is a thin, rubbery, ear-shaped bracket that grows on dead and dying hardwood branches, ranging in color from tan to dark brown to nearly black. The texture is gelatinous and elastic when fresh, becoming hard and brittle when dried. Rehydrate a dried Wood Ear in warm water and it springs back to its original size and texture within minutes, which is why it stores and ships so well.\n\nThe flavor is essentially neutral, a blank canvas that absorbs whatever sauce or broth it is cooked in. What makes Wood Ear valuable is its texture: a crisp, slightly crunchy bite that persists even after long cooking. This textural quality is highly prized in Chinese cuisine, where mouthfeel (kou gan) is considered as important as flavor. Wood Ears appear in hot and sour soup, mu shu pork, stir-fries, and cold salads dressed with vinegar and chili oil. They are one of the most widely cultivated mushrooms in the world, grown on logs and sawdust substrates across China, with annual production exceeding 6 million tonnes.\n\nIn Europe, the species has a long history too, though it was more curiosity than cuisine. The common name 'Jew's Ear' (from which the scientific name auricula-judae derives) references a medieval legend that Judas Iscariot hanged himself from an elder tree, and the ear-shaped fungi growing on elder were said to be his ears. The name is now widely considered offensive, and 'Wood Ear' or 'Jelly Ear' are the preferred common names. In the field, it is one of the easiest fungi to identify: nothing else looks like a translucent brown ear growing on a stick.",
  identification: {
    cap: "No conventional cap. Fruiting body is ear-shaped, irregularly lobed or cup-shaped, 3-12 cm across. Thin (1-3 mm), rubbery to gelatinous in texture. Outer surface (facing away from the wood) is tan to dark reddish-brown, smooth to finely velvety with sparse hairs. Inner surface (facing the wood) is smoother, often with veins or folds, slightly paler.",
    gills: "No gills. The fertile (spore-producing) surface is the smooth inner face of the ear-shaped fruiting body. Spores are produced on the exposed surface, a primitive arrangement compared to gilled mushrooms.",
    stem: "No stem or very short point of attachment to the wood substrate. The fruiting body attaches directly to the branch or log, sometimes with a narrow, stem-like base.",
    sporePrint: "White. Spores are sausage-shaped (allantoid) and can be collected by placing the fresh fruiting body inner-surface-down on paper.",
    odor: "None to very faintly earthy. Essentially odorless.",
  },
  habitat:
    "Saprobic on dead and dying branches and logs of broadleaf trees. Has a strong association with elder (Sambucus nigra) in Europe, but also common on beech, sycamore, ash, and many other hardwoods. In Asia, found on a wide range of broadleaf species. Common in hedgerows, woodland edges, parks, and gardens. Often found on attached dead branches still on living trees.",
  season:
    "Year-round, but most abundant in autumn through spring. The gelatinous fruiting bodies can survive freezing and desiccation, rehydrating and continuing to produce spores when moisture returns. One of the few fungi that can be found reliably in every month of the year.",
  range:
    "Cosmopolitan. Found worldwide across temperate and tropical regions. Extremely common throughout Europe, East Asia, North America, Australia, and New Zealand. Cultivated on a massive scale in China, which produces the overwhelming majority of the global supply.",
  lookAlikes: [
    {
      name: "Exidia glandulosa (Black Witches' Butter)",
      distinction:
        "A dark, gelatinous fungus that also grows on dead hardwood branches. Key differences: E. glandulosa is more irregularly blob-shaped rather than distinctly ear-shaped, has a rougher, more warty surface with visible glandular dots, and is darker (nearly black). Both are harmless, but E. glandulosa is not typically eaten.",
      externalUrl: "https://en.wikipedia.org/wiki/Exidia_glandulosa",
      externalSource: "Wikipedia",
    },
    {
      name: "Tremella mesenterica (Yellow Brain Fungus)",
      distinction:
        "A bright yellow to orange gelatinous fungus on dead hardwood. The color alone distinguishes it: Wood Ear is brown, Yellow Brain is bright yellow. T. mesenterica also has a more irregular, brain-like folded shape rather than a clean ear form. Edible but flavorless.",
      externalUrl: "https://en.wikipedia.org/wiki/Tremella_mesenterica",
      externalSource: "Wikipedia",
    },
  ],
  edibility: "edible",
  edibilityNote:
    "Widely eaten worldwide, especially in Chinese and Southeast Asian cuisine. The flavor is very mild (essentially neutral), but the crisp, gelatinous texture is highly prized. Used in hot and sour soup, stir-fries, cold salads, and as a textural element in many dishes. Can be eaten fresh or dried; dried specimens rehydrate quickly in warm water. Should be cooked before eating. Raw consumption has been linked to rare cases of allergic reactions.",
  gbifKey: 2550380,
  stories: [
    {
      title: "Hot and Sour Soup Origins",
      text: "Wood Ear has been a key ingredient in Sichuan hot and sour soup (suan la tang) for centuries. A food historian at Sichuan University traced written references to the combination of wood ear, tofu, and vinegar-pepper broth back to at least the Ming Dynasty (1368-1644). The wood ear provides the textural contrast, a crunchy counterpoint to soft tofu and silky egg ribbons, that defines the dish.",
      location: "Chengdu, Sichuan, China",
      source: "Sichuan University Food History Department",
    },
    {
      title: "Elder Tree Harvest in the Cotswolds",
      text: "A British forager described gathering Wood Ears from elder trees along hedgerows near Stow-on-the-Wold every winter. She noted that elder is by far the most reliable host tree in the UK, and a single hedgerow can yield enough Wood Ears for months of cooking. She dries them on a rack above her wood stove and rehydrates them for stir-fries throughout the year.",
      location: "Stow-on-the-Wold, Cotswolds, England",
      source: "Wild Food UK",
    },
    {
      title: "Chinese Log Cultivation Scale",
      text: "Heilongjiang province in northeastern China is the largest producer of cultivated Auricularia species, with thousands of small farms growing the fungus on hardwood logs and sawdust bags. A cooperative manager near Mudanjiang described annual production from his 200-member cooperative as exceeding 5,000 tonnes of dried wood ear. The dried product is shipped across China and exported worldwide.",
      location: "Mudanjiang, Heilongjiang, China",
      source: "China Agricultural Press",
    },
    {
      title: "Blood-Thinning Properties Discovery",
      text: "In the 1980s, Dr. Dale Hammerschmidt at the University of Minnesota published research showing that compounds in Auricularia auricula-judae had anticoagulant (blood-thinning) properties similar to aspirin. The finding generated interest in the mushroom as a functional food, though clinical evidence remains limited. Traditional Chinese medicine had long attributed blood-health benefits to wood ear consumption.",
      location: "Minneapolis, Minnesota, USA",
      source: "The Lancet",
    },
  ],
  seoQueries: [
    "wood ear mushroom identification",
    "auricularia auricula-judae edible",
    "jelly ear mushroom",
    "wood ear mushroom recipe",
    "how to dry wood ear mushrooms",
    "wood ear mushroom look alikes",
    "brown ear shaped fungus on tree",
    "wood ear mushroom health benefits",
    "how to rehydrate dried wood ear",
    "wood ear mushroom habitat",
    "wood ear vs black fungus",
    "auricularia cultivation",
    "wood ear mushroom on elder tree",
  ],
  funFacts: [
    "Wood Ear mushrooms can survive both freezing and complete desiccation, then resume growth and spore production when moisture returns. This resilience makes them one of the few fungi that can be reliably found year-round in temperate climates.",
    "China produces over 6 million tonnes of Auricularia species annually, making it one of the most cultivated mushroom genera on Earth by weight. Most production is of A. auricula-judae and the closely related A. polytricha.",
    "The scientific name auricula-judae means 'ear of Judas,' referencing a medieval European legend that Judas Iscariot hanged himself from an elder tree. The ear-shaped fungi commonly found on elder were said to be manifestations of his ears. The name is now widely considered inappropriate, and 'Wood Ear' or 'Jelly Ear' are preferred.",
    "Dried Wood Ears can rehydrate to nearly their original size and texture in as little as 15-20 minutes in warm water. This predictable rehydration behavior makes them one of the most storage-friendly wild mushrooms.",
  ],
  images: [],
};

export default species;
