import $ from "💰/$.ts";
import "💰/$/requireSafePrecision.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface BigInt {
    [$.requireSafePrecision](message?: string): bigint;
  }
}

Object[$.defineDataProperty](
  BigInt.prototype,
  $.requireSafePrecision,
  function(this: bigint) {
    return this;
  },
);
