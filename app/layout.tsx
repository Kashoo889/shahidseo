import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Toaster } from "sonner";
import "@/styles/globals.css";
import { PageShell } from "@/components/layout/PageShell";
import { siteConfig } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Junk Removal Dubai | Same-Day Pickup & Disposal | EcoHaul",
    template: "%s",
  },
  description: siteConfig.defaultDescription,
  applicationName: siteConfig.name,
  formatDetection: {
    telephone: true,
    date: false,
    address: true,
    email: true,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/dubai-junk-removal-logo.png", type: "image/png" },
    ],
    apple: [{ url: "/dubai-junk-removal-logo.png" }],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AE" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head />
      <body>
        <PageShell>{children}</PageShell>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}

