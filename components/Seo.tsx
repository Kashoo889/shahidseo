type Props = {
  jsonLd?: (object | undefined | null) | (object | undefined | null)[];
};

export function Seo({ jsonLd }: Props) {
  if (!jsonLd) return null;
  const rawSchemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
  const schemas = rawSchemas.filter((s): s is object => Boolean(s) && typeof s === "object");

  if (schemas.length === 0) return null;

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
