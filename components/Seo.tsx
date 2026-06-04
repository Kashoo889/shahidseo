type Props = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  jsonLd?: object | object[];
};

export function Seo({ jsonLd }: Props) {
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  return (
    <>
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}
