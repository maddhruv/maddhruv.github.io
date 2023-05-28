import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export const query = groq`
*[_type == "post" && !(_id in path('drafts.**'))] {
  pageView
}`;

export const getAllPageviews = async (): Promise<any> => {
  const data = await client.fetch(query);

  const sum = data.reduce((acc, curr) => {
    return acc + (curr.pageView || 0);
  }, 0);

  return sum;
};
