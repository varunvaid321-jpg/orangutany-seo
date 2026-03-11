import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "amanita-rubescens",
  commonName: "The Blusher",
  scientificName: "Amanita rubescens",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Amanitaceae",
    genus: "Amanita",
  },
  summary:
    "A common woodland Amanita that reveals its identity when you cut it: the flesh slowly turns pink, like it's blushing. Edible when thoroughly cooked, but raw specimens contain a hemolytic toxin that destroys red blood cells. Its resemblance to the deadly Panther Cap makes correct identification genuinely life-or-death.",
  description:
    "The Blusher is one of the most common Amanita species in European and North American forests, and one of the few in its genus that people actually eat. The catch is that it must be thoroughly cooked. Raw or undercooked Blusher contains rubescenslysin, a protein that ruptures red blood cells. Heat destroys it completely, but this is not a mushroom for sashimi.\n\nThe name tells you everything you need to know about identifying it. Cut the cap, nick the stem, or find a slug trail across the flesh, and within minutes you'll see a distinctive pinkish-red staining. No other common Amanita does this so reliably. The staining happens because damaged cells oxidize on contact with air, producing reddish pigments. Old specimens often show pinkish patches where insects have been feeding.\n\nThe cap starts rounded, almost egg-shaped when young, then flattens out to 5 to 15 centimeters across. The color runs from pinkish-brown to reddish-brown, sometimes with a warm coppery tone. Scattered across the surface are small greyish or pinkish warts, the remnants of the universal veil that once enclosed the whole mushroom. These warts wash off in rain, which is when the Blusher starts looking dangerously similar to its toxic cousins.\n\nUnderneath, the gills are white and crowded, free from the stem. They stain pink when bruised. The stem is stout, 7 to 15 cm tall, white above the ring and flushed pink below. The ring itself is prominent, grooved on top (striate), and hangs like a skirt. The base is bulbous but lacks the distinct volva sac you see on a Death Cap.\n\nThis mushroom forms mycorrhizal partnerships with both deciduous and coniferous trees, particularly oaks, beeches, and pines. It fruits from June through November across temperate regions of Europe, Asia, and eastern North America. In good years, you can find dozens under a single oak.",
  identification: {
    cap: "5 to 15 cm across. Rounded when young, flattening with age. Pinkish-brown to reddish-brown with scattered greyish or pinkish wart-like patches (veil remnants). Warts wash off in rain. Flesh beneath the skin turns pink when damaged.",
    gills: "White, crowded, free from the stem. Stain pinkish-red where bruised or cut. Spore print is white.",
    stem: "5 to 15 cm tall, 1.5 to 3 cm thick. White above the ring, pinkish below. Bulbous base without a distinct sac-like volva. Ring is prominent, striate (grooved) on the upper surface.",
    sporePrint: "White.",
    bruising: "The defining feature: all parts of the flesh slowly turn pink to reddish when cut, bruised, or damaged by insects. This reaction is unique among common Amanitas.",
    odor: "Faint, not distinctive. Some describe a mild, pleasant mushroom smell.",
  },
  habitat:
    "Mycorrhizal with both deciduous and coniferous trees, especially oaks, beeches, birches, and pines. Found in mixed and broadleaf woodlands, parklands, and gardens with mature trees. Prefers well-drained, slightly acidic soils. Often fruits along paths and woodland edges where the soil has been disturbed.",
  season: "June through November. Peak fruiting in August and September across most of its range.",
  range:
    "Widespread across temperate Europe, from Scandinavia to the Mediterranean. Also found in eastern North America (though less common west of the Rockies), parts of Asia, and introduced to some Southern Hemisphere locations with planted European trees.",
  lookAlikes: [
    {
      name: "Panther Cap (Amanita pantherina)",
      slug: "amanita-pantherina",
      image: "lookalike-pantherina.jpg",
      distinction:
        "The most dangerous confusion. Panther Cap has pure white warts arranged more evenly on a brown cap, and the flesh does NOT turn pink when cut. The volva at the base forms a distinct rim or collar. Contains ibotenic acid and muscimol, causing serious poisoning. If the flesh stays white when you cut it, do not eat it.",
      externalUrl: "https://en.wikipedia.org/wiki/Amanita_pantherina",
      externalSource: "Wikipedia",
    },
    {
      name: "Grey Spotted Amanita (Amanita excelsa)",
      image: "lookalike-excelsa.jpg",
      distinction:
        "Very similar overall shape and size. The key difference: Grey Spotted Amanita has a greyer cap and does NOT blush pink when cut. The warts are greyer and more angular. Generally considered inedible. Always do the cut test before committing to an identification.",
      externalUrl: "https://en.wikipedia.org/wiki/Amanita_excelsa",
      externalSource: "Wikipedia",
    },
    {
      name: "Gemmed Amanita (Amanita gemmata)",
      slug: "amanita-gemmata",
      image: "lookalike-gemmata.jpg",
      distinction:
        "Smaller and paler, with a yellow to ochre cap and white warts. Does not blush pink. The ring is fragile and often disappears early. Considered mildly toxic. Typically found under conifers rather than broadleaf trees.",
      externalUrl: "https://www.inaturalist.org/taxa/350046-Amanita-junquillea",
      externalSource: "iNaturalist",
    },
    {
      name: "Blushing Bride (Amanita novinupta)",
      slug: "amanita-novinupta",
      distinction:
        "The western North American counterpart. Blushing Bride starts white and develops pink tones, while the Blusher has a reddish-brown cap from the start. Blushing Bride is stockier with paler warts. Ranges do not overlap: novinupta in western North America, rubescens in Europe and the east. Both blush pink when cut.",
    },
  ],
  edibility: "edible-with-caution",
  edibilityNote:
    "Edible and good when thoroughly cooked, but MUST be cooked through completely. Raw or undercooked specimens contain rubescenslysin, a hemolytic toxin that destroys red blood cells. Parboiling for at least 15 minutes before frying is the traditional preparation. Never eat raw. The risk of confusion with the toxic Panther Cap makes this a mushroom only for experienced foragers who can reliably identify the pink blushing reaction.",
  gbifKey: 7496350,
  stories: [
    {
      title: "The Cut Test That Saves Lives",
      text: "In central European foraging traditions, the 'Anschnittprobe' (cut test) is taught to every beginner before they're allowed to collect Blushers. You slice the cap and wait. If it turns pink within five minutes, you have a Blusher. If it stays white, you might have a Panther Cap, and you put it down. German and Czech mycological societies have documented cases where this single test prevented fatal mix-ups. The tradition goes back centuries in regions where both species grow side by side under the same oaks.",
      location: "Central Europe (Germany, Czech Republic, Poland)",
      source: "German Mycological Society",
      sourceUrl: "https://en.wikipedia.org/wiki/Amanita_rubescens",
    },
    {
      title: "A Hemolytic Toxin Nobody Expected",
      text: "In the 1960s, French researchers isolated rubescenslysin from raw Blusher tissue and showed it could rupture red blood cells in vitro. The discovery explained why people occasionally became ill after eating undercooked Blushers, something folk wisdom had warned about for generations. The toxin is a protein, so heat denatures it completely during cooking. This made the Blusher one of the first mushrooms where science confirmed a specific mechanism behind the old rule of 'always cook it well.'",
      location: "France",
      source: "Mycological research, 1960s",
    },
    {
      title: "The Most Eaten Amanita in Europe",
      text: "Despite belonging to a genus famous for killing people (Death Cap, Destroying Angel), the Blusher is one of the most commonly collected wild mushrooms in Poland, Czech Republic, and parts of Germany. In Polish markets during autumn, Blushers appear alongside Boletes and Chanterelles. The cultural confidence comes from generations of foraging knowledge passed within families, where the pink blushing reaction is taught as the first and most important identification step.",
      location: "Poland, Czech Republic",
      source: "European mycological tradition",
    },
    {
      title: "Maggots That Gave It Away",
      text: "Experienced foragers sometimes use insect damage as a secondary identification aid. Blushers are heavily targeted by fungus fly larvae, and wherever the maggots have tunneled, the flesh turns distinctly pink along the channels. Finding a Blusher riddled with pink-stained insect trails is actually reassuring from an identification standpoint, even if it makes that particular specimen less appetizing. Collectors call these 'self-identifying' specimens.",
      location: "European woodlands",
      source: "Foraging field guides",
    },
    {
      title: "Mistaken Identity at a Swiss Mushroom Control",
      text: "Switzerland operates official mushroom inspection stations where foragers bring their harvest for expert verification. The Swiss Association of Official Mushroom Inspectors (VAPKO) has reported that Blusher/Panther Cap confusion is one of the most common dangerous misidentifications brought to control points. In several cases, entire baskets had to be discarded because a single Panther Cap had been collected alongside legitimate Blushers.",
      location: "Switzerland",
      source: "Swiss Association of Official Mushroom Inspectors (VAPKO)",
      sourceUrl: "https://www.vapko.ch/",
    },
  ],
  seoQueries: [
    "blusher mushroom identification",
    "amanita rubescens edible",
    "mushroom that turns pink when cut",
    "blusher vs panther cap",
    "amanita rubescens vs amanita pantherina",
    "is the blusher mushroom safe to eat",
    "how to identify the blusher",
    "pink staining amanita",
    "blushing mushroom identification",
    "amanita rubescens look alikes",
    "can you eat amanita rubescens",
    "amanita rubescens cooking",
    "blusher mushroom poisonous raw",
    "mushroom with pink flesh bruising",
    "grey spotted amanita vs blusher",
    "amanita rubescens habitat",
    "common amanita edible species",
  ],
  funFacts: [
    "The Blusher is one of the very few Amanita species that's considered safe to eat, in a genus mostly famous for containing the world's deadliest mushrooms.",
    "The pink blushing reaction happens because damaged cells oxidize on contact with air, producing colored compounds. No other common Amanita does this.",
    "Raw Blusher contains rubescenslysin, a protein that can burst red blood cells. Cooking at high heat destroys it completely.",
    "In Poland and Czech Republic, Blushers are sold in autumn markets alongside porcini and chanterelles, treated as a perfectly ordinary edible mushroom.",
    "Swiss mushroom inspection stations report that Blusher/Panther Cap confusion is one of the most common dangerous mix-ups brought in by foragers.",
  ],
  images: [
    {
      filename: "01-full-mushroom.jpg",
      alt: "The Blusher mushroom showing brownish cap with veil patches and white stem in woodland",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Amanita_rubescens_2025_G1.jpg",
      author: "George Chernilevsky",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    {
      filename: "02-cap-detail.jpg",
      alt: "Blusher cap from above showing pinkish-brown surface with grey veil remnants among leaves",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:20210710_Amanita_rubescens_01.jpg",
      author: "Flocci Nivis",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    {
      filename: "03-mature-specimen.jpg",
      alt: "Cluster of young Blusher mushrooms with rounded caps heavily covered in veil patches",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Perlpilz_Amanita_rubescens_2.jpg",
      author: "Holger Krisp",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
    {
      filename: "04-cap-top.jpg",
      alt: "Top-down view of Blusher cap showing pinkish-brown surface among grass",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Schiermonnikoog_-_Parelamaniet_(Amanita_rubescens).jpg",
      author: "Rudolphous",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "05-field-context.jpg",
      alt: "Overturned Blusher specimen showing gills and damaged flesh on forest floor",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Amanita_rubescens_140867620.jpg",
      author: "jensu",
      license: "CC0",
      licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    },
  ],
};

export default species;
