import Image from "next/image";
import Link from "next/link";
import LazyVideo from "@/app/components/v2/LazyVideo";
import LinksRow from "@/app/components/v2/LinksRow";
import TypedHeroLine from "@/app/components/v2/TypedHeroLine";
import { heroLines } from "@/app/data/v2/site";

export default function HomePage() {
  return (
    <>
      <div className="flex min-h-[calc(100svh-var(--layout-nav))] flex-col">
        <section className="layout-column flex flex-1 flex-col items-center justify-center gap-s16 py-s64 text-center">
          <h1 className="type-display text-ink">Hi, I’m Mo</h1>
          <TypedHeroLine lines={heroLines} />
        </section>
        <LinksRow variant="home" />
      </div>

      <section id="work" aria-label="Work" className="layout-column scroll-mt-s24 py-s64">
        <Link href="/projects/mo-speech" className="group flex flex-col gap-s24">
          <div className="relative flex aspect-[1088/705] w-full items-center justify-center overflow-hidden rounded-v2-lg bg-hairline">
            <div className="absolute inset-0">
              <LazyVideo
                src={`${process.env.NEXT_PUBLIC_MEDIA_BASE_URL ?? ""}/video/home/mo-speech-shader.mp4`}
                poster="/images/v2/home/mo-speech-shader-poster.webp"
                label="Slowly moving crimson background"
                decorative
              />
            </div>
            <Image
              src="/images/v2/home/mo-speech-logo.svg"
              alt="Mo Speech"
              width={763}
              height={116}
              className="pointer-events-none relative w-[70%]"
            />
            <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0_0_39px_rgba(0,0,0,0.25)]" />
          </div>
          <div className="flex flex-col gap-s8">
            <h2 className="type-headline text-ink">Mo Speech</h2>
            <p className="type-body text-grey">
              The modern AAC solution designed for families all across the world
            </p>
          </div>
        </Link>
      </section>
    </>
  );
}
