import { Seo } from "@/components/Seo";
import { Container } from "@/components/ui/Container";
import { AREAS } from "@/data/areas";
import { FAQList } from "@/components/sections/FAQList";
import { CTASection } from "@/components/sections/CTASection";

const generalFaqs = [
  {
    q: "What areas of Dubai do you serve?",
    a: `We cover ${AREAS.length} communities across Dubai including Marina, Palm Jumeirah, Downtown, Business Bay, JVC, Arabian Ranches and more. See our Areas page for the full list.`,
  },
  {
    q: "Do you offer same day junk removal?",
    a: "Yes — just book now and we'll typically arrive within 30 minutes, with no rush surcharge.",
  },
  {
    q: "What items will you take?",
    a: "Furniture, appliances, electronics, garden waste, household clutter, office equipment and bulky items. We don't handle hazardous or regulated materials.",
  },
  {
    q: "How is pricing calculated?",
    a: "Pricing is based on volume and access. Our crew confirms a fixed on-site price before any work starts — no hidden fees.",
  },
  {
    q: "Do you recycle what you collect?",
    a: "Yes — 95%+ of collected materials are routed to licensed Dubai recyclers and charity partners.",
  },
  {
    q: "Are you fully insured?",
    a: "Yes — every job carries AED 10M comprehensive liability coverage.",
  },
  {
    q: "Can I book a recurring service for my office?",
    a: "Absolutely. Weekly and monthly contracts are available for offices, retail and compounds.",
  },
  {
    q: "How do I pay?",
    a: "Card, bank transfer or cash on completion. Corporate invoicing is also available.",
  },
];

export default function Faq() {
  return (
    <>
      <Seo
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: generalFaqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />

      <section className="py-12 sm:py-16">
        <Container>
          <span className="inline-flex items-center rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-accent-foreground">
            Helpful Answers
          </span>
          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Everything you need to know about junk removal, pricing, disposal and coverage across
            Dubai.
          </p>
        </Container>
      </section>

      <section className="pb-16">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <div className="rounded-2xl bg-primary-soft/60 p-6 text-sm text-ink">
            Still have questions? Our concierge team is available 24/7 via call or WhatsApp.
          </div>
          <FAQList faqs={generalFaqs} />
        </Container>
      </section>

      <CTASection
        title="Need a faster answer?"
        description="WhatsApp or call us anytime — we typically respond within minutes."
        primaryLabel="Call Now"
      />
    </>
  );
}
