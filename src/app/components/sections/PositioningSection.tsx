import Image from "next/image";
import ButtonLink from "@/app/components/ui/ButtonLink";

export default function PositioningSection() {
  return (
    <section className="mt-section mb-section max-w-container mx-auto px-gutter-sm md:px-gutter">
      <div className="flex items-center gap-section">

        {/* Image */}
        <div className="hidden md:block flex-1 opacity-60">
          <Image
            src="/images/Geo/sphere.png"
            alt=""
            width={629}
            height={629}
            className="w-full h-auto"
          />
        </div>

        {/* Text */}
        <div className="flex-1">
          <div className="mb-4">
            <span className="text-h2 font-semibold text-accent">&gt;</span>
            <span className="text-h2 font-semibold text-primary">_</span>
          </div>
          <p className="text-body text-secondary max-w-md mb-item-gap">
            I work across the full product cycle, from user research and Figma to shipped React
            applications. I built Mo Speech from concept to live product. I&apos;m looking to bring
            that same end-to-end ownership to a team that moves fast and cares about craft.
          </p>
          <ButtonLink href="/contact" label="Get in touch" />
        </div>

      </div>
    </section>
  );
}
