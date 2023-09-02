import $ from "💰/$.ts";
import "💰/$/to.ts";
import "💰/Object/$.defineDataProperty.ts";

import "💰/Number/Progression/deps.ts";
import Progression from "💰/Progression.ts";

declare global {
  interface Number {
    [$.to](end: number, step?: number): Progression<number>;
  }
}

Object[$.defineDataProperty](
  Number.prototype,
  $.to,
  function (end, step) {
    return new Progression(this.valueOf(), end - 1, step);
  },
);
