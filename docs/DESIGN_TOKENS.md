# 🎨 Design Tokens

## Purpose

This document defines the reusable visual tokens for the Gamers N Geeks redesign.

The source values are based on the existing TCGPlayer storefront, but the token names follow this project’s own naming conventions.

These values should remain synchronized with:

```text
app/src/app/globals.css
```

`DESIGN_TOKENS.md` and `globals.css` are the source of truth for application colors. Other design documents should reference these semantic tokens rather than defining competing color values.

---

# Theme Behavior

- The root `<html>` element carries `data-theme="light"` or `data-theme="dark"`.
- The first visit follows the operating-system preference.
- A manual choice is stored in `localStorage` under `gng-theme` and takes precedence on later visits.
- A small pre-hydration script applies the resolved theme before the application shell is painted.

---

# Brand Colors

| Token | Dark | Light | Usage |
|---|---:|---:|---|
| `--color-brand` | `#72bf44` | `#72bf44` | Primary actions and highlights |
| `--color-brand-hover` | `#7ecb50` | `#67b539` | Hover state for primary actions |
| `--color-brand-pressed` | `#67b539` | `#5a9f31` | Active and pressed states |
| `--color-brand-focus` | `#8ad55e` | `#3f7f1f` | Focus indicators |
| `--color-on-brand` | `#111111` | `#111111` | Text and icons on brand-colored controls |

---

# Background and Surface Colors

| Token | Dark | Light | Usage |
|---|---:|---:|---|
| `--color-background` | `#111111` | `#f7f8f5` | Main page background |
| `--color-background-alt` | `#20201f` | `#eef1eb` | Alternate page sections |
| `--color-surface` | `#2e302d` | `#ffffff` | Cards, panels, inputs |
| `--color-surface-highlight` | `#4a4f47` | `#e2e8dc` | Hovered or elevated surfaces |
| `--color-border` | `#4c5247` | `#7a8674` | Borders, dividers, separators |

---

# Text Colors

| Token | Dark | Light | Usage |
|---|---:|---:|---|
| `--color-text-primary` | `#ffffff` | `#171a16` | Main headings and body text |
| `--color-text-secondary` | `#d1dbcc` | `#4f594b` | Supporting text and metadata |
| `--color-text-link` | `#72bf44` | `#3f7f1f` | Standard links |
| `--color-text-link-highlight` | `#8ad55e` | `#2f6815` | Hovered and highlighted links |

---

# Semantic Colors

| Token | Dark | Light | Usage |
|---|---:|---:|---|
| `--color-success` | `#37b463` | `#237a45` | Success messages and availability |
| `--color-warning` | `#ffdd57` | `#7a5b00` | Warnings and attention states |
| `--color-error` | `#ff6162` | `#b4232c` | Errors and destructive actions |
| `--color-info` | `#3298dc` | `#176b9c` | Informational messages |

---

# Border Radius

| Token | Value | Usage |
|---|---:|---|
| `--radius-sm` | `0.375rem` | Small badges and controls |
| `--radius-md` | `0.5rem` | Inputs and compact buttons |
| `--radius-lg` | `0.75rem` | Standard cards and buttons |
| `--radius-xl` | `1rem` | Cards and featured panels |

---

# Shadows

| Token | Value | Usage |
|---|---|---|
| `--shadow-sm` | `0 1px 2px rgba(0, 0, 0, 0.15)` | Inputs and small controls |
| `--shadow-md` | `0 4px 10px rgba(0, 0, 0, 0.2)` | Cards and dropdowns |
| `--shadow-lg` | `0 10px 25px rgba(0, 0, 0, 0.35)` | Modals and elevated panels |

---

# Typography

## Application Font

The application uses Inter for headings and body text:

```text
Inter
```

Fallback stack:

```text
Segoe UI
Arial
sans-serif
```

# Spacing Scale

Use a consistent 4px base scale, with an 8px rhythm for most layout spacing. Values such as 4px and 12px are appropriate for compact controls and fine-grained alignment.

| Token Concept | Value |
|---|---:|
| `space-1` | `0.25rem` |
| `space-2` | `0.5rem` |
| `space-3` | `0.75rem` |
| `space-4` | `1rem` |
| `space-6` | `1.5rem` |
| `space-8` | `2rem` |
| `space-12` | `3rem` |
| `space-16` | `4rem` |
| `space-24` | `6rem` |

Avoid arbitrary spacing unless a layout clearly requires it.

---

# Motion

Recommended transition durations:

| Interaction | Duration |
|---|---:|
| Hover | `150ms` |
| Standard transition | `200ms` |
| Dropdown or drawer | `250ms` |
| Large section reveal | `300ms` |

Recommended easing:

```css
ease-out
```

Avoid excessive animation, flashing, or motion that distracts from shopping and event discovery.

---

# Accessibility

Color usage must meet WCAG AA contrast requirements.

Requirements:

- Do not rely on color alone to communicate status.
- Maintain visible keyboard focus states.
- Use the brand focus color for focus indicators.
- Keep body text readable against dark surfaces.
- Test all interactive states, not only default states.

---

# Token Usage Rules

- Do not hard-code brand colors inside components.
- Use the shared CSS variables from `globals.css`.
- Register the verified dark values as safe defaults in Tailwind CSS 4's `@theme` block so semantic utilities are generated.
- Define theme-specific values under `:root`, `[data-theme="light"]`, and `[data-theme="dark"]`; components must continue using the same semantic utilities in either theme.
- New tokens should be added here before being used broadly.
- Keep token names semantic rather than tied to a specific component.
- Update this document whenever a token changes.

---

# Source Reference

The verified color values were extracted from the live TCGPlayer storefront’s CSS variables.

This project preserves those values while using simplified, project-specific token names.
