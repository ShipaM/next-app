export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-green-400">
      <aside>
        <h3>Recomended products</h3>
      </aside>
      <h3>All products</h3>
      <main>{children}</main>
    </div>
  );
}
