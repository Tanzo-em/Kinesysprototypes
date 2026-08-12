"use client";

import {
  createContext,
  type FormEvent,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const MAX_FILE_SIZE = 25 * 1024 * 1024;
const ACCEPTED_FILE_TYPES = ".stl,.step,.stp,.iges,.igs,.obj,.png,.jpg,.jpeg";

const serviceOptions = [
  "Product Design",
  "Benchmarking",
  "Visualization",
  "3D Printing",
  "3D Scanning & Reverse Engineering",
  "CNC Machining",
  "Vacuum Casting",
  "Injection Moulding",
  "Other",
];

type QuoteContextValue = {
  openQuote: (service?: string) => void;
  closeQuote: () => void;
};

const QuoteContext = createContext<QuoteContextValue | null>(null);

export function useQuote() {
  const context = useContext(QuoteContext);

  if (!context) throw new Error("useQuote must be used inside QuoteProvider");

  return context;
}

type QuoteButtonProps = {
  children: ReactNode;
  className?: string;
  service?: string;
};

export function QuoteButton({ children, className, service }: QuoteButtonProps) {
  const { openQuote } = useQuote();

  return (
    <button type="button" onClick={() => openQuote(service)} className={className}>
      {children}
    </button>
  );
}

export default function QuoteProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Product Design");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const openQuote = (service?: string) => {
    setSelectedService(
      service && serviceOptions.includes(service) ? service : "Product Design",
    );
    setStatus("idle");
    setMessage("");
    setFileName("");
    setIsOpen(true);
  };

  const closeQuote = useCallback(() => {
    if (status === "submitting") return;
    setIsOpen(false);
  }, [status]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeQuote();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [closeQuote, isOpen]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const file = formData.get("attachment");

    if (file instanceof File && file.size > MAX_FILE_SIZE) {
      setStatus("error");
      setMessage("The attachment must be 25 MB or smaller.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        body: formData,
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) throw new Error(result.message || "Unable to send your quote request.");

      setStatus("success");
      setMessage("Thank you. Your quote request has been sent successfully.");
      form.reset();
      setFileName("");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send your quote request.");
    }
  };

  return (
    <QuoteContext.Provider value={{ openQuote, closeQuote }}>
      {children}

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-[#081d46]/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeQuote();
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="quote-title"
            className="relative max-h-[96dvh] w-full max-w-3xl overflow-y-auto rounded-t-2xl bg-white shadow-[0_30px_100px_rgba(3,18,48,0.35)] sm:max-h-[calc(100dvh-3rem)] sm:rounded-3xl"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#dce8ff] bg-white/95 px-4 py-4 backdrop-blur sm:px-8 sm:py-5">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#075ee8]">
                  Tell us about your project
                </p>
                <h2 id="quote-title" className="mt-1 text-3xl font-black text-[#081d46] sm:text-4xl">
                  Get Quote
                </h2>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeQuote}
                aria-label="Close quote form"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#cbdcfb] text-3xl leading-none text-[#081d46] transition hover:border-[#075ee8] hover:text-[#075ee8]"
              >
                ×
              </button>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="grid gap-4 px-4 py-5 sm:gap-6 sm:px-8 sm:py-8">
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <label className="grid gap-2 text-sm font-bold text-[#425471]">
                Full Name <span className="sr-only">required</span>
                <input
                  required
                  name="fullName"
                  autoComplete="name"
                  className="h-14 rounded-xl border border-[#c7d3e5] px-4 text-base text-[#081d46] outline-none transition focus:border-[#075ee8] focus:ring-4 focus:ring-[#dce8ff]"
                />
              </label>

              <div className="grid gap-6 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold text-[#425471]">
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    className="h-14 rounded-xl border border-[#c7d3e5] px-4 text-base text-[#081d46] outline-none transition focus:border-[#075ee8] focus:ring-4 focus:ring-[#dce8ff]"
                  />
                </label>
                <label className="grid gap-2 text-sm font-bold text-[#425471]">
                  Phone
                  <input
                    required
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    className="h-14 rounded-xl border border-[#c7d3e5] px-4 text-base text-[#081d46] outline-none transition focus:border-[#075ee8] focus:ring-4 focus:ring-[#dce8ff]"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-bold text-[#425471]">
                Which service are you interested in?
                <select
                  required
                  name="service"
                  value={selectedService}
                  onChange={(event) => setSelectedService(event.target.value)}
                  className="h-14 rounded-xl border border-[#c7d3e5] bg-white px-4 text-base text-[#081d46] outline-none transition focus:border-[#075ee8] focus:ring-4 focus:ring-[#dce8ff]"
                >
                  {serviceOptions.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-3 rounded-2xl border border-dashed border-[#9dbcf3] bg-[#f5f8ff] p-5 text-sm font-bold text-[#425471]">
                Upload Your File <span className="font-medium text-[#6b7d98]">(optional)</span>
                <input
                  type="file"
                  name="attachment"
                  accept={ACCEPTED_FILE_TYPES}
                  onChange={(event) => setFileName(event.target.files?.[0]?.name || "")}
                  className="block w-full text-sm font-medium text-[#526784] file:mr-4 file:rounded-lg file:border-0 file:bg-[#075ee8] file:px-4 file:py-2.5 file:font-black file:text-white"
                />
                {fileName && <span className="text-xs font-bold text-[#075ee8]">Selected: {fileName}</span>}
                <span className="text-xs font-medium leading-5 text-[#6b7d98]">
                  STL, STEP, STP, IGES, IGS, OBJ, PNG, JPG or JPEG. Maximum size: 25 MB.
                </span>
              </label>

              <label className="grid gap-2 text-sm font-bold text-[#425471]">
                Your Message
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about the product, quantity, material, timeline, or any special requirements."
                  className="resize-y rounded-xl border border-[#c7d3e5] px-4 py-3 text-base text-[#081d46] outline-none transition focus:border-[#075ee8] focus:ring-4 focus:ring-[#dce8ff]"
                />
              </label>

              {message && (
                <p
                  role="status"
                  className={`rounded-xl px-4 py-3 text-sm font-bold ${
                    status === "success"
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {message}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                className="h-14 rounded-xl bg-[#075ee8] px-8 text-base font-black text-white shadow-[0_14px_30px_rgba(7,94,232,0.24)] transition hover:bg-[#064dbd] disabled:cursor-not-allowed disabled:opacity-60 sm:w-max sm:min-w-48"
              >
                {status === "submitting" ? "Sending…" : status === "success" ? "Request sent" : "Submit request"}
              </button>
            </form>
          </div>
        </div>
      )}
    </QuoteContext.Provider>
  );
}
