"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Faq = { q: string; a: string };

export function FAQList({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="overflow-hidden rounded-xl border border-border bg-surface">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              id={`faq-trigger-${i}`}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
            >
              <span>{f.q}</span>
              <ChevronDown
                className={cn("h-4 w-4 shrink-0 transition", isOpen && "rotate-180")}
                aria-hidden="true"
              />
            </button>
            {isOpen && (
              <div
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-trigger-${i}`}
                className="px-5 pb-5 text-sm text-muted-foreground"
              >
                {f.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
