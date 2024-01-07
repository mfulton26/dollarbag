import $ from "💰/$.ts";
import "💰/$/pow.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface Number {
    [$.pow](other: number): number;
  }
}

Object[$.defineDataProperty](
  Number.prototype,
  $.pow,
  function (other) {
    return this.valueOf() ** other;
  },
);
