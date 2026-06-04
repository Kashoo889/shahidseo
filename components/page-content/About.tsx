import { Seo } from "@/components/Seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Leaf, ShieldCheck, Clock, Eye } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { telHref } from "@/data/contact";

const values = [
  { icon: Leaf, title: "Uncompromising Sustainability", description: "Our circular economy model ensures that 95% of all collected materials are successfully diverted from Dubai's landfills through intensive sorting and local recycling partnerships." },
  { icon: ShieldCheck, title: "Professionalism", description: "Uniformed experts, white-glove handling, and precise scheduling for a frictionless experience." },
  { icon: Clock, title: "Reliability", description: "On-time collection and real-time status updates via our logistics dashboard." },
  { icon: Eye, title: "Transparency", description: "We provide digital waste manifests for every pickup, detailing the environmental impact and recycling journey of your discarded items." },
];

const trust = ["ISO 14001 Certified", "Dubai Municipality Licensed", "Net-Zero Commitment", "Fully Insured Logistics"];

export default function About() {
  return (
    <>
      <Seo
        title="About EcoHaul Dubai | Premium Junk Removal"
        description="Founded in 2018, EcoHaul Dubai leads premium, sustainable junk removal across the UAE — backed by certified recycling partners and a fleet of low-emission vehicles."
        path="/about"
      />

      <section className="py-12 sm:py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Redefining Logistics</span>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
              Leading Dubai's Transition to <span className="text-primary">Sustainable Waste Management.</span>
            </h1>
            <p className="mt-5 max-w-lg text-muted-foreground">
              We combine high-end logistics with environmental responsibility to offer Dubai's premier residential and commercial junk removal experience.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={telHref} className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:brightness-95">Explore Services</a>
              <a href="#values" className="rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-ink hover:bg-muted">Our Sustainability Report</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-card">
            <img src="https://images.unsplash.com/photo-1776885008664-68b2988373e6?auto=format&fit=crop&w=1200&h=800&q=70" alt="Junk removal team loading furniture into a truck" className="h-full w-full object-cover" />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&h=900&q=80" alt="Modern office" className="rounded-3xl object-cover" />
            <div className="absolute -bottom-4 -right-2 rounded-2xl bg-primary px-5 py-4 text-primary-foreground shadow-card sm:-right-6">
              <div className="text-2xl font-extrabold">10k+</div>
              <div className="text-xs font-semibold uppercase tracking-wider">Metric tons diverted since 2018</div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-ink sm:text-3xl">The Evolution of Clean Logistics</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Founded in 2018, EcoHaul Dubai began with a simple observation: waste management in the UAE lacked the premium touch and environmental transparency that modern households and corporations deserve.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              We transformed from a standard removal service to a sophisticated logistics firm. By integrating real-time tracking, sorting facilities that prioritise circularity, and a fleet of low-emission vehicles, we've set a new standard for premium junk removal.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Today, we serve Dubai's most prestigious residences and commercial hubs, ensuring that every item we collect is either recycled, repurposed, or responsibly managed with a 100% transparency guarantee.
            </p>
            <p className="mt-4 text-sm font-semibold italic text-primary">"Sustainability is not an option; it's our identity."</p>
          </div>
        </Container>
      </section>

      <section id="values" className="bg-surface-muted py-16">
        <Container>
          <SectionHeading align="center" title="Guided by Our Core Values" description="The pillars that uphold our commitment to Dubai and the planet." />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {values.slice(0, 3).map((v) => (
              <div key={v.title} className="rounded-2xl bg-surface p-6 shadow-soft">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-soft text-primary">
                  <v.icon className="h-4 w-4" />
                </div>
                <h3 className="mt-5 text-base font-bold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.description}</p>
              </div>
            ))}
            <div className="rounded-2xl bg-ink p-6 text-white shadow-card">
              <Eye className="h-5 w-5 text-primary" />
              <h3 className="mt-5 text-base font-bold">{values[3].title}</h3>
              <p className="mt-2 text-sm opacity-90">{values[3].description}</p>
              <div className="mt-6 h-0.5 w-16 bg-primary" />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface-muted py-10">
        <Container className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {trust.map((t) => (
            <span key={t} className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" /> {t}
            </span>
          ))}
        </Container>
      </section>

      <CTASection title="Ready to experience premium junk removal?" description="Book a professional collection today and receive a detailed environmental impact report for your household or business." primaryLabel="Book a Collection" secondaryLabel="Contact Our Experts" />
    </>
  );
}
