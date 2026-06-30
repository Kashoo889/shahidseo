import type { Metadata } from "next";
import Areas from "@/components/page-content/Areas";
import { AREAS } from "@/data/areas";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Areas We Serve | Junk Removal Dubai - EcoHaul Dubai",
  description: `EcoHaul covers ${AREAS.length} Dubai communities including Marina, Palm Jumeirah, Downtown, Business Bay, JVC, Arabian Ranches, Emirates Hills and more.`,
  path: "/areas",
});

export default Areas;
