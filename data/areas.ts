export type Area = {
  slug: string;
  name: string;
  shortBlurb: string;
  longBlurb: string;
  image: string;
  type: "Residential" | "Commercial" | "Mixed";
  highlights: string[];
  faqs: { q: string; a: string }[];
};

const u = (id: string, w = 1200, h = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

const defaultFaqs = (area: string) => [
  { q: `Do you offer same day junk removal in ${area}?`, a: `Yes — we run dedicated crews near ${area} and can typically be on-site the same day when you book before 11:00 AM.` },
  { q: `What junk removal services do you cover in ${area}?`, a: `Furniture removal, appliance pickup, house and villa clearance, garden waste, office cleanouts and bulky items.` },
  { q: `How do I book a pickup in ${area}?`, a: `Call us, WhatsApp, or use the contact form. We confirm pricing on-site before any work starts.` },
];

const A = (
  slug: string,
  name: string,
  shortBlurb: string,
  longBlurb: string,
  imageId: string,
  type: Area["type"],
  highlights: string[],
): Area => ({
  slug,
  name,
  shortBlurb,
  longBlurb,
  image: u(imageId),
  type,
  highlights,
  faqs: defaultFaqs(name),
});

export const AREAS: Area[] = [
  A("dubai-marina", "Dubai Marina", "Dedicated high-rise waste logistics for residential towers.", "From penthouse furniture removal to full apartment clearances, our Dubai Marina team handles every tower in the community with service-lift expertise and after-hours scheduling.", "1512453979798-5ea266f8880c", "Residential", ["High-Rise Specialists", "Service-Lift Trained", "Concierge Coordination"]),
  A("jumeirah", "Jumeirah", "Villa-friendly crews for coastal Jumeirah homes.", "We serve every phase of Jumeirah with discreet villa clearance, garden waste pickup and white-glove furniture removal tailored to the area's premium homes.", "1518684079-3c830dcef090", "Residential", ["Villa Specialists", "Garden Waste", "Donation Routing"]),
  A("palm-jumeirah", "Palm Jumeirah", "White-glove residential removal services.", "Discreet, insured crews experienced with Palm Jumeirah's signature villas and apartments. We coordinate with community access and respect every property's standards.", "1518684079-3c830dcef090", "Residential", ["NDA Available", "Insured Crews", "Discreet Vehicles"]),
  A("downtown-dubai", "Downtown Dubai", "24/7 priority service for Burj area.", "Priority response for Downtown Dubai apartments, offices and retail units — out-of-hours scheduling to keep your address running smoothly.", "1528702748617-c64d49f918af", "Mixed", ["24/7 Response", "Out-of-Hours", "Building Coordination"]),
  A("business-bay", "Business Bay", "Corporate office clearance and document recycling.", "Specialist commercial logistics for Business Bay — office cleanouts, IT decommissioning and recurring rubbish collection for the district's leading firms.", "1745750434535-5943ef2fd31a", "Commercial", ["E-Waste Certified", "Out-of-Hours", "Corporate Contracts"]),
  A("dubai-hills-estate", "Dubai Hills Estate", "Family-villa clearance and garden waste pickup.", "Trusted by Dubai Hills households for villa clearance, garden waste pickup and home refresh removals across the community's phases.", "1571055107559-3e67626fa8be", "Residential", ["Villa Clearance", "Garden Waste", "Family Friendly"]),
  A("arabian-ranches", "Arabian Ranches", "Premium villa removal across the community.", "End-to-end villa clearance, garden waste and bulky item removal across Arabian Ranches I, II and III. We know every gate and access route.", "1545079968-1feb95494244", "Residential", ["Multi-Phase Coverage", "Community Approved", "Same-Day Slots"]),
  A("al-barsha", "Al Barsha", "Fast residential and small-business pickup.", "Reliable, low-cost junk removal for Al Barsha apartments, villas and small businesses — no minimum load, no hidden fees.", "1518684079-3c830dcef090", "Mixed", ["No Minimum Load", "Small Business", "Fast Slots"]),
  A("jvc", "JVC", "Fast community cleanup & garden waste.", "Dedicated JVC team for villa and townhouse pickups, garden waste clearance and rapid same-day response across all districts.", "1546412414-e1885259563a", "Residential", ["Daily Service", "Bulk Removal", "Same-Day Slots"]),
  A("jvt", "JVT", "Townhouse and villa clearance specialists.", "JVT-focused crews handling everything from single-item pickups to full townhouse clearances, with friendly community access coordination.", "1546412414-e1885259563a", "Residential", ["Townhouse Specialists", "Community Friendly", "Bulk Pickup"]),
  A("motor-city", "Motor City", "Apartment and townhouse junk removal.", "Service teams familiar with Motor City's apartment blocks and Green Community townhouses — same-day pickups available.", "1517512006864-7edc3b933137", "Mixed", ["Apartment Towers", "Townhouses", "Service Lift Trained"]),
  A("sports-city", "Sports City", "Reliable residential and gym-equipment pickup.", "From apartment furniture to gym equipment and bulky items, our Sports City team has the gear and experience for every job.", "1517512006864-7edc3b933137", "Mixed", ["Gym Equipment", "Bulky Items", "Same-Day Slots"]),
  A("discovery-gardens", "Discovery Gardens", "Apartment-friendly junk and furniture removal.", "Crews experienced with Discovery Gardens' building layouts and parking rules — quick, courteous and recycle-first.", "1517512006864-7edc3b933137", "Residential", ["Apartment Friendly", "Recycle First", "Quick Slots"]),
  A("the-greens", "The Greens", "Tower-friendly furniture and appliance removal.", "Service-lift trained crews for The Greens and The Views — careful with finishes, fast with bookings.", "1517512006864-7edc3b933137", "Residential", ["Service Lift", "Finish Protection", "Same-Day Slots"]),
  A("emirates-hills", "Emirates Hills", "White-glove luxury villa clearance.", "Confidential, insured villa clearance for Emirates Hills — multi-day coordination and concierge-style communication included.", "1613490493576-7fde63acd811", "Residential", ["NDA Available", "Multi-Day Projects", "Concierge Updates"]),
  A("meadows", "Meadows", "Family-villa clearance and garden waste.", "Friendly, reliable crews for Meadows villas — bulky items, garden waste and end-of-tenancy clearances handled in one visit.", "1571055107559-3e67626fa8be", "Residential", ["End-of-Tenancy", "Garden Waste", "Family Friendly"]),
  A("springs", "Springs", "Townhouse junk and furniture removal.", "Springs-focused crews with quick mobilisation for townhouse clearances, furniture removal and garden waste pickup.", "1571055107559-3e67626fa8be", "Residential", ["Townhouse Specialists", "Quick Slots", "Recycle First"]),
  A("mirdif", "Mirdif", "Reliable residential junk removal.", "Family-friendly service across Mirdif's villa communities, with bulky item pickup, furniture removal and garden waste in one visit.", "1571055107559-3e67626fa8be", "Residential", ["Family Friendly", "Bulky Items", "Same-Day Slots"]),
  A("al-furjan", "Al Furjan", "Villa and apartment junk removal.", "Crews experienced with Al Furjan's villa clusters and apartment blocks — same-day slots and clear, fixed pricing.", "1546412414-e1885259563a", "Mixed", ["Villas & Apartments", "Fixed Pricing", "Same-Day Slots"]),
  A("dubai-silicon-oasis", "Dubai Silicon Oasis", "Office and apartment junk removal.", "Mixed-use specialists for Dubai Silicon Oasis — office cleanouts, e-waste pickup and apartment furniture removal.", "1497366216548-37526070297c", "Mixed", ["E-Waste Certified", "Office Cleanouts", "Apartment Pickup"]),
  A("international-city", "International City", "Affordable apartment junk removal.", "Fast, low-cost service for International City apartments — no minimum load and same-day pickup available.", "1517512006864-7edc3b933137", "Residential", ["No Minimum Load", "Affordable", "Same-Day Slots"]),
  A("deira", "Deira", "Commercial and residential pickup.", "Deira specialists for shopfront cleanouts, residential pickups and bulk rubbish removal — recurring service contracts available.", "1512453979798-5ea266f8880c", "Mixed", ["Shopfront Service", "Recurring Contracts", "Bulk Pickup"]),
  A("bur-dubai", "Bur Dubai", "Heritage area apartment and office pickup.", "Careful, low-impact crews for Bur Dubai's apartments and offices — courteous service and quick same-day slots.", "1518684079-3c830dcef090", "Mixed", ["Low-Impact", "Quick Slots", "Office Friendly"]),
  A("dubai-creek-harbour", "Dubai Creek Harbour", "High-rise apartment furniture and appliance removal.", "Service-lift trained crews for Creek Harbour towers — perfect for furniture removal, appliance pickup and move-outs.", "1512453979798-5ea266f8880c", "Residential", ["Tower Specialists", "Move-Out Friendly", "Same-Day Slots"]),
  A("damac-hills", "Damac Hills", "Premium villa clearance specialists.", "Damac Hills villa clearance, garden waste and bulky item removal — community-approved crews and concierge communication.", "1613490493576-7fde63acd811", "Residential", ["Villa Clearance", "Garden Waste", "Concierge"]),
  A("damac-hills-2", "Damac Hills 2", "Townhouse and villa removal.", "End-to-end townhouse clearance across Damac Hills 2 phases — same-day bulky item pickup also available.", "1545079968-1feb95494244", "Residential", ["Townhouse Specialists", "Bulky Items", "Same-Day Slots"]),
  A("town-square", "Town Square", "Townhouse and apartment pickup.", "Reliable junk removal for Town Square — furniture pickup, garden waste and end-of-tenancy clearances handled in one visit.", "1546412414-e1885259563a", "Residential", ["End-of-Tenancy", "Garden Waste", "Friendly Crews"]),
  A("mudon", "Mudon", "Family villa junk removal.", "Mudon villa clearance, garden waste and bulky item removal with friendly, family-aware crews.", "1571055107559-3e67626fa8be", "Residential", ["Family Friendly", "Garden Waste", "Same-Day Slots"]),
  A("remraam", "Remraam", "Apartment junk and furniture removal.", "Quick, affordable crews for Remraam apartments — no minimum load and recycle-first handling.", "1517512006864-7edc3b933137", "Residential", ["Affordable", "No Minimum Load", "Recycle First"]),
  A("dubai-south", "Dubai South", "Residential and commercial pickup.", "Dubai South coverage for villas, apartments and Expo-area businesses — flexible scheduling and bulk capacity available.", "1528702748617-c64d49f918af", "Mixed", ["Flexible Scheduling", "Bulk Capacity", "Commercial Friendly"]),
];

export const getArea = (slug: string) => AREAS.find((a) => a.slug === slug) ?? null;
