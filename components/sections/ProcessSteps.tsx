type Step = { title: string; description: string };

export function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <div className="relative">
      <div className="absolute left-0 right-0 top-7 hidden h-px bg-primary lg:block" />
      <ol className="relative grid gap-8 lg:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.title} className="text-center">
            <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-xl border-2 border-primary bg-surface font-display text-lg font-bold text-ink">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="mt-5 text-base font-bold text-ink">{s.title}</h3>
            <p className="mx-auto mt-2 max-w-xs text-sm text-muted-foreground">{s.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export const DEFAULT_STEPS: Step[] = [
  {
    title: "Instant Booking",
    description: "Schedule your pickup online or via WhatsApp in under 2 minutes.",
  },
  {
    title: "On-site Appraisal",
    description: "Our team arrives, assesses the volume, and confirms a fixed price.",
  },
  {
    title: "Swift Removal",
    description: "White-glove handling as we remove items without a scratch to your walls.",
  },
];
