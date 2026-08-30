"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { Seo } from "@/components/Seo";
import { AREAS } from "@/data/areas";
import { AreaCard } from "@/components/sections/AreaCard";
import { CTASection } from "@/components/sections/CTASection";
import { telHref } from "@/data/contact";
import { collectionPageSchema, breadcrumbSchema } from "@/lib/schema";

const breadcrumbsData = [
  { name: "Home", path: "/" },
  { name: "Areas We Serve", path: "/areas" },
];

export default function Areas() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const filtered = q ? AREAS.filter((a) => a.name.toLowerCase().includes(q)) : AREAS;

  const schemas = [
    collectionPageSchema({
      name: "Areas We Serve | Junk Removal Dubai - EcoHaul Dubai",
      description: `EcoHaul covers ${AREAS.length} Dubai communities including Marina, Palm Jumeirah, Downtown, Business Bay, JVC, Arabian Ranches, Emirates Hills and more.`,
      path: "/areas",
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
            { label: "Areas We Serve" },
          ]}
        />
      </Container>

      <section className="py-12 sm:py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-accent-foreground">
              Local Junk Experts
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
              Junk Removal Across <span className="text-primary">Dubai.</span>
            </h1>

            <p className="mt-4 max-w-lg text-muted-foreground">
              From the heights of Dubai Marina to the family communities in JVC, we provide premium,
              eco-conscious removal services wherever you are located.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={telHref}
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:brightness-95"
              >
                Check Availability
              </a>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-surface-muted p-6 shadow-card">
            <Image
              src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&h=800&q=80"
              alt="Live junk removal and same-day coverage network across Dubai communities"
              width={1200}
              height={800}
              className="h-72 w-full rounded-2xl object-cover sm:h-96"
            />

            <div className="absolute bottom-10 left-10 rounded-2xl bg-surface px-5 py-3 shadow-card">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Live Coverage
              </div>
              <div className="text-lg font-bold text-ink">98% of Dubai Areas</div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              title="Premium Service Hubs"
              description="Specialized junk removal teams assigned to specific districts for 30-minute response times."
            />
            <div className="flex gap-2">
              <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-accent-foreground">
                Residential
              </span>
              <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-accent-foreground">
                Commercial
              </span>
            </div>
          </div>
          {filtered.length > 0 ? (
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {filtered.map((a, i) => (
                <AreaCard key={a.slug} area={a} variant={i === 4 ? "solid" : "image"} />
              ))}
            </div>
          ) : (
            <p className="mt-10 text-sm text-muted-foreground" role="status" aria-live="polite">
              No areas match “{query}”. Call us — we may still cover your community.
            </p>
          )}
        </Container>
      </section>

      <section className="bg-surface-muted py-16">
        <Container className="grid gap-10 text-center">
          <SectionHeading
            align="center"
            title="Don't see your area?"
            description="We are rapidly expanding. Enter your community name to check our current junk removal availability."
          />
          <div className="mx-auto grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search your community (e.g. Dubai Marina, Meydan)"
              aria-label="Search service areas"
              className="w-full rounded-full border border-border bg-surface px-5 py-3 text-sm focus:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
            <a
              href={telHref}
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:brightness-95"
            >
              Check Availability
            </a>
          </div>
          <div className="mx-auto grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { value: `${AREAS.length}`, label: "Communities" },
              { value: "120", label: "Junk Experts" },
              { value: "30 min", label: "Avg Response" },
              { value: "95%", label: "Recycle Rate" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border-b-4 border-primary bg-surface px-4 py-6"
              >
                <div className="text-3xl font-extrabold text-primary">{s.value}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection title="Book a same day pickup in your area" primaryLabel="Same Day Pickup" />
    </>
  );
}
