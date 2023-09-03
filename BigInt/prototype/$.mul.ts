import $ from "💰/$.ts";
import "💰/$/mul.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface BigInt {
    [$.mul](other: bigint): bigint;
  }
}

Object[$.defineDataProperty](
  BigInt.prototype,
  $.mul,
  function (this: bigint, other) {
    return this * other;
  },
);
