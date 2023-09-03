import $ from "💰/$.ts";
import "💰/$/takeUnless.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface Object {
    [$.takeUnless]<T>(this: T, predicate: (value: T) => unknown): T | undefined;
  }
}

Object[$.defineDataProperty](
  Object.prototype,
  $.takeUnless,
  function (this, predicate) {
    if (predicate(this)) return undefined;
    return this;
  },
);
