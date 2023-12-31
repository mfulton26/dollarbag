/**
 * Augments {@linkcode $} with `"also"`.
 *
 * @see `Object.prototype[$.also]`
 *
 * @module
 */

import $ from "💰/$.ts";

const value = Symbol("$.also");

declare module "💰/$.ts" {
  interface DollarSign {
    also: typeof value;
  }
}

Object.defineProperty($, "also", { value });
