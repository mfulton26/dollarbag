/**
 * Augments {@linkcode $} with `"requireSafePrecision"`.
 *
 * @module
 */

import $ from "💰/$.ts";

const value = Symbol("$.requireSafePrecision");

declare module "💰/$.ts" {
  interface DollarSign {
    requireSafePrecision: typeof value;
  }
}

Object.defineProperty($, "requireSafePrecision", { value });
