import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 font-[family-name:var(--font-heading)] text-4xl font-bold text-foreground">
        404
      </h1>
      <p className="mb-8 text-lg text-muted-foreground">
        This page doesn&apos;t exist. It may have been moved or removed.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="rounded-lg bg-primary px-6 py-3 font-medium text-background transition hover:bg-primary/90"
        >
          Go Home
        </Link>
        <Link
          href="/mushrooms"
          className="rounded-lg border border-border px-6 py-3 font-medium text-foreground transition hover:border-primary/50"
        >
          Browse Species
        </Link>
      </div>
    </main>
  );
}
