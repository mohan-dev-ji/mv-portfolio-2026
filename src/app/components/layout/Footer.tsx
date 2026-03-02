import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-section">
      <div className="max-w-container mx-auto px-6">
        <div className="flex items-start justify-between py-item-gap">
          <div>
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
        <div className="flex items-center justify-between py-4 border-t border-border">
          <p className="text-xs text-muted">© 2025 All Rights Reserved</p>
          <p className="text-xs text-muted">Design, Build &amp; Deploy</p>
        </div>
      </div>
    </footer>
  );
}
