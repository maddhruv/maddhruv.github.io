export const getPageTitle = (title) => title.split(" ").join("-");

export const getProperties = (properties) =>
  Object.entries(properties).map((property) => {
    // @ts-ignore
    const [name, { id }] = property;
    return {
      property_name: name,
      property_id: id,
    };
  });

export const getPropertyValue = (name, response) => {
  if (name === "title") {
    return { title: response.results[0].title.plain_text };
  }
  if (name === "description") {
    return { description: response.results[0].rich_text.plain_text };
  }
  if (name === "date") {
    return { date: response.date.start };
  }
  if (name === "published") {
    return { published: response.checkbox };
  }
  if (name === "tags") {
    return { tags: response.multi_select.map(({ name }) => name) };
  }
};

export const getOGUrl = ({ title, description, tags }) => {};
