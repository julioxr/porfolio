import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = [
    { path: "", priority: 1 },
    ...services.map((s) => ({ path: `/servicios/${s.slug}`, priority: 0.8 })),
    { path: "/sobre-mi", priority: 0.6 },
    { path: "/contacto", priority: 0.7 },
  ];

  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified,
    priority: r.priority,
  }));
}
