import $ from "💰/$.ts";
import "💰/$/dec.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface Number {
    [$.dec](): number;
  }
}

Object[$.defineDataProperty](
  Number.prototype,
  $.dec,
  function value(this: number) {
    return this - 1;
  },
);
