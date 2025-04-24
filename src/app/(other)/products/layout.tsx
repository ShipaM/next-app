export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-amber-400">
      <h2>All products</h2>
      <div>{children}</div>
    </div>
  );
}
