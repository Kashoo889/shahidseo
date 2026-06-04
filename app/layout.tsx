import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Toaster } from "sonner";
import "@/styles/globals.css";
import { PageShell } from "@/components/layout/PageShell";
import { siteConfig } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "EcoHaul Dubai | Junk Removal Dubai",
    template: "%s",
  },
  description:
    "Premium junk removal in Dubai for furniture, appliances, offices, garden waste, house clearance, and same day pickup.",
  applicationName: siteConfig.name,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AE" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body>
        <PageShell>{children}</PageShell>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
