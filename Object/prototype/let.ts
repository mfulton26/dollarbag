import $ from "💰/$.ts";
import "💰/$/let.ts";

/**
 * Call some function on a value as its argument and then continue with the return value.
 *
 * Useful for transforming some value—especially in conjunction with [optional chaining (?.)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining).
 *
 * ```ts
 * import $ from "💰/$.ts";
 * import "💰/Object/prototype/let.ts";
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
function value<T extends NonNullable<unknown>, R>(
  this: T,
  transform: (value: T) => R,
): R {
  return transform(this);
}

declare global {
  interface Object {
    [$.let]: typeof value;
  }
}

Object.defineProperty(Object.prototype, $.let, { value });
