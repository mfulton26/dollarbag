/**
 * Augments {@linkcode $} with `"mul"`.
 *
 * @see `BigInt.prototype[$.mul]`
 * @see `Number.prototype[$.mul]`
 *
 * @module
 */

import $ from "💰/$.ts";

const value = Symbol("$.mul");

declare module "💰/$.ts" {
  interface DollarSign {
    mul: typeof value;
  }
}

Object.defineProperty($, "mul", { value });
