import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>Main</div>
      <Link href="/complex-dashboard">Go to complex dashboard page</Link>
    </>
  );
}
