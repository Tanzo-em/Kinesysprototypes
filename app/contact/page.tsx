import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/site-header";
import { QuoteButton } from "../components/quote-modal";

const address =
  "Shed No 4, Govind Industries, Alandi Road, Charholi, Bhosari, Pune, Pimpri-Chinchwad, Maharashtra 412105";
const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

export const metadata: Metadata = {
  title: "Contact Us | Kinesysprototypes",
  description:
    "Contact Kinesysprototypes in Bhosari, Pune for product design, prototyping, benchmarking, and visualization services.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f5f8ff] text-[#081d46]">
      <SiteHeader />

      <section className="relative overflow-hidden px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(7,94,232,0.15),transparent_32%),linear-gradient(135deg,#f8fbff_0%,#eaf2ff_100%)]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#075ee8]">
            Contact Kinesysprototypes
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.04em] sm:text-6xl">
            Let&apos;s build your next idea.
          </h1>
          <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-[#5f6675]">
            Visit our Pune facility, speak directly with our team, or send your project brief for a fast estimate.
          </p>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 sm:pb-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl bg-white shadow-[0_28px_80px_rgba(7,54,130,0.14)] lg:grid-cols-[0.82fr_1.18fr]">
          <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
            <div>
              <span className="inline-flex rounded-full bg-[#e8f1ff] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#075ee8]">
                Pune Studio
              </span>

              <div className="mt-9 border-b border-[#dce8ff] pb-8">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#7a879d]">
                  Contact person
                </p>
                <h2 className="mt-3 text-2xl font-black">Ashwani Kumar</h2>
                <a
                  href="tel:+918308837348"
                  className="mt-2 inline-flex text-lg font-bold text-[#075ee8] transition hover:text-[#064dbd]"
                >
                  +91 83088 37348
                </a>
              </div>

              <div className="pt-8">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#7a879d]">
                  Address
                </p>
                <address className="mt-3 max-w-md text-base font-semibold not-italic leading-7 text-[#42516a]">
                  {address}
                </address>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                href={directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-[#075ee8] px-6 py-3.5 text-sm font-black text-white transition hover:bg-[#064dbd]"
              >
                Get directions
              </Link>
              <QuoteButton
                className="inline-flex items-center justify-center rounded-lg border border-[#b9cff5] bg-[#eef4ff] px-6 py-3.5 text-sm font-black text-[#075ee8] transition hover:bg-[#dce9ff]"
              >
                Send project brief
              </QuoteButton>
            </div>
          </div>

          <div className="min-h-[390px] bg-[#dce8ff] lg:min-h-[590px]">
            <iframe
              src={mapUrl}
              title="Kinesysprototypes location on Google Maps"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[390px] w-full border-0 lg:min-h-[590px]"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </main>
  );
}
