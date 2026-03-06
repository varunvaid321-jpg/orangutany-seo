import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-border/50 px-6 py-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <Link href="/" className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
          Orangutany <span className="text-primary">Guide</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/mushrooms" className="text-sm text-muted-foreground hover:text-foreground transition">
            All Species
          </Link>
          <Link href="/most-dangerous-mushrooms" className="text-sm text-muted-foreground hover:text-foreground transition">
            Most Dangerous
          </Link>
          <Link href="/best-edible-mushrooms" className="text-sm text-muted-foreground hover:text-foreground transition">
            Best Edible
          </Link>
          <Link href="/beginners-guide-to-mushroom-foraging" className="text-sm text-muted-foreground hover:text-foreground transition hidden lg:block">
            Foraging Guide
          </Link>
          <a
            href="https://orangutany.com"
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-background transition hover:bg-primary/90"
          >
            Identify a Mushroom
          </a>
        </nav>
      </div>
    </header>
  );
}
