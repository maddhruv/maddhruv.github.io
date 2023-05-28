import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export const query = groq`
*[_type == "post" && !(_id in path('drafts.**')) && isPublished == true] | order(date desc) {
  "slug": slug.current,
  _createdAt,
  _updatedAt
}`;

export const getSitemap = async () => {
  const data = await client.fetch(query);
  return data;
};
