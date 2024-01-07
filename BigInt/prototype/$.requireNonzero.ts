import $ from "💰/$.ts";
import "💰/$/requireNonzero.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface BigInt {
    [$.requireNonzero](message?: string): bigint;
  }
}

Object[$.defineDataProperty](
  BigInt.prototype,
  $.requireNonzero,
  function(this: bigint, message = "this is zero") {
    if (this === 0n) throw new RangeError(message);
    return this;
  },
);
