/**
 * Augments {@linkcode $} with `"sub"`.
 *
 * @see `BigInt.prototype[$.sub]`
 * @see `Number.prototype[$.sub]`
 *
 * @module
 */

import $ from "💰/$.ts";

const value = Symbol("$.sub");

declare module "💰/$.ts" {
  interface DollarSign {
    sub: typeof value;
  }
}

Object.defineProperty($, "sub", { value });
