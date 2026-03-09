import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Orangutany Quarterly",
  description:
    "Subscribe to the Orangutany Quarterly. Foraging stories, poisoning cases, species discoveries, and seasonal guides. One email per quarter.",
  alternates: { canonical: "/newsletter" },
};

export default function NewsletterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
