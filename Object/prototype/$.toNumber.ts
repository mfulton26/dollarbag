import $ from "💰/$.ts";
import "💰/$/toNumber.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface Object {
    [$.toNumber](): number;
  }
}

Object[$.defineDataProperty](
  Object.prototype,
  $.toNumber,
  function () {
    try {
      return Number(this);
    } catch {
      return NaN;
    }
  },
);
