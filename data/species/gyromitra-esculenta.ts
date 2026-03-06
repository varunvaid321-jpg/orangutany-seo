import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "gyromitra-esculenta",
  commonName: "False Morel",
  scientificName: "Gyromitra esculenta",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Ascomycota",
    class: "Pezizomycetes",
    order: "Pezizales",
    family: "Discinaceae",
    genus: "Gyromitra",
  },
  summary:
    "It looks like a wrinkly brain sitting on a stubby white stem, and it contains a compound that your body converts into literal rocket fuel. Gyromitra esculenta is one of the most paradoxical mushrooms on the planet — officially toxic, yet still eaten as a springtime delicacy across Finland and parts of Eastern Europe.",
  description:
    "Here's the thing about the False Morel: its scientific name literally means \"edible turban\" (esculenta = edible), which is either the worst naming decision in mycology or a very dark joke. The mushroom contains gyromitrin, which your liver helpfully converts into monomethylhydrazine — the same compound used as rocket propellant. Symptoms of poisoning include vomiting, liver failure, and in severe cases, death. At least two dozen fatalities have been documented in Europe over the past century.\n\nAnd yet. In Finland, this thing is a beloved spring delicacy. You can buy it fresh in Finnish markets — legally — as long as it comes with mandatory preparation warnings. The Finns parboil it twice in large amounts of water, discarding the water each time, which reportedly removes most of the gyromitrin. The key word being \"most.\" Finnish food authorities still classify it as a poisonous mushroom that can be made edible through proper preparation. It's like a culinary game of Russian roulette that an entire nation has collectively decided to play every April.\n\nThe real danger, though, isn't the Scandinavians who know what they're doing — it's beginner foragers who confuse it with true morels (Morchella esculenta). Both appear in spring, both grow near conifers, and to an untrained eye they look vaguely similar. But morels have a neat honeycomb pattern, while the False Morel looks like someone crumpled up a brown paper bag and stuck it on a stem. If your \"morel\" looks more like a brain than a sponge, put it down and walk away.",
  identification: {
    cap: "4-10 cm across, irregularly lobed and brain-like with deep folds and wrinkles. Ranges from yellowish-brown to dark reddish-brown. The surface is convoluted like a walnut or cauliflower — nothing like the neat pits of a true morel. The interior is chambered (not hollow like a morel when sliced in half).",
    gills: "No gills — this is an ascomycete. The spore-bearing surface is the entire wrinkled outer cap. If you slice it open, the interior has irregular chambers and cottony tissue, unlike the completely hollow interior of true morels.",
    stem: "2-6 cm tall, stout and whitish to pale cream. Often compressed or furrowed. The stem is chambered inside with cottony stuffing — not cleanly hollow like a morel's stem. It can look almost too small for the oversized brain cap sitting on top of it.",
    sporePrint: "Whitish to pale yellow.",
    odor: "Pleasant, mild, somewhat fruity or mushroomy. Nothing alarming — which is part of the problem.",
  },
  habitat:
    "Grows on sandy soils in and around coniferous forests, especially pine and spruce. Often found on disturbed ground — old logging roads, fire sites, stream banks, and forest edges. Forms a saprotrophic relationship with decaying wood and forest litter rather than a mycorrhizal one.",
  season:
    "A true spring mushroom. Appears from March through May depending on latitude and snowmelt. In Scandinavia and northern North America, peak season is April-May. One of the first mushrooms to fruit after snowmelt.",
  range:
    "Widespread across the Northern Hemisphere. Very common in Scandinavia (especially Finland), Central and Eastern Europe, and across northern North America from the Great Lakes to the Pacific Northwest. Also found in Turkey and parts of Asia. Prefers boreal and temperate coniferous forests.",
  lookAlikes: [
    {
      name: "True Morel (Morchella esculenta)",
      image: "lookalike-morchella.jpg",
      distinction:
        "This is THE critical confusion. True morels have a neat, honeycomb-like pattern of pits and ridges — not brain-like wrinkles. When sliced vertically, morels are completely hollow from cap to stem base. False morels have chambered, cottony interiors. If it looks like a sponge, it's a morel. If it looks like a brain, it's not.",
      externalUrl: "https://www.inaturalist.org/taxa/58682-Morchella-esculenta",
      externalSource: "iNaturalist",
    },
    {
      name: "Wrinkled Thimble-Cap (Verpa bohemica)",
      image: "lookalike-verpa.jpg",
      distinction:
        "Verpa bohemica has a cap that hangs freely from the stem like a thimble — attached only at the very top. The False Morel's cap is attached at multiple points. Verpa also has a more elongated, less brain-like cap with vertical wrinkles rather than random convolutions. The stem of Verpa is stuffed with cottony fibers but more uniform than Gyromitra.",
      externalUrl: "https://en.wikipedia.org/wiki/Verpa_bohemica",
      externalSource: "Wikipedia",
    },
    {
      name: "Snow Morel (Gyromitra gigas)",
      image: "lookalike-gigas.jpg",
      distinction:
        "A close relative that's generally larger and lighter in color — tan to yellowish-brown rather than dark reddish-brown. The cap folds tend to be smoother and less tightly convoluted. Also contains gyromitrin but in lower concentrations. Fruits earlier in spring, often near melting snow at higher elevations.",
      externalUrl: "https://www.mushroomexpert.com/gyromitra_gigas.html",
      externalSource: "MushroomExpert",
    },
  ],
  edibility: "toxic",
  edibilityNote:
    "Contains gyromitrin, which the body metabolizes into monomethylhydrazine (MMH) — a compound also used as rocket fuel. Symptoms appear 6-12 hours after ingestion: vomiting, diarrhea, dizziness, and in severe cases, liver and kidney failure that can be fatal. At least 2-4% of poisoning cases have been fatal historically. In Finland and parts of Eastern Europe, it is eaten after double-parboiling, but food safety authorities still classify it as poisonous. The toxin is also volatile — inhaling steam while cooking unprepared specimens can cause symptoms. Do not eat this mushroom without expert knowledge of proper detoxification.",
  gbifKey: 5258510,
  stories: [
    {
      title: "Finnish Market Shelves Stock Poison Every Spring",
      text: "In Finland, Gyromitra esculenta (korvasieni) is sold fresh in supermarkets every April-May, legally required to carry preparation instructions and toxicity warnings. The Finnish Food Authority estimates that Finns consume tens of thousands of kilograms annually, making it one of the most popular wild mushrooms in the country despite its official toxic classification.",
      location: "Finland",
      source: "Finnish Food Authority",
      sourceUrl: "https://www.ruokavirasto.fi/en/",
    },
    {
      title: "German Couple Hospitalized After Foraging Mix-Up",
      text: "In 2019, a couple near Munich collected what they believed were morels from a pine forest. Both developed severe vomiting and liver damage within 8 hours and spent several days in intensive care. Doctors identified the mushrooms as Gyromitra esculenta based on remaining specimens.",
      location: "Munich, Germany",
      source: "Deutsche Gesellschaft fur Mykologie",
    },
    {
      title: "The Rocket Fuel Discovery",
      text: "In 1967, Polish researchers List and Luft first identified that gyromitrin breaks down into monomethylhydrazine (MMH) in the body — the same compound used to fuel the Titan II rocket and Space Shuttle orbital maneuvering engines. This discovery finally explained why the mushroom caused such severe and sometimes fatal poisoning.",
      location: "Poland",
      source: "List & Luft, Archiv der Pharmazie (1968)",
    },
    {
      title: "Dog Poisoned on Spring Walk in Minnesota",
      text: "A Reddit user in r/mycology reported their retriever ate a False Morel during an April hike near Duluth, Minnesota. The dog began vomiting within hours and required IV fluids and liver-protective treatment at an emergency vet. It recovered after three days of monitoring.",
      location: "Duluth, Minnesota, USA",
      source: "r/mycology",
      sourceUrl: "https://www.reddit.com/r/mycology/",
    },
    {
      title: "Swedish Study Finds Toxin Varies Wildly Between Specimens",
      text: "A 2006 study from the Swedish National Food Agency found that gyromitrin content in Gyromitra esculenta varied by up to 10x between individual mushrooms from the same location, making it impossible to guarantee safety even with proper preparation. Some specimens were nearly toxin-free while others were lethally concentrated.",
      location: "Uppsala, Sweden",
      source: "Swedish National Food Agency",
    },
  ],
  seoQueries: [
    "false morel mushroom",
    "brain mushroom identification",
    "gyromitra esculenta poisonous",
    "false morel vs true morel",
    "mushroom that looks like a brain",
    "can you eat false morels",
    "false morel poisoning symptoms",
    "spring mushroom that looks like morel",
    "gyromitra esculenta edible Finland",
    "wrinkly brown mushroom spring",
    "how to tell false morel from morel",
    "mushroom rocket fuel compound",
    "false morel look alikes",
    "gyromitra esculenta preparation",
    "brain shaped mushroom in forest",
  ],
  funFacts: [
    "Your body converts gyromitrin into monomethylhydrazine (MMH) — the same compound used as rocket propellant in the Space Shuttle's orbital maneuvering system and the Titan II ICBM.",
    "In Finland, the False Morel is so popular that it has its own dedicated foraging season, and Finnish supermarkets legally sell it fresh with mandatory warning labels and cooking instructions.",
    "The gyromitrin content can vary by 10x between individual mushrooms growing right next to each other, which means preparation methods that work for one specimen might not be enough for the next.",
    "You can actually be poisoned just by inhaling the steam from cooking unprepared False Morels — the toxin is volatile enough to become airborne when heated.",
    "Despite its name (esculenta means \"edible\" in Latin), the species has caused more documented fatalities in Europe than any mushroom except the Death Cap (Amanita phalloides).",
  ],
  images: [
    {
      filename: "01-brain-cap.jpg",
      alt: "False Morel mushroom showing its distinctive brain-like wrinkled brown cap on forest floor",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Gyromitra_esculenta_2011-04-17.JPG",
      author: "Toffel",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "02-forest-floor.jpg",
      alt: "Gyromitra esculenta growing among leaf litter and pine needles on sandy soil",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Gyromitra_esculenta_2011-04-17.JPG",
      author: "Toffel",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "03-conifer.jpg",
      alt: "False Morel specimen near conifer debris showing reddish-brown convoluted cap",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Conifer_false_morel-_Gyromitra_esculenta_(7320510562).jpg",
      author: "Scott Darbey",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0",
    },
    {
      filename: "04-side-view.jpg",
      alt: "Side view of False Morel showing brain-like cap perched on short white stem",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:False_Morel.jpg",
      author: "Jason Hollinger",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0",
    },
    {
      filename: "05-german.jpg",
      alt: "Gyromitra esculenta specimen in German forest showing dark brown wrinkled cap",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Fruehjahrslorchel.jpg",
      author: "W.J.Pilsak",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
  ],
  identificationImages: {
    cap: "cap-detail.jpg",
    gills: "folds-detail.jpg",
    stem: "stem-detail.jpg",
  },
};

export default species;
