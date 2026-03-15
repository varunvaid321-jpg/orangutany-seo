import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "ganoderma-lucidum",
  commonName: "Reishi",
  scientificName: "Ganoderma lucidum",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Polyporales",
    family: "Ganodermataceae",
    genus: "Ganoderma",
  },
  summary:
    "Meet the mushroom that's been called the 'mushroom of immortality' for over 2,000 years. Ganoderma lucidum — better known as Reishi (in Japan) or Lingzhi (in China) — is a glossy, kidney-shaped shelf fungus that looks like it was lacquered by hand. You can't eat it like a normal mushroom (it's tough as wood), but humans have been brewing it into teas, tinctures, and supplements since ancient Chinese emperors were obsessed with living forever.",
  description:
    "Reishi is one of the most recognizable medicinal mushrooms on the planet. It grows on hardwood trees — especially oaks, maples, and elms — in warm, humid climates across Asia, Europe, and the Americas. In the wild, it's actually pretty rare, which is part of why ancient cultures considered it so precious. Finding one growing on a tree was considered an omen of good fortune.\n\nThe fruiting body is a polypore (no gills — just tiny pores on the underside). It starts as a white knob pushing out from a dead or dying tree, then develops into a fan or kidney shape with concentric rings of red, orange, and brown. The surface has a distinctive lacquered sheen that makes it look almost artificial. When actively growing, the white edge is soft, but the mature body becomes woody and rock-hard.\n\nModern research has identified hundreds of bioactive compounds in Reishi, including triterpenoids and polysaccharides that show immunomodulatory and anti-inflammatory properties in lab studies. It's now one of the most commercially cultivated medicinal mushrooms in the world — grown on logs, sawdust bags, and even in liquid fermentation tanks. The supplement industry absolutely loves this thing.\n\nDespite the hype, it's worth noting that most human clinical trials are small, and 'mushroom of immortality' is a marketing term, not a medical claim. Still, the fact that humans have been using this fungus continuously for two millennia is genuinely remarkable.",
  identification: {
    cap: "5–30 cm across. Kidney-shaped to fan-shaped, sometimes circular. Surface is glossy and lacquered-looking with concentric growth zones in shades of red, reddish-brown, and orange. The growing margin is white and soft. Older specimens become dark brown to nearly black.",
    stem: "Sometimes absent (grows directly from wood as a shelf). When present, it's lateral (off to one side), 3–15 cm long, same glossy reddish-brown as the cap. Irregular shape — not like a typical mushroom stem at all.",
    sporePrint: "Brown — but good luck getting one, since the pores release spores as a fine brown dust over time. You'll sometimes see it coating nearby surfaces.",
    odor: "Faintly woody and slightly bitter. Nothing dramatic.",
  },
  habitat:
    "Grows on dead or dying hardwood trees — especially oaks, maples, elms, and plum trees. Occasionally on conifers. Found at the base of stumps or on buried roots, which can make it look like it's growing from the ground. Prefers warm, humid environments.",
  season: "Late spring through autumn. In tropical climates, it can fruit year-round. Perennial specimens add new growth layers each season.",
  range:
    "Native to Asia and widely distributed across temperate and subtropical regions worldwide. Found throughout China, Japan, Korea, Southeast Asia, Europe, and the Americas. Most abundant in subtropical hardwood forests. The vast majority of Reishi on the market is commercially cultivated, primarily in China.",
  lookAlikes: [
    {
      name: "Artist's Conk (Ganoderma applanatum)",
      slug: "ganoderma-applanatum",
      image: "lookalike-applanatum.jpg",
      distinction:
        "Flatter, harder, and lacks the glossy lacquered surface of Reishi. The top is dull brown and often bumpy with cocoa-like spore dust. The white underside can be scratched to draw on (hence 'Artist's Conk'). No medicinal hype around this one.",
      externalUrl: "https://www.inaturalist.org/taxa/48473-Ganoderma-applanatum",
      externalSource: "iNaturalist",
    },
    {
      name: "Hemlock Varnish Shelf (Ganoderma tsugae)",
      slug: "ganoderma-tsugae",
      image: "lookalike-tsugae.jpg",
      distinction:
        "Extremely similar to Reishi — glossy, reddish, same shape. Grows specifically on conifers (especially hemlock), while true Reishi prefers hardwoods. Some mycologists consider it a subspecies. Often used interchangeably in supplements, though purists disagree.",
      externalUrl: "https://www.inaturalist.org/taxa/63274-Ganoderma-tsugae",
      externalSource: "iNaturalist",
    },
    {
      name: "Sessile Reishi (Ganoderma sessile)",
      image: "lookalike-sessile.jpg",
      distinction:
        "The North American species most often confused with G. lucidum — and for good reason. Many 'Reishi' finds in eastern North America are actually G. sessile. Very similar glossy appearance but tends to be thinner and more shelf-like. Genetic studies split it from G. lucidum in 2017.",
      externalUrl: "https://www.inaturalist.org/taxa/350821-Ganoderma-sessile",
      externalSource: "iNaturalist",
    },
  ],
  edibility: "inedible",
  edibilityNote:
    "Way too woody and bitter to eat as food. Reishi is traditionally consumed as a tea (simmered for hours), powdered extract, or tincture. The bioactive compounds — mainly triterpenoids and beta-glucans — survive hot water extraction. It's technically non-toxic, but it's not a culinary mushroom by any stretch. Some people experience digestive upset or blood-thinning effects, so check with a doctor if you're on medications.",
  gbifKey: 2549730,
  stories: [
    {
      title: "The Emperor's Mushroom of Immortality",
      text: "In the Shennong Ben Cao Jing (circa 200 CE), one of China's oldest medical texts, Reishi was classified as a 'superior' herb — meaning it could be taken long-term without side effects. Emperors of the Han Dynasty sent expeditions into the mountains specifically to find wild Lingzhi, believing it granted longevity.",
      location: "Ancient China",
      source: "Shennong Ben Cao Jing",
      sourceUrl: "https://en.wikipedia.org/wiki/Shennong_Ben_Cao_Jing",
    },
    {
      title: "Japan's Post-War Reishi Cultivation Breakthrough",
      text: "In 1972, Japanese researcher Shigeaki Mori developed the first reliable method for cultivating Reishi commercially using plum tree sawdust. Before this, the mushroom was so rare in the wild that only royalty and the very wealthy could afford it. His technique made it accessible to ordinary people for the first time.",
      location: "Japan",
      source: "Stamets, 'Mycelium Running' (2005)",
    },
    {
      title: "A Forager's Lucky Find in the Appalachians",
      text: "In 2018, a mushroom forager in North Carolina posted a photo of a massive Reishi cluster growing from a fallen oak — over 15 fruiting bodies in a single group. The post went viral on r/mycology with 12k upvotes. Plot twist: commenters identified it as Ganoderma sessile, not true G. lucidum, sparking a heated taxonomy debate.",
      location: "North Carolina, USA",
      source: "r/mycology",
      sourceUrl: "https://www.reddit.com/r/mycology/",
    },
    {
      title: "The $1,300 Wild Lingzhi",
      text: "In 2020, a single large wild Lingzhi specimen sold at auction in Yunnan, China for over 9,000 yuan (roughly $1,300 USD). Wild specimens command astronomical prices compared to cultivated ones because of cultural beliefs that wild-grown Lingzhi absorbs more 'qi' from its environment.",
      location: "Yunnan, China",
      source: "South China Morning Post",
    },
    {
      title: "Reishi in Traditional Korean Royal Medicine",
      text: "Korean royal physicians in the Joseon Dynasty (1392-1897) recorded using Yeongji (the Korean name for Reishi) in formulas for the royal family. Court records show it was harvested under armed guard from sacred mountains — stealing wild Lingzhi from royal collection grounds was a punishable offense.",
      location: "Korea",
      source: "Donguibogam (Korean medical encyclopedia, 1613)",
    },
  ],
  seoQueries: [
    "reishi mushroom identification",
    "what does reishi look like in the wild",
    "ganoderma lucidum benefits",
    "lingzhi mushroom",
    "mushroom of immortality",
    "reishi growing on tree",
    "how to identify reishi mushroom",
    "reishi vs artist conk",
    "red shelf mushroom on oak tree",
    "ganoderma lucidum vs tsugae",
    "is reishi edible",
    "wild reishi mushroom",
    "reishi look alikes",
    "glossy red mushroom on tree",
    "where does reishi grow",
  ],
  funFacts: [
    "Ancient Chinese artists depicted Reishi so often that it became a standard decorative motif — you'll see it carved into furniture, embroidered on imperial robes, and painted on palace walls throughout Chinese history.",
    "Wild Reishi is so rare that in ancient China, discovering one growing naturally was considered a sign of heavenly approval of the ruling emperor's virtue.",
    "Reishi produces its spores as a fine brown powder that can coat everything nearby. Supplement companies actually collect and sell this spore powder separately — sometimes at higher prices than the mushroom itself.",
    "The name 'Ganoderma' literally means 'shiny skin' in Greek — a nod to that distinctive lacquered surface that makes it look like someone dipped it in polyurethane.",
    "Modern cultivation has made Reishi so abundant that global production exceeds thousands of tons per year, almost entirely in China. The mushroom that emperors sent armies to find is now grown in warehouses.",
  ],
  images: [
    {
      filename: "01-field.jpg",
      alt: "Reishi (Ganoderma lucidum) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:2015-08-17_Ganoderma_lucidum_(Curtis)_P._Karst_713895.jpg",
      author: "This image was created by user Vihane (wihane) at Mushroom Observer, a source for mycological images.You can contact thi",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "03-field.jpg",
      alt: "Reishi (Ganoderma lucidum) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Ganoderma_lucidum_(28042790686).jpg",
      author: "Björn S...",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    },
  ],
};

export default species;
