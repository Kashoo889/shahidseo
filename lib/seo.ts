import type { Metadata } from "next";

export const siteConfig = {
  name: "EcoHaul Dubai",
  shortName: "EcoHaul",
  url: "https://getjunkremovalsdubai.com",
  defaultTitle: "Junk Removal Dubai | Same-Day Pickup & Disposal | EcoHaul",
  defaultDescription:
    "Premium junk removal in Dubai for furniture, appliances, offices, garden waste, house clearance, and same-day pickup. 95%+ landfill diversion rate.",
  defaultImage:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&h=800&q=80",
  locale: "en_AE",
  themeColor: "#1f9d4d",
};

export type SeoInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  keywords?: string[];
  noIndex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
};

export function createMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  keywords,
  noIndex = false,
  publishedTime,
  modifiedTime,
}: SeoInput): Metadata {
  const url = new URL(path, siteConfig.url);
  const resolvedImage = image ?? siteConfig.defaultImage;

  return {
    title,
    description,
    keywords: keywords ?? [
      "junk removal dubai",
      "same day junk removal dubai",
      "furniture removal dubai",
      "appliance disposal dubai",
      "house clearance dubai",
      "office waste clearance dubai",
      "rubbish collection dubai",
      "waste management dubai",
    ],
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    alternates: {
      canonical: url.pathname === "/" ? "/" : url.pathname,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      title,
      description,
      url: url.toString(),
      siteName: siteConfig.name,
      images: [
        {
          url: resolvedImage,
          width: 1200,
          height: 800,
          alt: title,
        },
      ],
      locale: siteConfig.locale,
      type: type as "website" | "article",
      ...(type === "article" && publishedTime
        ? {
            publishedTime,
            modifiedTime: modifiedTime ?? publishedTime,
            authors: [siteConfig.name],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [resolvedImage],
      creator: "@EcoHaulDubai",
    },
  };
}

