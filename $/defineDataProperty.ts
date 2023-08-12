/**
 * Augments {@linkcode $} with `"defineDataProperty"`.
 *
 * @module
 */

import $ from "💰/$.ts";

const value = Symbol("$.defineDataProperty");

declare module "💰/$.ts" {
  interface DollarSign {
    defineDataProperty: typeof value;
  }
}

Object.defineProperty($, "defineDataProperty", { value });
