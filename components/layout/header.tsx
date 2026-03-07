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
    <header className="border-b border-border/50 px-4 sm:px-6">
      {/* Row 1: logo + Hi/Logout */}
      <div className="mx-auto flex max-w-5xl items-center justify-between py-3">
        <Link href="/" className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground">
          Orangutany <span className="text-primary">Guide</span>
        </Link>
        {userName ? (
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-primary">
              Hi, {userName}
            </span>
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
        ) : (
          <a
            href="https://orangutany.com"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Sign in
          </a>
        )}
      </div>
      {/* Row 2: Identify + nav links */}
      <div className="mx-auto max-w-5xl border-t border-border/30">
        <nav className="flex items-center gap-5 py-2.5">
          <a
            href="https://orangutany.com"
            className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-background transition hover:bg-primary/90 whitespace-nowrap"
          >
            <span className="sm:hidden">Identify</span>
            <span className="hidden sm:inline">Identify a Mushroom</span>
          </a>
          <Link href="/mushrooms" className="text-sm text-muted-foreground hover:text-foreground transition">
            Species
          </Link>
          <Link href="/articles" className="text-sm text-muted-foreground hover:text-foreground transition">
            Articles
          </Link>
          <Link href="/guides" className="hidden sm:block text-sm text-muted-foreground hover:text-foreground transition">
            Guides
          </Link>
          <Link href="/articles/most-dangerous-mushrooms" className="hidden md:block text-sm text-muted-foreground hover:text-foreground transition">
            Most Dangerous
          </Link>
          <Link href="/articles/best-edible-mushrooms" className="hidden md:block text-sm text-muted-foreground hover:text-foreground transition">
            Best Edible
          </Link>
        </nav>
      </div>
    </header>
  );
}
