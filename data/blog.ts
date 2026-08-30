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
    slug: "how-to-dispose-of-large-furniture-in-dubai",
    title: "How to Responsibly Dispose of Large Furniture in Dubai",
    excerpt:
      "A complete guide to removing sofas, beds, wardrobes, and heavy furniture across Dubai while complying with municipality regulations and maximizing donation reuse.",
    category: "Guides",
    tags: ["Furniture Removal", "Dubai Regulations", "Donation", "Recycling"],
    coverImage: u("1586023492125-27b2c045efd7"),
    coverImageAlt: "Modern living room furniture in Dubai being prepared for clearance",
    publishedAt: "2026-08-15",
    updatedAt: "2026-08-28",
    readingTime: "5 min read",
    author: {
      name: "The Bukhari Agency",
      role: "Author",
    },
    takeaways: [
      "Leaving bulky furniture outside residential buildings or waste chutes can incur Dubai Municipality fines.",
      "Reusable furniture in good condition can be diverted to UAE registered charities.",
      "Professional junk removal services handle disassembly, heavy lifting, and eco-certified disposal.",
    ],
    sections: [
      {
        heading: "The Challenge of Bulky Furniture in Dubai",
        content: [
          "Whether relocating between communities like Downtown Dubai and Arabian Ranches, or upgrading your living room decor, disposing of bulky furniture in high-rise towers and villa compounds requires careful planning.",
          "Dubai Municipality strictly prohibits dumping large furniture, mattresses, and appliances in regular community waste bins or building corridors. Doing so can lead to community violations and municipal fines.",
        ],
      },
      {
        heading: "Step 1: Assess Donation vs. Recycling Potential",
        content: [
          "Before arranging collection, evaluate the condition of each item. Solid wood tables, undamaged sofas, and clean bed frames are prime candidates for refurbishment and donation.",
          "At EcoHaul, our sorting teams partner with certified UAE charitable organizations to ensure usable household items support families in need before materials enter recycling streams.",
        ],
        callout: {
          title: "Eco Tip",
          text: "Over 95% of furniture items collected by certified teams can be diverted from Dubai landfills through timber recycling, metal recovery, and charitable reuse.",
        },
      },
      {
        heading: "Step 2: Preparing Furniture for Removal",
        content: [
          "To ensure a seamless move-out, take these simple preparation steps before the removal crew arrives:",
        ],
        listItems: [
          "Empty all drawers, wardrobes, and cabinets of personal belongings.",
          "Check building management requirements for service elevator bookings and move-out permits.",
          "Clear doorways and hallways to allow unobstructed access for heavy-lifting teams.",
        ],
      },
      {
        heading: "Step 3: Scheduling Professional Same-Day Removal",
        content: [
          "Booking a professional junk removal team eliminates the stress of dismantling, elevator maneuvering, and transportation logistics. Our uniformed crews arrive with protective equipment, disassemble complex units, and provide a swept-clean finish.",
        ],
      },
    ],
    relatedServices: ["furniture-removal-dubai", "house-clearance-dubai", "junk-removal-dubai"],
    relatedAreas: ["dubai-marina", "jumeirah-village-circle", "business-bay", "palm-jumeirah"],
  },
  {
    slug: "dubai-sustainable-waste-management-and-e-waste-guide",
    title: "Sustainable Waste Management: How Dubai is Diverting E-Waste from Landfills",
    excerpt:
      "Understand how electronic waste, old appliances, and IT hardware are responsibly decommissioned, sorted, and recycled in compliance with ISO 14001 standards.",
    category: "Eco & Recycling",
    tags: ["E-Waste", "Sustainability", "Commercial", "Green Dubai"],
    coverImage: u("1532996122724-e3c354a0b15b"),
    coverImageAlt: "Eco-friendly material sorting and electronics recycling in Dubai",
    publishedAt: "2026-08-22",
    updatedAt: "2026-08-29",
    readingTime: "4 min read",
    author: {
      name: "The Bukhari Agency",
      role: "Author",
    },
    takeaways: [
      "E-waste contains hazardous metals that must never be mixed with general municipal waste.",
      "Corporate offices can obtain certified material diversion reports for ESG compliance.",
      "Refrigerators and air conditioning units require specialized refrigerant recovery.",
    ],
    sections: [
      {
        heading: "The Importance of Certified Electronic Waste Disposal",
        content: [
          "As Dubai rapidly expands as a global business and technology hub, managing electronic waste—from outdated laptops and office servers to residential home appliances—has become a top environmental priority.",
          "Discarded circuit boards, batteries, and cooling equipment contain materials that require specialized separation facilities licensed by Dubai Municipality.",
        ],
      },
      {
        heading: "Commercial Office Decommissioning & Data Security",
        content: [
          "For corporate entities in DIFC, Dubai Internet City, and Business Bay, office cleanouts must pair environmental responsibility with data destruction integrity.",
          "Our specialized corporate service ensures physical storage drives are decommissioned and serialized equipment is routed to authorized recycling plants.",
        ],
        listItems: [
          "Secure non-hazardous IT decommissioning and peripheral clearance.",
          "Full chain-of-custody documentation and Landfill Diversion Certificates.",
          "Out-of-hours pickup slots to prevent office operational disruption.",
        ],
      },
      {
        heading: "Residential White Goods & Safe Refrigerant Handling",
        content: [
          "Old refrigerators, freezers, and air conditioners contain fluorinated greenhouse gases (CFCs/HFCs). Licensed technicians recover these gases safely before metal shredding and plastic granulation begin.",
        ],
      },
    ],
    relatedServices: ["appliance-removal-dubai", "office-cleanout-dubai", "same-day-junk-removal-dubai"],
    relatedAreas: ["business-bay", "difc", "dubai-internet-city", "dubai-silicon-oasis"],
  },
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
    relatedServices: ["villa-clearance-dubai", "garden-waste-removal-dubai", "bulky-item-removal-dubai"],
    relatedAreas: ["emirates-hills", "arabian-ranches", "dubai-hills-estate", "the-meadows"],
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
