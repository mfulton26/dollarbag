import $ from "💰/$.ts";
import "💰/$/to.ts";
import "💰/Object/$.defineDataProperty.ts";

import "💰/BigInt/Progression/deps.ts";
import Progression from "💰/Progression.ts";

declare global {
  interface BigInt {
    [$.to](end: bigint, step?: bigint): Progression<bigint>;
  }
}

Object[$.defineDataProperty](
  BigInt.prototype,
  $.to,
  function (end, step) {
    return new Progression(this.valueOf(), end - 1n, step);
  },
);
