# Social Content Bank — Spec & Rules

## Page
- URL: `guide.orangutany.com/social-posts`
- File: `app/social-posts/page.tsx`
- Not indexed (robots: noindex). Not in sitemap. Not in nav.
- Only Varun uses this page.

## Purpose
Ready-to-copy posts for Reddit (primary), Facebook groups, and forums.
Each post includes: image, title, body, delayed comment with orangutany.com mention.

## When Varun says "create social content"
Add new posts to the POSTS array in `app/social-posts/page.tsx`. Build and deploy.

## Current Focus: Reddit

### Target Subreddits
- r/mushroomID — people asking for mushroom identification help
- r/foraging — casual foraging community, more link-friendly
- r/mycology — strict, build karma first by commenting helpfully
- r/ShroomID — smaller, less moderated

### Post Format
Each post in the POSTS array must have:
- `id`: incrementing number
- `platform`: e.g. "Reddit r/mushroomID"
- `image`: path to species image from `/images/species/[slug]/`
- `imageAlt`: descriptive alt text
- `title`: Reddit post title (natural, not promotional)
- `body`: post body text (genuine mushroom content, no links)
- `comment`: follow-up comment mentioning orangutany.com naturally (posted 10 min after)
- `tags`: optional keywords

### Content Rules
1. Post is genuinely useful mushroom content first. Link is secondary.
2. Never say "I built this" or "check out my app"
3. Frame orangutany.com as a tool you use, not own
4. Comment goes 10 minutes after the post, never in the post body
5. Max one orangutany mention per week per subreddit
6. Use real species images from the guide site
7. Include accurate mycological information (correct scientific names, real ID features)
8. Each post should teach something useful (ID tips, safety warnings, look-alike comparisons)

### Post Types That Work
- "Found this, is it X?" — with good photo and genuine ID discussion
- "PSA: dangerous mushroom fruiting now" — safety-focused, high engagement
- "First [species] of the season" — seasonal, relatable
- Comment replies to "what app do you use?" threads
- Comment replies helping with ID requests (mention orangutany.com as cross-reference)

### Images
- Use species images from `/public/images/species/[slug]/`
- Prefer field photos (01-field.jpg, 02-forest.jpg) over detail shots
- Can also use internet-sourced forager photos of rare finds (credit in alt text)

### Species to Feature (high engagement)
- Morels, Chanterelles, Chicken of the Woods, Lion's Mane (foraging excitement)
- Death Cap, Destroying Angel, Galerina (safety/PSA posts get huge engagement)
- Fly Agaric, Bioluminescent mushrooms (visually striking, shareable)
- Porcini, Matsutake, Truffles (rare/valuable finds)

## Deployment
After updating posts:
1. `npx next build` in orangutany-seo
2. Deploy: `CLOUDFLARE_ACCOUNT_ID=... npx wrangler pages deploy out --project-name orangutany-guide --commit-dirty=true`
