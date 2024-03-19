import { getSitemap } from "@/src/queries/getSitemap";
import { getCategories } from "@/src/queries/getCategories";
import { MetadataRoute } from "next";
import config from "@/lib/config";
import { generateRss } from "@/lib/generateRss";

export const revalidate = 360;

const STATIC_PAGES = ["about-me", "categories", "maintaining-javascript"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  generateRss();
  const posts = await getSitemap();
  const categories = await getCategories();

  const postsMap = posts.map((post) => ({
    url: `https://${config.host}/blog/${post.slug}`,
    lastModified: new Date(post._updatedAt),
  }));

  const categoriesMap = categories.map((category) => ({
    url: `https://${config.host}/category/${encodeURIComponent(
      category.name.toLocaleLowerCase()
    )}`,
  }));

  const staticPages = STATIC_PAGES.map((page) => ({
    url: `https://${config.host}/${page}`,
  }));

  return [
    {
      url: `https://${config.host}/`,
    },
    ...staticPages,
    ...postsMap,
    ...categoriesMap,
  ];
}
