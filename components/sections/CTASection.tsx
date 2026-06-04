import { telHref, waHref } from "@/data/contact";
import { Container } from "@/components/ui/Container";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
};

export function CTASection({
  title,
  description,
  primaryLabel = "Book a Pickup",
  secondaryLabel = "WhatsApp Us",
}: Props) {
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
              className="rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-white transition hover:brightness-95"
            >
              {primaryLabel}
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-primary-foreground bg-primary-foreground px-6 py-3 text-sm font-semibold text-white transition hover:brightness-95"
            >
              {secondaryLabel}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
