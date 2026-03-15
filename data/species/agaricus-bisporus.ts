import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "agaricus-bisporus",
  commonName: "Button Mushroom",
  scientificName: "Agaricus bisporus",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Agaricaceae",
    genus: "Agaricus",
  },
  summary:
    "The single most cultivated mushroom species on Earth, responsible for roughly 30% of global mushroom production. Button, cremini, and portobello are all the same species at different stages of maturity, a marketing trick that has fooled grocery shoppers for decades. In the wild, it is a rare grassland species from coastal California.",
  description:
    "Here is a fact that surprises most people: the white button mushroom, the brown cremini, and the large portobello are all Agaricus bisporus. They are the exact same species. The white button is an immature specimen of a cultivar selected for pale color. The cremini is an immature specimen of a brown-capped strain. The portobello is simply a cremini that was allowed to mature and open fully. The mushroom industry effectively sells the same organism at three different price points by harvesting it at different ages.\n\nThe cultivation story begins in France around 1650, when farmers near Paris noticed mushrooms growing in spent horse manure from the royal stables. By the 1700s, cultivation in abandoned limestone quarries and catacombs beneath Paris was well established, giving rise to the name 'champignon de Paris.' The modern industry took off in the early 1900s when growers in Pennsylvania's Chester County (now the mushroom capital of America) refined composting techniques and environmental controls. Today, A. bisporus is grown in climate-controlled facilities worldwide, with China producing more than any other country.\n\nIn the wild, Agaricus bisporus is actually quite rare. Its natural habitat appears to be coastal grasslands of California and possibly parts of the Mediterranean. Wild specimens have brown caps and grow in rich, composted soils. The species name 'bisporus' refers to its unusual basidia, which produce only two spores each instead of the typical four. This biological quirk means that each spore receives two nuclei, making it effectively self-fertile. This was a happy accident for cultivators, because it means spore-grown cultures are genetically stable and consistent.",
  identification: {
    cap: "Wild form: 5-10 cm across, convex, brown to dark brown with fine fibrillose scales. Cultivated white form: smooth, white, 3-8 cm. Cultivated brown (cremini/portobello): 4-15 cm, tan to dark brown. Portobello stage shows exposed dark gills with cap fully expanded.",
    gills: "Free (not attached to stem). Start pale pink in young specimens (button stage), darkening through chocolate brown to nearly black as the mushroom matures and the cap opens. In the sealed button stage, gills are hidden by a partial veil.",
    stem: "3-6 cm tall, 1-2.5 cm thick. White, smooth, solid. Has a thin, fragile ring (remnant of the partial veil) that is often reduced to a faint zone in mature specimens. No volva at the base.",
    sporePrint: "Dark chocolate brown.",
    odor: "Mild, pleasant, the classic 'mushroom' smell that defines the category for most people. Faintly earthy.",
  },
  habitat:
    "Wild: coastal grasslands and composted soils in California and possibly Mediterranean Europe. Cultivated: grown on composted horse manure, straw, and agricultural waste in climate-controlled facilities worldwide. A saprobic species that feeds on decaying organic matter.",
  season:
    "Wild: autumn and winter in coastal California. Cultivated: year-round, with production cycles of approximately 6-8 weeks from spawning to harvest.",
  range:
    "Wild populations are restricted to coastal California and possibly scattered Mediterranean locations. Cultivated worldwide in over 70 countries. Major producers include China (largest by far), the United States (Pennsylvania is the dominant state), the Netherlands, Poland, India, and Spain.",
  lookAlikes: [
    {
      name: "Death Cap (Amanita phalloides)",
      slug: "amanita-phalloides",
      distinction:
        "Young white buttons of A. bisporus in the wild could theoretically be confused with young Death Caps, though their habitats rarely overlap. Key differences: Death Cap gills are WHITE and remain white. A. bisporus gills are PINK to brown. Death Cap has a sac-like volva at the stem base; A. bisporus does not. This confusion is mainly a risk for people foraging wild Agaricus species, not for those buying cultivated mushrooms.",
    },
    {
      name: "Field Mushroom (Agaricus campestris)",
      slug: "agaricus-campestris",
      distinction:
        "Very closely related and nearly identical in the field. A. campestris typically has a thinner, more fragile ring, slightly smaller stature, and 4-spored basidia (vs. 2-spored in A. bisporus). The practical distinction matters little for foragers since both are edible. Microscopic spore analysis is needed for definitive separation.",
    },
    {
      name: "Yellow-staining Mushroom (Agaricus xanthodermus)",
      slug: "agaricus-xanthodermus",
      distinction:
        "Looks similar in the button stage. The critical test: cut the base of the stem or scratch the cap surface. If it stains bright chrome yellow and emits a strong chemical, ink-like (phenolic) smell, it is A. xanthodermus. Causes unpleasant gastrointestinal symptoms. A. bisporus does not stain yellow and smells pleasantly mushroomy.",
      externalUrl: "https://en.wikipedia.org/wiki/Agaricus_xanthodermus",
      externalSource: "Wikipedia",
    },
  ],
  edibility: "edible",
  edibilityNote:
    "The world's most consumed mushroom. Mild, versatile flavor that absorbs seasonings well. Can be eaten raw in salads (though cooking improves digestibility), sauteed, grilled, stuffed, or added to virtually any dish. The portobello stage has a meatier texture and more concentrated flavor due to moisture loss as the cap opens and gills are exposed. Nutritionally, it is a good source of B vitamins, selenium, and (when exposed to UV light) vitamin D.",
  gbifKey: 5243447,
  stories: [
    {
      title: "The Paris Catacombs Mushroom Farms",
      text: "From the 1700s through the mid-1900s, mushroom cultivation thrived in the abandoned limestone quarries and catacombs beneath Paris. The constant temperature (around 12 degrees C) and high humidity created ideal growing conditions. At its peak, the Parisian underground mushroom industry produced thousands of tonnes annually. The last underground farm in Paris closed in the 1990s, though a few operations persist in the Loire Valley's tufa caves.",
      location: "Paris, France",
      source: "Musee des Egouts de Paris",
    },
    {
      title: "Kennett Square: Mushroom Capital of the World",
      text: "Kennett Square, Pennsylvania produces roughly half of all mushrooms grown in the United States. The industry traces to 1896, when a Quaker farmer named William Swayne began growing mushrooms in the space beneath his greenhouse benches. Today, the area's mushroom farms employ thousands of workers, many from the local Mexican-American community, and the town holds an annual Mushroom Festival each September that draws over 100,000 visitors.",
      location: "Kennett Square, Pennsylvania, USA",
      source: "American Mushroom Institute",
    },
    {
      title: "The Portobello Marketing Miracle",
      text: "Until the 1980s, mature, open-capped brown A. bisporus mushrooms were considered waste product, too dark and too open to sell as buttons. A marketing campaign rebranded them as 'portobello mushrooms,' invoking Italian sophistication. The name worked. Portobellos became a premium product, sold at higher prices than the immature buttons, despite being the same organism. The origin of the name 'portobello' is disputed; it may reference a town in Italy, or it may have been entirely invented.",
      location: "United States",
      source: "Food industry lore",
    },
    {
      title: "Vitamin D Mushrooms at the Grocery Store",
      text: "In 2008, Monterey Mushrooms began exposing harvested button mushrooms to UV light pulses, which converts ergosterol in the mushroom tissue to vitamin D2. A single serving of UV-treated mushrooms can provide 100% of the daily recommended intake of vitamin D. The treated mushrooms are now sold nationwide in the US with 'Vitamin D Mushrooms' labels, though they look and taste identical to untreated ones.",
      location: "Watsonville, California, USA",
      source: "Monterey Mushrooms",
    },
  ],
  seoQueries: [
    "button mushroom identification",
    "agaricus bisporus cultivation",
    "are button cremini portobello the same mushroom",
    "button mushroom vs cremini vs portobello",
    "agaricus bisporus wild habitat",
    "how are button mushrooms grown",
    "button mushroom nutrition",
    "white mushroom vs brown mushroom",
    "agaricus bisporus look alikes",
    "history of mushroom cultivation",
    "portobello mushroom origin name",
    "button mushroom vitamin D",
    "champignon de paris history",
    "kennett square mushroom capital",
  ],
  funFacts: [
    "Button mushrooms, cremini mushrooms, and portobello mushrooms are all the same species (Agaricus bisporus) harvested at different growth stages. The marketing distinction was invented in the 1980s when mature brown specimens were rebranded from waste product to premium item.",
    "The species name 'bisporus' refers to its unusual two-spored basidia. Most Agaricus species produce four spores per basidium, but A. bisporus produces only two, each receiving two nuclei. This makes it self-fertile and genetically stable, which is why it was so successfully domesticated.",
    "Exposing button mushrooms to UV light for just a few seconds converts ergosterol in their tissue to vitamin D2, boosting levels to over 400 IU per serving. This works even after the mushroom is harvested, so placing store-bought mushrooms gill-side up in sunlight for 30-60 minutes increases their vitamin D content.",
    "China produces more than 70% of the world's cultivated mushrooms, with A. bisporus being one of the top species. Global annual production exceeds 10 million tonnes.",
    "A single commercial mushroom farm can produce over 500,000 pounds of mushrooms per week. The composting process alone takes 3-4 weeks and requires precise temperature management to create the ideal growing substrate.",
  ],
  images: [
    {
      filename: "01-field.jpg",
      alt: "Button Mushroom (Agaricus bisporus) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:2011-06-25_Agaricus_bisporus_3_70149.jpg",
      author: "This image was created by user I. G. Safonov (IGSafonov) at Mushroom Observer, a source for mycological images.You can c",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "02-gills.jpg",
      alt: "Button Mushroom underside showing gill structure",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Giant_mushroom_underside.jpg",
      author: "Unknown",
      license: "GFDL",
      licenseUrl: "http://www.gnu.org/copyleft/fdl.html",
    },
    {
      filename: "04-field.jpg",
      alt: "Button Mushroom (Agaricus bisporus) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Agaricus_bisporus_(Cup_mushroom,_doubled).jpg",
      author: "Unknown",
      license: "GFDL",
      licenseUrl: "http://www.gnu.org/copyleft/fdl.html",
    },
    {
      filename: "05-field.jpg",
      alt: "Button Mushroom (Agaricus bisporus) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Agaricus_bisporus_Zuchtchampignon2.jpg",
      author: "böhringer friedrich",
      license: "CC BY-SA 2.5",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.5",
    },
  ],
};

export default species;
