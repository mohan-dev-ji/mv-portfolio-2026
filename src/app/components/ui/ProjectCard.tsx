import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ButtonLink from "@/app/components/ui/ButtonLink";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ label, title, description, tags, href, image, buttonLabel }: Project) {
  return (
    <div className="border border-border flex flex-col">
      <div className="relative aspect-video bg-image-bg">
        <div className="absolute inset-x-0 inset-y-[10%]">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain drop-shadow-product"
          />
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <p className="text-sm text-accent mb-2">
          <span className="text-accent">#</span> {label}
        </p>
        <h3 className="text-h2-sm md:text-h2 text-primary border-b-2 border-primary pb-1 mb-4">
          {title}
        </h3>
        <p className="text-body-sm md:text-body text-secondary mb-item-gap">{description}</p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-item-gap">
          {tags.map((tag, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-secondary">
              <ArrowRight size={16} className="text-accent flex-shrink-0" />
              {tag}
            </div>
          ))}
        </div>
        <div className="mt-auto">
          <ButtonLink href={href} label={buttonLabel} />
        </div>
      </div>
    </div>
  );
}
