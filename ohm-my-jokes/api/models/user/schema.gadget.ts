import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "user" model, go to https://ohm-my-jokes.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "kWaXo53-Yn9e",
  fields: {
    email: {
      type: "email",
      validations: { required: true, unique: true },
      storageKey: "WsXuqR0HkYEW",
    },
    emailVerificationToken: {
      type: "string",
      storageKey: "xlITazWlIGZF",
    },
    emailVerificationTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "ydpwJB5K5Ryw",
    },
    emailVerified: {
      type: "boolean",
      default: false,
      storageKey: "lhUpE8d9Hfiv",
    },
    firstName: { type: "string", storageKey: "7gJlvqCMHAa2" },
    googleImageUrl: { type: "url", storageKey: "hEBBl17bc-nG" },
    googleProfileId: { type: "string", storageKey: "begZnl0ViibS" },
    lastName: { type: "string", storageKey: "G_yCO4Nfjz8_" },
    lastSignedIn: {
      type: "dateTime",
      includeTime: true,
      storageKey: "_iWiDOW8z4zT",
    },
    password: {
      type: "password",
      validations: { strongPassword: true },
      storageKey: "IzGDl__Rcrcx",
    },
    resetPasswordToken: {
      type: "string",
      storageKey: "iQrHXlijFXSE",
    },
    resetPasswordTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "Zxq0o7Rm424F",
    },
    roles: {
      type: "roleList",
      default: ["unauthenticated"],
      storageKey: "XaUgDdjQNhVf",
    },
  },
};
