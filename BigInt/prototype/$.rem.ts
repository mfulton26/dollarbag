import $ from "💰/$.ts";
import "💰/$/rem.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface BigInt {
    [$.rem](other: bigint): bigint;
  }
}

Object[$.defineDataProperty](
  BigInt.prototype,
  $.rem,
  function (this: bigint, other) {
    return this % other;
  },
);
