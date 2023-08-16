/**
 * Augments {@linkcode $} with `"takeIf"`.
 *
 * @module
 */

import $ from "💰/$.ts";

const value = Symbol("$.takeIf");

declare module "💰/$.ts" {
  interface DollarSign {
    takeIf: typeof value;
  }
}

Object.defineProperty($, "takeIf", { value });
