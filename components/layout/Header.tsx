"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS } from "@/data/nav";
import { telHref, CONTACT } from "@/data/contact";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const currentPath = usePathname() ?? "/";

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-6 lg:h-20">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/dubai-junk-removal-logo.png"
            alt="EcoHaul Dubai"
            width={96}
            height={96}
            className="h-12 w-12 object-contain lg:h-14 lg:w-14"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main Navigation">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              className={cn(
                "text-sm font-medium text-muted-foreground transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-1",
                (l.to === "/" ? currentPath === "/" : currentPath.startsWith(l.to)) &&
                  "text-ink underline decoration-primary decoration-2 underline-offset-8 font-semibold",
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={telHref}
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:inline-flex"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <div
          id="mobile-navigation"
          className="border-t border-border bg-surface lg:hidden"
          aria-label="Mobile Navigation"
        >
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                href={l.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-base font-medium text-muted-foreground hover:bg-muted hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  (l.to === "/" ? currentPath === "/" : currentPath.startsWith(l.to)) &&
                    "bg-primary-soft text-ink font-semibold",
                )}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={telHref}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Phone className="h-4 w-4" /> Call {CONTACT.phoneDisplay}
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
