import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { Blog } from "@/components/page-content/Blog";
import { BLOG_CATEGORIES, getAllBlogPosts } from "@/data/blog";

// ISR: re-check hourly so scheduled posts go live without a redeploy.
export const revalidate = 3600;

export const metadata: Metadata = createMetadata({
  title: "EcoHaul Dubai Blog | Sustainable Junk Removal Guides & Insights",
  description:
    "Expert guides, moving checklists, and sustainable waste disposal insights for Dubai residents and businesses.",
  path: "/blog",
  keywords: [
    "junk removal dubai blog",
    "furniture disposal dubai guide",
    "dubai waste management tips",
    "villa move out clearance dubai",
    "e-waste recycling dubai",
  ],
});

export default function BlogIndexPage() {
  // Filter on the server; only published posts reach the client component.
  return <Blog posts={getAllBlogPosts()} categories={BLOG_CATEGORIES} />;
}
