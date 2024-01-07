import $ from "💰/$.ts";
import "💰/$/compareTo.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface Boolean {
    [$.compareTo](other: boolean): number;
  }
}

Object[$.defineDataProperty](
  Boolean.prototype,
  $.compareTo,
  function (other) {
    return Number(this) - Number(other);
  },
);
