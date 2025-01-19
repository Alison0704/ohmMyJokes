import type { GadgetPermissions } from "gadget-server";

/**
 * This metadata describes the access control configuration available in your application.
 * Grants that are not defined here are set to false by default.
 *
 * View and edit your roles and permissions in the Gadget editor at https://ohm-my-jokes.gadget.app/edit/settings/permissions
 */
export const permissions: GadgetPermissions = {
  type: "gadget/permissions/v1",
  roles: {
    OPENAI_API_KEY: {
      storageKey: "unauthenticated",
      models: {
        joke: {
          read: true,
        },
      },
    },
    user: {
      storageKey: "304voAsZYVQl",
      models: {
        joke: {
          read: true,
          actions: {
            create: true,
            update: true,
          },
        },
        session: {
          read: true,
        },
        user: {
          read: true,
          actions: {
            update: true,
          },
        },
      },
    },
  },
};
