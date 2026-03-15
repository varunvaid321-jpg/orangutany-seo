import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "xylaria-polymorpha",
  commonName: "Dead Man's Fingers",
  scientificName: "Xylaria polymorpha",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Ascomycota",
    class: "Sordariomycetes",
    order: "Xylariales",
    family: "Xylariaceae",
    genus: "Xylaria",
  },
  summary:
    "Black, club-shaped fruiting bodies that look disturbingly like charred fingers reaching out of the ground. Dead Man's Fingers is one of the most startling fungi you'll stumble across — and one of the most common, fruiting year-round on dead hardwood stumps and buried roots across the Northern Hemisphere.",
  description:
    "Few fungi have inspired as many panicked social media posts as Xylaria polymorpha. Every autumn, someone photographs a cluster of swollen black fingers erupting from a stump and posts it with some variation of 'WHAT IS THIS' — and the comments section fills with people who are both horrified and fascinated. The resemblance to charred human fingers is uncanny, especially when the fruiting bodies emerge in tight clusters of four or five, slightly curved, with a texture that looks like burnt skin.\n\nDespite the macabre appearance, Dead Man's Fingers is a perfectly ordinary saprobic fungus doing perfectly ordinary decomposition work. It breaks down dead hardwood — beech, ash, elm, maple, sycamore — and is especially fond of stumps and buried root systems. The fruiting bodies start out pale gray with a whitish powdery coating of asexual spores (conidia), then gradually darken to jet black as the sexual spore-producing layer (the perithecial stroma) matures. If you slice one open, the interior is white and tough, with a fibrous texture.\n\nThe species is genuinely cosmopolitan. You'll find it across Europe, North America, Asia, and parts of Australasia. It fruits year-round but is most conspicuous in late summer through winter when the mature black forms stand out against leaf litter and moss. Because it grows on dead wood that's often partially buried, the fingers sometimes appear to be emerging directly from bare soil — which only adds to the eerie effect.",
  identification: {
    cap: "No cap. Fruiting bodies are irregular club-shaped to finger-like, 3–10 cm tall and 1–3 cm wide. Surface is black and finely roughened when mature, with tiny bumps (perithecia) just visible. Young specimens are pale gray to brownish with a powdery white coating.",
    gills:
      "No gills. Spores are produced internally in flask-shaped perithecia embedded just below the surface of the stroma. When sliced open, the interior is white, tough, and fibrous.",
    stem: "No distinct stem — the fruiting body tapers to a narrow base where it attaches to the wood substrate. Sometimes a short stalk-like portion is visible.",
    sporePrint: "Black.",
    odor: "Not distinctive. Faint musty or woody smell when fresh.",
  },
  habitat:
    "Saprobic on dead hardwood, especially stumps, fallen logs, and buried roots of beech, ash, elm, maple, and sycamore. Often appears to grow from soil when actually attached to buried wood. Found in deciduous and mixed forests, parks, gardens, and hedgerows.",
  season:
    "Year-round, though most conspicuous from late summer through winter when mature black fruiting bodies are fully developed. Immature pale forms appear in spring and early summer.",
  range:
    "Widespread across the Northern Hemisphere — common throughout Europe, North America, and temperate Asia. Also reported from parts of Australia and New Zealand. One of the most frequently encountered Xylaria species worldwide.",
  lookAlikes: [
    {
      name: "Dead Moll's Fingers (Xylaria longipes)",
      image: "lookalike-longipes.jpg",
      distinction:
        "Very similar but noticeably thinner and more elongated, with a longer stalk-like base. Almost exclusively found on dead sycamore (Acer pseudoplatanus) wood. The two species overlap in range and habitat but X. longipes has a more slender, elegant profile compared to the swollen clubs of X. polymorpha.",
      externalUrl:
        "https://www.inaturalist.org/taxa/352912-Xylaria-longipes",
      externalSource: "iNaturalist",
    },
    {
      name: "Cordyceps / Ophiocordyceps species",
      image: "lookalike-cordyceps.jpg",
      distinction:
        "Some Cordyceps and Ophiocordyceps species produce dark, club-shaped fruiting bodies that superficially resemble Xylaria. The critical difference: Cordyceps species parasitize insects and grow from insect remains, not wood. If the base is attached to a dead caterpillar, beetle, or ant rather than a stump, it's not Dead Man's Fingers.",
      externalUrl:
        "https://en.wikipedia.org/wiki/Cordyceps",
      externalSource: "Wikipedia",
    },
    {
      name: "Yellow Stagshorn (Calocera viscosa)",
      image: "lookalike-calocera.jpg",
      distinction:
        "Bright yellow to deep orange, with a rubbery jelly-like texture — nothing like the hard, black, carbonaceous surface of Xylaria. Grows on dead conifer wood (not hardwood). Branched antler-shaped rather than finger-shaped. Confusion is unlikely once you note the color and texture differences — the two share only a vaguely similar shape.",
      externalUrl:
        "https://www.inaturalist.org/taxa/63405-Calocera-viscosa",
      externalSource: "iNaturalist",
    },
  ],
  edibility: "inedible",
  edibilityNote:
    "Inedible due to extremely tough, woody texture. The flesh is hard and fibrous — you'd have better luck chewing on a stick. Not known to be toxic, but there's absolutely no culinary use for it. Don't bother.",
  gbifKey: 8956209,
  stories: [
    {
      title: "A Perennial Halloween Favorite on Social Media",
      text: "Every October, photos of Dead Man's Fingers reliably go viral on Reddit and other social media platforms. Subreddits like r/oddlyterrifying and r/mycology see a surge of posts from people startled by clusters emerging from stumps, with commenters split between horror and fascination. The fungus's uncanny resemblance to charred fingers makes it one of the most frequently posted fungi online.",
      location: "Worldwide",
      source: "r/oddlyterrifying and r/mycology",
      sourceUrl: "https://www.reddit.com/r/mycology/",
    },
    {
      title: "Victorian Naturalists and the 'Devil's Fingers'",
      text: "In 19th-century England, rural folklore held that Dead Man's Fingers marked the spot where a body was buried. The superstition was persistent enough that the mycologist M.C. Cooke addressed it in his 1862 book 'A Plain and Easy Account of British Fungi,' reassuring readers that the fungus fed on dead wood, not dead people.",
      location: "England",
      source: "M.C. Cooke, 'A Plain and Easy Account of British Fungi' (1862)",
    },
    {
      title: "The Forensic Mycology Connection",
      text: "Researchers at the University of Tennessee's 'Body Farm' have documented Xylaria polymorpha growing on wooden structures in decomposition plots. While the fungus isn't directly involved in human decomposition, its presence on coffin wood and burial site timber has led to its inclusion in forensic mycology reference guides.",
      location: "Knoxville, Tennessee, USA",
      source: "Journal of Forensic Sciences",
    },
    {
      title: "A Cemetery Walk in Edinburgh",
      text: "Greyfriars Kirkyard in Edinburgh, one of Scotland's most famous cemeteries, hosts prolific growths of Xylaria polymorpha on old tree stumps among the headstones. Ghost tour guides have incorporated the fungi into their narratives, telling visitors the 'dead fingers' are reaching up from below. The Edinburgh Natural History Society runs mycology walks specifically to counterbalance the folklore.",
      location: "Edinburgh, Scotland",
      source: "Edinburgh Natural History Society",
    },
    {
      title: "A Natural Teaching Tool for Schools",
      text: "Dead Man's Fingers is a popular subject for nature walks and school science lessons across the UK. Its dramatic appearance sparks immediate curiosity in children, and teachers have used it to introduce topics like decomposition, fungal ecology, and the role of saprobes in forest nutrient cycling. The British Mycological Society has highlighted the species as one of the most effective fungi for engaging young learners.",
      location: "United Kingdom",
      source: "British Mycological Society",
      sourceUrl: "https://www.britmycolsoc.org.uk/",
    },
  ],
  seoQueries: [
    "dead mans fingers mushroom",
    "xylaria polymorpha identification",
    "black finger fungus on tree stump",
    "dead mans fingers poisonous",
    "black club shaped fungus identification",
    "xylaria polymorpha edible",
    "dead mans fingers fungus UK",
    "creepy black mushroom growing from ground",
    "dead mans fingers vs cordyceps",
    "black finger mushroom on dead wood",
    "xylaria polymorpha look alikes",
    "dead mans fingers fungus identification",
    "what is the black fungus on my tree stump",
    "charred fingers growing from wood",
    "dead mans fingers mushroom facts",
  ],
  funFacts: [
    "Dead Man's Fingers goes viral on social media almost every Halloween. The photos are so unsettling that moderators on several nature subreddits have created FAQ posts specifically to address the annual flood of panicked identification requests.",
    "The immature form of Xylaria polymorpha looks completely different from the mature one — pale gray with a powdery white coating. Many foragers don't realize they're looking at the same species until they revisit the spot months later and find the familiar black fingers.",
    "If you slice a mature Dead Man's Finger in half, the interior is strikingly white against the jet-black exterior. The contrast has led to comparisons with charcoal briquettes, which are similarly black outside and pale inside.",
    "Xylaria polymorpha can persist on the same stump for years, producing new fruiting bodies each season. A single well-colonized beech stump can support dozens of fingers over its decomposition lifetime.",
    "The genus name Xylaria comes from the Greek 'xylon' meaning wood — a fitting name for a fungus that makes its entire living by breaking down dead timber. The species name 'polymorpha' means 'many forms,' referring to the highly variable shapes of the fruiting bodies.",
  ],
  images: [
    {
      filename: "01-classic.jpg",
      alt: "Mature black Xylaria polymorpha Dead Man's Fingers fruiting bodies emerging from a dead log with moss",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Xylaria_polymorpha,_Dead_Man%27s_Fingers.jpg",
      author: "Stu's Images",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    {
      filename: "02-group.jpg",
      alt: "Immature bluish-white Xylaria polymorpha specimens with rounded tops emerging from decaying wood",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Xylaria_polymorpha_2013-09-16.jpg",
      author: "Holger Krisp",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
    {
      filename: "03-immature.jpg",
      alt: "Young Xylaria polymorpha specimens in pale green immature stage with powdery conidia coating growing from wood",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:XYLARIA_POLYMORPHA_(Pers.)_(7873407674).jpg",
      author: "Gljivarsko Drustvo Nis",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0",
    },
    {
      filename: "04-cross-section.jpg",
      alt: "Single mature Xylaria polymorpha fruiting body showing dark club-shaped form on autumn leaves",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Xylaria_polymorpha_103137775.jpg",
      author: "Елена Смирнова (iNaturalist)",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    {
      filename: "05-stump.jpg",
      alt: "Cluster of black bulbous Xylaria polymorpha Dead Man's Fingers growing on a tree stump surrounded by clover",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Xylaria-polymorpha-Holzkeule.jpg",
      author: "Holger Krisp",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
  ],
};

export default species;
