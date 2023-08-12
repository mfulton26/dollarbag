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
  function value(this: number, other) {
    return this * other;
  },
);
