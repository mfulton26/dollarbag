/**
 * Augments {@linkcode $} with `"build"`.
 *
 * @see `Array[$.build]`
 * @see `Map[$.build]`
 * @see `Set[$.build]`
 * @see `TypedArray[$.build]`
 * @see `WeakMap[$.build]`
 * @see `WeakSet[$.build]`
 *
 * @module
 */

import $ from "💰/$.ts";

const value = Symbol("$.build");

declare module "💰/$.ts" {
  interface DollarSign {
    build: typeof value;
  }
}

Object.defineProperty($, "build", { value });
