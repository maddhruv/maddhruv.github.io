import fs from "fs";
import RSS from "rss";
import config from "./config";
import { getHomePagePosts } from "@/src/queries/getHomePagePosts";

export const generateRss = async () => {
  const posts = await getHomePagePosts();

  const feedOptions: RSS.FeedOptions = {
    title: config.title,
    description: config.description,
    site_url: config.host,
    feed_url: `https://${config.host}/rss.xml`,
    pubDate: new Date(),
  };

  const feed = new RSS(feedOptions);

  posts.forEach((page) => {
    feed.item({
      title: page.title,
      description: page.description,
      url: `/blog/
        ${page.slug}
      }?utm_source=rss&utm_medium=rss&utm_campaign=rss`,
      date: page._createdAt,
    });
  });

  if (!fs.existsSync("./public")) {
    fs.mkdirSync("./public");
  }

  fs.writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
};
