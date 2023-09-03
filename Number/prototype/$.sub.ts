import $ from "💰/$.ts";
import "💰/$/sub.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface Number {
    [$.sub](other: number): number;
  }
}

Object[$.defineDataProperty](
  Number.prototype,
  $.sub,
  function value(this: number, other) {
    return this - other;
  },
);
