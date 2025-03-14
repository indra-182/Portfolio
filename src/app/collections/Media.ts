import { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  upload: {
    staticDir: "../media",
    imageSizes: [
      {
        name: "thumbnail",
        width: 300,
        height: 300,
        position: "centre",
      },
      {
        name: "card",
        width: 768,
        height: 1024,
        position: "centre",
      },
      {
        name: "tablet",
        width: 1024,
        height: undefined,
        position: "centre",
      },
    ],
    adminThumbnail: "thumbnail",
    mimeTypes: ["image/png", "image/jpeg", "image/gif", "image/svg+xml"],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      label: "Alt Text",
    },
    {
      name: "caption",
      type: "text",
      label: "Caption",
    },
  ],
};
