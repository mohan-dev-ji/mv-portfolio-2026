# Portfolio 2026 redesign: design spec

**Date:** 2026-11-08
**Status:** Approved in brainstorming, awaiting owner review of this file
**Supersedes:** `4-builds/page-structure.md` (Fira Code, dark mode) and
`3-design/project-template-spec.md` (seven fixed components) for the new design.
Both stay as the record of the old site.

## What changes

- **Light only.** No dark mode.
- **One case study:** Mo Speech, told in depth for two readers: AAC specialists
  (SLTs, teachers) and employers hiring designers.
- **Simple and easy to read.** Short paragraphs, statement headings, and the
  project's own videos and images doing most of the talking. Modelled on
  amylalai.com and rachelchen.tech.
- **A shaders page** showing the Mo Speech animated-theme shaders. Built last.
- **No code in this round.** Copy, a writing-voice skill, and Figma design.

## Pages

| Page | Figma (portfolio_2026) | What it does |
|---|---|---|
| Home | `Home` 160:4268 → new `Home v2` | Empty hero with "Hi, I'm Mo", then three lines that type out one at a time and loop. A card per case study below. |
| Case study | `Mo Speech - Case Study` 169:4 → new `Mo Speech case study v2` | The full story, with a sticky side nav on desktop. |
| About | `About` 231:620 → new `About v2` | Photo and Mo's story, restyled. |
| Shaders | none yet | Later round. |

The owner's original frames stay untouched. v2 frames sit beside them.

**Navbar.** `MO>DEV/UI` on the left; Work, Shaders, About on the right. **Work**
scrolls the home page to the first case-study card. Clicking a card opens that
case study's own page.

**Hero lines** (typed one at a time, then looped):
1. I design intuitive interfaces
2. I turn designs into prototypes and live products
3. I iterate until we solve the problem

## Type and colour

- **Titles:** DM Serif Display (one weight, regular, which is already bold in feel).
- **Everything else:** DM Sans 400 and 500.
- Figma text styles: Display, Headline, Subhead, Label (caps, tracked), Body,
  Caption, Note.
- **Colour:** off-white page, near-black ink, one muted grey for secondary
  text, hairline borders. No accent beyond the project's own media.
- **Production notes** are bright orange, on a layer named `Production note`
  in every media block, so they can all be hidden at once. They are notes to
  Mo, not site copy.

## Case study structure: two acts

Every section has the same anatomy:

1. A small caps **stage label** (Problem, Research, Define, Ideate, Prototype,
   Test, Iterate, Design, Build), so employers see the process.
2. A **statement headline** that makes the section's point on its own.
3. Where it lands harder, a **one-liner** standing alone.
4. At most **two short paragraphs** (target 25–50 words each).
5. **Media**, then a short **caption**, then the orange **production note**
   saying what to record or collect.

**Production note format:**
- `VIDEO · <length> · <device> screen recording: <what happens, step by step>`
- `GALLERY · <n> images, click through: <what each shows>`
- `STILL · <what it is>`
- `DIAGRAM · <which one>`

### Opening

- **Hero:** "Mo Speech", and one line: *An AAC app I built for my son, and for
  every family who needs a voice.* Media: 10-second silent loop of the app on
  the Space theme.
- **Meta row:** Role (solo: research, design, build) · Timeline (MVP 2025, full
  build April to November 2026) · Tools (Figma, Claude Code, Next.js, Convex).
- **Overview:** what AAC is and what modelling is, about 60 words.

### Act 1 · The MVP

| Stage | Headline | Media |
|---|---|---|
| Problem | "We don't have an iPad, so we can't use it." | Three problem cards: platform lock-in, navigation, modelling is hard |
| Research | Some children took to it like water | Still from a training session |
| Define | Finding the symbol was the hardest part, so I built that first | Gallery: early sketches (search, listening, category) |
| Ideate | Storyboard 1: a word, in the moment | Six drawn panels |
| Prototype | Say it, see it | Three phone videos: voice search, typing, full-screen playback |
| Test | 166 sign-ups in three months | Stat row, gallery of posts |
| Iterate | "It isn't AAC." They were right. | One-liner, no media |

