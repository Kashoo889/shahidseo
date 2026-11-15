import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { Blog } from "@/components/page-content/Blog";
import { BLOG_CATEGORIES, getAllBlogPosts } from "@/data/blog";

// ISR: daily fallback re-render. Scheduled posts go live just after midnight (Asia/Dubai) via
// the daily cron in vercel.json -> /api/revalidate, which revalidates the blog routes.
export const revalidate = 86400;

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
