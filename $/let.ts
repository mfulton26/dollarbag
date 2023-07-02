/**
 * Augments {@linkcode $} with `"let"`.
 *
 * @see `Object.prototype[$.let]`
 *
 * @module
 */

import $ from "💰/$.ts";

const value = Symbol("$.let");

declare module "💰/$.ts" {
  interface $ {
    let: typeof value;
  }
}

Object.defineProperty($, "let", { value });
