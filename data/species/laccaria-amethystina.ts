import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "laccaria-amethystina",
  commonName: "Amethyst Deceiver",
  scientificName: "Laccaria amethystina",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Hydnangiaceae",
    genus: "Laccaria",
  },
  summary:
    "A tiny jewel of the forest floor that's entirely deep purple when fresh — then fades so dramatically that you'd swear it was a different species. The Amethyst Deceiver earns its name honestly: it deceives you by looking completely different depending on whether it rained yesterday or last week. Edible but with a caveat — it accumulates arsenic from the soil.",
  description:
    "Few mushrooms deliver as much visual impact per gram as Laccaria amethystina. When fresh and moist, the entire fruiting body — cap, gills, and stem — is a vivid, saturated amethyst-violet that looks almost gemstone-like against the brown leaf litter. The thick, widely-spaced gills are particularly beautiful, looking like they were carved from purple wax. It's the kind of mushroom that makes people stop on a forest walk and say 'what is THAT?'\n\nBut here's the trick: give it a day or two of dry weather, and the same mushroom fades to a washed-out buff or pale lilac that bears almost no resemblance to its former glory. This extreme variability is what earned the entire Laccaria genus the common name 'deceivers.' The color change is so dramatic that beginners routinely think the fresh and faded forms are unrelated species.\n\nLaccaria amethystina is widespread across Europe, found in both deciduous and coniferous forests from autumn through early winter. It's small — caps rarely exceed 5 cm — and grows among leaf litter, often in large troops. The thick, widely-spaced gills and fibrous, tough stem are characteristic of the genus. The spore print is white, which helps separate it from toxic purple-capped species like Inocybe geophylla var. lilacina (brown spore print, silky cap texture).\n\nThe mushroom is edible and has a pleasant if unremarkable flavor. However, research has shown that Laccaria amethystina is a hyperaccumulator of arsenic — it can concentrate arsenic from the soil to levels far exceeding those in the surrounding environment. While occasional consumption is considered safe, eating large quantities from arsenic-rich soils (near old mine sites, for example) could be problematic. This arsenic accumulation has actually made the species useful in bioremediation research.",
  identification: {
    cap: "2–6 cm across. Convex when young, flattening and sometimes becoming slightly wavy or irregular with age. Deep amethyst-violet when fresh and moist, fading dramatically to pale lilac, buff, or almost white when dry. Surface is finely scurfy or scaly. Hygrophanous — color depends heavily on moisture content.",
    gills:
      "Widely spaced (distant) — this is a key Laccaria feature. Thick and waxy-looking. Deep purple when fresh, fading to pale lilac. Attached to the stem (adnate to slightly decurrent). Often with a white powdery coating from spores at maturity.",
    stem: "4–10 cm tall, 0.3–0.8 cm thick. Slender, tough, and fibrous. Same purple color as cap when fresh, fading similarly. Often twisted or slightly bent. Base sometimes with white mycelial threads.",
    sporePrint: "White.",
    odor: "Faint, not distinctive.",
  },
  habitat:
    "Mycorrhizal with a wide range of deciduous and coniferous trees including beech, oak, birch, spruce, and pine. Found in leaf litter on the forest floor, often in large groups or troops. Prefers damp, shaded woodland with acidic to neutral soils. Sometimes found along woodland paths and in mossy areas.",
  season:
    "Autumn through early winter, typically September through December. Can appear as early as August after heavy rains. Peak season is October–November across most of Europe.",
  range:
    "Widespread across Europe, from the British Isles through Scandinavia, central and southern Europe. Also found in temperate parts of North America, Central America, and Asia. One of the most commonly encountered Laccaria species in European forests.",
  lookAlikes: [
    {
      name: "The Deceiver (Laccaria laccata)",
      slug: "laccaria-laccata",
      image: "lookalike-laccata.jpg",
      distinction:
        "The orange-brown cousin. Same genus, same widely-spaced gills, same deceiving color changes — but Laccaria laccata is orange-brown to pinkish-tan, never purple. When both species are faded and dried out, they can look confusingly similar in their washed-out states. Also edible.",
      externalUrl:
        "https://en.wikipedia.org/wiki/Laccaria_laccata",
      externalSource: "Wikipedia",
    },
    {
      name: "Wood Blewit (Lepista nuda)",
      slug: "clitocybe-nuda",
      image: "lookalike-nuda.jpg",
      distinction:
        "Much larger mushroom (cap 6–15 cm) with lilac-blue colors that can overlap with the amethyst deceiver's palette. However, Wood Blewit has crowded gills (not widely spaced), a much thicker and more robust build, and a pinkish spore print. Also edible and more commonly collected for the table.",
      externalUrl:
        "https://en.wikipedia.org/wiki/Lepista_nuda",
      externalSource: "Wikipedia",
    },
    {
      name: "Lilac Fibrecap (Inocybe geophylla var. lilacina)",
      image: "lookalike-lilacina.jpg",
      distinction:
        "POISONOUS. This is the dangerous look-alike. Has a similar lilac-purple color but with a distinctly silky, fibrous cap texture (not scurfy like Laccaria). Gills are crowded (not widely spaced) and become brown with maturity. Spore print is brown. Contains muscarine. The widely spaced gills of the Amethyst Deceiver are the quickest way to tell them apart.",
      externalUrl:
        "https://en.wikipedia.org/wiki/Inocybe_geophylla",
      externalSource: "Wikipedia",
    },
  ],
  edibility: "edible",
  edibilityNote:
    "Edible with a pleasant but mild flavor. Good as a colorful addition to mixed mushroom dishes. However, Laccaria amethystina is a known hyperaccumulator of arsenic from soil, so avoid collecting from contaminated sites (near old mines, industrial areas, treated wood) and don't eat in large quantities. The stems are tough and fibrous — most foragers use only the caps.",
  gbifKey: 2530983,
  stories: [
    {
      title: "The Arsenic Connection",
      text: "In 2009, researchers at the University of Aberdeen published a study showing that Laccaria amethystina can accumulate arsenic at concentrations 20–100 times higher than surrounding soil levels. The discovery raised food safety questions but also opened a door: the species is now studied as a potential tool for bioremediation — using fungi to clean up arsenic-contaminated sites.",
      location: "Aberdeen, Scotland",
      source: "Environmental Pollution journal",
    },
    {
      title: "The Deceiver's Identity Crisis",
      text: "For decades, European mycologists argued about whether Laccaria amethystina and Laccaria amethystea were the same species or different. The confusion arose from two independent descriptions published around the same time. Modern molecular work has confirmed they are synonyms — the same species with two names. Most authorities now use L. amethystina as the accepted name.",
      location: "European mycological community",
      source: "Index Fungorum",
    },
    {
      title: "Purple Troops in the Beech Woods",
      text: "Photographers love this species because of how it fruits — often in large troops of dozens or even hundreds of individuals carpeting the forest floor. In beech woods in southern England, autumn troops of Amethyst Deceivers have been photographed in stunning displays where the forest floor appears to glow purple. These images regularly go viral on nature photography forums.",
      location: "Southern England",
      source: "British Mycological Society",
      sourceUrl: "https://www.britmycolsoc.org.uk/",
    },
    {
      title: "Teaching Tool for Mycology Students",
      text: "Mycology professors across Europe use the Amethyst Deceiver as a teaching example of hygrophanous color change — the phenomenon where a mushroom's appearance changes dramatically with moisture content. Students are shown fresh purple specimens alongside dried-out buff ones and asked to identify them as the same species. Most get it wrong the first time.",
      location: "European universities",
      source: "Mycological education",
    },
    {
      title: "A Mushroom Named Like a Gemstone",
      text: "Both the common name 'Amethyst Deceiver' and the Latin epithet 'amethystina' reference the purple gemstone amethyst. In medieval herbalism, amethyst was believed to prevent intoxication. The mushroom, unlike the stone, won't prevent anything — but it's one of the few fungi beautiful enough to earn a gemstone comparison.",
      location: "Historical nomenclature",
      source: "Etymology of fungal names",
    },
  ],
  seoQueries: [
    "amethyst deceiver identification",
    "purple mushroom in woods",
    "laccaria amethystina edible",
    "amethyst deceiver look alikes",
    "purple mushroom identification UK",
    "laccaria amethystina arsenic",
    "amethyst deceiver vs wood blewit",
    "small purple mushroom forest floor",
    "amethyst deceiver season",
    "laccaria amethystina habitat",
    "is the amethyst deceiver safe to eat",
    "purple mushroom that fades",
    "amethyst deceiver foraging",
    "violet mushroom identification",
    "laccaria amethystina vs inocybe",
  ],
  funFacts: [
    "The Amethyst Deceiver can accumulate arsenic from soil at concentrations up to 100 times higher than the surrounding environment. This makes it both a food safety concern and a promising candidate for bioremediation of contaminated sites.",
    "When fresh, every part of the mushroom — cap, gills, stem — is the same vivid amethyst-purple. After a few dry days, it fades to such a washed-out buff that even experienced mycologists can be momentarily fooled into thinking it's a different species.",
    "The widely spaced gills are the fastest field identification feature. Most small purple mushrooms (especially the poisonous Inocybe species) have crowded gills. If the gills are thick, waxy, and you can count them easily, you're looking at a Laccaria.",
    "Despite its small size (caps rarely exceed 5 cm), the Amethyst Deceiver often fruits in troops of hundreds, creating carpets of purple across the forest floor that look like something from a fantasy novel.",
    "The white spore print is a critical safety feature. The toxic Lilac Fibrecap (Inocybe geophylla var. lilacina) has a similar purple color but produces brown spores — a quick spore print test can confirm the Amethyst Deceiver's identity.",
  ],
  images: [
    {
      filename: "01-classic.jpg",
      alt: "Young Amethyst Deceiver (Laccaria amethystina) showing vivid purple cap and gills in German forest",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Violetter_Lacktrichterling_Laccaria_amethystea.jpg",
      author: "Holger Krisp",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
    {
      filename: "02-forest-floor.jpg",
      alt: "Amethyst Deceiver mushroom growing among autumn leaves in Dutch forest",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:De_Famberhorst_08-11-2021._(d.j.b)_02.jpg",
      author: "Famberhorst",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "03-hesse.jpg",
      alt: "Laccaria amethystina specimen showing deep purple coloration in Hesse, Germany",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Amethyst_Deceiver_-_Laccaria_amethystina_or_Laccaria_amethystea_-_01.jpg",
      author: "Norbert Nagel",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "04-detail.jpg",
      alt: "Close-up of Amethyst Deceiver showing widely spaced purple gills and fibrous stem",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Amethyst_Deceiver_-_Laccaria_amethystina_or_Laccaria_amethystea_-_02.jpg",
      author: "Norbert Nagel",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "05-group.jpg",
      alt: "Group of Amethyst Deceiver mushrooms showing characteristic purple color and widely spaced gills",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Amethyst_Deceiver_-_Laccaria_amethystea_-_Violetter_Lacktrichterling_-_Laccaria_amethystina_-_02.jpg",
      author: "Norbert Nagel",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
  ],
};

export default species;
