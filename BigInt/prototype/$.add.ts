import $ from "💰/$.ts";
import "💰/$/add.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface BigInt {
    [$.add](other: bigint): bigint;
  }
}

Object[$.defineDataProperty](
  BigInt.prototype,
  $.add,
  function (other) {
    return this.valueOf() + other;
  },
);
