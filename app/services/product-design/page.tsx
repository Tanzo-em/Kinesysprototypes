import type { Metadata } from "next";
import ServiceDetail from "../service-detail";

export const metadata: Metadata = {
  title: "Product Design | Kinesysprototypes",
  description: "Human-centered product design services from concept to production-ready definition.",
};

export default function ProductDesignPage() {
  return (
    <ServiceDetail
      title="Product Design"
      eyebrow="Design with purpose"
      description="We turn early ideas into intuitive, visually compelling products. Our process balances user needs, brand identity, usability, and manufacturability so every design is ready for meaningful testing and development."
      image="/figma/car-sketch.jpg"
      imageAlt="Product concept sketches"
      deliverables={[
        "User and product research",
        "Concept exploration",
        "Industrial design development",
        "CAD-ready design direction",
        "Design-for-manufacturing review",
        "Prototype planning",
      ]}
    />
  );
}
