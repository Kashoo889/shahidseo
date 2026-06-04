import type { Metadata } from "next";
import Home from "@/components/page-content/Home";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Junk Removal Dubai | Same Day Pickup - EcoHaul Dubai",
  description:
    "Premium junk removal in Dubai. Same day pickup for furniture, appliances, office cleanouts, garden waste and house clearance. Call 050 325 0142.",
  path: "/",
});

export default Home;
