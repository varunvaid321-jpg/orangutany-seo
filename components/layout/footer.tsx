export function Footer() {
  return (
    <footer className="border-t border-border/50 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 text-sm sm:grid-cols-3">
          <div>
            <p className="font-semibold text-foreground">Orangutany</p>
            <p className="mt-1 text-muted-foreground">
              Premium mushroom identification built in Canada. Machine learning trained on millions of observations.
            </p>
          </div>
          <div>
            <p className="font-semibold text-foreground">Explore</p>
            <ul className="mt-1 space-y-1 text-muted-foreground">
              <li><a href="/mushrooms" className="hover:text-primary transition">All Species</a></li>
              <li><a href="/articles/most-dangerous-mushrooms" className="hover:text-primary transition">Most Dangerous</a></li>
              <li><a href="/articles/best-edible-mushrooms" className="hover:text-primary transition">Best Edible</a></li>
              <li><a href="/guides" className="hover:text-primary transition">Foraging Guides</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-foreground">Company</p>
            <ul className="mt-1 space-y-1 text-muted-foreground">
              <li><a href="https://orangutany.com" className="hover:text-primary transition">Orangutany Mushroom ID</a></li>
              <li><a href="/about" className="hover:text-primary transition">About Orangutany Guide</a></li>
              <li><a href="/attribution" className="hover:text-primary transition">Image Attribution</a></li>
              <li><a href="/newsletter" className="hover:text-primary transition">Newsletter</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border/30 pt-6 text-center text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Orangutany &middot; Markham, Ontario, Canada &middot; Do not rely solely on online identification — always verify with local experts.
          </p>
        </div>
      </div>
    </footer>
  );
}
