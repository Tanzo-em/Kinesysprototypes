import type { Metadata } from "next";
import ServiceDetail from "../service-detail";

export const metadata: Metadata = {
  title: "Benchmarking | Kinesysprototypes",
  description: "Product and competitor benchmarking that reveals strengths, gaps, and opportunities.",
};

export default function BenchmarkingPage() {
  return (
    <ServiceDetail
      title="Benchmarking"
      eyebrow="Learn from the market"
      description="We compare your product with competitors and relevant industry standards to reveal performance gaps, design strengths, user-experience opportunities, and practical directions for improvement."
      image="/figma/web-mockup.jpg"
      imageAlt="Product interface used for competitive benchmarking"
      deliverables={[
        "Competitor landscape review",
        "Feature comparison",
        "User-experience assessment",
        "Strength and weakness analysis",
        "Opportunity mapping",
        "Prioritized recommendations",
      ]}
    />
  );
}
