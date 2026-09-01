"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, Share2, Check, ArrowLeft, ArrowRight, Sparkles, MapPin, Wrench } from "lucide-react";
import type { BlogPost } from "@/data/blog";
import { getRecentBlogPosts } from "@/data/blog";
import { SERVICES } from "@/data/services";
import { AREAS } from "@/data/areas";
import { blogPostingSchema, breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { Seo } from "@/components/Seo";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { BlogCard } from "@/components/sections/BlogCard";
import { CTASection } from "@/components/sections/CTASection";

interface BlogPageTemplateProps {
  post: BlogPost;
}

export function BlogPageTemplate({ post }: BlogPageTemplateProps) {
  const [copied, setCopied] = useState(false);
  const recentPosts = getRecentBlogPosts(3, post.slug);

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Resolve related services and areas
  const relatedServicesData = SERVICES.filter((s) =>
    post.relatedServices?.includes(s.slug),
  );
  const relatedAreasData = AREAS.filter((a) =>
    post.relatedAreas?.includes(a.slug),
  );

  return (
    <>
      <Seo
        jsonLd={[
          blogPostingSchema({
            title: post.title,
            description: post.excerpt,
            path: `/blog/${post.slug}`,
            image: post.coverImage,
            datePublished: post.publishedAt,
            dateModified: post.updatedAt,
            authorName: post.author.name,
            authorRole: post.author.role,
            breadcrumbs,
          }),
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            title: post.title,
            description: post.excerpt,
            path: `/blog/${post.slug}`,
            breadcrumbs,
          }),
        ]}
      />

      <div className="pt-6">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />
        </Container>
      </div>

      <article className="py-10 sm:py-14">
        <Container className="max-w-4xl">
          {/* Article Header */}
          <header className="text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:justify-start">
              <span className="inline-flex items-center rounded-full bg-primary-soft px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3.5 w-3.5 text-primary" />
                {post.readingTime}
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {post.excerpt}
            </p>

            {/* Author & Share Row */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-border/70 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-soft text-primary font-bold">
                  <User className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-ink">{post.author.name}</div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{post.author.role}</span>
                    <span>•</span>
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    `Check out this article: ${post.title} - https://getjunkremovalsdubai.com/blog/${post.slug}`,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-ink transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label="Share this article on WhatsApp"
                >
                  <Share2 className="h-3.5 w-3.5 text-primary" /> WhatsApp
                </a>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-ink transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label="Copy link to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-primary" /> Copied!
                    </>
                  ) : (
                    "Copy Link"
                  )}
                </button>
              </div>
            </div>
          </header>

          {/* Featured Cover Image */}
          <div className="mt-8 overflow-hidden rounded-3xl shadow-card">
            <Image
              src={post.coverImage}
              alt={post.coverImageAlt}
              width={1200}
              height={800}
              priority
              className="h-auto w-full object-cover max-h-[500px]"
            />
          </div>

          {/* Key Takeaways Box */}
          {post.takeaways && post.takeaways.length > 0 && (
            <div className="mt-10 rounded-2xl border border-primary/20 bg-primary-soft/50 p-6 sm:p-8">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary">
                <Sparkles className="h-4 w-4" /> Key Takeaways
              </div>
              <ul className="mt-4 space-y-2.5">
                {post.takeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-ink leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Main Article Body */}
          <div className="prose prose-lg mt-10 max-w-none space-y-8 text-ink">
            {post.sections.map((section, idx) => (
              <section key={idx} className="space-y-4">
                {section.heading && (
                  <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                    {section.heading}
                  </h2>
                )}
                {section.content.map((p, pIdx) => (
                  <p key={pIdx} className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {p}
                  </p>
                ))}

                {section.image && (
                  <div className="my-6 overflow-hidden rounded-2xl shadow-soft">
                    <Image
                      src={section.image.src}
                      alt={section.image.alt}
                      width={1200}
                      height={800}
                      sizes="(min-width: 1024px) 800px, 100vw"
                      className="h-auto w-full object-cover max-h-[450px]"
                    />
                  </div>
                )}

                {section.callout && (
                  <div className="rounded-xl border-l-4 border-primary bg-surface-muted p-5 shadow-soft">
                    <div className="text-sm font-bold text-ink">{section.callout.title}</div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {section.callout.text}
                    </div>
                  </div>
                )}

                {section.listItems && section.listItems.length > 0 && (
                  <ul className="space-y-2 rounded-xl bg-surface-muted p-6">
                    {section.listItems.map((li, liIdx) => (
                      <li key={liIdx} className="flex items-start gap-2 text-sm text-ink sm:text-base">
                        <span className="font-bold text-primary">•</span>
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 flex flex-wrap items-center gap-2 border-t border-border/70 pt-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Topics:
              </span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-surface-muted px-3 py-1 text-xs font-medium text-ink"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Internal Linking: Related Services & Areas */}
          {(relatedServicesData.length > 0 || relatedAreasData.length > 0) && (
            <div className="mt-12 space-y-6 rounded-3xl border border-border bg-surface-muted p-6 sm:p-8">
              <h3 className="text-lg font-bold text-ink sm:text-xl">
                Related Services & Coverage in Dubai
              </h3>

              {relatedServicesData.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                    <Wrench className="h-3.5 w-3.5" /> Bookable Services
                  </div>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {relatedServicesData.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="group flex items-center justify-between rounded-xl border border-border bg-surface p-3.5 transition hover:border-primary hover:shadow-soft"
                      >
                        <span className="text-sm font-semibold text-ink group-hover:text-primary">
                          {s.title}
                        </span>
                        <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {relatedAreasData.length > 0 && (
                <div className="border-t border-border/70 pt-4">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                    <MapPin className="h-3.5 w-3.5" /> Featured Communities
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {relatedAreasData.map((a) => (
                      <Link
                        key={a.slug}
                        href={`/areas/${a.slug}`}
                        className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-ink transition hover:border-primary hover:text-primary"
                      >
                        {a.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Back to Blog link */}
          <div className="mt-8 text-center sm:text-left">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              <ArrowLeft className="h-4 w-4" /> Back to all articles
            </Link>
          </div>
        </Container>
      </article>

      {/* More from the Blog Section */}
      {recentPosts.length > 0 && (
        <section className="border-t border-border bg-surface-muted py-16">
          <Container>
            <div className="flex items-end justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Continue Reading
                </span>
                <h2 className="mt-2 text-2xl font-extrabold text-ink sm:text-3xl">
                  More From the EcoHaul Blog
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden text-sm font-semibold text-primary hover:underline sm:inline-flex items-center gap-1"
              >
                View all articles <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {recentPosts.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* High-Converting CTA */}
      <CTASection />
    </>
  );
}
