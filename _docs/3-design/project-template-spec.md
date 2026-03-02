# Project Page — Template Spec
**Date:** 2026-02-26
**Status:** Ready for Figma
**Applies to:** All project types — Live, Work In Progress, Case Study

---

## Core Rule

> Show the thinking through images, not words.
> An employer has 60 seconds on a project page. Make every element count.

**What they need to know:**
1. What was the problem?
2. What was your role?
3. What did you do? (high level — show it)
4. What does it look like?
5. What was the outcome?

---

## The 7 Components

Use in order. Skip any that don't apply to a specific project. Do not add new component types — work within this set.

---

### 1. Project Header

**Purpose:** Orient the visitor immediately. Role, context, link.

**Elements:**
- Category tag — one of: `Live Product` / `Work In Progress` / `Case Study`
- Project title — large, mono font, consistent with site heading style
- One-sentence descriptor — what it is, plain English
- Meta row: `Role` · `Year` · optional live/prototype link button

**Copy rules:**
- Descriptor: max 15 words
- No background paragraphs here — that's what the Overview Strip is for

**Figma notes:**
- Tag uses accent colour (green dark / blue light) consistent with home page tags
- Live link button: outlined style, matches Mo Speech CTA in hero
- No wireframe geometry in this block — keep it focused

```
[Case Study]
Project Title
One sentence describing what this is.

Role: Design Engineer    Year: 2024    [ View live → ]
```

---

### 2. Hero Image

**Purpose:** Best single visual of the project. First impression of the work.

**Elements:**
- Full-width image or device mockup
- No caption needed

**Image guidance:**
- Use the most polished, finished-looking screen
- For case studies: final UI, not wireframes
- For WIP: current best state, not placeholder screens
- Aspect ratio: 16:9 or 3:2 — keep consistent across all projects
- Dark overlay if image is very light (maintain page palette)

**Figma notes:**
- Full bleed to page edges or contained with consistent horizontal padding — pick one and stick to it
- Rounded corners consistent with project cards on the Projects page

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│                   HERO IMAGE                             │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

### 3. Overview Strip

**Purpose:** Fast, scannable summary. Problem → Approach → Outcome in three equal columns.

**Elements:**
- 3 columns, each with:
  - Column label (e.g. `Problem`, `Approach`, `Outcome`)
  - 2–3 sentences of copy

**Column labels by project type:**

| Project Type | Col 1 | Col 2 | Col 3 |
|---|---|---|---|
| Live Product | Problem | Built | Outcome |
| Work In Progress | Problem | Built so far | What's next |
| Case Study | Problem | Process | Outcome |

**Copy rules:**
- Max 3 sentences per column
- No bullet points — prose only
- Write for a startup founder, not a UX examiner

**Figma notes:**
- Thin top border above the strip (same rule style as process strip on home page)
- Mono font for column labels, regular weight for body
- Full width, consistent horizontal padding with rest of page

```
┌─────────────────┬─────────────────┬─────────────────┐
│  Problem        │  Approach        │  Outcome        │
│  ───────        │  ────────        │  ───────        │
│  2-3 sentences  │  2-3 sentences   │  2-3 sentences  │
└─────────────────┴─────────────────┴─────────────────┘
```

---

### 4. Image Grid — 2 Column

**Purpose:** Show the work. Multiple screens, sketches, or process shots side by side.

**Elements:**
- 2 equal columns
- Each cell: image + optional small caption (max 8 words)

**Rules:**
- Max 2 instances of this block per project page
- If you need more images, you have too many — edit down
- Captions optional — only add if the image genuinely needs labelling
- Both images in a row should be the same height

**Image guidance:**
- Row 1: key screens or research outputs
- Row 2 (if used): supporting detail, alternate state, or process artefact
- Do not use this block for two very similar screens — pick the best one

```
┌───────────────────────┐  ┌───────────────────────┐
│                       │  │                       │
│   Image               │  │   Image               │
│                       │  │                       │
│   Caption (optional)  │  │   Caption (optional)  │
└───────────────────────┘  └───────────────────────┘
```

---

### 5. Text + Image — 50/50

**Purpose:** Explain one specific decision, insight or feature. Show the thinking without narrating the entire process.

**Elements:**
- Left: text block — heading (optional) + 3–4 sentences
- Right: supporting image

**Rules:**
- Only use this block once or twice per page
- If used twice, flip the image/text sides (image left, text right on second instance)
- Heading optional — only add if the point needs labelling
- The image should illustrate the specific point being made in the text

