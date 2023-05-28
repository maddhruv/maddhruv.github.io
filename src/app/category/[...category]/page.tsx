import { getPostsByCategory } from "@/src/queries/getPostsByCategory";
import { Header } from "@/components/header";
import { PostCard } from "@/components/post-card";

export const revalidate = 60;

export default async function Page({ params }) {
  const category = decodeURIComponent(params.category[0]);
  const posts = await getPostsByCategory(category);

  if (!posts || !posts?.length) {
    return (
      <>
        <Header location="home" />
        <main className="min-h-screen p-10 mx-auto mx-w-screen-2xl">
          <p className="text-2xl">
            No posts found for the category:{" "}
            <span className="text-yellow">{category}</span>
          </p>
        </main>
      </>
    );
  }

  return (
    <>
      <Header location="post" />
      <main className="min-h-screen p-10 mx-auto mx-w-screen-2xl">
        <h1 className="text-4xl font-bold mb-4">
          Category: <span className="text-yellow">{category}</span>
        </h1>
        <ul>
          {posts.map((post, index) => (
            <PostCard key={post.slug} post={post} index={index} />
          ))}
        </ul>
      </main>
    </>
  );
}
