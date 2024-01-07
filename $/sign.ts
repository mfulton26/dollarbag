/**
 * Augments {@linkcode $} with `"sign"`.
 *
 * @module
 */

import $ from "💰/$.ts";

const value = Symbol("$.sign");

declare module "💰/$.ts" {
  interface DollarSign {
    sign: typeof value;
  }
}

Object.defineProperty($, "sign", { value });
