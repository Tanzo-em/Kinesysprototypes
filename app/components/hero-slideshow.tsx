"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

type Slide = { title: string; image: string; video?: string };

function subscribeToMotion(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

export default function HeroSlideshow({ slides }: { slides: Slide[] }) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState<boolean | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = useSyncExternalStore(
    subscribeToMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => true,
  );
  const isPlaying = playing ?? !reducedMotion;

  useEffect(() => {
    const video = videoRef.current;
    if (!isPlaying) {
      video?.pause();
      return;
    }
    if (slides[active].video && video) {
      // Keep the video visible until it finishes, even on a slow connection.
      void video.play().catch(() => setPlaying(false));
      return () => video.pause();
    }
    const timer = window.setTimeout(() => {
      setActive((index) => (index + 1) % slides.length);
    }, 5000);
    return () => window.clearTimeout(timer);
  }, [active, isPlaying, slides]);

  return (
    <>
      {slides.map((slide, index) => (
        <div
          key={slide.title}
          aria-hidden={index !== active}
          className="hero-slide absolute inset-0"
          style={{ opacity: index === active ? 1 : 0 }}
        >
          {slide.video ? (
            <video
              ref={videoRef}
              muted
              playsInline
              preload="auto"
              poster={slide.image}
              aria-label={slide.title}
              className="absolute inset-0 h-full w-full object-cover object-center"
              onEnded={() => {
                if (videoRef.current) videoRef.current.currentTime = 0;
                setActive((index) => (index + 1) % slides.length);
              }}
              onError={() => setActive((index) => (index + 1) % slides.length)}
            >
              <source src={slide.video} type="video/mp4" />
            </video>
          ) : (
            <Image src={slide.image} alt={slide.title} fill sizes="100vw" className="object-cover object-center" />
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={() => setPlaying(!isPlaying)}
        className="absolute bottom-4 right-4 z-20 rounded-lg border border-white/60 bg-black/50 px-4 py-2 text-sm font-semibold text-white"
        aria-label={isPlaying ? "Pause hero slideshow" : "Play hero slideshow"}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </>
  );
}
