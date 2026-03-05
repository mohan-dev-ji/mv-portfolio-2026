import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonLinkProps {
  href?: string;
  label: string;
  type?: "submit" | "button";
  disabled?: boolean;
}

export default function ButtonLink({ href, label, type = "button", disabled }: ButtonLinkProps) {
  const className = "inline-flex items-center gap-2 bg-accent text-btn-text px-5 py-2 text-sm hover:bg-accent-hover transition-colors disabled:opacity-50";

  if (href) {
    return (
      <Link href={href} className={className}>
        {label}
        <ArrowRight size={16} />
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} className={className}>
      {label}
      <ArrowRight size={16} />
    </button>
  );
}
