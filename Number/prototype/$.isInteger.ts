import $ from "💰/$.ts";
import "💰/$/isInteger.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface Number {
    [$.isInteger](): boolean;
  }
}

Object[$.defineDataProperty](
  Number.prototype,
  $.isInteger,
  function () {
    return Number.isInteger(this);
  },
);
