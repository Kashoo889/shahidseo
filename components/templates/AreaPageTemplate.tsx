import Link from "next/link";
import Image from "next/image";
import { MapPin, ShieldCheck, Clock, Leaf } from "lucide-react";
import type { Area } from "@/data/areas";
import { SERVICES } from "@/data/services";
import { Seo } from "@/components/Seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessSteps, DEFAULT_STEPS } from "@/components/sections/ProcessSteps";
import { FAQList } from "@/components/sections/FAQList";
import { CTASection } from "@/components/sections/CTASection";
import { telHref, waHref } from "@/data/contact";

const whyItems = [
  { icon: ShieldCheck, title: "Local Crews", description: "Teams stationed near your community for fast response." },
  { icon: Leaf, title: "95% Recycled", description: "Materials sorted and routed to UAE recycling partners." },
  { icon: Clock, title: "Same Day Slots", description: "Express same-day pickups available across the area." },
];

export function AreaPageTemplate({ area }: { area: Area }) {
  const featuredServices = SERVICES.slice(0, 6);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: `EcoHaul Dubai — ${area.name}`,
      description: `Junk removal services in ${area.name}, Dubai.`,
      areaServed: { "@type": "Place", name: area.name },
      address: { "@type": "PostalAddress", addressLocality: area.name, addressRegion: "Dubai", addressCountry: "AE" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: area.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <>
      <Seo
        title={`Junk Removal ${area.name} | EcoHaul Dubai`}
        description={`Premium junk removal in ${area.name}, Dubai. ${area.shortBlurb}`}
        path={`/areas/${area.slug}`}
        image={area.image}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="py-12 sm:py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-accent-foreground">
              <MapPin className="h-3 w-3" /> Local Logistics — {area.type}
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl">
              Junk Removal in <span className="text-primary">{area.name}</span>
            </h1>
            <p className="mt-5 max-w-lg text-base text-muted-foreground sm:text-lg">{area.longBlurb}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={telHref} className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:brightness-95">
                Book Junk Pickup
              </a>
              <a href={waHref} target="_blank" rel="noreferrer" className="rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-ink hover:bg-muted">
                WhatsApp Us
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {area.highlights.map((h) => (
                <span key={h} className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
                  {h}
                </span>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-card">
            <Image
              src={area.image}
              alt={`${area.name} Dubai`}
              width={1200}
              height={800}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="py-16">
        <Container>
          <SectionHeading title={`Services Available in ${area.name}`} description="From single-item pickups to full villa clearances, our local crew handles every job." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group rounded-2xl border border-border bg-surface p-6 shadow-soft hover:-translate-y-1 hover:shadow-card">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-soft text-accent-foreground font-bold">
                  {s.shortTitle.charAt(0)}
                </div>
                <h3 className="mt-5 text-base font-bold text-ink">{s.shortTitle}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{s.description}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Why */}
      <section className="bg-surface-muted py-16">
        <Container>
          <SectionHeading align="center" title={`Why ${area.name} Chooses EcoHaul`} description="Local presence, premium standards, transparent pricing." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {whyItems.map((w) => (
              <div key={w.title} className="rounded-2xl bg-surface p-6 shadow-soft">
                <w.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 text-base font-bold text-ink">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-16">
        <Container>
          <SectionHeading align="center" title="Our 4-Step Process" />
          <div className="mt-12">
            <ProcessSteps steps={DEFAULT_STEPS} />
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-surface-muted py-16">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading title="Frequently Asked Questions" description={`Common questions about junk removal in ${area.name}.`} />
          <FAQList faqs={area.faqs} />
        </Container>
      </section>

      <CTASection
        title={`Book your ${area.name} pickup today`}
        description="Same day junk removal across the community. Pay only after on-site appraisal."
        primaryLabel="Book Junk Pickup"
      />
    </>
  );
}
