import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "EcoHaul Dubai - Sustainable Junk Removal",
    short_name: "EcoHaul",
    description: siteConfig.defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: siteConfig.themeColor,
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/dubai-junk-removal-logo.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
