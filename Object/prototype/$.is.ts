import $ from "💰/$.ts";
import "💰/$/is.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface Object {
    [$.is]<T extends NonNullable<unknown>>(this: T, that: T): boolean;
  }
}

Object[$.defineDataProperty](
  Object.prototype,
  $.is,
  function value<T extends NonNullable<unknown>>(this: T, that: T) {
    return Object.is(this, that);
  },
);
