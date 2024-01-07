import $ from "💰/$.ts";
import "💰/$/requireSafeInteger.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface Number {
    [$.requireSafeInteger](message?: string): number;
  }
}

Object[$.defineDataProperty](
  Number.prototype,
  $.requireSafeInteger,
  function (message) {
    const value = this.valueOf();
    if (Number.isSafeInteger(value)) return value;
    throw new RangeError(message ?? `${value} is not a safe integer`);
  },
);
