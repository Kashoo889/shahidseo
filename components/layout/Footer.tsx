import Link from "next/link";
import Image from "next/image";
import { CONTACT, telHref, waHref } from "@/data/contact";
import { Container } from "@/components/ui/Container";
import { SERVICES } from "@/data/services";
import { AREAS } from "@/data/areas";

const resources = [
  { label: "Blog & Guides", to: "/blog" },
  { label: "Sustainability Report", to: "/about" },
  { label: "Electronic Junk Removal", to: "/services/appliance-removal-dubai" },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface-muted">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/dubai-junk-removal-logo.png"
            alt="EcoHaul Dubai"
            width={128}
            height={128}
            className="h-20 w-20 object-contain"
          />
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Premium, sustainable junk removal. Transforming Dubai's haul at a time.
          </p>
          <div className="mt-4 space-y-1 text-sm text-muted-foreground">
            <a href={telHref} className="block hover:text-ink">
              Call: {CONTACT.phoneDisplay}
            </a>
            <a href={waHref} target="_blank" rel="noreferrer" className="block hover:text-ink">
              WhatsApp: {CONTACT.phoneDisplay}
            </a>
            <span className="block">{CONTACT.office}</span>
          </div>
        </div>

        <FooterCol
          title="Services"
          links={SERVICES.slice(0, 6).map((s) => ({
            label: s.shortTitle,
            to: `/services/${s.slug}`,
          }))}
        />
        <FooterCol title="Resources" links={resources} />

        <FooterCol
          title="Areas"
          links={[
            ...AREAS.slice(0, 5).map((a) => ({ label: a.name, to: `/areas/${a.slug}` })),
            { label: "View all areas", to: "/areas" },
          ]}
        />
      </Container>

      <div className="border-t border-border/70 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} EcoHaul Dubai. Premium Junk Removal Across Dubai.
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-wider text-ink">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.to} className="hover:text-ink">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
