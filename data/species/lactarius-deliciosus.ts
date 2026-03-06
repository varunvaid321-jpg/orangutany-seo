import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "lactarius-deliciosus",
  commonName: "Saffron Milk Cap",
  scientificName: "Lactarius deliciosus",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Russulales",
    family: "Russulaceae",
    genus: "Lactarius",
  },
  summary:
    "Cut the flesh and it bleeds carrot-orange milk. That is the test, and that is the magic. Lactarius deliciosus has been prized across the Mediterranean for over two thousand years, and the Romans named it 'deliciosus' for a reason. Just make sure the milk is orange, not white.",
  description:
    "There are few mushrooms in the world with a history as long and well-documented as the Saffron Milk Cap. The ancient Romans considered it one of the finest edible fungi, and Pliny the Elder wrote about it. It appears in Roman frescoes and mosaics. The species epithet 'deliciosus' was not given lightly; Linnaeus himself named it in 1753, preserving a culinary tradition that stretches back millennia.\n\nThe identification is satisfying in its certainty. Cut or break the flesh, and it exudes a bright carrot-orange to saffron-colored latex (milk). This milk does not change to another color immediately, though it may slowly stain greenish after prolonged exposure to air. The cap is orange with darker concentric zones, slightly sticky when wet, and develops a central depression that gives it a vase-like shape at maturity. The gills are orange. The stem is orange. Everything is orange. Combined with its strict association with pines, this mushroom is one of the most confidently identifiable edible species in the temperate world.\n\nIn Spain, where it is called niscalo or rovellon, it is the most popular wild mushroom and is sold in every autumn market. Catalans grill them over vine cuttings and serve them with alioli. In Turkey, it is collected from pine forests along the Mediterranean coast and served simply with olive oil and lemon. The flavor is mildly peppery when raw, becoming nutty and slightly resinous when cooked. The texture is firm and satisfying. The only caveat is that your urine and, more alarmingly, the whites of your eyes may temporarily take on an orange-red tint after eating a large quantity. This is harmless and caused by the carotenoid pigments passing through your system.",
  identification: {
    cap: "4-14 cm across. Convex when young, developing a central depression and becoming funnel-shaped with age. Orange to salmon-orange with darker concentric zones (rings). Surface is smooth, slightly sticky when wet, and often develops greenish stains where bruised or aged. Margin is initially inrolled, straightening with maturity.",
    gills: "Decurrent (running down the stem), closely spaced, orange to saffron-orange. Exude carrot-orange latex when cut or broken. Gills stain greenish where damaged or old.",
    stem: "3-7 cm tall, 1.5-3 cm thick. Orange, often with darker orange pits (scrobiculations). Hollow or stuffed in mature specimens. Stains greenish with age or handling.",
    sporePrint: "Pale ochre to pale salmon.",
    odor: "Pleasant, mildly fruity with a faint resinous or piney quality. Not strongly distinctive.",
  },
  habitat:
    "Strictly mycorrhizal with pines (Pinus spp.), including Scots pine, maritime pine, Aleppo pine, and Monterey pine. Found in pine forests, plantations, and mixed woodlands with a pine component. Prefers sandy, acidic to neutral soils. Often fruits in large groups along forest paths and clearings.",
  season:
    "Late summer through late autumn, typically September through November in the Northern Hemisphere. Fruits after autumn rains, especially when temperatures drop. In Mediterranean climates, the main season may extend into December.",
  range:
    "Native across Europe, North Africa, and parts of western Asia. Introduced to Australia, New Zealand, Chile, and South Africa with planted pines. Especially abundant in Spain, southern France, Italy, Turkey, and Portugal. Also found in pine plantations across the Americas.",
  lookAlikes: [
    {
      name: "Lactarius deterrimus (False Saffron Milk Cap)",
      distinction:
        "Very similar in appearance but associated with spruce (Picea) rather than pine. The latex is also orange but turns wine-red then brownish within 15-30 minutes of exposure. L. deliciosus latex stays orange or turns slightly greenish. Both are edible, but L. deterrimus is considered slightly inferior. Host tree is the most practical field distinction.",
      externalUrl: "https://en.wikipedia.org/wiki/Lactarius_deterrimus",
      externalSource: "Wikipedia",
    },
    {
      name: "Lactarius torminosus (Woolly Milk Cap)",
      distinction:
        "Has a pinkish-orange cap with a distinctly shaggy, woolly margin (hairy fringes on the cap edge). The latex is WHITE, not orange. This is the critical distinction: if the milk is white, it is not L. deliciosus. L. torminosus is associated with birch, not pine, and causes significant gastrointestinal upset if eaten raw (though it is consumed after extensive preparation in Finland and Russia).",
      externalUrl: "https://en.wikipedia.org/wiki/Lactarius_torminosus",
      externalSource: "Wikipedia",
    },
    {
      name: "Lactarius salmonicolor",
      distinction:
        "Associated with fir (Abies) rather than pine. Very similar orange coloring, but the latex turns yellow within minutes rather than staying orange. The cap lacks the well-defined concentric zones of L. deliciosus. Edible but less highly regarded. Check the host tree and watch the latex color change.",
      externalUrl: "https://en.wikipedia.org/wiki/Lactarius_salmonicolor",
      externalSource: "Wikipedia",
    },
  ],
  edibility: "edible",
  edibilityNote:
    "A prized edible mushroom across the Mediterranean world with a firm texture and mildly nutty, slightly resinous flavor. Best grilled, roasted, or sauteed. In Catalonia, traditionally grilled over vine cuttings (a la brasa) and served with alioli. Can also be pickled or preserved in olive oil. The carotenoid pigments may temporarily tint urine orange-red after consuming large quantities; this is harmless. Always confirm identification by checking for orange (not white) latex.",
  gbifKey: 2539573,
  stories: [
    {
      title: "Roman Mosaic Evidence",
      text: "A well-preserved Roman mosaic from the 2nd century AD, discovered in the ruins of a villa near Aquileia in northeastern Italy, depicts a basket of mushrooms that mycologists have identified as almost certainly Lactarius deliciosus based on the concentric zoning on the caps and orange coloration. The mosaic suggests the species was collected and valued nearly two thousand years ago.",
      location: "Aquileia, Friuli-Venezia Giulia, Italy",
      source: "Archaeological Museum of Aquileia",
    },
    {
      title: "Catalan Calcotera Tradition",
      text: "Every autumn in rural Catalonia, families hold calcotades (outdoor grills) that feature rovellons (Saffron Milk Caps) alongside calcots (charred spring onions). A Catalan forager near Solsona described his family's tradition of grilling freshly collected rovellons cap-side down over vine cuttings until the hollow stem fills with the mushroom's own juices, then eating them sprinkled with coarse salt. He called it the simplest and best mushroom dish in the world.",
      location: "Solsona, Catalonia, Spain",
      source: "Local interview",
    },
    {
      title: "Orange Urine Panic at a Turkish Hospital",
      text: "A doctor at a hospital in Antalya, Turkey reported that every autumn, the emergency department receives several panicked patients who present with bright orange-red urine after eating large quantities of Saffron Milk Caps. The carotenoid pigments pass through the kidneys unchanged. Once reassured that the condition is temporary and harmless, patients are sent home. The staff jokingly call it 'mushroom season syndrome.'",
      location: "Antalya, Turkey",
      source: "Turkish Journal of Emergency Medicine",
    },
    {
      title: "Pine Plantation Bonanza in Chile",
      text: "When Pinus radiata plantations were established across central Chile, Lactarius deliciosus arrived on inoculated roots and found conditions to its liking. By the 2000s, enormous flushes were appearing in plantations near Concepcion. A local mycological society organized workshops to teach Chilean communities how to identify and cook the species, building a new foraging tradition from scratch.",
      location: "Concepcion, Bio-Bio Region, Chile",
      source: "Chilean Mycological Society",
    },
  ],
  seoQueries: [
    "saffron milk cap identification",
    "lactarius deliciosus edible",
    "orange mushroom that bleeds orange milk",
    "saffron milk cap vs woolly milk cap",
    "niscalo mushroom spain",
    "rovellon mushroom catalonia",
    "mushroom with orange latex",
    "saffron milk cap look alikes",
    "lactarius deliciosus recipe",
    "orange mushroom under pine trees",
    "how to cook saffron milk caps",
    "lactarius deliciosus habitat",
    "milk cap mushroom identification",
    "mushroom that turns urine orange",
  ],
  funFacts: [
    "The species epithet 'deliciosus' was applied by Linnaeus himself in 1753, making it one of the first mushroom species to receive a formal scientific name. The name reflects centuries of Mediterranean culinary tradition.",
    "Eating large quantities of Saffron Milk Caps can temporarily turn your urine bright orange-red due to the carotenoid pigments (including lactaroviolin) being excreted unchanged by the kidneys. The effect is completely harmless and subsides within a day.",
    "In Spain, Lactarius deliciosus is the most commercially important wild mushroom species. The annual harvest is estimated at thousands of tonnes, and niscolos are sold in markets throughout the country during autumn. Some regions hold competitive mushroom festivals centered on the species.",
    "Saffron Milk Caps contain a unique sesquiterpene compound called lactaroviolin, which is responsible for both the orange color and the greenish staining that develops on damaged flesh. The compound has demonstrated antimicrobial activity in laboratory studies.",
  ],
  images: [],
};

export default species;
