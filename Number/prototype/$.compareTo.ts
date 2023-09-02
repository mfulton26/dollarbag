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
  function (other) {
    const value = this.valueOf();
    return value === other ? 0 : value - other;
  },
);
