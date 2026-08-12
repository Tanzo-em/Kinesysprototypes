const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.kinesysprototypes.com/#business",
  name: "Kinesys Prototypes",
  url: "https://www.kinesysprototypes.com",
  logo: "https://www.kinesysprototypes.com/kinesysprototypes-logo.png",
  image: "https://www.kinesysprototypes.com/hero/industrial-printer.png",
  description:
    "Product design, rapid prototyping, 3D printing, benchmarking, visualization, and manufacturing support in Pune, Maharashtra.",
  telephone: "+91-83088-37348",
  email: "ashwanikumar.tiku@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shed No 4, Govind Industries, Alandi Road, Charholi, Bhosari",
    addressLocality: "Pimpri-Chinchwad",
    addressRegion: "Maharashtra",
    postalCode: "412105",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Pune, Maharashtra",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-83088-37348",
    contactType: "sales",
    email: "ashwanikumar.tiku@gmail.com",
    availableLanguage: ["English", "Hindi"],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Product development services",
    itemListElement: [
      "Product Design",
      "Rapid Prototyping",
      "3D Printing",
      "Product Benchmarking",
      "3D Visualization",
      "CNC Machining",
      "Vacuum Casting",
      "Manufacturing Support",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};

export default function BusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(businessSchema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
