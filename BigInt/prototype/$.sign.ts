import $ from "💰/$.ts";
import "💰/$/sign.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface BigInt {
    [$.sign](): 0n | 1n | -1n;
  }
}

Object[$.defineDataProperty](
  BigInt.prototype,
  $.sign,
  function () {
    const value = this.valueOf();
    if (value === 0n) return 0n;
    return value < 0n ? -1n : 1n;
  },
);
