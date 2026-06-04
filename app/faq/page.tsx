import type { Metadata } from "next";
import Faq from "@/components/page-content/Faq";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "FAQ | Junk Removal Dubai - EcoHaul Dubai",
  description:
    "Answers to common questions about junk removal in Dubai, pricing, same day pickup, areas served, recycling, and insurance.",
  path: "/faq",
});

export default Faq;
