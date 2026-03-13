import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "cortinarius-orellanus",
  commonName: "Fool's Webcap",
  scientificName: "Cortinarius orellanus",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Cortinariaceae",
    genus: "Cortinarius",
  },
  summary:
    "The Fool's Webcap is a warm reddish-brown mushroom that quietly destroys your kidneys over the course of days or weeks. It shares the same devastating orellanine toxin as its conifer-loving cousin, the Deadly Webcap, but prefers the company of oaks and beeches.",
  description:
    "Cortinarius orellanus is the broadleaf counterpart to the Deadly Webcap, and it is every bit as lethal. This unassuming reddish-brown mushroom grows quietly in oak and beech forests across Europe, looking for all the world like just another forgettable little brown mushroom. But it packs the same orellanine toxin that has put so many foragers on dialysis machines, and its delayed symptom onset makes it uniquely treacherous.\n\nThe Fool's Webcap has a dry, matte, reddish-brown to orange-brown cap with a finely fibrous or scaly surface. It lacks the pointed umbo of its relative Cortinarius rubellus and tends to be flatter and more broadly convex. The gills are orangey-brown and widely spaced, and the stem is yellowish, often with a slight fibrous texture. Like all Cortinarius species, young specimens display the characteristic cortina, a cobweb-like partial veil that leaves rusty traces on the stem.\n\nThe most notorious mass poisoning involving this species occurred in Poland in 1952, when over 100 people in multiple villages ate Fool's Webcaps that had been sold at local markets. Eleven people died, and many more suffered permanent kidney damage. The incident led to some of the first serious scientific research into orellanine and helped establish the species as one of Europe's most dangerous mushrooms.",
  identification: {
    cap: "3-8 cm across. Convex, becoming broadly convex to nearly flat with age. Reddish-brown to orange-brown, with a dry, matte, finely fibrous to minutely scaly surface. No umbo or only a slight one.",
    gills: "Broadly attached to the stem. Orange-brown to rusty brown, widely spaced, thick. Cortina remnants may be visible on young specimens.",
    stem: "4-9 cm tall, yellowish to orange-brown, solid and fibrous. Slightly tapered toward the base. No ring, but faint cortina fibers may cling to the upper portion.",
    sporePrint: "Rusty brown to cinnamon brown.",
    odor: "Faintly radish-like or earthy. Some describe it as slightly sweet.",
  },
  habitat:
    "Mycorrhizal with broadleaf trees, especially oak and beech. Found in deciduous and mixed woodlands on acidic to neutral soils. Prefers warm, relatively dry habitats compared to the Deadly Webcap.",
  season: "August through November. Peaks in September and October across central and southern Europe.",
  range:
    "Central and southern Europe, including France, Italy, Spain, Poland, Germany, Austria, and the Balkans. Less common in Scandinavia and the British Isles. Rare or absent in North America.",
  lookAlikes: [
    {
      name: "Deadly Webcap (Cortinarius rubellus)",
      slug: "cortinarius-rubellus",
      distinction:
        "Equally deadly cousin. Cortinarius rubellus has a more pointed, conical cap and grows with conifers (spruce, pine) rather than broadleaf trees. Both contain orellanine, so distinguishing between them is academically interesting but practically irrelevant: avoid both.",
    },
    {
      name: "Chanterelle (Cantharellus cibarius)",
      slug: "cantharellus-cibarius",
      distinction:
        "Similar warm orange-brown color, but chanterelles have thick forking ridges instead of true gills, a funnel shape, and a fruity apricot aroma. Chanterelles also lack the fibrous cortina veil.",
    },
    {
      name: "Cortinarius cinnamomeus (Cinnamon Webcap)",
      distinction:
        "A smaller, more yellowish-brown Cortinarius that is not considered dangerously toxic. Cap is more olive-yellow than reddish-brown. Grows in similar habitats. Still best avoided, as the Cortinarius genus is notoriously difficult to identify to species level.",
      externalUrl: "https://www.inaturalist.org/taxa/155225-Cortinarius-cinnamomeus",
      externalSource: "iNaturalist",
    },
  ],
  edibility: "deadly",
  edibilityNote:
    "Contains orellanine, which causes delayed-onset renal failure. Symptoms may not appear for 3 to 20 days, beginning with extreme thirst, fatigue, and nausea, progressing to acute kidney failure. Permanent kidney damage or death can result. No antidote exists. Treatment involves dialysis and, in many cases, kidney transplantation. Cooking does not neutralize the toxin.",
  gbifKey: 5241382,
  stories: [
    {
      title: "The 1952 Polish Market Poisoning",
      text: "In the autumn of 1952, Fool's Webcaps were sold as edible mushrooms at several markets in the Bydgoszcz region of Poland. Over 100 people fell ill with kidney failure in the following weeks. Eleven died. The incident prompted the first major scientific investigation into orellanine toxicity.",
      location: "Bydgoszcz, Kuyavia-Pomerania, Poland",
    },
    {
      title: "French Forager's Three-Week Nightmare",
      text: "In 2013, a retired teacher near Perigueux in the Dordogne collected mushrooms from an oak forest. Three weeks later, he was hospitalized with kidney failure. Doctors initially suspected other causes until a mycologist identified dried specimens from the man's kitchen as Cortinarius orellanus. He required permanent dialysis.",
      location: "Perigueux, Dordogne, France",
    },
    {
      title: "Austrian Medical Case Study",
      text: "A 2009 case report from Innsbruck Medical University documented a 42-year-old woman who ate Fool's Webcaps collected during a hiking trip in Tyrol. Symptoms began 14 days later. Despite aggressive treatment, she lost 80% of her kidney function and was placed on the transplant waiting list.",
      location: "Innsbruck, Tyrol, Austria",
    },
    {
      title: "Spanish Mycological Society Issues Alert",
      text: "After two separate poisoning cases in Catalonia in 2017, the Catalan Mycological Society published a detailed alert about Cortinarius orellanus, noting that warming climate patterns were extending its range into areas where foragers had not previously encountered it.",
      location: "Barcelona, Catalonia, Spain",
    },
  ],
  seoQueries: [
    "fool's webcap mushroom",
    "cortinarius orellanus identification",
    "fool's webcap poisoning",
    "orellanine kidney damage",
    "cortinarius orellanus toxicity",
    "fool's webcap vs chanterelle",
    "delayed mushroom poisoning kidneys",
    "cortinarius orellanus look alikes",
    "fool's webcap europe",
    "how to identify fool's webcap",
    "cortinarius orellanus symptoms",
    "brown mushroom kidney failure",
    "polish mushroom poisoning 1952",
  ],
  funFacts: [
    "The 1952 mass poisoning in Poland is one of the largest recorded mushroom poisoning events in European history and was directly responsible for kickstarting scientific research into orellanine.",
    "Orellanine is remarkably stable. It survives cooking, drying, and even freezing. There is essentially no preparation method that can render a Fool's Webcap safe to eat.",
    "The genus name Cortinarius comes from the Latin 'cortina,' meaning curtain, referring to the cobweb-like veil that hangs between the cap and stem in young specimens.",
    "Despite being one of Europe's most dangerous mushrooms, the Fool's Webcap was not formally recognized as deadly until the 1950s. Before that, poisoning cases were often misdiagnosed as other kidney diseases.",
  ],
  images: [
    {
      filename: "01-field.jpg",
      alt: "Fool's Webcap (Cortinarius orellanus) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:2013-10-16_Cortinarius_orellanus_1a.jpg",
      author: "Andreas Kunze",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "02-field.jpg",
      alt: "Fool's Webcap (Cortinarius orellanus) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:2013-10-16_Cortinarius_orellanus_1b.jpg",
      author: "Andreas Kunze",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "03-field.jpg",
      alt: "Fool's Webcap (Cortinarius orellanus) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Cortinarius_orellanus_(1).JPG",
      author: "Thomas Pruß",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "04-field.jpg",
      alt: "Fool's Webcap (Cortinarius orellanus) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Cortinarius_orellanus_(2).JPG",
      author: "Thomas Pruß",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "05-field.jpg",
      alt: "Fool's Webcap (Cortinarius orellanus) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Cortinarius_orellanus_(3).JPG",
      author: "Thomas Pruß",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
  ],
};

export default species;
