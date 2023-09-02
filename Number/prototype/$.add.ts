import $ from "💰/$.ts";
import "💰/$/add.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface Number {
    [$.add](other: number): number;
  }
}

Object[$.defineDataProperty](
  Number.prototype,
  $.add,
  function (other) {
    return this.valueOf() + other;
  },
);
