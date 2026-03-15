import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "gymnopilus-junonius",
  commonName: "Spectacular Rustgill",
  scientificName: "Gymnopilus junonius",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Hymenogastraceae",
    genus: "Gymnopilus",
  },
  summary:
    "A large, showy, bright orange-yellow mushroom that grows in dense clusters on hardwood stumps and logs. Some populations contain psilocybin; others do not. The psychoactive content varies dramatically by region and substrate. Previously known as Gymnopilus spectabilis. This page is for educational identification purposes only.",
  description:
    "Gymnopilus junonius is one of the most visually striking mushrooms in temperate forests. Clusters of bright golden-orange caps erupting from the side of an old oak stump in October are hard to miss, and the species well earns its common name. It is also one of the most confusing mushrooms in terms of psychoactive status, because some populations contain psilocybin and others do not, with the variation apparently linked to geography and possibly substrate.\n\nStudies from Japan and parts of the eastern United States have detected psilocybin in Gymnopilus junonius specimens, while European and some North American collections have tested negative. This inconsistency has led to decades of debate about whether psychoactive and non-psychoactive populations represent the same species or a cryptic species complex. Molecular work is ongoing, but for now, the species is treated as a single variable taxon.\n\nThe mushroom was long known as Gymnopilus spectabilis, a name that some field guides still use. The current accepted name is G. junonius, though the taxonomy remains contentious. Regardless of name, the mushroom is unmistakable in the field: large clusters of golden-orange caps up to 18 cm across, with a thick stem, a prominent ring, and an intensely bitter taste that makes it unpalatable even if you wanted to eat it.\n\nThe bitter taste is important. Gymnopilus junonius contains bis-noryangonin, a styrylpyrone compound that gives the flesh a sharp, acrid flavor. This bitterness persists through cooking and is unpleasant enough that most people who try a bite spit it out. The bitterness, combined with the unpredictable psychoactive content, makes this a mushroom best left on the stump.",
  identification: {
    cap: "5-18 cm across. Convex, expanding to broadly convex or nearly flat. Bright golden-orange to tawny-orange, sometimes with a slightly darker center. Surface is dry, smooth to slightly fibrillose or scaly. Flesh is thick, firm, and yellow.",
    gills: "Attached (adnate to slightly decurrent). Bright yellow when young, becoming rusty orange-brown as spores mature. Crowded. Edges may be slightly uneven.",
    stem: "5-15 cm tall, 1-3 cm thick. Solid, firm, yellow to orange-brown. Has a membranous ring (annulus) in the upper portion that is often stained rusty by deposited spores. Base often slightly swollen. Flesh is yellow and fibrous.",
    sporePrint: "Rusty orange to bright orange-brown.",
    odor: "Not distinctive, sometimes faintly mealy. The taste is intensely and persistently bitter, which is a key identification feature.",
  },
  habitat:
    "Saprotrophic, occasionally weakly parasitic. Grows in dense clusters at the base of hardwood stumps and logs, especially oak, beech, and maple. Also found on buried roots, causing it to appear to grow from the ground. Occasionally on conifers. Common in deciduous and mixed forests, parks, and urban tree plantings.",
  season:
    "Autumn, typically September through November in temperate regions. Peak fruiting in October after sustained autumn rains. Can appear earlier or later depending on local conditions.",
  range:
    "Widespread in temperate regions worldwide. Common throughout eastern North America, the Pacific Northwest, Europe, Japan, Korea, and Australia. Found wherever hardwood forests provide suitable dead wood substrate.",
  lookAlikes: [
    {
      name: "Honey Mushroom (Armillaria mellea)",
      slug: "armillaria-mellea",
      distinction:
        "Edible when cooked. Also grows in clusters on wood. Honey Mushrooms have a white spore print (not rusty orange), lighter tan to honey-colored caps, and lack the intense bitterness of Gymnopilus. The white spore print is definitive.",
    },
    {
      name: "Jack O'Lantern (Omphalotus olearius)",
      slug: "omphalotus-olearius",
      distinction:
        "Toxic. Also orange, also grows in clusters at the base of trees. Jack O'Lanterns have true decurrent gills that run down the stem, a cream to pale yellow spore print, and lack the ring. Gymnopilus has attached gills, a prominent ring, and a rusty orange spore print.",
    },
    {
      name: "Green-Staining Gymnopilus (Gymnopilus viridans)",
      slug: "gymnopilus-viridans",
      distinction:
        "A rare Pacific Northwest species that develops greenish stains on the cap and stem with handling or age. Smaller than G. junonius (caps 3–10 cm), grows on conifer wood rather than hardwood, and lacks the prominent membranous ring. Also contains psilocybin. The green staining reaction is the key distinguishing feature.",
    },
    {
      name: "Yellow-gilled Gymnopilus (Gymnopilus luteofolius)",
      slug: "gymnopilus-luteofolius",
      distinction:
        "Also in the genus Gymnopilus and also found on wood. Smaller (2-8 cm cap), with purplish to wine-colored scales on the cap and a purplish spore deposit. Some collections contain psilocybin. Distinguished by the purple tones and smaller stature.",
    },
  ],
  edibility: "toxic",
  psychoactive: true,
  edibilityNote:
    "Intensely bitter and unpalatable. Some populations contain psilocybin, making it a controlled substance in many jurisdictions. The psychoactive content varies unpredictably by region and population. Also contains bis-noryangonin, which contributes to the extreme bitterness and may have additional pharmacological effects. Not considered a food mushroom under any circumstances. Do not consume.",
  gbifKey: 2531569,
  stories: [
    {
      title: "The Japanese Laughing Mushroom",
      text: "In Japan, Gymnopilus junonius has been known for centuries as \"waraitake\" (the laughing mushroom). Historical accounts describe people who ate it experiencing uncontrollable laughter, giddiness, and mild hallucinations. Japanese researchers in the 1960s confirmed the presence of psilocybin in Japanese specimens, connecting traditional reports to modern chemistry.",
      location: "Japan",
      source: "Transactions of the Mycological Society of Japan",
    },
    {
      title: "The Central Park Spectacular",
      text: "In October 2020, a massive cluster of Gymnopilus junonius erupted from an old oak stump near the Great Lawn in Central Park, New York City. The bright orange display attracted dozens of photographers and mushroom enthusiasts over several days. A park ranger reported that at least three different groups asked whether the mushrooms were psychoactive.",
      location: "New York City, New York, USA",
      source: "New York Mycological Society",
    },
    {
      title: "The Psilocybin Inconsistency Problem",
      text: "A 2008 paper in Biochemical Systematics and Ecology tested Gymnopilus junonius specimens from seven different locations across North America and Europe. Only three of the seven tested positive for psilocybin, and the concentrations varied by a factor of ten. The authors concluded that either the species is chemically polymorphic or it contains cryptic species with different biosynthetic capabilities.",
      location: "Multiple locations, North America and Europe",
      source: "Biochemical Systematics and Ecology (2008)",
    },
  ],
  seoQueries: [
    "gymnopilus junonius identification",
    "spectacular rustgill mushroom",
    "gymnopilus spectabilis psychoactive",
    "big orange mushroom on tree stump",
    "laughing mushroom gymnopilus",
    "gymnopilus junonius psilocybin content",
    "orange cluster mushroom on wood",
    "gymnopilus junonius vs honey mushroom",
    "spectacular rustgill edible",
    "gymnopilus junonius spore print",
    "bitter orange mushroom identification",
    "waraitake laughing mushroom japan",
    "gymnopilus junonius look alikes",
  ],
  funFacts: [
    "The Japanese name for Gymnopilus junonius is 'waraitake,' which translates to 'laughing mushroom.' Historical accounts from feudal Japan describe servants and peasants eating it and bursting into fits of uncontrollable laughter.",
    "Despite containing psilocybin in some populations, Gymnopilus junonius is so intensely bitter that most people cannot stomach enough of it to experience psychoactive effects. The bitterness serves as a natural deterrent.",
    "A single cluster of Gymnopilus junonius can weigh several kilograms and contain dozens of individual fruiting bodies. The largest documented clusters have exceeded 50 caps emerging from a single stump.",
    "The psychoactive status of Gymnopilus junonius varies so dramatically by region that mycologists suspect it may actually be a complex of several genetically distinct species hiding under one name.",
  ],
  images: [
    {
      filename: "01-field.jpg",
      alt: "Spectacular Rustgill (Gymnopilus junonius) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Gymnopilus_junonius-02.jpg",
      author: "Tony Wills",
      license: "CC BY 2.5",
      licenseUrl: "https://creativecommons.org/licenses/by/2.5",
    },
    {
      filename: "02-field.jpg",
      alt: "Spectacular Rustgill (Gymnopilus junonius) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Gymnopilus_junonius.jpg",
      author: "Garnhami",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
  ],
};

export default species;
