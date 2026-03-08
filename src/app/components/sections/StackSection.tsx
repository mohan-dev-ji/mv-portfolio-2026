import Image from "next/image";
import { ArrowRight } from "lucide-react";

const stackItems = [
  "React",          "Figma",          "Tailwind CSS",
  "Next.js",        "After Effects",  "Shad CN",
  "TypeScript",     "Blender",        "Python",
  "Cursor",         "Photoshop",      "Bash",
  "Claude Code",    "Premiere",       "HTML",
  "Convex",         "DaVinci",       "CSS",
];

export default function StackSection() {
  return (
    <section className="mt-section max-w-container mx-auto px-gutter-sm md:px-gutter">
      <div className="flex items-start gap-section">

        {/* Text */}
        <div className="flex-1">
          <div className="mb-item-gap">
            <span className="text-h2 font-semibold text-accent">%</span>
            <span className="text-h2 font-semibold text-primary">_</span>
          </div>
          <h2 className="text-h2 text-primary mb-item-gap">The Stack</h2>
          <div className="grid grid-cols-3 gap-x-0 gap-y-3">
            {stackItems.map((item, i) => (
              <div key={i} className="flex items-center gap-1 text-sm">
                <ArrowRight size={16} className="text-accent" />
                <span className="text-primary">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="hidden md:block flex-1 opacity-60">
          <Image
            src="/images/Geo/stack.png"
            alt=""
            width={629}
            height={486}
            className="w-full h-auto"
          />
        </div>

      </div>
    </section>
  );
}
