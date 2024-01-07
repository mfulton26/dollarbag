/**
 * Augments {@linkcode $} with `"neg"`.
 *
 * @module
 */

import $ from "💰/$.ts";

const value = Symbol("$.neg");

declare module "💰/$.ts" {
  interface DollarSign {
    neg: typeof value;
  }
}

Object.defineProperty($, "neg", { value });
