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
  function value(this: number) {
    return this + 1;
  },
);
