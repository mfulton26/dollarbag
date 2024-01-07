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
  function () {
    const value = this.valueOf();
    return Object.is(value, -0) || value < 0;
  },
);
