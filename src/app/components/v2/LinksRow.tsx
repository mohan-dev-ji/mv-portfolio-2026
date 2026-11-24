import Link from "next/link";
import { siteLinks } from "@/app/data/v2/site";

const linkClass = "type-nav text-ink transition-colors hover:text-grey";

function External({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {label}
    </a>
  );
}

export default function LinksRow({ variant }: { variant: "home" | "about" }) {
  const isHome = variant === "home";

  return (
    <div
      className={
        isHome
          ? "layout-column flex flex-wrap items-center justify-between gap-s16 py-s32"
          : "flex flex-wrap items-start justify-between gap-s16 pt-s24"
      }
    >
      <div className={`flex flex-wrap items-center gap-s24 ${isHome ? "md:gap-s96" : "md:gap-s32"}`}>
        <a href={siteLinks.email} className={linkClass}>
          Email
        </a>
        <External href={siteLinks.linkedin} label="LinkedIn" />
        <External href={siteLinks.youtube} label="YouTube" />
      </div>
      <div className="flex items-center gap-s24 md:gap-s32">
        {!isHome && (
          <Link href="/" className={linkClass}>
            Home
          </Link>
        )}
        {siteLinks.resume && <External href={siteLinks.resume} label="Resume" />}
      </div>
    </div>
  );
}
