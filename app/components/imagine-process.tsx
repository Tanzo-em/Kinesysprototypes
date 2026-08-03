"use client";

import { useEffect, useRef, useState } from "react";

const stages = [
  {
    number: 1,
    title: "Investigate",
    copy: "Understand the problem, the people affected by it, and the needs of the target users.",
  },
  {
    number: 2,
    title: "Map",
    copy: "Define the project goals, key requirements, constraints, and measurable objectives.",
  },
  {
    number: 3,
    title: "Architect",
    copy: "Generate ideas, organize the product experience, and create early prototypes.",
  },
  {
    number: 4,
    title: "Generate",
    copy: "Build the product or service and turn the selected concept into a working solution.",
  },
  {
    number: 5,
    title: "Integrate",
    copy: "Launch the product or service and connect it with the people, systems, and workflows around it.",
  },
  {
    number: 6,
    title: "Nurture",
    copy: "Monitor performance, gather feedback, and improve the product or service over time.",
  },
  {
    number: 7,
    title: "Evolve",
    copy: "Continuously adapt and improve the product or service as user needs and opportunities change.",
  },
];

const infinityPath =
  "M205 335 C125 335 70 290 70 195 C70 100 125 55 205 55 C295 55 345 140 410 195 C475 250 525 335 615 335 C695 335 750 290 750 195 C750 100 695 55 615 55 C525 55 475 140 410 195 C345 250 295 335 205 335";

const stagePaths = [
  "M316.875 285.625 C285 313.75 250 335 205 335 C157 335 118 318.8 94.48 285.32",
  "M107.5 300.625 C83.75 277.5 70 242.5 70 195 C70 147.5 83.75 112.5 107.5 89.375",
  "M107.5 89.375 C131.25 66.25 165 55 205 55 C250 55 285 76.25 316.875 104.375",
  "M316.875 104.375 C348.75 132.5 377.5 167.5 410 195 C442.5 222.5 471.25 257.5 503.125 285.625",
  "M503.125 285.625 C535 313.75 570 335 615 335 C655 335 688.75 323.75 712.5 300.625",
  "M712.5 300.625 C736.25 277.5 750 242.5 750 195 C750 147.5 736.25 112.5 712.5 89.375",
  "M712.5 89.375 C688.75 66.25 655 55 615 55 C570 55 535 76.25 503.125 104.375",
];

export default function ImagineProcess() {
  const graphicRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const wheelLockedRef = useRef(false);
  const wheelTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const graphic = graphicRef.current;

    if (!graphic) return;

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < 4) return;

      const direction = event.deltaY > 0 ? 1 : -1;
      const currentIndex = activeIndexRef.current;
      const nextIndex = Math.min(
        stages.length - 1,
        Math.max(0, currentIndex + direction),
      );

      if (wheelLockedRef.current) {
        event.preventDefault();
        return;
      }

      if (nextIndex === currentIndex) return;

      event.preventDefault();
      wheelLockedRef.current = true;
      activeIndexRef.current = nextIndex;
      setActiveIndex(nextIndex);

      wheelTimerRef.current = setTimeout(() => {
        wheelLockedRef.current = false;
      }, 450);
    };

    graphic.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      graphic.removeEventListener("wheel", handleWheel);

      if (wheelTimerRef.current) clearTimeout(wheelTimerRef.current);
    };
  }, []);

  const activeStage = stages[activeIndex];

  return (
    <div className="relative py-8">
      <div className="flex flex-col justify-center">
        <div className="text-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#075ee8]">
            Hover over the infinity and scroll to explore
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-wide text-[#081d46] sm:text-4xl">
            Our Patented <span className="text-[#075ee8]">IMAGINE</span> Process
          </h2>
        </div>

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1.45fr_0.55fr]">
          <div
            ref={graphicRef}
            tabIndex={0}
            aria-label="Scroll over the infinity diagram to move through stages 1 to 7"
            className="relative mx-auto aspect-[2.1] w-full max-w-[820px] cursor-ns-resize outline-none focus-visible:ring-4 focus-visible:ring-[#b8cff8]"
          >
            <svg
              viewBox="0 0 820 390"
              className="h-full w-full"
              role="img"
              aria-label={`IMAGINE process, stage ${activeStage.number}: ${activeStage.title}`}
            >
              <title>Seven-stage IMAGINE design process</title>
              <path
                d={infinityPath}
                fill="none"
                stroke="#88a9ed"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="34"
              />
              {stagePaths.map((path, index) => (
                <path
                  key={path}
                  d={path}
                  fill="none"
                  stroke="#075ee8"
                  strokeLinecap="butt"
                  strokeLinejoin="round"
                  strokeWidth="34"
                  className={`transition-opacity duration-300 ${
                    index === activeIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <g
                fill="#fff"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-[14px] font-black"
              >
                <text x="205" y="335">1</text>
                <text x="70" y="195">2</text>
                <text x="205" y="55">3</text>
                <text x="410" y="195">4</text>
                <text x="615" y="335">5</text>
                <text x="750" y="195">6</text>
                <text x="615" y="55">7</text>
              </g>
            </svg>
          </div>

          <article
            key={activeStage.number}
            aria-live="polite"
            className="rounded-2xl border border-[#cbdcfb] bg-white p-7 shadow-[0_20px_60px_rgba(7,54,130,0.12)] sm:p-9"
          >
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#075ee8]">
              Stage {String(activeStage.number).padStart(2, "0")}
            </p>
            <h3 className="mt-3 text-3xl font-black tracking-tight text-[#081d46]">
              {activeStage.title}
            </h3>
            <p className="mt-4 text-base font-medium leading-7 text-[#5f6675]">
              {activeStage.copy}
            </p>

            <div className="mt-7 flex gap-2" aria-hidden="true">
              {stages.map((stage, index) => (
                <span
                  key={stage.number}
                  className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                    index === activeIndex ? "bg-[#075ee8]" : "bg-[#dce8ff]"
                  }`}
                />
              ))}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
