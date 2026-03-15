import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "cantharellus-formosus",
  commonName: "Pacific Golden Chanterelle",
  scientificName: "Cantharellus formosus",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Cantharellales",
    family: "Cantharellaceae",
    genus: "Cantharellus",
  },
  summary:
    "The Pacific Northwest's most celebrated wild mushroom. Cantharellus formosus — the Pacific Golden Chanterelle — is the golden child of West Coast foraging, turning soggy autumn forests from British Columbia to Northern California into treasure hunts that fuel a multi-million dollar harvest industry and an almost religious devotion among mushroom hunters.",
  description:
    "If you've ever wondered why people in Portland and Seattle get unreasonably excited about rain in September, this mushroom is a big part of the answer. The Pacific Golden Chanterelle is the culinary icon of the Pacific Northwest — a gorgeous, golden-orange funnel that pushes through moss and duff under Douglas fir and Sitka spruce, filling the forest with a fruity, apricot-like perfume that experienced foragers can smell before they even see the mushroom.\n\nWhat separates Cantharellus formosus from its European cousin Cantharellus cibarius is partly geography and partly genetics. Molecular studies in the 1990s confirmed it's a distinct species endemic to western North America, adapted to the specific mycorrhizal relationships of Pacific Northwest conifers. It forms tight partnerships with Douglas fir, Sitka spruce, and western hemlock — trees that define the temperate rainforests of the region. No trees, no chanterelles. It's that simple.\n\nThe commercial harvest is staggering. Oregon alone produces millions of pounds of chanterelles annually, most of them Cantharellus formosus. Buyers set up roadside stations along logging roads during peak season, paying foragers by the pound. The mushrooms end up in restaurants from San Francisco to New York, or get exported to Europe, where they're sold alongside — and sometimes passed off as — the local Cantharellus cibarius. The industry is big enough that Oregon and Washington have commercial harvesting permits, seasonal regulations, and ongoing research into sustainable yield.",
  identification: {
    cap: "5–15 cm across, convex when young, becoming funnel-shaped with a wavy, irregular margin at maturity. Color is golden-orange to deep egg-yolk yellow, sometimes paling to almost cream in older specimens. Surface is smooth to slightly felty, dry.",
    gills:
      "Not true gills — this is a critical identification feature. The underside has blunt, forking ridges (false gills) that run down the stem. They are the same golden-orange color as the cap and feel waxy, not blade-like. If you see thin, blade-like true gills, you don't have a chanterelle.",
    stem: "3–8 cm tall, 1–3 cm thick, solid (not hollow), tapering downward. Same golden-orange color as the cap, sometimes paler. Smooth to slightly fibrous surface. The false gills run down onto the upper portion of the stem (decurrent).",
    sporePrint: "White to pale yellowish.",
    odor: "Distinctly fruity — often described as apricot or peach. This aroma is one of the most reliable field identification features and develops especially strongly in fresh, mature specimens.",
  },
  habitat:
    "Mycorrhizal with conifers of the Pacific Northwest, especially Douglas fir (Pseudotsuga menziesii), Sitka spruce (Picea sitchensis), and western hemlock (Tsuga heterophylla). Found in old-growth and second-growth coniferous and mixed forests, often in thick moss, duff, and needle litter. Prefers moist, well-drained slopes and forest edges. Frequently fruits in the same patches year after year.",
  season:
    "September through November, with peak fruiting in October. Timing depends heavily on the onset of fall rains — the first sustained rains after summer drought trigger the main flush. In mild years, fruiting can extend into December.",
  range:
    "Endemic to western North America. Found from British Columbia south through Washington, Oregon, and into Northern California. Most abundant in the coastal and Cascade mountain ranges where rainfall is highest and conifer forests are dense. The epicenter of commercial harvest is the Oregon Coast Range and the western Cascades.",
  lookAlikes: [
    {
      name: "Jack O'Lantern (Omphalotus olearius)",
      slug: "omphalotus-olearius",
      image: "lookalike-omphalotus.jpg",
      distinction:
        "The most dangerous chanterelle look-alike. Jack O'Lanterns have TRUE gills — thin, blade-like, closely spaced — not the blunt, forking ridges of chanterelles. They grow in dense clusters on wood (stumps, buried roots), not singly from soil. The flesh is orange throughout (chanterelle flesh is pale inside). Bioluminescent — the gills glow faint green in total darkness. Causes severe gastrointestinal distress but is not lethal.",
      externalUrl:
        "https://www.inaturalist.org/taxa/64021-Omphalotus-olearius",
      externalSource: "iNaturalist",
    },
    {
      name: "False Chanterelle (Hygrophoropsis aurantiaca)",
      slug: "hygrophoropsis-aurantiaca",
      image: "lookalike-hygrophoropsis.jpg",
      distinction:
        "Thinner-fleshed and more orange than golden. Has TRUE gills that are thin, crowded, and forking — not the blunt waxy ridges of real chanterelles. Cap surface is often finely fuzzy or velvety. Lacks the fruity apricot scent. Grows on decaying wood and woody debris, not mycorrhizally from soil. Generally considered non-toxic but unpalatable.",
      externalUrl:
        "https://en.wikipedia.org/wiki/Hygrophoropsis_aurantiaca",
      externalSource: "Wikipedia",
    },
    {
      name: "Golden Chanterelle (Cantharellus cibarius)",
      slug: "cantharellus-cibarius",
      image: "lookalike-cibarius.jpg",
      distinction:
        "The European counterpart — extremely similar and historically confused with C. formosus before molecular work separated them. C. cibarius is primarily European and associates with hardwoods (beech, oak, birch) rather than Pacific conifers. In practice, if you're foraging in the Pacific Northwest, you almost certainly have C. formosus, not C. cibarius. Both are excellent edibles.",
      externalUrl:
        "https://www.inaturalist.org/taxa/47347-Cantharellus-cibarius",
      externalSource: "iNaturalist",
    },
  ],
  edibility: "edible",
  edibilityNote:
    "A superb edible mushroom, considered among the finest wild mushrooms in North America. Excellent sautéed in butter, in cream sauces, with eggs, or in risotto. The fruity aroma holds up well in cooking. Dries reasonably well but loses some of its delicate texture — many foragers prefer to sauté and freeze. No special preparation needed beyond cleaning debris from the ridges.",
  gbifKey: 5466954,
  stories: [
    {
      title: "Oregon's Chanterelle Capital",
      text: "The small town of Yachats on Oregon's central coast hosts an annual Yachats Village Mushroom Festival every October, celebrating the Pacific Golden Chanterelle. The festival features guided forays into the Coast Range forests, cooking demonstrations, and identification workshops. The surrounding Siuslaw National Forest is one of the most productive chanterelle harvesting grounds in the world.",
      location: "Yachats, Oregon, USA",
      source: "Yachats Village Mushroom Festival",
      sourceUrl: "https://yachats.org",
    },
    {
      title: "The Multi-Million Dollar Roadside Economy",
      text: "During peak chanterelle season, commercial mushroom buyers set up temporary buying stations along rural highways and logging roads throughout western Oregon and Washington. Foragers — many of them immigrants from Southeast Asia and Latin America — arrive with buckets and bags of freshly picked chanterelles. In good years, the Pacific Northwest chanterelle harvest exceeds 3 million pounds, with buyers paying $2–8 per pound depending on quality and supply.",
      location: "Oregon Coast Range, USA",
      source: "Oregon Department of Forestry",
      sourceUrl: "https://www.oregon.gov/odf",
    },
    {
      title: "Permit Wars in the National Forests",
      text: "Commercial chanterelle harvesting on federal lands requires permits from the U.S. Forest Service. In the 1990s, as the harvest boomed, conflicts erupted between commercial pickers and recreational foragers in the Willamette and Mount Hood National Forests. The Forest Service implemented harvest limits, designated areas, and permit fees — regulations still in effect today — after studies showed that intensive picking was impacting forest ecology.",
      location: "Willamette National Forest, Oregon, USA",
      source: "USDA Forest Service Pacific Northwest Research Station",
      sourceUrl: "https://www.fs.usda.gov/pnw/",
    },
    {
      title: "The Great Chanterelle Export Pipeline",
      text: "A significant portion of Pacific Northwest chanterelles are exported to Europe, particularly Germany and France, where demand for chanterelles far outstrips local supply. Portland-based mushroom wholesalers ship refrigerated containers overseas within 48 hours of harvest. European buyers reportedly can't distinguish C. formosus from their native C. cibarius in blind tastings.",
      location: "Portland, Oregon, USA",
      source: "Pacific Northwest mushroom industry reports",
    },
    {
      title: "Mycological Research at Oregon State",
      text: "Researchers at Oregon State University's Department of Forest Ecosystems and Society have conducted long-term studies on chanterelle ecology in the H.J. Andrews Experimental Forest since the 1990s. Their work demonstrated that Cantharellus formosus is genuinely a distinct species from the European C. cibarius, and documented the critical role of old-growth forest structure in sustaining productive chanterelle habitat.",
      location: "H.J. Andrews Experimental Forest, Oregon, USA",
      source: "Oregon State University",
      sourceUrl: "https://andrewsforest.oregonstate.edu",
    },
  ],
  seoQueries: [
    "pacific golden chanterelle identification",
    "golden chanterelle pacific northwest",
    "chanterelle mushroom identification",
    "cantharellus formosus edible",
    "pacific chanterelle vs european chanterelle",
    "how to identify chanterelle mushrooms",
    "chanterelle look alikes",
    "where to find chanterelles in oregon",
    "chanterelle mushroom season pacific northwest",
    "false gills vs true gills chanterelle",
    "golden chanterelle foraging",
    "chanterelle mushroom habitat",
    "pacific chanterelle cooking",
    "chanterelle vs jack o lantern",
    "oregon chanterelle mushroom hunting",
  ],
  funFacts: [
    "Oregon legislators introduced a bill in 1999 to designate the Pacific Golden Chanterelle as the official state mushroom of Oregon. While it didn't pass, it remains the unofficial mushroom mascot of the state and is celebrated at festivals up and down the coast.",
    "The Pacific Northwest chanterelle harvest can exceed 3 million pounds in a good year, making it one of the largest wild mushroom harvests in North America. The industry supports thousands of seasonal workers.",
    "Cantharellus formosus wasn't recognized as a species distinct from the European Cantharellus cibarius until 1997, when mycologist Eric Danell and colleagues used molecular analysis to confirm the split. For centuries, they were considered the same mushroom.",
    "The fruity, apricot-like aroma of chanterelles comes from a compound called cis-3-octen-1-ol. Experienced foragers claim they can smell a productive chanterelle patch from several feet away before spotting a single mushroom.",
    "Unlike most gilled mushrooms, chanterelle 'gills' are actually blunt, forking ridges fused to the cap surface. You can run your finger across them and they feel waxy and smooth — real gills would feel like thin paper blades. This simple touch test is one of the fastest ways to confirm a chanterelle.",
  ],
  images: [
    {
      filename: "01-classic.jpg",
      alt: "Pacific Golden Chanterelle (Cantharellus formosus) growing in moss on forest floor",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:2004-10-24_Cantharellus_formosus_Corner_133063.jpg",
      author: "Sava Krstic",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "02-habitat.jpg",
      alt: "Chanterelle mushrooms growing among moss in Pacific Northwest conifer forest",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Cantharellus_formosus_51421.jpg",
      author: "Noah Siegel",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "03-young.jpg",
      alt: "Young Pacific Golden Chanterelle with convex cap before funnel shape develops",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Cantharellus_formosus_23623.jpg",
      author: "Noah Siegel",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "04-cap-detail.jpg",
      alt: "Close-up of Cantharellus formosus showing false gills (forking ridges) on underside",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Cantharellus_formosus_65122.jpg",
      author: "Noah Siegel",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
  ],
  identificationImages: {
    cap: "cap-detail.jpg",
    gills: "gills-detail.jpg",
    stem: "stem-detail.jpg",
  },
};

export default species;
