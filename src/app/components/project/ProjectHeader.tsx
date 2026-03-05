import ButtonLink from "@/app/components/ui/ButtonLink";

interface ProjectHeaderProps {
  breadcrumb: string[];
  title: string;
  description: string;
  role: string;
  year: string;
  href?: string;
  buttonLabel?: string;
}

export default function ProjectHeader({
  breadcrumb,
  title,
  description,
  role,
  year,
  href,
  buttonLabel,
}: ProjectHeaderProps) {
  return (
    <div className="mb-item-gap">
      <p className="text-subheading-sm md:text-subheading text-secondary mb-4">
        <span className="text-accent">&gt;</span> {breadcrumb.join(" / ")}
      </p>
      <h1 className="text-display-sm md:text-display font-semibold leading-none text-primary mb-4">
        {title}
      </h1>
      <p className="text-subheading-sm md:text-subheading text-secondary mb-4">
        <span className="text-accent">~/</span> {description}
      </p>
      <p className="text-subheading-sm md:text-subheading text-muted mb-item-gap">
        Role: {role}{' // '}{year}
      </p>
      {href && buttonLabel && <ButtonLink href={href} label={buttonLabel} />}
    </div>
  );
}
