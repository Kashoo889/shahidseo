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
