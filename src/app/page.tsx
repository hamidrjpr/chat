import Hello from "@/components/Hello";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hello name="hamid" />
      <Link href="/parallel">Parallel</Link>
    </>
  );
}
