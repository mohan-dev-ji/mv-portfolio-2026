# Style Guide

## Typography

Font: **Fira Code** (monospace) — applied via `font-mono`. All text inherits this.

Always use responsive pairs — mobile size first, desktop with `md:` prefix:

| Mobile class | Desktop class | px | Use |
|---|---|---|---|
| `text-display-sm` | `md:text-display` | 48 → 96 | Hero h1 |
| `text-h2-sm` | `md:text-h2` | 24 → 32 | Section headings |
| `text-subheading-sm` | `md:text-subheading` | 16 → 24 | Sub-labels |
| `text-body-sm` | `md:text-body` | 14 → 16 | Body copy |

---

## Colour Tokens

Defined in `globals.css` as CSS vars, aliased in `tailwind.config.ts`. Light/dark values switch automatically.

| Token | Light | Dark | Use |
|---|---|---|---|
| `bg` | zinc-200 | zinc-900 | Page background |
| `primary` | zinc-800 | zinc-300 | Headings, main text |
| `secondary` | zinc-500 | zinc-400 | Body copy, descriptions |
| `muted` | zinc-400 | zinc-500 | Meta text (role, date) |
| `accent` | lime-600 | lime-500 | Symbols, arrows, highlights |
| `border` | zinc-300 | zinc-700 | All borders |
| `card` | zinc-100 | zinc-800 | Card backgrounds |
| `image-bg` | zinc-300 | zinc-600 | Image container backgrounds |
| `btn-text` | gray-900 | gray-900 | Button label (always dark) |

---

## Spacing Tokens

| Token | Value | Use |
|---|---|---|
| `mt-section` / `mb-section` | 64px | Between every section |
| `gap-section` | 64px | Column gap in two-column layouts |
| `gap-item-gap` / `mb-item-gap` | 32px | Between content items within a section |
| `px-gutter-sm md:px-gutter` | 24px → 64px | Horizontal padding — sections, navbar, footer |
| `max-w-container` | 1282px | Page content max-width, always `mx-auto` |

---

## Section Pattern

Every section — no exceptions:

```tsx
<section className="mt-section max-w-container mx-auto px-gutter-sm md:px-gutter">
  {/* content directly here — no wrapper div */}
</section>
```

- Last section on the page also gets `mb-section`
- `max-w-container`, `mx-auto`, and `px-gutter-*` always on `<section>`, never on an inner div
- No redundant wrapper divs

---

## Product Images

All product screenshots use a 16:9 container with a background fill and 10% vertical breathing room:

```tsx
<div className="relative aspect-video bg-image-bg">
  <div className="absolute inset-x-0 inset-y-[10%]">
    <Image fill className="object-contain drop-shadow-product" />
  </div>
</div>
```

- Outer: `relative aspect-video bg-image-bg` — sets the 16:9 frame with themed background
- Inner: `absolute inset-x-0 inset-y-[10%]` — 10% top/bottom padding, image fills ~80% of height
- Image: `object-contain drop-shadow-product` — preserves aspect ratio, adds strong shadow
- `drop-shadow-product` = `0 8px 24px rgba(0,0,0,0.8)` — defined in tailwind config

Geo/decorative images (not product screenshots) use `w-full h-auto` with `opacity-60` directly — no container treatment.

---

## Two-Column Layout

```tsx
<div className="flex flex-col md:flex-row gap-section items-center">
  <div className="flex-1"> {/* text */} </div>
  <div className="flex-1 relative aspect-video bg-image-bg w-full"> {/* image */} </div>
</div>
```

Both columns are `flex-1`. Stacks vertically on mobile, side-by-side from `md`. Image column always gets the product image treatment above.

---

## Borders & Radius

- `rounded-none` everywhere — zero border radius globally
- `rounded-full` only for circular/pill elements
- Card/box borders: `border border-border`
- Heading underlines: `border-b-2 border-primary`
- Fine dividers inside cards: `border-b border-border`

---

## Section Labels & Symbols

Labels use an accent symbol prefix followed by primary-coloured text:

```tsx
<p className="text-sm">
  <span className="text-accent">\</span>
  <span className="text-primary"> Section Title</span>
</p>
```

Symbol conventions: `>` breadcrumb / intro — `~/` description — `\` section label — `#` category — `%` stack/technical

Arrow list items always use the Lucide icon — never a text character:
```tsx
<ArrowRight size={16} className="text-accent flex-shrink-0" />
```

---

## Buttons

Single button component: `<ButtonLink href="" label="" />`

- Filled: `bg-accent text-btn-text px-5 py-2 text-sm` with `ArrowRight` icon
- Hover: `bg-accent-hover` (lime-400)
- Zero border radius — consistent with everything else

---

## Background Atmosphere

Two fixed blurred lines in `layout.tsx` — not semantic, purely decorative. Do not replicate in page components.
