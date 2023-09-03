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
  function (this: bigint, other) {
    return ((this % other) + other) % other;
  },
);
