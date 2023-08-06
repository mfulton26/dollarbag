/**
 * Augments {@linkcode $} with `"isNegative"`.
 *
 * @module
 */

import $ from "💰/$.ts";

const value = Symbol("$.isNegative");

declare module "💰/$.ts" {
  interface DollarSign {
    isNegative: typeof value;
  }
}

Object.defineProperty($, "isNegative", { value });
