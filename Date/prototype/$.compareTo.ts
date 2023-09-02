import $ from "💰/$.ts";
import "💰/$/compareTo.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface Date {
    [$.compareTo](other: Date): number;
  }
}

Object[$.defineDataProperty](
  Date.prototype,
  $.compareTo,
  function (other) {
    return this.valueOf() - other.valueOf();
  },
);
