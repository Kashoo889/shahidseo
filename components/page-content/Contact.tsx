"use client";

import { useState } from "react";
import { Phone, MessageCircle, MapPin, Send, Leaf, Clock, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { Seo } from "@/components/Seo";
import { Container } from "@/components/ui/Container";
import { CONTACT, telHref, waHref } from "@/data/contact";
import { SERVICES } from "@/data/services";
import { AREAS } from "@/data/areas";

const cards = [
  { icon: Leaf, title: "Sustainable", description: "We recycle over 95% of all collected materials in collaboration with Dubai Municipality." },
  { icon: Clock, title: "Swift Response", description: "Arrival at your location within 2 hours of confirmation, anywhere in Dubai." },
  { icon: ShieldCheck, title: "Certified", description: "Fully licensed and insured waste management logistics for commercial and residential sectors." },
];

export default function Contact() {
  const [sending, setSending] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Thanks — we'll be in touch within 1 hour.");
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <>
      <Seo
        title="Contact EcoHaul Dubai | Junk Removal & Logistics"
        description="Get in touch for premium junk removal in Dubai. Call 050 325 0142, WhatsApp 24/7, or send a message to schedule a pickup."
        path="/contact"
      />

      <section className="py-12 sm:py-16">
        <Container>
          <span className="inline-flex items-center rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-accent-foreground">Reliable & Sustainable</span>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
            Get in touch for premium logistics solutions.
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Whether it's a home clearance or commercial junk removal, our team is ready to assist you 24/7 across Dubai.
          </p>
        </Container>
      </section>

      <section className="pb-16">
        <Container className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* Form */}
          <form onSubmit={submit} className="rounded-3xl border border-border bg-surface p-6 shadow-card sm:p-10">
            <h2 className="text-xl font-bold text-ink">Send Us a Message</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" name="name" placeholder="John Doe" />
              <Field label="Phone Number" name="phone" placeholder="+971 50 000 0000" />
              <Select label="Service Area" name="area" options={AREAS.map((a) => a.name)} />
              <Select label="Service Type" name="service" options={SERVICES.map((s) => s.shortTitle)} />
            </div>
            <div className="mt-5">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message (optional)</label>
              <textarea name="message" rows={4} placeholder="Tell us more about your requirements..." className="mt-2 w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm focus:border-primary focus:outline-none" />
            </div>
            <button type="submit" disabled={sending} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-sm font-semibold text-primary-foreground hover:brightness-95 disabled:opacity-60">
              {sending ? "Sending..." : (<>Send Inquiry <Send className="h-4 w-4" /></>)}
            </button>
          </form>

          {/* Right column */}
          <div className="space-y-4">
            <InfoCard icon={Phone} label="Call Now" value={CONTACT.phoneDisplay} href={telHref} />
            <InfoCard icon={MessageCircle} label="WhatsApp" value={CONTACT.phoneDisplay} href={waHref} external />

            <div className="rounded-2xl border border-border bg-surface p-6 shadow-soft">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Office Location</div>
              <p className="mt-2 text-sm font-medium text-ink">{CONTACT.office}</p>
              <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                <span className="inline-block h-2 w-2 rounded-full bg-primary" /> Open 24/7 for Emergencies
              </p>
              <div className="mt-4 border-t border-border pt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Standard Hours</div>
              <div className="mt-2 flex items-center justify-between text-sm text-ink">
                <span>Mon – Sun</span>
                <span className="font-semibold">Always Available</span>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-card">
              <img src="https://images.unsplash.com/photo-1582672060674-bc2bd808a8f5?auto=format&fit=crop&w=900&h=700&q=80" alt="Find us in Business Bay" className="h-56 w-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-sm font-semibold text-ink shadow-card">
                  <MapPin className="h-4 w-4 text-primary" /> Find us in Business Bay
                </span>
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
    </>
  );
}

function Field({ label, name, placeholder }: { label: string; name: string; placeholder: string }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      <input name={name} placeholder={placeholder} required className="mt-2 w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm focus:border-primary focus:outline-none" />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      <select name={name} required className="mt-2 w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm focus:border-primary focus:outline-none">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}

function InfoCard({ icon: Icon, label, value, href, external }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; href: string; external?: boolean }) {
  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 shadow-soft hover:border-primary">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="text-lg font-bold text-primary">{value}</div>
      </div>
    </a>
  );
}
