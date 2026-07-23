import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Imaginaria | Product Development Partner",
  description:
    "Product design, 3D printing, prototyping, manufacturing, and material support in Pune.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
