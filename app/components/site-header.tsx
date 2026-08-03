import Image from "next/image";
import Link from "next/link";

const serviceLinks = [
  { title: "Product Design", href: "/services/product-design" },
  { title: "Benchmarking", href: "/services/benchmarking" },
  { title: "Visualization", href: "/services/visualization" },
];

const navigationLinks = [
  { title: "Expertise", href: "/#expertise" },
  { title: "IMAGINE", href: "/#imagine" },
  { title: "Industries", href: "/#industries" },
  { title: "Materials", href: "/#materials" },
  { title: "Packages", href: "/#showcase" },
  { title: "Contact", href: "/#contact" },
];

export default function SiteHeader() {
  return (
    <>
      <div className="bg-[#075ee8] px-5 py-2 text-center text-sm font-bold text-white">
        Upload your brief for a fast creative estimate
      </div>

      <header className="sticky top-0 z-50 border-b border-[#cbdcfb] bg-[linear-gradient(110deg,rgba(255,255,255,0.96)_0%,rgba(245,248,255,0.96)_45%,rgba(222,233,255,0.94)_100%)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-10">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="Kinesysprototypes home"
          >
            <Image
              src="/kinesysprototypes-logo.png"
              alt="Kinesysprototypes logo"
              width={72}
              height={48}
              priority
              className="h-12 w-[72px] rounded-sm object-cover"
            />
            <span className="flex flex-col text-[#081d46]">
              <span className="text-2xl font-black uppercase leading-none tracking-[0.12em]">
                Kinesys
              </span>
              <span className="mt-1 text-[9px] font-extrabold uppercase leading-none tracking-[0.48em] text-[#075ee8]">
                Prototypes
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-bold text-[#243858] lg:flex">
            <div className="group relative py-3">
              <Link href="/#services" className="transition hover:text-[#075ee8]">
                Services
              </Link>
              <div className="invisible absolute left-0 top-full w-72 translate-y-3 rounded-sm border border-[#cbdcfb] bg-white py-3 opacity-0 shadow-[0_24px_60px_rgba(7,54,130,0.14)] transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="block border-b border-[#e3ebfb] px-5 py-3 text-[#243858] transition last:border-b-0 hover:bg-[#eef4ff] hover:text-[#075ee8]"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            {navigationLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="transition hover:text-[#075ee8]"
              >
                {link.title}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/#contact"
              className="hidden rounded-lg bg-[#075ee8] px-6 py-3 text-sm font-black text-white shadow-[0_10px_25px_rgba(7,94,232,0.24)] transition hover:bg-[#064dbd] sm:inline-flex"
            >
              Get Quote
            </Link>
            <Link
              href="/#contact"
              aria-label="Contact Kinesysprototypes"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#081d46] text-lg font-black text-white"
            >
              ?
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
