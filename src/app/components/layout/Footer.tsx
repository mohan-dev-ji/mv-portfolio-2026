import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-section">
      <div className="max-w-container mx-auto px-6 mb-section">
        <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between py-item-gap gap-6 md:gap-0">
          <div className="text-center md:text-left">
            <p className="text-sm text-primary">Mohan Veraitch</p>
            <p className="text-sm text-secondary mt-1">Design Engineer // London</p>
          </div>
          <div className="flex items-center gap-item-gap">
            <a
              href="https://www.linkedin.com/in/mohan-veraitch-a229a990/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-secondary hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/mohanveraitch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-secondary hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:mohan@veraitch.co.uk"
              className="text-sm text-secondary hover:text-primary transition-colors"
            >
              Email
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row md:justify-between py-4 mt-section gap-2 md:gap-0">
          <p className="text-xs text-muted">© 2025 All Rights Reserved</p>
          <p className="text-xs text-muted">Design, Build &amp; Deploy</p>
        </div>
      </div>
    </footer>
  );
}
