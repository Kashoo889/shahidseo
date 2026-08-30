import type { Metadata } from "next";
import NotFound from "@/components/page-content/NotFound";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Page Not Found | EcoHaul Dubai",
  description: "The page you are looking for does not exist or has moved.",
  path: "/404",
  noIndex: true,
});

export default NotFound;

