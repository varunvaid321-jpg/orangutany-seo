import { SpeciesRecord } from "@/lib/types";

const species: SpeciesRecord = {
  slug: "grifola-frondosa",
  commonName: "Hen of the Woods",
  scientificName: "Grifola frondosa",
  taxonomy: {
    kingdom: "Fungi",
    phylum: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Polyporales",
    family: "Meripilaceae",
    genus: "Grifola",
  },
  summary:
    "In Japan, they call it maitake — the 'dancing mushroom' — because foragers supposedly danced with joy when they found one. And honestly? If you stumbled across a 50-pound fungus that's both a gourmet ingredient and a medicinal powerhouse, you'd probably dance too.",
  description:
    "The legend goes like this: Japanese foragers who discovered maitake growing at the base of an old oak would literally dance on the spot, overwhelmed by their luck. These mushrooms were so valuable that foragers kept their spots secret for generations, passing coordinates down like family heirlooms. And it makes sense — a single Grifola frondosa cluster can weigh over 50 pounds, making it one of the largest fungi you'll ever encounter in the wild. Finding one is like hitting the forest jackpot.\n\nBut maitake isn't just prized for its size or its rich, earthy, umami-packed flavor. It's one of the rare mushrooms that straddles the line between gourmet food and serious medicine. The beta-glucans in maitake (especially a fraction called D-fraction) have been studied extensively for immune-boosting properties, and early research suggests potential anti-tumor activity. In traditional Chinese and Japanese medicine, it's been used for centuries to support overall health. Modern science is starting to catch up — studies on blood sugar regulation and cholesterol reduction have shown promising results.\n\nYou'll find hen of the woods growing at the base of hardwoods, especially oaks, from late summer through autumn. It's a parasitic and saprobic fungus, meaning it attacks living trees and continues decomposing them after they die. The same tree can produce a flush year after year, which is why experienced foragers guard their spots so fiercely. In the kitchen, it's spectacular — the frilly edges crisp up beautifully when seared or roasted, and the meaty texture holds up to bold flavors. Tear it into chunks, hit it with high heat, and you've got something that rivals any steak side dish.",
  identification: {
    cap: "A dense rosette of overlapping, fan-shaped fronds (caps), each 2-8 cm across. Gray-brown on top, sometimes with darker zones toward the center. The edges are wavy and slightly curled. The whole cluster can be 20-60 cm wide — some monsters get even bigger.",
    gills: "No gills. The underside has tiny white pores (1-3 per mm) that run slightly down the branching stems. This is a polypore, so if you see gills, you've got the wrong mushroom.",
    stem: "Multiple branching white stems merge into a single thick base that attaches to the tree or its roots. The base can be surprisingly tough and woody — most foragers trim it off and focus on the tender fronds.",
  },
  habitat:
    "Grows at the base of living or dead hardwood trees, with a strong preference for oaks. Occasionally found on maples, elms, and other hardwoods. Typically appears on the ground near the trunk or over surface roots. Prefers mature forests but shows up in parks and suburban areas too — anywhere there's an old oak.",
  season: "Late August through November in the Northern Hemisphere. Peak is September-October. The same tree often produces flushes in the same spot year after year.",
  range:
    "Native to temperate forests of eastern North America, Europe, and East Asia (especially Japan and China). Most common in the northeastern and mid-Atlantic United States. Also found in parts of the Pacific Northwest and scattered locations in the UK and continental Europe.",
  lookAlikes: [
    {
      name: "Chicken of the Woods (Laetiporus sulphureus)",
      slug: "laetiporus-sulphureus",
      image: "lookalike-chicken.jpg",
      distinction:
        "Bright orange and yellow shelves — impossible to miss the color difference. Chicken of the Woods grows higher up on trunks and logs, not at the base. The flesh is thick and rubbery, not frilly. If it's neon orange, it's not maitake.",
      externalUrl: "https://www.inaturalist.org/taxa/53713-Laetiporus-sulphureus",
      externalSource: "iNaturalist",
    },
    {
      name: "Berkeley's Polypore (Bondarzewia berkeleyi)",
      image: "lookalike-berkeley.jpg",
      distinction:
        "Much larger individual caps (up to 25 cm each) with a pale cream to tan color. Thicker and tougher flesh. Grows at the base of oaks too, but the caps are fewer in number and much broader — maitake has many small, delicate overlapping fronds. Berkeley's is generally too tough to eat.",
      externalUrl: "https://www.inaturalist.org/taxa/84224-Bondarzewia-berkeleyi",
      externalSource: "iNaturalist",
    },
    {
      name: "Black-staining Polypore (Meripilus sumstinei)",
      image: "lookalike-blackstaining.jpg",
      distinction:
        "The giveaway is in the name — the pore surface and flesh stain black when bruised or cut. Maitake doesn't do this. Also tends to have larger, rounder caps with concentric zones. Press on the pore surface: if it turns dark, it's Meripilus, not Grifola.",
      externalUrl: "https://www.inaturalist.org/taxa/125738-Meripilus-sumstinei",
      externalSource: "iNaturalist",
    },
  ],
  edibility: "edible",
  edibilityNote:
    "An excellent edible mushroom — one of the most sought-after wild fungi in both North America and Japan. Best when young and tender; older specimens can get tough and slightly bitter. The outer frond edges are the choicest parts. Tear into pieces and roast, sear, or grill at high heat for the best texture. Dries and rehydrates well too.",
  gbifKey: 2540800,
  stories: [
    {
      title: "The 40-Pound Monster of West Virginia",
      text: "In 2018, a forager in the Monongahela National Forest posted photos of a single maitake cluster that tipped the scales at 42 pounds. It took two people to carry it out of the woods in a laundry basket. They spent the next week dehydrating most of it and gave bags away to every neighbor on the street.",
      location: "Monongahela National Forest, West Virginia, USA",
      source: "r/mycology",
      sourceUrl: "https://www.reddit.com/r/mycology/",
    },
    {
      title: "Why the Japanese Danced",
      text: "The name 'maitake' literally translates to 'dancing mushroom.' According to Japanese folklore, feudal-era mushroom hunters would dance with happiness upon finding one because the mushroom was worth its weight in silver. Some scholars suggest the name actually comes from the overlapping fronds resembling butterfly wings in dance — but the dancing-forager story is too good not to tell.",
      location: "Japan",
      source: "Hobbs, 'Medicinal Mushrooms' (1995)",
    },
    {
      title: "A Farmers Market Bidding War",
      text: "A vendor at the Union Square Greenmarket in New York once described how a 15-pound maitake created a small scene among restaurant chefs shopping early on a Saturday. Two chefs from competing restaurants both reached for it simultaneously. The vendor split it in half and charged $20 per pound — higher than the usual $16 — and both chefs happily paid.",
      location: "Union Square, New York City, USA",
      source: "New York Times food section",
    },
    {
      title: "Maitake D-Fraction and Cancer Research",
      text: "In 2009, a Phase I/II trial at Memorial Sloan Kettering Cancer Center tested maitake D-fraction extract on breast cancer patients. The results were mixed but showed measurable immune stimulation. The study helped legitimize what Japanese herbalists had claimed for centuries — that this mushroom genuinely boosts immune function. Research continues, though nobody's calling it a cure.",
      location: "Memorial Sloan Kettering, New York, USA",
      source: "Journal of Cancer Research and Clinical Oncology",
      sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/19844759/",
    },
    {
      title: "A First Timer's Oak Tree Miracle",
      text: "A first-time forager in Connecticut posted online about walking past the same oak tree in her neighborhood park for years before a mushroom ID class changed everything. The next September, she spotted a massive maitake at its base. 'I screamed. My dog thought something was wrong. I called my husband and made him come look at a mushroom.' She harvested 12 pounds and made mushroom risotto for a week.",
      location: "Connecticut, USA",
      source: "r/foraging",
      sourceUrl: "https://www.reddit.com/r/foraging/",
    },
  ],
  seoQueries: [
    "hen of the woods mushroom",
    "maitake mushroom identification",
    "hen of the woods look alikes",
    "is hen of the woods edible",
    "how to cook maitake mushrooms",
    "mushroom growing at base of oak tree",
    "maitake health benefits",
    "hen of the woods vs chicken of the woods",
    "where to find hen of the woods",
    "grifola frondosa identification",
    "maitake mushroom cancer research",
    "large mushroom at base of tree",
    "hen of the woods season",
    "maitake beta glucan immune",
    "gray brown mushroom cluster tree base",
  ],
  funFacts: [
    "A single maitake cluster can weigh over 50 pounds — some of the largest individual fungal fruiting bodies you'll find in North American forests.",
    "Japanese foragers historically kept their maitake spots secret for generations, passing the locations down within families like valuable inheritance.",
    "Maitake is one of the few mushrooms with both serious culinary cred and legitimate scientific research behind its medicinal properties.",
    "The same oak tree can produce a maitake flush in the exact same spot year after year, sometimes for decades — which is why foragers call them 'money trees.'",
    "In feudal Japan, maitake was reportedly worth its weight in silver, making it one of the most economically valuable wild mushrooms in history.",
  ],
  images: [
    {
      filename: "05-fresh.jpg",
      alt: "Fresh Hen of the Woods rosette with overlapping fan-shaped caps",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Grifola_frondosa_57503_cropped.jpg",
      author: "Mushroom Observer",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    {
      filename: "06-cluster.jpg",
      alt: "Hen of the Woods cluster with warm creamy-tan caps at tree base",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Hen_of_the_Woods_-_Grifola_frondosa_(24664019178).jpg",
      author: "Flickr user",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    },
    {
      filename: "03-field.jpg",
      alt: "Forager holding a massive Hen of the Woods cluster in the forest",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Grifola_frondosa_2014_G3.jpg",
      author: "George Chernilevsky",
      license: "Public domain",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    },
    {
      filename: "07-habitat.jpg",
      alt: "Hen of the Woods growing at oak tree base showing natural habitat",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Hen_of_the_Woods_-_Grifola_frondosa_(37820669824).jpg",
      author: "Flickr user",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    },
    {
      filename: "01-field.jpg",
      alt: "Hen of the Woods (Grifola frondosa) wild specimen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Grifola_frondosa_(29715305790).jpg",
      author: "Lukas from London, England",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    },
    {
      filename: "04-cross-section.jpg",
      alt: "Hen of the Woods cross section",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Grifola_frondosa_cross-section.jpg",
      author: "The original uploader was Esagor at English Wikipedia.",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    },
  ],
  identificationImages: {
    cap: "02-fronds.jpg",
    gills: "03-large.jpg",
    stem: "04-base-of-oak.jpg",
  },
};

export default species;
