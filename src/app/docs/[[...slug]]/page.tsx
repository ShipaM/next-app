export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  if (!slug || slug.length === 0) {
    return <h1>Main page docs</h1>;
  }

  if (slug.length === 1) {
    return <h1>Chapter {slug[0]}</h1>;
  }

  if (slug.length === 2) {
    return (
      <h1>
        Subsection {slug[1]} in chapter {slug[0]}
      </h1>
    );
  }

  if (slug.length === 3) {
    return (
      <h1>
        Category {slug[2]} in subsection {slug[1]} in chapter {slug[0]}
      </h1>
    );
  }

  return <h1>Deep nesting: {slug.join("/")}</h1>;
}
