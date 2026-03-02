import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonLinkProps {
  href: string;
  label: string;
}

export default function ButtonLink({ href, label }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 bg-accent text-btn-text px-5 py-2 text-sm hover:bg-accent-hover transition-colors"
    >
      {label}
      <ArrowRight size={16} />
    </Link>
  );
}
