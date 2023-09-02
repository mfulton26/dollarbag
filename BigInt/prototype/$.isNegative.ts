import $ from "💰/$.ts";
import "💰/$/isNegative.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface BigInt {
    [$.isNegative](): boolean;
  }
}

Object[$.defineDataProperty](
  BigInt.prototype,
  $.isNegative,
  function () {
    return this.valueOf() < 0n;
  },
);
