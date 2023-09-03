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
  function (this: number) {
    return Math.abs(this);
  },
);
