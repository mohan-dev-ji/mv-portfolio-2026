#!/usr/bin/env node
// Validates Mo Speech case-study copy: block format + voice rules.
import { readFileSync } from "node:fs";

const file = process.argv[2];
if (!file) { console.error("usage: check-copy.mjs <file.md>"); process.exit(2); }
const lines = readFileSync(file, "utf8").split("\n");

const BANNED = ["seamless", "seamlessly", "leverage", "empower", "unlock", "elevate",
  "delve", "game-changer", "game changer", "robust", "tapestry", "testament",
  "in today's world", "it's worth noting", "not just"];
const AMERICAN = /\b(?:color|organiz|realiz|analyz|favorite|behavior|customiz|center)\w*/i;
const NOTE_RE = /^Note: (VIDEO · \d+s · .+ screen recording: .+|GALLERY · \d+ images, click through: .+|STILL · .+|DIAGRAM · .+)$/;
const MAX_WORDS = 55;

const problems = [];
const report = (i, rule, detail) => problems.push(`L${i + 1}: ${rule}: ${detail}`);
let sections = 0;
let current = null; // { line, hasLabel, hasHeadline, hasMedia, paras }
let para = null; // { line, words }

const flushPara = () => {
  if (!para) return;
  if (current) {
    current.paras++;
    if (para.words > MAX_WORDS) report(para.line, "length", `${para.words} words (max ${MAX_WORDS})`);
  }
  para = null;
};

const closeSection = () => {
  flushPara();
  if (!current) return;
  if (!current.hasLabel) report(current.line, "section", "missing Label:");
  if (!current.hasHeadline) report(current.line, "section", "missing ### headline");
  if (!current.hasMedia) report(current.line, "section", "missing Media: (use Media: none if there is none)");
  if (current.paras > 2) report(current.line, "section", `${current.paras} body paragraphs (max 2 per headline)`);
};

lines.forEach((raw, i) => {
  const line = raw.trim();
  const lower = line.toLowerCase().replace(/[\u2018\u2019]/g, "'");
  if (/[—–]/.test(line)) report(i, "dash", "em or en dash");
  for (const b of BANNED) if (new RegExp(`\\b${b}\\b`).test(lower)) report(i, "ai-tell", `"${b}"`);
  const am = line.match(AMERICAN);
  if (am) report(i, "spelling", `American "${am[0]}"`);

  if (line === "") { flushPara(); return; }
  if (line.startsWith("## ")) { closeSection(); sections++; current = { line: i, hasLabel: false, hasHeadline: false, hasMedia: false, paras: 0 }; return; }
  if (line.startsWith("# ")) { closeSection(); current = null; return; }
  if (!current) return;
  if (line.startsWith("Label:")) { flushPara(); current.hasLabel = true; return; }
  if (line.startsWith("### ")) { flushPara(); current.hasHeadline = true; current.paras = 0; return; }
  if (line.startsWith("#### ")) { flushPara(); current.paras = 0; return; }
  if (line.startsWith("Media:")) {
    flushPara();
    current.hasMedia = true;
    if (/^Media:\s*none\s*$/i.test(line)) return;
    if (!(lines[i + 1] || "").trim().startsWith("Caption:")) report(i + 1, "media", "Media: not followed by Caption:");
    if (!NOTE_RE.test((lines[i + 2] || "").trim())) report(i + 2, "media", "Caption: not followed by a valid Note:");
    return;
  }
  if (/^(Caption|Note|One-liner|Headline):/.test(line) || line.startsWith("-") || line.startsWith(">")) { flushPara(); return; }
  if (!para) para = { line: i, words: 0 };
  para.words += line.split(/\s+/).length;
});
closeSection();

if (problems.length) { console.log(problems.join("\n")); process.exit(1); }
console.log(`OK ${sections} sections`);
