import Image from "next/image";

interface ImageImageProps {
  left: { src: string; alt: string };
  right: { src: string; alt: string };
}

export default function ImageImage({ left, right }: ImageImageProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-item-gap">
      {[left, right].map((img, i) => (
        <div key={i} className="relative aspect-video bg-image-bg">
          <div className="absolute inset-x-0 inset-y-[10%]">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain drop-shadow-product"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
