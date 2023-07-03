/**
 * Augments {@linkcode $} with `"add"`.
 *
 * @see `BigInt.prototype[$.add]`
 * @see `Number.prototype[$.add]`
 *
 * @module
 */

import $ from "💰/$.ts";

const value = Symbol("$.add");

declare module "💰/$.ts" {
  interface DollarSign {
    add: typeof value;
  }
}

Object.defineProperty($, "add", { value });
