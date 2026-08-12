import Image from "next/image";
import type { ReactNode } from "react";
import SiteHeader from "../components/site-header";
import { QuoteButton } from "../components/quote-modal";

type ServiceDetailProps = {
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
  compactHero?: boolean;
  hideDeliverables?: boolean;
  deliverables: string[];
  children?: ReactNode;
  footer?: ReactNode;
};

export default function ServiceDetail({
  title,
  eyebrow,
  description,
  image,
  imageAlt,
  imageFit = "cover",
  compactHero = false,
  hideDeliverables = false,
  deliverables,
  children,
  footer,
}: ServiceDetailProps) {
  return (
    <main className="min-h-screen bg-[#f5f8ff] text-[#081d46]">
      <SiteHeader />

      <section
        className={`mx-auto grid max-w-7xl gap-7 px-5 sm:gap-10 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 ${
          compactHero ? "py-7 lg:py-12" : "py-10 lg:py-24"
        }`}
      >
        <div className="flex flex-col justify-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#075ee8]">
            {eyebrow}
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:mt-4 sm:text-6xl">
            {title}
          </h1>
          <p className="mt-4 max-w-xl text-base font-medium leading-7 text-[#5f6675] sm:mt-6 sm:text-lg sm:leading-8">
            {description}
          </p>
          <QuoteButton
            service={title}
            className="mt-8 inline-flex w-max rounded-lg bg-[#075ee8] px-8 py-4 text-sm font-black text-white transition hover:bg-[#064dbd]"
          >
            Discuss your project
          </QuoteButton>
        </div>

        <div
          className={`relative overflow-hidden rounded-sm bg-[#e4ded4] shadow-[0_24px_70px_rgba(22,28,45,0.14)] ${
            compactHero
              ? "min-h-[220px] sm:min-h-[360px]"
              : "min-h-[280px] sm:min-h-[520px]"
          }`}
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 55vw, 100vw"
            className={imageFit === "contain" ? "object-contain" : "object-cover"}
          />
        </div>
      </section>

      {children}

      {!hideDeliverables && (
        <section className="bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <h2 className="text-3xl font-black tracking-tight">What we can deliver</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {deliverables.map((deliverable) => (
                <div
                  key={deliverable}
                  className="rounded-lg border border-[#cbdcfb] bg-[#eef4ff] p-6 text-base font-bold text-[#243858]"
                >
                  {deliverable}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {footer}
    </main>
  );
}
