/**
 * Augments {@linkcode $} with `"toAsync"`.
 *
 * @module
 */

import $ from "💰/$.ts";

const value = Symbol("$.toAsync");

declare module "💰/$.ts" {
  interface DollarSign {
    toAsync: typeof value;
  }
}

Object.defineProperty($, "toAsync", { value });
