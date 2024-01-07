import $ from "💰/$.ts";
import "💰/$/compareTo.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface String {
    [$.compareTo](other: string): number;
  }
}

Object[$.defineDataProperty](
  String.prototype,
  $.compareTo,
  function (other) {
    const value = this.valueOf();
    return value === other ? 0 : value < other ? -1 : 1;
  },
);
