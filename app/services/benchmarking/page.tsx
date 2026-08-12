import type { Metadata } from "next";
import Image from "next/image";
import { QuoteButton } from "../../components/quote-modal";
import ServiceDetail from "../service-detail";

export const metadata: Metadata = {
  title: "Benchmarking | Kinesysprototypes",
  description: "Product and competitor benchmarking that reveals strengths, gaps, and opportunities.",
};

export default function BenchmarkingPage() {
  const benchmarkingStages = [
    {
      number: "01",
      title: "Compare the package",
      description:
        "We begin with a full-scale reference model to compare overall proportions, occupant space, key hard points, and the way major features are packaged.",
      image: "/benchmarking/full-scale-vehicle-model.jpg",
      alt: "Full-scale automotive model used for package benchmarking",
      fit: "cover",
    },
    {
      number: "02",
      title: "Evaluate the reference buck",
      description:
        "Physical bucks help us study interfaces, clearances, mounting locations, and assembly relationships before design decisions move further downstream.",
      image: "/benchmarking/automotive-reference-buck.jpg",
      alt: "Automotive front-end reference buck in a workshop",
      fit: "cover",
    },
    {
      number: "03",
      title: "Validate form at scale",
      description:
        "Large physical models reveal stance, surface transitions, visibility, and proportion in a way that drawings alone cannot, enabling confident side-by-side assessment.",
      image: "/benchmarking/vehicle-form-model.jpg",
      alt: "Full-scale vehicle form model prepared for evaluation",
      fit: "cover",
    },
    {
      number: "04",
      title: "Inspect surfaces and geometry",
      description:
        "Controlled light inspection makes edges, curvature, gaps, and surface inconsistencies easier to identify, measure, and compare against the target standard.",
      image: "/benchmarking/light-inspection.jpg",
      alt: "Prototype component under blue inspection lighting",
      fit: "contain",
    },
    {
      number: "05",
      title: "Benchmark every component",
      description:
        "A structured teardown records material, mass, construction, hardware, and functional details so improvement opportunities are supported by physical evidence.",
      image: "/benchmarking/component-teardown.jpg",
      alt: "Disassembled product components arranged for teardown benchmarking",
      fit: "contain",
    },
  ];

  return (
    <ServiceDetail
      title="Benchmarking"
      eyebrow="Learn from the market"
      description="We compare your product with competitors and relevant industry standards to reveal performance gaps, design strengths, user-experience opportunities, and practical directions for improvement."
      image="/services/benchmarking-3d-printing.jpg"
      imageAlt="3D printer producing a prototype for product benchmarking"
      compactHero
      hideDeliverables
      deliverables={[
        "Competitor landscape review",
        "Feature comparison",
        "User-experience assessment",
        "Strength and weakness analysis",
        "Opportunity mapping",
        "Prioritized recommendations",
      ]}
      footer={
        <section className="bg-[#06183d] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-2xl bg-[linear-gradient(120deg,#075ee8,#089bd8)] p-7 shadow-[0_24px_70px_rgba(1,30,85,0.3)] sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-100">
                Need a clearer competitive advantage?
              </p>
              <p className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">
                Let&apos;s benchmark what matters.
              </p>
            </div>
            <QuoteButton
              service="Benchmarking"
              className="inline-flex w-max rounded-lg bg-white px-7 py-4 text-sm font-black text-[#075ee8] transition hover:bg-blue-50"
            >
              Start a conversation
            </QuoteButton>
          </div>
        </section>
      }
    >
      <section className="overflow-hidden bg-[linear-gradient(145deg,#06183d_0%,#08285f_52%,#063d85_100%)] py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 border-b border-cyan-200/20 pb-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#5ed7ff]">
                Evidence before decisions
              </p>
              <h2 className="mt-4 max-w-xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                Our benchmarking process
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#c6dcff] lg:justify-self-end">
              We combine physical models, controlled inspection, and detailed
              teardown analysis to turn competitor observations into measurable,
              practical product improvements.
            </p>
          </div>

          <div className="mt-12 space-y-8 sm:mt-16 sm:space-y-12">
            {benchmarkingStages.map((stage, index) => (
              <article
                key={stage.number}
                className="grid overflow-hidden rounded-2xl border border-cyan-100/15 bg-[#0b2d66]/80 shadow-[0_26px_85px_rgba(0,8,30,0.34)] lg:grid-cols-2 lg:items-stretch"
              >
                <div
                  className={`relative min-h-[280px] bg-[#dcecff] sm:min-h-[400px] ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={stage.image}
                    alt={stage.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className={stage.fit === "contain" ? "object-contain" : "object-cover"}
                  />
                </div>
                <div className="flex min-h-[290px] flex-col justify-center p-7 sm:p-12 lg:p-16">
                  <span className="font-mono text-sm font-bold tracking-[0.2em] text-[#5ed7ff]">
                    STAGE {stage.number}
                  </span>
                  <h3 className="mt-5 text-3xl font-black tracking-[-0.03em] sm:text-4xl">
                    {stage.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-base leading-7 text-[#c6dcff] sm:text-lg sm:leading-8">
                    {stage.description}
                  </p>
                  <div className="mt-8 h-1 w-16 rounded-full bg-[#38d3ff]" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </ServiceDetail>
  );
}
