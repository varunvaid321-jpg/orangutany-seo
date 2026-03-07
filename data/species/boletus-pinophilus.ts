import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "boletus-pinophilus",
  commonName: "Pine Bolete",
  scientificName: "Boletus pinophilus",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Boletales",
    family: "Boletaceae",
    genus: "Boletus",
  },
  summary:
    "The porcini's burly cousin from the pine forests. Boletus pinophilus is often overlooked in favor of the more famous B. edulis, but experienced foragers know it is every bit as good on the plate, sometimes better. That dark reddish-brown cap and massive, barrel-shaped stem are unmistakable in Scots pine country.",
  description:
    "If Boletus edulis is the king of the porcini complex, Boletus pinophilus is the crown prince, every bit as regal but less well-known outside of Scandinavia and northern Europe. This is a large, robust bolete with a distinctive dark reddish-brown to maroon cap, a massive white to pale brown stem covered in a fine network pattern (reticulation), and a pore surface that goes from white in youth to olive-yellow at maturity. It is a stunning mushroom, often heavier and more solidly built than B. edulis, with specimens regularly exceeding 1 kg.\n\nAs the name suggests, B. pinophilus is primarily a partner of pines, forming mycorrhizal relationships with Scots pine, Norway spruce, and other conifers in acidic, sandy soils. In Scandinavia, it is the dominant porcini-type species and is highly prized. Finnish and Swedish foragers know it well and consider it equal to or better than B. edulis in flavor, with a slightly more intense, nutty taste and a denser flesh that holds up exceptionally well when dried.\n\nThe identification is relatively straightforward for a bolete. The dark reddish cap (much darker than the brown cap of B. edulis), the white pore surface that does not bruise blue, the reticulated stem, and the pine forest habitat combine to make it a confident identification. There are no dangerous look-alikes in the strict sense, though various other boletes with reddish caps and pores that bruise blue should be distinguished. The rule of thumb is simple: if the pores are white to olive-yellow and do not bruise blue when pressed, and the cap is dark reddish-brown under pines, you almost certainly have B. pinophilus.",
  identification: {
    cap: "8-25 cm across (sometimes larger). Convex, thick, and fleshy. Dark reddish-brown to maroon or chestnut, distinctly darker than B. edulis. Surface is smooth to slightly sticky when wet, often with a fine, almost velvety texture. Margin is paler and slightly overhanging the pore surface.",
    gills: "No gills. Pore surface (tubes) is white when young, aging through cream to olive-yellow. Pores are small and round. Does NOT bruise blue when pressed; this is a critical diagnostic feature.",
    stem: "8-15 cm tall, 4-8 cm thick. Extremely robust, often barrel-shaped or clavate (club-shaped), especially when young. Pale brown to reddish-brown, covered with a fine white to brown reticulation (net-like pattern), most prominent in the upper half. Solid, dense, and heavy.",
    sporePrint: "Olive-brown.",
    odor: "Pleasant, mildly nutty, with a faint, sweet earthiness. Classic porcini aroma.",
  },
  habitat:
    "Mycorrhizal with conifers, especially Scots pine (Pinus sylvestris) and Norway spruce (Picea abies). Found in coniferous and mixed forests on acidic, sandy, or heathy soils. Often in mossy, slightly open pine stands. Also reported with birch in some regions.",
  season:
    "Summer through autumn, typically June through October. Often fruits earlier than B. edulis, with peak season in July and August in Scandinavia. A second flush may occur in September-October.",
  range:
    "Primarily northern and central Europe: Scandinavia (Finland, Sweden, Norway), the Baltic states, Russia, Scotland, and parts of central Europe. Also found in mountain pine forests of southern Europe (Alps, Pyrenees) and across boreal Asia. Less common in North America, where it is replaced by other members of the porcini complex.",
  lookAlikes: [
    {
      name: "Boletus edulis (Porcini/Cep)",
      slug: "boletus-edulis",
      distinction:
        "Very closely related and culinarily equivalent. B. edulis has a lighter brown cap (not reddish-brown), is more commonly associated with spruce, oak, and beech (though also found with pine), and has a paler, more uniformly brown cap compared to the deep maroon of B. pinophilus. Both are choice edibles. The practical distinction is academic for the kitchen.",
    },
    {
      name: "Tylopilus felleus (Bitter Bolete)",
      distinction:
        "Can superficially resemble a porcini-type bolete with a brown cap and reticulated stem. Key differences: the pore surface is pinkish (not white or olive-yellow), the stem reticulation is dark brown and coarse (vs. fine and pale in Boletus), and the flesh is intensely bitter. A tiny taste of the pore surface instantly reveals the bitterness. One Tylopilus can ruin an entire pot of porcini.",
      externalUrl: "https://en.wikipedia.org/wiki/Tylopilus_felleus",
      externalSource: "Wikipedia",
    },
    {
      name: "Rubroboletus satanas (Satan's Bolete)",
      slug: "rubroboletus-satanas",
      distinction:
        "A toxic bolete with a pale grayish-white cap (not dark reddish-brown), blood-red pore surface, and red reticulation on the stem. Bruises blue instantly. Found under oaks on chalky soils, not under pines on acidic soils. The red pores and blue bruising immediately distinguish it from B. pinophilus.",
    },
  ],
  edibility: "edible",
  edibilityNote:
    "A choice edible mushroom, considered equal to Boletus edulis in culinary quality. The flesh is dense, firm, and nutty, with a slightly more concentrated flavor than B. edulis. Excellent sauteed, grilled, dried, or used in risottos and sauces. Dries exceptionally well, and dried slices develop an intense, concentrated umami flavor. Remove any tubes that have become soft or olive-colored in mature specimens.",
  gbifKey: 5954949,
  stories: [
    {
      title: "Finnish Forest Foraging Tradition",
      text: "In Finland, B. pinophilus (locally called herkkutatti, 'delicacy bolete') is the most prized wild mushroom. A Finnish forager near Kuopio described her family's summer tradition of spending weekends in pine forests collecting herkkutatti, which they slice and dry on racks in a sauna. The dried mushrooms are stored in paper bags and used throughout winter in soups and sauces. She estimated her family collects 10-15 kg of fresh boletes in a good year.",
      location: "Kuopio, Finland",
      source: "Finnish Mycological Society",
    },
    {
      title: "Scottish Highland Find",
      text: "A Scottish forager documented finding a cluster of five large B. pinophilus specimens under Scots pine in the Cairngorms National Park in August. The largest weighed over 800 grams with a cap 22 cm across. He noted that the species was more reliable in the Caledonian pine forests than B. edulis, and that experienced local foragers preferred it for drying.",
      location: "Cairngorms, Scottish Highlands, Scotland",
      source: "Scottish Wild Mushroom Forum",
    },
    {
      title: "Swedish Mushroom Picking Culture",
      text: "Sweden has a legal right called Allemansratten (every person's right) that permits anyone to forage for mushrooms in any forest, private or public. A survey by the Swedish Environmental Protection Agency found that approximately 40% of Swedes pick wild mushrooms at least once per year, with B. pinophilus and B. edulis being the most sought-after species. The tradition is so ingrained that many Swedish municipalities offer free mushroom identification courses.",
      location: "Sweden",
      source: "Swedish Environmental Protection Agency",
    },
  ],
  seoQueries: [
    "pine bolete identification",
    "boletus pinophilus edible",
    "dark red cap bolete pine forest",
    "boletus pinophilus vs boletus edulis",
    "pine bolete look alikes",
    "porcini mushroom under pine trees",
    "boletus pinophilus recipe",
    "how to identify pine bolete",
    "scandinavian porcini mushroom",
    "boletus pinophilus habitat",
    "red-capped bolete identification",
    "herkkutatti mushroom finland",
    "pine bolete drying",
  ],
  funFacts: [
    "Boletus pinophilus can produce fruiting bodies weighing over 1.5 kg, making it one of the heaviest boletes in Europe. Specimens with caps exceeding 25 cm across are recorded, though rare.",
    "In Finland, B. pinophilus is called herkkutatti, which translates to 'delicacy bolete,' reflecting its elevated status among Finnish foragers who consider it superior to the more internationally famous B. edulis.",
    "The Pine Bolete often fruits earlier in the season than B. edulis, appearing in June or July in Scandinavia while B. edulis typically peaks in August and September. This early fruiting means it faces less competition from maggots, which become more abundant later in the season.",
    "DNA studies have confirmed that B. pinophilus is a distinct species within the porcini complex (section Boletus), not merely a variety of B. edulis. The two species diverged millions of years ago, likely adapting to different host tree partnerships.",
  ],
  images: [
    {
      filename: "01-field.jpg",
      alt: "Pine Bolete (Boletus pinophilus) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Boletus_pinophilus3.JPG",
      author: "Paffka",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "02-field.jpg",
      alt: "Pine Bolete (Boletus pinophilus) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Boletus_pinophilus_(44562780465).jpg",
      author: "Lukas from London, England",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    },
    {
      filename: "03-field.jpg",
      alt: "Pine Bolete (Boletus pinophilus) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Boletus_pinophilus_(45645751825).jpg",
      author: "Lukas from London, England",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    },
    {
      filename: "04-field.jpg",
      alt: "Pine Bolete (Boletus pinophilus) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Boletus_pinophilus_(51395319142).jpg",
      author: "Tero Karppinen from Finland",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0",
    },
    {
      filename: "05-field.jpg",
      alt: "Pine Bolete (Boletus pinophilus) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Boletus_pinophilus_12.jpg",
      author: "Finnish Biodiversity Information Facility",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
  ],
};

export default species;
