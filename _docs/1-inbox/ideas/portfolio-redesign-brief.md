# Portfolio Redesign Brief
**Date:** 2026-02-21
**Status:** Initial thoughts — needs refinement
**Next step:** Research phase → Figma → Refactor

---

## Context

This is a 2024 portfolio site originally built by copy-pasting from ChatGPT/Perplexity into an IDE. The code is functional but the design and positioning are outdated.

Two parallel tracks are running:
- **3D Portfolio** — Three.js / React Three Fiber / GSAP — creative, interaction-design experience. In progress, learning-first pace. No SEO by nature.
- **This site (2D rebuild)** — Fast, minimal, SEO-optimised. Priority for job applications NOW.

**Trigger for this redesign:** Saw a startup job ad looking for someone who can build real products end-to-end — research, design, code, deploy. That's exactly what I do. The current site doesn't communicate that.

---

## Redesign Goals

### Visual Direction
- Remove the personal photo — replace with graphical/geometric elements
- Minimal, clean aesthetic — light and dark mode retained
- Geometric animations exported from Blender — scroll-driven to give a 3D feel on a 2D/SEO-friendly page
- Animated lines and glowing elements for a premium, designer-coded feel

### Content & Structure
- **Hero** — New positioning (see below). No photo. Graphic/motion element.
- **Work** — Split clearly between:
  - **Mo Speech** — live MVP product, ongoing development
  - **Student case studies** — UX/UI work, still strong for demonstrating process
- **About** — Strip back or remove the previous-career/interests section. Keep it professional and forward-facing.
- **Services / What I offer** — New section (see positioning below)
- **Contact** — Keep

### Positioning Reframe
Current: Designer
New: **Design & Dev** — concept to creation

#### Skills to communicate:
User research, competitor analysis, UX/UI design, Figma, 3D (Blender), React, Next.js, Python, Convex, Stripe, motion design

#### The honest differentiator:
AI-accelerated production. Mo operates as an **AI Architect** — someone who can take a product from research through design through code through deployment, using AI as a force multiplier. Not a solo developer grinding, not a designer who can't ship — something new in between.

#### Job market positioning tension:
- "AI Architect" is accurate but may not land with hiring managers scanning CVs
- Most job ads still use titles like: Product Designer, UX Engineer, Design Technologist, Creative Technologist, Full-Stack Designer
- **Recommended angle:** Lead with outcomes and shipped products, not the AI tooling. The fact you use Claude Code is a capability, not a label.

---

## Open Questions

1. What title/label goes on the site? (Designer & Developer / Creative Technologist / Design Engineer)
2. How to handle the student projects vs live product split — one Work section or two?
3. Blender animation approach — pre-rendered video loops vs. Lottie vs. embedded .glb on scroll? (SEO implications of each)
4. Do we want a dedicated Services section or fold that into the About/Hero?
5. Research first — need 5-10 live, high-converting portfolio sites to reference before Figma

---

## Immediate Next Steps

| Step | Action | Output |
|------|--------|--------|
| 1 | Research live portfolio sites (not Dribbble mockups) | `_docs/2-research/portfolio-references.md` |
| 2 | Define positioning statement and page hierarchy | `_docs/2-research/positioning.md` |
| 3 | Figma explorations — hero, nav, project cards | Figma file |
| 4 | Decide on animation approach (Blender export strategy) | Decision logged in `_docs/3-design/` |
| 5 | Audit existing components — what to keep, gut, rewrite | `_docs/4-builds/component-audit.md` |
| 6 | Write PRD for build | `_docs/5-prd/portfolio-prd.md` |

---

## Current Site Inventory (for audit reference)

**Pages:** Home (single page), individual case study pages (AAC, Actionaid, Coherent, Elevate4)
**Sections:** Navbar, Hero, Work, Values(?), About, ContactForm, Footer
**Stack:** Next.js, React, TypeScript, Tailwind, shadcn/ui
**Missing:** SEO metadata, structured data, sitemap, OG images
