/**
 * Augments {@linkcode $} with `"requireSafeInteger"`.
 *
 * @module
 */

import $ from "💰/$.ts";

const value = Symbol("$.requireSafeInteger");

declare module "💰/$.ts" {
  interface DollarSign {
    requireSafeInteger: typeof value;
  }
}

Object.defineProperty($, "requireSafeInteger", { value });
