import type { Metadata } from "next";
import About from "@/components/page-content/About";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About EcoHaul Dubai | Premium Junk Removal",
  description:
    "Founded in 2018, EcoHaul Dubai leads premium, sustainable junk removal across the UAE with certified recycling partners and low-emission vehicles.",
  path: "/about",
});

export default About;
