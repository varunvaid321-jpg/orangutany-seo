import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "psilocybe-caerulescens",
  commonName: "Landslide Mushroom / Derrumbe",
  scientificName: "Psilocybe caerulescens",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Hymenogastraceae",
    genus: "Psilocybe",
  },
  summary:
    "A psychoactive mushroom used in traditional Mazatec ceremonies alongside Psilocybe mexicana. Known locally as \"derrumbe\" (landslide) because it often fruits on disturbed earth after landslides and road cuts. Contains psilocybin; illegal in most jurisdictions. This page is for educational identification purposes only.",
  description:
    "Psilocybe caerulescens — known to the Mazatec people as derrumbe, meaning \"landslide\" — is one of the sacred mushrooms used in traditional healing ceremonies in the mountains of southern Mexico. The name reflects its remarkable ecological habit: it fruits prolifically on disturbed, bare earth, particularly on landslide scars, road cuts, and freshly exposed soil along trails and stream banks. Where the earth has been torn open, derrumbe moves in.\n\nThis species was one of those encountered by R. Gordon Wasson during his pioneering visits to Mazatec communities in the 1950s, though it was Psilocybe mexicana that received most of the attention in his famous Life magazine article. The Mazatec curanderos recognized multiple species of sacred mushrooms and used them for different purposes — derrumbe was considered particularly potent.\n\nPsilocybe caerulescens is a medium-sized mushroom with a distinctive silvery-blue metallic sheen on the cap surface, particularly visible when young and fresh. The species name \"caerulescens\" means \"becoming blue,\" referring both to this natural coloration and the intense blue bruising reaction that occurs when the flesh is damaged — a hallmark of psilocybin-containing species. The cap is hygrophanous, changing color dramatically as it dries.\n\nThe species grows at moderate to high elevations (500-1,700 meters) in southern Mexico and into South America, preferring the disturbed muddy or clayey soils along ravines, trails, and road cuts. It can fruit in large clusters after heavy rains, sometimes producing dozens of fruiting bodies from a single patch of exposed earth. This tendency to colonize disturbed ground made it one of the most reliably found sacred mushrooms in the Sierra Mazateca.",
  identification: {
    cap: "2-6 cm across. Convex to broadly convex, sometimes with a low umbo. Silvery-blue to olive-brown with a distinctive metallic or greasy sheen when fresh. Hygrophanous — dries to pale straw or beige. Surface smooth, sometimes with a slight gelatinous feel.",
    gills: "Adnate to slightly sinuate, close to moderately spaced. Grayish when young, becoming dark purple-brown with maturity. Edges often lighter or whitish.",
    stem: "4-10 cm tall, 3-7 mm thick. White to pale brownish, silky-fibrous. Equal or slightly enlarged at the base. Bruises strongly blue-green when handled. Partial veil leaves a faint fibrous zone.",
    sporePrint: "Dark purple-brown to blackish-purple.",
    bruising: "Strong and rapid blue-green bruising on all parts when damaged. The cap surface often shows blue-green tones naturally, especially near the margin.",
  },
  habitat:
    "Disturbed, bare soil — landslide scars, road cuts, trail edges, stream banks, and exposed clay or muddy substrates. Often among mosses on freshly exposed earth. Subtropical to tropical montane forests at 500-1,700 meters elevation.",
  season: "June through October during the rainy season. Peak fruiting in July and August after heavy rains expose and saturate soil.",
  range:
    "Southern Mexico (Oaxaca, Puebla, Guerrero, Veracruz), Guatemala, Venezuela, Brazil. The primary range is the mountainous regions of Oaxaca where it has been used traditionally for centuries.",
  lookAlikes: [
    {
      name: "Teonanácatl (Psilocybe mexicana)",
      slug: "psilocybe-mexicana",
      distinction:
        "Smaller (cap 1-3 cm vs 2-6 cm), grows in grassy meadows rather than bare disturbed earth. More conical cap shape. Both contain psilocybin and are used in Mazatec ceremonies.",
    },
    {
      name: "Golden Teacher (Psilocybe cubensis)",
      slug: "psilocybe-cubensis",
      distinction:
        "Larger, golden-brown mushroom that grows on dung in lowland tropical pastures, not on bare montane soil. Lacks the silvery-blue metallic sheen of P. caerulescens.",
    },
    {
      name: "Deadly Galerina (Galerina marginata)",
      slug: "galerina-marginata",
      distinction:
        "DEADLY POISONOUS. Grows on decaying wood, not bare soil. Has a prominent ring and rusty-brown spore print (not purple-brown). Does not bruise blue.",
    },
  ],
  edibility: "toxic",
  psychoactive: true,
  edibilityNote:
    "Contains psilocybin and psilocin, classified as controlled substances in most countries. Possession and consumption carry serious legal consequences. Documented here for educational identification purposes only.",
  gbifKey: 5242497,
  funFacts: [
    "The name \"derrumbe\" means landslide in Spanish — it fruits on freshly exposed earth after landslides, road construction, and trail erosion.",
    "The silvery-blue metallic sheen on fresh caps is distinctive among Psilocybe species and gave rise to the species name \"caerulescens\" (becoming blue).",
    "Mazatec curanderos distinguished between multiple sacred mushroom species and considered derrumbe among the more potent varieties.",
    "After heavy rains in the Sierra Mazateca, dozens of fruiting bodies can appear overnight on a single landslide scar.",
  ],
  seoQueries: [
    "psilocybe caerulescens identification",
    "derrumbe mushroom",
    "landslide mushroom mexico",
    "mazatec sacred mushrooms",
    "psilocybe caerulescens blue bruising",
    "mexican psilocybin species",
  ],
  stories: [
    {
      title: "The Landslide Healer",
      text: "In Mazatec tradition, derrumbe was valued not just for its psychoactive properties but for where it chose to grow. The mushroom's habit of appearing on landslide scars — places where the earth had been violently torn open — was seen as metaphorically significant. Just as the earth was broken open to reveal something new, the mushroom was believed to open the mind to healing. Curanderos would sometimes seek out fresh landslide sites specifically to collect derrumbe for ceremonies.",
      location: "Sierra Mazateca, Oaxaca, Mexico",
      source: "Ethnomycological literature",
      sourceUrl: "https://en.wikipedia.org/wiki/Psilocybe_caerulescens",
    },
  ],
  images: [
    {
      filename: "01-field.jpg",
      alt: "Landslide Mushroom / Derrumbe (Psilocybe caerulescens) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Psilocybe.caerulescens.Colima.jpg",
      author: "Alan Rockefeller",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "02-group.jpg",
      alt: "Group of Landslide Mushroom / Derrumbe mushrooms in the wild",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Cluster_of_Psilocybe_caerulescens.jpg",
      author: "Evlyshroom",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    {
      filename: "03-field.jpg",
      alt: "Landslide Mushroom / Derrumbe (Psilocybe caerulescens) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Psilocybe.caerulescens.Jalisco-2.jpg",
      author: "Alan Rockefeller",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "04-field.jpg",
      alt: "Landslide Mushroom / Derrumbe (Psilocybe caerulescens) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Psilocybe.caerulescens.Jalisco.1.jpg",
      author: "Alan Rockefeller",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "05-field.jpg",
      alt: "Landslide Mushroom / Derrumbe (Psilocybe caerulescens) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Psilocybe.caerulescens.Jalisco.jpg",
      author: "Alan Rockefeller",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
  ],
};

export default species;
