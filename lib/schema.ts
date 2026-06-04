import { CONTACT } from "@/data/contact";
import type { Area } from "@/data/areas";
import type { Service } from "@/data/services";
import { siteConfig } from "@/lib/seo";

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.url).toString(),
    })),
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "EcoHaul Dubai",
    url: siteConfig.url,
    telephone: `+${CONTACT.phoneIntl}`,
    areaServed: { "@type": "City", name: "Dubai" },
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.office,
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    areaServed: { "@type": "City", name: "Dubai" },
    provider: { "@type": "LocalBusiness", name: "EcoHaul Dubai" },
  };
}

export function areaBusinessSchema(area: Area) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `EcoHaul Dubai - ${area.name}`,
    description: `Junk removal services in ${area.name}, Dubai.`,
    areaServed: { "@type": "Place", name: area.name },
    address: {
      "@type": "PostalAddress",
      addressLocality: area.name,
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}
