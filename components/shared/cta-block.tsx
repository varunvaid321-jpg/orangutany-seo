// Reusable CTA block that routes users back to orangutany.com.
// Vary usage: sometimes centered card, sometimes inline, sometimes subtle.
// Pass variant to control visual style so pages don't all look the same.

import type { CtaType } from "@/lib/content-index";

const CTA_COPY: Record<CtaType, { text: string; action: string } | null> = {
  identify: {
    text: "Found something in the wild you can't identify?",
    action: "Try Orangutany, it can ID mushrooms from a photo.",
  },
  upload: {
    text: "Got a mushroom photo?",
    action: "Upload it to Orangutany for a quick identification.",
  },
  signup: {
    text: "Want to save your finds and track species?",
    action: "Create a free Orangutany account.",
  },
  "try-app": {
    text: "Curious what that mushroom is?",
    action: "Orangutany identifies mushrooms from photos in seconds.",
  },
  distribution: {
    text: "Want to see what grows near you?",
    action: "Orangutany shows species distribution based on your location.",
  },
  none: null,
};

type Variant = "card" | "inline" | "subtle";

export function CtaBlock({
  ctaType,
  variant = "card",
}: {
  ctaType: CtaType;
  variant?: Variant;
}) {
  const cta = CTA_COPY[ctaType];
  if (!cta) return null;

  if (variant === "subtle") {
    return (
      <p className="mt-6 text-xs text-foreground/50">
        {cta.text}{" "}
        <a href="https://orangutany.com" className="text-primary hover:underline">
          {cta.action}
        </a>
      </p>
    );
  }

  if (variant === "inline") {
    return (
      <p className="mt-8 text-sm text-foreground/70">
        {cta.text}{" "}
        <a href="https://orangutany.com" className="text-primary hover:underline">
          {cta.action}
        </a>
      </p>
    );
  }

  return (
    <section className="mt-10 rounded-xl border border-border bg-card p-5 text-center">
      <p className="text-sm text-foreground/70">
        {cta.text}{" "}
        <a href="https://orangutany.com" className="text-primary hover:underline">
          {cta.action}
        </a>
      </p>
    </section>
  );
}
