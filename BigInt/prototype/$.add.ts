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
  function (this: bigint, other) {
    return this + other;
  },
);
