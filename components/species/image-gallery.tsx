"use client";

import { useState } from "react";
import type { SpeciesImage } from "@/lib/types";

export function ImageGallery({ images, slug }: { images: SpeciesImage[]; slug: string }) {
  const [selected, setSelected] = useState(0);

  if (images.length === 0) {
    return (
      <div className="flex aspect-[4/3] items-center justify-center rounded-xl border border-border bg-card">
        <p className="text-sm text-muted-foreground">Image unavailable</p>
      </div>
    );
  }

  const current = images[selected];
  const basePath = `/images/species/${slug}`;

  return (
    <div className="space-y-3">
      {/* Main image: contain-safe rendering preserves full specimen */}
      <div className="overflow-hidden rounded-xl border border-border bg-[#1a1a1a]">
        <img
          src={`${basePath}/${current.filename}`}
          alt={current.alt}
          className="aspect-[4/3] w-full object-contain"
          loading="eager"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto">
          {images.map((img, i) => (
            <button
              key={img.filename}
              onClick={() => setSelected(i)}
              className={`flex-shrink-0 overflow-hidden rounded-lg border-2 transition ${
                i === selected ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={`${basePath}/${img.filename}`}
                alt={img.alt}
                className="h-16 w-20 object-cover object-top"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}

      {/* Attribution */}
      <p className="text-xs text-muted-foreground">
        Photo by {current.author} &middot;{" "}
        <a href={current.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
          {current.source}
        </a>
        {current.licenseUrl ? (
          <>
            {" "}&middot;{" "}
            <a href={current.licenseUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {current.license}
            </a>
          </>
        ) : (
          <> &middot; {current.license}</>
        )}
      </p>
    </div>
  );
}
