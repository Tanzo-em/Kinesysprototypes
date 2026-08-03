import Image from "next/image";
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

const imagineIndustries = [
  {
    title: "Automotive",
    copy: "Driving innovation on the road with automotive clients to design intuitive applications, streamlined in-car experiences, and connected journeys.",
  },
  {
    title: "Health Care",
    copy: "Partnering with healthcare providers to create user-centric applications that improve patient experiences, streamline workflows, and empower better care.",
    active: true,
  },
  {
    title: "Toy Industry",
    copy: "Helping toy companies create engaging applications that bring ideas to life, spark imagination, and fuel a world of interactive play.",
  },
  {
    title: "Entertainment",
    copy: "Working with entertainment clients to design engaging applications that connect audiences with content and fuel immersive experiences.",
  },
];

const imagineStages = [
  {
    number: 1,
    title: "Investigate",
    copy: "Understand the problem and target users.",
  },
  {
    number: 2,
    title: "Map",
    copy: "Define project goals and objectives.",
  },
  {
    number: 3,
    title: "Architect",
    copy: "Generate ideas and create prototypes.",
  },
  {
    number: 4,
    title: "Generate",
    copy: "Build the product or service.",
  },
  {
    number: 5,
    title: "Integrate",
    copy: "Launch the product or service.",
  },
  {
    number: 6,
    title: "Nurture",
    copy: "Monitor and improve the product or service.",
  },
  {
    number: 7,
    title: "Evolve",
    copy: "Continuously adapt and improve the product or service.",
  },
];