**Copy rules:**
- Write about one specific decision, not a general summary
- Good: *"The symbol grid needed to work one-handed, so we anchored the primary action buttons to the bottom of the screen."*
- Bad: *"We went through several rounds of user testing to refine the interface."*

```
┌───────────────────────┐  ┌───────────────────────┐
│                       │  │                       │
│  [Optional heading]   │  │   Supporting image    │
│                       │  │                       │
│  3–4 sentences on a   │  │                       │
│  specific decision    │  │                       │
│  or insight.          │  │                       │
│                       │  │                       │
└───────────────────────┘  └───────────────────────┘

Second instance (flipped):

┌───────────────────────┐  ┌───────────────────────┐
│                       │  │                       │
│   Supporting image    │  │  [Optional heading]   │
│                       │  │                       │
│                       │  │  3–4 sentences on a   │
│                       │  │  different specific   │
│                       │  │  decision.            │
└───────────────────────┘  └───────────────────────┘
```

---

### 6. Stack Bar

**Purpose:** Show tools used. Fast, scannable, no explanation needed.

**Elements:**
- Horizontal row of tool tags with `→` prefix
- Accent colour arrows, muted text for tool names

**Rules:**
- List only tools actually used on this project — not your full toolkit
- Max 8 items
- No descriptions — tool names only

```
→ Figma   → React   → Next.js   → Convex   → Vercel   → Blender
```

**Figma notes:**
- Same `→` arrow style as process strip on home page
- Thin top border above, consistent with Overview Strip rule style
- Mono font

---

### 7. Project Navigation

**Purpose:** Keep the visitor moving through the portfolio. Do not let them hit a dead end.

**Elements:**
- Previous project link (left)
- Next project link (right)
- Each shows: project name + category tag

**Rules:**
- Always present on every project page
- Link to the adjacent project in the same order as the Projects page grid
- Do not show prev/next on first/last projects — just show the one that exists

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  ← The Headlines               Crypto Charity →           │
│     Work in Progress               Case Study              │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

## Component Usage by Project Type

| Component | Mo Speech (Live) | The Headlines (WIP) | Case Studies |
|---|---|---|---|
| 1. Header | ✓ Live link | ✓ WIP tag, no link | ✓ Prototype link if exists |
| 2. Hero image | App screenshot, device mockup | Current state UI | Best finished screen |
| 3. Overview strip | Problem / Built / Live stats | Problem / Built so far / What's next | Problem / Process / Outcome |
| 4. Image grid | Key screens (×1 instance) | Design + code shots (×1) | Research → final (×1–2) |
| 5. Text + image | A specific feature decision | Why you're building it | One key design decision |
| 6. Stack bar | ✓ | ✓ | ✓ |
| 7. Project nav | ✓ | ✓ | ✓ |

---

## What to Cut from Old Case Studies

**Remove entirely:**
- Lengthy background/motivation paragraphs
- Every round of wireframe iterations — pick one that shows the thinking
- Competitive analysis detail — one comparison grid image max
- Typography and colour rationale copy — show the design, don't explain it
- Persona sections with long descriptions — one persona card image if essential
- "Next steps" lists longer than 3 bullets

**Replace long text with:**
- A single well-chosen image
- A 2–3 sentence summary in the Overview Strip

**The test:** If you're writing a sentence to explain what an image shows — cut the sentence and let the image work harder.

---

## Design System Notes (carry over from home page)

- **Font:** Mono for headings, labels, tags and the stack bar
- **Accent colour:** Green (dark mode) / Blue (light mode) — `→` arrows and category tags
- **Borders:** Thin single-line rules for section dividers and the Overview Strip
- **Buttons:** Outlined style for all CTAs
- **Geometry:** One small wireframe cube/element near the page header only — do not repeat on every section
- **Spacing:** Match horizontal padding exactly to the home and projects pages
- **Cards/images:** Consistent border radius throughout

---

## Figma Checklist — Per Project

- [ ] Header: title, tag, descriptor, meta row, CTA if applicable
- [ ] Hero image: correct aspect ratio, rounded corners
- [ ] Overview strip: 3 columns, correct labels for project type, max 3 sentences each
- [ ] Image grid: max 2 instances, equal height rows, captions only where needed
- [ ] Text + image: max 2 instances, sides flipped on second use
- [ ] Stack bar: tools used on this project only, max 8
- [ ] Project nav: prev/next with project name and tag
- [ ] Check dark and light mode
- [ ] Check mobile — stacks to single column
