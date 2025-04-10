"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/app/data/navItems";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Image from "next/image";
import DarkModeToggle from "../ui/ToggleButton";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Effect to handle scroll position and set active section
  useEffect(() => {
    if (isHomePage) {
      const handleScroll = () => {
        const sections = navItems.map((item) =>
          document.getElementById(item.sectionId)
        );
        const scrollPosition = window.scrollY + 100; // Offset for navbar height

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(navItems[i].sectionId);
            break;
          }
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isHomePage]); // Dependency array includes isHomePage

  // Function to scroll to a specific section
  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed w-full top-0 backdrop-blur-md z-50 border-b-custom border-light-accent dark:border-dark-accent h-20">
      <nav className="bg-light-background dark:bg-dark-background bg-opacity-60 mx-auto px-4 h-full flex justify-between items-center">
        {/* Left: Name acting as Home button */}
        <div className="text-p-bold text-light-secondary dark:text-dark-secondary">
          <Link href="/">Mohan Veraitch</Link>
        </div>

        {/* BURGER MENU ICON */}
        <div className="md:hidden">
          <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Image src="/burger-menu.svg" alt="Menu" width={24} height={24} />
          </button>
        </div>

        {/* SMALL SCREEN NAV */}
        {isMenuOpen && (
          <div className="absolute top-[80px] left-0 w-full bg-light-background dark:bg-dark-background shadow-md transition-all duration-500 ease-in-out">
            <ul className="absolute top-full left-0 w-full bg-light-background dark:bg-dark-background shadow-md">
              {navItems.map((item) => (
                <li key={item.sectionId} className="border-b border-light-accent dark:border-dark-accent">
                  <a
                    href={`/#${item.sectionId}`}
                    className="block px-4 py-2 text-light-secondary dark:text-dark-secondary hover:text-light-primary dark:hover:text-dark-primary"
                    onClick={() => {
                      scrollToSection(item.sectionId);
                      setIsMenuOpen(false); // Close the menu after selection
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* LARGE SCREEN */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item.sectionId}>
              <Button
                variant="ghost"
                className={`rounded-full ${
                  activeSection === item.sectionId
                    ? "bg-light-accent dark:bg-dark-accent text-light-background dark:text-dark-background"
                    : "text-light-secondary dark:text-dark-secondary hover:text-light-primary dark:hover:text-dark-primary"
                }`}
              >
                {isHomePage ? (
                  <span onClick={() => scrollToSection(item.sectionId)}>
                    {item.label}
                  </span>
                ) : (
                  <Link href={`/#${item.sectionId}`}>{item.label}</Link>
                )}
              </Button>
            </li>
          ))}
        </ul>

        {/* Right: Non-clickable Product Designer text */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="text-p-bold text-light-secondary dark:text-dark-secondary">Product Designer</div>
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
}
