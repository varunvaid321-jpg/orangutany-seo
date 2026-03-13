import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "cortinarius-vanduzerensis",
  commonName: "Van Duzer's Cortinarius",
  scientificName: "Cortinarius vanduzerensis",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Cortinariaceae",
    genus: "Cortinarius",
  },
  summary:
    "A striking Pacific Northwest webcap with a slimy chestnut-brown cap and a vivid violet stem. Found almost exclusively in old-growth and mature conifer forests west of the Cascades, this mycorrhizal species is one of the most photogenic Cortinarius in North America — and one of the easiest to identify in its genus.",
  description:
    "Cortinarius vanduzerensis is a showstopper among webcaps. Where most Cortinarius species are frustratingly similar shades of brown, this one announces itself with a glossy, viscid chestnut cap sitting atop a stem washed in striking violet-lilac. The combination is so distinctive that experienced Pacific Northwest foragers can call it from across a trail.\n\nThe species was described in 1972 by Alexander H. Smith and James M. Trappe, who named it after the Van Duzer Corridor — a wind gap in Oregon's Coast Range between the Willamette Valley and the Pacific coast. It's a fitting name for a mushroom so tied to the wet, moss-draped forests of the Pacific Northwest. You'll find it growing singly or in scattered groups under Sitka spruce, western hemlock, and Douglas fir, often in deep duff beside rotting logs.\n\nLike all Cortinarius, this species has a cortina — a cobweb-like partial veil that stretches from the cap margin to the stem in young specimens and leaves rusty-brown spore deposits on the upper stem as it tears away. The gills start out pale violet-brown and darken to a rich cinnamon-rust as the spores mature. The cap surface is covered in a thick glutinous layer that becomes extremely slimy in the wet conditions this mushroom prefers.\n\nDespite its beauty, Cortinarius vanduzerensis is not considered edible. The genus Cortinarius contains some of the deadliest mushrooms on the planet — species like C. rubellus and C. orellanus produce orellanine, a toxin that can cause irreversible kidney failure days after ingestion. While C. vanduzerensis is not known to contain orellanine, no Cortinarius should ever be eaten without expert-level identification confidence. The safe approach is to admire this species and leave it in the forest.",
  identification: {
    cap: "5–12 cm across. Convex when young, expanding to broadly convex or nearly flat with age. Surface extremely viscid to glutinous when moist, glossy when dry. Color rich chestnut-brown to dark tawny-brown, sometimes with an olive tinge. Margin incurved when young with cortina remnants.",
    gills:
      "Attached (adnate to slightly emarginate). Moderately close. Young gills pale violet-brown or lavender-tinged, maturing to cinnamon-brown and finally dark rusty-brown as spores ripen. Edges slightly uneven.",
    stem: "6–12 cm tall, 1.5–3 cm thick. Solid, club-shaped to equal. Surface dry, fibrillose. Upper portion strikingly violet to lilac, fading to pale lavender below. Cortina zone on upper stem collects rusty-brown spore deposits. Base sometimes slightly bulbous.",
    sporePrint: "Rusty brown.",
    odor: "Mild, slightly earthy or fungal. Not distinctive.",
  },
  habitat:
    "Mycorrhizal with conifers, especially Sitka spruce (Picea sitchensis), western hemlock (Tsuga heterophylla), and Douglas fir (Pseudotsuga menziesii). Found in old-growth and mature second-growth conifer forests in moist, coastal environments. Prefers deep duff, mossy ground, and the edges of rotting logs. Strictly a Pacific Northwest species.",
  season:
    "Late September through December. Peak fruiting in October and November during the heavy fall rains. May appear as early as late August in especially wet years.",
  range:
    "Restricted to the Pacific coast of North America, from southern British Columbia through Washington and Oregon to northern California. Most common west of the Cascade Range in the coastal fog belt. Rare inland. Not found outside western North America.",
  lookAlikes: [
    {
      name: "Deadly Webcap (Cortinarius rubellus)",
      slug: "cortinarius-rubellus",
      distinction:
        "DEADLY. Cortinarius rubellus is a slender, dry, orange-brown to tawny European species that lacks the slimy cap and violet stem of C. vanduzerensis. Contains orellanine, causing irreversible kidney failure. Found primarily in Europe under conifers — extremely rare in the Pacific Northwest. Much smaller and drier than C. vanduzerensis.",
    },
    {
      name: "Fool's Webcap (Cortinarius orellanus)",
      slug: "cortinarius-orellanus",
      distinction:
        "DEADLY. Another orellanine-containing species. Dry, fibrillose orange-brown cap with no slime layer. Yellow to orange gills, no violet on the stem. Strictly European, associated with broadleaf trees (especially oak and beech). Unlikely to be encountered in the Pacific Northwest.",
    },
    {
      name: "Cortinarius clandestinus",
      distinction:
        "A similar slimy-capped Pacific Northwest Cortinarius that also has violet tones on the stem. Distinguished by its paler, more yellowish-brown cap, more slender stature, and association with different microhabitats. Expert-level microscopy may be needed for certain specimens.",
      externalUrl:
        "https://www.inaturalist.org/taxa/130041-Cortinarius-clandestinus",
      externalSource: "iNaturalist",
    },
    {
      name: "Cortinarius salor",
      distinction:
        "A European species with a bluish-violet slimy cap and violet stem. Distinguished by the overall violet-blue coloration of the cap rather than chestnut-brown. Not found in North America. Sometimes confused in photographs but easily separated by cap color and geography.",
      externalUrl:
        "https://www.inaturalist.org/taxa/332482-Cortinarius-salor",
      externalSource: "iNaturalist",
    },
  ],
  edibility: "inedible",
  edibilityNote:
    "Not recommended for consumption. While Cortinarius vanduzerensis is not known to produce orellanine or other Cortinarius toxins, the genus contains some of the most dangerous mushrooms in existence. No Cortinarius should be eaten without absolute expert identification. Enjoy this species as a photographic subject only.",
  gbifKey: 3349103,
  stories: [
    {
      title: "The Van Duzer Corridor Connection",
      text: "Alexander H. Smith and James M. Trappe described this species in 1972 from collections made in the Van Duzer Corridor, a wind gap in Oregon's Coast Range between Lincoln City and the Willamette Valley. The corridor is known for its exceptional old-growth Sitka spruce forests and punishing coastal winds. Smith and Trappe were among the most prolific mycologists of their era — Smith described over 3,000 species during his career at the University of Michigan, and Trappe spent decades documenting the mycorrhizal fungi of Pacific Northwest forests at Oregon State University.",
      location: "Van Duzer Corridor, Oregon, USA",
      source: "Smith & Trappe, 1972",
    },
    {
      title: "Flagship of Pacific Northwest Mycology Forays",
      text: "Cortinarius vanduzerensis is a regular highlight at the annual Pacific Northwest Key Council forays and the Puget Sound Mycological Society fall shows. Its photogenic combination of slimy brown cap and violet stem makes it one of the most-displayed Cortinarius at regional mushroom festivals. The species frequently appears in photo contests at these events, where its wet-weather glamour is hard to beat.",
      location: "Pacific Northwest, USA",
      source: "Puget Sound Mycological Society",
      sourceUrl: "https://www.psms.org/",
    },
    {
      title: "Old-Growth Indicator Species",
      text: "Researchers at Oregon State University have noted that Cortinarius vanduzerensis is strongly associated with old-growth and late-successional conifer forests. Its dependence on mature forest conditions — deep duff layers, high humidity, intact mycorrhizal networks — has led some mycologists to consider it an indicator species for forest health. When old-growth stands are logged, species like C. vanduzerensis may take decades to return, if they return at all.",
      location: "Oregon, USA",
      source: "Oregon State University Mycology",
    },
    {
      title: "James Trappe's Legacy in Hypogeous and Cortinarius Fungi",
      text: "James Trappe, co-author of the original description, spent over 50 years studying the below-ground fungi of Pacific Northwest forests. His work demonstrated that forests depend on vast underground networks of mycorrhizal fungi, many of them in the genus Cortinarius. Trappe's collections, housed at Oregon State University, include thousands of Cortinarius specimens from the Pacific Northwest and remain a critical reference for taxonomists working on the genus today.",
      location: "Corvallis, Oregon, USA",
      source: "Oregon State University Herbarium",
    },
    {
      title: "Photographing the Violet Stem",
      text: "Nature photographer Steve Trudell, whose field guide 'Mushrooms of the Pacific Northwest' is a regional standard, has noted that Cortinarius vanduzerensis is one of the most satisfying forest mushrooms to photograph. The contrast between the dark slimy cap and the pale violet stem is best captured in diffused light after rain, when the glutinous cap surface acts almost like a natural reflector. Trudell's images of this species have appeared in multiple field guides and mycological publications.",
      location: "Washington State, USA",
      source: "Mushrooms of the Pacific Northwest (Timber Press)",
    },
  ],
  seoQueries: [
    "cortinarius vanduzerensis identification",
    "van duzer's cortinarius",
    "slimy brown mushroom violet stem pacific northwest",
    "cortinarius vanduzerensis edible",
    "cortinarius vanduzerensis vs cortinarius rubellus",
    "cortinarius vanduzerensis vs cortinarius orellanus",
    "pacific northwest cortinarius species",
    "cortinarius vanduzerensis habitat",
    "purple stem brown cap mushroom oregon",
    "cortinarius vanduzerensis look alikes",
    "webcap mushroom pacific northwest",
    "slimy cortinarius identification",
    "cortinarius vanduzerensis old growth forest",
    "cortinarius vanduzerensis range",
    "cortinarius vanduzerensis vs cortinarius clandestinus",
    "is cortinarius vanduzerensis poisonous",
    "violet stem mushroom identification",
  ],
  funFacts: [
    "Cortinarius vanduzerensis was named after the Van Duzer Corridor in Oregon's Coast Range, a wind gap known for its old-growth Sitka spruce forests and punishing coastal gales.",
    "The violet-lilac color of the stem is caused by pigments that fade with age and exposure — the freshest specimens have the most vivid purple, while older mushrooms may show only a faint lavender wash.",
    "Co-describer Alexander H. Smith was one of the most prolific mycologists in history, describing over 3,000 species of fungi during his career at the University of Michigan.",
    "The thick slime layer on the cap is a form of protection against desiccation and may also deter insects. In the perpetually damp Pacific Northwest forests, this slime can persist for days after the mushroom first emerges.",
    "Cortinarius is the largest genus of mushrooms on Earth, with an estimated 2,000+ species worldwide. Most are extremely difficult to identify — C. vanduzerensis is one of the rare exceptions that can be named on sight in its home range.",
  ],
  images: [
    {
      filename: "01-field.jpg",
      alt: "Cortinarius vanduzerensis showing glossy slimy chestnut-brown cap and violet-lilac stem on forest floor",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Cortinarius_vanduzerensis_134617.jpg",
      author: "John Kirkpatrick (natashadak)",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "02-field.jpg",
      alt: "Two Cortinarius vanduzerensis specimens in forest duff, one showing slimy cap and one displaying cinnamon-brown gills",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Cortinarius_vanduzerensis_134696.jpg",
      author: "John Kirkpatrick (natashadak)",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "03-field.jpg",
      alt: "Cortinarius vanduzerensis single specimen with rich brown viscid cap and pale violet stem among moss and conifer needles",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Cortinarius_vanduzerensis_70760.jpg",
      author: "Ryane Snow (snowman)",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "04-field.jpg",
      alt: "Underside of Cortinarius vanduzerensis cap showing cinnamon-brown gills radiating from center",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Cortinarius_vanduzerensis_123893.jpg",
      author: "Alan Rockefeller",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
  ],
};

export default species;
