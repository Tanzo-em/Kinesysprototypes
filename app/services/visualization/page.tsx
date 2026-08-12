import type { Metadata } from "next";
import ServiceDetail from "../service-detail";

export const metadata: Metadata = {
  title: "3D Product Visualization Services in Pune",
  description: "3D product visualization, high-quality rendering, product animation, and interactive presentation services for design review and marketing in Pune.",
  alternates: { canonical: "/services/visualization" },
  openGraph: {
    title: "3D Product Visualization Services in Pune",
    description: "Communicate product form, features, and functionality through professional 3D visualization and rendering.",
    url: "/services/visualization",
    images: ["/figma/blue-illustration.jpg"],
  },
};

export default function VisualizationPage() {
  return (
    <ServiceDetail
      title="Visualization"
      eyebrow="Make ideas tangible"
      description="We create clear, high-quality visual experiences that communicate how a product looks, works, and feels before production. These assets help teams review designs, align stakeholders, and present ideas with confidence."
      image="/figma/blue-illustration.jpg"
      imageAlt="Blue product visualization artwork"
      deliverables={[
        "High-quality 3D models",
        "Photorealistic product renders",
        "Product demo videos",
        "Interactive prototypes",
        "Feature animations",
        "Presentation-ready visuals",
      ]}
    />
  );
}
