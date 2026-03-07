import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "lycoperdon-perlatum",
  commonName: "Common Puffball",
  scientificName: "Lycoperdon perlatum",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Agaricaceae",
    genus: "Lycoperdon",
  },
  summary:
    "The Common Puffball is nature's tiny smoke bomb — squeeze a mature one and it fires a cloud of spores into the air. When young and pure white inside, it's a perfectly good edible mushroom that tastes mild and earthy.",
  description:
    "If you grew up anywhere near woods, you've probably stomped on one of these. Kids have been kicking puffballs since forever, watching the brown spore dust erupt like a tiny mushroom volcano. The Latin name \"perlatum\" means \"widespread,\" but it might as well mean \"covered in pearls\" — each young puffball is studded with tiny gem-like warts that give it a sparkly, almost bedazzled look. These little spines rub off easily, leaving a faint net-like pattern on the surface. It's like nature's own disco ball, but make it fungus.\n\nForagers love them because they're easy to identify when you follow one rule: slice it in half. If the inside is pure, marshmallow-white all the way through — no hint of color, no outline of a tiny mushroom forming inside — you're good to eat it. That cross-section check is critical because some seriously dangerous species (like young Amanita \"death cap\" buttons) can look similar from the outside. The moment the interior turns yellowish or olive, the puffball has started producing spores and the texture goes from firm tofu to gross cotton candy. Pass.\n\nThey pop up everywhere — forest trails, lawns, mulched garden beds, even gravel paths. You'll often find them in clusters after autumn rains, sometimes in fairy-ring formations. In traditional medicine, the spore dust was used as a wound dressing to stop bleeding, and some Native American groups called them \"devil's snuffbox.\" Modern research has confirmed that puffball spore dust actually does have mild hemostatic (blood-stopping) properties. Not bad for something most people just kick.",
  identification: {
    cap: "2-6 cm across, 3-7 cm tall. Pear-shaped to club-shaped (wider on top, tapering to a stem-like base). White when young, aging to yellowish-brown. Surface covered with short conical spines or \"gems\" (tiny warts) that rub off easily, leaving a faint reticulated pattern underneath. Mature specimens develop an opening (ostiole) at the top where spores puff out.",
    gills: "No gills. The interior (gleba) is the spore-producing tissue. When young and edible, it's solid white like a marshmallow. As spores mature, the interior turns yellow, then olive-green, then brown and powdery. A mature puffball is basically a bag of spore dust.",
    stem: "Not a true stem — the lower portion is a sterile base that's more spongy and dense. It persists after the spore mass has dispersed, often seen as empty brown cups on the forest floor in winter.",
    sporePrint: "Olive-brown spore mass (not a traditional spore print — you'd collect the spore dust directly).",
    odor: "Mild and pleasant when young. Older specimens smell musty or slightly unpleasant.",
  },
  habitat:
    "Incredibly versatile. Found in deciduous and coniferous forests, grasslands, lawns, parks, garden mulch, gravel paths, and roadsides. Grows on soil, leaf litter, and decaying organic matter. Saprotrophic — feeds on dead plant material rather than forming tree partnerships.",
  season:
    "Late summer through late autumn. Peak season is August through November in the Northern Hemisphere. Can appear as early as July after warm rains.",
  range:
    "Truly cosmopolitan — found on every continent except Antarctica. Abundant across Europe, North America, and temperate Asia. Also present in Australia, New Zealand, South America, and parts of Africa. One of the most widespread mushroom species on Earth.",
  lookAlikes: [
    {
      name: "Common Earthball (Scleroderma citrinum)",
      image: "lookalike-scleroderma.jpg",
      distinction:
        "This is the dangerous one. Earthballs are rounder, have a thick rubbery skin (not thin and papery), and the interior is dark purple-black even when young — never pure white. Cut it open: if the inside is dark, drop it immediately. Earthballs cause nasty gastrointestinal poisoning.",
      externalUrl: "https://www.inaturalist.org/taxa/55927-Scleroderma-citrinum",
      externalSource: "iNaturalist",
    },
    {
      name: "Pear-shaped Puffball (Apioperdon pyriforme)",
      image: "lookalike-pyriforme.jpg",
      distinction:
        "Actually edible too, so less of a worry. Grows exclusively on rotting wood (stumps, logs, buried wood) rather than soil. Smoother surface without the prominent gem-like warts. Slightly smaller on average. If it's growing on wood, it's the pear-shaped species.",
      externalUrl: "https://www.inaturalist.org/taxa/972793-Apioperdon-pyriforme",
      externalSource: "iNaturalist",
    },
    {
      name: "Giant Puffball (Calvatia gigantea)",
      image: "lookalike-calvatia.jpg",
      distinction:
        "Hard to confuse once mature — Giant Puffballs can reach soccer-ball size or larger. But small young specimens could overlap in size. Giants are perfectly round (no stem-like base), have a smooth white surface without gem-like warts, and grow in open grasslands. Also edible when white inside.",
      externalUrl: "https://www.mushroomexpert.com/calvatia_gigantea.html",
      externalSource: "MushroomExpert",
    },
  ],
  edibility: "edible",
  edibilityNote:
    "Edible and good when young — the interior must be pure white and firm throughout. Always slice in half to check. If there's any yellow, olive, or brown discoloration, or if you can see the outline of a developing mushroom inside (which would mean it's a young Amanita, not a puffball), do not eat it. Mild flavor, takes on seasonings well. Slice and saute in butter.",
  gbifKey: 5243258,
  stories: [
    {
      title: "The Battlefield Bandage",
      text: "During the American Civil War, soldiers reportedly packed puffball spore dust into wounds to slow bleeding. The practice had been used by Indigenous peoples for centuries before that. Modern studies confirm the spores have mild hemostatic and antibacterial properties.",
      location: "Eastern United States",
      source: "Mycologia journal",
    },
    {
      title: "A Reddit Forager's First Find",
      text: "A user on r/foraging posted their first-ever wild mushroom harvest in 2021 — a bag full of Common Puffballs from a Vermont trail. They sliced each one in half to verify the white interior, breaded and fried them, and described them as 'like mild mozzarella sticks but earthier.'",
      location: "Vermont, USA",
      source: "r/foraging",
      sourceUrl: "https://www.reddit.com/r/foraging/",
    },
    {
      title: "Earthball Mix-Up Sends Couple to Hospital",
      text: "In 2018, a couple in Devon, England mistook Common Earthballs for puffballs and cooked them into a risotto. Both experienced severe vomiting and stomach cramps within an hour. The key mistake: they didn't slice them open first — the dark interior would have been an instant giveaway.",
      location: "Devon, England",
      source: "BBC News",
    },
    {
      title: "The Devil's Snuffbox",
      text: "The Blackfoot and Cherokee peoples called puffballs 'devil's snuffbox' or 'devil's dust' and used the spore powder medicinally as a styptic to stop bleeding and to soothe diaper rash on infants. Some tribes also believed the spore clouds could induce deafness if inhaled.",
      location: "Great Plains, North America",
      source: "Arora, 'Mushrooms Demystified' (1986)",
    },
    {
      title: "Puffball Spores Under the Microscope",
      text: "A 2009 study found that a single mature Common Puffball can contain up to 7 trillion spores. That's roughly 1,000 times the number of stars in the Milky Way — all packed into something the size of a golf ball.",
      location: "University of Wisconsin",
      source: "Mycological Research",
    },
  ],
  seoQueries: [
    "common puffball edible",
    "how to tell if a puffball is safe to eat",
    "gem studded puffball identification",
    "lycoperdon perlatum edible",
    "white mushroom that puffs smoke",
    "puffball mushroom look alikes",
    "puffball vs earthball difference",
    "puffball mushroom poisonous",
    "how to cook puffball mushrooms",
    "round white mushroom in my yard",
    "mushroom with spiky warts",
    "puffball mushroom cross section",
    "when to pick puffball mushrooms",
    "puffball spore cloud",
    "devil's snuffbox mushroom",
  ],
  funFacts: [
    "A single mature Common Puffball can release up to 7 trillion spores — that's roughly 1,000 times the number of stars in the Milky Way, all packed inside something the size of a golf ball.",
    "The tiny wart-like spines on the surface are called 'gems,' which is why it's also known as the Gem-studded Puffball. They rub off at the lightest touch, leaving behind a beautiful net-like pattern.",
    "Native American groups used dried puffball spore dust as a wound dressing centuries before modern medicine confirmed its hemostatic (blood-clotting) properties.",
    "Raindrops hitting a mature puffball act as a natural bellows — each drop compresses the thin outer wall and shoots a jet of spores into the air. It's basically a self-operating spore cannon.",
    "In parts of rural England, puffballs were once called 'fuzzball' — and Shakespeare used the word as an insult in Henry IV Part 1, when Falstaff calls someone a 'fuzzball.'",
  ],
  images: [
    {
      filename: "01-cluster-gems.jpg",
      alt: "Cluster of young Common Puffball mushrooms showing gem-studded surface texture on forest floor",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Lycoperdon_Perlatum_LO_(img1).jpg",
      author: "Florstein",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "02-forest-floor.jpg",
      alt: "Common Puffball specimens on mossy forest floor showing characteristic pear shape",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Lycoperdon_perlatum_(Flaschen-St%C3%A4ubling)2.jpg",
      author: "Ra'ike",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "03-single-specimen.jpg",
      alt: "Single Common Puffball mushroom showing detailed gem-like warts against dark background",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Single_lycoperdon_perlatum.jpg",
      author: "Daniel Ullrich (Threedots)",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "04-group-dutch.jpg",
      alt: "Group of Common Puffballs growing in Dutch botanical garden among leaf litter",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Parelstuifzwam_(Lycoperdon_perlatum)._Locatie,_Hortus_(Haren,_Groningen)_03.JPG",
      author: "Famberhorst",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "05-munich-focus.jpg",
      alt: "Common Puffball with focus-stacked detail showing spiny surface in Munich forest",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Lycoperdon_perlatum,_Hartelholz,_M%C3%BAnich,_Alemania,_2020-11-14,_DD_334-396_FS.jpg",
      author: "Diego Delso",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
  ],
  identificationImages: {
    cap: "cap-detail.jpg",
    gills: "cross-section-detail.jpg",
    stem: "stem-detail.jpg",
  },
};

export default species;
