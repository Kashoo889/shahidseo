export type BlogAuthor = {
  name: string;
  role: string;
  avatar?: string;
};

export type BlogSection = {
  heading?: string;
  content: string[]; // array of paragraphs
  listItems?: string[];
  callout?: {
    title: string;
    text: string;
  };
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Guides" | "Eco & Recycling" | "Moving & Clearance" | "Commercial & Office";
  tags: string[];
  coverImage: string;
  coverImageAlt: string;
  publishedAt: string; // ISO date string YYYY-MM-DD
  updatedAt?: string;
  readingTime: string; // e.g. "4 min read"
  author: BlogAuthor;
  takeaways: string[];
  sections: BlogSection[];
  relatedServices?: string[]; // service slugs
  relatedAreas?: string[]; // area slugs
};

const u = (id: string, w = 1200, h = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const BLOG_CATEGORIES: BlogPost["category"][] = [
  "Guides",
  "Eco & Recycling",
  "Moving & Clearance",
  "Commercial & Office",
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "villa-move-out-clearance-checklist-dubai",
    title: "The Ultimate Villa Move-Out Clearance Checklist for Dubai Residents",
    excerpt:
      "A step-by-step checklist to ensure a stress-free villa handover in Dubai, covering garden debris, garage junk, bulky item clearing, and security deposit protection.",
    category: "Moving & Clearance",
    tags: ["Villa Clearance", "Tenancy Handover", "Checklist", "Garden Waste"],
    coverImage: u("1545079968-1feb95494244"),
    coverImageAlt: "Spacious luxury villa in Dubai prepared for move-out clearance",
    publishedAt: "2026-08-25",
    updatedAt: "2026-08-29",
    readingTime: "6 min read",
    author: {
      name: "The Bukhari Agency",
      role: "Author",
    },
    takeaways: [
      "Landlords and property managers require villas to be handed over clean and clear of personal items.",
      "Outdoor play structures, shed clutter, and garden trimmings are frequent causes of deposit deductions.",
      "Scheduling a single-day full property clearance guarantees handover compliance.",
    ],
    sections: [
      {
        heading: "Why Villa Move-Outs Require a Clear Strategy",
        content: [
          "Handing over a 3 to 6-bedroom villa in communities like Emirates Hills, Arabian Ranches, or Dubai Hills Estate involves more than just packing boxes.",
          "Property management inspections inspect garage spaces, service quarters, garden plots, and rooftop access for leftover clutter.",
        ],
      },
      {
        heading: "Room-by-Room Clearance Protocol",
        content: [
          "Follow this structured approach to ensure no area is overlooked before your landlord inspection:",
        ],
        listItems: [
          "Garage & Storage Rooms: Clear out old paint cans, car accessories, broken tools, and unused storage boxes.",
          "Garden & Patio: Dismantle rusted pergolas, trampolines, overgrown tree trimmings, and cracked pots.",
          "Maid & Driver Quarters: Remove surplus bedding, old appliances, and secondary furnishings.",
          "Balconies & Terraces: Clear weathered outdoor seating and artificial turf debris.",
        ],
      },
      {
        heading: "Booking Your Villa Handover Clearance",
        content: [
          "With dedicated multi-truck fleets, our team clears even large luxury estates in a single morning, leaving the property swept clean and ready for inspection.",
        ],
      },
    ],
    relatedServices: [
      "villa-clearance-dubai",
      "garden-waste-removal-dubai",
      "bulky-item-removal-dubai",
    ],
    relatedAreas: ["emirates-hills", "arabian-ranches", "dubai-hills-estate", "the-meadows"],
  },
  {
    slug: "junk-removal-vs-skip-hire-in-dubai",
    title: "Junk Removal vs Skip Hire in Dubai: Which Should You Choose?",
    excerpt:
      "Comparing junk removal and skip hire in Dubai — permits, gated-community rules, heat, cost and effort — so you can pick the right option for your clear-out.",
    category: "Guides",
    tags: ["Skip Hire", "Comparison", "Permits", "Cost"],
    coverImage: u("1528702748617-c64d49f918af"),
    coverImageAlt:
      "Loaded junk removal truck parked outside a Dubai villa during a garage and garden clear-out",
    publishedAt: "2026-08-27",
    readingTime: "7 min read",
    author: {
      name: "The Bukhari Agency",
      role: "Author",
    },
    takeaways: [
      "Skips in Dubai usually need approval from the community developer or municipality, and many gated communities don't allow them at all.",
      "Skip hire means you do the loading yourself, often in extreme heat, while the skip occupies parking or plot space for days.",
      "Junk removal is priced on what leaves your property and finished in one visit, which suits most home and villa clear-outs here.",
    ],
    sections: [
      {
        heading: "The short answer",
        content: [
          "For most household and villa clear-outs in Dubai, junk removal is the simpler choice. You point at what needs to go, a crew loads it, and it leaves the same day — no permit paperwork, no skip sitting on your drive, no loading it yourself when it is well over 40 degrees outside.",
          "Skip hire earns its place on live construction and major renovation jobs, where waste is produced steadily over days or weeks and someone is on site to fill the skip. Even then, getting a skip legally placed in many Dubai communities is the hard part, not the waste itself.",
          "The rest of this guide covers the details that actually decide it: permits and community rules, who does the lifting, how each is priced, timing, and what happens to the waste afterwards.",
        ],
      },
      {
        heading: "Getting a skip placed is the real obstacle in Dubai",
        content: [
          "In the UK or Australia, skip hire is a default. Dubai is different. A skip on a public road, a shared parking bay, or an undeveloped plot generally needs sign-off — from Dubai Municipality for public land, or from the master developer for community land.",
          "Gated and managed communities add another layer. In places like Arabian Ranches, Emirates Hills, the Springs and the Meadows, community rules frequently prohibit skips outright or require a developer no-objection certificate first. Developers protect shared access and kerb appeal, and an unpermitted skip can bring a fine or a removal notice.",
          "Apartment residents rarely have a realistic skip option at all. There is nowhere on a tower plot to put one without blocking parking or a fire lane, and building management will not approve it.",
        ],
        callout: {
          title: "Before you book a skip",
          text: "Confirm in writing that your community or building will allow it, and who is responsible for the permit. If that answer is not a clear yes, a junk removal crew avoids the problem entirely.",
        },
      },
      {
        heading: "Who does the loading — and in what heat",
        content: [
          "A skip is delivered empty. Everything that goes in it, you lift and carry yourself, or you pay someone separately to do it. For a garage clear-out or a garden strip-out, that can be a full weekend of hauling broken furniture, tiles and green waste across a plot.",
          "From May to September, that work happens in 40-plus degree heat. People underestimate how much this slows a self-load job and how quickly it stops being safe in the middle of the day.",
          "Junk removal is the opposite model: the crew brings the labour. They carry items down from a fourth-floor apartment with no service lift, dismantle a bed frame that will not fit through the door, and clear a garden of pergola timber and cracked pots. The price already includes that effort.",
        ],
      },
      {
        heading: "How the cost compares",
        content: [
          "Skip hire looks like one number but is usually several: the skip rental, delivery, collection, a permit fee where one applies, and disposal charges by weight. If you also hire labour to load it, that is on top.",
          "Junk removal is priced on volume — how much space your items take in the truck — and quoted as a fixed figure before work starts. There is no separate charge for carrying, dismantling or floor protection.",
          "For a small to mid-sized clear-out — a few rooms of furniture, some appliances, general household junk — junk removal is often the lower total once loading labour and skip logistics are counted. For a weeks-long renovation producing tonnes of rubble, a skip on a properly permitted site can work out cheaper per tonne. Our separate breakdown of what junk removal actually costs in Dubai goes deeper on the volume-based model.",
          "Be careful comparing against “free” offers. Genuinely free collection in this market usually means only resaleable items are taken and the rest is left, or the operator recovers the cost another way. A fixed, insured price you agree upfront is more predictable.",
        ],
      },
      {
        heading: "Timing and how long your space is tied up",
        content: [
          "A skip stays on your property for the whole hire period — commonly several days to a couple of weeks. That is a parking bay, a section of driveway or a stretch of plot out of use, plus an open skip that neighbours and passers-by tend to add to overnight.",
          "Junk removal is a single visit, usually a couple of hours for a normal home, and often available the same day. Nothing is left behind. For end-of-tenancy handovers, where the villa or apartment has to be empty and clean by an inspection date, that clean finish is the whole point.",
        ],
      },
      {
        heading: "What happens to the waste",
        content: [
          "A skip's contents typically go to a transfer station as mixed waste, with limited sorting. Recycling and reuse rates are low.",
          "A junk removal crew can sort at the point of collection — usable furniture to charity, metal and e-waste to registered recyclers, green waste kept separate — because items are handled individually as they are loaded. If diverting waste from landfill matters to you or your building's sustainability reporting, that difference is real.",
        ],
      },
      {
        heading: "When a skip is still the right call",
        content: [
          "Hire a skip when you have a live construction or full renovation project on a site where a skip can be legally placed, waste is generated continuously, and there is a site team to load it. Hard rubble, screed, tiling and concrete in volume are what skips handle well.",
          "For almost everything else in a Dubai home — furniture, appliances, garage and storeroom clutter, garden waste, a bulky single item, a full apartment or villa clearance — a junk removal crew is faster, needs no permit, and leaves the space ready to use.",
          "If you are not sure which your job is, send us a few photos on WhatsApp and we will tell you honestly, along with a fixed price if removal is the better fit.",
        ],
      },
    ],
    relatedServices: [
      "junk-removal-dubai",
      "bulky-item-removal-dubai",
      "garden-waste-removal-dubai",
      "house-clearance-dubai",
    ],
    relatedAreas: ["arabian-ranches", "emirates-hills", "the-springs", "dubai-marina"],
  },
  {
    slug: "junk-removal-vs-man-and-van-dubai",
    title: "Junk Removal vs Man and Van in Dubai: What's the Real Difference?",
    excerpt:
      "A practical comparison of hiring a junk removal company versus a man and van in Dubai — pricing, insurance, building access and where your junk really ends up.",
    category: "Guides",
    tags: ["Man and Van", "Comparison", "Insurance", "Building Access"],
    coverImage: u("1517512006864-7edc3b933137"),
    coverImageAlt:
      "Marked junk removal crew loading furniture into a truck outside a Dubai apartment tower",
    publishedAt: "2026-08-29",
    readingTime: "7 min read",
    author: {
      name: "The Bukhari Agency",
      role: "Author",
    },
    takeaways: [
      "A man and van is usually a single informal operator with a pickup; a junk removal company sends an insured crew and handles disposal properly.",
      "Many Dubai towers will not let an unmarked van and an uninsured worker use the service lift, which can leave you stuck on moving day.",
      "Man and van can be cheaper for a quick single-item move, but prices often change on the day and there is no cover if something is damaged.",
    ],
    sections: [
      {
        heading: "What each one actually is",
        content: [
          "“Man and van” in Dubai usually means an individual you found on a classifieds site or a community group, arriving in a pickup or small van, paid in cash. Some are careful and reliable. Many are doing it informally alongside other work, with no trade licence, no insurance and no fixed disposal arrangement.",
          "A junk removal company is a licensed business sending a two- or three-person crew in a marked truck, with third-party liability insurance, a set process for lifting and dismantling, and a route for where each type of item goes afterwards.",
          "The two overlap on small jobs. They diverge quickly once the job involves a tower, a full clearance, heavy items, or anything where accountability matters.",
        ],
      },
      {
        heading: "Building access is where man and van often falls down",
        content: [
          "This is the practical issue people hit most often. Residential towers in Dubai Marina, JLT, Downtown and Business Bay generally require anyone using the service lift to be booked in through building management, and management frequently asks for the company's trade licence and a certificate of insurance before the crew is allowed up.",
          "An informal man and van cannot produce those documents. Security turns them away at the loading bay, and you are left with a half-moved apartment and a booking that has to be rescheduled.",
          "A licensed junk removal company deals with this routinely — submitting paperwork to the building, booking the lift window, and protecting the lift and corridors during the carry.",
        ],
        callout: {
          title: "If you live in a managed tower",
          text: "Ask your building management what they require from a removal contractor before you book anyone. If it is a trade licence and insurance certificate, that rules out most man-and-van operators.",
        },
      },
      {
        heading: "Pricing: cheaper on paper, less predictable in practice",
        content: [
          "For a single wardrobe or a couple of boxes moved across town, a man and van will often quote less. That is a real advantage for small, simple jobs.",
          "The weakness is that the quote is verbal and volume is estimated by eye. It is common for the price to rise once the operator sees the actual load, or for a second trip to be charged because everything did not fit. Payment is cash, so there is little recourse.",
          "A junk removal company quotes a fixed price against the volume the items will occupy in the truck, confirmed before any work starts, covering the labour, dismantling and disposal. You know the number going in. For how that volume-based pricing works across different job sizes, our guide to junk removal costs in Dubai lays it out.",
        ],
      },
      {
        heading: "Insurance and accountability",
        content: [
          "If a man and van scratches a marble floor, drops a TV in the lift, or damages a wall on the stairs, there is usually no insurance behind it and no company to make a claim against. The same applies if the worker is injured on your property.",
          "A licensed junk removal firm carries third-party liability cover, so accidental damage during the job is insured. Floor protection and careful dismantling are part of the standard process, not an afterthought.",
          "For a rented apartment or villa where your security deposit depends on handing the property back undamaged, that cover is worth more than a small saving on the quote.",
        ],
      },
      {
        heading: "Where your junk actually ends up",
        content: [
          "This is the part that does not show up in the price. A responsible junk removal company takes loads to licensed facilities — registered recyclers for metal and e-waste, licensed municipal sites for general waste, and charities for usable furniture — and can account for where things went.",
          "Some informal operators do the same. Others cut the disposal cost by fly-tipping in the desert on the edges of the city, or leaving items beside a communal bin where they are not permitted. If that is traced back, the resident who paid for the removal can be the one facing a municipality fine for illegal dumping.",
          "Asking a simple question — which facility do you take it to? — tells you a lot about who you are dealing with.",
        ],
      },
      {
        heading: "Which to use for which job",
        content: [
          "A man and van can make sense for a genuinely small, light, straightforward move: one or two items, ground floor or a building with easy access, and you are comfortable the operator is reliable.",
          "Use a junk removal company for anything involving a tower with security and lift booking, a full apartment or villa clearance, heavy or awkward items like a sofa bed or a fridge, end-of-tenancy handovers, or any situation where damage cover and proper disposal matter. Same-day junk removal is built for exactly these last-minute, access-controlled jobs.",
          "If you are weighing it up, send photos of the items and your building on WhatsApp and we will give you a fixed price and tell you whether it is a job that really needs a full crew.",
        ],
      },
    ],
    relatedServices: [
      "same-day-junk-removal-dubai",
      "junk-removal-dubai",
      "furniture-removal-dubai",
      "office-cleanout-dubai",
    ],
    relatedAreas: ["dubai-marina", "jumeirah-lake-towers", "business-bay", "downtown-dubai"],
  },
  {
    slug: "how-to-choose-the-best-junk-removal-company-in-dubai",
    title: "How to Choose the Best Junk Removal Company in Dubai",
    excerpt:
      "What to check before booking a junk removal company in Dubai: trade licence, insurance, fixed pricing, building paperwork and where your waste ends up.",
    category: "Guides",
    tags: ["Hiring Guide", "Licensed", "Insured", "Checklist"],
    coverImage: u("1497366216548-37526070297c"),
    coverImageAlt:
      "Uniformed junk removal crew reviewing a job checklist beside their truck in Dubai",
    publishedAt: "2026-08-31",
    readingTime: "8 min read",
    author: {
      name: "The Bukhari Agency",
      role: "Author",
    },
    takeaways: [
      "The best junk removal company for you is licensed, insured, and willing to put a fixed price in writing before the crew arrives.",
      "In managed buildings, check the company can supply a trade licence and insurance certificate to building management — many crews cannot.",
      "A short list of direct questions about disposal, pricing and access separates established operators from informal ones.",
    ],
    sections: [
      {
        heading: "Start with the licence and insurance",
        content: [
          "Two things do most of the work in filtering a shortlist. First, a valid Dubai trade licence that actually lists waste collection or a related activity — not a generic licence borrowed for the job. Second, third-party liability insurance that covers damage to your property and injury during the work.",
          "These are not just compliance boxes. A licensed, insured company is one you can hold accountable if a floor is scratched or an item is damaged in a lift. An informal operator leaves you carrying that risk yourself.",
          "Ask for both documents by name. A company that does this properly will send them without hesitation.",
        ],
      },
      {
        heading: "Insist on a fixed price before work starts",
        content: [
          "The standard in Dubai for a well-run junk removal company is a fixed quote based on volume — how much space your items take in the truck — confirmed before anyone starts loading. You send photos or the crew assesses on arrival, and you get a number.",
          "Be wary of hourly rates with no cap, quotes that are only ever verbal, or a price that moves once the crew is on site. If you want to understand what drives the figure, our guide to junk removal costs in Dubai explains how volume-based pricing works and what pushes it up or down.",
          "“Free” collection deserves a closer look too. It usually means only items with resale value are taken and everything else stays, or the cost is recovered elsewhere. A transparent fixed price is easier to plan around than a free offer with conditions.",
        ],
        callout: {
          title: "The one-line test",
          text: "If a company will not give you a written fixed price before the job, keep looking. Every established operator here will.",
        },
      },
      {
        heading: "Check they can get into your building",
        content: [
          "In managed communities and towers — Dubai Marina, JLT, Business Bay, Downtown, and gated villa communities like Arabian Ranches — building or community management often requires a removal contractor to submit a trade licence and certificate of insurance, and to book a service-lift window, before the crew is allowed to work.",
          "Ask the company directly: have you worked in buildings that need management approval, and can you handle that paperwork? An established junk removal or house clearance company does this every week. One that sounds unsure will likely be turned away by security on the day.",
        ],
      },
      {
        heading: "Ask where the waste goes",
        content: [
          "A company worth hiring can tell you what happens to your load: usable furniture to named charities, metal and electronics to registered recyclers, general waste to a licensed municipal facility. Some can provide a landfill-diversion or disposal summary for larger jobs, which businesses increasingly need for sustainability reporting.",
          "If the answer is vague, assume the cheapest route — which in the worst cases means dumping in the desert or beside communal bins. That is illegal, and it can rebound on you as the person who arranged the removal.",
        ],
      },
      {
        heading: "Read reviews for the things that actually go wrong",
        content: [
          "Star ratings alone do not tell you much. Read the detail. Look for repeated mentions of the crew turning up in the booked window, the final price matching the quote, care taken with floors and walls, and items being removed rather than part-loaded and abandoned.",
          "Patterns matter more than any single review. A handful of complaints all describing the same problem — price changed on arrival, no-show, damage ignored — is a reliable warning.",
        ],
      },
      {
        heading: "A quick pre-booking checklist",
        content: ["Run through this before you commit:"],
        listItems: [
          "Valid Dubai trade licence covering waste or junk collection.",
          "Third-party liability insurance, with a certificate they will share.",
          "Fixed, written price before the crew starts — no open-ended hourly rates.",
          "Experience with building-management approvals and service-lift bookings.",
          "A clear answer on which facilities and charities the waste goes to.",
          "Reviews that mention reliability, honest pricing and careful handling.",
          "A real Dubai address and contact details, not just a mobile number.",
        ],
      },
      {
        heading: "Getting a straight quote",
        content: [
          "The fastest way to test a company against this list is to ask for a quote and see how they respond. A clear fixed price, a willingness to share documents, and a sensible answer about disposal tell you most of what you need.",
          "You can do that with us now: send photos of what needs to go, along with your building or community, on WhatsApp, and you will get a fixed price plus confirmation that we can handle any management paperwork your building needs. For end-of-tenancy jobs, our house and villa clearance teams do this routinely across Dubai.",
        ],
      },
    ],
    relatedServices: [
      "junk-removal-dubai",
      "house-clearance-dubai",
      "villa-clearance-dubai",
      "office-cleanout-dubai",
    ],
    relatedAreas: ["dubai-marina", "jumeirah-lake-towers", "business-bay", "arabian-ranches"],
  },
];

export const getBlogPost = (slug: string): BlogPost | null =>
  BLOG_POSTS.find((p) => p.slug === slug) ?? null;

export const getAllBlogPosts = (): BlogPost[] =>
  [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

export const getRecentBlogPosts = (limit = 3, excludeSlug?: string): BlogPost[] =>
  BLOG_POSTS.filter((p) => p.slug !== excludeSlug)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);

export const getPostsByCategory = (category: string): BlogPost[] => {
  if (category === "All") return getAllBlogPosts();
  return BLOG_POSTS.filter((p) => p.category === category);
};
