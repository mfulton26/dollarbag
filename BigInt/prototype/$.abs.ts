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
  function () {
    const value = this.valueOf();
    if (value < 0n) return -value;
    return value;
  },
);
