/**
 * Augments {@linkcode $} with `"requireNonzero"`.
 *
 * @module
 */

import $ from "💰/$.ts";

const value = Symbol("$.requireNonzero");

declare module "💰/$.ts" {
  interface DollarSign {
    requireNonzero: typeof value;
  }
}

Object.defineProperty($, "requireNonzero", { value });
