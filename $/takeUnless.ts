/**
 * Augments {@linkcode $} with `"takeUnless"`.
 *
 * @module
 */

import $ from "💰/$.ts";

const value = Symbol("$.takeUnless");

declare module "💰/$.ts" {
  interface DollarSign {
    takeUnless: typeof value;
  }
}

Object.defineProperty($, "takeUnless", { value });
