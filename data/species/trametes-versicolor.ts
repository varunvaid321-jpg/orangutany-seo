import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "trametes-versicolor",
  commonName: "Turkey Tail",
  scientificName: "Trametes versicolor",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Polyporales",
    family: "Polyporaceae",
    genus: "Trametes",
  },
  summary:
    "You can't eat it (it's basically leather), but Turkey Tail might be the most important medicinal mushroom on Earth. It contains PSK, an anti-cancer compound that's been an approved prescription drug in Japan since the 1970s. It's also quite possibly the most common mushroom in the world — if you've walked through any forest with dead wood, you've walked past it.",
  description:
    "Turkey Tail is the mushroom that launched a thousand supplement bottles. Those thin, fan-shaped brackets with concentric rings of brown, tan, blue, green, and white grow on dead logs and stumps across every continent except Antarctica. It's a wood-decomposer, one of nature's best recyclers, breaking down lignin in dead hardwoods and returning nutrients to the soil. You'll find it in forests, parks, backyards, woodpiles — basically anywhere there's dead wood. It fruits year-round and the tough, leathery brackets can persist for months.\n\nBut the real story is medicinal. Turkey Tail contains polysaccharopeptide (PSP) and polysaccharide K (PSK, also called krestin), which have been shown to stimulate the immune system. PSK has been used as an adjunct cancer therapy in Japan since 1977 — it's a prescription drug there, covered by insurance, prescribed alongside chemotherapy. Clinical trials have shown improved survival rates in gastric, colorectal, and lung cancers when PSK is added to standard treatment. The NIH has funded multiple studies on Turkey Tail extracts, and it remains one of the most scientifically studied mushrooms in the world.\n\nPerhaps the most famous Turkey Tail story belongs to mycologist Paul Stamets, whose mother was diagnosed with stage 4 breast cancer in 2009. Stamets prepared a Turkey Tail extract regimen for her alongside conventional treatment. Against the odds, she went into complete remission. Stamets has been open about the fact that she received standard medical care too, but the story helped catapult Turkey Tail into mainstream awareness and fueled a wave of research funding.",
  identification: {
    cap: "2-10 cm across, fan-shaped or semicircular brackets growing in overlapping clusters (like roof shingles). The surface has distinct concentric color zones — bands of brown, tan, gray, blue, green, white, and sometimes orange or reddish hues. Texture is thin, flexible when fresh, leathery and tough when dry. The surface feels velvety or slightly fuzzy, never smooth and shiny (that's a key distinguishing feature).",
    gills:
      "No gills. The underside has a pore surface — tiny round pores, about 3-8 per millimeter, white to cream colored. This is critical: if you flip it over and see a smooth surface with no pores, you're probably looking at a False Turkey Tail (Stereum ostrea).",
    stem: "None. Turkey Tail grows directly from the wood surface (sessile). There is no stem at all — the bracket attaches at one edge to the log or stump.",
  },
  habitat:
    "Dead and dying hardwood logs, stumps, fallen branches, and sometimes living trees that are already weakened. Prefers deciduous trees like oak, beech, birch, and maple, but also found on conifers. A white-rot fungus that breaks down lignin. Grows in forests, parks, gardens, woodpiles, and urban areas — basically anywhere there's dead wood.",
  season:
    "Year-round. New growth is most vigorous in fall and spring, but the tough brackets persist through winter and can be found in any month. One of the few mushrooms you can reliably find in every season.",
  range:
    "Worldwide. Found on every continent except Antarctica. Arguably the most common and widespread mushroom species on Earth. Abundant across North America, Europe, Asia, Australia, South America, and Africa.",
  lookAlikes: [
    {
      name: "False Turkey Tail (Stereum ostrea)",
      image: "lookalike-stereum-ostrea.jpg",
      distinction:
        "The most common mix-up. Looks very similar from the top — fan-shaped with concentric color zones. The giveaway is the underside: False Turkey Tail has a smooth underside with NO pores, while true Turkey Tail has tiny visible pores. If the bottom is smooth, it's not Turkey Tail.",
      externalUrl: "https://www.inaturalist.org/taxa/125429-Stereum-ostrea",
      externalSource: "iNaturalist",
    },
    {
      name: "Ochre Bracket (Trametes ochracea)",
      image: "lookalike-trametes-ochracea.jpg",
      distinction:
        "A close relative that does have pores underneath, making it harder to distinguish. Tends to have less dramatic color variation — mostly ochre, brown, and tan without the vivid blues and greens that Turkey Tail can show. Zones are less sharply defined. Some mycologists consider it a variant of Turkey Tail rather than a separate species.",
      externalUrl:
        "https://en.wikipedia.org/wiki/Trametes_ochracea",
      externalSource: "Wikipedia",
    },
    {
      name: "Hairy Bracket (Trametes hirsuta)",
      image: "lookalike-trametes-hirsuta.jpg",
      distinction:
        "Another close relative with pores underneath. Distinguished by its notably hairy/fuzzy upper surface (more so than Turkey Tail), grayish-white coloring with less distinct color zones, and thicker flesh. Generally paler and less colorful than Turkey Tail, without the vivid concentric banding.",
      externalUrl:
        "https://www.mushroomexpert.com/trametes_hirsuta.html",
      externalSource: "MushroomExpert",
    },
  ],
  edibility: "inedible",
  edibilityNote:
    "Too tough and leathery to eat as food — you'd be chewing on something with the texture of a shoe sole. However, Turkey Tail is widely consumed as a tea (simmered for hours) or in powdered supplement/extract form for its medicinal properties. PSK (polysaccharide K) extracted from Turkey Tail is an approved anti-cancer drug in Japan. Many people forage it specifically for tea. Not toxic, just not something you'd put on a plate.",
  gbifKey: 2548311,
  stories: [
    {
      title: "Paul Stamets' Mother Beats Stage 4 Cancer",
      text: "In 2009, mycologist Paul Stamets' 84-year-old mother was diagnosed with stage 4 breast cancer that had spread to her liver and other organs. Stamets, already a world-renowned mushroom researcher, prepared a Turkey Tail mycelium extract for her to take alongside her conventional Herceptin and Taxol treatments. Within a year, her tumors had shrunk dramatically. She achieved complete remission and lived cancer-free for years afterward. Stamets has always credited the combination of conventional medicine and Turkey Tail, and the story helped launch an NIH-funded clinical trial.",
      location: "Olympia, Washington, USA",
      source: "Stamets, 'Mycelium Running' and TEDx talks",
      sourceUrl: "https://www.ted.com/talks/paul_stamets_6_ways_mushrooms_can_save_the_world",
    },
    {
      title: "A $5.4 Million NIH Trial on Turkey Tail and Breast Cancer",
      text: "In 2012, researchers at the University of Minnesota and Bastyr University published results from an NIH-funded Phase I clinical trial. They gave breast cancer patients Turkey Tail extract after their radiation therapy ended and found that it enhanced immune function — specifically increasing natural killer cell activity and lymphocyte counts. The study helped validate what traditional Chinese medicine had been claiming for centuries and paved the way for larger trials.",
      location: "Seattle, Washington, USA",
      source: "Bastyr University / NIH Grant",
      sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/22314009/",
    },
    {
      title: "Flipped It Over and It Was Smooth — Not Turkey Tail",
      text: "A forager on Reddit posted a beautiful cluster of fan-shaped, colorfully banded brackets they'd harvested from an oak log to make medicinal tea. Within minutes, commenters pointed out the smooth underside visible in one photo — no pores at all. It was Stereum ostrea, the False Turkey Tail. Not harmful, but not medicinal either. The post became one of the most-cited examples of why you always flip the mushroom over.",
      location: "Online (r/mycology)",
      source: "r/mycology",
      sourceUrl: "https://www.reddit.com/r/mycology/",
    },
    {
      title: "Turkey Tail on a Park Bench in Brooklyn",
      text: "A nature blogger documented finding Turkey Tail growing on a wooden park bench in Prospect Park, Brooklyn. The bench's oak slats had started decomposing, and clusters of Turkey Tail had colonized the underside. The Parks Department replaced the bench, but the blogger's photos went mildly viral — a reminder that fungi don't care whether wood is in a forest or a city park.",
      location: "Brooklyn, New York, USA",
      source: "Urban nature blog",
    },
    {
      title: "Yun Zhi: Centuries of Use in Chinese Medicine",
      text: "In traditional Chinese medicine, Turkey Tail has been used for centuries under the name Yun Zhi (cloud mushroom). Practitioners prescribed it as a tonic for respiratory infections, liver ailments, and general immune support. When Japanese researchers isolated PSK from Turkey Tail in the 1960s and proved its immune-boosting effects in clinical trials, it was seen as modern science catching up with ancient knowledge. Japan approved PSK as a cancer treatment adjunct in 1977.",
      location: "China and Japan",
      source: "Hobbs, 'Medicinal Mushrooms' (1995)",
    },
  ],
  seoQueries: [
    "turkey tail mushroom identification",
    "turkey tail vs false turkey tail",
    "turkey tail mushroom benefits",
    "turkey tail cancer treatment",
    "PSK mushroom cancer japan",
    "how to identify turkey tail mushroom",
    "turkey tail mushroom tea",
    "trametes versicolor medicinal uses",
    "turkey tail look alikes",
    "mushroom growing on dead log",
    "colorful bracket fungus identification",
    "paul stamets turkey tail cancer",
    "turkey tail mushroom pores vs smooth",
    "can you eat turkey tail mushroom",
    "most common mushroom in the world",
  ],
  funFacts: [
    "Turkey Tail contains PSK (polysaccharide K), which has been a government-approved anti-cancer prescription drug in Japan since 1977 — one of the few mushroom-derived compounds to achieve that status.",
    "It's arguably the most common mushroom species on Earth, found on every continent except Antarctica. If there's dead wood, there's probably Turkey Tail nearby.",
    "The name 'Turkey Tail' comes from the concentric color bands on the cap that resemble a wild turkey's fanned tail feathers.",
    "In traditional Chinese medicine, it's been used for centuries under the name Yun Zhi (cloud mushroom) as an immune tonic.",
    "Turkey Tail is a white-rot fungus — it specifically breaks down lignin in wood, leaving behind pale, spongy cellulose. This decomposition process is essential for forest nutrient cycling.",
  ],
  images: [
    {
      filename: "01-top-view.jpg",
      alt: "Turkey Tail mushroom cluster showing concentric color zones on a log",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Trametes_versicolor_2025_G1.jpg",
      author: "George Chernilevsky",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    {
      filename: "02-log-cluster.jpg",
      alt: "Dense overlapping Turkey Tail brackets on a dead hardwood log",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Trametes_versicolor_-_Coriolus_versicolor_-_Polyporus_versicolor_-_Schmetterlingstramete_-_Bunte_Tramete_-_Schmetterlingsporling_-_01.jpg",
      author: "Norbert Nagel",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "03-close-up.jpg",
      alt: "Close-up of Turkey Tail showing velvety texture and color banding",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Trametes_Versicolor-20191227-RM-145922.jpg",
      author: "Ermell",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "04-stump.jpg",
      alt: "Turkey Tail mushrooms colonizing a tree stump",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Trametes_versicolor_stump.jpg",
      author: "Odinn",
      license: "CC BY-SA 2.5 CA",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.5/ca",
    },
    {
      filename: "05-bear-creek.jpg",
      alt: "Turkey Tail bracket fungi with vivid color zones at Bear Creek",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Trametes_versicolor_Bear_Creek.jpg",
      author: "Kimikel",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
  ],
  identificationImages: {
    cap: "cap-detail.jpg",
    gills: "pores-detail.jpg",
  },
};

export default species;
