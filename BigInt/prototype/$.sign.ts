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
  function (this: bigint) {
    if (this === 0n) return 0n;
    return this < 0n ? -1n : 1n;
  },
);
