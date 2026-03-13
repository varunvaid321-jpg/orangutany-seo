import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "gymnopilus-viridans",
  commonName: "Green-Staining Gymnopilus",
  scientificName: "Gymnopilus viridans",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Hymenogastraceae",
    genus: "Gymnopilus",
  },
  summary:
    "A rare, wood-inhabiting Gymnopilus species distinguished by its tendency to develop greenish tones on the cap and flesh when handled or aged. Found primarily in the Pacific Northwest of North America, this species contains psilocybin and psilocin. It is one of the least-documented psychoactive Gymnopilus species, with very few confirmed collections since its original description.",
  description:
    "Gymnopilus viridans is one of the rarest and most poorly understood members of its genus. Originally described by the American mycologist William Alphonso Murrill and later transferred to Gymnopilus by Lexemuel Ray Hesler, the species is defined by its distinctive green staining reaction — a trait that sets it apart from the many other orange-brown wood-rotting Gymnopilus species in North America.\n\nThe green discoloration develops on bruised or aging tissue, particularly on the cap surface and the upper stem. This reaction is not always dramatic — it can range from a faint olive tinge to a more obvious blue-green stain, and its intensity varies with the age and moisture content of the specimen. In fresh, young mushrooms the green staining may be subtle or absent entirely, making identification challenging without mature specimens.\n\nLike other Gymnopilus species, G. viridans is saprotrophic, decomposing dead conifer wood in the moist forests of the Pacific Northwest. It fruits in clusters on fallen logs, stumps, and buried wood, often in late summer through autumn when coastal fog and rain keep humidity high. The species appears to prefer old-growth and mature second-growth conifer forests, particularly Douglas fir and western hemlock stands.\n\nChemical analysis has confirmed the presence of psilocybin and psilocin in this species, placing it among the psychoactive members of the genus alongside Gymnopilus junonius, G. luteofolius, and G. aeruginosus. However, very little is known about the concentrations of these compounds in G. viridans, and the extremely small number of documented collections makes any generalization unreliable.",
  identification: {
    cap: "3–10 cm across. Convex when young, expanding to broadly convex or nearly flat with age. Surface dry, fibrillose to slightly scaly. Color ranges from tawny-orange to golden-brown, developing greenish to olive-green stains with handling or age. Margin may be slightly inrolled when young.",
    gills:
      "Attached (adnate to slightly decurrent). Moderately crowded. Pale yellow to rusty orange as spores mature. May develop greenish tones near cap margin. Edges slightly uneven.",
    stem: "4–10 cm tall, 1–2.5 cm thick. Solid, fibrous. Pale yellowish to tawny, often with a fibrillose or slightly scaly surface. Partial veil may leave a faint ring zone that catches rusty spore deposits. Base may show greenish staining.",
    sporePrint: "Rusty orange-brown.",
    odor: "Not distinctive. Taste bitter, as with most Gymnopilus species.",
  },
  habitat:
    "Saprotrophic on dead conifer wood. Found on fallen logs, stumps, and buried roots in moist coniferous forests. Prefers mature and old-growth stands of Douglas fir, western hemlock, and Sitka spruce. Fruits in small to medium clusters.",
  season:
    "Late summer through autumn, typically August through November. Most collections are from September and October during the wet season in the Pacific Northwest.",
  range:
    "Known primarily from the Pacific Northwest of North America, particularly Washington state. Extremely rarely documented — the type collection is from the early 20th century, with subsequent confirmed finds in western Washington. May be more widespread than records suggest, as its resemblance to other Gymnopilus species likely leads to misidentification.",
  lookAlikes: [
    {
      name: "Spectacular Rustgill (Gymnopilus junonius)",
      slug: "gymnopilus-junonius",
      distinction:
        "Larger (caps up to 18 cm), grows primarily on hardwood rather than conifers, has a prominent membranous ring, and lacks the green staining reaction. Also contains psilocybin in some populations. The intense bitter taste is shared by both species.",
    },
    {
      name: "Gymnopilus aeruginosus (Magic Blue Gym)",
      distinction:
        "Also develops blue-green coloring, but the blue-green tones in G. aeruginosus are present from youth (not just a staining reaction) and are typically more vivid and widespread across the cap. Both species are psychoactive and grow on conifer wood in the Pacific Northwest.",
      externalUrl:
        "https://www.inaturalist.org/taxa/336814-Gymnopilus-aeruginosus",
      externalSource: "iNaturalist",
    },
    {
      name: "Deadly Galerina (Galerina marginata)",
      slug: "galerina-marginata",
      distinction:
        "A critically dangerous look-alike that also grows in clusters on dead wood. Galerina marginata contains amatoxins and is potentially lethal. Key differences: Galerina is smaller, has a brown spore print (not rusty orange), thinner flesh, and a more fragile stem. Always check the spore print when identifying wood-inhabiting brown mushrooms.",
    },
  ],
  edibility: "toxic",
  psychoactive: true,
  edibilityNote:
    "Contains psilocybin and psilocin, making it a controlled substance in most jurisdictions. Bitter tasting like other Gymnopilus species. Not a food mushroom. The extremely limited documentation of this species means its full chemical profile is poorly understood. Do not consume. The risk of confusion with deadly Galerina marginata makes collecting any small-to-medium brown wood-inhabiting mushroom inherently dangerous.",
  gbifKey: 3343088,
  stories: [
    {
      title: "Murrill's Pacific Northwest Expedition",
      text: "William Alphonso Murrill, one of the most prolific American mycologists of the early 20th century, first described the species that would become Gymnopilus viridans during his extensive surveys of Pacific Northwest fungi. Murrill collected thousands of specimens during his career, many from the old-growth forests of Washington and Oregon. His original description noted the distinctive greenish discoloration that gives the species its name — viridans, from the Latin for 'becoming green.'",
      location: "Washington, USA",
      source: "Mycologia",
      sourceUrl: "https://www.jstor.org/journal/mycologia",
    },
    {
      title: "Hesler's Gymnopilus Monograph",
      text: "In 1969, Lexemuel Ray Hesler published his comprehensive monograph on the genus Gymnopilus in North America, transferring Murrill's species into the genus and providing the combination Gymnopilus viridans. Hesler's monograph remains the foundational reference for North American Gymnopilus taxonomy, covering over 70 species. He noted that G. viridans was among the rarest species in his study, known from only a handful of collections.",
      location: "Knoxville, Tennessee, USA",
      source: "North American Species of Gymnopilus, Hesler 1969",
    },
    {
      title: "Fort Flagler Rediscovery",
      text: "In the 2010s, mycologists and citizen scientists documented Gymnopilus viridans at Fort Flagler State Park on Marrowstone Island in Washington state. The collections, photographed and uploaded to Mushroom Observer, provided some of the first high-quality field photographs of the species. The Fort Flagler finds demonstrated that the species persists in Pacific Northwest conifer forests, despite decades with no confirmed reports.",
      location: "Fort Flagler State Park, Washington, USA",
      source: "Mushroom Observer",
      sourceUrl: "https://mushroomobserver.org",
    },
    {
      title: "The Psychoactive Gymnopilus Puzzle",
      text: "A survey of psychoactive compounds in Gymnopilus species confirmed the presence of psilocybin and psilocin in G. viridans, adding it to the growing list of psychoactive species in the genus. The genus Gymnopilus contains at least a dozen species with confirmed or suspected psychoactive compounds, yet the distribution of these compounds across the genus appears patchy and poorly correlated with phylogeny, suggesting the biosynthetic pathway may have been gained and lost multiple times.",
      location: "North America",
      source: "Journal of Natural Products",
    },
    {
      title: "Pacific Northwest Mycological Biodiversity Surveys",
      text: "The old-growth conifer forests of the Pacific Northwest harbor exceptional fungal diversity, with many species known from only a few collections. During biodiversity surveys in Olympic National Forest and surrounding areas, researchers have noted that rarely collected species like Gymnopilus viridans may be more common than herbarium records suggest — they are simply overlooked because they resemble more common Gymnopilus species without careful examination of staining reactions.",
      location: "Olympic Peninsula, Washington, USA",
      source: "Pacific Northwest Key Council",
    },
  ],
  seoQueries: [
    "gymnopilus viridans identification",
    "green staining gymnopilus",
    "gymnopilus viridans psychoactive",
    "gymnopilus viridans psilocybin",
    "gymnopilus viridans vs gymnopilus junonius",
    "gymnopilus viridans vs gymnopilus aeruginosus",
    "green mushroom on wood Pacific Northwest",
    "rare gymnopilus species",
    "gymnopilus viridans habitat",
    "gymnopilus viridans edibility",
    "psychoactive gymnopilus species list",
    "wood rotting mushroom green stain",
    "gymnopilus viridans Washington state",
    "gymnopilus viridans spore print",
    "gymnopilus viridans look alikes",
    "gymnopilus viridans vs galerina marginata",
  ],
  funFacts: [
    "Gymnopilus viridans gets its species name from the Latin 'viridans,' meaning 'becoming green' — a reference to the distinctive greenish staining that develops on handled or aging specimens.",
    "Despite being described over a century ago, Gymnopilus viridans remains one of the least-collected species in its genus. It may go decades between confirmed finds, making each new collection scientifically valuable.",
    "The genus Gymnopilus contains over 200 species worldwide, and at least a dozen are confirmed to contain psilocybin. G. viridans is among the rarest of the psychoactive species.",
    "All known collections of Gymnopilus viridans come from the Pacific Northwest of North America, making it one of the most geographically restricted species in a genus that otherwise spans every continent except Antarctica.",
    "Nearly all high-quality photographs of Gymnopilus viridans in existence were taken at Fort Flagler State Park in Washington — making it one of the few species whose entire photographic record comes from a single location.",
  ],
  images: [
    {
      filename: "01-hero.jpg",
      alt: "Three Gymnopilus viridans specimens growing at the base of a mossy conifer trunk in Pacific Northwest forest",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Gymnopilus_viridans_(Murrill)_Hesler_363906.jpg",
      author: "Caleb Brown",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "02-cluster.jpg",
      alt: "Cluster of Gymnopilus viridans showing gill detail with rusty orange spore deposits on upturned caps",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Gymnopilus_viridans_(Murrill)_Hesler_383081.jpg",
      author: "Caleb Brown",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "03-topview.jpg",
      alt: "Close-up of Gymnopilus viridans cap showing fibrillose surface texture and tawny coloring",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Gymnopilus_viridans_363908.jpg",
      author: "Caleb Brown",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "04-habitat.jpg",
      alt: "Young Gymnopilus viridans specimens emerging from decaying conifer wood debris",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Gymnopilus_viridans_363912.jpg",
      author: "Caleb Brown",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "05-underside.jpg",
      alt: "Gymnopilus viridans stem base cross-section showing yellow flesh and fibrous texture",
      source: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Gymnopilus_viridans_363910.jpg",
      author: "Caleb Brown",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
  ],
};

export default species;
