"use client";

import { useEffect, useState } from "react";
import { prefersReducedMotion } from "./useReducedMotion";

export type HeroLine = { before: string; accent: string; after: string };

const TYPE_MS = 42;
const PAUSE_MS = 1900;
const FADE_MS = 260;

type Phase = "typing" | "paused" | "fading";

const fullText = (line: HeroLine) => `${line.before}${line.accent}${line.after}`;

/**
 * Every character stays in the layout and is only revealed, so a centred line
 * keeps the same left edge from the first character to the last.
 */
function LineText({ line, count }: { line: HeroLine; count: number }) {
  const accentStart = line.before.length;
  const accentEnd = accentStart + line.accent.length;

  return (
    <>
      {Array.from(fullText(line)).map((char, index) => {
        const classes = ["typed-char"];
        if (index >= count) classes.push("invisible");
        if (index >= accentStart && index < accentEnd) classes.push("text-accent");
        if (index === count - 1) classes.push("typed-caret");
        if (count === 0 && index === 0) classes.push("typed-caret", "typed-caret-start");
        return (
          <span key={index} className={classes.join(" ")}>
            {char}
          </span>
        );
      })}
    </>
  );
}

export default function TypedHeroLine({ lines }: { lines: HeroLine[] }) {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");

  const line = lines[index];
  const length = fullText(line).length;

  useEffect(() => {
    if (prefersReducedMotion()) return;

    let timer: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      timer =
        count < length
          ? setTimeout(() => setCount((c) => c + 1), TYPE_MS)
          : setTimeout(() => setPhase("paused"), 0);
    } else if (phase === "paused") {
      timer = setTimeout(() => setPhase("fading"), PAUSE_MS);
    } else {
      timer = setTimeout(() => {
        setIndex((i) => (i + 1) % lines.length);
        setCount(0);
        setPhase("typing");
      }, FADE_MS);
    }
    return () => clearTimeout(timer);
  }, [phase, count, length, lines.length]);

  return (
    <div className="type-typed w-full max-w-column text-ink">
      <p className="sr-only">{lines.map((l) => `${fullText(l)}.`).join(" ")}</p>

      {/* Animated line. Every line is stacked invisibly to reserve the final height. */}
      <div aria-hidden className="grid w-full text-center motion-reduce:hidden">
        {lines.map((l) => (
          <span key={l.accent} className="invisible col-start-1 row-start-1">
            {fullText(l)}
          </span>
        ))}
        <span data-phase={phase} className="typed-line col-start-1 row-start-1 self-start">
          <LineText key={index} line={line} count={count} />
        </span>
      </div>

      {/* Reduced motion: all three lines, static. */}
      <div aria-hidden className="hidden text-center motion-reduce:block">
        {lines.map((l) => (
          <span key={l.accent} className="block">
            {l.before}
            <span className="text-accent">{l.accent}</span>
            {l.after}
          </span>
        ))}
      </div>
    </div>
  );
}
