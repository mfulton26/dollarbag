import $ from "💰/$.ts";
import "💰/$/through.ts";
import "💰/Object/$.defineDataProperty.ts";

import "💰/Number/Progression/deps.ts";
import Progression from "💰/Progression.ts";

declare global {
  interface Number {
    [$.through](end: number, step?: number): Progression<number>;
  }
}

Object[$.defineDataProperty](
  Number.prototype,
  $.through,
  function (end, step) {
    return new Progression(this.valueOf(), end, step);
  },
);
