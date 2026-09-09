import Link from "next/link";
import { Phone, MessageCircle, ArrowRight, Compass } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SERVICES } from "@/data/services";
import { AREAS } from "@/data/areas";
import { telHref, waHref, CONTACT } from "@/data/contact";

export default function NotFound() {
  const topServices = SERVICES.slice(0, 4);
  const topAreas = AREAS.slice(0, 6);

  return (
    <div className="py-16 sm:py-24">
      <Container className="max-w-4xl text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-3.5 py-1 text-xs font-semibold text-accent-foreground">
          <Compass className="h-3.5 w-3.5" /> 404 - Page Not Found
        </span>
        <h1 className="mt-4 text-4xl font-extrabold text-ink sm:text-6xl">
          Looking for Junk Removal in Dubai?
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
          The page you requested may have moved or no longer exists. Let's get you back on track to
          our same-day removal services and community hubs.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:brightness-95"
          >
            Return to Homepage
          </Link>
          <a
            href={waHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-ink shadow-soft hover:bg-muted"
          >
            <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp Concierge
          </a>
          <a
            href={telHref}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-ink shadow-soft hover:bg-muted"
          >
            <Phone className="h-4 w-4 text-primary" /> Call {CONTACT.phoneDisplay}
          </a>
        </div>

        {/* Quick Links Section */}
        <div className="mt-16 grid gap-8 text-left md:grid-cols-2">
          {/* Top Services */}
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-soft">
            <h2 className="text-base font-bold text-ink">Popular Removal Services</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {topServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex items-center justify-between text-muted-foreground hover:text-primary"
                  >
                    <span>{service.title}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 border-t border-border pt-3">
              <Link href="/services" className="text-xs font-semibold text-primary hover:underline">
                View all services →
              </Link>
            </div>
          </div>

          {/* Top Areas */}
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-soft">
            <h2 className="text-base font-bold text-ink">Service Areas in Dubai</h2>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {topAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas/${area.slug}`}
                    className="block rounded-lg px-2.5 py-1.5 text-muted-foreground hover:bg-muted hover:text-ink"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 border-t border-border pt-3">
              <Link href="/areas" className="text-xs font-semibold text-primary hover:underline">
                View all {AREAS.length} service communities →
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
