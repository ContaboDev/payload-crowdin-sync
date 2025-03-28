import type { CollectionConfig } from "payload";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  access: {
    read: () => true,
  },
  fields: [
    // Email added by default
    {
      name: "name",
      type: "text",
    },
  ],
};

export default Users;
