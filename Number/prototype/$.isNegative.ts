import $ from "💰/$.ts";
import "💰/$/isNegative.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface Number {
    [$.isNegative](): boolean;
  }
}

Object[$.defineDataProperty](
  Number.prototype,
  $.isNegative,
  function value(this: number) {
    return Object.is(this, -0) || this < 0;
  },
);
