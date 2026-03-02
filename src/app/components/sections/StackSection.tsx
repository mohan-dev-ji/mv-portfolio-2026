import Image from "next/image";

const stackItems = [
  "React",          "Figma",          "Tailwind CSS",
  "Next.js",        "After Effects",  "Shad CN",
  "Typescript",     "Blender",        "Python",
  "Cursor",         "Photoshop",      "Bash",
  "Claude Code",    "Premiere",       "CLI",
  "Convex",         "Da Vinci Resolve","Linux",
];

export default function StackSection() {
  return (
    <section className="mt-section">
      <div className="max-w-container mx-auto px-6">
        <div className="flex items-start justify-between gap-section">

          <div className="flex-1">
            <div className="mb-1">
              <span className="text-h2 font-semibold text-accent">%</span>
              <span className="text-h2 font-semibold text-primary">_</span>
            </div>
            <h2 className="text-h2 text-primary mb-item-gap">The Stack</h2>

            <div className="grid grid-cols-3 gap-x-12 gap-y-3">
              {stackItems.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm">
                  <span className="text-accent">→</span>
                  <span className="text-primary">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-64 flex-shrink-0 opacity-60">
            <Image
              src="/images/Geo/stack.png"
              alt=""
              width={256}
              height={300}
              className="w-full h-auto"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
