# SEO Routing Runbook

## Current Architecture (March 2026)

### Hosts
- **orangutany.com** — Main app (Next.js on Render). ID tool, learn articles, legal pages.
- **guide.orangutany.com** — Guide content (Next.js static export on Cloudflare Pages). Species, articles, guides, authors.

### Indexing Strategy
Both sites index independently under the Orangutany brand. Cross-discovery via robots.txt (each lists both sitemaps). Organization schema on both points to orangutany.com as the parent brand.

### Canonical Policy
- Each host canonicalizes to itself (required — canonical targets must return 200).
- guide.orangutany.com uses relative canonicals resolved via `metadataBase: guide.orangutany.com`.
- orangutany.com uses relative canonicals resolved via `metadataBase: orangutany.com`.

### Sitemap Coordination
- `orangutany.com/sitemap.xml` — main app URLs only (host-matching requirement).
- `guide.orangutany.com/sitemap.xml` — all guide URLs (species, articles, guides, authors, utility pages).
- Both robots.txt files list both sitemaps for cross-discovery.
- Guide repo generates `public/sitemap-guide-manifest.json` at build time for coordination.

## Future: Full Single-Host Migration

To fully consolidate under orangutany.com (one domain in Google Search Console):

### Option A: Cloudflare Reverse Proxy (Recommended)
Add Cloudflare Workers route on orangutany.com that proxies guide paths:

```js
// Cloudflare Worker on orangutany.com
addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  const guidePaths = ['/mushrooms', '/articles', '/guides', '/authors',
    '/identify-a-mushroom', '/attribution', '/newsletter', '/resources'];

  if (guidePaths.some(p => url.pathname.startsWith(p))) {
    const guideUrl = new URL(event.request.url);
    guideUrl.hostname = 'guide.orangutany.com';
    return event.respondWith(fetch(guideUrl, event.request));
  }
});
```

Then update guide repo `metadataBase` to `orangutany.com` and all canonicals resolve correctly.

### Option B: 301 Redirects from Guide to Main
Add Cloudflare Page Rules or _redirects on guide.orangutany.com:

```
# guide.orangutany.com/_redirects
/mushrooms/*  https://orangutany.com/mushrooms/:splat  301
/articles/*   https://orangutany.com/articles/:splat   301
/guides/*     https://orangutany.com/guides/:splat     301
```

Requires Option A to be in place first (main must serve the content).

### Verification Commands
```bash
# Check canonical tag
curl -s https://guide.orangutany.com/mushrooms/amanita-phalloides | grep -o '<link rel="canonical"[^>]*>'

# Check og:url
curl -s https://guide.orangutany.com/mushrooms/amanita-phalloides | grep -o '<meta property="og:url"[^>]*>'

# Check robots.txt
curl -s https://orangutany.com/robots.txt
curl -s https://guide.orangutany.com/robots.txt

# Check sitemap
curl -s https://guide.orangutany.com/sitemap.xml | head -20

# Validate canonical targets return 200
curl -sI "$(curl -s https://guide.orangutany.com/mushrooms/amanita-phalloides | grep -o 'href="[^"]*"' | head -1 | tr -d '"' | sed 's/href=//')" | head -3
```
