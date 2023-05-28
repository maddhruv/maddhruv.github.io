import { client } from "@/sanity/lib/client";
import { removeDuplicates } from "@/lib/utils";
import { groq } from "next-sanity";

export const query = groq`
*[_type == "post" && !(_id in path('drafts.**'))] | order(date desc, _createdAt desc) [$from...$to] {
  _id,
  title,
  description,
  "coverImage": coverImage.asset->url,
  keywords,
  "slug": slug.current,
  "categories": categories[]->name,
  _createdAt
}`;

export const getHomePagePosts = async (page: number = 1): Promise<any> => {
  const from = (page - 1) * 10;
  const to = page * 10;

  const data = await client.fetch(query, {
    from,
    to,
  });
  const posts = data.filter((post: any) => post.slug);
  return removeDuplicates(posts, "slug");
};
