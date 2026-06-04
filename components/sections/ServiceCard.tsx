import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";
import { cn } from "@/lib/utils";

export function ServiceCard({ service, featured = false }: { service: Service; featured?: boolean }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-card",
        featured && "lg:col-span-2 lg:row-span-2",
      )}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-soft text-accent-foreground">
        <span className="text-sm font-bold">{service.shortTitle.charAt(0)}</span>
      </div>
      <h3 className="mt-5 text-lg font-bold text-ink">{service.shortTitle}</h3>
      <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{service.description}</p>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
        Learn more <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
