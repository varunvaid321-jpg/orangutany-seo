import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "volvariella-volvacea",
  commonName: "Paddy Straw Mushroom",
  scientificName: "Volvariella volvacea",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Pluteaceae",
    genus: "Volvariella",
  },
  summary:
    "The tropical world's button mushroom, cultivated on rice straw across Southeast Asia for centuries. Volvariella volvacea is the mushroom in your Thai tom yum and your Chinese stir-fry, sold in cans worldwide but best eaten fresh within hours of harvest. The catch: it has a volva at the base, just like a Death Cap.",
  description:
    "If Agaricus bisporus is the mushroom of the temperate world, Volvariella volvacea is its tropical counterpart. Cultivation originated in China, possibly as early as the 18th century, using bundled rice straw as the substrate. The practice spread across Southeast Asia and remains the primary method today: straw is soaked, stacked into beds, inoculated with spawn, and kept warm and humid. The mushrooms appear within 10-14 days and are harvested at the 'egg' stage, when the fruiting body is still enclosed in its universal veil, looking like a small, dark, leathery egg.\n\nThis is one of the most widely consumed mushrooms in the world, though Westerners may not realize it. The canned 'straw mushrooms' found in Asian grocery stores are V. volvacea, and they appear in countless dishes across Chinese, Thai, Vietnamese, and Filipino cuisines. Fresh straw mushrooms have a delicate, slightly sweet flavor and a silky texture that canned versions cannot replicate. Unfortunately, fresh specimens are nearly impossible to find outside of tropical Asia because they deteriorate within hours of harvest, turning dark and slimy at refrigerator temperatures.\n\nThe identification carries a serious warning. Volvariella volvacea has a prominent volva (a sac-like cup at the stem base), which is a feature shared with Amanita species, including the deadly A. phalloides and A. virosa. In the egg stage, before the cap has expanded, young straw mushrooms look disturbingly similar to young Death Caps. This confusion has caused multiple fatalities among Southeast Asian immigrants foraging in temperate countries, where they mistake local Amanita species for the familiar straw mushroom of home.",
  identification: {
    cap: "5-12 cm across in the expanded stage. Initially enclosed in a dark grayish-brown universal veil (egg stage). When expanded, the cap is conical to convex, dark gray to grayish-brown, often with a slightly striate margin. Surface is dry, smooth to faintly silky.",
    gills: "Free (not attached to the stem), closely spaced. White when young, becoming pink then pinkish-brown as spores mature. This pink maturation is a key feature distinguishing them from Amanita gills, which remain white.",
    stem: "5-10 cm tall, 1-2 cm thick. White to pale grayish, smooth, solid. The base is enclosed in a large, thick, sac-like volva (cup) that is grayish-brown on the outside and white inside. The volva is the most conspicuous feature.",
    sporePrint: "Salmon-pink to pinkish-brown.",
    odor: "Mild, pleasant, slightly mealy or mushroomy.",
  },
  habitat:
    "Saprobic on decomposing plant material, especially rice straw, cotton waste, oil palm waste, and composted agricultural residues. In the wild, found on compost heaps, mulch piles, and decaying vegetation in tropical and subtropical regions. Requires warm temperatures (28-35 degrees C) and high humidity for fruiting.",
  season:
    "Year-round in tropical regions. In cultivation, crops can be produced every 2-3 weeks. Wild fruiting occurs during warm, wet periods, especially during monsoon seasons.",
  range:
    "Native to East and Southeast Asia. Cultivated widely across China, Thailand, Vietnam, Philippines, Indonesia, India, and other tropical countries. Also grown in tropical Africa and Central America. Does not fruit naturally in temperate climates due to its requirement for sustained warmth.",
  lookAlikes: [
    {
      name: "Death Cap (Amanita phalloides)",
      slug: "amanita-phalloides",
      distinction:
        "The most dangerous confusion. Both species have a volva at the stem base, and in the egg stage they can look nearly identical. Critical differences: A. phalloides has WHITE gills that stay white and a WHITE spore print. V. volvacea gills turn PINK and the spore print is salmon-pink. A. phalloides grows in temperate forests near oaks; V. volvacea grows in tropical conditions on composted plant material. This confusion has killed multiple people, primarily Asian immigrants foraging in temperate countries.",
    },
    {
      name: "Destroying Angel (Amanita virosa)",
      slug: "amanita-virosa",
      distinction:
        "Another deadly Amanita with a prominent volva. Pure white throughout, with white gills and white spore print. V. volvacea has a dark gray-brown cap and gills that mature to pink. A. virosa grows in temperate woodlands, not on compost in tropical settings. The habitat difference should prevent confusion, but immigrants unfamiliar with local species have made this mistake.",
    },
    {
      name: "Volvopluteus gloiocephalus (Stubble Rosegill)",
      distinction:
        "A larger species found in agricultural fields and compost in temperate regions. Similar volva and free gills, but the cap is paler (whitish-gray to pale brown) and the mushroom is generally larger (cap 8-20 cm). Also has pink spore print. Edible but much less commonly eaten. The main practical issue is that V. gloiocephala shares habitat with Amanita species in temperate regions, making it riskier to collect.",
      externalUrl: "https://en.wikipedia.org/wiki/Volvopluteus_gloiocephalus",
      externalSource: "Wikipedia",
    },
  ],
  edibility: "edible",
  edibilityNote:
    "A widely cultivated and consumed edible mushroom across tropical Asia. Best eaten fresh, at the egg stage or just after the cap has opened. Delicate, slightly sweet flavor with silky texture. Deteriorates rapidly after harvest and does not store or ship well, which is why most Western consumers encounter it only in canned form. Must be cooked before eating. CRITICAL: never forage for this species in temperate regions, as young specimens can be fatally confused with Amanita phalloides.",
  gbifKey: 5241445,
  stories: [
    {
      title: "Fatal Confusion in Canberra",
      text: "In 2012, a group of Chinese immigrants in Canberra, Australia collected young mushrooms near oak trees, believing them to be straw mushrooms similar to those they had eaten in China. The mushrooms were Amanita phalloides (Death Caps). Four people were hospitalized with acute liver failure, and two required emergency liver transplants. The incident prompted Australian health authorities to issue multilingual warnings about the dangers of foraging for mushrooms resembling V. volvacea in temperate Australia.",
      location: "Canberra, Australia",
      source: "ABC News Australia",
    },
    {
      title: "Thai Village Straw Mushroom Cultivation",
      text: "In rural Isan (northeastern Thailand), families cultivate straw mushrooms using spent rice straw after the harvest. A farmer near Udon Thani described the simple process: straw is soaked in water for a day, stacked in beds, and inoculated with spawn purchased from a local agricultural cooperative. The mushrooms appear within two weeks and are either sold at the morning market or used immediately in tom kha and laab het (mushroom salad).",
      location: "Udon Thani, Isan, Thailand",
      source: "Field observation",
    },
    {
      title: "Canning Industry in Fujian",
      text: "Fujian province in southeastern China is the center of the canned straw mushroom industry, producing thousands of tonnes annually for export. The mushrooms are harvested at the egg stage, blanched, and canned in brine within hours. A factory manager in Zhangzhou explained that speed is critical because V. volvacea deteriorates faster than any other cultivated mushroom, becoming dark and mushy within 6-8 hours at room temperature.",
      location: "Zhangzhou, Fujian, China",
      source: "Chinese Agricultural Trade Review",
    },
  ],
  seoQueries: [
    "straw mushroom identification",
    "volvariella volvacea edible",
    "paddy straw mushroom cultivation",
    "straw mushroom vs death cap",
    "how to grow straw mushrooms",
    "canned straw mushrooms",
    "straw mushroom look alikes",
    "volvariella volvacea recipe",
    "mushroom with volva edible",
    "straw mushroom egg stage",
    "tropical mushroom cultivation",
    "volvariella volvacea habitat",
    "straw mushroom poisoning cases",
  ],
  funFacts: [
    "Straw mushrooms deteriorate faster than any other commercially cultivated mushroom. At refrigerator temperatures (4 degrees C), they undergo autolysis (self-digestion) within 24 hours, turning dark and liquefying. This is why they are almost always sold canned or dried outside tropical Asia.",
    "V. volvacea is the third most widely cultivated mushroom species in the world (after A. bisporus and Lentinula edodes), with annual global production estimated at over 3 million tonnes, primarily in China and Southeast Asia.",
    "The volva of V. volvacea is actually the remnant of a universal veil that enclosed the entire young mushroom. As the fruiting body expands, it bursts through this veil, leaving the cup-like volva at the base. This same developmental pattern occurs in Amanita species, which is why the two genera can be confused.",
    "In traditional Chinese medicine, V. volvacea has been used for its perceived health benefits for centuries. Modern research has identified bioactive polysaccharides in the species that show immunomodulatory activity in laboratory studies.",
  ],
  images: [
    {
      filename: "01-field.jpg",
      alt: "Paddy Straw Mushroom (Volvariella volvacea) growing from substrate showing egg and button stages",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Volv_volvacea_yogya_DSC_0969.jpg",
      author: "Kembangraps",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "03-field.jpg",
      alt: "Paddy Straw Mushroom (Volvariella volvacea) showing volva and pink gills",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Volvariella_volvacea_(Bul.)_Singer_(1951)_(16265718515).jpg",
      author: "Len Worthington",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    },
  ],
};

export default species;
