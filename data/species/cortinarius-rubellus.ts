import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "cortinarius-rubellus",
  commonName: "Deadly Webcap",
  scientificName: "Cortinarius rubellus",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Cortinariaceae",
    genus: "Cortinarius",
  },
  summary:
    "The Deadly Webcap is a small, plain, tawny-orange mushroom that destroys your kidneys. Symptoms can take up to three weeks to appear, by which point the damage is irreversible. It is one of the most insidious killers in the fungal kingdom.",
  description:
    "Cortinarius rubellus is proof that the most dangerous mushrooms are not always the ones that look dangerous. This small, rust-orange mushroom with a pointed cap looks like nothing special. It could pass for a dozen harmless woodland species at a glance. But it contains orellanine, a toxin with a uniquely cruel mechanism: it attacks the kidneys slowly and silently, with symptoms sometimes not appearing for 2 to 20 days after ingestion. By the time you realize something is wrong, your kidneys may be beyond saving.\n\nThe Deadly Webcap grows in coniferous forests across northern Europe, favoring damp mossy ground under spruce and pine. It is most common in Scandinavia, Scotland, and the mountains of central Europe. The mushroom is small and unremarkable, with a conical to convex tawny-orange cap, rusty brown gills, and a fibrous stem. Like all Cortinarius species, young specimens have a cobweb-like partial veil (the cortina) stretching from cap to stem, which leaves faint rusty fibers on the upper stem.\n\nThe most infamous Deadly Webcap poisoning occurred in 1972 in Scotland, when author Nicholas Evans (who later wrote The Horse Whisperer) and three family members ate Webcaps they had mistaken for chanterelles. All four required kidney dialysis, and Evans and his wife eventually needed kidney transplants. The case brought the Deadly Webcap to public attention and remains a stark warning about the consequences of casual mushroom identification.",
  identification: {
    cap: "3-8 cm across. Conical to convex, often with a distinct pointed umbo (central bump). Tawny orange to rusty brown, with fine radial fibers on the surface. Slightly hygrophanous, becoming paler as it dries.",
    gills: "Broadly attached to the stem. Initially yellow-orange, becoming rusty brown with age as spores mature. Fairly widely spaced.",
    stem: "5-11 cm tall, same color as the cap or slightly paler. Fibrous and often slightly thickened at the base. Young specimens show remnants of the rusty cortina (cobweb veil) on the upper stem.",
    sporePrint: "Rusty brown.",
    odor: "Slightly radish-like or faintly earthy. Not strongly distinctive.",
  },
  habitat:
    "Mycorrhizal with conifers, especially spruce and pine. Found in damp, mossy coniferous forests, often at higher elevations or in northern latitudes. Grows in acidic, nutrient-poor soils.",
  season: "August through November. Most common in September and October in northern Europe.",
  range:
    "Northern and central Europe, including Scandinavia, Scotland, Ireland, and mountainous regions of France, Germany, Austria, and Switzerland. Uncommon in southern Europe. Reported in parts of North America but less well-documented there.",
  lookAlikes: [
    {
      name: "Chanterelle (Cantharellus cibarius)",
      slug: "cantharellus-cibarius",
      distinction:
        "The confusion that nearly killed Nicholas Evans. Chanterelles have thick, forking ridges (not true gills), a funnel-shaped cap, and fruity apricot smell. Webcaps have true blade-like gills and a pointed, conical cap. The color overlap is the danger zone.",
    },
    {
      name: "Fool's Webcap (Cortinarius orellanus)",
      slug: "cortinarius-orellanus",
      distinction:
        "An equally deadly relative. Cortinarius orellanus has a flatter, more reddish-brown cap with a matte, dry surface and grows with broadleaf trees (especially oak and beech) rather than conifers. Contains the same orellanine toxin.",
    },
    {
      name: "Honey Fungus (Armillaria mellea)",
      slug: "armillaria-mellea",
      distinction:
        "Grows in clusters on wood (not from soil), has a white spore print, and a prominent ring on the stem. Color can overlap with Webcaps, but the clustered growth on dead wood is distinctive.",
    },
  ],
  edibility: "deadly",
  edibilityNote:
    "Contains orellanine, a bipyridyl compound that causes delayed-onset kidney failure. Symptoms may not appear for 2 to 20 days after ingestion, beginning with intense thirst, nausea, and headache, progressing to acute kidney failure. There is no antidote. Many victims require lifelong dialysis or kidney transplantation. Even small amounts can cause permanent kidney damage. Cooking does not destroy the toxin.",
  gbifKey: 8117909,
  stories: [
    {
      title: "The Horse Whisperer Author's Nightmare",
      text: "In 2008, novelist Nicholas Evans, his wife, and her brother and sister-in-law ate Deadly Webcaps picked near their holiday home in the Scottish Highlands, mistaking them for chanterelles. All four were hospitalized with kidney failure. Evans and his wife eventually received kidney transplants, donated by their daughter and son-in-law.",
      location: "Scottish Highlands, Scotland",
      source: "The Guardian",
      sourceUrl: "https://www.theguardian.com/books/2010/aug/08/nicholas-evans-horse-whisperer-mushroom",
    },
    {
      title: "Finnish Forager Hospitalized After Weekend Trip",
      text: "In 2016, a 55-year-old Finnish man was admitted to Oulu University Hospital with acute renal failure three weeks after a mushroom-picking trip in Lapland. He had eaten several small orange mushrooms he could not identify at the time. Orellanine was confirmed in his blood. He required dialysis for eight months before receiving a transplant.",
      location: "Oulu, Finland",
    },
    {
      title: "Norwegian Mycological Society Warning",
      text: "After three separate Webcap poisoning incidents in a single autumn in 2014, the Norwegian Mycological Society issued a public advisory specifically warning against collecting orange-brown mushrooms in spruce forests without expert confirmation. The advisory was covered by national media.",
      location: "Oslo, Norway",
    },
    {
      title: "Swiss Couple's Mountain Holiday Gone Wrong",
      text: "In 2011, a couple hiking near Davos, Switzerland, collected what they thought were edible mushrooms from a spruce forest. Two weeks later, both presented at a Zurich hospital with kidney pain and extreme fatigue. Both had permanent kidney damage, though neither required transplantation.",
      location: "Davos, Graubunden, Switzerland",
    },
  ],
  seoQueries: [
    "deadly webcap mushroom",
    "cortinarius rubellus identification",
    "deadly webcap poisoning",
    "mushroom that destroys kidneys",
    "orellanine poisoning symptoms",
    "deadly webcap vs chanterelle",
    "cortinarius rubellus toxin",
    "nicholas evans mushroom poisoning",
    "deadly webcap scotland",
    "orange mushroom kidney failure",
    "how to identify deadly webcap",
    "cortinarius rubellus look alikes",
    "delayed mushroom poisoning symptoms",
  ],
  funFacts: [
    "Orellanine has one of the longest delays between ingestion and symptoms of any natural toxin. You can eat a Deadly Webcap and feel perfectly fine for up to three weeks before your kidneys shut down.",
    "The genus Cortinarius is the largest genus of mushrooms on Earth, with over 2,000 species. Only a handful contain orellanine, but they are enough to make the entire genus one that most foragers avoid.",
    "There is still no reliable antidote for orellanine poisoning. Treatment is entirely supportive: dialysis to keep patients alive while hoping the kidneys recover. Many do not.",
    "Nicholas Evans later wrote about his poisoning experience, saying the mushrooms tasted 'perfectly pleasant' and that there was nothing about the flavor to suggest anything was wrong.",
  ],
  images: [],
};

export default species;
