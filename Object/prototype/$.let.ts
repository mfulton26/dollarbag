/**
 * Augments `Object.prototype` with {@linkcode $.let} which can be used to call some function on a value as its argument and then continue with the return value.
 *
 * Useful for transforming some value—especially in conjunction with [optional chaining (?.)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining).
 *
 * @example
 *
 * ```ts
 * import $ from "💰/$.ts";
 * import "💰/Object/prototype/$.let.ts";
 *
 * function getSpecialRandomNumber() {
 *   return Math.random()[$.let]((n) => n < 0.5 ? n : n * 10);
 * }
 * ```
 *
 * instead of
 *
 * ```ts
 * function getSpecialRandomNumber() {
 *   const n = Math.random();
 *   return n < 0.5 ? n : n * 10;
 * }
 * ```
 *
 * @module
 */

import $ from "💰/$.ts";
import "💰/$/let.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface Object {
    /**
     * Call some function on a value as its argument and then continue with the return value.
     *
     * Useful for transforming some value—especially in conjunction with [optional chaining (?.)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining).
     *
     * @example
     *
     * ```ts
     * import $ from "💰/$.ts";
     * import "💰/Object/prototype/$.let.ts";
     *
     * function getSpecialRandomNumber() {
     *   return Math.random()[$.let]((n) => n < 0.5 ? n : n * 10);
     * }
     * ```
     *
     * instead of
     *
     * ```ts
     * function getSpecialRandomNumber() {
     *   const n = Math.random();
     *   return n < 0.5 ? n : n * 10;
     * }
     * ```
     */
    [$.let]<T extends NonNullable<unknown>, R>(
      this: T,
      transform: (value: T) => R,
    ): R;
  }
}

Object[$.defineDataProperty](
  Object.prototype,
  $.let,
  function value<T extends NonNullable<unknown>, R>(
    this: T,
    transform: (value: T) => R,
  ) {
    return transform(this);
  },
);
