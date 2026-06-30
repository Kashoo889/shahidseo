import { cn } from "@/lib/utils";
import type { ReactNode, HTMLAttributes } from "react";

export function Container({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return (
    <div className={cn("mx-5 max-w-7xl min-w-0 sm:mx-auto sm:px-8 lg:px-12", className)} {...props}>
      {children}
    </div>
  );
}
