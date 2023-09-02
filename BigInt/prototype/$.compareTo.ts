import $ from "💰/$.ts";
import "💰/$/compareTo.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface BigInt {
    [$.compareTo](other: bigint): number;
  }
}

Object[$.defineDataProperty](
  BigInt.prototype,
  $.compareTo,
  function (other) {
    return Number(this.valueOf() - other);
  },
);
