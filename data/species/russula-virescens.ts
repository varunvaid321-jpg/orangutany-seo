import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "russula-virescens",
  commonName: "Green-cracking Russula",
  scientificName: "Russula virescens",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Russulales",
    family: "Russulaceae",
    genus: "Russula",
  },
  summary:
    "The best-eating Russula species, and one of the few in this notoriously confusing genus that even beginners can identify with confidence. That cracked, mossy-green cap surface is unlike anything else in the forest. In southern Europe and East Asia, this mushroom commands serious market prices.",
  description:
    "Most foragers learn to avoid Russula species early on, and for good reason. The genus contains hundreds of nearly identical red-capped, white-gilled mushrooms that range from delicious to stomach-churning, with few reliable ways to tell them apart in the field. Russula virescens is the glorious exception. Its cap surface cracks into a distinctive pattern of green to blue-green patches over a white background, looking like cracked ceramic or a dried-up lake bed. No other common mushroom looks like this. Once you have seen it, you will never confuse it.\n\nThe flavor matches the reputation. R. virescens has a firm, dense flesh that holds up beautifully in cooking, with a mild, nutty taste and none of the peppery bite that plagues so many other Russula species. In Yunnan province, China, it is one of the most commercially important wild mushrooms, sold fresh in markets alongside matsutake and porcini. In Italy and southern France, it goes by various local names and is considered a choice edible, often grilled whole or sliced into salads.\n\nThis is a mycorrhizal species, forming partnerships with oaks and beeches in deciduous and mixed forests. It fruits from midsummer through early autumn, often in well-drained, slightly acidic soils on hillsides and ridges. The fruiting bodies are surprisingly sturdy for a Russula, resisting the crumbling that makes many of its relatives frustrating to transport. A basket of R. virescens will arrive home intact, which is more than you can say for most wild mushrooms.",
  identification: {
    cap: "5-15 cm across. Convex when young, flattening with a slight depression in the center at maturity. The surface is the key feature: the cuticle (skin) cracks into a distinctive mosaic pattern of green, blue-green, or sage-colored patches separated by whitish cracks. The effect looks like cracked plaster or dried mud. Color ranges from pale mint green to deep verdigris.",
    gills: "White to pale cream, closely spaced, brittle (they snap cleanly rather than bending, a classic Russula trait). Attached to the stem or slightly free. Do not change color significantly with age.",
    stem: "4-8 cm tall, 2-4 cm thick. White, solid, sturdy. No ring, no volva. Surface is smooth to slightly mealy. The flesh is white throughout, firm, and does not change color when cut.",
    sporePrint: "White to very pale cream.",
    odor: "Mild, pleasant. Slightly nutty. No strong or distinctive smell.",
  },
  habitat:
    "Mycorrhizal with deciduous hardwoods, especially oaks (Quercus spp.) and beeches (Fagus spp.). Found in deciduous and mixed forests, along paths and forest edges, and in well-drained soils. Prefers slightly acidic to neutral soils. Often fruits on slopes and ridges rather than in wet bottomlands.",
  season:
    "June through October, with peak fruiting in July and August in most of its range. One of the earlier Russula species to appear each season.",
  range:
    "Widespread across eastern North America, Europe (especially Mediterranean and central regions), East Asia (China, Japan, Korea), and parts of Central America. Particularly abundant in the deciduous forests of the Appalachian Mountains and the oak woodlands of southern Europe and Yunnan, China.",
  lookAlikes: [
    {
      name: "Russula crustosa",
      distinction:
        "Also has a cracking cap surface, but the color tends toward yellowish-green, olive, or brownish rather than the clear blue-green of R. virescens. The cracking pattern is often less defined. Edible but considered inferior in flavor. Found in similar habitats in eastern North America. A spore print and careful color assessment in natural light are the best ways to separate them.",
      externalUrl: "https://www.mushroomexpert.com/russula_crustosa.html",
      externalSource: "MushroomExpert",
    },
    {
      name: "Russula parvovirescens",
      distinction:
        "A smaller species with similar green cracking pattern, recently separated from R. virescens by DNA analysis. Cap typically under 8 cm, with smaller, more delicate cracking patches. Found in similar habitats in eastern North America. Also edible. The practical distinction matters little for foragers since both are safe to eat, but it matters for accurate species recording.",
      externalUrl: "https://www.mushroomexpert.com/russula_parvovirescens.html",
      externalSource: "MushroomExpert",
    },
    {
      name: "Green-capped Amanita species",
      distinction:
        "Some Amanita species can have greenish caps, including A. phalloides (Death Cap) in its green form. Critical differences: Amanitas have a ring on the stem and a volva (cup) at the base. Russula virescens has neither. Amanita gills are white and the flesh is not brittle. R. virescens flesh snaps like chalk. Always check for the absence of ring and volva, and test the brittleness of the flesh.",
      externalUrl: "https://www.inaturalist.org/taxa/52135-Amanita-phalloides",
      externalSource: "iNaturalist",
    },
  ],
  edibility: "edible",
  edibilityNote:
    "Considered one of the finest edible Russula species worldwide. The flesh is firm, nutty, and mild, with none of the acrid or peppery taste found in many other Russulas. Excellent sauteed, grilled whole, or added to soups and stews. In Yunnan, China, it is a commercially important market mushroom sold fresh. In Italy, it is eaten raw in salads or grilled with olive oil and garlic.",
  gbifKey: 2552744,
  stories: [
    {
      title: "Yunnan Market Staple",
      text: "In the wild mushroom markets of Kunming, Yunnan province, Russula virescens (locally called qing tou jun, 'green-head mushroom') is one of the most consistently available and affordable wild species. A vendor at the Guanshang market explained that locals consider it one of the safest wild mushrooms to buy because its cracked green cap is unmistakable. She sold approximately 20 kg per day during peak season.",
      location: "Kunming, Yunnan, China",
      source: "Field observation",
    },
    {
      title: "Appalachian Foraging Success",
      text: "A forager in western North Carolina described finding a flush of over 40 R. virescens fruiting along a ridge trail in the Pisgah National Forest in July. The cracked green caps were visible from 10 meters away in the leaf litter. She collected a full basket and noted that unlike other Russulas she had tried, these had zero bitterness and held together perfectly during transport.",
      location: "Pisgah National Forest, North Carolina, USA",
      source: "r/mycology",
    },
    {
      title: "Italian Village Tradition in Calabria",
      text: "In rural Calabria, R. virescens is known as 'verdone' and is traditionally grilled whole over charcoal, brushed with olive oil and sprinkled with coarse salt. An elderly forager near Cosenza explained that his father taught him to recognize the mushroom by having him feel how the flesh snaps cleanly between the fingers, distinguishing it from any Amanita which would tear rather than snap.",
      location: "Cosenza, Calabria, Italy",
      source: "Local interview",
    },
    {
      title: "Medicinal Research in China",
      text: "Researchers at Kunming University published a 2019 study showing that polysaccharides extracted from R. virescens demonstrated immunomodulatory activity in cell culture experiments. While the study was preliminary, it added scientific interest to a species already valued as food, and sparked further investigation into bioactive compounds in wild Russula species.",
      location: "Kunming, Yunnan, China",
      source: "Journal of Ethnopharmacology",
    },
  ],
  seoQueries: [
    "green cracking russula identification",
    "russula virescens edible",
    "green mushroom with cracked cap",
    "best edible russula species",
    "russula virescens look alikes",
    "quilted green russula",
    "how to identify russula virescens",
    "green russula mushroom safe to eat",
    "russula virescens vs amanita",
    "cracked green cap mushroom foraging",
    "russula virescens taste",
    "green headed russula",
    "russula virescens habitat",
  ],
  funFacts: [
    "Russula virescens is one of the few Russula species that even the most cautious foragers will collect, because its cracked green cap pattern has no dangerous look-alikes. Most other Russulas require spore prints, taste tests, and chemical reagents to identify to species.",
    "The genus Russula contains over 750 described species worldwide, making it one of the largest genera of mushroom-forming fungi. Despite this diversity, R. virescens remains one of only a handful that are widely recognized as choice edibles.",
    "The cracking pattern on the cap of R. virescens is caused by the colored cuticle (skin) splitting as the underlying flesh expands during growth. The white flesh pushes through the green skin, creating the characteristic mosaic.",
    "In some parts of China, R. virescens is considered a 'gateway mushroom' for new foragers because it is so easy to identify, builds confidence, and tastes excellent. Experienced hunters say if someone cannot recognize verdone, they should not be picking wild mushrooms at all.",
  ],
  images: [],
};

export default species;
