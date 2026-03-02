# Home Page — Content Plan & Layout Diagrams
**Date:** 2026-02-25
**Status:** Ready for Figma
**Target audience:** Startup founders / hiring managers looking for designer-developer hybrid

---

## Page Flow Overview

```
┌─────────────────────────────────────┐
│  1. HERO                            │
│     Good Taste / Real Code          │
│     > Design Engineer  \\ London    │
│     Wireframe cubes + Mo Speech     │
├─────────────────────────────────────┤
│  2. PROCESS STRIP                   │
│     Research → Design → Build →     │
│     Deploy                          │
├─────────────────────────────────────┤
│  3. WORKFLOW SHOTS                  │
│     Figma + IDE + Blender           │
│     Editorial offset grid           │
├─────────────────────────────────────┤
│  4. TOOLKIT                         │
│     Full typographic skill block    │
├─────────────────────────────────────┤
│  5. POSITIONING PARAGRAPH           │
│     One paragraph + CTA             │
├─────────────────────────────────────┤
│  6. CONTACT                         │
│     Form / email link               │
└─────────────────────────────────────┘
```

---

## Section 1 — Hero ✓

**Status:** Design approved. Proceed to build.

```
┌────────────────────────────────────────────────────────────┐
│  Mohan Veraitch                    Projects  Contact  ☀    │
│                                                            │
│                                            ┌──────┐        │
│  Design, Build                             │ cube │        │
│  & Deploy                                  └──────┘        │
│                                                            │
│  > Design Engineer                                         │
│  ~/ London                                                 │
│                                                            │
│          ┌──────────┐        -Featured Project             │
│  ╔cubes╗ │          │                                      │
│  ║     ║ │ Mo Speech│        Mo Speech                     │
│  ╚     ╝ │  phone   │        Live product                  │
│          │  mockup  │        AAC communication app         │
│          └──────────┘        [ Mo Speech → ]               │
└────────────────────────────────────────────────────────────┘
```

---

## Section 2 — Process Strip

**Concept:** Full-width horizontal flow. Shows ownership of the entire product cycle. Speaks directly to startup founders who need one person to do it all.

**Copy:** Minimal — category + 2-3 tool tags per stage.

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│   Research      →    Design     →    Build     →  Deploy   │
│   ─────────          ─────────       ─────────    ───────  │
│   Discovery          Pixel           React &      Live     │
│   first              perfect         Next.js      products │
│                                                            │
│   User research      Figma           TypeScript   Vercel   │
│   Competitor map     Blender         Convex       Git      │
│   Journey mapping    Motion          Python       SEO      │
│                                                            │
│          ◇                  ◇                ◇             │
│       [wireframe]        [wireframe]      [wireframe]      │
│        between            between          between         │
│        columns            columns          columns         │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**Notes for Figma:**
- Use the mono font for tool tags, slightly larger weight for category titles
- Wireframe cube/geometry assets sit between each column as subtle dividers
- Thin horizontal rule above and below the section to contain it
- Consider a slow left-to-right entrance animation on build

---

## Section 3 — Workflow Shots

**Concept:** Three real screenshots from the actual workflow — Figma, VS Code / Claude Code terminal, Blender. Arranged in an asymmetric editorial layout. Wireframe geometry fills compositional gaps. Signals authenticity to technical founders.

**Screenshots to source:**
- [ ] Figma — a component, design system or user flow that looks considered
- [ ] VS Code or Claude Code terminal — real code, not staged
- [ ] Blender — a clean viewport, ideally the wireframe geometry you're using on the site

### Layout Option A — Offset stack (recommended)

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│   From research to production.                             │
│                                                            │
│   ┌──────────────────────┐                                 │
│   │                      │       ┌──────────────────┐      │
│   │   FIGMA screenshot   │       │                  │      │
│   │   (largest, left)    │  ◇    │  VS Code / CLI   │      │
│   │                      │       │  screenshot      │      │
│   └──────────────────────┘       │  (top right)     │      │
│                                  └──────────────────┘      │
│             ┌────────────────────────┐                     │
│             │                        │                     │
│             │  Blender viewport      │   ◇                 │
│             │  (bottom centre)       │  [wireframe]        │
│             │                        │                     │
│             └────────────────────────┘                     │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Layout Option B — Two col with large left

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  ┌────────────────────┐   ┌────────────────────────────┐  │
│  │                    │   │  VS Code / CLI             │  │
│  │  FIGMA             │   └────────────────────────────┘  │
│  │  (tall, left col)  │                                    │
│  │                    │   ┌────────────────────────────┐  │
│  │                    │   │  Blender viewport          │  │
│  └────────────────────┘   └────────────────────────────┘  │
│                                                            │
│           ◇ wireframe cube floats top-right corner         │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**Notes for Figma:**
- Images should have a subtle dark overlay to stay within the dark palette
- Rounded corners consistent with the Mo Speech card in the hero
- No captions — the images speak. Keep text to a single intro line above.
- Wireframe geometry at low opacity (15–25%) behind the image cluster

