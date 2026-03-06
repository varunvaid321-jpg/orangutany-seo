# Design Tokens (Shared between orangutany.com and guide.orangutany.com)

IMPORTANT: These tokens are shared across TWO repos. When you change any value here, you MUST update BOTH:
1. `/Users/varunvaid/orangutany-seo/app/globals.css`
2. `/Users/varunvaid/amushroom/frontend/app/globals.css`
3. This file in BOTH repos
4. `/Users/varunvaid/amushroom/DESIGN-TOKENS.md` (copy of this file)

## Colors

| Token | Value | Usage |
|-------|-------|-------|
| background | `#0e1a0e` | Page background (dark forest green) |
| foreground | `#f0e4cc` | Primary text (warm cream) |
| primary | `#c8956c` | Links, buttons, accents (copper) |
| muted | `#1a2a1a` | Muted backgrounds, filter pills |
| muted-foreground | `#c4b49a` | Secondary text, descriptions, metadata |
| border | `rgba(100, 140, 100, 0.15)` | Card borders, dividers |
| card | `rgba(18, 32, 18, 0.95)` | Card backgrounds |
| card-foreground | `#f0e4cc` | Text inside cards |

### Main app only (not in guide site)
| Token | Value | Usage |
|-------|-------|-------|
| primary-foreground | `#0e1a0e` | Text on primary buttons |
| secondary | `#3a5a3a` | Secondary green |
| secondary-foreground | `#f0e4cc` | Text on secondary |
| accent | `#ecd4a7` | Highlight accent |
| accent-foreground | `#0e1a0e` | Text on accent |
| destructive | `#dc2626` | Error/danger red |
| input | `rgba(100, 140, 100, 0.2)` | Input borders |

## Fonts

| Token | Font | Usage |
|-------|------|-------|
| sans (body) | Manrope | All body text |
| heading | Sora | Headings, logo |

## Change Log

| Date | Token | Old | New | Reason |
|------|-------|-----|-----|--------|
| 2026-03-06 | muted-foreground | `#a89880` | `#c4b49a` | Too dim on dark green, poor readability |
