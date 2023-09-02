import $ from "💰/$.ts";
import "💰/$/takeIf.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface Object {
    [$.takeIf]<T>(this: T, predicate: (value: T) => unknown): T | undefined;
  }
}

Object[$.defineDataProperty](
  Object.prototype,
  $.takeIf,
  function (predicate) {
    if (predicate(this)) return this;
    return undefined;
  },
);
