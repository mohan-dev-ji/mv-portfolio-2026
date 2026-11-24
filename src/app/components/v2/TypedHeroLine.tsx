"use client";

import { useEffect, useState } from "react";
import { prefersReducedMotion } from "./useReducedMotion";

export type HeroLine = { before: string; accent: string; after: string };

const TYPE_MS = 42;
const PAUSE_MS = 1900;
const FADE_MS = 260;

type Phase = "typing" | "paused" | "fading";

function LineText({ line, count }: { line: HeroLine; count: number }) {
  const { before, accent, after } = line;
  const typedBefore = before.slice(0, count);
  const typedAccent = accent.slice(0, Math.max(0, count - before.length));
  const typedAfter = after.slice(0, Math.max(0, count - before.length - accent.length));
  const restBefore = before.slice(typedBefore.length);
  const restAccent = accent.slice(typedAccent.length);
  const restAfter = after.slice(typedAfter.length);

  return (
    <>
      {typedBefore}
      <span className="text-accent">{typedAccent}</span>
      {typedAfter}
      <span className="typed-caret-anchor" />
      <span className="invisible">
        {restBefore}
        {restAccent}
        {restAfter}
      </span>
    </>
  );
}

export default function TypedHeroLine({ lines }: { lines: HeroLine[] }) {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");

  const line = lines[index];
  const length = line.before.length + line.accent.length + line.after.length;

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

  const fullText = (l: HeroLine) => `${l.before}${l.accent}${l.after}`;

  return (
    <div className="type-typed w-full max-w-column text-ink">
      <p className="sr-only">{lines.map((l) => `${fullText(l)}.`).join(" ")}</p>

      {/* Animated line. Every line is stacked invisibly to reserve the final size. */}
      <div aria-hidden className="grid justify-center motion-reduce:hidden">
        {lines.map((l) => (
          <span key={l.accent} className="invisible col-start-1 row-start-1">
            {fullText(l)}
          </span>
        ))}
        <span
          data-phase={phase}
          className="typed-line col-start-1 row-start-1 w-0 min-w-full text-left"
        >
          <LineText line={line} count={count} />
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
