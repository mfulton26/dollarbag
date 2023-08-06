/**
 * Augments {@linkcode $} with `"dec"`.
 *
 * @module
 */

import $ from "💰/$.ts";

const value = Symbol("$.dec");

declare module "💰/$.ts" {
  interface DollarSign {
    dec: typeof value;
  }
}

Object.defineProperty($, "dec", { value });
