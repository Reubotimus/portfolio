---
slug: learn-vim
name: Learn Vim
type: Interactive Learning Platform
date: "03/2026"
order: 3
card:
  title: Learn Vim
  date: "03/2026"
  slug: learn-vim
  image:
    url: /learn-vim.png
    width: 1876
    height: 834
  tags:
    - Next.js
    - TypeScript
    - Clerk
    - Drizzle ORM
    - CodeMirror Vim
headLineImage:
  url: /learn-vim.png
  width: 1876
  height: 834
members:
  - Reuben Cook [Software Developer]
links:
  - name: WEBSITE
    link: https://vim-practice.vercel.app/
    private: false
---

# Project Description

Built an interactive web app that helps developers learn Vim shortcuts through practical coding exercises. Each lesson presents a broken code snippet, a target output, and technique guidance so users can practice real editing workflows instead of memorizing commands in isolation.

# Architecture

The platform is built with Next.js (App Router) and TypeScript, with Clerk handling authentication and protected lesson routes. Lessons are defined in a JSON manifest and loaded by slug so new exercises can be added quickly without changing the core lesson engine.

The editor experience uses CodeMirror with the `@replit/codemirror-vim` extension to simulate Vim behavior in the browser. User keystrokes are tracked per attempt, and completion is detected by matching the edited buffer against the lesson target output.

Progress is stored in Postgres via Neon and Drizzle ORM. Lesson metadata is seeded into the database, and each user has one score per lesson. Upserts only keep the lowest keystroke count so the stored result always represents the best performance.

![Architecture diagram](/learn-vim-architecture.png)

# Challenges

One challenge was making keyboard-driven editing feel consistent and responsive in a browser environment while still using a React component model. Another challenge was defining lesson content that is simple enough for beginners but still resembles real-world code tasks.

Persisting scores also required careful database constraints to avoid duplicate rows and to ensure only improved results are saved. This was solved with a composite primary key on `(lessonId, userId)` and an upsert strategy that keeps the minimum score.

# Future Improvements

The next step is to expand lesson coverage into motions, text objects, macros, and search/substitute workflows while introducing clearer difficulty tiers. I also plan to add richer feedback, including command-level hints and retry analysis so learners understand why a solution was inefficient.

Beyond lesson depth, I want to improve the product experience with progress dashboards, streak tracking, and personalized lesson recommendations based on weak areas. A lesson authoring UI is also planned to make adding and testing new exercises faster.