---

## Section 4 — Toolkit

**Concept:** Typographically led. Large, dense, visually impressive. The mono font makes a long list of skills look like code — lean into it. Two layout options to test.

### Layout Option A — Category columns (cleaner, easier to scan)

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  The Stack                                                 │
│                                                            │
│  RESEARCH          DESIGN            BUILD                 │
│  ──────────        ──────────        ──────────            │
│  User research     Figma             React                 │
│  Competitor anal.  Blender           Next.js               │
│  Journey mapping   Motion design     TypeScript            │
│  Wireframing       Design systems    Convex                │
│  User testing      Typography        Python                │
│                    Prototyping       Stripe                 │
│                                      Vercel                │
│                                      Git                   │
│                                                            │
│                              ◇ [wireframe cube, right]     │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Layout Option B — Dense typographic block (more distinctive)

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  The Stack                                                 │
│                                                            │
│  User research [RESEARCH] · Figma [DESIGN] · React         │
│  [BUILD] · Blender [DESIGN] · Next.js [BUILD] ·            │
│  Competitor analysis [RESEARCH] · TypeScript [BUILD] ·     │
│  Motion design [DESIGN] · Convex [BUILD] · Journey         │
│  mapping [RESEARCH] · Python [BUILD] · Design systems      │
│  [DESIGN] · Stripe [BUILD] · User testing [RESEARCH] ·     │
│  Vercel [BUILD] · Prototyping [DESIGN] · Git [BUILD]       │
│                                                            │
│  ◇ [wireframe]          ◇ [wireframe]                      │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**Notes for Figma:**
- Option B is harder to replicate and more visually distinctive — worth testing
- Category tags `[DESIGN]` `[BUILD]` `[RESEARCH]` should be small, muted, accent colour
- Consider a large faded section number or label behind the text block

---

## Section 5 — Positioning Paragraph

**Concept:** One paragraph. Quiet, confident, human. No heading needed — just the text and a CTA. This is where a startup founder decides whether to get in touch.

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│   ◇ [small wireframe, top left corner]                     │
│                                                            │
│       I work across the full product cycle — from user     │
│       research and Figma to shipped React applications.    │
│       I built Mo Speech from concept to live product.      │
│       I'm looking to bring that same end-to-end            │
│       ownership to a team that moves fast and cares        │
│       about craft.                                         │
│                                                            │
│       [ Get in touch → ]                                   │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**Notes for Figma:**
- Large, well-spaced paragraph — let it breathe
- Serif or regular weight for contrast against the mono headline font (optional — test both)
- CTA button: outlined style consistent with the Mo Speech button in the hero
- This section should feel intentionally quiet after the density of the toolkit

---

## Section 6 — Contact

**Keep it minimal.** The CTA in section 5 handles the primary conversion. This is just a form for those who scroll all the way down.

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  Get in touch                                              │
│                                                            │
│  ┌──────────────────────┐  ┌──────────────────────┐       │
│  │  Name                │  │  Email               │       │
│  └──────────────────────┘  └──────────────────────┘       │
│                                                            │
│  ┌──────────────────────────────────────────────────┐      │
│  │  Message                                         │      │
│  │                                                  │      │
│  └──────────────────────────────────────────────────┘      │
│                                                            │
│  [ Send → ]                                                │
│                                                            │
│  ─────────────────────────────────────────────────────     │
│  Mohan Veraitch          LinkedIn  GitHub  Email           │
└────────────────────────────────────────────────────────────┘
```

---

## Wireframe Geometry — Placement Map

Use sparingly. 5–6 objects across the full page, not one per section.

```
PAGE
│
│  [HERO]          ← cube top-right, cluster bottom-left ✓
│
│  [PROCESS]       ← small cubes between columns (×3)
│
│  [SHOTS]         ← low opacity cube behind image cluster
│
│  [TOOLKIT]       ← one cube, right side, mid-section
│
│  [PARA]          ← one small cube, top-left corner
│
│  [CONTACT]       ← none. Let it breathe.
│
```

**Opacity guide:**
- Foreground / intentional: 60–80%
- Mid-ground / structural: 30–50%
- Background / texture: 10–20%

---

## Figma Checklist

- [ ] Replicate approved hero at full fidelity
- [ ] Test Process Strip — horizontal layout, font sizing, geometry dividers
- [ ] Source and crop 3 workflow screenshots (Figma, IDE, Blender)
- [ ] Test Toolkit — Option A vs Option B
- [ ] Write and place positioning paragraph — test mono vs regular weight
- [ ] Place contact form — match existing form component
- [ ] Check light mode across all sections
- [ ] Check mobile layout — process strip becomes vertical stack
