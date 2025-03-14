import { CollectionConfig } from "payload";

export const Posts: CollectionConfig = {
  slug: "posts",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "content",
      type: "richText",
    },
    {
      name: "featuredImage",
      type: "upload",
      relationTo: "media",
      required: false,
    },
    {
      name: "includedInBlog",
      type: "checkbox",
      defaultValue: true,
    },
  ],
};