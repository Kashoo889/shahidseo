import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllBlogPosts, getBlogPost, getRecentBlogPosts } from "@/data/blog";
import { BlogPageTemplate } from "@/components/templates/BlogPageTemplate";
import { createMetadata } from "@/lib/seo";

// ISR: daily fallback + daily /api/revalidate cron at Dubai midnight, so
// scheduled (future-dated) posts go live without a
// redeploy. dynamicParams stays true (default) so a slug not prebuilt at build
// time is rendered on demand once its publish date has passed.
export const revalidate = 86400;

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return createMetadata({
      title: "Article Not Found | EcoHaul Dubai",
      description: "The requested EcoHaul Dubai blog article could not be found.",
      path: "/blog",
    });
  }

  return createMetadata({
    title: post.seoTitle ?? `${post.title} | EcoHaul Dubai Journal`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.coverImage,
    keywords: post.tags,
  });
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return <BlogPageTemplate post={post} recentPosts={getRecentBlogPosts(3, post.slug)} />;
}
