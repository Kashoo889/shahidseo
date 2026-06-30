import { cn } from "@/lib/utils";

type Props = {
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ title, description, align = "left", className }: Props) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-3 text-base text-muted-foreground sm:text-lg">{description}</p>
      )}
    </div>
  );
}
