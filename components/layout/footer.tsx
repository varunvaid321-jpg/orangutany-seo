export function Footer() {
  return (
    <footer className="border-t border-border/50 px-6 py-8 text-center text-sm text-muted-foreground">
      <p>
        Images sourced from Wikimedia Commons under free licenses.{" "}
        <a href="/attribution" className="text-primary hover:underline">
          Full attribution
        </a>
        {" "}&middot;{" "}
        <a href="/newsletter" className="text-primary hover:underline">
          Join our quarterly newsletter
        </a>
      </p>
      <p className="mt-2">
        &copy; {new Date().getFullYear()}{" "}
        <a href="https://orangutany.com" className="text-primary hover:underline">
          Orangutany
        </a>
        . Do not rely solely on online identification — always verify with local experts.
      </p>
    </footer>
  );
}
