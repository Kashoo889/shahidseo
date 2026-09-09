import Link from "next/link";
import Image from "next/image";
import { Check, ShieldCheck, Leaf, Clock } from "lucide-react";
import type { Service } from "@/data/services";
import { SERVICES } from "@/data/services";
import { AREAS } from "@/data/areas";
import { Seo } from "@/components/Seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessSteps, DEFAULT_STEPS } from "@/components/sections/ProcessSteps";
import { FAQList } from "@/components/sections/FAQList";
import { CTASection } from "@/components/sections/CTASection";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { telHref, waHref } from "@/data/contact";
import { serviceSchema, faqSchema, breadcrumbSchema, webPageSchema } from "@/lib/schema";

const whyIcons = [ShieldCheck, Leaf, Clock];

export function ServicePageTemplate({ service }: { service: Service }) {
  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);
  const featuredAreas = AREAS.slice(0, 10);

  const breadcrumbsData = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: `/services/${service.slug}` },
  ];

  const jsonLd = [
    serviceSchema(service),
    faqSchema(service.faqs),
    breadcrumbSchema(breadcrumbsData),
    webPageSchema({
      title: `${service.title} | EcoHaul Dubai`,
      description: service.description,
      path: `/services/${service.slug}`,
      breadcrumbs: breadcrumbsData,
    }),
  ];

  return (
    <>
      <Seo jsonLd={jsonLd} />

      <Container className="pt-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: service.title },
          ]}
        />
      </Container>

      {/* Hero */}
      <section className="py-12 sm:py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-accent-foreground">
              {service.tagline}
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-5 max-w-lg text-base text-muted-foreground sm:text-lg">
              {service.description}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={telHref}
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:brightness-95"
              >
                {service.cta}
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-ink hover:bg-muted"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-card">
            <Image
              src={service.heroImage}
              alt={`${service.title} in Dubai — professional removal and disposal`}
              width={1200}
              height={800}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </Container>
      </section>

      {/* What's Included */}
      <section className="py-16">
        <Container>
          <SectionHeading
            title="What's Included"
            description={`A complete ${service.shortTitle.toLowerCase()} service handled end to end across Dubai.`}
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.included.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-surface p-6 shadow-soft"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-soft text-accent-foreground">
                  <Check className="h-4 w-4" />
                </div>
                <h3 className="mt-5 text-base font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="bg-surface-muted py-16">
        <Container>
          <SectionHeading
            align="center"
            title="Why Dubai Chooses EcoHaul"
            description="The pillars behind every pickup, residential or commercial."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {service.whyChoose.map((item, i) => {
              const Icon = whyIcons[i % whyIcons.length];
              return (
                <div key={item.title} className="rounded-2xl bg-surface p-6 shadow-soft">
                  <Icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 text-base font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-16">
        <Container>
          <SectionHeading
            align="center"
            title="Our Seamless 3-Step Process"
            description="We've refined junk removal into a premium experience that respects your time and the environment."
          />
          <div className="mt-12">
            <ProcessSteps steps={DEFAULT_STEPS} />
          </div>
        </Container>
      </section>

      {/* Areas served */}
      <section className="bg-surface-muted py-16">
        <Container>
          <SectionHeading
            title="Areas We Serve"
            description={`${service.shortTitle} available across Dubai's leading residential and commercial communities.`}
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {featuredAreas.map((a) => (
              <Link
                key={a.slug}
                href={`/areas/${a.slug}`}
                className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-ink hover:border-primary hover:text-primary"
              >
                {a.name}
              </Link>
            ))}
            <Link
              href="/areas"
              className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:brightness-95"
            >
              View all areas →
            </Link>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <SectionHeading
              title="Frequently Asked Questions"
              description={`Everything you need to know about ${service.shortTitle.toLowerCase()} in Dubai.`}
            />
            <div className="mt-6 rounded-xl border border-border bg-primary-soft/60 p-4 text-sm text-ink">
              Still have questions? Our concierge team is available 24/7 via WhatsApp.
            </div>
          </div>
          <FAQList faqs={service.faqs} />
        </Container>
      </section>

      {/* Other services */}
      <section className="bg-surface-muted py-16">
        <Container>
          <h2 className="text-center text-2xl font-extrabold text-ink sm:text-3xl">
            Other Premium Services
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group relative block h-60 overflow-hidden rounded-2xl shadow-card"
              >
                <Image
                  src={s.heroImage}
                  alt={`${s.title} in Dubai`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="text-lg font-bold text-white">{s.shortTitle}</h3>
                  <p className="mt-1 line-clamp-2 text-sm opacity-90">{s.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to clear your space the premium way?"
        description="Book a professional pickup today and receive a detailed environmental impact report for your household or business."
        primaryLabel={service.cta}
      />
    </>
  );
}
