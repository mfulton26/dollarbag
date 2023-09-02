import $ from "💰/$.ts";
import "💰/$/dec.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface BigInt {
    [$.dec](): bigint;
  }
}

Object[$.defineDataProperty](
  BigInt.prototype,
  $.dec,
  function () {
    return this.valueOf() - 1n;
  },
);
