/* eslint-disable @next/next/no-img-element */

export function Footer() {
  return (
    <footer className="border-t border-border/50 px-6 py-10">
      <div className="mx-auto max-w-5xl flex flex-col items-center gap-4">
        <img
          src="/images/logo.png"
          alt="Orangutany"
          className="h-8 w-auto opacity-70"
        />
        <p className="text-xs text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} Orangutany &middot; Markham, Ontario, Canada
        </p>
        <div className="flex gap-3 text-[10px] text-muted-foreground/60">
          <a href="/privacy" className="hover:text-primary transition">Privacy Policy</a>
          <span>&middot;</span>
          <a href="https://orangutany.com/terms" className="hover:text-primary transition">Terms</a>
        </div>
        <p className="text-[10px] text-muted-foreground/60 text-center max-w-md">
          Do not rely solely on online identification. Always verify with local experts.
        </p>
      </div>
    </footer>
  );
}
