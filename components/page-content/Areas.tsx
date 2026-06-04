import { Seo } from "@/components/Seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AREAS } from "@/data/areas";
import { AreaCard } from "@/components/sections/AreaCard";
import { CTASection } from "@/components/sections/CTASection";
import { telHref } from "@/data/contact";

export default function Areas() {
  return (
    <>
      <Seo
        title="Areas We Serve | Junk Removal Dubai — EcoHaul Dubai"
        description="EcoHaul covers 30+ Dubai communities — Marina, Palm Jumeirah, Downtown, Business Bay, JVC, Arabian Ranches, Emirates Hills and more."
        path="/areas"
      />

      <section className="py-12 sm:py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-accent-foreground">Local Logistics Experts</span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
              Junk Removal Across the <span className="text-primary">Emirate.</span>
            </h1>
            <p className="mt-4 max-w-lg text-muted-foreground">
              From the heights of Dubai Marina to the family communities in JVC, we provide premium, eco-conscious removal services wherever you are located.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={telHref} className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:brightness-95">Check Availability</a>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-surface-muted p-6 shadow-card">
            <img src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&h=800&q=80" alt="Dubai map coverage" className="h-72 w-full rounded-2xl object-cover sm:h-96" />
            <div className="absolute bottom-10 left-10 rounded-2xl bg-surface px-5 py-3 shadow-card">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Live Coverage</div>
              <div className="text-lg font-bold text-ink">98% of Dubai Areas</div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading title="Premium Service Hubs" description="Specialized logistics teams assigned to specific districts for 2-hour response times." />
            <div className="flex gap-2">
              <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-accent-foreground">Residential</span>
              <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-accent-foreground">Commercial</span>
            </div>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {AREAS.slice(0, 3).map((a) => <AreaCard key={a.slug} area={a} />)}
            <AreaCard area={AREAS[4]} variant="solid" />
            {AREAS.slice(5).map((a) => <AreaCard key={a.slug} area={a} />)}
          </div>
        </Container>
      </section>

      <section className="bg-surface-muted py-16">
        <Container className="grid gap-10 text-center">
          <SectionHeading align="center" title="Don't see your area?" description="We are rapidly expanding. Enter your community name to check our current logistics availability." />
          <div className="mx-auto grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]">
            <input
              type="text"
              placeholder="Search your community (e.g. Al Barsha, Mirdif)"
              className="w-full rounded-full border border-border bg-surface px-5 py-3 text-sm focus:border-primary focus:outline-none"
            />
            <a href={telHref} className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:brightness-95">
              Check Availability
            </a>
          </div>
          <div className="mx-auto grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { value: "45+", label: "Communities" },
              { value: "120", label: "Logistics Hubs" },
              { value: "2hr", label: "Avg Response" },
              { value: "95%", label: "Recycle Rate" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border-b-4 border-primary bg-surface px-4 py-6">
                <div className="text-3xl font-extrabold text-primary">{s.value}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection title="Book a same day pickup in your area" primaryLabel="Same Day Pickup" />
    </>
  );
}
