"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function Header() {
  const [userName, setUserName] = useState<string | null>(null);

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
    <header className="border-b border-border/50 px-4 sm:px-6 py-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <Link href="/" className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
          Orangutany <span className="text-primary">Guide</span>
        </Link>
        <nav className="flex items-center gap-2 sm:gap-4 whitespace-nowrap">
          <Link href="/mushrooms" className="text-sm text-muted-foreground hover:text-foreground transition">
            Species
          </Link>
          <Link href="/articles/most-dangerous-mushrooms" className="hidden sm:block text-sm text-muted-foreground hover:text-foreground transition">
            Most Dangerous
          </Link>
          <Link href="/articles/best-edible-mushrooms" className="hidden sm:block text-sm text-muted-foreground hover:text-foreground transition">
            Best Edible
          </Link>
          <Link href="/guides" className="hidden lg:block text-sm text-muted-foreground hover:text-foreground transition">
            Guides
          </Link>
          <Link href="/articles" className="text-sm text-muted-foreground hover:text-foreground transition">
            Articles
          </Link>
          <a
            href="https://orangutany.com"
            className="rounded-full bg-primary px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm font-medium text-background transition hover:bg-primary/90 whitespace-nowrap"
          >
            <span className="sm:hidden">Identify</span>
            <span className="hidden sm:inline">Identify a Mushroom</span>
          </a>
        </nav>
      </div>
      {userName && (
        <div className="mx-auto mt-2 flex max-w-5xl items-center justify-between">
          <span className="text-sm font-medium text-foreground">
            Hi, {userName}
          </span>
          <div className="flex items-center gap-3">
            <a
              href="https://orangutany.com"
              className="text-xs font-medium text-primary hover:text-primary/80 transition"
            >
              Identify a Mushroom
            </a>
            <button
              onClick={() => {
                sessionStorage.removeItem("orangutany_user");
                setUserName(null);
              }}
              className="text-xs text-muted-foreground hover:text-foreground transition"
            >
              Log out
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
