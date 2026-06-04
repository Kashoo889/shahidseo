## Overview

Build a multi-page **React + React Router** site for **EcoHaul Dubai** (premium junk removal in Dubai) matching the 6 Stitch screenshots exactly — warm off-white background, bright green accent, bold sans display, rounded cards, soft shadows, mobile sticky Call/WhatsApp + floating WhatsApp bubble.

Routing: `react-router-dom` `<BrowserRouter>` mounted from a single root route. Pages are plain React components under `src/pages/`. The existing TanStack route file becomes a thin shell that renders `<AppRouter />`.

## Pages & Routes

| Path | Component |
|---|---|
| `/` | `pages/Home.tsx` (screen.png) |
| `/services` | `pages/Services.tsx` (screen2.png) |
| `/services/:slug` | `pages/ServiceDetail.tsx` (screen4.png; sample = `furniture-removal-dubai`) |
| `/areas` | `pages/Areas.tsx` (screen3.png) |
| `/areas/:slug` | `pages/AreaDetail.tsx` |
| `/about` | `pages/About.tsx` (screen6.png) |
| `/contact` | `pages/Contact.tsx` (screen5.png) |
| `/faq` | `pages/Faq.tsx` |
| `*` | `pages/NotFound.tsx` |

## Component Structure

```
src/
  AppRouter.tsx           BrowserRouter + Routes
  components/
    layout/   Header, Footer, MobileStickyBar, FloatingWhatsApp, PageShell
    ui/       Button, Card, Badge, SectionHeading, Container, Accordion
    sections/ Hero, ServiceCard, AreaCard, ProcessSteps, FAQList,
              CTASection, ValueCard, TeamCard, StatsRow, TrustBar
    templates/ ServicePageTemplate, AreaPageTemplate
  pages/      (one file per route above)
  data/
    services.ts   // 10 services
    areas.ts      // 30 Dubai areas
    contact.ts    // phone + whatsapp
    nav.ts, faqs.ts, team.ts, values.ts
  styles.css    // design tokens
```

## Reusable Templates

- **ServicePageTemplate** — Hero (image + badge + 2 CTAs) → Overview → What's Included (4 icon cards) → Why Choose Us → 4-step Process timeline → Areas Served chips → FAQ accordion → Other Services strip → CTA banner. Driven entirely by the `services.ts` record.
- **AreaPageTemplate** — Area Hero → Services Available (linked) → Why Choose Us in {area} → Process → FAQ → CTA. Driven by `areas.ts`.

## Design System (`src/styles.css`)

- Warm off-white background `#F7F7F4`, white surface, near-black foreground.
- Primary green ≈ `oklch(0.62 0.18 145)` matching CTA buttons in screens.
- Display: Plus Jakarta Sans / Sora bold. Body: Inter.
- Rounded-2xl cards, soft shadow, 1px subtle borders, generous spacing.
- All colors use semantic tokens — never raw hex in components.

## Contact / CTAs

Central `src/data/contact.ts`:
- `tel:0503250142` on every Call button
- `https://wa.me/971503250142` on every WhatsApp button
- Display: `050 325 0142`

Used by Header CTA, Footer, MobileStickyBar (fixed bottom split Call/WhatsApp, mobile only), FloatingWhatsApp (green bubble, bottom-right), CTA sections, Contact cards.

CTA labels rotated naturally: Call Now, WhatsApp Us, Book Junk Pickup, Schedule Pickup, Same Day Pickup. No "quote"/"free quote" wording.

## SEO

`react-helmet-async` per page with unique title/description/og tags + canonical. JSON-LD:
- Sitewide: Organization (EcoHaul Dubai, Dubai, phone)
- Service pages: `Service` schema, `areaServed: Dubai`
- Area pages: `LocalBusiness` scoped to area
- FAQ page + service/area FAQ blocks: `FAQPage`

One H1 per page. Slugs: `/services/furniture-removal-dubai`, `/areas/dubai-marina`, etc. Keywords woven naturally into hero/overview/FAQ — no stuffing.

## Content Edit Locations

- Services → `src/data/services.ts`
- Areas → `src/data/areas.ts`
- Phone / WhatsApp → `src/data/contact.ts`
- Nav → `src/data/nav.ts`
- Team, values, stats, testimonials → respective `src/data/*.ts`
- Images → `src/assets/` (generated placeholders for hero/trucks/areas/team)

## Deliverables on Completion

1. Page list 2. Component tree 3. Routes table 4. Edit-location map 5. SEO/heading hierarchy summary.

## Assumptions

- Keeping the **EcoHaul Dubai** brand from the designs.
- Header includes FAQ link (per screens) → `/faq` route added.
- **Construction Waste / renovation** services shown in designs are **excluded** per your requirements; those slots are filled with allowed services (House Clearance, Garden Waste, etc.).
- Generated placeholder images for hero, trucks, Dubai areas, interiors, team.
- Contact form is client-side only (success toast). Tell me if you want Lovable Cloud wired to persist submissions.
- Implementation will install `react-router-dom` and `react-helmet-async`; the existing TanStack route file becomes a single catch-all shell that mounts `<AppRouter />`.
