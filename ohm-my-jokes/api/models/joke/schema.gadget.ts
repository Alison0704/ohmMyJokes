import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "Joke" model, go to https://ohm-my-jokes.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "flNxk-6IDpFu",
  fields: {
    isFavorite: { type: "boolean", storageKey: "EpfEVE_Wa9lF" },
    text: { type: "string", storageKey: "EeDyIHtyC62E" },
    timestamp: {
      type: "dateTime",
      includeTime: true,
      storageKey: "z5zSVfyt0cMM",
    },
    userInput: { type: "string", storageKey: "G5bQ-TrfNyoO" },
  },
};
