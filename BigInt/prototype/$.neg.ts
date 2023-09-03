import $ from "💰/$.ts";
import "💰/$/neg.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface BigInt {
    [$.neg](): bigint;
  }
}

Object[$.defineDataProperty](
  BigInt.prototype,
  $.neg,
  function (this: bigint) {
    return -this;
  },
);
