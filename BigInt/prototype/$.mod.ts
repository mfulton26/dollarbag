import $ from "💰/$.ts";
import "💰/$/mod.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface BigInt {
    [$.mod](other: bigint): bigint;
  }
}

Object[$.defineDataProperty](
  BigInt.prototype,
  $.mod,
  function (other) {
    return ((this.valueOf() % other) + other) % other;
  },
);
