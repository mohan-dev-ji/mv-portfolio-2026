import Image from "next/image";
import type { Block, CaseSection } from "@/app/data/v2/moSpeech";
import Gallery from "./Gallery";
import MediaBlock, { MediaCaption } from "./MediaBlock";

const hairlineBorder = "border-solid border-[color:var(--colour-hairline)]";

function Subsection({
  block,
  inGroup,
}: {
  block: Extract<Block, { type: "subsection" }>;
  inGroup?: boolean;
}) {
  const Heading = inGroup ? "h4" : "h3";
  return (
    <div className={`flex flex-col gap-s32 ${inGroup ? "" : "pt-s48"}`}>
      <div className="flex flex-col gap-s8">
        {block.eyebrow && <p className="type-label text-grey">{block.eyebrow}</p>}
        <Heading className="type-subhead text-ink">{block.title}</Heading>
        {block.lead && <p className="type-body text-grey">{block.lead}</p>}
      </div>
      <Blocks blocks={block.blocks} gapClass="gap-s32" />
    </div>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "body":
      return (
        <div className="flex flex-col gap-s24">
          {block.paragraphs.map((text) => (
            <p key={text} className="type-body text-ink">
              {text}
            </p>
          ))}
        </div>
      );
    case "media":
      return <MediaBlock {...block.media} />;
    case "gallery":
      return <Gallery label={block.label} slides={block.slides} caption={block.caption} />;
    case "problems":
      return (
        <figure className="flex flex-col gap-s48">
          <div className="flex flex-col gap-s16">
            {block.cards.map((card) => (
              <div
                key={card.label}
                className={`flex flex-col gap-s12 rounded-v2-lg border-hairline bg-surface p-s24 ${hairlineBorder}`}
              >
                <p className="type-label text-grey">{card.label}</p>
                <h3 className="type-subhead text-ink">{card.title}</h3>
                <p className="type-body-small text-grey">{card.body}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-s16 md:gap-s48">
            {block.images.map((image) => (
              <div key={image.src} className="relative aspect-[221/271] overflow-hidden">
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 800px) 33vw, 221px" className="object-contain" />
              </div>
            ))}
          </div>
          <MediaCaption>{block.caption}</MediaCaption>
        </figure>
      );
    case "storyboard":
      return (
        <figure className="flex flex-col gap-s16">
          <ol className="grid grid-cols-1 gap-y-s32 sm:grid-cols-[repeat(2,minmax(0,340px))] sm:justify-between sm:gap-y-s48">
            {block.panels.map((panel) => (
              <li key={panel.src} className="flex flex-col gap-s12">
                <div className={`relative aspect-[4/3] overflow-hidden rounded-v2-md border-hairline bg-surface ${hairlineBorder}`}>
                  <Image src={panel.src} alt={panel.alt} fill sizes="(max-width: 640px) 100vw, 340px" className="object-cover" />
                </div>
                <p className="type-caption text-grey">{panel.caption}</p>
              </li>
            ))}
          </ol>
          <MediaCaption>{block.caption}</MediaCaption>
        </figure>
      );
    case "stats":
      return (
        <dl className="flex flex-wrap gap-s32 md:gap-s64">
          {block.items.map((item) => (
            <div key={item.label} className="flex flex-col-reverse gap-s4">
              <dt className="type-body-small text-grey">{item.label}</dt>
              <dd className="type-display text-ink">{item.value}</dd>
            </div>
          ))}
        </dl>
      );
    case "insights":
      return (
        <div className="flex flex-col gap-s32">
          {block.items.map((item) => (
            <div key={item.label} className={`flex flex-col gap-s8 border-t-hairline pt-s24 ${hairlineBorder}`}>
              <p className="type-label text-grey">{item.label}</p>
              <h3 className="type-subhead text-ink">{item.title}</h3>
            </div>
          ))}
        </div>
      );
    case "subsection":
      return <Subsection block={block} />;
    case "featureGroup":
      return (
        <div className="flex flex-col gap-s48 pt-s48">
          <div className={`border-t-hairline pt-s48 ${hairlineBorder}`}>
            <h3 className="type-headline text-ink">{block.title}</h3>
          </div>
          <div className="flex flex-col gap-s64 md:gap-s96">
            {block.features.map((feature) => (
              <Subsection key={feature.title} block={feature} inGroup />
            ))}
          </div>
        </div>
      );
  }
}

function Blocks({ blocks, gapClass }: { blocks: Block[]; gapClass: string }) {
  return (
    <div className={`flex flex-col ${gapClass}`}>
      {blocks.map((block, index) => (
        <BlockView key={index} block={block} />
      ))}
    </div>
  );
}

export function CaseStudySection({ section }: { section: CaseSection }) {
  return (
    <section
      id={section.id}
      tabIndex={-1}
      aria-labelledby={`${section.id}-heading`}
      className="flex scroll-mt-s24 flex-col gap-s48 outline-none"
    >
      <header className="flex flex-col gap-s16">
        <p className="type-label text-grey">{section.label}</p>
        <h2 id={`${section.id}-heading`} className="type-headline text-ink">
          {section.headline}
        </h2>
        {section.lead && <p className="type-body text-grey">{section.lead}</p>}
      </header>
      <Blocks blocks={section.blocks} gapClass="gap-s48" />
    </section>
  );
}
