"use client";

import { useState } from "react";
import { Search, BookOpen, Sparkles } from "lucide-react";
import { BLOG_CATEGORIES, getAllBlogPosts } from "@/data/blog";
import { blogCollectionPageSchema, breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { Seo } from "@/components/Seo";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { BlogCard } from "@/components/sections/BlogCard";
import { CTASection } from "@/components/sections/CTASection";

export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const allPosts = getAllBlogPosts();
  const featuredPost = allPosts[0];

  const filteredPosts = allPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <>
      <Seo
        jsonLd={[
          blogCollectionPageSchema(breadcrumbs),
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            title: "EcoHaul Dubai Blog | Sustainable Junk Removal Guides & Insights",
            description:
              "Expert guides, moving checklists, and sustainable waste disposal insights for Dubai residents and businesses.",
            path: "/blog",
            breadcrumbs,
          }),
        ]}
      />

      <div className="pt-6">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
        </Container>
      </div>

      {/* Hero Header */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-3.5 py-1 text-xs font-semibold text-accent-foreground">
              <BookOpen className="h-3.5 w-3.5" /> Guides, Tips & Insights
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-ink sm:text-5xl lg:text-6xl">
              The EcoHaul <span className="text-primary">Journal</span>
            </h1>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Practical guides on waste reduction, property clearance checklists, Dubai municipal
              regulations, and sustainable disposal practices.
            </p>
          </div>

          {/* Search & Category Filter */}
          <div className="mt-10 space-y-4">
            {/* Search Input */}
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles, guides, topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-border bg-surface py-3 pl-11 pr-4 text-sm text-ink placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-soft"
                aria-label="Search blog posts"
              />
            </div>

            {/* Category Pills */}
            <div
              className="flex flex-wrap items-center gap-2 pt-2"
              role="tablist"
              aria-label="Blog categories"
            >
              <button
                type="button"
                role="tab"
                aria-selected={selectedCategory === "All"}
                onClick={() => setSelectedCategory("All")}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  selectedCategory === "All"
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "border border-border bg-surface text-ink hover:bg-muted"
                }`}
              >
                All Articles ({allPosts.length})
              </button>
              {BLOG_CATEGORIES.map((cat) => {
                const count = allPosts.filter((p) => p.category === cat).length;
                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={selectedCategory === cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      selectedCategory === cat
                        ? "bg-primary text-primary-foreground shadow-soft"
                        : "border border-border bg-surface text-ink hover:bg-muted"
                    }`}
                  >
                    {cat} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Post Showcase (only shown when All or matching category, and no active search) */}
      {selectedCategory === "All" && searchQuery.trim() === "" && featuredPost && (
        <section className="pb-12">
          <Container>
            <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
              <Sparkles className="h-4 w-4" /> Latest Feature
            </div>
            <BlogCard post={featuredPost} featured />
          </Container>
        </section>
      )}

      {/* Main Articles Grid */}
      <section className="pb-20">
        <Container>
          <div className="flex items-center justify-between border-b border-border/70 pb-4">
            <h2 className="text-xl font-bold text-ink sm:text-2xl">
              {selectedCategory === "All" ? "All Publications" : `${selectedCategory} Articles`}
            </h2>
            <span className="text-xs font-medium text-muted-foreground">
              Showing {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
            </span>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="mt-12 rounded-3xl border border-dashed border-border bg-surface-muted p-12 text-center">
              <p className="text-base font-semibold text-ink">No articles found</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Try adjusting your search keywords or switching category filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 rounded-full bg-primary px-5 py-2 text-xs font-semibold text-primary-foreground hover:brightness-95"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </Container>
      </section>

      <CTASection />
    </>
  );
}
