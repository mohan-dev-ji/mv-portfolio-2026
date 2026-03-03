import Image from "next/image";
import { projects } from "@/lib/projects";
import ProjectCard from "@/app/components/ui/ProjectCard";
import ButtonLink from "@/app/components/ui/ButtonLink";

const wipProjects = projects.filter((p) => p.label === "Work in progress");
const caseStudies = projects.filter((p) => p.label === "Case Study");
const liveProject = projects.find((p) => p.slug === "mo-speech")!;

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-container mx-auto px-gutter-sm md:px-gutter">
        <div className="relative mt-section mb-section min-h-[280px]">
          <h1 className="text-display-sm md:text-display font-semibold leading-none text-primary">
            Projects
          </h1>
          <p className="text-body mt-4">
            <span className="text-accent">&gt;</span>
            <span className="text-secondary"> Selected work</span>
          </p>
          <div className="hidden md:block absolute inset-y-0 right-0 w-[100%]">
            <div className="relative w-full h-full">
              <Image
                src="/images/Geo/sphere.png"
                alt=""
                fill
                sizes="50vw"
                className="object-contain object-right"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Live */}
      <section className="mt-section max-w-container mx-auto px-gutter-sm md:px-gutter">
        <h2 className="text-h2-sm md:text-h2 text-primary inline-block border-b-2 border-primary pb-1 mb-item-gap">
          Live
        </h2>
        <div className="flex flex-col md:flex-row md:items-center gap-section">
          <div className="relative aspect-video bg-image-bg md:w-5/6">
            <div className="absolute inset-x-0 inset-y-[10%]">
              <Image
                src={liveProject.image}
                alt={liveProject.title}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-contain drop-shadow-product"
              />
            </div>
          </div>
          <div className="md:w-2/5">
            <p className="text-sm text-accent mb-2">
              <span className="text-accent">\\</span> Featured Project
            </p>
            <h3 className="text-h2-sm md:text-h2 text-primary border-b-2 border-primary pb-1 mb-4">
              {liveProject.title}
            </h3>
            <p className="text-body-sm md:text-body text-secondary mb-item-gap">
              {liveProject.description}
            </p>
            <ButtonLink href={liveProject.href} label={liveProject.buttonLabel} />
          </div>
        </div>
      </section>

      {/* Work In Progress */}
      <section className="mt-section max-w-container mx-auto px-gutter-sm md:px-gutter">
        <h2 className="text-h2-sm md:text-h2 text-primary inline-block border-b-2 border-primary pb-1 mb-item-gap">
          Work In Progress
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-item-gap">
          {wipProjects.map((p) => (
            <ProjectCard key={p.slug} {...p} />
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="mt-section mb-section max-w-container mx-auto px-gutter-sm md:px-gutter">
        <h2 className="text-h2-sm md:text-h2 text-primary inline-block border-b-2 border-primary pb-1 mb-item-gap">
          Case Studies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-item-gap">
          {caseStudies.map((p) => (
            <ProjectCard key={p.slug} {...p} />
          ))}
        </div>
      </section>

      {/* Wave geo */}
      <section className="mt-section max-w-container mx-auto px-gutter-sm md:px-gutter opacity-40">
        <Image
          src="/images/Geo/wave.png"
          alt=""
          width={1282}
          height={540}
          className="w-full h-auto"
        />
      </section>
    </>
  );
}
