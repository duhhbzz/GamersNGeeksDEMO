# 🎨 Gamers N Geeks Design System

---

# Overview

This document defines the visual language for the Gamers N Geeks redesign.

Every component, page, and interaction should reference this document.

Goals:

- Consistency
- Simplicity
- Readability
- Accessibility
- Modern aesthetics

---

# Design Personality

The website should feel like:

🎲 Modern tabletop store

🎮 Premium gaming lounge

🧙 Organized hobby shop

☕ Friendly local community

Think:

- Apple simplicity
- Steam dark mode
- Discord community
- Pokémon polish
- Best Buy product clarity

---

# Brand Keywords

- Modern
- Friendly
- Community
- Professional
- Premium
- Fun
- Organized
- Approachable

---

# Color Palette

The authoritative color values and semantic names are defined in `DESIGN_TOKENS.md` and synchronized with `app/src/app/globals.css`.

Components must use those shared tokens rather than hard-coded color values.

The interface supports coordinated light and dark themes. First-time visitors follow their operating-system preference, while a manual selection persists across visits.

Use the original black-text logo in light mode and the white-text DARKMODE logo in dark mode. Do not recolor either logo with CSS filters.

---

# Gradients

Gradients must be composed from the authoritative color tokens. Add new gradient-specific tokens to `DESIGN_TOKENS.md` before using them broadly.

---

# Typography

## Headings

Font:

**Inter**

Fallback:

```
Segoe UI
Arial
sans-serif
```

---

## Body

Inter

---

## Scale

Hero

64px

---

Section Title

40px

---

Card Title

24px

---

Body

18px

---

Small Text

14px

---

# Border Radius

Use the radius tokens defined in `DESIGN_TOKENS.md`.

Cards use `--radius-xl` (`16px`). Buttons and inputs use the token appropriate to their size and context. Pill-shaped badges may use a fully rounded value when their form requires it.

---

# Shadows

Cards

Soft shadow only

No harsh black shadows.

Hover should lift the card slightly.

---

# Spacing System

Use a 4px base spacing scale.

Use an 8px rhythm for most layout spacing. Values such as 4px and 12px remain available for compact controls and fine-grained alignment.

Common spacing

```
8
16
24
32
48
64
96
```

Never use random spacing values.

---

# Icons

Use Lucide Icons.

Simple.

Outlined.

Consistent stroke width.

---

# Buttons

Primary

Green

Filled

Rounded

Large

---

Secondary

Dark

Border

Green hover

---

Ghost

Transparent

Text only

---

# Cards

Cards should feel collectible.

Every card has:

- Image
- Title
- Metadata
- CTA

Hover:

- Lift
- Glow
- Slight scale

---

# Product Cards

Large image

Price

Availability

Optional Quick Add

Optional Wishlist

---

# Event Cards

Event image

Date

Time

Game

Seats

Register button

---

# Navigation

Desktop

Top navigation

Sticky

Mega menu

Search always visible

---

Mobile

Hamburger drawer

Large touch targets

Do not use bottom navigation during Sprint 1.

---

# Animations

Fast.

Subtle.

Purposeful.

Avoid:

- Spinning
- Flashing
- Excessive parallax

Use:

- Fade
- Slide
- Lift
- Scale

Duration

150–250ms

---

# Accessibility

AA minimum.

Keyboard accessible.

Visible focus states.

Large tap targets.

Readable contrast.

Theme controls must expose an accessible label that describes the available action. Interactive states must meet WCAG AA in both themes.

---

# Photography

Real store photos whenever possible.

Real community.

Real events.

Avoid stock photography.

---

# Illustrations

Gaming inspired.

Fantasy.

Sci-fi.

Minimal.

Not childish.

---

# Layout

Maximum width

1440px

Content width

1280px

Generous whitespace.

---

# Component Philosophy

Every component should answer:

Can a new customer understand this instantly?

If not,

simplify it.

---

# Mobile First

Every page should be designed for mobile before desktop.

Desktop expands the experience.

Mobile defines it.

---

# Performance Goals

Lazy loading

Optimized images

Minimal JavaScript

Fast interactions

Lighthouse target:

95+

---

# Design Rule

Whenever in doubt,

remove clutter.

The design should highlight the community,

not compete with it.
