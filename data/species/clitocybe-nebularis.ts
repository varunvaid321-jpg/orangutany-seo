import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "clitocybe-nebularis",
  commonName: "Clouded Funnel",
  scientificName: "Clitocybe nebularis",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Tricholomataceae",
    genus: "Clitocybe",
  },
  summary:
    "A big, fleshy, grayish-white mushroom with a distinctive sweetish smell that divides opinion like few other fungi. Widely eaten across continental Europe — especially France, Spain, and Eastern Europe — yet increasingly viewed with suspicion by modern mycologists because it contains nebularine, a toxic nucleoside that can cause gastrointestinal distress in a significant minority of people.",
  description:
    "Clitocybe nebularis is the mushroom equivalent of a controversial celebrity: famous, divisive, and impossible to ignore. In autumn, it appears in massive fairy rings in deciduous and coniferous woodland, pushing through deep leaf litter in troops that can number in the hundreds. The caps are large and imposing — up to 20 cm across — with a distinctive cloudy gray color that fades to pale buff with age. The smell is strong, sweetish, and peculiar — some describe it as pleasant, others find it cloying or even nauseating.\n\nThe edibility debate around Clouded Funnel has been raging for decades. In France, it's sold in markets and considered a perfectly good edible if well cooked. In Spain and parts of Eastern Europe, it's eaten without a second thought. But in the UK and Scandinavia, modern field guides increasingly list it as 'not recommended' or 'edible with caution,' and some have moved it to 'avoid.' The reason is nebularine — a cytotoxic nucleoside antibiotic found in the flesh. While thorough cooking appears to break down most of this compound, some people react badly regardless, experiencing nausea, stomach cramps, and diarrhea.\n\nThe taxonomy has also been shuffled around. Some authorities now place it in Lepista rather than Clitocybe (as Lepista nebularis), though Clitocybe nebularis remains the most widely used name. Whatever you call it, it's an unmistakable mushroom once you've learned the combination of large size, gray cap, decurrent gills, strong smell, and habit of growing in fairy rings in deep leaf litter.",
  identification: {
    cap: "6–20 cm across, convex when young with an inrolled margin, expanding to broadly convex or flat, sometimes with a low central umbo. Surface smooth, dry, covered with a fine grayish bloom when fresh (the 'clouded' look). Color pale gray to gray-brown, fading to whitish-buff with age. Flesh thick and white.",
    gills:
      "White to pale cream, crowded (closely spaced), slightly decurrent (running a short distance down the stem). Sinuate to adnate in some specimens. Fairly narrow relative to the cap size.",
    stem: "6–12 cm tall, 2–4 cm thick. Whitish to pale gray, solid when young, becoming hollow or pithy with age. Base often slightly swollen or club-shaped. Surface fibrillose (finely fibrous). Flesh white and firm.",
    sporePrint: "Pale cream to pale pinkish-cream.",
    odor: "Strong and distinctive — variously described as sweetish, mealy, perfumed, or 'like old hay.' One of the most helpful identification features. Some people find the smell pleasant; others describe it as sickly-sweet or unpleasant.",
  },
  habitat:
    "Saprotrophic — feeds on decaying leaf litter and organic matter. Found in deciduous and coniferous woodland, especially in deep leaf litter under beech, oak, and spruce. Characteristically forms large fairy rings or arcs. Also appears in parks, gardens, and hedgerows with sufficient leaf litter accumulation.",
  season:
    "Autumn, typically September through December. One of the later-fruiting species, often still producing when most other mushrooms have finished. Peak season is October–November across most of Europe.",
  range:
    "Widespread and common across Europe, from Scandinavia south to the Mediterranean and east through Russia. Also found in parts of North America (both coasts and the Great Lakes region), though less common than in Europe. Reported from temperate parts of Asia, Australia, and New Zealand.",
  lookAlikes: [
    {
      name: "Livid Pinkgill (Entoloma sinuatum)",
      slug: "entoloma-sinuatum",
      image: "lookalike-sinuatum.jpg",
      distinction:
        "A dangerous look-alike. Similar in size, stature, and pale coloration, and also grows in deciduous woodland in autumn. The critical difference is the spore print: Entoloma sinuatum has a pink spore print (gills turn pinkish with age), while Clitocybe nebularis has a pale cream print. E. sinuatum also lacks the strong distinctive smell and has sinuate rather than decurrent gills. It causes severe gastrointestinal poisoning.",
      externalUrl:
        "https://www.inaturalist.org/taxa/510199-Entoloma-sinuatum",
      externalSource: "iNaturalist",
    },
    {
      name: "Ivory Funnel (Clitocybe dealbata)",
      slug: "clitocybe-dealbata",
      image: "lookalike-dealbata.jpg",
      distinction:
        "Much smaller (cap 2–6 cm vs. 6–20 cm), white rather than gray, and found in grassland rather than woodland. Despite the size difference, both are Clitocybe species with decurrent gills, so beginners sometimes confuse them. Clitocybe dealbata contains muscarine and is genuinely dangerous — causes profuse sweating, salivation, and potentially life-threatening cardiac effects.",
      externalUrl:
        "https://en.wikipedia.org/wiki/Clitocybe_dealbata",
      externalSource: "Wikipedia",
    },
    {
      name: "Wood Blewit (Lepista nuda)",
      slug: "clitocybe-nuda",
      image: "lookalike-nuda.jpg",
      distinction:
        "Similar size and woodland habitat, and also grows in leaf litter. However, Lepista nuda has distinctive violet to purple tints on the cap, gills, and especially the stem — Clitocybe nebularis is gray with no purple whatsoever. The smell is also different: L. nuda has a more floral, perfume-like scent. Both are edible (with caveats).",
      externalUrl:
        "https://www.inaturalist.org/taxa/1525548-Collybia-nuda",
      externalSource: "iNaturalist",
    },
  ],
  edibility: "edible-with-caution",
  edibilityNote:
    "Widely eaten in continental Europe (France, Spain, Poland, Czech Republic) but increasingly flagged as problematic. Contains nebularine, a cytotoxic nucleoside that can cause gastrointestinal upset in some people even after cooking. Must be thoroughly cooked — never eaten raw. First-time consumers should eat only a small amount to test tolerance. Rejected or downgraded in many modern UK and Scandinavian field guides. Some people eat it for years without issue; others react badly every time.",
  gbifKey: 2531072,
  stories: [
    {
      title: "The French Market Mushroom That Britain Won't Touch",
      text: "Visit an autumn market in Lyon or Bordeaux and you'll find Clitocybe nebularis (locally called 'clitocybe nébuleux') sold alongside chanterelles and ceps without anyone batting an eye. Cross the English Channel and the same mushroom is listed as 'avoid' in most British field guides. This cultural divide in mushroom edibility assessments — where the French happily eat species the British consider suspect — has been a running joke among European mycologists for decades.",
      location: "Lyon, France",
      source: "Société Mycologique de France",
    },
    {
      title: "The Fairy Ring That Stopped Traffic",
      text: "In 2017, a massive fairy ring of Clitocybe nebularis — estimated at over 400 individual mushrooms forming a circle roughly 15 meters in diameter — appeared overnight in a park in Freiburg, Germany. The formation was so striking that local news covered it, pedestrians stopped to photograph it, and the city parks department had to rope it off to prevent trampling. A local mycologist estimated the underlying mycelium was at least 30 years old.",
      location: "Freiburg, Germany",
      source: "Badische Zeitung",
    },
    {
      title: "Nebularine: The Antibiotic in Your Dinner",
      text: "In 1958, researchers at the University of Uppsala isolated nebularine — a purine nucleoside with cytotoxic and antibiotic properties — from Clitocybe nebularis. This discovery helped explain why some people got sick after eating the mushroom. Subsequent research showed nebularine inhibits cell division, which is why it was briefly investigated as an anti-cancer agent before being abandoned due to toxicity concerns.",
      location: "Uppsala, Sweden",
      source: "Acta Chemica Scandinavica",
    },
    {
      title: "The Czech Grandmother's Rule",
      text: "Czech mushroom foraging culture has a well-known folk rule for Clitocybe nebularis (locally 'čirůvka mlženka'): boil it first, discard the water, then cook it again. Many Czech and Slovak families have eaten it this way for generations without problems. Whether the double-cooking genuinely removes nebularine or whether Central Europeans simply have more tolerance is still debated by food scientists.",
      location: "Czech Republic",
      source: "Czech Mycological Society",
    },
    {
      title: "A Ring of 600 in the New Forest",
      text: "In November 2019, a wildlife photographer in the New Forest (Hampshire, UK) documented a fairy ring of Clitocybe nebularis containing an estimated 600 fruiting bodies in deep beech leaf litter. The ring measured approximately 20 meters across. Despite the spectacular display, local foragers — following British field guide advice — left them all untouched. A French hiking group passing through reportedly filled several bags.",
      location: "New Forest, Hampshire, UK",
      source: "Hampshire Fungus Recording Group",
    },
  ],
  seoQueries: [
    "clitocybe nebularis identification",
    "clouded funnel mushroom edible",
    "clouded agaric mushroom",
    "is clitocybe nebularis safe to eat",
    "gray mushroom fairy ring",
    "clitocybe nebularis look alikes",
    "clouded funnel vs wood blewit",
    "clitocybe nebularis poisonous",
    "nebularine mushroom toxin",
    "large gray mushroom in leaf litter",
    "clitocybe nebularis habitat",
    "clouded funnel mushroom season",
    "clitocybe nebularis vs entoloma sinuatum",
    "clouded funnel mushroom recipe",
    "clitocybe nebularis uk foraging",
  ],
  funFacts: [
    "Clitocybe nebularis contains nebularine, a naturally occurring nucleoside antibiotic named after the mushroom itself. It was one of the first antifungal/antibacterial compounds isolated from a mushroom and was briefly studied as a potential anti-cancer drug.",
    "The 'clouded' in Clouded Funnel refers to the fine grayish bloom on fresh caps that gives them a misty, cloud-like appearance. This bloom disappears with age and rain, leaving older specimens looking much paler and less distinctive.",
    "Clitocybe nebularis is one of the most prolific fairy ring formers among large mushrooms. A single ring can contain hundreds of fruiting bodies and expand outward by 10–30 cm per year, meaning large rings (15+ meters) can represent mycelial colonies several decades old.",
    "The edibility of this mushroom varies so dramatically by country that it serves as a case study in cultural mycology. In France and Spain it's a market mushroom; in the UK it's 'avoid'; in the Czech Republic it's eaten after double-boiling; in Sweden it's considered toxic. Same mushroom, wildly different cultural verdicts.",
    "Clitocybe nebularis has a strong enough smell that experienced foragers can detect a large fruiting before seeing it. The sweetish, mealy odor — sometimes compared to old hay or slightly rancid flour — carries several meters through still autumn air in damp woodland.",
  ],
  images: [
    {
      filename: "01-classic.jpg",
      alt: "Clitocybe nebularis Clouded Funnel mushroom showing gray cap with characteristic cloudy bloom",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Clitocybe_nebularis_2011_G1.jpg",
      author: "George Chernilevsky",
      license: "Public domain",
      licenseUrl: "",
    },
    {
      filename: "02-group.jpg",
      alt: "Group of Clouded Funnel mushrooms growing in leaf litter showing typical clustering habit",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Clitocybe_nebularis_-_Nebelgrauer_Trichterling.jpg",
      author: "Holger Krisp",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
    {
      filename: "03-gills.jpg",
      alt: "Underside of Clitocybe nebularis showing crowded white decurrent gills",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Clitocybe_nebularis_(Batsch)_P._Kumm_665045.jpg",
      author: "Jerzy Opioła",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "04-fairy-ring.jpg",
      alt: "Clitocybe nebularis forming a fairy ring arc in beech woodland leaf litter",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Nebelkappe_Clitocybe_nebularis.jpg",
      author: "H. Krisp",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
    {
      filename: "05-mature.jpg",
      alt: "Mature Clitocybe nebularis specimen showing flattened cap and sturdy stem",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Clitocybe_nebularis_LC0228.jpg",
      author: "Lebrac",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
  ],
  identificationImages: {
    cap: "cap-detail.jpg",
    gills: "gills-detail.jpg",
    stem: "stem-detail.jpg",
  },
};

export default species;
