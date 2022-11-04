import { Client } from "@notionhq/client";
import { NotionAPI } from "notion-client";

import { getProperties, getPropertyValue } from "./utils";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});
const notionAPI = new NotionAPI();

const getPageProperty = async (page_id, { property_id, property_name }) => {
  const property = await notion.pages.properties.retrieve({
    page_id,
    property_id,
  });

  return getPropertyValue(property_name, property);
};

const getPage = async (page_id, properties) => {
  const page = await Promise.all(
    properties.map((property) => getPageProperty(page_id, property))
  );

  return {
    id: page_id,
    ...page.reduce((acc, prop) => {
      return {
        ...acc,
        ...prop,
      };
    }),
  };
};

export const getPages = async () => {
  const database = await notion.databases.query({
    database_id: process.env.DATABASE_ID,
  });

  // @ts-ignore
  const properties = getProperties(database.results[0].properties);

  const pages = await Promise.all(
    database.results.map(({ id }) => getPage(id, properties))
  );

  return pages
    .filter((page) => page.published)
    .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));
};

export const getPageData = async (title) => {
  const pages = await getPages();

  const pageFind = pages.find((page) => {
    return (
      page.title.toLowerCase() === title.split("-").join(" ").toLowerCase()
    );
  });

  const page_id = pageFind.id;

  const recordMap = await notionAPI.getPage(page_id);

  return {
    recordMap,
    ...pageFind,
  };
};
