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
  function (message = "this is zero") {
    const value = this.valueOf();
    if (value === 0) throw new RangeError(message);
    return value;
  },
);
