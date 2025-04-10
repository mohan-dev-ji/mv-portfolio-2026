"use client"

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { navItems, NavItem } from '@/app/data/navItems';
import { useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';


export default function Footer() {
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const pathname = usePathname();

  const isHomePage = pathname === '/';

  const scrollToSection = useCallback((sectionId: string) => {
    if (isHomePage) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(`/#${sectionId}`);
    }
  }, [isHomePage, router]);
  
  return (
    <footer className="max-w-[910px] mx-auto bg-light-background dark:bg-dark-background">
      <div className="hidden md:block w-full bg-light-background dark:bg-dark-background py-12">
        <div className="max-w-[910px] mx-auto border-t-custom border-light-accent dark:border-dark-accent">
          <div className="w-full h-1  mb-8"></div>
          <div className="grid grid-cols-4 gap-8">
            <div>
              <p className="text-p-bold text-light-primary dark:text-dark-primary">Mohan Veraitch</p>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-light-primary dark:text-dark-primary">Quick Links</h3>
              <ul className="space-y-2">
              {navItems.map((item: NavItem) => (
                <li key={item.sectionId}>
                  <Link
                    href={`/#${item.sectionId}`}
                    className="text-light-secondary dark:text-dark-secondary hover:text-light-primary dark:hover:text-dark-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.sectionId);
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-light-primary dark:text-dark-primary">Follow Me</h3>
              <a href="https://www.linkedin.com/in/mohan-veraitch-a229a990/" className="text-light-secondary dark:text-dark-secondary hover:text-light-primary dark:hover:text-dark-primary">LinkedIn</a>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-light-primary dark:text-dark-primary">Let&apos;s Work Together</h3>
              <p className="mb-4 text-light-secondary dark:text-dark-secondary">Tell me about your project</p>
              <Button
                variant="default"
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t-custom border-light-accent dark:border-dark-accent">
        <div className="max-w-[910px] mx-auto px-4 flex justify-between items-center p-12">
          <p className="text-light-secondary dark:text-dark-secondary text-sm">
            © {currentYear} Mohan Veraitch
          </p>
          <div className="flex items-center space-x-4">
            <Link
              href="/#contact"
              className="text-light-secondary dark:text-dark-secondary hover:text-light-primary dark:hover:text-dark-primary text-sm"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              Get in touch
            </Link>
            <a href="https://www.linkedin.com/in/mohan-veraitch-a229a990/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/linkedin-logo.png" alt="LinkedIn" width={24} height={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
