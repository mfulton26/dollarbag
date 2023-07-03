/**
 * Augments {@linkcode $} with `"compareTo"`.
 *
 * @see `BigInt.prototype[$.compareTo]`
 * @see `Boolean.prototype[$.compareTo]`
 * @see `Date.prototype[$.compareTo]`
 * @see `Number.prototype[$.compareTo]`
 * @see `String.prototype[$.compareTo]`
 *
 * @module
 */

import $ from "💰/$.ts";

const value = Symbol("$.compareTo");

declare module "💰/$.ts" {
  interface DollarSign {
    compareTo: typeof value;
  }
}

Object.defineProperty($, "compareTo", { value });
