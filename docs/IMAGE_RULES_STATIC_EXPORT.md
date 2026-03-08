# Images in Static Export (guide.orangutany.com)

## The Problem
Next.js `<Image>` component (`next/image`) breaks on static export (`output: "export"`).
Images render as blank boxes with no visible error.

This has broken the site multiple times. Follow the rules below.

## Root Cause
`next/image` requires a server-side image optimization API (`/_next/image`).
When `output: "export"` is set in `next.config.ts`, there is no server.
The optimized image URLs point to a non-existent endpoint, so images fail silently.

## Fix
**NEVER use `import Image from "next/image"` in this repo.**

Use plain `<img>` tags instead:

```tsx
// WRONG — will break on static export
import Image from "next/image";
<Image src="/images/logo.png" alt="Logo" width={200} height={80} />

// CORRECT — works with static export
<img src="/images/logo.png" alt="Logo" className="h-auto w-[200px]" />
```

Add this comment at the top of any file using `<img>`:
```tsx
/* eslint-disable @next/next/no-img-element */
```

## Alternative Fix (NOT recommended for this project)
You can set `images.unoptimized: true` in `next.config.ts`:
```ts
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};
```
This makes `next/image` work but adds unnecessary complexity. Plain `<img>` is simpler.

## Checklist Before Adding Images
1. Use `<img>`, not `<Image>`
2. Set width/height via Tailwind classes, not component props
3. Verify the image exists in `public/` at the path you reference
4. After deploy, spot-check at least one image loads on the live URL

## History
- 2026-03-07: Logo brand reference page deployed with `next/image` — all images broken (blank boxes)
- Fix: replaced all `<Image>` with `<img>`, redeployed via wrangler
