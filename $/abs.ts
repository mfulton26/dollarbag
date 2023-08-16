/**
 * Augments {@linkcode $} with `"abs"`.
 *
 * @module
 */

import $ from "💰/$.ts";

const value = Symbol("$.abs");

declare module "💰/$.ts" {
  interface DollarSign {
    abs: typeof value;
  }
}

Object.defineProperty($, "abs", { value });
