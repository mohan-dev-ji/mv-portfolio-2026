import Image from "next/image";

interface TextImageProps {
  heading: string;
  paragraphs: string[];
  image: { src: string; alt: string };
}

export default function TextImage({ heading, paragraphs, image }: TextImageProps) {
  return (
    <div className="flex flex-col md:flex-row gap-section items-center">
      <div className="flex-1">
        <h2 className="text-h2-sm md:text-h2 text-primary border-b border-border pb-2 mb-4">
          {heading}
        </h2>
        {paragraphs.map((p, i) => (
          <p key={i} className="text-body-sm md:text-body text-secondary mb-3 last:mb-0">
            {p}
          </p>
        ))}
      </div>
      <div className="flex-1 relative aspect-video bg-image-bg w-full">
        <div className="absolute inset-x-0 inset-y-[10%]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain drop-shadow-product"
          />
        </div>
      </div>
    </div>
  );
}
