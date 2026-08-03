import Image from "next/image";
import Link from "next/link";

type ServiceDetailProps = {
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  imageAlt: string;
  deliverables: string[];
};

export default function ServiceDetail({
  title,
  eyebrow,
  description,
  image,
  imageAlt,
  deliverables,
}: ServiceDetailProps) {
  return (
    <main className="min-h-screen bg-[#fbf3e5] text-[#13233a]">
      <header className="border-b border-[#e8e1d8] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <Link href="/" className="text-xl font-black tracking-tight">
            Kinesysprototypes
          </Link>
          <Link
            href="/#services"
            className="text-sm font-bold text-[#8a4f2a] transition hover:text-[#13233a]"
          >
            Back to services
          </Link>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-24">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b96b35]">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-5xl font-black tracking-[-0.04em] sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-lg font-medium leading-8 text-[#5f6675]">
            {description}
          </p>
          <Link
            href="/#contact"
            className="mt-8 inline-flex w-max rounded-sm bg-[#b96b35] px-8 py-4 text-sm font-black text-white transition hover:bg-[#8a4f2a]"
          >
            Discuss your project
          </Link>
        </div>

        <div className="relative min-h-[360px] overflow-hidden rounded-sm bg-[#e4ded4] shadow-[0_24px_70px_rgba(22,28,45,0.14)] sm:min-h-[520px]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <h2 className="text-3xl font-black tracking-tight">What we can deliver</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((deliverable) => (
              <div
                key={deliverable}
                className="border border-[#e7d3bd] bg-[#fbf3e5] p-6 text-base font-bold text-[#303744]"
              >
                {deliverable}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
