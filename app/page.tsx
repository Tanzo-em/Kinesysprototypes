import Image from "next/image";
import ImagineProcess from "./components/imagine-process";
import { QuoteButton } from "./components/quote-modal";
import SiteHeader from "./components/site-header";

const heroSlides = [
  {
    title: "Industrial additive manufacturing system",
    image: "/hero/industrial-printer.png",
  },
  {
    title: "Production-ready 3D printed components",
    image: "/hero/printer-in-production.png",
  },
  {
    title: "Precision components inside the printer",
    image: "/hero/printed-components.png",
  },
  {
    title: "Manufactured automotive parts",
    image: "/hero/manufactured-parts.png",
  },
  {
    title: "Automotive prototypes and assemblies",
    image: "/hero/automotive-prototypes.png",
  },
];

const services = [
  {
    title: "Product Design",
    href: "/services/product-design",
    image: "/figma/car-sketch.jpg",
    copy: "We craft intuitive and visually appealing designs that enhance user engagement and align with your brand identity.",
  },
  {
    title: "Benchmarking",
    href: "/services/benchmarking",
    image: "/figma/blue-illustration.jpg",
    copy: "We analyze your product against competitors and industry standards to identify strengths, weaknesses, and opportunities for improvement.",
  },
  {
    title: "Visualization",
    href: "/services/visualization",
    image: "/figma/design-desk.jpg",
    copy: "We create high-quality 3D models, product demo videos, and interactive prototypes to effectively showcase your product's design, features, and functionality.",
  },
];

const industries = [
  "Aerospace",
  "Architecture",
  "Art & Design",
  "Automotive",
  "Cinema & Entertainment",
  "Consumer Products",
  "Defence",
  "Electronics",
  "Fashion & Jewellery",
  "Medical Technology",
  "Robotics & Automation",
  "Toys",
];

const stats = [
  ["30+", "3D printers & machines"],
  ["500+", "Customers"],
  ["12+", "Industries impacted"],
  ["100k+", "Parts printed"],
];

const trustedCompanies = [
  { name: "Wave", logo: "/figma/wave-logo.png", monogram: "" },
  { name: "Litemed", logo: "/figma/litemed-logo.png", monogram: "" },
  { name: "Calidat", logo: "/figma/calidat-logo.png", monogram: "" },
  { name: "VCM", logo: "/figma/vcm-logo.png", monogram: "" },
  { name: "Northstar", logo: "", monogram: "N" },
  { name: "Brightlab", logo: "", monogram: "B" },
];

const strengths = [
  {
    title: "Experienced Team",
    copy: "Engineers and designers guide the project from concept, CAD, and material choice through final production decisions.",
  },
  {
    title: "Quick Quotes",
    copy: "A clear estimation workflow helps move projects forward quickly with the right process and material route.",
  },
  {
    title: "High Quality Work",
    copy: "Parts are planned for fit, finish, accuracy, and manufacturability, with post-processing when the application needs it.",
  },
  {
    title: "DFM Problem Solving",
    copy: "Design-for-manufacturing support helps avoid avoidable tooling, tolerance, and production issues.",
  },
  {
    title: "Timely Delivery",
    copy: "Prototype and manufacturing workflows are planned around practical timelines and clear handoffs.",
  },
];

const materials = [
  {
    process: "FDM 3D Printing",
    items: ["PLA", "ABS", "PETG", "TPU", "ASA", "HIPS", "Nylon", "Carbon Fiber Composite", "Flame Retardant ABS"],
  },
  {
    process: "Resin / SLA / DLP",
    items: ["Standard Resin", "ABS-like Resin", "Castable Resin", "Tough Resin", "High Temperature Resin", "Bio Resin"],
  },
  {
    process: "SLS / Industrial Printing",
    items: ["Nylon PA12", "Glass Filled Nylon", "Flexible Polymer", "Engineering Polymer"],
  },
  {
    process: "Metal / Ceramic Printing",
    items: ["Aluminium", "Stainless Steel", "Titanium", "Alumina", "Zirconia", "Silicon Nitride"],
  },
  {
    process: "CNC Machining",
    items: ["ABS", "Aluminium", "Brass", "Copper", "Delrin", "Mild Steel", "Nylon", "Polycarbonate", "Stainless Steel", "Titanium", "PMMA"],
  },
  {
    process: "Vacuum Casting & Moulding",
    items: ["ABS-like PU", "PC-like PU", "PP-like PU", "Wax", "Rubber", "PMMA", "Glass Filled Material"],
  },
];

