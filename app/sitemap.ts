import type { MetadataRoute } from "next";

const siteUrl = "https://www.kinesysprototypes.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: siteUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/services/product-design`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/services/benchmarking`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/services/visualization`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/contact`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
