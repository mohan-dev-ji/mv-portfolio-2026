"use client";

import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";
import { registerVideo, togglePlayback, toggleSound } from "./videoPlayback";

type LazyVideoProps = {
  src: string;
  poster: string;
  label: string;
  className?: string;
  /** Shows the sound control. */
  hasAudio?: boolean;
  /** Background art: hidden from assistive tech, with no controls. */
  decorative?: boolean;
};

export default function LazyVideo({
  src,
  poster,
  label,
  className,
  hasAudio = false,
  decorative,
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [paused, setPaused] = useState(true);
  const [muted, setMuted] = useState(true);
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

  // Content videos share one player slot, so only the one most in view runs.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad || reducedMotion || decorative) return;
    const unregister = registerVideo(video, hasAudio);
    setMuted(video.muted);
    return unregister;
  }, [shouldLoad, reducedMotion, decorative, hasAudio]);

  // Silent background art plays whenever it is on screen.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad || reducedMotion || !decorative) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => undefined);
        else video.pause();
      },
      { threshold: 0.2 },
    );
    observer.observe(video);
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [shouldLoad, reducedMotion, decorative]);

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
        onVolumeChange={(event) => setMuted(event.currentTarget.muted)}
        className="h-full w-full object-cover"
      />
      {!decorative && (
        <button
          type="button"
          onClick={() => videoRef.current && togglePlayback(videoRef.current)}
          aria-label={`${paused ? "Play" : "Pause"} video: ${label}`}
          className="absolute inset-0 flex items-end justify-end p-s12 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ink"
        >
          <span className="rounded-v2-full bg-surface p-s8 text-ink opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
            {paused ? <Play size={16} aria-hidden /> : <Pause size={16} aria-hidden />}
          </span>
        </button>
      )}
      {!decorative && hasAudio && (
        <button
          type="button"
          onClick={() => videoRef.current && toggleSound(videoRef.current)}
          aria-pressed={!muted}
          aria-label={`Sound for video: ${label}`}
          className="type-caption absolute bottom-s12 left-s12 flex items-center gap-s8 rounded-v2-full bg-surface px-s12 py-s8 text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        >
          {muted ? <VolumeX size={16} aria-hidden /> : <Volume2 size={16} aria-hidden />}
          {muted ? "Turn sound on" : "Sound on"}
        </button>
      )}
    </div>
  );
}
