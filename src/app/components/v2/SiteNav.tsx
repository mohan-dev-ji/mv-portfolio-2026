import Link from "next/link";
import WorkLink from "./WorkLink";

const linkClass = "type-nav text-ink transition-colors hover:text-grey";

export default function SiteNav() {
  return (
    <header className="layout-column flex h-nav items-center justify-between">
      <Link href="/" className="type-subhead text-ink">
        {"MO>DEV/UI"}
      </Link>
      <nav aria-label="Main" className="flex items-center gap-s32 md:gap-s64">
        <WorkLink className={linkClass} />
        <Link href="/about" className={linkClass}>
          About
        </Link>
      </nav>
    </header>
  );
}
