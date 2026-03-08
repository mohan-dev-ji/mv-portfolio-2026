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
            I work across the whole product lifecycle, from user research, designing and prototyping to shipping full-stack React applications.  I built Mo Speech from concept to live product. The user feedback is now helping me develop this into a real contender in the Augmentative and Alternative Communication market. 
          </p>
          <p className="text-body text-secondary max-w-md mb-item-gap">
            I&apos;m looking to bring my knowledge and attitude of ownership to teams that want to build fast while placing a high level of importance on the craft.
          </p>
          <ButtonLink href="/contact" label="Get in touch" />
        </div>

      </div>
    </section>
  );
}
