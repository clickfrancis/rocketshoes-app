import { setupServer } from "msw/node";
import { handlers } from "./handlesMock";

export const server = setupServer(...handlers);
