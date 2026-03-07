# Orangutany Main Site Tasks (amushroom repo)

Copy this entire file and paste it into a new Claude Code session opened from the amushroom repo.

---

## Task 1: Fix Scroll Position on "Start Identifying Mushroom" Button

**Problem:** On the main page (orangutany.com), clicking "Start Identifying Mushroom" scrolls down to the photo upload section, but:
- The text "One photo is enough — more angles improve confidence." at the top of that section gets cut off / is not visible
- The "Pro — Unlimited Scans" button at the bottom is also not visible

**What to fix:**
- Adjust the scroll target so the section starts with "One photo is enough..." fully visible at the top of the viewport
- The scroll should stop at a position where both the header text AND the "Pro — Unlimited Scans" CTA at the bottom are visible on screen
- Look for: `scrollIntoView`, `scrollTo`, anchor links like `#identify` or `#upload`, or `scroll-margin-top` CSS
- Fix by adding appropriate `scroll-margin-top` or adjusting the JS scroll offset to account for the fixed header height + padding

**Reference screenshots:** The upload section has 5 dashed-border boxes: "Top of cap", "Bottom / gills", "Stalk", "Environment", "Extra detail" — each with gallery and camera icons. Above them is the text "One photo is enough — more angles improve confidence." Below them is "Analyze Photos" button and "Pro — Unlimited Scans" link.

---

## Task 2: Hamburger Menu Reorder

**Problem:** In the mobile hamburger menu, "Learn About Mushrooms" appears below "My Library".

**What to fix:**
- Move "Learn About Mushrooms" ABOVE "My Library" in the hamburger menu
- Search for the menu items in the header/navigation component

---

## Task 3: Rename "My Library" to "My Identifications"

**What to fix:**
- Find all instances of "My Library" in the codebase
- Rename to "My Identifications"
- This includes: hamburger menu, any navigation links, page titles, breadcrumbs

---

## Task 4: Add "Share Feedback" Link

**What to fix:**
- Add a "Share Feedback" link to the bottom of the main orangutany.com page, next to the support email
- Also add it to the bottom of the guides page
- Look at the existing footer component for placement
- The link should be visible and accessible from both pages

---

## Task 5: Make Orangutany a PWA (Progressive Web App)

**Goal:** Allow users to install Orangutany as an app on their phone from the browser.

**What to implement:**
1. Add a `manifest.json` (or `manifest.webmanifest`) with:
   - App name: "Orangutany"
   - Short name: "Orangutany"
   - Theme color matching the dark green brand (#2d3a2d or similar — check existing CSS)
   - Background color matching the app
   - Display: "standalone"
   - Icons in multiple sizes (192x192, 512x512) — use the existing Orangutany logo
   - Start URL: "/"
2. Add a service worker for offline caching (at minimum cache the app shell)
3. Add `<link rel="manifest">` to the HTML head
4. Add meta tags for iOS: `apple-mobile-web-app-capable`, `apple-mobile-web-app-status-bar-style`, `apple-touch-icon`
5. Test that "Add to Home Screen" works in Chrome/Safari

**Note:** This is the initial PWA setup. Full offline functionality for mushroom identification would require additional work (camera API access, offline ML model, etc.) — start with the installable shell.

---

## Notes

- The main site repo is called `amushroom` on GitHub (github.com/varunvaid321-jpg/amushroom)
- The guide site (guide.orangutany.com) is a separate repo called `orangutany-seo` — do NOT modify that repo for these tasks
- Follow existing code conventions in the amushroom repo
- Commit each task separately with clear commit messages
