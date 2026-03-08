import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "hypholoma-lateritium",
  commonName: "Brick Cap",
  scientificName: "Hypholoma lateritium",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Strophariaceae",
    genus: "Hypholoma",
  },
  summary:
    "A handsome brick-red mushroom that grows in dense clusters on hardwood stumps every autumn. Brick Cap is edible when properly cooked and positively identified, but it demands respect — its dangerous look-alikes include the deadly Funeral Bell and the toxic Sulphur Tuft. This is not a beginner's mushroom.",
  description:
    "Hypholoma lateritium — also known as Brick Tuft or Brick Cap — is one of autumn's most reliable woodland mushrooms, appearing in thick, overlapping clusters on dead hardwood stumps and buried roots from September through the first hard frosts. The caps are a distinctive brick-red to reddish-brown, darker at the center and paler toward the margins, often with remnants of pale veil tissue hanging from the cap edge in young specimens.\n\nThe Brick Cap has a complicated reputation. In North America and parts of Asia (especially Japan, where it's known as kuritake), it's been eaten for centuries and is considered a perfectly good edible mushroom with a mild, slightly nutty flavor. In much of Europe, it's been viewed with more suspicion — older field guides often list it as 'suspect' or 'avoid,' partly because of genuine confusion with the toxic Sulphur Tuft and partly because of an overly cautious mycological tradition.\n\nModern consensus is that Brick Cap is edible when thoroughly cooked, but it absolutely must be distinguished from Hypholoma fasciculare (Sulphur Tuft), which is toxic and bitter, and from Galerina marginata (Funeral Bell), which contains the same deadly amatoxins as the Death Cap. The Funeral Bell confusion is the truly dangerous one — Galerina can occasionally grow mixed in with Hypholoma clusters on the same stump. Every single mushroom in a cluster must be checked individually.",
  identification: {
    cap: "4–10 cm across, convex when young, flattening with age. Brick-red to reddish-brown, darkest at the center, fading to pale tan or yellowish at the margins. Surface smooth and slightly moist. Young caps often have whitish veil remnants hanging from the edges. The brick-red coloring is the most distinctive feature — Sulphur Tuft is sulfur-yellow, not red.",
    gills:
      "Attached to the stem (adnate). Pale yellowish-white when young, becoming olive-grey, then purplish-brown as spores mature. This color progression is important — Sulphur Tuft gills turn greenish-black. Crowded and thin.",
    stem: "5–12 cm tall, 0.5–1.5 cm wide. Pale yellowish above, darkening to rusty brown toward the base. No true ring (annulus), but may have a faint fibrous zone from the partial veil. This is critical: the Funeral Bell has a distinct membranous ring. If you see a proper ring, stop and re-examine.",
    sporePrint: "Purplish-brown to dark purple-grey.",
    odor: "Mild and pleasant, slightly mushroomy. Not distinctive. Importantly, it lacks the unpleasant bitter smell of Sulphur Tuft.",
  },
  habitat:
    "Grows exclusively as a saprobe on dead hardwood — stumps, fallen logs, and buried roots of oak, beech, maple, birch, and other deciduous trees. Almost always in dense overlapping clusters of 10–50+ fruiting bodies. Occasionally found on conifer wood but this is unusual. Common in deciduous and mixed forests, parks, and old orchards.",
  season:
    "Autumn through early winter, typically September to December. One of the later-fruiting woodland species — often still producing well into November when many other mushrooms have finished. Tolerates light frosts.",
  range:
    "Widespread across the temperate Northern Hemisphere. Common throughout Europe (UK, France, Germany, Scandinavia, Eastern Europe), across North America (especially the eastern United States and Pacific Northwest), and in East Asia (Japan, Korea, China). In Japan it's commercially harvested and sold as kuritake.",
  lookAlikes: [
    {
      name: "Sulphur Tuft (Hypholoma fasciculare)",
      slug: "hypholoma-fasciculare",
      image: "lookalike-fasciculare.jpg",
      distinction:
        "The most common confusion species. Cap is sulfur-yellow to greenish-yellow — NOT brick-red. Gills turn greenish-black with age (Brick Cap gills go purplish-brown). Taste is intensely, unmistakably bitter — if you nibble a tiny piece and spit it out, the bitterness is immediate and lingering. Toxic, causing severe gastrointestinal distress and potentially liver damage.",
      externalUrl:
        "https://www.inaturalist.org/taxa/48767-Hypholoma-fasciculare",
      externalSource: "iNaturalist",
    },
    {
      name: "Funeral Bell (Galerina marginata)",
      slug: "galerina-marginata",
      image: "lookalike-marginata.jpg",
      distinction:
        "DEADLY — contains amatoxins that destroy the liver, the same toxins found in the Death Cap. Much smaller than Brick Cap (cap 1.5–4 cm), uniform brown color without the brick-red tones, and crucially has a distinct membranous ring on the stem. Grows on decaying wood, sometimes mixed in with Hypholoma clusters. Check every single mushroom individually.",
      externalUrl:
        "https://www.inaturalist.org/taxa/154735-Galerina-marginata",
      externalSource: "iNaturalist",
    },
    {
      name: "Honey Fungus (Armillaria mellea)",
      slug: "armillaria-mellea",
      image: "lookalike-mellea.jpg",
      distinction:
        "Also grows in dense clusters on wood, but Honey Fungus has a prominent white ring on the stem, white spore print (not purplish-brown), and often has small dark scales on the cap center. Can grow on living trees as well as dead wood — it's a serious tree pathogen. Edible when thoroughly cooked but causes GI upset if undercooked.",
      externalUrl:
        "https://www.inaturalist.org/taxa/55950-Armillaria-mellea",
      externalSource: "iNaturalist",
    },
  ],
  edibility: "edible-with-caution",
  edibilityNote:
    "Edible when thoroughly cooked. Has a mild, slightly nutty flavor and firm texture that holds up well in soups, stews, and stir-fries. Widely eaten in Japan and North America. Must be positively distinguished from the deadly Funeral Bell (Galerina marginata) and the toxic Sulphur Tuft (Hypholoma fasciculare). Not recommended for beginners. Always cook thoroughly — raw or undercooked specimens may cause stomach upset.",
  gbifKey: 2533424,
  stories: [
    {
      title: "Japan's Beloved Kuritake",
      text: "In Japan, Hypholoma lateritium has been harvested and eaten for centuries under the name kuritake (栗茸, 'chestnut mushroom'). It appears regularly at autumn farmers' markets in rural Tohoku and Hokkaido, sold in bundled clusters still attached to chunks of wood. Japanese field guides uniformly list it as a good edible, and it features in traditional nabe (hot pot) dishes alongside enoki and shiitake.",
      location: "Tohoku and Hokkaido, Japan",
      source: "Japanese Mycological Society",
    },
    {
      title: "The Galerina Growing Among the Brick Caps",
      text: "A 2016 case study from British Columbia described a seasoned forager who collected a large cluster of what he identified as Brick Caps from an oak stump. After cooking and eating them, he developed symptoms consistent with amatoxin poisoning — delayed onset vomiting and liver enzyme elevation. Investigation revealed that several small Galerina marginata fruitbodies had been growing intermixed within the Hypholoma cluster. He recovered after hospital treatment, but the case became a widely cited warning in North American foraging communities.",
      location: "British Columbia, Canada",
      source: "North American Mycological Association",
      sourceUrl: "https://namyco.org/",
    },
    {
      title: "From 'Suspect' to 'Edible' — A Reputation Rehabilitated",
      text: "For most of the 20th century, European field guides listed Hypholoma lateritium as inedible, suspect, or mildly toxic. This reputation stemmed partly from confusion with Sulphur Tuft and partly from the European mycological tradition of erring heavily on the side of caution. Starting in the 1990s, as American and Japanese research confirmed its edibility, European guides gradually upgraded its status. Roger Phillips' landmark 'Mushrooms' (2006 edition) listed it as edible with caution.",
      location: "Europe",
      source: "Roger Phillips, Mushrooms (2006)",
    },
    {
      title: "A Clustered Bounty on the Appalachian Trail",
      text: "Foragers along the Appalachian Trail in the eastern United States consider Brick Caps one of the most reliable late-season mushrooms. A popular foraging blog documented finding over 15 kg of Brick Caps on a single half-mile stretch of trail in the Shenandoah Valley in November 2019, all growing on old oak stumps. The author noted that after the chanterelles and hen-of-the-woods are done, Brick Caps keep the season going well into the cold months.",
      location: "Shenandoah Valley, Virginia, USA",
      source: "Appalachian Foraging Blog",
    },
    {
      title: "The Taste Test That Tells All",
      text: "Mycologist David Arora, in his classic guide 'Mushrooms Demystified,' recommended a simple field test for anyone unsure whether they had Brick Cap or Sulphur Tuft: nibble a tiny piece of raw cap and spit it out. Sulphur Tuft is so aggressively, face-scrunchingly bitter that there is zero ambiguity. Brick Cap tastes mild to slightly bitter but never with that punishing chemical bitterness. Arora noted that this test is safe because you spit it out — no swallowing needed.",
      location: "California, USA",
      source: "David Arora, Mushrooms Demystified",
    },
  ],
  seoQueries: [
    "brick cap mushroom identification",
    "hypholoma lateritium edible",
    "brick tuft mushroom",
    "brick cap vs sulphur tuft",
    "is brick cap mushroom safe to eat",
    "red mushroom growing on stumps in clusters",
    "hypholoma lateritium vs galerina marginata",
    "brick cap mushroom look alikes",
    "kuritake mushroom Japan",
    "mushroom clusters on dead wood autumn",
    "brick cap mushroom recipe",
    "hypholoma lateritium poisonous",
    "how to identify brick cap mushroom",
    "sulphur tuft vs brick cap difference",
    "late season edible mushrooms on stumps",
  ],
  funFacts: [
    "Brick Caps can produce such dense clusters that a single oak stump may yield 2–3 kg of mushrooms in one flush. Foragers sometimes return to the same stump week after week as new flushes appear throughout autumn.",
    "In Japan, Hypholoma lateritium (kuritake) is one of the 'big five' wild mushrooms traditionally foraged in autumn, alongside matsutake, shiitake, enoki, and nameko. It's considered a reliable everyday mushroom rather than a delicacy.",
    "The species name 'lateritium' comes from the Latin word for brick (later = brick), referring to the cap color. It's one of the more accurately named mushrooms — the brick-red color really does look like old fired clay.",
    "Brick Caps are so cold-hardy that they can continue fruiting after light frosts that kill most other mushroom species. In mild winters, fresh specimens have been found as late as January in southern England and the Pacific Northwest.",
    "A single mature Brick Cap cluster can contain over 100 individual fruiting bodies, all connected by a shared mycelial network running through the decaying wood beneath. The entire cluster is essentially one organism putting up dozens of mushrooms simultaneously.",
  ],
  images: [
    {
      filename: "02-cluster.jpg",
      alt: "Large overlapping cluster of Brick Cap mushrooms showing range of cap colors from dark red center to pale margins",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Ziegelroter_Schwefelkopf_Hypholoma_lateritium.jpg",
      author: "H. Krisp",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
    {
      filename: "01-classic.jpg",
      alt: "Dense cluster of Hypholoma lateritium Brick Cap mushrooms with brick-red caps growing on a hardwood stump",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Hypholoma_lateritium_LC0148.jpg",
      author: "Lebrac",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "03-gills.jpg",
      alt: "Underside of Brick Cap mushroom showing pale yellowish gills turning purplish-brown",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Hypholoma_sublateritium_57356.jpg",
      author: "James Lindsey",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "04-young.jpg",
      alt: "Young Brick Cap mushrooms with convex caps and whitish veil remnants at cap margins",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Hypholoma_lateritium_01.jpg",
      author: "Jerzy Opioła",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "05-stump.jpg",
      alt: "Brick Cap mushrooms fruiting from a decaying oak stump in autumn deciduous forest",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Hypholoma_sublateritium_G3.jpg",
      author: "George Chernilevsky",
      license: "Public domain",
      licenseUrl: "",
    },
  ],
  identificationImages: {
    cap: "cap-detail.jpg",
    gills: "gills-detail.jpg",
    stem: "stem-detail.jpg",
  },
};

export default species;
