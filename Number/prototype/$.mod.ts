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
  function (other) {
    return ((this.valueOf() % other) + other) % other;
  },
);
