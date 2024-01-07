import $ from "💰/$.ts";
import "💰/$/abs.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface BigInt {
    [$.abs](): bigint;
  }
}

Object[$.defineDataProperty](
  BigInt.prototype,
  $.abs,
  function (this: bigint) {
    if (this < 0n) return -this;
    return this;
  },
);
