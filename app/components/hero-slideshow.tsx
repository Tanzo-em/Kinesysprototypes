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
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = useSyncExternalStore(
    subscribeToMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => true,
  );

  useEffect(() => {
    const video = videoRef.current;
    if (reducedMotion) {
      video?.pause();
      return;
    }
    if (slides[active].video && video) {
      video.currentTime = 0;
      // Autoplay restrictions still allow the slideshow timer to advance.
      void video.play().catch(() => {});
    }
    const timer = window.setTimeout(() => {
      setActive((index) => (index + 1) % slides.length);
    }, slides[active].video ? 3000 : 5000);
    return () => {
      window.clearTimeout(timer);
      video?.pause();
    };
  }, [active, reducedMotion, slides]);

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
    </>
  );
}
