import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AREAS, getArea } from "@/data/areas";
import { AreaPageTemplate } from "@/components/templates/AreaPageTemplate";
import { createMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return AREAS.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);

  if (!area) {
    return createMetadata({
      title: "Area Not Found | EcoHaul Dubai",
      description: "The requested EcoHaul Dubai service area could not be found.",
      path: "/areas",
    });
  }

  return createMetadata({
    title: `Junk Removal ${area.name} | EcoHaul Dubai`,
    description: `Premium junk removal in ${area.name}, Dubai. ${area.shortBlurb}`,
    path: `/areas/${area.slug}`,
    image: area.image,
  });
}

export default async function AreaDetailPage({ params }: Props) {
  const { slug } = await params;
  const area = getArea(slug);

  if (!area) {
    notFound();
  }

  return <AreaPageTemplate area={area} />;
}
