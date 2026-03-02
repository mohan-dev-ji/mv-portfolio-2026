import Image from "next/image";

export default function WorkflowSection() {
  return (
    <section className="mt-section">
      {/* Wave geo divider — full bleed */}
      <div className="w-full opacity-40 mb-section">
        <Image
          src="/images/Geo/wave.png"
          alt=""
          width={1728}
          height={300}
          className="w-full h-auto"
        />
      </div>

      <div className="max-w-container mx-auto px-6">
        <p className="text-sm text-accent mb-6"># From Concept to Production</p>
        <div className="w-full border border-border">
          <Image
            src="/images/Workflows/workflow.png"
            alt="Workflow — Figma, VS Code, Blender"
            width={1282}
            height={640}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
