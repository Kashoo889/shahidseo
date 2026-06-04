import type { Metadata } from "next";
import Services from "@/components/page-content/Services";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Junk Removal Services Dubai | EcoHaul Dubai",
  description:
    "Full range of junk removal services in Dubai for furniture, appliances, office cleanouts, garden waste, house clearance, and same day pickup.",
  path: "/services",
});

export default Services;
