"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { prefersReducedMotion } from "./useReducedMotion";

export default function WorkLink({ className }: { className?: string }) {
  const pathname = usePathname();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (pathname !== "/") return;
    const target = document.getElementById("work");
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", "/#work");
  }

  return (
    <Link href="/#work" className={className} onClick={handleClick}>
      Work
    </Link>
  );
}
