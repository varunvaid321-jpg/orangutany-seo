import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "amanita-gemmata",
  commonName: "Jewelled Amanita",
  scientificName: "Amanita gemmata",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Amanitaceae",
    genus: "Amanita",
  },
  summary:
    "The Jewelled Amanita is a beautiful golden-yellow mushroom sprinkled with white veil fragments that glitter like gemstones in the forest light. Do not let the charm fool you; it contains ibotenic acid and muscimol, the same toxins found in the Fly Agaric.",
  description:
    "Amanita gemmata sits in that frustrating category of mushrooms that are too pretty to ignore and too dangerous to pick. Its bright butter-yellow to golden cap, decorated with scattered white wart-like patches from the universal veil, makes it one of the more photogenic Amanitas. But photogenic is all it should ever be. The Jewelled Amanita contains variable levels of ibotenic acid and muscimol, and poisoning cases range from mild confusion to severe neurological symptoms including seizures.\n\nThis species is widespread across Europe and North America, fruiting in both coniferous and broadleaf forests from late spring through autumn. It is one of the earlier Amanitas to appear each year, sometimes showing up as early as May in warmer areas. The cap starts hemispherical and opens to broadly convex or flat, often losing its white patches to rain as it ages. The stem is white with a fragile, often ephemeral ring, and the base sits in a loose, collar-like volva that is easily missed if you do not dig carefully.\n\nThe Jewelled Amanita is frequently confused with edible species, particularly the Caesar's Mushroom (Amanita caesarea) in southern Europe. The Caesar's Mushroom has an orange cap with a clearly striate margin, yellow gills and stem, and a prominent sack-like volva. The Jewelled Amanita has white gills, a white stem, and a less distinct volva. Getting this wrong in a Mediterranean forest could ruin a meal or worse.",
  identification: {
    cap: "4-10 cm across. Hemispherical at first, expanding to convex or flat. Bright butter-yellow to golden-yellow, sometimes pale cream-yellow. Surface smooth, often with scattered white to cream veil patches (warts). Margin distinctly striate (lined) when mature.",
    gills: "White, free from the stem, closely spaced. Remain white throughout.",
    stem: "5-12 cm tall, white, slightly fibrous. Ring is thin and fragile, often disappearing quickly. Base has a small, collar-like or sack-like volva that may be reduced to a rim on the bulb.",
    sporePrint: "White.",
    odor: "Mild, not distinctive. Some describe a faint earthy or mushroomy scent.",
  },
  habitat:
    "Mycorrhizal with both conifers and broadleaf trees. Common in pine, spruce, oak, and beech forests. Found in sandy or well-drained soils, forest edges, and clearings.",
  season: "May through October. One of the earlier Amanitas to fruit, often appearing in late spring or early summer.",
  range:
    "Widespread across Europe and North America. Found from Scandinavia to the Mediterranean, and across the United States and Canada, particularly in the Pacific Northwest and northeastern states.",
  lookAlikes: [
    {
      name: "Caesar's Mushroom (Amanita caesarea)",
      slug: "amanita-caesarea",
      distinction:
        "The prized edible. Caesar's Mushroom has an orange (not yellow) cap, yellow gills and stem, and a prominent white sack-like volva. Jewelled Amanita has white gills, white stem, and a less conspicuous volva. Range overlap occurs in southern Europe.",
    },
    {
      name: "Fly Agaric (Amanita muscaria)",
      slug: "amanita-muscaria",
      distinction:
        "The classic red-and-white toadstool. Color is the obvious difference, but yellow-capped varieties of Fly Agaric (var. formosa) can look very similar to Jewelled Amanita. Fly Agaric is typically larger with a more robust stem and layered volva remnants at the base.",
    },
    {
      name: "Panther Cap (Amanita pantherina)",
      slug: "amanita-pantherina",
      distinction:
        "Brown to tan cap rather than yellow. Warts tend to be more regularly arranged. Has a distinctly rimmed, collar-like volva. Contains the same class of toxins but usually in higher concentrations.",
    },
  ],
  edibility: "toxic",
  edibilityNote:
    "Contains ibotenic acid and muscimol in variable amounts. Poisoning symptoms include dizziness, confusion, visual disturbances, muscle twitching, and in severe cases, seizures and loss of consciousness. Onset is typically 30 minutes to 2 hours after ingestion. Most patients recover with supportive care, but severe cases, especially in children, can be dangerous. Not recommended for consumption under any circumstances.",
  gbifKey: 5240292,
  stories: [
    {
      title: "Child Hospitalized After Backyard Encounter",
      text: "In 2019, a three-year-old in suburban Munich bit into a Jewelled Amanita growing under a pine tree in the family's garden. The child began vomiting within an hour and was taken to a children's hospital. After overnight observation and IV fluids, the child recovered fully.",
      location: "Munich, Bavaria, Germany",
    },
    {
      title: "Mistaken for Caesar's Mushroom in Tuscany",
      text: "An English tourist foraging near Siena in 2017 collected Jewelled Amanitas thinking they were the prized Caesar's Mushroom. A restaurant chef he showed them to immediately spotted the white gills (Caesar's has yellow) and refused to prepare them. The tourist later called it the luckiest meal he never ate.",
      location: "Siena, Tuscany, Italy",
    },
    {
      title: "Oregon Trail Mix-Up",
      text: "During a mushroom foray on the Oregon coast in 2020, a participant placed several Jewelled Amanitas in their basket alongside chanterelles. The foray leader caught the error during the sorting session, using the striate cap margin and white veil patches to identify the species.",
      location: "Tillamook, Oregon, USA",
    },
  ],
  seoQueries: [
    "jewelled amanita mushroom",
    "amanita gemmata identification",
    "jewelled amanita poisonous",
    "amanita gemmata toxicity",
    "yellow amanita with white spots",
    "jewelled amanita vs caesar's mushroom",
    "amanita gemmata look alikes",
    "is amanita gemmata edible",
    "golden yellow amanita mushroom",
    "jewelled amanita symptoms",
    "amanita gemmata habitat",
    "how to identify jewelled amanita",
  ],
  funFacts: [
    "The name 'gemmata' comes from the Latin for 'jewelled' or 'gemmed,' referring to the sparkling white veil patches that dot the cap like scattered gems.",
    "Jewelled Amanitas are among the earliest Amanitas to fruit each year, sometimes appearing in May when most other Amanita species are still months away from showing up.",
    "Rain can wash away all the white patches on the cap, leaving a smooth yellow mushroom that looks completely different from the typical description. This is when confusion with edible species becomes most dangerous.",
    "In some parts of eastern Europe, Amanita gemmata was historically considered edible after parboiling. Modern toxicology has firmly rejected this practice.",
  ],
  images: [
    {
      filename: "01-field.jpg",
      alt: "Jewelled Amanita (Amanita gemmata) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Amanita_gemmata_51945.jpg",
      author: "This image was created by user Ron Pastorino (Ronpast) at Mushroom Observer, a source for mycological images.You can con",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "02-young.jpg",
      alt: "Young Jewelled Amanita specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:20060909_Amanita_gemmata_young.jpg",
      author: "Eike Wulfmeyer",
      license: "CC BY-SA 3.0",
      licenseUrl: "http://creativecommons.org/licenses/by-sa/3.0/",
    },
    {
      filename: "03-field.jpg",
      alt: "Jewelled Amanita (Amanita gemmata) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Amanita_gemmata_von_hms.jpg",
      author: "Hans-Martin Scheibner",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
    {
      filename: "04-field.jpg",
      alt: "Jewelled Amanita (Amanita gemmata) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Karl_Johanssvamp,_Iduns_kokbok.png",
      author: "Elisabeth Östman (1869–1933)",
      license: "Public domain",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    },
    {
      filename: "05-field.jpg",
      alt: "Jewelled Amanita (Amanita gemmata) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Amanita_spec._-_Lindsey_3a.jpg",
      author: "James Lindsey",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
  ],
};

export default species;
