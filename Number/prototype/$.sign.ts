import $ from "💰/$.ts";
import "💰/$/sign.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface Number {
    [$.sign](): number;
  }
}

Object[$.defineDataProperty](
  Number.prototype,
  $.sign,
  function () {
    return Math.sign(this.valueOf());
  },
);
