"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-zinc-200/80 dark:bg-zinc-900/80 backdrop-blur-md">

      <nav className="max-w-container mx-auto px-gutter-sm md:px-gutter h-24 flex items-center justify-between">
        <Link href="/" className="text-sm text-primary hover:text-secondary transition-colors">
          Mohan Veraitch
        </Link>

        {/* Desktop: links + theme toggle */}
        <div className="hidden md:flex items-center gap-item-gap">
          <Link href="/projects" className="text-sm text-secondary hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="/contact" className="text-sm text-secondary hover:text-primary transition-colors">
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

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex md:hidden items-center gap-6">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-secondary hover:text-primary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          )}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-secondary hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-zinc-200/95 dark:bg-zinc-900/95">
          <div className="max-w-container mx-auto px-gutter-sm md:px-gutter py-item-gap flex flex-col gap-6">
            <Link
              href="/projects"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-secondary hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-secondary hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      )}

    </header>
  );
}
