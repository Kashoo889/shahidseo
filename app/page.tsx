import type { Metadata } from "next";
import Home from "@/components/page-content/Home";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Junk Removal Dubai | Same-Day Pickup & Disposal | EcoHaul",
  description:
    "Premium junk removal services in Dubai. Same-day pickup for furniture, appliances, garden waste, rubbish and house clearance. Call 055 154 7371 to book.",
  path: "/",
});

// ISR: the "latest articles" widget re-checks hourly for newly live posts.
export const revalidate = 3600;

export default Home;
