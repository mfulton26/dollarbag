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
  function value(this: number, message = `${this} is not a safe integer`) {
    if (Number.isSafeInteger(this)) return this;
    throw new RangeError(message);
  },
);
