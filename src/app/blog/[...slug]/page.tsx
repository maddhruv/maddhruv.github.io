import { Code } from "@/components/code";
import { CreatedAt } from "@/components/created-at";
import { Header } from "@/components/header";
import { PageView } from "@/components/pageview";
import { RelatedPost } from "@/components/related-post";
import config from "@/lib/config";
import { getImageUrl, removeDuplicates } from "@/lib/utils";
import { urlForImage } from "@/sanity/lib/image";
import { getPostBySlug } from "@/src/queries/getPostBySlug";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 3600;

export async function generateMetadata({ params }): Promise<Metadata> {
  const slug = params.slug[0];
  const postData = await getPostBySlug(slug);

  return {
    title: postData.post.title,
    description: postData.post.description,
    keywords: postData.post.keywords,
    openGraph: {
      type: "website",
      title: postData.post.title,
      description: postData.post.description,
      siteName: config.title,
      images: postData.post.coverImage,
      url: `${config.appLink}/blog/${postData.post.slug}`,
    },
    twitter: {
      title: postData.post.title,
      description: postData.post.description,
      images: postData.post.coverImage,
      card: "summary_large_image",
    },
  };
}

export default async function Page({ params }) {
  const slug = params.slug[0];

  const postData = await getPostBySlug(slug);

  if (!postData) {
    notFound();
  }

  const { post, morePosts } = postData;

  const relatedPosts = removeDuplicates(
    [...post.related, ...morePosts]
      .slice(0, 3)
      .filter((p) => p.slug !== post.slug),
    "slug"
  ) as any;

  return (
    <>
      <Header location="post" />
      <PageView id={post._id} />
      <main>
        <h1 className="text-4xl text-purple font-medium">{post.title}</h1>
        <CreatedAt date={post._createdAt} />
        <p>{post.description}</p>

        <img
          src={getImageUrl(post.coverImage, "post")}
          alt={`${post.title} - cover`}
          className="mx-auto mt-4"
        />

        <section
          id="content"
          className="text-xl pb-6 border-b border-b-gray-500"
        >
          <PortableText
            value={post.content}
            components={{
              types: {
                code: (props) => {
                  return <Code {...props} />;
                },
                image: (props) => {
                  return (
                    <img
                      src={urlForImage(props.value).url()}
                      className="lg:max-w-screen-md my-2 mx-auto"
                      alt={post.title}
                    />
                  );
                },
              },
            }}
          />
        </section>

        <section id="related-posts" className="my-6">
          <h2 className="text-3xl font-medium text-red">Related Posts</h2>
          <div className="grid grid-rows lg:grid-cols-3 gap-4">
            {relatedPosts.map((post) => (
              <RelatedPost post={post} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
