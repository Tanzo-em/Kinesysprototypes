import type { Metadata } from "next";
import BusinessSchema from "./components/business-schema";
import QuoteProvider from "./components/quote-modal";
import SiteFooter from "./components/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kinesysprototypes.com"),
  title: {
    default: "Kinesys Prototypes | Product Design & 3D Printing Pune",
    template: "%s | Kinesys Prototypes",
  },
  description:
    "Product design, rapid prototyping, 3D printing, benchmarking, visualization, and manufacturing support in Pune, Maharashtra.",
  applicationName: "Kinesys Prototypes",
  keywords: [
    "3D printing services Pune",
    "rapid prototyping Pune",
    "product design company Pune",
    "prototype manufacturing Pune",
    "product benchmarking services",
    "CNC machining Pune",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Kinesys Prototypes",
    title: "Kinesys Prototypes | Product Design & 3D Printing Pune",
    description:
      "Turn ideas into production-ready products with design, prototyping, 3D printing, and manufacturing support in Pune.",
    images: [{ url: "/hero/industrial-printer.png", width: 1456, height: 1088, alt: "Industrial prototyping and 3D printing at Kinesys Prototypes" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kinesys Prototypes | Product Design & 3D Printing Pune",
    description: "Product design, rapid prototyping, 3D printing, and manufacturing support in Pune.",
    images: ["/hero/industrial-printer.png"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <BusinessSchema />
        <QuoteProvider>
          <div className="flex min-h-screen flex-col">
            <div className="flex-1">{children}</div>
            <SiteFooter />
          </div>
        </QuoteProvider>
      </body>
    </html>
  );
}
