import $ from "💰/$.ts";
import "💰/$/div.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface BigInt {
    [$.div](other: bigint): bigint;
  }
}

Object[$.defineDataProperty](
  BigInt.prototype,
  $.div,
  function (other) {
    return this.valueOf() / other;
  },
);
