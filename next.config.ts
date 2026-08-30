import type { NextConfig } from "next";

// 301 redirects for area slugs removed/renamed in the Phase 02 restructure.
// Renamed communities point to their new slug; permanently dropped communities
// point to the closest relevant area, or to the /areas index when there is no
// sensible 1:1 replacement. Keeps previously-indexed URLs out of 404s.
const areaRedirects = [
  // Renamed short slugs (redirect to full canonical community slug)
  { from: "/areas/jvc", to: "/areas/jumeirah-village-circle" },
  { from: "/areas/jvt", to: "/areas/jumeirah-village-triangle" },
  { from: "/areas/jlt", to: "/areas/jumeirah-lake-towers" },
  { from: "/areas/motor-city", to: "/areas/dubai-motor-city" },
  { from: "/areas/sports-city", to: "/areas/dubai-sports-city" },
  { from: "/areas/springs", to: "/areas/the-springs" },
  { from: "/areas/meadows", to: "/areas/the-meadows" },
];




const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },

  async redirects() {
    // statusCode 301 (rather than `permanent: true`, which emits 308) to match
    // the canonical "301 Moved Permanently" expected for retired SEO URLs.
    return areaRedirects.map(({ from, to }) => ({
      source: from,
      destination: to,
      statusCode: 301,
    }));
  },
};

export default nextConfig;
