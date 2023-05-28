import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

const postFields = `
  _id,
  title,
  description,
  "coverImage": coverImage.asset->url,
  keywords,
  "slug": slug.current,
  "categories": categories[]->name,
  content,
  pageView,
  _createdAt,
`;

const relatedPostsFields = `
  title,
  description,
  "slug": slug.current,
  "coverImage": coverImage.asset->url,
`;

export const query = groq`
{
  "post": *[_type == "post" && !(_id in path('drafts.**')) && slug.current == $slug] | order(_updatedAt desc) [0] {
    ${postFields}
    "related": *[_type == "post" && !(_id in path('drafts.**')) && count(categories[@._ref in ^.^.categories[]._ref]) > 0] | order(publishedAt desc, _createdAt desc) [0..5] {
      ${relatedPostsFields}
    }
  },
  "morePosts": *[_type == "post" && !(_id in path('drafts.**')) && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    ${relatedPostsFields}
  }
}
`;

export const getPostBySlug = async (slug: string) => {
  const data = await client.fetch(query, { slug });
  return data;
};
