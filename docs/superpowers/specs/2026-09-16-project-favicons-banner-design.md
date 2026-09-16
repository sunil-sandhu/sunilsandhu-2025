# Project favicons & homepage ventures banner

**Date:** 2026-09-16  
**Status:** Approved (pending final spec review)

## Goal

Make ventures more recognizable on [sunilsandhu.com/projects](https://sunilsandhu.com/projects) and the homepage by showing each project's favicon, add a horizontal “currently working on” logo banner on the homepage, and expand the ventures list with Venture Magazine and Cubed.

## Decisions

| Topic | Choice |
|---|---|
| Favicon source | Google `s2/favicons` API: `https://www.google.com/s2/favicons?domain={host}&sz=64` |
| Favicon hosting | Runtime remote URLs (no local favicon assets) |
| Banner contents | **All** ventures |
| Homepage feed | Clip to **20** most recent items |
| Banner placement | Below the homepage feed |
| Banner copy | “Things I'm currently working on” |
| New ventures | Venture Magazine & Cubed — Founder · 2024 |
| Image rendering | Plain `<img>` (no `next/image` remote config required) |

## Data changes

### `app/lib/profile.ts`

1. Add a helper:

```ts
export function ventureFaviconUrl(url: string, size = 64): string {
  const host = new URL(url).hostname;
  return `https://www.google.com/s2/favicons?domain=${host}&sz=${size}`;
}
```

2. Append two ventures (after Messy Founder, preserving existing priority order for the rest):

| Name | Year | Role | URL | Tagline (short) | Description |
|---|---|---|---|---|---|
| Venture Magazine | 2024 | Founder | https://venturemagazine.net | Publication for founders and indie hackers | Publication for entrepreneurs, founders, indie hackers, and builders — ideas, stories, and lessons on startups, growth, and building from nothing. |
| Cubed | 2024 | Founder | https://cubed.run | Insights on the technologies shaping the future | Publication covering AI, crypto, Web3, software, and emerging tech — practical insights without the hype. |

3. Keep `Venture` type unchanged (no new fields); favicons are derived from `url`.

### `content/brand-kit.md`

Add Venture Magazine and Cubed to the ventures table with the same year/role/URL/one-liners.

Also update homepage bio inline links to mention Venture Magazine and Cubed only if it still reads naturally; **not required** for this feature — prefer not bloating the paragraph. The banner + `/projects` page are the discovery surfaces.

## UI

### Shared component: `components/VentureLogoBanner.tsx`

- Props: optional `title` (default: `Things I'm currently working on`), optional `ventures` (default: full `ventures` list).
- Renders:
  - Heading
  - Horizontal row of linked favicons (each `a[href=venture.url]` with `img` alt = venture name)
  - Small text link to `/projects` (“See all projects” or similar)
- Layout: flex row, wrap on small screens, evenly spaced / centered gap, icon size ~28–32px in the banner
- Hover: slight opacity or scale; no cards

### `/projects` (`app/projects/page.tsx`)

- In each venture card heading row: favicon (~20–24px) immediately left of the company name, vertically centered with the name (not with the role/year meta).
- Use `ventureFaviconUrl(v.url)`.
- Do **not** duplicate the full homepage-style banner here (homepage is the banner home; projects page uses per-card icons). Cards alone are enough on this page.

### Homepage (`app/page.tsx`)

1. Sort feed by date descending (existing behavior).
2. Slice to first **20** items.
3. After `</main>` feed: render `<VentureLogoBanner />`.

## Out of scope

- Locally caching or committing favicon files
- Replacing inline bio company links with icons
- Changing JSON-LD beyond picking up new ventures via existing `ventures.map`
- Adding a “load more” for the clipped feed (can link to `/writing` / `/media` later if needed)

## Error / fallback behavior

- Prefer Google’s built-in generic globe when a favicon is missing.
- Optional: `onError` hide or swap to a simple initial letter only if Google fails entirely; not required for v1.

## Testing

- Visually check `/` and `/projects` at mobile and desktop widths.
- Confirm all 8 favicons load and link to the correct external URLs.
- Confirm homepage shows exactly 20 feed items.
- Confirm Venture Magazine and Cubed appear on `/projects` with correct metadata.
