import { MetadataRoute } from "next";
import { PROJECTS } from "@/data/projects";

const BASE_URL = "https://edisonportfoli.netlify.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages: MetadataRoute.Sitemap = PROJECTS.map((p) => ({
    url: `${BASE_URL}/projects/${p.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: p.featured ? 0.8 : 0.6,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectPages,
  ];
}
