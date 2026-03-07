import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "suillus-luteus",
  commonName: "Slippery Jack",
  scientificName: "Suillus luteus",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Boletales",
    family: "Suillaceae",
    genus: "Suillus",
  },
  summary:
    "The most common bolete in pine plantations worldwide, and the mushroom that divides foragers into two camps: those who peel the slimy cap skin and enjoy a decent meal, and those who refuse to touch anything that viscous. Suillus luteus is not glamorous, but it is abundant, easy to identify, and free.",
  description:
    "Walk into any Scots pine or Monterey pine plantation after autumn rain, and you will likely find Slippery Jacks. They are everywhere, often in absurd quantities, pushing up through needle litter in troops of dozens. The common name is perfectly descriptive: the cap is covered in a thick, glutinous slime layer that makes the mushroom feel like it has been dipped in petroleum jelly. This slime (technically a layer of gelatinized cuticle) is the mushroom's most distinctive feature and also its biggest obstacle to popularity. Most experienced foragers peel it off before cooking.\n\nUnderneath the slime, Suillus luteus is a perfectly serviceable bolete. It has pores rather than gills, a white to pale yellow spongy layer on the underside of the cap that darkens to ochre-yellow with age. The stem bears a distinctive membranous ring (veil remnant) that is white above and purple-brown below. This ring, combined with the slimy cap and association with two-needle pines, makes identification straightforward. There are very few dangerous look-alikes.\n\nThe flavor is mild, slightly nutty, and improves significantly when the slimy cuticle is removed and the mushroom is cooked thoroughly. In Eastern Europe and Russia, Slippery Jacks are a staple preserve; they are pickled, marinated, dried, and added to soups by the jarful. In Poland and the Baltic states, autumn weekends in pine forests yield baskets upon baskets. The mushroom is not a gourmet item, but it is the honest, working-class bolete that feeds more families than any porcini ever will.",
  identification: {
    cap: "5-12 cm across. Convex, becoming flatter with age. Dark chocolate brown to chestnut brown, covered in a thick, glossy, glutinous slime layer that is especially pronounced in wet weather. The slime peels off easily in a single sheet, revealing yellowish flesh beneath.",
    gills: "No gills. Has a spongy pore layer (tubes) on the underside. Pores are small, angular, pale yellow when young, darkening to ochre-yellow or olive-yellow with age. The pore surface does not bruise significantly.",
    stem: "5-10 cm tall, 1.5-3 cm thick. Pale yellow above the ring, whitish to brownish below. Has a prominent membranous ring (annulus) partway up, which is white on the upper surface and purple-brown on the lower. Below the ring, the stem surface has fine granular dots (glandular dots).",
    sporePrint: "Olive-brown to cinnamon-brown.",
    odor: "Mild, slightly fruity. Not strongly distinctive.",
  },
  habitat:
    "Strictly mycorrhizal with two-needle pines (Pinus sylvestris, P. nigra, P. radiata, P. mugo, and others in the subgenus Pinus). Found in pine forests, plantations, parks, and anywhere two-needle pines grow. Prefers sandy or acidic soils. Often the most abundant bolete in pine plantations.",
  season:
    "Late summer through late autumn, typically August through November. Fruits prolifically after rain, especially when nights begin to cool. Can appear in enormous flushes in productive years.",
  range:
    "Native to Europe and northern Asia. Introduced worldwide wherever Scots pine and other two-needle pines have been planted, including North America, South America (Chile, Argentina), Australia, New Zealand, and southern Africa. One of the most widely distributed bolete species on Earth.",
  lookAlikes: [
    {
      name: "Suillus granulatus (Weeping Bolete)",
      distinction:
        "Very similar in size, color, and habitat. The key difference: S. granulatus lacks a ring on the stem. It also exudes milky droplets from the pore surface when young and fresh, which S. luteus does not. Both are edible, so confusion is harmless, but the ring is the quickest way to tell them apart.",
      externalUrl: "https://en.wikipedia.org/wiki/Suillus_granulatus",
      externalSource: "Wikipedia",
    },
    {
      name: "Suillus collinitus",
      distinction:
        "Has a similar slimy brown cap but is associated with Mediterranean pines (P. pinaster, P. halepensis). The cap tends to have pinkish-brown tones, and the stem base often shows pinkish mycelium. Also edible. Mainly a concern in southern Europe.",
      externalUrl: "https://en.wikipedia.org/wiki/Suillus_collinitus",
      externalSource: "Wikipedia",
    },
    {
      name: "Suillus bovinus (Bovine Bolete)",
      distinction:
        "Smaller, with a paler, more olive-toned cap that is less slimy. Lacks a ring. The pore surface has larger, more angular, almost compound pores that look distinctly different from the fine pores of S. luteus. Also edible but considered inferior. Often grows alongside S. luteus in pine forests.",
      externalUrl: "https://en.wikipedia.org/wiki/Suillus_bovinus",
      externalSource: "Wikipedia",
    },
  ],
  edibility: "edible",
  edibilityNote:
    "Edible and widely consumed, especially in Eastern Europe. The slimy cap cuticle should be peeled off before cooking, as it has a laxative effect in some people and an unpleasant texture. The pore layer can become soggy in older specimens and is sometimes removed as well. Best prepared by slicing and sauteing in butter, pickling, marinating, or drying. Drying concentrates the mild flavor significantly. Some individuals experience mild gastrointestinal upset, so try a small amount the first time.",
  gbifKey: 7777157,
  stories: [
    {
      title: "Polish Forest Weekends",
      text: "A Polish-American forager described how every September and October of her childhood, the entire extended family drove to pine forests outside Bialystok to collect Slippery Jacks by the bushel. Her grandmother peeled and sliced them, then preserved them in vinegar with bay leaves, allspice, and onion. The jars lined the cellar shelves and were opened throughout winter for soups and pierogi fillings.",
      location: "Bialystok, Poland",
      source: "r/foraging",
    },
    {
      title: "Invasive Pines, Invasive Boletes in Chile",
      text: "When Pinus radiata was planted across central Chile for timber production, Suillus luteus hitchhiked along on the seedling roots. By the 2000s, Slippery Jacks were fruiting prolifically in Chilean pine plantations where no boletes had existed before. Local Mapuche communities, who had no cultural tradition of mushroom consumption, were introduced to the species by European immigrants and now collect them regularly.",
      location: "Bio-Bio Region, Chile",
      source: "Chilean Mycological Society",
    },
    {
      title: "Russian Mushroom Train Tradition",
      text: "During the Soviet era, trains heading out of Moscow on autumn weekends were packed with families carrying baskets and knives, bound for pine forests to collect mushrooms. Suillus luteus, called maslyonok (from maslo, meaning butter, a reference to the slippery cap), was the most commonly collected species. A Russian mycologist recalled that his grandmother could peel and slice 50 Slippery Jacks in under 20 minutes without looking at them.",
      location: "Moscow Oblast, Russia",
      source: "Russian Mycological Society",
    },
  ],
  seoQueries: [
    "slippery jack mushroom identification",
    "suillus luteus edible",
    "slimy brown mushroom under pine trees",
    "slippery jack look alikes",
    "how to prepare slippery jack mushrooms",
    "suillus luteus recipe",
    "bolete with ring on stem",
    "mushroom under scots pine",
    "slippery jack vs weeping bolete",
    "can you eat slippery jack mushrooms",
    "slippery jack mushroom peel skin",
    "suillus luteus habitat",
    "pine forest mushroom identification",
  ],
  funFacts: [
    "The slimy cap cuticle of Suillus luteus contains arabinogalactan and other polysaccharides that are responsible for both its viscous texture and its mild laxative effect. Peeling the cuticle before cooking eliminates this issue entirely.",
    "Suillus luteus has followed two-needle pines around the world as a 'mycological hitchhiker.' Wherever Scots pine or Monterey pine has been planted for timber, the Slippery Jack has eventually appeared, traveling on inoculated roots. It is now found on every inhabited continent.",
    "In Russia, maslyata (plural of maslyonok, the Russian name for Suillus species) are the single most commonly collected wild mushroom genus. Annual household harvest of Suillus species in Russia is estimated at tens of thousands of tonnes.",
    "Despite being one of the most abundant edible mushrooms in the world, Slippery Jacks are rarely sold commercially because their slimy texture, tendency to become waterlogged, and short shelf life make them unsuitable for retail. They remain strictly a forager's mushroom.",
  ],
  images: [],
};

export default species;
