export async function getPosts() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  return data.json();
}