import $ from "💰/$.ts";
import "💰/$/neg.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface Number {
    [$.neg](): number;
  }
}

Object[$.defineDataProperty](
  Number.prototype,
  $.neg,
  function () {
    return -this.valueOf();
  },
);
