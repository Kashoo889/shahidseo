import { siteConfig } from "@/lib/seo";
import { CONTACT } from "@/data/contact";
import { SERVICES, type Service } from "@/data/services";
import { type Area } from "@/data/areas";

const ORG_ID = `${siteConfig.url}/#organization`;
const WEBSITE_ID = `${siteConfig.url}/#website`;

/**
 * Global Organization and LocalBusiness schema for EcoHaul Dubai.
 * Can be parameterized with a specific community/area for localized business schema.
 */
export function organizationSchema(area?: Area) {
  const isAreaSpecific = Boolean(area);
  const areaName = area ? area.name : "Dubai";
  const businessName = isAreaSpecific ? `${siteConfig.name} — ${areaName}` : siteConfig.name;
  const description = isAreaSpecific
    ? `Professional, eco-friendly junk removal and rubbish collection in ${areaName}, Dubai. Same-day pickup for furniture, appliances, and house clearance.`
    : "Dubai's premier sustainable junk removal and property clearance service. Same-day pickup with over 95% landfill diversion rate.";

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": isAreaSpecific ? `${siteConfig.url}/areas/${area?.slug}#localbusiness` : ORG_ID,
    name: businessName,
    alternateName: "EcoHaul Dubai Junk Removal",
    legalName: "EcoHaul Dubai LLC",
    description,
    url: isAreaSpecific ? `${siteConfig.url}/areas/${area?.slug}` : siteConfig.url,
    logo: `${siteConfig.url}/dubai-junk-removal-logo.png`,
    image: `${siteConfig.url}/dubai-junk-removal-logo.png`,
    telephone: `+${CONTACT.phoneIntl}`,
    priceRange: "AED $$",
    currenciesAccepted: "AED",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.office,
      addressLocality: isAreaSpecific ? areaName : "Business Bay",
      addressRegion: "Dubai",
      postalCode: "00000",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.1872,
      longitude: 55.2678,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    areaServed: isAreaSpecific
      ? {
          "@type": "AdministrativeArea",
          name: areaName,
          containedInPlace: {
            "@type": "City",
            name: "Dubai",
            addressCountry: "AE",
          },
        }
      : {
          "@type": "City",
          name: "Dubai",
          addressCountry: "AE",
        },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Junk Removal & Waste Clearance Services",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          url: `${siteConfig.url}/services/${service.slug}`,
          description: service.description,
        },
      })),
    },
  };
}

export const localBusinessSchema = organizationSchema;

/**
 * WebSite schema linking to publisher Organization
 */
export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: siteConfig.url,
    name: siteConfig.name,
    alternateName: "EcoHaul Dubai",
    description: "Premium sustainable junk removal and property clearance in Dubai.",
    publisher: {
      "@id": ORG_ID,
    },
    inLanguage: "en-AE",
  };
}

function toCanonicalUrl(path: string): string {
  if (!path || path === "/") return siteConfig.url;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${cleanPath}`;
}

/**
 * Structured BreadcrumbList schema
 */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  const currentPath = items[items.length - 1]?.path || "/";
  const canonicalUrl = toCanonicalUrl(currentPath);

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: toCanonicalUrl(item.path),
    })),
  };
}

/**
 * Generic WebPage schema linked to WebSite, Organization, and BreadcrumbList
 */
export function webPageSchema({
  title,
  description,
  path,
  breadcrumbs,
}: {
  title: string;
  description: string;
  path: string;
  breadcrumbs?: { name: string; path: string }[];
}) {
  const canonicalUrl = toCanonicalUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: title,
    description,
    isPartOf: {
      "@id": WEBSITE_ID,
    },
    breadcrumb: breadcrumbs
      ? {
          "@id": `${canonicalUrl}#breadcrumb`,
        }
      : undefined,
    inLanguage: "en-AE",
  };
}

/**
 * AboutPage schema
 */
export function aboutPageSchema(breadcrumbs?: { name: string; path: string }[]) {
  const canonicalUrl = `${siteConfig.url}/about`;

  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${canonicalUrl}#aboutpage`,
    url: canonicalUrl,
    name: "About EcoHaul Dubai | Sustainable Junk Removal",
    description:
      "Founded in 2018, EcoHaul Dubai leads premium, sustainable junk removal across Dubai with certified disposal partners.",
    isPartOf: {
      "@id": WEBSITE_ID,
    },
    mainEntity: {
      "@id": ORG_ID,
    },
    breadcrumb: breadcrumbs ? { "@id": `${canonicalUrl}#breadcrumb` } : undefined,
    inLanguage: "en-AE",
  };
}

