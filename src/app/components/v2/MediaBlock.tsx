import Image from "next/image";
import LazyVideo from "./LazyVideo";
import Stage, { type StageProps } from "./Stage";

export type MediaBlockProps = { caption?: string } & (
  | ({ kind: "still" } & StageProps)
  | { kind: "video"; src: string; poster: string; alt: string }
  | { kind: "diagram"; src: string; alt: string }
);

export function MediaCaption({ children }: { children?: string }) {
  if (!children) return null;
  return <figcaption className="type-caption text-grey">{children}</figcaption>;
}

export default function MediaBlock(props: MediaBlockProps) {
  return (
    <figure className="flex w-full flex-col gap-s12">
      <div
        className={`relative aspect-media w-full overflow-hidden rounded-v2-md ${
          props.kind === "diagram"
            ? "border-hairline border-solid border-[color:var(--colour-hairline)] bg-surface"
            : "bg-hairline"
        }`}
      >
        {props.kind === "still" && (
          <Stage
            src={props.src}
            alt={props.alt}
            background={props.background}
            photoSrc={props.photoSrc}
            bleed={props.bleed}
          />
        )}
        {props.kind === "video" && (
          <LazyVideo src={props.src} poster={props.poster} label={props.alt} />
        )}
        {props.kind === "diagram" && (
          <Image
            src={props.src}
            alt={props.alt}
            fill
            sizes="(max-width: 800px) 100vw, 760px"
            className="object-contain"
          />
        )}
      </div>
      <MediaCaption>{props.caption}</MediaCaption>
    </figure>
  );
}
