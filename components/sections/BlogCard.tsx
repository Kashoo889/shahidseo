import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar, ArrowRight, User } from "lucide-react";
import type { BlogPost } from "@/data/blog";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
  className?: string;
  featured?: boolean;
}

export function BlogCard({ post, className, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <article
        className={cn(
          "group relative grid overflow-hidden rounded-3xl border border-border bg-surface shadow-card transition duration-300 hover:shadow-soft lg:grid-cols-12",
          className,
        )}
      >
        <div className="relative h-64 w-full overflow-hidden sm:h-80 lg:col-span-7 lg:h-full min-h-[300px]">
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt}
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            priority
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute left-4 top-4 rounded-full bg-primary px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-card">
            Featured • {post.category}
          </div>
        </div>

        <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5 lg:p-10">
          <div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-primary" />
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-primary" />
                {post.readingTime}
              </span>
            </div>

            <h2 className="mt-4 text-2xl font-extrabold leading-tight text-ink transition group-hover:text-primary sm:text-3xl">
              <Link
                href={`/blog/${post.slug}`}
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
              >
                {post.title}
              </Link>
            </h2>

            <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {post.excerpt}
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-border/70 pt-6">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-soft text-primary">
                <User className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-ink">{post.author.name}</div>
                <div className="text-[11px] text-muted-foreground">{post.author.role}</div>
              </div>
            </div>

            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition group-hover:translate-x-1"
              aria-label={`Read full article: ${post.title}`}
            >
              Read Article <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card",
        className,
      )}
    >
      <div className="relative h-52 w-full overflow-hidden sm:h-56">
        <Image
          src={post.coverImage}
          alt={post.coverImageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 rounded-full bg-surface/95 px-3 py-0.5 text-xs font-semibold text-ink backdrop-blur shadow-card">
          {post.category}
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3 w-3 text-primary" />
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3 text-primary" />
              {post.readingTime}
            </span>
          </div>

          <h3 className="mt-3 text-lg font-bold leading-snug text-ink transition group-hover:text-primary">
            <Link
              href={`/blog/${post.slug}`}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
            >
              {post.title}
            </Link>
          </h3>

          <p className="mt-2.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
            {post.excerpt}
          </p>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4">
          <span className="text-xs font-medium text-muted-foreground">By {post.author.name}</span>
          <span className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:underline">
            Read <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </article>
  );
}
