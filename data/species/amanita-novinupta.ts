import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "amanita-novinupta",
  commonName: "Blushing Bride",
  scientificName: "Amanita novinupta",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Amanitaceae",
    genus: "Amanita",
  },
  summary:
    "The Blushing Bride is a striking white Amanita of western North America that slowly turns pink when handled or cut, like a bride blushing at the altar. Edible when thoroughly cooked, but its resemblance to the deadly Western Destroying Angel makes it a mushroom only for experts who can stake their life on the identification.",
  description:
    "Amanita novinupta is the western North American counterpart of the European Blusher (Amanita rubescens). Until 1994, every field guide on the Pacific Coast listed it under that European name. Then Rodham Tulloss and Joy Lindgren examined the differences closely enough to give it its own identity. The name they chose, novinupta, is Latin for 'new bride,' a nod to the white cap that gradually flushes pink like a bride blushing.\n\nThe two species share the signature blushing reaction: cut the flesh, bruise the stem, or find a slug trail, and the damaged tissue slowly turns pink to reddish. But novinupta starts life as a much whiter mushroom. Where the European Blusher emerges with a reddish-brown cap from the start, the Blushing Bride begins almost pure white, with the pink tones developing gradually as the mushroom ages or sustains damage. The cap reaches 3 to 15 centimeters across, convex at first then flattening, with scattered whitish to pale pink wart-like patches from the universal veil.\n\nThe stem is stout, white, 2 to 15 cm tall, with a prominent bulbous base. A thin, fragile ring hangs from the upper stem, striate on top. The base lacks the sac-like volva you see on a Death Cap or Destroying Angel; instead it has collar-like remnants, one to several scaly rings around the bulb.\n\nThis species fruits primarily with coast live oak in California, though it also associates with Douglas-fir and other conifers. Its season is distinctive: late fall through spring, following the Pacific Coast rainy season. This puts it in the field at the same time and in the same habitat as Amanita ocreata, the Western Destroying Angel, which is responsible for most mushroom poisoning deaths in California. Both are white Amanitas growing under oaks in winter. The difference is that the Blushing Bride blushes pink when cut and the Destroying Angel does not. Getting that test wrong is fatal.\n\nDespite being edible when cooked, most experts advise against eating this mushroom. The stakes are simply too high. One moment of overconfidence, one specimen where the blushing reaction is slow to develop, and you could be holding a Destroying Angel instead.",
  identification: {
    cap: "3 to 15 cm across. Convex, expanding to nearly flat. Initially white, developing pinkish areas with age. Surface dry, appearing chalky at first, becoming satiny. Scattered whitish to pale pink wart-like veil patches, sometimes aggregated into a central patch. Margin not striate or only faintly so at maturity.",
    gills: "White, free or slightly attached. Close to crowded. Bruise pinkish when damaged.",
    stem: "2 to 15 cm tall, 1 to 3 cm thick. White, stout. Finely striate at apex, with pale pinkish-brown fine scales below. Prominent bulbous base with collar-like volva remnants (one to several scaly rings on the bulb, not a sac). Bruises pinkish to reddish. Ring is thin, white, fragile, striate on upper surface.",
    sporePrint: "White.",
    bruising: "The defining feature: all parts of the flesh slowly turn pink to reddish when cut, bruised, or damaged. The reaction can be slow, developing over several minutes. This distinguishes it from the deadly Amanita ocreata, which does not blush.",
    odor: "Not distinctive.",
  },
  habitat:
    "Mycorrhizal, primarily with coast live oak (Quercus agrifolia). Also found under Douglas-fir and other conifers. Grows alone, scattered, or in groups in woodland and forest settings. Often fruits alongside Amanita velosa and, dangerously, alongside Amanita ocreata.",
  season: "Late fall through spring (November to April). Fruits during the Pacific Coast rainy season, unlike most Amanitas which appear in summer and fall.",
  range:
    "Western North America, from British Columbia south through California and into Arizona and New Mexico. Most common in California's coast live oak woodlands. This is the western replacement for the European Blusher (Amanita rubescens), which occurs in Europe and eastern North America.",
  lookAlikes: [
    {
      name: "Western Destroying Angel (Amanita ocreata)",
      image: "lookalike-ocreata.jpg",
      distinction:
        "The most dangerous confusion and the reason most experts advise against eating the Blushing Bride. Both are white Amanitas fruiting under oaks in California during winter. The critical difference: the Destroying Angel does NOT blush pink when cut. It also has a prominent sac-like volva at the base (not a collar) and lacks warts on the cap. If the flesh stays white when you cut it, put it down immediately. Amanita ocreata is responsible for most mushroom poisoning deaths in California.",
      externalUrl: "https://en.wikipedia.org/wiki/Amanita_ocreata",
      externalSource: "Wikipedia",
    },
    {
      name: "The Blusher (Amanita rubescens)",
      slug: "amanita-rubescens",
      distinction:
        "The European and eastern North American counterpart. The Blusher has a darker reddish-brown to vinaceous cap from the start, while the Blushing Bride begins white. The Blusher is taller and less stocky, with greyer warts. Their ranges do not overlap: rubescens in Europe and eastern North America, novinupta in the west. Both blush pink when cut.",
    },
    {
      name: "Panther Cap (Amanita pantherina)",
      slug: "amanita-pantherina",
      image: "lookalike-pantherina.jpg",
      distinction:
        "Brown cap with pure white, evenly spaced warts. The critical difference: does NOT blush pink when cut. Has a distinct collar-like volva with a rim. Contains ibotenic acid and muscimol, causing serious neurological poisoning. If the flesh stays white, do not eat it.",
    },
  ],
  edibility: "edible-with-caution",
  edibilityNote:
    "Edible and considered good when thoroughly cooked. Like all blushing Amanitas, it contains a hemolytic toxin in its raw state that is destroyed by cooking. Must be cooked through completely before eating. However, most experts strongly advise against eating this species due to the extreme danger of confusion with Amanita ocreata, the Western Destroying Angel, which shares the same habitat, season, and general white Amanita appearance. A misidentification would be fatal. Only very experienced foragers who can reliably confirm the pink blushing reaction should consider collecting this species.",
  gbifKey: 5452054,
  stories: [
    {
      title: "Named for a Bride at the Altar",
      text: "When Rodham Tulloss and Joy Lindgren formally described this species in 1994, they chose the name 'novinupta,' Latin for 'new bride.' The white cap that gradually blushes pink reminded them of a bride blushing at the altar. It was published in Mycotaxon under the title 'Amanita novinupta -- A rubescent, white species from the western United States and Southwestern Canada,' finally separating it from the European Blusher after over a century of misidentification.",
      location: "United States",
      source: "Mycotaxon 51: 179-190, 1994",
    },
    {
      title: "Hidden in Plain Sight in Mushrooms Demystified",
      text: "David Arora's iconic field guide Mushrooms Demystified, published in 1986, describes this species on pages 276-277 but calls it Amanita rubescens, the European name. Arora's detailed description and illustrations were accurate, but the mushroom did not receive its own name until eight years later. Generations of California foragers learned to identify this species under the wrong name.",
      location: "California, USA",
      source: "Mushrooms Demystified, David Arora, 1986",
    },
    {
      title: "The Deadliest Neighbor in the Forest",
      text: "The Blushing Bride shares its habitat and season with Amanita ocreata, the Western Destroying Angel, which is responsible for the majority of mushroom poisoning deaths in California. Both are white Amanitas that fruit under coast live oaks during the rainy season. The California Poison Control Center has documented cases where foragers collected both species in the same basket, believing all white Amanitas in their patch were Blushing Brides. The blushing test saved those who checked; those who did not check every specimen risked their lives.",
      location: "California, USA",
      source: "California Poison Control Center",
    },
    {
      title: "Tulloss and the Amanita Empire",
      text: "Rodham Tulloss, who described A. novinupta, is the world's foremost authority on the genus Amanita. He maintains amanitaceae.org, the definitive online reference for the entire genus. His decades-long project to untangle the 'rubescens complex' worldwide has revealed that what was once considered a single widespread species is actually a group of distinct species on different continents. A 2024 study in Mycologia titled 'Downfall of an empire' confirmed this, showing hidden diversity across the complex.",
      location: "United States",
      source: "amanitaceae.org",
      sourceUrl: "https://www.amanitaceae.org/",
    },
    {
      title: "2,700 Eyes on the Blushing Bride",
      text: "With over 2,700 research-grade observations on iNaturalist, the Blushing Bride is well documented by citizen scientists across the Pacific Coast. The vast majority of observations come from California, particularly from coast live oak woodlands in the San Francisco Bay Area, the Central Coast, and Southern California foothills. This crowdsourced data has helped refine understanding of the species' range and seasonal patterns.",
      location: "California, USA",
      source: "iNaturalist",
      sourceUrl: "https://www.inaturalist.org/taxa/57691",
    },
  ],
  seoQueries: [
    "blushing bride mushroom",
    "amanita novinupta identification",
    "blushing bride amanita edible",
    "amanita novinupta vs amanita rubescens",
    "blushing bride vs western destroying angel",
    "amanita novinupta california",
    "white amanita that turns pink",
    "amanita novinupta look alikes",
    "is amanita novinupta safe to eat",
    "blushing bride mushroom identification",
    "amanita novinupta vs amanita ocreata",
    "western blusher mushroom",
    "amanita novinupta habitat",
    "white blushing amanita west coast",
    "amanita novinupta vs panther cap",
    "california blushing amanita",
    "how to identify blushing bride mushroom",
  ],
  funFacts: [
    "The name 'novinupta' is Latin for 'new bride,' chosen because the white cap blushes pink like a bride at the altar.",
    "Until 1994, every field guide on the Pacific Coast listed this species under the wrong name, calling it Amanita rubescens, the European Blusher.",
    "The Blushing Bride fruits during winter and spring, the opposite season from most mushrooms, following the Pacific Coast rainy season from November through April.",
    "This species shares its exact habitat and season with Amanita ocreata, the Western Destroying Angel, one of the deadliest mushrooms in North America. Both grow under coast live oaks in California during winter.",
    "A 2024 study in Mycologia confirmed that what was once considered a single worldwide species (Amanita rubescens) is actually multiple distinct species on different continents, vindicating the 1994 separation of A. novinupta.",
  ],
  images: [
    {
      filename: "01-field.jpg",
      alt: "Blushing Bride Amanita showing multiple white specimens with pinkish veil patches and visible gills in leaf litter",
      source: "Wikimedia Commons / Mushroom Observer",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Amanita_novinupta_Tulloss_%26_J._Lindgr_401076.jpg",
      author: "Mushroom Observer contributor",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "02-field.jpg",
      alt: "Single Blushing Bride specimen showing pink-blushed cap and white stem with bulbous base among pine needles",
      source: "Wikimedia Commons / Mushroom Observer",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Amanita_novinupta_96573.jpg",
      author: "Ron Pastorino",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "04-blushing.jpg",
      alt: "Blushing Bride Amanita showing prominent pink blushing on cap and gills with visible stem",
      source: "iNaturalist",
      sourceUrl:
        "https://www.inaturalist.org/observations/198370058",
      author: "arlenedevitt",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    {
      filename: "05-gills.jpg",
      alt: "Underside of Blushing Bride cap showing pinkish-tinged crowded gills and stem attachment",
      source: "iNaturalist",
      sourceUrl:
        "https://www.inaturalist.org/observations/198370058",
      author: "arlenedevitt",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
  ],
};

export default species;
