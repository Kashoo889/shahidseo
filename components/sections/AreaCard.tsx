import Link from "next/link";
import type { Area } from "@/data/areas";
import { cn } from "@/lib/utils";

export function AreaCard({ area, size = "md", variant = "image" }: { area: Area; size?: "sm" | "md" | "lg"; variant?: "image" | "solid" }) {
  const heightCls = { sm: "h-44", md: "h-56", lg: "h-72" }[size];

  if (variant === "solid") {
    return (
      <Link
        href={`/areas/${area.slug}`}
        className={cn("group flex flex-col justify-between rounded-2xl bg-primary p-6 text-primary-foreground shadow-card transition hover:brightness-95", heightCls)}
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/15">
          <span className="text-sm font-bold">{area.name.charAt(0)}</span>
        </div>
        <div>
          <h3 className="text-xl font-bold">{area.name}</h3>
          <p className="mt-1 text-sm opacity-90 line-clamp-2">{area.shortBlurb}</p>
          <span className="mt-4 inline-flex rounded-full bg-primary-foreground px-4 py-1.5 text-xs font-semibold text-ink">
            View Area
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/areas/${area.slug}`}
      className={cn("group relative block overflow-hidden rounded-2xl shadow-card transition hover:-translate-y-1", heightCls)}
    >
      <img
        src={area.image}
        alt={`${area.name} junk removal`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 text-primary-foreground">
        <h3 className="text-lg font-bold sm:text-xl">{area.name}</h3>
        <p className="mt-1 line-clamp-2 text-xs opacity-90 sm:text-sm">{area.shortBlurb}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {area.highlights.slice(0, 2).map((h) => (
            <span key={h} className="rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider">
              {h}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
