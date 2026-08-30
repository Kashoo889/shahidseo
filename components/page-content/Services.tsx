import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { Seo } from "@/components/Seo";
import { SERVICES } from "@/data/services";
import { CTASection } from "@/components/sections/CTASection";
import { ProcessSteps, DEFAULT_STEPS } from "@/components/sections/ProcessSteps";
import { collectionPageSchema, breadcrumbSchema } from "@/lib/schema";

const breadcrumbsData = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

export default function Services() {
  const schemas = [
    collectionPageSchema({
      name: "Junk Removal Services Dubai | EcoHaul Dubai",
      description:
        "Full range of junk removal services in Dubai for furniture, appliances, office cleanouts, garden waste, house clearance, and same day pickup.",
      path: "/services",
      breadcrumbs: breadcrumbsData,
    }),
    breadcrumbSchema(breadcrumbsData),
  ];

  return (
    <>
      <Seo jsonLd={schemas} />

      <Container className="pt-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services" },
          ]}
        />
      </Container>

      <section className="py-12 sm:py-16">
        <Container>
          <span className="inline-flex items-center rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-accent-foreground">
            Our Expertise
          </span>
          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
            Premium Junk Removal & Waste Experts
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Sustainable removal solutions tailored for Dubai's most prestigious residential and
            commercial sectors. Professional, efficient, and ecologically responsible.
          </p>
        </Container>
      </section>


      <section className="pb-16">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-card"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-soft text-accent-foreground font-bold">
                  {s.shortTitle.charAt(0)}
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink">{s.shortTitle}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
                <div className="mt-6">
                  <span className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-xs font-semibold text-primary-foreground">
                    {s.cta}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface-muted py-16">
        <Container>
          <SectionHeading
            align="center"
            title="How EcoHaul Works"
            description="From booking to recycle, all handled by one team."
          />
          <div className="mt-12">
            <ProcessSteps steps={DEFAULT_STEPS} />
          </div>
        </Container>
      </section>

      <CTASection
        title="Need a custom pickup?"
        description="Tell us what you need cleared and we'll handle the rest."
        primaryLabel="Book Junk Pickup"
      />
    </>
  );
}
