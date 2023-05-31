import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

export const query = groq`
*[_type == "category"] {
  ...,
  "count": count(*[_type == "post" && !(_id in path('drafts.**')) && isPublished == true && references(^._id)])
} | order(count desc) {
  name,
  count
}
`;

export const getCategories = async () => {
  const data = await client.fetch(query);
  return data;
};
