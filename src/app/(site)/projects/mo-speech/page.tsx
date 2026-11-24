import type { Metadata } from "next";
import { CaseStudySection } from "@/app/components/v2/CaseStudyBlocks";
import MediaBlock from "@/app/components/v2/MediaBlock";
import StickySectionNav from "@/app/components/v2/StickySectionNav";
import WorkLink from "@/app/components/v2/WorkLink";
import { caseStudyHero, caseStudyNav, caseStudySections } from "@/app/data/v2/moSpeech";

export const metadata: Metadata = {
  title: "Mo Speech | Mohan Veraitch",
  description: caseStudyHero.oneLiner,
};

export default function MoSpeechCaseStudy() {
  return (
    <div className="layout-column">
      <nav aria-label="Breadcrumb" className="type-nav flex items-center gap-s8">
        <WorkLink className="text-ink transition-colors hover:text-grey" />
        <span aria-hidden className="text-grey">
          /
        </span>
        <span aria-current="page" className="text-grey">
          {caseStudyHero.title}
        </span>
      </nav>

      <div className="flex items-start justify-between pt-[var(--layout-case-top)]">
        <StickySectionNav entries={caseStudyNav} label="Case study sections" />

        <div className="mx-auto flex w-full min-w-0 max-w-content flex-col gap-s96 pb-s160 md:gap-s160 xl:mx-0">
          <section aria-labelledby="case-study-title" className="flex flex-col gap-s48">
            <header className="flex flex-col gap-s16">
              <h1 id="case-study-title" className="type-display text-ink">
                {caseStudyHero.title}
              </h1>
              <p className="type-body text-grey">{caseStudyHero.oneLiner}</p>
            </header>
            <dl className="grid grid-cols-1 gap-s24 md:grid-cols-3 md:gap-s32">
              {caseStudyHero.meta.map((item) => (
                <div key={item.label} className="flex flex-col gap-s4">
                  <dt className="type-label text-grey">{item.label}</dt>
                  <dd className="type-body-small text-ink">{item.value}</dd>
                </div>
              ))}
            </dl>
            <MediaBlock {...caseStudyHero.reel} />
          </section>

          {caseStudySections.map((section) => (
            <CaseStudySection key={section.id} section={section} />
          ))}
        </div>
      </div>
    </div>
  );
}
