"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

type LazyVideoProps = {
  src: string;
  poster: string;
  label: string;
  className?: string;
  /** Background art: hidden from assistive tech, with no pause control. */
  decorative?: boolean;
};

export default function LazyVideo({ src, poster, label, className, decorative }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const userPaused = useRef(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [paused, setPaused] = useState(true);
  const reducedMotion = useReducedMotion();

  // Attach the source shortly before the video reaches the viewport.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [reducedMotion]);

  // Play on screen, pause off screen.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad || reducedMotion) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !userPaused.current) {
          video.play().catch(() => undefined);
        } else if (!entry.isIntersecting) {
          video.pause();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(video);
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [shouldLoad, reducedMotion]);

  function toggle() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      userPaused.current = false;
      video.play().catch(() => undefined);
    } else {
      userPaused.current = true;
      video.pause();
    }
  }

  if (reducedMotion) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={poster} alt={decorative ? "" : label} className={`h-full w-full object-cover ${className ?? ""}`} />;
  }

  return (
    <div className={`group relative h-full w-full ${className ?? ""}`}>
      <video
        ref={videoRef}
        src={shouldLoad ? src : undefined}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={decorative ? undefined : label}
        aria-hidden={decorative || undefined}
        onPlay={() => setPaused(false)}
        onPause={() => setPaused(true)}
        className="h-full w-full object-cover"
      />
      {!decorative && (
        <button
          type="button"
          onClick={toggle}
          aria-label={`${paused ? "Play" : "Pause"} video: ${label}`}
          className="absolute inset-0 flex items-end justify-end p-s12 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ink"
        >
          <span className="rounded-v2-full bg-surface p-s8 text-ink opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
            {paused ? <Play size={16} aria-hidden /> : <Pause size={16} aria-hidden />}
          </span>
        </button>
      )}
    </div>
  );
}