/**
 * ContactPage schema
 */
export function contactPageSchema(breadcrumbs?: { name: string; path: string }[]) {
  const canonicalUrl = `${siteConfig.url}/contact`;

  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${canonicalUrl}#contactpage`,
    url: canonicalUrl,
    name: "Contact EcoHaul Dubai | 24/7 Junk Removal Concierge",
    description:
      "Get in touch for same-day junk removal in Dubai. Available 24/7 via call or WhatsApp.",
    isPartOf: {
      "@id": WEBSITE_ID,
    },
    mainEntity: {
      "@id": ORG_ID,
    },
    breadcrumb: breadcrumbs ? { "@id": `${canonicalUrl}#breadcrumb` } : undefined,
    inLanguage: "en-AE",
  };
}

/**
 * CollectionPage schema for Services index and Areas index
 */
export function collectionPageSchema({
  name,
  description,
  path,
  breadcrumbs,
}: {
  name: string;
  description: string;
  path: string;
  breadcrumbs?: { name: string; path: string }[];
}) {
  const canonicalUrl = toCanonicalUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${canonicalUrl}#collectionpage`,
    url: canonicalUrl,
    name,
    description,
    isPartOf: {
      "@id": WEBSITE_ID,
    },
    breadcrumb: breadcrumbs ? { "@id": `${canonicalUrl}#breadcrumb` } : undefined,
    inLanguage: "en-AE",
  };
}

/**
 * Service schema with provider and area links
 */
export function serviceSchema(service: Service, area?: Area) {
  const areaName = area ? area.name : "Dubai";
  const serviceUrl = `${siteConfig.url}/services/${service.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    name: `${service.title} in ${areaName}`,
    serviceType: service.title,
    description: service.description,
    provider: {
      "@id": ORG_ID,
    },
    url: serviceUrl,
    image: service.heroImage,
    areaServed: {
      "@type": area ? "AdministrativeArea" : "City",
      name: areaName,
      addressCountry: "AE",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} Features`,
      itemListElement: service.included.map((inc) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: inc.title,
          description: inc.description,
        },
      })),
    },
    termsOfService: "https://getjunkremovalsdubai.com/faq",
  };
}

/**
 * FAQPage schema
 */
export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

/**
 * Structured BlogPosting / Article schema for blog posts
 */
export function blogPostingSchema({
  title,
  description,
  path,
  image,
  datePublished,
  dateModified,
  authorName = "The Bukhari Agency",
  authorRole,
  breadcrumbs,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  authorRole?: string;
  breadcrumbs?: { name: string; path: string }[];
}) {
  const canonicalUrl = toCanonicalUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${canonicalUrl}#article`,
    headline: title,
    description,
    url: canonicalUrl,
    image: image ?? siteConfig.defaultImage,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Person",
      name: authorName,
      jobTitle: authorRole,
      worksFor: {
        "@id": ORG_ID,
      },
    },
    publisher: {
      "@id": ORG_ID,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
    },
    isPartOf: {
      "@id": WEBSITE_ID,
    },
    breadcrumb: breadcrumbs ? { "@id": `${canonicalUrl}#breadcrumb` } : undefined,
    inLanguage: "en-AE",
  };
}

export const articleSchema = blogPostingSchema;

/**
 * Blog CollectionPage schema for /blog index
 */
export function blogCollectionPageSchema(breadcrumbs?: { name: string; path: string }[]) {
  const canonicalUrl = `${siteConfig.url}/blog`;

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${canonicalUrl}#collectionpage`,
    url: canonicalUrl,
    name: "EcoHaul Dubai Blog | Sustainable Junk Removal Guides & Insights",
    description:
      "Expert guides, moving checklists, and sustainable waste disposal insights for Dubai residents and businesses.",
    isPartOf: {
      "@id": WEBSITE_ID,
    },
    breadcrumb: breadcrumbs ? { "@id": `${canonicalUrl}#breadcrumb` } : undefined,
    inLanguage: "en-AE",
  };
}
