/**
 * Augments {@linkcode $} with `"ONE"`.
 *
 * @module
 */

import $ from "💰/$.ts";

const value = Symbol("$.ONE");

declare module "💰/$.ts" {
  interface DollarSign {
    ONE: typeof value;
  }
}

Object.defineProperty($, "ONE", { value });