const stats = [
  ["30+", "3D printers & machines"],
  ["500+", "Customers"],
  ["12+", "Industries impacted"],
  ["100k+", "Parts printed"],
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
    <main className="min-h-screen bg-[#fbf3e5] text-[#161c2d]">
      <SiteHeader />

      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#f3eadc]">
        <div className="relative h-[500px] w-screen overflow-hidden bg-[#20242a] shadow-[0_24px_70px_rgba(22,28,45,0.18)] sm:h-[480px] lg:h-[460px]">
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
                className="object-cover object-top"
              />
            </div>
          ))}

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,12,18,0.9)_0%,rgba(8,12,18,0.7)_42%,rgba(8,12,18,0.2)_75%,rgba(8,12,18,0.1)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(8,12,18,0.45),transparent_45%)]" />

          <div className="relative z-10 flex h-full max-w-2xl flex-col justify-center px-7 py-10 sm:px-12 lg:px-16">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.2em] text-[#f0a36f]">
              Home
            </p>
            <h1 className="section-title max-w-xl text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl">
              Transform your ideas into reality
            </h1>
            <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-white/85 sm:text-xl">
              From 3D printing and prototyping to full-scale manufacturing in
              Pune, Tesseract is your product development partner.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="rounded-sm bg-[#b96b35] px-9 py-4 text-center text-base font-black text-white shadow-[0_16px_36px_rgba(185,107,53,0.3)] transition hover:bg-[#8a4f2a]"
              >
                Get Quote
              </a>
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

      <section id="expertise" className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <div className="relative min-h-[460px] overflow-hidden rounded-sm bg-[#e9e4dc]">
            <Image
              src="/figma/design-desk.jpg"
              alt="Design desk with creative materials"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="section-title text-5xl font-black tracking-tight text-[#13233a]">
              Our <span className="text-[#b96b35]">Expertise</span>
            </h2>
            <p className="mt-7 text-base font-semibold leading-8 text-[#5f6675]">
              We support product teams from concept to creation with design,
              prototyping, 3D printing, manufacturing, and finishing workflows.
              Our team helps choose the right process, material, and production
              route for each application.
            </p>
            <a
              href="#services"
              className="font-ui mt-9 inline-flex w-full max-w-xs items-center justify-center rounded-sm bg-[#13233a] px-8 py-4 text-sm font-black text-white transition hover:bg-[#b96b35]"
            >
              Know more
            </a>

            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-9">
              {stats.map(([value, label]) => (
                <div key={label}>
                  <p className="font-ui text-6xl font-black text-[#b96b35]">{value}</p>
                  <p className="font-ui mt-2 text-sm font-black uppercase tracking-[0.16em] text-[#13233a]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="imagine" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <h2 className="font-ui text-center text-3xl font-black tracking-wide text-[#303030]">
            Our Patented <span className="text-[#1f5edb]">IMAGINE</span> Process
          </h2>
          <p className="font-ui mx-auto mt-4 max-w-3xl text-center text-sm font-semibold leading-6 text-[#666]">
            The IMAGINE Design Process is a human-centered approach that turns
            user needs into products and services through continuous improvement.
          </p>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.7fr_1.6fr_0.7fr] lg:gap-6">
            <div className="grid gap-7 sm:grid-cols-3 lg:grid-cols-1">
              {imagineStages.slice(0, 3).map((stage) => (
                <article key={stage.number} className="font-ui">
                  <h3 className="text-xl font-black text-[#303030]">
                    <span className="text-[#1f5edb]">{stage.number}.</span>{" "}
                    {stage.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold leading-5 text-[#666]">
                    {stage.copy}
                  </p>
                </article>
              ))}
            </div>

            <div className="relative mx-auto aspect-[2.1] w-full max-w-[820px]">
              <svg
                viewBox="0 0 820 390"
                className="h-full w-full"
                role="img"
                aria-label="IMAGINE process infinity diagram"
              >
                <title>Seven-stage IMAGINE design process</title>
                <desc>
                  A continuous infinity loop showing the seven stages of the
                  IMAGINE design process, with Investigate highlighted as stage one.
                </desc>
                <path
                  d="M70 195 C70 100 125 55 205 55 C295 55 345 140 410 195 C475 250 525 335 615 335 C695 335 750 290 750 195 C750 100 695 55 615 55 C525 55 475 140 410 195 C345 250 295 335 205 335 C125 335 70 290 70 195"
                  fill="none"
                  stroke="#88a9ed"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="34"
                />
                <path
                  d="M316.875 285.625 C285 313.75 250 335 205 335 C157 335 118 318.8 94.48 285.32"
                  fill="none"
                  stroke="#1f5edb"
                  strokeLinecap="butt"
                  strokeLinejoin="round"
                  strokeWidth="34"
                />
                <g fill="#fff" textAnchor="middle" dominantBaseline="middle" className="font-ui text-[14px] font-black">
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

            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-1">
              {imagineStages.slice(3).map((stage) => (
                <article key={stage.number} className="font-ui">
                  <h3 className="text-xl font-black text-[#303030]">
                    <span className="text-[#1f5edb]">{stage.number}.</span>{" "}
                    {stage.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold leading-5 text-[#666]">
                    {stage.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <h3 className="font-ui mt-16 text-center text-3xl font-black tracking-wide text-[#303030]">
            Designing for Diverse <span className="text-[#1f5edb]">Industries</span>
          </h3>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {imagineIndustries.map((industry) => (
              <article
                key={industry.title}
                className={`p-4 ${
                  industry.active ? "bg-[#f2f2f2]" : "bg-white"
                }`}
              >
                <h4
                  className={`font-ui border-b pb-1 text-base font-black ${
                    industry.active
                      ? "border-[#1f5edb] text-[#1f5edb]"
                      : "border-[#303030] text-[#303030]"
                  }`}
                >
                  {industry.title}
                </h4>
                <p className="font-ui mt-3 text-xs font-semibold leading-5 text-[#666]">
                  {industry.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#fbf3e5] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <h2 className="section-title text-center text-5xl font-black tracking-tight">
            What <span className="text-[#b96b35]">We Do</span>
          </h2>
          <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
            {services.map((service) => (
              <a
                key={service.title}
                href={service.href}
                className="service-card group overflow-hidden rounded-sm bg-white shadow-[0_10px_34px_rgba(22,28,45,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(185,107,53,0.14)]"
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
                  <h3 className="text-2xl font-black text-[#13233a] transition group-hover:text-[#8a4f2a]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-[#606a7a]">
                    {service.copy}
                  </p>
                  <span className="mt-5 inline-flex text-sm font-black text-[#8a4f2a]">
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
          <h2 className="section-title text-center text-5xl font-black tracking-tight">
            Industries <span className="text-[#b96b35]">& Applications</span>
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="font-ui rounded-sm border border-[#e7d3bd] bg-[#fbf3e5] px-5 py-6 text-center text-lg font-black text-[#13233a] transition hover:border-[#b96b35] hover:text-[#8a4f2a]"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf3e5] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <h2 className="section-title text-center text-5xl font-black tracking-tight">
            USPs
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            {strengths.map((item) => (
              <article
                key={item.title}
                className="rounded-sm bg-white p-6 shadow-[0_12px_34px_rgba(22,28,45,0.07)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(185,107,53,0.12)]"
              >
                <div className="mb-6 h-20 rounded-sm bg-[#f5dfc8]" />
                <h3 className="text-xl font-black text-[#13233a]">
                  {item.title}
                </h3>
                <p className="font-ui mt-4 text-sm font-semibold leading-6 text-[#606a7a]">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <h2 className="section-title text-center text-4xl font-black tracking-tight">
            Trusted <span className="text-[#b96b35]">By</span>
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {["Wave", "Litemed", "Calidat", "Northstar", "Brightlab"].map((name) => (
              <div
                key={name}
                className="font-ui flex h-24 items-center justify-center rounded-sm border border-[#e7d3bd] bg-[#fbf3e5] text-xl font-black text-[#657083] transition hover:border-[#b96b35] hover:text-[#8a4f2a]"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="materials" className="bg-[#fbf3e5] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-title text-5xl font-black tracking-tight">
              Materials <span className="text-[#b96b35]">We Offer</span>
            </h2>
            <p className="font-ui mt-5 text-base font-semibold leading-7 text-[#5f6675]">
              Process-specific material options for prototyping, machining,
              casting, moulding, and production applications.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {materials.map((group) => (
              <article
                key={group.process}
                className="rounded-sm border border-[#e7d3bd] bg-white p-6 shadow-[0_10px_30px_rgba(22,28,45,0.06)]"
              >
                <h3 className="text-2xl font-black text-[#13233a]">
                  {group.process}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="font-ui rounded-full border border-[#ebc9a8] bg-[#fff6ea] px-3 py-2 text-xs font-black text-[#8a4f2a]"
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
            <h2 className="section-title text-5xl font-black tracking-tight">
              Build With <span className="text-[#b96b35]">Kinesysprototypes</span>
            </h2>
            <a
              href="#contact"
              className="font-ui w-max rounded-sm bg-[#13233a] px-7 py-4 text-sm font-black text-white transition hover:bg-[#b96b35]"
            >
              Request package
            </a>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {showcase.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-sm border border-[#e7d3bd] bg-white shadow-[0_12px_34px_rgba(22,28,45,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(185,107,53,0.12)]"
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

      <section id="join" className="bg-white py-16 sm:py-24">
        <div className="relative mx-auto min-h-[360px] max-w-7xl overflow-hidden bg-[#d8dde3]">
          <div className="absolute inset-y-0 right-0 hidden w-[78%] md:block">
            <Image
              src="/figma/join-design-revolution.png"
              alt="Designer sitting with tablet on a couch"
              fill
              sizes="(min-width: 768px) 78vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative z-10 flex min-h-[360px] max-w-sm flex-col justify-center px-8 py-12 sm:px-12">
            <h2 className="font-ui text-3xl font-black tracking-wide text-[#303030]">
              <span className="text-[#1f5edb]">Join</span> the Design Revolution
            </h2>
            <p className="font-ui mt-5 text-sm font-semibold leading-6 text-[#6b6b6b]">
              Imagine a career where creativity meets collaboration. Kinesysprototypes
              has openings for design rockstars. Join us and shape the future of
              design.
            </p>
            <a
              href="#contact"
              className="font-ui mt-5 w-max rounded-sm bg-[#1f5edb] px-5 py-3 text-sm font-black text-white transition hover:bg-[#174bb0]"
            >
              Join Now
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#13233a] py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:items-center">
          <div>
            <p className="font-ui text-sm font-black uppercase tracking-[0.22em] text-[#b96b35]">
              Get a quote
            </p>
            <h2 className="section-title mt-4 text-5xl font-black leading-tight">
              Ready to turn the next idea into a manufactured product?
            </h2>
          </div>
          <form className="grid gap-4 rounded-sm bg-white p-6 text-[#13233a] sm:grid-cols-2">
            <input
              aria-label="Name"
              placeholder="Name"
              className="rounded-sm border border-[#ddd7cd] px-4 py-4 text-sm font-bold outline-none focus:border-[#8a4f2a]"
            />
            <input
              aria-label="Email"
              placeholder="Email"
              className="rounded-sm border border-[#ddd7cd] px-4 py-4 text-sm font-bold outline-none focus:border-[#8a4f2a]"
            />
            <input
              aria-label="Phone"
              placeholder="Phone"
              className="rounded-sm border border-[#ddd7cd] px-4 py-4 text-sm font-bold outline-none focus:border-[#8a4f2a]"
            />
            <input
              aria-label="Project type"
              placeholder="Project type"
              className="rounded-sm border border-[#ddd7cd] px-4 py-4 text-sm font-bold outline-none focus:border-[#8a4f2a]"
            />
            <textarea
              aria-label="Message"
              placeholder="Tell us what you want to build"
              className="min-h-32 rounded-sm border border-[#ddd7cd] px-4 py-4 text-sm font-bold outline-none focus:border-[#8a4f2a] sm:col-span-2"
            />
            <button
              type="button"
              className="font-ui rounded-sm bg-[#b96b35] px-7 py-4 text-sm font-black text-white transition hover:bg-[#8a4f2a] sm:col-span-2"
            >
              Send enquiry
            </button>
          </form>
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
