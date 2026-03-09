import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "daldinia-concentrica",
  commonName: "Cramp Balls",
  scientificName: "Daldinia concentrica",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Ascomycota",
    class: "Sordariomycetes",
    order: "Xylariales",
    family: "Hypoxylaceae",
    genus: "Daldinia",
  },
  summary:
    "Hard, round, dark brown to black balls found on dead ash wood — slice one open and you'll find beautiful concentric rings like a tiny tree trunk. Also called King Alfred's Cakes after the legendarily distracted king who burned his cakes, and prized by bushcrafters as one of nature's best fire-starting materials.",
  description:
    "Daldinia concentrica is one of those fungi that stops you mid-walk. The fruiting bodies are hard, rounded, and so perfectly spherical that they look manufactured — like someone glued dark chocolate truffles to a dead branch. They range from golf-ball to tennis-ball sized, with a surface that starts reddish-brown and darkens to jet black with age. The real surprise comes when you cut one in half: inside are striking concentric rings of alternating dark and light tissue, each ring representing a season of growth. It looks like a cross-section of a miniature planet.\n\nThe common name 'King Alfred's Cakes' comes from the famous English legend in which King Alfred the Great, hiding from Viking invaders in a peasant woman's cottage, was asked to watch the cakes baking by the fire — and let them burn. The charred, rounded fungus supposedly resembles the burnt cakes. The other name, 'Cramp Balls,' comes from an old folk belief that carrying them in your pocket would prevent muscle cramps.\n\nBut the most practically useful fact about Daldinia concentrica is that it catches sparks beautifully. Bushcraft enthusiasts and survival instructors consider it one of the best natural tinder materials available. A dried specimen will catch a spark from a ferro rod or flint and steel and hold a glowing ember for extended periods — enough to transfer the ember to a tinder bundle. This property made it genuinely important in pre-match history, and it's still taught in wilderness survival courses today.",
  identification: {
    cap: "No cap. Fruiting bodies are hemispherical to nearly spherical, 2–10 cm across. Surface starts reddish-brown when young, turns dark brown to black with age. Hard, with a finely cracked or roughened texture. Typically found in clusters on dead wood.",
    gills:
      "No gills. Spores are produced in flask-shaped perithecia embedded in the outer layer. When sliced in half, reveals distinctive concentric rings of alternating dark and silvery-gray tissue — a diagnostic feature found in no other common fungus.",
    stem: "No stem. Fruiting bodies grow directly from the wood surface, attached at the base. Occasionally slightly stalked but usually broadly sessile.",
    sporePrint: "Black.",
    odor: "Faint, slightly smoky or charcoal-like when dry. Not distinctive when fresh.",
  },
  habitat:
    "Primarily saprobic on dead ash (Fraxinus) wood — fallen branches, standing dead trees, and stumps. With the spread of ash dieback (Hymenoscyphus fraxineus) across Europe, there's more dead ash than ever, and Daldinia has become increasingly conspicuous. Also found occasionally on beech, birch, and other hardwoods.",
  season:
    "Fruiting bodies persist year-round and can be found in any month. New growth primarily appears in spring and summer, with mature black specimens visible throughout autumn and winter. The tough structure means old specimens remain on branches for months after sporulation.",
  range:
    "Common throughout Europe, especially the UK and Ireland where ash trees are abundant. Also found across temperate North America and Asia. Increasingly common in regions affected by ash dieback, where dying trees provide abundant substrate.",
  lookAlikes: [
    {
      name: "Beech Woodwart (Hypoxylon fragiforme)",
      image: "lookalike-hypoxylon.jpg",
      distinction:
        "Much smaller (typically under 1 cm across), brick-red to reddish-brown rather than black, and found specifically on dead beech bark. Grows in dense clusters that form a crusty layer. Lacks the concentric internal rings of Daldinia. Not a confusing look-alike once you slice them open.",
      externalUrl:
        "https://www.inaturalist.org/taxa/351126-Hypoxylon-fragiforme",
      externalSource: "iNaturalist",
    },
    {
      name: "Cramp Ball Lookalike (Annulohypoxylon thouarsianum)",
      image: "lookalike-annulohypoxylon.jpg",
      distinction:
        "Similar dark, rounded fruiting bodies found primarily on oak rather than ash. Surface has a more distinctly bumpy or warty texture from prominent perithecia. Internal structure differs — less well-defined concentric rings. More common in North America than Europe.",
      externalUrl:
        "https://en.wikipedia.org/wiki/Annulohypoxylon_thouarsianum",
      externalSource: "Wikipedia",
    },
    {
      name: "Black Bulgar (Bulgaria inquinans)",
      image: "lookalike-bulgaria.jpg",
      distinction:
        "Superficially similar dark, rounded growths on dead wood, but Bulgaria inquinans is soft and gelatinous — rubbery to the touch, not rock-hard like Daldinia. The top surface is smooth, shiny, and black; the underside is brown and rough. Found mainly on dead oak bark. Squeezing one produces black spore-laden juice — it was historically used as a fabric dye.",
      externalUrl:
        "https://www.inaturalist.org/taxa/83419-Bulgaria-inquinans",
      externalSource: "iNaturalist",
    },
  ],
  edibility: "inedible",
  edibilityNote:
    "Inedible — the fruiting bodies are rock-hard with a woody, carbonaceous texture. You couldn't eat one even if you wanted to. Not toxic, but about as appetizing as a lump of coal. Its value lies entirely in fire-starting and curiosity.",
  gbifKey: 2576893,
  stories: [
    {
      title: "Ray Mears and the Cramp Ball Fire",
      text: "British bushcraft legend Ray Mears has demonstrated Daldinia concentrica's fire-starting properties on multiple TV episodes. In one memorable segment, he struck a spark from a flint and steel onto a dried cramp ball, which caught immediately and held a glowing ember for several minutes — long enough to carefully transfer it to a bundle of dry grass and blow it into flame.",
      location: "England",
      source: "Ray Mears' Bushcraft (TV series)",
    },
    {
      title: "The Ash Dieback Boom",
      text: "Since Hymenoscyphus fraxineus (ash dieback) began devastating European ash populations in the 2010s, mycologists have noted a dramatic increase in Daldinia concentrica sightings. A 2021 survey by the British Mycological Society found Daldinia on over 60% of dead ash trees sampled in southern England — an unintended silver lining for the fungus in an ecological disaster.",
      location: "Southern England",
      source: "British Mycological Society",
      sourceUrl: "https://www.britmycolsoc.org.uk/",
    },
    {
      title: "King Alfred's Cakes in the Classroom",
      text: "Primary schools across England use Daldinia concentrica to teach both mycology and history. The National Trust's 'Wild Play' program includes a specific activity where children find King Alfred's Cakes on woodland walks, slice them open to count the rings, and then learn the legend of King Alfred burning the cakes. Teachers report it's one of the most engaging nature activities for young children.",
      location: "England",
      source: "National Trust",
      sourceUrl: "https://www.nationaltrust.org.uk/",
    },
    {
      title: "Ice Age Tinder Kit",
      text: "Otzi the Iceman, the 5,300-year-old mummy found in the Alps in 1991, carried fungi in his kit for fire-starting purposes. While Otzi specifically carried Fomes fomentarius (tinder fungus), archaeologists have found charred Daldinia specimens at Mesolithic sites in Britain, suggesting cramp balls served the same purpose across different cultures and time periods.",
      location: "Europe",
      source: "Archaeological Journal",
    },
    {
      title: "The Pocket Charm Against Cramps",
      text: "Well into the 19th century, rural communities in England and Ireland carried dried Daldinia concentrica in their pockets as a folk remedy against muscle cramps and night leg spasms. The belief was widespread enough to give the fungus its common name. While there's no pharmacological basis for the claim, the practice persisted in some areas until the early 1900s.",
      location: "England and Ireland",
      source: "Folklore journal records",
    },
  ],
  seoQueries: [
    "king alfreds cakes mushroom",
    "daldinia concentrica identification",
    "cramp balls fungus",
    "black ball fungus on dead wood",
    "king alfreds cakes fire starting",
    "daldinia concentrica concentric rings",
    "cramp balls tinder",
    "black round fungus on ash tree",
    "daldinia concentrica edible",
    "king alfreds cakes look alikes",
    "how to use cramp balls for fire",
    "black ball shaped fungus identification",
    "cramp balls bushcraft",
    "daldinia concentrica ash dieback",
    "round black fungus on dead branch",
  ],
  funFacts: [
    "If you slice a Daldinia concentrica in half, you'll find concentric rings of alternating dark and light tissue — each ring representing roughly one growth season, much like tree rings. No other common fungus has this distinctive internal structure.",
    "Dried Cramp Balls will catch a spark from a ferro rod and hold a glowing ember for minutes. This makes them one of the most effective natural tinder materials known, and they're still taught in bushcraft and survival courses worldwide.",
    "The name 'King Alfred's Cakes' references the legend of King Alfred the Great, who while hiding from Viking invaders in 878 AD, was asked to watch cakes baking by a fire and let them burn to charcoal. The blackened, round fungi supposedly resemble those burnt cakes.",
    "Ash dieback disease has been devastating to European ash trees but has created a boom for Daldinia concentrica. With millions of dead ash trees across Europe, the fungus has more substrate than at any point in recorded history.",
    "The name 'Cramp Balls' comes from an old English folk belief that carrying the dried fungus in your pocket would prevent leg cramps. This practice was common enough in rural England that it was documented by multiple 18th and 19th-century naturalists.",
  ],
  images: [
    {
      filename: "01-classic.jpg",
      alt: "Several round dark brown Daldinia concentrica fruiting bodies growing on a dead ash branch",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Daldinia_concentrica.jpg",
      author: "Jerzy Opiola",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "02-cross-section.jpg",
      alt: "Daldinia concentrica sliced in half showing distinctive concentric rings of alternating dark and light tissue",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Daldinia_concentrica_cross-section.jpg",
      author: "Jerzy Opiola",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "03-cluster.jpg",
      alt: "Dense cluster of black King Alfred's Cakes on decaying hardwood log",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Daldinia_concentrica_-_Lindsey_1a.jpg",
      author: "James Lindsey",
      license: "CC BY-SA 2.5",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.5",
    },
    {
      filename: "04-young.jpg",
      alt: "Young reddish-brown Daldinia concentrica specimens showing immature coloring before darkening to black",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Daldinia_concentrica_(Bolton)_Ces._%26_De_Not_332558.jpg",
      author: "Amadej Trnkoczy",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "05-habitat.jpg",
      alt: "Daldinia concentrica growing on dead ash wood in a British woodland showing typical habitat",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:King_Alfred%27s_Cakes_-_geograph.org.uk_-_1060651.jpg",
      author: "Keith Edkins",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    },
  ],
  identificationImages: {
    cap: "surface-detail.jpg",
    gills: "cross-section-detail.jpg",
    stem: "base-detail.jpg",
  },
};

export default species;
