import $ from "💰/$.ts";
import "💰/$/compareTo.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface Number {
    [$.compareTo](other: number): number;
  }
}

Object[$.defineDataProperty](
  Number.prototype,
  $.compareTo,
  function value(this: number, other) {
    return this === other ? 0 : this - other;
  },
);
