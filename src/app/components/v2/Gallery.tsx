"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import { MediaCaption } from "./MediaBlock";
import Stage, { type StageProps } from "./Stage";
import { prefersReducedMotion } from "./useReducedMotion";

const SLIDE_MS = 300;

type GalleryProps = {
  label: string;
  slides: StageProps[];
  caption?: string;
};

const arrowClass =
  "flex items-center justify-center rounded-v2-full border-hairline border-solid border-[color:var(--colour-hairline)] bg-surface p-s8 text-ink transition-colors hover:bg-page focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

export default function Gallery({ label, slides, caption }: GalleryProps) {
  const count = slides.length;
  // Track position includes one clone at each end: 0 = last, count + 1 = first.
  const [position, setPosition] = useState(1);
  const [animate, setAnimate] = useState(true);
  const locked = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  const active = ((position - 1 + count) % count) + 1;

  useEffect(() => () => clearTimeout(timer.current), []);

  const moveTo = useCallback(
    (next: number) => {
      if (locked.current) return;
      if (prefersReducedMotion()) {
        setAnimate(false);
        setPosition(((next - 1 + count) % count) + 1);
        return;
      }
      locked.current = true;
      setAnimate(true);
      setPosition(next);
      timer.current = setTimeout(() => {
        if (next === 0 || next === count + 1) {
          setAnimate(false);
          setPosition(next === 0 ? count : 1);
        }
        locked.current = false;
      }, SLIDE_MS);
    },
    [count],
  );

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveTo(active - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      moveTo(active + 1);
    }
  }

  const track = [slides[count - 1], ...slides, slides[0]];

  return (
    <figure className="flex w-full flex-col gap-s16">
      <div
        role="group"
        aria-roledescription="carousel"
        aria-label={label}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="flex flex-col gap-s16 rounded-v2-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
      >
        <div className="relative aspect-media w-full overflow-hidden rounded-v2-md bg-hairline">
          <div
            className="flex h-full"
            style={{
              transform: `translateX(-${position * 100}%)`,
              transition: animate ? `transform ${SLIDE_MS}ms ease-out` : "none",
            }}
          >
            {track.map((slide, i) => {
              const isClone = i === 0 || i === count + 1;
              const isActive = i === position;
              return (
                <div
                  key={`${slide.src}-${i}`}
                  role={isClone ? undefined : "group"}
                  aria-roledescription={isClone ? undefined : "slide"}
                  aria-label={isClone ? undefined : `${i} of ${count}`}
                  aria-hidden={isClone || !isActive}
                  className="h-full w-full shrink-0"
                >
                  <Stage {...slide} alt={isClone ? "" : slide.alt} />
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-center gap-s16">
          <button
            type="button"
            className={arrowClass}
            aria-label="Previous slide"
            onClick={() => moveTo(active - 1)}
          >
            <ChevronLeft size={24} aria-hidden />
          </button>
          <div className="flex items-center">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                aria-label={`Go to slide ${i + 1} of ${count}`}
                aria-current={active === i + 1 ? "true" : undefined}
                onClick={() => moveTo(i + 1)}
                className="rounded-v2-full p-s4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink"
              >
                <span
                  className={`block h-s8 w-s8 rounded-v2-full transition-colors ${
                    active === i + 1 ? "bg-ink" : "bg-hairline"
                  }`}
                />
              </button>
            ))}
          </div>
          <button
            type="button"
            className={arrowClass}
            aria-label="Next slide"
            onClick={() => moveTo(active + 1)}
          >
            <ChevronRight size={24} aria-hidden />
          </button>
        </div>

        <p className="sr-only" aria-live="polite">
          Slide {active} of {count}
        </p>
      </div>
      <MediaCaption>{caption}</MediaCaption>
    </figure>
  );
}
