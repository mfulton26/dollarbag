import $ from "💰/$.ts";
import "💰/$/isPositive.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface Number {
    [$.isPositive](): boolean;
  }
}

Object[$.defineDataProperty](
  Number.prototype,
  $.isPositive,
  function () {
    const value = this.valueOf();
    return Object.is(value, 0) || value > 0;
  },
);
