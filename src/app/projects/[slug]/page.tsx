import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { projectDetails } from "@/lib/projectDetails";
import { projects } from "@/lib/projects";
import ProjectHeader from "@/app/components/project/ProjectHeader";
import HeroImage from "@/app/components/project/HeroImage";
import OverviewStrip from "@/app/components/project/OverviewStrip";
import ImageImage from "@/app/components/project/ImageImage";
import TextImage from "@/app/components/project/TextImage";
import ImageText from "@/app/components/project/ImageText";
import ProjectCard from "@/app/components/ui/ProjectCard";

export function generateStaticParams() {
  return projectDetails.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectDetails.find((p) => p.slug === slug);

  if (!project) notFound();

  const related = projects.filter((p) => project.relatedSlugs.includes(p.slug));

  return (
    <>
      <section className="mt-section max-w-container mx-auto px-gutter-sm md:px-gutter">
        <ProjectHeader
          breadcrumb={project.breadcrumb}
          title={project.title}
          description={project.description}
          role={project.role}
          year={project.year}
          href={project.href}
          buttonLabel={project.buttonLabel}
        />
      </section>

      {project.sections.map((section, i) => {
        if (section.type === "hero-image") {
          return (
            <section key={i} className="mt-section max-w-container mx-auto px-gutter-sm md:px-gutter">
              <HeroImage src={section.src} alt={section.alt} />
            </section>
          );
        }

        if (section.type === "overview-strip") {
          return (
            <section key={i} className="mt-section max-w-container mx-auto px-gutter-sm md:px-gutter">
              <OverviewStrip cards={section.cards} />
            </section>
          );
        }

        if (section.type === "image-image") {
          return (
            <section key={i} className="mt-section max-w-container mx-auto px-gutter-sm md:px-gutter">
              <ImageImage left={section.left} right={section.right} />
            </section>
          );
        }

        if (section.type === "text-image") {
          return (
            <section key={i} className="mt-section max-w-container mx-auto px-gutter-sm md:px-gutter">
              <TextImage
                heading={section.heading}
                paragraphs={section.paragraphs}
                image={section.image}
              />
            </section>
          );
        }

        if (section.type === "image-text") {
          return (
            <section key={i} className="mt-section max-w-container mx-auto px-gutter-sm md:px-gutter">
              <ImageText
                image={section.image}
                heading={section.heading}
                paragraphs={section.paragraphs}
              />
            </section>
          );
        }

        if (section.type === "stack") {
          return (
            <section key={i} className="mt-section max-w-container mx-auto px-gutter-sm md:px-gutter">
              <p className="text-sm mb-4">
                <span className="text-accent">\</span>
                <span className="text-primary"> Stack</span>
              </p>
              <div className="flex flex-wrap gap-3">
                {section.items.map((item, j) => (
                  <div
                    key={j}
                    className="flex items-center gap-2 text-sm text-secondary border border-border px-4 py-2"
                  >
                    <ArrowRight size={16} className="text-accent flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </section>
          );
        }

        return null;
      })}

      {related.length > 0 && (
        <section className="mt-section mb-section max-w-container mx-auto px-gutter-sm md:px-gutter">
          <p className="text-sm mb-item-gap">
            <span className="text-accent">\</span>
            <span className="text-primary"> More Projects</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-item-gap">
            {related.map((p) => (
              <ProjectCard key={p.slug} {...p} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
