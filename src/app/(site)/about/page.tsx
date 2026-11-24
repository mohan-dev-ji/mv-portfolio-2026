import type { Metadata } from "next";
import Image from "next/image";
import LinksRow from "@/app/components/v2/LinksRow";

export const metadata: Metadata = {
  title: "About | Mohan Veraitch",
};

export default function AboutPage() {
  return (
    <div className="layout-column flex flex-col gap-s32 pb-s96 pt-s32 lg:flex-row lg:items-start">
      <div className="relative aspect-square w-full max-w-[var(--layout-portrait)] shrink-0 overflow-hidden rounded-v2-lg lg:w-[var(--layout-portrait)]">
        <Image
          src="/images/v2/about/mo-portrait.jpg"
          alt="Black and white portrait of Mo"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 424px"
          className="object-cover"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-s24 text-ink">
        <section className="flex flex-col gap-s16">
          <h1 className="type-subhead">Mo’s story</h1>
          <p className="type-body">
            I have worked in the media industry since 2005. During this time I have moved across
            departments gaining knowledge and acquiring skills in all areas of digital media. These
            skills include graphics, animation, video editing, subtitle conforms, multi-channel
            audio configuration and mastering.
          </p>
        </section>

        <section className="flex flex-col gap-s16">
          <h2 className="type-subhead">The journey into tech</h2>
          <p className="type-body">
            In 2023 I noticed that the recent years have taken their toll on the media industry and
            realised I needed to upskill to survive the new wave of technology on the horizon. I
            did an online Python bootcamp which re-kindled an already existing interest I had in
            programming.
          </p>
          <p className="type-body">
            From here I fell in love with learning and continued doing courses in full stack web
            development and UX/UI design. I also complemented this with making reading a daily
            habit and always have a good book on the go. Areas of main interest to me are business,
            entrepreneurship, programming, the brain, communication and sci-fi.
          </p>
          <p className="type-body">
            My main purpose in life now is to make technology that helps people to communicate. I
            want to develop Mo Speech to become the ultimate AAC program that gives people who
            can’t talk a voice to speak no matter what language they or their carers use.
          </p>
        </section>

        <LinksRow variant="about" />
      </div>
    </div>
  );
}
