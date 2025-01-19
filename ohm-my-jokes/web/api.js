// Sets up the API client for interacting with your backend. 
// For your API reference, visit: https://docs.gadget.dev/api/ohm-my-jokes
import { Client } from "@gadget-client/ohm-my-jokes";

export const api = new Client({ environment: window.gadgetConfig.environment });

