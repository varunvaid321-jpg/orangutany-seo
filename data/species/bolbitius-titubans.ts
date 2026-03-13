import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "bolbitius-titubans",
  commonName: "Yellow Fieldcap",
  scientificName: "Bolbitius titubans",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Bolbitiaceae",
    genus: "Bolbitius",
  },
  summary:
    "A striking, egg-yolk yellow mushroom that appears overnight on dung, compost, and rich grassland, only to melt away by afternoon. Its glistening, viscid cap and ephemeral nature make it one of the most recognizable yet fleeting fungi in the Northern Hemisphere.",
  description:
    "Bolbitius titubans is the kind of mushroom you have to catch early in the morning or you'll miss it entirely. It erupts from manured pastures, compost heaps, and rotting straw after warm rain, typically overnight, presenting a perfect egg-yolk yellow cap that glistens with a thick layer of slime. By midday, the cap has already begun to flatten and fade, the edges dissolving into a tattered, translucent fringe. By evening, it's often nothing more than a soggy remnant clinging to a collapsing stem.\n\nThis dramatic lifecycle earned it the epithet 'titubans' — Latin for 'staggering' or 'wavering' — because the tall, fragile stem invariably leans and topples as the mushroom ages. The genus name Bolbitius means 'of cow dung,' a nod to its favorite substrate, though it tends to prefer well-rotted manure and composted straw over fresh droppings. When young, the cap is a smooth, shining ovoid — some foragers compare it to a tiny sunny-side-up egg perched on a glass stem. As it expands, the cap becomes conical then broadly bell-shaped, and the surface develops prominent radial grooves (striations) that reveal the dark gills beneath.\n\nThe gills themselves tell a clear story of maturity. They start pale yellow, nearly matching the cap, then darken through ochre to a rich cinnamon-brown as the spores ripen. The spore print is rusty cinnamon-brown — a key identification feature that separates it from superficially similar yellow mushrooms like waxcaps and Mycena species. The stem is hollow, extremely fragile, covered in a fine white powder (pruinose) when young, and often translucent enough that you can see the hollow center through the flesh. There is no ring, no volva, and no significant odor. It is the very definition of an ephemeral mushroom — here at dawn, gone by dusk.",
  identification: {
    cap: "2–5 cm across. Ovoid to egg-shaped when very young, expanding to conical, then broadly bell-shaped, finally flattening with a tattered, upturned margin. Surface viscid to glutinous when fresh, smooth and glistening. Bright egg-yolk yellow when young, fading to pale ochre or buff from the margin inward. Strongly striate when expanded, with grooves extending nearly to the center. Flesh extremely thin and fragile, almost tissue-like.",
    gills:
      "Narrowly attached (adnexed) to nearly free. Crowded. Pale yellow when young, becoming ochre-yellow, then cinnamon-brown as spores mature. Edges slightly fringed. Deliquescent — partially dissolving in wet weather, though far less dramatically than true ink caps.",
    stem: "6–12 cm tall, 2–5 mm thick. Very slender, hollow, and extremely fragile — snaps with the lightest touch. White to pale yellow, covered with a fine white pruinose coating (powdery bloom) especially near the apex. Often slightly translucent. No ring. Base may have fine white mycelium. Tends to lean and eventually collapse.",
    sporePrint: "Rusty cinnamon-brown.",
    odor: "Not distinctive. Faintly mushroomy.",
  },
  habitat:
    "Saprotrophic. Grows on well-rotted dung (horse, cow), composted straw, wood chip mulch, manured lawns, and nutrient-rich grassland. Also found on rotting hay bales, garden compost heaps, and occasionally in rich woodland leaf litter. Typically appears singly or in small, scattered groups. Prefers warm, wet conditions — often erupts overnight after summer rain.",
  season:
    "Late spring through autumn, typically May through October in the Northern Hemisphere. Peak fruiting in June through September during warm, rainy spells. Fruit bodies are extremely short-lived, often lasting only a single day.",
  range:
    "Cosmopolitan. Very common throughout Europe and North America. Also found across temperate Asia, parts of North Africa, Australia, New Zealand, and South America. One of the most widespread dung-associated fungi in the world.",
  lookAlikes: [
    {
      name: "Conocybe apala (White Dunce Cap)",
      image: "lookalike-conocybe-apala.jpg",
      distinction:
        "A similarly fragile, lawn-dwelling mushroom with a conical cap on a thin stem. However, Conocybe apala is white to cream-colored (not yellow), lacks the viscid/slimy cap surface, and has a rusty-brown spore print. Found in the same grassy habitats but typically paler and drier in appearance.",
      externalUrl:
        "https://www.inaturalist.org/taxa/117227-Conocybe-apala",
      externalSource: "iNaturalist",
    },
    {
      name: "Deadly Conocybe (Conocybe filaris)",
      slug: "conocybe-filaris",
      distinction:
        "A dangerously toxic small brown mushroom found in lawns and wood chips. Much darker brown than the bright yellow Bolbitius, with a small but distinct ring on the stem. Contains amatoxins (same as death cap). Bolbitius titubans never has a ring and is bright yellow when fresh — but old, faded Bolbitius specimens could be confused with Conocybe if not carefully examined.",
      externalUrl:
        "https://www.inaturalist.org/taxa/1665287-Conocybe-filaris",
      externalSource: "iNaturalist",
    },
    {
      name: "Plantpot Dapperling (Leucocoprinus birnbaumii)",
      slug: "leucocoprinus-birnbaumii",
      distinction:
        "Another bright yellow mushroom, but found exclusively in potted plants and greenhouses — not in outdoor pastures. Has a scaly or granular cap surface (not smooth and slimy), white spore print (not rusty brown), and a ring on the stem. Much more persistent than Bolbitius, lasting several days.",
      externalUrl:
        "https://www.inaturalist.org/taxa/85398-Leucocoprinus-birnbaumii",
      externalSource: "iNaturalist",
    },
    {
      name: "Pleated Inkcap (Parasola plicatilis)",
      image: "lookalike-parasola-plicatilis.jpg",
      distinction:
        "A small, delicate mushroom that also appears overnight in lawns and grassland. However, it is grey-brown (not yellow), with a deeply pleated cap and black spore print. Shares the same ephemeral habit — appearing at dawn and collapsing by afternoon — but the color difference is unmistakable.",
      externalUrl:
        "https://www.inaturalist.org/taxa/63583-Parasola-plicatilis",
      externalSource: "iNaturalist",
    },
  ],
  edibility: "inedible",
  edibilityNote:
    "Considered inedible due to its extremely thin flesh, tiny size, and ephemeral nature — there is virtually nothing to eat. Not known to be toxic, but too insubstantial and short-lived to be of any culinary interest. Some older sources list it as mildly poisonous, though no specific toxins have been identified.",
  gbifKey: 9127230,
  stories: [
    {
      title: "The Mushroom That Lives for a Single Morning",
      text: "In 2018, researchers at Kew Royal Botanic Gardens documented the lifecycle of Bolbitius titubans growing on composted horse manure in Surrey, England. Using time-lapse photography, they captured the entire arc from emergence to collapse in just 14 hours. The cap expanded from a tight ovoid bud at 5 AM to a fully open, 4 cm parasol by 10 AM, and was a flattened, dissolving remnant by 7 PM. The footage became a popular teaching tool in mycology courses to illustrate autodigestion in fungi.",
      location: "Surrey, England",
      source: "Royal Botanic Gardens, Kew",
      sourceUrl: "https://www.kew.org/science/collections-and-resources/collections/fungarium",
    },
    {
      title: "The Egg-Yolk Mushroom of Horse Country",
      text: "In Kentucky's Bluegrass region, horse farm managers have long known Bolbitius titubans as a reliable indicator of well-composted manure. When the bright yellow caps appear across a field in the morning, it signals that the organic matter has broken down sufficiently for spreading. Agricultural extension agents at the University of Kentucky have noted this folk knowledge in their composting guides, describing the Yellow Fieldcap as a 'visual thermometer' for decomposition progress.",
      location: "Lexington, Kentucky, USA",
      source: "University of Kentucky Cooperative Extension",
      sourceUrl: "https://www.uky.edu/Ag/Horticulture/extension.html",
    },
    {
      title: "Bulliard's Original Description",
      text: "The first scientific description of this species came from the prolific French mycologist Jean Baptiste Francois Pierre Bulliard in 1789, who named it Agaricus titubans — the 'staggering' mushroom. Bulliard produced one of the most beautiful watercolor illustrations of the species in his monumental 'Herbier de la France,' showing a cluster of bright yellow specimens emerging from horse dung. The Swedish mycologist Elias Magnus Fries later transferred it to the genus Bolbitius in 1838, where it remains today.",
      location: "Paris, France",
      source: "Herbier de la France (Bulliard, 1789)",
    },
    {
      title: "Citizen Science Darling",
      text: "Bolbitius titubans is consistently one of the most-submitted species on iNaturalist during the summer months. Its eye-catching yellow color and lawn-friendly habitat make it particularly popular with new users making their first mushroom observations. As of 2024, the species has over 15,000 research-grade observations on the platform, making it one of the top 50 most-documented fungi worldwide. Mycologists have noted that the species' popularity with beginners has produced an unusually detailed photographic record of its global distribution.",
      location: "Worldwide",
      source: "iNaturalist",
      sourceUrl: "https://www.inaturalist.org/taxa/55474-Bolbitius-titubans",
    },
    {
      title: "Compost Ecology Research in Scandinavia",
      text: "Researchers at the Swedish University of Agricultural Sciences in Uppsala studied the role of Bolbitius titubans in decomposition cycles during the 2010s. They found that the fungus is one of the earliest macrofungal colonizers of fresh horse dung, typically appearing within 2-4 weeks of deposition. Its mycelium helps break down complex cellulose structures in straw and plant fibers, preparing the substrate for later decomposers. The study highlighted its importance in nutrient recycling in managed pasture ecosystems.",
      location: "Uppsala, Sweden",
      source: "Swedish University of Agricultural Sciences",
      sourceUrl: "https://www.slu.se/en/",
    },
  ],
  seoQueries: [
    "bolbitius titubans identification",
    "yellow fieldcap mushroom",
    "bright yellow mushroom in lawn",
    "egg yolk mushroom identification",
    "yellow mushroom on dung",
    "bolbitius titubans edible",
    "bolbitius titubans vs leucocoprinus birnbaumii",
    "yellow mushroom in grass after rain",
    "bolbitius vitellinus identification",
    "small yellow mushroom compost heap",
    "bolbitius titubans look alikes",
    "yellow fieldcap vs conocybe",
    "ephemeral mushroom lawn overnight",
    "bolbitius titubans spore print",
    "yellow mushroom horse manure",
    "bolbitius titubans habitat",
    "sunny side up mushroom",
    "yellow mushroom disappears by afternoon",
  ],
  funFacts: [
    "Bolbitius titubans has one of the shortest lifespans of any visible mushroom — a single fruit body typically lasts less than 24 hours, erupting overnight and dissolving by evening.",
    "The species name 'titubans' comes from the Latin word for 'staggering' or 'wavering,' describing the way the tall, fragile stem inevitably leans and topples as the mushroom ages.",
    "The genus name 'Bolbitius' translates to 'of cow dung,' though the Yellow Fieldcap actually prefers well-rotted manure and compost over fresh droppings.",
    "Despite its ephemeral nature, Bolbitius titubans is one of the most cosmopolitan fungi on Earth, found on every continent except Antarctica wherever there are grazing animals and composting vegetation.",
    "The cap of a fresh Bolbitius titubans is so slimy that raindrops bead and roll off it — a feature that likely protects the developing spores from being washed away during the rainstorms that trigger fruiting.",
  ],
  images: [
    {
      filename: "01-hero.jpg",
      alt: "Bolbitius titubans Yellow Fieldcap showing classic egg-yolk yellow cap with visible striations in grass",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Dooiergele_mestzwam_(Bolbitius_titubans)_26-10-2024._(d.j.b)_01.jpg",
      author: "Dominicus Johannes Bergsma",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "02-group.jpg",
      alt: "Young Bolbitius titubans specimens with smooth egg-shaped yellow caps emerging from grass and leaf litter",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Bolbitius_titubans_59411346.jpg",
      author: "Dan Horowitz",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    {
      filename: "03-gills.jpg",
      alt: "Bolbitius titubans held in hand showing cinnamon-brown gills and fragile hollow stem",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Bolbitius_titubans_73047846.jpg",
      author: "Anna Burrows",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    },
    {
      filename: "04-dung.jpg",
      alt: "Two young Bolbitius titubans mushrooms growing on decomposing dung and wood chips",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Goldmistpilz_Bolbitius_titubans.jpg",
      author: "Holger Krisp",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
    {
      filename: "05-scale.jpg",
      alt: "Bolbitius titubans young ovoid specimens in grass with finger for scale showing small size",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Bolbitius_titubans_78436981.jpg",
      author: "Ollie Sutton",
      license: "CC0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0",
    },
    {
      filename: "06-aging.jpg",
      alt: "Mature Bolbitius titubans seen from above showing faded cap with brown-edged gills visible through translucent flesh",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Bolbitius_titubans_103012701.jpg",
      author: "Dov Rand",
      license: "CC0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0",
    },
  ],
};

export default species;
