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
  function (message = "this is zero") {
    const value = this.valueOf();
    if (value === 0n) throw new RangeError(message);
    return value;
  },
);
