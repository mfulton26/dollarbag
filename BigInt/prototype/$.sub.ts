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
  function (other) {
    return this.valueOf() - other;
  },
);
