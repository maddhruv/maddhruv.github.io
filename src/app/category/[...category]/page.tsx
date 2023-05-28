import { getPostsByCategory } from "@/src/queries/getPostsByCategory";
import { Header } from "@/components/header";
import { PostCard } from "@/components/post-card";
import { Metadata } from "next";
import config from "@/lib/config";

export const revalidate = 60;

export async function generateMetadata({ params }): Promise<Metadata> {
  const category = decodeURIComponent(params.category[0]);

  return {
    title: `Category: ${category}`,
    description: `Posts for the category: ${category}`,
    openGraph: {
      type: "website",
      title: `Category: ${category}`,
      description: `Posts for the category: ${category}`,
      siteName: config.title,
    },
    twitter: {
      title: `Category: ${category}`,
      description: `Posts for the category: ${category}`,
    },
  };
}
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
      <main className="min-h-screen p-10 mx-auto max-w-screen-2xl">
        <h1 className="text-4xl font-bold mb-4">
          Category: <span className="text-yellow">{category}</span>
        </h1>
        <ul className="flex flex-col gap-8">
          {posts.map((post, index) => (
            <PostCard key={post.slug} post={post} index={index} />
          ))}
        </ul>
      </main>
    </>
  );
}
