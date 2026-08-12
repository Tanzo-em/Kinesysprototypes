export default function SiteFooter() {
  return (
    <footer className="bg-[#0c1727] px-5 py-5 text-xs font-semibold text-[#aeb7c8] sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-2 text-center sm:text-left md:grid-cols-[1fr_auto] md:items-center md:gap-x-8">
        <p>
          © 2026 Kinesysprototypes. Product design, prototyping, and manufacturing support.
        </p>
        <div className="grid items-center justify-center gap-1 sm:flex sm:flex-wrap sm:gap-x-4 md:justify-end">
          <a href="tel:+918308837348" className="transition hover:text-white">
            +91 83088 37348
          </a>
          <a
            href="mailto:ashwanikumar.tiku@gmail.com"
            className="transition hover:text-white"
          >
            ashwanikumar.tiku@gmail.com
          </a>
          <span>Pune, Maharashtra</span>
        </div>
      </div>
    </footer>
  );
}
