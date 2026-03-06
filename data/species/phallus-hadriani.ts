import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "phallus-hadriani",
  commonName: "Dune Stinkhorn",
  scientificName: "Phallus hadriani",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Phallales",
    family: "Phallaceae",
    genus: "Phallus",
  },
  summary:
    "A striking stinkhorn mushroom that erupts from a pinkish-purple \"egg\" and produces a foul-smelling, olive-green spore slime to attract flies. Found in sandy soils, dunes, mulched gardens, and disturbed ground. Technically edible in the egg stage, but the smell and appearance discourage most people from trying.",
  description:
    "Few mushrooms provoke as strong a reaction as Phallus hadriani. The name, the shape, the smell: everything about this fungus seems designed to get a response. The Dune Stinkhorn begins its life as a pinkish-purple gelatinous \"egg\" buried in sandy soil. Over the course of just a few hours, the egg ruptures and a pale, spongy stalk shoots upward at a remarkable speed, sometimes growing 10-15 cm in a single morning. The tip is coated in a dark olive-green spore mass called the gleba, which has a powerful odor best described as a combination of rotting meat and raw sewage.\n\nThe smell is the point. Unlike most mushrooms, which rely on wind to disperse their spores, stinkhorns outsource the job to flies. Blowflies, greenbottles, and other carrion-seeking insects are irresistibly drawn to the fetid gleba. They land on it, eat it, get spores stuck to their feet and bodies, and fly away to deposit them elsewhere. Within hours of emerging, the entire spore mass has been consumed by insects, leaving behind a clean, white, spongy stalk that looks nothing like the horror show it was that morning.\n\nPhallus hadriani is distinguished from the more common Phallus impudicus by the color of its egg: P. hadriani has a distinctly pinkish to lilac-purple volva (the remnant of the egg at the base), while P. impudicus has a white volva. P. hadriani also tends to favor sandier, more open habitats, including coastal dunes, sandy garden beds, and wood chip mulch, while P. impudicus is more of a woodland species.\n\nThe egg stage is technically edible and is eaten in parts of China and Southeast Asia, where stinkhorn eggs are considered a delicacy. They are sliced, revealing concentric layers of gelatinous and firm tissue, and added to soups or stir-fries. The flavor is described as mildly nutty or earthy. Once the stalk has emerged and the gleba is present, the smell makes consumption unthinkable for most Western palates.",
  identification: {
    cap: "Not a traditional cap. The head (receptacle) is thimble-shaped, 2-4 cm tall, with a pitted or honeycomb-like surface beneath the gleba. Covered in dark olive-green to blackish spore slime (gleba) when fresh. Once insects remove the gleba, the white pitted surface is revealed.",
    gills: "None. Stinkhorns do not have gills. Spores are produced in the gleba, a slimy spore mass that coats the head.",
    stem: "8-18 cm tall, 2-4 cm thick. White, spongy, hollow, and fragile. Composed of a network of chambers (like a sponge). Emerges rapidly from the egg over several hours. Base is enclosed in a pinkish-purple to lilac volva, the remnant of the original egg.",
    sporePrint: "Not applicable in the traditional sense. Spores are olive-green to olive-brown within the gleba and are dispersed by insects rather than by wind.",
    odor: "Extremely strong, fetid, resembling rotting meat or carrion. The smell can be detected from several meters away and is the primary spore dispersal mechanism. The odor is concentrated in the gleba and fades once insects consume it.",
  },
  habitat:
    "Saprotrophic. Found in sandy soils, coastal dunes, sandy gardens, wood chip mulch beds, and disturbed ground with buried organic matter. Prefers well-drained, sandy or loose substrates. Common in coastal areas, newly mulched landscapes, and garden borders. Also found in greenhouses and compost.",
  season:
    "Late spring through autumn, with peak fruiting in summer months (June through September). Fruits after warm rains when soil temperatures are above 15C (60F). Can appear sporadically into November in mild climates.",
  range:
    "Originally described from the Netherlands. Found across Europe, North America (particularly the eastern and central United States), parts of North Africa, and western Asia. Less common than Phallus impudicus but increasingly encountered in suburban landscapes due to wood chip mulch use.",
  lookAlikes: [
    {
      name: "Phallus impudicus (Common Stinkhorn)",
      distinction:
        "Very similar in shape and ecology, but has a white volva (not pinkish-purple). More commonly found in deciduous woodlands rather than sandy or open habitats. Both species are technically edible in the egg stage and repulsive in the mature stage.",
    },
    {
      name: "Phallus ravenelii (Ravenel's Stinkhorn)",
      distinction:
        "Found in eastern North America. Similar shape, but the head has a smoother, more granular surface and the volva is white to pale. Often found in garden mulch and disturbed areas. The head texture and volva color distinguish it.",
    },
    {
      name: "Clathrus ruber (Lattice Stinkhorn)",
      distinction:
        "Also a stinkhorn with foul-smelling gleba, but forms a distinctive red lattice or cage structure rather than a phallic stalk. Impossible to confuse visually once seen, though the smell is similar.",
    },
  ],
  edibility: "edible-with-caution",
  edibilityNote:
    "The egg stage is edible and consumed as a delicacy in parts of China and Southeast Asia. Eggs are sliced and added to soups or stir-fries, with a mild, slightly nutty flavor. Once the stalk has emerged and the gleba is present, the overwhelming carrion-like odor renders the mushroom unpalatable. Only consume the egg stage, and only if you can positively identify it. The mature fruiting body is not toxic but is practically inedible due to the smell.",
  gbifKey: 5244023,
  stories: [
    {
      title: "The Suburban Garden Shock",
      text: "A homeowner in suburban New Jersey posted on a gardening forum in 2021 after discovering what appeared to be a phallic, rotting object emerging from their freshly mulched flower bed. The thread, which went semi-viral, eventually identified the organism as Phallus hadriani. The homeowner's initial assumption had involved calling the police. A mycologist who responded noted this is the most common first reaction to a stinkhorn encounter.",
      location: "New Jersey, USA",
      source: "GardenWeb Forums",
    },
    {
      title: "The Dutch Dune Tradition",
      text: "In the coastal dune regions of the Netherlands, where Phallus hadriani was first described, the species is a well-known curiosity among local naturalists. Dutch mycological societies organize annual stinkhorn walks in the dune reserves near The Hague and Haarlem, where the pinkish-purple eggs can be found buried in sandy soil beneath scrub vegetation.",
      location: "The Hague, Netherlands",
      source: "Nederlandse Mycologische Vereniging",
    },
    {
      title: "The Chinese Egg Soup",
      text: "In Yunnan Province, China, stinkhorn eggs (including those of related Phallus species) are a prized ingredient in traditional soups. Vendors at morning markets in Kunming sell sliced stinkhorn eggs alongside other wild fungi. The eggs are added to chicken broth with goji berries and jujube dates, producing a dish that tourists find surprising given the reputation of the mature mushroom.",
      location: "Kunming, Yunnan, China",
      source: "Yunnan Wild Mushroom Market Documentation",
    },
    {
      title: "Victorian Prudishness and Stinkhorns",
      text: "Etty Darwin, Charles Darwin's daughter, was reportedly so offended by stinkhorns growing in the family's garden at Down House that she organized early-morning collection missions to remove them before they could mature. She burned them in secret to protect the sensibilities of the household maids. This story, widely repeated in mycological literature, speaks to the Victorian anxiety the mushroom's form provoked.",
      location: "Down House, Kent, England",
      source: "Victorian natural history correspondence",
    },
  ],
  seoQueries: [
    "phallus hadriani identification",
    "dune stinkhorn mushroom",
    "stinkhorn mushroom in garden",
    "pinkish purple mushroom egg in soil",
    "phallus hadriani vs phallus impudicus",
    "stinkhorn mushroom edible egg stage",
    "smelly mushroom in mulch",
    "stinkhorn mushroom identification",
    "mushroom that smells like rotting meat",
    "purple egg mushroom in garden",
    "are stinkhorn mushrooms edible",
    "stinkhorn mushroom attracting flies",
    "phallus hadriani sandy soil",
  ],
  funFacts: [
    "Phallus hadriani can grow from egg to full height in as little as four to six hours, making it one of the fastest-growing organisms in the natural world. The spongy structure expands by absorbing water rather than by building new cells.",
    "The foul smell of the gleba has been chemically analyzed and contains dimethyl disulfide, dimethyl trisulfide, and various indole compounds, all of which are also found in rotting animal tissue. The mimicry of carrion is precise enough to fool even experienced entomologists at first whiff.",
    "Flies that visit stinkhorns to feed on the gleba have been observed carrying viable spores on their bodies for up to 48 hours, dispersing them far beyond what wind alone could achieve.",
    "In traditional Chinese medicine, stinkhorn species have been used for centuries as remedies for joint inflammation and respiratory conditions. Modern research has identified bioactive polysaccharides in several Phallus species.",
  ],
  images: [],
};

export default species;
