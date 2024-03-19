import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

const pageFields = `
  _id,
  pageId,
  title,
  description,
  content,
`;

const postsFields = `
  title,
  description,
  "slug": slug.current,
  "coverImage": coverImage.asset->url,
`;

export const query = groq`
*[_type == "page" && !(_id in path('drafts.**')) && pageId == $pageId] | order(_updatedAt desc) [0] {
    ${pageFields}
    "posts": *[_type == "post" && !(_id in path('drafts.**')) && isPublished == true && count(categories[@._ref in ^.^.categories[]._ref]) > 0] | order(date desc, _updatedAt desc) {
      ${postsFields}
    }
  }
`;

export const getPageData = async (pageId: string) => {
  const data = await client.fetch(query, { pageId });
  return data;
};
