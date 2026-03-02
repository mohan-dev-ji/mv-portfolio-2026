import Image from "next/image";
import ButtonLink from "@/app/components/ui/ButtonLink";

export default function HeroSection() {
  return (
    <section className="md:min-h-[calc(100vh-3rem)] max-w-container mx-auto px-6 flex flex-col">

      {/* Upper: headline + cube-single */}
      {/* relative outer — headline sets the block height; cube overlays absolute top-right */}
      <div className="relative mt-section mb-4">
        <div>
          <h1 className="text-display-sm md:text-display font-semibold leading-none text-primary">
            Design, Build<br />&amp; Deploy
          </h1>
          <div className="mt-6 space-y-1">
            <p className="text-body">
              <span className="text-accent">&gt;</span>
              <span className="text-secondary"> Design Engineer</span>
            </p>
            <p className="text-body-sm md:text-body">
              <span className="text-accent">~/</span>
              <span className="text-secondary"> London</span>
            </p>
          </div>
        </div>

        {/* inset-y-0 right-0 = spans full headline height, right edge = container right = navbar toggle */}
        {/* increase w-[38%] to make cube bigger */}
        <div className="hidden md:block absolute inset-y-0 right-0 w-[25%]">
          <div className="relative w-full h-full">
            <Image
              src="/images/Geo/cube-single.png"
              alt=""
              fill
              sizes="40vw"
              className="object-contain scale-[0.8]"
            />
          </div>
        </div>
      </div>

      {/* Lower: two main divs — phone height dictates row height, both centred on y */}
      <div className="md:flex-1 flex flex-col md:flex-row md:items-stretch md:gap-section pb-item-gap mt-item-gap md:mt-section">

        {/* Left main div: cube-cluster fills remaining width */}
        <div className="hidden md:block md:flex-1">
          <Image
            src="/images/Geo/cube-cluster.png"
            alt=""
            width={560}
            height={460}
            className="w-full h-auto scale-[0.8]"
          />
        </div>

        {/* Right main div: phone + featured project, right edge = container right = navbar toggle */}
        <div className="flex items-center gap-item-gap md:flex-shrink-0">
          <Image
            src="/images/Mockups/mo-speech-phone-cropped.png"
            alt="Mo Speech app"
            width={260}
            height={520}
            className="w-[180px] md:w-[260px] h-auto drop-shadow-2xl"
          />
          <div>
            <p className="text-subheading-sm md:text-subheading mb-4">
              <span className="text-accent">\\</span>
              <span className="text-primary"> Featured Project</span>
            </p>
            <h2 className="text-h2-sm md:text-h2 text-primary mb-1">Mo Speech</h2>
            <div className="border-t-2 border-primary mb-4 w-auto" />
            <p className="text-body-sm md:text-body text-secondary">Live product</p>
            <p className="text-body-sm md:text-body text-secondary mb-4">Symbol Exposure app</p>
            <ButtonLink href="/projects/mo-speech" label="Mo Speech" />
          </div>
        </div>

      </div>

    </section>
  );
}
