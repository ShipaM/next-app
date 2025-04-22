import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/dashboard" className="text-blue-800">
        Dashboard
      </Link>
      <Link href="/about" className="text-red-600">
        About
      </Link>
    </div>
  );
}
