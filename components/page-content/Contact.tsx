import Image from "next/image";
import { Phone, MessageCircle, MapPin, Leaf, Clock, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { Seo } from "@/components/Seo";
import { CONTACT, telHref, waHref } from "@/data/contact";
import { AREAS } from "@/data/areas";
import { contactPageSchema, localBusinessSchema, breadcrumbSchema } from "@/lib/schema";

const cards = [
  {
    icon: Leaf,
    title: "Sustainable",
    description:
      "We recycle over 95% of all collected materials in collaboration with Dubai Municipality.",
  },
  {
    icon: Clock,
    title: "Swift Response",
    description: "Book now and we arrive within 30 minutes of confirmation, anywhere in Dubai.",
  },
  {
    icon: ShieldCheck,
    title: "Certified",
    description: "Fully licensed and insured junk removal for commercial and residential sectors.",
  },
];

const breadcrumbsData = [
  { name: "Home", path: "/" },
  { name: "Contact Us", path: "/contact" },
];

export default function Contact() {
  const schemas = [
    contactPageSchema(breadcrumbsData),
    localBusinessSchema(),
    breadcrumbSchema(breadcrumbsData),
  ];

  return (
    <>
      <Seo jsonLd={schemas} />

      <Container className="pt-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />
      </Container>

      <section className="py-12 sm:py-16">
        <Container>
          <span className="inline-flex items-center rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-accent-foreground">
            Reliable & Sustainable
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
            Get in touch for premium Junk removal services.
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Whether it's a home clearance or commercial junk removal, our team is ready to assist
            you 24/7 across Dubai. Call or WhatsApp now for a same-day pickup.
          </p>
        </Container>
      </section>

      <section className="pb-16">
        <Container className="grid items-stretch gap-8 lg:grid-cols-2">
          {/* Business Bay image */}
          <div className="relative overflow-hidden rounded-2xl shadow-card">
            <Image
              src="https://images.unsplash.com/photo-1745750434535-5943ef2fd31a?auto=format&fit=crop&w=900&h=1100&q=80"
              alt="EcoHaul headquarters and operations base in Business Bay, Dubai"
              width={900}
              height={1100}
              className="h-full min-h-[22rem] w-full object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-sm font-semibold text-ink shadow-card">
                <MapPin className="h-4 w-4 text-primary" /> Find us in Business Bay
              </span>
            </div>
          </div>

          {/* Contact information */}
          <div className="space-y-4">
            <InfoCard icon={Phone} label="Call Now" value={CONTACT.phoneDisplay} href={telHref} />
            <InfoCard
              icon={MessageCircle}
              label="WhatsApp"
              value={CONTACT.phoneDisplay}
              href={waHref}
              external
            />

            <div className="rounded-2xl border border-border bg-surface p-6 shadow-soft">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Office Location
              </div>
              <p className="mt-2 text-sm font-medium text-ink">{CONTACT.office}</p>
              <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                <span className="inline-block h-2 w-2 rounded-full bg-primary" /> Open 24/7 for
                Emergencies
              </p>
              <div className="mt-4 border-t border-border pt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Standard Hours
              </div>
              <div className="mt-2 flex items-center justify-between text-sm text-ink">
                <span>Mon – Sun</span>
                <span className="font-semibold">Always Available</span>
              </div>
              <div className="mt-4 border-t border-border pt-3 text-sm text-muted-foreground">
                Same-day pickup across {AREAS.length} communities in Dubai.
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container className="grid gap-5 sm:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="rounded-2xl bg-surface-muted p-6">
              <c.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 text-base font-bold text-ink">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
            </div>
          ))}
        </Container>
      </section>

      <CTASection
        title="Ready for a same-day pickup?"
        description="Call or WhatsApp now — our team arrives in 30 minutes, 24/7 across Dubai."
        primaryLabel="Book Same-Day Pickup"
        secondaryLabel="WhatsApp Us"
      />
    </>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 shadow-soft hover:border-primary"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </div>
        <div className="text-lg font-bold text-primary">{value}</div>
      </div>
    </a>
  );
}
