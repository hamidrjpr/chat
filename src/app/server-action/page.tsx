import { CreatePost } from "./CreatePost";

export default function Page() {
  return (
    <form
      action={CreatePost}
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
      <button className="bg-blue-500 text-white rounded-md p-2" type="submit">
        Create Post
      </button>
    </form>
  );
}
