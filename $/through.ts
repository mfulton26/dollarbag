/**
 * Augments {@linkcode $} with `"through"`.
 *
 * @module
 */

import $ from "💰/$.ts";

const value = Symbol("$.through");

declare module "💰/$.ts" {
  interface DollarSign {
    through: typeof value;
  }
}

Object.defineProperty($, "through", { value });
