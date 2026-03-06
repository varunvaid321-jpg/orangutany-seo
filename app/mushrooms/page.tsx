import { Metadata } from "next";
import { allSpecies } from "@/data/species";
import { MushroomGrid } from "@/components/species/mushroom-grid";

export const metadata: Metadata = {
  title: "All Mushroom Species",
  description:
    "Browse our complete guide to wild mushrooms — edible, toxic, and deadly species with real images, habitat maps, look-alikes, and safety notes.",
  alternates: { canonical: "/mushrooms" },
  openGraph: {
    title: "All Mushroom Species | Orangutany Mushroom Guide",
    description:
      "Browse our complete guide to wild mushrooms — edible, toxic, and deadly species with real images, habitat maps, look-alikes, and safety notes.",
  },
};

export default function MushroomsIndexPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-8">
      <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground sm:text-3xl">
        All Mushroom Species
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        {allSpecies.length} species with real images, distribution maps, and safety info.
      </p>
      <MushroomGrid species={allSpecies} />
    </div>
  );
}
