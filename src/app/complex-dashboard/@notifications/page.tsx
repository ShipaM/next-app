import Card from "@/components/Card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <div className="flex flex-col">
        <h2>Advertisements</h2>
        <Link href="/complex-dashboard">Active</Link>
        <Link href="/complex-dashboard/archived">Archive</Link>
      </div>
    </Card>
  );
}
