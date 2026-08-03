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

type Point = [number, number];
type Cubic = [Point, Point, Point, Point];

const curves: Cubic[] = [
  [[205, 335], [120, 335], [55, 300], [55, 195]],
  [[55, 195], [55, 90], [120, 55], [205, 55]],
  [[205, 55], [300, 55], [350, 115], [410, 195]],
  [[410, 195], [470, 275], [520, 335], [615, 335]],
  [[615, 335], [700, 335], [765, 300], [765, 195]],
  [[765, 195], [765, 90], [700, 55], [615, 55]],
  [[615, 55], [520, 55], [470, 115], [410, 195]],
  [[410, 195], [350, 275], [300, 335], [205, 335]],
];

const point = ([x, y]: Point) => `${x} ${y}`;
const midpoint = ([ax, ay]: Point, [bx, by]: Point): Point => [
  (ax + bx) / 2,
  (ay + by) / 2,
];

const splitCubic = ([p0, p1, p2, p3]: Cubic): [Cubic, Cubic] => {
  const a = midpoint(p0, p1);
  const b = midpoint(p1, p2);
  const c = midpoint(p2, p3);
  const d = midpoint(a, b);
  const e = midpoint(b, c);
  const f = midpoint(d, e);

  return [
    [p0, a, d, f],
    [f, e, c, p3],
  ];
};

const infinityPath = `${curves
  .map((curve, index) =>
    index === 0
      ? `M${point(curve[0])} C${point(curve[1])} ${point(curve[2])} ${point(curve[3])}`
      : `C${point(curve[1])} ${point(curve[2])} ${point(curve[3])}`,
  )
  .join(" ")} Z`;

const stageCurvePairs: Array<[number, number]> = [
  [7, 0],
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
];

const stagePaths = stageCurvePairs.map(([incomingIndex, outgoingIndex]) => {
  const incoming = splitCubic(curves[incomingIndex])[1];
  const outgoing = splitCubic(curves[outgoingIndex])[0];

  return `M${point(incoming[0])} C${point(incoming[1])} ${point(incoming[2])} ${point(incoming[3])} C${point(outgoing[1])} ${point(outgoing[2])} ${point(outgoing[3])}`;
});

export default function ImagineProcess() {
  const graphicRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const wheelLockedRef = useRef(false);
  const wheelTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const selectStage = (index: number) => {
    const nextIndex = Math.min(stages.length - 1, Math.max(0, index));
    activeIndexRef.current = nextIndex;
    setActiveIndex(nextIndex);
  };

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
            <span className="hidden sm:inline">
              Hover over the infinity and scroll to explore
            </span>
            <span className="sm:hidden">Use the controls to explore</span>
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
                <text x="55" y="195">2</text>
                <text x="205" y="55">3</text>
                <text x="410" y="195">4</text>
                <text x="615" y="335">5</text>
                <text x="765" y="195">6</text>
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

            <div className="mt-7 flex gap-2" aria-label="Choose an IMAGINE stage">
              {stages.map((stage, index) => (
                <button
                  type="button"
                  key={stage.number}
                  aria-label={`Show stage ${stage.number}: ${stage.title}`}
                  aria-pressed={index === activeIndex}
                  onClick={() => selectStage(index)}
                  className={`h-2.5 flex-1 rounded-full transition-colors duration-300 ${
                    index === activeIndex ? "bg-[#075ee8]" : "bg-[#dce8ff]"
                  }`}
                />
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:hidden">
              <button
                type="button"
                onClick={() => selectStage(activeIndex - 1)}
                disabled={activeIndex === 0}
                className="rounded-xl border border-[#cbdcfb] px-4 py-3 text-sm font-black text-[#243858] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={() => selectStage(activeIndex + 1)}
                disabled={activeIndex === stages.length - 1}
                className="rounded-xl bg-[#075ee8] px-4 py-3 text-sm font-black text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
