import Link from "next/link";

export const metadata = {
  title: "About company",
  description: "Info about our company...",
};

export default function AboutPage() {
  return (
    <>
      <h1>About company</h1>
      <Link href="/">Go to Main</Link>
    </>
  );
}
