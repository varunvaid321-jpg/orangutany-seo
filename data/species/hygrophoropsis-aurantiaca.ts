import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "hygrophoropsis-aurantiaca",
  commonName: "False Chanterelle",
  scientificName: "Hygrophoropsis aurantiaca",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Boletales",
    family: "Hygrophoropsidaceae",
    genus: "Hygrophoropsis",
  },
  summary:
    "The mushroom that tricks chanterelle hunters. The False Chanterelle is an orange, funnel-shaped fungus with thin, crowded, true gills that grows on rotting wood and conifer debris — a convincing imitation of the prized Golden Chanterelle, but one that falls apart under close inspection. Generally considered edible but causes stomach upset in some people.",
  description:
    "Every autumn, hopeful foragers find what they think is a golden chanterelle, only to discover they've been duped by Hygrophoropsis aurantiaca — the False Chanterelle. From a distance, the resemblance is convincing: orange cap, funnel shape, similar size and habitat. But pick one up and the differences become clear.\n\nThe most important distinction is the gills. Real chanterelles have thick, forking, ridge-like false gills that look like they were sculpted from the same flesh as the cap. The False Chanterelle has thin, crowded, blade-like TRUE gills — the same type you'd see on a button mushroom. They're finer, more numerous, often forked, and a deeper orange than the cap. This gill difference alone is enough to separate the two species with confidence.\n\nHabitat provides the second clue. Chanterelles are mycorrhizal — they grow from the ground in partnership with living tree roots. The False Chanterelle is saprotrophic — it feeds on dead organic matter, typically growing directly on or very near rotting conifer wood, pine needle duff, or woodchip mulch. Finding your 'chanterelle' sprouting from a decaying stump is a strong hint you've got the wrong species.\n\nThe edibility question is complicated. Hygrophoropsis aurantiaca was long listed as mildly toxic in older field guides, but the current consensus is that it's edible, just not very good. The flavor is bland compared to real chanterelles, and some people experience gastrointestinal discomfort after eating it. It won't kill you, but it won't impress your dinner guests either. The real danger isn't the False Chanterelle itself — it's that inexperienced foragers who can't tell chanterelles from false chanterelles might also confuse them with the truly toxic Jack O'Lantern mushroom (Omphalotus olearius), which causes severe vomiting.",
  identification: {
    cap: "2–8 cm across. Convex when young, becoming flat then funnel-shaped (infundibuliform) with a wavy, often irregular margin. Orange to deep orange-yellow, sometimes with brownish tones toward the center. Surface is dry, finely felty or suede-like. Thinner and more flexible than a true chanterelle cap.",
    gills:
      "TRUE gills — thin, crowded, blade-like, repeatedly forking. Deep orange, often darker than the cap. Decurrent (running down the stem). This is THE key distinction from chanterelles, which have thick, blunt, ridge-like false gills.",
    stem: "3–6 cm tall, 0.5–1 cm thick. Slender, often curved or eccentric. Same color as cap or slightly paler. Solid becoming hollow. Often darkening toward the base. No ring.",
    sporePrint: "White to pale yellowish.",
    odor: "Faintly mushroomy, not fruity or apricot-like (chanterelles have a distinctive fruity aroma).",
  },
  habitat:
    "Saprotrophic — grows on decaying conifer wood, pine needle duff, woodchip mulch, sawdust piles, and well-rotted stumps. Found in coniferous and mixed forests, plantations, parks, and gardens with conifer mulch. Unlike chanterelles, it does NOT grow from the ground via mycorrhizal roots.",
  season:
    "Late summer through late autumn, typically August through November. Can appear earlier in wet summers. Peak season is September–October across most of its range.",
  range:
    "Widespread across Europe, North America, and temperate Asia. Common wherever conifers grow. One of the most frequently encountered look-alikes in chanterelle habitats throughout the Northern Hemisphere.",
  lookAlikes: [
    {
      name: "Golden Chanterelle (Cantharellus cibarius)",
      slug: "cantharellus-cibarius",
      image: "lookalike-cibarius.jpg",
      distinction:
        "The prized original that the False Chanterelle imitates. Golden Chanterelle has thick, blunt, ridge-like FALSE gills (not thin blade gills), firmer and thicker flesh, a fruity apricot-like aroma, and grows from the ground via mycorrhizal roots — never on rotting wood. The false gills vs. true gills difference is the single most reliable field character.",
      externalUrl:
        "https://en.wikipedia.org/wiki/Cantharellus_cibarius",
      externalSource: "Wikipedia",
    },
    {
      name: "Jack O'Lantern (Omphalotus olearius)",
      slug: "omphalotus-olearius",
      image: "lookalike-olearius.jpg",
      distinction:
        "TOXIC — causes severe vomiting and diarrhea. Much larger than the False Chanterelle (caps 6–20 cm), grows in dense clusters on wood (often at the base of oak trees), and has a brighter uniform orange color. The gills glow faintly green in the dark (bioluminescence). Not fatal but will make you extremely ill.",
      externalUrl:
        "https://en.wikipedia.org/wiki/Omphalotus_olearius",
      externalSource: "Wikipedia",
    },
    {
      name: "Pacific Chanterelle (Cantharellus formosus)",
      slug: "cantharellus-formosus",
      image: "lookalike-formosus.jpg",
      distinction:
        "The Pacific Northwest's premier chanterelle. Like all true chanterelles, it has false gills (blunt ridges, not thin blades), firmer flesh, and grows from the ground as a mycorrhizal partner with Douglas fir. Tends to be paler yellow-orange than C. cibarius. A choice edible — worth distinguishing from the False Chanterelle with certainty.",
      externalUrl:
        "https://en.wikipedia.org/wiki/Cantharellus_formosus",
      externalSource: "Wikipedia",
    },
  ],
  edibility: "edible-with-caution",
  edibilityNote:
    "Generally considered edible but causes gastrointestinal upset (nausea, cramps) in some people. Older field guides listed it as mildly toxic; the current view is that it's harmless for most people but not worth the bother — the flavor is bland compared to true chanterelles. Always cook thoroughly. The greater risk is confusion with the truly toxic Jack O'Lantern mushroom, which beginners sometimes mistake for both chanterelles and false chanterelles.",
  gbifKey: 2525710,
  stories: [
    {
      title: "The Chanterelle Hunter's Rite of Passage",
      text: "Ask any experienced chanterelle forager about False Chanterelles and they'll smile knowingly. Getting fooled by Hygrophoropsis aurantiaca at least once is practically a rite of passage. The moment you get home, slice one open, see the thin gills and limp flesh, and realize you don't have chanterelles — that's the lesson that sticks. After that, you never confuse them again.",
      location: "Foraging communities worldwide",
      source: "Mushroom foraging folklore",
    },
    {
      title: "The Woodchip Garden Surprise",
      text: "False Chanterelles regularly appear in suburban gardens where conifer bark mulch has been spread. Homeowners who've never seen a mushroom before occasionally post excited photos on social media claiming to have found chanterelles in their front yard. The replies gently redirect them: chanterelles don't grow in woodchip mulch, but False Chanterelles love it.",
      location: "Suburban gardens worldwide",
      source: "r/mycology",
      sourceUrl: "https://www.reddit.com/r/mycology/",
    },
    {
      title: "Reclassified Into Its Own Family",
      text: "Hygrophoropsis aurantiaca was bounced around taxonomically for decades before landing in its own family, Hygrophoropsidaceae. Despite looking like a chanterelle (order Cantharellales), molecular analysis placed it firmly in the Boletales — meaning it's more closely related to porcini and boletes than to the mushroom it imitates. Convergent evolution at its finest.",
      location: "Taxonomic history",
      source: "Mycologia journal",
    },
    {
      title: "The Smell Test",
      text: "Experienced foragers in France use the 'sniff test' to separate chanterelles from impostors. Real chanterelles (girolles) have a distinctive fruity, apricot-like aroma that's immediately recognizable once you've learned it. The False Chanterelle smells like... a generic mushroom. Nothing special. That missing fragrance is one of the quickest field tests.",
      location: "France",
      source: "French foraging traditions",
    },
    {
      title: "A Bolete in Disguise",
      text: "Despite having gills and looking nothing like a bolete, Hygrophoropsis aurantiaca is classified in the order Boletales. This placement was controversial until DNA evidence confirmed it. The species represents an evolutionary lineage where a bolete ancestor independently evolved gills — a stunning example of convergent evolution with the typical gilled mushrooms.",
      location: "Evolutionary biology",
      source: "Fungal phylogenetics research",
    },
  ],
  seoQueries: [
    "false chanterelle identification",
    "false chanterelle vs real chanterelle",
    "hygrophoropsis aurantiaca edible",
    "how to tell false chanterelle",
    "false chanterelle look alikes",
    "orange mushroom on rotting wood",
    "false chanterelle gills vs chanterelle",
    "is false chanterelle poisonous",
    "false chanterelle vs jack o lantern",
    "false chanterelle habitat",
    "orange funnel shaped mushroom",
    "hygrophoropsis aurantiaca vs cantharellus",
    "false chanterelle season",
    "can you eat false chanterelles",
    "chanterelle identification tips gills",
  ],
  funFacts: [
    "Despite looking like a gilled mushroom, the False Chanterelle is classified in the order Boletales — the same order as porcini. DNA evidence shows it evolved gills independently from other gilled mushrooms, making it a textbook case of convergent evolution.",
    "The quickest way to tell a False Chanterelle from a real one: flip it over. True chanterelles have thick, blunt, ridge-like false gills that look sculpted from the cap flesh. The False Chanterelle has thin, crowded, blade-like true gills — the kind you'd see on a supermarket mushroom.",
    "False Chanterelles love woodchip mulch. If you find 'chanterelles' growing in your garden's bark mulch or near a decorative conifer, they're almost certainly Hygrophoropsis aurantiaca — real chanterelles grow from the ground via mycorrhizal tree roots, never on mulch.",
    "The False Chanterelle was considered mildly toxic for decades before being reclassified as edible. The reputation shift happened as more people ate it without incident, though it still causes stomach upset in a subset of people — nobody is quite sure why.",
    "Real chanterelles have a distinctive fruity, apricot-like smell. False Chanterelles smell like nothing special — just a generic mushroomy odor. Once you've learned the chanterelle's perfume, the absence of that scent in the False Chanterelle becomes immediately obvious.",
  ],
  images: [
    {
      filename: "01-classic.jpg",
      alt: "False Chanterelle (Hygrophoropsis aurantiaca) showing orange funnel-shaped cap near Nagel, Germany",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Falscher_Pfifferling_(Hygrophoropsis_aurantiaca)_nahe_der_Silberquelle_an_der_Stra%C3%9Fe_vom_Silberhaus_nach_Nagel.jpg",
      author: "Stefan Diller",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "02-gills.jpg",
      alt: "False Chanterelle showing thin crowded true gills, the key distinguishing feature from real chanterelles",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:False_Chanterelle_Hygrophoropsis_aurantiaca.jpg",
      author: "Holger Krisp",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
    {
      filename: "03-variety.jpg",
      alt: "Hygrophoropsis aurantiaca var. rufa showing orange-brown coloration in forest setting",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Hygrophoropsis-aurantiaca-falscher-pfifferling.jpg",
      author: "Holger Krisp",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
    {
      filename: "04-rufa.jpg",
      alt: "Hygrophoropsis rufa variety showing darker rufous-brown cap and orange gills",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Hygrophoropsis_rufa_syn_Hygrophoropsis_aurantiaca_var._rufa.jpg",
      author: "Holger Krisp",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
    {
      filename: "05-habitat.jpg",
      alt: "Hygrophoropsis aurantiaca growing on forest floor among conifer needles",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Hygrophoropsis_aurantiaca.jpg",
      author: "W.J.Pilsak",
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
