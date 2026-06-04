import type { MetadataRoute } from "next";
import { AREAS } from "@/data/areas";
import { SERVICES } from "@/data/services";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["/", "/services", "/areas", "/faq", "/about", "/contact"];
  const serviceRoutes = SERVICES.map((service) => `/services/${service.slug}`);
  const areaRoutes = AREAS.map((area) => `/areas/${area.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes].map((route) => ({
    url: new URL(route, siteConfig.url).toString(),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.split("/").length > 2 ? 0.7 : 0.8,
  }));
}
