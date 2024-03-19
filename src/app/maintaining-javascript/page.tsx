import { Header } from "@/components/header";
import { PostCard } from "@/components/post-card";
import { getPageData } from "@/src/queries/getPageById";
import { PortableText } from "@portabletext/react";
import { components } from "@/lib/components";
import { Metadata } from "next";
import config from "@/lib/config";

const PAGE_ID = "maintaining-javascript";

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageData(PAGE_ID);

  return {
    title: pageData.title,
    description: pageData.description,
    openGraph: {
      type: "website",
      title: pageData.title,
      description: pageData.description,
      siteName: config.title,
      url: `${config.host}/${PAGE_ID}`,
    },
    twitter: {
      title: pageData.title,
      description: pageData.description,
      card: "summary",
    },
  };
}

export default async function Page() {
  const pageData = await getPageData(PAGE_ID);
  return (
    <>
      <Header location="page" />
      <main>
        <section
          id="content"
          className="text-xl pb-6 border-b border-b-gray-500 mb-10"
        >
          <PortableText value={pageData.content} components={components} />
        </section>
        <ul className="flex flex-col gap-8">
          {pageData.posts.map((post, index) => (
            <PostCard key={post.slug} post={post} index={index} />
          ))}
        </ul>
      </main>
    </>
  );
}
