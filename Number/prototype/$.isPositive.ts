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
  function value(this: number) {
    return Object.is(this, 0) || this > 0;
  },
);
