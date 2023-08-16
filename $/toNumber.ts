/**
 * Augments {@linkcode $} with `"toNumber"`.
 *
 * @module
 */

import $ from "💰/$.ts";

const value = Symbol("$.toNumber");

declare module "💰/$.ts" {
  interface DollarSign {
    toNumber: typeof value;
  }
}

Object.defineProperty($, "toNumber", { value });
