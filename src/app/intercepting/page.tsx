import Link from "next/link";

export default function InterceptingPage() {
  const random_names = [
    "ali",
    "reza",
    "sara",
    "mohammad",
    "fatemeh",
    "sara",
    "mohammad",
    "fatemeh",
    "sara",
    "mohammad",
    "fatemeh",
  ];
  return (
    <div className="flex gap-3.5 border border-red-500 justify-center ">
      {random_names.map((name, index) => (
        <Link href={`/intercepting/name/${name}/`} className="" key={index}>
          {name}
        </Link>
      ))}
    </div>
  );
}
