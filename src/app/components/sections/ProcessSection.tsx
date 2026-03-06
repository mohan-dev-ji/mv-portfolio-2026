import { ArrowRight } from "lucide-react";

const processItems = [
  {
    title: "Research",
    subtitle: "Primary &\nSecondary",
    items: ["User Interviews", "Journey Maps", "Competitor Analysis"],
  },
  {
    title: "Design",
    subtitle: "Mock-up &\nIterate",
    items: ["Wireframes", "High-fidelity", "Design Tokens"],
  },
  {
    title: "Build",
    subtitle: "Prototype &\nDevelop",
    items: ["React", "Convex", "Cloudflare"],
  },
  {
    title: "Deploy",
    subtitle: "Push &\nAnalyse",
    items: ["Vercel", "Git", "SEO"],
  },
];

export default function ProcessSection() {
  return (
    <section className="mt-item-gap md:mt-section max-w-container mx-auto px-gutter-sm md:px-gutter">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-item-gap">
        {processItems.map((item) => (
          <div key={item.title} className="border border-border p-6">
            <div className="border-b-2 border-primary pb-1 mb-4">
              <h3 className="text-h2-sm md:text-h2 text-primary">{item.title}</h3>
            </div>
            <p className="text-subheading-sm md:text-subheading text-primary mb-5 whitespace-pre-line">
              {item.subtitle}
            </p>
            <ul className="space-y-2">
              {item.items.map((i) => (
                <li key={i} className="flex items-center gap-2 text-body-sm md:text-body text-secondary">
                  <ArrowRight size={16} className="text-accent flex-shrink-0" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
