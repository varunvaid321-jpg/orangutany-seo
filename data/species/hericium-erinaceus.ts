import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "hericium-erinaceus",
  commonName: "Lion's Mane",
  scientificName: "Hericium erinaceus",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Russulales",
    family: "Hericiaceae",
    genus: "Hericium",
  },
  summary:
    "Imagine a white waterfall frozen mid-cascade on the side of a tree. That's Lion's Mane — a bizarre, shaggy mushroom that looks like a wizard's beard and has Silicon Valley convinced it can supercharge your brain.",
  description:
    "Lion's Mane is having a moment. Scroll through any wellness influencer's feed and you'll find it sandwiched between matcha lattes and cold plunges — usually in capsule or powder form, marketed as a natural nootropic. And honestly? There's some science behind the hype. Studies have shown that compounds in Hericium erinaceus (hericenones and erinacines) can stimulate nerve growth factor (NGF) production, which is a big deal for brain health. Traditional Chinese medicine practitioners have been using it for centuries to support digestion and overall vitality, long before the supplement industry caught on.\n\nBut forget the capsules for a second — the mushroom itself is a showstopper. It doesn't look like any mushroom you've seen before. No cap. No gills. No stem to speak of. Instead, it forms a single globular clump of long, cascading white spines that dangle like icicles or a shaggy beard. Young specimens are bright white; older ones turn yellowish or even brownish. It's unmistakable once you know what you're looking at.\n\nIn the wild, Lion's Mane is a saprotroph (and sometimes a weak parasite) that grows on dead or dying hardwood trees — especially oaks, beeches, and maples. You'll usually spot it high up on a trunk or on a fallen log, fruiting in late summer through fall. It's also become one of the most popular species for home cultivation, since it grows well on supplemented hardwood sawdust blocks and produces flushes in just a couple weeks.",
  identification: {
    cap: "No traditional cap. The fruiting body is a single globular or irregular mass, typically 10-40 cm across, attached to wood at a single point. White when young, turning cream to yellowish-brown with age.",
    gills: "None — has hanging spines instead. This is what makes it so distinctive. Long, soft, icicle-like teeth (1-5 cm) dangle from the underside of the fruiting body. They start white and become brownish.",
    stem: "No real stem. The mushroom attaches directly to the wood substrate at one point, with the entire mass hanging or projecting outward like a frozen waterfall.",
    sporePrint: "White — though you'll rarely need this since the mushroom is so visually distinctive.",
    odor: "Mild and pleasant. Some describe a faint seafood-like smell, which makes sense — cooked Lion's Mane is often compared to lobster or crab.",
  },
  habitat:
    "Dead or dying hardwood trees, especially American beech, oak, maple, walnut, and sycamore. Grows from wounds or branch stubs on living trees, or on fallen logs and stumps. Prefers temperate forests with good moisture.",
  season: "Late summer through late fall — roughly August through November in most of North America. Can occasionally fruit into early winter in mild climates.",
  range:
    "Found across the temperate Northern Hemisphere — North America, Europe, and Asia. In North America, it's most common in the eastern half of the continent, from Canada down through the Appalachians. Also widely cultivated worldwide.",
  lookAlikes: [
    {
      name: "Bear's Head Tooth (Hericium americanum)",
      slug: "hericium-americanum",
      image: "lookalike-americanum.jpg",
      distinction:
        "Very similar but has branching structure — spines hang from multiple short branches rather than a single compact mass. Still edible and delicious. If it looks like a Lion's Mane but with distinct branches, it's probably this one.",
      externalUrl: "https://www.inaturalist.org/taxa/124335-Hericium-americanum",
      externalSource: "iNaturalist",
    },
    {
      name: "Coral Tooth (Hericium coralloides)",
      slug: "hericium-coralloides",
      image: "lookalike-coralloides.jpg",
      distinction:
        "Much more branched and coral-like. Spines are shorter (under 1 cm) and hang from an elaborate branching framework. Looks more like an underwater coral than a beard. Also edible.",
      externalUrl: "https://en.wikipedia.org/wiki/Hericium_coralloides",
      externalSource: "Wikipedia",
    },
    {
      name: "Tiered Tooth (Hericium cirrhatum)",
      image: "lookalike-cirrhatum.jpg",
      distinction:
        "Grows in shelf-like or tiered layers rather than a single globular mass. Spines are shorter and hang from the edges of overlapping caps. Found mainly in Europe. Edible but less common.",
      externalUrl: "https://www.inaturalist.org/taxa/351038-Hericium-cirrhatum",
      externalSource: "iNaturalist",
    },
  ],
  edibility: "edible",
  edibilityNote:
    "A prized edible with a meaty texture often compared to lobster or crab when seared in butter. Widely eaten fresh, dried, or as a supplement. No known toxic look-alikes in the Hericium genus — all species are edible. Best harvested when young and white; older yellowed specimens can taste bitter.",
  gbifKey: 5248508,
  stories: [
    {
      title: "A Hiker Finds a Football-Sized Specimen in the Smokies",
      text: "A trail runner on the Appalachian Trail near Clingmans Dome spotted a massive white mass on a dead beech tree in 2021. She initially thought it was some kind of foam or animal. After posting it on iNaturalist, the community confirmed it as one of the largest Lion's Mane specimens documented that year — roughly the size of a volleyball.",
      location: "Great Smoky Mountains, Tennessee, USA",
      source: "iNaturalist",
      sourceUrl: "https://www.inaturalist.org/",
    },
    {
      title: "How a Mycologist Launched a Supplement Empire",
      text: "Paul Stamets, arguably the most famous mycologist alive, has been championing Lion's Mane since the 1990s. His company Fungi Perfecti (makers of Host Defense) helped bring the mushroom from obscure forager's find to mainstream supplement aisle staple. Stamets credits his own daily Lion's Mane regimen for sustained mental clarity into his 60s.",
      location: "Shelton, Washington, USA",
      source: "Fungi Perfecti",
      sourceUrl: "https://fungi.com/",
    },
    {
      title: "A Chef Discovers 'Lobster of the Woods'",
      text: "Chef Alan Bergo, a well-known forager and wild food advocate in Minnesota, started featuring Lion's Mane on his restaurant menus after discovering that searing thick slabs in brown butter produces a texture and flavor eerily similar to lobster tail. His recipe for 'Lion's Mane steaks' went viral in the foraging community.",
      location: "Minneapolis, Minnesota, USA",
      source: "Forager Chef",
      sourceUrl: "https://foragerchef.com/",
    },
    {
      title: "Growing Lion's Mane in a Closet in Brooklyn",
      text: "A Reddit user in r/MushroomGrowers documented their first successful Lion's Mane grow in a converted coat closet in their Brooklyn apartment. Using a supplemented sawdust block and a simple humidity tent made from a plastic bag, they harvested over 400 grams across two flushes in under three weeks.",
      location: "Brooklyn, New York, USA",
      source: "r/MushroomGrowers",
      sourceUrl: "https://www.reddit.com/r/MushroomGrowers/",
    },
    {
      title: "Buddhist Monks and the Monkey Head Mushroom",
      text: "In China, Lion's Mane has been called hou tou gu (monkey head mushroom) for centuries. Buddhist monks reportedly used it as a tea substitute during meditation, believing it enhanced focus and calm. Historical texts from the Song Dynasty reference its use in supporting digestive health and overall vitality.",
      location: "China",
      source: "Traditional Chinese Medicine texts",
    },
  ],
  seoQueries: [
    "lion's mane mushroom benefits",
    "lion's mane identification",
    "white mushroom that looks like a beard",
    "hericium erinaceus identification",
    "lion's mane mushroom where to find",
    "lion's mane look alikes",
    "is lion's mane edible",
    "lion's mane brain benefits",
    "white shaggy mushroom on tree",
    "lion's mane vs bear's head tooth",
    "how to identify lion's mane in the wild",
    "lion's mane mushroom taste",
    "lion's mane nootropic",
    "mushroom that looks like white icicles",
    "lion's mane growing on oak tree",
  ],
  funFacts: [
    "Lion's Mane contains two unique compound families — hericenones and erinacines — that can cross the blood-brain barrier and stimulate the production of nerve growth factor (NGF). No other mushroom is known to do this.",
    "In Japan, it's called yamabushitake, named after the Yamabushi mountain monks whose flowing white robes the mushroom supposedly resembles.",
    "A single Lion's Mane fruiting body can weigh over 1 kg (2.2 lbs). The largest specimens on record were the size of a basketball.",
    "Lion's Mane is one of the few gourmet mushrooms you can successfully grow at home with minimal equipment — a sawdust block, a plastic bag, and some patience is all it takes.",
    "Despite its growing popularity as a supplement, Lion's Mane is actually listed as a threatened species in several European countries due to habitat loss from old-growth forest decline.",
  ],
  images: [
    {
      filename: "05-mature.jpg",
      alt: "Mature Lion's Mane mushroom with elongated white spines on tree bark",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Hericium_erinaceus_104664221.jpg",
      author: "Becky",
      license: "CC0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
    },
    {
      filename: "01-whole-fruiting-body.jpg",
      alt: "Lion's Mane mushroom showing full white globular fruiting body with cascading spines",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Hericium_erinaceus_02.jpg",
      author: "Vlastar",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "02-on-tree.jpg",
      alt: "Lion's Mane mushroom growing on a tree trunk in the wild",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Hericium_erinaceus_101875852.jpg",
      author: "Daniel Gillies",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    {
      filename: "03-close-up.jpg",
      alt: "Close-up of Lion's Mane showing white hanging spines and texture",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Hericium_erinaceus_102127376.jpg",
      author: "Alex",
      license: "CC0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
    },
    {
      filename: "04-wild-specimen.jpg",
      alt: "Wild Lion's Mane specimen on hardwood log showing characteristic shaggy appearance",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Hericium_erinaceus_102695873.jpg",
      author: "Hamilton Turner",
      license: "CC0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
    },
  ],
  identificationImages: {
    cap: "overall-shape.jpg",
    gills: "spine-detail.jpg",
  },
};

export default species;
