import { Header } from "@/components/header";
import { getHomePagePosts } from "../queries/getHomePagePosts";
import { PostCard } from "@/components/post-card";

export const revalidate = 360;

export default async function Page() {
  const posts = await getHomePagePosts();

  return (
    <>
      <Header location="home" />
      <main>
        <div className="flex flex-col gap-8">
          <ul className="flex flex-col gap-8">
            {posts.map((post, index) => (
              <PostCard key={post.slug} index={index} post={post} />
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
