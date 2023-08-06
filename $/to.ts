/**
 * Augments {@linkcode $} with `"to"`.
 *
 * @module
 */

import $ from "💰/$.ts";

const value = Symbol("$.to");

declare module "💰/$.ts" {
  interface DollarSign {
    to: typeof value;
  }
}

Object.defineProperty($, "to", { value });
