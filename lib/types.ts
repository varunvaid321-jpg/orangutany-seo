export type SpeciesRecord = {
  slug: string;
  commonName: string;
  scientificName: string;
  taxonomy: {
    kingdom: string;
    phylum: string;
    class: string;
    order: string;
    family: string;
    genus: string;
  };
  summary: string;
  description: string;
  identification: {
    cap?: string;
    gills?: string;
    stem?: string;
    sporePrint?: string;
    bruising?: string;
    odor?: string;
  };
  habitat: string;
  season: string;
  range: string;
  lookAlikes: {
    name: string;
    slug?: string;
    distinction: string;
    image?: string;
    externalUrl?: string;
    externalSource?: string;
  }[];
  edibility: "edible" | "edible-with-caution" | "inedible" | "toxic" | "deadly";
  psychoactive?: boolean;
  edibilityNote: string;
  gbifKey: number;
  funFacts: string[];
  seoQueries: string[];
  stories: {
    title: string;
    text: string;
    location: string;
    source?: string;
    sourceUrl?: string;
  }[];
  images: SpeciesImage[];
  identificationImages?: {
    cap?: string;
    gills?: string;
    stem?: string;
    sporePrint?: string;
  };
};

export type SpeciesImage = {
  filename: string;
  alt: string;
  source: string;
  sourceUrl: string;
  author: string;
  license: string;
  licenseUrl: string;
};
