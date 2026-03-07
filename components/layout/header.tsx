"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const [userName, setUserName] = useState<string | null>(null);
  const pathname = usePathname();

  function navClass(href: string) {
    const active = pathname === href || pathname.startsWith(href + "/");
    return `text-xs sm:text-sm transition whitespace-nowrap shrink-0 ${active ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`;
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const param = params.get("user");
    if (param) {
      sessionStorage.setItem("orangutany_user", param);
      setUserName(param);
      const url = new URL(window.location.href);
      url.searchParams.delete("user");
      window.history.replaceState({}, "", url.toString());
    } else {
      const stored = sessionStorage.getItem("orangutany_user");
      if (stored) setUserName(stored);
    }
  }, []);

  return (
    <header className="border-b border-border/50 px-4 sm:px-6">
      {/* Row 1: logo + Hi/Logout */}
      <div className="mx-auto flex max-w-5xl items-center justify-between py-3">
        <Link href="/" className="font-[family-name:var(--font-heading)] text-lg sm:text-2xl font-bold text-foreground whitespace-nowrap">
          Orangutany <span className="text-primary">Guide</span>
        </Link>
        {userName ? (
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <span className="text-xs sm:text-sm font-semibold text-primary whitespace-nowrap">
              Hi, {userName}
            </span>
            <button
              onClick={() => {
                sessionStorage.removeItem("orangutany_user");
                setUserName(null);
              }}
              className="text-xs text-muted-foreground hover:text-foreground transition whitespace-nowrap"
            >
              Log out
            </button>
          </div>
        ) : (
          <a
            href="https://orangutany.com"
            className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition whitespace-nowrap shrink-0"
          >
            Sign in
          </a>
        )}
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
        </nav>
      </div>
    </header>
  );
}
