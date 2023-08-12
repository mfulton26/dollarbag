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
  function(this: bigint) {
    return this < 0n;
  },
);
