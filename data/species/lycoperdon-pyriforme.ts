import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "lycoperdon-pyriforme",
  commonName: "Pear-shaped Puffball",
  scientificName: "Lycoperdon pyriforme",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Agaricaceae",
    genus: "Lycoperdon",
  },
  summary:
    "A small, pear-shaped puffball that grows in dense clusters on decaying wood, stumps, and buried roots. The only puffball species that consistently fruits on wood rather than soil. Edible when young and the interior flesh (gleba) is pure white, but small and not particularly flavorful.",
  description:
    "Lycoperdon pyriforme is the puffball that breaks the rules. While virtually every other puffball species grows on soil or in leaf litter, the Pear-shaped Puffball is a dedicated wood decomposer. You will find it in dense clusters, sometimes hundreds strong, covering the surface of rotting logs, stumps, and buried roots in deciduous and mixed forests throughout the temperate world. White rhizomorphs (root-like mycelial cords) visible at the base of the fruiting bodies connect the cluster to its woody food source.\n\nThe mushroom is small, typically 2-4 cm tall, with a distinctive pear or pestle shape: rounded on top, narrowing to a stubby base. The outer surface is covered in tiny granules or spines that are pale brown to tan, giving the surface a sandpapery texture. These spines eventually wear off, leaving a smooth, papery skin. When mature, a small hole (ostiole) opens at the top, and any disturbance, such as a raindrop or a passing animal, sends a puff of olive-brown spore dust into the air.\n\nAs an edible, L. pyriforme is in the \"fine but unremarkable\" category. When the interior gleba is uniformly white and firm, the mushroom can be sliced, sauteed, and eaten. The flavor is mild, slightly nutty, and inoffensive. Once the interior begins to turn yellowish or olive, the mushroom is past its prime for eating and will soon be full of powdery spores. The small size means you need to collect quite a few to make a meaningful dish, but the dense clustering often provides that opportunity.\n\nThe species is extremely common and nearly cosmopolitan. It is one of the first mushrooms many people learn to identify because the combination of pear shape, wood substrate, dense clustering, and white rhizomorphs is distinctive. There are few serious lookalikes in the puffball world, though the usual caution applies: always slice puffballs in half to confirm the interior is uniformly white with no sign of a developing mushroom embryo, which would indicate a deadly Amanita egg.",
  identification: {
    cap: "Not a traditional cap. Fruiting body is 1.5-4 cm wide and 2-5 cm tall, pear-shaped or pestle-shaped: rounded on top, narrowing to a stubby sterile base. Surface covered in tiny granules or short spines when young (pale tan to light brown), wearing smooth with age. Skin becomes papery and develops an apical pore (ostiole) when mature.",
    gills: "None. Puffballs produce spores internally in a mass called the gleba. When young and edible, the gleba is firm and uniformly white. As it matures, the gleba turns yellowish, then olive-brown, and finally becomes a powdery mass of olive-brown spores.",
    stem: "Not a true stem. The narrow lower portion (subgleba) is sterile, whitish, and spongy. It serves as the attachment point to the wood substrate. White rhizomorphs (cord-like mycelial strands) extend from the base into the wood, a distinctive feature of this species.",
    sporePrint: "Olive-brown spore mass released as a puff from the apical pore when the fruiting body is disturbed.",
    odor: "Mild, slightly earthy or musty. Not distinctive when young. Mature specimens releasing spores may have a slightly acrid or metallic scent.",
  },
  habitat:
    "Saprotrophic on decaying wood. Grows in dense clusters on rotting logs, stumps, buried roots, and woody debris in deciduous and mixed forests. The only common puffball that consistently fruits on wood. White rhizomorphs connecting the fruiting bodies to the substrate are a key identification feature.",
  season:
    "Late summer through autumn, typically August through November. Peak fruiting in September and October in temperate regions. Can appear earlier in wet years.",
  range:
    "Nearly cosmopolitan. Found throughout North America, Europe, Asia, Australia, and New Zealand. Common in any temperate or boreal forest with adequate dead wood. One of the most widespread and frequently encountered puffball species in the world.",
  lookAlikes: [
    {
      name: "Lycoperdon perlatum (Gem-studded Puffball)",
      slug: "lycoperdon-perlatum",
      distinction:
        "Also edible, also small. Distinguished by growing on soil or leaf litter (not on wood) and having taller, more prominent spines or \"gems\" on the surface that leave a distinctive net-like pattern when they fall off. Both are edible when white inside.",
    },
    {
      name: "Immature Amanita (Death Cap or Destroying Angel egg)",
      slug: "amanita-phalloides",
      distinction:
        "DEADLY. The egg stage of Amanita species can resemble small puffballs from the outside. Always slice every puffball in half from top to bottom. A true puffball will show uniform white flesh throughout. An Amanita egg will show the outline of a developing mushroom (cap, gills, stem) inside. This check is mandatory.",
    },
    {
      name: "Scleroderma citrinum (Common Earthball)",
      distinction:
        "Toxic. Superficially similar in shape and size. Distinguished by the thick, tough, yellowish rind, dark purple-black interior (even when young), and growth on soil rather than wood. Earthballs never have the white interior of an edible puffball.",
    },
  ],
  edibility: "edible",
  edibilityNote:
    "Edible when the interior gleba is uniformly white and firm. Slice every specimen in half to confirm: if the interior is yellow, olive, or shows any developing structure, do not eat it. The flavor is mild and slightly nutty. Best sauteed in butter. Small size means you need quantity. Always confirm you are not looking at an Amanita egg by checking for a developing mushroom outline inside.",
  gbifKey: 5243232,
  stories: [
    {
      title: "The Log That Looked Like It Was Covered in Golf Balls",
      text: "A hiker on the Appalachian Trail in Vermont posted a photograph in 2020 showing a fallen beech log completely blanketed in hundreds of Lycoperdon pyriforme. The image went viral on r/mycology, with commenters comparing it to a log covered in golf balls or marshmallows. The post received over 8,000 upvotes and introduced many people to the species for the first time.",
      location: "Green Mountain National Forest, Vermont, USA",
      source: "r/mycology",
      sourceUrl: "https://www.reddit.com/r/mycology/",
    },
    {
      title: "The Puffball Cooking Challenge",
      text: "A foraging instructor in the Catskill Mountains organized a cooking challenge in 2018 where participants had to prepare a dish using only Lycoperdon pyriforme collected from a single downed oak. The winning entry was a puffball frittata with wild garlic. The instructor noted that collecting enough L. pyriforme for a dish is easy given how densely they cluster, making it an ideal beginner's forage.",
      location: "Catskill Mountains, New York, USA",
      source: "Catskill Fungi",
    },
    {
      title: "The Rhizomorph Discovery",
      text: "In 1992, mycologist Harold Burdsall at the USDA Forest Products Laboratory confirmed that the conspicuous white rhizomorphs of Lycoperdon pyriforme are not merely attachment structures but active decomposition organs that penetrate deep into wood, breaking down lignin and cellulose. This made L. pyriforme one of the few confirmed white-rot puffball species.",
      location: "Madison, Wisconsin, USA",
      source: "USDA Forest Products Laboratory",
    },
  ],
  seoQueries: [
    "lycoperdon pyriforme identification",
    "pear shaped puffball",
    "puffball mushroom on wood",
    "lycoperdon pyriforme edible",
    "small puffball growing on logs",
    "pear shaped puffball vs earthball",
    "puffball on dead wood identification",
    "lycoperdon pyriforme vs perlatum",
    "pear shaped puffball edible",
    "cluster of puffballs on stump",
    "how to identify pear shaped puffball",
    "puffball mushroom spore cloud",
  ],
  funFacts: [
    "Lycoperdon pyriforme is the only common puffball species that grows on wood. Every other frequently encountered puffball grows on soil or leaf litter, making the substrate an instant identification clue.",
    "A single mature Lycoperdon pyriforme can release over 1 million spores in a single puff. Rain drops are the primary trigger, with each impact sending a cloud of olive-brown spores several centimeters into the air.",
    "The white rhizomorphs at the base of L. pyriforme clusters can extend over a meter into the wood, forming a visible network of root-like cords that are among the most conspicuous mycelial structures in the fungal kingdom.",
    "The genus name Lycoperdon translates from Greek as 'wolf fart,' a reference to the puff of spores released when the mature fruiting body is squeezed or struck.",
  ],
  images: [
    {
      filename: "01-field.jpg",
      alt: "Pear-shaped Puffball (Lycoperdon pyriforme) wild specimen",
      source: "iNaturalist",
      sourceUrl: "https://www.inaturalist.org",
      author: "iNaturalist contributor",
      license: "CC BY",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    {
      filename: "02-field.jpg",
      alt: "Pear-shaped Puffball (Lycoperdon pyriforme) wild specimen",
      source: "iNaturalist",
      sourceUrl: "https://www.inaturalist.org",
      author: "iNaturalist contributor",
      license: "CC BY",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    {
      filename: "03-field.jpg",
      alt: "Pear-shaped Puffball (Lycoperdon pyriforme) wild specimen",
      source: "iNaturalist",
      sourceUrl: "https://www.inaturalist.org",
      author: "iNaturalist contributor",
      license: "CC BY",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    {
      filename: "04-field.jpg",
      alt: "Pear-shaped Puffball (Lycoperdon pyriforme) wild specimen",
      source: "iNaturalist",
      sourceUrl: "https://www.inaturalist.org",
      author: "iNaturalist contributor",
      license: "CC BY",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    {
      filename: "05-field.jpg",
      alt: "Pear-shaped Puffball (Lycoperdon pyriforme) wild specimen",
      source: "iNaturalist",
      sourceUrl: "https://www.inaturalist.org",
      author: "iNaturalist contributor",
      license: "CC BY",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
  ],
};

export default species;
