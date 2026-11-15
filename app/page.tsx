import type { Metadata } from "next";
import Home from "@/components/page-content/Home";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Junk Removal Dubai | Same-Day Pickup & Disposal | EcoHaul",
  description:
    "Premium junk removal services in Dubai. Same-day pickup for furniture, appliances, garden waste, rubbish and house clearance. Call 055 154 7371 to book.",
  path: "/",
});

// ISR: the "latest articles" widget re-checks daily (fallback); the daily
// /api/revalidate cron refreshes it at Dubai midnight when scheduled posts go live.
export const revalidate = 86400;

export default Home;
