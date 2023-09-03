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
  function value(this: string, other) {
    return this === other ? 0 : this < other ? -1 : 1;
  },
);
