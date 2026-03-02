import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-3rem)] max-w-container mx-auto px-6 flex flex-col">

      {/* Upper: headline + cube-single */}
      {/* relative outer — headline sets the block height; cube overlays absolute top-right */}
      <div className="relative mt-section">
        <div>
          <h1 className="text-[64px] lg:text-display font-semibold leading-none text-primary">
            Design, Build<br />&amp; Deploy
          </h1>
          <div className="mt-6 space-y-1">
            <p className="text-body">
              <span className="text-accent">&gt;</span>
              <span className="text-secondary"> Design Engineer</span>
            </p>
            <p className="text-body">
              <span className="text-accent">~/</span>
              <span className="text-secondary"> London</span>
            </p>
          </div>
        </div>

        {/* inset-y-0 right-0 = spans full headline height, right edge = container right = navbar toggle */}
        {/* increase w-[38%] to make cube bigger */}
        <div className="absolute inset-y-0 right-0 w-[25%]">
          <div className="relative w-full h-full">
            <Image
              src="/images/Geo/cube-single.png"
              alt=""
              fill
              sizes="40vw"
              className="object-contain scale-[1.1]"
            />
          </div>
        </div>
      </div>

      {/* Lower: two main divs — phone height dictates row height, both centred on y */}
      <div className="flex-1 flex items-center gap-section pb-item-gap">

        {/* Left main div: cube-cluster fills remaining width */}
        <div className="flex-1 opacity-70">
          <Image
            src="/images/Geo/cube-cluster.png"
            alt=""
            width={560}
            height={460}
            className="w-full h-auto"
          />
        </div>

        {/* Right main div: phone + featured project, right edge = container right = navbar toggle */}
        <div className="flex items-center gap-item-gap flex-shrink-0">
          <Image
            src="/images/Mockups/mo-speech-phone-cropped.png"
            alt="Mo Speech app"
            width={220}
            height={440}
            className="h-auto drop-shadow-2xl"
          />
          <div>
            <p className="text-subheading text-primary mb-4">\\ Featured Project</p>
            <h2 className="text-h2 text-primary mb-3">Mo Speech</h2>
            <div className="border-t border-border mb-4 w-20" />
            <p className="text-sm text-secondary">Live product</p>
            <p className="text-sm text-secondary mb-item-gap">AAC communication app</p>
            <Link
              href="/projects/mo-speech"
              className="inline-block border border-accent text-accent px-5 py-2 text-sm hover:bg-accent hover:text-btn-text transition-colors"
            >
              Mo Speech →
            </Link>
          </div>
        </div>

      </div>

    </section>
  );
}
