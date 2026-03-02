const processItems = [
  {
    title: "Research",
    subtitle: "Primary &\nSecondary",
    items: ["User Research", "Competitor Analysis", "Journey Mapping"],
  },
  {
    title: "Design",
    subtitle: "Mock-up &\nIterate",
    items: ["Design System", "User Flows", "Tailwind CSS"],
  },
  {
    title: "Build",
    subtitle: "Prototype &\nDevelop",
    items: ["Typescript", "Convex", "Python"],
  },
  {
    title: "Deploy",
    subtitle: "Push &\nAnalyse",
    items: ["Vercel", "Git", "SEO"],
  },
];

export default function ProcessSection() {
  return (
    <section className="mt-section">
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-item-gap">
          {processItems.map((item) => (
            <div
              key={item.title}
              className="border border-border p-6"
            >
              <div className="border-b border-border pb-3 mb-4">
                <h3 className="text-subheading text-primary">{item.title}</h3>
              </div>
              <p className="text-sm text-secondary mb-5 whitespace-pre-line">
                {item.subtitle}
              </p>
              <ul className="space-y-2">
                {item.items.map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-secondary">
                    <span className="text-accent">→</span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
