import $ from "💰/$.ts";
import "💰/$/inc.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface Number {
    [$.inc](): number;
  }
}

Object[$.defineDataProperty](
  Number.prototype,
  $.inc,
  function () {
    return this.valueOf() + 1;
  },
);