const showcase = [
  {
    title: "Prototype Sprint",
    image: "/figma/app-flow.jpg",
    price: "CAD, print, finish, and review",
  },
  {
    title: "Manufacturing Pilot",
    image: "/figma/web-mockup.jpg",
    price: "Short-run parts and DFM checks",
  },
  {
    title: "Material Selection",
    image: "/figma/blue-illustration.jpg",
    price: "Process and material recommendation",
  },
  {
    title: "Production Support",
    image: "/figma/developer.jpg",
    price: "Tooling, fabrication, and finishing",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f8ff] text-[#081d46]">
      <SiteHeader />

      <section className="bg-[linear-gradient(180deg,#edf3ff_0%,#ffffff_100%)] px-5 pb-8 pt-4 sm:px-8 sm:pb-12 sm:pt-6 lg:px-10 lg:pb-16 lg:pt-8">
        <div className="relative mx-auto min-h-[560px] max-w-7xl overflow-hidden rounded-[1.25rem] bg-[#20242a] shadow-[0_30px_90px_rgba(22,28,45,0.22)] sm:min-h-[680px] sm:rounded-[2rem]">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.title}
              className="hero-slide absolute inset-0"
              style={{ animationDelay: `${index * 5}s` }}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                sizes="(min-width: 1280px) 1280px, 100vw"
                className="object-cover object-center"
              />
            </div>
          ))}

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,12,18,0.9)_0%,rgba(8,12,18,0.7)_42%,rgba(8,12,18,0.2)_75%,rgba(8,12,18,0.1)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(8,12,18,0.45),transparent_45%)]" />

          <div className="relative z-10 flex min-h-[560px] max-w-2xl flex-col justify-center px-6 py-12 sm:min-h-[680px] sm:px-12 sm:py-16 lg:px-16">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.2em] text-[#78a9ff]">
              Home
            </p>
            <h1 className="section-title max-w-xl text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Transform your ideas into reality
            </h1>
            <p className="mt-5 max-w-xl text-base font-semibold leading-7 text-white/85 sm:mt-6 sm:text-xl sm:leading-8">
              From 3D printing and prototyping to full-scale manufacturing in
              Pune, Tesseract is your product development partner.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <QuoteButton
                className="rounded-lg bg-[#075ee8] px-9 py-4 text-center text-base font-black text-white shadow-[0_16px_36px_rgba(7,94,232,0.3)] transition hover:bg-[#064dbd]"
              >
                Get Quote
              </QuoteButton>
              <a
                href="#services"
                className="rounded-sm border border-white/60 bg-white/10 px-9 py-4 text-center text-base font-black text-white backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-[#13233a]"
              >
                See Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="expertise" className="bg-[linear-gradient(180deg,#ffffff_0%,#f3f7ff_100%)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#075ee8]">
                From insight to production
              </p>
              <h2 className="section-title mt-3 text-4xl font-black tracking-tight text-[#081d46] sm:text-5xl">
                Our <span className="text-[#075ee8]">Expertise</span>
              </h2>
              <p className="mt-6 text-base font-medium leading-8 text-[#5f6675]">
                We support product teams from concept to creation with design,
                prototyping, 3D printing, manufacturing, and finishing workflows.
                Our team helps choose the right process, material, and production
                route for each application.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {["Product strategy", "Rapid prototyping", "Production support"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#c5d8fa] bg-white px-4 py-2 text-xs font-black text-[#315f9e]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href="#services"
                className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-[#081d46] px-8 py-4 text-sm font-black text-white shadow-[0_14px_30px_rgba(8,29,70,0.16)] transition hover:bg-[#075ee8] sm:w-max"
              >
                Explore our capabilities
              </a>
            </div>

            <div className="relative min-h-[340px] overflow-hidden rounded-3xl border border-[#cbdcfb] bg-[#dce8ff] shadow-[0_24px_70px_rgba(7,54,130,0.16)] sm:min-h-[520px]">
              <Image
                src="/figma/expertise-studio.png"
                alt="Industrial product design studio with CAD, prototypes, and engineering tools"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(8,29,70,0.58)_100%)]" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/25 bg-[#081d46]/80 p-5 text-white backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-auto sm:max-w-sm">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8ab4ff]">
                  Integrated workflow
                </p>
                <p className="mt-2 text-lg font-black">
                  Research, design, prototype, validate, and manufacture.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-4 sm:gap-5">
            {stats.map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-[#d6e3fa] bg-white p-5 shadow-[0_10px_28px_rgba(7,54,130,0.06)] sm:p-6"
              >
                <p className="text-3xl font-black text-[#075ee8] sm:text-4xl">{value}</p>
                <p className="mt-2 text-[11px] font-black uppercase leading-5 tracking-[0.12em] text-[#526784] sm:text-xs">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="imagine" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <ImagineProcess />
        </div>
      </section>

      <section id="services" className="bg-[#edf3ff] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <h2 className="section-title text-center text-4xl font-black tracking-tight sm:text-5xl">
            What <span className="text-[#075ee8]">We Do</span>
          </h2>
          <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
            {services.map((service) => (
              <a
                key={service.title}
                href={service.href}
                className="service-card group overflow-hidden rounded-xl bg-white shadow-[0_10px_34px_rgba(7,54,130,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(7,94,232,0.16)]"
              >
                <div className="relative aspect-[1.35] bg-[#e4ded4]">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,20,34,0.02),rgba(14,20,34,0.36))]" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black text-[#081d46] transition group-hover:text-[#075ee8]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-[#606a7a]">
                    {service.copy}
                  </p>
                  <span className="mt-5 inline-flex text-sm font-black text-[#075ee8]">
                    Know more -&gt;
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#075ee8]">
              Where we create impact
            </p>
            <h2 className="section-title mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Industries <span className="text-[#075ee8]">& Applications</span>
            </h2>
            <p className="mt-5 text-base font-medium leading-7 text-[#5f6675]">
              Cross-industry design and manufacturing support for products that
              need thoughtful engineering, reliable performance, and clear execution.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {industries.map((industry, index) => (
              <div
                key={industry}
                className="group relative overflow-hidden rounded-2xl border border-[#d6e3fa] bg-[linear-gradient(135deg,#ffffff_0%,#f3f7ff_100%)] p-5 shadow-[0_10px_30px_rgba(7,54,130,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#8ab4ff] hover:shadow-[0_20px_45px_rgba(7,94,232,0.12)]"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e2ecff] text-sm font-black text-[#075ee8] transition group-hover:bg-[#075ee8] group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg font-black text-[#081d46] transition group-hover:text-[#075ee8]">
                    {industry}
                  </span>
                </div>
                <span className="absolute -bottom-8 -right-8 h-20 w-20 rounded-full bg-[#dce8ff]/70 transition duration-300 group-hover:scale-150" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#edf3ff] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#075ee8]">
              Why work with us
            </p>
            <h2 className="section-title mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Our <span className="text-[#075ee8]">USPs</span>
            </h2>
            <p className="mt-5 text-base font-medium leading-7 text-[#5f6675]">
              Practical advantages that keep projects clear, production-aware,
              and moving toward a high-quality result.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {strengths.map((item, index) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-white/80 bg-white p-6 shadow-[0_12px_34px_rgba(7,54,130,0.07)] transition duration-300 hover:-translate-y-1.5 hover:border-[#b8cff8] hover:shadow-[0_24px_60px_rgba(7,94,232,0.14)]"
              >
                <div className="mb-7 flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e2ecff] text-lg font-black text-[#075ee8] transition group-hover:bg-[#075ee8] group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-[linear-gradient(90deg,#b8cff8,transparent)]" />
                </div>
                <h3 className="text-xl font-black text-[#081d46]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-6 text-[#606a7a]">
                  {item.copy}
                </p>
                <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[#075ee8] transition-transform duration-300 group-hover:scale-x-100" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <h2 className="section-title text-center text-4xl font-black tracking-tight">
            Trusted <span className="text-[#075ee8]">By</span>
          </h2>
        </div>

        <div className="relative mt-10 overflow-hidden border-y border-[#dce8ff] bg-[#f5f8ff] py-5 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="trusted-marquee flex w-max">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1}
                className="flex shrink-0 gap-5 pr-5"
              >
                {trustedCompanies.map((company) => (
                  <div
                    key={`${copy}-${company.name}`}
                    className="flex h-28 w-72 shrink-0 items-center justify-center gap-5 rounded-xl border border-[#cbdcfb] bg-white px-7 shadow-[0_8px_24px_rgba(7,54,130,0.07)]"
                  >
                    {company.logo ? (
                      <Image
                        src={company.logo}
                        alt={`${company.name} logo`}
                        width={120}
                        height={60}
                        className="h-14 w-28 object-contain"
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#075ee8] text-2xl font-black text-white"
                      >
                        {company.monogram}
                      </span>
                    )}
                    <span className="text-lg font-black text-[#243858]">
                      {company.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="materials" className="bg-[#edf3ff] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#075ee8]">
              Built for the right process
            </p>
            <h2 className="section-title mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Materials <span className="text-[#075ee8]">We Offer</span>
            </h2>
            <p className="font-ui mt-5 text-base font-semibold leading-7 text-[#5f6675]">
              Process-specific material options for prototyping, machining,
              casting, moulding, and production applications.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {materials.map((group, index) => (
              <article
                key={group.process}
                className="group rounded-2xl border border-[#cbdcfb] bg-[linear-gradient(145deg,#ffffff_0%,#f8faff_100%)] p-6 shadow-[0_10px_30px_rgba(7,54,130,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#8ab4ff] hover:shadow-[0_22px_50px_rgba(7,94,232,0.12)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-black text-[#081d46] transition group-hover:text-[#075ee8]">
                    {group.process}
                  </h3>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#075ee8] text-sm font-black text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-[#7a8ba8]">
                  {group.items.length} material options
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#c5d8fa] bg-[#eef4ff] px-3 py-2 text-xs font-bold text-[#315f9e] transition group-hover:border-[#9dbcf3] group-hover:bg-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="showcase" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="section-title text-4xl font-black tracking-tight sm:text-5xl">
              Build With <span className="text-[#075ee8]">Kinesysprototypes</span>
            </h2>
            <QuoteButton
              service="Other"
              className="font-ui w-max rounded-lg bg-[#081d46] px-7 py-4 text-sm font-black text-white transition hover:bg-[#075ee8]"
            >
              Request package
            </QuoteButton>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {showcase.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-lg border border-[#cbdcfb] bg-white shadow-[0_12px_34px_rgba(7,54,130,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(7,94,232,0.14)]"
              >
                <div className="relative aspect-[1.1] bg-[#e9e4dc]">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-black text-[#13233a]">
                    {item.title}
                  </h3>
                  <p className="font-ui mt-3 text-sm font-bold text-[#657083]">
                    {item.price}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#13233a] py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:items-center">
          <div>
            <p className="font-ui text-sm font-black uppercase tracking-[0.22em] text-[#78a9ff]">
              Get a quote
            </p>
            <h2 className="section-title mt-4 text-4xl font-black leading-tight sm:text-5xl">
              Ready to turn the next idea into a manufactured product?
            </h2>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <h3 className="text-2xl font-black">Share your requirements</h3>
            <p className="mt-3 max-w-xl text-sm font-medium leading-6 text-[#c8d5e8]">
              Tell us about the service, material, quantity, timeline, and attach
              your CAD model or reference file. Your request will be sent directly
              to our team for review.
            </p>
            <QuoteButton className="mt-7 flex w-full items-center justify-center rounded-xl bg-[#075ee8] px-7 py-4 text-sm font-black text-white transition hover:bg-[#176ff3] sm:w-max">
              Open quote form
            </QuoteButton>
          </div>
        </div>
      </section>

      <footer className="bg-[#0c1727] px-5 py-8 text-sm font-bold text-[#aeb7c8] sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row md:items-center">
          <p>© 2026 Kinesysprototypes. Product design, prototyping, and manufacturing support.</p>
          <div className="flex gap-5">
            <a href="#services" className="hover:text-white">
              Services
            </a>
            <a href="#industries" className="hover:text-white">
              Industries
            </a>
            <a href="#materials" className="hover:text-white">
              Materials
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
