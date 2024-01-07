/**
 * Augments {@linkcode $} with `"is"`.
 *
 * @module
 */

import $ from "💰/$.ts";

const value = Symbol("$.is");

declare module "💰/$.ts" {
  interface DollarSign {
    is: typeof value;
  }
}

Object.defineProperty($, "is", { value });
