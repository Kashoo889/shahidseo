import type { MetadataRoute } from "next";
import { AREAS } from "@/data/areas";
import { SERVICES } from "@/data/services";
import { BLOG_POSTS } from "@/data/blog";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Root Homepage
  const rootEntry: MetadataRoute.Sitemap[number] = {
    url: siteConfig.url,
    lastModified: now,
    changeFrequency: "daily",
    priority: 1.0,
  };

  // Main Category Hubs
  const hubEntries: MetadataRoute.Sitemap = [
    {
      url: `${siteConfig.url}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/areas`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
  ];

  // Specific Service Pages
  const serviceEntries: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Specific Area Pages
  const areaEntries: MetadataRoute.Sitemap = AREAS.map((area) => ({
    url: `${siteConfig.url}/areas/${area.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Specific Blog Articles
  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  // Standard Company & Information Pages
  const infoEntries: MetadataRoute.Sitemap = ["/about", "/contact", "/faq"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    rootEntry,
    ...hubEntries,
    ...serviceEntries,
    ...areaEntries,
    ...blogEntries,
    ...infoEntries,
  ];
}
