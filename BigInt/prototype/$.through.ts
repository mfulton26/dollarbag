import $ from "💰/$.ts";
import "💰/$/through.ts";
import "💰/Object/$.defineDataProperty.ts";

import "💰/BigInt/Progression/deps.ts";
import Progression from "💰/Progression.ts";

declare global {
  interface BigInt {
    [$.through](end: bigint, step?: bigint): Progression<bigint>;
  }
}

Object[$.defineDataProperty](
  BigInt.prototype,
  $.through,
  function (this: bigint, end, step) {
    return new Progression(this, end, step);
  },
);
