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
  function (this: bigint) {
    return this + 1n;
  },
);
