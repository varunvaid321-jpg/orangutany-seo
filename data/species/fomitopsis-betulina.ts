import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "fomitopsis-betulina",
  commonName: "Birch Polypore",
  scientificName: "Fomitopsis betulina",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Polyporales",
    family: "Fomitopsidaceae",
    genus: "Fomitopsis",
  },
  summary:
    "The mushroom that a 5,300-year-old mummy kept in his pouch. Birch Polypore — also called Razor Strop Fungus — is one of the most historically significant fungi on Earth. Inedible due to its bitterness, but so medicinally and practically useful that Ötzi the Iceman was carrying pieces of it when he died in the Alps.",
  description:
    "If you've ever walked through a birch forest, you've seen Fomitopsis betulina. It's the smooth, rounded bracket that juts out from birch trunks like a misplaced doorknob — white when young, aging to gray-brown, with a surface so smooth it looks almost artificial. Snap one off and you'll find firm, white, corky flesh that smells faintly pleasant but tastes unmistakably bitter. Nobody eats this mushroom for pleasure.\n\nBut humans have been using it for thousands of years anyway. When archaeologists examined the belongings of Ötzi the Iceman — a naturally mummified man found in the Austrian-Italian Alps in 1991, dating to around 3300 BCE — they found two pieces of Birch Polypore threaded on leather strips. Scientists believe he carried them for their medicinal properties (the fungus contains compounds active against intestinal parasites, and Ötzi had a whipworm infection) and possibly as tinder for fire-starting, since dried Birch Polypore catches a spark beautifully.\n\nThe common name 'Razor Strop Fungus' comes from another traditional use: the leathery underside was used to strop (sharpen) straight razors and fine knives. Entomologists also used thin strips of it to mount tiny insect specimens. Modern research has validated some of the folk medicine — Fomitopsis betulina contains betulinic acid, agaric acid, and various triterpenes with demonstrated anti-inflammatory, antibacterial, and antitumor properties in laboratory studies.",
  identification: {
    cap: "5–25 cm across, semicircular to kidney-shaped bracket. Upper surface smooth, white when young becoming gray-brown to tan with age. Skin is thin and can be peeled off. The margin is often rounded and slightly inrolled.",
    gills:
      "No gills. The underside has a dense layer of tiny white pores (3–4 per mm). The pore surface is white and flat, sometimes slightly concave. Pores do not bruise or change color when pressed.",
    stem: "No stem (sessile). The bracket attaches directly to the birch trunk, sometimes with a narrow point of attachment at the back.",
    sporePrint: "White.",
    odor: "Faint, pleasant, slightly mushroomy. Not distinctive.",
  },
  habitat:
    "Exclusively on birch trees (Betula species) — this is one of the most host-specific fungi in temperate forests. Found on both living and dead birch, acting as both a parasite (causing brown rot in weakened trees) and a saprobe (decomposing dead wood). Usually appears singly or in small groups along the trunk.",
  season:
    "Fruit bodies can be found year-round since they persist on the tree for months. New brackets typically appear from late summer through autumn (August–November). Old specimens become tough and dark, eventually falling off.",
  range:
    "Wherever birch trees grow in the Northern Hemisphere. Extremely common throughout Northern Europe (Scandinavia, UK, Russia, Germany, Poland), across boreal and temperate North America (Alaska to New England), and in northern Asia. One of the most frequently encountered bracket fungi in birch-dominated forests.",
  lookAlikes: [
    {
      name: "Dryad's Saddle (Cerioporus squamosus)",
      slug: "cerioporus-squamosus",
      image: "lookalike-cerioporus.jpg",
      distinction:
        "Has prominent dark brown scales on the upper surface in a concentric pattern — Birch Polypore is completely smooth. Grows on a wide variety of hardwoods (elm, maple, beech), not exclusively birch. Has a distinct watermelon rind smell when fresh. Much larger pores visible to the naked eye.",
      externalUrl:
        "https://www.inaturalist.org/taxa/940028-Cerioporus-squamosus",
      externalSource: "iNaturalist",
    },
    {
      name: "Artist's Bracket (Ganoderma applanatum)",
      image: "lookalike-ganoderma.jpg",
      distinction:
        "Much harder and woodier, with a rough, concentrically zoned upper surface that is gray-brown to dark brown. The white pore surface bruises brown instantly when scratched (artists use this to draw — hence the name). Produces a brown spore deposit that often dusts the surrounding area. Grows on many hardwood species, not just birch.",
      externalUrl:
        "https://en.wikipedia.org/wiki/Ganoderma_applanatum",
      externalSource: "Wikipedia",
    },
    {
      name: "Piptoporus (synonym)",
      image: "lookalike-piptoporus.jpg",
      distinction:
        "Not actually a different species — Piptoporus betulinus is the old name for Fomitopsis betulina. The species was reclassified based on molecular phylogenetics in 2016. If you see either name in a field guide, they refer to the same fungus. Older references will use Piptoporus.",
      externalUrl:
        "https://en.wikipedia.org/wiki/Fomitopsis_betulina",
      externalSource: "Wikipedia",
    },
  ],
  edibility: "inedible",
  edibilityNote:
    "Too bitter and tough to eat. The flesh has a distinctly acrid, bitter taste that cooking does not remove. However, it has been used for millennia as a medicinal preparation — teas, tinctures, and dried strips. Contains betulinic acid and other bioactive compounds with documented anti-inflammatory and antibacterial properties. Safe to handle and experiment with as tea, but don't expect a pleasant meal.",
  gbifKey: 9819973,
  stories: [
    {
      title: "Ötzi the Iceman's 5,300-Year-Old Medicine Kit",
      text: "When Ötzi's mummified body was found in the Ötztal Alps in 1991, two pieces of Birch Polypore were among his possessions, threaded onto leather strips. Analysis showed Ötzi had a whipworm intestinal infection, and Fomitopsis betulina contains agaric acid — a known purgative effective against intestinal parasites. This is one of the oldest documented cases of medicinal mushroom use in human history.",
      location: "Ötztal Alps, Austrian-Italian border",
      source: "The Lancet",
      sourceUrl: "https://www.thelancet.com/",
    },
    {
      title: "The Barber's Secret Strop",
      text: "Before synthetic sharpening materials existed, European barbers routinely used strips of dried Birch Polypore to strop their straight razors. The fine, leathery texture of the underside provided just the right amount of friction to realign a blade's edge. The practice was so widespread that 'Razor Strop Fungus' became the mushroom's most common English name, and some traditional barbers in Eastern Europe reportedly continued using it into the mid-20th century.",
      location: "Europe",
      source: "Historical ethnomycology records",
    },
    {
      title: "Victorian Entomologists' Mounting Material",
      text: "In the 19th century, entomologists discovered that thin slices of Birch Polypore made an ideal mounting medium for tiny insect specimens. The material was firm enough to hold a pin, soft enough to cut cleanly, and wouldn't crack or crumble. Some museum collections in London and Vienna still contain insect specimens pinned to Birch Polypore slices from over 150 years ago.",
      location: "London and Vienna",
      source: "Natural History Museum archives",
    },
    {
      title: "Finland's Forest Pharmacy",
      text: "Finnish traditional medicine has used Birch Polypore tea for centuries as a treatment for stomach ailments and general immune support. In rural Finland, dried slices of the fungus were a common item in household medicine cabinets well into the 20th century. Modern Finnish researchers at the University of Helsinki have validated some of these uses, identifying triterpene compounds with genuine anti-inflammatory activity.",
      location: "Finland",
      source: "University of Helsinki research",
    },
    {
      title: "The Tinder Fungus Mix-Up",
      text: "Birch Polypore is often confused with the true Tinder Fungus (Fomes fomentarius) in survival contexts, but both actually work for fire-starting. Ötzi carried both species. However, their fire-starting properties differ: Fomes fomentarius is better for catching sparks (amadou), while Birch Polypore burns more steadily once lit. Some bushcraft instructors teach using them together — one to catch the spark, the other to sustain it.",
      location: "Alpine Europe",
      source: "Bushcraft and survival literature",
    },
  ],
  seoQueries: [
    "birch polypore identification",
    "fomitopsis betulina edible",
    "birch polypore medicinal uses",
    "razor strop fungus identification",
    "birch polypore tea benefits",
    "otzi iceman mushroom",
    "white bracket fungus on birch tree",
    "birch polypore vs artists bracket",
    "piptoporus betulinus uses",
    "is birch polypore poisonous",
    "birch polypore betulinic acid",
    "how to use birch polypore",
    "birch tree mushroom identification",
    "birch polypore tincture",
    "bracket fungus on birch medicinal",
  ],
  funFacts: [
    "Ötzi the Iceman, a 5,300-year-old mummy found in the Alps, was carrying two pieces of Birch Polypore — making it one of the oldest documented examples of medicinal mushroom use in human history.",
    "The mushroom contains betulinic acid, a compound derived from birch bark that has shown anti-tumor, anti-inflammatory, and anti-HIV properties in laboratory studies.",
    "Birch Polypore is so host-specific that it grows exclusively on birch trees. If you find a similar-looking bracket on oak or beech, it's a different species entirely.",
    "European barbers used dried strips of the fungus's underside to strop straight razors for centuries, giving it the common name 'Razor Strop Fungus.'",
    "Victorian entomologists used thin slices of Birch Polypore as mounting material for pinning tiny insect specimens — some museum collections still have 150-year-old specimens mounted this way.",
  ],
  images: [
    {
      filename: "01-bracket.jpg",
      alt: "Fresh Fomitopsis betulina birch polypore bracket growing on birch trunk showing smooth white surface",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Piptoporus_betulinus_2012_G1.jpg",
      author: "George Chernilevsky",
      license: "Public domain",
      licenseUrl: "",
    },
    {
      filename: "02-multiple.jpg",
      alt: "Multiple birch polypore brackets at various stages of development on a dead birch trunk",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Berkenzwam_(Piptoporus_betulinus)._Locatie,_Nationaal_Park_Veluwezoom.jpg",
      author: "Dominicus Johannes Bergsma",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "03-pores.jpg",
      alt: "Underside of Fomitopsis betulina showing dense white pore surface",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Piptoporus_betulinus_031028w.jpg",
      author: "Strobilomyces",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "04-aged.jpg",
      alt: "Older birch polypore specimen showing gray-brown coloration on birch bark",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Fomitopsis_betulina_114304839.jpg",
      author: "iNaturalist user",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    {
      filename: "05-habitat.jpg",
      alt: "Birch polypore growing on standing dead birch tree in boreal forest setting",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Birch_bracket_(Fomitopsis_betulina)_Piptoporus_betulinus.jpg",
      author: "Wikimedia Commons contributor",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
  ],
};

export default species;
