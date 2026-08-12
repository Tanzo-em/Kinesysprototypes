"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useQuote } from "./quote-modal";

const serviceLinks = [
  { title: "Product Design", href: "/services/product-design" },
  { title: "Benchmarking", href: "/services/benchmarking" },
  { title: "Visualization", href: "/services/visualization" },
];

const navigationLinks = [
  { title: "Expertise", href: "/#expertise" },
  { title: "Imagine", href: "/#imagine" },
  { title: "Industries", href: "/#industries" },
  { title: "Materials", href: "/#materials" },
  { title: "Packages", href: "/#showcase" },
  { title: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openQuote } = useQuote();

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <div className="bg-[#075ee8] px-4 py-2 text-center text-xs font-bold text-white sm:px-5 sm:text-sm">
        Upload your brief for a fast creative estimate
      </div>

      <header className="sticky top-0 z-50 border-b border-[#cbdcfb] bg-[linear-gradient(110deg,rgba(255,255,255,0.96)_0%,rgba(245,248,255,0.96)_45%,rgba(222,233,255,0.94)_100%)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-8 sm:py-4 lg:gap-5 lg:px-10">
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
              className="h-9 w-[54px] rounded-sm object-cover sm:h-12 sm:w-[72px]"
            />
            <span className="flex flex-col text-[#081d46]">
              <span className="text-lg font-black uppercase leading-none tracking-[0.1em] sm:text-2xl sm:tracking-[0.12em]">
                Kinesys
              </span>
              <span className="mt-1 text-[7px] font-extrabold uppercase leading-none tracking-[0.38em] text-[#075ee8] sm:text-[9px] sm:tracking-[0.48em]">
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

          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              onClick={() => openQuote()}
              className="rounded-lg bg-[#075ee8] px-6 py-3 text-sm font-black text-white shadow-[0_10px_25px_rgba(7,94,232,0.24)] transition hover:bg-[#064dbd]"
            >
              Get Quote
            </button>
            <Link
              href="/contact"
              aria-label="Contact Kinesysprototypes"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#081d46] text-lg font-black text-white"
            >
              ?
            </Link>
          </div>

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 rounded-xl border border-[#cbdcfb] bg-white/80 text-[#081d46] lg:hidden"
          >
            <span
              className={`h-0.5 w-5 bg-current transition ${
                mobileMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-current transition ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-current transition ${
                mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="border-t border-[#cbdcfb] bg-white px-4 py-5 shadow-[0_20px_45px_rgba(7,54,130,0.12)] lg:hidden">
            <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-[#075ee8]">
              Services
            </p>
            <div className="grid gap-1">
              {serviceLinks.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  onClick={closeMobileMenu}
                  className="rounded-lg px-3 py-3 text-sm font-bold text-[#243858] transition hover:bg-[#eef4ff] hover:text-[#075ee8]"
                >
                  {service.title}
                </Link>
              ))}
            </div>

            <div className="my-4 h-px bg-[#dce8ff]" />

            <div className="grid grid-cols-2 gap-1">
              {navigationLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="rounded-lg px-3 py-3 text-sm font-bold text-[#243858] transition hover:bg-[#eef4ff] hover:text-[#075ee8]"
                >
                  {link.title}
                </Link>
              ))}
            </div>

            <button
              type="button"
              onClick={() => {
                closeMobileMenu();
                openQuote();
              }}
              className="mt-4 flex w-full items-center justify-center rounded-xl bg-[#075ee8] px-5 py-3.5 text-sm font-black text-white"
            >
              Get Quote
            </button>
          </nav>
        )}
      </header>
    </>
  );
}
