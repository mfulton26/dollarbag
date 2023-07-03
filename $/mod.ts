/**
 * Augments {@linkcode $} with `"mod"`.
 *
 * @see `BigInt.prototype[$.mod]`
 * @see `Number.prototype[$.mod]`
 *
 * @module
 */

import $ from "💰/$.ts";

const value = Symbol("$.mod");

declare module "💰/$.ts" {
  interface DollarSign {
    mod: typeof value;
  }
}

Object.defineProperty($, "mod", { value });
