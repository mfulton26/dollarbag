/**
 * Augments `Object.prototype` with {@linkcode $.also} which can be used to call some function on a value as its argument and then continue with the same value.
 *
 * Useful for side operations (e.g. inserting logging statements within a chain of operations).
 *
 * @example
 *
 * ```ts
 * import $ from "💰/$.ts";
 * import "💰/Object/prototype/$.also.ts";
 *
 * function getId() {
 *   return crypto.randomUUID()[$.also]((id) => console.debug("generated id:", id));
 * }
 * ```
 *
 * instead of
 *
 * ```ts
 * function getId() {
 *   const id = crypto.randomUUID();
 *   console.debug("generated id:", id);
 *   return id;
 * }
 * ```
 *
 * @module
 */

import $ from "💰/$.ts";
import "💰/$/also.ts";

/**
 * Call some function on a value as its argument and then continue with the same value.
 *
 * Useful for side operations (e.g. inserting logging statements within a chain of operations).
 *
 * @example
 *
 * ```ts
 * import $ from "💰/$.ts";
 * import "💰/Object/prototype/$.also.ts";
 *
 * function getId() {
 *   return crypto.randomUUID()[$.also]((id) => console.debug("generated id:", id));
 * }
 * ```
 *
 * instead of
 *
 * ```ts
 * function getId() {
 *   const id = crypto.randomUUID();
 *   console.debug("generated id:", id);
 *   return id;
 * }
 * ```
 */
function value<T extends NonNullable<unknown>>(
  this: T,
  action: (value: T) => void,
): T {
  action(this);
  return this;
}

declare global {
  interface Object {
    [$.also]: typeof value;
  }
}

Object.defineProperty(Object.prototype, $.also, { value });
