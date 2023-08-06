/**
 * Augments {@linkcode $} with `"ZERO"`.
 *
 * @module
 */

import $ from "💰/$.ts";

const value = Symbol("$.ZERO");

declare module "💰/$.ts" {
  interface DollarSign {
    ZERO: typeof value;
  }
}

Object.defineProperty($, "ZERO", { value });
