export function DistributionMap({ slug }: { slug: string }) {
  return (
    <div>
      <img
        src={`/images/species/${slug}/distribution-map.png`}
        alt={`Global distribution map showing reported sightings`}
        className="w-full rounded-lg"
        loading="lazy"
      />
      <p className="mt-1.5 text-xs text-muted-foreground">
        Based on reported sightings worldwide &middot; Data via{" "}
        <a href="https://www.gbif.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
          GBIF
        </a>
      </p>
    </div>
  );
}
