import $ from "💰/$.ts";
import "💰/$/is.ts";

function value<T extends NonNullable<unknown>>(this: T, that: T) {
  return Object.is(this, that);
}

declare global {
  interface Object {
    [$.is]: typeof value;
  }
}

Object.defineProperty(Object.prototype, $.is, { value });
