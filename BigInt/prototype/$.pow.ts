import $ from "💰/$.ts";
import "💰/$/pow.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface BigInt {
    [$.pow](other: bigint): bigint;
  }
}

Object[$.defineDataProperty](
  BigInt.prototype,
  $.pow,
  function(this: bigint, other) {
    return this ** other;
  },
);
