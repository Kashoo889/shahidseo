import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "left", className }: Props) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
          {eyebrow}
        </span>
      )}
      <h2 className={cn("text-3xl font-extrabold leading-tight text-ink sm:text-4xl", eyebrow && "mt-3")}>
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base text-muted-foreground sm:text-lg">{description}</p>
      )}
    </div>
  );
}
