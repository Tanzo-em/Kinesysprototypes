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
  { title: "Join Now", href: "/#join" },
  { title: "Contact", href: "/#contact" },
];

export default function SiteHeader() {
  return (
    <>
      <div className="bg-[#8a4f2a] px-5 py-2 text-center text-sm font-bold text-white">
        Upload your brief for a fast creative estimate
      </div>

      <header className="sticky top-0 z-50 border-b border-[#e8e1d8] bg-white/95 backdrop-blur">
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
            <span className="text-2xl font-black tracking-tight text-[#13233a]">
              Kinesysprototypes
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-bold text-[#4e5668] lg:flex">
            <div className="group relative py-3">
              <Link href="/#services" className="transition hover:text-[#b96b35]">
                Services
              </Link>
              <div className="invisible absolute left-0 top-full w-72 translate-y-3 rounded-sm border border-[#e8e1d8] bg-white py-3 opacity-0 shadow-[0_24px_60px_rgba(22,28,45,0.14)] transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="block border-b border-[#f0e4d7] px-5 py-3 text-[#283042] transition last:border-b-0 hover:bg-[#fbf3e5] hover:text-[#8a4f2a]"
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
                className="transition hover:text-[#b96b35]"
              >
                {link.title}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/#contact"
              className="hidden rounded-sm border border-[#b96b35] px-6 py-3 text-sm font-black text-[#8a4f2a] transition hover:bg-[#b96b35] hover:text-white sm:inline-flex"
            >
              Get Quote
            </Link>
            <Link
              href="/#contact"
              aria-label="Contact Kinesysprototypes"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#13233a] text-lg font-black text-white"
            >
              ?
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
