import $ from "💰/$.ts";
import "💰/$/inc.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface BigInt {
    [$.inc](): bigint;
  }
}

Object[$.defineDataProperty](
  BigInt.prototype,
  $.inc,
  function () {
    return this.valueOf() + 1n;
  },
);
