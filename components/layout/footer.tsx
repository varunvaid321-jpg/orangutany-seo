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
        <p className="text-[10px] text-muted-foreground/60 text-center max-w-md">
          Do not rely solely on online identification. Always verify with local experts.
        </p>
      </div>
    </footer>
  );
}
