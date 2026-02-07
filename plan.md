# Plan: Migrate portfolio projects from TS/JSON to Markdown + markdown-it

## Goals
- Store each project page as a standalone markdown file.
- Use `markdown-it` to render project body content.
- Statically generate project pages at build time.
- Keep existing card/hero metadata and layout parity where practical.

## Proposed content format
- New folder: `content/projects/` with one `.md` file per project (slug as filename).
- Frontmatter for metadata (card info, hero image, links, tags, etc.).
- Markdown body for the narrative content. Images in the body can be plain markdown `![]()` or HTML `<img>`.
- Optional: if multi-column rows must be preserved, add a simple block syntax using markdown-it containers (e.g. `::: row` / `::: col`) or allow embedded HTML grid wrappers.

Example structure (illustrative):

---
slug: vic-camera-locations
name: vic-camera-locations
type: Python API
date: 2025-02
card:
  title: vic-camera-locations
  date: 2025-02
  slug: vic-camera-locations
  image:
    url: /vic-camera-site.png
    width: 1400
    height: 800
  tags: [Javascript, Python, Git, HTML, CSS, Azure functions, Fastapi]
hero:
  url: /vic-camera-site.png
  width: 1400
  height: 800
members:
  - Reuben Cook [Software Developer]
  - Harris Perdis [Software Developer]
links:
  - name: GITHUB
    link: https://github.com/...
    private: false
---

# Project Description
...

## Architecture
...

![Alt text](/vic-camera-site-diagram.svg)

## Challenges
...

## Future Improvements
...

## Files, modules, and responsibilities
- `content/projects/*.md`: source of truth for project data.
- `src/lib/projects.ts`: read files, parse frontmatter, render markdown via markdown-it.
- `src/app/page.tsx`: load project list for cards from `projects.ts`.
- `src/app/portfolio/[slug]/page.tsx`: server-render project page using parsed data and HTML from markdown-it.

## Implementation steps
1. **Choose content schema**
   - Confirm frontmatter fields needed for cards/hero/table.
   - Decide whether the body is single-column markdown or if a row/column syntax is required.

2. **Add dependencies**
   - `markdown-it` for rendering.
   - `gray-matter` (or equivalent) for frontmatter parsing.
   - Optional plugins: `markdown-it-container` and `markdown-it-attrs` for rows/columns and image sizing.

3. **Create markdown files**
   - Add `content/projects/vic-camera-locations.md`.
   - Add `content/projects/toasty-toes.md`.
   - Move narrative text from `src/app/portfolio/data.tsx` into markdown bodies.
   - Move metadata into frontmatter.

4. **Build project data loader** (`src/lib/projects.ts`)
   - Read all markdown files with `fs` at build time.
   - Parse frontmatter into a typed `Project` model.
   - Render markdown body to HTML with markdown-it.
   - Provide helpers:
     - `getAllProjects()` for list/cards.
     - `getProjectBySlug(slug)` for detail page.
     - `getProjectSlugs()` for static params.

5. **Update project list page** (`src/app/page.tsx`)
   - Replace import from `./portfolio/data` with `getAllProjects()`.
   - Keep card rendering unchanged (map to `Project.card`).

6. **Update project detail page** (`src/app/portfolio/[slug]/page.tsx`)
   - Convert to a server component (remove `"use client"`), or split into a server page + client subcomponent for scrolling behavior.
   - Use `generateStaticParams()` from project slugs.
   - Render markdown HTML with `dangerouslySetInnerHTML` in a styled container.
   - Keep hero image and metadata table from frontmatter.

7. **Static generation settings**
   - Ensure pages are static (`export const dynamic = "force-static"` or `revalidate = false`).
   - Verify build reads markdown at compile time (no runtime fetches).

8. **Remove legacy JSON/TS data**
   - Delete `src/app/portfolio/data.tsx` once parity is confirmed.
   - Update any type definitions if needed (new `Project` type to match frontmatter).

9. **Validation**
   - Build the app to ensure static generation succeeds.
   - Verify all routes render and images/links appear correctly.
   - Confirm the “next project” behavior still works (if retained).

## Open decisions to confirm
- Do we need multi-column rows from the old layout? If yes, define a minimal markdown-it extension or allow embedded HTML.
- Are inline images acceptable as plain `<img>`? If not, define a custom image renderer or a frontmatter image registry with sizes.

