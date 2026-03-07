import mapManifest from "@/data/maps/map-manifest.json";

type MapManifestEntry = {
  speciesSlug: string;
  mapVersion: string;
  basemapVersion: string;
  projection: string;
  gbifKey: number;
  occurrenceCount: number;
  fileSizeBytes: number;
  renderingApproved: boolean;
  approved: boolean;
};

const manifest = mapManifest as Record<string, MapManifestEntry>;

const REQUIRED_BASEMAP_VERSION = "world-equirectangular-v1";
const REQUIRED_PROJECTION = "equirectangular";

export function DistributionMapSection({ slug }: { slug: string }) {
  const entry = manifest[slug];
  const isApproved =
    entry &&
    entry.approved &&
    entry.renderingApproved &&
    entry.basemapVersion === REQUIRED_BASEMAP_VERSION &&
    entry.projection === REQUIRED_PROJECTION;

  if (!isApproved) return null;

  return (
    <section>
      <h2 className="mb-2 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
        Where It&apos;s Been Found
      </h2>
      <DistributionMap slug={slug} />
    </section>
  );
}

export function DistributionMap({ slug }: { slug: string }) {
  const entry = manifest[slug];

  const isApproved =
    entry &&
    entry.approved &&
    entry.renderingApproved &&
    entry.basemapVersion === REQUIRED_BASEMAP_VERSION &&
    entry.projection === REQUIRED_PROJECTION;

  if (!isApproved) {
    return null;
  }

  return (
    <div>
      <img
        src={`/images/species/${slug}/distribution-map.png`}
        alt="Global distribution map showing reported sightings"
        className="w-full rounded-lg"
        loading="lazy"
      />
      <p className="mt-1.5 text-xs text-muted-foreground">
        Based on reported sightings worldwide
      </p>
    </div>
  );
}
