/**
 * Augments {@linkcode $} with `"reverseIterator"`.
 *
 * @module
 */

import $ from "💰/$.ts";

const value = Symbol("$.reverseIterator");

declare module "💰/$.ts" {
  interface DollarSign {
    reverseIterator: typeof value;
  }
}

Object.defineProperty($, "reverseIterator", { value });
