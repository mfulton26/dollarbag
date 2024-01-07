/**
 * Augments {@linkcode $} with `"rem"`.
 *
 * @see `BigInt.prototype[$.rem]`
 * @see `Number.prototype[$.rem]`
 *
 * @module
 */

import $ from "💰/$.ts";

const value = Symbol("$.rem");

declare module "💰/$.ts" {
  interface DollarSign {
    rem: typeof value;
  }
}

Object.defineProperty($, "rem", { value });
