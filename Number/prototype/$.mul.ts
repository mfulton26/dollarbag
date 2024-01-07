import $ from "💰/$.ts";
import "💰/$/mul.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface Number {
    [$.mul](other: number): number;
  }
}

Object[$.defineDataProperty](
  Number.prototype,
  $.mul,
  function (other) {
    return this.valueOf() * other;
  },
);
