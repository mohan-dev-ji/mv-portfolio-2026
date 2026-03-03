import Image from "next/image";

interface HeroImageProps {
  src: string;
  alt: string;
}

export default function HeroImage({ src, alt }: HeroImageProps) {
  return (
    <div className="relative aspect-video bg-image-bg w-full">
      <div className="absolute inset-x-0 inset-y-[10%]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="object-contain drop-shadow-product"
        />
      </div>
    </div>
  );
}
