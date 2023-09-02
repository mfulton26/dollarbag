import $ from "💰/$.ts";
import "💰/$/abs.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface Number {
    [$.abs](): number;
  }
}

Object[$.defineDataProperty](
  Number.prototype,
  $.abs,
  function () {
    return Math.abs(this.valueOf());
  },
);
