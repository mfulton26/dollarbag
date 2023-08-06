/**
 * Augments {@linkcode $} with `"isInteger"`.
 *
 * @module
 */

import $ from "💰/$.ts";

const value = Symbol("$.isInteger");

declare module "💰/$.ts" {
  interface DollarSign {
    isInteger: typeof value;
  }
}

Object.defineProperty($, "isInteger", { value });
