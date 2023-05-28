import { client } from "@/sanity/lib/client";
import { removeDuplicates } from "@/lib/utils";
import { groq } from "next-sanity";

export const query = groq`
*[_type == "post" && !(_id in path('drafts.**')) && (categories[]->name match $category)]{
  title,
  description,
  "coverImage": coverImage.asset->url,
  "categories": categories[]->name,
  "slug": slug.current,
  pageView,
}
`;

export const getPostsByCategory = async (category: string): Promise<any> => {
  const data = await client.fetch(query, { category });
  return removeDuplicates(data, "slug");
};
