# Portfolio 2026 redesign: implementation plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Produce the Mo Speech case study copy in Mo's voice, a reusable `mo-voice` writing skill, and the v2 Home, case study and About pages in Figma. No site code.

**Architecture:** One markdown file holds every word of the case study, in a fixed block format that a small Node checker validates. The voice rules are written first, as the skill's reference files, and the copy is edited against them. Figma then copies the approved text into v2 frames built from a handful of local components.

**Tech Stack:** Markdown, Node 20 (checker script, no dependencies), Figma Plugin API through the `use_figma` MCP tool (server `dfd99d23…`), Claude Code skills.

**Spec:** [`../2026-11-08-portfolio-redesign-design.md`](../2026-11-08-portfolio-redesign-design.md)

## Global Constraints

- Repo: `~/Projects/Portfolio/_code/mv-portfolio-2026`, branch `main`. Commit only the files a task names (`.claude/` is untracked and stays that way). Commit trailer: `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.
- Never push.
- Figma file `evRdWCVVcOJhWGFxKPVuTB` (portfolio_2026), page `Classic product design` (159:4267). **Never modify, move or delete the owner's frames.** Home 160:4268, case study 169:4 and About 231:620 stay exactly as they are. Reading them and cloning their image layers is fine.
- Every `use_figma` call loads the `figma:figma-use` skill first. Calls that change visible design also load `figma:figma-generate-design`. Motion work also loads `figma:figma-use-motion`.
- Fonts: titles are **DM Serif Display** (Regular only). Everything else is **DM Sans** (Regular 400, Medium 500). Light only.
- Colours: page `#FAFAF7`, ink `#18181B`, grey `#71717A`, hairline `#E4E4E7`, production note `#EA580C`.
- Voice: first person, plain words, real numbers, Mo's son as the origin (in the overview, never the headline: Mo leads as founder, designer and engineer), British spelling. Grammar fixed, explanations sharpened, never polished to perfection.
- No em dashes (—) or en dashes (–) anywhere in the copy.
- Body paragraphs: 55 words at most. Aim for 25 to 50.
- Every section: stage label, statement headline, at most two body paragraphs, then media with a caption and a production note.
- Production note formats, exactly: `VIDEO · <length> · <device> screen recording: …`, `GALLERY · <n> images, click through: …`, `STILL · …`, `DIAGRAM · …`.
- Product facts come from `~/Projects/mo-speech-home/docs/4-builds/features/`. Tones are angry, neutral and excited (Max). Modelling dims the page, lights the next tap and shows a pointer, and syncs live across every device on the profile. Languages are English, Spanish and Hindi (preview). Animated themes: two on Pro, all four on Max.
- Unconfirmed facts are marked `[CHECK: …]` in the copy and not stated as true. After checkpoint A only the MVP dates remain. `[CHECK:]` text never goes into Figma.
- **Tokens everywhere (Mo, checkpoint A).** In every v2 frame and component, every colour, gap, padding and corner radius is bound to a `Portfolio v2` variable, and every text node uses a `v2/` text style whose font family, size and line height are themselves bound to variables. No raw values. Only top-level frame positions and fixed media sizes may be raw. Make a component whenever a pattern repeats twice or more.

## File structure

| File | Responsibility |
|---|---|
| `_docs/1-inbox/mo-speech-case-study-draft.md` | Mo's raw draft, verbatim. Read-only source. (Already created.) |
| `_docs/scripts/check-copy.mjs` | Validates the case-study markdown against the block format and the voice rules. Exit 1 on any failure. |
| `_docs/scripts/fixtures/good.md`, `bad.md` | Fixtures proving the checker passes and fails correctly. |
| `_docs/3-design/mo-speech-case-study.md` | The edited case study, every word, in block format. |
| `_docs/3-design/mo-speech-storyboards.md` | The two storyboard scripts, six panels each. |
| `~/.claude/skills/mo-voice/SKILL.md` | The skill entry point (outside the repo, not in git). |
| `~/.claude/skills/mo-voice/reference/voice-profile.md` | What Mo's writing does, and what to keep and fix. |
| `~/.claude/skills/mo-voice/reference/ai-tells.md` | Patterns that make text read as machine-written. |
| `~/.claude/skills/mo-voice/reference/samples.md` | Before-and-after pairs from the case study edit. |
| `~/.claude/skills/mo-voice/reference/formats/{case-study,social,email}.md` | Length and shape rules per use. |
| `_docs/3-design/mo-voice-tests.md` | Three skill test outputs, for Mo to judge. |

