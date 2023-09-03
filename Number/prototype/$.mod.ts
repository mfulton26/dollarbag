import $ from "💰/$.ts";
import "💰/$/mod.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface Number {
    [$.mod](other: number): number;
  }
}

Object[$.defineDataProperty](
  Number.prototype,
  $.mod,
  function value(this: number, other) {
    return ((this % other) + other) % other;
  },
);
