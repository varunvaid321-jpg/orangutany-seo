import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "psilocybe-mexicana",
  commonName: "Teonanácatl / Mexican Magic Mushroom",
  scientificName: "Psilocybe mexicana",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Hymenogastraceae",
    genus: "Psilocybe",
  },
  summary:
    "The mushroom that introduced psilocybin to Western science. Psilocybe mexicana was used in Mazatec healing ceremonies for centuries before R. Gordon Wasson brought it to the world's attention in 1957. Albert Hofmann first isolated psilocybin and psilocin from this species. It contains controlled substances and is illegal to possess in most jurisdictions. This page is for educational identification purposes only.",
  description:
    "Psilocybe mexicana holds a singular place in the history of psychedelic science. This small, unassuming brown mushroom from the highlands of southern Mexico was the species from which Swiss chemist Albert Hofmann — already famous for discovering LSD — first isolated psilocybin and psilocin in 1958. The mushroom had been used for centuries, perhaps millennia, by the Mazatec people of Oaxaca in sacred velada ceremonies to heal the sick, divine the future, and communicate with the spirit world. The Nahuatl name teonanácatl, meaning \"flesh of the gods,\" reflects its deep spiritual significance.\n\nThe Western world learned about these ceremonies through R. Gordon Wasson, a banker and amateur ethnomycologist who participated in a velada led by the curandera María Sabina in 1955. His account, published as a Life magazine cover story in 1957 titled \"Seeking the Magic Mushroom,\" electrified the counterculture and launched decades of psychedelic research. María Sabina later expressed regret that the sacred mushrooms had been exposed to outsiders, saying the mushrooms had lost their power.\n\nPsilocybe mexicana is notable for producing sclerotia — dense masses of mycelium sometimes called \"philosopher's stones\" or \"magic truffles\" — which contain the same psychoactive compounds as the fruiting bodies. This trait made it important in early laboratory cultivation. The species fruits in small groups on mossy, grassy slopes and trails in cloud forests between 1,000 and 1,800 meters elevation, favoring the misty, humid conditions of the Sierra Mazateca.\n\nThe mushroom itself is small and easily overlooked — a conical to bell-shaped cap just 1–3 cm across, straw-colored to brown, on a thin wiry stem. It could easily be mistaken for any number of harmless little brown mushrooms, which is precisely why traditional knowledge was so important to its identification. Today, Psilocybe mexicana remains one of the most historically significant fungi ever described, a bridge between ancient indigenous wisdom and modern neuroscience.",
  identification: {
    cap: "1-3 cm across. Conical to campanulate (bell-shaped), sometimes with a small umbo. Straw-yellow to brown, darker when moist, paler when dry. Surface smooth, slightly hygrophanous. Margin sometimes slightly translucent-striate when wet.",
    gills: "Adnate to adnexed, moderately spaced. Gray to purple-brown at maturity. Edges whitish.",
    stem: "4-12 cm tall, 1-3 mm thick. Thin, wiry, and flexible. Yellowish to reddish-brown, darker toward the base. Hollow. May show faint blue-green bruising when handled.",
    sporePrint: "Dark purple-brown.",
    bruising: "Blue-green bruising on stem and cap when damaged, though often faint. Indicates presence of psilocybin.",
  },
  habitat:
    "Grows in small groups on mossy, grassy slopes and trails in subtropical cloud forests, often among mosses and grasses at elevations of 1,000-1,800 meters. Also found in meadows and roadsides at the margins of forests. Occasionally in disturbed grassy areas.",
  season: "May through October, corresponding with the rainy season in southern Mexico and Central America. Peak fruiting in June through August.",
  range:
    "Southern Mexico (Oaxaca, Puebla, Veracruz, Guerrero, Chiapas), Guatemala, Honduras, Costa Rica. The primary historical range is the Sierra Mazateca region of Oaxaca. Also reported from parts of South America.",
  lookAlikes: [
    {
      name: "Golden Teacher (Psilocybe cubensis)",
      slug: "psilocybe-cubensis",
      distinction:
        "Much larger (cap 2-8 cm), grows on dung in tropical lowlands, not high-altitude grasslands. Golden-brown cap with more robust stature. Both contain psilocybin.",
    },
    {
      name: "Liberty Cap (Psilocybe semilanceata)",
      slug: "psilocybe-semilanceata",
      distinction:
        "Similar small size and conical cap, but grows in cool temperate grasslands of Europe and North America, not tropical highlands. Has a more pronounced nipple-like umbo and gelatinous pellicle.",
    },
    {
      name: "Deadly Galerina (Galerina marginata)",
      slug: "galerina-marginata",
      distinction:
        "DEADLY POISONOUS. Similar small brown mushroom with brown spore print (not purple-brown). Grows on decaying wood, not grassy slopes. Has a ring on the stem. Always take a spore print — Galerina has rusty-brown spores, Psilocybe has purple-brown.",
    },
  ],
  edibility: "toxic",
  psychoactive: true,
  edibilityNote:
    "Contains psilocybin and psilocin, which are Schedule I controlled substances in the United States and illegal in most countries worldwide. Possession and consumption carry serious legal consequences. This species is documented here for educational identification purposes only.",
  gbifKey: 5242538,
  funFacts: [
    "Albert Hofmann, who had already synthesized LSD, isolated psilocybin from this species in 1958 — making it the first mushroom to have its psychoactive compounds chemically identified.",
    "The Nahuatl name teonanácatl translates to \"flesh of the gods\" or \"divine mushroom,\" reflecting centuries of sacred use by Mesoamerican peoples.",
    "R. Gordon Wasson's 1957 Life magazine article about participating in a Mazatec mushroom ceremony essentially created the Western psychedelic movement.",
    "Psilocybe mexicana can produce sclerotia (\"magic truffles\") — hardened mycelial masses that contain psilocybin and can survive drought conditions underground.",
  ],
  seoQueries: [
    "psilocybe mexicana identification",
    "teonanacatl mushroom",
    "mexican magic mushroom",
    "psilocybe mexicana vs cubensis",
    "albert hofmann psilocybin mushroom",
    "maria sabina mushroom ceremony",
  ],
  stories: [
    {
      title: "The Ceremony That Changed the World",
      text: "In 1955, R. Gordon Wasson and photographer Allan Richardson became the first known Westerners to participate in a Mazatec mushroom velada ceremony, led by curandera María Sabina in Huautla de Jiménez, Oaxaca. Wasson's vivid account of visions and revelations, published in Life magazine two years later, introduced the concept of psychoactive mushrooms to mainstream Western culture and indirectly launched the psychedelic revolution of the 1960s.",
      location: "Huautla de Jiménez, Oaxaca, Mexico",
      source: "Life Magazine",
      sourceUrl: "https://en.wikipedia.org/wiki/R._Gordon_Wasson",
    },
    {
      title: "From Mushroom to Molecule",
      text: "After receiving samples from Wasson, Albert Hofmann at Sandoz Laboratories in Basel cultivated Psilocybe mexicana in the lab and, in 1958, successfully isolated and identified psilocybin and psilocin. He famously self-tested the compounds to verify their psychoactive effects. This work laid the groundwork for all subsequent psilocybin research, from the Harvard Psilocybin Project of the 1960s to today's clinical trials for depression.",
      location: "Basel, Switzerland",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Psilocybin",
    },
  ],
  images: [
    {
      filename: "01-field.jpg",
      alt: "Teonanácatl / Mexican Magic Mushroom (Psilocybe mexicana) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Psilocybe.mexicana.Alan.jpg",
      author: "Alan Rockefeller",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "02-field.jpg",
      alt: "Teonanácatl / Mexican Magic Mushroom (Psilocybe mexicana) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Psilocybe.mexicana.Xico.JPG",
      author: "Alan Rockefeller",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "03-field.jpg",
      alt: "Teonanácatl / Mexican Magic Mushroom (Psilocybe mexicana) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Psilocybe.mexicana.la.primavera.jpg",
      author: "Alan Rockefeller",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "04-field.jpg",
      alt: "Teonanácatl / Mexican Magic Mushroom (Psilocybe mexicana) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Psilocybe_mexicana_Veracruz.jpg",
      author: "Alan Rockefeller",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "05-field.jpg",
      alt: "Teonanácatl / Mexican Magic Mushroom (Psilocybe mexicana) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:2012-07-18_Psilocybe_mexicana_R._Heim_239432.jpg",
      author: "This image was created by user Alan Rockefeller (Alan Rockefeller) at Mushroom Observer, a source for mycological images",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
  ],
};

export default species;
