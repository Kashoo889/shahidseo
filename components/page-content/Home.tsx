import Link from "next/link";
import Image from "next/image";
import { Check, ShieldCheck, Clock, Truck, Sparkles, Camera, Calendar } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SERVICES } from "@/data/services";
import { AREAS } from "@/data/areas";
import { CTASection } from "@/components/sections/CTASection";
import { telHref } from "@/data/contact";
import { webSiteSchema, localBusinessSchema, webPageSchema } from "@/lib/schema";

const trustItems = [
  { icon: Check, label: "Eco-Friendly Certified" },
  { icon: ShieldCheck, label: "ISO 14001 Compliant" },
  { icon: Truck, label: "Same Day Dubai Wide" },
  { icon: Clock, label: "24/7 Priority Support" },
];

const stepIcons = [Camera, Calendar, Check];
const steps = [
  {
    title: "Snap & Send",
    description: "WhatsApp us a photo of your items for an instant, no-obligation appraisal.",
  },
  {
    title: "Scheduled Pick-Up",
    description:
      "Our uniformed team arrives in specialised eco-trucks at your preferred time slot.",
  },
  {
    title: "Zero-Waste Processing",
    description: "We sort and transport items to specialised disposal facilities across Dubai.",
  },
];

export default function Home() {
  const featured = SERVICES[0];
  const tiles = SERVICES.slice(1, 4);

  const homeSchemas = [
    webSiteSchema(),
    localBusinessSchema(),
    webPageSchema({
      title: "Junk Removal Dubai | Same-Day Pickup & Disposal | EcoHaul",
      description:
        "Premium junk removal services in Dubai. Same-day pickup for furniture, appliances, garden waste, rubbish and house clearance. Call 055 154 7371 to book.",
      path: "/",
    }),
  ];

  return (
    <>
      <Seo jsonLd={homeSchemas} />

      {/* Hero */}
      <section className="py-12 sm:py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-accent-foreground">
              Dubai's #1 Sustainable Junk Removal
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
              Premium <span className="text-primary">Junk Removal</span> in Dubai, Redefined.
            </h1>
            <p className="mt-5 max-w-lg text-base text-muted-foreground sm:text-lg">
              White-glove junk removal services across Dubai for homes and businesses — from
              furniture and appliances to full property clearances. Professional, eco-certified, and
              same-day fast.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={telHref}
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:brightness-95"
              >
                Book Junk Pickup
              </a>
              <Link
                href="/services"
                className="rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-ink hover:bg-muted"
              >
                View Services
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1776885008664-68b2988373e6?auto=format&fit=crop&w=1200&h=800&q=70"
                alt="Dubai junk removal team loading furniture into an eco-friendly truck"
                width={1200}
                height={800}
                priority
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-6 rounded-2xl border border-border bg-surface px-5 py-3 shadow-card">
              <div className="text-xs font-semibold text-muted-foreground">30 Min Response</div>
              <div className="text-sm font-bold text-ink">Emergency services</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust bar */}
      <section className="border-y border-border bg-surface-muted py-6">
        <Container className="grid grid-cols-2 gap-4 text-center sm:grid-cols-4">
          {trustItems.map((t) => (
            <div
              key={t.label}
              className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
            >
              <t.icon className="h-4 w-4 text-primary" /> {t.label}
            </div>
          ))}
        </Container>
      </section>

      {/* Specialized Services */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            title="Specialized Junk Removal Services"
            description="Tailored waste, rubbish and furniture removal for Dubai's homes and businesses."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <Link
              href={`/services/${featured.slug}`}
              className="group relative col-span-1 row-span-2 block h-full min-h-[420px] overflow-hidden rounded-2xl shadow-card lg:col-span-2"
            >
              <Image
                src={featured.heroImage}
                alt={`${featured.title} service in Dubai`}
                fill
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover transition group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                  Featured
                </span>
                <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">{featured.title}</h3>
                <p className="mt-2 max-w-md text-sm opacity-90">{featured.description}</p>
              </div>
            </Link>
            {tiles.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-2xl border border-border bg-surface p-6 shadow-soft hover:-translate-y-1 hover:shadow-card"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-soft text-accent-foreground font-bold">
                  {s.shortTitle.charAt(0)}
                </div>
                <h3 className="mt-5 text-base font-bold text-ink">{s.shortTitle}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{s.description}</p>
                <span className="mt-4 inline-flex text-xs font-semibold text-primary">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/services" className="text-sm font-semibold text-primary hover:underline">
              View all services →
            </Link>
          </div>
        </Container>
      </section>

      {/* Why Dubai chooses */}
      <section className="bg-surface-muted py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              The EcoHaul Edge
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              Why Dubai Chooses Us
            </h2>
            <p className="mt-3 text-muted-foreground">
              Setting the benchmark for transparent, responsible junk removal across Dubai.
            </p>
            <ul className="mt-6 space-y-5">
              {[
                {
                  title: "Sustainability Reporting",
                  description:
                    "Every removal includes a digital certificate detailing your landfill diversion rate.",
                },
                {
                  title: "Full Liability Insurance",
                  description:
                    "Your property is protected with our premium AED 10M comprehensive coverage.",
                },
                {
                  title: "Transparent Pricing",
                  description:
                    "Instant fixed-fee prices with no hidden fuel or removal surcharges.",
                },
              ].map((f) => (
                <li key={f.title} className="flex gap-3">
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-ink">{f.title}</h3>
                    <p className="text-sm text-muted-foreground">{f.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&h=600&q=80"
              alt="Eco-friendly junk sorting, separation, and material diversion in Dubai"
              width={600}
              height={600}
              className="h-full w-full rounded-2xl object-cover"
            />
            <div className="flex flex-col justify-center rounded-2xl bg-primary p-6 text-primary-foreground">
              <div className="text-5xl font-extrabold">98%</div>
              <div className="mt-2 text-sm font-semibold uppercase tracking-wider">
                Diversion from landfill
              </div>
            </div>
            <div className="col-span-2 overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&h=500&q=80"
                alt="Responsible waste management and recycling operations across Dubai"
                width={1200}
                height={500}
                className="h-48 w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            align="center"
            title="Effortless 3-Step Process"
            description="From booking to clearance in as little as 30 minutes."
          />
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {steps.map((s, i) => {
              const Icon = stepIcons[i];
              return (
                <div key={s.title} className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl border-2 border-primary bg-surface">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-5 text-base font-bold text-ink">
                    {i + 1}. {s.title}
                  </h3>
                  <p className="mx-auto mt-2 max-w-xs text-sm text-muted-foreground">
                    {s.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Areas teaser */}
      <section className="bg-surface-muted py-16">
        <Container>
          <SectionHeading
            title="Areas We Serve Across Dubai"
            description="Dedicated junk pickup and collection teams in Dubai's leading residential and commercial communities."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {AREAS.slice(0, 8).map((a) => (
              <Link
                key={a.slug}
                href={`/areas/${a.slug}`}
                className="group relative block h-48 overflow-hidden rounded-2xl"
              >
                <Image
                  src={a.image}
                  alt={`Junk removal services in ${a.name}, Dubai`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <h3 className="text-base font-bold text-white">{a.name}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/areas" className="text-sm font-semibold text-primary hover:underline">
              View all {AREAS.length} areas →
            </Link>
          </div>
        </Container>
      </section>

      {/* SEO copy */}
      <section className="py-16">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold text-ink">Professional Junk Removal in Dubai</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              EcoHaul Dubai provides comprehensive junk removal services across Dubai — from
              Downtown Dubai and Business Bay to Palm Jumeirah and Arabian Ranches. Our teams handle
              furniture removal, appliance pickup, garden waste and full house clearance, sorting
              every load for maximum reuse in line with Dubai's 2030 sustainability vision.
            </p>
          </div>
          <div>
            <p className="mt-9 text-sm text-muted-foreground">
              Need same-day rubbish removal or a one-off junk pickup? From a single item to a
              complete villa clearance, our eco-trucks cover{" "}
              <strong>Dubai Marina, JLT, Emirates Hills and Arabian Ranches</strong>. Commercial
              clients receive documented waste collection and disposal chains for compliance and
              environmental audits — all backed by transparent, fixed pricing.
            </p>
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to clear your space?"
        description="Book professional junk removal and rubbish collection across Dubai today."
        primaryLabel="Book a Removal"
        secondaryLabel="WhatsApp Us"
      />
    </>
  );
}
