import Users from "@/components/Users";
import { Suspense } from "react";

// users
export default async function Page() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const users = await data.json();
  console.log(users);
  // i want to pass promise to <Users> component
  // and use use() to get the data
  // and pass the data to the component
  // and use the data in the component
  // and use the data in the component

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Users users={users} />
    </Suspense>
  );
}
