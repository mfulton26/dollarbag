/**
 * Augments {@linkcode $} with `"inc"`.
 *
 * @module
 */

import $ from "💰/$.ts";

const value = Symbol("$.inc");

declare module "💰/$.ts" {
  interface DollarSign {
    inc: typeof value;
  }
}

Object.defineProperty($, "inc", { value });
