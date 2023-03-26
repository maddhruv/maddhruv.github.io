import fs from "fs";
import RSS from "rss";
import config from "./config";
import { getPageTitle } from "./utils";

export const generateRss = (pages) => {
  const feedOptions: RSS.FeedOptions = {
    title: config.title,
    description: config.description,
    site_url: config.host,
    feed_url: `${config.host}/rss.xml`,
    pubDate: new Date(),
  };

  const feed = new RSS(feedOptions);

  pages.forEach((page) => {
    feed.item({
      title: page.title,
      description: page.description,
      url: `/blog/${getPageTitle(
        page.title
      )}?utm_source=rss&utm_medium=rss&utm_campaign=rss`,
      date: page.date,
    });
  });

  if (!fs.existsSync("./public")) {
    fs.mkdirSync("./public");
  }

  fs.writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
};