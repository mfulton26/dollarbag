/**
 * Augments {@linkcode $} with `"lineIterator"`.
 *
 * @module
 */

import $ from "💰/$.ts";

const value = Symbol("$.lineIterator");

declare module "💰/$.ts" {
  interface DollarSign {
    lineIterator: typeof value;
  }
}

Object.defineProperty($, "lineIterator", { value });
