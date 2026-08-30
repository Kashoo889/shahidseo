import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getBlogPost } from "@/data/blog";
import { BlogPageTemplate } from "@/components/templates/BlogPageTemplate";
import { createMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
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
    title: `${post.title} | EcoHaul Dubai Journal`,
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

  return <BlogPageTemplate post={post} />;
}
