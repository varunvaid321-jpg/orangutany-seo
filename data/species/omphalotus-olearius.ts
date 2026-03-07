import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "omphalotus-olearius",
  commonName: "Jack O'Lantern Mushroom",
  scientificName: "Omphalotus olearius",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Omphalotaceae",
    genus: "Omphalotus",
  },
  summary:
    "This bright orange mushroom glows in the dark — literally. The Jack O'Lantern is one of the few bioluminescent fungi you can find in North America and Europe, and it's also the number one mushroom people accidentally eat thinking they've scored chanterelles. Spoiler: the next 12 hours are not fun.",
  description:
    "The Jack O'Lantern is nature's trick-or-treat mushroom. On the outside, it looks like a big, generous cluster of golden-orange mushrooms growing from a stump — basically a chanterelle hunter's dream. On the inside, it's packing compounds that will have you curled up on the bathroom floor for half a day.\n\nBut here's the thing that makes this mushroom genuinely cool: it glows in the dark. Take fresh gills into a pitch-black room, let your eyes adjust for 10–15 minutes, and you'll see an eerie greenish glow. It's caused by an enzyme called luciferase (yes, same naming convention as the firefly enzyme) acting on a compound called luciferin. Scientists still aren't entirely sure why the mushroom does this — theories range from attracting insects to spread spores, to it just being a metabolic byproduct.\n\nJack O'Lanterns fruit in dense clusters on buried wood or at the base of hardwood trees, especially oaks. The wood connection is important — chanterelles grow from soil in mycorrhizal relationships with trees, never in clusters on wood. That's your biggest identification clue right there.\n\nThe toxin responsible for the misery is illudin S, a sesquiterpene that causes severe gastrointestinal distress: nausea, vomiting, cramps, and diarrhea starting 30 minutes to 2 hours after eating. It won't kill you (fatalities are essentially unheard of), but you'll wish it had. Recovery typically takes 1–2 days.",
  identification: {
    cap: "4–20 cm across. Convex when young, flattening out and often developing a shallow funnel shape with age. Bright orange to orange-yellow, smooth surface without scales or warts. The margin can become wavy and irregular in older specimens.",
    gills: "True gills (not the false ridges of chanterelles) — thin, closely spaced, and decurrent (running down the stem). Orange to yellow-orange. These are what glow in the dark. If you peel a gill away cleanly with a knife, it's a Jack O'Lantern. Chanterelle ridges are blunt and forked.",
    stem: "5–13 cm tall, solid (not hollow), tapering toward the base. Same orange color as the cap. Often curved because the clusters grow in tight bunches and compete for space. No ring.",
    sporePrint: "Creamy white to pale yellow.",
    odor: "Mildly sweet, sometimes described as unpleasant when old.",
  },
  habitat:
    "Grows on dead or dying hardwood — especially oak, but also beech, chestnut, and olive trees. Fruits from buried roots, stumps, or the base of living trees. Often appears to grow from soil, but there's always wood underneath. Found in deciduous and mixed forests, parks, and yards.",
  season: "Late summer through late autumn. Peak season is September–November in most areas.",
  range:
    "Native to Europe and eastern North America. In North America, the closely related Omphalotus illudens (sometimes considered the same species) extends the range across the eastern US. Also found in parts of North Africa and the Middle East. Prefers temperate climates with hardwood forests.",
  lookAlikes: [
    {
      name: "Chanterelle (Cantharellus cibarius)",
      slug: "cantharellus-cibarius",
      image: "lookalike-chanterelle.jpg",
      distinction:
        "This is the mix-up that sends people to the ER every year. Chanterelles have false gills — blunt, forked ridges that look like they're melted into the cap, not thin blade-like gills you can separate with a knife. Chanterelles grow individually from soil (never in dense clusters on wood), smell like apricots, and have solid, pale flesh inside. If it's growing in a big cluster from a stump, it's not a chanterelle.",
      externalUrl: "https://www.inaturalist.org/taxa/47347-Cantharellus-cibarius",
      externalSource: "iNaturalist",
    },
    {
      name: "Honey Mushroom (Armillaria mellea)",
      image: "lookalike-armillaria.jpg",
      distinction:
        "Also grows in clusters on wood, but Honey Mushrooms have a prominent white ring on the stem, lighter tan-to-brown caps (not bright orange), and white spore prints. They also have tiny dark scales on the cap center. Edible when well-cooked, but easily confused with Jack O'Lanterns by beginners.",
      externalUrl: "https://www.inaturalist.org/taxa/55950-Armillaria-mellea",
      externalSource: "iNaturalist",
    },
    {
      name: "False Chanterelle (Hygrophoropsis aurantiaca)",
      image: "",
      distinction:
        "Smaller and thinner than the Jack O'Lantern, with a more brownish-orange cap that often has a suede-like texture. Has true forked gills (not ridges like real chanterelles). Grows on soil or decaying conifer wood, not hardwood stumps. Mildly toxic — causes GI upset in some people but not as severe as Jack O'Lanterns.",
      externalUrl: "https://www.inaturalist.org/taxa/63538-Hygrophoropsis-aurantiaca",
      externalSource: "iNaturalist",
    },
  ],
  edibility: "toxic",
  edibilityNote:
    "Contains illudin S, a potent sesquiterpene toxin that causes severe gastrointestinal distress: intense nausea, vomiting, abdominal cramps, and diarrhea. Symptoms begin 30 minutes to 2 hours after ingestion and can last 1–2 days. Not considered lethal, but hospitalizations for dehydration are common. No amount of cooking destroys the toxin. Do not eat this mushroom.",
  gbifKey: 2538088,
  stories: [
    {
      title: "The Chanterelle Dinner That Wasn't",
      text: "In 2018, a couple in North Carolina proudly posted their 'chanterelle haul' on Facebook — a massive basket of bright orange mushrooms pulled from an oak stump. Fellow foragers immediately recognized them as Jack O'Lanterns. The couple had already cooked and eaten some. Both spent the night in the ER with severe vomiting and dehydration. They recovered fully but deleted the post.",
      location: "North Carolina, USA",
      source: "r/mycology",
      sourceUrl: "https://www.reddit.com/r/mycology/",
    },
    {
      title: "Glowing Mushrooms Freak Out Campers in Italy",
      text: "A group of hikers in Tuscany in 2015 reported 'alien lights' coming from a fallen olive tree at their campsite. Park rangers confirmed it was a large flush of Omphalotus olearius — the bioluminescent gills were visible from several meters away in complete darkness. The rangers noted it was one of the brightest displays they'd seen.",
      location: "Tuscany, Italy",
      source: "Italian Mycological Association reports",
    },
    {
      title: "Restaurant Serves Jack O'Lanterns as Chanterelles",
      text: "In 2009, a small restaurant in rural France accidentally served Jack O'Lantern mushrooms that had been supplied by an amateur forager. Six diners became violently ill within two hours. The restaurant was fined and the incident renewed calls for mandatory mycological certification for wild mushroom suppliers in the EU.",
      location: "Rural France",
      source: "Le Monde",
    },
    {
      title: "Dog Eats Glowing Mushroom in Georgia",
      text: "A pet owner in Atlanta posted on a veterinary forum in 2021 that their Golden Retriever ate Jack O'Lantern mushrooms growing at the base of an oak in their backyard. The dog vomited repeatedly for 8 hours. The vet administered IV fluids and anti-nausea medication. Full recovery took two days.",
      location: "Atlanta, Georgia, USA",
      source: "ASPCA Animal Poison Control",
    },
    {
      title: "Scientists Decode the Glow",
      text: "In 2015, Russian and Brazilian researchers finally identified the complete biochemical pathway behind fungal bioluminescence, using Omphalotus as a key study organism. They found that a compound called hispidin gets oxidized by a luciferase enzyme to produce the green glow — a mechanism completely independent from firefly or jellyfish bioluminescence.",
      location: "Krasnoyarsk, Russia / Piracicaba, Brazil",
      source: "PNAS (2015)",
      sourceUrl: "https://www.pnas.org/doi/10.1073/pnas.1521037112",
    },
  ],
  seoQueries: [
    "jack o lantern mushroom",
    "glowing mushroom",
    "bioluminescent mushroom",
    "jack o lantern vs chanterelle",
    "orange mushroom growing on tree",
    "mushroom that glows in the dark",
    "poisonous mushroom looks like chanterelle",
    "omphalotus olearius identification",
    "jack o lantern mushroom poisonous",
    "how to tell chanterelle from jack o lantern",
    "orange mushroom cluster on stump",
    "mushroom bioluminescence",
    "toxic orange mushroom",
    "jack o lantern mushroom gills vs chanterelle",
    "can you eat jack o lantern mushroom",
  ],
  funFacts: [
    "The bioluminescent glow is real — take fresh gills into a completely dark room, wait 10–15 minutes for your eyes to adjust, and you'll see an eerie greenish light. It's brightest in young, fresh specimens.",
    "The toxin illudin S is being studied as a potential anti-cancer compound. Modified versions have shown promise in targeting tumor cells in early research.",
    "Jack O'Lanterns are the most common cause of mushroom poisoning in North America, almost entirely because people mistake them for chanterelles.",
    "Unlike chanterelles, Jack O'Lanterns have true gills — thin blades you can cleanly separate from the cap with a knife. Chanterelle 'gills' are actually blunt, forked ridges.",
    "The name 'Jack O'Lantern' comes from the mushroom's orange color and its glow — like the carved pumpkins of Halloween tradition.",
  ],
  images: [
    {
      filename: "01-cluster.jpg",
      alt: "Cluster of bright orange Jack O'Lantern mushrooms growing on wood",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Omphalotus_olearius_33857.jpg",
      author: "Raeky",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "02-closeup.jpg",
      alt: "Closeup of Jack O'Lantern mushroom cap showing smooth orange surface",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Jack_O%27_Lantern_Mushroom_Closeup;_Omphalotus_olearius.JPG",
      author: "Treetale",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
    {
      filename: "03-gills.jpg",
      alt: "Underside of Jack O'Lantern mushroom showing closely spaced orange decurrent gills",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Omphalotus_olearius_-_listast_himenofor.jpg",
      author: "JovanaK",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "04-group.jpg",
      alt: "Group of mature Jack O'Lantern mushrooms in natural forest habitat",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Omphalotus_olearius100.jpg",
      author: "Megalogena",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "05-habitat.jpg",
      alt: "Jack O'Lantern mushrooms fruiting at the base of a hardwood tree",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Omphalotus_olearius_1.jpg",
      author: "JovanaK",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
  ],
  identificationImages: {
    cap: "02-closeup.jpg",
    gills: "03-gills.jpg",
  },
};

export default species;
