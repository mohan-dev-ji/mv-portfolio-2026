import Image from "next/image";

export default function WorkflowSection() {
  return (
    <section className="relative max-w-container mx-auto px-gutter-sm md:px-gutter">
      {/* Horizontal beam behind wave */}
      <div className="absolute top-[30%] left-0 w-full h-[6px] bg-primary blur-[80px] opacity-10 dark:opacity-20 pointer-events-none" aria-hidden />
      {/* Wave geo divider — full bleed */}
      <div className="w-full opacity-40">
        <Image
          src="/images/Geo/wave.png"
          alt=""
          width={1282}
          height={540}
          className="w-full h-auto"
        />
      </div>

      <p className="text-h2-sm md:text-h2 text-accent mb-6 text-center">
        <span className="text-accent">#</span>
        <span className="text-primary"> From Concept to Production</span>
      </p>
      <div className="w-full">
        <Image
          src="/images/Workflows/workflow.png"
          alt="Workflow — Figma, VS Code, Blender"
          width={1282}
          height={640}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
