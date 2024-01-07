import $ from "💰/$.ts";
import "💰/$/is.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface Object {
    [$.is]<T>(this: T, that: T): boolean;
  }
}

Object[$.defineDataProperty](
  Object.prototype,
  $.is,
  function <T>(this: T, that: T) {
    return Object.is(this, that);
  },
);
