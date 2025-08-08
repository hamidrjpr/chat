import { cache } from "react";
import styles from "@/styles/Preloading.module.css";

type Posts = {
  id: number;
  title: string;
  body: string;
};

// this function is going to be cached and it will be called only once
const getPosts = cache(async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=20",
  ); // this returns a promise class containing the response object {json(), text(), blob(), formData(), arrayBuffer()}
  const data = await response.json();
  return data;
});

function preload() {
  // void is used to tell the compiler that the function returns a promise and we don't need to wait for it to resolve
  void getPosts();
}

export default async function Page() {
  // preload the data before the component is rendered
  preload();
  const posts: Array<Posts> = await getPosts();
  console.log(posts);
  return (
    <div className={`container ${styles.container}`}>
      {posts.map((post) => (
        <div className={`${styles.post} ${styles.postTitle}`} key={post.id}>
          {post.title}
        </div>
      ))}
    </div>
  );
}
