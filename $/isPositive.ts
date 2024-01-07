/**
 * Augments {@linkcode $} with `"isPositive"`.
 *
 * @module
 */

import $ from "💰/$.ts";

const value = Symbol("$.isPositive");

declare module "💰/$.ts" {
  interface DollarSign {
    isPositive: typeof value;
  }
}

Object.defineProperty($, "isPositive", { value });
