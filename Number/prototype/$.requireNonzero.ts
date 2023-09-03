import $ from "💰/$.ts";
import "💰/$/requireNonzero.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface Number {
    [$.requireNonzero](message?: string): number;
  }
}

Object[$.defineDataProperty](
  Number.prototype,
  $.requireNonzero,
  function value(this: number, message = "this is zero") {
    if (this === 0) throw new RangeError(message);
    return this;
  },
);
