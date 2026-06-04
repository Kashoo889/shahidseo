import type { Metadata } from "next";

export const siteConfig = {
  name: "EcoHaul Dubai",
  url: "https://ecohauldubai.ae",
  defaultImage:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&h=800&q=80",
};

type SeoInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function createMetadata({ title, description, path, image }: SeoInput): Metadata {
  const url = new URL(path, siteConfig.url);
  const resolvedImage = image ?? siteConfig.defaultImage;

  return {
    title,
    description,
    alternates: {
      canonical: url.pathname,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: resolvedImage }],
      locale: "en_AE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [resolvedImage],
    },
  };
}
