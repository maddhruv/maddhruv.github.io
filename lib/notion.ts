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

  return pages.filter((page) => page.published);
};

export const getPageData = async (title) => {
  const pageSearch = await notion.search({
    query: title,
  });

  const pageData = pageSearch.results[0];

  const page_id = pageData.id;

  const recordMap = await notionAPI.getPage(page_id);

  // @ts-ignore
  const properties = getProperties(pageData.properties);
  const page = await getPage(page_id, properties);

  return {
    recordMap,
    ...page,
  };
};
