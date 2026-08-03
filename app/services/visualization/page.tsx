import type { Metadata } from "next";
import ServiceDetail from "../service-detail";

export const metadata: Metadata = {
  title: "Visualization | Kinesysprototypes",
  description: "3D models, product visuals, demo videos, and interactive prototypes.",
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
