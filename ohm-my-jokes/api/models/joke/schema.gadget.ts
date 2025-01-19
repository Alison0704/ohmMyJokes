import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "joke" model, go to https://ohm-my-jokes.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "flNxk-6IDpFu",
  fields: {
    text: { type: "string", storageKey: "EeDyIHtyC62E" },
    userInput: { type: "string", storageKey: "G5bQ-TrfNyoO" },
  },
};
