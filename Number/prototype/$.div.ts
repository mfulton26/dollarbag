import $ from "💰/$.ts";
import "💰/$/div.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface Number {
    [$.div](other: number): number;
  }
}

Object[$.defineDataProperty](
  Number.prototype,
  $.div,
  function (other) {
    return this.valueOf() / other;
  },
);