### Case-study block format (the checker enforces this)

```markdown
# Act 1 · The MVP                     ← act heading (side-nav group)

## The problem                        ← side-nav entry
Label: Problem
### "We don't have an iPad, so we can't use it."
One-liner: Optional single standalone line.

Body paragraph, 55 words at most.

Second body paragraph, optional.

Media: <existing Figma layer name, or "new">
Caption: Short label shown on the site.
Note: VIDEO · 12s · phone screen recording: open search, tap the mic, say "dog".
```

A section may hold several `Media:` blocks and, for feature groups, `#### Sub-heading` blocks, each with its own headline line, body and media. `# Hero`, `# Overview` and `# What's next` are top-level headings like the acts, each holding exactly one `##` section in the same format (Hero's is `## Mo Speech` with `Label: Hero`).

---

### Task 1: Voice rules and the copy checker

**Files:**
- Create: `~/.claude/skills/mo-voice/reference/voice-profile.md`
- Create: `~/.claude/skills/mo-voice/reference/ai-tells.md`
- Create: `_docs/scripts/check-copy.mjs`
- Create: `_docs/scripts/fixtures/good.md`, `_docs/scripts/fixtures/bad.md`

**Interfaces:**
- Produces: `node _docs/scripts/check-copy.mjs <file.md>` prints one line per problem as `L<line>: <rule>: <detail>` and exits 1 if there are any. It prints `OK <n> sections` and exits 0 if there are none. The banned-phrase list in the script mirrors `ai-tells.md`.

- [ ] **Step 1: Write the voice profile.** Read the three voice sources in full: `_docs/1-inbox/mo-speech-case-study-draft.md`, the About text (Figma node 231:620, also quoted in the spec), and `~/Projects/mo-speech-home/docs/4-builds/features/_owner-brief.md`. Write `voice-profile.md` with these headings:
  - **Who's talking.** A dad and self-taught designer-developer with 20 years in media. He writes like he talks.
  - **Keep.** First person. Sentences that start "I", "So", "Now" and "From here". Concrete numbers and names (166 sign-ups, TD Snap). His son as the reason. His own words: pain point, productise, pivot, motor skills, symbol exposure. An occasional short fragment for punch. British spelling.
  - **Fix.** Missing commas after intro phrases and between joined clauses. Run-on sentences: split them. Sentence fragments that read as typos ("After attending numerous coffee mornings to talk to other parents at my son's school." is a fragment). Product casing (iPad, LinkedIn, Figma, Claude Code, MCP not "MPC"). Doubled words. Unclear "it" and "this".
  - **Sharpen.** Lead with the point, then the reason. Cut throat-clearing ("The idea behind X is a way to"). Replace vague words (good, quite, very) with what actually happened.
  - **Don't.** Swap his words for fancier ones. Make every sentence the same length. Add enthusiasm he didn't write.

  Quote at most three short phrases from the sources as examples.
- [ ] **Step 2: Write `ai-tells.md`.** List each tell with a one-line reason and a plain fix:
  - em or en dashes;
  - "not just X, but Y";
  - groups of three adjectives or clauses used for rhythm;
  - rhetorical-question openers;
  - colon reveals ("The result: …");
  - "delve", "game-changer", "seamless", "leverage", "empower", "unlock", "elevate", "robust", "tapestry", "testament", "journey" used as a metaphor more than once, "in today's world", "it's worth noting";
  - stacked hedges;
  - every paragraph ending on a neat summary line;
  - emoji bullet lists;
  - Title Case headings.
- [ ] **Step 3: Write the failing fixtures.** Write `fixtures/good.md`: one act, one section in full block format, a 30-word paragraph, and one media block with a valid `VIDEO ·` note. Write `fixtures/bad.md`: the same section, but with an em dash, the word "seamless", a 70-word paragraph, a `Media:` line with no `Note:`, a section missing `Label:`, and the American spelling "color".
- [ ] **Step 4: Run the checker before it exists, to confirm the fail.** Run `node _docs/scripts/check-copy.mjs _docs/scripts/fixtures/good.md`. Expected: `Error: Cannot find module`.
- [ ] **Step 5: Write `check-copy.mjs`.**

```js
#!/usr/bin/env node
// Validates Mo Speech case-study copy: block format + voice rules.
import { readFileSync } from "node:fs";

const file = process.argv[2];
if (!file) { console.error("usage: check-copy.mjs <file.md>"); process.exit(2); }
const lines = readFileSync(file, "utf8").split("\n");

const BANNED = ["seamless", "seamlessly", "leverage", "empower", "unlock", "elevate",
  "delve", "game-changer", "game changer", "robust", "tapestry", "testament",
  "in today's world", "it's worth noting", "not just"];
const AMERICAN = ["color", "colors", "organize", "organized", "realize", "realized",
  "analyze", "analyzed", "favorite", "center", "behavior", "customize", "customized"];
const NOTE_RE = /^Note: (VIDEO · \S+ · .+ screen recording: .+|GALLERY · \d+ images, click through: .+|STILL · .+|DIAGRAM · .+)$/;
const MAX_WORDS = 55;

const problems = [];
const report = (i, rule, detail) => problems.push(`L${i + 1}: ${rule}: ${detail}`);
let sections = 0;
let current = null; // { line, hasLabel, hasHeadline, paras }

const closeSection = () => {
  if (!current) return;
  if (!current.hasLabel) report(current.line, "section", "missing Label:");
  if (!current.hasHeadline) report(current.line, "section", "missing ### headline");
  if (current.paras > 2) report(current.line, "section", `${current.paras} body paragraphs (max 2 per headline)`);
};

lines.forEach((raw, i) => {
  const line = raw.trim();
  const lower = line.toLowerCase();
  if (/[—–]/.test(line)) report(i, "dash", "em or en dash");
  for (const b of BANNED) if (lower.includes(b)) report(i, "ai-tell", `"${b}"`);
  for (const a of AMERICAN) if (new RegExp(`\\b${a}\\b`, "i").test(line)) report(i, "spelling", `American "${a}"`);

  if (line.startsWith("## ")) { closeSection(); sections++; current = { line: i, hasLabel: false, hasHeadline: false, paras: 0 }; return; }
  if (line.startsWith("# ")) { closeSection(); current = null; return; }
  if (!current) return;
  if (line.startsWith("Label:")) { current.hasLabel = true; return; }
  if (line.startsWith("### ")) { current.hasHeadline = true; current.paras = 0; return; }
  if (line.startsWith("#### ")) { current.paras = 0; return; }
  if (line.startsWith("Media:")) {
    if (!(lines[i + 1] || "").trim().startsWith("Caption:")) report(i, "media", "Media: not followed by Caption:");
    if (!NOTE_RE.test((lines[i + 2] || "").trim())) report(i, "media", "Caption: not followed by a valid Note:");
    return;
  }
  if (/^(Caption|Note|One-liner|Headline):/.test(line) || line === "" || line.startsWith("-") || line.startsWith(">")) return;
  current.paras++;
  const words = line.split(/\s+/).length;
  if (words > MAX_WORDS) report(i, "length", `${words} words (max ${MAX_WORDS})`);
});
closeSection();

if (problems.length) { console.log(problems.join("\n")); process.exit(1); }
console.log(`OK ${sections} sections`);
```

- [ ] **Step 6: Run both fixtures.** Run `node _docs/scripts/check-copy.mjs _docs/scripts/fixtures/good.md`. Expected: `OK 1 sections`, exit 0. Then run `node _docs/scripts/check-copy.mjs _docs/scripts/fixtures/bad.md; echo exit=$?`. Expected: lines for the dash, `"seamless"`, `length`, the media note, the `Label:`, `American "color"`, then `exit=1`.
- [ ] **Step 7: Commit** (the repo files only; the skill folder isn't in git).

```bash
git add _docs/scripts/check-copy.mjs _docs/scripts/fixtures/good.md _docs/scripts/fixtures/bad.md
git commit -m "docs: copy checker for the case study block format and voice rules"
```

### Task 2: Case study copy, opening and Act 1

**Files:**
- Create: `_docs/3-design/mo-speech-case-study.md`

**Interfaces:**
- Consumes: `voice-profile.md`, `ai-tells.md` and the checker from Task 1.
- Produces: the file, with the `# Hero`, `# Overview` and `# Act 1 · The MVP` sections in block format. Task 3 appends Act 2 and the closing to the same file.

- [ ] **Step 1: Read the sources.** Read `voice-profile.md`, `ai-tells.md`, the draft, and these specs in `~/Projects/mo-speech-home/docs/4-builds/features/`: FEAT-102 (search) and FEAT-204 (play modal), for the MVP-era behaviour.
- [ ] **Step 2: Write `# Hero`.** Under `# Hero`, write `## Mo Speech` with `Label: Hero`. Use the headline `### Mo Speech`, the one-liner `An AAC app I built for my son, and for every family who needs a voice.`, and a meta block as plain lines (`Role: Solo. Research, design and build`, `Timeline: MVP 2025 [CHECK: dates] · Full build April to November 2026`, `Tools: Figma, Claude Code, Next.js, Convex`). Then add a media block: `Media: new` / `Caption: Mo Speech on the Space theme.` / `Note: VIDEO · 10s · tablet screen recording: silent loop, Home, open a category, tap three symbols into the talker, play the sentence.`
- [ ] **Step 3: Write `# Overview`.** Write one section with the label `Overview` and the headline `### AAC gives a voice to people who can't speak`. Add two paragraphs from the draft's introduction and modelling text, edited to the voice rules. Keep "born out of my own experiences as a father". Explain modelling in at most 2 sentences.
- [ ] **Step 4: Write Act 1's seven sections, using the outline in the spec.** For each section:
  - Edit Mo's draft text, keeping his sentences wherever they can be fixed rather than replaced.
  - Use the spec's headline wording.
  - Give each media block a caption of 3 to 8 words.
  - Write a production note specific enough to film from: device, length, and every tap in order.

  Specific requirements:
  - **The problem:** turn the three problems into `#### Problem 1` to `#### Problem 3`. Each gets a one-sentence headline line and no body. Then one paragraph from the coffee-morning story. Its first sentence must not be a fragment.
  - **What I built:** has three `####` features: Voice search, Type to search, Full-screen playback. Each gets a one-liner and a `VIDEO · 10s · phone screen recording: …` note. The length is a single token (`10s`), never a range: the checker bans dashes. Mark the symbol count `[CHECK: 58,000 symbols]`.
  - **Launch:** the headline is `### 166 sign-ups in three months`. The one-liner names the 2 therapists with custom access. Add a `GALLERY` note for the posts.
  - **What I learned:** the headline is `### "It isn't AAC." They were right.` One paragraph, no media.
- [ ] **Step 5: Run the checker.** Run `node _docs/scripts/check-copy.mjs _docs/3-design/mo-speech-case-study.md`. Expected: `OK 9 sections` (Hero, Overview, then the 7 Act 1 sections) and zero problem lines. Fix every reported line, then re-run until it prints OK.
- [ ] **Step 6: Run the fact check.** Grep the file for `tone|modelling|language|theme` and confirm each claim against the Global Constraints facts. Confirm `[CHECK:` markers exist for the symbol count and the MVP dates.
- [ ] **Step 7: Commit.** `git add _docs/3-design/mo-speech-case-study.md && git commit -m "docs: Mo Speech case study copy, opening and Act 1"`

### Task 3: Case study copy, Act 2 and closing

**Files:**
- Modify: `_docs/3-design/mo-speech-case-study.md` (append)

**Interfaces:**
- Consumes: the Task 2 file and its format.
- Produces: the complete file: `# Act 2 · The full build` (7 sections) and `# What's next`.

- [ ] **Step 1: Read the specs that Act 2 describes.** Read FEAT-201, 202, 105, 204, 301, 303, 305, 203, 306, 401, 304 and 206 in `~/Projects/mo-speech-home/docs/4-builds/features/`. Then read `~/Projects/mo-speech-home/docs/2-research/` (the GLP dossier, for the Lego idea).
- [ ] **Step 2: Write the seven Act 2 sections**, from the spec outline, in the same way as Task 2 Step 4. Specific requirements:
  - **The AAC market:** add a `GALLERY · 3 images` note (TD Snap, Awaaz, Proloquo2Go), then three `####` insights, each a one-sentence headline line.
  - **A new navigation model:** two paragraphs at most: the first wireframe (Home, Search, Categories) and the pivot that gave lists and sentences their own place. Add a `GALLERY · 4 images` note for wireframe → Figma → Claude Design → final, using the existing layer names `Categories 1`, `Categories - Hand 1`, `Screenshot 2026-11-06 at 10.06.58 1`, `Categories final 1`.
  - **Look and feel:** cover the themes from Figma variables (say "Figma MCP", never "MPC"), the six static themes (three light, three dark), the four animated themes and the figma-to-theme skill. Give each animated theme a `VIDEO · 10s` note. Note the tiers: two on Pro, all four on Max.
  - **Features:** four `####` groups. Each feature inside a group gets a headline line, a one-liner, at most one paragraph and one `VIDEO` note:
    - Building a sentence: talker, talker dropdown, sentences, tone;
    - Teaching: views, modelling mode, connected words;
    - Making it yours: symbol editor, languages;
    - Running it: admin dashboard.

    Modelling must say that the page dims, the next tap lights up with a pointer, and every device on the profile follows live.
  - **How I built it:** cover the docs system, CLAUDE.md, ADRs, Linear MCP, Superpowers and skills. Add three `DIAGRAM ·` notes: docs folder flow, Superpowers workflow, figma-to-theme skill.
- [ ] **Step 3: Write `# What's next`.** One section, labelled `What's next`, covering look and feel, promo videos, the marketing site and launch. Use only words Mo wrote, or plain facts from `~/Projects/mo-speech-home/docs/01-final-straight.md` (M6).
- [ ] **Step 4: Run the checker.** Run `node _docs/scripts/check-copy.mjs _docs/3-design/mo-speech-case-study.md`. Expected: `OK <n> sections` with zero problem lines.
- [ ] **Step 5: Fact check.** Do this the same way as Task 2 Step 6, for the whole file.
- [ ] **Step 6: Commit.** `git commit -am "docs: Mo Speech case study copy, Act 2 and closing"`, limited to that file: run `git add` on it first.

### Task 4: Storyboard scripts

**Files:**
- Create: `_docs/3-design/mo-speech-storyboards.md`

**Interfaces:**
- Produces: two storyboards, each with six panels. Each panel has `Panel N`, `Scene:` (where, who, what happens, in one sentence), `Screen:` (which app screen sits on the device, or "none"), `Caption:` (the site caption, at most 10 words) and `Draw:` (line-art instructions: figures, hands, device, props). Task 10 draws from these fields.

- [ ] **Step 1: Write Storyboard 1, "A word, in the moment" (the MVP).**
  1. At the park, the child points at a dog. No screen.
  2. The parent takes out a phone and taps the mic. Screen: MVP search, listening.
  3. The parent says "dog". The symbol appears. Screen: MVP results.
  4. The parent taps play. Full-screen dog symbol, with audio. Screen: full-screen playback.
  5. The child looks from the phone to the dog.
  6. The parent adds "big" and "dog" and plays the sequence.

  No people in app screens and no SymbolStix art in the drawings: the device screens are placeholders where the real screenshot goes.
- [ ] **Step 2: Write Storyboard 2, "Show me where it lives" (the full build).**
  1. In the kitchen, the instructor on a phone picks "snack" and taps Model.
  2. The student's tablet dims and Home lights up with a pointer. Screen: modelling, Home.
  3. The student taps Categories, then Food. Screen: modelling mid-path.
  4. The student finds "snack". The instructor's phone shows the same step live.
  5. Talker on: the student taps "I want" from Phrases, then "snack". Screen: talker with dropdown.
  6. Play with the excited tone. Screen: play modal.

  Check every behaviour against FEAT-303, 201, 202 and 204.
- [ ] **Step 3: Check.** Every panel has all five fields, each caption is 10 words or fewer, and `grep -c "^Panel" _docs/3-design/mo-speech-storyboards.md` prints `12`.
- [ ] **Step 4: Commit.** `git add _docs/3-design/mo-speech-storyboards.md && git commit -m "docs: Mo Speech storyboard scripts"`

### Owner checkpoint A: copy review

Stop. Send Mo the case study and storyboard files. He reads them, edits anything that doesn't sound like him, and answers the `[CHECK:]` items. Apply his changes, re-run the checker, and commit. **Figma work does not start until Mo approves the copy.** Then add his own edits as extra before-and-after pairs in Task 5.

### Task 5: Finish the `mo-voice` skill and test it

**Files:**
- Create: `~/.claude/skills/mo-voice/SKILL.md`
- Create: `~/.claude/skills/mo-voice/reference/samples.md`
- Create: `~/.claude/skills/mo-voice/reference/formats/case-study.md`, `social.md`, `email.md`
- Create: `_docs/3-design/mo-voice-tests.md`

**Interfaces:**
- Consumes: `voice-profile.md` and `ai-tells.md` (Task 1), the approved case study (Tasks 2–3 plus checkpoint A).
- Produces: a skill triggered by "write this in my voice", "in my style", "draft a LinkedIn/Facebook post", "reply to this email", "rework my case study".

- [ ] **Step 1: Write `samples.md`.** Use 8 to 10 pairs: Mo's raw draft paragraph, then the approved edit, then one line saying what changed and why. Include at least one pair where almost nothing changed, to show the light touch.
- [ ] **Step 2: Write the three format files.**
  - **Case study:** label, headline, one-liner, two short paragraphs, media notes.
  - **Social:** a hook line from a real moment; 3 to 6 short paragraphs; no hashtag walls (2 at most); no emoji bullets; ends on what's next or a plain ask.
  - **Email:** the purpose in line one; at most 120 words unless replying in detail; the sign-off "Mo"; no "I hope this email finds you well".
- [ ] **Step 3: Write `SKILL.md`.** Give it frontmatter with `name: mo-voice` and a description listing the triggers above. Then a process:
  1. Read the voice profile and AI tells.
  2. Pick the format file.
  3. Draft or edit, keeping Mo's words where they can be fixed.
  4. Check against `ai-tells.md`.
  5. Do a final pass with the Tier 1 rules from the `copy-check` skill (`~/.claude/skills/copy-check/SKILL.md`).
  6. When editing, show what changed.

  Add a rule never to invent facts, numbers or quotes, and to ask instead.
- [ ] **Step 4: Run three tests.** Run each in a fresh subagent that loads only the skill:
  - (a) Rework this paragraph from the draft into case-study format: the "Superpowers skill" paragraph.
  - (b) Write a LinkedIn post announcing that the full build is on staging and asking SLTs to test it.
  - (c) Write an email to an SLT who demoed the MVP, inviting them to try modelling mode.

  Save all three outputs, with their prompts, to `_docs/3-design/mo-voice-tests.md`.
- [ ] **Step 5: Check.** Run `grep -nE "—|–|seamless|leverage|game-changer|not just" _docs/3-design/mo-voice-tests.md`. Expected: no output.
- [ ] **Step 6: Commit.** `git add _docs/3-design/mo-voice-tests.md && git commit -m "docs: mo-voice skill test outputs"`

### Owner checkpoint B: voice test

Mo reads `mo-voice-tests.md` and marks each output "sounds like me" or not. For each miss, add a rule or pair to the skill and re-run that test. **This does not block the Figma tasks** (only Task 11 Step 2 uses the skill): send the tests with the final report.

### Task 6: Figma foundations: tokens, text styles and components

**Files:** Figma only, on page 159:4267.

**Interfaces:**
- Produces:
  - Variable collection **`Portfolio v2`**, one mode (`Light`). Set `scopes` on every variable explicitly. Names and values:
    - **Colour** (`COLOR`): `colour/bg` #FAFAF7, `colour/surface` #FFFFFF, `colour/ink` #18181B, `colour/grey` #71717A, `colour/hairline` #E4E4E7, `colour/note` #EA580C. Scopes: bg and surface `FRAME_FILL`, `SHAPE_FILL`; ink, grey and note `TEXT_FILL`, `SHAPE_FILL`, `STROKE_COLOR`; hairline `SHAPE_FILL`, `STROKE_COLOR`.
    - **Spacing** (`FLOAT`, scope `GAP`): `space/4`, `space/8`, `space/12`, `space/16`, `space/24`, `space/32`, `space/48`, `space/64`, `space/96`, `space/160`, each equal to its number. Padding uses the same variables (also scope them for padding: in the Plugin API the `GAP` scope covers gap and padding).
    - **Radius** (`FLOAT`, scope `CORNER_RADIUS`): `radius/sm` 8, `radius/md` 12, `radius/lg` 20, `radius/full` 999.
    - **Stroke** (`FLOAT`, scope `STROKE_FLOAT`): `stroke/hairline` 1, `stroke/drawing` 1.5.
    - **Layout** (`FLOAT`, scope `WIDTH_HEIGHT`): `layout/page` 1728, `layout/column` 1088, `layout/sidenav` 220, `layout/content` 760.
    - **Typography:** `font/serif` (`STRING`, scope `FONT_FAMILY`) "DM Serif Display"; `font/sans` (`STRING`, `FONT_FAMILY`) "DM Sans"; sizes (`FLOAT`, `FONT_SIZE`) `size/display` 64, `size/headline` 40, `size/subhead` 28, `size/body` 19, `size/body-small` 16, `size/nav` 16, `size/caption` 14, `size/label` 13, `size/note` 13; line heights in px (`FLOAT`, `LINE_HEIGHT`) `leading/display` 68, `leading/headline` 46, `leading/subhead` 34, `leading/body` 30, `leading/body-small` 25, `leading/nav` 24, `leading/caption` 20, `leading/label` 18, `leading/note` 18.
  - Text styles, each with `fontFamily`, `fontSize` and `lineHeight` bound to the variables above: `v2/Display` (serif Regular), `v2/Headline` (serif Regular), `v2/Subhead` (serif Regular), `v2/Label` (sans Medium, caps, letter spacing 8%), `v2/Body` (sans Regular), `v2/Body small` (sans Regular), `v2/Caption` (sans Regular), `v2/Note` (sans Medium), `v2/Nav` (sans Regular). Colour is applied on the node (grey for Caption, note colour for Note), bound to the colour variables.
  - A frame `v2 / Components` holding these components, all auto-layout and fully bound:
    - `Nav item` (variants `State=Default|Active|Group`);
    - `Section header` (label, headline, optional one-liner via a boolean property);
    - `Media block` (variants `Kind=Still|Video|Diagram`; a fill-width media area, a play glyph on Video, then `Caption` and a `Production note` text layer);
    - `Gallery`: **a click-through carousel**. Variant properties `Count=3|4|6` and `Slide=1…Count` (13 variants). Each variant has a clipped viewport holding a horizontal strip of `Slide 1…Count` frames (same names in every variant, so image overrides survive a variant change); the strip's x shifts per `Slide`. Previous and next arrow buttons and a dot row (active dot ink, others hairline). Prototype reactions on the arrows: `On click → Change to` the next or previous `Slide` of the same `Count`, wrapping at both ends, with Smart animate, ease out, 300ms. Then a `Caption` and a `Production note`;
    - `Stat` (number and label);
    - `Problem card`;
    - `Insight` (number label and headline);
    - `Storyboard panel` (a 340×255 frame with a `stroke/drawing` ink stroke and `radius/md`, plus a caption).
    Add any other component the pages need when a pattern repeats twice or more, and list it in the report.
  - Return all IDs. Later tasks pass them as string literals.

- [ ] **Step 1: Read the page.** Run a read-only `use_figma`. Run `listAvailableFontsAsync` filtered to `DM Serif Display` and `DM Sans`, and confirm the style names (for example `Medium`). Find the bottom edge of the lowest top-level node on the page. Every v2 frame goes in a row starting 2000px below that edge, at x 0.
- [ ] **Step 2: Create the variables and text styles.** Return their IDs.
- [ ] **Step 3: Build the components.** Bind every fill, stroke, stroke weight, gap, padding and radius to a variable, and every text node to a `v2/` style. Return their IDs.
- [ ] **Step 4: Verify.** Run a read-only query over `v2 / Components` that returns: TEXT nodes with an empty `textStyleId`; SOLID fills or strokes without a bound colour variable; auto-layout frames whose `itemSpacing` or padding is non-zero and unbound; nodes with a non-zero radius that is unbound. Expected: all four lists empty. List the `Gallery` reactions per variant and confirm each arrow points at the right neighbour. Then take one screenshot of `v2 / Components`. Check that no text is clipped and no node overlaps another.

### Task 7: Home v2 with the typing loop

**Files:** Figma only. Load `figma:figma-use-motion` as well.

**Interfaces:**
- Consumes: the Task 6 styles, variables and IDs.
- Produces: frame `Home v2`, 1728 wide, in the v2 row.

- [ ] **Step 1: Build the frame.** Match the owner's Home (160:4268) layout:
  - a 1088 content column at x 320;
  - the navbar (`MO>DEV/UI`; Work, Shaders, About);
  - a hero 877 tall with `Hi, I'm Mo` in `v2/Display`, centred, and the three lines in `v2/Body`, centred, beneath it;
  - the links row (Email, LinkedIn, YouTube, Resume);
  - the Mo Speech card, cloned from the owner's `Project-1` (162:2) art.
- [ ] **Step 2: Add the typing motion.** Each line sits inside a clip frame whose width keyframes from 0 to the line's width. A 2px ink caret moves with the clip's edge. Timing:
  - line 1 types from 0–1.2s and holds;
  - line 2 types from 1.6–3.2s;
  - line 3 types from 3.6–5.0s;
  - all three hold until 7.0s, then fade out by 7.6s;
  - the loop length is 8s.

  Set the timeline duration to 8s.
- [ ] **Step 3: Add the prototype link.** Clicking `Work` scrolls to the card. Clicking the card navigates to `Mo Speech case study v2` (wire this after Task 8 creates it, then come back to this step).
- [ ] **Step 4: Verify.** Take one screenshot, and return the timeline duration and the keyframe count per clip.

### Task 8: Case study v2, the frame, the side nav and Act 1

**Files:** Figma only.

**Interfaces:**
- Consumes: Task 6 components, the approved `_docs/3-design/mo-speech-case-study.md`.
- Produces: frame `Mo Speech case study v2`, 1728 wide, beside `Home v2`.

- [ ] **Step 1: Build the frame shell.**
  - The navbar (breadcrumb `Work / Mo Speech`).
  - A side nav column 220 wide at x 320, built from `Nav item` instances: Overview; `The MVP` (Group) with its 7 entries; `The full build` (Group) with its 7 entries; What's next. Mark the side nav sticky (`Position: Sticky` / fixed when scrolling).
  - A content column 760 wide at x 648.
- [ ] **Step 2: Build the Hero, Overview and Act 1 sections.**
  - Copy the text verbatim from the markdown: label → `v2/Label`, headline → `v2/Headline`, `####` → `v2/Subhead`, one-liner → `v2/Subhead`, body → `v2/Body`.
  - Each `Media:` block becomes a `Media block` (Kind from the note: VIDEO, STILL or DIAGRAM) or a `Gallery` instance with the matching `Count`, one image per slide. Where the markdown names an existing layer, clone that image fill from frame 169:4. Otherwise leave the placeholder.
  - Captions and notes go in exactly as written.
  - The three problems are `Problem card` instances. The launch numbers are `Stat` instances.
  - Leave `space/160` between sections.
- [ ] **Step 3: Verify.** Run the Task 6 Step 4 token query over the frame (expected: all lists empty). Run a read-only query to confirm every `Production note` layer's text starts with `VIDEO ·`, `GALLERY ·`, `STILL ·` or `DIAGRAM ·`, and that no TEXT lacks a `v2/` style. Then screenshot the top 3000px.

### Task 9: Case study v2, Act 2 and closing

**Files:** Figma only.

**Interfaces:**
- Consumes: the Task 8 frame. Append to its content column.

- [ ] **Step 1: Build the Act 2 sections and What's next.** Follow the same rules as Task 8 Step 2. Give each feature group a `v2/Subhead` heading, with its features beneath at 96px spacing. Leave the storyboard sections (Act 1 Ideate, Act 2 Ideate) as six empty `Storyboard panel` instances for Task 10.
- [ ] **Step 2: Verify.** Run the same queries as Task 8 Step 3 over the whole frame. Then screenshot Act 2 in two halves. Check for clipped text and overlaps.

### Task 10: Draw the storyboards

**Files:** Figma only.

**Interfaces:**
- Consumes: `_docs/3-design/mo-speech-storyboards.md` and the 12 `Storyboard panel` instances from Task 9.

- [ ] **Step 1: Draw each panel's line art** from its `Draw:` field:
  - simple rounded figures (head circle, body path), hands, a phone or tablet, and props (a tree, a dog, a kitchen counter);
  - 1.5px ink strokes, no fills except the device screens;
  - the device screens use the `Screen:` field: clone the matching screenshot from 169:4, or leave a grey screen labelled with the screen name;
  - captions come from `Caption:`.
- [ ] **Step 2: Verify.** Take one screenshot per storyboard. All six panels must read left to right without the captions.

### Task 11: About v2

**Files:** Figma only.

- [ ] **Step 1: Build `About v2`** beside the case study. Copy the owner's About (231:620) layout and text exactly, restyled: headings in `v2/Subhead`, body in `v2/Body`, the photo cloned.
- [ ] **Step 2: List grammar fixes, don't apply them.** Run the About text through the `mo-voice` skill's fix rules and list the suggested corrections in the final report. Change nothing until Mo says so.
- [ ] **Step 3: Verify.** Take one screenshot.

### Final review

Screenshot all three v2 frames, and run the checker once more on the case-study file. Report what's done, what's waiting on Mo (the `[CHECK:]` items, the About fixes, and filming from the production notes), and that the shaders page is the next round.
