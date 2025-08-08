import { Suspense } from "react";
import { getPosts } from "./getPosts";
import Users from "@/components/Users";

// users
// export default async function Page() {
//   const data = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const users = await data.json();
//   console.log(users);
//   // i want to pass promise to <Users> component
//   // and use use() to get the data
//   // and pass the data to the component
//   // and use the data in the component

//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Users users={users} />
//     </Suspense>
//   );
// }

export default function Page() {
  // getPosts function returns a promise, so we can use it in the Users component
  // in User component we use use() function to get the data from the promise and render it.
  // we can either use getPosts() that returns a promise or we can make the Page component async and send the promise to the component. it doesn't
  //  matter which one we use.
  // this method is called Streaming.
  const users = getPosts();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Users users={users} />
    </Suspense>
  );
}

// server components with async doesn't stream the data, it waits for the data to be fetched and then renders the component.
