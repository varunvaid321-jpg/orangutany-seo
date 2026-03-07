import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "inonotus-obliquus",
  commonName: "Chaga",
  scientificName: "Inonotus obliquus",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Hymenochaetales",
    family: "Hymenochaetaceae",
    genus: "Inonotus",
  },
  summary:
    "A parasitic fungus that looks like a lump of burnt charcoal growing on birch trees, yet has become one of the most commercially hyped 'medicinal mushrooms' in the wellness industry. Chaga has been used in Russian and Siberian folk medicine for centuries, and modern research has identified bioactive compounds, though the health claims often outpace the evidence.",
  description:
    "Chaga does not look like a mushroom. It looks like the tree has cancer. The black, cracked, charcoal-like mass (called a sclerotium or conk) that protrudes from the trunk of a living birch tree is the sterile mycelial mass of Inonotus obliquus, and it can grow for 10-20 years before the tree dies and the fungus finally produces its actual reproductive structure, a flat, resupinate fruiting body that appears under the bark after the host tree is dead. Almost nobody ever sees the true fruiting body.\n\nWhat everyone sees, and what everyone harvests, is the conk. Inside the black exterior, the interior is a rusty golden-brown color, hard and woody, with a cork-like texture. This material is chopped up, dried, and brewed into a dark, slightly bitter tea that has been consumed across northern Russia, Siberia, Scandinavia, and parts of northern Canada and Alaska for hundreds of years.\n\nThe Chaga wellness boom of the 2010s and 2020s transformed this obscure folk remedy into a multi-million-dollar global industry. Chaga powder, tinctures, capsules, and even Chaga coffee blends now line the shelves of health food stores. The marketing claims are ambitious: immune support, anti-cancer properties, antioxidant powerhouse, anti-inflammatory, blood sugar regulation.\n\nThe science is more measured. Chaga does contain betulinic acid (derived from birch bark), melanin compounds, beta-glucans, and various polyphenols with demonstrated biological activity in lab and animal studies. However, human clinical trials are scarce, and many of the health claims circulating online have not been validated in controlled human studies. The gap between the laboratory findings and the marketing is significant.\n\nThere is also a sustainability concern. Wild Chaga takes years to grow, and the harvest boom has led to overharvesting in accessible forests across Finland, Russia, and northern North America. Some regions have introduced harvesting regulations.",
  identification: {
    cap: "Not a typical mushroom cap. The visible structure is a sterile conk (sclerotium), 10-40 cm across, irregularly shaped, protruding from the trunk of a living birch tree. Exterior is black, deeply cracked, and hard, resembling burnt charcoal or volcanic rock. Interior is golden-brown to rusty orange, hard, and corky.",
    gills:
      "No gills. The true fruiting body (rarely seen) is a flat, resupinate structure that forms under the bark of dead birch trees. The conk that people harvest is not the reproductive structure.",
    stem: "No stem. The conk grows directly from the trunk.",
    sporePrint: "Not practically obtainable from the conk. The true fruiting body produces brown spores.",
    odor: "Mild, slightly woody, like birch bark. Not distinctive.",
  },
  habitat:
    "Parasitic on living birch trees (Betula species), especially Betula pendula and Betula pubescens. Occasionally reported on alder, beech, and other hardwoods, but the birch association is by far the most common. The conk grows slowly over 5-20 years on the trunk, usually where the tree has been wounded. Found in boreal and northern temperate forests.",
  season:
    "The conk can be harvested year-round, though it is most commonly collected in autumn and winter when the leaves are off the trees and the conks are easier to spot. The conk grows continuously as long as the host tree is alive.",
  range:
    "Circumboreal distribution across the Northern Hemisphere. Common in Russia, Siberia, Finland, Scandinavia, the Baltic states, northern Canada, Alaska, and the northern tier of the contiguous United States (especially Minnesota, Wisconsin, Michigan, and the Northeast). Also found in northern Japan, Korea, and parts of northern China.",
  lookAlikes: [
    {
      name: "Birch Polypore (Fomitopsis betulina)",
      distinction:
        "Also grows on birch but looks completely different: a smooth, whitish to grayish bracket with a distinct kidney-shaped form. Not black or charcoal-like. The two are not easily confused once you have seen both.",
      externalUrl:
        "https://www.inaturalist.org/taxa/54134-Fomitopsis-betulina",
      externalSource: "iNaturalist",
    },
    {
      name: "Burnt or Burl Wood",
      distinction:
        "The most common 'false Chaga' is simply a tree burl (abnormal woody growth) or a patch of fire-damaged bark. Burls are covered in bark and are the same color as the rest of the tree. Chaga has a distinctly black, cracked exterior and a rusty-orange interior when broken open.",
      externalUrl:
        "https://en.wikipedia.org/wiki/Inonotus_obliquus",
      externalSource: "Wikipedia",
    },
  ],
  edibility: "edible-with-caution",
  edibilityNote:
    "Traditionally consumed as a tea or decoction, not eaten whole (the texture is far too woody). Chaga tea has been used in Russian and Siberian folk medicine for centuries. Modern Chaga products include powders, tinctures, and capsules. Caution: Chaga is high in oxalates, and excessive consumption has been linked to kidney problems in case reports. People with kidney disease, those on blood thinners, or those with autoimmune conditions should consult a doctor before using Chaga. Many marketed health claims lack robust human clinical evidence.",
  gbifKey: 2521089,
  stories: [
    {
      title: "Solzhenitsyn's Cancer Ward",
      text: "Alexander Solzhenitsyn's 1967 novel 'Cancer Ward' contains a passage about birch fungus tea being used by Russian peasants as a folk cancer treatment. The passage brought Chaga to Western attention for the first time. Solzhenitsyn himself reportedly drank Chaga tea during his own cancer treatment in the 1950s.",
      location: "Soviet Union",
      source: "Cancer Ward by Alexander Solzhenitsyn",
    },
    {
      title: "The Finnish Chaga Coffee Tradition",
      text: "During World War II, when coffee was scarce in Finland, people in northern regions brewed Chaga as a coffee substitute. The dark, slightly bitter brew was not coffee, but it was warm and available. This wartime tradition persisted in some rural areas for decades and has been revived by modern Chaga brands marketing 'mushroom coffee.'",
      location: "Finnish Lapland",
      source: "Finnish Forest Research Institute",
    },
    {
      title: "The Overharvesting Crisis in Northern Forests",
      text: "By the late 2010s, the Chaga wellness boom had led to visible overharvesting in accessible birch forests across Finland, Minnesota, and northern Canada. In Finland, concern grew so significant that the Finnish Natural Resources Institute issued guidelines urging sustainable harvesting. Some foragers reported that Chaga conks were becoming noticeably harder to find along popular hiking routes.",
      location: "Northern Finland",
      source: "Luke (Natural Resources Institute Finland)",
    },
    {
      title: "The Khanty People's Ancient Remedy",
      text: "The Khanty (Ostyak) people of western Siberia have used Chaga tea for centuries, long before it became a Western wellness trend. Ethnobotanical studies documented its use for digestive complaints, as a general tonic, and even as a fire starter (the dry conk catches a spark readily). The Khanty word for Chaga predates any Russian term.",
      location: "Khanty-Mansi region, Siberia, Russia",
      source: "Journal of Ethnopharmacology",
    },
  ],
  seoQueries: [
    "chaga mushroom identification",
    "inonotus obliquus health benefits",
    "chaga mushroom on birch tree",
    "is chaga mushroom safe",
    "chaga tea how to make",
    "chaga mushroom look alikes",
    "chaga vs tree burl",
    "chaga mushroom side effects",
    "chaga overharvesting sustainability",
    "chaga mushroom oxalates kidney",
    "where to find chaga",
    "chaga mushroom cancer research",
    "chaga mushroom season harvest",
    "black growth on birch tree",
  ],
  funFacts: [
    "What people call 'Chaga' is not actually the fruiting body of the fungus. It is a sterile mass of mycelium (sclerotium). The true reproductive structure only appears after the host birch tree dies, forming a flat layer under the bark that most people never notice.",
    "Chaga's black exterior gets its color from massive concentrations of melanin, the same pigment that colors human skin and hair. Chaga contains some of the highest melanin levels found in any natural source.",
    "During World War II, Finns used Chaga as a coffee substitute when real coffee was unavailable due to wartime blockades.",
    "A single Chaga conk can grow on a living birch tree for 10-20 years, slowly feeding on the tree's heartwood before the tree eventually dies.",
    "Chaga is naturally high in oxalates. A case report in a Japanese medical journal documented kidney failure in a woman who consumed large amounts of Chaga powder daily for several months.",
  ],
  images: [
    {
      filename: "01-field.jpg",
      alt: "Chaga (Inonotus obliquus) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Chaga_(Inonotus_obliquus)_de_4,2_kg.jpg",
      author: "JBouchez",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "02-field.jpg",
      alt: "Chaga (Inonotus obliquus) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Chaga_Mushroom_-_Inonotus_obliquus_(30222675437).jpg",
      author: "Björn S...",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    },
    {
      filename: "03-field.jpg",
      alt: "Chaga (Inonotus obliquus) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Chaga_Mushroom_-_Inonotus_obliquus_(40358524662).jpg",
      author: "Björn S...",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    },
    {
      filename: "04-field.jpg",
      alt: "Chaga (Inonotus obliquus) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Chaga_Mushroom_-_Inonotus_obliquus_(45112059032).jpg",
      author: "Björn S...",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    },
    {
      filename: "05-field.jpg",
      alt: "Chaga (Inonotus obliquus) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Inonotus_obliquus_(35578063011).jpg",
      author: "Björn S...",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    },
  ],
};

export default species;
