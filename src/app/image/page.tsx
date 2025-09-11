import Image from "next/image";
import styles from "./image.module.css";
import type { User } from "@/components/UserProvider";

export default async function Page() {
  let user: User;
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/use/2");
    user = await res.json();
  } catch (err) {
    // Re-throw to trigger the nearest error.tsx
    throw err;
  }
  console.log(user);
  return (
    <div className={styles.container}>
      <Image
        src="/images/desert.jpg"
        alt="desert-image"
        width={1000}
        height={1000}
        unoptimized
        className="object-cover"
      />
      <img
        src="/images/desert.jpg"
        alt="desert-image"
        className="flex mt-10"
        width={1000}
        height={1000}
      />
    </div>
  );
}
