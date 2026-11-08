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
