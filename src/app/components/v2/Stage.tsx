import Image from "next/image";

export type StageBackground = "plain" | "plainStrong" | "gradient" | "gallery" | "photo";

export type StageProps = {
  src: string;
  alt: string;
  background?: StageBackground;
  /** Exterior photo, used only by the "photo" background. */
  photoSrc?: string;
  /** Edge-to-edge images skip the Stage padding. */
  bleed?: boolean;
};

const backgroundClass: Record<Exclude<StageBackground, "photo">, string> = {
  plain: "bg-hairline",
  plainStrong: "bg-stage-to",
  gradient: "bg-gradient-to-b from-stage-from to-stage-to",
  gallery: "bg-stage-gallery",
};

export default function Stage({ src, alt, background = "plain", photoSrc, bleed }: StageProps) {
  return (
    <div className={`relative h-full w-full overflow-hidden ${bleed ? "" : "p-s16 md:p-s48"}`}>
      {background === "photo" ? (
        <div className="absolute -inset-[60px] bg-hairline blur-[20px]">
          {photoSrc && <Image src={photoSrc} alt="" fill sizes="760px" className="object-cover" />}
        </div>
      ) : (
        <div className={`absolute inset-0 ${backgroundClass[background]}`} />
      )}
      <div className="relative h-full w-full">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 800px) 100vw, 760px"
          className={bleed ? "object-cover" : "object-contain"}
        />
      </div>
    </div>
  );
}
