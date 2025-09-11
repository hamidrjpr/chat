import { revalidatePath } from "next/cache";
// import { redirect } from "next/dist/server/api-utils";

export async function CreatePost(prevState: any, formData: FormData) {
  "use server";
  const title = formData.get("title");
  const body = formData.get("body");

  try {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({ title, body }),
    });

    revalidatePath("/");
    // redirect("/");
    return {
      ...prevState,
      message: "post has been created successfully",
    };
  } catch (error: any) {
    return {
      ...prevState,
      message: "failed to create a new post",
      error: error.message,
    };
  }
}
