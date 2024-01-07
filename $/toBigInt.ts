/**
 * Augments {@linkcode $} with `"toBigInt"`.
 *
 * @module
 */

import $ from "💰/$.ts";

const value = Symbol("$.toBigInt");

declare module "💰/$.ts" {
  interface DollarSign {
    toBigInt: typeof value;
  }
}

Object.defineProperty($, "toBigInt", { value });
