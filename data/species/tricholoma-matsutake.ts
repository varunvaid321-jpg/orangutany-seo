import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "tricholoma-matsutake",
  commonName: "Matsutake",
  scientificName: "Tricholoma matsutake",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Tricholomataceae",
    genus: "Tricholoma",
  },
  summary:
    "The matsutake is one of the most expensive mushrooms on Earth — fetching over $1,000 per kilogram in Japan — and nobody has figured out how to farm it. Its intoxicating spicy-cinnamon aroma has made it a cultural obsession in Japan for over a thousand years.",
  description:
    "If you want to understand how deeply a single mushroom can embed itself into an entire culture, look at matsutake. In Japan, it's not just food — it's a seasonal event, a luxury gift, and a symbol of autumn itself. People spend small fortunes on pristine specimens to give to business partners, in-laws, and bosses. The best ones come wrapped in wooden boxes like jewelry. A single perfect matsutake from a prized Japanese forest can cost more than a bottle of Dom Perignon. And yet, this mushroom grows wild and refuses every attempt at cultivation.\n\nThe reason it can't be farmed is that matsutake forms an incredibly specific symbiotic relationship with the roots of certain trees — mainly Japanese red pine, but also other conifers. It needs old-growth forest conditions, specific soil chemistry, and decades-old root networks. When Japan's pine forests started dying from pine wilt nematode in the mid-20th century, matsutake harvests crashed from 12,000 tons in the 1940s to barely 30 tons today. Japan now imports most of its supply from China, Korea, Canada, and the Pacific Northwest.\n\nThe aroma is what makes matsutake matsutake. It's completely unique — a powerful, spicy-cinnamon-meets-pine scent that fills a room. In Japanese cuisine, the whole point is to showcase that aroma: matsutake gohan (rice), dobin mushi (clear soup steamed in a teapot), and simple grilled slices with a squeeze of sudachi citrus. Overcooking it is considered a crime. The IUCN listed it as Vulnerable in 2020, making it officially endangered — which, for a mushroom that already costs more than most people's weekly grocery bill, adds another layer of urgency to every autumn harvest.",
  identification: {
    cap: "6–20 cm across. Starts convex and tightly closed against the stem, opens flat with age. Brown to reddish-brown with darker fibrous scales over a white background. The surface cracks and shows white flesh underneath as it matures. Edges often stay slightly rolled inward.",
    gills: "White when young, turning pinkish-brown with age. Closely packed, attached to the stem (sinuate). Covered by a thick partial veil in young specimens that leaves a prominent ring on the stem.",
    stem: "5–20 cm tall, thick and sturdy (2–3 cm wide). White above the ring, brown and fibrous below it. Firmly rooted in the soil — you often have to dig to extract it without breaking. The ring is a thick, cottony membrane.",
    sporePrint: "White.",
    odor: "The defining feature. Intensely spicy and aromatic — often described as a mix of cinnamon, pine, and old socks (in the best possible way). Once you smell it, you'll never forget it. Japanese call it 'matsu-take-koh' — the matsutake fragrance.",
  },
  habitat:
    "Forms mycorrhizal relationships with pine trees, especially Japanese red pine (Pinus densiflora) in East Asia and various conifers (Douglas fir, noble fir, Shasta red fir) in North America. Grows in well-drained, nutrient-poor, sandy soils under mature trees. Often found near the base of slopes where roots are exposed. Needs old-growth or mature second-growth forest — young plantations won't do.",
  season:
    "Autumn is prime time. September through November in Japan, with the peak in October. Similar timing in the Pacific Northwest. Korean and Chinese harvests start slightly earlier, in August. The first matsutake of the season ('hatsu-matsutake') commands the highest prices.",
  range:
    "Native range spans East Asia — Japan, Korea, China, and parts of Scandinavia and Finland. Closely related species (sometimes still sold as matsutake) grow in the Pacific Northwest of North America, from British Columbia down through Oregon and Washington. Also found in parts of Mexico, North Africa (Morocco), and Turkey. Japan's domestic supply has declined over 99% since the 1940s.",
  lookAlikes: [
    {
      name: "Western Matsutake (Tricholoma murrillianum)",
      image: "lookalike-murrillianum.jpg",
      distinction:
        "The North American counterpart — often sold as 'matsutake' and nearly identical in appearance and aroma. Slightly lighter cap color and tends to grow with different conifers (Douglas fir, hemlock). Edible and also prized, but generally less expensive than true Japanese matsutake.",
      externalUrl:
        "https://www.inaturalist.org/taxa/521711-Tricholoma-murrillianum",
      externalSource: "iNaturalist",
    },
    {
      name: "Matsutake Look-alike (Tricholoma caligatum)",
      image: "lookalike-caligatum.jpg",
      distinction:
        "Mediterranean species found under pine and oak in Southern Europe and North Africa. Very similar brown-scaled cap and thick ring, but lacks the signature matsutake aroma — smells more like flour or cucumber. Not considered choice eating. If it doesn't hit you with that spicy cinnamon blast, it's probably this one.",
      externalUrl: "https://en.wikipedia.org/wiki/Tricholoma_caligatum",
      externalSource: "Wikipedia",
    },
    {
      name: "Smith's Amanita (Amanita smithiana)",
      image: "lookalike-smithiana.jpg",
      distinction:
        "This is the dangerous one. White, sturdy mushroom found in the same Pacific Northwest conifer forests. Similar size and stature, but has a bulbous base with a volva (cup) and white universal veil remnants on the cap. TOXIC — causes kidney failure. Matsutake pickers in BC and Washington have been hospitalized after confusing the two. Always check for the matsutake's distinctive brown scales and spicy aroma.",
      externalUrl:
        "https://www.mushroomexpert.com/amanita_smithiana.html",
      externalSource: "MushroomExpert",
    },
  ],
  edibility: "edible",
  edibilityNote:
    "One of the most prized edible mushrooms in the world. Best enjoyed simply to preserve the aroma — grilled with a touch of salt, steamed in clear broth (dobin mushi), or cooked with rice (matsutake gohan). Do not overcook or drown in heavy sauces. As with all wild mushrooms, confirm identification with an expert before eating, especially in North America where toxic Amanita smithiana grows in the same habitat.",
  gbifKey: 5241820,
  stories: [
    {
      title: "The $6,000 Box of Mushrooms",
      text: "In October 2013, the first matsutake of the season at Kyoto's Nishiki Market sold for 600,000 yen (about $6,000) for a small wooden box of six specimens. The buyer, a restaurant owner, said it was an investment in his reputation — serving hatsu-matsutake to loyal customers is a point of honor.",
      location: "Kyoto, Japan",
      source: "The Japan Times",
      sourceUrl: "https://www.japantimes.co.jp/",
    },
    {
      title: "A Forager's Windfall in Oregon",
      text: "A Cambodian immigrant forager near Chemult, Oregon told NPR in 2007 that a single good matsutake season could earn him $20,000 — more than many year-round jobs. The Pacific Northwest matsutake harvest draws thousands of immigrant foragers each fall, creating temporary tent camps in national forests.",
      location: "Chemult, Oregon, USA",
      source: "NPR",
      sourceUrl: "https://www.npr.org/",
    },
    {
      title: "IUCN Red List: Officially Vulnerable",
      text: "In 2020, the IUCN assessed Tricholoma matsutake as Vulnerable — the first time a high-value commercial mushroom received a threatened status. Japan's harvest collapsed from 12,000 tons/year in the 1940s to under 30 tons, primarily due to pine wilt disease killing host trees.",
      location: "Global",
      source: "IUCN Red List",
      sourceUrl: "https://www.iucnredlist.org/species/76267892/76268047",
    },
    {
      title: "North Korean Matsutake Diplomacy",
      text: "In 2000, North Korean leader Kim Jong-il sent 600 kg of matsutake to South Korean President Kim Dae-jung as a diplomatic gift during historic inter-Korean summit talks. The mushrooms, harvested from North Korea's Mount Kumgang forests, were valued at over $300,000.",
      location: "Pyongyang, North Korea",
      source: "BBC News",
      sourceUrl: "https://www.bbc.com/news",
    },
    {
      title: "Anna Tsing's Mushroom at the End of the World",
      text: "Anthropologist Anna Lowenhaupt Tsing wrote an entire book — 'The Mushroom at the End of the World' (2015) — using matsutake as a lens to examine capitalism, ecology, and precarious labor. She followed the supply chain from Oregon forest camps to Japanese auction houses.",
      location: "Oregon to Japan",
      source: "Princeton University Press",
      sourceUrl:
        "https://press.princeton.edu/books/paperback/9780691178325/the-mushroom-at-the-end-of-the-world",
    },
  ],
  seoQueries: [
    "matsutake mushroom",
    "why is matsutake so expensive",
    "matsutake price per kg",
    "how to find matsutake mushrooms",
    "matsutake mushroom identification",
    "what does matsutake smell like",
    "matsutake mushroom taste",
    "matsutake gohan recipe",
    "where do matsutake mushrooms grow",
    "matsutake season",
    "can you grow matsutake mushrooms",
    "matsutake vs pine mushroom",
    "matsutake endangered",
    "matsutake look alikes",
    "pacific northwest matsutake foraging",
  ],
  funFacts: [
    "Japan's annual matsutake harvest plummeted from 12,000 tons in the 1940s to under 30 tons today — a 99.7% decline — mostly because an invasive nematode has been killing the pine trees matsutake depends on.",
    "In Japanese gift-giving culture, a box of premium matsutake is considered on par with fine whisky or wagyu beef. Some corporate gifts of matsutake exceed $2,000 for a single box.",
    "Despite decades of research by top Japanese mycologists and millions of dollars in funding, nobody has successfully cultivated matsutake commercially. The fungus needs a living tree root system and specific forest conditions that can't be replicated in a lab.",
    "The word 'matsutake' literally means 'pine mushroom' in Japanese (matsu = pine, take = mushroom). It has appeared in Japanese poetry and literature since at least the 8th century Man'yoshu anthology.",
    "North Korea is a significant matsutake exporter, and the mushroom trade has been entangled in international sanctions — UN sanctions in 2017 specifically banned luxury goods imports from North Korea, including matsutake.",
  ],
  images: [
    {
      filename: "01-classic.jpg",
      alt: "Fresh matsutake mushrooms showing characteristic brown-scaled cap and thick white stem",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Matsutake.jpg",
      author: "Tomomarusan",
      license: "CC BY 2.5",
      licenseUrl: "https://creativecommons.org/licenses/by/2.5",
    },
    {
      filename: "02-habitat.jpg",
      alt: "Matsutake mushroom growing in natural forest floor habitat among pine needles",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Tricholoma_matsutake_(9627995451).jpg",
      author: "caspar s",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0",
    },
    {
      filename: "03-japan.jpg",
      alt: "Matsutake specimen collected in Saizaki, Japan in 1988 showing mature brown cap",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Tricholoma_matsutake_1988_11_Saizaki_Japan.jpg",
      author: "Japonica",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "04-fresh.jpg",
      alt: "Freshly harvested matsutake mushrooms displayed showing white flesh and brown cap scales",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Fresh_matsutake.jpg",
      author: "Fumikas Sagisavas",
      license: "CC0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0",
    },
    {
      filename: "05-russia.jpg",
      alt: "Matsutake mushroom in Russian forest showing cap surface and partial veil remnants",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Tricholoma_matsutake_(15442928456).jpg",
      author: "Tatiana Bulyonkova",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    },
  ],
};

export default species;
