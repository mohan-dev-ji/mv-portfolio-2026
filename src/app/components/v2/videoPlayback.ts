/**
 * Page-wide video coordinator: at most one registered video plays at a time.
 * The video most in view wins, and sound carries across videos once turned on.
 */

type Entry = { hasAudio: boolean; userPaused: boolean };

/** Share of a video that must be on screen before it can play. */
const MIN_VISIBLE = 0.5;
/** Stops two similarly placed videos swapping back and forth while scrolling. */
const ACTIVE_BONUS = 0.08;

const entries = new Map<HTMLVideoElement, Entry>();
let active: HTMLVideoElement | null = null;
let soundOn = false;
let frame = 0;

function score(video: HTMLVideoElement) {
  const box = video.getBoundingClientRect();
  const viewport = window.innerHeight;
  if (box.height === 0) return -1;
  const visible = Math.min(box.bottom, viewport) - Math.max(box.top, 0);
  const ratio = Math.max(0, visible) / Math.min(box.height, viewport);
  if (ratio < MIN_VISIBLE) return -1;
  const distance = Math.abs((box.top + box.bottom) / 2 - viewport / 2) / viewport;
  return ratio - distance * 0.5 + (video === active ? ACTIVE_BONUS : 0);
}

function start(video: HTMLVideoElement, entry: Entry) {
  if (entry.userPaused || !video.paused) return;
  video.muted = !(soundOn && entry.hasAudio);
  video.play().catch((error: DOMException) => {
    // The browser refused sound without a tap, so keep the video moving silently.
    if (error.name !== "NotAllowedError" || video.muted || active !== video) return;
    video.muted = true;
    video.play().catch(() => undefined);
  });
}

function pauseAllExcept(keep: HTMLVideoElement | null) {
  entries.forEach((_, video) => {
    if (video !== keep && !video.paused) video.pause();
  });
}

function evaluate() {
  if (document.hidden) {
    pauseAllExcept(null);
    return;
  }
  let best: HTMLVideoElement | null = null;
  let bestScore = -1;
  entries.forEach((_, video) => {
    const value = score(video);
    if (value > bestScore) {
      best = video;
      bestScore = value;
    }
  });
  active = best;
  pauseAllExcept(active);
  if (active) start(active, entries.get(active)!);
}

function schedule() {
  cancelAnimationFrame(frame);
  frame = requestAnimationFrame(evaluate);
}

function activate(video: HTMLVideoElement) {
  active = video;
  pauseAllExcept(video);
}

export function registerVideo(video: HTMLVideoElement, hasAudio: boolean) {
  if (entries.size === 0) {
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    document.addEventListener("visibilitychange", evaluate);
  }
  entries.set(video, { hasAudio, userPaused: false });
  video.muted = !(soundOn && hasAudio);
  schedule();

  return () => {
    entries.delete(video);
    video.pause();
    if (active === video) active = null;
    if (entries.size === 0) {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      document.removeEventListener("visibilitychange", evaluate);
    } else {
      schedule();
    }
  };
}

export function togglePlayback(video: HTMLVideoElement) {
  const entry = entries.get(video);
  if (!entry) return;
  if (video.paused) {
    entry.userPaused = false;
    activate(video);
    start(video, entry);
  } else {
    entry.userPaused = true;
    video.pause();
  }
}

export function toggleSound(video: HTMLVideoElement) {
  const entry = entries.get(video);
  if (!entry) return;
  soundOn = video.muted;
  entries.forEach((other, element) => {
    if (element !== video && element.paused) element.muted = !(soundOn && other.hasAudio);
  });
  video.muted = !soundOn;
  if (soundOn) {
    entry.userPaused = false;
    activate(video);
    if (video.paused) video.play().catch(() => undefined);
  }
}
