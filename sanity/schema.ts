import { type SchemaTypeDefinition } from "sanity";

const contentBlock = {
  name: "content",
  title: "Content",
  type: "array",
  of: [
    { type: "block" },
    {
      name: "code",
      title: "Code Block",
      type: "code",
    },
    {
      type: "image",
      name: "image",
      title: "Image",
      fields: [
        {
          name: "caption",
          title: "Caption",
          type: "string",
        },
      ],
    },
  ],
  validation: (Rule) => Rule.required(),
};

const CategorySchema: SchemaTypeDefinition = {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};

const PostSchema: SchemaTypeDefinition = {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    contentBlock,
    {
      name: "keywords",
      title: "Keywords",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "pageView",
      title: "Page View",
      type: "number",
      hidden: true,
    },
    {
      name: "isPublished",
      title: "Is Published",
      type: "boolean",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
  initialValue: {
    pageView: 0,
    isPublished: false,
  },
};

const PageSchema: SchemaTypeDefinition = {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "pageId",
      title: "Page ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    contentBlock,
    {
      name: "categories",
      title: "Categories to refer",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
      validation: (Rule) => Rule.required(),
    },
  ],
};

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [CategorySchema, PostSchema, PageSchema],
};
