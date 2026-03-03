# Page Structure Spec

## Section Pattern

Every section follows this structure — no exceptions:

```tsx
<section className="mt-section max-w-container mx-auto px-6">
  {/* direct content divs — no wrapper div */}
</section>
```

- `max-w-container` and `px-6` always on `<section>`, never on an inner div
- `mt-section` on every section. Last section on the page also gets `mb-section`
- No redundant wrapper divs inside

---

## Two-Column Layout (image + text)

```tsx
<div className="flex flex-col md:flex-row items-center gap-section">
  <div className="w-48 md:flex-1 opacity-60">  {/* image */}
    <Image className="w-full h-auto" />
  </div>
  <div className="flex-1">  {/* text */}
    ...
  </div>
</div>
```

- Each column is `flex-1` on desktop (~half of `max-w-container`)
- Image hidden on mobile with `hidden md:block`, or shown small with `w-48`
- Image always `w-full h-auto` inside its container

---

## Design Tokens

### Spacing
| Class | Value | Use |
|---|---|---|
| `mt-section` / `mb-section` | 64px | Between sections |
| `gap-section` | 64px | Between columns |
| `mb-item-gap` / `gap-item-gap` | 32px | Between content items |
| `max-w-container` | 1282px | Page content width |
| `px-gutter` | 64px | Horizontal padding on all sections, navbar, footer |

### Typography (always use responsive pairs)
| Mobile | Desktop | Use |
|---|---|---|
| `text-display-sm` | `md:text-display` | Hero h1 |
| `text-h2-sm` | `md:text-h2` | Section headings, symbols |
| `text-subheading-sm` | `md:text-subheading` | Sub-labels |
| `text-body-sm` | `md:text-body` | Body copy |

### Colors
| Token | Use |
|---|---|
| `text-primary` | Headings, main text |
| `text-secondary` | Body copy |
| `text-accent` | Symbols (`#`, `%`, `>`, `~/`, `\`), arrows, highlights |
| `text-muted` | Fine print |
| `border-border` | All borders |

### Section Label Pattern
```tsx
<span className="text-accent">#</span>   {/* or %, >, ~/, \ */}
<span className="text-primary"> Section Title</span>
```

### Arrow List Item Pattern
```tsx
<ArrowRight size={16} className="text-accent flex-shrink-0" />
```
Import from `lucide-react`. Use this everywhere — not `→` text characters.

---

## Border Rules
- `rounded-none` everywhere
- `rounded-full` only for circular elements
- Borders: `border border-border` or `border-b-2 border-primary` for underlines
