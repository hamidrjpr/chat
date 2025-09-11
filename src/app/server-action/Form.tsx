"use client";
import { useActionState, useEffect } from "react";
import { CreatePost } from "./CreatePost";

export default function Form() {
  const initialState = {
    message: "",
    error: "",
  };
  const [state, formAction, pending] = useActionState(CreatePost, initialState);

  useEffect(() => {
    if (state.error) console.error(state.error);
  }, [state.error]);

  return (
    <form
      action={formAction}
      className="flex flex-col gap-4 w-1/2 mx-auto my-10"
    >
      <input
        className="border border-gray-300 rounded-md p-2"
        type="text"
        name="title"
        placeholder="Title"
      />
      <input
        className="border border-gray-300 rounded-md p-2"
        type="text"
        name="body"
        placeholder="Body"
      />
      <button
        disabled={pending}
        className="bg-blue-500 text-white rounded-md p-2"
        type="submit"
      >
        {pending ? "Creating..." : "Create Post"}
      </button>
    </form>
  );
}
