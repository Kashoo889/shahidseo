import { telHref, waHref } from "@/data/contact";
import { Container } from "@/components/ui/Container";

type Props = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
};

export function CTASection({
  title = "Ready to clear your space the premium way?",
  description = "Book a professional pickup today and receive a detailed environmental impact report for your household or business.",
  primaryLabel = "Book a Pickup",
  secondaryLabel = "WhatsApp Us",
}: Props = {}) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="rounded-3xl bg-primary px-8 py-14 text-center text-primary-foreground sm:px-16 sm:py-20">
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold text-primary-foreground sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mx-auto mt-4 max-w-xl text-sm opacity-90 sm:text-base">{description}</p>
          )}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={telHref}
              className="rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-white shadow-soft transition hover:bg-ink/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ink"
            >
              {primaryLabel}
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 border-ink/25 bg-ink/10 px-7 py-3.5 text-sm font-bold text-ink transition hover:bg-ink/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ink"
            >
              {secondaryLabel}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
