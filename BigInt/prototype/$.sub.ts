import $ from "💰/$.ts";
import "💰/$/sub.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface BigInt {
    [$.sub](other: bigint): bigint;
  }
}

Object[$.defineDataProperty](
  BigInt.prototype,
  $.sub,
  function(this: bigint, other) {
    return this - other;
  },
);
