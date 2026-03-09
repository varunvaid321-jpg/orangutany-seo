"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  // Sub-article links that should NOT trigger the parent "Articles" highlight
  const articleSubLinks = [
    "/articles/most-dangerous-mushrooms",
    "/articles/best-edible-mushrooms",
    "/articles/cooking-wild-mushrooms",
  ];

  function navClass(href: string) {
    let active = pathname === href || pathname.startsWith(href + "/");
    // If this is the /articles hub link, don't highlight when a sub-article nav link is active
    if (href === "/articles" && articleSubLinks.some((sub) => pathname === sub || pathname.startsWith(sub + "/"))) {
      active = false;
    }
    return `text-xs sm:text-sm transition whitespace-nowrap shrink-0 ${active ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`;
  }

  return (
    <header className="border-b border-border/50 px-4 sm:px-6">
      {/* Row 1: logo + back to app */}
      <div className="mx-auto flex max-w-5xl items-center justify-between py-3">
        <Link href="/" className="font-[family-name:var(--font-heading)] text-lg sm:text-2xl font-bold text-foreground whitespace-nowrap">
          Orangutany <span className="text-primary">Guide</span>
        </Link>
        <a
          href="https://orangutany.com"
          className="hidden sm:inline text-xs sm:text-sm text-muted-foreground hover:text-foreground transition whitespace-nowrap shrink-0"
        >
          Go to Orangutany Mushroom ID &rarr;
        </a>
      </div>
      {/* Row 2: Identify + nav links */}
      <div className="mx-auto max-w-5xl border-t border-border/30">
        <nav className="flex items-center gap-3 sm:gap-5 py-2.5 overflow-x-auto">
          <a
            href="https://orangutany.com"
            className="rounded-full bg-primary px-3 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm font-medium text-background transition hover:bg-primary/90 whitespace-nowrap shrink-0"
          >
            Identify
          </a>
          <Link href="/mushrooms" className={navClass("/mushrooms")}>
            Species
          </Link>
          <Link href="/articles" className={navClass("/articles")}>
            Articles
          </Link>
          <Link href="/guides" className={`hidden sm:block ${navClass("/guides")}`}>
            Guides
          </Link>
          <Link href="/articles/most-dangerous-mushrooms" className={`hidden md:block ${navClass("/articles/most-dangerous-mushrooms")}`}>
            Most Dangerous
          </Link>
          <Link href="/articles/best-edible-mushrooms" className={`hidden md:block ${navClass("/articles/best-edible-mushrooms")}`}>
            Best Edible
          </Link>
          <Link href="/articles/cooking-wild-mushrooms" className={`hidden md:block ${navClass("/articles/cooking-wild-mushrooms")}`}>
            Recipes
          </Link>
        </nav>
      </div>
    </header>
  );
}