### Act 2 · The full build

| Stage | Headline | Media |
|---|---|---|
| Research | Every app hides its navigation among the symbols | Gallery: TD Snap, Awaaz, Proloquo2Go; three insights |
| Research | Sentences are built from chunks, like Lego | GLP reading; the SLT demo |
| Define | A dashboard, like the apps they already use | Gallery: wireframe → Figma → Claude Design → final |
| Ideate | Storyboard 2: modelling across two devices, then building and playing a sentence | Six drawn panels |
| Design | Made to be looked at for a long time | Gallery of the six default themes; animated-theme videos |
| Prototype | Features, in four groups (below) | One short video each |
| Build | One designer, a team of agents | The docs-folder, Superpowers and figma-to-theme flow diagrams |

**Feature groups:**
- *Building a sentence:* the talker, the talker dropdown (core words and
  phrases), sentences (fluent and block), tone.
- *Teaching:* instructor and student views, modelling mode, connected words.
- *Making it yours:* the symbol editor, languages.
- *Running it:* the admin dashboard.

### Closing

- **What's next:** marketing (look and feel, promo videos, marketing site) and
  launch.

### Side nav (desktop)

Sticky on the left. Overview, then **The MVP** and **The full build** as group
headings with their sections beneath, then What's next. The section in view is
highlighted as you scroll. Desktop only; mobile gets no side nav.

## Storyboards

Simple line-art panels drawn in Figma in the portfolio's style: simple figures,
hands and devices, with real app screens placed on the devices. No people in
the app screens and no SymbolStix art in the drawings (Mo Speech M6
look-and-feel decisions). Six panels each, with a one-line caption per panel.
Mo can redraw any panel later.

## Facts: the feature specs win

Source of truth for every product claim:
`mo-speech-home/docs/4-builds/features/`. Corrections to the rough draft:

- **Tones** are angry, neutral and excited, and they are a Max feature.
- **Modelling mode** dims the page, lights up the next thing to tap and shows a
  pointer. Every device on the student's profile follows the same session live.
- **Languages today:** English, Spanish, and Hindi (preview).
- **Animated themes:** two on Pro, all four on Max.

**To confirm with Mo:** the "58,000 symbols" figure, and the MVP timeline dates.

## Copy

- Lives in `3-design/mo-speech-case-study.md`, the single source of text. Figma
  copies it now; the code reads it later.
- Mo's voice: first person, plain words, real numbers, his son as the reason,
  British spelling. Grammar fixed and explanations sharpened, but it must read
  as human-written, not polished to perfection.

## Writing-voice skill: `mo-voice`

Global skill at `~/.claude/skills/mo-voice/`, for case studies and portfolio
text, LinkedIn and Facebook posts, and emails and messages.

- **Voice profile** drawn from the case study draft, the About page and the
  Mo Speech feature owner brief: what to keep, what to fix.
- **No-AI-tells list:** no em dashes, no "not just X but Y", no tidy triads, no
  "delve" or "game-changer", no rhetorical-question openers.
- **Before-and-after pairs** from the case study edit, to calibrate how hard to
  edit.
- **One format file per use:** case study, social posts, email.
- **Final pass:** the Tier 1 rules from the existing `copy-check` skill, which
  stays as the proofread-only tool.
- **Test:** three tasks (a case-study paragraph, a launch post, an email to an
  SLT). Mo judges each for "sounds like me".

## Order of work

1. Case study copy, storyboard scripts and production notes.
2. The `mo-voice` skill, built from the rules used in step 1.
3. Figma: text styles and components, then Home v2, case study v2, About v2.
4. Shaders page, later.
