import type { Metadata } from "next";
import Image from "next/image";
import { QuoteButton } from "../../components/quote-modal";
import ServiceDetail from "../service-detail";

export const metadata: Metadata = {
  title: "Product Design | Kinesysprototypes",
  description: "Human-centered product design services from concept to production-ready definition.",
};

export default function ProductDesignPage() {
  const processSteps = [
    {
      number: "01",
      title: "Explore the idea",
      description:
        "We begin with rapid sketches to study proportion, usability, character, and multiple directions before committing to a single concept.",
      image: "/product-design/concept-sketching.png",
      alt: "A collection of scooter concept sketches exploring form and proportions",
    },
    {
      number: "02",
      title: "Define colour and character",
      description:
        "Selected concepts are developed through colour, material and finish studies. This is where the product gains a distinct visual identity.",
      image: "/product-design/cmf-design.png",
      alt: "Scooter colour, material and finish design variations",
    },
    {
      number: "03",
      title: "Build the digital form",
      description:
        "The chosen direction becomes a precise 3D surface model. Packaging, ergonomics and engineering requirements are resolved together.",
      image: "/product-design/cas-modeling.png",
      alt: "CAS modeling examples showing vehicle interior and exterior surfaces",
    },
    {
      number: "04",
      title: "Refine for production",
      description:
        "Class-A surfacing perfects highlights, reflections and panel continuity, creating high-quality geometry ready for engineering and manufacture.",
      image: "/product-design/class-a-modeling.png",
      alt: "Class-A automotive surface modeling and reflection analysis",
    },
  ];

  return (
    <ServiceDetail
      title="Product Design"
      eyebrow="Design with purpose"
      description="We turn early ideas into intuitive, visually compelling products. Our process balances user needs, brand identity, usability, and manufacturability so every design is ready for meaningful testing and development."
      image="/figma/car-sketch.jpg"
      imageAlt="Automotive product design sketch"
      compactHero
      compactDeliverables
      deliverables={[
        "User and product research",
        "Concept exploration",
        "Industrial design development",
        "CAD-ready design direction",
        "Design-for-manufacturing review",
        "Prototype planning",
      ]}
      footer={
        <section className="bg-[#071a3d] px-5 pb-16 sm:px-8 sm:pb-24 lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-2xl bg-[#0b5de8] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-100">
                Have a product idea?
              </p>
              <p className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">
                Let&apos;s shape it into something real.
              </p>
            </div>
            <QuoteButton
              service="Product Design"
              className="inline-flex w-max rounded-lg bg-white px-7 py-4 text-sm font-black text-[#075ee8] transition hover:bg-blue-50"
            >
              Start a conversation
            </QuoteButton>
          </div>
        </section>
      }
    >
      <section className="overflow-hidden bg-[#071a3d] py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 border-b border-white/15 pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#65a6ff]">
                From first line to final surface
              </p>
              <h2 className="mt-4 max-w-xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                Our product design process
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#b9c9e6] lg:justify-self-end">
              A focused, collaborative path that turns an early idea into a
              compelling, buildable product—with decisions tested at every stage.
            </p>
          </div>

          <div className="mt-12 space-y-8 sm:mt-16 sm:space-y-12">
            {processSteps.map((step, index) => (
              <article
                key={step.number}
                className="grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] shadow-[0_24px_80px_rgba(0,0,0,0.22)] lg:grid-cols-2 lg:items-stretch"
              >
                <div
                  className={`relative min-h-[260px] bg-white sm:min-h-[380px] ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>
                <div className="flex min-h-[300px] flex-col justify-center p-7 sm:p-12 lg:p-16">
                  <span className="font-mono text-sm font-bold tracking-[0.2em] text-[#65a6ff]">
                    STEP {step.number}
                  </span>
                  <h3 className="mt-5 text-3xl font-black tracking-[-0.03em] sm:text-4xl">
                    {step.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-base leading-7 text-[#c7d4eb] sm:text-lg sm:leading-8">
                    {step.description}
                  </p>
                  <div className="mt-8 h-1 w-16 rounded-full bg-[#f59e0b]" />
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>
    </ServiceDetail>
  );
}
