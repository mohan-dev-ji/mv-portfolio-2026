"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type MouseEvent } from "react";
import { prefersReducedMotion } from "./useReducedMotion";

export type SectionLink = { id: string; label: string };
export type SectionGroup = { label: string; items: SectionLink[] };
export type SectionNavEntry = SectionLink | SectionGroup;

const isGroup = (entry: SectionNavEntry): entry is SectionGroup => "items" in entry;

/** Share of the viewport height that a section must cross to become active. */
const ACTIVATION_LINE = 0.3;
const SCROLL_LOCK_FALLBACK_MS = 1200;

const rowClass =
  "block w-full rounded-v2-sm px-s12 py-s8 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ink";

type StickySectionNavProps = {
  entries: SectionNavEntry[];
  label: string;
};

export default function StickySectionNav({ entries, label }: StickySectionNavProps) {
  const ids = useMemo(
    () => entries.flatMap((e) => (isGroup(e) ? e.items.map((i) => i.id) : [e.id])),
    [entries],
  );
  const [activeId, setActiveId] = useState(ids[0]);
  const navRef = useRef<HTMLElement>(null);
  const clickLock = useRef(false);
  const lockTimer = useRef<ReturnType<typeof setTimeout>>();

  const computeActive = useCallback(() => {
    if (clickLock.current) return;
    const doc = document.documentElement;
    if (window.scrollY + window.innerHeight >= doc.scrollHeight - 2) {
      setActiveId(ids[ids.length - 1]);
      return;
    }
    const line = window.innerHeight * ACTIVATION_LINE;
    let current = ids[0];
    for (const id of ids) {
      const section = document.getElementById(id);
      if (section && section.getBoundingClientRect().top <= line) current = id;
    }
    setActiveId(current);
  }, [ids]);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(computeActive);
    };
    const release = () => {
      clickLock.current = false;
      clearTimeout(lockTimer.current);
      computeActive();
    };
    computeActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("scrollend", release);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(lockTimer.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("scrollend", release);
    };
  }, [computeActive]);

  // Keep the active row visible when the nav scrolls internally.
  useEffect(() => {
    const nav = navRef.current;
    const row = nav?.querySelector<HTMLElement>('[aria-current="location"]');
    if (!nav || !row) return;
    const navBox = nav.getBoundingClientRect();
    const rowBox = row.getBoundingClientRect();
    if (rowBox.top < navBox.top) nav.scrollTop -= navBox.top - rowBox.top;
    else if (rowBox.bottom > navBox.bottom) nav.scrollTop += rowBox.bottom - navBox.bottom;
  }, [activeId]);

  function goTo(event: MouseEvent<HTMLAnchorElement>, id: string) {
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    const reduced = prefersReducedMotion();
    setActiveId(id);
    clickLock.current = !reduced;
    clearTimeout(lockTimer.current);
    if (!reduced) {
      lockTimer.current = setTimeout(() => {
        clickLock.current = false;
        computeActive();
      }, SCROLL_LOCK_FALLBACK_MS);
    }
    target.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
    target.focus({ preventScroll: true });
    window.history.replaceState(null, "", `#${id}`);
  }

  function renderLink(item: SectionLink) {
    const isActive = item.id === activeId;
    return (
      <li key={item.id}>
        <a
          href={`#${item.id}`}
          aria-current={isActive ? "location" : undefined}
          onClick={(event) => goTo(event, item.id)}
          className={`${rowClass} type-nav transition-colors ${
            isActive
              ? "bg-surface text-ink shadow-[inset_0_0_0_var(--stroke-hairline)_var(--colour-hairline)]"
              : "text-grey hover:text-ink"
          }`}
        >
          {item.label}
        </a>
      </li>
    );
  }

  return (
    <nav
      ref={navRef}
      aria-label={label}
      className="sticky top-s24 hidden max-h-[calc(100dvh-2*var(--space-24))] w-sidenav shrink-0 self-start overflow-y-auto overscroll-contain xl:block"
    >
      <ul className="flex flex-col gap-s24">
        {entries.map((entry) =>
          isGroup(entry) ? (
            <li key={entry.label}>
              <a
                href={`#${entry.items[0].id}`}
                onClick={(event) => goTo(event, entry.items[0].id)}
                className={`${rowClass} type-label text-ink`}
              >
                {entry.label}
              </a>
              <ul className="mt-s4 flex flex-col gap-s4">{entry.items.map(renderLink)}</ul>
            </li>
          ) : (
            renderLink(entry)
          ),
        )}
      </ul>
    </nav>
  );
}
