# 🏗 Architecture

---

# Purpose

This document defines the technical architecture and development standards for the Gamers N Geeks redesign project.

Whenever architectural decisions are made, this document should be updated.

---

# Project Philosophy

The repository is organized into two distinct areas:

- Project documentation
- Application source code

Keeping these separate allows the project to serve both as a professional client proposal and as a production-ready codebase.

---

# Repository Structure

```text
GamersNGeeks/
│
├── app/
│   ├── public/
│   └── src/
│
├── assets/
│
├── docs/
│
├── deliverables/
│
├── references/
│
└── scripts/
```

---

# Application Structure

```text
app/src
│
├── app/
│
├── components/
│   ├── common/
│   ├── layout/
│   ├── sections/
│   └── ui/
│
├── hooks/
│
├── lib/
│
├── styles/
│
├── types/
│
└── utils/
```

---

# Component Organization

## components/layout

Shared page structure.

Examples:

- Header
- Footer
- Navigation
- Container

---

## components/sections

Page-specific sections.

Examples:

- Hero
- Featured Events
- Featured Collections
- Newsletter

---

## components/ui

Reusable interface components.

Examples:

- Button
- Card
- Badge
- Modal
- Input
- Dropdown

---

## components/common

Generic reusable utilities.

Examples:

- Loading Spinner
- Divider
- Empty State
- Error State

---

# Naming Conventions

React Components

PascalCase

```text
Header.tsx
Hero.tsx
EventCard.tsx
```

---

Functions

camelCase

```ts
getUpcomingEvents()
```

---

Folders

lowercase

```text
components/
styles/
hooks/
```

---

# Styling Standards

- Tailwind CSS 4
- Utility-first styling
- Shared design tokens defined in `DESIGN_TOKENS.md` and `app/src/app/globals.css`
- Tailwind-compatible design tokens declared once in `globals.css` through Tailwind CSS 4's `@theme` mechanism, providing both runtime variables and semantic utilities
- A 4px base spacing scale with an 8px rhythm for most layout spacing
- No inline styles unless justified

---

# Icons

Use Lucide React.

Avoid mixing icon libraries.

---

# Images

Original design files and source assets belong in:

```text
assets/
```

Runtime assets belong in:

```text
app/public/
```

Assets required by the website must be copied or exported into `app/public/`. The application must not reference root `assets/` as a runtime source.

---

# State Management

Current strategy:

- React State
- React Context (when needed)

Avoid introducing external state libraries until a clear need exists.

Theme state uses browser-native APIs rather than a third-party theme library:

- `data-theme` on the root `<html>` element selects semantic token values.
- A pre-hydration script resolves a stored manual preference or the operating-system preference before paint.
- Manual preferences persist in `localStorage` under `gng-theme`.
- Theme interaction remains isolated in a small Client Component; the root layout and shared header remain Server Components.

---

# Data Strategy

During development:

Mock data

Future:

Shopify APIs

TCGPlayer integrations

---

# Performance

Goals:

- Lazy loading
- Optimized images
- Minimal JavaScript
- Lighthouse score above 95

---

# Accessibility

Target:

WCAG AA

Requirements:

- Keyboard navigation
- Focus states
- Semantic HTML
- Proper heading hierarchy
- Color contrast compliance

---

# Documentation Standards

Documentation should be written in Markdown whenever possible.

Small amounts of HTML are acceptable only when Markdown cannot achieve the desired layout.

Acceptable examples include:

- Centering the project logo
- Image sizing
- Collapsible sections

Documentation should never depend on HTML for structure or readability.

---

# Git Workflow

Each completed milestone should:

1. Be committed with a descriptive message.
2. Be pushed to GitHub.
3. Receive a milestone tag when appropriate.

Examples:

```text
sprint-0-foundation
sprint-1-ui-framework
sprint-2-homepage
```

---

# Development Workflow

Every feature follows the same process:

```text
Research
    ↓
Documentation
    ↓
Concept
    ↓
Wireframe
    ↓
Implementation
    ↓
Review
    ↓
Commit
```

---

# Guiding Principle

Every architectural decision should make the project:

- Easier to understand
- Easier to maintain
- Easier to extend
- Easier to hand off to another developer

Clarity is preferred over cleverness.
