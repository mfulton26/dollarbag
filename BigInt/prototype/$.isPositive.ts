import $ from "💰/$.ts";
import "💰/$/isPositive.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface BigInt {
    [$.isPositive](): boolean;
  }
}

Object[$.defineDataProperty](
  BigInt.prototype,
  $.isPositive,
  function(this: bigint) {
    return this > 0n;
  },
);
