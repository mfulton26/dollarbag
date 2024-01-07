/**
 * Augments {@linkcode $} with `"toArray"`.
 *
 * @module
 */

import $ from "💰/$.ts";

const value = Symbol("$.toArray");

declare module "💰/$.ts" {
  interface DollarSign {
    toArray: typeof value;
  }
}

Object.defineProperty($, "toArray", { value });
