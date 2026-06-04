export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  heroImage: string;
  cardImage?: string;
  icon: string; // lucide icon name
  included: { title: string; description: string }[];
  whyChoose: { title: string; description: string }[];
  faqs: { q: string; a: string }[];
  cta: string;
};

const u = (id: string, w = 1200, h = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const SERVICES: Service[] = [
  {
    slug: "junk-removal-dubai",
    title: "Junk Removal Dubai",
    shortTitle: "Junk Removal",
    tagline: "Premium Logistics",
    description:
      "Full-service junk removal across Dubai. We sort, load and haul away household and commercial items the same day, with a 95% recycle rate.",
    heroImage: u("1558618666-fcd25c85cd64"),
    icon: "Trash2",
    included: [
      { title: "Whole-Home Pickup", description: "From a single sofa to an entire villa clearance, handled end to end." },
      { title: "Same-Day Scheduling", description: "Book before 11:00 AM and our team arrives within hours." },
      { title: "Sorting & Recycling", description: "Materials are diverted to Dubai Municipality recycling partners." },
      { title: "Spotless Finish", description: "Floors swept and surfaces wiped before our crew leaves." },
    ],
    whyChoose: [
      { title: "Eco-Certified Crews", description: "ISO 14001 trained teams with a documented diversion rate." },
      { title: "Transparent Pricing", description: "Fixed on-site pricing — no hidden fuel or logistics surcharges." },
      { title: "Fully Insured", description: "AED 10M liability coverage on every pickup, residential or commercial." },
    ],
    faqs: [
      { q: "How fast can you pick up junk in Dubai?", a: "Most bookings are completed the same day. Express slots are available for emergencies — call or WhatsApp us to confirm." },
      { q: "What items do you take?", a: "Furniture, appliances, electronics, garden waste, household clutter, and bulky items. We do not handle hazardous or regulated materials." },
      { q: "Do you recycle what you collect?", a: "Yes — 95%+ of collected materials are routed to licensed recyclers and donation partners across the UAE." },
    ],
    cta: "Book Junk Pickup",
  },
  {
    slug: "furniture-removal-dubai",
    title: "Furniture Removal Dubai",
    shortTitle: "Furniture Removal",
    tagline: "Premium Logistics",
    description:
      "Eco-conscious furniture disposal for Dubai's finest homes and offices. We handle the heavy lifting while you enjoy your space.",
    heroImage: u("1586023492125-27b2c045efd7"),
    icon: "Sofa",
    included: [
      { title: "Living & Dining", description: "Sofas, armchairs, dining tables, sideboards, and heavy entertainment units." },
      { title: "Bedroom Suites", description: "Mattresses, bed frames, wardrobes, and delicate vanity sets." },
      { title: "Office Furniture", description: "Desks, ergonomic chairs, filing cabinets, and conference room setups." },
      { title: "Outdoor & Patio", description: "Garden sets, parasols, heavy planters, and outdoor storage units." },
    ],
    whyChoose: [
      { title: "White-Glove Handling", description: "Floor protection and wall pads on every job — zero scratches, guaranteed." },
      { title: "Donation Partners", description: "Reusable pieces routed to vetted Dubai charities whenever possible." },
      { title: "Same-Day Service", description: "Express same-day pickups for bookings made before 11:00 AM." },
    ],
    faqs: [
      { q: "Do you provide same-day furniture removal?", a: "Yes, we offer express same-day services for bookings made before 11:00 AM across most Dubai residential and commercial zones." },
      { q: "What happens to my old furniture?", a: "Pieces in good condition are donated through our charity partners. The rest is dismantled and routed to recycling facilities." },
      { q: "How do you calculate pricing?", a: "Pricing is based on volume and access. We give you a fixed on-site price before any work begins — no surprises." },
    ],
    cta: "Schedule Pickup",
  },
  {
    slug: "appliance-removal-dubai",
    title: "Appliance Removal Dubai",
    shortTitle: "Appliance Removal",
    tagline: "Eco-Disposal",
    description:
      "Responsible disposal and recycling of white goods — refrigerators, washing machines, ovens and AC units — across Dubai.",
    heroImage: u("1556909114-f6e7ad7d3136"),
    icon: "Refrigerator",
    included: [
      { title: "Refrigerators & Freezers", description: "Refrigerant safely drained and reclaimed by licensed technicians." },
      { title: "Washers & Dryers", description: "Disconnected, hauled and recycled with zero water damage to your space." },
      { title: "Cooking Appliances", description: "Ovens, hobs, microwaves and dishwashers removed cleanly." },
      { title: "AC Units & Heaters", description: "Wall and split units uninstalled and routed for component recovery." },
    ],
    whyChoose: [
      { title: "Refrigerant Compliance", description: "Certified handling of gases in line with UAE environmental regulations." },
      { title: "Two-Person Crews", description: "Heavy units handled safely without damage to floors or doorways." },
      { title: "Metal Recovery", description: "Copper, aluminium and steel components recycled responsibly." },
    ],
    faqs: [
      { q: "Do you disconnect appliances on site?", a: "Yes — our crews handle safe disconnection of plumbing and power before removal." },
      { q: "Can you remove a fridge from a high-rise apartment?", a: "Absolutely. We use service lifts where available and protect all common areas." },
      { q: "How are old appliances recycled?", a: "Units are sent to licensed UAE recyclers for refrigerant capture and metal/plastic recovery." },
    ],
    cta: "Book Appliance Pickup",
  },
  {
    slug: "office-cleanout-dubai",
    title: "Office Cleanout Dubai",
    shortTitle: "Office Cleanout",
    tagline: "Corporate Logistics",
    description:
      "Specialized logistics for commercial downsizing or relocation. We manage e-waste and office furniture with zero-landfill goals.",
    heroImage: u("1497366216548-37526070297c"),
    icon: "Building2",
    included: [
      { title: "Workstation Decommissioning", description: "Desks, partitions and cable management removed in one coordinated sweep." },
      { title: "IT & E-Waste", description: "Secure handling and certified destruction for sensitive equipment." },
      { title: "Conference Rooms", description: "Boardroom tables, AV gear and seating cleared overnight if needed." },
      { title: "Out-of-Hours Service", description: "Evening and weekend scheduling to keep your business running." },
    ],
    whyChoose: [
      { title: "E-Waste Certified", description: "Compliant chain-of-custody documentation for every IT asset." },
      { title: "Corporate Partner", description: "Trusted by professional services firms across DIFC and Business Bay." },
      { title: "Single Point of Contact", description: "One project lead from first call to final walk-through." },
    ],
    faqs: [
      { q: "Can you work outside business hours?", a: "Yes — most office cleanouts are scheduled evenings or weekends to avoid disruption." },
      { q: "Do you provide data destruction certificates?", a: "Yes, every IT asset is logged and certified through our e-waste partner." },
      { q: "How quickly can you mobilise a team?", a: "Standard mobilisation is 48 hours; emergency cleanouts can be arranged within 24 hours." },
    ],
    cta: "Book Office Cleanout",
  },
  {
    slug: "garden-waste-removal-dubai",
    title: "Garden Waste Removal Dubai",
    shortTitle: "Garden Waste Removal",
    tagline: "Outdoor Logistics",
    description:
      "Fast, tidy clearance of landscaping waste, palm trimmings, soil and garden clutter across Dubai villas and compounds.",
    heroImage: u("1466692476868-aef1dfb1e735"),
    icon: "Leaf",
    included: [
      { title: "Palm & Tree Cuttings", description: "Heavy fronds, branches and trunks loaded and hauled away." },
      { title: "Landscaping Debris", description: "Soil bags, gravel, turf offcuts and pots removed in one trip." },
      { title: "Garden Furniture", description: "Worn outdoor seating, parasols and BBQs taken for recycling." },
      { title: "Post-Storm Cleanup", description: "Rapid response after heavy rain or sandstorms." },
    ],
    whyChoose: [
      { title: "Composting Partners", description: "Green waste routed to UAE composting facilities, not landfill." },
      { title: "Villa-Friendly Crews", description: "Quiet operations and careful access through landscaped areas." },
      { title: "Bulk Capacity", description: "Tippers and bins sized for whole-compound jobs." },
    ],
    faqs: [
      { q: "Do you remove palm tree trunks?", a: "Yes — we handle full trunks, fronds and root balls. Pricing depends on size and access." },
      { q: "Can you collect from a gated community?", a: "Of course. Our crews are familiar with access rules across all major Dubai communities." },
      { q: "Is the green waste composted?", a: "Wherever possible, yes. Hardwood and contaminated material goes to licensed recyclers." },
    ],
    cta: "Schedule Garden Pickup",
  },
  {
    slug: "house-clearance-dubai",
    title: "House Clearance Dubai",
    shortTitle: "House Clearance",
    tagline: "Whole-Home Service",
    description:
      "End-to-end house clearance for moves, estates and seasonal resets. One team, one schedule, one transparent price.",
    heroImage: u("1505691938895-1758d7feb511"),
    icon: "Home",
    included: [
      { title: "Room-by-Room Clearance", description: "Systematic clearance with sorting for keep, donate and recycle." },
      { title: "Heavy Items", description: "Pianos, safes and oversized wardrobes handled by trained crews." },
      { title: "Final Sweep", description: "Property left swept and ready for handover or move-in." },
      { title: "Donation Coordination", description: "Reusable items routed to our vetted Dubai charity partners." },
    ],
    whyChoose: [
      { title: "Tenancy-Friendly", description: "Reports and photos provided for landlord or move-out handovers." },
      { title: "Discreet Service", description: "Unbranded vehicles available for sensitive estate clearances." },
      { title: "Fixed Pricing", description: "All-in pricing covering labour, transport and disposal fees." },
    ],
    faqs: [
      { q: "How long does a full house clearance take?", a: "A 2-bedroom apartment typically takes half a day; a large villa can take 1–2 days depending on contents." },
      { q: "Can you work to a tenancy deadline?", a: "Yes — we regularly handle end-of-tenancy clearances and provide handover-ready reports." },
      { q: "Do you handle valuables?", a: "We never touch personal valuables. Anything found is set aside for you immediately." },
    ],
    cta: "Book House Clearance",
  },
  {
    slug: "villa-clearance-dubai",
    title: "Villa Clearance Dubai",
    shortTitle: "Villa Clearance",
    tagline: "Premium Estates",
    description:
      "White-glove villa clearance for Dubai's prestige communities — Emirates Hills, Palm Jumeirah, Arabian Ranches and beyond.",
    heroImage: u("1613490493576-7fde63acd811"),
    icon: "Castle",
    included: [
      { title: "Multi-Day Coordination", description: "Phased clearance across multiple floors and outbuildings." },
      { title: "Designer Furniture", description: "Careful handling and donation routing for high-end pieces." },
      { title: "Garden & Pool Area", description: "Outdoor furniture, equipment and clutter cleared in the same project." },
      { title: "Staff Quarters", description: "Discrete clearance of service areas and storerooms." },
    ],
    whyChoose: [
      { title: "Concierge Communication", description: "Daily updates and a single project manager from start to finish." },
      { title: "NDA Available", description: "Confidentiality agreements for high-profile estates." },
      { title: "Insured & Bonded", description: "Comprehensive coverage for luxury interiors and finishes." },
    ],
    faqs: [
      { q: "Can you clear a fully furnished villa in one week?", a: "Yes — most large villas are completed within 3–5 working days with a dedicated team." },
      { q: "Do you handle access through community gates?", a: "We coordinate directly with community management on your behalf." },
      { q: "Can you donate higher-end furniture?", a: "Yes, through curated partners that ensure pieces reach charitable resale programs." },
    ],
    cta: "Book Villa Clearance",
  },
  {
    slug: "rubbish-removal-dubai",
    title: "Rubbish Removal Dubai",
    shortTitle: "Rubbish Removal",
    tagline: "Reliable Pickup",
    description:
      "Reliable rubbish removal for homes, offices and small businesses across Dubai — booked online and completed the same day.",
    heroImage: u("1532996122724-e3c354a0b15b"),
    icon: "Trash",
    included: [
      { title: "Household Rubbish", description: "Bagged waste, broken household items and general clutter." },
      { title: "Office Rubbish", description: "Paper, packaging, archived files and break-room waste." },
      { title: "Bulk Bin Pickup", description: "Multiple bins or skip-style loads collected on schedule." },
      { title: "Recurring Service", description: "Weekly or monthly contracts for ongoing rubbish collection." },
    ],
    whyChoose: [
      { title: "Punctual Crews", description: "Live ETAs sent to your phone — we arrive in the window we promise." },
      { title: "Clean Vehicles", description: "Branded eco-trucks that respect your community's standards." },
      { title: "Recycle-First", description: "Recyclables separated on-site before final transport." },
    ],
    faqs: [
      { q: "How much rubbish can you take in one visit?", a: "Anything from a single bag to a full truckload (up to 12 cubic metres) per visit." },
      { q: "Do you offer recurring rubbish service?", a: "Yes — recurring weekly and monthly contracts are available for offices and compounds." },
      { q: "Can you collect outside my building?", a: "Yes, we load from the curb, garage or designated bin area." },
    ],
    cta: "Schedule Pickup",
  },
  {
    slug: "bulky-item-removal-dubai",
    title: "Bulky Item Removal Dubai",
    shortTitle: "Bulky Item Removal",
    tagline: "Heavy Logistics",
    description:
      "Specialist removal of single bulky items — pianos, gym equipment, hot tubs and oversized furniture — across Dubai.",
    heroImage: u("1581094288338-2314dddb7ece"),
    icon: "Boxes",
    included: [
      { title: "Pianos & Safes", description: "Specialist equipment for safe vertical and horizontal moves." },
      { title: "Gym Equipment", description: "Disassembly and removal of treadmills, weights and machines." },
      { title: "Hot Tubs & Spas", description: "Drained, dismantled and hauled away in a single visit." },
      { title: "Oversized Furniture", description: "Sectional sofas, wardrobes and storage units removed cleanly." },
    ],
    whyChoose: [
      { title: "Specialist Equipment", description: "Stair climbers, dollies and lifting gear for the heaviest jobs." },
      { title: "Property Protection", description: "Full floor and corner protection on every job, included." },
      { title: "Trained Crews", description: "Heavy-lift certified team with hundreds of jobs completed." },
    ],
    faqs: [
      { q: "Can you remove a piano from an upper floor?", a: "Yes — we have the gear and the crews to manage upright and grand pianos safely." },
      { q: "How do you dispose of hot tubs?", a: "Drained on-site, then dismantled and routed for metal and plastic recovery." },
      { q: "Do you need access measurements in advance?", a: "Helpful but not required — our crew assesses on arrival and confirms before lifting." },
    ],
    cta: "Book Bulky Pickup",
  },
  {
    slug: "same-day-junk-removal-dubai",
    title: "Same Day Junk Removal Dubai",
    shortTitle: "Same Day Pickup",
    tagline: "Express Service",
    description:
      "Same day junk removal across Dubai. Call or WhatsApp before 11:00 AM and our team arrives the same afternoon — guaranteed.",
    heroImage: u("1581094277744-7d3d3fa5a4dc"),
    icon: "Zap",
    included: [
      { title: "2-Hour Response", description: "Express slots reserved for urgent same-day requests." },
      { title: "Live Crew Tracking", description: "Real-time arrival updates straight to your phone." },
      { title: "Any Item", description: "Furniture, appliances, garden waste, bulky items — handled in one visit." },
      { title: "Fixed Pricing", description: "On-site pricing in under 10 minutes, with no rush surcharges." },
    ],
    whyChoose: [
      { title: "Always Staffed", description: "Standby crews across Dubai every day of the week." },
      { title: "No Hidden Fees", description: "Same-day jobs are priced like any other — no premium loaded on." },
      { title: "Trusted Reviews", description: "5-star rated by Dubai residents and businesses for emergencies." },
    ],
    faqs: [
      { q: "How fast can you actually be on site?", a: "Most same-day jobs are on-site within 2–4 hours of confirmation." },
      { q: "Is same-day service more expensive?", a: "No — pricing matches our standard rates, with no rush surcharge." },
      { q: "What if I need it within the hour?", a: "Call or WhatsApp us directly and we'll see what crews are nearby." },
    ],
    cta: "Book Same Day Pickup",
  },
];

export const getService = (slug: string) =>
  SERVICES.find((s) => s.slug === slug) ?? null;
