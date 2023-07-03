/**
 * Augments {@linkcode $} with `"pow"`.
 *
 * @see `BigInt.prototype[$.pow]`
 * @see `Number.prototype[$.pow]`
 *
 * @module
 */

import $ from "💰/$.ts";

const value = Symbol("$.pow");

declare module "💰/$.ts" {
  interface DollarSign {
    pow: typeof value;
  }
}

Object.defineProperty($, "pow", { value });
