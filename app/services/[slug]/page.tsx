import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES, getService } from "@/data/services";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { createMetadata } from "@/lib/seo";


type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return createMetadata({
      title: "Service Not Found | EcoHaul Dubai",
      description: "The requested EcoHaul Dubai service could not be found.",
      path: "/services",
    });
  }

  return createMetadata({
    title: `${service.title} | EcoHaul Dubai`,
    description: service.description,
    path: `/services/${service.slug}`,
    image: service.heroImage,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}

