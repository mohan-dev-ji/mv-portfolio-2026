interface OverviewStripProps {
  cards: { title: string; paragraphs: string[] }[];
}

export default function OverviewStrip({ cards }: OverviewStripProps) {
  const colsClass = cards.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3";
  return (
    <div className={`grid grid-cols-1 ${colsClass} gap-item-gap`}>
      {cards.map((card, i) => (
        <div key={i} className="border border-border p-6">
          <h3 className="text-h2-sm text-primary border-b border-border pb-2 mb-4">
            {card.title}
          </h3>
          {card.paragraphs.map((p, j) => (
            <p key={j} className="text-body-sm text-secondary mb-3 last:mb-0">
              {p}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
