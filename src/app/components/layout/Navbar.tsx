"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="fixed w-full top-0 z-50 bg-zinc-200/80 dark:bg-zinc-900/80 backdrop-blur-md">
      <nav className="max-w-container mx-auto px-6 h-24 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm text-primary hover:text-secondary transition-colors"
        >
          Mohan Veraitch
        </Link>

        <div className="flex items-center gap-item-gap">
          <Link
            href="/projects"
            className="text-sm text-secondary hover:text-primary transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-sm text-secondary hover:text-primary transition-colors"
          >
            Contact
          </Link>
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-secondary hover:text-primary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
