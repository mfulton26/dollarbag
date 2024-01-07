/**
 * Augments {@linkcode $} with `"div"`.
 *
 * @see `BigInt.prototype[$.div]`
 * @see `Number.prototype[$.div]`
 *
 * @module
 */

import $ from "💰/$.ts";

const value = Symbol("$.div");

declare module "💰/$.ts" {
  interface DollarSign {
    div: typeof value;
  }
}

Object.defineProperty($, "div", { value });
