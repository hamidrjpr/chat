import { revalidatePath } from "next/cache";
// import { redirect } from "next/dist/server/api-utils";

export async function CreatePost(formData: FormData) {
  "use server";
  const title = formData.get("title");
  const body = formData.get("body");

  await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({ title, body }),
  });

  revalidatePath("/");
  // redirect("/");
}