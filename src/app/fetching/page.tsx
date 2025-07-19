import Image from "next/image";

export default async function Page() {
  // force-cache: means that the data will be cached for 1 hour
  // no-store: means that the data will not be cached
  // no-cache: means that the data will be cached but the data will be refetched from the server
  // force-revalidate: means that the data will be cached for 1 hour but the data will be refetched from the server
  const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });
  const posts = await data.json();
  // now the data is cached and if we navigate to another page and then come back to this page, the data will be cached and be the same.
  return (
    <div className="p-10 flex w-screen flex-wrap gap-5">
      {posts.map((post: any) => (
        <div
          className="flex flex-col gap-2 border border-gray-300 rounded-md p-4"
          key={post.id}
        >
          <Image
            src={`https://picsum.photos/200/300?random=${post.id}`}
            alt=""
            width={500}
            height={500}
            className="w-full h-48 object-cover rounded-md"
          />
          <h2 className="text-lg font-bold">{post.id}</h2>
        </div>
      ))}
    </div>
  );
}
