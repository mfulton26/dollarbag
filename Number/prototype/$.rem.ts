import $ from "💰/$.ts";
import "💰/$/rem.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface Number {
    [$.rem](other: number): number;
  }
}

Object[$.defineDataProperty](
  Number.prototype,
  $.rem,
  function value(this: number, other) {
    return this % other;
  },
);
