"use client";

// Lightweight CTA click tracker. Fires a beacon to record
// which CTA drove a user to orangutany.com. Currently logs
// to console; swap in your analytics endpoint when ready.

export function trackCtaClick(ctaType: string, source: string) {
  if (typeof window === "undefined") return;
  const payload = { cta: ctaType, source, ts: Date.now() };
  // Replace with real endpoint when analytics is set up:
  // navigator.sendBeacon("/api/track", JSON.stringify(payload));
  console.debug("[cta-track]", payload);
}
