# Project Favicons & Homepage Banner Implementation Plan

> **For agentic workers:** Implement task-by-task. Steps use checkbox syntax.

**Goal:** Show Google-derived venture favicons on `/projects`, clip the homepage feed to 20 items, add a “Things I'm currently working on” logo banner, and add Venture Magazine + Cubed.

**Architecture:** Derive favicon URLs from each venture's `url` via a helper on `profile.ts`. Shared `VentureLogoBanner` component for the homepage strip. Per-card icons on the projects page. Plain `<img>` tags (no `next/image` remote config).

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind.

## Global Constraints

- Favicon API: `https://www.google.com/s2/favicons?domain={host}&sz={size}`
- Banner includes **all** ventures
- Homepage feed capped at **20**
- Banner title: `Things I'm currently working on`
- Venture Magazine & Cubed: Founder · 2024
- No local favicon asset downloads
- Do not commit unless user asks

---

### Task 1: Profile data + favicon helper

**Files:**
- Modify: `app/lib/profile.ts`
- Modify: `content/brand-kit.md`

- [ ] Add `ventureFaviconUrl(url, size = 64)`
- [ ] Append Venture Magazine and Cubed after Messy Founder
- [ ] Update brand-kit ventures table

### Task 2: VentureLogoBanner component

**Files:**
- Create: `components/VentureLogoBanner.tsx`

- [ ] Heading + flex-wrap favicon row + link to `/projects`

### Task 3: Wire pages

**Files:**
- Modify: `app/projects/page.tsx`
- Modify: `app/page.tsx`

- [ ] Favicon left of each project name
- [ ] Slice feed to 20; render banner below feed

### Task 4: Smoke check

- [ ] Confirm types/build sanity for touched files
